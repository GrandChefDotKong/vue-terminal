<template>
    <div class="date-container">
      Today is : {{ today.toDateString() }}
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import useProccess from '@/composables/useProcess';

export default defineComponent ({
  name: 'date',
  setup() {
    
    const today = new Date();

    const { endCurrentProcess } = useProccess();

    endCurrentProcess();

    return { today }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>