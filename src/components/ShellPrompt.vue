<template>
  <div class="shell-prompt">
    <span v-if="!user" class="name">guest</span>
    <span v-else class="name">{{ user.displayName }}</span>@<span class="domain">term.adodotkong</span>:~ 
    <span v-if="props.command">{{ props.command }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import getUser from '@/composables/getUser';

export default defineComponent ({
  name: 'input-command',
  props: ['command'],
  setup(props) {

    const { user } = getUser();

    return { props, user }
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
.shell-prompt {
  white-space: normal
}
</style>