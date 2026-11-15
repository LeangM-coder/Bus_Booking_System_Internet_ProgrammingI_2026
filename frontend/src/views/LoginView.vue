<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { login } from '../stores/session'

const router = useRouter()
const form = reactive({ email: '', password: '', demoRole: 'passenger' })

// Static screen: any email/password "works". Real login (JWT) is Stage 3.
function submit() {
  login(form.email.split('@')[0], form.demoRole)
  router.push(form.demoRole === 'admin' ? '/admin' : form.demoRole === 'staff' ? '/staff' : '/')
}
</script>

<template>
  <main class="wrap narrow">
    <form class="card form" @submit.prevent="submit">
      <h1>Login</h1>
      <label>Email <input type="email" v-model="form.email" placeholder="you@email.com" required /></label>
      <label>Password <input type="password" v-model="form.password" placeholder="********" required /></label>
      <button class="btn primary">Login</button>
      <p class="center"><RouterLink to="/register">No account? Register</RouterLink></p>
      <label class="hint">Demo only - sign in as
        <select v-model="form.demoRole">
          <option value="passenger">Passenger</option>
          <option value="admin">Admin</option>
          <option value="staff">Bus staff</option>
        </select>
      </label>
    </form>
  </main>
</template>
