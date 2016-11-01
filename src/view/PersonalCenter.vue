<template>
    <div class="app appPC">
      <zh-header msg = "个人中心"></zh-header>
      <div class= "bg" >this is personalCenter body</div>
      <img src = "../assets/logo.png">
      <zh-footer></zh-footer>
    </div>
</template>
<style scoped lang="scss">
  .appPC {
    .bg{background: url("../assets/flow-cover.png")}
    img{
      width: 40px;
    }
  }
</style>
<script>
  import Footer from '../components/Footer.vue'
  import Header from '../components/Header.vue'
  export default{
    components: {
      'zh-footer': Footer,
      'zh-header': Header
    }
  }
</script>
