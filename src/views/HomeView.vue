<template>
  <div class="home" @keydown.ctrl.c="endProcess" tabindex="0">
    <div v-for="h in processHistory" :key="h.id" class="history">
      <shell-prompt :command="h.input" :userName="h.userName" />
      <component class="processus" :is="h.process" :args="h.args" :isRunning="false" />
    </div>
    <div v-if="!currentProcess?.isRunning" class="commandInputLine">
      <shell-prompt />
      <Input /> 
    </div>
    <div v-else>
      <component class="processus" :is="currentProcess.input" :args="currentProcess.args" :isRunning="true" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { about, helloWorld, banner, help, signup,
date, login, logout, whoami } from '@/components/bin';
import NotFound from '@/components/NotFound.vue';
import Input from '@/components/Input.vue';
import ShellPrompt from '@/components/ShellPrompt.vue';
import useProccess from '@/composables/useProcess';

export default defineComponent ({
  name: 'home',
  components: { about, helloWorld, banner, NotFound, login, 
  logout, signup, Input, ShellPrompt, help, date, whoami },
  setup() {
    const { processHistory, currentProcess, endCurrentProcess,
    setCurrentProcess } = useProccess();
    
    const now = new Date;
    
    setCurrentProcess({
      id: Date.UTC(now.getFullYear(), now.getHours(), 
        now.getMinutes(), now.getSeconds(), now.getMilliseconds()),
      input: 'banner',
      process: 'banner',
      args: ['0'],
      userName: 'admin',
      isRunning: true,
    });

    const endProcess = () => {
      endCurrentProcess();
    }

    return { processHistory, currentProcess, endProcess }
  }
})
</script>

<style lang="scss">
  body {
    text-align: left;
  
  }
  .commandInputLine {
    display: flex;
    flex-direction: row;
  }
  .home {
    padding-top: 24px;
    min-height: 100%;
  }
  .processus {
    margin: 20px 0;
  }

</style>
