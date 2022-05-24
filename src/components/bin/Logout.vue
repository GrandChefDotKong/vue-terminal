<template>
    <div v-if="!error">
      Successfully loged out !
      See you soon ;)
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import useSignout from '@/composables/useSignout';
import useProccess from '@/composables/useProccess';
import getUser from '@/composables/getUser';

export default defineComponent ({
  name: 'logout',
  setup() {
    const { error, signout } = useSignout();
    const { endProccess } = useProccess();
    const { user } = getUser();

    const handleSignout = async () => {
      await signout();
      if(!error.value) {
        user.value = null;
      }
    }

    handleSignout();
    endProccess();

    return { error }
  }
})


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>