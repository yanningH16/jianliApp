<template>
  <div class="wrap">
    <h1>技能信息</h1>
    <p>
      <span>1.</span>等一个人、还是等一个故事
    </p>
    <p>
      <span>2.</span>回得了过去，回不了当初</p>
    <p>
      <span>3.</span>我是唯一有伞，仍然淋湿的人吗？</p>
    <p>
      <span>4.</span>向来缘浅，奈何情深？</p>
    <p>
      <span>5.</span>戏子入画、一生天涯。</p>
    <p>
      <span>6.</span>只身步步海天涯、路无归、霜满颜。</p>
    <p>
      <span>7.</span>夜微凉、灯微暗、暧昧散尽、笙歌婉转。</p>
    <div class="progree">
      综合掌握程度
      <div class="round" >
        <yd-progressbar :progress="progress2" trail-width="2" stroke-width="4" stroke-color="#B2B2B2" trail-color="#FE5D51" fill-color="#EAEAEA">{{progress2 * 100}}%</yd-progressbar>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: 'skills',
  data () {
    return {
      progress2: 0.9
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.wrap
  width 100%
  height 100%
  background #C6E2FF
  p
    padding 0.2rem
    font-size 0.15rem
    line-height 0.2rem
    span
      margin-right 0.1rem
  h1
    text-align center
    font-size 0.2rem
    line-height 0.5rem
    color #8FBC8F
  .progree
    text-align center
    font-size 0.2rem
    color #EE0000
    .round
      width 0.6rem
      height 0.6rem
      margin-left 41%
      margin-top 0.2rem
</style>
