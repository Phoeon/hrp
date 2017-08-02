<template>
	<Page>
		<Tab :tabs="tabs"></Tab>
	</Page>
</template>
<script>
	import Page from '@/components/business-page';
	import Tab from '@/components/tab/index.js';
	export default {
		name : "tab",
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
	}
</script>
<style lang="less" scoped>
	@import '../../less/macro';
</style>