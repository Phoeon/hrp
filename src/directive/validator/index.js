import Vue from 'vue';

Vue.directive("ph-validator",function(el,binding){
	console.log(arguments);
	el.onkeyup = function(){
		console.log(Math.random())
	}
})
