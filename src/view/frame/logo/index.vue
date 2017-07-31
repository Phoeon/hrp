<template>
	<div :class="['ph-logo',toggle]" >
		<template v-if="menuCollapse">
			<div class="ph-logo-collapse-btn">
				<i class="fa fa-bars"></i>
			</div>
		</template>
		<template v-else>
			<div class="ph-logo-pic">
				<img src="../../../assets/portrait.jpg">
			</div>
			<div class="ph-brand">无尽的，hrp</div>
		</template>
	</div>
</template>
<script>
	export default {
		props : ['menuCollapse'],
		computed : {
			toggle(){
				return this.menuCollapse?"ph-collapse":"";
			}
		},
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
		.ph-logo-collapse-btn{
			.w(100%);
			.h(43px);
			.fc(#fff);
			.ta(center);
			.lh(43px);
			.fs(18px);
			.cur(pointer);
		}
	}
</style>