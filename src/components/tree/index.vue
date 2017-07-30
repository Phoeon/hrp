<template>
	<li class="ph-tree-item"  :key="node.id">
		<div
			v-if="isFolder" @click="toggle"
		 	:class='{
				"ph-item-link":true,
				active : active,
				open : open
			}'>
			<i :class='node.icon'></i>
			<label>{{node.text}}</label>
			<i v-if="isFolder" :class='{
				"ph-fa-angle":true,
				fa:true,
				"fa-angle-down":open,
				"fa-angle-right":!open
				}'></i>
		</div>
		<router-link
			tag="div"
			v-else :to="{path:action}"
		 	:class='{
				"ph-item-link":true,
				active : active,
				open : open
			}'>
			<i :class='node.icon'></i>
			<label>{{node.text}}</label>
			<i v-if="isFolder" :class='{
				"ph-fa-angle":true,
				fa:true,
				"fa-angle-down":open,
				"fa-angle-right":!open
				}'></i>
		</router-link>
		<ul 
			:style='{
				height:height
				}'
			:class='{"ph-sub-tree":true,"ph-tree":true,"tree-close":!open}'>
			<tree-item 
			:node="item" v-for="item in node.children"></tree-item>
		</ul>
	</li>
</template>
<script>
	import Tree from '@/components/tree';
	export default {
		name : "treeItem",
		props : ['node'],
		mounted(){
			let subTree = this.$el.querySelector(".ph-sub-tree");
			if(subTree){
				var _this = this;
				["t","webkitT","mozT","msT"].forEach(i=>{
					subTree.addEventListener(i+"ransitionend",()=>{
						let h=parseInt(this.height);
						let ts = +this.isFolder*42;
						this.$emit("notifySwiperUpdate",{
							node : this.node,
							translate : parseInt(h?ts:-ts)
						})
					});
				});
			}
		},
		data(){
			return {
			}
		},
		computed : {
			isFolder(){
				return this.node.children&&this.node.children.length
			},
			active(){
				return this.node.active;
			},
			open(){
				return this.node.open;
			},
			height(){
				return (this.node.open?42*(this.node.children||[]).length:0)+"px";
			},
			action(){
				return (this.node.action||"com").split('com')[1]
			}
		},
		methods : {
			toggle(){
				if(this.isFolder){
					this.$emit("treeNodeToggle",this.node);
				}else{
					console.log(this.node.id)
				}
			}
		}
	}
</script>
<style lang="less">
	@import '../../less/macro';
	.ph-tree{
		.tree-open{
			
		}
		.tree-close{
		
		}
	}
</style>