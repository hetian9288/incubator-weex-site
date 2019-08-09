(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{516:function(t,e,s){"use strict";s.r(e);var n=s(1),a=Object(n.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[s("p",[t._v("Weex provide the ability to let events trigger action, like starting a JavaScript when a user click on a component. Below are the common event attributes that can be added to weex components to define event actions.")]),t._m(0),t._m(1),s("p",[t._v("When a parent view has multiple peer views, iOS will select the highest level View to respond to the event, and the underlying view event will never be responded.")]),t._m(2),s("p",[s("a",{attrs:{href:"https://jsplayground.taobao.org/raxplayground/c230a32e-489c-4fda-ae90-40faa6aaafbc??from=",target:"_blank",rel:"noopener noreferrer"}},[t._v("Event penetration"),s("OutboundLink")],1)]),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7),t._m(8),t._m(9),t._m(10),t._m(11),t._m(12),t._m(13),s("p",[t._v("If a appear event is bound to a component inside a scrollable container, the event will be triggered when the component comes to be visible.")]),t._m(14),t._m(15),t._m(16),t._m(17),t._m(18),t._m(19),t._m(20),s("p",[t._v("when you want to handler list in list, scroller in list which has touch conflict touch scene. you can use this to control touch dispatch.\ntogether with the following attr to achive smooth nest scroll.")]),s("p",[t._v("shouldStopPropagationInitResult : default true/false,")]),s("p",[t._v("shouldStopPropagationInterval  : control touch call frequency with js. reduce js call with native.")]),t._m(21),s("p",[s("a",{attrs:{href:"http://dotwe.org/vue/48ddb2f7339d1fb116135900a2dbc8e5",target:"_blank",rel:"noopener noreferrer"}},[t._v("Scroller With List"),s("OutboundLink")],1)]),t._m(22),t._m(23),t._m(24),t._m(25),t._m(26),t._m(27)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"event-penetration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#event-penetration","aria-hidden":"true"}},[this._v("#")]),this._v(" Event penetration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("**Notes: ** The principle of native event delivery under "),e("code",[this._v("Android")]),this._v(" and "),e("code",[this._v("iOS")]),this._v(" is different, only for "),e("code",[this._v("iOS")]),this._v(" here.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Weex add attribute "),e("code",[this._v("eventPenetrationEnabled")]),this._v(" to "),e("code",[this._v("<div>")]),this._v(" component. When the value is "),e("code",[this._v("true")]),this._v(", the view's children views still respond to the event normally, while the view itself will not respond to the event, but pass the event to the lower level View.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"view-interactivity"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#view-interactivity","aria-hidden":"true"}},[this._v("#")]),this._v(" View interactivity")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Weex add attribute "),e("code",[this._v("userInteractionEnabled")]),this._v(" to "),e("code",[this._v("<div>")]),this._v(" component. When the value is "),e("code",[this._v("true")]),this._v(", neither the view nor its children views respond to the event. The event is passed to the lower layer View.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"click-event"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#click-event","aria-hidden":"true"}},[this._v("#")]),this._v(" Click event")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("The onclick attribute fires on a click gesture on the element.\n**Notes: ** The "),s("code",[t._v("input")]),t._v(" and "),s("code",[t._v("switch")]),t._v(" component does not currently support the "),s("code",[t._v("click")]),t._v(" event, please use "),s("code",[t._v("change")]),t._v(" or "),s("code",[t._v("input")]),t._v(" event instead.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"event-object"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#event-object","aria-hidden":"true"}},[this._v("#")]),this._v(" event object")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("code",[this._v("type")]),this._v(" : "),e("code",[this._v("click")])]),e("li",[e("code",[this._v("target")]),this._v(" : The target component where the event is triggered")]),e("li",[e("code",[this._v("timestamp")]),this._v(" : Timestamp when event is triggered")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"longpress-event"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#longpress-event","aria-hidden":"true"}},[this._v("#")]),this._v(" Longpress event")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("If a "),s("code",[t._v("longpress")]),t._v(" event is bound to a component, the event will be triggered when user long press on it.\n**Notes: ** The "),s("code",[t._v("input")]),t._v(" and "),s("code",[t._v("switch")]),t._v(" component does not currently support the "),s("code",[t._v("click")]),t._v(" event, please use "),s("code",[t._v("change")]),t._v(" or "),s("code",[t._v("input")]),t._v(" event instead.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"event-object-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#event-object-2","aria-hidden":"true"}},[this._v("#")]),this._v(" event object")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("code",[this._v("type")]),this._v(" : "),e("code",[this._v("longpress")])]),e("li",[e("code",[this._v("target")]),this._v(" : The target component where the event is triggered")]),e("li",[e("code",[this._v("timestamp")]),this._v(" : Timestamp when event is triggered")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"appear-event"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#appear-event","aria-hidden":"true"}},[this._v("#")]),this._v(" Appear event")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"event-object-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#event-object-3","aria-hidden":"true"}},[this._v("#")]),this._v(" event object")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("code",[t._v("type")]),t._v(" : "),s("code",[t._v("appear")])]),s("li",[s("code",[t._v("target")]),t._v(" : The target component where the event is triggered")]),s("li",[s("code",[t._v("timestamp")]),t._v(" : Timestamp when event is triggered")]),s("li",[s("code",[t._v("direction")]),t._v(" : The direction in which the scroller is scrolling. Could be "),s("code",[t._v("up")]),t._v(" or "),s("code",[t._v("down")]),t._v(".")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"disappear-event"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#disappear-event","aria-hidden":"true"}},[this._v("#")]),this._v(" Disappear event")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("If a "),e("code",[this._v("disappear")]),this._v(" event is bound to a component inside a scrollable container, the event will be triggered when the component scrolls out of viewport and disappears from your sight.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"event-object-4"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#event-object-4","aria-hidden":"true"}},[this._v("#")]),this._v(" event object")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("code",[t._v("type")]),t._v(" : "),s("code",[t._v("disappear")])]),s("li",[s("code",[t._v("target")]),t._v(" : The target component where the event is triggered")]),s("li",[s("code",[t._v("timestamp")]),t._v(" : Timestamp when event is triggered")]),s("li",[s("code",[t._v("direction")]),t._v(" : The direction in which the scroller is scrolling. Could be "),s("code",[t._v("up")]),t._v(" or "),s("code",[t._v("down")]),t._v(".")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"stoppropagation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#stoppropagation","aria-hidden":"true"}},[this._v("#")]),this._v(" stopPropagation")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example","aria-hidden":"true"}},[this._v("#")]),this._v(" Example")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"page-event"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#page-event","aria-hidden":"true"}},[this._v("#")]),this._v(" Page event")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("Weex provides you with simple management of page status, such as "),s("code",[t._v("viewappear")]),t._v(" and "),s("code",[t._v("viewdisappear")]),t._v(".\nThe "),s("code",[t._v("viewappear")]),t._v(" event will be triggered when page is about to show or before any animations are configured for showing. For example, when calling "),s("code",[t._v("push")]),t._v(" method in "),s("code",[t._v("navigator")]),t._v(" module, this event will be trigged in new page.\nThe "),s("code",[t._v("viewdisappear")]),t._v(" event will be triggeded when page is about to dismiss.\nDifferent from "),s("code",[t._v("appear")]),t._v(" and "),s("code",[t._v("disappear")]),t._v(" of component, these two events focus on the status of whole page, so "),s("strong",[t._v("they must be bound to the root component")]),t._v(".\nIn addititon, these events also can be bound to body component which is not root actually such as "),s("code",[t._v("wxc-navpage")]),t._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"event-object-5"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#event-object-5","aria-hidden":"true"}},[this._v("#")]),this._v(" event object")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("code",[t._v("type")]),t._v(" : "),s("code",[t._v("viewappear")]),t._v(" or "),s("code",[t._v("viewdisappear")])]),s("li",[s("code",[t._v("target")]),t._v(" : The target component where the event is triggered")]),s("li",[s("code",[t._v("timestamp")]),t._v(" : Timestamp when event is triggered")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"example-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example-2","aria-hidden":"true"}},[this._v("#")]),this._v(" Example")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("box"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@click")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("onclick"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@longpress")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("onlongpress"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@appear")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("onappear"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@disappear")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("ondisappear"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script language-javascript"}},[t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" modal "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" weex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("requireModule")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'modal'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    methods"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onclick")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'onclick:'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        modal"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toast")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          message"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'onclick'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          duration"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.8")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onlongpress")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'onlongpress:'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        modal"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toast")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          message"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'onlongpress'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          duration"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.8")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onappear")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'onappear:'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        modal"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toast")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          message"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'onappear'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          duration"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.8")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ondisappear")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ondisappear:'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        modal"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toast")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          message"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ondisappear'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          duration"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.8")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("scoped")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token style language-css"}},[t._v("\n  "),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".box")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 2px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-style")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" solid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #BBB"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 250px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 250px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin-top")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 250px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin-left")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 250px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #EEE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])}],!1,null,null,null);e.default=a.exports}}]);