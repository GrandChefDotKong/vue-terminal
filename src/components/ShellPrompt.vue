<template>
    <div class="shell-prompt">
        <span class="name">guest</span>@<span class="domain">term.adodotkong</span>:~ 
        <span v-if="props.command">{{ props.command }}</span>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent ({
  name: 'input-command',
  props: ['command'],
  setup(props) {
    return { props }
  }
})

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.name {
  color: var(--cyan);
}
.domain {
  color: var(--magenta);
}
</style>