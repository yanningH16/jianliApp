<template>
  <div>
    <div class="contet">
      <yd-tab v-model="tab1">
        <yd-tab-panel label="个人信息">
          <h2>个人基本资料</h2>
          <div class="detail">
            <!-- <yd-cell-group> -->
            <p>
              <yd-cell-item>
                <span class="color" slot="left">
                  <em style="margin-right:.25rem">姓</em>名：</span>
                <yd-input slot="right" v-model="input7" required :show-clear-icon="false" placeholder="请输入"></yd-input>
              </yd-cell-item>
            </p>
            <p>
              <yd-cell-item arrow>
                <span class="color" slot="left">出生年月：</span>
                <yd-datetime type="date" v-model="datetime4" slot="right"></yd-datetime>
              </yd-cell-item>
            </p>
            <!-- </yd-cell-group> -->
            <p class="sex">
              <span class="color">
                <em style="margin-right:.25rem">性</em>别:</span>
              <yd-radio-group v-model="radio2" style="display:inline-table">
                <yd-radio val="1">男</yd-radio>
                <yd-radio val="2">女</yd-radio>
              </yd-radio-group>
            </p>
            <p class="place">
              <yd-cell-item>
                <span class="color" slot="left">
                  <em style="margin-right:0.25rem">籍</em>贯:</span>
                <input slot="right" type="text" @click.stop="show2 = true" v-model="model2" readonly placeholder="请选择">
              </yd-cell-item>
              <yd-cityselect v-model="show2" ref="cityselectDemo" :callback="result2" :items="district" provance="河南" city="郑州市" area=""></yd-cityselect>
            </p>
            <p>
              <yd-cell-item>
                <span class="color" slot="left">毕业学校:</span>
                <yd-input slot="right" v-model="input8" required :show-clear-icon="false" placeholder="请输入"></yd-input>
              </yd-cell-item>
            </p>
            <p>
              <yd-cell-item arrow>
                <span class="color" slot="left">毕业时间:</span>
                <yd-datetime type="date" v-model="datetime5" slot="right"></yd-datetime>
              </yd-cell-item>
            </p>
            <p>
              <yd-cell-item>
                <span class="color" slot="left">求职意向:</span>
                <yd-input slot="right" v-model="input9" required :show-clear-icon="false" placeholder="请输入"></yd-input>
              </yd-cell-item>
            </p>
            <p>
              <yd-cell-item>
                <span class="color" slot="left">
                  <em style="margin-right:0.06rem">手</em>
                  <em style="margin-right:0.06rem">机</em>号:</span>
                <yd-input slot="right" v-model="input10" regex="mobile" placeholder="请输入"></yd-input>
              </yd-cell-item>
            </p>
            <p>
              <yd-cell-item>
                <span class="color" slot="left">
                  <em style="margin-right:0.25rem">邮</em>箱:</span>
                <yd-input slot="right" v-model="input11" :debug="true" regex="email" placeholder="请输入"></yd-input>
              </yd-cell-item>
            </p>
          </div>
        </yd-tab-panel>
        <yd-tab-panel label="技能信息">技能信息</yd-tab-panel>
        <yd-tab-panel label="项目信息">项目信息</yd-tab-panel>
         <yd-tab-panel label="个人评价">个人评价</yd-tab-panel>
      </yd-tab>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import District from 'ydui-district/dist/jd_province_city_area_id'
export default {
  name: 'first',
  data () {
    return {
      input7: '',
      radio2: 1,
      datetime4: '2017-8-25',
      show2: false,
      model2: '河南省 郑州市',
      district: District,
      datetime5: '',
      input8: '',
      input9: '',
      input10: '',
      input11: '',
      tab1: 3
    }
  },
  methods: {
    result2 (ret) {
      this.model2 = ret.itemName1 + ' ' + ret.itemName2 + ' ' + ret.itemName3
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.contet
  // margin-top 2rem
  h2
    text-align center
    font-size .2rem
    margin-top .2rem
  .detail
    margin-top .2rem
    font-size .15rem
    color #333
    .sex
      margin-top .15rem
      padding-left .15rem
    .place
      margin-top .12rem
    .color
      color #00CDCD
      margin-right .1rem
</style>
