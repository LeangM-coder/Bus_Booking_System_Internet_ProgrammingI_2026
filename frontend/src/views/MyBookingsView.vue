<script setup>
import { computed, ref } from 'vue'
import { myBookings } from '../data/mock'

const filter = ref('All')
const list = ref(myBookings.map((b) => ({ ...b }))) // local copy so Cancel can change the screen

const shown = computed(() =>
  list.value.filter((b) => filter.value === 'All' || (filter.value === 'Cancelled' ? b.status === 'Cancelled' : b.status === 'Confirmed' && b.canCancel)),
)

function cancel(b) {
  if (confirm(`Cancel booking ${b.ref}?`)) {
    b.status = 'Cancelled'
    b.canCancel = false
  }
}
</script>

<template>
  <main class="wrap">
    <h1>My Bookings</h1>
    <div class="tabs">
      <button v-for="t in ['All', 'Upcoming', 'Cancelled']" :key="t" :class="{ on: filter === t }" @click="filter = t">{{ t }}</button>
    </div>

    <div v-for="b in shown" :key="b.ref" class="card booking" :class="{ cancelled: b.status === 'Cancelled' }">
      <div><b>{{ b.ref }}</b><span class="tag" :class="{ solid: b.status === 'Confirmed' }">{{ b.status }}</span></div>
      <div>{{ b.route }}</div>
      <div class="muted">{{ b.when }} &middot; Seats {{ b.seats }}</div>
      <div class="actions">
        <RouterLink class="btn" :to="`/ticket/${b.ref}`">View Ticket</RouterLink>
        <button v-if="b.canCancel" class="btn" @click="cancel(b)">Cancel</button>
      </div>
    </div>
    <p class="muted">Cancel is only shown for Confirmed bookings that have not departed yet.</p>
  </main>
</template>
