import 'vue-gitalk/dist/vue-gitalk.css';
import Gitalk from 'vue-gitalk';

export default function(Vue, options) {
  Vue.use(Gitalk, options);
}
