<template>
	<div>
		<div class="shangpinxiangqing_fiexd">
			<div class="huamiao_padding">
				<div class="header">
					<a class="header_left">
						<img src="/static/img/spxq_fanhui_icon@3x.png" alt="" />
					</a>
					<p></p>
					<a>
						<img src="/static/img/spxq_fenxiang_icon@3x.png" alt="" />
					</a>
				</div>
			</div>
		</div>
		
		<div class="swiper-container">
	        <div class="swiper-wrapper">
	            <div class="swiper-slide" v-for="(item,index) in img_url" v-model="img_url[index]">
	            	<img v-bind:src="'/static/img/'+item.img_src"/>
	            </div>
	        </div>
	        <div class="swiper-pagination"></div>
	    </div>
	    <div class="shangpingxinxi">
	    	<h1>四合一套装筷子</h1>
	    	<p class="shangpingxinxi_p1">400套/箱天削筷子、勺子、纸巾、牙签</p>
	    	<p class="shangpingxinxi_p2">已售 999 件 库存35件</p>
	    	<p class="shangpingxinxi_p3">￥ 60</p>
	    </div>
	    
	    <div class="yonghupingjia">
	    	<div class="yonghupingjia_top">
	    		<p class="yonghupingjia_top_p1">用户评价</p>
	    		<p class="yonghupingjia_top_p2">查看全部  &gt;</p>
	    	</div>
	    	<div class="yonghupingjia_center">
	    		<div class="yonghupingjia_center_flex">
	    			<div class="yonghupingjia_center_img">
		    			<img src="/static/img/IMG_14991.png" alt="" />
		    		</div>
		    		<p>不二***</p>
	    		</div>
	    		<p>2017.06.14 18:39</p>
	    	</div>
	    	<p class="yonghupingjia_p">非常棒的一次购物，饭店外卖都可以用，质量很好，下次还会过来买的，祝店主生意兴隆</p>
	    	<div class="yonghupingjia_img">
	    		<img src="/static/img/953.png" alt="" />
	    	</div>
	    </div>
	    <div class="huamiao_footer_jianju"></div>
	    <footer class="shangping_footer">
	    	<div class="shangping_footer_font">
	    		<img src="/static/img/shangjia_icon@3x.png" alt="" />
	    	</div>
	    	<div class="shangping_footer_font">
	    		<img src="/static/img/spxq_shoucang_icon@3x.png" alt="" />
	    	</div>
	    	<div class="shangping_footer_font">
	    		<img src="/static/img/spxq_gwc_icon@3x.png" alt="" />
	    	</div>
	    	<div class="shangping_footer_font2">
	    		<a  class="shangping_footer_font2_a1">订货</a>
	    		<a href="querendinghuo.html" class="shangping_footer_font2_a2">购买</a>
	    	</div>
	    </footer>
	</div>
</template>

<script>
	import axios from "axios"
	export default{
		data(){
			return{
				img_url:[]
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
    				console.log(this.img_url)
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
		}
	}
</script>

<style>
</style>