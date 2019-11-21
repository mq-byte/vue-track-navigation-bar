import TrackNavBar from './TrackNavBar.vue';

/* istanbul ignore next */
TrackNavBar.install = function(Vue,options = {}) {

  options.navPosition = options.navPosition || {
    top:'100px',
    right:'200px'
  };

  TrackNavBar.props.navPosition.default = function () {
    return options.navPosition
  };
  Vue.component(TrackNavBar.name, TrackNavBar);
};

export default TrackNavBar;
