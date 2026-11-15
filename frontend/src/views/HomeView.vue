<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { cities, popularRoutes } from '../data/mock'

const router = useRouter()
const form = reactive({ from: '', to: '', date: '' })
const error = ref('')

function search() {
  if (form.from === form.to) {
    error.value = 'Please choose two different cities'
    return
  }
  error.value = ''
  router.push({ path: '/search', query: { ...form } })
}
</script>

<template>
  <main>
    <section class="hero">
      <h1>Book your bus ticket</h1>
      <p>Travel across Cambodia, easy!</p>
      <form class="card search" @submit.prevent="search">
        <label>From
          <select v-model="form.from" required>
            <option value="" disabled>Select city</option>
            <option v-for="c in cities" :key="c">{{ c }}</option>
          </select>
        </label>
        <label>To
          <select v-model="form.to" required>
            <option value="" disabled>Select city</option>
            <option v-for="c in cities" :key="c">{{ c }}</option>
          </select>
        </label>
        <label>Date <input type="date" v-model="form.date" required /></label>
        <button class="btn primary">Search Trips</button>
        <p v-if="error" class="err">{{ error }}</p>
      </form>
    </section>

    <section class="wrap">
      <h2>Popular Routes</h2>
      <div class="grid3">
        <div v-for="r in popularRoutes" :key="r.to" class="card route">
          <div class="ph">image</div>
          <div>
            <b>Phnom Penh &rarr; {{ r.to }}</b>
            <div class="muted">{{ r.hours }} hrs &middot; from ${{ r.price }}</div>
            <RouterLink :to="{ path: '/search', query: { from: 'Phnom Penh', to: r.to } }">View trips</RouterLink>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
