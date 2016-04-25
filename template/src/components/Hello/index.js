import Vue from 'vue';

export default Vue.extend({
  template: require('./index.html'),
  vuex: {
    getters: {
      info: state => state.info
    }
  }
});
