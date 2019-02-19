# vue-keepAlive

> 功能：使用keep-alive缓存组件。

## 项目效果
将某个列表类组件内容滑动到第20条位置，在切换到一个组件后，再次切换回到该组件，该组件的位置状态依旧会保持在第20条列表处

用法：
（1）利用meta属性
```js
export default[
 {
  path:'/',
  name:'home',
  components:Home,
  meta:{
    keepAlive:true //需要被缓存的组件
 },
 {
  path:'/book',
  name:'book',
  components:Book,
  meta:{
     keepAlive:false //不需要被缓存的组件
 }
]
```
（2）结合router，缓存部分页面
使用$route.meta的keepAlive属性：
```html
<keep-alive>
  <router-view v-if="this.$route.meat.keepAlive"></router-view>
  <!--这里是会被缓存的组件-->
</keep-alive>
<router-view v-if="!this.$route.meta.keepAlive"></router-view>
<!--这里是不会被缓存的组件-->
```

总结：
keep-alive生命周期钩子函数：activated、deactivated
使用``<keep-alive>``会将数据保留在内存中，如果要在每次进入页面的时候获取最新的数据，需要在activated阶段获取数据，承担原来created钩子中获取数据的任务。

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
