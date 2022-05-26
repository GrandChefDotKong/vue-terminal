<template>
  <form @keydown.enter.prevent="handleSubmit">
    <label for="email">Email :</label><input type="text" name="email" v-model="email" :disabled="inputDisabled" required><br>
    <label for="password">Password :</label><input type="password" name="password" v-model="password" :disabled="inputDisabled" required><br>
    <label for="displayName">Name :</label><input type="text" name="displayName" v-model="displayName" :disabled="inputDisabled" required><br>
    <div v-if="error" class="error">{{ error }}</div>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import useSignup from '@/composables/useSignup';
import useProccess from '@/composables/useProcess';

export default defineComponent ({
  name: 'signup',
  setup() {
    const { signup, error } = useSignup();
    const { endCurrentProcess } = useProccess();

    const inputDisabled = ref(false);

    const email = ref('');
    const password = ref('');
    const displayName =ref('');

    const handleSubmit = async () => {
    
      const res = await signup(email.value, password.value, displayName.value);
      if(!error.value) {
          inputDisabled.value = true;
          endCurrentProcess();
      } 
    }

    return { handleSubmit, error, email, password, displayName, inputDisabled }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>