import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ShoppingListView from '../views/ShoppingListView.vue'
import InventoryView from '../views/InventoryView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/inventory'
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
      mode: history,
      children: [
        {
          path: "/inventory",
          name: "inventory",
          component: InventoryView
        },
        {
          path: "/shoppinglist",
          name: "shoppinglist",
          component: ShoppingListView
        }
      ]
    },
  ]
})

export default router
