<script setup>
import { ref } from 'vue'
import { passengers, staffTrips, validRefs } from '../data/mock'

const selected = ref(staffTrips[0].id)
const ref_ = ref('')
const result = ref(null) // null | 'valid' | 'invalid'

function check() {
  result.value = validRefs.includes(ref_.value.trim().toUpperCase()) ? 'valid' : 'invalid'
}
</script>

<template>
  <main class="wrap">
    <h1>My Assigned Trips (today)</h1>
    <div class="grid3">
      <button v-for="t in staffTrips" :key="t.id" class="card tripbtn" :class="{ on: selected === t.id }" @click="selected = t.id">
        <b>{{ t.dep }} &nbsp; {{ t.route }}</b>
        <div class="muted">Bus {{ t.bus }}</div>
      </button>
    </div>

    <h2>Passengers</h2>
    <div class="scroll">
      <table>
        <thead><tr><th>Seat</th><th>Name</th><th>Status</th></tr></thead>
        <tbody>
          <tr v-for="p in passengers" :key="p.seat"><td>{{ p.seat }}</td><td>{{ p.name }}</td><td>{{ p.status }}</td></tr>
        </tbody>
      </table>
    </div>

    <h2>Check Ticket</h2>
    <form class="check" @submit.prevent="check">
      <input v-model="ref_" placeholder="Enter booking reference" required />
      <button class="btn primary">Check</button>
    </form>
    <div v-if="result" class="card result" :class="result">
      <b>{{ result === 'valid' ? '✓ VALID' : '✗ INVALID' }}</b>
      <div>{{ result === 'valid' ? 'Ticket found and confirmed.' : 'Reference not found or cancelled.' }}</div>
    </div>
    <p class="muted">Sample references to try: BK-0042, BK-261116-0042</p>
  </main>
</template>
