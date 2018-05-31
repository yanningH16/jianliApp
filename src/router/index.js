import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import First from '@/components/first'
import Second from '@/components/second'
import ProjectInfo from '@/components/projectInfo'
import Skills from '@/components/skills'
import Evaluation from '@/components/evaluation'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
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
    }
  ]
})
