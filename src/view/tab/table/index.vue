<template>
	<TabPanel>
		<div class="ph-table-wrapper">
			<ActionBar>
				<Btn text="下载"></Btn>
				<Btn text="新增" icon="plus"></Btn>
				<Btn text="修改" icon="edit"></Btn>
				<Btn slot="ph-action-right"></Btn>
				<Btn slot="ph-action-right" @btnAction="onClick" icon="spinner" action="spinner"></Btn>
				<Btn slot="ph-action-right" :disabled="true"></Btn>
			</ActionBar>
			
			<table class="ph-table">
				<tr>
					<th>1</th>
					<th>2</th>
					<th>3</th>
					<th>4</th>
					<th>5</th>
				</tr>
				<tr>
					<td>td 1</td>
					<td>td 2</td>
					<td>td 3</td>
					<td>td 4</td>
					<td>td 5</td>
				</tr>
				<tr>
					<td>td 1</td>
					<td>td 2</td>
					<td>td 3</td>
					<td>td 4</td>
					<td>td 5</td>
				</tr>
				<tr>
					<td>td 1</td>
					<td>td 2</td>
					<td>td 3</td>
					<td>td 4</td>
					<td>td 5</td>
				</tr><tr>
					<td>td 1</td>
					<td>td 2</td>
					<td>td 3</td>
					<td>td 4</td>
					<td>td 5</td>
				</tr>
				<tr>
					<td>td 1</td>
					<td>td 2</td>
					<td>td 3</td>
					<td>td 4</td>
					<td>td 5</td>
				</tr>
				<tr>
					<td>td 1</td>
					<td>td 2</td>
					<td>td 3</td>
					<td>td 4</td>
					<td>td 5</td>
				</tr>
			</table>

			<ActionBar position="bottom">
				<Btn text="下载"></Btn>
				<Btn text="新增" icon="plus"></Btn>
				<Btn text="修改" icon="edit"></Btn>
				<Btn slot="ph-action-right"></Btn>
				<Btn slot="ph-action-right" @btnAction="onClick" icon="spinner" action="spinner"></Btn>
				<Btn slot="ph-action-right" :disabled="true"></Btn>
			</ActionBar>
		</div>
	</TabPanel>
</template>
<script>
	import {TabPanel} from '@/components/tab/index.js';
	import Btn from '@/components/btn';
	import ActionBar from '@/components/action-bar';

	export default {
		components : {TabPanel,Btn,ActionBar},
		methods : {
			onClick(){
				console.log(arguments);
			}
		}
	}
</script>
<style lang="less" scoped="">
	@import '../../../less/macro';

	.ph-table-wrapper{
		.mt(10px);
		.oh;
		.ph-table{
			table-layout: fixed;
			border-collapse: collapse;
			.w(100%);
			.bd(#E7E7E7);
			.fs(12px);
			.fc(#333);
			.ls(0);
			th,td{
				.pd(9px 0);
			}
			th{
				.bgc(#F5F5F6);
				.bd(1px solid #E7E7E7);
			}
			td{
				.ta(center);
				.bd(1px dotted #e7e7e7);
			}
			tr:hover,
			tr:nth-of-type(2n+1){
				.bgc(#FAFDFD);
			}
		}
	}
	
</style>