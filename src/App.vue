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
  overflow-x: hidden;
}

#app {
  font-family: Consolas,monaco,monospace; 
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  padding: 0px;
  margin: 0px;
  height: 100%;
  min-height: 95vh;
}
</style>
