<script setup>
import { adminBookings, overviewStats as s } from '../../data/mock'
</script>

<template>
  <h1>Overview</h1>
  <div class="grid3">
    <div class="card stat"><span>Total Bookings</span><b>{{ s.totalBookings.toLocaleString() }}</b></div>
    <div class="card stat"><span>Revenue</span><b>${{ s.revenue.toLocaleString() }}</b></div>
    <div class="card stat"><span>Active Buses</span><b>{{ s.activeBuses }}</b></div>
  </div>

  <h2>Recent Bookings</h2>
  <div class="scroll">
    <table>
      <thead><tr><th>Ref</th><th>Passenger</th><th>Route</th><th>Date</th><th>Seats</th><th>Amount</th><th>Status</th></tr></thead>
      <tbody>
        <tr v-for="b in adminBookings" :key="b.ref">
          <td>{{ b.ref }}</td><td>{{ b.name }}</td><td>{{ b.route }}</td><td>{{ b.date }}</td><td>{{ b.seats }}</td><td>${{ b.amount }}</td><td>{{ b.status }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
