import Vue from 'vue';
import VueResource from 'vue-resource';
import {addClass} from './utils/filters.js';
import App from './components/App';

require('./styles/app.scss');

// open debug mode in dev mode
/* eslint-disable no-undef */
if (__DEV__) {
  Vue.config.debug = true;
}
// use vue-resource to load async data
Vue.use(VueResource);
// add vue filter
Vue.filter('addClass', addClass);

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: {
    'app': App
  }
});
