<template>
  <div class="home">
    <h3>Home</h3>
    <div v-for="h in history">
      <shell-prompt :command="h" />
      <component :is="h" />
    </div>
    <div class="commandInputLine">
      <shell-prompt />
      <Input :history="history" /> 
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import HelloWorld from '@/components/bin/HelloWorld.vue'; // @ is an alias to /src
import About from '@/components/bin/About.vue';
import Input from '@/components/Input.vue';
import NotFound from '@/components/NotFound.vue';
import ShellPrompt from '@/components/ShellPrompt.vue';

export default defineComponent ({
  name: 'home',
  components: { About, HelloWorld, NotFound, Input, ShellPrompt },
  setup() {
    const history = ref(['helloWorld', 'about']);
    
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
</style>
