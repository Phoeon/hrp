<template>
	<button @click="onClick">loadingShow</button>
</template>
<script>
	import {mapActions} from 'vuex';

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
		}
	}
</script>