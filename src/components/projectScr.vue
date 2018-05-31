<template>
  <div class="wrap">
    <yd-lightbox>
      <yd-lightbox-img v-for="(item, key) in list" :key="key" :src="item.src"></yd-lightbox-img>
    </yd-lightbox>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: 'projectScr',
  data () {
    return {
      list: [
        { src: 'http://static.ydcss.com/uploads/lightbox/meizu_s1.jpg' },
        { src: 'http://static.ydcss.com/uploads/lightbox/meizu_s2.jpg' },
        { src: 'http://static.ydcss.com/uploads/lightbox/meizu_s3.jpg' },
        { src: 'http://static.ydcss.com/uploads/lightbox/meizu_s4.jpg' },
        { src: 'http://static.ydcss.com/uploads/lightbox/meizu_s5.jpg' },
        { src: 'http://static.ydcss.com/uploads/lightbox/meizu_s6.jpg' },
        { src: 'http://static.ydcss.com/uploads/lightbox/meizu_s1.jpg' },
        { src: 'http://static.ydcss.com/uploads/lightbox/meizu_s2.jpg' },
        { src: 'http://static.ydcss.com/uploads/lightbox/meizu_s3.jpg' },
        { src: 'http://static.ydcss.com/uploads/lightbox/meizu_s4.jpg' },
        { src: 'http://static.ydcss.com/uploads/lightbox/meizu_s5.jpg' },
        { src: 'http://static.ydcss.com/uploads/lightbox/meizu_s6.jpg' }
      ]
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.wrap
  width 100%
  height 100%
  text-align center
  img
    width 50%
</style>
