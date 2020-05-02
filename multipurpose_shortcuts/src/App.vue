<template>
  <div id="app">
    <ShortcutInstance />  
  </div>
</template>

<script>
import ShortcutInstance from './components/ShortcutInstance.vue'

export default {
  name: 'App',
  components: {
    ShortcutInstance
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
