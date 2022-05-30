<template>
  <div>
    <span class="shell-prompt">
      <span v-if="userName" class="name">{{ userName }}</span>
      <span v-else class="name">{{ user ? user.displayName : 'guest' }}</span>@<span class="domain">term.adodotkong</span>:~
    </span> 
    <span v-if="props.command" class="command">{{ props.command }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import getUser from '@/composables/auth/getUser';

export default defineComponent ({
  name: 'input-command',
  props: ['command', 'userName'],
  setup(props) {
    const { user } = getUser();

    return { props, user }
  }
})

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.shell-prompt {
  white-space: normal;
  color: white;
  background-color: var(--primary-color);
  padding: 2px 6px 2px 0;
  width: fit-content;
  border-radius: 10px 20px 20px 10px;
}
.name {
  padding: 2px 6px;
  margin-right: 6px;
  color: white;
  background-color: var(--cyan);
  border-radius: 10px 20px 20px 10px;
}
.domain {
  padding: 2px 6px;
  margin-left: 6px;
  margin-right: 6px;
  color: white;
  background-color: var(--magenta);
  border-radius: 10px 20px 20px 10px;
}
.command {
  background-color: var(--primary-bg-color);
  color: var(--primary-color);
  padding: 2px 6px;
}

#triangle-right {
  width: 0;
  height: 0;
  border-top: 50px solid transparent;
  border-left: 100px solid red;
  border-bottom: 50px solid transparent;
}


</style>