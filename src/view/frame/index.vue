<template>
	<section class="ph-frame ph-bfc" id="ph-frame">
		<LinearLoading :linkarLoading="linkarLoading"></LinearLoading>
		<div class="ph-left ph-frame-left">
			<Logo></Logo>
			<Menus></Menus>
		</div>
		<div class="ph-right ph-frame-right">
			<BDInfoBar></BDInfoBar>
			<router-view></router-view>
		</div>
		<Loading :show="loadingShow"></Loading>
	</section>
</template>
<script>
	import Loading from '@/components/loading';
	import LinearLoading from '@/components/loading/linear-loading';
	import Logo from './logo';
	import BDInfoBar from './bd-info-bar';
	import Menus from './menu';
	import {mapState} from 'vuex';

	export default {
		data(){
			return {
			}
		},
		computed : mapState(["loadingShow","linkarLoading"]),
		name : "Frame",
		components : {Logo,BDInfoBar,Menus,Loading,LinearLoading}
	}
</script>
<style lang="less">
	@import '../../less/macro';
	.ph-frame{
		.h(100%);
	}
	.ph-left{
		.h(100%);
		.pr;
	}
	.ph-right{
		.h(100%);
	}	
	.ph-frame-left{
		.bgc(#243748);
		.w(166px);
	}
	.ph-frame-right{
		.bgc(#f6f6f6);
		.pd(0 15px)
;	}
</style>