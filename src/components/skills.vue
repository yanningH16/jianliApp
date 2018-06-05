<template>
  <div class="wrap">
    <h1>技能信息</h1>
    <p>
      <span>1.</span>
      <em>精通HTML/CSS，对标签的使用能够做到语义化、合理化、模块化，并且符合W3C标准，充分实现结构、表现、行为的三者分离</em>
    </p>
    <p>
      <span>2.</span>
      <em>熟练掌握JavaScript，jQuery，能够实现常用的交互效果</em>
    </p>
    <p>
      <span>3.</span>
      <em>熟练掌握vue全家桶(vue+ vue-router +vuex+ axios +es6 +stylus)</em>
    </p>
    <p>
      <span>4.</span>
      <em>熟练掌握webpack快速构建项目,以及项目打包的使用</em>
    </p>
    <p>
      <span>5.</span>
      <em>熟练使用Vue2.0的组件库如 Element, mint, ydui, muse, vux等</em>
    </p>
    <p>
      <span>6.</span>
      <em>了解AngularJS和react,能够简单构建项目</em>
    </p>
    <p>
      <span>7.</span>
      <em>熟练使用团队代码管理工具，如：git、svn</em>
    </p>
    <p>
      <span>8.</span>
      <em>能够使用Xshell将项目部署上线</em>
    </p>
    <div class="progree">
      综合掌握程度
      <div class="round">
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
  background url('../assets/image/bg1.png')
  background-size 100% 100%
  p
    padding 0.2rem
    font-size 0.13rem
    line-height 0.2rem
    span
      margin-right 0.1rem
    em
      width 93%
  h1
    text-align center
    font-size 0.2rem
    line-height 0.5rem
    color #8FBC8F
  .progree
    text-align center
    font-size 0.2rem
    color #2D835C
    background #C2E0DE
    .round
      width 0.6rem
      height 0.6rem
      margin-left 41%
      margin-top 0.2rem
</style>
