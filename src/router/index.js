import Vue from 'vue'
import Router from 'vue-router'
import WxShare from "../components/WxShare";
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'WxShare',
      component: WxShare
    }
  ]
})
