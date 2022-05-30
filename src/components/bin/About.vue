<template>
  <h3>About</h3>
  <p>Hi, this is a linux style terminal website, made with vue.js</p>
  <p>You can see the code on github here : <br>
  <span class="link" @click.ctrl.prevent="openLink">https://github.com/GrandChefDotKong/vue-terminal</span>
  </p>
  <h4>Things to do</h4>
  <ul>
    <li>Fix input focus</li>
    <li>Add auto scroll</li>
    <li>Add more games</li>
    <li>Add "man" command</li>
    <li>Command args error</li>
    <li>...</li>
  </ul>
</template>

<script lang="ts">
import useProccess from '@/composables/useProcess';
import { defineComponent } from 'vue';

export default defineComponent ({
  name: 'about',
  setup() {

    const { endCurrentProcess } = useProccess();

    endCurrentProcess();


    const openLink = () => {
      window.open('https://github.com/GrandChefDotKong/vue-terminal');
    }

    return { openLink }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.link:hover {
  text-decoration: underline;
  cursor: pointer;
}
</style>