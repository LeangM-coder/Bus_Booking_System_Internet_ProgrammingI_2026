// Fake login state for the static screens. Real auth (JWT) comes in Stage 3.
import { reactive } from 'vue'

export const session = reactive({ user: null }) // { name, role: 'passenger' | 'admin' | 'staff' }

export function login(name, role = 'passenger') {
  session.user = { name, role }
}

export function logout() {
  session.user = null
}
