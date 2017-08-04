<template>
	<TabPanel>
		<form action="" class="ph-form">
			<div class="ph-field-group ph-bfc">
				<div class="ph-label ph-left">
					用户名
				</div>
				<div class="ph-field-wrap ph-right">
					<div class="ph-field">
						<input type="text" name="username" placeholder="account">
						<i class="fa fa-angle-down"></i>
					</div>
					<label class="ph-tip ph-invalid-tip">非法的输入</label>
				</div>
			</div>
			<div class="ph-field-group ph-bfc">
				<div class="ph-label ph-left">
					用户名
				</div>
				<div class="ph-field-wrap ph-right">
					<div class="ph-field">
						<select name="" id="">
							<option value="">asdf</option>
							<option value="">asdf</option>
							<option value="">asdf</option>
						</select>
						<i class="fa fa-angle-down"></i>
					</div>
					<label class="ph-tip ph-invalid-tip">非法的输入</label>
				</div>
			</div>
			<div class="ph-field-group ph-bfc">
				<div class="ph-label ph-left">
					用户名
				</div>
				<div class="ph-field-wrap ph-right">
					<div class="ph-field">
						<input type="text" name="username" placeholder="account">
						<i class="fa fa-angle-down"></i>
					</div>
					<label class="ph-tip ph-invalid-tip">非法的输入</label>
				</div>
			</div>
		</form>
	</TabPanel>
</template>
<script>
	import {TabPanel} from '@/components/tab/index.js';
	export default {
		components : {TabPanel}
	}
</script>
<style lang="less">
	@import '../../../less/macro';

	.ph-form{
		.mg(15px 0);
		.ph-field-group{
			.lh(26px);
			.fs(14px);
			.fc(#777);
			.pd(0 0 5px 0);
			.ph-label,
			.ph-field{
				
			}
			.ph-label{
				.w(60px);
				.pdr(5px);
			}
			.ph-field-wrap{
				.ph-field{
					.dib;
					.pr;
					.fa{
						.pa;
						.lh(24px);
						.t(2px);
						.b(1px);
						.r(1px);
						.mg(auto);
						.cur(pointer);
						.bgc(#FFF);
						.pdr(8px);
					}
				}
				input,
				select{
					.apper;
					.fc(#777);
					.miw(175px);
					.ti(8px);
					.va(middle);
					.bd(1px solid #e9e9e9);
					.o(none);
					.h(24px);
					.lh(24px);
					.mg(0);
					.pd(0);
					.bxs(content-box);
	    			&:focus{
	    				border-color: #60C6D0;
	    			}
				}
			}
		}
	}
</style>