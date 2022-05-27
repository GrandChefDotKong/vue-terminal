<template>
  <div>
    <input
      id="inputCommand"
      type="text" 
      v-model="inputCommand"
      @keydown.enter.prevent="addCommand"
      @keydown.arrow-up.prevent="previousCommand"
      @keydown.arrow-down.prevent="nextCommand"
      autofocus
      autocomplete="off"
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import useProccess from '@/composables/useProcess';
import getUser from '@/composables/getUser';
import Process from '@/types/Process';

export default defineComponent ({
  name: 'input-command',
  setup() {
    const { setCurrentProcess, deleteProcessHistory, 
      processHistory, currentProcess } = useProccess();

    const inputCommand = ref<string>('');
    const historyIndex = ref<number>(processHistory.value.length);
    const { user } = getUser();

    const addCommand = () => {

      if(!inputCommand.value) return; 
      if(currentProcess.value) return;

      if(inputCommand.value === 'clear') {
        deleteProcessHistory();
        historyIndex.value = 0;
        inputCommand.value = '';
        return;
      }

      const now = new Date;

      const process: Process = {
        id: Date.UTC(now.getFullYear(), now.getHours(), 
          now.getMinutes(), now.getSeconds(), now.getMilliseconds()),
        input: inputCommand.value,
        process: inputCommand.value,
        args: null,
        userName: user.value?.displayName != null ? user.value.displayName : 'guest',
        isRunning: false
      }

      setCurrentProcess(process)
    
      historyIndex.value += 1;
      inputCommand.value = '';
    }

    const previousCommand = () => {
      if(historyIndex.value - 1 > 0) --historyIndex.value;
      inputCommand.value = processHistory.value?.[historyIndex.value].input;
    }

    const nextCommand = () => {
      if(historyIndex.value + 1 > processHistory.value.length) return;

      ++historyIndex.value;

      if(historyIndex.value === processHistory.value.length) {
        inputCommand.value = '';
        return;
      }

      inputCommand.value = processHistory.value?.[historyIndex.value].input;
    }
    
    return { inputCommand, addCommand, 
      previousCommand, nextCommand }
  } 
})
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  input {
    border: none;
    background-color: inherit;
    color: inherit;
    caret-color: var(--parimary-color);
    margin-left: 4px;
    font-size: large;

    :focus {
      outline: none;
    }
  }
  *:focus {
    outline: none;
    border-bottom: 1px solid var(--primary-color)
  }
</style>
