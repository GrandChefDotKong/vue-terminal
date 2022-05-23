<template>
  <div>
    <input
      id="inputCommand"
      type="text" 
      ref="filter"
      v-model="inputCommand"
      @keydown.enter.prevent="addCommand"
      @keydown.arrow-up.prevent="previousCommand"
      @keydown.arrow-down.prevent="nextCommand"
      @keydown.ctrl.c="deleteHistory"
      autofocus
      autocomplete="off"
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import * as bin from './bin';
import useProccess from '@/composables/useProccess';

export default defineComponent ({
  name: 'input-command',
  props: ['history'],
  setup(props) {
    const inputCommand = ref<string>('');
    const historyIndex = ref<number>(props.history.length);
    const filter = ref(null);

    const { startProccess } = useProccess();

    const addCommand = () => {
    
      if(!inputCommand.value) return

      if(inputCommand.value === 'clear') {
        deleteHistory();
        return;
      }
      const now = new Date;

      if(!commandExist()) {
        props.history.push({
          id: Date.UTC(now.getFullYear(), now.getHours(), 
            now.getMinutes(), now.getSeconds(), now.getMilliseconds()),
          input: inputCommand.value,
          process: 'not-found',
          arg: null,
        });

        historyIndex.value += 1;
        inputCommand.value = '';
        return;
      }

      startProccess();

      props.history.push({
        id: Date.UTC(now.getFullYear(), now.getHours(), 
          now.getMinutes(), now.getSeconds(), now.getMilliseconds()),
        input: inputCommand.value,
        process: inputCommand.value,
        arg: null,
      });
      historyIndex.value += 1;
      inputCommand.value = '';
    }

    const commandExist = () => {
      const commands = [...Object.keys(bin)];

      return commands.includes(inputCommand.value);
    }

    const deleteHistory = () => {
      props.history.splice(0, props.history.length);
      historyIndex.value = 0;
      inputCommand.value = '';
    }

    const previousCommand = () => {
      if(historyIndex.value - 1 < 0) return;

      historyIndex.value -= 1;
      inputCommand.value = props.history[historyIndex.value].input;
    }

    const nextCommand = () => {
      if(historyIndex.value + 1 > props.history.length) return;

      historyIndex.value += 1;
      inputCommand.value = props.history[historyIndex.value].input;
    }

    const onBlur = (evt:any) => {
      //filter.value?.focus();
    }
    
    return { inputCommand, filter, addCommand, 
      previousCommand, nextCommand, onBlur, deleteHistory }
  } 
})
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  input {
    border: none;
    background-color: inherit;
    color: inherit;

    :focus {
      outline: none;
    }
  }
  *:focus {
    outline: none;
    border-bottom: 1px solid var(--primary-color)
  }
</style>
