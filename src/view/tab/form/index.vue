<template>
	<TabPanel>
		<FormCmp>
			<template scope="props">
				<FormField 
				:validPipe="props.validPipe"
				:random="props.random" label="用户名"></FormField>
				<a @click="props.onAction">提交</a>
			</template>
		</FormCmp>
	</TabPanel>
</template>
<script>

	import {TabPanel} from '@/components/tab/index.js';
	import FormCmp , {FormField} from '@/components/form/index.js';

	export default {
		components : {TabPanel,FormCmp,FormField}
	}
</script>
<style lang="less">
	@import '../../../less/macro';

	
</style>