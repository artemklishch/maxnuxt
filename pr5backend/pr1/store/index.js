import Vuex from 'vuex';
import axios from 'axios'
import { BASE_URL } from '@/static/constants'

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
               return axios.get(BASE_URL + '/posts.json')
                // .then(data => {
                //   const postsList = Object.entries(data.data).map(item => ({...item[1], id: item[0]}))
                //   vuexContext.commit('setPosts', postsList)
                // })
                .then(response => {
                  const postsList = [];
                  for(const key in response.data){
                    postsList.push({...response.data[key], id: key})
                  }
                  vuexContext.commit('setPosts', postsList)
                })
                .catch(err => context.error(err))
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