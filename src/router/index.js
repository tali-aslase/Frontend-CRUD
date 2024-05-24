import { createRouter, createWebHistory } from 'vue-router'

import SignUpView from '../views/SignUpView.vue'
import HomeView from '../views/HomeView.vue'
import AddView from '../views/AddView.vue'
import UpdateView from '../views/UpdateView.vue'


const routes = [
  {
    path: '/signup',
    name: 'signup',
    component: SignUpView,
  },

  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/update/:id', // Define a dynamic segment for the todo item ID
    name: 'update',
    component: UpdateView,
    props: true // Pass route params as props to the component
  },
  {
    path: '/add',
    name: 'add',
    component: AddView,
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  let isAuthenticated = localStorage.getItem("user-info")
  console.log("checking the value")
  console.log(isAuthenticated);

  if (to.name !== 'signup' && !isAuthenticated) next({ name: 'signup' })
  else next()
})

export default router
