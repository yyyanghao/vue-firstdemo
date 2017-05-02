<template>
  <div class="head">
    <h1>{{msg}}</h1>
  </div>
</template>
<script>
export default {
  name: 'head',
   data () {
    return {
      msg: 'main'
    }
    
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  width: 100%;
  background-color: #333;
  color:#fff;
  font-size:2em;
  padding: 0.5em 0;
  margin: 0;
}
</style>


