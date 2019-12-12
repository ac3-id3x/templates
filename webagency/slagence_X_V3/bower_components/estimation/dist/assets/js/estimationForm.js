(function(e,t){var n,r,i=typeof t,o=e.document,a=e.location,s=e.jQuery,u=e.$,l={},c=[],p="1.9.1",f=c.concat,d=c.push,h=c.slice,g=c.indexOf,m=l.toString,y=l.hasOwnProperty,v=p.trim,b=function(e,t){return new b.fn.init(e,t,r)},x=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,w=/\S+/g,T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,N=/^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,k=/^[\],:{}\s]*$/,E=/(?:^|:|,)(?:\s*\[)+/g,S=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,A=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,j=/^-ms-/,D=/-([\da-z])/gi,L=function(e,t){return t.toUpperCase()},H=function(e){(o.addEventListener||"load"===e.type||"complete"===o.readyState)&&(q(),b.ready())},q=function(){o.addEventListener?(o.removeEventListener("DOMContentLoaded",H,!1),e.removeEventListener("load",H,!1)):(o.detachEvent("onreadystatechange",H),e.detachEvent("onload",H))};b.fn=b.prototype={jquery:p,constructor:b,init:function(e,n,r){var i,a;if(!e)return this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:N.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof b?n[0]:n,b.merge(this,b.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:o,!0)),C.test(i[1])&&b.isPlainObject(n))for(i in n)b.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}if(a=o.getElementById(i[2]),a&&a.parentNode){if(a.id!==i[2])return r.find(e);this.length=1,this[0]=a}return this.context=o,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):b.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),b.makeArray(e,this))},selector:"",length:0,size:function(){return this.length},toArray:function(){return h.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=b.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return b.each(this,e,t)},ready:function(e){return b.ready.promise().done(e),this},slice:function(){return this.pushStack(h.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(b.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:d,sort:[].sort,splice:[].splice},b.fn.init.prototype=b.fn,b.extend=b.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},u=1,l=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},u=2),"object"==typeof s||b.isFunction(s)||(s={}),l===u&&(s=this,--u);l>u;u++)if(null!=(o=arguments[u]))for(i in o)e=s[i],r=o[i],s!==r&&(c&&r&&(b.isPlainObject(r)||(n=b.isArray(r)))?(n?(n=!1,a=e&&b.isArray(e)?e:[]):a=e&&b.isPlainObject(e)?e:{},s[i]=b.extend(c,a,r)):r!==t&&(s[i]=r));return s},b.extend({noConflict:function(t){return e.$===b&&(e.$=u),t&&e.jQuery===b&&(e.jQuery=s),b},isReady:!1,readyWait:1,holdReady:function(e){e?b.readyWait++:b.ready(!0)},ready:function(e){if(e===!0?!--b.readyWait:!b.isReady){if(!o.body)return setTimeout(b.ready);b.isReady=!0,e!==!0&&--b.readyWait>0||(n.resolveWith(o,[b]),b.fn.trigger&&b(o).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===b.type(e)},isArray:Array.isArray||function(e){return"array"===b.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[m.call(e)]||"object":typeof e},isPlainObject:function(e){if(!e||"object"!==b.type(e)||e.nodeType||b.isWindow(e))return!1;try{if(e.constructor&&!y.call(e,"constructor")&&!y.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}var r;for(r in e);return r===t||y.call(e,r)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||o;var r=C.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=b.buildFragment([e],t,i),i&&b(i).remove(),b.merge([],r.childNodes))},parseJSON:function(n){return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=b.trim(n),n&&k.test(n.replace(S,"@").replace(A,"]").replace(E,"")))?Function("return "+n)():(b.error("Invalid JSON: "+n),t)},parseXML:function(n){var r,i;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(o){r=t}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||b.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&b.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(j,"ms-").replace(D,L)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,a=M(e);if(n){if(a){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(a){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:v&&!v.call("\ufeff\u00a0")?function(e){return null==e?"":v.call(e)}:function(e){return null==e?"":(e+"").replace(T,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(M(Object(e))?b.merge(n,"string"==typeof e?[e]:e):d.call(n,e)),n},inArray:function(e,t,n){var r;if(t){if(g)return g.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;r>o;o++)e[i++]=n[o];else while(n[o]!==t)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,a=M(e),s=[];if(a)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(s[s.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(s[s.length]=r);return f.apply([],s)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(o=e[n],n=e,e=o),b.isFunction(e)?(r=h.call(arguments,2),i=function(){return e.apply(n||this,r.concat(h.call(arguments)))},i.guid=e.guid=e.guid||b.guid++,i):t},access:function(e,n,r,i,o,a,s){var u=0,l=e.length,c=null==r;if("object"===b.type(r)){o=!0;for(u in r)b.access(e,n,u,r[u],!0,a,s)}else if(i!==t&&(o=!0,b.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(b(e),n)})),n))for(;l>u;u++)n(e[u],r,s?i:i.call(e[u],u,n(e[u],r)));return o?e:c?n.call(e):l?n(e[0],r):a},now:function(){return(new Date).getTime()}}),b.ready.promise=function(t){if(!n)if(n=b.Deferred(),"complete"===o.readyState)setTimeout(b.ready);else if(o.addEventListener)o.addEventListener("DOMContentLoaded",H,!1),e.addEventListener("load",H,!1);else{o.attachEvent("onreadystatechange",H),e.attachEvent("onload",H);var r=!1;try{r=null==e.frameElement&&o.documentElement}catch(i){}r&&r.doScroll&&function a(){if(!b.isReady){try{r.doScroll("left")}catch(e){return setTimeout(a,50)}q(),b.ready()}}()}return n.promise(t)},b.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function M(e){var t=e.length,n=b.type(e);return b.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}r=b(o);var _={};function F(e){var t=_[e]={};return b.each(e.match(w)||[],function(e,n){t[n]=!0}),t}b.Callbacks=function(e){e="string"==typeof e?_[e]||F(e):b.extend({},e);var n,r,i,o,a,s,u=[],l=!e.once&&[],c=function(t){for(r=e.memory&&t,i=!0,a=s||0,s=0,o=u.length,n=!0;u&&o>a;a++)if(u[a].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;break}n=!1,u&&(l?l.length&&c(l.shift()):r?u=[]:p.disable())},p={add:function(){if(u){var t=u.length;(function i(t){b.each(t,function(t,n){var r=b.type(n);"function"===r?e.unique&&p.has(n)||u.push(n):n&&n.length&&"string"!==r&&i(n)})})(arguments),n?o=u.length:r&&(s=t,c(r))}return this},remove:function(){return u&&b.each(arguments,function(e,t){var r;while((r=b.inArray(t,u,r))>-1)u.splice(r,1),n&&(o>=r&&o--,a>=r&&a--)}),this},has:function(e){return e?b.inArray(e,u)>-1:!(!u||!u.length)},empty:function(){return u=[],this},disable:function(){return u=l=r=t,this},disabled:function(){return!u},lock:function(){return l=t,r||p.disable(),this},locked:function(){return!l},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],!u||i&&!l||(n?l.push(t):c(t)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!i}};return p},b.extend({Deferred:function(e){var t=[["resolve","done",b.Callbacks("once memory"),"resolved"],["reject","fail",b.Callbacks("once memory"),"rejected"],["notify","progress",b.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return b.Deferred(function(n){b.each(t,function(t,o){var a=o[0],s=b.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&b.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?b.extend(e,r):r}},i={};return r.pipe=r.then,b.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=h.call(arguments),r=n.length,i=1!==r||e&&b.isFunction(e.promise)?r:0,o=1===i?e:b.Deferred(),a=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?h.call(arguments):r,n===s?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},s,u,l;if(r>1)for(s=Array(r),u=Array(r),l=Array(r);r>t;t++)n[t]&&b.isFunction(n[t].promise)?n[t].promise().done(a(t,l,n)).fail(o.reject).progress(a(t,u,s)):--i;return i||o.resolveWith(l,n),o.promise()}}),b.support=function(){var t,n,r,a,s,u,l,c,p,f,d=o.createElement("div");if(d.setAttribute("className","t"),d.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=d.getElementsByTagName("*"),r=d.getElementsByTagName("a")[0],!n||!r||!n.length)return{};s=o.createElement("select"),l=s.appendChild(o.createElement("option")),a=d.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t={getSetAttribute:"t"!==d.className,leadingWhitespace:3===d.firstChild.nodeType,tbody:!d.getElementsByTagName("tbody").length,htmlSerialize:!!d.getElementsByTagName("link").length,style:/top/.test(r.getAttribute("style")),hrefNormalized:"/a"===r.getAttribute("href"),opacity:/^0.5/.test(r.style.opacity),cssFloat:!!r.style.cssFloat,checkOn:!!a.value,optSelected:l.selected,enctype:!!o.createElement("form").enctype,html5Clone:"<:nav></:nav>"!==o.createElement("nav").cloneNode(!0).outerHTML,boxModel:"CSS1Compat"===o.compatMode,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},a.checked=!0,t.noCloneChecked=a.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!l.disabled;try{delete d.test}catch(h){t.deleteExpando=!1}a=o.createElement("input"),a.setAttribute("value",""),t.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),t.radioValue="t"===a.value,a.setAttribute("checked","t"),a.setAttribute("name","t"),u=o.createDocumentFragment(),u.appendChild(a),t.appendChecked=a.checked,t.checkClone=u.cloneNode(!0).cloneNode(!0).lastChild.checked,d.attachEvent&&(d.attachEvent("onclick",function(){t.noCloneEvent=!1}),d.cloneNode(!0).click());for(f in{submit:!0,change:!0,focusin:!0})d.setAttribute(c="on"+f,"t"),t[f+"Bubbles"]=c in e||d.attributes[c].expando===!1;return d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===d.style.backgroundClip,b(function(){var n,r,a,s="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",u=o.getElementsByTagName("body")[0];u&&(n=o.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",u.appendChild(n).appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",a=d.getElementsByTagName("td"),a[0].style.cssText="padding:0;margin:0;border:0;display:none",p=0===a[0].offsetHeight,a[0].style.display="",a[1].style.display="none",t.reliableHiddenOffsets=p&&0===a[0].offsetHeight,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",t.boxSizing=4===d.offsetWidth,t.doesNotIncludeMarginInBodyOffset=1!==u.offsetTop,e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(d,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(d,null)||{width:"4px"}).width,r=d.appendChild(o.createElement("div")),r.style.cssText=d.style.cssText=s,r.style.marginRight=r.style.width="0",d.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof d.style.zoom!==i&&(d.innerHTML="",d.style.cssText=s+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===d.offsetWidth,d.style.display="block",d.innerHTML="<div></div>",d.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==d.offsetWidth,t.inlineBlockNeedsLayout&&(u.style.zoom=1)),u.removeChild(n),n=d=a=r=null)}),n=s=u=l=r=a=null,t}();var O=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,B=/([A-Z])/g;function P(e,n,r,i){if(b.acceptData(e)){var o,a,s=b.expando,u="string"==typeof n,l=e.nodeType,p=l?b.cache:e,f=l?e[s]:e[s]&&s;if(f&&p[f]&&(i||p[f].data)||!u||r!==t)return f||(l?e[s]=f=c.pop()||b.guid++:f=s),p[f]||(p[f]={},l||(p[f].toJSON=b.noop)),("object"==typeof n||"function"==typeof n)&&(i?p[f]=b.extend(p[f],n):p[f].data=b.extend(p[f].data,n)),o=p[f],i||(o.data||(o.data={}),o=o.data),r!==t&&(o[b.camelCase(n)]=r),u?(a=o[n],null==a&&(a=o[b.camelCase(n)])):a=o,a}}function R(e,t,n){if(b.acceptData(e)){var r,i,o,a=e.nodeType,s=a?b.cache:e,u=a?e[b.expando]:b.expando;if(s[u]){if(t&&(o=n?s[u]:s[u].data)){b.isArray(t)?t=t.concat(b.map(t,b.camelCase)):t in o?t=[t]:(t=b.camelCase(t),t=t in o?[t]:t.split(" "));for(r=0,i=t.length;i>r;r++)delete o[t[r]];if(!(n?$:b.isEmptyObject)(o))return}(n||(delete s[u].data,$(s[u])))&&(a?b.cleanData([e],!0):b.support.deleteExpando||s!=s.window?delete s[u]:s[u]=null)}}}b.extend({cache:{},expando:"jQuery"+(p+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(e){return e=e.nodeType?b.cache[e[b.expando]]:e[b.expando],!!e&&!$(e)},data:function(e,t,n){return P(e,t,n)},removeData:function(e,t){return R(e,t)},_data:function(e,t,n){return P(e,t,n,!0)},_removeData:function(e,t){return R(e,t,!0)},acceptData:function(e){if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType)return!1;var t=e.nodeName&&b.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),b.fn.extend({data:function(e,n){var r,i,o=this[0],a=0,s=null;if(e===t){if(this.length&&(s=b.data(o),1===o.nodeType&&!b._data(o,"parsedAttrs"))){for(r=o.attributes;r.length>a;a++)i=r[a].name,i.indexOf("data-")||(i=b.camelCase(i.slice(5)),W(o,i,s[i]));b._data(o,"parsedAttrs",!0)}return s}return"object"==typeof e?this.each(function(){b.data(this,e)}):b.access(this,function(n){return n===t?o?W(o,e,b.data(o,e)):null:(this.each(function(){b.data(this,e,n)}),t)},null,n,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){b.removeData(this,e)})}});function W(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(B,"-$1").toLowerCase();if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:O.test(r)?b.parseJSON(r):r}catch(o){}b.data(e,n,r)}else r=t}return r}function $(e){var t;for(t in e)if(("data"!==t||!b.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}b.extend({queue:function(e,n,r){var i;return e?(n=(n||"fx")+"queue",i=b._data(e,n),r&&(!i||b.isArray(r)?i=b._data(e,n,b.makeArray(r)):i.push(r)),i||[]):t},dequeue:function(e,t){t=t||"fx";var n=b.queue(e,t),r=n.length,i=n.shift(),o=b._queueHooks(e,t),a=function(){b.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),o.cur=i,i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return b._data(e,n)||b._data(e,n,{empty:b.Callbacks("once memory").add(function(){b._removeData(e,t+"queue"),b._removeData(e,n)})})}}),b.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?b.queue(this[0],e):n===t?this:this.each(function(){var t=b.queue(this,e,n);b._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&b.dequeue(this,e)})},dequeue:function(e){return this.each(function(){b.dequeue(this,e)})},delay:function(e,t){return e=b.fx?b.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=b.Deferred(),a=this,s=this.length,u=function(){--i||o.resolveWith(a,[a])};"string"!=typeof e&&(n=e,e=t),e=e||"fx";while(s--)r=b._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(u));return u(),o.promise(n)}});var I,z,X=/[\t\r\n]/g,U=/\r/g,V=/^(?:input|select|textarea|button|object)$/i,Y=/^(?:a|area)$/i,J=/^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,G=/^(?:checked|selected)$/i,Q=b.support.getSetAttribute,K=b.support.input;b.fn.extend({attr:function(e,t){return b.access(this,b.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){b.removeAttr(this,e)})},prop:function(e,t){return b.access(this,b.prop,e,t,arguments.length>1)},removeProp:function(e){return e=b.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,u="string"==typeof e&&e;if(b.isFunction(e))return this.each(function(t){b(this).addClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(X," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=b.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,u=0===arguments.length||"string"==typeof e&&e;if(b.isFunction(e))return this.each(function(t){b(this).removeClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(X," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?b.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e,r="boolean"==typeof t;return b.isFunction(e)?this.each(function(n){b(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var o,a=0,s=b(this),u=t,l=e.match(w)||[];while(o=l[a++])u=r?u:!s.hasClass(o),s[u?"addClass":"removeClass"](o)}else(n===i||"boolean"===n)&&(this.className&&b._data(this,"__className__",this.className),this.className=this.className||e===!1?"":b._data(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(X," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,o=this[0];{if(arguments.length)return i=b.isFunction(e),this.each(function(n){var o,a=b(this);1===this.nodeType&&(o=i?e.call(this,n,a.val()):e,null==o?o="":"number"==typeof o?o+="":b.isArray(o)&&(o=b.map(o,function(e){return null==e?"":e+""})),r=b.valHooks[this.type]||b.valHooks[this.nodeName.toLowerCase()],r&&"set"in r&&r.set(this,o,"value")!==t||(this.value=o))});if(o)return r=b.valHooks[o.type]||b.valHooks[o.nodeName.toLowerCase()],r&&"get"in r&&(n=r.get(o,"value"))!==t?n:(n=o.value,"string"==typeof n?n.replace(U,""):null==n?"":n)}}}),b.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,u=0>i?s:o?i:0;for(;s>u;u++)if(n=r[u],!(!n.selected&&u!==i||(b.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&b.nodeName(n.parentNode,"optgroup"))){if(t=b(n).val(),o)return t;a.push(t)}return a},set:function(e,t){var n=b.makeArray(t);return b(e).find("option").each(function(){this.selected=b.inArray(b(this).val(),n)>=0}),n.length||(e.selectedIndex=-1),n}}},attr:function(e,n,r){var o,a,s,u=e.nodeType;if(e&&3!==u&&8!==u&&2!==u)return typeof e.getAttribute===i?b.prop(e,n,r):(a=1!==u||!b.isXMLDoc(e),a&&(n=n.toLowerCase(),o=b.attrHooks[n]||(J.test(n)?z:I)),r===t?o&&a&&"get"in o&&null!==(s=o.get(e,n))?s:(typeof e.getAttribute!==i&&(s=e.getAttribute(n)),null==s?t:s):null!==r?o&&a&&"set"in o&&(s=o.set(e,r,n))!==t?s:(e.setAttribute(n,r+""),r):(b.removeAttr(e,n),t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(w);if(o&&1===e.nodeType)while(n=o[i++])r=b.propFix[n]||n,J.test(n)?!Q&&G.test(n)?e[b.camelCase("default-"+n)]=e[r]=!1:e[r]=!1:b.attr(e,n,""),e.removeAttribute(Q?n:r)},attrHooks:{type:{set:function(e,t){if(!b.support.radioValue&&"radio"===t&&b.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return a=1!==s||!b.isXMLDoc(e),a&&(n=b.propFix[n]||n,o=b.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){var n=e.getAttributeNode("tabindex");return n&&n.specified?parseInt(n.value,10):V.test(e.nodeName)||Y.test(e.nodeName)&&e.href?0:t}}}}),z={get:function(e,n){var r=b.prop(e,n),i="boolean"==typeof r&&e.getAttribute(n),o="boolean"==typeof r?K&&Q?null!=i:G.test(n)?e[b.camelCase("default-"+n)]:!!i:e.getAttributeNode(n);return o&&o.value!==!1?n.toLowerCase():t},set:function(e,t,n){return t===!1?b.removeAttr(e,n):K&&Q||!G.test(n)?e.setAttribute(!Q&&b.propFix[n]||n,n):e[b.camelCase("default-"+n)]=e[n]=!0,n}},K&&Q||(b.attrHooks.value={get:function(e,n){var r=e.getAttributeNode(n);return b.nodeName(e,"input")?e.defaultValue:r&&r.specified?r.value:t},set:function(e,n,r){return b.nodeName(e,"input")?(e.defaultValue=n,t):I&&I.set(e,n,r)}}),Q||(I=b.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);return r&&("id"===n||"name"===n||"coords"===n?""!==r.value:r.specified)?r.value:t},set:function(e,n,r){var i=e.getAttributeNode(r);return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t}},b.attrHooks.contenteditable={get:I.get,set:function(e,t,n){I.set(e,""===t?!1:t,n)}},b.each(["width","height"],function(e,n){b.attrHooks[n]=b.extend(b.attrHooks[n],{set:function(e,r){return""===r?(e.setAttribute(n,"auto"),r):t}})})),b.support.hrefNormalized||(b.each(["href","src","width","height"],function(e,n){b.attrHooks[n]=b.extend(b.attrHooks[n],{get:function(e){var r=e.getAttribute(n,2);return null==r?t:r}})}),b.each(["href","src"],function(e,t){b.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}})),b.support.style||(b.attrHooks.style={get:function(e){return e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}),b.support.optSelected||(b.propHooks.selected=b.extend(b.propHooks.selected,{get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}})),b.support.enctype||(b.propFix.enctype="encoding"),b.support.checkOn||b.each(["radio","checkbox"],function(){b.valHooks[this]={get:function(e){return null===e.getAttribute("value")?"on":e.value}}}),b.each(["radio","checkbox"],function(){b.valHooks[this]=b.extend(b.valHooks[this],{set:function(e,n){return b.isArray(n)?e.checked=b.inArray(b(e).val(),n)>=0:t}})});var Z=/^(?:input|select|textarea)$/i,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfocus|focusoutblur)$/,rt=/^([^.]*)(?:\.(.+)|)$/;function it(){return!0}function ot(){return!1}b.event={global:{},add:function(e,n,r,o,a){var s,u,l,c,p,f,d,h,g,m,y,v=b._data(e);if(v){r.handler&&(c=r,r=c.handler,a=c.selector),r.guid||(r.guid=b.guid++),(u=v.events)||(u=v.events={}),(f=v.handle)||(f=v.handle=function(e){return typeof b===i||e&&b.event.triggered===e.type?t:b.event.dispatch.apply(f.elem,arguments)},f.elem=e),n=(n||"").match(w)||[""],l=n.length;while(l--)s=rt.exec(n[l])||[],g=y=s[1],m=(s[2]||"").split(".").sort(),p=b.event.special[g]||{},g=(a?p.delegateType:p.bindType)||g,p=b.event.special[g]||{},d=b.extend({type:g,origType:y,data:o,handler:r,guid:r.guid,selector:a,needsContext:a&&b.expr.match.needsContext.test(a),namespace:m.join(".")},c),(h=u[g])||(h=u[g]=[],h.delegateCount=0,p.setup&&p.setup.call(e,o,m,f)!==!1||(e.addEventListener?e.addEventListener(g,f,!1):e.attachEvent&&e.attachEvent("on"+g,f))),p.add&&(p.add.call(e,d),d.handler.guid||(d.handler.guid=r.guid)),a?h.splice(h.delegateCount++,0,d):h.push(d),b.event.global[g]=!0;e=null}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,p,f,d,h,g,m=b.hasData(e)&&b._data(e);if(m&&(c=m.events)){t=(t||"").match(w)||[""],l=t.length;while(l--)if(s=rt.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){p=b.event.special[d]||{},d=(r?p.delegateType:p.bindType)||d,f=c[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),u=o=f.length;while(o--)a=f[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(f.splice(o,1),a.selector&&f.delegateCount--,p.remove&&p.remove.call(e,a));u&&!f.length&&(p.teardown&&p.teardown.call(e,h,m.handle)!==!1||b.removeEvent(e,d,m.handle),delete c[d])}else for(d in c)b.event.remove(e,d+t[l],n,r,!0);b.isEmptyObject(c)&&(delete m.handle,b._removeData(e,"events"))}},trigger:function(n,r,i,a){var s,u,l,c,p,f,d,h=[i||o],g=y.call(n,"type")?n.type:n,m=y.call(n,"namespace")?n.namespace.split("."):[];if(l=f=i=i||o,3!==i.nodeType&&8!==i.nodeType&&!nt.test(g+b.event.triggered)&&(g.indexOf(".")>=0&&(m=g.split("."),g=m.shift(),m.sort()),u=0>g.indexOf(":")&&"on"+g,n=n[b.expando]?n:new b.Event(g,"object"==typeof n&&n),n.isTrigger=!0,n.namespace=m.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:b.makeArray(r,[n]),p=b.event.special[g]||{},a||!p.trigger||p.trigger.apply(i,r)!==!1)){if(!a&&!p.noBubble&&!b.isWindow(i)){for(c=p.delegateType||g,nt.test(c+g)||(l=l.parentNode);l;l=l.parentNode)h.push(l),f=l;f===(i.ownerDocument||o)&&h.push(f.defaultView||f.parentWindow||e)}d=0;while((l=h[d++])&&!n.isPropagationStopped())n.type=d>1?c:p.bindType||g,s=(b._data(l,"events")||{})[n.type]&&b._data(l,"handle"),s&&s.apply(l,r),s=u&&l[u],s&&b.acceptData(l)&&s.apply&&s.apply(l,r)===!1&&n.preventDefault();if(n.type=g,!(a||n.isDefaultPrevented()||p._default&&p._default.apply(i.ownerDocument,r)!==!1||"click"===g&&b.nodeName(i,"a")||!b.acceptData(i)||!u||!i[g]||b.isWindow(i))){f=i[u],f&&(i[u]=null),b.event.triggered=g;try{i[g]()}catch(v){}b.event.triggered=t,f&&(i[u]=f)}return n.result}},dispatch:function(e){e=b.event.fix(e);var n,r,i,o,a,s=[],u=h.call(arguments),l=(b._data(this,"events")||{})[e.type]||[],c=b.event.special[e.type]||{};if(u[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){s=b.event.handlers.call(this,e,l),n=0;while((o=s[n++])&&!e.isPropagationStopped()){e.currentTarget=o.elem,a=0;while((i=o.handlers[a++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i,e.data=i.data,r=((b.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,u),r!==t&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,n){var r,i,o,a,s=[],u=n.delegateCount,l=e.target;if(u&&l.nodeType&&(!e.button||"click"!==e.type))for(;l!=this;l=l.parentNode||this)if(1===l.nodeType&&(l.disabled!==!0||"click"!==e.type)){for(o=[],a=0;u>a;a++)i=n[a],r=i.selector+" ",o[r]===t&&(o[r]=i.needsContext?b(r,this).index(l)>=0:b.find(r,this,null,[l]).length),o[r]&&o.push(i);o.length&&s.push({elem:l,handlers:o})}return n.length>u&&s.push({elem:this,handlers:n.slice(u)}),s},fix:function(e){if(e[b.expando])return e;var t,n,r,i=e.type,a=e,s=this.fixHooks[i];s||(this.fixHooks[i]=s=tt.test(i)?this.mouseHooks:et.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new b.Event(a),t=r.length;while(t--)n=r[t],e[n]=a[n];return e.target||(e.target=a.srcElement||o),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,a):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,a,s=n.button,u=n.fromElement;return null==e.pageX&&null!=n.clientX&&(i=e.target.ownerDocument||o,a=i.documentElement,r=i.body,e.pageX=n.clientX+(a&&a.scrollLeft||r&&r.scrollLeft||0)-(a&&a.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(a&&a.scrollTop||r&&r.scrollTop||0)-(a&&a.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&u&&(e.relatedTarget=u===e.target?n.toElement:u),e.which||s===t||(e.which=1&s?1:2&s?3:4&s?2:0),e}},special:{load:{noBubble:!0},click:{trigger:function(){return b.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t}},focus:{trigger:function(){if(this!==o.activeElement&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===o.activeElement&&this.blur?(this.blur(),!1):t},delegateType:"focusout"},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=b.extend(new b.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?b.event.trigger(i,null,t):b.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},b.removeEvent=o.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]===i&&(e[r]=null),e.detachEvent(r,n))},b.Event=function(e,n){return this instanceof b.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?it:ot):this.type=e,n&&b.extend(this,n),this.timeStamp=e&&e.timeStamp||b.now(),this[b.expando]=!0,t):new b.Event(e,n)},b.Event.prototype={isDefaultPrevented:ot,isPropagationStopped:ot,isImmediatePropagationStopped:ot,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=it,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=it,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=it,this.stopPropagation()}},b.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){b.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;
    return(!i||i!==r&&!b.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),b.support.submitBubbles||(b.event.special.submit={setup:function(){return b.nodeName(this,"form")?!1:(b.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=b.nodeName(n,"input")||b.nodeName(n,"button")?n.form:t;r&&!b._data(r,"submitBubbles")&&(b.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),b._data(r,"submitBubbles",!0))}),t)},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&b.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return b.nodeName(this,"form")?!1:(b.event.remove(this,"._submit"),t)}}),b.support.changeBubbles||(b.event.special.change={setup:function(){return Z.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(b.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),b.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),b.event.simulate("change",this,e,!0)})),!1):(b.event.add(this,"beforeactivate._change",function(e){var t=e.target;Z.test(t.nodeName)&&!b._data(t,"changeBubbles")&&(b.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||b.event.simulate("change",this.parentNode,e,!0)}),b._data(t,"changeBubbles",!0))}),t)},handle:function(e){var n=e.target;return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t},teardown:function(){return b.event.remove(this,"._change"),!Z.test(this.nodeName)}}),b.support.focusinBubbles||b.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){b.event.simulate(t,e.target,b.event.fix(e),!0)};b.event.special[t]={setup:function(){0===n++&&o.addEventListener(e,r,!0)},teardown:function(){0===--n&&o.removeEventListener(e,r,!0)}}}),b.fn.extend({on:function(e,n,r,i,o){var a,s;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);for(a in e)this.on(a,n,r,e[a],o);return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1)i=ot;else if(!i)return this;return 1===o&&(s=i,i=function(e){return b().off(e),s.apply(this,arguments)},i.guid=s.guid||(s.guid=b.guid++)),this.each(function(){b.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,b(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,n,e[o]);return this}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=ot),this.each(function(){b.event.remove(this,e,r,n)})},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},trigger:function(e,t){return this.each(function(){b.event.trigger(e,t,this)})},triggerHandler:function(e,n){var r=this[0];return r?b.event.trigger(e,n,r,!0):t}}),function(e,t){var n,r,i,o,a,s,u,l,c,p,f,d,h,g,m,y,v,x="sizzle"+-new Date,w=e.document,T={},N=0,C=0,k=it(),E=it(),S=it(),A=typeof t,j=1<<31,D=[],L=D.pop,H=D.push,q=D.slice,M=D.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},_="[\\x20\\t\\r\\n\\f]",F="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=F.replace("w","w#"),B="([*^$|!~]?=)",P="\\["+_+"*("+F+")"+_+"*(?:"+B+_+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+O+")|)|)"+_+"*\\]",R=":("+F+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+P.replace(3,8)+")*)|.*)\\)|)",W=RegExp("^"+_+"+|((?:^|[^\\\\])(?:\\\\.)*)"+_+"+$","g"),$=RegExp("^"+_+"*,"+_+"*"),I=RegExp("^"+_+"*([\\x20\\t\\r\\n\\f>+~])"+_+"*"),z=RegExp(R),X=RegExp("^"+O+"$"),U={ID:RegExp("^#("+F+")"),CLASS:RegExp("^\\.("+F+")"),NAME:RegExp("^\\[name=['\"]?("+F+")['\"]?\\]"),TAG:RegExp("^("+F.replace("w","w*")+")"),ATTR:RegExp("^"+P),PSEUDO:RegExp("^"+R),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+_+"*(even|odd|(([+-]|)(\\d*)n|)"+_+"*(?:([+-]|)"+_+"*(\\d+)|))"+_+"*\\)|)","i"),needsContext:RegExp("^"+_+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+_+"*((?:-\\d)?\\d*)"+_+"*\\)|)(?=[^-]|$)","i")},V=/[\x20\t\r\n\f]*[+~]/,Y=/^[^{]+\{\s*\[native code/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,G=/^(?:input|select|textarea|button)$/i,Q=/^h\d$/i,K=/'|\\/g,Z=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,et=/\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,tt=function(e,t){var n="0x"+t-65536;return n!==n?t:0>n?String.fromCharCode(n+65536):String.fromCharCode(55296|n>>10,56320|1023&n)};try{q.call(w.documentElement.childNodes,0)[0].nodeType}catch(nt){q=function(e){var t,n=[];while(t=this[e++])n.push(t);return n}}function rt(e){return Y.test(e+"")}function it(){var e,t=[];return e=function(n,r){return t.push(n+=" ")>i.cacheLength&&delete e[t.shift()],e[n]=r}}function ot(e){return e[x]=!0,e}function at(e){var t=p.createElement("div");try{return e(t)}catch(n){return!1}finally{t=null}}function st(e,t,n,r){var i,o,a,s,u,l,f,g,m,v;if((t?t.ownerDocument||t:w)!==p&&c(t),t=t||p,n=n||[],!e||"string"!=typeof e)return n;if(1!==(s=t.nodeType)&&9!==s)return[];if(!d&&!r){if(i=J.exec(e))if(a=i[1]){if(9===s){if(o=t.getElementById(a),!o||!o.parentNode)return n;if(o.id===a)return n.push(o),n}else if(t.ownerDocument&&(o=t.ownerDocument.getElementById(a))&&y(t,o)&&o.id===a)return n.push(o),n}else{if(i[2])return H.apply(n,q.call(t.getElementsByTagName(e),0)),n;if((a=i[3])&&T.getByClassName&&t.getElementsByClassName)return H.apply(n,q.call(t.getElementsByClassName(a),0)),n}if(T.qsa&&!h.test(e)){if(f=!0,g=x,m=t,v=9===s&&e,1===s&&"object"!==t.nodeName.toLowerCase()){l=ft(e),(f=t.getAttribute("id"))?g=f.replace(K,"\\$&"):t.setAttribute("id",g),g="[id='"+g+"'] ",u=l.length;while(u--)l[u]=g+dt(l[u]);m=V.test(e)&&t.parentNode||t,v=l.join(",")}if(v)try{return H.apply(n,q.call(m.querySelectorAll(v),0)),n}catch(b){}finally{f||t.removeAttribute("id")}}}return wt(e.replace(W,"$1"),t,n,r)}a=st.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},c=st.setDocument=function(e){var n=e?e.ownerDocument||e:w;return n!==p&&9===n.nodeType&&n.documentElement?(p=n,f=n.documentElement,d=a(n),T.tagNameNoComments=at(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),T.attributes=at(function(e){e.innerHTML="<select></select>";var t=typeof e.lastChild.getAttribute("multiple");return"boolean"!==t&&"string"!==t}),T.getByClassName=at(function(e){return e.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",e.getElementsByClassName&&e.getElementsByClassName("e").length?(e.lastChild.className="e",2===e.getElementsByClassName("e").length):!1}),T.getByName=at(function(e){e.id=x+0,e.innerHTML="<a name='"+x+"'></a><div name='"+x+"'></div>",f.insertBefore(e,f.firstChild);var t=n.getElementsByName&&n.getElementsByName(x).length===2+n.getElementsByName(x+0).length;return T.getIdNotName=!n.getElementById(x),f.removeChild(e),t}),i.attrHandle=at(function(e){return e.innerHTML="<a href='#'></a>",e.firstChild&&typeof e.firstChild.getAttribute!==A&&"#"===e.firstChild.getAttribute("href")})?{}:{href:function(e){return e.getAttribute("href",2)},type:function(e){return e.getAttribute("type")}},T.getIdNotName?(i.find.ID=function(e,t){if(typeof t.getElementById!==A&&!d){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},i.filter.ID=function(e){var t=e.replace(et,tt);return function(e){return e.getAttribute("id")===t}}):(i.find.ID=function(e,n){if(typeof n.getElementById!==A&&!d){var r=n.getElementById(e);return r?r.id===e||typeof r.getAttributeNode!==A&&r.getAttributeNode("id").value===e?[r]:t:[]}},i.filter.ID=function(e){var t=e.replace(et,tt);return function(e){var n=typeof e.getAttributeNode!==A&&e.getAttributeNode("id");return n&&n.value===t}}),i.find.TAG=T.tagNameNoComments?function(e,n){return typeof n.getElementsByTagName!==A?n.getElementsByTagName(e):t}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},i.find.NAME=T.getByName&&function(e,n){return typeof n.getElementsByName!==A?n.getElementsByName(name):t},i.find.CLASS=T.getByClassName&&function(e,n){return typeof n.getElementsByClassName===A||d?t:n.getElementsByClassName(e)},g=[],h=[":focus"],(T.qsa=rt(n.querySelectorAll))&&(at(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||h.push("\\["+_+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),e.querySelectorAll(":checked").length||h.push(":checked")}),at(function(e){e.innerHTML="<input type='hidden' i=''/>",e.querySelectorAll("[i^='']").length&&h.push("[*^$]="+_+"*(?:\"\"|'')"),e.querySelectorAll(":enabled").length||h.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),h.push(",.*:")})),(T.matchesSelector=rt(m=f.matchesSelector||f.mozMatchesSelector||f.webkitMatchesSelector||f.oMatchesSelector||f.msMatchesSelector))&&at(function(e){T.disconnectedMatch=m.call(e,"div"),m.call(e,"[s!='']:x"),g.push("!=",R)}),h=RegExp(h.join("|")),g=RegExp(g.join("|")),y=rt(f.contains)||f.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},v=f.compareDocumentPosition?function(e,t){var r;return e===t?(u=!0,0):(r=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t))?1&r||e.parentNode&&11===e.parentNode.nodeType?e===n||y(w,e)?-1:t===n||y(w,t)?1:0:4&r?-1:1:e.compareDocumentPosition?-1:1}:function(e,t){var r,i=0,o=e.parentNode,a=t.parentNode,s=[e],l=[t];if(e===t)return u=!0,0;if(!o||!a)return e===n?-1:t===n?1:o?-1:a?1:0;if(o===a)return ut(e,t);r=e;while(r=r.parentNode)s.unshift(r);r=t;while(r=r.parentNode)l.unshift(r);while(s[i]===l[i])i++;return i?ut(s[i],l[i]):s[i]===w?-1:l[i]===w?1:0},u=!1,[0,0].sort(v),T.detectDuplicates=u,p):p},st.matches=function(e,t){return st(e,null,null,t)},st.matchesSelector=function(e,t){if((e.ownerDocument||e)!==p&&c(e),t=t.replace(Z,"='$1']"),!(!T.matchesSelector||d||g&&g.test(t)||h.test(t)))try{var n=m.call(e,t);if(n||T.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(r){}return st(t,p,null,[e]).length>0},st.contains=function(e,t){return(e.ownerDocument||e)!==p&&c(e),y(e,t)},st.attr=function(e,t){var n;return(e.ownerDocument||e)!==p&&c(e),d||(t=t.toLowerCase()),(n=i.attrHandle[t])?n(e):d||T.attributes?e.getAttribute(t):((n=e.getAttributeNode(t))||e.getAttribute(t))&&e[t]===!0?t:n&&n.specified?n.value:null},st.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},st.uniqueSort=function(e){var t,n=[],r=1,i=0;if(u=!T.detectDuplicates,e.sort(v),u){for(;t=e[r];r++)t===e[r-1]&&(i=n.push(r));while(i--)e.splice(n[i],1)}return e};function ut(e,t){var n=t&&e,r=n&&(~t.sourceIndex||j)-(~e.sourceIndex||j);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function lt(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function ct(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function pt(e){return ot(function(t){return t=+t,ot(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}o=st.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=o(t);return n},i=st.selectors={cacheLength:50,createPseudo:ot,match:U,find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(et,tt),e[3]=(e[4]||e[5]||"").replace(et,tt),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||st.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&st.error(e[0]),e},PSEUDO:function(e){var t,n=!e[5]&&e[2];return U.CHILD.test(e[0])?null:(e[4]?e[2]=e[4]:n&&z.test(n)&&(t=ft(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){return"*"===e?function(){return!0}:(e=e.replace(et,tt).toLowerCase(),function(t){return t.nodeName&&t.nodeName.toLowerCase()===e})},CLASS:function(e){var t=k[e+" "];return t||(t=RegExp("(^|"+_+")"+e+"("+_+"|$)"))&&k(e,function(e){return t.test(e.className||typeof e.getAttribute!==A&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=st.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,p,f,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!u&&!s;if(m){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&v){c=m[x]||(m[x]={}),l=c[e]||[],d=l[0]===N&&l[1],f=l[0]===N&&l[2],p=d&&m.childNodes[d];while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[N,d,f];break}}else if(v&&(l=(t[x]||(t[x]={}))[e])&&l[0]===N)f=l[1];else while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(v&&((p[x]||(p[x]={}))[e]=[N,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||st.error("unsupported pseudo: "+e);return r[x]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?ot(function(e,n){var i,o=r(e,t),a=o.length;while(a--)i=M.call(e,o[a]),e[i]=!(n[i]=o[a])}):function(e){return r(e,0,n)}):r}},pseudos:{not:ot(function(e){var t=[],n=[],r=s(e.replace(W,"$1"));return r[x]?ot(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:ot(function(e){return function(t){return st(e,t).length>0}}),contains:ot(function(e){return function(t){return(t.textContent||t.innerText||o(t)).indexOf(e)>-1}}),lang:ot(function(e){return X.test(e||"")||st.error("unsupported lang: "+e),e=e.replace(et,tt).toLowerCase(),function(t){var n;do if(n=d?t.getAttribute("xml:lang")||t.getAttribute("lang"):t.lang)return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===f},focus:function(e){return e===p.activeElement&&(!p.hasFocus||p.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!i.pseudos.empty(e)},header:function(e){return Q.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:pt(function(){return[0]}),last:pt(function(e,t){return[t-1]}),eq:pt(function(e,t,n){return[0>n?n+t:n]}),even:pt(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:pt(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:pt(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:pt(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}};for(n in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})i.pseudos[n]=lt(n);for(n in{submit:!0,reset:!0})i.pseudos[n]=ct(n);function ft(e,t){var n,r,o,a,s,u,l,c=E[e+" "];if(c)return t?0:c.slice(0);s=e,u=[],l=i.preFilter;while(s){(!n||(r=$.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),u.push(o=[])),n=!1,(r=I.exec(s))&&(n=r.shift(),o.push({value:n,type:r[0].replace(W," ")}),s=s.slice(n.length));for(a in i.filter)!(r=U[a].exec(s))||l[a]&&!(r=l[a](r))||(n=r.shift(),o.push({value:n,type:a,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?st.error(e):E(e,u).slice(0)}function dt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function ht(e,t,n){var i=t.dir,o=n&&"parentNode"===i,a=C++;return t.first?function(t,n,r){while(t=t[i])if(1===t.nodeType||o)return e(t,n,r)}:function(t,n,s){var u,l,c,p=N+" "+a;if(s){while(t=t[i])if((1===t.nodeType||o)&&e(t,n,s))return!0}else while(t=t[i])if(1===t.nodeType||o)if(c=t[x]||(t[x]={}),(l=c[i])&&l[0]===p){if((u=l[1])===!0||u===r)return u===!0}else if(l=c[i]=[p],l[1]=e(t,n,s)||r,l[1]===!0)return!0}}function gt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function mt(e,t,n,r,i){var o,a=[],s=0,u=e.length,l=null!=t;for(;u>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),l&&t.push(s));return a}function yt(e,t,n,r,i,o){return r&&!r[x]&&(r=yt(r)),i&&!i[x]&&(i=yt(i,o)),ot(function(o,a,s,u){var l,c,p,f=[],d=[],h=a.length,g=o||xt(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:mt(g,f,e,s,u),y=n?i||(o?e:h||r)?[]:a:m;if(n&&n(m,y,s,u),r){l=mt(y,d),r(l,[],s,u),c=l.length;while(c--)(p=l[c])&&(y[d[c]]=!(m[d[c]]=p))}if(o){if(i||e){if(i){l=[],c=y.length;while(c--)(p=y[c])&&l.push(m[c]=p);i(null,y=[],l,u)}c=y.length;while(c--)(p=y[c])&&(l=i?M.call(o,p):f[c])>-1&&(o[l]=!(a[l]=p))}}else y=mt(y===a?y.splice(h,y.length):y),i?i(null,a,y,u):H.apply(a,y)})}function vt(e){var t,n,r,o=e.length,a=i.relative[e[0].type],s=a||i.relative[" "],u=a?1:0,c=ht(function(e){return e===t},s,!0),p=ht(function(e){return M.call(t,e)>-1},s,!0),f=[function(e,n,r){return!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;o>u;u++)if(n=i.relative[e[u].type])f=[ht(gt(f),n)];else{if(n=i.filter[e[u].type].apply(null,e[u].matches),n[x]){for(r=++u;o>r;r++)if(i.relative[e[r].type])break;return yt(u>1&&gt(f),u>1&&dt(e.slice(0,u-1)).replace(W,"$1"),n,r>u&&vt(e.slice(u,r)),o>r&&vt(e=e.slice(r)),o>r&&dt(e))}f.push(n)}return gt(f)}function bt(e,t){var n=0,o=t.length>0,a=e.length>0,s=function(s,u,c,f,d){var h,g,m,y=[],v=0,b="0",x=s&&[],w=null!=d,T=l,C=s||a&&i.find.TAG("*",d&&u.parentNode||u),k=N+=null==T?1:Math.random()||.1;for(w&&(l=u!==p&&u,r=n);null!=(h=C[b]);b++){if(a&&h){g=0;while(m=e[g++])if(m(h,u,c)){f.push(h);break}w&&(N=k,r=++n)}o&&((h=!m&&h)&&v--,s&&x.push(h))}if(v+=b,o&&b!==v){g=0;while(m=t[g++])m(x,y,u,c);if(s){if(v>0)while(b--)x[b]||y[b]||(y[b]=L.call(f));y=mt(y)}H.apply(f,y),w&&!s&&y.length>0&&v+t.length>1&&st.uniqueSort(f)}return w&&(N=k,l=T),x};return o?ot(s):s}s=st.compile=function(e,t){var n,r=[],i=[],o=S[e+" "];if(!o){t||(t=ft(e)),n=t.length;while(n--)o=vt(t[n]),o[x]?r.push(o):i.push(o);o=S(e,bt(i,r))}return o};function xt(e,t,n){var r=0,i=t.length;for(;i>r;r++)st(e,t[r],n);return n}function wt(e,t,n,r){var o,a,u,l,c,p=ft(e);if(!r&&1===p.length){if(a=p[0]=p[0].slice(0),a.length>2&&"ID"===(u=a[0]).type&&9===t.nodeType&&!d&&i.relative[a[1].type]){if(t=i.find.ID(u.matches[0].replace(et,tt),t)[0],!t)return n;e=e.slice(a.shift().value.length)}o=U.needsContext.test(e)?0:a.length;while(o--){if(u=a[o],i.relative[l=u.type])break;if((c=i.find[l])&&(r=c(u.matches[0].replace(et,tt),V.test(a[0].type)&&t.parentNode||t))){if(a.splice(o,1),e=r.length&&dt(a),!e)return H.apply(n,q.call(r,0)),n;break}}}return s(e,p)(r,t,d,n,V.test(e)),n}i.pseudos.nth=i.pseudos.eq;function Tt(){}i.filters=Tt.prototype=i.pseudos,i.setFilters=new Tt,c(),st.attr=b.attr,b.find=st,b.expr=st.selectors,b.expr[":"]=b.expr.pseudos,b.unique=st.uniqueSort,b.text=st.getText,b.isXMLDoc=st.isXML,b.contains=st.contains}(e);var at=/Until$/,st=/^(?:parents|prev(?:Until|All))/,ut=/^.[^:#\[\.,]*$/,lt=b.expr.match.needsContext,ct={children:!0,contents:!0,next:!0,prev:!0};b.fn.extend({find:function(e){var t,n,r,i=this.length;if("string"!=typeof e)return r=this,this.pushStack(b(e).filter(function(){for(t=0;i>t;t++)if(b.contains(r[t],this))return!0}));for(n=[],t=0;i>t;t++)b.find(e,this[t],n);return n=this.pushStack(i>1?b.unique(n):n),n.selector=(this.selector?this.selector+" ":"")+e,n},has:function(e){var t,n=b(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(b.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e,!1))},filter:function(e){return this.pushStack(ft(this,e,!0))},is:function(e){return!!e&&("string"==typeof e?lt.test(e)?b(e,this.context).index(this[0])>=0:b.filter(e,this).length>0:this.filter(e).length>0)},closest:function(e,t){var n,r=0,i=this.length,o=[],a=lt.test(e)||"string"!=typeof e?b(e,t||this.context):0;for(;i>r;r++){n=this[r];while(n&&n.ownerDocument&&n!==t&&11!==n.nodeType){if(a?a.index(n)>-1:b.find.matchesSelector(n,e)){o.push(n);break}n=n.parentNode}}return this.pushStack(o.length>1?b.unique(o):o)},index:function(e){return e?"string"==typeof e?b.inArray(this[0],b(e)):b.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?b(e,t):b.makeArray(e&&e.nodeType?[e]:e),r=b.merge(this.get(),n);return this.pushStack(b.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),b.fn.andSelf=b.fn.addBack;function pt(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}b.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return b.dir(e,"parentNode")},parentsUntil:function(e,t,n){return b.dir(e,"parentNode",n)},next:function(e){return pt(e,"nextSibling")},prev:function(e){return pt(e,"previousSibling")},nextAll:function(e){return b.dir(e,"nextSibling")},prevAll:function(e){return b.dir(e,"previousSibling")},nextUntil:function(e,t,n){return b.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return b.dir(e,"previousSibling",n)},siblings:function(e){return b.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return b.sibling(e.firstChild)},contents:function(e){return b.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:b.merge([],e.childNodes)}},function(e,t){b.fn[e]=function(n,r){var i=b.map(this,t,n);return at.test(e)||(r=n),r&&"string"==typeof r&&(i=b.filter(r,i)),i=this.length>1&&!ct[e]?b.unique(i):i,this.length>1&&st.test(e)&&(i=i.reverse()),this.pushStack(i)}}),b.extend({filter:function(e,t,n){return n&&(e=":not("+e+")"),1===t.length?b.find.matchesSelector(t[0],e)?[t[0]]:[]:b.find.matches(e,t)},dir:function(e,n,r){var i=[],o=e[n];while(o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!b(o).is(r)))1===o.nodeType&&i.push(o),o=o[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function ft(e,t,n){if(t=t||0,b.isFunction(t))return b.grep(e,function(e,r){var i=!!t.call(e,r,e);return i===n});if(t.nodeType)return b.grep(e,function(e){return e===t===n});if("string"==typeof t){var r=b.grep(e,function(e){return 1===e.nodeType});if(ut.test(t))return b.filter(t,r,!n);t=b.filter(t,r)}return b.grep(e,function(e){return b.inArray(e,t)>=0===n})}function dt(e){var t=ht.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}var ht="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gt=/ jQuery\d+="(?:null|\d+)"/g,mt=RegExp("<(?:"+ht+")[\\s/>]","i"),yt=/^\s+/,vt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bt=/<([\w:]+)/,xt=/<tbody/i,wt=/<|&#?\w+;/,Tt=/<(?:script|style|link)/i,Nt=/^(?:checkbox|radio)$/i,Ct=/checked\s*(?:[^=]|=\s*.checked.)/i,kt=/^$|\/(?:java|ecma)script/i,Et=/^true\/(.*)/,St=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,At={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:b.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},jt=dt(o),Dt=jt.appendChild(o.createElement("div"));At.optgroup=At.option,At.tbody=At.tfoot=At.colgroup=At.caption=At.thead,At.th=At.td,b.fn.extend({text:function(e){return b.access(this,function(e){return e===t?b.text(this):this.empty().append((this[0]&&this[0].ownerDocument||o).createTextNode(e))},null,e,arguments.length)},wrapAll:function(e){if(b.isFunction(e))return this.each(function(t){b(this).wrapAll(e.call(this,t))});if(this[0]){var t=b(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&1===e.firstChild.nodeType)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return b.isFunction(e)?this.each(function(t){b(this).wrapInner(e.call(this,t))}):this.each(function(){var t=b(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=b.isFunction(e);return this.each(function(n){b(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){b.nodeName(this,"body")||b(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.appendChild(e)})},prepend:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.insertBefore(e,this.firstChild)})},before:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=0;for(;null!=(n=this[r]);r++)(!e||b.filter(e,[n]).length>0)&&(t||1!==n.nodeType||b.cleanData(Ot(n)),n.parentNode&&(t&&b.contains(n.ownerDocument,n)&&Mt(Ot(n,"script")),n.parentNode.removeChild(n)));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++){1===e.nodeType&&b.cleanData(Ot(e,!1));while(e.firstChild)e.removeChild(e.firstChild);e.options&&b.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return b.clone(this,e,t)})},html:function(e){return b.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return 1===n.nodeType?n.innerHTML.replace(gt,""):t;if(!("string"!=typeof e||Tt.test(e)||!b.support.htmlSerialize&&mt.test(e)||!b.support.leadingWhitespace&&yt.test(e)||At[(bt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(vt,"<$1></$2>");try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(b.cleanData(Ot(n,!1)),n.innerHTML=e);n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(e){var t=b.isFunction(e);return t||"string"==typeof e||(e=b(e).not(this).detach()),this.domManip([e],!0,function(e){var t=this.nextSibling,n=this.parentNode;n&&(b(this).remove(),n.insertBefore(e,t))})},detach:function(e){return this.remove(e,!0)},domManip:function(e,n,r){e=f.apply([],e);var i,o,a,s,u,l,c=0,p=this.length,d=this,h=p-1,g=e[0],m=b.isFunction(g);if(m||!(1>=p||"string"!=typeof g||b.support.checkClone)&&Ct.test(g))return this.each(function(i){var o=d.eq(i);m&&(e[0]=g.call(this,i,n?o.html():t)),o.domManip(e,n,r)});if(p&&(l=b.buildFragment(e,this[0].ownerDocument,!1,this),i=l.firstChild,1===l.childNodes.length&&(l=i),i)){for(n=n&&b.nodeName(i,"tr"),s=b.map(Ot(l,"script"),Ht),a=s.length;p>c;c++)o=l,c!==h&&(o=b.clone(o,!0,!0),a&&b.merge(s,Ot(o,"script"))),r.call(n&&b.nodeName(this[c],"table")?Lt(this[c],"tbody"):this[c],o,c);if(a)for(u=s[s.length-1].ownerDocument,b.map(s,qt),c=0;a>c;c++)o=s[c],kt.test(o.type||"")&&!b._data(o,"globalEval")&&b.contains(u,o)&&(o.src?b.ajax({url:o.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):b.globalEval((o.text||o.textContent||o.innerHTML||"").replace(St,"")));l=i=null}return this}});function Lt(e,t){return e.getElementsByTagName(t)[0]||e.appendChild(e.ownerDocument.createElement(t))}function Ht(e){var t=e.getAttributeNode("type");return e.type=(t&&t.specified)+"/"+e.type,e}function qt(e){var t=Et.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function Mt(e,t){var n,r=0;for(;null!=(n=e[r]);r++)b._data(n,"globalEval",!t||b._data(t[r],"globalEval"))}function _t(e,t){if(1===t.nodeType&&b.hasData(e)){var n,r,i,o=b._data(e),a=b._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)b.event.add(t,n,s[n][r])}a.data&&(a.data=b.extend({},a.data))}}function Ft(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!b.support.noCloneEvent&&t[b.expando]){i=b._data(t);for(r in i.events)b.removeEvent(t,r,i.handle);t.removeAttribute(b.expando)}"script"===n&&t.text!==e.text?(Ht(t).text=e.text,qt(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),b.support.html5Clone&&e.innerHTML&&!b.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Nt.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}}b.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){b.fn[e]=function(e){var n,r=0,i=[],o=b(e),a=o.length-1;for(;a>=r;r++)n=r===a?this:this.clone(!0),b(o[r])[t](n),d.apply(i,n.get());return this.pushStack(i)}});function Ot(e,n){var r,o,a=0,s=typeof e.getElementsByTagName!==i?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==i?e.querySelectorAll(n||"*"):t;if(!s)for(s=[],r=e.childNodes||e;null!=(o=r[a]);a++)!n||b.nodeName(o,n)?s.push(o):b.merge(s,Ot(o,n));return n===t||n&&b.nodeName(e,n)?b.merge([e],s):s}function Bt(e){Nt.test(e.type)&&(e.defaultChecked=e.checked)}b.extend({clone:function(e,t,n){var r,i,o,a,s,u=b.contains(e.ownerDocument,e);if(b.support.html5Clone||b.isXMLDoc(e)||!mt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Dt.innerHTML=e.outerHTML,Dt.removeChild(o=Dt.firstChild)),!(b.support.noCloneEvent&&b.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||b.isXMLDoc(e)))for(r=Ot(o),s=Ot(e),a=0;null!=(i=s[a]);++a)r[a]&&Ft(i,r[a]);if(t)if(n)for(s=s||Ot(e),r=r||Ot(o),a=0;null!=(i=s[a]);a++)_t(i,r[a]);else _t(e,o);return r=Ot(o,"script"),r.length>0&&Mt(r,!u&&Ot(e,"script")),r=s=i=null,o},buildFragment:function(e,t,n,r){var i,o,a,s,u,l,c,p=e.length,f=dt(t),d=[],h=0;for(;p>h;h++)if(o=e[h],o||0===o)if("object"===b.type(o))b.merge(d,o.nodeType?[o]:o);else if(wt.test(o)){s=s||f.appendChild(t.createElement("div")),u=(bt.exec(o)||["",""])[1].toLowerCase(),c=At[u]||At._default,s.innerHTML=c[1]+o.replace(vt,"<$1></$2>")+c[2],i=c[0];while(i--)s=s.lastChild;if(!b.support.leadingWhitespace&&yt.test(o)&&d.push(t.createTextNode(yt.exec(o)[0])),!b.support.tbody){o="table"!==u||xt.test(o)?"<table>"!==c[1]||xt.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;while(i--)b.nodeName(l=o.childNodes[i],"tbody")&&!l.childNodes.length&&o.removeChild(l)
}b.merge(d,s.childNodes),s.textContent="";while(s.firstChild)s.removeChild(s.firstChild);s=f.lastChild}else d.push(t.createTextNode(o));s&&f.removeChild(s),b.support.appendChecked||b.grep(Ot(d,"input"),Bt),h=0;while(o=d[h++])if((!r||-1===b.inArray(o,r))&&(a=b.contains(o.ownerDocument,o),s=Ot(f.appendChild(o),"script"),a&&Mt(s),n)){i=0;while(o=s[i++])kt.test(o.type||"")&&n.push(o)}return s=null,f},cleanData:function(e,t){var n,r,o,a,s=0,u=b.expando,l=b.cache,p=b.support.deleteExpando,f=b.event.special;for(;null!=(n=e[s]);s++)if((t||b.acceptData(n))&&(o=n[u],a=o&&l[o])){if(a.events)for(r in a.events)f[r]?b.event.remove(n,r):b.removeEvent(n,r,a.handle);l[o]&&(delete l[o],p?delete n[u]:typeof n.removeAttribute!==i?n.removeAttribute(u):n[u]=null,c.push(o))}}});var Pt,Rt,Wt,$t=/alpha\([^)]*\)/i,It=/opacity\s*=\s*([^)]*)/,zt=/^(top|right|bottom|left)$/,Xt=/^(none|table(?!-c[ea]).+)/,Ut=/^margin/,Vt=RegExp("^("+x+")(.*)$","i"),Yt=RegExp("^("+x+")(?!px)[a-z%]+$","i"),Jt=RegExp("^([+-])=("+x+")","i"),Gt={BODY:"block"},Qt={position:"absolute",visibility:"hidden",display:"block"},Kt={letterSpacing:0,fontWeight:400},Zt=["Top","Right","Bottom","Left"],en=["Webkit","O","Moz","ms"];function tn(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=en.length;while(i--)if(t=en[i]+n,t in e)return t;return r}function nn(e,t){return e=t||e,"none"===b.css(e,"display")||!b.contains(e.ownerDocument,e)}function rn(e,t){var n,r,i,o=[],a=0,s=e.length;for(;s>a;a++)r=e[a],r.style&&(o[a]=b._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&nn(r)&&(o[a]=b._data(r,"olddisplay",un(r.nodeName)))):o[a]||(i=nn(r),(n&&"none"!==n||!i)&&b._data(r,"olddisplay",i?n:b.css(r,"display"))));for(a=0;s>a;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}b.fn.extend({css:function(e,n){return b.access(this,function(e,n,r){var i,o,a={},s=0;if(b.isArray(n)){for(o=Rt(e),i=n.length;i>s;s++)a[n[s]]=b.css(e,n[s],!1,o);return a}return r!==t?b.style(e,n,r):b.css(e,n)},e,n,arguments.length>1)},show:function(){return rn(this,!0)},hide:function(){return rn(this)},toggle:function(e){var t="boolean"==typeof e;return this.each(function(){(t?e:nn(this))?b(this).show():b(this).hide()})}}),b.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Wt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":b.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,u=b.camelCase(n),l=e.style;if(n=b.cssProps[u]||(b.cssProps[u]=tn(l,u)),s=b.cssHooks[n]||b.cssHooks[u],r===t)return s&&"get"in s&&(o=s.get(e,!1,i))!==t?o:l[n];if(a=typeof r,"string"===a&&(o=Jt.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(b.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||b.cssNumber[u]||(r+="px"),b.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(l[n]="inherit"),s&&"set"in s&&(r=s.set(e,r,i))===t)))try{l[n]=r}catch(c){}}},css:function(e,n,r,i){var o,a,s,u=b.camelCase(n);return n=b.cssProps[u]||(b.cssProps[u]=tn(e.style,u)),s=b.cssHooks[n]||b.cssHooks[u],s&&"get"in s&&(a=s.get(e,!0,r)),a===t&&(a=Wt(e,n,i)),"normal"===a&&n in Kt&&(a=Kt[n]),""===r||r?(o=parseFloat(a),r===!0||b.isNumeric(o)?o||0:a):a},swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i}}),e.getComputedStyle?(Rt=function(t){return e.getComputedStyle(t,null)},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),u=s?s.getPropertyValue(n)||s[n]:t,l=e.style;return s&&(""!==u||b.contains(e.ownerDocument,e)||(u=b.style(e,n)),Yt.test(u)&&Ut.test(n)&&(i=l.width,o=l.minWidth,a=l.maxWidth,l.minWidth=l.maxWidth=l.width=u,u=s.width,l.width=i,l.minWidth=o,l.maxWidth=a)),u}):o.documentElement.currentStyle&&(Rt=function(e){return e.currentStyle},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),u=s?s[n]:t,l=e.style;return null==u&&l&&l[n]&&(u=l[n]),Yt.test(u)&&!zt.test(n)&&(i=l.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),l.left="fontSize"===n?"1em":u,u=l.pixelLeft+"px",l.left=i,a&&(o.left=a)),""===u?"auto":u});function on(e,t,n){var r=Vt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function an(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;for(;4>o;o+=2)"margin"===n&&(a+=b.css(e,n+Zt[o],!0,i)),r?("content"===n&&(a-=b.css(e,"padding"+Zt[o],!0,i)),"margin"!==n&&(a-=b.css(e,"border"+Zt[o]+"Width",!0,i))):(a+=b.css(e,"padding"+Zt[o],!0,i),"padding"!==n&&(a+=b.css(e,"border"+Zt[o]+"Width",!0,i)));return a}function sn(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Rt(e),a=b.support.boxSizing&&"border-box"===b.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=Wt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Yt.test(i))return i;r=a&&(b.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+an(e,t,n||(a?"border":"content"),r,o)+"px"}function un(e){var t=o,n=Gt[e];return n||(n=ln(e,t),"none"!==n&&n||(Pt=(Pt||b("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(Pt[0].contentWindow||Pt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=ln(e,t),Pt.detach()),Gt[e]=n),n}function ln(e,t){var n=b(t.createElement(e)).appendTo(t.body),r=b.css(n[0],"display");return n.remove(),r}b.each(["height","width"],function(e,n){b.cssHooks[n]={get:function(e,r,i){return r?0===e.offsetWidth&&Xt.test(b.css(e,"display"))?b.swap(e,Qt,function(){return sn(e,n,i)}):sn(e,n,i):t},set:function(e,t,r){var i=r&&Rt(e);return on(e,t,r?an(e,n,r,b.support.boxSizing&&"border-box"===b.css(e,"boxSizing",!1,i),i):0)}}}),b.support.opacity||(b.cssHooks.opacity={get:function(e,t){return It.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=b.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===b.trim(o.replace($t,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=$t.test(o)?o.replace($t,i):o+" "+i)}}),b(function(){b.support.reliableMarginRight||(b.cssHooks.marginRight={get:function(e,n){return n?b.swap(e,{display:"inline-block"},Wt,[e,"marginRight"]):t}}),!b.support.pixelPosition&&b.fn.position&&b.each(["top","left"],function(e,n){b.cssHooks[n]={get:function(e,r){return r?(r=Wt(e,n),Yt.test(r)?b(e).position()[n]+"px":r):t}}})}),b.expr&&b.expr.filters&&(b.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight||!b.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||b.css(e,"display"))},b.expr.filters.visible=function(e){return!b.expr.filters.hidden(e)}),b.each({margin:"",padding:"",border:"Width"},function(e,t){b.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+Zt[r]+t]=o[r]||o[r-2]||o[0];return i}},Ut.test(e)||(b.cssHooks[e+t].set=on)});var cn=/%20/g,pn=/\[\]$/,fn=/\r?\n/g,dn=/^(?:submit|button|image|reset|file)$/i,hn=/^(?:input|select|textarea|keygen)/i;b.fn.extend({serialize:function(){return b.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=b.prop(this,"elements");return e?b.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!b(this).is(":disabled")&&hn.test(this.nodeName)&&!dn.test(e)&&(this.checked||!Nt.test(e))}).map(function(e,t){var n=b(this).val();return null==n?null:b.isArray(n)?b.map(n,function(e){return{name:t.name,value:e.replace(fn,"\r\n")}}):{name:t.name,value:n.replace(fn,"\r\n")}}).get()}}),b.param=function(e,n){var r,i=[],o=function(e,t){t=b.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=b.ajaxSettings&&b.ajaxSettings.traditional),b.isArray(e)||e.jquery&&!b.isPlainObject(e))b.each(e,function(){o(this.name,this.value)});else for(r in e)gn(r,e[r],n,o);return i.join("&").replace(cn,"+")};function gn(e,t,n,r){var i;if(b.isArray(t))b.each(t,function(t,i){n||pn.test(e)?r(e,i):gn(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==b.type(t))r(e,t);else for(i in t)gn(e+"["+i+"]",t[i],n,r)}b.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){b.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),b.fn.hover=function(e,t){return this.mouseenter(e).mouseleave(t||e)};var mn,yn,vn=b.now(),bn=/\?/,xn=/#.*$/,wn=/([?&])_=[^&]*/,Tn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Nn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Cn=/^(?:GET|HEAD)$/,kn=/^\/\//,En=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Sn=b.fn.load,An={},jn={},Dn="*/".concat("*");try{yn=a.href}catch(Ln){yn=o.createElement("a"),yn.href="",yn=yn.href}mn=En.exec(yn.toLowerCase())||[];function Hn(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(w)||[];if(b.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function qn(e,n,r,i){var o={},a=e===jn;function s(u){var l;return o[u]=!0,b.each(e[u]||[],function(e,u){var c=u(n,r,i);return"string"!=typeof c||a||o[c]?a?!(l=c):t:(n.dataTypes.unshift(c),s(c),!1)}),l}return s(n.dataTypes[0])||!o["*"]&&s("*")}function Mn(e,n){var r,i,o=b.ajaxSettings.flatOptions||{};for(i in n)n[i]!==t&&((o[i]?e:r||(r={}))[i]=n[i]);return r&&b.extend(!0,e,r),e}b.fn.load=function(e,n,r){if("string"!=typeof e&&Sn)return Sn.apply(this,arguments);var i,o,a,s=this,u=e.indexOf(" ");return u>=0&&(i=e.slice(u,e.length),e=e.slice(0,u)),b.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(a="POST"),s.length>0&&b.ajax({url:e,type:a,dataType:"html",data:n}).done(function(e){o=arguments,s.html(i?b("<div>").append(b.parseHTML(e)).find(i):e)}).complete(r&&function(e,t){s.each(r,o||[e.responseText,t,e])}),this},b.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){b.fn[t]=function(e){return this.on(t,e)}}),b.each(["get","post"],function(e,n){b[n]=function(e,r,i,o){return b.isFunction(r)&&(o=o||i,i=r,r=t),b.ajax({url:e,type:n,dataType:o,data:r,success:i})}}),b.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:yn,type:"GET",isLocal:Nn.test(mn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Dn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":e.String,"text html":!0,"text json":b.parseJSON,"text xml":b.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Mn(Mn(e,b.ajaxSettings),t):Mn(b.ajaxSettings,e)},ajaxPrefilter:Hn(An),ajaxTransport:Hn(jn),ajax:function(e,n){"object"==typeof e&&(n=e,e=t),n=n||{};var r,i,o,a,s,u,l,c,p=b.ajaxSetup({},n),f=p.context||p,d=p.context&&(f.nodeType||f.jquery)?b(f):b.event,h=b.Deferred(),g=b.Callbacks("once memory"),m=p.statusCode||{},y={},v={},x=0,T="canceled",N={readyState:0,getResponseHeader:function(e){var t;if(2===x){if(!c){c={};while(t=Tn.exec(a))c[t[1].toLowerCase()]=t[2]}t=c[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===x?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return x||(e=v[n]=v[n]||e,y[e]=t),this},overrideMimeType:function(e){return x||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>x)for(t in e)m[t]=[m[t],e[t]];else N.always(e[N.status]);return this},abort:function(e){var t=e||T;return l&&l.abort(t),k(0,t),this}};if(h.promise(N).complete=g.add,N.success=N.done,N.error=N.fail,p.url=((e||p.url||yn)+"").replace(xn,"").replace(kn,mn[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=b.trim(p.dataType||"*").toLowerCase().match(w)||[""],null==p.crossDomain&&(r=En.exec(p.url.toLowerCase()),p.crossDomain=!(!r||r[1]===mn[1]&&r[2]===mn[2]&&(r[3]||("http:"===r[1]?80:443))==(mn[3]||("http:"===mn[1]?80:443)))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=b.param(p.data,p.traditional)),qn(An,p,n,N),2===x)return N;u=p.global,u&&0===b.active++&&b.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Cn.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(bn.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=wn.test(o)?o.replace(wn,"$1_="+vn++):o+(bn.test(o)?"&":"?")+"_="+vn++)),p.ifModified&&(b.lastModified[o]&&N.setRequestHeader("If-Modified-Since",b.lastModified[o]),b.etag[o]&&N.setRequestHeader("If-None-Match",b.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&N.setRequestHeader("Content-Type",p.contentType),N.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Dn+"; q=0.01":""):p.accepts["*"]);for(i in p.headers)N.setRequestHeader(i,p.headers[i]);if(p.beforeSend&&(p.beforeSend.call(f,N,p)===!1||2===x))return N.abort();T="abort";for(i in{success:1,error:1,complete:1})N[i](p[i]);if(l=qn(jn,p,n,N)){N.readyState=1,u&&d.trigger("ajaxSend",[N,p]),p.async&&p.timeout>0&&(s=setTimeout(function(){N.abort("timeout")},p.timeout));try{x=1,l.send(y,k)}catch(C){if(!(2>x))throw C;k(-1,C)}}else k(-1,"No Transport");function k(e,n,r,i){var c,y,v,w,T,C=n;2!==x&&(x=2,s&&clearTimeout(s),l=t,a=i||"",N.readyState=e>0?4:0,r&&(w=_n(p,N,r)),e>=200&&300>e||304===e?(p.ifModified&&(T=N.getResponseHeader("Last-Modified"),T&&(b.lastModified[o]=T),T=N.getResponseHeader("etag"),T&&(b.etag[o]=T)),204===e?(c=!0,C="nocontent"):304===e?(c=!0,C="notmodified"):(c=Fn(p,w),C=c.state,y=c.data,v=c.error,c=!v)):(v=C,(e||!C)&&(C="error",0>e&&(e=0))),N.status=e,N.statusText=(n||C)+"",c?h.resolveWith(f,[y,C,N]):h.rejectWith(f,[N,C,v]),N.statusCode(m),m=t,u&&d.trigger(c?"ajaxSuccess":"ajaxError",[N,p,c?y:v]),g.fireWith(f,[N,C]),u&&(d.trigger("ajaxComplete",[N,p]),--b.active||b.event.trigger("ajaxStop")))}return N},getScript:function(e,n){return b.get(e,t,n,"script")},getJSON:function(e,t,n){return b.get(e,t,n,"json")}});function _n(e,n,r){var i,o,a,s,u=e.contents,l=e.dataTypes,c=e.responseFields;for(s in c)s in r&&(n[c[s]]=r[s]);while("*"===l[0])l.shift(),o===t&&(o=e.mimeType||n.getResponseHeader("Content-Type"));if(o)for(s in u)if(u[s]&&u[s].test(o)){l.unshift(s);break}if(l[0]in r)a=l[0];else{for(s in r){if(!l[0]||e.converters[s+" "+l[0]]){a=s;break}i||(i=s)}a=a||i}return a?(a!==l[0]&&l.unshift(a),r[a]):t}function Fn(e,t){var n,r,i,o,a={},s=0,u=e.dataTypes.slice(),l=u[0];if(e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u[1])for(i in e.converters)a[i.toLowerCase()]=e.converters[i];for(;r=u[++s];)if("*"!==r){if("*"!==l&&l!==r){if(i=a[l+" "+r]||a["* "+r],!i)for(n in a)if(o=n.split(" "),o[1]===r&&(i=a[l+" "+o[0]]||a["* "+o[0]])){i===!0?i=a[n]:a[n]!==!0&&(r=o[0],u.splice(s--,0,r));break}if(i!==!0)if(i&&e["throws"])t=i(t);else try{t=i(t)}catch(c){return{state:"parsererror",error:i?c:"No conversion from "+l+" to "+r}}}l=r}return{state:"success",data:t}}b.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return b.globalEval(e),e}}}),b.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),b.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=o.head||b("head")[0]||o.documentElement;return{send:function(t,i){n=o.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(t,!0)}}}});var On=[],Bn=/(=)\?(?=&|$)|\?\?/;b.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=On.pop()||b.expando+"_"+vn++;return this[e]=!0,e}}),b.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,u=n.jsonp!==!1&&(Bn.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Bn.test(n.data)&&"data");return u||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=b.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,u?n[u]=n[u].replace(Bn,"$1"+o):n.jsonp!==!1&&(n.url+=(bn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||b.error(o+" was not called"),s[0]},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,On.push(o)),s&&b.isFunction(a)&&a(s[0]),s=a=t}),"script"):t});var Pn,Rn,Wn=0,$n=e.ActiveXObject&&function(){var e;for(e in Pn)Pn[e](t,!0)};function In(){try{return new e.XMLHttpRequest}catch(t){}}function zn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}b.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&In()||zn()}:In,Rn=b.ajaxSettings.xhr(),b.support.cors=!!Rn&&"withCredentials"in Rn,Rn=b.support.ajax=!!Rn,Rn&&b.ajaxTransport(function(n){if(!n.crossDomain||b.support.cors){var r;return{send:function(i,o){var a,s,u=n.xhr();if(n.username?u.open(n.type,n.url,n.async,n.username,n.password):u.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)u[s]=n.xhrFields[s];n.mimeType&&u.overrideMimeType&&u.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");try{for(s in i)u.setRequestHeader(s,i[s])}catch(l){}u.send(n.hasContent&&n.data||null),r=function(e,i){var s,l,c,p;try{if(r&&(i||4===u.readyState))if(r=t,a&&(u.onreadystatechange=b.noop,$n&&delete Pn[a]),i)4!==u.readyState&&u.abort();else{p={},s=u.status,l=u.getAllResponseHeaders(),"string"==typeof u.responseText&&(p.text=u.responseText);try{c=u.statusText}catch(f){c=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=p.text?200:404}}catch(d){i||o(-1,d)}p&&o(s,c,p,l)},n.async?4===u.readyState?setTimeout(r):(a=++Wn,$n&&(Pn||(Pn={},b(e).unload($n)),Pn[a]=r),u.onreadystatechange=r):r()},abort:function(){r&&r(t,!0)}}}});var Xn,Un,Vn=/^(?:toggle|show|hide)$/,Yn=RegExp("^(?:([+-])=|)("+x+")([a-z%]*)$","i"),Jn=/queueHooks$/,Gn=[nr],Qn={"*":[function(e,t){var n,r,i=this.createTween(e,t),o=Yn.exec(t),a=i.cur(),s=+a||0,u=1,l=20;if(o){if(n=+o[2],r=o[3]||(b.cssNumber[e]?"":"px"),"px"!==r&&s){s=b.css(i.elem,e,!0)||n||1;do u=u||".5",s/=u,b.style(i.elem,e,s+r);while(u!==(u=i.cur()/a)&&1!==u&&--l)}i.unit=r,i.start=s,i.end=o[1]?s+(o[1]+1)*n:n}return i}]};function Kn(){return setTimeout(function(){Xn=t}),Xn=b.now()}function Zn(e,t){b.each(t,function(t,n){var r=(Qn[t]||[]).concat(Qn["*"]),i=0,o=r.length;for(;o>i;i++)if(r[i].call(e,t,n))return})}function er(e,t,n){var r,i,o=0,a=Gn.length,s=b.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;var t=Xn||Kn(),n=Math.max(0,l.startTime+l.duration-t),r=n/l.duration||0,o=1-r,a=0,u=l.tweens.length;for(;u>a;a++)l.tweens[a].run(o);return s.notifyWith(e,[l,o,n]),1>o&&u?n:(s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:b.extend({},t),opts:b.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Xn||Kn(),duration:n.duration,tweens:[],createTween:function(t,n){var r=b.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)l.tweens[n].run(1);return t?s.resolveWith(e,[l,t]):s.rejectWith(e,[l,t]),this}}),c=l.props;for(tr(c,l.opts.specialEasing);a>o;o++)if(r=Gn[o].call(l,e,c,l.opts))return r;return Zn(l,c),b.isFunction(l.opts.start)&&l.opts.start.call(e,l),b.fx.timer(b.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function tr(e,t){var n,r,i,o,a;for(i in e)if(r=b.camelCase(i),o=t[r],n=e[i],b.isArray(n)&&(o=n[1],n=e[i]=n[0]),i!==r&&(e[r]=n,delete e[i]),a=b.cssHooks[r],a&&"expand"in a){n=a.expand(n),delete e[r];for(i in n)i in e||(e[i]=n[i],t[i]=o)}else t[r]=o}b.Animation=b.extend(er,{tweener:function(e,t){b.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Qn[n]=Qn[n]||[],Qn[n].unshift(t)},prefilter:function(e,t){t?Gn.unshift(e):Gn.push(e)}});function nr(e,t,n){var r,i,o,a,s,u,l,c,p,f=this,d=e.style,h={},g=[],m=e.nodeType&&nn(e);n.queue||(c=b._queueHooks(e,"fx"),null==c.unqueued&&(c.unqueued=0,p=c.empty.fire,c.empty.fire=function(){c.unqueued||p()}),c.unqueued++,f.always(function(){f.always(function(){c.unqueued--,b.queue(e,"fx").length||c.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[d.overflow,d.overflowX,d.overflowY],"inline"===b.css(e,"display")&&"none"===b.css(e,"float")&&(b.support.inlineBlockNeedsLayout&&"inline"!==un(e.nodeName)?d.zoom=1:d.display="inline-block")),n.overflow&&(d.overflow="hidden",b.support.shrinkWrapBlocks||f.always(function(){d.overflow=n.overflow[0],d.overflowX=n.overflow[1],d.overflowY=n.overflow[2]}));for(i in t)if(a=t[i],Vn.exec(a)){if(delete t[i],u=u||"toggle"===a,a===(m?"hide":"show"))continue;g.push(i)}if(o=g.length){s=b._data(e,"fxshow")||b._data(e,"fxshow",{}),"hidden"in s&&(m=s.hidden),u&&(s.hidden=!m),m?b(e).show():f.done(function(){b(e).hide()}),f.done(function(){var t;b._removeData(e,"fxshow");for(t in h)b.style(e,t,h[t])});for(i=0;o>i;i++)r=g[i],l=f.createTween(r,m?s[r]:0),h[r]=s[r]||b.style(e,r),r in s||(s[r]=l.start,m&&(l.end=l.start,l.start="width"===r||"height"===r?1:0))}}function rr(e,t,n,r,i){return new rr.prototype.init(e,t,n,r,i)}b.Tween=rr,rr.prototype={constructor:rr,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(b.cssNumber[n]?"":"px")},cur:function(){var e=rr.propHooks[this.prop];return e&&e.get?e.get(this):rr.propHooks._default.get(this)},run:function(e){var t,n=rr.propHooks[this.prop];return this.pos=t=this.options.duration?b.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):rr.propHooks._default.set(this),this}},rr.prototype.init.prototype=rr.prototype,rr.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=b.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){b.fx.step[e.prop]?b.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[b.cssProps[e.prop]]||b.cssHooks[e.prop])?b.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},rr.propHooks.scrollTop=rr.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},b.each(["toggle","show","hide"],function(e,t){var n=b.fn[t];b.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ir(t,!0),e,r,i)}}),b.fn.extend({fadeTo:function(e,t,n,r){return this.filter(nn).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=b.isEmptyObject(e),o=b.speed(t,n,r),a=function(){var t=er(this,b.extend({},e),o);a.finish=function(){t.stop(!0)},(i||b._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=b.timers,a=b._data(this);if(n)a[n]&&a[n].stop&&i(a[n]);else for(n in a)a[n]&&a[n].stop&&Jn.test(n)&&i(a[n]);for(n=o.length;n--;)o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1));(t||!r)&&b.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=b._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=b.timers,a=r?r.length:0;for(n.finish=!0,b.queue(this,e,[]),i&&i.cur&&i.cur.finish&&i.cur.finish.call(this),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function ir(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=Zt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}b.each({slideDown:ir("show"),slideUp:ir("hide"),slideToggle:ir("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){b.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),b.speed=function(e,t,n){var r=e&&"object"==typeof e?b.extend({},e):{complete:n||!n&&t||b.isFunction(e)&&e,duration:e,easing:n&&t||t&&!b.isFunction(t)&&t};return r.duration=b.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in b.fx.speeds?b.fx.speeds[r.duration]:b.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){b.isFunction(r.old)&&r.old.call(this),r.queue&&b.dequeue(this,r.queue)},r},b.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},b.timers=[],b.fx=rr.prototype.init,b.fx.tick=function(){var e,n=b.timers,r=0;for(Xn=b.now();n.length>r;r++)e=n[r],e()||n[r]!==e||n.splice(r--,1);n.length||b.fx.stop(),Xn=t},b.fx.timer=function(e){e()&&b.timers.push(e)&&b.fx.start()},b.fx.interval=13,b.fx.start=function(){Un||(Un=setInterval(b.fx.tick,b.fx.interval))},b.fx.stop=function(){clearInterval(Un),Un=null},b.fx.speeds={slow:600,fast:200,_default:400},b.fx.step={},b.expr&&b.expr.filters&&(b.expr.filters.animated=function(e){return b.grep(b.timers,function(t){return e===t.elem}).length}),b.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){b.offset.setOffset(this,e,t)});var n,r,o={top:0,left:0},a=this[0],s=a&&a.ownerDocument;if(s)return n=s.documentElement,b.contains(n,a)?(typeof a.getBoundingClientRect!==i&&(o=a.getBoundingClientRect()),r=or(s),{top:o.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:o.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):o},b.offset={setOffset:function(e,t,n){var r=b.css(e,"position");"static"===r&&(e.style.position="relative");var i=b(e),o=i.offset(),a=b.css(e,"top"),s=b.css(e,"left"),u=("absolute"===r||"fixed"===r)&&b.inArray("auto",[a,s])>-1,l={},c={},p,f;u?(c=i.position(),p=c.top,f=c.left):(p=parseFloat(a)||0,f=parseFloat(s)||0),b.isFunction(t)&&(t=t.call(e,n,o)),null!=t.top&&(l.top=t.top-o.top+p),null!=t.left&&(l.left=t.left-o.left+f),"using"in t?t.using.call(e,l):i.css(l)}},b.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===b.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),b.nodeName(e[0],"html")||(n=e.offset()),n.top+=b.css(e[0],"borderTopWidth",!0),n.left+=b.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-b.css(r,"marginTop",!0),left:t.left-n.left-b.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||o.documentElement;while(e&&!b.nodeName(e,"html")&&"static"===b.css(e,"position"))e=e.offsetParent;return e||o.documentElement})}}),b.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);b.fn[e]=function(i){return b.access(this,function(e,i,o){var a=or(e);return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?b(a).scrollLeft():o,r?o:b(a).scrollTop()):e[i]=o,t)},e,i,arguments.length,null)}});function or(e){return b.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}b.each({Height:"height",Width:"width"},function(e,n){b.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){b.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");return b.access(this,function(n,r,i){var o;return b.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?b.css(n,r,s):b.style(n,r,i,s)},n,a?i:t,a,null)}})}),e.$jq=b,"function"==typeof define&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return b})})(window);
(function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e($jq)})(function(e){function t(t,s){var n,a,o,r=t.nodeName.toLowerCase();return"area"===r?(n=t.parentNode,a=n.name,t.href&&a&&"map"===n.nodeName.toLowerCase()?(o=e("img[usemap='#"+a+"']")[0],!!o&&i(o)):!1):(/^(input|select|textarea|button|object)$/.test(r)?!t.disabled:"a"===r?t.href||s:s)&&i(t)}function i(t){return e.expr.filters.visible(t)&&!e(t).parents().addBack().filter(function(){return"hidden"===e.css(this,"visibility")}).length}e.ui=e.ui||{},e.extend(e.ui,{version:"1.11.4",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),e.fn.extend({scrollParent:function(t){var i=this.css("position"),s="absolute"===i,n=t?/(auto|scroll|hidden)/:/(auto|scroll)/,a=this.parents().filter(function(){var t=e(this);return s&&"static"===t.css("position")?!1:n.test(t.css("overflow")+t.css("overflow-y")+t.css("overflow-x"))}).eq(0);return"fixed"!==i&&a.length?a:e(this[0].ownerDocument||document)},uniqueId:function(){var e=0;return function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++e)})}}(),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&e(this).removeAttr("id")})}}),e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(i){return!!e.data(i,t)}}):function(t,i,s){return!!e.data(t,s[3])},focusable:function(i){return t(i,!isNaN(e.attr(i,"tabindex")))},tabbable:function(i){var s=e.attr(i,"tabindex"),n=isNaN(s);return(n||s>=0)&&t(i,!n)}}),e("<a>").outerWidth(1).jquery||e.each(["Width","Height"],function(t,i){function s(t,i,s,a){return e.each(n,function(){i-=parseFloat(e.css(t,"padding"+this))||0,s&&(i-=parseFloat(e.css(t,"border"+this+"Width"))||0),a&&(i-=parseFloat(e.css(t,"margin"+this))||0)}),i}var n="Width"===i?["Left","Right"]:["Top","Bottom"],a=i.toLowerCase(),o={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};e.fn["inner"+i]=function(t){return void 0===t?o["inner"+i].call(this):this.each(function(){e(this).css(a,s(this,t)+"px")})},e.fn["outer"+i]=function(t,n){return"number"!=typeof t?o["outer"+i].call(this,t):this.each(function(){e(this).css(a,s(this,t,!0,n)+"px")})}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}),e("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(e.fn.removeData=function(t){return function(i){return arguments.length?t.call(this,e.camelCase(i)):t.call(this)}}(e.fn.removeData)),e.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),e.fn.extend({focus:function(t){return function(i,s){return"number"==typeof i?this.each(function(){var t=this;setTimeout(function(){e(t).focus(),s&&s.call(t)},i)}):t.apply(this,arguments)}}(e.fn.focus),disableSelection:function(){var e="onselectstart"in document.createElement("div")?"selectstart":"mousedown";return function(){return this.bind(e+".ui-disableSelection",function(e){e.preventDefault()})}}(),enableSelection:function(){return this.unbind(".ui-disableSelection")},zIndex:function(t){if(void 0!==t)return this.css("zIndex",t);if(this.length)for(var i,s,n=e(this[0]);n.length&&n[0]!==document;){if(i=n.css("position"),("absolute"===i||"relative"===i||"fixed"===i)&&(s=parseInt(n.css("zIndex"),10),!isNaN(s)&&0!==s))return s;n=n.parent()}return 0}}),e.ui.plugin={add:function(t,i,s){var n,a=e.ui[t].prototype;for(n in s)a.plugins[n]=a.plugins[n]||[],a.plugins[n].push([i,s[n]])},call:function(e,t,i,s){var n,a=e.plugins[t];if(a&&(s||e.element[0].parentNode&&11!==e.element[0].parentNode.nodeType))for(n=0;a.length>n;n++)e.options[a[n][0]]&&a[n][1].apply(e.element,i)}};var s=0,n=Array.prototype.slice;e.cleanData=function(t){return function(i){var s,n,a;for(a=0;null!=(n=i[a]);a++)try{s=e._data(n,"events"),s&&s.remove&&e(n).triggerHandler("remove")}catch(o){}t(i)}}(e.cleanData),e.widget=function(t,i,s){var n,a,o,r,h={},l=t.split(".")[0];return t=t.split(".")[1],n=l+"-"+t,s||(s=i,i=e.Widget),e.expr[":"][n.toLowerCase()]=function(t){return!!e.data(t,n)},e[l]=e[l]||{},a=e[l][t],o=e[l][t]=function(e,t){return this._createWidget?(arguments.length&&this._createWidget(e,t),void 0):new o(e,t)},e.extend(o,a,{version:s.version,_proto:e.extend({},s),_childConstructors:[]}),r=new i,r.options=e.widget.extend({},r.options),e.each(s,function(t,s){return e.isFunction(s)?(h[t]=function(){var e=function(){return i.prototype[t].apply(this,arguments)},n=function(e){return i.prototype[t].apply(this,e)};return function(){var t,i=this._super,a=this._superApply;return this._super=e,this._superApply=n,t=s.apply(this,arguments),this._super=i,this._superApply=a,t}}(),void 0):(h[t]=s,void 0)}),o.prototype=e.widget.extend(r,{widgetEventPrefix:a?r.widgetEventPrefix||t:t},h,{constructor:o,namespace:l,widgetName:t,widgetFullName:n}),a?(e.each(a._childConstructors,function(t,i){var s=i.prototype;e.widget(s.namespace+"."+s.widgetName,o,i._proto)}),delete a._childConstructors):i._childConstructors.push(o),e.widget.bridge(t,o),o},e.widget.extend=function(t){for(var i,s,a=n.call(arguments,1),o=0,r=a.length;r>o;o++)for(i in a[o])s=a[o][i],a[o].hasOwnProperty(i)&&void 0!==s&&(t[i]=e.isPlainObject(s)?e.isPlainObject(t[i])?e.widget.extend({},t[i],s):e.widget.extend({},s):s);return t},e.widget.bridge=function(t,i){var s=i.prototype.widgetFullName||t;e.fn[t]=function(a){var o="string"==typeof a,r=n.call(arguments,1),h=this;return o?this.each(function(){var i,n=e.data(this,s);return"instance"===a?(h=n,!1):n?e.isFunction(n[a])&&"_"!==a.charAt(0)?(i=n[a].apply(n,r),i!==n&&void 0!==i?(h=i&&i.jquery?h.pushStack(i.get()):i,!1):void 0):e.error("no such method '"+a+"' for "+t+" widget instance"):e.error("cannot call methods on "+t+" prior to initialization; "+"attempted to call method '"+a+"'")}):(r.length&&(a=e.widget.extend.apply(null,[a].concat(r))),this.each(function(){var t=e.data(this,s);t?(t.option(a||{}),t._init&&t._init()):e.data(this,s,new i(a,this))})),h}},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(t,i){i=e(i||this.defaultElement||this)[0],this.element=e(i),this.uuid=s++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=e(),this.hoverable=e(),this.focusable=e(),i!==this&&(e.data(i,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===i&&this.destroy()}}),this.document=e(i.style?i.ownerDocument:i.document||i),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this.options=e.widget.extend({},this.options,this._getCreateOptions(),t),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:e.noop,widget:function(){return this.element},option:function(t,i){var s,n,a,o=t;if(0===arguments.length)return e.widget.extend({},this.options);if("string"==typeof t)if(o={},s=t.split("."),t=s.shift(),s.length){for(n=o[t]=e.widget.extend({},this.options[t]),a=0;s.length-1>a;a++)n[s[a]]=n[s[a]]||{},n=n[s[a]];if(t=s.pop(),1===arguments.length)return void 0===n[t]?null:n[t];n[t]=i}else{if(1===arguments.length)return void 0===this.options[t]?null:this.options[t];o[t]=i}return this._setOptions(o),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return this.options[e]=t,"disabled"===e&&(this.widget().toggleClass(this.widgetFullName+"-disabled",!!t),t&&(this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus"))),this},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_on:function(t,i,s){var n,a=this;"boolean"!=typeof t&&(s=i,i=t,t=!1),s?(i=n=e(i),this.bindings=this.bindings.add(i)):(s=i,i=this.element,n=this.widget()),e.each(s,function(s,o){function r(){return t||a.options.disabled!==!0&&!e(this).hasClass("ui-state-disabled")?("string"==typeof o?a[o]:o).apply(a,arguments):void 0}"string"!=typeof o&&(r.guid=o.guid=o.guid||r.guid||e.guid++);var h=s.match(/^([\w:-]*)\s*(.*)$/),l=h[1]+a.eventNamespace,u=h[2];u?n.delegate(u,l,r):i.bind(l,r)})},_off:function(t,i){i=(i||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,t.unbind(i).undelegate(i),this.bindings=e(this.bindings.not(t).get()),this.focusable=e(this.focusable.not(t).get()),this.hoverable=e(this.hoverable.not(t).get())},_delay:function(e,t){function i(){return("string"==typeof e?s[e]:e).apply(s,arguments)}var s=this;return setTimeout(i,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){e(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){e(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,i,s){var n,a,o=this.options[t];if(s=s||{},i=e.Event(i),i.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),i.target=this.element[0],a=i.originalEvent)for(n in a)n in i||(i[n]=a[n]);return this.element.trigger(i,s),!(e.isFunction(o)&&o.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},function(t,i){e.Widget.prototype["_"+t]=function(s,n,a){"string"==typeof n&&(n={effect:n});var o,r=n?n===!0||"number"==typeof n?i:n.effect||i:t;n=n||{},"number"==typeof n&&(n={duration:n}),o=!e.isEmptyObject(n),n.complete=a,n.delay&&s.delay(n.delay),o&&e.effects&&e.effects.effect[r]?s[t](n):r!==t&&s[r]?s[r](n.duration,n.easing,a):s.queue(function(i){e(this)[t](),a&&a.call(s[0]),i()})}}),e.widget,function(){function t(e,t,i){return[parseFloat(e[0])*(p.test(e[0])?t/100:1),parseFloat(e[1])*(p.test(e[1])?i/100:1)]}function i(t,i){return parseInt(e.css(t,i),10)||0}function s(t){var i=t[0];return 9===i.nodeType?{width:t.width(),height:t.height(),offset:{top:0,left:0}}:e.isWindow(i)?{width:t.width(),height:t.height(),offset:{top:t.scrollTop(),left:t.scrollLeft()}}:i.preventDefault?{width:0,height:0,offset:{top:i.pageY,left:i.pageX}}:{width:t.outerWidth(),height:t.outerHeight(),offset:t.offset()}}e.ui=e.ui||{};var n,a,o=Math.max,r=Math.abs,h=Math.round,l=/left|center|right/,u=/top|center|bottom/,d=/[\+\-]\d+(\.[\d]+)?%?/,c=/^\w+/,p=/%$/,f=e.fn.position;e.position={scrollbarWidth:function(){if(void 0!==n)return n;var t,i,s=e("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),a=s.children()[0];return e("body").append(s),t=a.offsetWidth,s.css("overflow","scroll"),i=a.offsetWidth,t===i&&(i=s[0].clientWidth),s.remove(),n=t-i},getScrollInfo:function(t){var i=t.isWindow||t.isDocument?"":t.element.css("overflow-x"),s=t.isWindow||t.isDocument?"":t.element.css("overflow-y"),n="scroll"===i||"auto"===i&&t.width<t.element[0].scrollWidth,a="scroll"===s||"auto"===s&&t.height<t.element[0].scrollHeight;return{width:a?e.position.scrollbarWidth():0,height:n?e.position.scrollbarWidth():0}},getWithinInfo:function(t){var i=e(t||window),s=e.isWindow(i[0]),n=!!i[0]&&9===i[0].nodeType;return{element:i,isWindow:s,isDocument:n,offset:i.offset()||{left:0,top:0},scrollLeft:i.scrollLeft(),scrollTop:i.scrollTop(),width:s||n?i.width():i.outerWidth(),height:s||n?i.height():i.outerHeight()}}},e.fn.position=function(n){if(!n||!n.of)return f.apply(this,arguments);n=e.extend({},n);var p,m,g,v,y,b,_=e(n.of),x=e.position.getWithinInfo(n.within),w=e.position.getScrollInfo(x),k=(n.collision||"flip").split(" "),T={};return b=s(_),_[0].preventDefault&&(n.at="left top"),m=b.width,g=b.height,v=b.offset,y=e.extend({},v),e.each(["my","at"],function(){var e,t,i=(n[this]||"").split(" ");1===i.length&&(i=l.test(i[0])?i.concat(["center"]):u.test(i[0])?["center"].concat(i):["center","center"]),i[0]=l.test(i[0])?i[0]:"center",i[1]=u.test(i[1])?i[1]:"center",e=d.exec(i[0]),t=d.exec(i[1]),T[this]=[e?e[0]:0,t?t[0]:0],n[this]=[c.exec(i[0])[0],c.exec(i[1])[0]]}),1===k.length&&(k[1]=k[0]),"right"===n.at[0]?y.left+=m:"center"===n.at[0]&&(y.left+=m/2),"bottom"===n.at[1]?y.top+=g:"center"===n.at[1]&&(y.top+=g/2),p=t(T.at,m,g),y.left+=p[0],y.top+=p[1],this.each(function(){var s,l,u=e(this),d=u.outerWidth(),c=u.outerHeight(),f=i(this,"marginLeft"),b=i(this,"marginTop"),D=d+f+i(this,"marginRight")+w.width,S=c+b+i(this,"marginBottom")+w.height,N=e.extend({},y),M=t(T.my,u.outerWidth(),u.outerHeight());"right"===n.my[0]?N.left-=d:"center"===n.my[0]&&(N.left-=d/2),"bottom"===n.my[1]?N.top-=c:"center"===n.my[1]&&(N.top-=c/2),N.left+=M[0],N.top+=M[1],a||(N.left=h(N.left),N.top=h(N.top)),s={marginLeft:f,marginTop:b},e.each(["left","top"],function(t,i){e.ui.position[k[t]]&&e.ui.position[k[t]][i](N,{targetWidth:m,targetHeight:g,elemWidth:d,elemHeight:c,collisionPosition:s,collisionWidth:D,collisionHeight:S,offset:[p[0]+M[0],p[1]+M[1]],my:n.my,at:n.at,within:x,elem:u})}),n.using&&(l=function(e){var t=v.left-N.left,i=t+m-d,s=v.top-N.top,a=s+g-c,h={target:{element:_,left:v.left,top:v.top,width:m,height:g},element:{element:u,left:N.left,top:N.top,width:d,height:c},horizontal:0>i?"left":t>0?"right":"center",vertical:0>a?"top":s>0?"bottom":"middle"};d>m&&m>r(t+i)&&(h.horizontal="center"),c>g&&g>r(s+a)&&(h.vertical="middle"),h.important=o(r(t),r(i))>o(r(s),r(a))?"horizontal":"vertical",n.using.call(this,e,h)}),u.offset(e.extend(N,{using:l}))})},e.ui.position={fit:{left:function(e,t){var i,s=t.within,n=s.isWindow?s.scrollLeft:s.offset.left,a=s.width,r=e.left-t.collisionPosition.marginLeft,h=n-r,l=r+t.collisionWidth-a-n;t.collisionWidth>a?h>0&&0>=l?(i=e.left+h+t.collisionWidth-a-n,e.left+=h-i):e.left=l>0&&0>=h?n:h>l?n+a-t.collisionWidth:n:h>0?e.left+=h:l>0?e.left-=l:e.left=o(e.left-r,e.left)},top:function(e,t){var i,s=t.within,n=s.isWindow?s.scrollTop:s.offset.top,a=t.within.height,r=e.top-t.collisionPosition.marginTop,h=n-r,l=r+t.collisionHeight-a-n;t.collisionHeight>a?h>0&&0>=l?(i=e.top+h+t.collisionHeight-a-n,e.top+=h-i):e.top=l>0&&0>=h?n:h>l?n+a-t.collisionHeight:n:h>0?e.top+=h:l>0?e.top-=l:e.top=o(e.top-r,e.top)}},flip:{left:function(e,t){var i,s,n=t.within,a=n.offset.left+n.scrollLeft,o=n.width,h=n.isWindow?n.scrollLeft:n.offset.left,l=e.left-t.collisionPosition.marginLeft,u=l-h,d=l+t.collisionWidth-o-h,c="left"===t.my[0]?-t.elemWidth:"right"===t.my[0]?t.elemWidth:0,p="left"===t.at[0]?t.targetWidth:"right"===t.at[0]?-t.targetWidth:0,f=-2*t.offset[0];0>u?(i=e.left+c+p+f+t.collisionWidth-o-a,(0>i||r(u)>i)&&(e.left+=c+p+f)):d>0&&(s=e.left-t.collisionPosition.marginLeft+c+p+f-h,(s>0||d>r(s))&&(e.left+=c+p+f))},top:function(e,t){var i,s,n=t.within,a=n.offset.top+n.scrollTop,o=n.height,h=n.isWindow?n.scrollTop:n.offset.top,l=e.top-t.collisionPosition.marginTop,u=l-h,d=l+t.collisionHeight-o-h,c="top"===t.my[1],p=c?-t.elemHeight:"bottom"===t.my[1]?t.elemHeight:0,f="top"===t.at[1]?t.targetHeight:"bottom"===t.at[1]?-t.targetHeight:0,m=-2*t.offset[1];0>u?(s=e.top+p+f+m+t.collisionHeight-o-a,(0>s||r(u)>s)&&(e.top+=p+f+m)):d>0&&(i=e.top-t.collisionPosition.marginTop+p+f+m-h,(i>0||d>r(i))&&(e.top+=p+f+m))}},flipfit:{left:function(){e.ui.position.flip.left.apply(this,arguments),e.ui.position.fit.left.apply(this,arguments)},top:function(){e.ui.position.flip.top.apply(this,arguments),e.ui.position.fit.top.apply(this,arguments)}}},function(){var t,i,s,n,o,r=document.getElementsByTagName("body")[0],h=document.createElement("div");t=document.createElement(r?"div":"body"),s={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},r&&e.extend(s,{position:"absolute",left:"-1000px",top:"-1000px"});for(o in s)t.style[o]=s[o];t.appendChild(h),i=r||document.documentElement,i.insertBefore(t,i.firstChild),h.style.cssText="position: absolute; left: 10.7432222px;",n=e(h).offset().left,a=n>10&&11>n,t.innerHTML="",i.removeChild(t)}()}(),e.ui.position,e.widget("ui.menu",{version:"1.11.4",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-carat-1-e"},items:"> *",menus:"ul",position:{my:"left-1 top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element,this.mouseHandled=!1,this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content").toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length).attr({role:this.options.role,tabIndex:0}),this.options.disabled&&this.element.addClass("ui-state-disabled").attr("aria-disabled","true"),this._on({"mousedown .ui-menu-item":function(e){e.preventDefault()},"click .ui-menu-item":function(t){var i=e(t.target);!this.mouseHandled&&i.not(".ui-state-disabled").length&&(this.select(t),t.isPropagationStopped()||(this.mouseHandled=!0),i.has(".ui-menu").length?this.expand(t):!this.element.is(":focus")&&e(this.document[0].activeElement).closest(".ui-menu").length&&(this.element.trigger("focus",[!0]),this.active&&1===this.active.parents(".ui-menu").length&&clearTimeout(this.timer)))},"mouseenter .ui-menu-item":function(t){if(!this.previousFilter){var i=e(t.currentTarget);i.siblings(".ui-state-active").removeClass("ui-state-active"),this.focus(t,i)}},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(e,t){var i=this.active||this.element.find(this.options.items).eq(0);t||this.focus(e,i)},blur:function(t){this._delay(function(){e.contains(this.element[0],this.document[0].activeElement)||this.collapseAll(t)})},keydown:"_keydown"}),this.refresh(),this._on(this.document,{click:function(e){this._closeOnDocumentClick(e)&&this.collapseAll(e),this.mouseHandled=!1}})},_destroy:function(){this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-menu-icons ui-front").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(),this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").removeUniqueId().removeClass("ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function(){var t=e(this);t.data("ui-menu-submenu-carat")&&t.remove()}),this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")},_keydown:function(t){var i,s,n,a,o=!0;switch(t.keyCode){case e.ui.keyCode.PAGE_UP:this.previousPage(t);break;case e.ui.keyCode.PAGE_DOWN:this.nextPage(t);break;case e.ui.keyCode.HOME:this._move("first","first",t);break;case e.ui.keyCode.END:this._move("last","last",t);break;case e.ui.keyCode.UP:this.previous(t);break;case e.ui.keyCode.DOWN:this.next(t);break;case e.ui.keyCode.LEFT:this.collapse(t);break;case e.ui.keyCode.RIGHT:this.active&&!this.active.is(".ui-state-disabled")&&this.expand(t);break;case e.ui.keyCode.ENTER:case e.ui.keyCode.SPACE:this._activate(t);break;case e.ui.keyCode.ESCAPE:this.collapse(t);break;default:o=!1,s=this.previousFilter||"",n=String.fromCharCode(t.keyCode),a=!1,clearTimeout(this.filterTimer),n===s?a=!0:n=s+n,i=this._filterMenuItems(n),i=a&&-1!==i.index(this.active.next())?this.active.nextAll(".ui-menu-item"):i,i.length||(n=String.fromCharCode(t.keyCode),i=this._filterMenuItems(n)),i.length?(this.focus(t,i),this.previousFilter=n,this.filterTimer=this._delay(function(){delete this.previousFilter},1e3)):delete this.previousFilter}o&&t.preventDefault()},_activate:function(e){this.active.is(".ui-state-disabled")||(this.active.is("[aria-haspopup='true']")?this.expand(e):this.select(e))},refresh:function(){var t,i,s=this,n=this.options.icons.submenu,a=this.element.find(this.options.menus);this.element.toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length),a.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-front").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var t=e(this),i=t.parent(),s=e("<span>").addClass("ui-menu-icon ui-icon "+n).data("ui-menu-submenu-carat",!0);i.attr("aria-haspopup","true").prepend(s),t.attr("aria-labelledby",i.attr("id"))}),t=a.add(this.element),i=t.find(this.options.items),i.not(".ui-menu-item").each(function(){var t=e(this);s._isDivider(t)&&t.addClass("ui-widget-content ui-menu-divider")}),i.not(".ui-menu-item, .ui-menu-divider").addClass("ui-menu-item").uniqueId().attr({tabIndex:-1,role:this._itemRole()}),i.filter(".ui-state-disabled").attr("aria-disabled","true"),this.active&&!e.contains(this.element[0],this.active[0])&&this.blur()},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]},_setOption:function(e,t){"icons"===e&&this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(t.submenu),"disabled"===e&&this.element.toggleClass("ui-state-disabled",!!t).attr("aria-disabled",t),this._super(e,t)},focus:function(e,t){var i,s;this.blur(e,e&&"focus"===e.type),this._scrollIntoView(t),this.active=t.first(),s=this.active.addClass("ui-state-focus").removeClass("ui-state-active"),this.options.role&&this.element.attr("aria-activedescendant",s.attr("id")),this.active.parent().closest(".ui-menu-item").addClass("ui-state-active"),e&&"keydown"===e.type?this._close():this.timer=this._delay(function(){this._close()},this.delay),i=t.children(".ui-menu"),i.length&&e&&/^mouse/.test(e.type)&&this._startOpening(i),this.activeMenu=t.parent(),this._trigger("focus",e,{item:t})},_scrollIntoView:function(t){var i,s,n,a,o,r;this._hasScroll()&&(i=parseFloat(e.css(this.activeMenu[0],"borderTopWidth"))||0,s=parseFloat(e.css(this.activeMenu[0],"paddingTop"))||0,n=t.offset().top-this.activeMenu.offset().top-i-s,a=this.activeMenu.scrollTop(),o=this.activeMenu.height(),r=t.outerHeight(),0>n?this.activeMenu.scrollTop(a+n):n+r>o&&this.activeMenu.scrollTop(a+n-o+r))},blur:function(e,t){t||clearTimeout(this.timer),this.active&&(this.active.removeClass("ui-state-focus"),this.active=null,this._trigger("blur",e,{item:this.active}))},_startOpening:function(e){clearTimeout(this.timer),"true"===e.attr("aria-hidden")&&(this.timer=this._delay(function(){this._close(),this._open(e)},this.delay))},_open:function(t){var i=e.extend({of:this.active},this.options.position);clearTimeout(this.timer),this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden","true"),t.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(i)},collapseAll:function(t,i){clearTimeout(this.timer),this.timer=this._delay(function(){var s=i?this.element:e(t&&t.target).closest(this.element.find(".ui-menu"));s.length||(s=this.element),this._close(s),this.blur(t),this.activeMenu=s},this.delay)},_close:function(e){e||(e=this.active?this.active.parent():this.element),e.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false").end().find(".ui-state-active").not(".ui-state-focus").removeClass("ui-state-active")},_closeOnDocumentClick:function(t){return!e(t.target).closest(".ui-menu").length},_isDivider:function(e){return!/[^\-\u2014\u2013\s]/.test(e.text())},collapse:function(e){var t=this.active&&this.active.parent().closest(".ui-menu-item",this.element);t&&t.length&&(this._close(),this.focus(e,t))},expand:function(e){var t=this.active&&this.active.children(".ui-menu ").find(this.options.items).first();t&&t.length&&(this._open(t.parent()),this._delay(function(){this.focus(e,t)}))},next:function(e){this._move("next","first",e)},previous:function(e){this._move("prev","last",e)},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},_move:function(e,t,i){var s;this.active&&(s="first"===e||"last"===e?this.active["first"===e?"prevAll":"nextAll"](".ui-menu-item").eq(-1):this.active[e+"All"](".ui-menu-item").eq(0)),s&&s.length&&this.active||(s=this.activeMenu.find(this.options.items)[t]()),this.focus(i,s)},nextPage:function(t){var i,s,n;return this.active?(this.isLastItem()||(this._hasScroll()?(s=this.active.offset().top,n=this.element.height(),this.active.nextAll(".ui-menu-item").each(function(){return i=e(this),0>i.offset().top-s-n}),this.focus(t,i)):this.focus(t,this.activeMenu.find(this.options.items)[this.active?"last":"first"]())),void 0):(this.next(t),void 0)},previousPage:function(t){var i,s,n;return this.active?(this.isFirstItem()||(this._hasScroll()?(s=this.active.offset().top,n=this.element.height(),this.active.prevAll(".ui-menu-item").each(function(){return i=e(this),i.offset().top-s+n>0}),this.focus(t,i)):this.focus(t,this.activeMenu.find(this.options.items).first())),void 0):(this.next(t),void 0)},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")},select:function(t){this.active=this.active||e(t.target).closest(".ui-menu-item");var i={item:this.active};this.active.has(".ui-menu").length||this.collapseAll(t,!0),this._trigger("select",t,i)},_filterMenuItems:function(t){var i=t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&"),s=RegExp("^"+i,"i");return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function(){return s.test(e.trim(e(this).text()))})}}),e.widget("ui.autocomplete",{version:"1.11.4",defaultElement:"<input>",options:{appendTo:null,autoFocus:!1,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},requestIndex:0,pending:0,_create:function(){var t,i,s,n=this.element[0].nodeName.toLowerCase(),a="textarea"===n,o="input"===n;this.isMultiLine=a?!0:o?!1:this.element.prop("isContentEditable"),this.valueMethod=this.element[a||o?"val":"text"],this.isNewMenu=!0,this.element.addClass("ui-autocomplete-input").attr("autocomplete","off"),this._on(this.element,{keydown:function(n){if(this.element.prop("readOnly"))return t=!0,s=!0,i=!0,void 0;t=!1,s=!1,i=!1;var a=e.ui.keyCode;switch(n.keyCode){case a.PAGE_UP:t=!0,this._move("previousPage",n);break;case a.PAGE_DOWN:t=!0,this._move("nextPage",n);break;case a.UP:t=!0,this._keyEvent("previous",n);break;case a.DOWN:t=!0,this._keyEvent("next",n);break;case a.ENTER:this.menu.active&&(t=!0,n.preventDefault(),this.menu.select(n));break;case a.TAB:this.menu.active&&this.menu.select(n);break;case a.ESCAPE:this.menu.element.is(":visible")&&(this.isMultiLine||this._value(this.term),this.close(n),n.preventDefault());break;default:i=!0,this._searchTimeout(n)}},keypress:function(s){if(t)return t=!1,(!this.isMultiLine||this.menu.element.is(":visible"))&&s.preventDefault(),void 0;if(!i){var n=e.ui.keyCode;switch(s.keyCode){case n.PAGE_UP:this._move("previousPage",s);break;case n.PAGE_DOWN:this._move("nextPage",s);break;case n.UP:this._keyEvent("previous",s);break;case n.DOWN:this._keyEvent("next",s)}}},input:function(e){return s?(s=!1,e.preventDefault(),void 0):(this._searchTimeout(e),void 0)},focus:function(){this.selectedItem=null,this.previous=this._value()},blur:function(e){return this.cancelBlur?(delete this.cancelBlur,void 0):(clearTimeout(this.searching),this.close(e),this._change(e),void 0)}}),this._initSource(),this.menu=e("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({role:null}).hide().menu("instance"),this._on(this.menu.element,{mousedown:function(t){t.preventDefault(),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur});var i=this.menu.element[0];e(t.target).closest(".ui-menu-item").length||this._delay(function(){var t=this;this.document.one("mousedown",function(s){s.target===t.element[0]||s.target===i||e.contains(i,s.target)||t.close()})})},menufocus:function(t,i){var s,n;return this.isNewMenu&&(this.isNewMenu=!1,t.originalEvent&&/^mouse/.test(t.originalEvent.type))?(this.menu.blur(),this.document.one("mousemove",function(){e(t.target).trigger(t.originalEvent)}),void 0):(n=i.item.data("ui-autocomplete-item"),!1!==this._trigger("focus",t,{item:n})&&t.originalEvent&&/^key/.test(t.originalEvent.type)&&this._value(n.value),s=i.item.attr("aria-label")||n.value,s&&e.trim(s).length&&(this.liveRegion.children().hide(),e("<div>").text(s).appendTo(this.liveRegion)),void 0)},menuselect:function(e,t){var i=t.item.data("ui-autocomplete-item"),s=this.previous;this.element[0]!==this.document[0].activeElement&&(this.element.focus(),this.previous=s,this._delay(function(){this.previous=s,this.selectedItem=i})),!1!==this._trigger("select",e,{item:i})&&this._value(i.value),this.term=this._value(),this.close(e),this.selectedItem=i}}),this.liveRegion=e("<span>",{role:"status","aria-live":"assertive","aria-relevant":"additions"}).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_destroy:function(){clearTimeout(this.searching),this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"),this.menu.element.remove(),this.liveRegion.remove()},_setOption:function(e,t){this._super(e,t),"source"===e&&this._initSource(),"appendTo"===e&&this.menu.element.appendTo(this._appendTo()),"disabled"===e&&t&&this.xhr&&this.xhr.abort()},_appendTo:function(){var t=this.options.appendTo;return t&&(t=t.jquery||t.nodeType?e(t):this.document.find(t).eq(0)),t&&t[0]||(t=this.element.closest(".ui-front")),t.length||(t=this.document[0].body),t},_initSource:function(){var t,i,s=this;e.isArray(this.options.source)?(t=this.options.source,this.source=function(i,s){s(e.ui.autocomplete.filter(t,i.term))}):"string"==typeof this.options.source?(i=this.options.source,this.source=function(t,n){s.xhr&&s.xhr.abort(),s.xhr=e.ajax({url:i,data:t,dataType:"json",success:function(e){n(e)},error:function(){n([])}})}):this.source=this.options.source},_searchTimeout:function(e){clearTimeout(this.searching),this.searching=this._delay(function(){var t=this.term===this._value(),i=this.menu.element.is(":visible"),s=e.altKey||e.ctrlKey||e.metaKey||e.shiftKey;(!t||t&&!i&&!s)&&(this.selectedItem=null,this.search(null,e))},this.options.delay)},search:function(e,t){return e=null!=e?e:this._value(),this.term=this._value(),e.length<this.options.minLength?this.close(t):this._trigger("search",t)!==!1?this._search(e):void 0},_search:function(e){this.pending++,this.element.addClass("ui-autocomplete-loading"),this.cancelSearch=!1,this.source({term:e},this._response())},_response:function(){var t=++this.requestIndex;return e.proxy(function(e){t===this.requestIndex&&this.__response(e),this.pending--,this.pending||this.element.removeClass("ui-autocomplete-loading")},this)},__response:function(e){e&&(e=this._normalize(e)),this._trigger("response",null,{content:e}),!this.options.disabled&&e&&e.length&&!this.cancelSearch?(this._suggest(e),this._trigger("open")):this._close()},close:function(e){this.cancelSearch=!0,this._close(e)},_close:function(e){this.menu.element.is(":visible")&&(this.menu.element.hide(),this.menu.blur(),this.isNewMenu=!0,this._trigger("close",e))},_change:function(e){this.previous!==this._value()&&this._trigger("change",e,{item:this.selectedItem})},_normalize:function(t){return t.length&&t[0].label&&t[0].value?t:e.map(t,function(t){return"string"==typeof t?{label:t,value:t}:e.extend({},t,{label:t.label||t.value,value:t.value||t.label})})},_suggest:function(t){var i=this.menu.element.empty();this._renderMenu(i,t),this.isNewMenu=!0,this.menu.refresh(),i.show(),this._resizeMenu(),i.position(e.extend({of:this.element},this.options.position)),this.options.autoFocus&&this.menu.next()
},_resizeMenu:function(){var e=this.menu.element;e.outerWidth(Math.max(e.width("").outerWidth()+1,this.element.outerWidth()))},_renderMenu:function(t,i){var s=this;e.each(i,function(e,i){s._renderItemData(t,i)})},_renderItemData:function(e,t){return this._renderItem(e,t).data("ui-autocomplete-item",t)},_renderItem:function(t,i){return e("<li>").text(i.label).appendTo(t)},_move:function(e,t){return this.menu.element.is(":visible")?this.menu.isFirstItem()&&/^previous/.test(e)||this.menu.isLastItem()&&/^next/.test(e)?(this.isMultiLine||this._value(this.term),this.menu.blur(),void 0):(this.menu[e](t),void 0):(this.search(null,t),void 0)},widget:function(){return this.menu.element},_value:function(){return this.valueMethod.apply(this.element,arguments)},_keyEvent:function(e,t){(!this.isMultiLine||this.menu.element.is(":visible"))&&(this._move(e,t),t.preventDefault())}}),e.extend(e.ui.autocomplete,{escapeRegex:function(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")},filter:function(t,i){var s=RegExp(e.ui.autocomplete.escapeRegex(i),"i");return e.grep(t,function(e){return s.test(e.label||e.value||e)})}}),e.widget("ui.autocomplete",e.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(e){return e+(e>1?" results are":" result is")+" available, use up and down arrow keys to navigate."}}},__response:function(t){var i;this._superApply(arguments),this.options.disabled||this.cancelSearch||(i=t&&t.length?this.options.messages.results(t.length):this.options.messages.noResults,this.liveRegion.children().hide(),e("<div>").text(i).appendTo(this.liveRegion))}}),e.ui.autocomplete});
if("undefined"==typeof $jq)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")}($jq),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){return a(b.target).is(this)?b.handleObj.handler.apply(this,arguments):void 0}})})}($jq),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.5",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a(f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}($jq),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.5",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")?(c.prop("checked")&&(a=!1),b.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==c.prop("type")&&(c.prop("checked")!==this.$element.hasClass("active")&&(a=!1),this.$element.toggleClass("active")),c.prop("checked",this.$element.hasClass("active")),a&&c.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target);d.hasClass("btn")||(d=d.closest(".btn")),b.call(d,"toggle"),a(c.target).is('input[type="radio"]')||a(c.target).is('input[type="checkbox"]')||c.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}($jq),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.5",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));return a>this.$items.length-1||0>a?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){return this.sliding?void 0:this.slide("next")},c.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}($jq),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a('[data-toggle="collapse"][href="#'+b.id+'"],[data-toggle="collapse"][data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.5",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":e.data();c.call(f,h)})}($jq),+function(a){"use strict";function b(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function c(c){c&&3===c.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=b(d),f={relatedTarget:this};e.hasClass("open")&&(c&&"click"==c.type&&/input|textarea/i.test(c.target.tagName)&&a.contains(e[0],c.target)||(e.trigger(c=a.Event("hide.bs.dropdown",f)),c.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger("hidden.bs.dropdown",f))))}))}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.5",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=b(e),g=f.hasClass("open");if(c(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click",c);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger("shown.bs.dropdown",h)}return!1}},g.prototype.keydown=function(c){if(/(38|40|27|32)/.test(c.which)&&!/input|textarea/i.test(c.target.tagName)){var d=a(this);if(c.preventDefault(),c.stopPropagation(),!d.is(".disabled, :disabled")){var e=b(d),g=e.hasClass("open");if(!g&&27!=c.which||g&&27==c.which)return 27==c.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.disabled):visible a",i=e.find(".dropdown-menu"+h);if(i.length){var j=i.index(c.target);38==c.which&&j>0&&j--,40==c.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",c).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",g.prototype.keydown)}($jq),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.5",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){d.$element.one("mouseup.dismiss.bs.modal",function(b){a(b.target).is(d.$element)&&(d.ignoreBackdropClick=!0)})}),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in"),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$dialog.one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a(document.createElement("div")).addClass("modal-backdrop "+e).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.adjustDialog()},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){var a=window.innerWidth;if(!a){var b=document.documentElement.getBoundingClientRect();a=b.right-Math.abs(b.left)}this.bodyIsOverflowing=document.body.clientWidth<a,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}($jq),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",a,b)};c.VERSION="3.3.5",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){if(this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(a.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusin"==b.type?"focus":"hover"]=!0),c.tip().hasClass("in")||"in"==c.hoverState?void(c.hoverState="in"):(clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.isInStateTrue=function(){for(var a in this.inState)if(this.inState[a])return!0;return!1},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusout"==b.type?"focus":"hover"]=!1),c.isInStateTrue()?void 0:(clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide())},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.getPosition(this.$viewport);h="bottom"==h&&k.bottom+m>o.bottom?"top":"top"==h&&k.top-m<o.top?"bottom":"right"==h&&k.right+l>o.width?"left":"left"==h&&k.left-l<o.left?"right":h,f.removeClass(n).addClass(h)}var p=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(p,h);var q=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",q).emulateTransitionEnd(c.TRANSITION_DURATION):q()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top+=g,b.left+=h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=a(this.$tip),g=a.Event("hide.bs."+this.type);return this.$element.trigger(g),g.isDefaultPrevented()?void 0:(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this)},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=d?{top:0,left:0}:b.offset(),g={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},h=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,g,h,f)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.right&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){if(!this.$tip&&(this.$tip=a(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),b?(c.inState.click=!c.inState.click,c.isInStateTrue()?c.enter(c):c.leave(c)):c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type),a.$tip&&a.$tip.detach(),a.$tip=null,a.$arrow=null,a.$viewport=null})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}($jq),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.5",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}($jq),+function(a){"use strict";function b(c,d){this.$body=a(document.body),this.$scrollElement=a(a(c).is(document.body)?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a.proxy(this.process,this)),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.5",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b=this,c="offset",d=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),a.isWindow(this.$scrollElement[0])||(c="position",d=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var b=a(this),e=b.data("target")||b.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[c]().top+d,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(void 0===e[a+1]||b<e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),
    d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}($jq),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.5",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu").length&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}($jq),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.5",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return c>e?"top":!1;if("bottom"==this.affixed)return null!=c?e+this.unpin<=f.top?!1:"bottom":a-d>=e+g?!1:"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&c>=e?"top":null!=d&&i+j>=a-d?"bottom":!1},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=Math.max(a(document).height(),a(document.body).height());"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}($jq);
/* Placeholders.js v4.0.1 */
!function(a){"use strict";function b(){}function c(){try{return document.activeElement}catch(a){}}function d(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return!0;return!1}function e(a,b,c){return a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent?a.attachEvent("on"+b,c):void 0}function f(a,b){var c;a.createTextRange?(c=a.createTextRange(),c.move("character",b),c.select()):a.selectionStart&&(a.focus(),a.setSelectionRange(b,b))}function g(a,b){try{return a.type=b,!0}catch(c){return!1}}function h(a,b){if(a&&a.getAttribute(B))b(a);else for(var c,d=a?a.getElementsByTagName("input"):N,e=a?a.getElementsByTagName("textarea"):O,f=d?d.length:0,g=e?e.length:0,h=f+g,i=0;h>i;i++)c=f>i?d[i]:e[i-f],b(c)}function i(a){h(a,k)}function j(a){h(a,l)}function k(a,b){var c=!!b&&a.value!==b,d=a.value===a.getAttribute(B);if((c||d)&&"true"===a.getAttribute(C)){a.removeAttribute(C),a.value=a.value.replace(a.getAttribute(B),""),a.className=a.className.replace(A,"");var e=a.getAttribute(I);parseInt(e,10)>=0&&(a.setAttribute("maxLength",e),a.removeAttribute(I));var f=a.getAttribute(D);return f&&(a.type=f),!0}return!1}function l(a){var b=a.getAttribute(B);if(""===a.value&&b){a.setAttribute(C,"true"),a.value=b,a.className+=" "+z;var c=a.getAttribute(I);c||(a.setAttribute(I,a.maxLength),a.removeAttribute("maxLength"));var d=a.getAttribute(D);return d?a.type="text":"password"===a.type&&g(a,"text")&&a.setAttribute(D,"password"),!0}return!1}function m(a){return function(){P&&a.value===a.getAttribute(B)&&"true"===a.getAttribute(C)?f(a,0):k(a)}}function n(a){return function(){l(a)}}function o(a){return function(){i(a)}}function p(a){return function(b){return v=a.value,"true"===a.getAttribute(C)&&v===a.getAttribute(B)&&d(x,b.keyCode)?(b.preventDefault&&b.preventDefault(),!1):void 0}}function q(a){return function(){k(a,v),""===a.value&&(a.blur(),f(a,0))}}function r(a){return function(){a===c()&&a.value===a.getAttribute(B)&&"true"===a.getAttribute(C)&&f(a,0)}}function s(a){var b=a.form;b&&"string"==typeof b&&(b=document.getElementById(b),b.getAttribute(E)||(e(b,"submit",o(b)),b.setAttribute(E,"true"))),e(a,"focus",m(a)),e(a,"blur",n(a)),P&&(e(a,"keydown",p(a)),e(a,"keyup",q(a)),e(a,"click",r(a))),a.setAttribute(F,"true"),a.setAttribute(B,T),(P||a!==c())&&l(a)}var t=document.createElement("input"),u=void 0!==t.placeholder;if(a.Placeholders={nativeSupport:u,disable:u?b:i,enable:u?b:j},!u){var v,w=["text","search","url","tel","email","password","number","textarea"],x=[27,33,34,35,36,37,38,39,40,8,46],y="#888888 !important",z="placeholdersjs",A=new RegExp("(?:^|\\s)"+z+"(?!\\S)"),B="data-placeholder-value",C="data-placeholder-active",D="data-placeholder-type",E="data-placeholder-submit",F="data-placeholder-bound",G="data-placeholder-focus",H="data-placeholder-live",I="data-placeholder-maxlength",J=100,K=document.getElementsByTagName("head")[0],L=document.documentElement,M=a.Placeholders,N=document.getElementsByTagName("input"),O=document.getElementsByTagName("textarea"),P="false"===L.getAttribute(G),Q="false"!==L.getAttribute(H),R=document.createElement("style");R.type="text/css";var S=document.createTextNode("."+z+" {color:"+y+";}");R.styleSheet?R.styleSheet.cssText=S.nodeValue:R.appendChild(S),K.insertBefore(R,K.firstChild);for(var T,U,V=0,W=N.length+O.length;W>V;V++)U=V<N.length?N[V]:O[V-N.length],T=U.attributes.placeholder,T&&(T=T.nodeValue,T&&d(w,U.type)&&s(U));var X=setInterval(function(){for(var a=0,b=N.length+O.length;b>a;a++)U=a<N.length?N[a]:O[a-N.length],T=U.attributes.placeholder,T?(T=T.nodeValue,T&&d(w,U.type)&&(U.getAttribute(F)||s(U),(T!==U.getAttribute(B)||"password"===U.type&&!U.getAttribute(D))&&("password"===U.type&&!U.getAttribute(D)&&g(U,"text")&&U.setAttribute(D,"password"),U.value===U.getAttribute(B)&&(U.value=T),U.setAttribute(B,T)))):U.getAttribute(C)&&(k(U),U.removeAttribute(B));Q||clearInterval(X)},J);e(a,"beforeunload",function(){M.disable()})}}(this),function(a,b){"use strict";var c=a.fn.val,d=a.fn.prop;b.Placeholders.nativeSupport||(a.fn.val=function(a){var b=c.apply(this,arguments),d=this.eq(0).data("placeholder-value");return void 0===a&&this.eq(0).data("placeholder-active")&&b===d?"":b},a.fn.prop=function(a,b){return void 0===b&&this.eq(0).data("placeholder-active")&&"value"===a?"":d.apply(this,arguments)})}($jq,this);
/*! jquery.selectBoxIt - v3.8.1 - 2013-11-17
 * http://www.selectboxit.com
 * Copyright (c) 2013 Greg Franko; Licensed MIT*/
!function(a){"use strict";a(window.$jq,window,document)}(function(a,b,c,d){"use strict";a.widget("selectBox.selectBoxIt",{VERSION:"3.8.1",options:{showEffect:"none",showEffectOptions:{},showEffectSpeed:"medium",hideEffect:"none",hideEffectOptions:{},hideEffectSpeed:"medium",showFirstOption:!0,defaultText:"",defaultIcon:"",downArrowIcon:"",theme:"default",keydownOpen:!0,isMobile:function(){var a=navigator.userAgent||navigator.vendor||b.opera;return/iPhone|iPod|iPad|Silk|Android|BlackBerry|Opera Mini|IEMobile/.test(a)},"native":!1,aggressiveChange:!1,selectWhenHidden:!0,viewport:a(b),similarSearch:!1,copyAttributes:["title","rel"],copyClasses:"button",nativeMousedown:!1,customShowHideEvent:!1,autoWidth:!0,html:!0,populate:"",dynamicPositioning:!0,hideCurrent:!1},getThemes:function(){var b=this,c=a(b.element).attr("data-theme")||"c";return{bootstrap:{focus:"active",hover:"",enabled:"enabled",disabled:"disabled",arrow:"caret",button:"btn",list:"dropdown-menu",container:"bootstrap",open:"open"},jqueryui:{focus:"ui-state-focus",hover:"ui-state-hover",enabled:"ui-state-enabled",disabled:"ui-state-disabled",arrow:"ui-icon ui-icon-triangle-1-s",button:"ui-widget ui-state-default",list:"ui-widget ui-widget-content",container:"jqueryui",open:"selectboxit-open"},jquerymobile:{focus:"ui-btn-down-"+c,hover:"ui-btn-hover-"+c,enabled:"ui-enabled",disabled:"ui-disabled",arrow:"ui-icon ui-icon-arrow-d ui-icon-shadow",button:"ui-btn ui-btn-icon-right ui-btn-corner-all ui-shadow ui-btn-up-"+c,list:"ui-btn ui-btn-icon-right ui-btn-corner-all ui-shadow ui-btn-up-"+c,container:"jquerymobile",open:"selectboxit-open"},"default":{focus:"selectboxit-focus",hover:"selectboxit-hover",enabled:"selectboxit-enabled",disabled:"selectboxit-disabled",arrow:"selectboxit-default-arrow",button:"selectboxit-btn",list:"selectboxit-list",container:"selectboxit-container",open:"selectboxit-open"}}},isDeferred:function(b){return a.isPlainObject(b)&&b.promise&&b.done},_create:function(b){var d=this,e=d.options.populate,f=d.options.theme;if(d.element.is("select"))return d.widgetProto=a.Widget.prototype,d.originalElem=d.element[0],d.selectBox=d.element,d.options.populate&&d.add&&!b&&d.add(e),d.selectItems=d.element.find("option"),d.firstSelectItem=d.selectItems.slice(0,1),d.documentHeight=a(c).height(),d.theme=a.isPlainObject(f)?a.extend({},d.getThemes()["default"],f):d.getThemes()[f]?d.getThemes()[f]:d.getThemes()["default"],d.currentFocus=0,d.blur=!0,d.textArray=[],d.currentIndex=0,d.currentText="",d.flipped=!1,b||(d.selectBoxStyles=d.selectBox.attr("style")),d._createDropdownButton()._createUnorderedList()._copyAttributes()._replaceSelectBox()._addClasses(d.theme)._eventHandlers(),d.originalElem.disabled&&d.disable&&d.disable(),d._ariaAccessibility&&d._ariaAccessibility(),d.isMobile=d.options.isMobile(),d._mobile&&d._mobile(),d.options["native"]&&this._applyNativeSelect(),d.triggerEvent("create"),d},_createDropdownButton:function(){var b=this,c=b.originalElemId=b.originalElem.id||"",d=b.originalElemValue=b.originalElem.value||"",e=b.originalElemName=b.originalElem.name||"",f=b.options.copyClasses,g=b.selectBox.attr("class")||"";return b.dropdownText=a("<span/>",{id:c&&c+"SelectBoxItText","class":"selectboxit-text",unselectable:"on",text:b.firstSelectItem.text()}).attr("data-val",d),b.dropdownImageContainer=a("<span/>",{"class":"selectboxit-option-icon-container"}),b.dropdownImage=a("<i/>",{id:c&&c+"SelectBoxItDefaultIcon","class":"selectboxit-default-icon",unselectable:"on"}),b.dropdown=a("<span/>",{id:c&&c+"SelectBoxIt","class":"selectboxit "+("button"===f?g:"")+" "+(b.selectBox.prop("disabled")?b.theme.disabled:b.theme.enabled),name:e,tabindex:b.selectBox.attr("tabindex")||"0",unselectable:"on"}).append(b.dropdownImageContainer.append(b.dropdownImage)).append(b.dropdownText),b.dropdownContainer=a("<span/>",{id:c&&c+"SelectBoxItContainer","class":"selectboxit-container "+b.theme.container+" "+("container"===f?g:"")}).append(b.dropdown),b},_createUnorderedList:function(){var b,c,d,e,f,g,h,i,j,k,l,m,n,o=this,p="",q=o.originalElemId||"",r=a("<ul/>",{id:q&&q+"SelectBoxItOptions","class":"selectboxit-options",tabindex:-1});if(o.options.showFirstOption||(o.selectItems.first().attr("disabled","disabled"),o.selectItems=o.selectBox.find("option").slice(1)),o.selectItems.each(function(q){m=a(this),c="",d="",b=m.prop("disabled"),e=m.attr("data-icon")||"",f=m.attr("data-iconurl")||"",g=f?"selectboxit-option-icon-url":"",h=f?"style=\"background-image:url('"+f+"');\"":"",i=m.attr("data-selectedtext"),j=m.attr("data-text"),l=j?j:m.text(),n=m.parent(),n.is("optgroup")&&(c="selectboxit-optgroup-option",0===m.index()&&(d='<span class="selectboxit-optgroup-header '+n.first().attr("class")+'"data-disabled="true">'+n.first().attr("label")+"</span>")),m.attr("value",this.value),p+=d+'<li data-id="'+q+'" data-val="'+this.value+'" data-disabled="'+b+'" class="'+c+" selectboxit-option "+(a(this).attr("class")||"")+'"><a class="selectboxit-option-anchor"><span class="selectboxit-option-icon-container"><i class="selectboxit-option-icon '+e+" "+(g||o.theme.container)+'"'+h+"></i></span>"+(o.options.html?l:o.htmlEscape(l))+"</a></li>",k=m.attr("data-search"),o.textArray[q]=b?"":k?k:l,this.selected&&(o._setText(o.dropdownText,i||l),o.currentFocus=q)}),o.options.defaultText||o.selectBox.attr("data-text")){var s=o.options.defaultText||o.selectBox.attr("data-text");o._setText(o.dropdownText,s),o.options.defaultText=s}return r.append(p),o.list=r,o.dropdownContainer.append(o.list),o.listItems=o.list.children("li"),o.listAnchors=o.list.find("a"),o.listItems.first().addClass("selectboxit-option-first"),o.listItems.last().addClass("selectboxit-option-last"),o.list.find("li[data-disabled='true']").not(".optgroupHeader").addClass(o.theme.disabled),o.dropdownImage.addClass(o.selectBox.attr("data-icon")||o.options.defaultIcon||o.listItems.eq(o.currentFocus).find("i").attr("class")),o.dropdownImage.attr("style",o.listItems.eq(o.currentFocus).find("i").attr("style")),o},_replaceSelectBox:function(){var b,c,e,f=this,g=f.originalElem.id||"",h=f.selectBox.attr("data-size"),i=f.listSize=h===d?"auto":"0"===h?"auto":+h;return f.selectBox.css("display","none").after(f.dropdownContainer),f.dropdownContainer.appendTo("body").addClass("selectboxit-rendering"),b=f.dropdown.height(),f.downArrow=a("<i/>",{id:g&&g+"SelectBoxItArrow","class":"selectboxit-arrow",unselectable:"on"}),f.downArrowContainer=a("<span/>",{id:g&&g+"SelectBoxItArrowContainer","class":"selectboxit-arrow-container",unselectable:"on"}).append(f.downArrow),f.dropdown.append(f.downArrowContainer),f.listItems.removeClass("selectboxit-selected").eq(f.currentFocus).addClass("selectboxit-selected"),c=f.downArrowContainer.outerWidth(!0),e=f.dropdownImage.outerWidth(!0),f.options.autoWidth&&(f.dropdown.css({width:"auto"}).css({width:f.list.outerWidth(!0)+c+e}),f.list.css({"min-width":f.dropdown.width()})),f.dropdownText.css({"max-width":f.dropdownContainer.outerWidth(!0)-(c+e)}),f.selectBox.after(f.dropdownContainer),f.dropdownContainer.removeClass("selectboxit-rendering"),"number"===a.type(i)&&(f.maxHeight=f.listAnchors.outerHeight(!0)*i),f},_scrollToView:function(a){var b=this,c=b.listItems.eq(b.currentFocus),d=b.list.scrollTop(),e=c.height(),f=c.position().top,g=Math.abs(f),h=b.list.height();return"search"===a?e>h-f?b.list.scrollTop(d+(f-(h-e))):-1>f&&b.list.scrollTop(f-e):"up"===a?-1>f&&b.list.scrollTop(d-g):"down"===a&&e>h-f&&b.list.scrollTop(d+(g-h+e)),b},_callbackSupport:function(b){var c=this;return a.isFunction(b)&&b.call(c,c.dropdown),c},_setText:function(a,b){var c=this;return c.options.html?a.html(b):a.text(b),c},open:function(a){var b=this,c=b.options.showEffect,d=b.options.showEffectSpeed,e=b.options.showEffectOptions,f=b.options["native"],g=b.isMobile;return!b.listItems.length||b.dropdown.hasClass(b.theme.disabled)?b:(f||g||this.list.is(":visible")||(b.triggerEvent("open"),b._dynamicPositioning&&b.options.dynamicPositioning&&b._dynamicPositioning(),"none"===c?b.list.show():"show"===c||"slideDown"===c||"fadeIn"===c?b.list[c](d):b.list.show(c,e,d),b.list.promise().done(function(){b._scrollToView("search"),b.triggerEvent("opened")})),b._callbackSupport(a),b)},close:function(a){var b=this,c=b.options.hideEffect,d=b.options.hideEffectSpeed,e=b.options.hideEffectOptions,f=b.options["native"],g=b.isMobile;return f||g||!b.list.is(":visible")||(b.triggerEvent("close"),"none"===c?b.list.hide():"hide"===c||"slideUp"===c||"fadeOut"===c?b.list[c](d):b.list.hide(c,e,d),b.list.promise().done(function(){b.triggerEvent("closed")})),b._callbackSupport(a),b},toggle:function(){var a=this,b=a.list.is(":visible");b?a.close():b||a.open()},_keyMappings:{38:"up",40:"down",13:"enter",8:"backspace",9:"tab",32:"space",27:"esc"},_keydownMethods:function(){var a=this,b=a.list.is(":visible")||!a.options.keydownOpen;return{down:function(){a.moveDown&&b&&a.moveDown()},up:function(){a.moveUp&&b&&a.moveUp()},enter:function(){var b=a.listItems.eq(a.currentFocus);a._update(b),"true"!==b.attr("data-preventclose")&&a.close(),a.triggerEvent("enter")},tab:function(){a.triggerEvent("tab-blur"),a.close()},backspace:function(){a.triggerEvent("backspace")},esc:function(){a.close()}}},_eventHandlers:function(){var b,c,d=this,e=d.options.nativeMousedown,f=d.options.customShowHideEvent,g=d.focusClass,h=d.hoverClass,i=d.openClass;return this.dropdown.on({"click.selectBoxIt":function(){d.dropdown.trigger("focus",!0),d.originalElem.disabled||(d.triggerEvent("click"),e||f||d.toggle())},"mousedown.selectBoxIt":function(){a(this).data("mdown",!0),d.triggerEvent("mousedown"),e&&!f&&d.toggle()},"mouseup.selectBoxIt":function(){d.triggerEvent("mouseup")},"blur.selectBoxIt":function(){d.blur&&(d.triggerEvent("blur"),d.close(),a(this).removeClass(g))},"focus.selectBoxIt":function(b,c){var e=a(this).data("mdown");a(this).removeData("mdown"),e||c||setTimeout(function(){d.triggerEvent("tab-focus")},0),c||(a(this).hasClass(d.theme.disabled)||a(this).addClass(g),d.triggerEvent("focus"))},"keydown.selectBoxIt":function(a){var b=d._keyMappings[a.keyCode],c=d._keydownMethods()[b];c&&(c(),!d.options.keydownOpen||"up"!==b&&"down"!==b||d.open()),c&&"tab"!==b&&a.preventDefault()},"keypress.selectBoxIt":function(a){var b=a.charCode||a.keyCode,c=d._keyMappings[a.charCode||a.keyCode],e=String.fromCharCode(b);d.search&&(!c||c&&"space"===c)&&d.search(e,!0,!0),"space"===c&&a.preventDefault()},"mouseenter.selectBoxIt":function(){d.triggerEvent("mouseenter")},"mouseleave.selectBoxIt":function(){d.triggerEvent("mouseleave")}}),d.list.on({"mouseover.selectBoxIt":function(){d.blur=!1},"mouseout.selectBoxIt":function(){d.blur=!0},"focusin.selectBoxIt":function(){d.dropdown.trigger("focus",!0)}}),d.list.on({"mousedown.selectBoxIt":function(){d._update(a(this)),d.triggerEvent("option-click"),"false"===a(this).attr("data-disabled")&&"true"!==a(this).attr("data-preventclose")&&d.close(),setTimeout(function(){d.dropdown.trigger("focus",!0)},0)},"focusin.selectBoxIt":function(){d.listItems.not(a(this)).removeAttr("data-active"),a(this).attr("data-active","");var b=d.list.is(":hidden");(d.options.searchWhenHidden&&b||d.options.aggressiveChange||b&&d.options.selectWhenHidden)&&d._update(a(this)),a(this).addClass(g)},"mouseup.selectBoxIt":function(){e&&!f&&(d._update(a(this)),d.triggerEvent("option-mouseup"),"false"===a(this).attr("data-disabled")&&"true"!==a(this).attr("data-preventclose")&&d.close())},"mouseenter.selectBoxIt":function(){"false"===a(this).attr("data-disabled")&&(d.listItems.removeAttr("data-active"),a(this).addClass(g).attr("data-active",""),d.listItems.not(a(this)).removeClass(g),a(this).addClass(g),d.currentFocus=+a(this).attr("data-id"))},"mouseleave.selectBoxIt":function(){"false"===a(this).attr("data-disabled")&&(d.listItems.not(a(this)).removeClass(g).removeAttr("data-active"),a(this).addClass(g),d.currentFocus=+a(this).attr("data-id"))},"blur.selectBoxIt":function(){a(this).removeClass(g)}},".selectboxit-option"),d.list.on({"click.selectBoxIt":function(a){a.preventDefault()}},"a"),d.selectBox.on({"change.selectBoxIt, internal-change.selectBoxIt":function(a,e){var f,g;e||(f=d.list.find('li[data-val="'+d.originalElem.value+'"]'),f.length&&(d.listItems.eq(d.currentFocus).removeClass(d.focusClass),d.currentFocus=+f.attr("data-id"))),f=d.listItems.eq(d.currentFocus),g=f.attr("data-selectedtext"),b=f.attr("data-text"),c=b?b:f.find("a").text(),d._setText(d.dropdownText,g||c),d.dropdownText.attr("data-val",d.originalElem.value),f.find("i").attr("class")&&(d.dropdownImage.attr("class",f.find("i").attr("class")).addClass("selectboxit-default-icon"),d.dropdownImage.attr("style",f.find("i").attr("style"))),d.triggerEvent("changed")},"disable.selectBoxIt":function(){d.dropdown.addClass(d.theme.disabled)},"enable.selectBoxIt":function(){d.dropdown.removeClass(d.theme.disabled)},"open.selectBoxIt":function(){var a,b=d.list.find("li[data-val='"+d.dropdownText.attr("data-val")+"']");b.length||(b=d.listItems.not("[data-disabled=true]").first()),d.currentFocus=+b.attr("data-id"),a=d.listItems.eq(d.currentFocus),d.dropdown.addClass(i).removeClass(h).addClass(g),d.listItems.removeClass(d.selectedClass).removeAttr("data-active").not(a).removeClass(g),a.addClass(d.selectedClass).addClass(g),d.options.hideCurrent&&(d.listItems.show(),a.hide())},"close.selectBoxIt":function(){d.dropdown.removeClass(i)},"blur.selectBoxIt":function(){d.dropdown.removeClass(g)},"mouseenter.selectBoxIt":function(){a(this).hasClass(d.theme.disabled)||d.dropdown.addClass(h)},"mouseleave.selectBoxIt":function(){d.dropdown.removeClass(h)},destroy:function(a){a.preventDefault(),a.stopPropagation()}}),d},_update:function(a){var b,c,d,e=this,f=e.options.defaultText||e.selectBox.attr("data-text"),g=e.listItems.eq(e.currentFocus);"false"===a.attr("data-disabled")&&(b=e.listItems.eq(e.currentFocus).attr("data-selectedtext"),c=g.attr("data-text"),d=c?c:g.text(),(f&&e.options.html?e.dropdownText.html()===f:e.dropdownText.text()===f)&&e.selectBox.val()===a.attr("data-val")?e.triggerEvent("change"):(e.selectBox.val(a.attr("data-val")),e.currentFocus=+a.attr("data-id"),e.originalElem.value!==e.dropdownText.attr("data-val")&&e.triggerEvent("change")))},_addClasses:function(a){var b=this,c=(b.focusClass=a.focus,b.hoverClass=a.hover,a.button),d=a.list,e=a.arrow,f=a.container;return b.openClass=a.open,b.selectedClass="selectboxit-selected",b.downArrow.addClass(b.selectBox.attr("data-downarrow")||b.options.downArrowIcon||e),b.dropdownContainer.addClass(f),b.dropdown.addClass(c),b.list.addClass(d),b},refresh:function(a,b){var c=this;return c._destroySelectBoxIt()._create(!0),b||c.triggerEvent("refresh"),c._callbackSupport(a),c},htmlEscape:function(a){return String(a).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")},triggerEvent:function(a){var b=this,c=b.options.showFirstOption?b.currentFocus:b.currentFocus-1>=0?b.currentFocus:0;return b.selectBox.trigger(a,{selectbox:b.selectBox,selectboxOption:b.selectItems.eq(c),dropdown:b.dropdown,dropdownOption:b.listItems.eq(b.currentFocus)}),b},_copyAttributes:function(){var a=this;return a._addSelectBoxAttributes&&a._addSelectBoxAttributes(),a},_realOuterWidth:function(a){if(a.is(":visible"))return a.outerWidth(!0);var b,c=a.clone();return c.css({visibility:"hidden",display:"block",position:"absolute"}).appendTo("body"),b=c.outerWidth(!0),c.remove(),b}});var e=a.selectBox.selectBoxIt.prototype;e.add=function(b,c){this._populate(b,function(b){var d,e,f=this,g=a.type(b),h=0,i=[],j=f._isJSON(b),k=j&&f._parseJSON(b);if(b&&("array"===g||j&&k.data&&"array"===a.type(k.data))||"object"===g&&b.data&&"array"===a.type(b.data)){for(f._isJSON(b)&&(b=k),b.data&&(b=b.data),e=b.length;e-1>=h;h+=1)d=b[h],a.isPlainObject(d)?i.push(a("<option/>",d)):"string"===a.type(d)&&i.push(a("<option/>",{text:d,value:d}));f.selectBox.append(i)}else b&&"string"===g&&!f._isJSON(b)?f.selectBox.append(b):b&&"object"===g?f.selectBox.append(a("<option/>",b)):b&&f._isJSON(b)&&a.isPlainObject(f._parseJSON(b))&&f.selectBox.append(a("<option/>",f._parseJSON(b)));return f.dropdown?f.refresh(function(){f._callbackSupport(c)},!0):f._callbackSupport(c),f})},e._parseJSON=function(b){return JSON&&JSON.parse&&JSON.parse(b)||a.parseJSON(b)},e._isJSON=function(a){var b,c=this;try{return b=c._parseJSON(a),!0}catch(d){return!1}},e._populate=function(b,c){var d=this;return b=a.isFunction(b)?b.call():b,d.isDeferred(b)?b.done(function(a){c.call(d,a)}):c.call(d,b),d},e._ariaAccessibility=function(){var b=this,c=a("label[for='"+b.originalElem.id+"']");return b.dropdownContainer.attr({role:"combobox","aria-autocomplete":"list","aria-haspopup":"true","aria-expanded":"false","aria-owns":b.list[0].id}),b.dropdownText.attr({"aria-live":"polite"}),b.dropdown.on({"disable.selectBoxIt":function(){b.dropdownContainer.attr("aria-disabled","true")},"enable.selectBoxIt":function(){b.dropdownContainer.attr("aria-disabled","false")}}),c.length&&b.dropdownContainer.attr("aria-labelledby",c[0].id),b.list.attr({role:"listbox","aria-hidden":"true"}),b.listItems.attr({role:"option"}),b.selectBox.on({"open.selectBoxIt":function(){b.list.attr("aria-hidden","false"),b.dropdownContainer.attr("aria-expanded","true")},"close.selectBoxIt":function(){b.list.attr("aria-hidden","true"),b.dropdownContainer.attr("aria-expanded","false")}}),b},e._addSelectBoxAttributes=function(){var b=this;return b._addAttributes(b.selectBox.prop("attributes"),b.dropdown),b.selectItems.each(function(c){b._addAttributes(a(this).prop("attributes"),b.listItems.eq(c))}),b},e._addAttributes=function(b,c){var d=this,e=d.options.copyAttributes;return b.length&&a.each(b,function(b,d){var f=d.name.toLowerCase(),g=d.value;"null"===g||-1===a.inArray(f,e)&&-1===f.indexOf("data")||c.attr(f,g)}),d},e.destroy=function(a){var b=this;return b._destroySelectBoxIt(),b.widgetProto.destroy.call(b),b._callbackSupport(a),b},e._destroySelectBoxIt=function(){var b=this;return b.dropdown.off(".selectBoxIt"),a.contains(b.dropdownContainer[0],b.originalElem)&&b.dropdownContainer.before(b.selectBox),b.dropdownContainer.remove(),b.selectBox.removeAttr("style").attr("style",b.selectBoxStyles),b.triggerEvent("destroy"),b},e.disable=function(a){var b=this;return b.options.disabled||(b.close(),b.selectBox.attr("disabled","disabled"),b.dropdown.removeAttr("tabindex").removeClass(b.theme.enabled).addClass(b.theme.disabled),b.setOption("disabled",!0),b.triggerEvent("disable")),b._callbackSupport(a),b},e.disableOption=function(b,c){var d,e,f,g=this,h=a.type(b);return"number"===h&&(g.close(),d=g.selectBox.find("option").eq(b),g.triggerEvent("disable-option"),d.attr("disabled","disabled"),g.listItems.eq(b).attr("data-disabled","true").addClass(g.theme.disabled),g.currentFocus===b&&(e=g.listItems.eq(g.currentFocus).nextAll("li").not("[data-disabled='true']").first().length,f=g.listItems.eq(g.currentFocus).prevAll("li").not("[data-disabled='true']").first().length,e?g.moveDown():f?g.moveUp():g.disable())),g._callbackSupport(c),g},e._isDisabled=function(){var a=this;return a.originalElem.disabled&&a.disable(),a},e._dynamicPositioning=function(){var b=this;if("number"===a.type(b.listSize))b.list.css("max-height",b.maxHeight||"none");else{var c=b.dropdown.offset().top,d=b.list.data("max-height")||b.list.outerHeight(),e=b.dropdown.outerHeight(),f=b.options.viewport,g=f.height(),h=a.isWindow(f.get(0))?f.scrollTop():f.offset().top,i=g+h>=c+e+d,j=!i;if(b.list.data("max-height")||b.list.data("max-height",b.list.outerHeight()),j)if(b.dropdown.offset().top-h>=d)b.list.css("max-height",d),b.list.css("top",b.dropdown.position().top-b.list.outerHeight());else{var k=Math.abs(c+e+d-(g+h)),l=Math.abs(b.dropdown.offset().top-h-d);l>k?(b.list.css("max-height",d-k-e/2),b.list.css("top","auto")):(b.list.css("max-height",d-l-e/2),b.list.css("top",b.dropdown.position().top-b.list.outerHeight()))}else b.list.css("max-height",d),b.list.css("top","auto")}return b},e.enable=function(a){var b=this;return b.options.disabled&&(b.triggerEvent("enable"),b.selectBox.removeAttr("disabled"),b.dropdown.attr("tabindex",0).removeClass(b.theme.disabled).addClass(b.theme.enabled),b.setOption("disabled",!1),b._callbackSupport(a)),b},e.enableOption=function(b,c){var d,e=this,f=a.type(b);return"number"===f&&(d=e.selectBox.find("option").eq(b),e.triggerEvent("enable-option"),d.removeAttr("disabled"),e.listItems.eq(b).attr("data-disabled","false").removeClass(e.theme.disabled)),e._callbackSupport(c),e},e.moveDown=function(a){var b=this;b.currentFocus+=1;var c="true"===b.listItems.eq(b.currentFocus).attr("data-disabled")?!0:!1,d=b.listItems.eq(b.currentFocus).nextAll("li").not("[data-disabled='true']").first().length;if(b.currentFocus===b.listItems.length)b.currentFocus-=1;else{if(c&&d)return b.listItems.eq(b.currentFocus-1).blur(),b.moveDown(),void 0;c&&!d?b.currentFocus-=1:(b.listItems.eq(b.currentFocus-1).blur().end().eq(b.currentFocus).focusin(),b._scrollToView("down"),b.triggerEvent("moveDown"))}return b._callbackSupport(a),b},e.moveUp=function(a){var b=this;b.currentFocus-=1;var c="true"===b.listItems.eq(b.currentFocus).attr("data-disabled")?!0:!1,d=b.listItems.eq(b.currentFocus).prevAll("li").not("[data-disabled='true']").first().length;if(-1===b.currentFocus)b.currentFocus+=1;else{if(c&&d)return b.listItems.eq(b.currentFocus+1).blur(),b.moveUp(),void 0;c&&!d?b.currentFocus+=1:(b.listItems.eq(this.currentFocus+1).blur().end().eq(b.currentFocus).focusin(),b._scrollToView("up"),b.triggerEvent("moveUp"))}return b._callbackSupport(a),b},e._setCurrentSearchOption=function(a){var b=this;return(b.options.aggressiveChange||b.options.selectWhenHidden||b.listItems.eq(a).is(":visible"))&&b.listItems.eq(a).data("disabled")!==!0&&(b.listItems.eq(b.currentFocus).blur(),b.currentIndex=a,b.currentFocus=a,b.listItems.eq(b.currentFocus).focusin(),b._scrollToView("search"),b.triggerEvent("search")),b},e._searchAlgorithm=function(a,b){var c,d,e,f,g=this,h=!1,i=g.textArray,j=g.currentText;for(c=a,e=i.length;e>c;c+=1){for(f=i[c],d=0;e>d;d+=1)-1!==i[d].search(b)&&(h=!0,d=e);if(h||(g.currentText=g.currentText.charAt(g.currentText.length-1).replace(/[|()\[{.+*?$\\]/g,"\\$0"),j=g.currentText),b=new RegExp(j,"gi"),j.length<3){if(b=new RegExp(j.charAt(0),"gi"),-1!==f.charAt(0).search(b))return g._setCurrentSearchOption(c),(f.substring(0,j.length).toLowerCase()!==j.toLowerCase()||g.options.similarSearch)&&(g.currentIndex+=1),!1}else if(-1!==f.search(b))return g._setCurrentSearchOption(c),!1;if(f.toLowerCase()===g.currentText.toLowerCase())return g._setCurrentSearchOption(c),g.currentText="",!1}return!0},e.search=function(a,b,c){var d=this;c?d.currentText+=a.replace(/[|()\[{.+*?$\\]/g,"\\$0"):d.currentText=a.replace(/[|()\[{.+*?$\\]/g,"\\$0");var e=d._searchAlgorithm(d.currentIndex,new RegExp(d.currentText,"gi"));return e&&d._searchAlgorithm(0,d.currentText),d._callbackSupport(b),d},e._updateMobileText=function(){var a,b,c,d=this;a=d.selectBox.find("option").filter(":selected"),b=a.attr("data-text"),c=b?b:a.text(),d._setText(d.dropdownText,c),d.list.find('li[data-val="'+a.val()+'"]').find("i").attr("class")&&d.dropdownImage.attr("class",d.list.find('li[data-val="'+a.val()+'"]').find("i").attr("class")).addClass("selectboxit-default-icon")},e._applyNativeSelect=function(){var a=this;return a.dropdownContainer.append(a.selectBox),a.dropdown.attr("tabindex","-1"),a.selectBox.css({display:"block",visibility:"visible",width:a._realOuterWidth(a.dropdown),height:a.dropdown.outerHeight(),opacity:"0",position:"absolute",top:"0",left:"0",cursor:"pointer","z-index":"999999",margin:a.dropdown.css("margin"),padding:"0","-webkit-appearance":"menulist-button"}),a.originalElem.disabled&&a.triggerEvent("disable"),this},e._mobileEvents=function(){var a=this;a.selectBox.on({"changed.selectBoxIt":function(){a.hasChanged=!0,a._updateMobileText(),a.triggerEvent("option-click")},"mousedown.selectBoxIt":function(){a.hasChanged||!a.options.defaultText||a.originalElem.disabled||(a._updateMobileText(),a.triggerEvent("option-click"))},"enable.selectBoxIt":function(){a.selectBox.removeClass("selectboxit-rendering")},"disable.selectBoxIt":function(){a.selectBox.addClass("selectboxit-rendering")}})},e._mobile=function(){var a=this;return a.isMobile&&(a._applyNativeSelect(),a._mobileEvents()),this},e.remove=function(b,c){var d,e,f=this,g=a.type(b),h=0,i="";if("array"===g){for(e=b.length;e-1>=h;h+=1)d=b[h],"number"===a.type(d)&&(i+=i.length?", option:eq("+d+")":"option:eq("+d+")");f.selectBox.find(i).remove()}else"number"===g?f.selectBox.find("option").eq(b).remove():f.selectBox.find("option").remove();return f.dropdown?f.refresh(function(){f._callbackSupport(c)},!0):f._callbackSupport(c),f},e.selectOption=function(b,c){var d=this,e=a.type(b);return"number"===e?d.selectBox.val(d.selectItems.eq(b).val()).change():"string"===e&&d.selectBox.val(b).change(),d._callbackSupport(c),d},e.setOption=function(b,c,d){var e=this;return"string"===a.type(b)&&(e.options[b]=c),e.refresh(function(){e._callbackSupport(d)},!0),e},e.setOptions=function(b,c){var d=this;return a.isPlainObject(b)&&(d.options=a.extend({},d.options,b)),d.refresh(function(){d._callbackSupport(c)},!0),d},e.wait=function(a,b){var c=this;return c.widgetProto._delay.call(c,b,a),c}});
/*
 /////////////////////////////////////////////////////////////
 file: estimation
 function: estimation()  v2
 returns: void
 created by: Jean-Robert BERETTA - Septembre 2015
 /////////////////////////////////////////////////////////////
 */


// recuperer le chemin absolue du fichier courant pour les futur appel ajax
var scripts = document.getElementsByTagName('script');
var path = "";

if (scripts && scripts.length > 0) {
    for (var i in scripts) {
        if (scripts[i].src && scripts[i].src.match(new RegExp('estimationForm(\\.min)?\\.js$'))) {
            path =  scripts[i].src.replace(new RegExp('(.*)js\/estimationForm(\\.min)?\\.js$'), '$1');
        }
    }
}
$jq.fn.estimation = function(options){
    if(typeof options !== "object"){
        options = {}
    }
    if(typeof options.type === "undefined") options.type="SL";
    if(typeof options.subType === "undefined") options.subType="desktop";

    var pathAutocomplete = "";
    if(path !== ""){
        pathAutocomplete = "/..,"+ path.split(/produits\/|slagence\_X\_V\d\//g)[1].replace(/\//g,",") + "json,autocomplete.json";
    }
    var config = {
        server: "http://evaluation-svc.pericles.fr",
        preEstim: "/api/estimation/lci/ObtenirFaisabilite",
        sauvegardeAppart: "/api/estimation/lci/SauvegarderEstimationAppartement",
        sauvegardeMaison: "/api/estimation/lci/SauvegarderEstimationMaison",
        estimAppart: "/api/estimation/lci/ObtenirEstimationAppartement",
        estimMaison: "/api/estimation/lci/ObtenirEstimationMaison",
        charger:  "/api/estimation/lci/RepriseEstimation",
        autocomplete: pathAutocomplete,
        type:"SL",
        subType: "desktop",
        color: "#c5071b",
        selectType: 0,
        text:{
            step0: {
                title: "Réalisez votre <span class='brandColor'>estimation gratuite en 5 minutes</span>",
                intro: ""
            },
            contact: {
                par1: "",
                par2: "",
                CTA: "Recevoir mon estimation"
            },
            noestim: {
                par1: "Compte tenu des données disponibles, nous ne sommes malheureusement pas en mesure de vous proposer une estimation suffisamment précise de votre bien.",
                par2: "Afin d'obtenir une estimation gratuite, nous vous proposons d'être mis directement en relation avec les professionnels immobiliers de votre localité."
            }
        },
        champsObligatoire: false,
        ABtest: false,
        path:""
    };
    if (options.type === "SL") {
        if (options.subType === "desktop") {
            config.urlindex = "/z/produits/sl/sv6_annonces/estimation/html/indexFormEstimation.html";
            config.urlcss = "/z/produits/common/estimation/colour.css";
            config.autocomplete = "estimation,ajax,autocomplete.json";
            config.BU = "SL";
        } else {
            config.urlindex = "/z/produits/sl_mobile/pages/estimation/html/indexFormEstimation.html";
            config.urlcss = "/z/produits/common/estimation/colour.css";
            config.autocomplete = "json_mobile,estimation,json,autocomplete.json";
            config.BU = "M_SL";
        }
        config.path = "/z/produits/assets/images/common/estimation";

    } else if (options.type === "LCI") {
        config.urlindex = "/z/produits/lci/html/indexFormEstimation.html";
        config.urlcss = "/z/produits/common/estimation/colour.css";
        config.autocomplete = "js,ajax,autocomplete.json";
        config.path = "/z/produits/assets/images/common/estimation";
        config.BU = "LCI";
    } else {
        config.urlindex = path + "../indexFormEstimation.html";
        config.urlcss = path + "css/colour.css";
        config.path = path +  "images";
        config.BU = "poliris";
    }

    if(typeof options === "object"){
        $jq.extend(config, options);
    }
    path = config.path;

    config.baseColor = "#c5071b";
    var container = $jq(this);
    var cp;
    var ville;
    var isMobile = false;
    var flagTouch = [false,false,false,false];
    var flagFaisabilite = false;
    var flagSauvegarde = false;
    var flagEstimation = false;
    var formData = {};
    var openTooltip = false;
    var TrackingContactAgence = false;
    var hasEstim = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))isMobile = true})(navigator.userAgent||navigator.vendor||window.opera);
    if(!isMobile && $jq(window).width() <= 700){
        isMobile = true;
    }
    //remplir la div avec un loader
    container.empty().append("<div class='waiting container' style='min-height: 600px; text-align: center'><img src='" + path + "/common/ajax-loader.gif' style='margin-top: 280px'></div>");

    // si le site est plus large que la fenetre, empecher qu'il soit trop large

    if(isMobile && container.width() > $jq(window).width()){
        var parent= container.parent();
        var maxWidth = $jq(window).width() - (parent.outerWidth() - parent.width());
        container.css({"max-width": maxWidth});
    }
    // initialisation du html ainsi que des action js de base
    $jq.ajax({
        url: config.urlindex,
        dataType: "html",
        timeout: 20000,
        success: function(data){
            container.empty().append(data.replace(/pathToImages/g,path));
            $jq('.main_estimation_container > .container:not(.waiting)').css('display', 'none');
            if(config.ABtest == false || $jq('.testA,.testB').length === 0){
                $jq('body').addClass('testA');
            }
            for(var i in config.text){
                for(var j in config.text[i]){
                    $jq('.main_estimation_container .' + i + j).empty().html(config.text[i][j]);
                }
            }

            // appliquer la configuration poliris

            container.find('.main_estimation_container').addClass('type-'+config.type);
            if (config.type === "poliris"){
                container.find('.main_estimation_container').addClass('padding-20');
                container.find('.hide-poliris input, .hide-poliris select').addClass('disabled');
                var cgu = container.find('.cgu');
                var site = document.location.host.replace('www.', "");
                site = site[0].toUpperCase() + site.substr(1);
                cgu.find('span').html(cgu.find('span').html().replace(/Nomdusite\.com/g, site));
                cgu.find('a').attr('href', document.location.protocol + "//" + document.location.host + "/contact,agence.htm");
                if(typeof config.ClefIdentification !== "undefined") {
                    formData.ClefIdentification = config.ClefIdentification;
                }
            }


            $jq('[data-toggle="tooltip"]').tooltip();


            trackingOnLoad(config.BU);
            $jq.ajax({
                url: config.urlcss,
                dataType: "text",
                success: function(data){
                    $jq('#estimStyle').remove();
                    $jq('head').append('<style id="estimStyle">' + data.replace(new RegExp(config.baseColor,"g"),config.color).replace(/\.\.\/images/g,path) + '<style>');
                }
            });
            var mainContainer = $jq('.main_estimation_container > .container:not(.waiting):not(.load-error)');
            if (/\?hashSauvegarde\=\w*\&emailInternaute\=\w/.test(document.location.search)) {
                $jq.ajax({
                    url: config.server + config.charger,
                    type: 'GET',
                    timeout: 20000,
                    data: document.location.search.substr(1),
                    success: function(data){
                        if(typeof data === "object" && data !== null) {
                            formData = data;
                            formData = loadData(formData, container, false);
                            cp = formData.Cp;
                            ville = formData.Ville;
                            validationRules.Ville.equals.value = ville + ' (' + cp + ')';
                            var villedata = LoadCity(cp,ville, config);
                            formData.codeInsee = villedata.ci;
                            typeBien = formData.TypeBien == 1 ? "appart" : "house";
                            $jq('.waiting').remove();
                            mainContainer.css('display', 'inline-block');
                            movePage(typeBien + formData.Step);
                        } else {
                            $jq('.load-error').css('display', 'inline-block');
                            $jq('.waiting').remove();
                            mainContainer.css('display', 'inline-block');
                            $jq('.page.appart0').show().addClass('activePage');
                        }
                    },
                    error:function(){
                        $jq('.load-error').css('display', 'inline-block');
                        $jq('.waiting').remove();
                        mainContainer.css('display', 'inline-block');
                        $jq('.page.appart0').show().addClass('activePage');
                    }
                });

            }else{
                $jq('.waiting').remove();
                mainContainer.css('display', 'inline-block');
                $jq('.page.appart0').show().addClass('activePage');
            }

            if(config.type !== "poliris"){
                var codepostaldata = "",
                    villedata = "";
                if(document.location.search.indexOf('rue=') > 0){
                    $jq('[name=Adresse]').val(decodeURI(document.location.search.split('rue=')[1].split('&')[0]).replace(/\+/g," "));
                } else if(document.location.search.indexOf('address=') > 0){
                    $jq('[name=Adresse]').val(decodeURI(document.location.search.split('address=')[1].split('&')[0]).replace(/\+/g," "));
                }else if(document.location.search.indexOf('adresse=') > 0){
                    $jq('[name=Adresse]').val(decodeURI(document.location.search.split('adresse=')[1].split('&')[0]).replace(/\+/g," "));
                }

                if(document.location.search.indexOf('codepostal=') > 0){
                    codepostaldata = decodeURI(document.location.search.split('codepostal=')[1].split('&')[0]);
                }
                if(document.location.search.indexOf('ville=') > 0){
                    villedata = decodeURI(document.location.search.split('ville=')[1].split('&')[0]);
                }
                var dataville = LoadCity(codepostaldata, villedata, config);
                if(dataville.cp !== "") {
                    cp = dataville.cp;
                    ville = dataville.ville;
                    validationRules.Ville.equals.value = dataville.validata;
                    formData.codeInsee = dataville.ci;
                }
            }
            if(config.selectType === 0 && document.location.search.indexOf("idtypebien")>0){
                config.selectType = document.location.search.split('idtypebien=')[1].split('&')[0];
            }

            $jq('[data-name=TypeBien][data-value=' + config.selectType + ']').trigger(isMobile?"touchstart":"click");
            $jq("select").selectBoxIt({showFirstOption : false, theme: "bootstrap", dynamicPositioning: false, autoWidth: false});

            // mettre des champs facultatif ou obligatoire
            if(!config.champsObligatoire){
                validationRules.SituationInternaute = {};
                validationRules.DelaiVenteInternaute = {};
                $jq('[name=SituationInternaute] [data-val=placeholder], [name=DelaiVenteInternaute] [data-val=placeholder]').text('Sélectionnez (Facultatif)');

            }

            $jq( "#Ville" ).autocomplete({
                minLength: 2,
                appendTo: ".selectedListAutocompleteVille",
                messages: {
                    noResults: '',
                    results: function() {}
                },
                source:function( request, response ) {
                    xhr = $jq.ajax({
                        dataType: "json",
                        data : { term: request.term },
                        url: config.autocomplete,
                        mimeType: "application/json",
                        success: function(data){
                            if(typeof data.listLocation !== "undefined") {
                                var city = [];
                                data.listLocation.map(function (n) {
                                    if (n.param === 'ci') city[city.length] = {value: n.value, insee: n.code};
                                });
                                response(city);
                            }
                        }
                    });
                },
                open: function( event, ui ) {
                    $jq(".selectedListAutocompleteHouse > ul").css({top:0,left:0});
                    if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
                        $jq('.ui-autocomplete').off('menufocus hover mouseover mouseenter');
                    }
                },
                select: function(event, ui){
                    cp = ui.item.label.substr(-6,5);
                    ville = ui.item.label.substr(0,ui.item.label.length-8);
                    validationRules.Ville.equals.value = ui.item.label;
                    formData.codeInsee = ui.item.insee;
                }
            });

        },
        error: function(){
            displayError('timeout', container, isMobile);
        }

    });

    /**
     * Regles de validation de tout les formulaires:
     * required = champs obligatoire
     * regexp = regex a appliquer sur le resultat du champs
     * max = valeur maximum du champs
     * condition = condition necessaire pour que les regles lister dans validation s'appliques
     * target = cible pour inserer le message d'erreur par default le parent de l'input
     *
     */
    var validationRules = {
        Adresse: {
            required : "Veuillez renseigner une adresse",
            regexp:{
                value: /^[0-9A-Za-zéèêëâàäçî\s\-\']{1,50}$/,
                message: "Veuillez renseigner une adresse valide"
            }
        },
        SurfaceHabitable: {
            required : "Veuillez renseigner la surface habitable",
            regexp:{
                value: /^\d*$/,
                message: "Seuls les chiffres sont acceptés"
            },
            max:{
                value: 300,
                message: "Veuillez renseigner une surface ne dépassant pas 300m²"
            }
        },
        EpoqueConstruction: {
            required : "Veuillez indiquer une époque de construction"
        },
        TypeBien: {
            required : "Veuillez renseigner un type de bien",
            target: ".buttonChoice"
        },
        EtageAppartement: {
            condition: {
                champs: "TypeBien",
                value: 1,
                operator: "equals",
                validation: {
                    required: "Veuillez renseigner l’étage de votre appartement",
                    lessthanequal:{
                        champs:"NbEtageImmeuble",
                        message:"Veuillez renseigner un étage valide"
                    },
                    min: {
                        value: 0,
                        message: "Veuillez renseigner un étage valide"
                    },
                    regexp:{
                        value: /^\d*$/,
                        message: "Seuls les chiffres sont acceptés."
                    }
                }
            }
        },
        NbEtageImmeuble: {
            condition: {
                champs: "TypeBien",
                value: 1,
                operator: "equals",
                validation: {
                    required: "Veuillez renseigner le nombre d’étages de votre immeuble",
                    min: {
                        value: 0,
                        message: "Veuillez renseigner un nombre d'étage valide"
                    },
                    regexp:{
                        value: /^\d*$/,
                        message: "Seuls les chiffres sont acceptés."
                    },
                    synchro:{
                        value: "EtageAppartement"
                    }
                }
            }
        },
        Ville:{
            required : "Veuillez renseigner une ville",
            equals:{
                value: "",
                message:"Veuillez renseigner une ville valide"
            }
        },
        EmailInternaute:{
            required: "Veuillez renseigner votre email",
            regexp:{
                value: /^[-\da-zA-Z\._~\+]+@(\w[-\w]*(\.\w[-\w]*)*\.([a-zA-Z]{2,10})|\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})$/,
                message: "Veuillez renseigner un email valide"
            }
        },
        TypeConstruction:{
            required: "Veuillez indiquer un niveau de standing",
            target: ".buttonChoice"
        },
        ChauffageGaz: {
            required: "Veuillez indiquer si vous disposez d’un chauffage au gaz",
            target: ".gaz"
        },
        Mitoyennete: {
            required: "Veuillez indiquer si votre maison est mitoyenne",
            target: ".mitoyen"
        },
        NbNiveaux: {
            required: "Veuillez renseigner le nombre d'étages"
        },
        NbChambres: {
            required: "Veuillez renseigner le nombre de chambres"
        },
        roomSpace:{
            required: "Veuillez indiquer la taille et volume des pièces",
            target: ".roomSpace"
        },
        Standing:{
            required: "Veuillez donner une note.",
            target: ".standing"
        },
        QualiteEmplacement:{
            required: "Veuillez donner une note.",
            target: ".qualite"
        },
        TypeChauffage:{
            required: "Veuillez indiquer un type de chauffage."
        },
        NatureChauffage:{
            required: "Veuillez indiquer une nature de chauffage."
        },
        Ascenseur:{
            required: "Veuillez indiquer si votre immeuble est équipé d’un ascenseur.",
            target: ".ascenseur"
        },
        ChargeCopropriete:{
            required: "Veuillez indiquer un montant.",
            regexp: {
                value: /^\d*$/,
                message: "Seuls les chiffres sont acceptés"
            }
        },
        TypeMateriaux:{
            required: "Veuillez sélectionner un type de matériaux.",
            target: ".select-texture"
        },
        EmailSave:{
            required: "Veuillez renseigner votre email",
            regexp:{
                value: /^[-\da-zA-Z\._~\+]+@(\w[-\w]*(\.\w[-\w]*)*\.([a-zA-Z]{2,10})|\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})$/,
                message: "Veuillez renseigner un email valide"
            }
        },
        NbPiece:{
            required: "Veuillez renseigner le nombre de pièces"
        },
        SurfaceSolNonMansarde:{
            required: "Veuillez renseigner la surface",
            regexp:{
                value:  /^\d*$/,
                message: "Seuls les chiffres sont acceptés"
            },
            max:{
                value: 300,
                message: "Veuillez renseigner une surface ne dépassant pas 300m²."
            }
        },
        SurfaceSolSousToitPentu:{
            required: "Veuillez renseigner la surface",
            regexp:{
                value:  /^\d*$/,
                message: "Seuls les chiffres sont acceptés"
            },
            max:{
                value: 300,
                message: "Veuillez renseigner une surface ne dépassant pas 300m²."
            }
        },
        SurfaceSousSol:{
            required: "Veuillez renseigner la surface",
            regexp:{
                value: /^\d*$/,
                message: "Seuls les chiffres sont acceptés"
            },
            max:{
                value: 300,
                message: "Veuillez renseigner une surface ne dépassant pas 300m²."
            }
        },
        SurfaceTotaleTerrainCadastre:{
            required: "Veuillez renseigner la surface",
            regexp:{
                value:  /^\d*$/,
                message: "Seuls les chiffres sont acceptés"
            },
            max:{
                value: 300000,
                message: "Veuillez renseigner une surface ne dépassant pas 300 000m²."
            }
        },
        SurfaceVeranda:{
            required: "Veuillez renseigner la surface",
            regexp:{
                value: /^\d*$/,
                message: "Seuls les chiffres sont acceptés"
            },
            max:{
                value: 300,
                message: "Veuillez renseigner une surface ne dépassant pas 300m²."
            }
        },
        SurfaceTerrasse:{
            required: "Veuillez renseigner la surface",
            regexp:{
                value: /^\d*$/,
                message: "Seuls les chiffres sont acceptés"
            },
            max:{
                house:{
                    value: 300,
                    message: "Veuillez renseigner une surface ne dépassant pas 300m²."
                },
                appart: {
                    value: 80,
                    message: "Veuillez renseigner une surface ne dépassant pas 80m²."
                }
            }
        },
        SurfaceGarage:{
            required: "Veuillez renseigner la surface",
            regexp:{
                value: /^\d*$/,
                message: "Seuls les chiffres sont acceptés"
            },
            max:{
                value: 300,
                message: "Veuillez renseigner une surface ne dépassant pas 300m²."
            }
        },
        SurfaceDependances:{
            required: "Veuillez renseigner la surface",
            regexp:{
                value: /^\d*$/,
                message: "Seuls les chiffres sont acceptés"
            },
            max:{
                value: 300,
                message: "Veuillez renseigner une surface ne dépassant pas 300m²."
            }
        },
        SurfacehabitableAppart:{
            required: "Veuillez renseigner la surface",
            regexp:{
                value:  /^\d*$/,
                message: "Seuls les chiffres sont acceptés"
            },
            max:{
                value: 300,
                message: "Veuillez renseigner une surface ne dépassant pas 300m²."
            }
        },
        SurfaceBalcon:{
            required: "Veuillez renseigner la surface",
            regexp:{
                value: /^\d*$/,
                message: "Seuls les chiffres sont acceptés"
            },
            max:{
                value: 30,
                message: "Veuillez renseigner une surface ne dépassant pas 30m²."
            }
        },
        SurfaceJardinPrivatif:{
            required: "Veuillez renseigner la surface",
            regexp:{
                value: /^\d*$/,
                message: "Seuls les chiffres sont acceptés"
            },
            max:{
                value: 50,
                message: "Veuillez renseigner une surface ne dépassant pas 50m²."
            }
        },
        SurfaceLoggia:{
            required: "Veuillez renseigner la surface",
            regexp:{
                value: /^\d*$/,
                message: "Seuls les chiffres sont acceptés"
            },
            max:{
                value: 50,
                message: "Veuillez renseigner une surface ne dépassant pas 50m²."
            }
        },
        Cave:{
            required: "Veuillez renseigner la surface"
        },
        NbBox:{
            required:""
        },
        NbParkingInterieur:{
            required:""
        },
        NbParkingExterieur:{
            required:""
        },
        stationnement1:{
            condition:{
                champs: "stationnement",
                value: 1,
                operator: "morethanequal",
                validation:{
                    required: "Veuillez indiquer le type de stationnement",
                    notequals: {
                        value:"placeholder",
                        message: "Veuillez indiquer le type de stationnement"
                    }
                }
            }
        },
        stationnement2:{
            condition:{
                champs: "stationnement",
                value: 2,
                operator: "morethanequal",
                validation:{
                    required: "Veuillez indiquer le type de stationnement",
                    notequals: {
                        value:"placeholder",
                        message: "Veuillez indiquer le type de stationnement"
                    }
                }
            }
        },
        stationnement3:{
            condition:{
                champs: "stationnement",
                value: 3,
                operator: "equals",
                validation:{
                    required: "Veuillez indiquer le type de stationnement",
                    notequals: {
                        value:"placeholder",
                        message: "Veuillez indiquer le type de stationnement"
                    }
                }
            }
        },
        EtatMursExterieurs:{
            required: "Veuillez indiquer l'état.",
            target: ".murext"
        },
        EtatCouverture:{
            required: "Veuillez indiquer l'état.",
            target: ".couverture"
        },
        EtatAlimentationGaz:{
            required: "Veuillez indiquer l'état.",
            target: ".gaz"
        },
        EtatInstallationElectrique:{
            required: "Veuillez indiquer l'état.",
            target: ".elec"
        },
        EtatMursInterieurs:{
            required: "Veuillez indiquer l'état.",
            target: {
                house: ".etatmur",
                appart: ".mur"
            }
        },
        EtatIsolationMursEtCombles:{
            required: "Veuillez indiquer l'état.",
            target: ".isomurcomble"
        },
        EtatIsolationPortesEtFenetres:{
            required: "Veuillez indiquer l'état.",
            target: ".isoportefenetre"
        },
        EtatRevetementMurs:{
            required: "Veuillez indiquer l'état.",
            target: ".revmur"
        },
        EtatRevetementSols:{
            required: "Veuillez indiquer l'état.",
            target: ".revsol"
        },
        EtatInstallationChauffage:{
            required: "Veuillez indiquer l'état.",
            target: ".instchauffage"
        },
        Vue:{
            required: "Veuillez donner une note.",
            target: ".vue"
        },
        Agencement:{
            required: "Veuillez donner une note.",
            target: ".agencement"
        },
        EtatSols:{
            required: "Veuillez indiquer l'état.",
            target: ".sols"
        },
        EtatPlomberie:{
            required: "Veuillez indiquer l'état.",
            target: ".plomberie"
        },
        Tennis:{},
        Piscine:{},
        NomInternaute:{
            condition:{
                champs: "ContactAgence",
                value: "true",
                operator:"equals",
                validation:{
                    required: "Veuillez renseigner votre nom",
                    regexp:{
                        value: /^[\u00c0-\u01ffA-Za-z]{1}[\u00c0-\u01ffA-Za-z-'\s]*$/,
                        message: "Seules les lettres sont acceptées"
                    }
                }
            }

        },
        TelInternaute: {
            condition: {
                champs: "ContactAgence",
                value: "true",
                operator:"equals",
                validation:{
                    required: "Veuillez renseigner votre n° de téléphone",
                    regexp:{
                        value: /^0[0-9]{9}$/,
                        message: "Veuillez renseigner un n° de téléphone valide"
                    }
                }
            }
        },
        SituationInternaute:{
            required: "Veuillez selectionner votre situation"
        },
        DelaiVenteInternaute:{
            required: "Veuillez indiquer un délai de vente"
        }

    };
    // animation des differentes option du formulaire
    var typeBien = "";



    // liaison des données entre le champs cache et les "bouttons radios" personaliser
    container.off().on("click touchstart", '[data-name]',function(event){
            if(flagTouch[0]){
                return false;
            }
            if(!flagTouch[0] && event.type === "touchstart"){
                flagTouch[0] = true;
                setTimeout(function(){
                    flagTouch[0] = false;
                }, 310);
            }
            if(!$jq(this).hasClass('square-checkbox')) {
                if (!$jq(this).hasClass('selected')) {
                    $jq(this).parent().parent().find('[data-name]').removeClass('selected');
                    $jq(this).addClass('selected');
                    $jq('input[name=' + $jq(this).attr('data-name') + ']').val($jq(this).attr('data-value'));
                }
            }else{
                if (!$jq(this).hasClass('selected')) {
                    $jq(this).addClass('selected');
                    $jq('input[name=' + $jq(this).attr('data-name') + ']').val("true");
                }else{
                    $jq(this).removeClass('selected');
                    $jq('input[name=' + $jq(this).attr('data-name') + ']').val("false");
                }
            }
        })

        //action de l'etape 0 choix du type de bien
        .on("click touchstart", '.house0 .buttonChoice .square-button', function (event) {
            if (flagTouch[1]) {
                return false;
            }
            if (!flagTouch[1] && event.type === "touchstart") {
                flagTouch[1] = true;
                setTimeout(function () {
                    flagTouch[1] = false;
                }, 310);
            }
            if ($jq(this).attr('data-value') == 1) {
                $jq('.appart').addClass('selected').find('input').prop("disabled", false);
                typeBien = "appart";
                if (config.type === "LCI") {
                    $jq('h1').first().html("Estimation immobilière gratuite pour mon appartement – estimer votre appartement");
                }
            }else{
                $jq('.appart').removeClass('selected').find('input').prop("disabled", true);
                typeBien = "house";
                if (config.type === "LCI") {
                    $jq('h1').first().html("Estimation immobilière gratuite de ma maison – Estimer votre maison");
                }
            }

            trackingBtnChoice(typeBien);

            if (!$jq('.formulaire').hasClass('selected')) {
                $jq('.formulaire').addClass('selected');
            }

        })

        // formulaire de contact, afficher ou cacher les champs
        .on("click", '.contact .buttonContainer .square-button', function () {
            if ($jq(this).attr('data-value') == "true") {
                $jq('.contactYes').addClass('selected').find('input').prop("disabled", false);
            } else {
                $jq('.contactYes').removeClass('selected').find('input').prop("disabled", true);
            }
        })

        .on("change", "select[name='SituationInternauteContact'],select[name='SituationInternauteNoEstim']", function (event) {

            // Variable declarations
            var actionLabel
                , notDoingLabel
                , situationDatePrevision
                , selectDom
                , selectBox;
            var situationForm = $jq("select[name='SituationInternauteContact']");
            var situationTarget = event.target == situationForm[0];
            // Labels for select vous etes
            var actionLabels = {
                1: 'Quand envisagez-vous de vendre ce bien :'
                , 2: 'Quand envisagez-vous d\'acheter ce bien :'
            };
            // Labels for select quand
            var notDoingLabels = {
                1: 'Je n\'envisage pas de vendre mon bien'
                , 2: 'Je n\'envisage pas d\'acheter ce bien'
            };

            // Contact Form
            if(situationTarget){

                // Get the situation (propriétaire, acheteur, pro, visiteur)
                var situation = $jq('#SituationInternauteContactSelectBoxItText').attr('data-val');
                var selectSituationTarget = $jq('#SituationDatePrevisionContact');
                var selectSituation = $jq('#SituationInternauteContact').val(); // for mobile

                // NoEstim Form
            } else {

                // Get the situation (propriétaire, acheteur, pro, visiteur)
                var situation = $jq('#SituationInternauteNoEstimSelectBoxItText').attr('data-val');
                var selectSituationTarget = $jq('#SituationDatePrevisionNoEstim');
                var selectSituation = $jq('#SituationInternauteNoEstim').val(); // for mobile

            }

            // Desktop
            if( !isMobile ){

                actionLabel = actionLabels[situation];

                // If no label found, we hide the situation date prevision DIV
                // Otherwise, we display it and change the label to the correct one
                if (actionLabel === undefined) {

                    selectSituationTarget.hide();

                } else {

                    // Display
                    selectSituationTarget.show();

                    // For proprietaire and acheteur, we display the when select
                    notDoingLabel = notDoingLabels[situation];

                    // Selectors
                    selectBox = selectSituationTarget.find(' > select').data("selectBox-selectBoxIt");
                    selectDom = selectSituationTarget.find(' select');


                    // Text giving the ancestor select
                    selectSituationTarget.find(' > label').text(actionLabel);

                    // Selecting placeholder for the prevision date select box
                    selectDom.val('placeholder');
                    selectBox.refresh();

                    // Changing label of the 4th option
                    selectDom.find('option[value="4"]').text(notDoingLabel);
                    selectBox.refresh();
                }

                // Mobile (use standard select)
            } else {

                actionLabel = actionLabels[selectSituation];

                if (actionLabel === undefined) {

                    selectSituationTarget.hide();

                } else {

                    selectSituationTarget.show();

                }

            }

        })

        // validation des formulaires sans action particuliaire
        .on("submit", '.stepForm', function () {
            if (validateForm(validationRules, typeBien)) {
                if ($jq(this).hasClass('lastStep')) {
                    if (formData.IdEstimation == 0) {
                        movePage("noestim", typeBien);
                    } else {
                        hasEstim = true;
                        movePage("contact", typeBien);
                    }
                } else {
                    movePage("next", typeBien);
                }

                var data = {},
                    form = $jq(this).attr('name');

                if (TrackingContactAgence == false) {
                    trackingStepForm(form, typeBien);
                }

                $jq(this).serializeArray().map(function (n) {
                        if (parseInt(n.value) == n.value) {
                            data[n.name] = parseInt(n.value);
                        } else {
                            data[n.name] = n.value;
                        }
                        if (n.name.indexOf("Surface") >= 0 && n.value === "") {
                            data[n.name] = 0;
                        }
                        return n;
                    }
                );

                $jq.extend(formData, data);
            }
            return false;
        })

        // envoi formulaire de preestimation
        .on("submit", '.preEstimForm', function () {
            if (validateForm(validationRules, typeBien)) {
                if (!flagFaisabilite) {
                    flagFaisabilite = true;
                    Loader(container, "begin");
                    var data = {};

                    $jq(this).serializeArray().map(function (n) {

                            if (n.name === "Ville") {
                                data.Cp = n.value.substr(-6, 5);
                                n.value = n.value.substr(0, n.value.length - 8);
                            }
                            if (parseInt(n.value) == n.value) {
                                data[n.name] = parseInt(n.value);
                            } else {
                                data[n.name] = n.value;
                            }
                            return n;
                        }
                    );

                    if (typeBien) {
                        trackingPreEstimation(typeBien);
                    }

                    $jq.extend(formData, data);
                    data = JSON.stringify(formData);
                    $jq.ajax({
                        url: config.server + config.preEstim,
                        dataType: "json",
                        timeout: 20000,
                        type: "POST",
                        contentType: "application/json",
                        data: data,
                        success: function (data) {
                            formData.IdEstimation = data.IdEstimation;
                            if (data.Faisabilite === true && (data.MessageErreur === null || data.MessageErreur === "")) {
                                movePage("next", typeBien);
                            } else {

                                /* abandon de ce test AB le temps de faire la sauvegarde
                                 if(config.ABtest === true){
                                 Kameleoon.API.triggerEvent("ESTIM_FACTOR");
                                 //securite si Kameloon bug
                                 setTimeout(function(){
                                 if($jq('.activePage').hasClass('appart0')){
                                 console.log('errorn kame');
                                 movePage("noestim");
                                 }
                                 },1000);
                                 }else{ */
                                movePage("noestim", typeBien);
                                // }
                            }

                            Loader(container, "stop");
                            flagFaisabilite = false;
                        },
                        error: function (data) {
                            displayError('timeout', container, isMobile);
                            Loader(container, "stop");
                            flagFaisabilite = false;
                        }
                    });
                }
            } else {
                window.scrollTo(0, ($jq('form.preEstimForm').offset().top) - 20 );
            }
            return false;
        })

        // envoie des lead
        .on("submit", '.formB', function () {
            if (validateForm(validationRules, typeBien)) {
                if (!flagEstimation) {
                    flagEstimation = true;
                    Loader(container, "begin");
                    var data = {},
                        form = $jq(this).attr('name');

                    if (TrackingContactAgence == false) {
                        trackingStepForm(form, typeBien);
                    }

                    $jq(this).serializeArray().map(function (n) {
                            if (parseInt(n.value) == n.value) {
                                data[n.name] = parseInt(n.value);
                            } else {
                                data[n.name] = n.value;
                            }
                            return n;
                        }
                    );

                    formData.Type = config.type;
                    $jq.extend(formData, data);
                    var url = config.server + (typeBien === "house" ? config.estimMaison : config.estimAppart);
                    $jq.ajax({
                        url: url,
                        timeout: 20000,
                        dataType: "json",
                        type: "POST",
                        contentType: "application/json",
                        data: JSON.stringify(formData),
                        success: function (data) {
                            //if (data.MessageErreur === null || data.MessageErreur === "") {
                            $jq('.testB').removeClass('testB').addClass('testB2');
                            //}

                            Loader(container, "stop");
                            flagEstimation = false;
                        },
                        error: function (data) {
                            Loader(container, "stop");
                            flagEstimation = false;
                        }
                    });


                }
            } else {
                window.scrollTo(0, ($jq('form.formB').offset().top) - 20 );
            }
            return false;
        })

        // envoie de l'estimation
        .on("submit", '.sendForm', function () {
            if (validateForm(validationRules, typeBien)) {
                if (!flagEstimation) {
                    flagEstimation = true;
                    Loader(container, "begin");
                    var data = {},
                        form = $jq(this).attr('name');

                    if (TrackingContactAgence == false) {
                        trackingStepForm(form, typeBien);
                    }

                    $jq(this).serializeArray().map(function (n) {
                            if (parseInt(n.value) == n.value && n.name !== "TelInternaute") {
                                data[n.name] = parseInt(n.value);
                            } else {
                                data[n.name] = n.value;
                            }
                            return n;
                        }
                    );

                    data.EmailInternaute = $jq('.activePage [name=EmailInternaute]').val();
                    formData.EmailInternaute = data.EmailInternaute || formData.EmailInternaute;
                    formData.Type = config.type;
                    $jq.extend(formData, data);
                    // dans le cas de noestim, savoir ou on envoie le formulaire
                    //if($jq('.activePage').hasClass('contact')) {
                    var url = config.server + (typeBien === "house" ? config.estimMaison : config.estimAppart);
                    $jq.ajax({
                        url: url,
                        dataType: "json",
                        type: "POST",
                        timeout: 20000,
                        contentType: "application/json",
                        data: JSON.stringify(formData),
                        success: function (data) {
                            if (data == null || data.MessageErreur === null || data.MessageErreur === "") {
                                movePage("next", typeBien);
                            }
                            Loader(container, "stop");
                            flagEstimation = false;
                            movePage("next", typeBien);
                            if(!hasEstim)
                                trackingFormNoEstim("valid");
                        },
                        error: function (data) {
                            Loader(container, "stop");
                            flagEstimation = false;
                            console.log('error');
                            movePage("next", typeBien);
                        }
                    });
                    //}
                }
            } else {
                window.scrollTo(0, ($jq('form.sendForm').offset().top) - 20 );
            }
            return false;
        })
        // retour a l'etape precedente
        .on("click", '.return', function () {
            movePage("prev", typeBien);
        })

        // retaille le tooltips pour ne pas qu'il soit plus grand que la fenetre
        .on('inserted.bs.tooltip', '.adjust-width', function () {
            $jq(this).next().css({"max-width": $jq(window).width() - 10});
            if($jq(this).hasClass('star')){
                $jq(this).next().css({"width": "auto", "margin-bottom": 5});
            }
        })

        //gestion des messages d'erreur
        .on('click', '.has-error', function () {
            $jq(this).removeClass('has-error').find('.error-message').remove();
        })

        //empecher l'utilisateur de modifier le champs ville
        .on("focus", '#Ville', function () {
            if (cp !== "" || ville !== "") {
                $jq(this).val("");
                cp = "";
                ville = "";
            }
        })

        // gestion de l'animation au click des "etoiles" de notation
        .on('click touchstart', '.star', function (event) {
            if (flagTouch[2]) {
                return false;
            }
            if (!flagTouch[2] && event.type === "touchstart") {
                flagTouch[2] = true;
                setTimeout(function () {
                    flagTouch[2] = false;
                }, 310);
            }
            var container = $jq(this);

            if ($jq(this).parents(".tooltip-inner").length === 0) {
                while (!container.hasClass('star-container') && !container.hasClass('main_estimation_container')) {
                    container = container.parent();
                }
                container.removeClass('one two three four').addClass(this.className.replace(/(star|\s|selected|adjust-width)/g, ""))

                    // on simule le clic pour enlever les envetuel message d'erreur
                    .trigger('click');
            }

            // prevent propagation on the click event
            return false;
        })

        // transfer du click du container au "etoiles"
        .on('click touchstart', '.star-container > div:not(.error-message)', function (event) {
            if (flagTouch[3]) {
                return false;
            }
            if (!flagTouch[3] && event.type === "touchstart") {
                flagTouch[3] = true;
                setTimeout(function () {
                    flagTouch[3] = false;
                }, 310);
            }
            if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
                $jq(this).find('.star').trigger('touchstart');
            } else {
                $jq(this).find('.star').trigger('click');
            }
        })

        // gestion de l'animation au hover des "etoiles" de notation
        .on('mouseenter mouseleave', '.star-container > div:not(.error-message)', function (event) {
            if (!isMobile) {
                if ($jq(this).parents(".tooltip-inner").length === 0 && !navigator.userAgent.match(/(iPod|iPhone|iPad)/))
                    if (event.type == "mouseover" || event.type == "mouseenter")
                        $jq(this).parent().addClass($jq(this).find('.star')[0].className.replace(/(star|\s|selected|adjust-width)/g, "") + "-hover");
                    else $jq(this).parent().removeClass($jq(this).find('.star')[0].className.replace(/(star|\s|selected|adjust-width)/g, "") + "-hover");
            }
        })

        // gestion affichage du tooltip
        .on('mouseenter', '.tooltip-booble > img', function () {
            $jq(this).parent().tooltip('show');
            if (isMobile)
                setTimeout(function () {
                    openTooltip = true;
                }, 300);
        })
        .on('mouseleave', '.tooltip-animation', function () {
            if (!isMobile)
                $jq("[data-toggle='tooltip']").tooltip('hide');
        })
        .on('mouseenter', '.star-container .star', function () {
            $jq(this).tooltip('show');
            if (isMobile)
                $jq("[data-toggle='tooltip']").tooltip('hide');
            setTimeout(function(){
                openTooltip = true;
            },300);
        })
        .on('mouseleave', '.star', function () {
            if (!isMobile) {
                var that = this;
                $jq(this).next().tooltip('hide');
                setTimeout(function () {
                    $jq(that).parents('.star-container').removeClass(that.className.replace(/(star|\s|selected|adjust-width)/g, "") + "-hover");
                }, 100);

            }
        })
        .on('click', function () {
            if (isMobile && openTooltip) {
                $jq("[data-toggle='tooltip']").tooltip('hide');
                openTooltip = false;
            }
        })

        //affichage de la popin de sauvegarde
        .on('click', '.save img, .save span', function () {

            var form = $jq('.activePage .stepForm').attr('name');

            if(isMobile){
                $jq('.save-message').show();
                $jq('.confirm-message, .save-error-message').hide();
                $jq('#popinSave .arrow').css({left: $jq(this).offset().left-10});
                $jq('#popinSave').removeClass('hidden');
                window.scrollBy(0, $jq('#popinSave').height()+20);
            }else {
                $jq('#modalSave').modal('show');
            }

            if(form) {
                trackingLoadSave(form);
            }

            $jq('[name=EmailSave]').val(formData.EmailInternaute);

        })

        // appel au ws de sauvegarde et action splementaire
        .on('click', '#modalSave .btn, #popinSave .btn', function () {
            var form = $jq('.activePage .stepForm').attr('name');
            var container = $jq(this);
            while(container[0].id.indexOf('Save') < 0){
                container = container.parent();
            }
            var input = container.find('input');
            if (!flagSauvegarde && validateForm(validationRules, typeBien, input)) {
                flagSauvegarde = true;
                container.find('.action').addClass('hide-action');
                var etape = parseInt($jq('.activePage')[0].className.replace(/(page|activePage|house|appart|\s)*/g, ""));
                var email = input.val();
                var data = validateForm(validationRules, typeBien, null, false);
                $jq.extend(formData, data);

                var url = config.server + (typeBien === 'house' ? config.sauvegardeMaison : config.sauvegardeAppart)
                $jq.ajax({
                    url: url,
                    contentType: "application/json",
                    dataType: "json",
                    type: "POST",
                    timeout: 20000,
                    data: JSON.stringify({
                        Estimation: formData,
                        EtapeFormulaire: etape,
                        EmailSauvegarde: email,
                        Type: config.type
                    }),
                    success: function (data) {
                        if (data.Sauvegarde === true && data.MessageErreur === "") {
                            if (isMobile) {
                                $jq('.save-message').fadeOut(function () {
                                    $jq('.confirm-message').fadeIn();
                                });
                            } else {
                                $jq('#modalSave').modal('hide');
                                $jq('#modalSaveConfirm').modal('show');
                            }
                            //console.log(document.location.origin + document.location.pathname + "?hashSauvegarde=" + data.HashSauvegarde + "&emailInternaute=" + email);
                            if (form) {
                                trackingConfirmSave(form, email);
                            }
                        } else {
                            if (isMobile) {
                                $jq('.save-message').fadeOut(function () {
                                    $jq('.save-error-message').fadeIn();
                                });
                            } else {
                                $jq('#modalSave').modal('hide');
                                $jq('#modalSaveError').modal('show');
                            }
                        }
                        flagSauvegarde = false;
                        container.find('.action').removeClass('hide-action');

                    },
                    error: function () {
                        flagSauvegarde = false;
                        container.find('.action').removeClass('hide-action');
                        alert('Impossible de contacter le serveur pour sauvegarder vos données');
                    }
                });
            }

        })

        //fermer la popin de sauvegarde
        .on('click', '#popinSave .close', function () {
            $jq('#popinSave').addClass('hidden');
        })
        //gestion de l'animation maison appart au survol du champs
        .on('mouseenter mouseleave', '.num-field', function () {
            if (!$jq(this).hasClass('num-none')) {
                var target = $jq('.' + typeBien + '-step2');
                target.toggleClass('hovered').toggleClass('hover-' + this.className.replace(/(num-|\s|field|tooltip-container)/g, ""));
            }
        })

        //gestion de l'animation maison appart au focus du champs
        .on('focus blur', '.num-field input[type=text]', function () {
            var that = $jq(this);
            while (!that.hasClass('num-field')) {
                that = $jq(that).parent();
            }
            if (!that.hasClass('num-none')) {
                var target = $jq('.' + typeBien + '-step2');
                target.toggleClass('focus-' + that[0].className.replace(/(num-|\s|field|tooltip-container)/g, ""));
            }
        })

        //reporter l'envent lors du sorvol d'un tooltip
        /*.on('mouseleave', '.num-field .tooltip', function(){
         var that = $jq(this).parent().parent()[0];
         if(!$jq(that).hasClass('num-none')){
         var target = $jq('.' + typeBien + '-step2');
         target.removeClass('hovered').removeClass('hover-' + that.className.replace(/(num-|\s|field|tooltip-container)/g,""));
         }
         })*/


        // validation à la sortie du champs pour mail
        .on('blur', "input[id^='email']", function () {
            validateForm(validationRules, typeBien, $jq(this), true, true);
        })
        // validation à la sortie du champs pour téléphone
        .on('blur', "input[id^='Tel']", function () {
            this.value = this.value.replace(/\s/g, '');
            this.value = this.value.replace(/\-/g, '');
            validateForm(validationRules, typeBien, $jq(this), true, true);
        })
        // forcer la validation quand on quite le focus d'un champs non téléphone et non mail
        .on('keyup', "input:not([id^='email']):not([id^='Tel'])", function () {
            validateForm(validationRules, typeBien, $jq(this), true, true);
        })

        .on('change', "#roomContainer input.labelRadio", function () {
            var id = $jq(this).attr('id');
            var room = $jq('label[for="' + id + '"]').parent();
            room.parent().find('.activeRoom').removeClass('activeRoom');
            room.addClass('activeRoom');
        })

        // affichage des champs de surface a l'etape 2
        .on('change', '.num-field input[type=radio]', function () {
            var that = $jq(this);
            while(!that.hasClass('num-field')){
                that = that.parent();
            }
            var inputContainer = that.find('.input');
            var input = inputContainer.find('input');
            inputContainer.toggleClass('hide');
            if(inputContainer.hasClass('hide')){
                input.attr('data-value', input.val());
                input.val("0");
            }else{
                input.val(input.attr('data-value'));
            }
        })

        // affichage des champs de stationnement a l'etape2 appart
        .on('change', '.statio select[name=stationnement]', function () {
            var val = $jq(this).val();
            $jq('.statio1, .statio2, .statio3').hide();
            for (var i = 1; i <= 3; i++) {
                if (i <= val) {
                    $jq('.statio' + i).show();
                } else {
                    $jq('.statio' + i + ' select').prop('selectedIndex', 0).change().next().find('.selectboxit-text').text('Sélectionnez');
                }
            }
            $jq(this).trigger("blur");
        })

        //compter le nombre de box
        .on('change', '.statio1 select,.statio2 select,.statio3 select', function () {
            var that = $jq(this);
            var next = that.val();
            var last = that.prop("last-value");
            that.prop("last-value", next);
            if (last !== "") {
                $jq('[name=' + last + ']').val($jq('[name=' + last + ']').val() - 1);
            }
            $jq('[name='+next+']').val(parseInt($jq('[name='+next+']').val())+1);
        })

        // mettre a jour l'email de contact lors de l'affichage de la page
        .on("display", '.contact', function () {
            if (typeof formData.EmailInternaute !== "undefined" && formData.EmailInternaute !== null && formData.EmailInternaute != "") {
                $jq('.sendEmail').text(formData.EmailInternaute);
                $jq('.mail-change input').val(formData.EmailInternaute);
            } else {
                $jq('.mail-no-change').fadeOut(100, function () {
                    $jq('.mail-change').fadeIn(100);
                });
            }

            if (formData.TypeBien) {
                trackingValidEstim(formData.TypeBien);
            }
        })

        .on("display", '.noestim', function () {
            $jq(this).find('[name=EmailInternaute]').val(formData.EmailInternaute);
            TrackingContactAgence = true;

            trackingFormNoEstim("init");
        })

        // mettre a jour l'email de contact lors de l'affichage de la page
        .on("display", '.contact-confirm', function (e, page) {
            $jq('.sendEmail').text(formData.EmailInternaute);
            var lien = $jq('.action.testingA .btn-success');
            lien.attr('data-href', lien.attr('data-href').replace('codeInsee=ci', formData.codeInsee > 0 ? ('codeInsee=' + formData.codeInsee) : "idpays=250"));
            $jq(this).find('.hide-' + page.name).hide();
        })

        //gestion du fond noir des modals (sinon il s'affiche par dessus la modal)
        .on('show.bs.modal', '.modal', function () {
            container.find('.modal-backdrop').addClass('in');
        })
        .on('hide.bs.modal', '.modal', function () {
            container.find('.modal-backdrop').removeClass('in');
        })

        // mettre les bouton en mode responsif si le texte depasse
        .on('display', '.activePage', function () {
            $jq(this).find('.btn.btn-success').each(function () {
                if ($jq(this).width() < $jq(this).find('span').width()) {
                    $jq(this).addClass('btn-responsive');
                } else {
                    $jq(this).removeClass('btn-responsive');
                }
            });
        })

        // adapter la hauteur du bouton piscine
        .on('display', '.house3', function () {
            if ($jq(this).find('[data-name=Tennis]').outerHeight() > 40) {
                $jq(this).find('[data-name=Piscine]').css({height: 50, 'line-height': '35px'});
            }
        })
        // afficher l'input de changement de mail
        .on("click", '.sendMailIco', function () {
            $jq('.mail-no-change').fadeOut(100, function () {
                $jq('.mail-change').fadeIn(100, function () {
                    $jq(this).find('input').focus();
                });
            });
        })

        // fermer le message d'erreur de la sauvegarde
        .on('click', '.load-error .close', function () {
            $jq('.load-error').fadeOut();
        })

        // simuler un click sur un lien (on le simule pour eviter le depart d'un tag omniture)
        .on('click', '.action.testingA .btn-success', function () {
            document.location.href = $jq(this).attr('data-href');
            return false;
        })
        // simuler un click sur un lien (on le simule pour eviter le depart d'un tag omniture)
        .on('select', '[name="SituationInternaute"]', function () {
            //console.log('a');

        })
    ;

};


/**
 * Cache la page courante et affiche la nouvelle
 * @param target  string "next" | "prev" | le nom de classe de la  page a afficher
 * @param typeBien si target == "next" | "prev" obligatoire string "house" | "appart"
 */
function movePage(target, typeBien){
    var current = $jq('.activePage');
    var next;
    var way = 1;
    var page = {};
    if(target === "next" || target === "prev") {
        var className = current[0].className || "";
        if (target === "prev") way = -1;
        if(className.indexOf('contact') < 0 && className.indexOf('noestim') < 0)
            next = $jq('.' + typeBien + (parseInt(current[0].className.substr(current[0].className.indexOf(typeBien) + typeBien.length, typeBien.length + 1)) + way));
        else{
            if(target === "next"){
                page.name = current[0].className.replace(/(activePage|page|\s)/g, "");
                next = $jq('.' + page.name + "-confirm");
            }
            else {
                next = $jq('.' + typeBien + "3");
            }
        }
    }else{
        next = $jq('.' + target);
    }
    if(current.length > 0)
        current.fadeOut(function () {
            current.removeClass('activePage');
            next.fadeIn(function () {
                next.trigger('display', page);
            }).addClass('activePage');
            window.scrollTo(next.offset().top, 0);
            $jq('#popinSave').addClass('hidden');
        });
    else  next.fadeIn(function(){
        next.trigger('display', page);
    }).addClass('activePage');
    $jq('#popinSave').addClass('hidden');
}

/**
 * valide le formulaire present sur la page active en fonction des validationRules ou renvoie la liste des champs valide
 * @params Object validationRules un objet contenant toutes les regles de validations
 * @params String typeBien le type de bien pour cible la bonne balise
 * @params Object input la liste des input a valider, si null, on selection les input sur la page courante par défaut
 * @params Boolean error gere l'affichage des erreurs (default = true)
 * @params Boolean skipRequired empeche la validation de required (pour les validation en temps reel) (default = false )
 * @returns {boolean} ou Object si on affiche pas les erreurs
 */
function validateForm(validationRules, typeBien, input, error, skipRequired){
    if(typeof input === "undefined" || input === null) {
        input = $jq('.activePage input:not(.disabled), .activePage select:not(.disabled)');
    }
    if(typeof error === "undefined"){
        error = true;
    }
    if(typeof skipRequired === "undefined"){
        skipRequired = false;
    }
    var retour = {};
    var valid = true;

    input.each(function(){
        var name = $jq(this).attr('name');
        var rules = validationRules[name];
        var value = $jq(this).val();
        if(value === "placeholder" && input.find('option') > 0){
            value="";
        }
        if(value == parseInt(value) && value.length == (parseInt(value)+"").length){
            value = parseInt(value);
        }
        var target, compare ;
        if(typeof rules !== "undefined"){
            if(typeof rules.target !== "undefined"){
                if(typeof rules.target === "object" ){
                    target = $jq('.activePage ' + rules.target[typeBien]);
                }else{
                    target = $jq('.activePage ' + rules.target);
                }
            }else{
                target = $jq(this).parent();
            }
            if(error) target.removeClass('has-error').find('> .error-message').remove();
            if($jq(this).attr('type') === "radio"){
                if(target.hasClass('has-error')){
                    return true;
                }
                value = $jq('.activePage [name=' + $jq(this).attr('name') + ']:checked').val();
            }
            if(typeof rules.condition !== "undefined"){
                var champs = $jq('.activePage form [name='+ rules.condition.champs +']');
                if(champs.first().attr('type') === "radio"){
                    champs = $jq('.activePage form [name='+ rules.condition.champs +']:checked');
                }
                var valtest = champs.val();

                if(
                    (valtest !== "" && valtest !== null) &&
                    (
                        (rules.condition.operator === "equals" && valtest == rules.condition.value) ||
                        (rules.condition.operator === "notequals" && valtest != rules.condition.value) ||
                        (rules.condition.operator === "lessthan" && valtest < rules.condition.value) ||
                        (rules.condition.operator === "morethan" && valtest > rules.condition.value) ||
                        (rules.condition.operator === "lessthanequal" && valtest <= rules.condition.value) ||
                        (rules.condition.operator === "morethanequal" && valtest >= rules.condition.value)
                    )
                ){
                    rules = rules.condition.validation;
                }else{
                    return true;
                }
            }

            if (!skipRequired && typeof rules.required !== "undefined" && (value === null || $jq.trim(value) === "" ) ){
                valid = false;
                if(error) target.addClass('has-error').append('<div class="error-message">'+rules.required+'</div>');
                return true;
            }

            else if (!skipRequired && typeof rules.equals !== "undefined" && value !== rules.equals.value  ){
                valid = false;
                if(error) target.addClass('has-error').append('<div class="error-message">'+rules.equals.message+'</div>');
                return true;
            }

            else if (!skipRequired && typeof rules.notequals !== "undefined" && value === rules.notequals.value  ){
                valid = false;
                if(error) target.addClass('has-error').append('<div class="error-message">'+rules.notequals.message+'</div>');
                return true;
            }

            else if ((!skipRequired || value !== "") && typeof rules.regexp !== "undefined" && !rules.regexp.value.test(value)){
                valid = false;
                if(error) target.addClass('has-error').append('<div class="error-message">'+rules.regexp.message+'</div>');
                return true;
            }

            else if (typeof rules.max !== "undefined" && ((typeof rules.max[typeBien] !== "undefined" && rules.max[typeBien].value < value) || rules.max.value < value)){
                valid = false;
                if(error) target.addClass('has-error').append('<div class="error-message">'+ (typeof rules.max[typeBien] !== "undefined"?rules.max[typeBien].message:rules.max.message)+'</div>');
                return true;
            }

            else if (typeof rules.min !== "undefined" && rules.min.value > value){
                valid = false;
                if(error) target.addClass('has-error').append('<div class="error-message">'+rules.min.message+'</div>');
                return true;
            }

            else if (typeof rules.lessthanequal !== "undefined"){
                compare = $jq('.activePage form [name='+ rules.lessthanequal.champs +']').val();
                if (compare !=="" && compare < value) {
                    valid = false;
                    if(error) target.addClass('has-error').append('<div class="error-message">' + rules.lessthanequal.message + '</div>');
                    return true;
                }
            }

            else if (typeof rules.morethanequal !== "undefined"){
                compare = $jq('.activePage form [name='+ rules.morethanequal.champs +']').val();
                if (compare !=="" && compare > value) {
                    valid = false;
                    if(error) target.addClass('has-error').append('<div class="error-message">' + rules.morethanequal.message + '</div>');
                    return true;
                }
            }

            else if (typeof rules.lessthan !== "undefined"){
                compare = $jq('.activePage form [name='+ rules.lessthan.champs +']').val();
                if (compare !=="" && compare <= value) {
                    valid = false;
                    if(error) target.addClass('has-error').append('<div class="error-message">' + rules.lessthan.message + '</div>');
                    return true;
                }
            }

            else if (typeof rules.morethan !== "undefined"){
                compare = $jq('.activePage form [name='+ rules.morethan.champs +']').val();
                if (compare !=="" && compare >= value) {
                    valid = false;
                    if(error) target.addClass('has-error').append('<div class="error-message">' + rules.morethan.message + '</div>');
                    return true;
                }
            }

            else if (typeof rules.synchro !== "undefined"){
                validateForm(validationRules, typeBien, $jq('.activePage form [name=' + rules.synchro.value + ']'), error, skipRequired);
            }
            if(!error){
                retour[name] = value;
            }
        }
    });

    if(error) {
        return valid;
    }else{
        return retour;
    }
}
/**
 * mettre un filtre opaque sur la page puis afficher un loader et l'enlever
 * @param container le container a masquer
 * @param action "begin"|"stop"
 */
function Loader(container, action){
    if(action === "begin"){
        container.find(' .overlay-action').show().find('.loader').show();
        container.find('.activePage .action').addClass('hide-action');
    }else{

        setTimeout(function() {
            container.find('.overlay-action').stop().hide().find('.loader').hide();
            container.find('.action.hide-action').delay(1000).removeClass('hide-action');
        },1000);
    }

}

/**
 * charger les données utilisateur
 * @param data les données ainserer dans la page
 * @param container le fomulaire dans lequel l'inserer
 * @return Object les données charges
 */
function loadData(data, container){

    data.Ville = data.Ville + " ("+ data.Cp + ")";
    var input;
    for (var index in data){
        input = container.find('[name=' + index + ']');
        if (data[index] !== null && data[index] !== "" && data[index] !== false) {
            if (input.length > 0 && input.attr('type') !== "radio") {
                input.val(data[index]);
                if (input.attr('type') === "hidden" && index.substr(0, 2) !== "Nb") {
                    container.find('[data-name=' + index + '][data-value=' + data[index] + ']')[0].click();
                }
                else if (input.attr('type') === "hidden" && index.substr(0, 2) === "Nb") {
                    if (input.val() > 0) {
                        $jq('select[name=stationnement]').val($jq('[name=stationnement]').val() - 0 + (input.val() - 0)).trigger('change');

                        var value = input.val();
                        var statio1 = $jq('select[name=stationnement1]');
                        var statio2 = $jq('select[name=stationnement2]');
                        var statio3 = $jq('select[name=stationnement3]');
                        input.val(0);
                        if ((statio1.val() == null || statio1.val().substr(0, 2) !== 'Nb') && value > 0) {
                            statio1.val(index).trigger('change');
                            value--;
                        }
                        if ((statio2.val() == null || statio2.val().substr(0, 2) !== 'Nb') && value > 0) {
                            statio2.val(index).trigger('change');
                            value--;
                        }
                        if ((statio3.val() == null || statio3.val().substr(0, 2) !== 'Nb') && value > 0) {
                            statio3.val(index).trigger('change');
                            value--;
                        }
                    }
                } else if (input[0].tagName == "SELECT") {
                    input.trigger('change');
                }
            } else if (input.attr('type') === "radio") {
                input.val([data[index]]);
            }
            if (index.indexOf('Surface') >= 0 && $jq('[name=' + index.replace('Surface', "").toLowerCase() + ']').length > 0 && data[index] > 0) {
                var input2 = $jq('.' + (data.TypeBien == 1 ? "appart" : "house") + '2 [name=' + index.replace('Surface', "").toLowerCase() + ']');
                input2.val(['oui']).first().trigger('change');
                input.val(data[index]);
            }
        }
    }
    data.Ville = data.Ville.substr(0, data.Ville.length -8);
    if(typeof data.Step === "undefined"){
        data.Step = "0";
    }
    return data;
}

/**
 * remplir les tooltip d'ai de de type legende du bareme etoile
 * @param container le container du tooltip
 * @param threeStar boolean bareme a 3 etoile ?
 */
function starTooltip(container, threeStar, etat, etatAppart){
    if (typeof threeStar !== "boolean"){
        threeStar = false;
    }
    if (typeof etat !== "boolean"){
        etat = false;
    }
    if (typeof etatAppart !== "boolean"){
        etat = false;
    }

    var str ="<div class='"+(threeStar?'three-star-tooltip':'') + "'>";
    str += "<h4>Sélectionnez l'étoile correspondante : <button type='button' class='close hidden-sm hidden-lg hidden-md'><img src='" + path + "/common/grey-cross.png'></button></h4>";
    if(!threeStar) {
        str += "<div class='tooltip-star-align'>"+(etat?'A rénover':'Faible')+"</div>";
        str += "<div class='col-xs-10 star-container one'>";
        str += "<div class='col-xs-3'>";
        str += "<div class='star one'>";
        str += "<span class='glyphicon glyphicon-star'></span>";
        str += "</div>";
        str += "</div>";
        str += "<div class='col-xs-3'>";
        str += "<div class='star two' >";
        str += "<span class='glyphicon glyphicon-star'></span>";
        str += "</div>";
        str += "</div>";
        str += "<div class='col-xs-3'>";
        str += "<div class='star three'>";
        str += "<span class='glyphicon glyphicon-star'></span>";
        str += "</div>";
        str += "</div>";
        str += "<div class='col-xs-3'>";
        str += "<div class='star four'>";
        str += "<span class='glyphicon glyphicon-star'></span>";
        str += "</div>";
        str += "</div>";
        str += "</div>";
    }
    str +="<div class='tooltip-star-align'>"+(etat?'A rénover':'Moyen')+"</div>";
    str +="<div class=' star-container "+(threeStar?'col-xs-8 three-star-container one':'col-xs-10 two')+"'>";
    str +=    "<div class='"+(threeStar?'col-xs-4':'col-xs-3')+"'>";
    str +=        "<div class='star one'>";
    str +=            "<span class='glyphicon glyphicon-star'></span>";
    str +=        "</div>";
    str +=    "</div>";
    str +=    "<div class='"+(threeStar?'col-xs-4':'col-xs-3')+"'>";
    str +=        "<div class='star two' >";
    str +=            "<span class='glyphicon glyphicon-star'></span>";
    str +=        "</div>";
    str +=    "</div>";
    str +=    "<div class='"+(threeStar?'col-xs-4':'col-xs-3')+"'>";
    str +=       "<div class='star three'>";
    str +=            "<span class='glyphicon glyphicon-star'></span>";
    str +=        "</div>";
    str +=    "</div>";
    if(!threeStar) {
        str += "<div class='col-xs-3'>";
        str += "<div class='star four'>";
        str += "<span class='glyphicon glyphicon-star'></span>";
        str += "</div>";
        str += "</div>";
    }
    str +="</div>";
    str +="<div class='tooltip-star-align" + (etatAppart?' appart-tooltip':'') + "'>"+(etat?(!etatAppart?'Etat courant':'Etat d\'usage courant'):'Bon')+"</div>";
    str +="<div class='star-container "+(threeStar?'col-xs-8 three-star-container two':'col-xs-10 three')+"'>";
    str +=    "<div class='"+(threeStar?'col-xs-4':'col-xs-3')+"'>";
    str +=         "<div class='star one'>";
    str +=            "<span class='glyphicon glyphicon-star'></span>";
    str +=         "</div>";
    str +=    "</div>";
    str +=    "<div class='"+(threeStar?'col-xs-4':'col-xs-3')+"'>";
    str +=        "<div class='star two' >";
    str +=             "<span class='glyphicon glyphicon-star'></span>";
    str +=        "</div>";
    str +=    "</div>";
    str +=    "<div class='"+(threeStar?'col-xs-4':'col-xs-3')+"'>";
    str +=       "<div class='star three'>";
    str +=            "<span class='glyphicon glyphicon-star'></span>";
    str +=        "</div>";
    str +=    "</div>";
    if(!threeStar) {
        str += "<div class='col-xs-3'>";
        str += "<div class='star four'>";
        str += "<span class='glyphicon glyphicon-star'></span>";
        str += "</div>";
        str += "</div>";
    }
    str +="</div>";
    str +="<div class='tooltip-star-align" + (etatAppart?' appart-tooltip-mobile':'') + "'>"+(etat?(!etatAppart?'Très bon état':'Bien entretenu'):'Très bon')+"</div>";
    str +="<div class='star-container "+(threeStar?'col-xs-8 three-star-container three':' col-xs-10 four')+"'>";
    str +=    "<div class='"+(threeStar?'col-xs-4':'col-xs-3')+"'>";
    str +=        "<div class='star one'>";
    str +=           "<span class='glyphicon glyphicon-star'></span>";
    str +=        "</div>";
    str +=    "</div>";
    str +=   "<div class='"+(threeStar?'col-xs-4':'col-xs-3')+"'>";
    str +=        "<div class='star two' >";
    str +=            "<span class='glyphicon glyphicon-star'></span>";
    str +=        "</div>";
    str +=    "</div>";
    str +=    "<div class='"+(threeStar?'col-xs-4':'col-xs-3')+"'>";
    str +=        "<div class='star three'>";
    str +=            "<span class='glyphicon glyphicon-star'></span>";
    str +=        "</div>";
    str +=    "</div>";
    if(!threeStar) {
        str += "<div class='col-xs-3'>";
        str += "<div class='star four'>";
        str += "<span class='glyphicon glyphicon-star'></span>";
        str += "</div>";
        str += "</div>";
    }
    str +="</div>";
    str +="</div>";


    $jq(container).tooltip('destroy').attr('title', str).tooltip();
}
/**
 * transforme la page en page d'erreur
 * @param type string 'timeout' | 'error' savoir quel text afficher
 * @param container object  le container qui servira de balise
 * @param isMobile bool est on sur un mobile
 */
function displayError(type, container, isMobile){
    var message = "";
    if(type === "timeout"){
        message = '<p>Notre serveur ne répond plus.</p><span>Nous vous prions de nous excuser pour la gêne occasionnée.<br>Veuillez tenter de recharger la page dans quelques minutes.</span></span>';
    }else{
        message = '<p>Une erreur interne est survenue.</p><span>Nous vous prions de nous excuser pour la gêne occasionnée.<br>Veuillez tenter de recharger la page dans quelques minutes.</span></span>';
    }
    container.empty().addClass('error-page').append('<img class="error-img" src="' + path +'/common/page-error.png"><div class="mask hidden-sm hidden-ls hidden-md"></div>').append(message);
    if(isMobile){
        var right = 555 + $jq(window).width()/2 - 971;
        if(right < 0){
            $jq('.error-img').css({right : right});
        }
    }
}

/**
 * cherche une ville a l'aide d'un nom et ou d'un code postal, et retour les valeur uniquement si une ville unique est trouvé
 * @param codepostaldata string le codepostal a recherche
 * @param villedata string la ville a rechercher
 * @param config object la config pour l'adresse du ws d'autocomplete
 * @returns {{cp: string, ville: string, validata: string, ci: string}}
 * @constructor
 */

function LoadCity(codepostaldata, villedata, config){
    var ret = {"cp":"","ville":"","validata":"","ci":""};
    if(codepostaldata !== "" && codepostaldata.length == 5) {
        $jq.ajax({
            url: config.autocomplete,
            type: "GET",
            data: {term: codepostaldata },
            async: false,
            success: function(data){
                for (i in data.listLocation){
                    if(data.listLocation.length === 1 || (villedata !== "" && villedata == data.listLocation[i].value.substr(0, data.listLocation[i].value.length-8))){
                        ret.cp = data.listLocation[i].value.substr( data.listLocation[i].value.length-6, 5);
                        ret.ville = data.listLocation[i].value.substr(0, data.listLocation[i].value.length-8);
                        ret.validata =  data.listLocation[i].value;
                        ret.ci = data.listLocation[i].code;
                        $jq('[name=Ville]').val(data.listLocation[i].value);
                    }
                }
            }

        });
    }
    if(villedata !== "" && codepostaldata === ""){
        $jq.ajax({
            url: config.autocomplete,
            type: "GET",
            data: {term: villedata },
            async: false,
            success: function(data){
                if(data.listLocation.length == 1){
                    ret.cp = data.listLocation[0].value.substr( data.listLocation[0].value.length-6, 5);
                    ret.ville = data.listLocation[0].value.substr(0, data.listLocation[0].value.length-8);
                    ret.validata =  data.listLocation[0].value;
                    ret.ci = data.listLocation[0].code;
                    $jq('[name=Ville]').val(data.listLocation[0].value);
                }
            },

        });
    }
    return ret;
}
/*
 /////////////////////////////////////////////////////////////
 file: trackingOmniture.js
 created by: Jordy GOMES - Octobre 2015
 /////////////////////////////////////////////////////////////
 */
var trackBU = "";
/**
 * Tracking au click sur les boutons appart et maison
 * @param typeBien string "house" | "appart"
 * @return void
 */
function trackingBtnChoice(typeBien) {

    // tracking bouton appartement
    if(typeBien === "appart"){
        SL_Omniture2.addToVars("pageName","Esti_Appart_HP",true,false);
        SL_Omniture2.addToVars("channel","LCI-Esti",true,false);
        SL_Omniture2.addToVars("prop1","LCI_Esti",true,false);
        SL_Omniture2.addToVars("prop11",trackBU,true,false);
        SL_Omniture2.addToVars("hier1","LCI_Esti",true,false);
        SL_Omniture2.addToVars("eVar52","Esti_Appart",true,false);
        SL_Omniture2.addToEvents("event23","events",false,true);
    }
    // tracking bouton maison
    else if(typeBien === "house"){
        SL_Omniture2.addToVars("pageName","Esti_Maison_HP",true,false);
        SL_Omniture2.addToVars("channel","LCI-Esti",true,false);
        SL_Omniture2.addToVars("prop1","LCI_Esti",true,false);
        SL_Omniture2.addToVars("prop11",trackBU,true,false);
        SL_Omniture2.addToVars("hier1","LCI_Esti",true,false);
        SL_Omniture2.addToVars("eVar52","Esti_Maison",true,false);
        SL_Omniture2.addToEvents("event23","events",false,true);
    }

}

/**
 * Tracking au chargement de la page
 * @return void
 */
function trackingOnLoad(BU) {
    var omniture_vars = {},
        pageName,
        channel,
        prop1,
        hier1,
        prop10,
        prop11;

    omniture_vars["pageName"] = "Esti_Home";
    omniture_vars["channel"]  = "LCI-Esti";
    omniture_vars["prop1"]    = "LCI_Esti";
    omniture_vars["hier1"]    = "LCI_Esti";
    omniture_vars["prop10"]   = "FR";
    omniture_vars["prop11"]   = BU;

    SL_Omniture2.setVars(omniture_vars, true);
    trackBU = BU;
}

/**
 * Tracking du formulaire pré-estimation
 * @param typeBien string "house" | "appart"
 * @return void
 */
function trackingPreEstimation(typeBien){

    // récupération et hashage en md5 du mail utilisateur, et des checkbox
    var email = md5($jq('#email').val()),
        checboxPartenaires = $jq('#optin_partener').is(':checked'),
        checkboxInfos = $jq('#optin_newsletter').is(':checked');


    //Suppression des events de l'étape précédente
    SL_Omniture2.addToEvents("","events",true,false);

    // tracking pré estimation appart
    if(typeBien === "appart"){
        SL_Omniture2.addToVars("pageName","Esti_Appart_1",true,false);
        SL_Omniture2.addToVars("eVar52","Esti_Appart",true,false);
    }
    // tracking pré estimation maison
    else if(typeBien === "house"){
        SL_Omniture2.addToVars("pageName","Esti_Maison_1",true,false);
        SL_Omniture2.addToVars("eVar52","Esti_Maison",true,false);
    }

    SL_Omniture2.addToVars("channel","LCI-Esti",true,false);
    SL_Omniture2.addToVars("prop1","LCI_Esti",true,false);
    SL_Omniture2.addToVars("prop11",trackBU,true,false);
    SL_Omniture2.addToVars("hier1","LCI_Esti",true,false);
    SL_Omniture2.addToVars("eVar5",email,true,false);
    SL_Omniture2.addToEvents("event24","events",false,true);

    if(checboxPartenaires === true){
        SL_Omniture2.addToEvents("event10,event81","events",true,false);
        SL_Omniture2.addToVars("eVar7","L142",true,true);
    }
    if(checkboxInfos === true){
        SL_Omniture2.addToEvents("event10,event13","events",true,false);
        SL_Omniture2.addToVars("eVar7","L141",true,true);
    }
}

/**
 * Tracking des formulaires StepForm
 * @param form string nom du formulaire validé
 * @return void
 */
function trackingStepForm(form,typeBien){

    var typeBien = typeBien,
        $form = $jq('form[name="contactAgence"]'),
        mail = md5($form.find('input[name=EmailInternaute]').val()),
        SelectSituation = $jq(".activePage select[name='SituationInternaute']").val(),
        SelectDelaiVente = $jq(".activePage select[name='DelaiVenteInternaute']").val();

    //Suppression des events de l'étape précédente
    SL_Omniture2.addToEvents("","events",true,false);
    SL_Omniture2.addToVars("prop11",trackBU,true,false);

    if(form === "appartStep1") {
        SL_Omniture2.addToVars("pageName","Esti_Appart_2",true,false);
        SL_Omniture2.addToVars("channel","LCI-Esti",true,false);
        SL_Omniture2.addToVars("prop1","LCI_Esti",true,false);
        SL_Omniture2.addToVars("hier1","LCI_Esti",true,false);
        SL_Omniture2.addToVars("eVar52","Esti_Appart",true,false);
        SL_Omniture2.addToEvents("event25","events",false,true);
    }
    else if(form === "houseStep1"){
        SL_Omniture2.addToVars("pageName","Esti_Maison_2",true,false);
        SL_Omniture2.addToVars("channel","LCI-Esti",true,false);
        SL_Omniture2.addToVars("prop1","LCI_Esti",true,false);
        SL_Omniture2.addToVars("hier1","LCI_Esti",true,false);
        SL_Omniture2.addToVars("eVar52","Esti_Maison",true,false);
        SL_Omniture2.addToEvents("event25","events",false,true);
    }

    if(form === "appartStep2") {
        SL_Omniture2.addToVars("pageName","Esti_Appart_3",true,false);
        SL_Omniture2.addToVars("channel","LCI-Esti",true,false);
        SL_Omniture2.addToVars("prop1","LCI_Esti",true,false);
        SL_Omniture2.addToVars("hier1","LCI_Esti",true,false);
        SL_Omniture2.addToVars("eVar52","Esti_Appart",true,false);
        SL_Omniture2.addToEvents("event27","events",false,true);
    }
    else if(form === "houseStep2"){
        SL_Omniture2.addToVars("pageName","Esti_Maison_3",true,false);
        SL_Omniture2.addToVars("channel","LCI-Esti",true,false);
        SL_Omniture2.addToVars("prop1","LCI_Esti",true,false);
        SL_Omniture2.addToVars("hier1","LCI_Esti",true,false);
        SL_Omniture2.addToVars("eVar52","Esti_Maison",true,false);
        SL_Omniture2.addToEvents("event27","events",false,true);
    }

    if(form === "contactAgence"){

        var OK_Contact_Pro = $jq('[data-name=ContactAgence][data-value=true]'),
            KO_Contact_Pro = $jq('[data-name=ContactAgence][data-value=false]'),
            evar73 = "";

        if(OK_Contact_Pro.hasClass('selected')){
            evar73 = "OK_Contact_Pro";
        }
        else if (KO_Contact_Pro.hasClass('selected')){
            evar73 = "KO_Contact_Pro";
        }

        if(typeBien == "house"){
            SL_Omniture2.addToVars("pageName","Esti_Maison_5",true,false);
            SL_Omniture2.addToEvents("event32","events",true,false);
            SL_Omniture2.addToVars("eVar73",evar73,true,false);
            SL_Omniture2.addToVars("eVar74",SelectSituation,true,false);
            SL_Omniture2.addToVars("eVar75",SelectDelaiVente,true,false);
            SL_Omniture2.addToVars("eVar52", "Esti_Maison",true,false);

            if(mail) {
                SL_Omniture2.addToVars("eVar5",mail,true,false);
            }
        }
        else if(typeBien == "appart"){
            SL_Omniture2.addToVars("pageName","Esti_Appart_5",true,false);
            SL_Omniture2.addToEvents("event32","events",true,false);
            SL_Omniture2.addToVars("eVar73",evar73,true,false);
            SL_Omniture2.addToVars("eVar74",SelectSituation,true,false);
            SL_Omniture2.addToVars("eVar75",SelectDelaiVente,true,false);
            SL_Omniture2.addToVars("eVar52", "Esti_Appart",true,false);

            if(mail) {
                SL_Omniture2.addToVars("eVar5",mail,true,false);
            }
        }

        SL_Omniture2.addToVars("prop1", "LCI_Esti",true,false);
        SL_Omniture2.addToVars("prop11",trackBU,true,false);
        SL_Omniture2.addToVars("hier1", "LCI_Esti",true,true);

    }

}

/**
 * Tracking à l'ouverture de la sauvegarde
 * @param form string nom du formulaire sauvegardé
 * @return void
 */
function trackingLoadSave(form){

    var step = form.substring(form.length - 1);

    SL_Omniture2.addToEvents("event9","events",true,false);
    SL_Omniture2.addToVars("prop11",trackBU,true,false);
    SL_Omniture2.addToVars("eVar7","LCI_Esti_" + step,true,false);

    if(form.indexOf("appart") !== -1) {
        SL_Omniture2.addToVars("eVar52","Esti_Appart",true,true);
    }
    else if(form.indexOf("house") !== -1){
        SL_Omniture2.addToVars("eVar52","Esti_Maison",true,true);
    }
}

/**
 * Tracking à la confirmation de la sauvegarde
 * @param form string nom du formulaire sauvegardé
 * @param email string email de l'utilisateur
 * @return void
 */
function trackingConfirmSave(form, email){

    var step = form.substring(form.length - 1),
        mail = md5(email);

    SL_Omniture2.addToEvents("event10","events",true,false);
    SL_Omniture2.addToVars("prop11",trackBU,true,false);

    if(form.indexOf("appart") !== -1) {
        SL_Omniture2.addToVars("eVar52","Esti_Appart",true,false);
    }
    else if(form.indexOf("house") !== -1){
        SL_Omniture2.addToVars("eVar52","Esti_Maison",true,false);
    }

    SL_Omniture2.addToVars("eVar5",mail,true,false);
    SL_Omniture2.addToVars("eVar7","LCI_Esti_" + step,true,true);

}

/**
 * Tracking à l'apparition du formulaire de contact agence
 * @param state string "init" | "valid"
 * @return void
 */
function trackingFormNoEstim(state){

    var $form = $jq('form[name="contactAgence"]'),
        mail = md5($form.find('input[name=EmailInternaute]').val()),
        SelectSituation = $jq(".activePage select[name='SituationInternaute']").val(),
        SelectDelaiVente = $jq(".activePage select[name='DelaiVenteInternaute']").val();

    if(state == "init") {
        SL_Omniture2.addToVars("pageName","Esti_Contact_Expert_1",true,false);
        SL_Omniture2.addToEvents("event23","events",true,false);
    }
    else if(state == "valid") {
        SL_Omniture2.addToVars("pageName","Esti_Contact_Expert_3",true,false);
        SL_Omniture2.addToEvents("event32","events",true,false);

        SL_Omniture2.addToVars("eVar74",SelectSituation,true,false);
        SL_Omniture2.addToVars("eVar75",SelectDelaiVente,true,false);

        if(mail) {
            SL_Omniture2.addToVars("eVar5",mail,true,false);
        }
    }

    SL_Omniture2.addToVars("prop1", "LCI_Esti",true,false);
    SL_Omniture2.addToVars("prop11",trackBU,true,false);
    SL_Omniture2.addToVars("hier1", "LCI_Esti",true,false);
    SL_Omniture2.addToVars("prop2", "LCI_Esti_Expert",true,false);
    SL_Omniture2.addToVars("hier2", "LCI_Esti_Expert",true,false);
    SL_Omniture2.addToVars("eVar52", "Esti_Expert",true,true);

}

/**
 * Tracking à la validation du formulaire d'estimation
 * @param typeBien int '1' => appart | '2' => maison
 * @return void
 */
function trackingValidEstim(typeBien){

    //Suppression des events de l'étape précédente
    SL_Omniture2.addToEvents("","events",true,false);
    SL_Omniture2.addToVars("prop11",trackBU,true,false);

    if(typeBien === 1) {
        SL_Omniture2.addToVars("pageName", "Esti_Appart_4", true, false);
        SL_Omniture2.addToVars("channel", "LCI-Esti", true, false);
        SL_Omniture2.addToVars("prop1", "LCI_Esti", true, false);
        SL_Omniture2.addToVars("hier1", "LCI_Esti", true, false);
        SL_Omniture2.addToVars("eVar52", "Esti_Appart", true, false);
        SL_Omniture2.addToEvents("event28", "events", false, true);
    }
    else if(typeBien === 2) {
        SL_Omniture2.addToVars("pageName", "Esti_Maison_4", true, false);
        SL_Omniture2.addToVars("channel", "LCI-Esti", true, false);
        SL_Omniture2.addToVars("prop1", "LCI_Esti", true, false);
        SL_Omniture2.addToVars("hier1", "LCI_Esti", true, false);
        SL_Omniture2.addToVars("eVar52", "Esti_Maison", true, false);
        SL_Omniture2.addToEvents("event28", "events", false, true);
    }

}
function md5cycle(x, k) {
    var a = x[0], b = x[1], c = x[2], d = x[3];

    a = ff(a, b, c, d, k[0], 7, -680876936);
    d = ff(d, a, b, c, k[1], 12, -389564586);
    c = ff(c, d, a, b, k[2], 17,  606105819);
    b = ff(b, c, d, a, k[3], 22, -1044525330);
    a = ff(a, b, c, d, k[4], 7, -176418897);
    d = ff(d, a, b, c, k[5], 12,  1200080426);
    c = ff(c, d, a, b, k[6], 17, -1473231341);
    b = ff(b, c, d, a, k[7], 22, -45705983);
    a = ff(a, b, c, d, k[8], 7,  1770035416);
    d = ff(d, a, b, c, k[9], 12, -1958414417);
    c = ff(c, d, a, b, k[10], 17, -42063);
    b = ff(b, c, d, a, k[11], 22, -1990404162);
    a = ff(a, b, c, d, k[12], 7,  1804603682);
    d = ff(d, a, b, c, k[13], 12, -40341101);
    c = ff(c, d, a, b, k[14], 17, -1502002290);
    b = ff(b, c, d, a, k[15], 22,  1236535329);

    a = gg(a, b, c, d, k[1], 5, -165796510);
    d = gg(d, a, b, c, k[6], 9, -1069501632);
    c = gg(c, d, a, b, k[11], 14,  643717713);
    b = gg(b, c, d, a, k[0], 20, -373897302);
    a = gg(a, b, c, d, k[5], 5, -701558691);
    d = gg(d, a, b, c, k[10], 9,  38016083);
    c = gg(c, d, a, b, k[15], 14, -660478335);
    b = gg(b, c, d, a, k[4], 20, -405537848);
    a = gg(a, b, c, d, k[9], 5,  568446438);
    d = gg(d, a, b, c, k[14], 9, -1019803690);
    c = gg(c, d, a, b, k[3], 14, -187363961);
    b = gg(b, c, d, a, k[8], 20,  1163531501);
    a = gg(a, b, c, d, k[13], 5, -1444681467);
    d = gg(d, a, b, c, k[2], 9, -51403784);
    c = gg(c, d, a, b, k[7], 14,  1735328473);
    b = gg(b, c, d, a, k[12], 20, -1926607734);

    a = hh(a, b, c, d, k[5], 4, -378558);
    d = hh(d, a, b, c, k[8], 11, -2022574463);
    c = hh(c, d, a, b, k[11], 16,  1839030562);
    b = hh(b, c, d, a, k[14], 23, -35309556);
    a = hh(a, b, c, d, k[1], 4, -1530992060);
    d = hh(d, a, b, c, k[4], 11,  1272893353);
    c = hh(c, d, a, b, k[7], 16, -155497632);
    b = hh(b, c, d, a, k[10], 23, -1094730640);
    a = hh(a, b, c, d, k[13], 4,  681279174);
    d = hh(d, a, b, c, k[0], 11, -358537222);
    c = hh(c, d, a, b, k[3], 16, -722521979);
    b = hh(b, c, d, a, k[6], 23,  76029189);
    a = hh(a, b, c, d, k[9], 4, -640364487);
    d = hh(d, a, b, c, k[12], 11, -421815835);
    c = hh(c, d, a, b, k[15], 16,  530742520);
    b = hh(b, c, d, a, k[2], 23, -995338651);

    a = ii(a, b, c, d, k[0], 6, -198630844);
    d = ii(d, a, b, c, k[7], 10,  1126891415);
    c = ii(c, d, a, b, k[14], 15, -1416354905);
    b = ii(b, c, d, a, k[5], 21, -57434055);
    a = ii(a, b, c, d, k[12], 6,  1700485571);
    d = ii(d, a, b, c, k[3], 10, -1894986606);
    c = ii(c, d, a, b, k[10], 15, -1051523);
    b = ii(b, c, d, a, k[1], 21, -2054922799);
    a = ii(a, b, c, d, k[8], 6,  1873313359);
    d = ii(d, a, b, c, k[15], 10, -30611744);
    c = ii(c, d, a, b, k[6], 15, -1560198380);
    b = ii(b, c, d, a, k[13], 21,  1309151649);
    a = ii(a, b, c, d, k[4], 6, -145523070);
    d = ii(d, a, b, c, k[11], 10, -1120210379);
    c = ii(c, d, a, b, k[2], 15,  718787259);
    b = ii(b, c, d, a, k[9], 21, -343485551);

    x[0] = add32(a, x[0]);
    x[1] = add32(b, x[1]);
    x[2] = add32(c, x[2]);
    x[3] = add32(d, x[3]);

}

function cmn(q, a, b, x, s, t) {
    a = add32(add32(a, q), add32(x, t));
    return add32((a << s) | (a >>> (32 - s)), b);
}

function ff(a, b, c, d, x, s, t) {
    return cmn((b & c) | ((~b) & d), a, b, x, s, t);
}

function gg(a, b, c, d, x, s, t) {
    return cmn((b & d) | (c & (~d)), a, b, x, s, t);
}

function hh(a, b, c, d, x, s, t) {
    return cmn(b ^ c ^ d, a, b, x, s, t);
}

function ii(a, b, c, d, x, s, t) {
    return cmn(c ^ (b | (~d)), a, b, x, s, t);
}

function md51(s) {
    txt = '';
    var n = s.length,
        state = [1732584193, -271733879, -1732584194, 271733878], i;
    for (i=64; i<=s.length; i+=64) {
        md5cycle(state, md5blk(s.substring(i-64, i)));
    }
    s = s.substring(i-64);
    var tail = [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0];
    for (i=0; i<s.length; i++)
        tail[i>>2] |= s.charCodeAt(i) << ((i%4) << 3);
    tail[i>>2] |= 0x80 << ((i%4) << 3);
    if (i > 55) {
        md5cycle(state, tail);
        for (i=0; i<16; i++) tail[i] = 0;
    }
    tail[14] = n*8;
    md5cycle(state, tail);
    return state;
}

/* there needs to be support for Unicode here,
 * unless we pretend that we can redefine the MD-5
 * algorithm for multi-byte characters (perhaps
 * by adding every four 16-bit characters and
 * shortening the sum to 32 bits). Otherwise
 * I suggest performing MD-5 as if every character
 * was two bytes--e.g., 0040 0025 = @%--but then
 * how will an ordinary MD-5 sum be matched?
 * There is no way to standardize text to something
 * like UTF-8 before transformation; speed cost is
 * utterly prohibitive. The JavaScript standard
 * itself needs to look at this: it should start
 * providing access to strings as preformed UTF-8
 * 8-bit unsigned value arrays.
 */
function md5blk(s) { /* I figured global was faster.   */
    var md5blks = [], i; /* Andy King said do it this way. */
    for (i=0; i<64; i+=4) {
        md5blks[i>>2] = s.charCodeAt(i)
            + (s.charCodeAt(i+1) << 8)
            + (s.charCodeAt(i+2) << 16)
            + (s.charCodeAt(i+3) << 24);
    }
    return md5blks;
}

var hex_chr = '0123456789abcdef'.split('');

function rhex(n)
{
    var s='', j=0;
    for(; j<4; j++)
        s += hex_chr[(n >> (j * 8 + 4)) & 0x0F]
            + hex_chr[(n >> (j * 8)) & 0x0F];
    return s;
}

function hex(x) {
    for (var i=0; i<x.length; i++)
        x[i] = rhex(x[i]);
    return x.join('');
}

function md5(s) {
    return hex(md51(s));
}

/* this function is much faster,
 so if possible we use it. Some IEs
 are the only ones I know of that
 need the idiotic second function,
 generated by an if clause.  */

function add32(a, b) {
    return (a + b) & 0xFFFFFFFF;
}

if (md5('hello') != '5d41402abc4b2a76b9719d911017c592') {
    function add32(x, y) {
        var lsw = (x & 0xFFFF) + (y & 0xFFFF),
            msw = (x >> 16) + (y >> 16) + (lsw >> 16);
        return (msw << 16) | (lsw & 0xFFFF);
    }
}

/*
 /////////////////////////////////////////////////////////////
 file: /portail/sl/jslibrary/sl_omniture.js
 function: Object handling Omniture tracking
 returns: void
 created by: Tristan Blazquez - July 2012
 last modified: 22/11/2012
 by: Tristan Blazquez
 /////////////////////////////////////////////////////////////
 */
/*if ($j === undefined) {
 var $j = jQuery.noConflict();
 }*/

var SL_Omniture2 = (function(){

    var that = this;
    that.s_account = "";
    that.account = "selogerprod,selogerglobalprod"; // default value
    that.s = {};
    that.s_vars = {
        "pageName": "",
        "pageName": "",
        "server": "",
        "hier1": "",
        "products": "",
        "channel": "",
        "prop10": "fr",
        "events": "",
        "linkInternalFilters": "" // default value
    };
    that.keywords = ['seloge', 'se loge', 'celoger', 'ce loger']; // default value
    that.track_vars = "";
    // checks if the data has already been sent once to the servers. True if it hasn't.
    that.firstRequestCheck = true;

    // Create a fake object Console, useful for debug without hurting browsers without integrated debug
    if (!window.console) {
        var Console = function () {};
        Console.prototype.log = function () {};
        Console.prototype.info = function () {};
        Console.prototype.debug = function () {};
        console = new Console();
    }


    /*
     **************************************************************
     function: Init function to get the Omniture process started and build the s object
     returns: void
     parameters:
     account: { type: string | defaults: selogerprod,selogerglobalprod | function: this is the report suite name }
     vars: { type: object | defaults: undefined | function: this contains all the basic variables to allow Omniture to work, ex:
     - pageName
     - hier1
     - plugins
     - server }
     keywords: { type: array | defaults: undefined | function: array of keywords strings based on the domain we're on }
     this will change the default setting if there's one
     created by: Tristan Blazquez
     **************************************************************
     */
    var init = function(vars, keywords) {

        var report_suite = getReportSuite();

        if (report_suite) {
            that.account = report_suite;
        }

        if (keywords !== undefined && keywords) {
            that.keywords = keywords;
        }

        // Merge vars if param exists
        if (vars !== undefined) {
            setVars(vars);
        }

        // mise à jour de la variable globale s_account, qui sert à initialiser l'objet s
        window.s_account = that.account;

    };

    /*
     * Get the report suite attribute
     */
    var getReportSuite = function() {

        var list = document.getElementsByTagName('script'),
            script,
            data;

        if (typeof(Config) !== 'undefined' && Config.reportSuite) {
            data = Config.reportSuite;
        } else {
            for (var i = 0, n = list.length; i < n; ++i) {
                script = list[i];
                if (script.src.indexOf("estimationForm.js") !== -1 || script.src.indexOf("estimationForm.min.js") !== -1 || script.src.indexOf("sl_omniture.js") !== -1 || script.src.indexOf("omniture.production") !== -1 || script.src.indexOf("omniture_v2.production") !== -1) {
                    data = script.getAttribute("data-report-suite");
                    break;
                }
            }
        }

        return data;
    }

    /*
     **************************************************************
     function: returns the keywords for a given website
     returns: array
     parameters:
     created by: Tristan Blazquez
     **************************************************************
     */
    var getKeywords = function () {
        return that.keywords;
    };

    /*
     **************************************************************
     function: set the variables up if it hasn't been done before
     returns: void
     parameters:
     vars: { type: object | defaults: undefined | function: this contains all the basic variables to allow Omniture to work, ex:
     - pageName
     - hier1
     - plugins
     - server }
     send: { type: boolean | defaults: undefined | function: this determines if we send the data to Omniture after the update or not
     created by: Tristan Blazquez
     **************************************************************
     */
    var setVars = function (vars, send) {

        // Merge vars if param exists
        if (vars !== undefined) {
            mergeOptions(that.s_vars, vars);
        }

        // update s.linkInternalFilters depending on the server
        if (that.s_vars.linkInternalFilters !== "") {
            if (that.s_vars.linkInternalFilters.indexOf("http://") >= 0) {
                that.s_vars.linkInternalFilters = that.s_vars.linkInternalFilters.substr(6);
            }
            if (that.s_vars.linkInternalFilters.indexOf("www.") >= 0) {
                that.s_vars.linkInternalFilters = that.s_vars.linkInternalFilters.substr(3);
            }
            // gestion des sous domaines de SeLoger
            if (that.s_vars.linkInternalFilters.indexOf("seloger.com") >= 0) {
                that.s_vars.linkInternalFilters = "seloger.com";
            }
            if (that.s_vars.linkInternalFilters.indexOf("javascript:,") < 0) {
                that.s_vars.linkInternalFilters = "javascript:," + that.s_vars.linkInternalFilters;
            }
        }
        if (that.s_vars.server !== "" && that.s_vars.linkInternalFilters === "") {
            // gestion des sous domaines de SeLoger
            if (that.s_vars.server.indexOf("seloger.com") >= 0) {
                that.s_vars.linkInternalFilters = "javascript:,seloger.com,tel";
            } else {
                that.s_vars.linkInternalFilters = "javascript:," + that.s_vars.server + ",tel:";
            }
        }

        // send data if needed
        if (send !== undefined && send) {
            sendData();
        }
    };

    /*
     **************************************************************
     function: Init function to get the Omniture process started and build the s object
     returns: void
     parameters:
     omniture: { type: object | defaults: window.s | function: this is the original s object
     created by: Tristan Blazquez
     **************************************************************
     */
    var setS = function (omniture) {

        if (omniture !== undefined) {
            that.s = omniture;
        } else {
            console.log("s does not exist");
        }
    };

    /*
     **************************************************************
     function: similar to the jQuery extend method - does a shallow copy NOT a deep copy
     returns: object
     parameters:
     any number of parameters can be passed, result will be put into the first param. They need to be objects / arrays
     created by: http://stackoverflow.com/questions/11197247/javascript-equivalent-of-jquerys-extend-method
     **************************************************************
     */
    var extend = function () {
        var i = 1,
            key = null;

        for (i; i < arguments.length; i += 1) {
            for (key in arguments[i]) {
                if (arguments[i].hasOwnProperty(key)) {
                    arguments[0][key] = arguments[i][key];
                }
            }
        }
        return arguments[0];
    };

    /*
     **************************************************************
     function: merge options with s' options
     returns: void
     parameters:
     target_object: { type: object | defaults: undefined | function: this is the initial object we want to merge into }
     vars: { type: object | defaults: undefined | function: this contains all the basic variables to allow Omniture to work, ex:
     - pageName
     - hier1
     - plugins
     - server
     this will change the default setting if there's one }
     created by: Tristan Blazquez
     **************************************************************
     */
    var mergeOptions = function (target_object, vars) {
        var target = null;
        target = that.s_vars;

        if (target_object !== undefined && target_object) {
            target = target_object;
        }
        // gestion de la variable linkInternalFilters pour faciliter la maintenance en ajoutant la chaîne obligatoire "javascript:,"
        if (target.linkInternalFilters && target.linkInternalFilters.indexOf("javascript:,") < 0) {
            target.linkInternalFilters = "javascript:," + target.linkInternalFilters;
        }
        if (vars !== undefined && vars) {
            extend(target, vars);
        } else {
            console.log("vars parameter is missing");
        }
    };

    /*
     **************************************************************
     function: Send the data to Omniture servers
     returns: void
     parameters:
     string_param: { type: string | defaults: undefined | function: the string passed to s.tl() native method }
     is_refine: { type: boolean | defaults: undefined | function: indique si on est sur refine, gestion de cas particulière }
     created by: Tristan Blazquez
     **************************************************************
     */
    var sendData = function (string_param, is_refine) {

        var s_code = "",
            str_param = "";
        // set up s object variables
        mergeOptions(that.s, that.s_vars);

        if(is_refine) {
            cleanVars(["eVar7","eVar5"]);
        }

        // send data
        if (that.firstRequestCheck || is_refine) {

            s_code = that.s.t();
            if (s_code) {
                document.write(s_code); // native Omniture code
            }
            that.firstRequestCheck = false;
        } else {

            // checks if there's a param to pass to s.tl();
            if (string_param !== undefined) {
                str_param = string_param;
            }

            that.s.tl(this, "o", str_param);
        }
    };

    /*
     **************************************************************
     function: Add some data to the products variable
     returns: void
     parameters:
     data: { type: string | defaults: undefined | function: the data to add to the product variable }
     overwrite: { type: boolean | defaults: undefined / false | function: indicates if events needs to be rewritten or just concatenated }
     send: { type: boolean | defaults: undefined | function: this determines if we send the data to Omniture after the update or not
     created by: Tristan Blazquez
     **************************************************************
     */
    var addToProducts = function (data, overwrite, send) {
        var omniture = "";
        /*
         products model:
         ;idAnnonce#idTiers#idAgence;;;eventA|eventB|eventC;eVar56=Position dans la liste(ancien eVar35)-type de bien (ancien eVar41)-type de transaction (ancien eVar42)-CP (ancien eVar43)-id tiers (ancien eVar39)-Produit pub (eVar58)
         Pour les eVars concaténées, en cas de valeur manquante, c'est le caractère - qui sera utilisé.
         Pour la partie produit pub, on concatène toutes les références produits sans utiliser de caractère spécial
         Pour la page détail, comme il n'y a aucun intérêt à l'eVar35 (Position dans la liste), on démarre systématiquement par un "-"
         Exemples:   ;12356874#12547#857;;;event4=1;eVar56=1-2-2--1657-A
         ;12356874#12547#857;;;event4=1;eVar56=4---94785--ABC

         */
        omniture = that.s;

        if (data !== undefined) {
            // overwrite the products variable if needed
            if (overwrite !== undefined && overwrite) {
                if (omniture.linkTrackVars !== "") {
                    if (omniture.linkTrackVars.indexOf("products") < 0) {
                        omniture.linkTrackVars += ",products";
                    }
                } else {
                    omniture.linkTrackVars = "products";
                }
                that.s_vars.products = data;
            } else {
                if (that.s_vars.products !== "") {
                    that.s_vars.products += ",";
                }
                that.s_vars.products += data;
            }
        }

        // send data if needed
        if (send !== undefined && send) {
            sendData("products");
        }
    };

    /*
     **************************************************************
     function: Add some eVar to s object
     returns: void
     parameters:
     eVar_name: { type: string | defaults: undefined | function: holds the name of the eVar to be added }
     eVar_value: { type: string | defaults: undefined | function: the value of the eVar }
     overwrite: { type: boolean | defaults: undefined / false | function: indicates if events needs to be rewritten or just concatenated }
     send: { type: boolean | defaults: undefined / false | function: indicates if an update to the servers needs to be made }
     created by: Tristan Blazquez
     **************************************************************
     */
    var addToVars = function (eVar_name, eVar_value, overwrite, send) {

        var omniture = that.s || "";

        if (eVar_name !== undefined && eVar_value !== undefined) {

            if (overwrite !== undefined && overwrite) {
                that.s_vars[eVar_name] = eVar_value;
            } else {
                if (that.s_vars[eVar_name] !== undefined && that.s_vars[eVar_name].length > 0) {
                    that.s_vars[eVar_name] += ',' + eVar_value;
                } else {
                    that.s_vars[eVar_name] = eVar_value;
                }
            }

            // Said to omniture to update the eVar_name in the next send
            // If linkTrackVars is not empty we concatenate with the existing string
            // Else we create the string
            if(omniture.linkTrackVars && omniture.linkTrackVars.length !== 0) {

                if(that.s_vars[eVar_name] !== undefined) {

                    omniture.linkTrackVars += "," + eVar_name;
                }
            }
            else if(omniture.linkTrackVars){

                omniture.linkTrackVars = eVar_name;
            }
        }

        // send data if needed
        if (send) {
            sendData("products");
        }


    };

    /**
     * Clean vars
     * @param {Array} vars
     *
     */
    var cleanVars = function(vars) {

        for(var i = 0, n = vars.length; i < n; i++) {
            addToVars(vars[i], "", true);
            delete s[vars[i]];
        }

    }

    /*
     **************************************************************
     function: Add some data to the products variable
     returns: void
     parameters:
     events_names: { type: string | defaults: undefined | function: holds the name of all the events that are to be added }
     track_vars: { type: string | defaults: undefined | function: sends the string to be passed to s.trackVars, will default to "events" if undefined. Coma seperated values
     overwrite: { type: boolean | defaults: undefined / false | function: indicates if events needs to be rewritten or just concatenated }
     send: { type: boolean | defaults: undefined / false | function: indicates if an update to the servers needs to be made }
     created by: Tristan Blazquez
     **************************************************************
     */
    var addToEvents = function (events_names, track_vars, overwrite, send) {
        var omniture = "";

        omniture = that.s;

        if (overwrite !== undefined && overwrite) {
            that.s_vars.events = events_names;
            if (track_vars !== undefined && !that.firstRequestCheck) {
                omniture.linkTrackVars = track_vars;
                omniture.linkTrackEvents = that.s_vars.events;
            }
        } else {
            if (that.s_vars.events === "") {
                that.s_vars.events = events_names;
            } else if (that.s_vars.events.indexOf(events_names) < 0) {
                // if the event already exists within the string, don't add it twice
                that.s_vars.events += "," + events_names;
            }
            if (track_vars !== undefined && !that.firstRequestCheck) {
                omniture.linkTrackVars += "," + track_vars;
                omniture.linkTrackEvents = that.s_vars.events;
            }
        }

        // send data if needed
        if (send !== undefined && send) {
            sendData("events");
        }
    };

    /*
     **************************************************************
     function: tracks leads if needed
     returns: void
     parameters:
     lead_name: { type: string | defaults: empty string | function: the name of the lead to update
     lead_event: { type: string | defaults: empty string | function: the event tied to the lead
     lead_type: { type: string | defaults: "initié" ou "abouti" | function: le type de lead, servant de référence aux events 9 et 10 }
     send: { type: boolean | defaults: undefined | function: this determines if we send the data to Omniture after the update or not
     options: { type: object | defaults: undefined | function: optional object of options }
     created by: Tristan Blazquez
     **************************************************************
     */
    var setLeads = function (lead_name, lead_event, lead_type, send, options) {

        var track_vars = "eVar7,eVar5,prop11,events", // mise à jour auto de la prop11 qui n'est pas remontée par le s.tl()
            event_count = [],
            product_count = [],
            events = "",
            temp_product = [],
            i = 0,
            j = 0;

        events = lead_event;
        if (options !== undefined) {
            if (options.track_vars) {
                track_vars = options.track_vars;
            }
            // dans le cas où le lead est lié à un produit, on met à jour le s.products
            if (options.products) {
                track_vars += ",products";
                /*
                 if (options.products.indexOf(";;;") > -1) { // on ne garde que la ref produit
                 options.products = options.products.substr(0, options.products.indexOf(";;;"));
                 }
                 */
                product_count = options.products.split(';');
                for (i = 0; i < product_count.length; i += 1) {
                    if (product_count[i].indexOf("event") >= 0) {
                        temp_product = product_count[i].split('|');
                        for (j = 0; j < temp_product.length; j += 1) {
                            temp_product[j] = temp_product[j].substr(0, temp_product[j].indexOf("="));
                        }
                        product_count[i] = temp_product.join('|');
                    }
                }
                options.products = product_count.join(';');
                that.s_vars.products = options.products;
            }
            /*
             // gère les id annuaire des leads annuaire
             if (options.eVarXXX) {
             track_vars += ",eVarXXX";
             that.s_vars.eVarXXX = options.eVarXXX;
             }
             */
        }

        if (lead_type === "initie") {
            if (lead_name.indexOf(',') > -1) { // gestion du multi lead
                event_count = lead_name.split(',');
                for (i = 0; i < event_count.length; i += 1) {
                    if (events !== "") {
                        events += ",";
                    }
                    events += "event9";
                }
            } else {
                if (events !== "") {
                    events += ",";
                }
                events += "event9";
            }
        } else if (lead_type === "abouti" && events.indexOf("event10") < 0) {
            if (lead_name.indexOf(',') > -1) { // gestion du multi lead abouti (ex inscription ALI + contact agence)
                event_count = lead_name.split(',');
                for (i = 0; i < event_count.length; i += 1) {
                    if (events !== "") {
                        events += ",";
                    }
                    events += "event10";
                }
            } else {
                if (events !== "") {
                    events += ",";
                }
                events += "event10";
            }
        }

        if (lead_type === 'abouti') {

            //implementation of Ezakus tag which allows to recover conversions
            if (typeof SLG === 'object') {
                if (SLG && SLG.length !== 0) {
                    if (SLG.Ezakus && SLG.Ezakus.length !== 0) {
                        SLG.Ezakus.addImgTag({events: events});
                    }
                }
            }
        }
        if (options && !options.email && document.getElementById('lib_rech') !== null && document.getElementById('lib_rech').value) {
            var mail =  document.getElementById('lib_rech').value;
            var mail_md5 = md5(mail);

            options.email = mail_md5;
        }

        this.addToVars("eVar7", lead_name, true);

        if(options && options.email) {
            this.addToVars("eVar5", options.email, true);
        }
        else {
            this.addToVars("eVar5","", true);
        }
        this.addToEvents(events, track_vars, true);

        if (send !== undefined && send) {
            sendData(lead_name);
        }
    };

    /*
     **************************************************************
     function: handles leads by email
     returns: void
     parameters:
     lead_name: { type: string | defaults: some string | function: le nom du lead
     lead_type: { type: string | defaults: "initie" (IMPORTANT: PAS D'ACCENT POUR EVITER LES PROBLEMES DUS A l'ENCODAGE) ou "abouti" | function: le type de lead, servant de référence aux events 9 et 10 }
     options: { type: object | defaults: undefined | function: optional object of options }
     created by: Tristan Blazquez
     **************************************************************
     */
    var setLeadMail = function (lead_name, lead_type, options) {

        var events = "";

        if (lead_type === "abouti") {
            events += "event21";
        }

        if (lead_name) {
            this.setLeads(lead_name, events, lead_type, true, options);
        } else {
            console.log("Le nom du lead n'a pas été renseigné");
        }
    };

    /*
     **************************************************************
     function: handles leads by phone
     returns: void
     parameters:
     lead_name: { type: string | defaults: some string | function: le nom du lead
     lead_type: { type: string | defaults: "initié" ou "abouti" | function: le type de lead, servant de référence aux events 9 et 10 }
     options: { type: object | defaults: undefined | function: optional object of options }
     created by: Tristan Blazquez
     **************************************************************
     */
    var setLeadPhone = function (lead_name, lead_type, options) {
        var events = "";

        if (lead_type === "abouti") {
            events += "event22";
        }

        if (lead_name) {
            this.setLeads(lead_name, events, lead_type, true, options);
        } else {
            console.log("Le nom du lead n'a pas été renseigné");
        }
    };

    /*
     **************************************************************
     function: handles agency leads by email
     returns: void
     parameters:
     lead_name: { type: string | defaults: some string | function: le nom du lead
     lead_type: { type: string | defaults: "initie" (IMPORTANT: PAS D'ACCENT POUR EVITER LES PROBLEMES DUS A l'ENCODAGE) ou "abouti" | function: le type de lead, servant de référence aux events 9 et 10 }
     options: { type: object | defaults: undefined | function: optional object of options }
     created by: Tristan Blazquez
     **************************************************************
     */
    var setAgencyLeadMail = function (lead_name, lead_type, options) {

        var events = "";

        if (lead_type === "abouti") {
            events += "event64";
        }

        if (lead_name) {
            this.setLeads(lead_name, events, lead_type, true, options);
        } else {
            console.log("Le nom du lead n'a pas été renseigné");
        }
    };

    /*
     **************************************************************
     function: handles agency leads by phone
     returns: void
     parameters:
     lead_name: { type: string | defaults: some string | function: le nom du lead
     lead_type: { type: string | defaults: "initié" ou "abouti" | function: le type de lead, servant de référence aux events 9 et 10 }
     options: { type: object | defaults: undefined | function: optional object of options }
     created by: Tristan Blazquez
     **************************************************************
     */
    var setAgencyLeadPhone = function (lead_name, lead_type, options) {
        var events = "";

        if (lead_type === "abouti") {
            events += "event63";
        }

        if (lead_name) {
            this.setLeads(lead_name, events, lead_type, true, options);
        } else {
            console.log("Le nom du lead n'a pas été renseigné");
        }
    };

    /*
     **************************************************************
     function: handles ALI leads
     returns: void
     parameters:
     lead_name: { type: string | defaults: some string | function: le nom du lead
     lead_type: { type: string | defaults: "initie" (IMPORTANT: PAS D'ACCENT POUR EVITER LES PROBLEMES DUS A l'ENCODAGE) ou "abouti" | function: le type de lead, servant de référence aux events 9 et 10 }
     options: { type: object | defaults: undefined | function: optional object of options }
     created by: Tristan Blazquez
     **************************************************************
     */
    var setLeadALI = function (lead_name, lead_type, options) {
        var events = "";

        if (lead_type === "abouti") {
            events += "event12";
        }

        if (lead_name) {
            this.setLeads(lead_name, events, lead_type, true, options);
        } else {
            console.log("Le nom du lead n'a pas été renseigné");
        }
    };

    /*
     **************************************************************
     function: Init function to get the Omniture process started and build the s object
     returns: void
     parameters:
     lead_name: { type: string | defaults: some string | function: le nom du lead
     lead_type: { type: string | defaults: "initié" ou "abouti" | function: le type de lead, servant de référence aux events 9 et 10 }
     options: { type: object | defaults: undefined | function: optional object of options }
     created by: Tristan Blazquez
     **************************************************************
     */
    var setLeadAnnuaire = function (lead_name, lead_type, options) {
        if (lead_name) {
            this.setLeads(lead_name, "", lead_type, true, options);
        } else {
            console.log("Le nom du lead n'a pas été renseigné");
        }
    };

    /*
     **************************************************************
     function: used whenever we have a form validation error
     returns: void
     parameters:
     message: { type: string | defaults: empty string | function: this is the error message for eVar24
     created by: Tristan Blazquez
     **************************************************************
     */
    var sendFormError = function (message) {
        var track_vars = "eVar24,events",
            error_message = "Erreur non précisée";

        this.addToEvents("event18", track_vars, true);

        if (message !== undefined && message) {
            error_message = message;
        }
        this.addToVars("eVar24", error_message, true);

        sendData("Erreur formulaire");
    };

    /*
     **************************************************************
     function: tracks forms that are not leads
     returns: void
     parameters:
     form_name: { type: string | defaults: undefined | function: returns the name of the form tied to the lead
     lead_name: { type: string | defaults: some string | function: le nom du lead
     lead_type: { type: string | defaults: "initié" ou "abouti" | function: le type de lead, servant de référence aux events 9 et 10 }
     send: { type: boolean | defaults: undefined | function: this determines if we send the data to Omniture after the update or not
     options: { type: object | defaults: undefined | function: optional object of options }
     created by: Tristan Blazquez
     **************************************************************
     */
    var setLeadForm = function (form_name, lead_name, lead_type, send, options) {
        var opt_vars = {},
            send_data = false;

        if (form_name !== undefined && form_name) {
            this.addToVars("eVar52", form_name, true);

            if (options !== undefined) {
                opt_vars = options;
            }

            if (!opt_vars.track_vars) {
                opt_vars.track_vars = "eVar52,events";
            }

            if (lead_name) {
                if (send !== undefined) {
                    send_data = send;
                }
                this.setLeads(lead_name, "", lead_type, send_data, opt_vars);
            } else {
                console.log("Le nom du lead n'a pas été renseigné");
            }
        } else {
            console.log("Form tracking data missing");
        }
    };

    /*
     **************************************************************
     function: update id annuaire comme si c'était un product
     returns: void
     parameters:
     id_annuaire: { type: string | defaults: undefined | function: l'id de l'annuaire à mettre à jour
     created by: Tristan Blazquez
     **************************************************************
     */
    var updateAnnuaire = function (id_annuaire) {
        addToVars("eVar38", id_annuaire, false);
    };

    /**
     * Get products
     */
    var getProducts = function() {
        return that.s_vars.products;
    };

    /**
     * Get s_vars
     *
     */
    var getVars = function() {
        return that.s_vars;
    };

    // Init module
    init();

    return {
        setS : setS,
        addToEvents : addToEvents,
        addToProducts : addToProducts,
        setVars : setVars,
        addToVars : addToVars,
        cleanVars : cleanVars,
        addToEvents : addToEvents,
        setLeads : setLeads,
        setLeadPhone : setLeadPhone,
        setLeadMail : setLeadMail,
        setAgencyLeadPhone : setAgencyLeadPhone,
        setAgencyLeadMail : setAgencyLeadMail,
        setLeadALI : setLeadALI,
        getKeywords : getKeywords,
        sendFormError : sendFormError,
        getProducts : getProducts,
        sendData : sendData,
        getVars : getVars,
        setLeadAnnuaire : setLeadAnnuaire,
        sendFormError : sendFormError,
        setLeadForm : setLeadForm,
        updateAnnuaire : updateAnnuaire,
        s_vars  : s_vars // TO REMOVE WITH NEW RECHERCHE AND NEW DETAIL RELEASE
    };

})();

// We keep the alias for retro-compatibility, don't use SLOmniture anymore
var SLOmniture = function(){};

/* SiteCatalyst code version: H.24.4.
 Copyright 1997-2012 Omniture, Inc. More info available at
 http://www.omniture.com */
/************************ ADDITIONAL FEATURES ************************
 Plugins
 */

if (s_account === undefined) {
    var s_account = "selogerprod";
    var reg_adSite_under = new RegExp(".com/adsite-under","g");
    if (document.location.href.match(reg_adSite_under)) {
        s_account = "selogersiteunder";
    }
}

var s = (function(){
    return s_gi(s_account);
})();

if (SL_Omniture2) {
    SL_Omniture2.setS(s);
}

// Sync with Kameleoon if available
if (window.Kameleoon) {
    Kameleoon.processOmniture(s);
}

/************************** CONFIG SECTION **************************/
/* You may add or alter any code config here. */
s.charSet="UTF-8"
/* Conversion Config */
s.currencyCode="EUR"
/* Link Tracking Config */
s.trackDownloadLinks=true
s.trackExternalLinks=true
s.trackInlineStats=true
s.linkDownloadFileTypes="exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx"
if (s.linkInternalFilters === undefined || s.linkInternalFilters === "") {
    s.linkInternalFilters="javascript:,seloger.com";
}
s.linkLeaveQueryString=false
s.linkTrackVars="None"
s.linkTrackEvents="None"
s.usePlugins=true

/* Plugin Config */
s._channelDomain="Reseaux Sociaux - Organique|facebook.com,twitter.com,digg.com,linkedin.com, myspace.com";
s._channelParameter="";
s._channelPattern="Alertes Email|AL>Intra Groupe|INT>Reseaux Sociaux - Pages groupe|RSX>Agregateurs|AG>Display|BA>Affilie|AF>Emailing|EM>Partenaire|PA";
s._extraSearchEngines="voila.fr|rdata|Voila>sfr.fr|q|SFR";

function s_doPlugins(s) {

    // Delete cookie before load channelManager function
    document.cookie = 'c_m=""; expires=Thu, 2 Aug 2012 20:47:11 UTC; path=.seloger.com';
    document.cookie = 's_dl=""; expires=Thu, 2 Aug 2012 20:47:11 UTC; path=.seloger.com';

    /* Add calls to plugins here */
    /*Channel Manager*/
    s.channelManager('cmp','','','','s_dl');

    /* Renaming Typed/Bookmarked */
    if(s._campaign=="Typed/Bookmarked") {
        s._channel="Acces Direct"
    }

    //Remove plus signs from keywords where plus signs weren't originally used
    if(s._keywords){
        if(s._keywords.indexOf('+')==0)
            s._keywords=s._keywords.replace('+','  ');
        s._keywords=s.repl(s._keywords,'+',' ');
        s._keywords=s.repl(s._keywords,'  ',' +').replace(/^\s+/,"");
    }

    var marque = new Array('seloge','se loge','celoger','ce loger');
    if (typeof SLOmniture === "function" && SL_Omniture2 !== undefined) {
        marque = SL_Omniture2.getKeywords();
    }

    if (s._channel=="Natural Search" || s._channel=="Paid Search")
    {
        if (s._keywords=="n/a")
            s._keywords="keyword unavailable";
    }

    //Identify Branded SEO & Encrypted SEO
    if(s._channel=="Natural Search"){
        s._keywords=decodeURI(s._keywords);
        s._keywords=s._keywords.toLowerCase();
        var i;
        for(i=0;i<marque.length;i++){
            if(s._keywords.indexOf(marque[i],0)>-1){s._channel="Recherche Marque";}
        }
        if(s._channel!="Recherche Marque" && s._keywords!="keyword unavailable"){
            s._channel="Recherche Hors Marque";
        }
        if(s._channel!="Recherche Marque" && s._keywords=="keyword unavailable"){
            s._channel="Recherche Inconnue";
        }
    }

    //Identify Branded SEM & Encrypted SEM
    if(s._channel=="Paid Search"){
        s._keywords=decodeURI(s._keywords);
        s._keywords=s._keywords.toLowerCase();
        var i;
        for(i=0;i<marque.length;i++){
            if(s._keywords.indexOf(marque[i],0)>-1){s._channel="Recherche Payante Marque";}
        }
        if(s._channel!="Recherche Payante Marque" && s._keywords!="keyword unavailable"){
            s._channel="Recherche Payante Hors Marque";
        }
        if(s._channel!="Recherche Payante Marque" && s._keywords=="keyword unavailable"){
            s._channel="Recherche Payante Inconnue";
        }
    }

    if(s._channel=='Referrers' || s._channel=='Other Natural Referrers'){
        s._channel="Autres Sites Organiques";
    }

    if(s._channel=='Unknown Paid Channel' || s._channel=='Paid Non-Search'){
        s._channel="Autres Sites Payants";
    }

    /*s.eVar29 = s._channel;
     s.eVar30 = s._keywords;
     s.eVar31 = s._referringDomain;
     s.eVar32 = s._partner;*/
    var todayDate = new Date();
    var day = todayDate.getDate();
    var month = todayDate.getMonth()+1;
    var year = todayDate.getFullYear();
    /*if (s.eVar29)
     {
     var todayDate = new Date();
     var day = todayDate.getDate();
     var month = todayDate.getMonth()+1;
     var year = todayDate.getFullYear();
     s.eVar55 = day + "/" + month + "/" + year;
     }*/
    if (s._campaignID!="n/a")
        s.campaign = s._campaignID;
    /*Fin Channel Manager*/

    /*Annonces encadrees*/
    if(!s.eVar5) s.eVar5=s.getQueryParam('intid');
    if(s.eVar5) s.events=s.apl(s.events,'event2',',',1);

    /*Leviers Biz Dev*/
    if(!s.eVar25) s.eVar25=s.getQueryParam('bd');

    s.prop47=s.getNewRepeat(365);

    /*Time parting*/
    s.prop48=s.getTimeParting('h','+1',new Date().getFullYear()); // Set hour
    s.prop49=s.getTimeParting('d','+1',new Date().getFullYear()); // Set day

    /*campaign et channel stacking*/
    //s.eVar27=s.crossVisitParticipation(s.eVar29,'stack_ch','30','5','>');
    //s.eVar28=s.crossVisitParticipation(s.campaign,'stack_cmp','30','5','>');

    s.pageURL="D=Referer";
    s.tnt=s.trackTNT();

    if (window.Kameleoon)
    {
        Kameleoon.processOmniture(s);
    }

}
s.doPlugins=s_doPlugins

/************************** PLUGINS SECTION *************************/
/* You may insert any plugins you wish to use here.                 */
s.getRanges=new Function("r","v","m",""
    +"var s=this,t,x,y,a='';"
    +"if(m&&(v>=m)){a=m+'+';}"
    +"else{t=Math.round(v/r);"
    +"if((v%r)>=(r/2)){y=(t*r)-1;x=(t*r)-r;}"
    +"else{x=t*r;y=((t+1)*r)-1;}"
    +"a=x+'-'+y;}"
    +"return a");

/*
 * TNT Integration Plugin v1.0
 * v - Name of the javascript variable that is used. Defaults to s_tnt
 (optional)
 * p - Name of the url parameter. Defaults to s_tnt (optional)
 * b - Blank Global variable after plugin runs. Defaults to true (Optional)
 */
s.trackTNT = function(v, p, b){
    var s=this, n="s_tnt", p=(p)?p:n, v=(v)?v:n, r="",pm=false, b=(b)?b:true;
    if(s.getQueryParam)
        pm = s.getQueryParam(p); //grab the parameter
    if(pm)
        r += (pm + ","); // append the parameter
    if(s.wd[v] != undefined)
        r += s.wd[v]; // get the global variable
    if(b)
        s.wd[v] = ""; // Blank out the global variable for ajax requests
    return r;}


/*
 * channelManager v2.7 - Tracking External Traffic
 */
s.channelManager=new Function("a","b","c","d","e","f",""
    +"var s=this,g=new Date,h=0,i,j,k,l,m,n,o,p,q,r,t,u,v,w,x,y,z,A,B,C,D"
    +",E,F,G,H,I,J,K,L,M,N,O,P,Q,R;g.setTime(g.getTime()+1800000);if(e){h"
    +"=1;if(s.c_r(e))h=0;if(!s.c_w(e,1,g))s.c_w(e,1,0);if(!s.c_r(e))h=0;}"
    +"i=s.referrer?s.referrer:document.referrer;i=i.toLowerCase();if(!i)j"
    +"=1;else {k=i.indexOf('?')>-1?i.indexOf('?'):i.length;l=i.substring("
    +"0,k);m=s.split(i,'/');n=m[2].toLowerCase();o=s.linkInternalFilters."
    +"toLowerCase();o=s.split(o,',');for(p=0;p<o.length;p++){q=n.indexOf("
    +"o[p])==-1?'':i;if(q)break;}}if(!q&&!j){r=i;t=u=n;v='Other Natural R"
    +"eferrers';w=s.seList+'>'+s._extraSearchEngines;if(d==1){l=s.repl(l,"
    +"'oogle','%');l=s.repl(l,'ahoo','^');i=s.repl(i,'as_q','*');}x=s.spl"
    +"it(w,'>');for(y=0;y<x.length;y++){z=x[y];z=s.split(z,'|');A=s.split"
    +"(z[0],',');for(B=0;B<A.length;B++){C=l.indexOf(A[B]);if(C>-1){if(z["
    +"2])D=u=z[2];else D=n;if(d==1){D=s.repl(D,'#',' - ');i=s.repl(i,'*',"
    +"'as_q');D=s.repl(D,'^','ahoo');D=s.repl(D,'%','oogle');}E=s.split(z"
    +"[1],',');for(F=0;F<E.length;F++){if(i.indexOf(E[F]+'=')>-1||i.index"
    +"Of('https://www.google.')==0)G=1;H=s.getQueryParam(E[F],'',i).toLow"
    +"erCase();if(G||H)break;}}if(G||H)break;}if(G||H)break;}}if(!q||f!='"
    +"1'){q=s.getQueryParam(a,b);if(q){u=q;if(D)v='Paid Search';else v='U"
    +"nknown Paid Channel';}if(!q&&D){u=D;v='Natural Search';}}if(j==1&&!"
    +"q&&h==1)r=t=u=v='Typed/Bookmarked';I=s._channelDomain;if(I&&n){J=s."
    +"split(I,'>');for(K=0;K<J.length;K++){L=s.split(J[K],'|');M=s.split("
    +"L[1],',');N=M.length;for(O=0;O<N;O++){P=M[O].toLowerCase();Q=n.inde"
    +"xOf(P);if(Q>-1){v=L[0];break;}}if(Q>-1)break;}}I=s._channelParamete"
    +"r;if(I){J=s.split(I,'>');for(K=0;K<J.length;K++){L=s.split(J[K],'|'"
    +");M=s.split(L[1],',');N=M.length;for(O=0;O<N;O++){Q=s.getQueryParam"
    +"(M[O]);if(Q){v=L[0];break;}}if(Q)break;}}I=s._channelPattern;if(I){"
    +"J=s.split(I,'>');for(K=0;K<J.length;K++){L=s.split(J[K],'|');M=s.sp"
    +"lit(L[1],',');N=M.length;for(O=0;O<N;O++){P=M[O].toLowerCase();Q=q."
    +"toLowerCase();R=Q.indexOf(P);if(R==0){v=L[0];break;}}if(R==0)break;"
    +"}}S=v?q+t+v+H:'';c=c?c:'c_m';if(c!='0')S=s.getValOnce(S,c,0);if(S){"
    +"s._campaignID=q?q:'n/a';s._referrer=r?r:'n/a';s._referringDomain=t?"
    +"t:'n/a';s._campaign=u?u:'n/a';s._channel=v?v:'n/a';s._partner=D?D:'"
    +"n/a';s._keywords=G?H?H:'Keyword Unavailable':'n/a';}");

/* Top 130 Search Engines - Grouped */
s.seList="google.,googlesyndication.com|q,as_q|Google>yahoo.com,yahoo"
    +".co.jp|p,va|Yahoo!>bing.com|q|Bing>altavista.co,altavista.de|q,r|Al"
    +"taVista>.aol.,suche.aolsvc.de|q,query|AOL>ask.jp,ask.co|q,ask|Ask>w"
    +"ww.baidu.com|wd|Baidu>daum.net,search.daum.net|q|Daum>icqit.com|q|i"
    +"cq>myway.com|searchfor|MyWay.com>naver.com,search.naver.com|query|N"
    +"aver>netscape.com|query,search|Netscape Search>reference.com|q|Refe"
    +"rence.com>seznam|w|Seznam.cz>abcsok.no|q|Startsiden>tiscali.it,www."
    +"tiscali.co.uk|key,query|Tiscali>virgilio.it|qs|Virgilio>yandex|text"
    +"|Yandex.ru>search.cnn.com|query|CNN Web Search>search.earthlink.net"
    +"|q|Earthlink Search>search.comcast.net|q|Comcast Search>search.rr.c"
    +"om|qs|RoadRunner Search>optimum.net|q|Optimum Search";

/*
 * Plugin Utility: apl v1.1
 */
s.apl=new Function("l","v","d","u",""
    +"var s=this,m=0;if(!l)l='';if(u){var i,n,a=s.split(l,d);for(i=0;i<a."
    +"length;i++){n=a[i];m=m||(u==1?(n==v):(n.toLowerCase()==v.toLowerCas"
    +"e()));}}if(!m)l=l?l+d+v:v;return l");

/*
 *	Plug-in: crossVisitParticipation v1.4 - stacks values from
 *	specified variable in cookie and returns value
 */
s.crossVisitParticipation = new Function("v","cn","ex","ct","dl","ev","dv",""
    +"var s=this;if(typeof(dv)==='undefined')dv=0;if(s.events&&ev){var ay"
    +"=s.split(ev,',');var ea=s.split(s.events,',');for(var u=0;u<ay.leng"
    +"th;u++){for(var x=0;x<ea.length;x++){if(ay[u]==ea[x]){s.c_w(cn,'');"
    +"return'';}}}}if(!v||v=='')return '';v=escape(v);var arry=new Array("
    +"),a=new Array(),c=s.c_r(cn),g=0,h=new Array();if(c&&c!='')arry=eval"
    +"(c);var e=new Date();e.setFullYear(e.getFullYear()+5);if(dv==0 && a"
    +"rry.length>0 && arry[arry.length-1][0]==v)arry[arry.length-1]=[v, n"
    +"ew Date().getTime()];else arry[arry.length]=[v, new Date().getTime("
    +")];var start=arry.length-ct<0?0:arry.length-ct;for(var x=start;x<ar"
    +"ry.length;x++){var diff=Math.round(new Date()-new Date(parseInt(arr"
    +"y[x][1])))/86400000;if(diff<ex){h[g]=unescape(arry[x][0]);a[g]=[arr"
    +"y[x][0],arry[x][1]];g++;}}var data=s.join(a,{delim:',',front:'[',ba"
    +"ck:']',wrap:\"'\"});s.c_w(cn,data,e);var r=s.join(h,{delim:dl});ret"
    +"urn r;");

/*
 * Utility Function: split v1.5 (JS 1.0 compatible)
 */
s.split=new Function("l","d",""
    +"var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x"
    +"++]=l.substring(0,i);l=l.substring(i+d.length);}return a");

/*
 * Plugin Utility: Replace v1.0
 */
s.repl=new Function("x","o","n",""
    +"var i=x.indexOf(o),l=n.length;while(x&&i>=0){x=x.substring(0,i)+n+x."
    +"substring(i+o.length);i=x.indexOf(o,i+l)}return x");

/*
 * s.join: 1.0 - s.join(v,p)
 *
 *  v - Array (may also be array of array)
 *  p - formatting parameters (front, back, delim, wrap)
 *
 */
s.join = new Function("v","p",""
    +"var s = this;var f,b,d,w;if(p){f=p.front?p.front:'';b=p.back?p.back"
    +":'';d=p.delim?p.delim:'';w=p.wrap?p.wrap:'';}var str='';for(var x=0"
    +";x<v.length;x++){if(typeof(v[x])=='object' )str+=s.join( v[x],p);el"
    +"se str+=w+v[x]+w;if(x<v.length-1)str+=d;}return f+str+b;");

/*
 * Utility Function: split v1.5 (JS 1.0 compatible)
 */
s.split=new Function("l","d",""
    +"var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x"
    +"++]=l.substring(0,i);l=l.substring(i+d.length);}return a");

/*
 * Plugin: getTimeParting 1.3 - Set timeparting values based on time zone
 */
s.getTimeParting=new Function("t","z","y",""
    +"dc=new Date('1/1/2000');f=15;ne=8;if(dc.getDay()!=6||"
    +"dc.getMonth()!=0){return'Data Not Available'}else{;z=parseInt(z);"
    +"if(y=='2009'){f=8;ne=1};gmar=new Date('3/1/'+y);dsts=f-gmar.getDay("
    +");gnov=new Date('11/1/'+y);dste=ne-gnov.getDay();spr=new Date('3/'"
    +"+dsts+'/'+y);fl=new Date('11/'+dste+'/'+y);cd=new Date();"
    +"if(cd>spr&&cd<fl){z=z+1}else{z=z};utc=cd.getTime()+(cd.getTimezoneO"
    +"ffset()*60000);tz=new Date(utc + (3600000*z));thisy=tz.getFullYear("
    +");var days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Fr"
    +"iday','Saturday'];if(thisy!=y){return'Data Not Available'}else{;thi"
    +"sh=tz.getHours();thismin=tz.getMinutes();thisd=tz.getDay();var dow="
    +"days[thisd];var ap='AM';var dt='Weekday';var mint='00';if(thismin>3"
    +"0){mint='30'}if(thish>=12){ap='PM';thish=thish-12};if (thish==0){th"
    +"ish=12};if(thisd==6||thisd==0){dt='Weekend'};var timestring=thish+'"
    +":'+mint+ap;var daystring=dow;var endstring=dt;if(t=='h'){return tim"
    +"estring}if(t=='d'){return daystring};if(t=='w'){return en"
    +"dstring}}};"
);

/*
 * Plugin: getNewRepeat 1.2 - Returns whether user is new or repeat
 */
s.getNewRepeat=new Function("d","cn",""
    +"var s=this,e=new Date(),cval,sval,ct=e.getTime();d=d?d:30;cn=cn?cn:"
    +"'s_nr';e.setTime(ct+d*24*60*60*1000);cval=s.c_r(cn);if(cval.length="
    +"=0){s.c_w(cn,ct+'-New',e);return'New';}sval=s.split(cval,'-');if(ct"
    +"-sval[0]<30*60*1000&&sval[1]=='New'){s.c_w(cn,ct+'-New',e);return'N"
    +"ew';}else{s.c_w(cn,ct+'-Repeat',e);return'Repeat';}");

/*
 * Plugin: getQueryParam 2.3
 */
s.getQueryParam=new Function("p","d","u",""
    +"var s=this,v='',i,t;d=d?d:'';u=u?u:(s.pageURL?s.pageURL:s.wd.locati"
    +"on);if(u=='f')u=s.gtfs().location;while(p){i=p.indexOf(',');i=i<0?p"
    +".length:i;t=s.p_gpv(p.substring(0,i),u+'');if(t){t=t.indexOf('#')>-"
    +"1?t.substring(0,t.indexOf('#')):t;}if(t)v+=v?d+t:t;p=p.substring(i="
    +"=p.length?i:i+1)}return v");
s.p_gpv=new Function("k","u",""
    +"var s=this,v='',i=u.indexOf('?'),q;if(k&&i>-1){q=u.substring(i+1);v"
    +"=s.pt(q,'&','p_gvf',k)}return v");
s.p_gvf=new Function("t","k",""
    +"if(t){var s=this,i=t.indexOf('='),p=i<0?t:t.substring(0,i),v=i<0?'T"
    +"rue':t.substring(i+1);if(p.toLowerCase()==k.toLowerCase())return s."
    +"epa(v)}return ''");

/*
 * Plugin: getValOnce_v1.0
 */
s.getValOnce=new Function("v","c","e",""
    +"var s=this,a=new Date,v=v?v:v='',c=c?c:c='s_gvo',e=e?e:0,k=s.c_r(c"
    +");if(v){a.setTime(a.getTime()+e*86400000);s.c_w(c,v,e?a:0);}return"
    +" v==k?'':v");

/* WARNING: Changing any of the below variables will cause drastic
 changes to how your visitor data is collected.  Changes should only be
 made when instructed to do so by your account manager.*/
//s.visitorNamespace="seloger"
//s.trackingServer="metrics.seloger.com"
//s.visitorMigrationKey="5114DBB1"
//s.visitorMigrationServer="seloger.122.2o7.net"
s.visitorNamespace=""
s.trackingServer=""
s.visitorMigrationKey=""
s.visitorMigrationServer=""

/************* DO NOT ALTER ANYTHING BELOW THIS LINE ! **************/
var s_code='',s_objectID;function s_gi(un,pg,ss){var c="s.version='H.24.4';s.an=s_an;s.logDebug=function(m){var s=this,tcf=new Function('var e;try{console.log(\"'+s.rep(s.rep(m,\"\\n\",\"\\\\n\"),\""
        +"\\\"\",\"\\\\\\\"\")+'\");}catch(e){}');tcf()};s.cls=function(x,c){var i,y='';if(!c)c=this.an;for(i=0;i<x.length;i++){n=x.substring(i,i+1);if(c.indexOf(n)>=0)y+=n}return y};s.fl=function(x,l){retur"
        +"n x?(''+x).substring(0,l):x};s.co=function(o){if(!o)return o;var n=new Object,x;for(x in o)if(x.indexOf('select')<0&&x.indexOf('filter')<0)n[x]=o[x];return n};s.num=function(x){x=''+x;for(var p=0;p"
        +"<x.length;p++)if(('0123456789').indexOf(x.substring(p,p+1))<0)return 0;return 1};s.rep=s_rep;s.sp=s_sp;s.jn=s_jn;s.ape=function(x){var s=this,h='0123456789ABCDEF',i,c=s.charSet,n,l,e,y='';c=c?c.toU"
        +"pperCase():'';if(x){x=''+x;if(s.em==3)x=encodeURIComponent(x);else if(c=='AUTO'&&('').charCodeAt){for(i=0;i<x.length;i++){c=x.substring(i,i+1);n=x.charCodeAt(i);if(n>127){l=0;e='';while(n||l<4){e=h"
        +".substring(n%16,n%16+1)+e;n=(n-n%16)/16;l++}y+='%u'+e}else if(c=='+')y+='%2B';else y+=escape(c)}x=y}else x=escape(''+x);x=s.rep(x,'+','%2B');if(c&&c!='AUTO'&&s.em==1&&x.indexOf('%u')<0&&x.indexOf('"
        +"%U')<0){i=x.indexOf('%');while(i>=0){i++;if(h.substring(8).indexOf(x.substring(i,i+1).toUpperCase())>=0)return x.substring(0,i)+'u00'+x.substring(i);i=x.indexOf('%',i)}}}return x};s.epa=function(x)"
        +"{var s=this;if(x){x=s.rep(''+x,'+',' ');return s.em==3?decodeURIComponent(x):unescape(x)}return x};s.pt=function(x,d,f,a){var s=this,t=x,z=0,y,r;while(t){y=t.indexOf(d);y=y<0?t.length:y;t=t.substri"
        +"ng(0,y);r=s[f](t,a);if(r)return r;z+=y+d.length;t=x.substring(z,x.length);t=z<x.length?t:''}return ''};s.isf=function(t,a){var c=a.indexOf(':');if(c>=0)a=a.substring(0,c);c=a.indexOf('=');if(c>=0)a"
        +"=a.substring(0,c);if(t.substring(0,2)=='s_')t=t.substring(2);return (t!=''&&t==a)};s.fsf=function(t,a){var s=this;if(s.pt(a,',','isf',t))s.fsg+=(s.fsg!=''?',':'')+t;return 0};s.fs=function(x,f){var"
        +" s=this;s.fsg='';s.pt(x,',','fsf',f);return s.fsg};s.mpc=function(m,a){var s=this,c,l,n,v;v=s.d.visibilityState;if(!v)v=s.d.webkitVisibilityState;if(v&&v=='prerender'){if(!s.mpq){s.mpq=new Array;l="
        +"s.sp('webkitvisibilitychange,visibilitychange',',');for(n=0;n<l.length;n++){s.d.addEventListener(l[n],new Function('var s=s_c_il['+s._in+'],c,v;v=s.d.visibilityState;if(!v)v=s.d.webkitVisibilitySta"
        +"te;if(s.mpq&&v==\"visible\"){while(s.mpq.length>0){c=s.mpq.shift();s[c.m].apply(s,c.a)}s.mpq=0}'),false)}}c=new Object;c.m=m;c.a=a;s.mpq.push(c);return 1}return 0};s.si=function(){var s=this,i,k,v,"
        +"c=s_gi+'var s=s_gi(\"'+s.oun+'\");s.sa(\"'+s.un+'\");';for(i=0;i<s.va_g.length;i++){k=s.va_g[i];v=s[k];if(v!=undefined){if(typeof(v)!='number')c+='s.'+k+'=\"'+s_fe(v)+'\";';else c+='s.'+k+'='+v+';'"
        +"}}c+=\"s.lnk=s.eo=s.linkName=s.linkType=s.wd.s_objectID=s.ppu=s.pe=s.pev1=s.pev2=s.pev3='';\";return c};s.c_d='';s.c_gdf=function(t,a){var s=this;if(!s.num(t))return 1;return 0};s.c_gd=function(){v"
        +"ar s=this,d=s.wd.location.hostname,n=s.fpCookieDomainPeriods,p;if(!n)n=s.cookieDomainPeriods;if(d&&!s.c_d){n=n?parseInt(n):2;n=n>2?n:2;p=d.lastIndexOf('.');if(p>=0){while(p>=0&&n>1){p=d.lastIndexOf"
        +"('.',p-1);n--}s.c_d=p>0&&s.pt(d,'.','c_gdf',0)?d.substring(p):d}}return s.c_d};s.c_r=function(k){var s=this;k=s.ape(k);var c=' '+s.d.cookie,i=c.indexOf(' '+k+'='),e=i<0?i:c.indexOf(';',i),v=i<0?'':"
        +"s.epa(c.substring(i+2+k.length,e<0?c.length:e));return v!='[[B]]'?v:''};s.c_w=function(k,v,e){var s=this,d=s.c_gd(),l=s.cookieLifetime,t;v=''+v;l=l?(''+l).toUpperCase():'';if(e&&l!='SESSION'&&l!='N"
        +"ONE'){t=(v!=''?parseInt(l?l:0):-60);if(t){e=new Date;e.setTime(e.getTime()+(t*1000))}}if(k&&l!='NONE'){s.d.cookie=k+'='+s.ape(v!=''?v:'[[B]]')+'; path=/;'+(e&&l!='SESSION'?' expires='+e.toGMTString"
        +"()+';':'')+(d?' domain='+d+';':'');return s.c_r(k)==v}return 0};s.eh=function(o,e,r,f){var s=this,b='s_'+e+'_'+s._in,n=-1,l,i,x;if(!s.ehl)s.ehl=new Array;l=s.ehl;for(i=0;i<l.length&&n<0;i++){if(l[i"
        +"].o==o&&l[i].e==e)n=i}if(n<0){n=i;l[n]=new Object}x=l[n];x.o=o;x.e=e;f=r?x.b:f;if(r||f){x.b=r?0:o[e];x.o[e]=f}if(x.b){x.o[b]=x.b;return b}return 0};s.cet=function(f,a,t,o,b){var s=this,r,tcf;if(s.a"
        +"pv>=5&&(!s.isopera||s.apv>=7)){tcf=new Function('s','f','a','t','var e,r;try{r=s[f](a)}catch(e){r=s[t](e)}return r');r=tcf(s,f,a,t)}else{if(s.ismac&&s.u.indexOf('MSIE 4')>=0)r=s[b](a);else{s.eh(s.w"
        +"d,'onerror',0,o);r=s[f](a);s.eh(s.wd,'onerror',1)}}return r};s.gtfset=function(e){var s=this;return s.tfs};s.gtfsoe=new Function('e','var s=s_c_il['+s._in+'],c;s.eh(window,\"onerror\",1);s.etfs=1;c"
        +"=s.t();if(c)s.d.write(c);s.etfs=0;return true');s.gtfsfb=function(a){return window};s.gtfsf=function(w){var s=this,p=w.parent,l=w.location;s.tfs=w;if(p&&p.location!=l&&p.location.host==l.host){s.tf"
        +"s=p;return s.gtfsf(s.tfs)}return s.tfs};s.gtfs=function(){var s=this;if(!s.tfs){s.tfs=s.wd;if(!s.etfs)s.tfs=s.cet('gtfsf',s.tfs,'gtfset',s.gtfsoe,'gtfsfb')}return s.tfs};s.mrq=function(u){var s=thi"
        +"s,l=s.rl[u],n,r;s.rl[u]=0;if(l)for(n=0;n<l.length;n++){r=l[n];s.mr(0,0,r.r,r.t,r.u)}};s.flushBufferedRequests=function(){};s.mr=function(sess,q,rs,ta,u){var s=this,dc=s.dc,t1=s.trackingServer,t2=s."
        +"trackingServerSecure,tb=s.trackingServerBase,p='.sc',ns=s.visitorNamespace,un=s.cls(u?u:(ns?ns:s.fun)),r=new Object,l,imn='s_i_'+(un),im,b,e;if(!rs){if(t1){if(t2&&s.ssl)t1=t2}else{if(!tb)tb='2o7.ne"
        +"t';if(dc)dc=(''+dc).toLowerCase();else dc='d1';if(tb=='2o7.net'){if(dc=='d1')dc='112';else if(dc=='d2')dc='122';p=''}t1=un+'.'+dc+'.'+p+tb}rs='http'+(s.ssl?'s':'')+'://'+t1+'/b/ss/'+s.un+'/'+(s.mob"
        +"ile?'5.1':'1')+'/'+s.version+(s.tcn?'T':'')+'/'+sess+'?AQB=1&ndh=1'+(q?q:'')+'&AQE=1';if(s.isie&&!s.ismac)rs=s.fl(rs,2047)}if(s.d.images&&s.apv>=3&&(!s.isopera||s.apv>=7)&&(s.ns6<0||s.apv>=6.1)){if"
        +"(!s.rc)s.rc=new Object;if(!s.rc[un]){s.rc[un]=1;if(!s.rl)s.rl=new Object;s.rl[un]=new Array;setTimeout('if(window.s_c_il)window.s_c_il['+s._in+'].mrq(\"'+un+'\")',750)}else{l=s.rl[un];if(l){r.t=ta;"
        +"r.u=un;r.r=rs;l[l.length]=r;return ''}imn+='_'+s.rc[un];s.rc[un]++}im=s.wd[imn];if(!im)im=s.wd[imn]=new Image;im.s_l=0;im.onload=new Function('e','this.s_l=1;var wd=window,s;if(wd.s_c_il){s=wd.s_c_"
        +"il['+s._in+'];s.mrq(\"'+un+'\");s.nrs--;if(!s.nrs)s.m_m(\"rr\")}');if(!s.nrs){s.nrs=1;s.m_m('rs')}else s.nrs++;if(s.debugTracking){var d='AppMeasurement Debug: '+rs,dl=s.sp(rs,'&'),dln;for(dln=0;dl"
        +"n<dl.length;dln++)d+=\"\\n\\t\"+s.epa(dl[dln]);s.logDebug(d)}im.src=rs;if((!ta||ta=='_self'||ta=='_top'||(s.wd.name&&ta==s.wd.name))&&rs.indexOf('&pe=')>=0){b=e=new Date;while(!im.s_l&&e.getTime()-"
        +"b.getTime()<500)e=new Date}return ''}return '<im'+'g sr'+'c=\"'+rs+'\" width=1 height=1 border=0 alt=\"\">'};s.gg=function(v){var s=this;if(!s.wd['s_'+v])s.wd['s_'+v]='';return s.wd['s_'+v]};s.glf="
        +"function(t,a){if(t.substring(0,2)=='s_')t=t.substring(2);var s=this,v=s.gg(t);if(v)s[t]=v};s.gl=function(v){var s=this;if(s.pg)s.pt(v,',','glf',0)};s.rf=function(x){var s=this,y,i,j,h,p,l=0,q,a,b='"
        +"',c='',t;if(x&&x.length>255){y=''+x;i=y.indexOf('?');if(i>0){q=y.substring(i+1);y=y.substring(0,i);h=y.toLowerCase();j=0;if(h.substring(0,7)=='http://')j+=7;else if(h.substring(0,8)=='https://')j+="
        +"8;i=h.indexOf(\"/\",j);if(i>0){h=h.substring(j,i);p=y.substring(i);y=y.substring(0,i);if(h.indexOf('google')>=0)l=',q,ie,start,search_key,word,kw,cd,';else if(h.indexOf('yahoo.co')>=0)l=',p,ei,';if"
        +"(l&&q){a=s.sp(q,'&');if(a&&a.length>1){for(j=0;j<a.length;j++){t=a[j];i=t.indexOf('=');if(i>0&&l.indexOf(','+t.substring(0,i)+',')>=0)b+=(b?'&':'')+t;else c+=(c?'&':'')+t}if(b&&c)q=b+'&'+c;else c='"
        +"'}i=253-(q.length-c.length)-y.length;x=y+(i>0?p.substring(0,i):'')+'?'+q}}}}return x};s.s2q=function(k,v,vf,vfp,f){var s=this,qs='',sk,sv,sp,ss,nke,nk,nf,nfl=0,nfn,nfm;if(k==\"contextData\")k=\"c\""
        +";if(v){for(sk in v)if((!f||sk.substring(0,f.length)==f)&&v[sk]&&(!vf||vf.indexOf(','+(vfp?vfp+'.':'')+sk+',')>=0)&&(!Object||!Object.prototype||!Object.prototype[sk])){nfm=0;if(nfl)for(nfn=0;nfn<nf"
        +"l.length;nfn++)if(sk.substring(0,nfl[nfn].length)==nfl[nfn])nfm=1;if(!nfm){if(qs=='')qs+='&'+k+'.';sv=v[sk];if(f)sk=sk.substring(f.length);if(sk.length>0){nke=sk.indexOf('.');if(nke>0){nk=sk.substr"
        +"ing(0,nke);nf=(f?f:'')+nk+'.';if(!nfl)nfl=new Array;nfl[nfl.length]=nf;qs+=s.s2q(nk,v,vf,vfp,nf)}else{if(typeof(sv)=='boolean'){if(sv)sv='true';else sv='false'}if(sv){if(vfp=='retrieveLightData'&&f"
        +".indexOf('.contextData.')<0){sp=sk.substring(0,4);ss=sk.substring(4);if(sk=='transactionID')sk='xact';else if(sk=='channel')sk='ch';else if(sk=='campaign')sk='v0';else if(s.num(ss)){if(sp=='prop')s"
        +"k='c'+ss;else if(sp=='eVar')sk='v'+ss;else if(sp=='list')sk='l'+ss;else if(sp=='hier'){sk='h'+ss;sv=sv.substring(0,255)}}}qs+='&'+s.ape(sk)+'='+s.ape(sv)}}}}}if(qs!='')qs+='&.'+k}return qs};s.hav=f"
        +"unction(){var s=this,qs='',l,fv='',fe='',mn,i,e;if(s.lightProfileID){l=s.va_m;fv=s.lightTrackVars;if(fv)fv=','+fv+','+s.vl_mr+','}else{l=s.va_t;if(s.pe||s.linkType){fv=s.linkTrackVars;fe=s.linkTrac"
        +"kEvents;if(s.pe){mn=s.pe.substring(0,1).toUpperCase()+s.pe.substring(1);if(s[mn]){fv=s[mn].trackVars;fe=s[mn].trackEvents}}}if(fv)fv=','+fv+','+s.vl_l+','+s.vl_l2;if(fe){fe=','+fe+',';if(fv)fv+=',e"
        +"vents,'}if (s.events2)e=(e?',':'')+s.events2}for(i=0;i<l.length;i++){var k=l[i],v=s[k],b=k.substring(0,4),x=k.substring(4),n=parseInt(x),q=k;if(!v)if(k=='events'&&e){v=e;e=''}if(v&&(!fv||fv.indexOf"
        +"(','+k+',')>=0)&&k!='linkName'&&k!='linkType'){if(k=='timestamp')q='ts';else if(k=='dynamicVariablePrefix')q='D';else if(k=='visitorID')q='vid';else if(k=='pageURL'){q='g';v=s.fl(v,255)}else if(k=="
        +"'referrer'){q='r';v=s.fl(s.rf(v),255)}else if(k=='vmk'||k=='visitorMigrationKey')q='vmt';else if(k=='visitorMigrationServer'){q='vmf';if(s.ssl&&s.visitorMigrationServerSecure)v=''}else if(k=='visit"
        +"orMigrationServerSecure'){q='vmf';if(!s.ssl&&s.visitorMigrationServer)v=''}else if(k=='charSet'){q='ce';if(v.toUpperCase()=='AUTO')v='ISO8859-1';else if(s.em==2||s.em==3)v='UTF-8'}else if(k=='visit"
        +"orNamespace')q='ns';else if(k=='cookieDomainPeriods')q='cdp';else if(k=='cookieLifetime')q='cl';else if(k=='variableProvider')q='vvp';else if(k=='currencyCode')q='cc';else if(k=='channel')q='ch';el"
        +"se if(k=='transactionID')q='xact';else if(k=='campaign')q='v0';else if(k=='resolution')q='s';else if(k=='colorDepth')q='c';else if(k=='javascriptVersion')q='j';else if(k=='javaEnabled')q='v';else i"
        +"f(k=='cookiesEnabled')q='k';else if(k=='browserWidth')q='bw';else if(k=='browserHeight')q='bh';else if(k=='connectionType')q='ct';else if(k=='homepage')q='hp';else if(k=='plugins')q='p';else if(k=="
        +"'events'){if(e)v+=(v?',':'')+e;if(fe)v=s.fs(v,fe)}else if(k=='events2')v='';else if(k=='contextData'){qs+=s.s2q('c',s[k],fv,k,0);v=''}else if(k=='lightProfileID')q='mtp';else if(k=='lightStoreForSe"
        +"conds'){q='mtss';if(!s.lightProfileID)v=''}else if(k=='lightIncrementBy'){q='mti';if(!s.lightProfileID)v=''}else if(k=='retrieveLightProfiles')q='mtsr';else if(k=='deleteLightProfiles')q='mtsd';els"
        +"e if(k=='retrieveLightData'){if(s.retrieveLightProfiles)qs+=s.s2q('mts',s[k],fv,k,0);v=''}else if(s.num(x)){if(b=='prop')q='c'+n;else if(b=='eVar')q='v'+n;else if(b=='list')q='l'+n;else if(b=='hier"
        +"'){q='h'+n;v=s.fl(v,255)}}if(v)qs+='&'+s.ape(q)+'='+(k.substring(0,3)!='pev'?s.ape(v):v)}}return qs};s.ltdf=function(t,h){t=t?t.toLowerCase():'';h=h?h.toLowerCase():'';var qi=h.indexOf('?');h=qi>=0"
        +"?h.substring(0,qi):h;if(t&&h.substring(h.length-(t.length+1))=='.'+t)return 1;return 0};s.ltef=function(t,h){t=t?t.toLowerCase():'';h=h?h.toLowerCase():'';if(t&&h.indexOf(t)>=0)return 1;return 0};s"
        +".lt=function(h){var s=this,lft=s.linkDownloadFileTypes,lef=s.linkExternalFilters,lif=s.linkInternalFilters;lif=lif?lif:s.wd.location.hostname;h=h.toLowerCase();if(s.trackDownloadLinks&&lft&&s.pt(lf"
        +"t,',','ltdf',h))return 'd';if(s.trackExternalLinks&&h.substring(0,1)!='#'&&(lef||lif)&&(!lef||s.pt(lef,',','ltef',h))&&(!lif||!s.pt(lif,',','ltef',h)))return 'e';return ''};s.lc=new Function('e','v"
        +"ar s=s_c_il['+s._in+'],b=s.eh(this,\"onclick\");s.lnk=s.co(this);s.t();s.lnk=0;if(b)return this[b](e);return true');s.bc=new Function('e','var s=s_c_il['+s._in+'],f,tcf;if(s.d&&s.d.all&&s.d.all.cpp"
        +"XYctnr)return;s.eo=e.srcElement?e.srcElement:e.target;tcf=new Function(\"s\",\"var e;try{if(s.eo&&(s.eo.tagName||s.eo.parentElement||s.eo.parentNode))s.t()}catch(e){}\");tcf(s);s.eo=0');s.oh=functi"
        +"on(o){var s=this,l=s.wd.location,h=o.href?o.href:'',i,j,k,p;i=h.indexOf(':');j=h.indexOf('?');k=h.indexOf('/');if(h&&(i<0||(j>=0&&i>j)||(k>=0&&i>k))){p=o.protocol&&o.protocol.length>1?o.protocol:(l"
        +".protocol?l.protocol:'');i=l.pathname.lastIndexOf('/');h=(p?p+'//':'')+(o.host?o.host:(l.host?l.host:''))+(h.substring(0,1)!='/'?l.pathname.substring(0,i<0?0:i)+'/':'')+h}return h};s.ot=function(o)"
        +"{var t=o.tagName;if(o.tagUrn||(o.scopeName&&o.scopeName.toUpperCase()!='HTML'))return '';t=t&&t.toUpperCase?t.toUpperCase():'';if(t=='SHAPE')t='';if(t){if((t=='INPUT'||t=='BUTTON')&&o.type&&o.type."
        +"toUpperCase)t=o.type.toUpperCase();else if(!t&&o.href)t='A';}return t};s.oid=function(o){var s=this,t=s.ot(o),p,c,n='',x=0;if(t&&!o.s_oid){p=o.protocol;c=o.onclick;if(o.href&&(t=='A'||t=='AREA')&&("
        +"!c||!p||p.toLowerCase().indexOf('javascript')<0))n=s.oh(o);else if(c){n=s.rep(s.rep(s.rep(s.rep(''+c,\"\\r\",''),\"\\n\",''),\"\\t\",''),' ','');x=2}else if(t=='INPUT'||t=='SUBMIT'){if(o.value)n=o."
        +"value;else if(o.innerText)n=o.innerText;else if(o.textContent)n=o.textContent;x=3}else if(o.src&&t=='IMAGE')n=o.src;if(n){o.s_oid=s.fl(n,100);o.s_oidt=x}}return o.s_oid};s.rqf=function(t,un){var s="
        +"this,e=t.indexOf('='),u=e>=0?t.substring(0,e):'',q=e>=0?s.epa(t.substring(e+1)):'';if(u&&q&&(','+u+',').indexOf(','+un+',')>=0){if(u!=s.un&&s.un.indexOf(',')>=0)q='&u='+u+q+'&u=0';return q}return '"
        +"'};s.rq=function(un){if(!un)un=this.un;var s=this,c=un.indexOf(','),v=s.c_r('s_sq'),q='';if(c<0)return s.pt(v,'&','rqf',un);return s.pt(un,',','rq',0)};s.sqp=function(t,a){var s=this,e=t.indexOf('="
        +"'),q=e<0?'':s.epa(t.substring(e+1));s.sqq[q]='';if(e>=0)s.pt(t.substring(0,e),',','sqs',q);return 0};s.sqs=function(un,q){var s=this;s.squ[un]=q;return 0};s.sq=function(q){var s=this,k='s_sq',v=s.c"
        +"_r(k),x,c=0;s.sqq=new Object;s.squ=new Object;s.sqq[q]='';s.pt(v,'&','sqp',0);s.pt(s.un,',','sqs',q);v='';for(x in s.squ)if(x&&(!Object||!Object.prototype||!Object.prototype[x]))s.sqq[s.squ[x]]+=(s"
        +".sqq[s.squ[x]]?',':'')+x;for(x in s.sqq)if(x&&(!Object||!Object.prototype||!Object.prototype[x])&&s.sqq[x]&&(x==q||c<2)){v+=(v?'&':'')+s.sqq[x]+'='+s.ape(x);c++}return s.c_w(k,v,0)};s.wdl=new Funct"
        +"ion('e','var s=s_c_il['+s._in+'],r=true,b=s.eh(s.wd,\"onload\"),i,o,oc;if(b)r=this[b](e);for(i=0;i<s.d.links.length;i++){o=s.d.links[i];oc=o.onclick?\"\"+o.onclick:\"\";if((oc.indexOf(\"s_gs(\")<0|"
        +"|oc.indexOf(\".s_oc(\")>=0)&&oc.indexOf(\".tl(\")<0)s.eh(o,\"onclick\",0,s.lc);}return r');s.wds=function(){var s=this;if(s.apv>3&&(!s.isie||!s.ismac||s.apv>=5)){if(s.b&&s.b.attachEvent)s.b.attachE"
        +"vent('onclick',s.bc);else if(s.b&&s.b.addEventListener)s.b.addEventListener('click',s.bc,false);else s.eh(s.wd,'onload',0,s.wdl)}};s.vs=function(x){var s=this,v=s.visitorSampling,g=s.visitorSamplin"
        +"gGroup,k='s_vsn_'+s.un+(g?'_'+g:''),n=s.c_r(k),e=new Date,y=e.getYear();e.setYear(y+10+(y<1900?1900:0));if(v){v*=100;if(!n){if(!s.c_w(k,x,e))return 0;n=x}if(n%10000>v)return 0}return 1};s.dyasmf=fu"
        +"nction(t,m){if(t&&m&&m.indexOf(t)>=0)return 1;return 0};s.dyasf=function(t,m){var s=this,i=t?t.indexOf('='):-1,n,x;if(i>=0&&m){var n=t.substring(0,i),x=t.substring(i+1);if(s.pt(x,',','dyasmf',m))re"
        +"turn n}return 0};s.uns=function(){var s=this,x=s.dynamicAccountSelection,l=s.dynamicAccountList,m=s.dynamicAccountMatch,n,i;s.un=s.un.toLowerCase();if(x&&l){if(!m)m=s.wd.location.host;if(!m.toLower"
        +"Case)m=''+m;l=l.toLowerCase();m=m.toLowerCase();n=s.pt(l,';','dyasf',m);if(n)s.un=n}i=s.un.indexOf(',');s.fun=i<0?s.un:s.un.substring(0,i)};s.sa=function(un){var s=this;if(s.un&&s.mpc('sa',argument"
        +"s))return;s.un=un;if(!s.oun)s.oun=un;else if((','+s.oun+',').indexOf(','+un+',')<0)s.oun+=','+un;s.uns()};s.m_i=function(n,a){var s=this,m,f=n.substring(0,1),r,l,i;if(!s.m_l)s.m_l=new Object;if(!s."
        +"m_nl)s.m_nl=new Array;m=s.m_l[n];if(!a&&m&&m._e&&!m._i)s.m_a(n);if(!m){m=new Object,m._c='s_m';m._in=s.wd.s_c_in;m._il=s._il;m._il[m._in]=m;s.wd.s_c_in++;m.s=s;m._n=n;m._l=new Array('_c','_in','_il"
        +"','_i','_e','_d','_dl','s','n','_r','_g','_g1','_t','_t1','_x','_x1','_rs','_rr','_l');s.m_l[n]=m;s.m_nl[s.m_nl.length]=n}else if(m._r&&!m._m){r=m._r;r._m=m;l=m._l;for(i=0;i<l.length;i++)if(m[l[i]]"
        +")r[l[i]]=m[l[i]];r._il[r._in]=r;m=s.m_l[n]=r}if(f==f.toUpperCase())s[n]=m;return m};s.m_a=new Function('n','g','e','if(!g)g=\"m_\"+n;var s=s_c_il['+s._in+'],c=s[g+\"_c\"],m,x,f=0;if(s.mpc(\"m_a\",a"
        +"rguments))return;if(!c)c=s.wd[\"s_\"+g+\"_c\"];if(c&&s_d)s[g]=new Function(\"s\",s_ft(s_d(c)));x=s[g];if(!x)x=s.wd[\\'s_\\'+g];if(!x)x=s.wd[g];m=s.m_i(n,1);if(x&&(!m._i||g!=\"m_\"+n)){m._i=f=1;if(("
        +"\"\"+x).indexOf(\"function\")>=0)x(s);else s.m_m(\"x\",n,x,e)}m=s.m_i(n,1);if(m._dl)m._dl=m._d=0;s.dlt();return f');s.m_m=function(t,n,d,e){t='_'+t;var s=this,i,x,m,f='_'+t,r=0,u;if(s.m_l&&s.m_nl)f"
        +"or(i=0;i<s.m_nl.length;i++){x=s.m_nl[i];if(!n||x==n){m=s.m_i(x);u=m[t];if(u){if((''+u).indexOf('function')>=0){if(d&&e)u=m[t](d,e);else if(d)u=m[t](d);else u=m[t]()}}if(u)r=1;u=m[t+1];if(u&&!m[f]){"
        +"if((''+u).indexOf('function')>=0){if(d&&e)u=m[t+1](d,e);else if(d)u=m[t+1](d);else u=m[t+1]()}}m[f]=1;if(u)r=1}}return r};s.m_ll=function(){var s=this,g=s.m_dl,i,o;if(g)for(i=0;i<g.length;i++){o=g["
        +"i];if(o)s.loadModule(o.n,o.u,o.d,o.l,o.e,1);g[i]=0}};s.loadModule=function(n,u,d,l,e,ln){var s=this,m=0,i,g,o=0,f1,f2,c=s.h?s.h:s.b,b,tcf;if(n){i=n.indexOf(':');if(i>=0){g=n.substring(i+1);n=n.subs"
        +"tring(0,i)}else g=\"m_\"+n;m=s.m_i(n)}if((l||(n&&!s.m_a(n,g)))&&u&&s.d&&c&&s.d.createElement){if(d){m._d=1;m._dl=1}if(ln){if(s.ssl)u=s.rep(u,'http:','https:');i='s_s:'+s._in+':'+n+':'+g;b='var s=s_"
        +"c_il['+s._in+'],o=s.d.getElementById(\"'+i+'\");if(s&&o){if(!o.l&&s.wd.'+g+'){o.l=1;if(o.i)clearTimeout(o.i);o.i=0;s.m_a(\"'+n+'\",\"'+g+'\"'+(e?',\"'+e+'\"':'')+')}';f2=b+'o.c++;if(!s.maxDelay)s.m"
        +"axDelay=250;if(!o.l&&o.c<(s.maxDelay*2)/100)o.i=setTimeout(o.f2,100)}';f1=new Function('e',b+'}');tcf=new Function('s','c','i','u','f1','f2','var e,o=0;try{o=s.d.createElement(\"script\");if(o){o.t"
        +"ype=\"text/javascript\";'+(n?'o.id=i;o.defer=true;o.onload=o.onreadystatechange=f1;o.f2=f2;o.l=0;':'')+'o.src=u;c.appendChild(o);'+(n?'o.c=0;o.i=setTimeout(f2,100)':'')+'}}catch(e){o=0}return o');o"
        +"=tcf(s,c,i,u,f1,f2)}else{o=new Object;o.n=n+':'+g;o.u=u;o.d=d;o.l=l;o.e=e;g=s.m_dl;if(!g)g=s.m_dl=new Array;i=0;while(i<g.length&&g[i])i++;g[i]=o}}else if(n){m=s.m_i(n);m._e=1}return m};s.voa=funct"
        +"ion(vo,r){var s=this,l=s.va_g,i,k,v,x;for(i=0;i<l.length;i++){k=l[i];v=vo[k];if(v||vo['!'+k]){if(!r&&(k==\"contextData\"||k==\"retrieveLightData\")&&s[k])for(x in s[k])if(!v[x])v[x]=s[k][x];s[k]=v}"
        +"}};s.vob=function(vo){var s=this,l=s.va_g,i,k;for(i=0;i<l.length;i++){k=l[i];vo[k]=s[k];if(!vo[k])vo['!'+k]=1}};s.dlt=new Function('var s=s_c_il['+s._in+'],d=new Date,i,vo,f=0;if(s.dll)for(i=0;i<s."
        +"dll.length;i++){vo=s.dll[i];if(vo){if(!s.m_m(\"d\")||d.getTime()-vo._t>=s.maxDelay){s.dll[i]=0;s.t(vo)}else f=1}}if(s.dli)clearTimeout(s.dli);s.dli=0;if(f){if(!s.dli)s.dli=setTimeout(s.dlt,s.maxDel"
        +"ay)}else s.dll=0');s.dl=function(vo){var s=this,d=new Date;if(!vo)vo=new Object;s.vob(vo);vo._t=d.getTime();if(!s.dll)s.dll=new Array;s.dll[s.dll.length]=vo;if(!s.maxDelay)s.maxDelay=250;s.dlt()};s"
        +".track=s.t=function(vo){var s=this,trk=1,tm=new Date,sed=Math&&Math.random?Math.floor(Math.random()*10000000000000):tm.getTime(),sess='s'+Math.floor(tm.getTime()/10800000)%10+sed,y=tm.getYear(),vt="
        +"tm.getDate()+'/'+tm.getMonth()+'/'+(y<1900?y+1900:y)+' '+tm.getHours()+':'+tm.getMinutes()+':'+tm.getSeconds()+' '+tm.getDay()+' '+tm.getTimezoneOffset(),tcf,tfs=s.gtfs(),ta=-1,q='',qs='',code='',v"
        +"b=new Object;if(s.mpc('t',arguments))return;s.gl(s.vl_g);s.uns();s.m_ll();if(!s.td){var tl=tfs.location,a,o,i,x='',c='',v='',p='',bw='',bh='',j='1.0',k=s.c_w('s_cc','true',0)?'Y':'N',hp='',ct='',pn"
        +"=0,ps;if(String&&String.prototype){j='1.1';if(j.match){j='1.2';if(tm.setUTCDate){j='1.3';if(s.isie&&s.ismac&&s.apv>=5)j='1.4';if(pn.toPrecision){j='1.5';a=new Array;if(a.forEach){j='1.6';i=0;o=new "
        +"Object;tcf=new Function('o','var e,i=0;try{i=new Iterator(o)}catch(e){}return i');i=tcf(o);if(i&&i.next)j='1.7'}}}}}if(s.apv>=4)x=screen.width+'x'+screen.height;if(s.isns||s.isopera){if(s.apv>=3){v"
        +"=s.n.javaEnabled()?'Y':'N';if(s.apv>=4){c=screen.pixelDepth;bw=s.wd.innerWidth;bh=s.wd.innerHeight}}s.pl=s.n.plugins}else if(s.isie){if(s.apv>=4){v=s.n.javaEnabled()?'Y':'N';c=screen.colorDepth;if("
        +"s.apv>=5){bw=s.d.documentElement.offsetWidth;bh=s.d.documentElement.offsetHeight;if(!s.ismac&&s.b){tcf=new Function('s','tl','var e,hp=0;try{s.b.addBehavior(\"#default#homePage\");hp=s.b.isHomePage"
        +"(tl)?\"Y\":\"N\"}catch(e){}return hp');hp=tcf(s,tl);tcf=new Function('s','var e,ct=0;try{s.b.addBehavior(\"#default#clientCaps\");ct=s.b.connectionType}catch(e){}return ct');ct=tcf(s)}}}else r=''}i"
        +"f(s.pl)while(pn<s.pl.length&&pn<30){ps=s.fl(s.pl[pn].name,100)+';';if(p.indexOf(ps)<0)p+=ps;pn++}s.resolution=x;s.colorDepth=c;s.javascriptVersion=j;s.javaEnabled=v;s.cookiesEnabled=k;s.browserWidt"
        +"h=bw;s.browserHeight=bh;s.connectionType=ct;s.homepage=hp;s.plugins=p;s.td=1}if(vo){s.vob(vb);s.voa(vo)}if((vo&&vo._t)||!s.m_m('d')){if(s.usePlugins)s.doPlugins(s);var l=s.wd.location,r=tfs.documen"
        +"t.referrer;if(!s.pageURL)s.pageURL=l.href?l.href:l;if(!s.referrer&&!s._1_referrer){s.referrer=r;s._1_referrer=1}s.m_m('g');if(s.lnk||s.eo){var o=s.eo?s.eo:s.lnk,p=s.pageName,w=1,t=s.ot(o),n=s.oid(o"
        +"),x=o.s_oidt,h,l,i,oc;if(s.eo&&o==s.eo){while(o&&!n&&t!='BODY'){o=o.parentElement?o.parentElement:o.parentNode;if(o){t=s.ot(o);n=s.oid(o);x=o.s_oidt}}if(!n||t=='BODY')o='';if(o){oc=o.onclick?''+o.o"
        +"nclick:'';if((oc.indexOf('s_gs(')>=0&&oc.indexOf('.s_oc(')<0)||oc.indexOf('.tl(')>=0)o=0}}if(o){if(n)ta=o.target;h=s.oh(o);i=h.indexOf('?');h=s.linkLeaveQueryString||i<0?h:h.substring(0,i);l=s.link"
        +"Name;t=s.linkType?s.linkType.toLowerCase():s.lt(h);if(t&&(h||l)){s.pe='lnk_'+(t=='d'||t=='e'?t:'o');s.pev1=(h?s.ape(h):'');s.pev2=(l?s.ape(l):'')}else trk=0;if(s.trackInlineStats){if(!p){p=s.pageUR"
        +"L;w=0}t=s.ot(o);i=o.sourceIndex;if(s.gg('objectID')){n=s.gg('objectID');x=1;i=1}if(p&&n&&t)qs='&pid='+s.ape(s.fl(p,255))+(w?'&pidt='+w:'')+'&oid='+s.ape(s.fl(n,100))+(x?'&oidt='+x:'')+'&ot='+s.ape("
        +"t)+(i?'&oi='+i:'')}}else trk=0}if(trk||qs){s.sampled=s.vs(sed);if(trk){if(s.sampled)code=s.mr(sess,(vt?'&t='+s.ape(vt):'')+s.hav()+q+(qs?qs:s.rq()),0,ta);qs='';s.m_m('t');if(s.p_r)s.p_r();s.referre"
        +"r=s.lightProfileID=s.retrieveLightProfiles=s.deleteLightProfiles=''}s.sq(qs)}}else s.dl(vo);if(vo)s.voa(vb,1);s.lnk=s.eo=s.linkName=s.linkType=s.wd.s_objectID=s.ppu=s.pe=s.pev1=s.pev2=s.pev3='';if("
        +"s.pg)s.wd.s_lnk=s.wd.s_eo=s.wd.s_linkName=s.wd.s_linkType='';return code};s.trackLink=s.tl=function(o,t,n,vo){var s=this;s.lnk=s.co(o);s.linkType=t;s.linkName=n;s.t(vo)};s.trackLight=function(p,ss,"
        +"i,vo){var s=this;s.lightProfileID=p;s.lightStoreForSeconds=ss;s.lightIncrementBy=i;s.t(vo)};s.setTagContainer=function(n){var s=this,l=s.wd.s_c_il,i,t,x,y;s.tcn=n;if(l)for(i=0;i<l.length;i++){t=l[i"
        +"];if(t&&t._c=='s_l'&&t.tagContainerName==n){s.voa(t);if(t.lmq)for(i=0;i<t.lmq.length;i++){x=t.lmq[i];y='m_'+x.n;if(!s[y]&&!s[y+'_c']){s[y]=t[y];s[y+'_c']=t[y+'_c']}s.loadModule(x.n,x.u,x.d)}if(t.ml"
        +")for(x in t.ml)if(s[x]){y=s[x];x=t.ml[x];for(i in x)if(!Object.prototype[i]){if(typeof(x[i])!='function'||(''+x[i]).indexOf('s_c_il')<0)y[i]=x[i]}}if(t.mmq)for(i=0;i<t.mmq.length;i++){x=t.mmq[i];if"
        +"(s[x.m]){y=s[x.m];if(y[x.f]&&typeof(y[x.f])=='function'){if(x.a)y[x.f].apply(y,x.a);else y[x.f].apply(y)}}}if(t.tq)for(i=0;i<t.tq.length;i++)s.t(t.tq[i]);t.s=s;return}}};s.wd=window;s.ssl=(s.wd.loc"
        +"ation.protocol.toLowerCase().indexOf('https')>=0);s.d=document;s.b=s.d.body;if(s.d.getElementsByTagName){s.h=s.d.getElementsByTagName('HEAD');if(s.h)s.h=s.h[0]}s.n=navigator;s.u=s.n.userAgent;s.ns6"
        +"=s.u.indexOf('Netscape6/');var apn=s.n.appName,v=s.n.appVersion,ie=v.indexOf('MSIE '),o=s.u.indexOf('Opera '),i;if(v.indexOf('Opera')>=0||o>0)apn='Opera';s.isie=(apn=='Microsoft Internet Explorer')"
        +";s.isns=(apn=='Netscape');s.isopera=(apn=='Opera');s.ismac=(s.u.indexOf('Mac')>=0);if(o>0)s.apv=parseFloat(s.u.substring(o+6));else if(ie>0){s.apv=parseInt(i=v.substring(ie+5));if(s.apv>3)s.apv=par"
        +"seFloat(i)}else if(s.ns6>0)s.apv=parseFloat(s.u.substring(s.ns6+10));else s.apv=parseFloat(v);s.em=0;if(s.em.toPrecision)s.em=3;else if(String.fromCharCode){i=escape(String.fromCharCode(256)).toUpp"
        +"erCase();s.em=(i=='%C4%80'?2:(i=='%U0100'?1:0))}if(s.oun)s.sa(s.oun);s.sa(un);s.vl_l='timestamp,dynamicVariablePrefix,visitorID,vmk,visitorMigrationKey,visitorMigrationServer,visitorMigrationServer"
        +"Secure,ppu,charSet,visitorNamespace,cookieDomainPeriods,cookieLifetime,pageName,pageURL,referrer,contextData,currencyCode,lightProfileID,lightStoreForSeconds,lightIncrementBy,retrieveLightProfiles,"
        +"deleteLightProfiles,retrieveLightData';s.va_l=s.sp(s.vl_l,',');s.vl_mr=s.vl_m='timestamp,charSet,visitorNamespace,cookieDomainPeriods,cookieLifetime,contextData,lightProfileID,lightStoreForSeconds,"
        +"lightIncrementBy';s.vl_t=s.vl_l+',variableProvider,channel,server,pageType,transactionID,purchaseID,campaign,state,zip,events,events2,products,linkName,linkType';var n;for(n=1;n<=75;n++){s.vl_t+=',"
        +"prop'+n+',eVar'+n;s.vl_m+=',prop'+n+',eVar'+n}for(n=1;n<=5;n++)s.vl_t+=',hier'+n;for(n=1;n<=3;n++)s.vl_t+=',list'+n;s.va_m=s.sp(s.vl_m,',');s.vl_l2=',tnt,pe,pev1,pev2,pev3,resolution,colorDepth,jav"
        +"ascriptVersion,javaEnabled,cookiesEnabled,browserWidth,browserHeight,connectionType,homepage,plugins';s.vl_t+=s.vl_l2;s.va_t=s.sp(s.vl_t,',');s.vl_g=s.vl_t+',trackingServer,trackingServerSecure,tra"
        +"ckingServerBase,fpCookieDomainPeriods,disableBufferedRequests,mobile,visitorSampling,visitorSamplingGroup,dynamicAccountSelection,dynamicAccountList,dynamicAccountMatch,trackDownloadLinks,trackExte"
        +"rnalLinks,trackInlineStats,linkLeaveQueryString,linkDownloadFileTypes,linkExternalFilters,linkInternalFilters,linkTrackVars,linkTrackEvents,linkNames,lnk,eo,lightTrackVars,_1_referrer,un';s.va_g=s."
        +"sp(s.vl_g,',');s.pg=pg;s.gl(s.vl_g);s.contextData=new Object;s.retrieveLightData=new Object;if(!ss)s.wds();if(pg){s.wd.s_co=function(o){s_gi(\"_\",1,1).co(o)};s.wd.s_gs=function(un){s_gi(un,1,1).t("
        +")};s.wd.s_dc=function(un){s_gi(un,1).t()}}",
    w=window,l=w.s_c_il,n=navigator,u=n.userAgent,v=n.appVersion,e=v.indexOf('MSIE '),m=u.indexOf('Netscape6/'),a,i,j,x,s;if(un){un=un.toLowerCase();if(l)for(j=0;j<2;j++)for(i=0;i<l.length;i++){s=l[i];x=s._c;if((!x||x=='s_c'||(j>0&&x=='s_l'))&&(s.oun==un||(s.fs&&s.sa&&s.fs(s.oun,un)))){if(s.sa)s.sa(un);if(x=='s_c')return s}else s=0}}w.s_an='0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    w.s_sp=new Function("x","d","var a=new Array,i=0,j;if(x){if(x.split)a=x.split(d);else if(!d)for(i=0;i<x.length;i++)a[a.length]=x.substring(i,i+1);else while(i>=0){j=x.indexOf(d,i);a[a.length]=x.subst"
        +"ring(i,j<0?x.length:j);i=j;if(i>=0)i+=d.length}}return a");
    w.s_jn=new Function("a","d","var x='',i,j=a.length;if(a&&j>0){x=a[0];if(j>1){if(a.join)x=a.join(d);else for(i=1;i<j;i++)x+=d+a[i]}}return x");
    w.s_rep=new Function("x","o","n","return s_jn(s_sp(x,o),n)");
    w.s_d=new Function("x","var t='`^@$#',l=s_an,l2=new Object,x2,d,b=0,k,i=x.lastIndexOf('~~'),j,v,w;if(i>0){d=x.substring(0,i);x=x.substring(i+2);l=s_sp(l,'');for(i=0;i<62;i++)l2[l[i]]=i;t=s_sp(t,'');d"
        +"=s_sp(d,'~');i=0;while(i<5){v=0;if(x.indexOf(t[i])>=0) {x2=s_sp(x,t[i]);for(j=1;j<x2.length;j++){k=x2[j].substring(0,1);w=t[i]+k;if(k!=' '){v=1;w=d[b+l2[k]]}x2[j]=w+x2[j].substring(1)}}if(v)x=s_jn("
        +"x2,'');else{w=t[i]+' ';if(x.indexOf(w)>=0)x=s_rep(x,w,t[i]);i++;b+=62}}}return x");
    w.s_fe=new Function("c","return s_rep(s_rep(s_rep(c,'\\\\','\\\\\\\\'),'\"','\\\\\"'),\"\\n\",\"\\\\n\")");
    w.s_fa=new Function("f","var s=f.indexOf('(')+1,e=f.indexOf(')'),a='',c;while(s>=0&&s<e){c=f.substring(s,s+1);if(c==',')a+='\",\"';else if((\"\\n\\r\\t \").indexOf(c)<0)a+=c;s++}return a?'\"'+a+'\"':"
        +"a");
    w.s_ft=new Function("c","c+='';var s,e,o,a,d,q,f,h,x;s=c.indexOf('=function(');while(s>=0){s++;d=1;q='';x=0;f=c.substring(s);a=s_fa(f);e=o=c.indexOf('{',s);e++;while(d>0){h=c.substring(e,e+1);if(q){i"
        +"f(h==q&&!x)q='';if(h=='\\\\')x=x?0:1;else x=0}else{if(h=='\"'||h==\"'\")q=h;if(h=='{')d++;if(h=='}')d--}if(d>0)e++}c=c.substring(0,s)+'new Function('+(a?a+',':'')+'\"'+s_fe(c.substring(o+1,e))+'\")"
        +"'+c.substring(e+1);s=c.indexOf('=function(')}return c;");
    c=s_d(c);if(e>0){a=parseInt(i=v.substring(e+5));if(a>3)a=parseFloat(i)}else if(m>0)a=parseFloat(u.substring(m+10));else a=parseFloat(v);if(a<5||v.indexOf('Opera')>=0||u.indexOf('Opera')>=0)c=s_ft(c);if(!s){s=new Object;if(!w.s_c_in){w.s_c_il=new Array;w.s_c_in=0}s._il=w.s_c_il;s._in=w.s_c_in;s._il[s._in]=s;w.s_c_in++;}s._c='s_c';(new Function("s","un","pg","ss",c))(s,un,pg,ss);return s}
function s_giqf(){var w=window,q=w.s_giq,i,t,s;if(q)for(i=0;i<q.length;i++){t=q[i];s=s_gi(t.oun);s.sa(t.un);s.setTagContainer(t.tagContainerName)}w.s_giq=0}s_giqf()