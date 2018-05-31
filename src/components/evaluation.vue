<template>
  <div class="evaluation">
    <div class="scoll">
      <yd-rollnotice autoplay="3000" align='center'>
        <yd-rollnotice-item>
          荣耀V9 3月超级钜惠！</yd-rollnotice-item>
        <yd-rollnotice-item>
          京东超级品牌日格力盛典</yd-rollnotice-item>
        <yd-rollnotice-item>
          京东服饰 早春新品低至7折</yd-rollnotice-item>
          <yd-rollnotice-item>
          滚动1</yd-rollnotice-item>
          <yd-rollnotice-item>
          滚动2</yd-rollnotice-item>
          <yd-rollnotice-item>
          滚动3</yd-rollnotice-item>
          <yd-rollnotice-item>
          滚动4</yd-rollnotice-item>
      </yd-rollnotice>
    </div>
    <noCont></noCont>
  </div>
</template>
<script type="text/ecmascript-6">
import noCont from '../assets/lottInde'
export default {
  components: {
    noCont
  },
  name: 'evaluation',
  data () {
    return {
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.evaluation
  width 100%
  height 100%
  background #F8F8FF
  .scoll
    padding-top 1rem
    margin-bottom 0.5rem
    font-size 0.15rem
</style>
