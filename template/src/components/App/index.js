import Vue from 'vue';
import Hello from '../Hello/';
import * as actions from '../../vuex/actions';

export default Vue.extend({
  template: require('./index.html'),
  components: {
    'hello': Hello
  },
  vuex: {
    getters: {
      title: state => state.title
    },
    actions: actions
  }
});
