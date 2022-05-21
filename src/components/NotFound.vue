<template>
  <div>
      Error: command not found
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  name: 'not-found',
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
</style>