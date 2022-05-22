<template>
  <form @keydown.enter.prevent="handleSubmit">
    <label for="email">Email :</label><input type="text" name="email" v-model="email"><br>
    <label for="password">Password :</label><input type="password" name="password" v-model="password">
    <div v-if="error" class="error">{{ error }}</div>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import useSignin from '@/composables/useSignin';

export default defineComponent ({
  name: 'login',
  emmit: ['proccessEnded'],
  setup() {
    const { signin, error, isPending } = useSignin();
    const email = ref('');
    const password = ref('');

    const handleSubmit = async () => {
        console.log(`email: ${email.value}, password: ${password.value}`)
        /*
        const res = await signin(email.value, password.value);
        if(!error.value) {
            console.log('successfully signed in ;)');
        } */
        emit('proccessEnded');
    }

    return { handleSubmit, error, email, password, isPending }
  }
})

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>