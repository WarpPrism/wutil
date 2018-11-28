var chalkPrint=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"green";e=toString(e)||"",console.log("%c"+e,"font-weight: bold; color: ".concat(r))},_print=Object.freeze({chalkPrint:chalkPrint}),randomColor=function(){return"#"+("00000"+(16777216*Math.random()<<0).toString(16)).slice(-6)},randomInt=function(e,r){return Math.floor(e+Math.random()*(r-e))},randomString=function(e){for(var r="abcdefghijklmnopqrstuvwxyz0123456789",t="",n=0;n<e;n++)t+=r.charAt(Math.round(Math.random()*r.length));return t},_random=Object.freeze({randomColor:randomColor,randomInt:randomInt,randomString:randomString}),isArr=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return Array.isArray?Array.isArray(e):"[object Array]"===Object.prototype.toString.call(e)},quickSortArr=function e(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(isArr(r)){if(r.length<=1)return r;for(var n=Math.floor(r.length/2),o=r.splice(n,1)[0],i=[],a=[],c=0;c<r.length;c++)t&&o.hasOwnProperty(t)?r[c][t]<o[t]?i.push(r[c]):a.push(r[c]):r[c]<o?i.push(r[c]):a.push(r[c]);return e(i,t).concat([o],e(a,t))}return chalkPrint("[quickSortArr] argument is not Array.","red"),[]},uniqueArr=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];if(isArr(e)){if(e.length<=1)return e;for(var r=[],t={},n=0;n<e.length;n++){var o=e[n],i=!1;Object.keys(t).forEach(function(e){o!==t[e]||(i=!0)}),i||(t[n]=o,r.push(o))}return r}return chalkPrint("[uniqueArr] argument is not Array.","red"),[]},shuffleArr=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];if(!isArr(e))return chalkPrint("[shuffleArr] argument is not Array.","red"),[];for(var r=e.slice(),t=0,n=r.length;t<n;t++){var o=randomInt(0,t),i=r[t];r[t]=r[o],r[o]=i}return r},binarySearchArr=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=arguments.length>1?arguments[1]:void 0;if(!isArr(e))return chalkPrint("[binarySearchArr] argument is not Array.","red"),-1;for(var t,n=0,o=(e=quickSortArr(e)).length-1;n<o;){var i=Math.floor((n+o)/2);if(e[i]===r)return t=i;e[i]<r?n=i+1:e[i]>r&&(o=i)}return t},_array=Object.freeze({isArr:isArr,quickSortArr:quickSortArr,uniqueArr:uniqueArr,shuffleArr:shuffleArr,binarySearchArr:binarySearchArr}),formatDate=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"yyyy.MM.dd hh:mm:ss";arguments.length>2&&void 0!==arguments[2]&&arguments[2]&&(t*=1e3);var t=new Date(e),n={M:t.getMonth()+1,d:t.getDate(),h:t.getHours(),m:t.getMinutes(),s:t.getSeconds(),S:t.getMilliseconds(),q:Math.floor((t.getMonth()+3)/3)};return r=r.replace(/([yMdhmsSq])+/g,function(e,r){var o=n[r];return void 0!==o?(e.length>1&&(o=(o="0"+o).substr(o.length-2)),o):"y"===r?(t.getFullYear()+"").substr(4-e.length):e})},getDateObj=function(e){(!e||"number"!=typeof e&&"string"!=typeof e)&&(e=+new Date);var r=new Date(e);return{year:r.getFullYear(),month:r.getMonth()+1,day:r.getDate(),hour:r.getHours(),minute:r.getMinutes(),second:r.getSeconds(),millsecond:r.getMilliseconds(),quarter:Math.floor((r.getMonth()+3)/3)}},_date=Object.freeze({formatDate:formatDate,getDateObj:getDateObj});function hasClass(e,r){return new RegExp("(\\s|^)"+r+"(\\s|$)").test(e.className)}function addClass(e,r){if(e.classList){r.split(" ").map(function(r){return e.classList.add(r)})}else{var t=" "+(e.getAttribute("class")||"")+" ";t.indexOf(" "+r+" ")<0&&setClass(e,(t+r).trim())}}function removeClass(e,r){if(e.classList)e.classList.remove(r);else{for(var t=" "+(e.getAttribute("class")||"")+" ",n=" "+r+" ";t.indexOf(n)>=0;)t=t.replace(n," ");setClass(e,t.trim())}e.className||e.removeAttribute("class")}var _dom=Object.freeze({hasClass:hasClass,addClass:addClass,removeClass:removeClass});function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function debounce(e,r,t){var n,o,i,a,c,s,u=0,f=!1,l=!1,d=!0,g=!r&&0!==r&&"function"==typeof requestAnimationFrame;if("function"!=typeof e)throw new TypeError("Expected a function");function m(r){var t=n,i=o;return n=o=void 0,u=r,a=e.apply(i,t)}function h(e,r){return g?requestAnimationFrame(e):setTimeout(e,r)}function p(e){var t=e-s;return void 0===s||t>=r||t<0||l&&e-u>=i}function v(){var e=Date.now();if(p(e))return y(e);c=h(v,function(e){var t=e-u,n=r-(e-s);return l?Math.min(n,i-t):n}(e))}function y(e){return c=void 0,d&&n?m(e):(n=o=void 0,a)}function b(){for(var e=Date.now(),t=p(e),i=arguments.length,d=new Array(i),g=0;g<i;g++)d[g]=arguments[g];if(n=d,o=this,s=e,t){if(void 0===c)return function(e){return u=e,c=h(v,r),f?m(e):a}(s);if(l)return c=h(v,r),m(s)}return void 0===c&&(c=h(v,r)),a}return r=+r||0,"object"===_typeof(t)&&(f=!!t.leading,i=(l="maxWait"in t)?Math.max(+t.maxWait||0,r):i,d="trailing"in t?!!t.trailing:d),b.cancel=function(){void 0!==c&&function(e){if(g)return cancelAnimationFrame(e);clearTimeout(e)}(c),u=0,n=s=o=c=void 0},b.flush=function(){return void 0===c?a:y(Date.now())},b.pending=function(){return void 0!==c},b}function throttle(e,r,t){var n=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return"object"===_typeof(t)&&(n="leading"in t?!!t.leading:n,o="trailing"in t?!!t.trailing:o),debounce(e,r,{leading:n,maxWait:r,trailing:o})}var _function=Object.freeze({debounce:debounce,throttle:throttle}),isPlainObj=function(e){if("object"!=_typeof(e)||"[object Object]"!=Object.prototype.toString.call(e))return!1;if(null===Object.getPrototypeOf(e))return!0;for(var r=e;null!==Object.getPrototypeOf(r);)r=Object.getPrototypeOf(r);return Object.getPrototypeOf(e)===r},isEmptyObj=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!isPlainObj(e))return!1;for(var r in e)return!1;return!0},extend=function e(){var r,t,n,o,i,a,c=arguments[0]||{},s=1,u=arguments.length,f=!1;for("boolean"==typeof c&&(f=c,c=arguments[s]||{},s++),"object"!==_typeof(c)&&"function"!=typeof c&&(c={}),s===u&&(c=this,s--);s<u;s++)if(null!=(r=arguments[s]))for(t in r)n=c[t],c!==(o=r[t])&&(i=Array.isArray(o),f&&o&&(isPlainObj(o)||i)?(i?(i=!1,a=n&&Array.isArray(n)?n:[]):a=n&&isPlainObj(n)?n:{},c[t]=e(f,a,o)):void 0!==o&&(c[t]=o));return c},stringfyQueryString=function(e){if(!e)return"";var r=[];for(var t in e){var n=e[t];if(n instanceof Array)for(var o=0;o<n.length;++o)r.push(encodeURIComponent(t+"["+o+"]")+"="+encodeURIComponent(n[o]));else r.push(encodeURIComponent(t)+"="+encodeURIComponent(e[t]))}return r.join("&")},_object=Object.freeze({isPlainObj:isPlainObj,isEmptyObj:isEmptyObj,extend:extend,stringfyQueryString:stringfyQueryString}),getOS=function(){var e="navigator"in window&&"userAgent"in navigator&&navigator.userAgent.toLowerCase()||"",r=("navigator"in window&&"vendor"in navigator&&navigator.vendor.toLowerCase(),"navigator"in window&&"appVersion"in navigator&&navigator.appVersion.toLowerCase()||"");return/iphone/i.test(e)||/ipad/i.test(e)||/ipod/i.test(e)?"ios":/android/i.test(e)?"android":/win/i.test(r)&&/phone/i.test(e)?"windowsPhone":/mac/i.test(r)?"MacOSX":/win/i.test(r)?"windows":/linux/i.test(r)?"linux":void 0},getBrowser=function(){var e,r={},t=navigator.userAgent.toLowerCase();return(e=t.match(/rv:([\d.]+)\) like gecko/))?r.ie=e[1]:(e=t.match(/msie ([\d\.]+)/))?r.ie=e[1]:(e=t.match(/edge\/([\d\.]+)/))?r.edge=e[1]:(e=t.match(/firefox\/([\d\.]+)/))?r.firefox=e[1]:(e=t.match(/(?:opera|opr).([\d\.]+)/))?r.opera=e[1]:(e=t.match(/chrome\/([\d\.]+)/))?r.chrome=e[1]:(e=t.match(/version\/([\d\.]+).*safari/))&&(r.safari=e[1]),r.ie?"IE: "+r.ie:r.edge?"EDGE: "+r.edge:r.firefox?"Firefox: "+r.firefox:r.chrome?"Chrome: "+r.chrome:r.opera?"Opera: "+r.opera:r.safari?"Safari: "+r.safari:"Unkonwn"},isWeixin=function(){return"micromessenger"==navigator.userAgent.toLowerCase().match(/MicroMessenger/i)},_platform=Object.freeze({getOS:getOS,getBrowser:getBrowser,isWeixin:isWeixin});function isEmail(e){return/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(e)}function isIdCard(e){return/^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(e)}function isPhoneNum(e){return/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/.test(e)}function isUrl(e){return/[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&\/\/=]*)/i.test(e)}var _regexp=Object.freeze({isEmail:isEmail,isIdCard:isIdCard,isPhoneNum:isPhoneNum,isUrl:isUrl}),setCookie=function(e,r,t,n,o,i){if(!e||!r)return!1;var a=encodeURIComponent(e)+"="+encodeURIComponent(r);if(t){var c=new Date;c.setTime(c.getTime()+24*t*60*60*1e3),a+="; expires="+c.toGMTString()}return n&&(a+="; path="+n),o&&(a+="; domain="+o),i&&(a+="; secure"),document.cookie=a,!0},getCookie=function(e){if(!e)return"";var r=encodeURIComponent(e)+"=",t=document.cookie.indexOf(r),n=null;if(t>-1){var o=document.cookie.indexOf(";",t);-1==o&&(o=document.cookie.length),n=document.cookie.substring(t+r.length,o)}return n},removeCookie=function(e,r,t){var n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if(!e)return!1;var o=encodeURIComponent(e)+"="+encodeURIComponent(""),i=new Date;return i.setTime(i.getTime()+0),o+="; expires="+i.toGMTString(),r&&(o+="; path="+r),t&&(o+="; domain="+t),n&&(o+="; secure"),document.cookie=o,!0},_storage=Object.freeze({setCookie:setCookie,getCookie:getCookie,removeCookie:removeCookie}),upcaseMoney=function(e){var r=["角","分"],t=["零","壹","贰","叁","肆","伍","陆","柒","捌","玖"],n=[["元","万","亿"],["","拾","佰","仟"]],o=(e=parseFloat(e))<0?"欠":"";e=Math.abs(e);for(var i="",a=0;a<r.length;a++)i+=(t[Math.floor(10*e*Math.pow(10,a))%10]+r[a]).replace(/零./,"");i=i||"整",e=Math.floor(e);for(a=0;a<n[0].length&&e>0;a++){for(var c="",s=0;s<n[1].length&&e>0;s++)c=t[e%10]+n[1][s]+c,e=Math.floor(e/10);i=c.replace(/(零.)*零$/,"").replace(/^$/,"零")+n[0][a]+i}return o+i.replace(/(零.)*零元/,"元").replace(/(零.)+/g,"零").replace(/^整$/,"零元整")},replaceXSS=function(e){var r={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"};return void 0===e?"":String(e).replace(/[&<>'"]/g,function(e){return r[e]||e})},parseQueryString=function(e){var r=(e=null==e?window.location.href:e).substring(e.lastIndexOf("?")+1);if(!r)return{};for(;"&"==r[r.length-1];)r=r.slice(0,r.length-1);return JSON.parse('{"'+decodeURIComponent(r).replace(/"/g,'\\"').replace(/&/g,'","').replace(/=/g,'":"')+'"}')},b64EncodeUnicode=function(e){return btoa(encodeURIComponent(e).replace(/%([0-9A-F]{2})/g,function(e,r){return String.fromCharCode("0x"+r)}))},b64DecodeUnicode=function(e){return decodeURIComponent(atob(e).split("").map(function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)}).join(""))},_string=Object.freeze({upcaseMoney:upcaseMoney,replaceXSS:replaceXSS,parseQueryString:parseQueryString,b64EncodeUnicode:b64EncodeUnicode,b64DecodeUnicode:b64DecodeUnicode}),wutils=Object.assign({},_array,_date,_dom,_function,_object,_platform,_print,_random,_regexp,_storage,_string);export default wutils;export{isArr,quickSortArr,uniqueArr,shuffleArr,binarySearchArr,formatDate,getDateObj,hasClass,addClass,removeClass,debounce,throttle,isPlainObj,isEmptyObj,extend,stringfyQueryString,getOS,getBrowser,isWeixin,chalkPrint,randomColor,randomInt,randomString,isEmail,isIdCard,isPhoneNum,isUrl,setCookie,getCookie,removeCookie,upcaseMoney,replaceXSS,parseQueryString,b64EncodeUnicode,b64DecodeUnicode};
//# sourceMappingURL=wutils.js.map
