import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('@/views/home/Home')
const Category = () => import('@/views/category/Category')
const Cart = () => import('@/views/cart/Cart')
const Profile = () => import('@/views/profile/Profile')
const Hot = () => import('@/views/home/Hot')
const New = () => import('@/views/home/New')

// 1.安装插件
Vue.use(VueRouter)

// 2.创建路由对象
const routes = [
  {
    path: '',
    redirect: '/home/hot',
  },
  {
    path: '/home',
    component: Home,
    meta: {
      title: '首页',
    },
    children: [
      {
        path: '',
        redirect: 'hot',
      },
      {
        path: 'hot',
        component: Hot,
      },
      {
        path: 'new',
        component: New,
      },
    ]
  },
  {
    path: '/category',
    component: Category,
    meta: {
      title: '分类',
    },
  },
  {
    path: '/cart',
    component: Cart,
    meta: {
      title: '购物车',
    },
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      title: '我的',
    },
  }
]

const router = new VueRouter ({
  routes,
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  if (to.path === from.path) {
    return false
  } else {
    document.title = to.matched[0].meta.title; // document.title = to.meta.title; 
    /* 
      使用matched而不直接使用meta的原因是:'/path'会匹配'/path'与'/path/demo',
      如果只有一级路由时，可以直接使用meta，为了统一书写，这里使用matched。
    */
    next();
  }
})

// 3.导出路由
export default router