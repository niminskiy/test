(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}const t=function(){function t(e,n){var i,r,o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=function(){o.time--,o.render(),o.time<=0&&o.stop()},(i="tick")in this?Object.defineProperty(this,i,{value:r,enumerable:!0,configurable:!0,writable:!0}):this.tick=r,this.el=e,this.time=n,this.interval,this.render(),this.start()}var n,i;return n=t,(i=[{key:"start",value:function(){this.interval=setInterval(this.tick,1e3)}},{key:"stop",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){this.el.innerHTML=this.time}}])&&e(n.prototype,i),t}();document.querySelector(".btn").addEventListener("click",(function(){document.querySelector(".text").innerHTML="Yes!",new t(document.querySelector(".timer"),100)})),console.log(123)})();