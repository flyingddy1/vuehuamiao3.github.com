<template>
	<div>
		<div class="swiper-container">
	        <div class="swiper-wrapper" >
	            <div class="swiper-slide" v-for="item in img_url">
	            	<img v-bind:src="'/static/img/'+item.img_src"/>
	            </div>
	        </div>
	        <div class="swiper-pagination"></div>
	    </div>
	    <div class="shuimiao_absolute">
	    	<a href="/#/search">
	    		<div class="shuimiao_absolute_search">
	    			<input class="shuimiao_search" value="搜索"/>
	    		</div>
	    	</a>
	    	<div class="shuimiao_absolute_xiaoxi">
	    		<a href="/#/news">
	    			<div>
		    			<img src="/static/img/xiaoxi.png" alt="" />
		    		</div>
	    		</a>
	    		
	    	</div>
	    </div>
	    <div class="dianjigoumai">
	    	<img src="/static/img/home_scgm_button@3x.png" alt="" />
	    </div>
	    
	    <div class="huamiao_padding">
	    	<div class="youxuanqingdan">
		    	<div class="youxuanqingdan_top">
		    		<div class="youxuanqingdan_top_img">
		    			<img src="/static/img/youxuanqingdan@3x.png" alt="" />
		    		</div>
		    		<p>推荐店铺和商品</p>
		    	</div>
		    	<ul class="youxuanqingdan_bottom">
		    		<router-link to="index_nav" replace>
		    			<a><li v-bind:class="{'font_color2':class_click==1}" @click="class_click=1">推荐店铺</li></a>
		    		</router-link>
		    		<router-link to="index_nav2" replace>
		    			<a><li v-bind:class="{'font_color2':class_click==2}" @click="class_click=2">精选商品</li></a>
		    		</router-link>
		    	</ul>
		    </div>
	    </div>  
	    <router-view></router-view>
	    
	    <nav-footer>
	    	<span slot="font_label">
	    		<div class="huamiao_footer_font">
			    	<div class="huamiao_footer_font_img">
			    		<img src="/static/img/home_icon_sel@3x.png" alt="" />
			    	</div>
			    	<p class="huamiao_footer_font_click">首页</p>
			    </div>
	    	</span>
	    </nav-footer>
	</div>
</template>

<script>
	import NavHeader from "@/public/header"
	import NavFooter from "@/public/footer"
	import Swiper from "../../static/js/swiper-3.4.2.min.js"
	import axios from "axios"
	import $ from 'jquery'
	export default{
		name : 'huamiao',
		data(){
			return {
				img_url : [],
				class_click:1
			}
		},
		mounted:function(){
    		this.lunbo();
    	},
    	methods:{
    		lunbo(){
    			axios.get("/api/lunbo").then((result)=>{
    				var res = result.data;
    				this.img_url = res;
    				if(res){
    					var mySwiper = new Swiper('.swiper-container', {
				            autoplay: 2000,//可选选项，自动滑动
				                //分页器
				            pagination : '.swiper-pagination',
				            paginationClickable :true,
				            observer: true 
			            })
    				}
    			});
        	}
    	}, 
    	components:{
    		NavHeader,
    		NavFooter
    	}
	}
</script>