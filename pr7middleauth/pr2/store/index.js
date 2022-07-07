import Vuex from "vuex";
import axios from "axios";
import Cookie from "js-cookie";

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: [],
      authToken: null,
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts;
      },
      addPost(state, post) {
        state.loadedPosts.push(post);
      },
      editPost(state, editedPost) {
        const postIndex = state.loadedPosts.findIndex(
          (post) => post.id === editedPost.id
        );
        state.loadedPosts[postIndex] = editedPost;
      },
      setToken(state, token) {
        state.authToken = token;
      },
      clearAuthToken(state) {
        state.authToken = null;
      },
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return context.app.$axios
          .$get(process.env.baseUrl + "/posts.json")
          .then((res) => {
            const postsArray = [];
            for (const key in res) {
              postsArray.push({ ...res[key], id: key });
            }
            vuexContext.commit("setPosts", postsArray);
          })
          .catch((e) => context.error(e));
      },
      addPost(vuexContext, post) {
        const createdPost = {
          ...post,
          updatedDate: new Date(),
        };
        return axios
          .post(
            process.env.baseUrl +
              "/posts.json?auth=" +
              vuexContext.state.authToken,
            createdPost
          )
          .then((result) => {
            vuexContext.commit("addPost", {
              ...createdPost,
              id: result.data.name,
            });
          })
          .catch((e) => console.log(e));
      },
      editPost(vuexContext, editedPost) {
        return this.$axios
          .$put(
            process.env.baseUrl +
              "/posts/" +
              editedPost.id +
              ".json?auth=" +
              vuexContext.state.authToken,
            editedPost
          )
          .then((res) => {
            vuexContext.commit("editPost", editedPost);
          })
          .catch((e) => console.log(e));
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit("setPosts", posts);
      },
      authenticateUser(vuexContext, payload) {
        const url = !payload.isLogin
          ? process.env.authSignUpUrl
          : process.env.authSignInUrl;
        return this.$axios
          .$post(url, {
            email: payload.email,
            password: payload.password,
            returnSecureToken: true,
          })
          .then((res) => {
            vuexContext.commit("setToken", res.idToken);
            localStorage.setItem("token", res.idToken);
            localStorage.setItem(
              "tokenExpiration",
              new Date().getTime() + +res.expiresIn * 1000
            );
            Cookie.set("jwt", res.idToken);
            Cookie.set(
              "expirationDate",
              new Date().getTime() + +res.expiresIn * 1000
            );
          })
          .catch((err) => console.log("err", err));
      },
      initAuth(vuexContext, req) {
        let token, expirationDate;
        if (req) {
          if (!req.headers.cookie) {
            return;
          }
          const jwtCookie = req.headers.cookie
            .split(";")
            .find((c) => c.trim().startsWith("jwt="));
          if (!jwtCookie) {
            return;
          }
          const tokenValue = jwtCookie.split("=")[1];
          const expirationDateCookie = req.headers.cookie
            .split(";")
            .find((c) => c.trim().startsWith("expirationDate="));
          if (!expirationDateCookie) {
            return;
          }
          const expirationDateValue = expirationDateCookie.split("=")[1];
          token = tokenValue;
          expirationDate = expirationDateValue;
        } else {
          token = localStorage.getItem("token");
          expirationDate = localStorage.getItem("tokenExpiration");
        }
        if (new Date() > +expirationDate || !token) {
          vuexContext.dispatch("logout");
          return;
        }
        vuexContext.commit("setToken", token);
      },
      logout(vuexContext) {
        vuexContext.commit("clearToken");
        Cookie.remove("jwt");
        Cookie.remove("expirationDate");
        vuexContext.commit("setPosts", []);
        if (process.client) {
          localStorage.removeItem("token");
          localStorage.removeItem("tokenExpiration");
        }
      },
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts;
      },
      isAuthenticated(state) {
        return !!state.authToken;
      },
    },
  });
};

export default createStore;
