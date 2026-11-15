<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const menu = [
  { label: 'Overview', to: '/admin', match: ['/admin'] },
  { label: 'Buses', to: '/admin/buses', match: ['/admin/buses'] },
  { label: 'Routes', to: '/admin/routes', match: ['/admin/routes', '/admin/schedules'] },
  { label: 'Schedules', to: '/admin/schedules', match: ['/admin/routes', '/admin/schedules'] },
  { label: 'Bookings', to: '/admin/bookings', match: ['/admin/bookings'] },
  { label: 'Reports', to: '/admin/reports', match: ['/admin/reports'] },
]
</script>

<template>
  <div class="admin">
    <aside class="side">
      <RouterLink v-for="m in menu" :key="m.label" :to="m.to" :class="{ on: m.match.includes(route.path) }">{{ m.label }}</RouterLink>
    </aside>
    <section class="adminmain">
      <RouterView />
    </section>
  </div>
</template>
