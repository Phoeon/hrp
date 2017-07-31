import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const FrameConst = {
	M_LOADING_TOGGLE : 'M_LOADING_TOGGLE',
	M_LINEEAR_LOADING: 'M_LINEEAR_LOADING'
}
export default new Vuex.Store({
	state : {
		loadingShow : false,
		linkarLoading : {
			left : "-100%",
			opacity : 1
		}
	},
	mutations : {
		[FrameConst.M_LOADING_TOGGLE] : (state,{show})=>{
			state.loadingShow = show;
		},
		[FrameConst.M_LINEEAR_LOADING] : (state,linkarLoading)=>{
			state.linkarLoading = linkarLoading;
		}
	},
	actions : {
		fLoadToggle({commit},payload){
			console.log(payload)
			commit(FrameConst.M_LOADING_TOGGLE,payload);
		},
		fLinearLoad({commit},payload){
			commit(FrameConst.M_LINEEAR_LOADING,payload);
		}
	}
});