<template>
	<div class="ph-tab-panel">
		<slot></slot>
	</div>
</template>
<style lang="less" scoped>
	@import '../../less/macro';

	.ph-tab-panel{
		.bgc(#fff);
		.bd(1px solid #E6E6E6);
		.pt(1px);
		.mt(-1px);
		.pd(1px 15px 15px 15px);
	}
</style>