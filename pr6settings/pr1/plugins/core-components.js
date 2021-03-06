import Vue from 'vue'
import PostList from '@/components/Posts/PostList'
import AppButton from '@/components/UI/AppButton'
import AppControlInput from '@/components/UI/AppControlInput'


//реистрируем компоненты глобально - 
// нужно также зарегистрировать этот плагин в nuxt.config.js
Vue.component('AppButton', AppButton)
Vue.component('AppControlInput', AppControlInput)
Vue.component('PostList', PostList)