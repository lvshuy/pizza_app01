import Vue from 'vue'
import App from './App.vue'
import Home from './components/Home'
import Menu from './components/Menu'
import Admin from './components/Admin'
import About from './components/about/About'
import Login from './components/Login'
import Register from './components/Register'

Vue.use(VueRouter);

const routes = [
	{path:'/',name:"homeLink",components:Home},
  {path:'/menu',name:'menuLink',component:Menu},
  {path:'/admin',name:'adminLink',component:Admin},
  {path:'/about',name:'aboutLink',component:About
  {path:'/login',name:'loginLink',component:Login},
  {path:'/register',name:'registerLink',component:Register},
  {path:'*',redirect:'/'}
]

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
