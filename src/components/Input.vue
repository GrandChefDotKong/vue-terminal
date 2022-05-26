<template>
  <div>
    <input
      id="inputCommand"
      type="text" 
      v-model="inputCommand"
      @keydown.enter.prevent="addCommand"
      @keydown.arrow-up.prevent="previousCommand"
      @keydown.arrow-down.prevent="nextCommand"
      @keydown.ctrl.c="endProcess"
      autofocus
      autocomplete="off"
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import * as bin from './bin';
import useProccess from '@/composables/useProcess';
import getUser from '@/composables/getUser';

export default defineComponent ({
  name: 'input-command',
  setup() {
    const inputCommand = ref<string>('');
    const historyIndex = ref<number>(0);
    const { user } = getUser();

    const { setCurrentProcess, endCurrentProcess, 
      processHistory, currentProcess } = useProccess();

    const addCommand = () => {

      const now = new Date;

      setCurrentProcess({
        id: Date.UTC(now.getFullYear(), now.getHours(), 
          now.getMinutes(), now.getSeconds(), now.getMilliseconds()),
        input: inputCommand.value,
        process: inputCommand.value,
        args: null,
        userName: user.value?.displayName != null ? user.value.displayName : 'guest',
        isRunning: false
      })
    
      historyIndex.value += 1;
      inputCommand.value = '';
    }

    const commandExist = () => {
      const commands = [...Object.keys(bin)];
      return commands.includes(inputCommand.value);
    }

    const previousCommand = () => {
    }

    const nextCommand = () => {
    }

    const endProcess = () => {
    }
    
    return { inputCommand, addCommand, 
      previousCommand, nextCommand, endProcess }
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
