<template>
  <router-view/>
</template>


<style lang="scss">
:root {
  --primary-color: #b58900;
  --primary-bg-color: #fdf6e3;
  --cyan: #2aa198;
  --violet: #6c71c4;
  --magenta: #d33682;
  --green: #859900;

}
body {
  background-color: var(--primary-bg-color);
  color: var(--primary-color);
  width: 100%;
  height: 97vh;
  border: 1px solid black;
}

#app {
  font-family: Consolas,monaco,monospace; 
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  padding-left: 20px;
}

</style>
