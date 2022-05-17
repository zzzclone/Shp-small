<template>
  <div>
    <!-- 三级联动已经注册为全局组件，可以直接使用，不需要要再引入 -->
    <TypeNav />
    <ListContainer />
    <Recommend />
    <Rank />
    <Like />
    <!-- 有两组floor 可以进行遍历 自定义标签也是可以遍历的-->
    <Floor v-for="(floor,index) in floorList.data" :key="floor.id" :list="floor" />
    <Brand />
  </div>
</template>
<script>
import ListContainer from '../Home/ListContainer'
import Recommend from '../Home/Recommend'
import Rank from '../Home/Rank'
import Like from '../Home/Like'
import Floor from '../Home/Floor'
import Brand from '../Home/Brand'
import { mapState } from 'vuex'
export default {
  data () {
    return {

    }
  },
  components: {
    ListContainer,
    Recommend,
    Rank,
    Like,
    Floor,
    Brand
  },
  mounted () {
    // 派发action 获取floor组件的数据
    this.$store.dispatch('getFloorList')
  },
  computed: {
    // ...mapState('home', ['floorList'])
    ...mapState({
      floorList: state => state.home.floorList
    })
  }
}
</script>
<style scoped>
</style>
