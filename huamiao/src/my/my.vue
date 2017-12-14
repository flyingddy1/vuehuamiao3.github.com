<template>
	<div>
		<div class="shangpinxiangqing_fiexd">
			<div class="huamiao_padding">
				<div class="header">
					<a class="header_left">
						
					</a>
					<p></p>
					<a>
						<img src="/static/img/wode_bjxx_icon@3x.png" alt="" />
					</a>
				</div>
			</div>
		</div>
		<div class="my_header">
			<div class="my_header_background">
				<div class="my_header_img">
					<img src="/static/img/IMG_1499.png" alt="" />
				</div>
				<p class="my_header_p">不二</p>
			</div>
		</div>
		
		<div class="my_dingdan">
			<div class="my_dingdan_top">
				<p class="my_dingdan_top_left">我的订单</p>
				<a href="wodedingdan.html">
					<div class="my_dingdan_top_right">
						<p>查看全部订单</p>
						<div class="my_dingdan_top_right_img">
							<img src="/static/img/jiantou.png" alt="" />
						</div>
					</div>
				</a>
				
			</div>
			<div class="my_dingdan_bottom">
				<div>
					<div class="my_dingdan_bottom_img">
						<img src="/static/img/daifukuan_icon@3x.png.png" alt="" />
					</div>
					<p>待付款</p>
				</div>
				<div>
					<div class="my_dingdan_bottom_img">
						<img src="/static/img/daishouhuo_icon@3x.png" alt="" />
					</div>
					<p>待收货</p>
				</div>
				<div>
					<div class="my_dingdan_bottom_img">
						<img src="/static/img/daipingjia_icon@3x.png" alt="" />
					</div>
					<p>待评论</p>
				</div>
				<div>
					<div class="my_dingdan_bottom_img">
						<img src="/static/img/yiwangcheng_icon@3x.png" alt="" />
					</div>
					<p>已完成</p>
				</div>
			</div>
		</div>
		
		<div class="huamiao_padding">
			<div class="my_fuwu">
				<p class="my_fuwu_p">我的服务</p>
				<div class="my_fuwu_flex">
					<div class="my_fuwu_flex_font">
						<a href="zhanghu.html">
							<div class="my_fuwu_flex_font_img">
								<img src="/static/img/wodezhanghu_icon@3x.png"/>
							</div>
							<p>我的账户</p>
						</a>
						
					</div>
					<div class="my_fuwu_flex_font">
						<a href="shoucang.html">
							<div class="my_fuwu_flex_font_img">
								<img src="/static/img/wodeshoucang_icon@3x.png"/>
							</div>
							<p>我的收藏</p>
						</a>
					</div>
					<div class="my_fuwu_flex_font">
						<a href="jifen.html">
							<div class="my_fuwu_flex_font_img">
								<img src="/static/img/jifen_icon@3x.png"/>
							</div>
							<p>积分</p>
						</a>
						
					</div>
					<div class="my_fuwu_flex_font">
						<a href="tuijian.html">
							<div class="my_fuwu_flex_font_img">
								<img src="/static/img/tuijianyouli_icon@3x.png"/>
							</div>
							<p>推荐有礼</p>
						</a>
						
					</div>
					<div class="my_fuwu_flex_font2"></div>
					<div class="my_fuwu_flex_font">
						<a href="shouhuodizhi.html">
							<div class="my_fuwu_flex_font_img">
								<img src="/static/img/dizhi_icon@3x.png"/>
							</div>
							<p>地址管理</p>
						</a>
						
					</div>
					<div class="my_fuwu_flex_font">
						<a href="fankui.html">
							<div class="my_fuwu_flex_font_img">
								<img src="/static/img/yijianfankui_icon@3x.png"/>
							</div>
							<p>意见反馈</p>
						</a>
						
					</div>
					<div class="my_fuwu_flex_font">
						<a href="guanyuwomen.html">
							<div class="my_fuwu_flex_font_img">
								<img src="/static/img/gywm_icon@3x.png"/>
							</div>
							<p>关于我们</p>
						</a>
						
					</div> 
					<div class="my_fuwu_flex_font">
						<a href="shezhi.html">
							<div class="my_fuwu_flex_font_img">
								<img src="/static/img/shezhi_icon@3x.png"/>
							</div>
							<p>设置</p>
						</a>
					</div> 
				</div>
			</div>
		</div>
		<nav-footer>
			<span slot="font_label4">
				<div class="huamiao_footer_font">
			    	<div class="huamiao_footer_font_img">
			    		<img src="/static/img/home_wode_sel@3x.png" alt="" />
			    	</div>
			    <p class="huamiao_footer_font_click">我的</p>
			   </div>
			</span>
		</nav-footer>
	</div>
</template>

<script>
	import "@/assets/css/my.css"
	import NavHeader from "@/public/header"
	import NavFooter from "@/public/footer"
	export default{
		data(){
			return{
				
			}
		},
		components:{
			NavHeader,
			NavFooter
		}
	}
</script>