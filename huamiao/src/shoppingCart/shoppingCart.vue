<template>
	<div>
		<div class="huamiao_padding" style="background: #fff;">
			<div class="header">
				<a class="header_left">
					
				</a>
				<p>确认订单</p>
				<a></a>
			</div>
		</div>
		<!--没有商品时显示-->
		<div class="gouwuche_null" v-if="shopNum">
			<div class="gouwuche_null_img">
				<img src="/static/img/gouwuche_wu_icon@3x.png" alt="" />
			</div>
			<p>您购物车还是空的 <br />快去逛逛吧</p>
		</div>
		<!--没有商品时显示-->
		
		<!--有商品时显示-->
		<div class="gouwuche_hidden" v-for="item in shop">
			<div class="gouwuche">
				<div class="gouwuche_left">
					<div class="gouwuche_shangpinxinxi_top">
						<div class="gouwuche_shangpinxinxi_top_left" @click="item.checked=isChecked2(item.checked);zj();">
							<div class="gouwuche_shangpinxinxi_top_img">
								<img v-bind:src="isChecked(item.checked)" alt="" />
							</div>
							<p>{{item.name}}</p>
						</div>
						<div class="gouwuche_shangpinxinxi_top_right">
							<div class="gouwuche_shangpinxinxi_top_del" @click="item.num=del(item.num);zj();">-</div>
							<div class="gouwuche_shangpinxinxi_top_shuliang"> {{item.num}} </div>
							<div class="gouwuche_shangpinxinxi_top_add" @click="item.num=add(item.num);zj();">+</div>
						</div>
						
					</div>
					<div class="gouwuche_shangpinxinxi_bottom">
						<div class="gouwuche_shangpinxinxi_bottom_left">
							<div class="gouwuche_shangpinxinxi_bottom_img">
								<img src="/static/img/953.png" alt="" />
							</div>
							<div class="gouwuche_shangpinxinxi_bottom_txt">
								<p>{{item.shopName}}</p>
								<p class="gouwuche_shangpinxinxi_bottom_p2">￥<span>{{item.price}}</span></p>
							</div>
						</div>
						<p class="gouwuche_shangpinxinxi_bottom_p3">x{{item.num}}</p>
					</div>
				</div>
				<div class="gouwuche_right">删除</div>
			</div>
		</div>
		
		<div class="huamiao_footer_jianju"></div>
	    <footer class="shangping_footer" style="bottom: 1.15rem;">
	    	<div style="line-height: 0.95rem;padding-left: 0.3rem;"><span class="color_font3">合计:</span><span class="color_font4" id="zongji">￥{{zjPrice}}</span></div>
	    	<div class="shangping_footer_font2">
	    		
	    		<a href="querendinghuo.html" class="shangping_footer_font2_a2">去结算</a>
	    	</div>
  		</footer>
		<nav-footer>
			<span slot="font_label3">
				<div class="huamiao_footer_font">
			    		<div class="huamiao_footer_font_img">
			    			<img src="/static/img/gouwuche_icon_sel@3x.png" alt="" />
			    		</div>
			    		<p class="huamiao_footer_font_click">购物车</p>
			    	</div>
			</span>
		</nav-footer>
	</div>
</template>

<script>
	import "@/assets/css/gouwuche.css"
	import axios from "axios"
	import $ from 'jquery'
	import NavHeader from "@/public/header"
	import NavFooter from "@/public/footer"
	export default {
		data(){
			return{
				shop:[],
				shopNum:true,
				zjPrice:0
			}
		},
		mounted:function (){
			this.shopData();
			this.zj();
		},
		methods:{
			add(price){
				price++;
				return price;
			},
			del(price){
				if(price>0){
					price--;
				}else{
					alert("数量不能小于0")
				}
				return price;
			},
			shopData(){
				axios.get("api/shop").then((result)=>{
					var res = result.data;
					if(res.length>0){
						this.shopNum = false;
						this.shop = res;
						this.zj();
					}
				})
				
			},
			zj(){
				var zjPrices = 0;
				for(var i in this.shop){
					console.log(this.shop[i].checked)
					if(this.shop[i].checked == 1){
						zjPrices += this.shop[i].price*this.shop[i].num;
					}
				}
				this.zjPrice = zjPrices;
			},
			isChecked(isCheck){
				var srcUrl = "";
				if(isCheck==0){
					srcUrl = "/static/img/weixuanzhong_icon@3x.png";
				}else{
					srcUrl = "/static/img/xuanzhong_icon@2x.png";
				}
				return srcUrl;
			},
			isChecked2(isCheck){
				if(isCheck == 0){
					isCheck = 1;
				}else{
					isCheck = 0;
				}
				this.zj();
				return isCheck;
			}
		},
		components:{
			NavHeader,
			NavFooter
		}
	}
</script>

<style>
</style>