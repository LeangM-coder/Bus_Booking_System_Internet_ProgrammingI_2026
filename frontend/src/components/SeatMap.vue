<script setup>
import { computed } from 'vue'

// 2+2 bus layout: seats are named 1A..1D, 2A..2D, ...
const props = defineProps({
  rows: { type: Number, default: 9 },
  taken: { type: Array, default: () => [] },
  modelValue: { type: Array, default: () => [] },
  max: { type: Number, default: 5 },
})
const emit = defineEmits(['update:modelValue'])

const seatRows = computed(() => Array.from({ length: props.rows }, (_, i) => ['A', 'B', 'C', 'D'].map((c) => `${i + 1}${c}`)))

function toggle(seat) {
  if (props.taken.includes(seat)) return
  const list = props.modelValue.includes(seat)
    ? props.modelValue.filter((s) => s !== seat)
    : props.modelValue.length < props.max ? [...props.modelValue, seat] : props.modelValue
  emit('update:modelValue', list)
}
</script>

<template>
  <div class="bus">
    <div class="front"><span class="wheel">&#9678;</span> Driver <span class="door">Door</span></div>
    <div v-for="(row, ri) in seatRows" :key="ri" class="row">
      <template v-for="(seat, si) in row" :key="seat">
        <span v-if="si === 2" class="aisle"></span>
        <button
          type="button"
          class="seat"
          :class="{ taken: taken.includes(seat), sel: modelValue.includes(seat) }"
          :disabled="taken.includes(seat)"
          @click="toggle(seat)"
        >{{ seat }}</button>
      </template>
    </div>
  </div>
</template>
