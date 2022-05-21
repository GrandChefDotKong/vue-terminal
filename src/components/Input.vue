<template>
  <div>
    <input 
        type="text" 
        v-model="inputCommand"
        @keydown.enter.prevent="addCommand"
        @keydown.arrow-up.prevent="previousCommand"
        @keydown.arrow-down.prevent="nextCommand"
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import * as bin from './bin';

export default defineComponent ({
  name: 'input-command',
  props: ['history'],
  setup(props) {
    const inputCommand = ref<string>('');
    const historyIndex = ref<number>(props.history.length);

    const addCommand = () => {
    
      if(!inputCommand.value) return

      if(inputCommand.value === 'clear') {
        props.history.splice(0, props.history.length);
        historyIndex.value = 0;
        inputCommand.value = '';
        return;
      }

      if(!commandExist()) {
          props.history.push('not-found');
          historyIndex.value += 1;
          inputCommand.value = '';
          return;
      }

      props.history.push(inputCommand.value);
      historyIndex.value += 1;
      inputCommand.value = '';
    }

    const commandExist = () => {
        const commands = [...Object.keys(bin)];

        return commands.includes(inputCommand.value);
    }

    const previousCommand = () => {
      if(historyIndex.value - 1 < 0) return;

      historyIndex.value -= 1;
      inputCommand.value = props.history[historyIndex.value];
    }

    const nextCommand = () => {
      if(historyIndex.value + 1 > props.history.length) return;

      historyIndex.value += 1;
      inputCommand.value = props.history[historyIndex.value];
    }
    
    return { inputCommand, addCommand, previousCommand, nextCommand }
  }  
})
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
 input {
    border: none;

    :focus {
      outline: none;
    }
 }
 *:focus {
   outline: none;
 }
</style>
