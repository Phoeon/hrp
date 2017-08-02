<template>
	<Page>
<<<<<<< HEAD
		<Tab :tabs="tabs"></Tab>
=======
		<Tab>
			<router-link tag="li" 
			:to="item.action" active-class="active"
			v-for="item in tabs"
			>{{item.text}}</router-link>
		</Tab>
>>>>>>> a3fb7bfbfa9b0cc3e61e1eb244e2fe0ec711e1a5
	</Page>
</template>
<script>
	import Page from '@/components/business-page';
	import Tab from '@/components/tab/index.js';
	import {mapState} from 'vuex';

	export default {
		name : "tab",
<<<<<<< HEAD
		data(){
			return {
				tabs : [{
					to : "table",
					text :"表格",
					close : false
				},{
					to : "form",
					text :"表单"
				},{
					to : "action-bar",
					text :"随便"
				}]
			}
		},
		components : {Page,Tab}
=======
		computed : mapState({
			tabs : (state)=>state.tab.tabs
		}),
		components :{Page,Tab}
>>>>>>> a3fb7bfbfa9b0cc3e61e1eb244e2fe0ec711e1a5
	}
</script>
<style lang="less" scoped>
	@import '../../less/macro';
</style>