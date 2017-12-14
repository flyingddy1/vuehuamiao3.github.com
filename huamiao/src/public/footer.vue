<template>
	<footer>
		<div class="huamiao_footer_jianju"></div>
	    <div class="huamiao_footer">
	    	<a href="/#/index_nav">
	    		<slot name="font_label">
		    		<div class="huamiao_footer_font">
			    		<div class="huamiao_footer_font_img">
			    			<img src="/static/img/home_icon_nor@3x.png" alt="" />
			    		</div>
			    		<p>首页</p>
			    	</div>
		    	</slot>
	    	</a>
	    	<a href="/#/about">
	    		<slot name="font_label2">
		    		<div class="huamiao_footer_font">
			    		<div class="huamiao_footer_font_img">
			    			<img src="/static/img/faxian_icon_nor@3x.png" alt="" />
			    		</div>
			    		<p>发现</p>
			    	</div>
		    	</slot>
	    	</a>
	    	
	    	<a href="/#/shoppingCart">
	    		<slot name="font_label3">
		    		<div class="huamiao_footer_font">
			    		<div class="huamiao_footer_font_img">
			    			<img src="/static/img/gouwuche_icon_nor@3x.png" alt="" />
			    		</div>
			    		<p>购物车</p>
			    	</div>
		    	</slot>
	    	</a>
	    	
	    	<a href="/#/my">
	    		<slot name="font_label4">
	    			<div class="huamiao_footer_font">
			    		<div class="huamiao_footer_font_img">
			    			<img src="/static/img/wode_icon_nor@3x.png" alt="" />
			    		</div>
			    		<p>我的</p>
			    	</div>
	    		</slot>
	    	</a>
	    </div>
	</footer>
</template>