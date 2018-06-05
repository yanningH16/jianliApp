<template>
  <div class="wrap">
    <yd-accordion>
      <yd-accordion-item title="焦作移动办公--2018">
        <div style="padding: .24rem;">
          <p>花间一壶酒，独酌无相亲。</p>
          <p>举杯邀明月，对影成三人。</p>
          <p>月既不解饮，影徒随我身。</p>
          <p>暂伴月将影，行乐须及春。</p>
          <p>我歌月徘徊，我舞影零乱。</p>
          <p>醒时同交欢，醉后各分散。</p>
          <p>永结无情游，相期邈云汉。</p>
        </div>
      </yd-accordion-item>
      <yd-accordion-item title="云信短信(PC端)--2017 ">
        <div class="texts">
          <p>
            <span>项目描述:</span> 项目分为首页、营销短信、系统短信、签名管理、账单管理、帮助文档模块，业务逻辑主要在营销短息和系统短信上面，不同的发送方式所触发不同的请求逻辑，项目中用的技术点主要是vue+vuex+element ui完成的，其中vue作为项目的整体搭建，element ui 快速将页面梳理出来，css预处理用的是stylus,图表部分引用的是echarts,开发中尽量使用了es6语法进行开发，整个项目采用前后端完全分离的方式进行开发，效率较高</p>
          <p>
            <span>项目职责:</span>
            <em>1.</em>参与项目前期的需求讨论分析,评估项目时间；
            <em>2.</em>快速页面的构建
            <em>3.</em>接口的对接
            <em>4.</em>遇到缺字段，缺接口的及时和后台沟通
            <em>5.</em>自测，利用Xshell部署到线上
            <em>6.</em>后期进行相应的优化和维护。
          </p>
          <p style="color:#CD1076">
           <router-link :to="{name:'smsSrc'}">~点击查看项目截图~</router-link>
          </p>
        </div>
      </yd-accordion-item>
      <yd-accordion-item title="惠才好物(PC端(商家端,管理平台),移动端(买家端))--2017 ">
        <div class="texts">
          <p>
            <span>项目描述:</span> 惠才好物是一个类似于商城的项目，团队开发的一个项目，项目分为三个端，商家端主要逻辑在注册登录，店铺绑定，资金的充值，任务的发布，管理平台主要是一些列任务的审核，而买家端的主要逻辑是任务的领取，以及做任务的复杂流程等，项目中用的技术点主要是vue+vuex+element ui完成的，其中vue作为项目的整体搭建，element ui 快速将页面梳理出来，css预处理用的是stylus,后期优化引用的插件部分采用CDN引入方法，减少服务器压力，整个项目采用前后端完全分离的方式进行开发</p>
          <p>
            <span>项目职责:</span>
            <em>1.</em>参与项目前期的需求讨论分析,评估项目时间；
            <em>2.</em>快速页面的构建
            <em>3.</em>接口的对接
            <em>4.</em>遇到缺字段，缺接口的及时和后台沟通
            <em>5.</em>自测，利用Xshell部署到线上
            <em>6.</em>后期进行相应的优化和维护。
          </p>
          <p style="color:#CD1076">
           <router-link :to="{name:'hchwSrc'}">点击查看项目截图</router-link>
          </p>
        </div>
      </yd-accordion-item>
      <yd-accordion-item title="红商会(PC端(商家端,管理平台),移动端(买家端))--2017 ">
        <div class="texts">
          <p>
            <span>项目描述:</span> 红商会也是一个类似于商城的项目，团队开发的一个项目，两个前端，两个后端完成的项目，项目分为三个端，商家端主要逻辑在注册登录，店铺绑定，资金的充值，任务的发布，管理平台主要是一些列任务的审核，以及给买家任务的分配较为复杂，而买家端的主要逻辑是任务的领取，以及做任务的流程等，项目中用的技术点主要是vue+vuex+element ui完成的，其中vue作为项目的整体搭建，element ui 快速将页面梳理出来，css预处理用的是stylus,后期优化引用的插件部分采用CDN引入方法，减少服务器压力，整个项目采用前后端完全分离的方式进行开发，此项目与惠才好物相似，但某些地方逻辑处理上更加简单合理，同时移动端采用自己写组件进行模块化，组件化的开发</p>
          <p>
            <span>项目职责:</span>
            <em>1.</em>参与项目前期的需求讨论分析,评估项目时间；
            <em>2.</em>快速页面的构建
            <em>3.</em>接口的对接
            <em>4.</em>遇到缺字段，缺接口的及时和后台沟通
            <em>5.</em>自测，利用webpack打包上线，利用Xshell部署到线上
            <em>6.</em>后期进行相应的优化和维护。
          </p>
          <p style="color:#CD1076">
          <router-link :to="{name:'hshSrc'}">点击查看项目截图</router-link>
          </p>
        </div>
      </yd-accordion-item>
       <yd-accordion-item title="包裹网(PC端（商家端,分站系统,渠道系统,总站系统)--2017 ">
        <div class="texts">
          <p>
            <span>项目描述:</span> 包裹网是一个和圆通物流合作发货的项目，团队开发的一个项目，两个前端，两个后端完成的项目，项目分为四个端，商家端主要逻辑在注册登录，店铺绑定，资金的充值，发货流程，发货地址管理等，分站系统主要是对商家资金的审核，以及添加推荐人，资金充值向上一级申请审核，渠道系统的主要逻辑是审核分站的一些申请，总站则是拥有最高权限可以操作审核下面的所有东西，项目中用的技术点主要是vue+vuex+element ui完成的，其中vue作为项目的整体搭建，element ui 快速将页面梳理出来，css预处理用的是stylus,后期优化引用的插件部分采用CDN引入方法，减少服务器压力，整个项目采用前后端完全分离的方式进行开发。</p>
          <p>
            <span>项目职责:</span>
            <em>1.</em>参与项目前期的需求讨论分析,评估项目时间；
            <em>2.</em>快速页面的构建
            <em>3.</em>接口的对接
            <em>4.</em>遇到缺字段，缺接口的及时和后台沟通
            <em>5.</em>自测，利用webpack打包上线，利用Xshell部署到线上
            <em>6.</em>后期进行相应的优化和维护。
          </p>
          <p style="color:#CD1076">
           <router-link :to="{name:'projectScr'}">点击查看项目截图</router-link>
          </p>
        </div>
      </yd-accordion-item>
      <yd-accordion-item title="基于地名地址的大数据分析图表">
        <div style="padding: .24rem;">
          <p>岱宗夫如何，齐鲁青未了。</p>
          <p>造化钟神秀，阴阳割昏晓。</p>
          <p>荡胸生层云，决眦入归鸟。</p>
          <p>会当凌绝顶，一览众山小。</p>
        </div>
      </yd-accordion-item>
    </yd-accordion>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: 'projectInfo',
  data () {
    return {
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.wrap
  width 100%
  height 100%
  // background #F8F8FF
  .texts
    padding 0 0.24rem 0.24rem 0.24rem
    p
      line-height 0.3rem
      font-size 0.13rem
      span
        color #9932CC
        font-size 0.14rem
        font-weight 800
      em
        color #ff3341
</style>
