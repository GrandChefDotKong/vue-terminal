<template>
  <h4>Hello World</h4>
  <p>
    std::cout &lt&lt 'Hello World' &lt&lt std::endl;
  </p>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  name: 'hello-world',
  props: {
    msg: String
  }
})
export default class HelloWorld extends Vue {
  msg!: string
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
