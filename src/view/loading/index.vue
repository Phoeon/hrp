<template>
	<div class="wrap">
		<Btn @btnAction="onClick" icon="spinner" action="spinner">showloading</Btn>
	</div>
</template>
<script>
	import {mapActions} from 'vuex';
	import Btn from '@/components/btn';
	export default{
		methods : {
			onClick(){
				console.log(Math.random())
				this.fLoadToggle({show:true});	
				setTimeout(i=>{
					this.fLoadToggle({show:false});	
				},3000)
			},
			...mapActions(["fLoadToggle"])
		},
		components:{Btn}
	}
</script>
<style lang="less" scoped="">
	@import '../../less/macro';

	.wrap{
		.mt(30px);
		.pd(10px);
		.bgc(#fff);
	}
</style>