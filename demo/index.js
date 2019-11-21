import Vue from 'vue'
import TrackNavBar from '../lib/index'
import Test from './test.vue'
Vue.use(TrackNavBar);

new Vue({
    el:'#app',
    render(h) { return h(Test); },
});
