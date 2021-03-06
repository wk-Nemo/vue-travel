import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastClick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
import 'swiper/swiper-bundle.css'

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
// es6中键值相同可以省略值
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

// 路由就是根据网址的不同，访问不同的页面
