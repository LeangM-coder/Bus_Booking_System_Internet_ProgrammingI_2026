<script setup>
import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { paymentMethods, tripSummary as trip, ticket } from '../data/mock'

const route = useRoute()
const router = useRouter()
const method = ref(paymentMethods[0])
const seats = computed(() => (route.query.seats ? String(route.query.seats).split(',') : ['3A', '3B']))
const total = computed(() => seats.value.length * trip.price)

// Static: "paying" just goes to the sample ticket. Real payment record is Stage 5.
function pay() {
  router.push(`/ticket/${ticket.ref}`)
}
</script>

<template>
  <main class="wrap narrow">
    <h1>Payment</h1>
    <div class="card">
      <b>Booking Summary</b>
      <dl>
        <dt>Route</dt><dd>{{ trip.from }} &rarr; {{ trip.to }}</dd>
        <dt>Date</dt><dd>{{ trip.date }}</dd>
        <dt>Time</dt><dd>{{ trip.dep }}</dd>
        <dt>Seats</dt><dd>{{ seats.join(', ') }}</dd>
      </dl>
      <div class="total"><span>Total</span><b>${{ total }}</b></div>
    </div>

    <h2>Payment method</h2>
    <label v-for="m in paymentMethods" :key="m" class="card pay">
      <input type="radio" v-model="method" :value="m" /> {{ m }} <span class="tag">Simulated</span>
    </label>
    <p class="muted center">Demo only - no real money is charged.</p>

    <button class="btn primary block" @click="pay">Pay Now</button>
    <button class="btn block" @click="router.back()">Cancel</button>
  </main>
</template>
