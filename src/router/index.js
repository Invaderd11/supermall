import Vue from "vue";
import VueRouter from "vue-router";


//在vue-router中，这种方式导入会使js打包文件过大不推荐，推荐 懒加载 方式
// import Home from '../views/home/Home'
// import Cart from '../views/cart/Cart'
// import Category from '../views/category/Category'
// import Profile from '../views/profile/Profile'

//懒加载
const Home = () => import('../views/home/Home')
const Cart = () => import('../views/cart/Cart')
const Category = () => import('../views/category/Category')
const Profile = () => import('../views/profile/Profile')

// 1、安装插件
Vue.use(VueRouter)


const routes = [
  {
    path: '' ,
    redirect: '/home'
  },
  {
    path: '/home' ,
    component: Home
  },
  {
    path: '/cart' ,
    component: Cart
  },
  {
    path: '/category' ,
    component: Category
  },
  {
    path: '/profile' ,
    component: Profile
  }
]
// 2、创建route
const router = new VueRouter({
  routes,
  mode: 'history'
})

// 3、导出route
export default router



