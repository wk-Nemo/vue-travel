<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img
        class="banner-img"
        :src="bannerImg"
      >
      <div class="banner-info">
        <div class="banner-title">
          {{this.sightName}}
        </div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe692;</span>
          {{this.bannerImgs.length}}
        </div>
      </div>
    </div>
    <FadeAnimation>
      <common-gallary
        :imgs="bannerImgs"
        v-show="showGallary"
        @close="handleGallaryClose"
      ></common-gallary>
    </FadeAnimation>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
import FadeAnimation from 'common/fade/FadeAnimation'
export default {
  name: 'DetailBanner',
  props: {
    sightName: String,
    bannerImg: String,
    bannerImgs: Array
  },
  data () {
    return {
      showGallary: false,
      imgs: ['https://imgs.qunarzz.com/sight/p0/1610/19/197e616daf65e714a3.water.jpg_710x360_c32cff77.jpg',
        'https://imgs.qunarzz.com/sight/p0/1610/19/197e616daf65e714a3.water.jpg_710x360_c32cff77.jpg']
    }
  },
  components: {
    CommonGallary,
    FadeAnimation
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    overflow: hidden;
    height: 0;
    padding-bottom: 55%
    position: relative
    .banner-img
      width: 100%
      height: 206px
    .banner-info
      display:flex
      position:absolute
      left:0
      right:0
      bottom:0
      line-height: .6rem
      color: white
      background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
      .banner-title
        font-size: .32rem
        flex:1
        padding: 0 .2rem
      .banner-number
        padding: 0 .4rem
        height: .32rem
        line-height: .32rem
        border-radius: .2rem
        margin-top: .14rem
        background: rgba(0, 0, 0, .8)
        font-size: .24rem
        .banner-icon
          font-size: .24rem
</style>
