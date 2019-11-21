### @qt-vue/track-navigation-bar

### Get Started
 1. 安装`@qt-vue/track-navigation-bar`
 ```bash
    npm i --save  @qt-vue/track-navigation-bar
 ```

 2. 如何使用
```javascript
import TrackNavBar from '@qt-vue/track-navigation-bar'

Vue.use(TrackNavBar,[options])

options.navPosition //定位 默认值{top:'100px',right:'200px'}
```

```html
<TrackNavBar style="height: 700px" :navPosition=navPosition>
   <slot></slot>
</TrackNavBar>
```

