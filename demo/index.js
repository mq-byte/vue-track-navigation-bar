import Vue from 'vue'
import TrackNavBar from '../lib/index'

Vue.use(TrackNavBar);

new Vue({
    el:'#app',
    render(h) { return h(TrackNavBar); },
});
