<template>
  <div class="lin-toast" v-if="show">
    <img
      :src="icon"
      alt=""
      v-if="icon"
    >
    {{text}}
  </div>
</template>

<script>
import icons from './toastIcon.js'
import { clearTimeout } from 'timers';

export default {
  data() {
    return {
    };
  },
  computed:{
    show(){
      let delay = this.$store.getters.get_toast_duration;
      let show = this.$store.getters.get_toast_show;
      let load = this.$store.getters.get_toast_load;
      if(show){
        if(!load){
          setTimeout(()=>{
          setTimeout(()=>{
              this.$store.commit('hideToast')
            },350)
          },delay-350)
        }
      }
      return show;
    },
    text(){
      return this.$store.getters.get_toast_text
    },
    icon(){
      let icon = this.$store.getters.get_toast_icon
      let iconNames = new Set(['linLoading'])
      if(iconNames.has(icon)){
        return icons[icon]
      }else{
        return false;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.lin-toast {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 200rpx;
  padding: 20rpx;
  font-size: 28rpx;
  color: #f8f8f8;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 20rpx;
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99999;
  img {
    width: 150rpx;
    height: 150rpx;
  }
}
</style>
