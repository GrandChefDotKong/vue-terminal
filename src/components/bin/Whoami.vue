<template>
  <div v-if="!user">You are a guest</div>
  <div v-else>You are {{ user.displayName }}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import useProccess from '@/composables/useProccess';
import getUser from '@/composables/getUser';

export default defineComponent ({
  name: 'whoami',
  setup() {
    const { endProccess } = useProccess();
    const { user } = getUser();

    endProccess();
    return { user }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>