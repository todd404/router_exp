import Vue from 'vue'
import VueRouter from 'vue-router'
import Message from '../components/Message.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: "/message?msg=待付款信息"
  },
  {
    path: '/message',
    name: 'Message',
    component: Message,
    props: route => ({msg: route.query.msg})
  },
]

const router = new VueRouter({
  routes
})

export default router
