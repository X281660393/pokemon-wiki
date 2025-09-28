import {
  createRouter,
  createWebHashHistory,
  // createWebHistory
} from 'vue-router'
import pokemonRouter from './pokemon/index.js'
import homeRouter from './home/index.js'
import moveRouter from './move/index.js'



const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/',
    component: () => import('@/views/Framework/index.vue'),
    children: [
      homeRouter,
      pokemonRouter,
      moveRouter
    ]
  },
  // 404 路由
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/views/Framework/index.vue'),
    children: [
      {
        path: '/:pathMatch(.*)*',
        component: () => import('@/views/Test/index.vue'),
      }

    ]
  }
]
export const router = createRouter({
  // history: createWebHistory(),
  history: createWebHashHistory(),
  routes,
});
export default router;
