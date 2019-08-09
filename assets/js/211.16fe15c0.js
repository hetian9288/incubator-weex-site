(window.webpackJsonp=window.webpackJsonp||[]).push([[211],{349:function(t,e,r){"use strict";r.r(e);var a=r(1),i=Object(a.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[t._m(0),r("p",[t._v("Weex 提供了通过事件触发动作的能力，例如在用户点击组件时执行 JavaScript。下面列出了可被添加到 Weex 组件上以定义事件动作的属性：")]),t._m(1),t._m(2),t._m(3),t._m(4),r("p",[r("a",{attrs:{href:"https://jsplayground.taobao.org/raxplayground/c230a32e-489c-4fda-ae90-40faa6aaafbc??from=",target:"_blank",rel:"noopener noreferrer"}},[t._v("示例"),r("OutboundLink")],1)]),t._m(5),t._m(6),t._m(7),r("p",[t._v("当组件上发生点击手势时被触发。")]),t._m(8),t._m(9),t._m(10),r("p",[r("a",{attrs:{href:"http://dotwe.org/vue/ad62b385c6b3cb7d038539f137be79ad",target:"_blank",rel:"noopener noreferrer"}},[t._v("示例"),r("OutboundLink")],1)]),t._m(11),t._m(12),t._m(13),t._m(14),r("p",[r("a",{attrs:{href:"http://dotwe.org/vue/ad62b385c6b3cb7d038539f137be79ad",target:"_blank",rel:"noopener noreferrer"}},[t._v("示例"),r("OutboundLink")],1)]),t._m(15),t._m(16),t._m(17),t._m(18),r("p",[r("a",{attrs:{href:"http://dotwe.org/vue/ad62b385c6b3cb7d038539f137be79ad",target:"_blank",rel:"noopener noreferrer"}},[t._v("示例"),r("OutboundLink")],1)]),t._m(19),t._m(20),t._m(21),t._m(22),r("p",[r("a",{attrs:{href:"http://dotwe.org/vue/ad62b385c6b3cb7d038539f137be79ad",target:"_blank",rel:"noopener noreferrer"}},[t._v("示例"),r("OutboundLink")],1)]),t._m(23),r("p",[t._v("用于内嵌处理Native滑动冲突的情况，阻止Native事件进行冒泡传递。可结合shouldStopPropagationInterval和shouldStopPropagationInitResult属性来控制。")]),r("p",[t._v("shouldStopPropagationInitResult  默认初始化false/true的结果。\nshouldStopPropagationInterval  默认数字类型，控制touch频率，减少JS和Native通信次数，提升流畅性。可参考[Scroller内嵌List示例]")]),t._m(24),r("p",[r("a",{attrs:{href:"http://dotwe.org/vue/48ddb2f7339d1fb116135900a2dbc8e5",target:"_blank",rel:"noopener noreferrer"}},[t._v("Scroller内嵌List示例"),r("OutboundLink")],1)]),t._m(25),t._m(26),t._m(27),t._m(28),t._m(29),t._m(30),t._m(31),t._m(32),t._m(33),r("ul",[r("li",[r("a",{attrs:{href:"http://dotwe.org/vue/ad62b385c6b3cb7d038539f137be79ad",target:"_blank",rel:"noopener noreferrer"}},[t._v("综合示例"),r("OutboundLink")],1)])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"通用事件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#通用事件","aria-hidden":"true"}},[this._v("#")]),this._v(" 通用事件")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"事件穿透"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#事件穿透","aria-hidden":"true"}},[this._v("#")]),this._v(" 事件穿透")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"warning custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("注意")]),e("p",[e("code",[this._v("Android")]),this._v("和"),e("code",[this._v("iOS")]),this._v("下原生事件传递机制不同，这里仅针对"),e("code",[this._v("iOS")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("当一个父View存在多个同级子View时，由于"),e("code",[this._v("iOS")]),this._v("会选择层级最高的View来响应事件，底层的View的事件永远都不会响应。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Weex在"),e("code",[this._v("<div>")]),this._v("组件中增加了"),e("code",[this._v("eventPenetrationEnabled")]),this._v("属性，当值为"),e("code",[this._v("true")]),this._v("时，View的子View仍能正常响应事件，但View自身将不会响应事件，而是将事件向下层View传递。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"view交互性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#view交互性","aria-hidden":"true"}},[this._v("#")]),this._v(" View交互性")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Weex在"),e("code",[this._v("<div>")]),this._v("组件中增加了"),e("code",[this._v("userInteractionEnabled")]),this._v("属性，当值为"),e("code",[this._v("true")]),this._v("时，View及其子View均不响应事件 事件向下层View传递")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"click"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#click","aria-hidden":"true"}},[this._v("#")]),this._v(" click")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"warning custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("注意")]),e("p",[e("code",[this._v("<input>")]),this._v(" 和 "),e("code",[this._v("<switch>")]),this._v(" 组件目前不支持 click 事件，请使用 change 或 input 事件来代替。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"事件对象"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#事件对象","aria-hidden":"true"}},[this._v("#")]),this._v(" 事件对象")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("table",[r("thead",[r("tr",[r("th",[t._v("key")]),r("th",[t._v("value")]),r("th",[t._v("备注")])])]),r("tbody",[r("tr",[r("td",[t._v("type")]),r("td",[t._v("click")]),r("td")]),r("tr",[r("td",[t._v("target")]),r("td"),r("td",[t._v("触发点击事件的目标组件")])]),r("tr",[r("td",[t._v("timestamp")]),r("td"),r("td",[t._v("触发点击事件时的时间戳(不支持 H5)")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"longpress"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#longpress","aria-hidden":"true"}},[this._v("#")]),this._v(" longpress")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("如果一个组件被绑定了 "),e("code",[this._v("longpress")]),this._v(" 事件，那么当用户长按这个组件时，该事件将会被触发。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"事件对象-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#事件对象-2","aria-hidden":"true"}},[this._v("#")]),this._v(" 事件对象")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("table",[r("thead",[r("tr",[r("th",[t._v("key")]),r("th",[t._v("value")]),r("th",[t._v("备注")])])]),r("tbody",[r("tr",[r("td",[t._v("type")]),r("td",[t._v("longpress")]),r("td")]),r("tr",[r("td",[t._v("target")]),r("td"),r("td",[t._v("触发长按事件的目标组件")])]),r("tr",[r("td",[t._v("timestamp")]),r("td"),r("td",[t._v("长按事件触发时的时间戳(不支持 H5)")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"appear"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#appear","aria-hidden":"true"}},[this._v("#")]),this._v(" Appear")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("如果一个位于某个可滚动区域内的组件被绑定了 "),e("code",[this._v("appear")]),this._v(" 事件，那么当这个组件的状态变为在屏幕上可见时，该事件将被触发。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"事件对象-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#事件对象-3","aria-hidden":"true"}},[this._v("#")]),this._v(" 事件对象")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("table",[r("thead",[r("tr",[r("th",[t._v("key")]),r("th",[t._v("value")]),r("th",[t._v("备注")])])]),r("tbody",[r("tr",[r("td",[t._v("type")]),r("td",[t._v("appear")]),r("td")]),r("tr",[r("td",[t._v("target")]),r("td"),r("td",[t._v("触发 Appear 事件的组件对象")])]),r("tr",[r("td",[t._v("timestamp")]),r("td"),r("td",[t._v("事件被触发时的时间戳(不支持 H5)")])]),r("tr",[r("td",[t._v("direction")]),r("td",[r("code",[t._v("up")]),t._v("或"),r("code",[t._v("down")])]),r("td",[t._v("触发事件时屏幕的滚动方向")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"disappear"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#disappear","aria-hidden":"true"}},[this._v("#")]),this._v(" Disappear")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("如果一个位于某个可滚动区域内的组件被绑定了 "),e("code",[this._v("disappear")]),this._v(" 事件，那么当这个组件被滑出屏幕变为不可见状态时，该事件将被触发。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"事件对象-4"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#事件对象-4","aria-hidden":"true"}},[this._v("#")]),this._v(" 事件对象")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("table",[r("thead",[r("tr",[r("th",[t._v("key")]),r("th",[t._v("value")]),r("th",[t._v("备注")])])]),r("tbody",[r("tr",[r("td",[t._v("type")]),r("td",[t._v("disappear")]),r("td")]),r("tr",[r("td",[t._v("target")]),r("td"),r("td",[t._v("触发 Disappear 事件的组件对象")])]),r("tr",[r("td",[t._v("timestamp")]),r("td"),r("td",[t._v("事件被触发时的时间戳(不支持 H5)")])]),r("tr",[r("td",[t._v("direction")]),r("td",[r("code",[t._v("up")]),t._v("或"),r("code",[t._v("down")])]),r("td",[t._v("触发事件时屏幕的滚动方向")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"stoppropagation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#stoppropagation","aria-hidden":"true"}},[this._v("#")]),this._v(" stopPropagation")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"事件对象无"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#事件对象无","aria-hidden":"true"}},[this._v("#")]),this._v(" 事件对象无")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"page"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#page","aria-hidden":"true"}},[this._v("#")]),this._v(" Page")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"warning custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("注意")]),e("p",[this._v("支持 iOS 和 Android，H5 暂不支持。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Weex 通过 "),e("code",[this._v("viewappear")]),this._v(" 和 "),e("code",[this._v("viewdisappear")]),this._v(" 事件提供了简单的页面状态管理能力。")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[r("code",[t._v("viewappear")]),t._v(" 事件会在页面就要显示或配置的任何页面动画被执行前触发，例如，当调用 "),r("code",[t._v("navigator")]),t._v(" 模块的 "),r("code",[t._v("push")]),t._v(" 方法时，该事件将会在打开新页面时被触发。"),r("code",[t._v("viewdisappear")]),t._v(" 事件会在页面就要关闭时被触发。")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[t._v("与组件的 "),r("code",[t._v("appear")]),t._v(" 和 "),r("code",[t._v("disappear")]),t._v(" 事件不同的是，"),r("code",[t._v("viewappear")]),t._v(" 和 "),r("code",[t._v("viewdisappear")]),t._v(" 事件关注的是整个页面的状态，所以它们必须绑定到页面的根元素上。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("特殊情况下，这两个事件也能被绑定到非根元素的"),e("code",[this._v("body")]),this._v("组件上，例如"),e("code",[this._v("wxc-navpage")]),this._v("组件。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"事件对象-5"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#事件对象-5","aria-hidden":"true"}},[this._v("#")]),this._v(" 事件对象")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("table",[r("thead",[r("tr",[r("th",[t._v("key")]),r("th",[t._v("value")]),r("th",[t._v("备注")])])]),r("tbody",[r("tr",[r("td",[t._v("type")]),r("td",[r("code",[t._v("viewappear")]),t._v(" 或 "),r("code",[t._v("viewdisappear")])]),r("td")]),r("tr",[r("td",[t._v("target")]),r("td"),r("td",[t._v("触发事件的组件对象")])]),r("tr",[r("td",[t._v("timestamp")]),r("td"),r("td",[t._v("事件被触发时的时间戳")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"demo"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#demo","aria-hidden":"true"}},[this._v("#")]),this._v(" Demo")])}],!1,null,null,null);e.default=i.exports}}]);