<template>
	<button id="loadingShow">loadingShow</button>
</template>
<script>
	export default{
		mounted(){
			this.$emit("showLoading");
		}
	}
</script>