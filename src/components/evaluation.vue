<template>
  <div class="evaluation">
    <div class="scoll">
      <yd-rollnotice autoplay="3000" align='center'>
        <yd-rollnotice-item>
          平时为人友善、真诚,喜欢与他人交谈</yd-rollnotice-item>
        <yd-rollnotice-item>
          有自己的服务器和域名,喜欢的东西布到服务器上</yd-rollnotice-item>
          <yd-rollnotice-item>
          移动端的简历可在www.yanning.top:8081查看</yd-rollnotice-item>
        <yd-rollnotice-item>
          工作中在解决掉问题或bug的会有特别大的成就感</yd-rollnotice-item>
          <yd-rollnotice-item>
          工作之余喜欢跟朋友一起打打篮球，打打网球等</yd-rollnotice-item>
          <yd-rollnotice-item>
          人生中一直秉承着一句话：诚诚实实做人，实实在在做事</yd-rollnotice-item>
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
