<template>
  <form @keydown.enter.prevent="handleSubmit">
    <label for="email">Email :</label>
    <input type="text" name="email" v-model="email" :disabled="inputDisabled" required><br>
    <label for="password">Password :</label>
    <input type="password" name="password" v-model="password" :disabled="inputDisabled" required>
    <div v-if="error" class="error">{{ error }}</div>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import useSignin from '@/composables/useSignin';
import useProccess from '@/composables/useProcess';

export default defineComponent ({
  name: 'login',
  setup() {
    const { signin, error, isPending } = useSignin();
    const { endCurrentProcess } = useProccess();

    const inputDisabled = ref(false);

    const email = ref('');
    const password = ref('');

    const handleSubmit = async () => {

      const res = await signin(email.value, password.value);
      if(!error.value) {
          console.log('successfully signed in ;)');
          inputDisabled.value = true;
          endCurrentProcess();
      } 
    }

    return { handleSubmit, error, email, password, isPending, inputDisabled }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>