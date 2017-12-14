<template>
	<div>
		<div class="huamiao_padding">
			<div class="header">
				<a class="header_left" @click="$router.back(-1)">
					<img src="/static/img/hei_fanhui_icon@3x.png" alt="" />
				</a>
				<p>消息</p>
				<a></a>
			</div>
		</div>
		
		<div class="huamiao_padding" style="padding-right: 0;" v-for="item in news">
			<div class="xiaoxi">
				<div class="xiaoxi_top">
					<div class="xiaoxi_top_img">
						<img src="/static/img/wodexiaoqi_icon@3x.png" alt="" />
					</div>
					<p>{{item.news}}</p>
				</div>
				<div class="xiaoxi_bottom">
					<p>{{item.name}}</p>
					<p>{{item.time}}</p>
				</div>
			</div>	
		</div>	
		</div>
	</div>
</template>

<script type="text/javascript">
	import axios from "axios"
	export default{
		data(){
			return{
				news:[]
			}
		},
		mounted:function(){
			this.dataLoading();
		},
		methods:{
			dataLoading(){
				axios.get("api/news").then((result)=>{
					var res = result.data;
					this.news = res;
				})
			}
		}
}
</script>