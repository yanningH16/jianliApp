import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import First from '@/components/first'
import Second from '@/components/second'
import ProjectInfo from '@/components/projectInfo'
import Skills from '@/components/skills'
import Evaluation from '@/components/evaluation'
import ProjectScr from '@/components/projectScr'
import SmsSrc from '@/components/smsSrc'
import HchwSrc from '@/components/hchwSrc'
import HshSrc from '@/components/hshSrc'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/smsSrc',
      name: 'smsSrc',
      component: SmsSrc
    },
    {
      path: '/hshSrc',
      name: 'hshSrc',
      component: HshSrc
    },
    {
      path: '/hchwSrc',
      name: 'hchwSrc',
      component: HchwSrc
    },
    {
      path: '/first',
      name: 'first',
      component: First
    },
    {
      path: '/second',
      name: 'second',
      component: Second
    },
    {
      path: '/projectInfo',
      name: 'projectInfo',
      component: ProjectInfo
    },
    {
      path: '/skills',
      name: 'skills',
      component: Skills
    },
    {
      path: '/evaluation',
      name: 'evaluation',
      component: Evaluation
    },
    {
      path: '/projectScr',
      name: 'projectScr',
      component: ProjectScr
    }
  ]
})
