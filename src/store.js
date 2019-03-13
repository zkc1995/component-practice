//注册toast
import Vue from 'vue';
import Vuex from 'vuex';
import store from '@/store';

Vue.use(Vuex);

const state = {
  toast:{
    show: false,
    text: "提示",
    duration: 1500,
    icon: null,
    load: null,
  }
}

const mutations = {
  // 隐藏弹窗
  hideToast(state){
    state.toast.show = false;
  },
  // 显示弹窗
  showToast(state,data){
    if(state.toast.show) return;
    data.duration = data.duration || 1500;
    let newToast= {
      show: true,
      text: data.text || "提示",
      duration: data.duration+700,
      icon: data.icon || '',
      load: data.load || null,
    }
    state.toast = Object.assign(state.toast, newToast)
  },
}


// 自定义弹窗
const getters = {
  get_toast_show(state){
    return state.toast.show
  },
  get_toast_text(state){
    return state.toast.text
  },
  get_toast_duration(state){
    return state.toast.duration
  },
  get_toast_icon(state){
    return state.toast.icon
  },
  get_toast_load(state){
    return state.toast.load
  },
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});

Vue.prototype.$store = store;
//挂载到原型
Vue.prototype.$myToast = function(data,icon="",duration=1500,load=null,){
  if(typeof data === "string" || typeof data === "number"){
    let _data = {
      text:data,
      duration,
      icon,
      load,
    }
    store.commit('showToast', _data)
  }
  if (typeof data === 'object'){
    store.commit('showToast', data)
  }
}


export default store;
