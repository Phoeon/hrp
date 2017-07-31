<template>
	<section class="ph-tabs-wrapper">
		<ul class="ph-tab-list">
			<slot></slot>
		</ul>
		<router-view></router-view>
	</section>
</template>
<script>
	export default{
		data(){
			return {

			}
		}
	}
</script>
<style lang="less">
	@import '../../less/macro';

	.ph-tabs-wrapper{
		.pr;
		.fs(14px);
		.ph-tab-list{
			.pr;
			.oh;
			li{
				.fl;
				.h(32px);
				.lh(32px);
				.ml(-1px);
				.pd(0 10px);
				.ta(center);
				.miw(50px);
				.bd(1px solid #E6E6E6);
				.bgc(#f2f2f2);
				.brs(3px 3px 0 0);
				.cur(pointer);
				&:first-child{
					.ml(0px);
				}
				&.active{
					.bgc(#FFFFFF);
					.bb(1px solid transparent);
				}
			}
		}
	}
</style>