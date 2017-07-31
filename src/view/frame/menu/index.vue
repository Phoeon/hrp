<template>
	<div class="swiper-container ph-menu-sp-c">
		<div class="swiper-wrapper">
			<ul :class='{"swiper-slide":true,"ph-tree":true,"tree-open":true,"tree-close":!true}'>
				<TreeNode 
				@notifySwiperUpdate="onNotifySwiperUpdate"
				@treeNodeToggle="onTreeNodeToggle"
				:node="item" v-for="(item,k) in data.children"></TreeNode>
			</ul>
		</div>
		<div class="swiper-scrollbar ph-menu-sb"></div>
	</div>
</template>
<script>
	import mockjs from 'mockjs';
	import TreeNode from '@/components/tree';
	import Swiper from 'swiper';
	import menuData from './data.js';
	export default {
		name : "Menu",
		data(){
			return {
				data : {
					open : true,
					children : menuData
				}
			}
		},
		mounted(){
			window.sp=this.sp=new Swiper('.ph-menu-sp-c', {
				scrollbar : '.ph-menu-sb',
				direction: 'vertical',
                slidesPerView: 'auto',
                mousewheelControl: true,
                freeMode: true,
                roundLengths : true,
                scrollbarHide: true,
                scrollbarDraggable : true
            });
		},
		methods : {
			onTreeNodeToggle(node){
				this.data.children = this.data.children.map(n=>{
					n.open=n.id==node.id?(!node.open):false;
					return n;
				})
			},
			onNotifySwiperUpdate(payload){
				//计算左边菜单的位移
				this.sp&&this.sp.update(true);
				if(payload.translate<0)return;
				let sp = this.sp;
				let translate = sp.translate - payload.translate;
				let hSpan = (parseInt(payload.node.id.replace(/id_/,""))+1)*42+payload.translate+sp.translate;
				hSpan = sp.container.height()-hSpan;
				if(hSpan>0)return;

				setTimeout(i=>{
					sp.setWrapperTransition(300);
					sp.setWrapperTranslate(sp.translate+hSpan);
				},30);
			}
		},
		components : {TreeNode}
	}
</script>
<style lang="less">
	@import '../../../less/macro';
	.ph-menu-sp-c{
		.pa;
		.w(100%);
		.t(98px);
		.l(0);
		.b(0);
		.ph-tree{
			.h(auto);
		}
	}
	.ph-tree{
		.bgc(#2F4050);
		.fs(14px);
		&.ph-sub-tree{
			.bgc(#2A3846);
			.oh;
			.h(0px);
			.db;
			.ts(height .2s ease-in-out);
			.ph-item-link{
				.ti(40px);
			}
		}
		.ph-tree-item{
			.pr;
			.lh(42px);
			.mih(42px);
			.ph-item-link{
				.db;
				.h(42px);
				.fc(#A7B1C2);
				.fs(14px);
				.td(none);

				.fa{
					.ml(16px);
					.mr(6px);
				}
				.ph-fa-angle{
					.pa;
					.t(0);
					.b(0);
					.lh(42px);
					.mg(auto);
					.r(15px);
				}
				&.open,
				&.active,
				&:hover{
					.fc(#fff);
				}
			}
		}
	}
</style>