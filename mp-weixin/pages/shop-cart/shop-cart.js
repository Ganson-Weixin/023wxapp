(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shop-cart/shop-cart"],{"0336":function(t,i,e){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=s(e("a34a"));function s(t){return t&&t.__esModule?t:{default:t}}function n(t,i,e,a,s,n,r){try{var c=t[n](r),u=c.value}catch(o){return void e(o)}c.done?i(u):Promise.resolve(u).then(a,s)}function r(t){return function(){var i=this,e=arguments;return new Promise((function(a,s){var r=t.apply(i,e);function c(t){n(r,a,s,c,u,"next",t)}function u(t){n(r,a,s,c,u,"throw",t)}c(void 0)}))}}var c={data:function(){return{isselectedall:!0,scrollposition:0,cart:[],totalamount:0,cntitems:0,shownullcart:!1,user:{}}},onShow:function(){this.init()},methods:{init:function(){var i=r(a.default.mark((function i(){var e,s,n;return a.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return this.totalamount=0,this.cntitems=0,e=t.getStorageSync("nowTable"),i.next=5,this.$api.session(e);case 5:return s=i.sent,this.user=s.data,i.next=9,this.$api.list("cart",{userid:this.user.id});case 9:for(s=i.sent,this.cart=s.data.list,n=0;n<this.cart.length;n++)this.totalamount=parseFloat(this.totalamount)+parseFloat(this.cart[n].price*this.cart[n].buynumber),this.cntitems=parseInt(this.cntitems)+parseInt(this.cart[n].buynumber);this.totalamount=this.fmamount(this.totalamount);case 13:case"end":return i.stop()}}),i,this)})));function e(){return i.apply(this,arguments)}return e}(),scrollhoming:function(){this.scrollposition=this.scrollposition-1},scrollhomed:function(){this.scrollposition=0},clickitemselectedall:function(){if(this.isselectedall=!this.isselectedall,this.isselectedall){if(this.cart)for(var t=0;t<this.cart.length;t++)this.cart[t].id<0&&(this.cart[t].id=-this.cart[t].id,this.cntitems=parseInt(this.cntitems)+parseInt(this.cart[t].buynumber),this.totalamount=parseFloat(this.totalamount)+parseFloat(this.cart[t].price*this.cart[t].buynumber),this.totalamount=this.fmamount(this.totalamount))}else if(this.cart)for(t=0;t<this.cart.length;t++)this.isselected(this.cart[t].id)&&(this.cart[t].id=-this.cart[t].id,this.cntitems=this.cntitems-this.cart[t].buynumber,this.totalamount=this.totalamount-this.cart[t].price*this.cart[t].buynumber,this.totalamount=this.fmamount(this.totalamount))},clickitemselected:function(t){if(this.cart)for(var i=0;i<this.cart.length;i++)if(this.cart[i].id==t)return this.cart[i].id=-this.cart[i].id,void(this.isselected(this.cart[i].id)?(this.cntitems=parseInt(this.cntitems)+parseInt(this.cart[i].buynumber),this.totalamount=parseFloat(this.totalamount)+parseFloat(this.cart[i].price*this.cart[i].buynumber),this.totalamount=this.fmamount(this.totalamount),this._isselectedall()&&(this.isselectedall=!0)):(this.cntitems=this.cntitems-this.cart[i].buynumber,this.totalamount=this.totalamount-this.cart[i].price*this.cart[i].buynumber,this.totalamount=this.fmamount(this.totalamount),this.isselectedall=!1))},minusitem:function(){var i=r(a.default.mark((function i(e){var s;return a.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:s=0;case 1:if(!(s<this.cart.length)){i.next=20;break}if(!(this.cart[s].id==e&&this.cart[s].buynumber>0)){i.next=17;break}if(this.cart[s].buynumber=this.cart[s].buynumber-1,!this.isselected(this.cart[s].id)){i.next=9;break}return this.updatecntitems(-1),this.updatetotalamt(-this.cart[s].price),i.next=9,this.$api.update("cart",this.cart[s]);case 9:if(0!=this.cart[s].buynumber){i.next=16;break}return this.cart[s].id=this._unselected(this.cart[s].id),i.next=13,this.$api.del("cart",JSON.stringify([e]));case 13:console.log("cart".concat(this.cart[s].goodid)),t.removeStorageSync("cart".concat(this.cart[s].goodid)),this.init();case 16:return i.abrupt("return");case 17:s++,i.next=1;break;case 20:case"end":return i.stop()}}),i,this)})));function e(t){return i.apply(this,arguments)}return e}(),plusitem:function(){var t=r(a.default.mark((function t(i){var e;return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e=0;case 1:if(!(e<this.cart.length)){t.next=12;break}if(!(this.cart[e].id==i&&this.cart[e].buynumber<100)){t.next=9;break}return this.cart[e].buynumber=parseInt(this.cart[e].buynumber)+1,this.isselected(this.cart[e].id)?(this.updatecntitems(1),this.updatetotalamt(this.cart[e].price)):(this.cart[e].id=this._selected(this.cart[e].id),this.cntitems=parseInt(this.cntitems)+parseInt(this.cart[e].buynumber),this.totalamount=parseFloat(this.totalamount)+parseFloat(this.cart[e].price*this.cart[e].buynumber),this.totalamount=this.fmamount(this.totalamount)),t.next=7,this.$api.update("cart",this.cart[e]);case 7:return this._isselectedall()&&(this.isselectedall=!0),t.abrupt("return");case 9:e++,t.next=1;break;case 12:case"end":return t.stop()}}),t,this)})));function i(i){return t.apply(this,arguments)}return i}(),updatetotalamt:function(t){this.totalamount=parseFloat(this.totalamount)+parseFloat(t),this.totalamount=this.fmamount(this.totalamount)},updatecntitems:function(t){this.cntitems=parseInt(this.cntitems)+parseInt(t)},fmamount:function(t){return Math.round(100*t)/100},_unselected:function(t){return-Math.abs(t)},_selected:function(t){return Math.abs(t)},isselected:function(t){return t>0},_isselectedall:function(){for(var t=0;t<this.cart.length;t++)if(this.cart[t].id<0)return!1;return!0},_isdeledall:function(){for(var t=0;t<this.cart.length;t++)if(this.cart[t].id>-99)return!1;return!0},createorder:function(){if(0==this.totalamount)t.showModal({content:"请选择下单的商品！"});else{for(var i=[],e=0;e<this.cart.length;e++)this.cart[e].id>0&&i.push(this.cart[e]);t.setStorageSync("orderGoods",i),this.$utils.jump("../shop-order-confirm/shop-order-confirm?type=1")}}}};i.default=c}).call(this,e("543d")["default"])},"38f0":function(t,i,e){},8178:function(t,i,e){"use strict";(function(t){e("7ebc"),e("921b");a(e("66fd"));var i=a(e("84aa"));function a(t){return t&&t.__esModule?t:{default:t}}t(i.default)}).call(this,e("543d")["createPage"])},"84aa":function(t,i,e){"use strict";e.r(i);var a=e("e661"),s=e("cd27");for(var n in s)"default"!==n&&function(t){e.d(i,t,(function(){return s[t]}))}(n);e("f379");var r,c=e("f0c5"),u=Object(c["a"])(s["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],r);i["default"]=u.exports},cd27:function(t,i,e){"use strict";e.r(i);var a=e("0336"),s=e.n(a);for(var n in a)"default"!==n&&function(t){e.d(i,t,(function(){return a[t]}))}(n);i["default"]=s.a},e661:function(t,i,e){"use strict";var a,s=function(){var t=this,i=t.$createElement;t._self._c},n=[];e.d(i,"b",(function(){return s})),e.d(i,"c",(function(){return n})),e.d(i,"a",(function(){return a}))},f379:function(t,i,e){"use strict";var a=e("38f0"),s=e.n(a);s.a}},[["8178","common/runtime","common/vendor"]]]);