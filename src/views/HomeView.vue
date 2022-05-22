<template>
  <div class="home">
    <div v-for="h in history" :key="h.id">
      <shell-prompt :command="h.input" />
      <component :is="h.process" />
    </div>
    <div class="commandInputLine">
      <shell-prompt />
      <Input :history="history" /> 
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { about, helloWorld, banner, help, date, login } from '@/components/bin';
import NotFound from '@/components/NotFound.vue';
import Input from '@/components/Input.vue';
import ShellPrompt from '@/components/ShellPrompt.vue';

interface History {
  id: number,
  input: string;
  process: string;
  args: string[] | null //for future update
}

export default defineComponent ({
  name: 'home',
  components: { about, helloWorld, banner, NotFound, login,
  Input, ShellPrompt, help, date },
  setup() {
    const now = new Date;
    const history = ref<History[]>([{
      id: Date.UTC(now.getFullYear(), now.getHours(), 
      now.getMinutes(), now.getSeconds(), now.getMilliseconds()),
      input: '',
      process: 'banner',
      args: null
    }]);
    
    return { history }
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
</style>
