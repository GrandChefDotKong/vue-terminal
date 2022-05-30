<template>
  <form @keydown.enter.prevent="handleSubmit">
    <label for="email">Email :</label><input type="text" name="email" v-model="email" :disabled="!isRunning" required><br>
    <label for="password">Password :</label><input type="password" name="password" v-model="password" :disabled="!isRunning" required><br>
    <label for="displayName">Name :</label><input type="text" name="displayName" v-model="displayName" :disabled="!isRunning" required><br>
    <div v-if="error" class="error">{{ error }}</div>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import useSignup from '@/composables/auth/useSignup';
import useProccess from '@/composables/useProcess';

export default defineComponent ({
  name: 'signup',
  props: ['isRunning'],
  setup({ isRunning }) {
    
    const { signup, error } = useSignup();
    const { endCurrentProcess } = useProccess();

    const email = ref('');
    const password = ref('');
    const displayName =ref('');

    const handleSubmit = async () => {
    
      const res = await signup(email.value, password.value, displayName.value);
      if(!error.value) {
        endCurrentProcess();
      } 
    }

    return { handleSubmit, error, email, password, 
      displayName, isRunning }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>