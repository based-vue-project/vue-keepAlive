webpackJsonp([1],{NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("PVEY"),a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("keep-alive",[this.$route.meta.keepAlive?e("router-view"):this._e()],1),this._v(" "),this.$route.meta.keepAlive?this._e():e("router-view")],1)},staticRenderFns:[]};var r=n("C7Lr")({name:"App"},a,!1,function(t){n("cYAp")},null,null).exports,s=n("KGCO"),i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v("首页")]),t._v(" "),n("h1",[t._v(t._s(t.msg))]),t._v(" "),n("a",{staticClass:"button",on:{click:function(e){return t.jumpToBPage()}}},[t._v("\n    进入列表页-BPage\n  ")])])},staticRenderFns:[]};var u=n("C7Lr")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}},methods:{jumpToBPage:function(){this.$router.push("/bpage")}}},i,!1,function(t){n("O/12")},null,null).exports,c=n("wSez"),l=n.n(c),p=!1,f={data:function(){return{msg:"BPage",dataArray:[0,1,2,3,4,5],contentH:0}},beforeRouteEnter:function(t,e,n){p="C"===e.name,n()},components:{Loadmore:c.Loadmore},mounted:function(){this.contentH=document.documentElement.clientHeight-this.$refs.wrapper.getBoundingClientRect().top},activated:function(){p?this.$refs.wrapper.scrollTop=this.$store.state.pageYOffset:(this.$refs.wrapper.scrollTop=0,this.dataArray=[0,1,2,3,4,5])},methods:{jumpToPage:function(){this.$router.push("/")},loadTop:function(){var t=this;setTimeout(function(){t.dataArray=[0,1,2,3,4,5],t.$refs.loadmore.onTopLoaded()},1500)},loadBottom:function(){var t=this;setTimeout(function(){for(var e=t.dataArray[t.dataArray.length-1],n=0;n<6;n++)t.dataArray.push(n+e+1);t.$refs.loadmore.onBottomLoaded()},1500)},itemClick:function(t,e){this.$store.commit("setPageYOffset",this.$refs.wrapper.scrollTop),this.$router.push({name:"C",params:{item:t,index:e}})},scrollEvent:function(){console.log("scrollEvent===")}}},d={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"b"},[n("a",{staticClass:"button",on:{click:function(e){return t.jumpToPage()}}},[t._v("\n    返回首页\n  ")]),t._v(" "),n("div",{ref:"wrapper",staticClass:"content",style:{height:t.contentH+"px"},on:{scroll:function(e){return t.scrollEvent()}}},[n("Loadmore",{ref:"loadmore",staticClass:"LoadMore",attrs:{"top-method":t.loadTop,"bottom-method":t.loadBottom}},t._l(t.dataArray,function(e,o){return n("div",{staticClass:"item",on:{click:function(n){return t.itemClick(e,o)}}},[n("p",{staticClass:"itemP"},[t._v("item_"+t._s(e))])])}),0)],1)])},staticRenderFns:[]};var m=n("C7Lr")(f,d,!1,function(t){n("odBt")},"data-v-fee7b3d2",null).exports,v={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"c"},[n("div",{staticClass:"buttonAll"},[n("a",{staticClass:"button",on:{click:function(e){return t.jumpToPage()}}},[t._v("\n      返回首页\n    ")]),t._v(" "),n("a",{staticClass:"button",on:{click:function(e){return t.jumpToBPage()}}},[t._v("\n      返回上一页\n    ")])]),t._v(" "),n("div",{staticClass:"bottom_content"},t._l(100,function(e){return n("p",{key:e.key},[t._v(t._s(e)+"==item_"+t._s(t.$route.params.index)+"的详情")])}),0)])},staticRenderFns:[]};var h=n("C7Lr")({methods:{jumpToBPage:function(){this.$router.push("/bpage")},jumpToPage:function(){this.$router.push("/")}}},v,!1,function(t){n("l3Ky")},"data-v-3b8fc58d",null).exports;o.default.use(s.a);var _=new s.a({routes:[{path:"/",name:"HelloWorld",component:u},{path:"/bpage",name:"B",component:m,meta:{keepAlive:!0}},{path:"/cpage",name:"C",component:h}]}),g=n("R4Sj");o.default.use(g.a);var C=new g.a.Store({state:{pageYOffset:0},mutations:{setPageYOffset:function(t,e){t.pageYOffset=e}}});n("rx0o");o.default.use(l.a),o.default.config.productionTip=!1,new o.default({el:"#app",router:_,store:C,components:{App:r},template:"<App/>"})},"O/12":function(t,e){},cYAp:function(t,e){},l3Ky:function(t,e){},odBt:function(t,e){},rx0o:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.9be9ddc5fa6772b59800.js.map