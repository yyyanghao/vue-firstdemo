<template>
  <div class="hello">
    <input type="text" v-model="testtext" @keyup.13='add'  class="input" />
    <ol class="thinglist">
      <li v-for="(item,index) in items" v-bind:class="{finish:item.isfinish}" >
      <span @click='toggle(item,index)'>{{item.thing}}</span>
      <span @click='del(index)' class="del">删除</span></li>
    </ol>
  </div>
</template>
<script>
import store from '../store'
import donestore from '../donestroe'
console.log(donestore);
export default {
  name:'hello',
  data () {
    return {
      msg: 'Welcome to todolist !',
      testtext:'',
      items:store.fetch(),
      delarr:donestore.fetch()
    }
  },
  methods: {
     add:function (event) {
        if(this.testtext){
          var obj = new Object();
            obj.thing = this.testtext;
            obj.isfinish =false;
            this.items.push(obj);
        }
        this.testtext = ''
      },
      toggle:function(item,index){
        item.isfinish =!item.isfinish;
      },
      del:function(index){
        var str = this.items[index];
        var date  =  new Date();
        var time  =  date.getFullYear() +'-'+ (date.getMonth()+1)+'-'+date.getDate();
        str.deltime = time;
        console.log(str);
        this.delarr.push(str);
        this.items.splice(index,1);
      }
  },
  watch:{
      items:{
        handler:function(items){
          store.save(items)
        },
        deep:true
      } ,
      delarr:{
        handler:function(delarr){
          donestore.save(delarr)
        },
        deep:true
      }  
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .finish{
    text-decoration: line-through;
    color: red;
  }
h1, h2 {
  font-weight: normal;
}
a {
  color: #42b983;
}
.input{
      width: 80%;
    margin-top: 30px;
    padding: 5px;
    font-size: 1em;
    border-radius: 5px;
    border: 1px solid #eee; 
}
.thinglist{
  padding: 10px 15%;
}
.thinglist li{
  text-align: left;
  margin-top: 10px;
  word-wrap:break-word;
  font-family: '微软雅黑';
  font-size: 1em;
  border-bottom: 1px solid gainsboro;
}
/*.thinglist li span{
    float: right;
    font-size: 0.5em;
    cursor: pointer;
}*/
.del{
  float: right;
    font-size: 0.5em;
    cursor: pointer;
}

/*过渡效果*/
.finish-leave-active{
 animation: bounce-out .5s;
}

@keyframes bounce-out{
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(0);
  }
}

/**/
</style>
