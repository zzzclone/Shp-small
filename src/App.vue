<template>
  <div>
    <Header></Header>
    <!-- 路由组件出口的地方 -->
    <router-view></router-view>
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>
<script>
import Header from './components/Header/index.vue'
import Footer from './components/Footer/index.vue'
export default {
  data () {
    return {

    }
  },
  components: {
    Header,
    Footer
  },
  mounted () {
    // 通知vuex发送请求获取数据，存储与仓库中
    this.$store.dispatch('categoryList')
  }
}
</script>
<style scoped>
</style>

