<template>
	<div>
		<div class="huamiao_padding" style="border-bottom: 0.01rem solid #efefef;">
			<div class="search_header">
				<div class="search_header_img">
					<img src="/static/img/search_sousuo_icon@3x.png" alt="" />
				</div>
				<div class="search_header_center">
					<input type="" placeholder="店铺名、商品名称、品牌"/>
				</div>			
				<a href="/#/index_nav">取消</a>
			</div>
		</div>
		<div class="huamiao_padding huamiao_background">
			<div class="search_renmen">
				<p class="search_renmen_h3">热门搜索<p>
				<ul class="search_renmen_ul">
					<li v-for="item in dataHistory">{{item.name}}</li>
				</ul>
				<div class="search_lishi">
					<div class="search_lishi_header">
						<p>历史搜索</p>
						<div class="search_lishi_header_img">
							<img src="/static/img/huishou2.png" alt="" />
						</div>
					</div>
					<ul class="search_renmen_ul">
						<li v-for="item in dataHot">{{item.name}}</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import NavHeader from "@/public/header"
	import NavFooter from "@/public/footer"
	import axios from "axios"
	export default {
		data(){
			return{
				dataHistory:[],
				dataHot:[]
			}
		},
		mounted:function(){
			this.data_loading();
		},
		methods:{
			data_loading(){
				axios.get("/api/dataSearch").then((result)=>{
					var res = result.data[0];
					this.dataHot = res.dataHot;
					this.dataHistory = res.dataHistory;
					console.log(this.dataHot)
				})
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