<template>
	<div>
		<div class="huamiao_padding">
			<div class="header">
				<a class="header_left"></a>
				<p>发现</p>
				<a></a>
			</div>
		</div>
		
		<div class="huamiao_padding">
			<div class="faxian huamiao_background2">
				<p class="faxian_h3">VIP 报名</p>
				<a href="baoming.html">
					<div>
						<img src="/static/img/57fb4d4e0b6cd.png" alt="" />
					</div>
				</a>
			</div>
		
			<div class="faxian huamiao_background2">
				<p class="faxian_h3">活动</p>
				
				<!--没有活动显示-->
				<div class="faxiao_huodong2">
					<div class="faxiao_huodong2_img">
						<img src="/static/img/wuhuodong@3x.png" alt="" />
					</div>
					<p>暂时没有活动</p>
				</div>
				<!--没有活动显示-->
				
				<!--有活动时显示-->
				<a href="">
					<div>
						<img src="/static/img/590dec0ed816b.png" alt="" />
					</div>
					<p class="faxian_p1">年中618大促销活动火热进行中</p>
					<p class="faxian_p2">2017.06.08</p>
				</a>						
				<div>
					<img src="/static/img/593563cb243f7.png" alt="" />
				</div>
				<p class="faxian_p1">年中618大促销活动火热进行中</p>
				<p class="faxian_p2">2017.06.08</p>
			</div>
			<!--有活动时显示-->
		</div>
		<nav-footer>
			<span slot="font_label2">
				<div class="huamiao_footer_font">
			    	<div class="huamiao_footer_font_img">
			    		<img src="/static/img/gouwuche_icon_sel@3x.png" alt="" />
			    	</div>
			    	<p class="huamiao_footer_font_click">发现</p>
			    </div>
			</span>
		</nav-footer>
	</div>
</template>

<script>
	import NavHeader from "@/public/header"
	import NavFooter from "@/public/footer"
	
	export default{
		name : "about",
		data(){
			return {
				
			}
		},
		components:{
			NavHeader,
			NavFooter
		}
	}
</script>
