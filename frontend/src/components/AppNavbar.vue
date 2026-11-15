<script setup>
import { useRoute, useRouter } from 'vue-router'
import { session, logout } from '../stores/session'

const route = useRoute()
const router = useRouter()
const on = (prefix) => (prefix === '/' ? route.path === '/' : route.path.startsWith(prefix))

function doLogout() {
  logout()
  router.push('/')
}
</script>

<template>
  <header class="nav">
    <RouterLink class="logo" to="/">&#128652; BusKH</RouterLink>
    <nav class="links">
      <RouterLink to="/" :class="{ on: on('/') }">Home</RouterLink>
      <RouterLink to="/my-bookings" :class="{ on: on('/my-bookings') }">My Bookings</RouterLink>
      <RouterLink v-if="session.user?.role === 'admin'" to="/admin" :class="{ on: on('/admin') }">Admin</RouterLink>
      <RouterLink v-if="session.user && session.user.role !== 'passenger'" to="/staff" :class="{ on: on('/staff') }">Staff</RouterLink>
    </nav>
    <div class="auth">
      <template v-if="session.user">
        <span class="who">{{ session.user.name }}</span>
        <a href="#" @click.prevent="doLogout">Logout</a>
      </template>
      <template v-else>
        <RouterLink to="/login">Login</RouterLink> / <RouterLink to="/register">Register</RouterLink>
      </template>
    </div>
  </header>
</template>
