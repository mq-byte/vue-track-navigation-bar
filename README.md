### vue-track-navigation-bar

### Get Started
 1. 安装`vue-track-navigation-bar`
 ```bash
    npm i --save  vue-track-navigation-bar
 ```

 2. 如何使用

 ```js
 import TrackNavBar from 'vue-track-navigation-bar'

 Vue.use(TrackNavBar,[options])

 options.navPosition //定位 默认值{top:'100px',right:'200px'}
 ```

 ```html
 <TrackNavBar style="height: 700px" :navPosition=navPosition>
    <slot></slot>
 </TrackNavBar>
 ```

### 演示
![演示地址](https://raw.githubusercontent.com/QiuyangQ/vue-track-navigation-bar/master/navigation.gif)
