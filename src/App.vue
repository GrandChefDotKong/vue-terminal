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

}
body {
  background-color: var(--primary-bg-color);
  color: var(--primary-color);
  width: 97vw;
  height: 97vh;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  padding-left: 50px;
  height: 100%;
  border: 1px solid black;
}

</style>
