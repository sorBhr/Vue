// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './plugins/element.js'

Vue.config.productionTip = false

/* eslint-disable */

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App><App/>'
})
