<template>
    <div v-if="!error">
      Successfully loged out !
      See you soon ;)
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import useSignout from '@/composables/auth/useSignout';
import useProccess from '@/composables/useProcess';
import getUser from '@/composables/auth/getUser';

export default defineComponent ({
  name: 'logout',
  setup() {
    const { error, signout } = useSignout();
    const { endCurrentProcess } = useProccess();
    const { user } = getUser();

    const handleSignout = async () => {
      await signout();
      if(!error.value) {
        user.value = null;
      }
    }

    handleSignout();
    endCurrentProcess();

    return { error }
  }
})


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>