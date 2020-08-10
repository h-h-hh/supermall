import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'

import FastClick from 'fastclick'

Vue.config.productionTip = false
    //添加事件总线对象
Vue.prototype.$bus = new Vue
    //解决移动端300毫秒延时问题
FastClick.attach(document.body)
new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app')