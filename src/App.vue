<template>
  <div class="app">
    <!--<img src="./assets/logo.png">-->
    <!--<hello></hello>-->
    <h1>Hello App!</h1>
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <zh-footer></zh-footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
export default {
  name: 'app',
  components: {
    'zh-footer': Footer,
    'zh-header': Header
  }
}
</script>

<style scoped>
.app {
}
</style>
