<template>
  <div class="hello">
    <div class="home">
      <yd-button @click.native="btn" type="primary">我是首页</yd-button><br>
      <yd-button @click.native="btns" type="primary" style="margin-top:0.3rem">我是关于</yd-button>
    </div>
    <yd-button size="large" type="primary">大按钮</yd-button>
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
      this.$router.push({ name: 'second' })
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.hello
  height 100%
  .home
    position absolute
    top 45%
    left 40%
    text-align center
    padding 3px
    cursor pointer
</style>
