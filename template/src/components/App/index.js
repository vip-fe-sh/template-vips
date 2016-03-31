import Vue from 'vue';
import Hello from '../Hello/';
import {initSpinner} from '../../utils/utils.js';

export default Vue.extend({
  template: require('./index.html'),
  components: {
    'hello': Hello
  },
  data () {
    return {
      fulldata: {
        hello: {}
      }
    };
  },
  ready () {
    let target = document.getElementById('spin');
    initSpinner(target);

    this.$http.get('/mock/mock.json').then((response) => {
      console.log(response);
      if (response.ok) {
        this.$set('fulldata', response.data);
        target.className += ' hidden';
      } else {
        window.alert(response.statusText);
      }
    }, (err) => {
      window.alert(err);
    });
  }
});
