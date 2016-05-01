import Vue from 'vue';
import VueResource from 'vue-resource';
import store from './vuex/store';
import { addClass } from './utils/filters';
import App from './components/App';

require('./styles/app.scss');

// open debug mode in dev mode
/* eslint-disable no-undef */
if (__DEV__) {
  Vue.config.debug = true;
}

// use vue-resource to request data
Vue.use(VueResource);

// add vue filter
Vue.filter('addClass', addClass);

/* eslint-disable no-new */
new Vue({
  store,
  el: 'body',
  components: {
    'app': App
  }
});
