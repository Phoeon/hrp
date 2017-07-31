<template>
	<Page>
		<Tab>
			<router-link tag="li" 
			:to="item.action" active-class="active"
			v-for="item in tabs"
			>{{item.text}}</router-link>
		</Tab>
	</Page>
</template>
<script>
	import Page from '@/components/business-page';
	import Tab from '@/components/tab/index.js';
	import {mapState} from 'vuex';

	export default {
		name : "tab",
		computed : mapState({
			tabs : (state)=>state.tab.tabs
		}),
		components :{Page,Tab}
	}
</script>
<style lang="less" scoped>
	@import '../../less/macro';
</style>