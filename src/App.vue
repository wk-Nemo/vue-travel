<template>
  <div id="app">
    <!-- 显示当前路由地址现实的内容 -->
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

//逻辑
<script>
export default {
  name: 'App'
}
</script>

//样式
<style>

</style>
