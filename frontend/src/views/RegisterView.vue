<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { login } from '../stores/session'

const router = useRouter()
const form = reactive({ name: '', phone: '', email: '', password: '', confirm: '' })
const error = ref('')

function submit() {
  if (form.password !== form.confirm) {
    error.value = 'Passwords do not match'
    return
  }
  error.value = ''
  login(form.name)
  router.push('/')
}
</script>

<template>
  <main class="wrap narrow">
    <form class="card form" @submit.prevent="submit">
      <h1>Create Account</h1>
      <label>Full name <input v-model="form.name" required /></label>
      <label>Phone <input v-model="form.phone" placeholder="+855 12 345 678" required /></label>
      <label>Email <input type="email" v-model="form.email" required /></label>
      <label>Password <input type="password" v-model="form.password" minlength="8" required /></label>
      <label>Confirm password <input type="password" v-model="form.confirm" required /></label>
      <p v-if="error" class="err">{{ error }}</p>
      <button class="btn primary">Create Account</button>
      <p class="center"><RouterLink to="/login">Already have an account? Login</RouterLink></p>
    </form>
  </main>
</template>
