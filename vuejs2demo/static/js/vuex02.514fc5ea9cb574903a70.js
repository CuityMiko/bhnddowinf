webpackJsonp([6,0],{0:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}var c=n(1),u=r(c),i=n(130),o=r(i),s=n(70),d=r(s);new u["default"]({el:"#app",store:d["default"],render:function(t){return t(o["default"])}})},56:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(4);e["default"]={computed:(0,r.mapGetters)(["evenOrOdd"]),methods:(0,r.mapActions)(["increment","decrement","incrementIfOdd","incrementAsync"])}},70:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var c=n(74),u=r(c),i=n(1),o=r(i),s=n(4),d=r(s);o["default"].use(d["default"]);var a={count:0},f={increment:function(t){t.count++},decrement:function(t){t.count--}},m={increment:function(t){var e=t.commit;return e("increment")},decrement:function(t){var e=t.commit;return e("decrement")},incrementIfOdd:function(t){var e=t.commit,n=t.state;(n.count+1)%2===0&&e("increment")},incrementAsync:function(t){var e=t.commit;return new u["default"](function(t,n){setTimeout(function(){e("increment"),t()},1e3)})}},l={evenOrOdd:function(t){return t.count%2===0?"偶数":"奇数"}};e["default"]=new d["default"].Store({state:a,getters:l,actions:m,mutations:f})},112:function(t,e){},130:function(t,e,n){var r,c;n(112),r=n(56);var u=n(136);c=r=r||{},"object"!=typeof r["default"]&&"function"!=typeof r["default"]||(c=r=r["default"]),"function"==typeof c&&(c=c.options),c.render=u.render,c.staticRenderFns=u.staticRenderFns,c._scopeId="data-v-3dd9dd0d",t.exports=r},136:function(module,exports){module.exports={render:function(){with(this)return _h("div",{attrs:{id:"app"}},[_h("h1",["点击: "+_s($store.state.count)+" 次数,此為 "+_s(evenOrOdd)+" ",_m(0)])," ",_h("button",{staticClass:"btn",on:{click:increment}},["+"])," ",_h("button",{staticClass:"btn",on:{click:decrement}},["-"]),_m(1)," ",_h("button",{staticClass:"btn",on:{click:incrementIfOdd}},["业务设计：当 奇数时，才增加"]),_m(2)," ",_h("button",{staticClass:"btn",on:{click:incrementAsync}},["业务设计：1秒后，才会增加 1"]),_m(3)])},staticRenderFns:[function(){with(this)return _h("br")},function(){with(this)return _h("br")},function(){with(this)return _h("br")},function(){with(this)return _h("br")}]}}});
//# sourceMappingURL=vuex02.514fc5ea9cb574903a70.js.map