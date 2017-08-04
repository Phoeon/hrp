<template>
	<form action="" class="ph-form">
		<slot 
		:random="random"
		:validPipe="validPipe"
		:onAction="onAction"></slot>		
	</form>
</template>
<script>
	export default {
		data(){
			return {
				random : -1,
				valid : true
			}
		},
		methods:{
			onAction(){
				console.log(Math.random(),"action");
				this.random = Math.random();
			},
			validPipe(valid){
				this.valid=valid?this.valid:false;
			}
		}
	}
</script>
<style lang="less" scoped="">
	@import '../../less/macro';

	.ph-form{
		.mg(15px 0);
	}
</style>