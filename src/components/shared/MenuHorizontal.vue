<template>
    <nav>
        <ul class="nav navbar-nav" :classe="classe">
            <li v-for="item in routes" :class="item.children ? 'dropdown' : ''">
                <router-link :to="item.path ? item.path : '/'">{{ item.name }}</router-link>
                <ul class="dropdown-menu" :v-if="item.children">
                    <li v-for="item2 in item.children">
                        <router-link :to="{ name: item2.name }">{{ item2.name }}</router-link>
                    </li>
                </ul>
            </li>
        </ul>
    </nav>
</template>
<script>
import { routes } from '../../routes';
export default {
    props: {
        routes: {
            type: Array,
            required: true
        },
        classe: {
            type: String
        }
    }
}
</script>
<style scoped>
.nav {
    list-style: none;
    position: relative;
    width: 100%;
    display: block;
    background: #3e984d;
    padding: 10px 0;
    z-index: 9999;
}
.nav li {
    display: inline-block;
    position:relative;
    margin: 0;
}
.nav li a:before{
  content: '';
  position:absolute;
  top:0;
  left:4px;
  height:0;
  width:100%;
  background: #4CAF50;
  z-index:-1;
  transition:.2s;
}
.nav a{
  text-decoration:none;
  padding: 10px;
  color: #252525;
  margin: -3px;
  transition:.3s;
  position:relative;
  z-index:1;
}
.nav li a:hover {
    color: #000;
    /*background: #4CAF50;*/
}
.nav li:hover a:before{
  height:100%;
}
.dropdown a{
  padding-left:13px;
}
.dropdown:after{
  content: '>';
  position: absolute;
  height: 0;
  width: 0;
  font-size: 10px;
  right: -4px;
  transform: rotate(90deg);
  top: 7px;
  z-index: 2;
}
.dropdown:hover ul{
  display:block;
}
.dropdown-menu{
    display: none;
    position: absolute;
    top: 0;
    left: 0px;
    width: 200px;
    margin: 28px 0;
    background: #3e984d;
    padding: 0;
    height:0;
}
.dropdown-menu li{
   display:block;
   padding: 9px 0;
   padding: 4px 0;
}
.dropdown-menu li a{
    padding: 8px 0;
    width: 100%;
    display: block;
    margin: -4px;
    text-indent: 14px;
    position:relative;
}
.dropdown-menu li a:after{
   content: '';
   position:absolute;
   width:0;
   height:100%;
   top:0;
   left:4px;
   transition:.2s;
   z-index:-1;
}
.dropdown-menu li:hover a:after{
    width:100%;
    background:#c2eae9;
}
</style>