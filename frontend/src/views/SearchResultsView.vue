<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { trips } from '../data/mock'

const route = useRoute()
// Static: the same sample trips are shown for every search.
const from = computed(() => route.query.from || 'Phnom Penh')
const to = computed(() => route.query.to || 'Siem Reap')
const date = computed(() => route.query.date || 'Mon, 16 Nov 2026')
</script>

<template>
  <main class="wrap">
    <div class="summary card">
      <div>
        <b>{{ from }} &rarr; {{ to }}</b>
        <div class="muted">{{ date }} &middot; 1+ passenger</div>
      </div>
      <RouterLink to="/">Change</RouterLink>
    </div>
    <p class="muted">{{ trips.length }} trips found</p>

    <div v-for="t in trips" :key="t.id" class="card trip">
      <div class="times">
        <div><small>Departure</small><b>{{ t.dep }}</b></div>
        <span class="arrow">&rarr;</span>
        <div><small>Arrival</small><b>{{ t.arr }}</b></div>
      </div>
      <div class="meta"><span class="tag">{{ t.type }}</span><span>{{ t.free }} seats free</span></div>
      <div class="price">${{ t.price }}<small> / seat</small></div>
      <RouterLink v-if="t.free > 0" class="btn primary" :to="`/trips/${t.id}/seats`">Select Seats</RouterLink>
      <button v-else class="btn" disabled>Sold out</button>
    </div>
  </main>
</template>
