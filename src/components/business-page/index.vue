<template>
	<div class="ph-view-page">
		<slot></slot>
	</div>
</template>
<style lang="less">
	@import '../../less/macro';
	.ph-view-page{
		// .bgc(#fff);
		.pa;
		.t(55px);
		.l(15px);
		.r(15px);
		.b(15px);
		.of(auto);
		.bxs(border-box);
	}
</style>