<template>
  <div>
    <p class="first">
      <lottie :options="defaultOptions" :height="120" :width="120" :animCreated="handleAnimation" />
    </p>
    <p class="first2">
      <lottie :options="defaultOptions" :height="120" :width="120" :animCreated="handleAnimation" />
    </p>

    <p class="first3">
      <lottie :options="defaultOptions" :height="120" :width="120" :animCreated="handleAnimation" />
    </p>
    <!-- <div>
      <p>Speed: x{{animationSpeed}}</p>
      <input type="range" value="1" min="0" max="3" step="0.5" v-on:change="onSpeedChange" v-model="animationSpeed">
    </div>
    <button v-on:click="stop">stop</button>
    <button v-on:click="pause">pause</button>
    <button v-on:click="play">play</button> -->
  </div>
</template>

<script>
import Lottie from './lott.vue'
// import * as animationData from './heart.json'
// import * as animationData from './emoji.json'
import * as animationData from './happy_tree.json'
export default {
  name: 'app',
  components: {
    'lottie': Lottie
  },
  data () {
    return {
      defaultOptions: { animationData: animationData },
      animationSpeed: 1
    }
  },
  methods: {
    handleAnimation: function (anim) {
      this.anim = anim
    },
    stop: function () {
      this.anim.stop()
    },
    play: function () {
      this.anim.play()
    },
    pause: function () {
      this.anim.pause()
    },
    onSpeedChange: function () {
      this.anim.setSpeed(this.animationSpeed)
    }
  }
}
</script>
<style lang="stylus" scoped>
.first
  margin-left -50%
.first3
  margin-left 50%
</style>
