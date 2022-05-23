<template>
  <h3>About</h3>
  <p>
    This is the about component. <br>
    It is not finished yet
  </p>
</template>

<script lang="ts">
import useProccess from '@/composables/useProccess';
import { defineComponent } from 'vue';

export default defineComponent ({
  name: 'about',
  setup() {

    const { endProccess } = useProccess();

    endProccess();
    
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>