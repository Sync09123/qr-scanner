import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children:[
      {
        path:'stream',
        name:'stream',
        component:() =>  import(/* webpackChunkName: "about" */ '../views/Stream.vue')
      },
      {
        path:'drop',
        name:'drop',
        component: () => import(/* webpackChunkName: "about" */ '../views/DropZone.vue')
      },
      {
        path:'upload',
        name:'upload',
        component: () => import(/* webpackChunkName: "about" */ '../views/Upload.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
