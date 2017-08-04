<template>
	<div class="ph-field-group ph-bfc">
		<div class="ph-label ph-left">
			{{label}}
		</div>
		<div class="ph-field-wrap ph-right">
			<div class="ph-field">
				<input v-model="v" :value="value" type="text" name="username" placeholder="account">
				<i class="fa fa-angle-down"></i>
			</div>
			<label v-if="!valid" class="ph-tip ph-invalid-tip">{{tip}}</label>
		</div>
	</div>
</template>
<script>
	export default {
		props : {
			value : {
				default : ""
			},
			label : {
				default : "label"
			},
			random : {
				default : -1
			},
			validPipe : {
				default : ()=>{return true}
			}
		},
		watch : {
			random(){
				this.doValid();
			}
		},
		mounted(){
			this.$el.onkeyup = ()=>{
				this.doValid();
			}
		},
		data(){
			return {
				valid : true,
				tip : "",
				v : ""
			}
		},
		methods : {
			doValid(){
				let v = this.v
				console.log(v);
				if(v.length){
					this.valid = true;
					this.tip = "";
				}else{
					this.valid = false;
					this.tip = "长度非法"
				}
			}
		}
	}
</script>
<style lang="less" scoped="">
	@import '../../less/macro';
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
</style>