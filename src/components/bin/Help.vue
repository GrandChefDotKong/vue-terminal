<template>
  <h3>Available commands: </h3>
  <ul v-if="commands">
    <li v-for="command in commands" :key="command">{{ command }}</li>
  </ul>
</template>

<script lang="ts">
import * as bin from '../bin';
import { defineComponent, ref } from 'vue';
import useProccess from '@/composables/useProccess';


export default defineComponent ({
  name: 'help',
  setup() {
    const commands = ref<Object>([...Object.keys(bin)]);
    const { endProccess } = useProccess();

    endProccess();

    return { commands }
  }
})


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
ul {
    list-style: none;
    padding: 0;
}

li {
    margin: 0;
    margin-bottom: 10px;
}
</style>