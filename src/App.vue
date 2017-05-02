<template>
  <div id="app">
    <ehead></ehead>
    <enav></enav>
    <router-view></router-view>
    <!-- <test></test> -->
  </div>
</template>
<script>
import ehead from '@/components/head'
import del from '@/components/del'
import enav from '@/components/nav'
export default {
  name: 'app'
  , 
  components:{
    ehead,
    enav
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
  /*margin-top: 60px;*/
}
</style>
