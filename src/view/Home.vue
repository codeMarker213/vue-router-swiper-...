<template>
  <div class="app appH">
    <zh-header msg='首页'></zh-header>
    <div>
      <swipe class="my-swipe">
        <swipe-item class="slide1">Slide1</swipe-item>
        <swipe-item class="slide2">Slide2</swipe-item>
        <swipe-item class="slide3">Slide3</swipe-item>
      </swipe>
    </div>
    <div>this is home body</div>
    <zh-footer></zh-footer>
  </div>
</template>
<style scoped lang = "scss" scoped>
  .appH {
  .my-swipe {
    height: 200px;
    color: #fff;
    font-size: 30px;
    text-align: center;
  }
  .slide1 {
    background-color: #0089dc;
    color: #fff;
  }
  .slide2 {
    background-color: #ffd705;
    color: #000;
  }
  .slide3 {
    background-color: #ff2d4b;
    color: #fff;
  }
  }
</style>
<script>
  import { Swipe, SwipeItem } from 'mint-ui'
  import 'mint-ui/lib/swipe/style.css'
  import 'mint-ui/lib/Swipe-item/style.css'
  import Footer from '../components/Footer.vue'
  import Header from '../components/Header.vue'
  export default{
    components: {
      'zh-footer': Footer,
      'zh-header': Header,
      'swipe': Swipe,
      'swipe-item': SwipeItem
    }
  }
</script>
