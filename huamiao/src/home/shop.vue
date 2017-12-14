<template>
	<div>
		<div class="huamiao_padding huamiao_padding_background">
			<div class="header">
				<a class="header_img">
					<img src="/static/img/bai_fanhui_icon@3x.png" alt="" />
				</a>
				<p></p>
				<div class="header_right">
					<a>
						<img src="/static/img/spxq_shoucang_icon@3x.png" alt="" />
					</a>
					<a>
						<img src="/static/img/fenxiang_icon@3x.png" alt="" />
					</a>
				</div>
			</div>
			<div class="huamiao_padding_background_bottom">
				<div class="huamiao_padding_background_bottom_img">
					<img v-bind:src="'/static/img/'+shopData.img_url" alt="" />
				</div>
				<p>{{shopData.name}}<br /><span class="color_font2">销售总量：{{shopData.totalVolume}}</span></p>
			</div>
		</div>
	
		<div class="shangjiazhuye_header_bottom">
			<div class="shangjiazhuye_header_bottom_font">
				<div class="shangjiazhuye_header_bottom_font_left">
					<h3>筷子专区</h3>
					<p>餐厅必备良品</p>
				</div>
				<div class="shangjiazhuye_header_bottom_font_right">
					<img src="/static/img/kuaizizhuanqu_icon@3x.png" alt="" />
				</div>
			</div>
			<div class="shangjiazhuye_header_bottom_font">
				<div class="shangjiazhuye_header_bottom_font_left">
					<h3>餐盒专区</h3>
					<p>餐盒大聚会</p>
				</div>
				<div class="shangjiazhuye_header_bottom_font_right">
					<img src="/static/img/kuaizizhuanqu_icon@3x.png" alt="" />
				</div>
			</div>
		</div>
		<div class="shangjiadianpu">
			<h1 class="shangjiadianpu_h1">-店铺商品-</h1>
			<ul class="shangjiadianpu_ul">
				<li v-for="(item,index) in childData" v-model="childData[index]" @click="href_shop(shopData.id,item.id)">
					<div class="shangjiadianpu_ul_font">
						<div class="shangjiadianpu_ul_font_img">
							<img src="/static/img/tu3.png" alt="" />
						</div>
						<p>{{item.name}}</p>
						<div  class="shangjiadianpu_ul_font_flex">
							<p>￥{{item.price}}/每箱</p>
						<p class="shangjiadianpu_ul_font_flex_p">已售 {{item.volume}} 件</p>
						</div>
					</div>	
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import axios from "axios"
	export default{
		data(){
			return{
				shopData:[],
				childData:[],
				childDatas:[],
				num:1,
				scrolled:"",
				img_url:[]
			}
		},
		mounted:function(){
			this.dataLoading();
			window.addEventListener('scroll', this.menu);
		},
		methods:{
			dataLoading(){
				var id = Number(this.$route.params.shopId);
				axios.get("api/shopData").then((result)=>{
					var res = result.data;
					if(res[0].id == id){
						this.shopData = res[0];
						this.childDatas = res[0].children;
						for(var i in this.childDatas){
							if(i < 4){
								this.childData[i]=this.childDatas[i];
							}
						}
					}
					
				})
			},
			menu(){
				var data = this.dropLoad(this,this.childDatas);
				if(data){
					this.childData = data;
				}
			},
			href_shop(id,id_2){
				this.$router.push({name:"commodity",params:{"shopId":id,"commodity_id":id_2}});
			}
		}
	}
</script>
