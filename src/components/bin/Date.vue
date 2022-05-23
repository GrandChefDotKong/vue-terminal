<template>
    <div class="date-container">
      Today is : {{ today.toDateString() }}
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import useProccess from '@/composables/useProccess';

export default defineComponent ({
  name: 'date',
  setup() {
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }
    const today = new Date();

    const { endProccess } = useProccess();

    endProccess();

    return { today }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>