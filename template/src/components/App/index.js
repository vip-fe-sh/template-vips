import Vue from 'vue';
import Hello from '../Hello/';

export default Vue.extend({
  template: require('./index.html'),
  components: {
    Hello
  },
  vuex: {
    getters: {
      title: state => state.title
    }
  }
});
