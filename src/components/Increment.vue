<template>
  <div>
    <button @click='increment'>Increment +1</button>
    <button @click='decrement'>Decrement -1</button>
    <button v-on:click="incrementCounterBy(2)">increment by 2</button>
  </div>
</template>
<script>

import { incrementCounter, decrementCounter, incrementCounterBy, setToInitial } from '../vuex/actions'
export default {
  vuex: {
    actions: {
      setToInitial,
      increment: incrementCounter,
      decrement: decrementCounter,
      incrementCounterBy
    }
  },
  created() {
    this.setToInitial(10)
  }
}
</script>
