//单文件组件
//模板
<template>
  <div id="app">
    <!-- 显示当前路由地址现实的内容 -->
    <router-view/>
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
