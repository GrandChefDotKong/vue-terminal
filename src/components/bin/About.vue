<template>
  <h3>About</h3>
  <p>
    This is the about component. <br>
    It is not finished yet
  </p>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  name: 'about',
  props: {
    msg: String
  }
})

export default class extends Vue {
  msg!: string
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  p {
    color: grey;
  }
  h3 {
    background: blue;
    color: white;
  }
</style>