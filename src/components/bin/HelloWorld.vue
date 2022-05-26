<template>
  <h4>Hello World</h4>
  <p>
    std::cout &lt;&lt; 'Hello World' &lt;&lt; std::endl;
  </p>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import useProccess from '@/composables/useProcess';

export default defineComponent ({
  name: 'helloWorld',
  setup() {

    const { endCurrentProcess } = useProccess();

    endCurrentProcess();
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
