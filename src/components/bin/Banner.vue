<template>
  <div class="banner">
    <div class="hero">
      {{ banner[parseInt(index)] }}
    </div>
    <div class="version">
      v0.9.0
    </div>
    <div class="welcome">
      __Welcome on my page 🎊 <br>
      __Type 'help' to see the list of available commands__
      
    </div>
  </div>
</template>

<script lang="ts">

import { defineComponent, onMounted, ref } from 'vue';
import useProccess from '@/composables/useProcess';

export default defineComponent ({
  name: 'banner',
  props: ['args'],
  setup({ args }) {
    const { endCurrentProcess } = useProccess();

    let index = '0';

    const banner = ref<string[]>([
` █████╗ ██████╗  ██████╗ ██████╗  ██████╗ ████████╗██╗  ██╗ ██████╗ ███╗   ██╗ ██████╗
██╔══██╗██╔══██╗██╔═══██╗██╔══██╗██╔═══██╗╚══██╔══╝██║ ██╔╝██╔═══██╗████╗  ██║██╔════╝
███████║██║  ██║██║   ██║██║  ██║██║   ██║   ██║   █████╔╝ ██║   ██║██╔██╗ ██║██║  ███╗
██╔══██║██║  ██║██║   ██║██║  ██║██║   ██║   ██║   ██╔═██╗ ██║   ██║██║╚██╗██║██║   ██║
██║  ██║██████╔╝╚██████╔╝██████╔╝╚██████╔╝   ██║   ██║  ██╗╚██████╔╝██║ ╚████║╚██████╔╝
╚═╝  ╚═╝╚═════╝  ╚═════╝ ╚═════╝  ╚═════╝    ╚═╝   ╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═══╝ ╚═════╝`,
` ▄▄▄      ▓█████▄  ▒█████  ▓█████▄  ▒█████  ▄▄▄█████▓ ██ ▄█▀ ▒█████   ███▄    █   ▄████ 
▒████▄    ▒██▀ ██▌▒██▒  ██▒▒██▀ ██▌▒██▒  ██▒▓  ██▒ ▓▒ ██▄█▒ ▒██▒  ██▒ ██ ▀█   █  ██▒ ▀█▒
▒██  ▀█▄  ░██   █▌▒██░  ██▒░██   █▌▒██░  ██▒▒ ▓██░ ▒░▓███▄░ ▒██░  ██▒▓██  ▀█ ██▒▒██░▄▄▄░
░██▄▄▄▄██ ░▓█▄   ▌▒██   ██░░▓█▄   ▌▒██   ██░░ ▓██▓ ░ ▓██ █▄ ▒██   ██░▓██▒  ▐▌██▒░▓█  ██▓
 ▓█   ▓██▒░▒████▓ ░ ████▓▒░░▒████▓ ░ ████▓▒░  ▒██▒ ░ ▒██▒ █▄░ ████▓▒░▒██░   ▓██░░▒▓███▀▒
 ▒▒   ▓▒█░ ▒▒▓  ▒ ░ ▒░▒░▒░  ▒▒▓  ▒ ░ ▒░▒░▒░   ▒ ░░   ▒ ▒▒ ▓▒░ ▒░▒░▒░ ░ ▒░   ▒ ▒  ░▒   ▒ 
  ▒   ▒▒ ░ ░ ▒  ▒   ░ ▒ ▒░  ░ ▒  ▒   ░ ▒ ▒░     ░    ░ ░▒ ▒░  ░ ▒ ▒░ ░ ░░   ░ ▒░  ░   ░ 
  ░   ▒    ░ ░  ░ ░ ░ ░ ▒   ░ ░  ░ ░ ░ ░ ▒    ░      ░ ░░ ░ ░ ░ ░ ▒     ░   ░ ░ ░ ░   ░ 
      ░  ░   ░        ░ ░     ░        ░ ░           ░  ░       ░ ░           ░       ░ 
           ░                ░                                                           `
    ]);

    console.log(args)
    

    if(args && args[0] === '1') {
      index = '1';
    } 
    
    endCurrentProcess();

    return { banner, index }
  }
})  
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.banner {
  white-space: pre;
  width: fit-content;
}
.version {
  text-align: right;
}
.welcome {
  color: var(--green);
}


</style>