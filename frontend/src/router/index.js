import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'home', component: () => import('../views/HomeView.vue') },
  { path: '/login', name: 'login', component: () => import('../views/LoginView.vue') },
  { path: '/register', name: 'register', component: () => import('../views/RegisterView.vue') },
  { path: '/search', name: 'search', component: () => import('../views/SearchResultsView.vue') },
  { path: '/trips/:id/seats', name: 'seats', component: () => import('../views/SeatSelectionView.vue') },
  { path: '/payment', name: 'payment', component: () => import('../views/PaymentView.vue') },
  { path: '/ticket/:ref', name: 'ticket', component: () => import('../views/TicketView.vue') },
  { path: '/my-bookings', name: 'my-bookings', component: () => import('../views/MyBookingsView.vue') },
  {
    path: '/admin',
    component: () => import('../views/admin/AdminLayout.vue'),
    children: [
      { path: '', name: 'admin-overview', component: () => import('../views/admin/AdminOverviewView.vue') },
      { path: 'buses', name: 'admin-buses', component: () => import('../views/admin/AdminBusesView.vue') },
    ],
  },
]

export default createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: () => ({ top: 0 }),
})
