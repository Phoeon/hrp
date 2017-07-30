<template>
	<Page>
		<Tab>
			<router-link tag="li" to="table" active-class="active">表格</router-link>
			<router-link tag="li" to="form" active-class="active">表格＋表头</router-link>
			<router-link tag="li" to="action-bar" active-class="active">表头＋标尾</router-link>
		</Tab>
	</Page>
</template>
<script>
	import Page from '@/components/business-page';
	import Tab from '@/components/tab/index.js';
	export default {
		name : "tab",
		data(){
			return {
			}
		},
		components : {Page,Tab}
	}
</script>
<style lang="less" scoped>
	@import '../../less/macro';
</style>