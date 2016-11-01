<template>
    <div class = "header">
        <p>{{msg}}</p>
    </div>
</template>
<style>
  .header{
    text-align: center;
  }
  .header>p{
    font-size: 20px;
  }
</style>
<script>
    export default{
      props: ['msg']
    }
</script>
