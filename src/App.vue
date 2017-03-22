<template>
  <div id="app">
    <menu-horizontal :routes="routes"></menu-horizontal>
    <div class="app-view">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { routes } from './routes';
import MenuHorizontal from './components/shared/MenuHorizontal.vue';

export default {
  components: {
    'menu-horizontal': MenuHorizontal
  },
  data () {
    return { routes }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: -7px;
}
.app-view{
    display: block;
    position: relative;
    background: #ebefef;
    padding: 1%;
    z-index: 1;
    box-sizing:border-box;
    float:left;
    width: 100%;
    margin-top: 50px;
}
.app-parcial{ width: 86.6%; transition:.1s; }
.app-total{ width: 100%; transition:1s; }
.menu-toggle {
    position: relative;
    top: 1px;
    left: 1px;
    z-index: 9999;
    height: 40px;
    width: 40px;
    text-align: center;
    display: block;
    background: #fff;
    outline: 0;
    border: 1px solid #ebefef;
    border-radius: 3px;
    padding: 2px;
    cursor: pointer;
    transition:.5s;
}
.menu-toggle:hover{ background: #c3c1c1;}
.menu-toggle:hover span{ background: #4d4d4d;}
.linha{ display:block; position: relative; height: 4px; width: 33px; background: #4d4d4d; margin: 4px 0; transition: .7s; }
.linha1-x{  background:#F44336; transform: rotate(49deg); top: 8px; left: 2px; width: 30px; }
.linha2-x{ opacity:0; }
.linha3-x{ background:#F44336; transform: rotate(132deg); bottom: 8px; left: 2px; width: 30px; }
/*.pages-enter, .pages-leave-active{
    opacity:0;
}
.pages-enter-active, .pages-leave-active{
    transition: .5s;
}*/
</style>
