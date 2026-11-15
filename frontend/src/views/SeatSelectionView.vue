<script setup>
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import SeatMap from '../components/SeatMap.vue'
import { seatMap, tripSummary as trip } from '../data/mock'

const router = useRouter()
const chosen = ref([])
const total = computed(() => chosen.value.length * trip.price)

function remove(seat) {
  chosen.value = chosen.value.filter((s) => s !== seat)
}

function next() {
  router.push({ path: '/payment', query: { seats: chosen.value.join(',') } })
}
</script>

<template>
  <main class="wrap">
    <div class="summary card">
      <div>
        <b>{{ trip.from }} &rarr; {{ trip.to }}</b>
        <div class="muted">{{ trip.date }} &middot; {{ trip.dep }} &middot; {{ trip.type }} &middot; ${{ trip.price }}/seat</div>
      </div>
    </div>

    <div class="seatpage">
      <SeatMap v-model="chosen" :rows="seatMap.rows" :taken="seatMap.taken" :max="seatMap.maxSeats" />
      <aside>
        <div class="legend">
          <span><i class="seat mini"></i>Available</span>
          <span><i class="seat mini sel"></i>Selected</span>
          <span><i class="seat mini taken"></i>Taken</span>
        </div>
        <div class="card">
          <b>Selected seats</b>
          <div class="chips">
            <span v-for="s in chosen" :key="s" class="tag">{{ s }} <a href="#" @click.prevent="remove(s)">x</a></span>
            <span v-if="!chosen.length" class="muted">None yet (max {{ seatMap.maxSeats }})</span>
          </div>
          <div class="muted">{{ chosen.length }} seat(s) x ${{ trip.price }}</div>
          <div class="total"><span>Total</span><b>${{ total }}</b></div>
        </div>
        <button class="btn primary block" :disabled="!chosen.length" @click="next">Continue to Payment</button>
      </aside>
    </div>
  </main>
</template>
