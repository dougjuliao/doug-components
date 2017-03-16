<template>
  <div id="app">
    <nav>
      <menu-vertical></menu-vertical>
    </nav>
  </div>
</template>

<script>
import MenuVertical from './components/MenuVertical.vue';

export default {
  components: {
    'menu-vertical': MenuVertical
  },
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}
nav {
    background: #4d4d4d;
    height: 100%;
    position: fixed;
    top: 0;
    left:0;
    padding: 1px;
    width: 200px;
    text-align:center;
    box-sizing: border-box;
    box-shadow: 3px 3px 3px 0px #7b7b7b;
}
nav input {
    width: 100%;
    border: 1px solid #404040;
    background: #e7e7e7;
    outline: none;
    padding: 4px;
    border-radius: 3px;
}
nav ul{
    list-style: none;
    position: relative;
    width: 100%;
    padding: 0;
    text-align: center;
}
</style>
