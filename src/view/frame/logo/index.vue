<template>
	<div class="ph-logo">
		<div class="ph-logo-pic">
			<img src="../../../assets/portrait.jpg">
		</div>
		<div class="ph-brand">无尽的，hrp</div>
	</div>
</template>
<script>
	export default {
		name : "Logo"
	}
</script>

<style lang="less" scoped="">
	@import '../../../less/macro.less';

	.ph-logo{
		.pr;
		.ph-logo-pic{
			.ta(center);
			.pt(12px);
			img{
				.dim(50px ,50px);
				.brs(50%);
			}
		}
		.ph-brand{
    		.h(30px);
    		.lh(30px);
    		.fs(12px);
    		.fc(#fff);
    		.ta(center);
		}
	}
</style>