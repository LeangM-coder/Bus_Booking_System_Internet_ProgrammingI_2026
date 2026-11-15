<script setup>
import { computed } from 'vue'
import { adminBookings, revenueByDay } from '../../data/mock'

const max = computed(() => Math.max(...revenueByDay.map((d) => d.amount)))
const total = computed(() => adminBookings.filter((b) => b.status === 'Confirmed').reduce((sum, b) => sum + b.amount, 0))
</script>

<template>
  <h1>Reports</h1>
  <div class="filter">From <input type="date" /> To <input type="date" /> <button class="btn primary" disabled title="Filtering needs real data">Apply</button></div>

  <div class="card">
    <b>Revenue (USD) per day</b>
    <div class="chart">
      <div v-for="d in revenueByDay" :key="d.day" class="col">
        <span class="val">${{ d.amount }}</span>
        <div class="barv" :style="{ height: (d.amount / max) * 150 + 'px' }"></div>
        <small>{{ d.day }}</small>
      </div>
    </div>
  </div>

  <div class="bar"><h2>Bookings</h2><button class="btn primary" disabled title="Export comes with the backend">Export</button></div>
  <div class="scroll">
    <table>
      <thead><tr><th>Ref</th><th>Passenger</th><th>Route</th><th>Date</th><th>Amount</th><th>Status</th></tr></thead>
      <tbody>
        <tr v-for="b in adminBookings" :key="b.ref">
          <td>{{ b.ref }}</td><td>{{ b.name }}</td><td>{{ b.route }}</td><td>{{ b.date }}</td><td>${{ b.amount }}</td><td>{{ b.status }}</td>
        </tr>
      </tbody>
    </table>
  </div>
  <p class="right"><b>Total revenue (confirmed): ${{ total }}</b></p>
</template>
