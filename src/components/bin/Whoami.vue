<template>
  <div v-if="!user">You are a guest</div>
  <div v-else>You are {{ user.displayName }}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import useProccess from '@/composables/useProcess';
import getUser from '@/composables/auth/getUser';

export default defineComponent ({
  name: 'whoami',
  setup() {
    const { endCurrentProcess } = useProccess();
    const { user } = getUser();

    endCurrentProcess();
    return { user }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>