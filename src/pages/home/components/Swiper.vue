<template>
 <div class="wrapper">
   <swiper ref="mySwiper" :options="swiperOptions" v-if="showSwiper">
    <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
 </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        loop: true
      }
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  }
}
</script>

<style lang="stylus" scoped>
  //样式穿透
 .wrapper >>> .swiper-pagination-bullet-active
   background: #fff
 .wrapper
   // height:0: 盒子高度。我们都知道 盒子高度=内容高度+上下内边距，这里我们指定目前盒子高度为0，为下文操作做铺垫。
   // padding-bottom: 盒子的底部内边距。开发中常见的写法是百分比(也可以像素单位)，例如padding-bottom:50%。这里的百分数是高/宽比例，它是参照父元素的宽度，一般父元素宽度我们会给定值或者width:100%，这时该盒子就会被下内边距撑开了父元素宽度二分之一的高度，以此作为盒子的高度。
   // overflow:hidden: 将超出盒子区域的内容隐藏，它指的区域是包括内边距的。和前面两条样式语句配合，达到页面渲染时既不影响布局又防止抖动的效果了.
   width:100%
   height:0
   overflow: hidden
   padding-bottom: 31.25%
   background-color: #eee
   .swiper-img
     width: 100%

</style>
