(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{"89":function(o,n,e){"use strict";e.r(n),e.d(n,"taro_canvas_core",(function(){return c}));var i=e(41),c=function(){function t(o){var n=this;Object(i.g)(this,o),this.onLongTap=Object(i.c)(this,"longtap",7),this.onTouchStart=function(){n.timer=setTimeout((function(){n.onLongTap.emit()}),500)},this.onTouchMove=function(){clearTimeout(n.timer)},this.onTouchEnd=function(){clearTimeout(n.timer)}}return t.prototype.render=function(){var o=this.canvasId;return Object(i.e)("canvas",{"canvas-id":o,"style":{"width":"100%","height":"100%"},"onTouchStart":this.onTouchStart,"onTouchMove":this.onTouchMove,"onTouchEnd":this.onTouchEnd})},Object.defineProperty(t.prototype,"el",{"get":function get(){return Object(i.d)(this)},"enumerable":!1,"configurable":!0}),t}();c.style="taro-canvas-core{position:relative;display:block;width:300px;height:150px}"}}]);