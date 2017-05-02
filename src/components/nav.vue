<template>
	<div class="nav">
		<div v-for='navname in nav' >
			<router-link :to='setPath(navname.path)'><span>{{navname.title}}</span></router-link>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default{
		name:'nav',
		data(){
			return {
				nav:[{
					title:'日历',
					path:'/date'	
				},{
					title:'已完成',
					path:'/done'
				},{
					title:'垃圾箱',
					path:'/del'
				}
				]
			}
		},
		methods:{
			setPath:function(path){
				return path
			}
		}
	}
</script>
<style type="text/css">
	.nav{
		width: 100%;
		height: 50px;
		background-color: #fff;
	}
	.nav div{
		float: left;
		line-height: 30px;
		width:33.33%;

	}
	.nav a {
		text-decoration: none;
		color:#333;
		display: block;
		height: 50px;
		padding-top: 10px; 
	}
	.nav span{
		height: 30px;
		width: 100%;
		display: inline-block;
		line-height: 30px;
		font-family: '微软雅黑';
	}
	.nav div:nth-child(2) > a > span{
		border-left: 1px solid #eee;
    	border-right: 1px solid #eee;
	}
	.mainactive{
    border-bottom: 1px solid red;
  }
</style>
