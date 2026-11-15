<script setup>
import { reactive, ref } from 'vue'
import { busTypes, buses as seed } from '../../data/mock'

const buses = ref(seed.map((b) => ({ ...b }))) // local copy: edits last until refresh
const form = reactive({ open: false, index: -1, plate: '', type: 'Standard', seats: 40, status: 'Active' })

function open(index) {
  Object.assign(form, { open: true, index }, index < 0 ? { plate: '', type: 'Standard', seats: 40, status: 'Active' } : buses.value[index])
}

function save() {
  const bus = { plate: form.plate, type: form.type, seats: form.seats, status: form.status }
  if (form.index < 0) buses.value.push(bus)
  else buses.value[form.index] = bus
  form.open = false
}

function toggle(b) {
  b.status = b.status === 'Active' ? 'Inactive' : 'Active'
}
</script>

<template>
  <div class="bar"><h1>Manage Buses</h1><button class="btn primary" @click="open(-1)">+ Add Bus</button></div>
  <div class="split">
    <div class="scroll">
      <table>
        <thead><tr><th>Plate No.</th><th>Bus Type</th><th>Seats</th><th>Status</th><th>Actions</th></tr></thead>
        <tbody>
          <tr v-for="(b, i) in buses" :key="b.plate">
            <td>{{ b.plate }}</td><td>{{ b.type }}</td><td>{{ b.seats }}</td><td>{{ b.status }}</td>
            <td class="nowrap">
              <button class="btn sm" @click="open(i)">Edit</button>
              <button class="btn sm" @click="toggle(b)">{{ b.status === 'Active' ? 'Deactivate' : 'Activate' }}</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <form v-if="form.open" class="card form" @submit.prevent="save">
      <div class="bar"><h3>{{ form.index < 0 ? 'Add Bus' : 'Edit Bus' }}</h3><a href="#" @click.prevent="form.open = false">x</a></div>
      <label>Plate number <input v-model="form.plate" placeholder="e.g. 2AB-1234" required /></label>
      <label>Bus type
        <select v-model="form.type"><option v-for="t in busTypes" :key="t">{{ t }}</option></select>
      </label>
      <label>Total seats <input type="number" min="4" step="4" v-model.number="form.seats" required /></label>
      <label>Status <select v-model="form.status"><option>Active</option><option>Inactive</option></select></label>
      <div class="row2"><button class="btn primary">Save</button><button type="button" class="btn" @click="form.open = false">Cancel</button></div>
    </form>
  </div>
</template>
