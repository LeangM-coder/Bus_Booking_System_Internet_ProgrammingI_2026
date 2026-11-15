<script setup>
import { reactive, ref } from 'vue'
import { buses, cities, schedules as seed } from '../../data/mock'

const rows = ref(seed.map((s) => ({ ...s })))
const empty = () => ({ index: -1, from: '', to: '', bus: '', date: '', time: '', price: null })
const form = reactive(empty())
const error = ref('')

function edit(i) {
  const [from, to] = rows.value[i].route.split(' → ')
  Object.assign(form, { index: i, from, to, bus: rows.value[i].bus, date: '', time: rows.value[i].time, price: rows.value[i].price })
}

function save() {
  if (form.from === form.to) {
    error.value = 'From and To must be different'
    return
  }
  error.value = ''
  const row = { route: `${form.from} → ${form.to}`, time: form.time, price: form.price, bus: form.bus }
  if (form.index < 0) rows.value.push(row)
  else rows.value[form.index] = row
  Object.assign(form, empty())
}
</script>

<template>
  <h1>Routes &amp; Schedules</h1>
  <div class="split">
    <div class="scroll">
      <table>
        <thead><tr><th>Route</th><th>Departure</th><th>Price</th><th>Bus</th><th></th></tr></thead>
        <tbody>
          <tr v-for="(s, i) in rows" :key="i">
            <td>{{ s.route }}</td><td>{{ s.time }}</td><td>${{ s.price }}</td><td>{{ s.bus }}</td>
            <td><button class="btn sm" @click="edit(i)">Edit</button></td>
          </tr>
        </tbody>
      </table>
    </div>

    <form class="card form" @submit.prevent="save">
      <h3>{{ form.index < 0 ? 'Add Schedule' : 'Edit Schedule' }}</h3>
      <label>From <select v-model="form.from" required><option value="" disabled>Select city</option><option v-for="c in cities" :key="c">{{ c }}</option></select></label>
      <label>To <select v-model="form.to" required><option value="" disabled>Select city</option><option v-for="c in cities" :key="c">{{ c }}</option></select></label>
      <label>Bus <select v-model="form.bus" required><option value="" disabled>Select bus</option><option v-for="b in buses.filter((x) => x.status === 'Active')" :key="b.plate">{{ b.plate }}</option></select></label>
      <label>Date <input type="date" v-model="form.date" /></label>
      <label>Time <input type="time" v-model="form.time" required /></label>
      <label>Price (USD) <input type="number" min="1" v-model.number="form.price" required /></label>
      <p v-if="error" class="err">{{ error }}</p>
      <button class="btn primary block">Save Schedule</button>
    </form>
  </div>
</template>
