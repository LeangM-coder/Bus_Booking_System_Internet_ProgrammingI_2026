<script setup>
import { useRoute } from 'vue-router'
import { ticket } from '../data/mock'

const route = useRoute()
</script>

<template>
  <main class="wrap narrow">
    <h2 class="center">Payment successful!</h2>
    <div class="card ticket">
      <h3 class="center">BusKH E-TICKET</h3>
      <dl>
        <dt>Passenger</dt><dd>{{ ticket.name }}</dd>
        <dt>Route</dt><dd>{{ ticket.from }} &rarr; {{ ticket.to }}</dd>
        <dt>Date</dt><dd>{{ ticket.date }}</dd>
        <dt>Departure</dt><dd>{{ ticket.dep }}</dd>
        <dt>Seat(s)</dt><dd>{{ ticket.seats.join(', ') }}</dd>
        <dt>Booking Ref</dt><dd>{{ route.params.ref }}</dd>
      </dl>
      <div class="tear"></div>
      <div class="qr">
        <div class="ph big">QR code</div>
        <small class="muted">Show this QR to the bus staff</small>
      </div>
    </div>
    <button class="btn primary block" disabled title="Coming later">Download</button>
    <RouterLink class="btn block" to="/">Back to Home</RouterLink>
  </main>
</template>
