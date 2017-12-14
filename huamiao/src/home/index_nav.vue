<template>
	<ul class="huamiao_dianpu_ul">
	    	<li v-for="(item,index) in goods" v-model="goods[index]" @click="href_shop(item.id)">
	    		<div class="huamiao_dianpu_ul_font">
	    			<div class="huamiao_dianpu_ul_font_left">
	    				<img v-lazy="'/static/img/'+item.img_src" alt="" />
	    			</div>
	    			<div class="huamiao_dianpu_ul_font_center">
	    				<h3>{{item.name}}</h3>
	    				<p>已售{{item.sold}}件</p>
	    			</div>
	    			<a class="huamiao_dianpu_ul_font_right">进入店铺</a>
	    		</div>
	    	</li>
	</ul>
</template>

<script type="text/javascript">
	import axios from "axios"
	import $ from 'jquery'
	export default{
		data(){
			return {
				goodss :[],
				goods : [],
				num : 0,
				scrolled:""
			}
		},
		mounted:function(){
    		this.goods_get();
    		window.addEventListener('scroll', this.menu);
    		$(".youxuanqingdan_bottom").find("li").removeClass("font_color2");
    		if($(".huamiao_dianpu_ul").length>0){
    			$(".youxuanqingdan_bottom").find("li").eq(0).addClass("font_color2");
    		}
    	},
    	methods:{
        	goods_get(){
        		axios.get("/api/goods").then((result)=>{
        			var res = result.data;
        			this.goodss=res;
        			var data = {};
        			for(var i in this.goodss){
        				if(i < (this.num+3) ){
        					data[i]=this.goodss[i];
        				}
        			}
        			this.goods = data;
        		})
        	},
        	menu(){
        		this.scrolled = $("body").scrollTop();
        		if($("body").height() < (this.scrolled+$(window).height()+1)){
        			this.num++;
        			var data = {};
        			for(var i in this.goodss){
        				if(i < (this.num+3) ){
        					data[i]=this.goodss[i];
        				}
        			}
        			this.goods = data;
        		}
        	},
        	href_shop(id){
        		this.$router.push({name: 'shop', params: {"shopId": id}}) 
        	}
    	}
	}
</script>