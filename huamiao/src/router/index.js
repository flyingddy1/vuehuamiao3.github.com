import Vue from 'vue'
import Router from 'vue-router'
import huamiao from '@/home/index'
import index_nav from '@/home/index_nav'
import index_nav2 from '@/home/index_nav2'
import about from "@/about/about"
import shoppingCart from "@/shoppingCart/shoppingCart"
import my from "@/my/my"
import search from "@/home/search"
import news from "@/home/news"
import shop from "@/home/shop"
import commodity from "@/home/commodity"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'huamiao',
      component: huamiao,
      children:[
      	{
      		path:'index_nav',
      		name:'index_nav',
      		component:index_nav
      	},
      	{
      		path:'index_nav2',
      		name:'index_nav2',
      		component:index_nav2
      	}
      ]
    },
    {
    	path:'/about',
    	name:'about',
    	component:about
    },
    {
    	path:'/shoppingCart',
    	name:'shoppingCart',
    	component:shoppingCart
    },
    {
    	path:'/my',
    	name:'my',
    	component:my
    },
    {
    	path:'/search',
    	name:'search',
    	component:search
    },
    {
    	path:'/news',
    	name:'news',
    	component:news
    },
    {
    	path:'/shop/:shopId',
    	name:'shop',
    	component:shop
    },
    {
    	path:"/commodity/:shopId/:commodity_id",
    	name:"commodity",
    	component:commodity
    }
  ]
})
