<template>
  <div class="app appI">
    <zh-header msg = "返利"></zh-header>
    <div>this is interest body</div>
    <zh-footer></zh-footer>
  </div>
</template>
<style scoped>
  .appI {
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
