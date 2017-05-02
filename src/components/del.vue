<template>
  <div class="hello">
      <ul id="del_list">
        <li v-for="(item,index) in delarr" >
        <span @click='toggledel(item,index)'>{{item.thing}}</span>
        <span class="deldate" >{{item.deltime}}</span>
        <span class="delthis" @click ='deldrop(index)' v-bind:class="{finish:item.isfinish}" >x</span>
        </li>
      </ul>
  </div>
</template>
<script>
import donestroe from '../donestroe'
// console.log(donestroe.fetch());
export default {
  name: 'del',
    data () {
    return {
      msg: '你好',
      delarr:donestroe.fetch()
    }
  },
  methods:{
      toggledel:function(item,index){
         item.isfinish =!item.isfinish;
      },
      deldrop:function(index){
         this.delarr.splice(index,1);
      }
  },
  watch:{
    delarr:{
        handler:function(delarr){
          donestroe.save(delarr)
        },
        deep:true
      }  
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0 0 30px 0;
}

li {
    width: 100%;
    line-height: 30px;
    padding: 10px 2em;
    word-wrap: break-word;
    position: relative;
}
li:nth-child(even){
  background-color:#00B8EC;
  color: #fff;
}
a {
  color: #42b983;
}
.deldate{
    font-size: 0.5em;
    position: absolute;
    left: 0;
    top: 0;
    background-color: red;
    line-height: 18px;
    /* padding: 0px 10px; */
    width: 80px;
    color: #fff;
}
.delthis{
    position: absolute;
    display: none;
    height: 100%;
    right: 0;
    width: 2em;
    background-color: #333;
    color: #fff;
    top: 0;
    border: 1px solid gainsboro;
    line-height: 40px;
}

.finish{
  display: block;
}
</style>



