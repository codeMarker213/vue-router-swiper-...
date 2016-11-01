<template>
  <div>
    <p class = "footer">
      <router-link to="/home">Go to Home</router-link>
      <router-link to="/myTask">Go to MyTask</router-link>
      <router-link to="/interest">Go to Interest</router-link>
      <router-link to="/personalCenter">Go to PersonalCenter</router-link>
    </p>
  </div>
</template>
<style>
.footer{
  position: absolute;
  bottom: 0;
  display: flex;
  width:100%;
  height: 100px;
  -webkit-flex-direction: row;
}
.footer>a{
  -webkit-flex: 1 1 auto;
  flex: 1 1 auto;

  width: 0px;
  -webkit-transition: width 0.7s ease-out;
  transition: width 0.7s ease-out;
}
</style>
<script>
    export default{
    }
</script>
