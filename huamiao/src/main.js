// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyLoad from 'vue-lazyload'
import $ from 'jquery'
Vue.config.productionTip = false

Vue.use(VueLazyLoad,{
	loading:"/static/loading-svg/loading-bars.svg"
})

Vue.prototype.dropLoad = function (thiss,datas){
	thiss.scrolled = $("body").scrollTop();
    if($("body").height() < (this.scrolled+$(window).height()+1)){
      	thiss.num++;
      	var data = {};
        for(var i in datas){
        	if(i < (thiss.num*4) ){
        		data[i]=datas[i];
        	}
        }
    }
    return data;
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

