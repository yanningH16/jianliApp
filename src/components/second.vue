<template>
  <div>
    <div class="wrap">
      <yd-scrollnav>
        <yd-scrollnav-panel :label="item.label" v-for="(item, key) in list" :key="key">
          <!-- 内容 -->
          <p>{{item.label}}</p>
          <yd-list :theme="1">
            <yd-list-item v-for="i in 10" :key="i">
              <img slot="img" src="//static.shikee.com/common/img/blank.gif">
              <span slot="title">{{item.label}} - {{item.label}}</span>
            </yd-list-item>
          </yd-list>
          <!-- 内容 -->
        </yd-scrollnav-panel>
      </yd-scrollnav>
    </div>
  </div>
</template>

<script type="text/babel">
export default {
  data () {
    return {
      list: [
        { label: '今日特惠' },
        { label: '烟灶推荐' },
        { label: '净水饮水推荐' },
        { label: '洗碗机推荐' },
        { label: '电热推荐' },
        { label: '燃热推荐' },
        { label: '消毒柜推荐' },
        { label: '嵌入式推荐' },
        { label: '商用电器' },
        { label: '活动说明' }
      ]
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
</style>
