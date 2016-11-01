<template>
  <div class="app appMT">
    <zh-header msg = "我的任务"></zh-header>
    <div>this is myTask body</div>
    <div class="parent">
      <h2>Parent</h2>
      <router-link to="/myTask/TaskDoing">TaskDoing</router-link>
      <router-link to="/myTask/TaskEnding">TaskEnding</router-link>
      <div class = "content">
        <transition :name="transitionName">
          <router-view class="child-view"></router-view>
        </transition>
      </div>
    </div>
    <zh-footer></zh-footer>
  </div>
</template>
<style scoped lang = "scss">
  .appMT {
    .parent{
    overflow: hidden;
    }
    .content{
      overflow: hidden;
    }
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s ease;
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }
  .child-view {
    position: absolute;
    transition: all .5s cubic-bezier(.55,0,.1,1);
  }
  .slide-left-enter, .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(30px, 0);
    transform: translate(30px, 0);
  }
  .slide-left-leave-active, .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-30px, 0);
    transform: translate(-30px, 0);
  }
</style>
<script>
  import Footer from '../components/Footer.vue'
  import Header from '../components/Header.vue'
  export default{
    data () {
      return {
        transitionName: 'slide-left'
      }
    },
    // dynamically set transition based on route change
    watch: {
      '$route' (to, from) {
        const toDepth = to.path.split('/').length
        const fromDepth = from.path.split('/').length
        this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
      }
    },
    components: {
      'zh-footer': Footer,
      'zh-header': Header
    }
  }
</script>
