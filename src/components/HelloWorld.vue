<template>
  <div class="hello">
    <h1>个人简历</h1>
    <div class="home">
      <yd-button @click.native="btn" bgcolor='#A020F0' shape='circle' color='#FFFFFF' style="margin-top:0.3rem">基本信息</yd-button><br>
      <yd-button @click.native="btns" type="primary" shape='circle' style="margin-top:0.3rem">技能信息</yd-button><br>
      <yd-button @click.native="project" type="warning" shape='circle' style="margin-top:0.3rem">项目信息</yd-button><br>
      <yd-button @click.native="evaluation" bgcolor='#79CDCD' shape='circle' color='#FFFFFF' style="margin-top:0.3rem">自我评价</yd-button><br>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  },
  methods: {
    btn () {
      this.$router.push({ name: 'first' })
    },
    btns () {
      this.$router.push({ name: 'skills' })
    },
    project () {
      this.$router.push({ name: 'projectInfo' })
    },
    evaluation () {
      this.$router.push({ name: 'evaluation' })
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.hello
  height 100%
  // background url('../assets/image/bg1.png')
  // background-size 100% 100%
  width 100%
  .home
    position absolute
    top 30%
    left 40%
    text-align center
    padding 3px
    cursor pointer
  h1
    width 100%
    height 0.5rem
    // background #EEE8AA
    text-align center
    line-height 0.5rem
    font-size 0.2rem
    border-radius 3px
    opacity 0.5
</style>
