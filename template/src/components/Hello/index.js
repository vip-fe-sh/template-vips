import Vue from 'vue';
import { getInfo } from '../../vuex/actions';

export default Vue.extend({
  template: require('./index.html'),
  vuex: {
    getters: {
      info: state => state.info
    },
    actions: {
      getInfo
    }
  },
  ready () {
    if (!this.info.length) {
      this.getInfo();
    }
  }
});
