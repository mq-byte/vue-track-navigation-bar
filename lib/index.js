import TrackNavBar from './TrackNavBar.vue';

/* istanbul ignore next */
TrackNavBar.install = function(Vue) {
  console.log(TrackNavBar);
  Vue.component(TrackNavBar.name, TrackNavBar);
};

export default TrackNavBar;
