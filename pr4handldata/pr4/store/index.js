import Vuex from 'vuex';

const createStore = () => {
    return new Vuex.Store({
        state: {
            loadedPosts: [],
        },
        mutations: {
            setPosts(state,posts){
                state.loadedPosts = posts
            }
        },
        actions: {
            nuxtServerInit(vuexContext, context){
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        vuexContext.commit('setPosts', [
                            {
                              id: "1",
                              thumbnail:
                                "https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg",
                              title: "Hello there!",
                              previewText: "This my first post!",
                            },
                            {
                              id: "2",
                              thumbnail:
                                "https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg",
                              title: "Hello more there!",
                              previewText: "This my first post in my life!",
                            },
                            {
                              id: "3",
                              thumbnail:
                                "https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg",
                              title: "Hi there!",
                              previewText: "Very well!",
                            },
                          ])
                        resolve();
                    }, 1000);
                  })
            },
            setPosts(vuexContext, posts){
                vuexContext.commit('setPosts', posts)
            }
        },
        getters: {
            loadedPosts(state){
                return state.loadedPosts
            }
        }
    })
}

export default createStore