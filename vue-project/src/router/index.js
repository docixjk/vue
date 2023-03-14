import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import Compu from '../components/ComputedExam.vue'
import DataBinding from '../components/DataBindingList.vue'
import EventClick from '../components/EventClick.vue'
import JinjuExam from '../components/JinjuExam.vue'
import Kimhae from '../components/KimHae.vue'
import Movie from '../components/MovieBox.vue'
import FineDust from '../components/FineDust.vue'

const routes = [
  {
    path: '/FineDust',
    name: 'FineDust',
    component: FineDust
  },
  {
    path: '/MovieBox',
    name: 'MovieBox',
    component: Movie
  },
  {
    path: '/Kimhae',
    name: 'Kimhae',
    component: Kimhae
  },
  {
    path: '/JinjuExam',
    name: 'JinjuExam',
    component: JinjuExam
  },
  {
    path: '/EventClick',
    name: 'EventClick',
    component: EventClick
  },
  {
    path: '/DataBinding',
    name: 'DataBinding',
    component: DataBinding
  },
  {
    path: '/',
    name: 'home', // url을 부르는 가명
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/computedExam',
    name: 'computedExam',
    component: Compu
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
