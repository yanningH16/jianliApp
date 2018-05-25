<template>
  <div class="hello">
    <div class="home">
      <yd-button @click.native="btn" type="primary">我是首页</yd-button>
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
