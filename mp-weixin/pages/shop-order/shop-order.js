(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shop-order/shop-order"],{"2d5a":function(t,e,n){},"47df":function(t,e,n){"use strict";n.r(e);var r=n("d7d3"),s=n("525a");for(var a in s)"default"!==a&&function(t){n.d(e,t,(function(){return s[t]}))}(a);n("e2ef");var u,i=n("f0c5"),o=Object(i["a"])(s["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],u);e["default"]=o.exports},"525a":function(t,e,n){"use strict";n.r(e);var r=n("93c7"),s=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);e["default"]=s.a},"93c7":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=s(n("a34a"));function s(t){return t&&t.__esModule?t:{default:t}}function a(t,e,n,r,s,a,u){try{var i=t[a](u),o=i.value}catch(c){return void n(c)}i.done?e(o):Promise.resolve(o).then(r,s)}function u(t){return function(){var e=this,n=arguments;return new Promise((function(r,s){var u=t.apply(e,n);function i(t){a(u,r,s,i,o,"next",t)}function o(t){a(u,r,s,i,o,"throw",t)}i(void 0)}))}}var i={data:function(){return{navlist:["全部","已支付","已发货","已完成","已取消"],currentIndex:0,pages:1,list:[],mescroll:null,downOption:{auto:!1},upOption:{page:{},noMoreSize:3,textNoMore:"~ 没有更多了 ~"},hasNext:!0,status:"",user:""}},onShow:function(){var e=u(r.default.mark((function e(){var n,s;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.getStorageSync("nowTable"),e.next=3,this.$api.session(n);case 3:s=e.sent,this.user=s.data,this.hasNext=!0,this.mescroll&&this.mescroll.resetUpScroll();case 7:case"end":return e.stop()}}),e,this)})));function n(){return e.apply(this,arguments)}return n}(),methods:{navselect:function(t,e){this.currentIndex=t,this.status="全部"==e?"":"已支付"==e?"已支付":e,this.hasNext=!0,this.mescroll&&this.mescroll.resetUpScroll()},mescrollInit:function(t){this.mescroll=t},downCallback:function(t){this.hasNext=!0,t.resetUpScroll()},upCallback:function(){var t=u(r.default.mark((function t(e){var n,s;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n={page:e.num,limit:e.size},this.status&&(n["status"]=this.status),t.next=4,this.$api.page("orders",n);case 4:s=t.sent,1==e.num&&(this.list=[]),this.list=this.list.concat(s.data.list),0==s.data.list.length&&(this.hasNext=!1),e.endSuccess(e.size,this.hasNext);case 9:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),onCancelTap:function(){var e=u(r.default.mark((function e(n){var s;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:s=this,t.showModal({title:"提示",content:"是否确认取消",success:function(){var e=u(r.default.mark((function e(a){var u;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(u=t.getStorageSync("nowTable"),!a.confirm){e.next=10;break}return n.status="已取消",e.next=5,s.$api.update("orders",n);case 5:e.sent,s.hasNext=!0,s.mescroll&&s.mescroll.resetUpScroll(),1==n.type?s.user.money=s.user.money+n.total:2==n.type&&(s.user.jifen=s.user.jifen+n.total),s.$api.update(u,s.user);case 10:case"end":return e.stop()}}),e)})));function a(t){return e.apply(this,arguments)}return a}()});case 2:case"end":return e.stop()}}),e,this)})));function n(t){return e.apply(this,arguments)}return n}(),onConfirm:function(){var e=u(r.default.mark((function e(n){var s;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:s=this,t.showModal({title:"提示",content:"是否确认收货",success:function(){var e=u(r.default.mark((function e(a){return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.getStorageSync("nowTable"),!a.confirm){e.next=8;break}return n.status="已完成",e.next=5,s.$api.update("orders",n);case 5:e.sent,s.hasNext=!0,s.mescroll&&s.mescroll.resetUpScroll();case 8:case"end":return e.stop()}}),e)})));function a(t){return e.apply(this,arguments)}return a}()});case 2:case"end":return e.stop()}}),e,this)})));function n(t){return e.apply(this,arguments)}return n}()}};e.default=i}).call(this,n("543d")["default"])},a5d1:function(t,e,n){"use strict";(function(t){n("7ebc"),n("921b");r(n("66fd"));var e=r(n("47df"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},d7d3:function(t,e,n){"use strict";var r={"mescroll-uni":function(){return Promise.all([n.e("common/vendor"),n.e("components/mescroll-uni/mescroll-uni")]).then(n.bind(null,"1c99"))}},s=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return r}))},e2ef:function(t,e,n){"use strict";var r=n("2d5a"),s=n.n(r);s.a}},[["a5d1","common/runtime","common/vendor"]]]);