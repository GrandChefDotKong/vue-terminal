<template>
  <div class="home">
    <div v-for="h in history" :key="h.id" class="history">
      <shell-prompt :command="h.input" :userName="h.userName" />
      <component class="processus" :is="h.process" :args="h.args" />
    </div>
    <div v-if="!proccessIsRuning" class="commandInputLine">
      <shell-prompt />
      <Input :history="history" /> 
    </div>
    <div v-else>
      Procces runing ...
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { about, helloWorld, banner, help, signup,
date, login, logout, whoami } from '@/components/bin';
import NotFound from '@/components/NotFound.vue';
import Input from '@/components/Input.vue';
import ShellPrompt from '@/components/ShellPrompt.vue';
import useProccess from '@/composables/useProccess';

interface History {
  id: number,
  input: string;
  process: string;
  args: string[] | null //for future update
  userName: string,
}

export default defineComponent ({
  name: 'home',
  components: { about, helloWorld, banner, NotFound, login, 
  logout, signup, Input, ShellPrompt, help, date, whoami },
  setup() {
    const { proccessIsRuning } = useProccess();

    const now = new Date;
    const history = ref<History[]>([{
      id: Date.UTC(now.getFullYear(), now.getHours(), 
      now.getMinutes(), now.getSeconds(), now.getMilliseconds()),
      input: '',
      process: 'banner',
      args: ['1',],
      userName: 'admin',
    }]);
    
    return { history, proccessIsRuning }
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
  }
  .processus {
    margin: 20px 0;
  }

</style>
