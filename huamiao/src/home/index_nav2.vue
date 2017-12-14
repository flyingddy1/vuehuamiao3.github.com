<template>
	 <ul class="huamiao_dianpu_ul2">
	    <li v-for="(item,index) in goods2" v-model="goods2[index]">
	    	<a href="shangpinxiangqing.html">
	    		<div class="huamiao_dianpu_ul2_font">
		    		<div class="huamiao_dianpu_ul2_font_img">
		    			<img v-lazy="'/static/img/'+item.img_src"/>
		    		</div>
		    		<p>{{item.name}}<br /><span>￥{{item.sold}}/每箱</span></p>
		    	</div>
	    	</a>
		</li>
	</ul>
</template>

<script>
	import axios from "axios"
	import $ from 'jquery'
	export default{
		data(){
			return {
				goodss2 :[],
				goods2 : [],
				num : 0,
				scrolled:""
			}
		},
		mounted:function(){
    		this.goods_get();
    		window.addEventListener('scroll', this.menu);
    		if($(".huamiao_dianpu_ul2").length>0){
    			$(".youxuanqingdan_bottom").find("li").removeClass("font_color2");
    			$(".youxuanqingdan_bottom").find("li").eq(1).addClass("font_color2");
    		}
    	},
    	methods:{
        	goods_get(){
        		axios.get("/api/goods2").then((result)=>{
        			var res = result.data;
        			this.goodss2=res;
        			var data = {};
        			for(var i in this.goodss2){
        				if(i < 6){
        					data[i]=this.goodss2[i];
        				}
        			}
        			this.goods2 = data;
        		})
        	},
        	menu(){
        		this.scrolled = $("body").scrollTop();
        		if($("body").height() < (this.scrolled+$(window).height()+10)){
        			this.num++;
        			var data = {};
        			for(var i in this.goodss2){
        				if(i < (this.num+8) ){
        					data[i]=this.goodss2[i];
        				}
        			}
        			this.goods2 = data;
        		}
        	}
    	}
	}
</script>
