<script setup>
import { adminBookings } from '../../data/mock'
</script>

<template>
  <h1>All Bookings</h1>
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
