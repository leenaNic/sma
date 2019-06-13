/*! jQuery v1.12.4 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=a.document,e=c.slice,f=c.concat,g=c.push,h=c.indexOf,i={},j=i.toString,k=i.hasOwnProperty,l={},m="1.12.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return e.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:e.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a){return n.each(this,a)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(e.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:g,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(n.isPlainObject(c)||(b=n.isArray(c)))?(b?(b=!1,f=a&&n.isArray(a)?a:[]):f=a&&n.isPlainObject(a)?a:{},g[d]=n.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray||function(a){return"array"===n.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){var b=a&&a.toString();return!n.isArray(a)&&b-parseFloat(b)+1>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;try{if(a.constructor&&!k.call(a,"constructor")&&!k.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(!l.ownFirst)for(b in a)return k.call(a,b);for(b in a);return void 0===b||k.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?i[j.call(a)]||"object":typeof a},globalEval:function(b){b&&n.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(s(a)){for(c=a.length;c>d;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):g.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(h)return h.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,g=0,h=[];if(s(a))for(d=a.length;d>g;g++)e=b(a[g],g,c),null!=e&&h.push(e);else for(g in a)e=b(a[g],g,c),null!=e&&h.push(e);return f.apply([],h)},guid:1,proxy:function(a,b){var c,d,f;return"string"==typeof b&&(f=a[b],b=a,a=f),n.isFunction(a)?(c=e.call(arguments,2),d=function(){return a.apply(b||this,c.concat(e.call(arguments)))},d.guid=a.guid=a.guid||n.guid++,d):void 0},now:function(){return+new Date},support:l}),"function"==typeof Symbol&&(n.fn[Symbol.iterator]=c[Symbol.iterator]),n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){i["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=!!a&&"length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ga(),z=ga(),A=ga(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+L+"*\\]",O=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+N+")*)|.*)\\)|)",P=new RegExp(L+"+","g"),Q=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),R=new RegExp("^"+L+"*,"+L+"*"),S=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),T=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),U=new RegExp(O),V=new RegExp("^"+M+"$"),W={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,$=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_=/[+~]/,aa=/'|\\/g,ba=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),ca=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},da=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(ea){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fa(a,b,d,e){var f,h,j,k,l,o,r,s,w=b&&b.ownerDocument,x=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==x&&9!==x&&11!==x)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==x&&(o=$.exec(a)))if(f=o[1]){if(9===x){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(w&&(j=w.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(o[2])return H.apply(d,b.getElementsByTagName(a)),d;if((f=o[3])&&c.getElementsByClassName&&b.getElementsByClassName)return H.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==x)w=b,s=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(aa,"\\$&"):b.setAttribute("id",k=u),r=g(a),h=r.length,l=V.test(k)?"#"+k:"[id='"+k+"']";while(h--)r[h]=l+" "+qa(r[h]);s=r.join(","),w=_.test(a)&&oa(b.parentNode)||b}if(s)try{return H.apply(d,w.querySelectorAll(s)),d}catch(y){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(Q,"$1"),b,d,e)}function ga(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ha(a){return a[u]=!0,a}function ia(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ja(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function ka(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function la(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function na(a){return ha(function(b){return b=+b,ha(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function oa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=fa.support={},f=fa.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fa.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ia(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ia(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Z.test(n.getElementsByClassName),c.getById=ia(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return"undefined"!=typeof b.getElementsByClassName&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=Z.test(n.querySelectorAll))&&(ia(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ia(function(a){var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Z.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ia(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",O)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Z.test(o.compareDocumentPosition),t=b||Z.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return ka(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?ka(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},fa.matches=function(a,b){return fa(a,null,null,b)},fa.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(T,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fa(b,n,null,[a]).length>0},fa.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fa.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fa.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fa.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fa.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fa.selectors={cacheLength:50,createPseudo:ha,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ba,ca),a[3]=(a[3]||a[4]||a[5]||"").replace(ba,ca),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fa.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fa.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return W.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&U.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ba,ca).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fa.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(P," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fa.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ha(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ha(function(a){var b=[],c=[],d=h(a.replace(Q,"$1"));return d[u]?ha(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ha(function(a){return function(b){return fa(a,b).length>0}}),contains:ha(function(a){return a=a.replace(ba,ca),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ha(function(a){return V.test(a||"")||fa.error("unsupported lang: "+a),a=a.replace(ba,ca).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Y.test(a.nodeName)},input:function(a){return X.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:na(function(){return[0]}),last:na(function(a,b){return[b-1]}),eq:na(function(a,b,c){return[0>c?c+b:c]}),even:na(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:na(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:na(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:na(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=la(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=ma(b);function pa(){}pa.prototype=d.filters=d.pseudos,d.setFilters=new pa,g=fa.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=R.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=S.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(Q," ")}),h=h.slice(c.length));for(g in d.filter)!(e=W[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fa.error(a):z(a,i).slice(0)};function qa(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function ra(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(j=b[u]||(b[u]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===w&&h[1]===f)return k[2]=h[2];if(i[d]=k,k[2]=a(b,c,g))return!0}}}function sa(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ta(a,b,c){for(var d=0,e=b.length;e>d;d++)fa(a,b[d],c);return c}function ua(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function va(a,b,c,d,e,f){return d&&!d[u]&&(d=va(d)),e&&!e[u]&&(e=va(e,f)),ha(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ta(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ua(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ua(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ua(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function wa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ra(function(a){return a===b},h,!0),l=ra(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[ra(sa(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return va(i>1&&sa(m),i>1&&qa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(Q,"$1"),c,e>i&&wa(a.slice(i,e)),f>e&&wa(a=a.slice(e)),f>e&&qa(a))}m.push(c)}return sa(m)}function xa(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=F.call(i));u=ua(u)}H.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&fa.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ha(f):f}return h=fa.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xa(e,d)),f.selector=a}return f},i=fa.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ba,ca),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=W.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ba,ca),_.test(j[0].type)&&oa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qa(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||_.test(a)&&oa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ia(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ia(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ja("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ia(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ja("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ia(function(a){return null==a.getAttribute("disabled")})||ja(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fa}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.uniqueSort=n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},v=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},w=n.expr.match.needsContext,x=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,y=/^.[^:#\[\.,]*$/;function z(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(y.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return n.inArray(a,b)>-1!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;e>b;b++)if(n.contains(d[b],this))return!0}));for(b=0;e>b;b++)n.find(a,d[b],c);return c=this.pushStack(e>1?n.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(z(this,a||[],!1))},not:function(a){return this.pushStack(z(this,a||[],!0))},is:function(a){return!!z(this,"string"==typeof a&&w.test(a)?n(a):a||[],!1).length}});var A,B=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=n.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||A,"string"==typeof a){if(e="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:B.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),x.test(e[1])&&n.isPlainObject(b))for(e in b)n.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}if(f=d.getElementById(e[2]),f&&f.parentNode){if(f.id!==e[2])return A.find(a);this.length=1,this[0]=f}return this.context=d,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof c.ready?c.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};C.prototype=n.fn,A=n(d);var D=/^(?:parents|prev(?:Until|All))/,E={children:!0,contents:!0,next:!0,prev:!0};n.fn.extend({has:function(a){var b,c=n(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(n.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=w.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?n.inArray(this[0],n(a)):n.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function F(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return u(a,"parentNode")},parentsUntil:function(a,b,c){return u(a,"parentNode",c)},next:function(a){return F(a,"nextSibling")},prev:function(a){return F(a,"previousSibling")},nextAll:function(a){return u(a,"nextSibling")},prevAll:function(a){return u(a,"previousSibling")},nextUntil:function(a,b,c){return u(a,"nextSibling",c)},prevUntil:function(a,b,c){return u(a,"previousSibling",c)},siblings:function(a){return v((a.parentNode||{}).firstChild,a)},children:function(a){return v(a.firstChild)},contents:function(a){return n.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(E[a]||(e=n.uniqueSort(e)),D.test(a)&&(e=e.reverse())),this.pushStack(e)}});var G=/\S+/g;function H(a){var b={};return n.each(a.match(G)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?H(a):n.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){n.each(b,function(b,c){n.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==n.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return n.each(arguments,function(a,b){var c;while((c=n.inArray(b,f,c))>-1)f.splice(c,1),h>=c&&h--}),this},has:function(a){return a?n.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=!0,c||j.disable(),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=e.call(arguments),d=c.length,f=1!==d||a&&n.isFunction(a.promise)?d:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?e.call(arguments):d,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(d>1)for(i=new Array(d),j=new Array(d),k=new Array(d);d>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().progress(h(b,j,i)).done(h(b,k,c)).fail(g.reject):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(d,[n]),n.fn.triggerHandler&&(n(d).triggerHandler("ready"),n(d).off("ready"))))}});function J(){d.addEventListener?(d.removeEventListener("DOMContentLoaded",K),a.removeEventListener("load",K)):(d.detachEvent("onreadystatechange",K),a.detachEvent("onload",K))}function K(){(d.addEventListener||"load"===a.event.type||"complete"===d.readyState)&&(J(),n.ready())}n.ready.promise=function(b){if(!I)if(I=n.Deferred(),"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll)a.setTimeout(n.ready);else if(d.addEventListener)d.addEventListener("DOMContentLoaded",K),a.addEventListener("load",K);else{d.attachEvent("onreadystatechange",K),a.attachEvent("onload",K);var c=!1;try{c=null==a.frameElement&&d.documentElement}catch(e){}c&&c.doScroll&&!function f(){if(!n.isReady){try{c.doScroll("left")}catch(b){return a.setTimeout(f,50)}J(),n.ready()}}()}return I.promise(b)},n.ready.promise();var L;for(L in n(l))break;l.ownFirst="0"===L,l.inlineBlockNeedsLayout=!1,n(function(){var a,b,c,e;c=d.getElementsByTagName("body")[0],c&&c.style&&(b=d.createElement("div"),e=d.createElement("div"),e.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(e).appendChild(b),"undefined"!=typeof b.style.zoom&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",l.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(e))}),function(){var a=d.createElement("div");l.deleteExpando=!0;try{delete a.test}catch(b){l.deleteExpando=!1}a=null}();var M=function(a){var b=n.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b},N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(O,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}n.data(a,b,c)}else c=void 0;
}return c}function Q(a){var b;for(b in a)if(("data"!==b||!n.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function R(a,b,d,e){if(M(a)){var f,g,h=n.expando,i=a.nodeType,j=i?n.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||n.guid++:h),j[k]||(j[k]=i?{}:{toJSON:n.noop}),"object"!=typeof b&&"function"!=typeof b||(e?j[k]=n.extend(j[k],b):j[k].data=n.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[n.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[n.camelCase(b)])):f=g,f}}function S(a,b,c){if(M(a)){var d,e,f=a.nodeType,g=f?n.cache:a,h=f?a[n.expando]:n.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){n.isArray(b)?b=b.concat(n.map(b,n.camelCase)):b in d?b=[b]:(b=n.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!Q(d):!n.isEmptyObject(d))return}(c||(delete g[h].data,Q(g[h])))&&(f?n.cleanData([a],!0):l.deleteExpando||g!=g.window?delete g[h]:g[h]=void 0)}}}n.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?n.cache[a[n.expando]]:a[n.expando],!!a&&!Q(a)},data:function(a,b,c){return R(a,b,c)},removeData:function(a,b){return S(a,b)},_data:function(a,b,c){return R(a,b,c,!0)},_removeData:function(a,b){return S(a,b,!0)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=n.data(f),1===f.nodeType&&!n._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));n._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){n.data(this,a)}):arguments.length>1?this.each(function(){n.data(this,a,b)}):f?P(f,a,n.data(f,a)):void 0},removeData:function(a){return this.each(function(){n.removeData(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=n._data(a,b),c&&(!d||n.isArray(c)?d=n._data(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return n._data(a,c)||n._data(a,c,{empty:n.Callbacks("once memory").add(function(){n._removeData(a,b+"queue"),n._removeData(a,c)})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=n._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}}),function(){var a;l.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,e;return c=d.getElementsByTagName("body")[0],c&&c.style?(b=d.createElement("div"),e=d.createElement("div"),e.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(e).appendChild(b),"undefined"!=typeof b.style.zoom&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(d.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(e),a):void 0}}();var T=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,U=new RegExp("^(?:([+-])=|)("+T+")([a-z%]*)$","i"),V=["Top","Right","Bottom","Left"],W=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)};function X(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return n.css(a,b,"")},i=h(),j=c&&c[3]||(n.cssNumber[b]?"":"px"),k=(n.cssNumber[b]||"px"!==j&&+i)&&U.exec(n.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,n.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var Y=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)Y(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},Z=/^(?:checkbox|radio)$/i,$=/<([\w:-]+)/,_=/^$|\/(?:java|ecma)script/i,aa=/^\s+/,ba="abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";function ca(a){var b=ba.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}!function(){var a=d.createElement("div"),b=d.createDocumentFragment(),c=d.createElement("input");a.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",l.leadingWhitespace=3===a.firstChild.nodeType,l.tbody=!a.getElementsByTagName("tbody").length,l.htmlSerialize=!!a.getElementsByTagName("link").length,l.html5Clone="<:nav></:nav>"!==d.createElement("nav").cloneNode(!0).outerHTML,c.type="checkbox",c.checked=!0,b.appendChild(c),l.appendChecked=c.checked,a.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!a.cloneNode(!0).lastChild.defaultValue,b.appendChild(a),c=d.createElement("input"),c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),a.appendChild(c),l.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked,l.noCloneEvent=!!a.addEventListener,a[n.expando]=1,l.attributes=!a.getAttribute(n.expando)}();var da={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:l.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]};da.optgroup=da.option,da.tbody=da.tfoot=da.colgroup=da.caption=da.thead,da.th=da.td;function ea(a,b){var c,d,e=0,f="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||n.nodeName(d,b)?f.push(d):n.merge(f,ea(d,b));return void 0===b||b&&n.nodeName(a,b)?n.merge([a],f):f}function fa(a,b){for(var c,d=0;null!=(c=a[d]);d++)n._data(c,"globalEval",!b||n._data(b[d],"globalEval"))}var ga=/<|&#?\w+;/,ha=/<tbody/i;function ia(a){Z.test(a.type)&&(a.defaultChecked=a.checked)}function ja(a,b,c,d,e){for(var f,g,h,i,j,k,m,o=a.length,p=ca(b),q=[],r=0;o>r;r++)if(g=a[r],g||0===g)if("object"===n.type(g))n.merge(q,g.nodeType?[g]:g);else if(ga.test(g)){i=i||p.appendChild(b.createElement("div")),j=($.exec(g)||["",""])[1].toLowerCase(),m=da[j]||da._default,i.innerHTML=m[1]+n.htmlPrefilter(g)+m[2],f=m[0];while(f--)i=i.lastChild;if(!l.leadingWhitespace&&aa.test(g)&&q.push(b.createTextNode(aa.exec(g)[0])),!l.tbody){g="table"!==j||ha.test(g)?"<table>"!==m[1]||ha.test(g)?0:i:i.firstChild,f=g&&g.childNodes.length;while(f--)n.nodeName(k=g.childNodes[f],"tbody")&&!k.childNodes.length&&g.removeChild(k)}n.merge(q,i.childNodes),i.textContent="";while(i.firstChild)i.removeChild(i.firstChild);i=p.lastChild}else q.push(b.createTextNode(g));i&&p.removeChild(i),l.appendChecked||n.grep(ea(q,"input"),ia),r=0;while(g=q[r++])if(d&&n.inArray(g,d)>-1)e&&e.push(g);else if(h=n.contains(g.ownerDocument,g),i=ea(p.appendChild(g),"script"),h&&fa(i),c){f=0;while(g=i[f++])_.test(g.type||"")&&c.push(g)}return i=null,p}!function(){var b,c,e=d.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(l[b]=c in a)||(e.setAttribute(c,"t"),l[b]=e.attributes[c].expando===!1);e=null}();var ka=/^(?:input|select|textarea)$/i,la=/^key/,ma=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,na=/^(?:focusinfocus|focusoutblur)$/,oa=/^([^.]*)(?:\.(.+)|)/;function pa(){return!0}function qa(){return!1}function ra(){try{return d.activeElement}catch(a){}}function sa(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)sa(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=qa;else if(!e)return a;return 1===f&&(g=e,e=function(a){return n().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=n.guid++)),a.each(function(){n.event.add(this,b,e,d,c)})}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=n.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return"undefined"==typeof n||a&&n.event.triggered===a.type?void 0:n.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(G)||[""],h=b.length;while(h--)f=oa.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=n.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=n.event.special[o]||{},l=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},i),(m=g[o])||(m=g[o]=[],m.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,l):m.push(l),n.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n.hasData(a)&&n._data(a);if(r&&(k=r.events)){b=(b||"").match(G)||[""],j=b.length;while(j--)if(h=oa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=m.length;while(f--)g=m[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(m.splice(f,1),g.selector&&m.delegateCount--,l.remove&&l.remove.call(a,g));i&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(k)&&(delete r.handle,n._removeData(a,"events"))}},trigger:function(b,c,e,f){var g,h,i,j,l,m,o,p=[e||d],q=k.call(b,"type")?b.type:b,r=k.call(b,"namespace")?b.namespace.split("."):[];if(i=m=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!na.test(q+n.event.triggered)&&(q.indexOf(".")>-1&&(r=q.split("."),q=r.shift(),r.sort()),h=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=r.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:n.makeArray(c,[b]),l=n.event.special[q]||{},f||!l.trigger||l.trigger.apply(e,c)!==!1)){if(!f&&!l.noBubble&&!n.isWindow(e)){for(j=l.delegateType||q,na.test(j+q)||(i=i.parentNode);i;i=i.parentNode)p.push(i),m=i;m===(e.ownerDocument||d)&&p.push(m.defaultView||m.parentWindow||a)}o=0;while((i=p[o++])&&!b.isPropagationStopped())b.type=o>1?j:l.bindType||q,g=(n._data(i,"events")||{})[b.type]&&n._data(i,"handle"),g&&g.apply(i,c),g=h&&i[h],g&&g.apply&&M(i)&&(b.result=g.apply(i,c),b.result===!1&&b.preventDefault());if(b.type=q,!f&&!b.isDefaultPrevented()&&(!l._default||l._default.apply(p.pop(),c)===!1)&&M(e)&&h&&e[q]&&!n.isWindow(e)){m=e[h],m&&(e[h]=null),n.event.triggered=q;try{e[q]()}catch(s){}n.event.triggered=void 0,m&&(e[h]=m)}return b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,d,f,g,h=[],i=e.call(arguments),j=(n._data(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())a.rnamespace&&!a.rnamespace.test(g.namespace)||(a.handleObj=g,a.data=g.data,d=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>-1:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[n.expando])return a;var b,c,e,f=a.type,g=a,h=this.fixHooks[f];h||(this.fixHooks[f]=h=ma.test(f)?this.mouseHooks:la.test(f)?this.keyHooks:{}),e=h.props?this.props.concat(h.props):this.props,a=new n.Event(g),b=e.length;while(b--)c=e[b],a[c]=g[c];return a.target||(a.target=g.srcElement||d),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,h.filter?h.filter(a,g):a},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,e,f,g=b.button,h=b.fromElement;return null==a.pageX&&null!=b.clientX&&(e=a.target.ownerDocument||d,f=e.documentElement,c=e.body,a.pageX=b.clientX+(f&&f.scrollLeft||c&&c.scrollLeft||0)-(f&&f.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(f&&f.scrollTop||c&&c.scrollTop||0)-(f&&f.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&h&&(a.relatedTarget=h===a.target?b.toElement:h),a.which||void 0===g||(a.which=1&g?1:2&g?3:4&g?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==ra()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===ra()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return n.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c){var d=n.extend(new n.Event,c,{type:a,isSimulated:!0});n.event.trigger(d,null,b),d.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=d.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)}:function(a,b,c){var d="on"+b;a.detachEvent&&("undefined"==typeof a[d]&&(a[d]=null),a.detachEvent(d,c))},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?pa:qa):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={constructor:n.Event,isDefaultPrevented:qa,isPropagationStopped:qa,isImmediatePropagationStopped:qa,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=pa,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=pa,a&&!this.isSimulated&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=pa,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||n.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),l.submit||(n.event.special.submit={setup:function(){return n.nodeName(this,"form")?!1:void n.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=n.nodeName(b,"input")||n.nodeName(b,"button")?n.prop(b,"form"):void 0;c&&!n._data(c,"submit")&&(n.event.add(c,"submit._submit",function(a){a._submitBubble=!0}),n._data(c,"submit",!0))})},postDispatch:function(a){a._submitBubble&&(delete a._submitBubble,this.parentNode&&!a.isTrigger&&n.event.simulate("submit",this.parentNode,a))},teardown:function(){return n.nodeName(this,"form")?!1:void n.event.remove(this,"._submit")}}),l.change||(n.event.special.change={setup:function(){return ka.test(this.nodeName)?("checkbox"!==this.type&&"radio"!==this.type||(n.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._justChanged=!0)}),n.event.add(this,"click._change",function(a){this._justChanged&&!a.isTrigger&&(this._justChanged=!1),n.event.simulate("change",this,a)})),!1):void n.event.add(this,"beforeactivate._change",function(a){var b=a.target;ka.test(b.nodeName)&&!n._data(b,"change")&&(n.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||n.event.simulate("change",this.parentNode,a)}),n._data(b,"change",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return n.event.remove(this,"._change"),!ka.test(this.nodeName)}}),l.focusin||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a))};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=n._data(d,b);e||d.addEventListener(a,c,!0),n._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=n._data(d,b)-1;e?n._data(d,b,e):(d.removeEventListener(a,c,!0),n._removeData(d,b))}}}),n.fn.extend({on:function(a,b,c,d){return sa(this,a,b,c,d)},one:function(a,b,c,d){return sa(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=qa),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var ta=/ jQuery\d+="(?:null|\d+)"/g,ua=new RegExp("<(?:"+ba+")[\\s/>]","i"),va=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,wa=/<script|<style|<link/i,xa=/checked\s*(?:[^=]|=\s*.checked.)/i,ya=/^true\/(.*)/,za=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Aa=ca(d),Ba=Aa.appendChild(d.createElement("div"));function Ca(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function Da(a){return a.type=(null!==n.find.attr(a,"type"))+"/"+a.type,a}function Ea(a){var b=ya.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Fa(a,b){if(1===b.nodeType&&n.hasData(a)){var c,d,e,f=n._data(a),g=n._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)n.event.add(b,c,h[c][d])}g.data&&(g.data=n.extend({},g.data))}}function Ga(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!l.noCloneEvent&&b[n.expando]){e=n._data(b);for(d in e.events)n.removeEvent(b,d,e.handle);b.removeAttribute(n.expando)}"script"===c&&b.text!==a.text?(Da(b).text=a.text,Ea(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),l.html5Clone&&a.innerHTML&&!n.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&Z.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}}function Ha(a,b,c,d){b=f.apply([],b);var e,g,h,i,j,k,m=0,o=a.length,p=o-1,q=b[0],r=n.isFunction(q);if(r||o>1&&"string"==typeof q&&!l.checkClone&&xa.test(q))return a.each(function(e){var f=a.eq(e);r&&(b[0]=q.call(this,e,f.html())),Ha(f,b,c,d)});if(o&&(k=ja(b,a[0].ownerDocument,!1,a,d),e=k.firstChild,1===k.childNodes.length&&(k=e),e||d)){for(i=n.map(ea(k,"script"),Da),h=i.length;o>m;m++)g=k,m!==p&&(g=n.clone(g,!0,!0),h&&n.merge(i,ea(g,"script"))),c.call(a[m],g,m);if(h)for(j=i[i.length-1].ownerDocument,n.map(i,Ea),m=0;h>m;m++)g=i[m],_.test(g.type||"")&&!n._data(g,"globalEval")&&n.contains(j,g)&&(g.src?n._evalUrl&&n._evalUrl(g.src):n.globalEval((g.text||g.textContent||g.innerHTML||"").replace(za,"")));k=e=null}return a}function Ia(a,b,c){for(var d,e=b?n.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||n.cleanData(ea(d)),d.parentNode&&(c&&n.contains(d.ownerDocument,d)&&fa(ea(d,"script")),d.parentNode.removeChild(d));return a}n.extend({htmlPrefilter:function(a){return a.replace(va,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h,i=n.contains(a.ownerDocument,a);if(l.html5Clone||n.isXMLDoc(a)||!ua.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(Ba.innerHTML=a.outerHTML,Ba.removeChild(f=Ba.firstChild)),!(l.noCloneEvent&&l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(d=ea(f),h=ea(a),g=0;null!=(e=h[g]);++g)d[g]&&Ga(e,d[g]);if(b)if(c)for(h=h||ea(a),d=d||ea(f),g=0;null!=(e=h[g]);g++)Fa(e,d[g]);else Fa(a,f);return d=ea(f,"script"),d.length>0&&fa(d,!i&&ea(a,"script")),d=h=e=null,f},cleanData:function(a,b){for(var d,e,f,g,h=0,i=n.expando,j=n.cache,k=l.attributes,m=n.event.special;null!=(d=a[h]);h++)if((b||M(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)m[e]?n.event.remove(d,e):n.removeEvent(d,e,g.handle);j[f]&&(delete j[f],k||"undefined"==typeof d.removeAttribute?d[i]=void 0:d.removeAttribute(i),c.push(f))}}}),n.fn.extend({domManip:Ha,detach:function(a){return Ia(this,a,!0)},remove:function(a){return Ia(this,a)},text:function(a){return Y(this,function(a){return void 0===a?n.text(this):this.empty().append((this[0]&&this[0].ownerDocument||d).createTextNode(a))},null,a,arguments.length)},append:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.appendChild(a)}})},prepend:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&n.cleanData(ea(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&n.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return Y(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(ta,""):void 0;if("string"==typeof a&&!wa.test(a)&&(l.htmlSerialize||!ua.test(a))&&(l.leadingWhitespace||!aa.test(a))&&!da[($.exec(a)||["",""])[1].toLowerCase()]){a=n.htmlPrefilter(a);try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(ea(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ha(this,arguments,function(b){var c=this.parentNode;n.inArray(this,a)<0&&(n.cleanData(ea(this)),c&&c.replaceChild(b,this))},a)}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=0,e=[],f=n(a),h=f.length-1;h>=d;d++)c=d===h?this:this.clone(!0),n(f[d])[b](c),g.apply(e,c.get());return this.pushStack(e)}});var Ja,Ka={HTML:"block",BODY:"block"};function La(a,b){var c=n(b.createElement(a)).appendTo(b.body),d=n.css(c[0],"display");return c.detach(),d}function Ma(a){var b=d,c=Ka[a];return c||(c=La(a,b),"none"!==c&&c||(Ja=(Ja||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Ja[0].contentWindow||Ja[0].contentDocument).document,b.write(),b.close(),c=La(a,b),Ja.detach()),Ka[a]=c),c}var Na=/^margin/,Oa=new RegExp("^("+T+")(?!px)[a-z%]+$","i"),Pa=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e},Qa=d.documentElement;!function(){var b,c,e,f,g,h,i=d.createElement("div"),j=d.createElement("div");if(j.style){j.style.cssText="float:left;opacity:.5",l.opacity="0.5"===j.style.opacity,l.cssFloat=!!j.style.cssFloat,j.style.backgroundClip="content-box",j.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===j.style.backgroundClip,i=d.createElement("div"),i.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",j.innerHTML="",i.appendChild(j),l.boxSizing=""===j.style.boxSizing||""===j.style.MozBoxSizing||""===j.style.WebkitBoxSizing,n.extend(l,{reliableHiddenOffsets:function(){return null==b&&k(),f},boxSizingReliable:function(){return null==b&&k(),e},pixelMarginRight:function(){return null==b&&k(),c},pixelPosition:function(){return null==b&&k(),b},reliableMarginRight:function(){return null==b&&k(),g},reliableMarginLeft:function(){return null==b&&k(),h}});function k(){var k,l,m=d.documentElement;m.appendChild(i),j.style.cssText="-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",b=e=h=!1,c=g=!0,a.getComputedStyle&&(l=a.getComputedStyle(j),b="1%"!==(l||{}).top,h="2px"===(l||{}).marginLeft,e="4px"===(l||{width:"4px"}).width,j.style.marginRight="50%",c="4px"===(l||{marginRight:"4px"}).marginRight,k=j.appendChild(d.createElement("div")),k.style.cssText=j.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",k.style.marginRight=k.style.width="0",j.style.width="1px",g=!parseFloat((a.getComputedStyle(k)||{}).marginRight),j.removeChild(k)),j.style.display="none",f=0===j.getClientRects().length,f&&(j.style.display="",j.innerHTML="<table><tr><td></td><td>t</td></tr></table>",j.childNodes[0].style.borderCollapse="separate",k=j.getElementsByTagName("td"),k[0].style.cssText="margin:0;border:0;padding:0;display:none",f=0===k[0].offsetHeight,f&&(k[0].style.display="",k[1].style.display="none",f=0===k[0].offsetHeight)),m.removeChild(i)}}}();var Ra,Sa,Ta=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ra=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)},Sa=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ra(a),g=c?c.getPropertyValue(b)||c[b]:void 0,""!==g&&void 0!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),c&&!l.pixelMarginRight()&&Oa.test(g)&&Na.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f),void 0===g?g:g+""}):Qa.currentStyle&&(Ra=function(a){return a.currentStyle},Sa=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ra(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Oa.test(g)&&!Ta.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Ua(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Va=/alpha\([^)]*\)/i,Wa=/opacity\s*=\s*([^)]*)/i,Xa=/^(none|table(?!-c[ea]).+)/,Ya=new RegExp("^("+T+")(.*)$","i"),Za={position:"absolute",visibility:"hidden",display:"block"},$a={letterSpacing:"0",fontWeight:"400"},_a=["Webkit","O","Moz","ms"],ab=d.createElement("div").style;function bb(a){if(a in ab)return a;var b=a.charAt(0).toUpperCase()+a.slice(1),c=_a.length;while(c--)if(a=_a[c]+b,a in ab)return a}function cb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=n._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&W(d)&&(f[g]=n._data(d,"olddisplay",Ma(d.nodeName)))):(e=W(d),(c&&"none"!==c||!e)&&n._data(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function db(a,b,c){var d=Ya.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function eb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+V[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+V[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+V[f]+"Width",!0,e))):(g+=n.css(a,"padding"+V[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+V[f]+"Width",!0,e)));return g}function fb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ra(a),g=l.boxSizing&&"border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Sa(a,b,f),(0>e||null==e)&&(e=a.style[b]),Oa.test(e))return e;d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+eb(a,b,c||(g?"border":"content"),d,f)+"px"}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Sa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":l.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;if(b=n.cssProps[h]||(n.cssProps[h]=bb(h)||h),g=n.cssHooks[b]||n.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=U.exec(c))&&e[1]&&(c=X(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(n.cssNumber[h]?"":"px")),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=bb(h)||h),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Sa(a,b,d)),"normal"===f&&b in $a&&(f=$a[b]),""===c||c?(e=parseFloat(f),c===!0||isFinite(e)?e||0:f):f}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?Xa.test(n.css(a,"display"))&&0===a.offsetWidth?Pa(a,Za,function(){return fb(a,b,d)}):fb(a,b,d):void 0},set:function(a,c,d){var e=d&&Ra(a);return db(a,c,d?eb(a,b,d,l.boxSizing&&"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),l.opacity||(n.cssHooks.opacity={get:function(a,b){return Wa.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=n.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===n.trim(f.replace(Va,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Va.test(f)?f.replace(Va,e):f+" "+e)}}),n.cssHooks.marginRight=Ua(l.reliableMarginRight,function(a,b){return b?Pa(a,{display:"inline-block"},Sa,[a,"marginRight"]):void 0}),n.cssHooks.marginLeft=Ua(l.reliableMarginLeft,function(a,b){return b?(parseFloat(Sa(a,"marginLeft"))||(n.contains(a.ownerDocument,a)?a.getBoundingClientRect().left-Pa(a,{
marginLeft:0},function(){return a.getBoundingClientRect().left}):0))+"px":void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+V[d]+b]=f[d]||f[d-2]||f[0];return e}},Na.test(a)||(n.cssHooks[a+b].set=db)}),n.fn.extend({css:function(a,b){return Y(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Ra(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return cb(this,!0)},hide:function(){return cb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){W(this)?n(this).show():n(this).hide()})}});function gb(a,b,c,d,e){return new gb.prototype.init(a,b,c,d,e)}n.Tween=gb,gb.prototype={constructor:gb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||n.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=gb.propHooks[this.prop];return a&&a.get?a.get(this):gb.propHooks._default.get(this)},run:function(a){var b,c=gb.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):gb.propHooks._default.set(this),this}},gb.prototype.init.prototype=gb.prototype,gb.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[n.cssProps[a.prop]]&&!n.cssHooks[a.prop]?a.elem[a.prop]=a.now:n.style(a.elem,a.prop,a.now+a.unit)}}},gb.propHooks.scrollTop=gb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},n.fx=gb.prototype.init,n.fx.step={};var hb,ib,jb=/^(?:toggle|show|hide)$/,kb=/queueHooks$/;function lb(){return a.setTimeout(function(){hb=void 0}),hb=n.now()}function mb(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=V[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function nb(a,b,c){for(var d,e=(qb.tweeners[b]||[]).concat(qb.tweeners["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ob(a,b,c){var d,e,f,g,h,i,j,k,m=this,o={},p=a.style,q=a.nodeType&&W(a),r=n._data(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,m.always(function(){m.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=n.css(a,"display"),k="none"===j?n._data(a,"olddisplay")||Ma(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(l.inlineBlockNeedsLayout&&"inline"!==Ma(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",l.shrinkWrapBlocks()||m.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],jb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(o))"inline"===("none"===j?Ma(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=n._data(a,"fxshow",{}),f&&(r.hidden=!q),q?n(a).show():m.done(function(){n(a).hide()}),m.done(function(){var b;n._removeData(a,"fxshow");for(b in o)n.style(a,b,o[b])});for(d in o)g=nb(q?r[d]:0,d,m),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function pb(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function qb(a,b,c){var d,e,f=0,g=qb.prefilters.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=hb||lb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},c),originalProperties:b,originalOptions:c,startTime:hb||lb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(pb(k,j.opts.specialEasing);g>f;f++)if(d=qb.prefilters[f].call(j,a,k,j.opts))return n.isFunction(d.stop)&&(n._queueHooks(j.elem,j.opts.queue).stop=n.proxy(d.stop,d)),d;return n.map(k,nb,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(qb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return X(c.elem,a,U.exec(b),c),c}]},tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.match(G);for(var c,d=0,e=a.length;e>d;d++)c=a[d],qb.tweeners[c]=qb.tweeners[c]||[],qb.tweeners[c].unshift(b)},prefilters:[ob],prefilter:function(a,b){b?qb.prefilters.unshift(a):qb.prefilters.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(W).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=qb(this,n.extend({},a),f);(e||n._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=n._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&kb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=n._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(mb(b,!0),a,d,e)}}),n.each({slideDown:mb("show"),slideUp:mb("hide"),slideToggle:mb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=n.timers,c=0;for(hb=n.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||n.fx.stop(),hb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){ib||(ib=a.setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){a.clearInterval(ib),ib=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(b,c){return b=n.fx?n.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a,b=d.createElement("input"),c=d.createElement("div"),e=d.createElement("select"),f=e.appendChild(d.createElement("option"));c=d.createElement("div"),c.setAttribute("className","t"),c.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=c.getElementsByTagName("a")[0],b.setAttribute("type","checkbox"),c.appendChild(b),a=c.getElementsByTagName("a")[0],a.style.cssText="top:1px",l.getSetAttribute="t"!==c.className,l.style=/top/.test(a.getAttribute("style")),l.hrefNormalized="/a"===a.getAttribute("href"),l.checkOn=!!b.value,l.optSelected=f.selected,l.enctype=!!d.createElement("form").enctype,e.disabled=!0,l.optDisabled=!f.disabled,b=d.createElement("input"),b.setAttribute("value",""),l.input=""===b.getAttribute("value"),b.value="t",b.setAttribute("type","radio"),l.radioValue="t"===b.value}();var rb=/\r/g,sb=/[\x20\t\r\n\f]+/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(rb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a)).replace(sb," ")}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],(c.selected||i===e)&&(l.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)if(d=e[g],n.inArray(n.valHooks.option.get(d),f)>-1)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>-1:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var tb,ub,vb=n.expr.attrHandle,wb=/^(?:checked|selected)$/i,xb=l.getSetAttribute,yb=l.input;n.fn.extend({attr:function(a,b){return Y(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),e=n.attrHooks[b]||(n.expr.match.bool.test(b)?ub:tb)),void 0!==c?null===c?void n.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=n.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(G);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)?yb&&xb||!wb.test(c)?a[d]=!1:a[n.camelCase("default-"+c)]=a[d]=!1:n.attr(a,c,""),a.removeAttribute(xb?c:d)}}),ub={set:function(a,b,c){return b===!1?n.removeAttr(a,c):yb&&xb||!wb.test(c)?a.setAttribute(!xb&&n.propFix[c]||c,c):a[n.camelCase("default-"+c)]=a[c]=!0,c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=vb[b]||n.find.attr;yb&&xb||!wb.test(b)?vb[b]=function(a,b,d){var e,f;return d||(f=vb[b],vb[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,vb[b]=f),e}:vb[b]=function(a,b,c){return c?void 0:a[n.camelCase("default-"+b)]?b.toLowerCase():null}}),yb&&xb||(n.attrHooks.value={set:function(a,b,c){return n.nodeName(a,"input")?void(a.defaultValue=b):tb&&tb.set(a,b,c)}}),xb||(tb={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},vb.id=vb.name=vb.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},n.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:tb.set},n.attrHooks.contenteditable={set:function(a,b,c){tb.set(a,""===b?!1:b,c)}},n.each(["width","height"],function(a,b){n.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),l.style||(n.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var zb=/^(?:input|select|textarea|button|object)$/i,Ab=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return Y(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return a=n.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),n.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&n.isXMLDoc(a)||(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):zb.test(a.nodeName)||Ab.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),l.hrefNormalized||n.each(["href","src"],function(a,b){n.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this}),l.enctype||(n.propFix.enctype="encoding");var Bb=/[\t\r\n\f]/g;function Cb(a){return n.attr(a,"class")||""}n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,Cb(this)))});if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=Cb(c),d=1===c.nodeType&&(" "+e+" ").replace(Bb," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=n.trim(d),e!==h&&n.attr(c,"class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,Cb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=Cb(c),d=1===c.nodeType&&(" "+e+" ").replace(Bb," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=n.trim(d),e!==h&&n.attr(c,"class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):n.isFunction(a)?this.each(function(c){n(this).toggleClass(a.call(this,c,Cb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=n(this),f=a.match(G)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=Cb(this),b&&n._data(this,"__className__",b),n.attr(this,"class",b||a===!1?"":n._data(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+Cb(c)+" ").replace(Bb," ").indexOf(b)>-1)return!0;return!1}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var Db=a.location,Eb=n.now(),Fb=/\?/,Gb=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;n.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=n.trim(b+"");return e&&!n.trim(e.replace(Gb,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():n.error("Invalid JSON: "+b)},n.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new a.DOMParser,c=d.parseFromString(b,"text/xml")):(c=new a.ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var Hb=/#.*$/,Ib=/([?&])_=[^&]*/,Jb=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Kb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Lb=/^(?:GET|HEAD)$/,Mb=/^\/\//,Nb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Ob={},Pb={},Qb="*/".concat("*"),Rb=Db.href,Sb=Nb.exec(Rb.toLowerCase())||[];function Tb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(G)||[];if(n.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Ub(a,b,c,d){var e={},f=a===Pb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Vb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&n.extend(!0,a,c),a}function Wb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Xb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Rb,type:"GET",isLocal:Kb.test(Sb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Qb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Vb(Vb(a,n.ajaxSettings),b):Vb(n.ajaxSettings,a)},ajaxPrefilter:Tb(Ob),ajaxTransport:Tb(Pb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var d,e,f,g,h,i,j,k,l=n.ajaxSetup({},c),m=l.context||l,o=l.context&&(m.nodeType||m.jquery)?n(m):n.event,p=n.Deferred(),q=n.Callbacks("once memory"),r=l.statusCode||{},s={},t={},u=0,v="canceled",w={readyState:0,getResponseHeader:function(a){var b;if(2===u){if(!k){k={};while(b=Jb.exec(g))k[b[1].toLowerCase()]=b[2]}b=k[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===u?g:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return u||(a=t[c]=t[c]||a,s[a]=b),this},overrideMimeType:function(a){return u||(l.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>u)for(b in a)r[b]=[r[b],a[b]];else w.always(a[w.status]);return this},abort:function(a){var b=a||v;return j&&j.abort(b),y(0,b),this}};if(p.promise(w).complete=q.add,w.success=w.done,w.error=w.fail,l.url=((b||l.url||Rb)+"").replace(Hb,"").replace(Mb,Sb[1]+"//"),l.type=c.method||c.type||l.method||l.type,l.dataTypes=n.trim(l.dataType||"*").toLowerCase().match(G)||[""],null==l.crossDomain&&(d=Nb.exec(l.url.toLowerCase()),l.crossDomain=!(!d||d[1]===Sb[1]&&d[2]===Sb[2]&&(d[3]||("http:"===d[1]?"80":"443"))===(Sb[3]||("http:"===Sb[1]?"80":"443")))),l.data&&l.processData&&"string"!=typeof l.data&&(l.data=n.param(l.data,l.traditional)),Ub(Ob,l,c,w),2===u)return w;i=n.event&&l.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),l.type=l.type.toUpperCase(),l.hasContent=!Lb.test(l.type),f=l.url,l.hasContent||(l.data&&(f=l.url+=(Fb.test(f)?"&":"?")+l.data,delete l.data),l.cache===!1&&(l.url=Ib.test(f)?f.replace(Ib,"$1_="+Eb++):f+(Fb.test(f)?"&":"?")+"_="+Eb++)),l.ifModified&&(n.lastModified[f]&&w.setRequestHeader("If-Modified-Since",n.lastModified[f]),n.etag[f]&&w.setRequestHeader("If-None-Match",n.etag[f])),(l.data&&l.hasContent&&l.contentType!==!1||c.contentType)&&w.setRequestHeader("Content-Type",l.contentType),w.setRequestHeader("Accept",l.dataTypes[0]&&l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+("*"!==l.dataTypes[0]?", "+Qb+"; q=0.01":""):l.accepts["*"]);for(e in l.headers)w.setRequestHeader(e,l.headers[e]);if(l.beforeSend&&(l.beforeSend.call(m,w,l)===!1||2===u))return w.abort();v="abort";for(e in{success:1,error:1,complete:1})w[e](l[e]);if(j=Ub(Pb,l,c,w)){if(w.readyState=1,i&&o.trigger("ajaxSend",[w,l]),2===u)return w;l.async&&l.timeout>0&&(h=a.setTimeout(function(){w.abort("timeout")},l.timeout));try{u=1,j.send(s,y)}catch(x){if(!(2>u))throw x;y(-1,x)}}else y(-1,"No Transport");function y(b,c,d,e){var k,s,t,v,x,y=c;2!==u&&(u=2,h&&a.clearTimeout(h),j=void 0,g=e||"",w.readyState=b>0?4:0,k=b>=200&&300>b||304===b,d&&(v=Wb(l,w,d)),v=Xb(l,v,w,k),k?(l.ifModified&&(x=w.getResponseHeader("Last-Modified"),x&&(n.lastModified[f]=x),x=w.getResponseHeader("etag"),x&&(n.etag[f]=x)),204===b||"HEAD"===l.type?y="nocontent":304===b?y="notmodified":(y=v.state,s=v.data,t=v.error,k=!t)):(t=y,!b&&y||(y="error",0>b&&(b=0))),w.status=b,w.statusText=(c||y)+"",k?p.resolveWith(m,[s,y,w]):p.rejectWith(m,[w,y,t]),w.statusCode(r),r=void 0,i&&o.trigger(k?"ajaxSuccess":"ajaxError",[w,l,k?s:t]),q.fireWith(m,[w,y]),i&&(o.trigger("ajaxComplete",[w,l]),--n.active||n.event.trigger("ajaxStop")))}return w},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax(n.extend({url:a,type:b,dataType:e,data:c,success:d},n.isPlainObject(a)&&a))}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){if(n.isFunction(a))return this.each(function(b){n(this).wrapAll(a.call(this,b))});if(this[0]){var b=n(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return n.isFunction(a)?this.each(function(b){n(this).wrapInner(a.call(this,b))}):this.each(function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}});function Yb(a){return a.style&&a.style.display||n.css(a,"display")}function Zb(a){if(!n.contains(a.ownerDocument||d,a))return!0;while(a&&1===a.nodeType){if("none"===Yb(a)||"hidden"===a.type)return!0;a=a.parentNode}return!1}n.expr.filters.hidden=function(a){return l.reliableHiddenOffsets()?a.offsetWidth<=0&&a.offsetHeight<=0&&!a.getClientRects().length:Zb(a)},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var $b=/%20/g,_b=/\[\]$/,ac=/\r?\n/g,bc=/^(?:submit|button|image|reset|file)$/i,cc=/^(?:input|select|textarea|keygen)/i;function dc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||_b.test(a)?d(a,e):dc(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)dc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)dc(c,a[c],b,e);return d.join("&").replace($b,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&cc.test(this.nodeName)&&!bc.test(a)&&(this.checked||!Z.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(ac,"\r\n")}}):{name:b.name,value:c.replace(ac,"\r\n")}}).get()}}),n.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return this.isLocal?ic():d.documentMode>8?hc():/^(get|post|head|put|delete|options)$/i.test(this.type)&&hc()||ic()}:hc;var ec=0,fc={},gc=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in fc)fc[a](void 0,!0)}),l.cors=!!gc&&"withCredentials"in gc,gc=l.ajax=!!gc,gc&&n.ajaxTransport(function(b){if(!b.crossDomain||l.cors){var c;return{send:function(d,e){var f,g=b.xhr(),h=++ec;if(g.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(f in b.xhrFields)g[f]=b.xhrFields[f];b.mimeType&&g.overrideMimeType&&g.overrideMimeType(b.mimeType),b.crossDomain||d["X-Requested-With"]||(d["X-Requested-With"]="XMLHttpRequest");for(f in d)void 0!==d[f]&&g.setRequestHeader(f,d[f]+"");g.send(b.hasContent&&b.data||null),c=function(a,d){var f,i,j;if(c&&(d||4===g.readyState))if(delete fc[h],c=void 0,g.onreadystatechange=n.noop,d)4!==g.readyState&&g.abort();else{j={},f=g.status,"string"==typeof g.responseText&&(j.text=g.responseText);try{i=g.statusText}catch(k){i=""}f||!b.isLocal||b.crossDomain?1223===f&&(f=204):f=j.text?200:404}j&&e(f,i,j,g.getAllResponseHeaders())},b.async?4===g.readyState?a.setTimeout(c):g.onreadystatechange=fc[h]=c:c()},abort:function(){c&&c(void 0,!0)}}}});function hc(){try{return new a.XMLHttpRequest}catch(b){}}function ic(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=d.head||n("head")[0]||d.documentElement;return{send:function(e,f){b=d.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||f(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var jc=[],kc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=jc.pop()||n.expando+"_"+Eb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(kc.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&kc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(kc,"$1"+e):b.jsonp!==!1&&(b.url+=(Fb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?n(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,jc.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||d;var e=x.exec(a),f=!c&&[];return e?[b.createElement(e[1])]:(e=ja([a],b,f),f&&f.length&&n(f).remove(),n.merge([],e.childNodes))};var lc=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&lc)return lc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=n.trim(a.slice(h,a.length)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};function mc(a){return n.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&n.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,n.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,n.contains(b,e)?("undefined"!=typeof e.getBoundingClientRect&&(d=e.getBoundingClientRect()),c=mc(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===n.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(c=a.offset()),c.top+=n.css(a[0],"borderTopWidth",!0),c.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-n.css(d,"marginTop",!0),left:b.left-c.left-n.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Qa})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);n.fn[a]=function(d){return Y(this,function(a,d,e){var f=mc(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?n(f).scrollLeft():e,c?e:n(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Ua(l.pixelPosition,function(a,c){return c?(c=Sa(a,b),Oa.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({
padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return Y(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var nc=a.jQuery,oc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=oc),b&&a.jQuery===n&&(a.jQuery=nc),n},b||(a.jQuery=a.$=n),n});

;/*!
 * Bootstrap v3.4.1 (https://getbootstrap.com/)
 * Copyright 2011-2019 Twitter, Inc.
 * Licensed under the MIT license
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");!function(t){"use strict";var e=jQuery.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1==e[0]&&9==e[1]&&e[2]<1||3<e[0])throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")}(),function(n){"use strict";n.fn.emulateTransitionEnd=function(t){var e=!1,i=this;n(this).one("bsTransitionEnd",function(){e=!0});return setTimeout(function(){e||n(i).trigger(n.support.transition.end)},t),this},n(function(){n.support.transition=function o(){var t=document.createElement("bootstrap"),e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var i in e)if(t.style[i]!==undefined)return{end:e[i]};return!1}(),n.support.transition&&(n.event.special.bsTransitionEnd={bindType:n.support.transition.end,delegateType:n.support.transition.end,handle:function(t){if(n(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}})})}(jQuery),function(s){"use strict";var e='[data-dismiss="alert"]',a=function(t){s(t).on("click",e,this.close)};a.VERSION="3.4.1",a.TRANSITION_DURATION=150,a.prototype.close=function(t){var e=s(this),i=e.attr("data-target");i||(i=(i=e.attr("href"))&&i.replace(/.*(?=#[^\s]*$)/,"")),i="#"===i?[]:i;var o=s(document).find(i);function n(){o.detach().trigger("closed.bs.alert").remove()}t&&t.preventDefault(),o.length||(o=e.closest(".alert")),o.trigger(t=s.Event("close.bs.alert")),t.isDefaultPrevented()||(o.removeClass("in"),s.support.transition&&o.hasClass("fade")?o.one("bsTransitionEnd",n).emulateTransitionEnd(a.TRANSITION_DURATION):n())};var t=s.fn.alert;s.fn.alert=function o(i){return this.each(function(){var t=s(this),e=t.data("bs.alert");e||t.data("bs.alert",e=new a(this)),"string"==typeof i&&e[i].call(t)})},s.fn.alert.Constructor=a,s.fn.alert.noConflict=function(){return s.fn.alert=t,this},s(document).on("click.bs.alert.data-api",e,a.prototype.close)}(jQuery),function(s){"use strict";var n=function(t,e){this.$element=s(t),this.options=s.extend({},n.DEFAULTS,e),this.isLoading=!1};function i(o){return this.each(function(){var t=s(this),e=t.data("bs.button"),i="object"==typeof o&&o;e||t.data("bs.button",e=new n(this,i)),"toggle"==o?e.toggle():o&&e.setState(o)})}n.VERSION="3.4.1",n.DEFAULTS={loadingText:"loading..."},n.prototype.setState=function(t){var e="disabled",i=this.$element,o=i.is("input")?"val":"html",n=i.data();t+="Text",null==n.resetText&&i.data("resetText",i[o]()),setTimeout(s.proxy(function(){i[o](null==n[t]?this.options[t]:n[t]),"loadingText"==t?(this.isLoading=!0,i.addClass(e).attr(e,e).prop(e,!0)):this.isLoading&&(this.isLoading=!1,i.removeClass(e).removeAttr(e).prop(e,!1))},this),0)},n.prototype.toggle=function(){var t=!0,e=this.$element.closest('[data-toggle="buttons"]');if(e.length){var i=this.$element.find("input");"radio"==i.prop("type")?(i.prop("checked")&&(t=!1),e.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==i.prop("type")&&(i.prop("checked")!==this.$element.hasClass("active")&&(t=!1),this.$element.toggleClass("active")),i.prop("checked",this.$element.hasClass("active")),t&&i.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var t=s.fn.button;s.fn.button=i,s.fn.button.Constructor=n,s.fn.button.noConflict=function(){return s.fn.button=t,this},s(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(t){var e=s(t.target).closest(".btn");i.call(e,"toggle"),s(t.target).is('input[type="radio"], input[type="checkbox"]')||(t.preventDefault(),e.is("input,button")?e.trigger("focus"):e.find("input:visible,button:visible").first().trigger("focus"))}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(t){s(t.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(t.type))})}(jQuery),function(p){"use strict";var c=function(t,e){this.$element=p(t),this.$indicators=this.$element.find(".carousel-indicators"),this.options=e,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",p.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",p.proxy(this.pause,this)).on("mouseleave.bs.carousel",p.proxy(this.cycle,this))};function r(n){return this.each(function(){var t=p(this),e=t.data("bs.carousel"),i=p.extend({},c.DEFAULTS,t.data(),"object"==typeof n&&n),o="string"==typeof n?n:i.slide;e||t.data("bs.carousel",e=new c(this,i)),"number"==typeof n?e.to(n):o?e[o]():i.interval&&e.pause().cycle()})}c.VERSION="3.4.1",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(t){if(!/input|textarea/i.test(t.target.tagName)){switch(t.which){case 37:this.prev();break;case 39:this.next();break;default:return}t.preventDefault()}},c.prototype.cycle=function(t){return t||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(p.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(t){return this.$items=t.parent().children(".item"),this.$items.index(t||this.$active)},c.prototype.getItemForDirection=function(t,e){var i=this.getItemIndex(e);if(("prev"==t&&0===i||"next"==t&&i==this.$items.length-1)&&!this.options.wrap)return e;var o=(i+("prev"==t?-1:1))%this.$items.length;return this.$items.eq(o)},c.prototype.to=function(t){var e=this,i=this.getItemIndex(this.$active=this.$element.find(".item.active"));if(!(t>this.$items.length-1||t<0))return this.sliding?this.$element.one("slid.bs.carousel",function(){e.to(t)}):i==t?this.pause().cycle():this.slide(i<t?"next":"prev",this.$items.eq(t))},c.prototype.pause=function(t){return t||(this.paused=!0),this.$element.find(".next, .prev").length&&p.support.transition&&(this.$element.trigger(p.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){if(!this.sliding)return this.slide("next")},c.prototype.prev=function(){if(!this.sliding)return this.slide("prev")},c.prototype.slide=function(t,e){var i=this.$element.find(".item.active"),o=e||this.getItemForDirection(t,i),n=this.interval,s="next"==t?"left":"right",a=this;if(o.hasClass("active"))return this.sliding=!1;var r=o[0],l=p.Event("slide.bs.carousel",{relatedTarget:r,direction:s});if(this.$element.trigger(l),!l.isDefaultPrevented()){if(this.sliding=!0,n&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var h=p(this.$indicators.children()[this.getItemIndex(o)]);h&&h.addClass("active")}var d=p.Event("slid.bs.carousel",{relatedTarget:r,direction:s});return p.support.transition&&this.$element.hasClass("slide")?(o.addClass(t),"object"==typeof o&&o.length&&o[0].offsetWidth,i.addClass(s),o.addClass(s),i.one("bsTransitionEnd",function(){o.removeClass([t,s].join(" ")).addClass("active"),i.removeClass(["active",s].join(" ")),a.sliding=!1,setTimeout(function(){a.$element.trigger(d)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(i.removeClass("active"),o.addClass("active"),this.sliding=!1,this.$element.trigger(d)),n&&this.cycle(),this}};var t=p.fn.carousel;p.fn.carousel=r,p.fn.carousel.Constructor=c,p.fn.carousel.noConflict=function(){return p.fn.carousel=t,this};var e=function(t){var e=p(this),i=e.attr("href");i&&(i=i.replace(/.*(?=#[^\s]+$)/,""));var o=e.attr("data-target")||i,n=p(document).find(o);if(n.hasClass("carousel")){var s=p.extend({},n.data(),e.data()),a=e.attr("data-slide-to");a&&(s.interval=!1),r.call(n,s),a&&n.data("bs.carousel").to(a),t.preventDefault()}};p(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),p(window).on("load",function(){p('[data-ride="carousel"]').each(function(){var t=p(this);r.call(t,t.data())})})}(jQuery),function(a){"use strict";var r=function(t,e){this.$element=a(t),this.options=a.extend({},r.DEFAULTS,e),this.$trigger=a('[data-toggle="collapse"][href="#'+t.id+'"],[data-toggle="collapse"][data-target="#'+t.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};function n(t){var e,i=t.attr("data-target")||(e=t.attr("href"))&&e.replace(/.*(?=#[^\s]+$)/,"");return a(document).find(i)}function l(o){return this.each(function(){var t=a(this),e=t.data("bs.collapse"),i=a.extend({},r.DEFAULTS,t.data(),"object"==typeof o&&o);!e&&i.toggle&&/show|hide/.test(o)&&(i.toggle=!1),e||t.data("bs.collapse",e=new r(this,i)),"string"==typeof o&&e[o]()})}r.VERSION="3.4.1",r.TRANSITION_DURATION=350,r.DEFAULTS={toggle:!0},r.prototype.dimension=function(){return this.$element.hasClass("width")?"width":"height"},r.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var t,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(t=e.data("bs.collapse"))&&t.transitioning)){var i=a.Event("show.bs.collapse");if(this.$element.trigger(i),!i.isDefaultPrevented()){e&&e.length&&(l.call(e,"hide"),t||e.data("bs.collapse",null));var o=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[o](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var n=function(){this.$element.removeClass("collapsing").addClass("collapse in")[o](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return n.call(this);var s=a.camelCase(["scroll",o].join("-"));this.$element.one("bsTransitionEnd",a.proxy(n,this)).emulateTransitionEnd(r.TRANSITION_DURATION)[o](this.$element[0][s])}}}},r.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var t=a.Event("hide.bs.collapse");if(this.$element.trigger(t),!t.isDefaultPrevented()){var e=this.dimension();this.$element[e](this.$element[e]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var i=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};if(!a.support.transition)return i.call(this);this.$element[e](0).one("bsTransitionEnd",a.proxy(i,this)).emulateTransitionEnd(r.TRANSITION_DURATION)}}},r.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},r.prototype.getParent=function(){return a(document).find(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(t,e){var i=a(e);this.addAriaAndCollapsedClass(n(i),i)},this)).end()},r.prototype.addAriaAndCollapsedClass=function(t,e){var i=t.hasClass("in");t.attr("aria-expanded",i),e.toggleClass("collapsed",!i).attr("aria-expanded",i)};var t=a.fn.collapse;a.fn.collapse=l,a.fn.collapse.Constructor=r,a.fn.collapse.noConflict=function(){return a.fn.collapse=t,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(t){var e=a(this);e.attr("data-target")||t.preventDefault();var i=n(e),o=i.data("bs.collapse")?"toggle":e.data();l.call(i,o)})}(jQuery),function(a){"use strict";var r='[data-toggle="dropdown"]',o=function(t){a(t).on("click.bs.dropdown",this.toggle)};function l(t){var e=t.attr("data-target");e||(e=(e=t.attr("href"))&&/#[A-Za-z]/.test(e)&&e.replace(/.*(?=#[^\s]*$)/,""));var i="#"!==e?a(document).find(e):null;return i&&i.length?i:t.parent()}function s(o){o&&3===o.which||(a(".dropdown-backdrop").remove(),a(r).each(function(){var t=a(this),e=l(t),i={relatedTarget:this};e.hasClass("open")&&(o&&"click"==o.type&&/input|textarea/i.test(o.target.tagName)&&a.contains(e[0],o.target)||(e.trigger(o=a.Event("hide.bs.dropdown",i)),o.isDefaultPrevented()||(t.attr("aria-expanded","false"),e.removeClass("open").trigger(a.Event("hidden.bs.dropdown",i)))))}))}o.VERSION="3.4.1",o.prototype.toggle=function(t){var e=a(this);if(!e.is(".disabled, :disabled")){var i=l(e),o=i.hasClass("open");if(s(),!o){"ontouchstart"in document.documentElement&&!i.closest(".navbar-nav").length&&a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click",s);var n={relatedTarget:this};if(i.trigger(t=a.Event("show.bs.dropdown",n)),t.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),i.toggleClass("open").trigger(a.Event("shown.bs.dropdown",n))}return!1}},o.prototype.keydown=function(t){if(/(38|40|27|32)/.test(t.which)&&!/input|textarea/i.test(t.target.tagName)){var e=a(this);if(t.preventDefault(),t.stopPropagation(),!e.is(".disabled, :disabled")){var i=l(e),o=i.hasClass("open");if(!o&&27!=t.which||o&&27==t.which)return 27==t.which&&i.find(r).trigger("focus"),e.trigger("click");var n=i.find(".dropdown-menu li:not(.disabled):visible a");if(n.length){var s=n.index(t.target);38==t.which&&0<s&&s--,40==t.which&&s<n.length-1&&s++,~s||(s=0),n.eq(s).trigger("focus")}}}};var t=a.fn.dropdown;a.fn.dropdown=function e(i){return this.each(function(){var t=a(this),e=t.data("bs.dropdown");e||t.data("bs.dropdown",e=new o(this)),"string"==typeof i&&e[i].call(t)})},a.fn.dropdown.Constructor=o,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=t,this},a(document).on("click.bs.dropdown.data-api",s).on("click.bs.dropdown.data-api",".dropdown form",function(t){t.stopPropagation()}).on("click.bs.dropdown.data-api",r,o.prototype.toggle).on("keydown.bs.dropdown.data-api",r,o.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",o.prototype.keydown)}(jQuery),function(a){"use strict";var s=function(t,e){this.options=e,this.$body=a(document.body),this.$element=a(t),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.fixedContent=".navbar-fixed-top, .navbar-fixed-bottom",this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};function r(o,n){return this.each(function(){var t=a(this),e=t.data("bs.modal"),i=a.extend({},s.DEFAULTS,t.data(),"object"==typeof o&&o);e||t.data("bs.modal",e=new s(this,i)),"string"==typeof o?e[o](n):i.show&&e.show(n)})}s.VERSION="3.4.1",s.TRANSITION_DURATION=300,s.BACKDROP_TRANSITION_DURATION=150,s.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},s.prototype.toggle=function(t){return this.isShown?this.hide():this.show(t)},s.prototype.show=function(i){var o=this,t=a.Event("show.bs.modal",{relatedTarget:i});this.$element.trigger(t),this.isShown||t.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){o.$element.one("mouseup.dismiss.bs.modal",function(t){a(t.target).is(o.$element)&&(o.ignoreBackdropClick=!0)})}),this.backdrop(function(){var t=a.support.transition&&o.$element.hasClass("fade");o.$element.parent().length||o.$element.appendTo(o.$body),o.$element.show().scrollTop(0),o.adjustDialog(),t&&o.$element[0].offsetWidth,o.$element.addClass("in"),o.enforceFocus();var e=a.Event("shown.bs.modal",{relatedTarget:i});t?o.$dialog.one("bsTransitionEnd",function(){o.$element.trigger("focus").trigger(e)}).emulateTransitionEnd(s.TRANSITION_DURATION):o.$element.trigger("focus").trigger(e)}))},s.prototype.hide=function(t){t&&t.preventDefault(),t=a.Event("hide.bs.modal"),this.$element.trigger(t),this.isShown&&!t.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(s.TRANSITION_DURATION):this.hideModal())},s.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(t){document===t.target||this.$element[0]===t.target||this.$element.has(t.target).length||this.$element.trigger("focus")},this))},s.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(t){27==t.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},s.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},s.prototype.hideModal=function(){var t=this;this.$element.hide(),this.backdrop(function(){t.$body.removeClass("modal-open"),t.resetAdjustments(),t.resetScrollbar(),t.$element.trigger("hidden.bs.modal")})},s.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},s.prototype.backdrop=function(t){var e=this,i=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var o=a.support.transition&&i;if(this.$backdrop=a(document.createElement("div")).addClass("modal-backdrop "+i).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(t){this.ignoreBackdropClick?this.ignoreBackdropClick=!1:t.target===t.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide())},this)),o&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!t)return;o?this.$backdrop.one("bsTransitionEnd",t).emulateTransitionEnd(s.BACKDROP_TRANSITION_DURATION):t()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var n=function(){e.removeBackdrop(),t&&t()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",n).emulateTransitionEnd(s.BACKDROP_TRANSITION_DURATION):n()}else t&&t()},s.prototype.handleUpdate=function(){this.adjustDialog()},s.prototype.adjustDialog=function(){var t=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&t?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!t?this.scrollbarWidth:""})},s.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},s.prototype.checkScrollbar=function(){var t=window.innerWidth;if(!t){var e=document.documentElement.getBoundingClientRect();t=e.right-Math.abs(e.left)}this.bodyIsOverflowing=document.body.clientWidth<t,this.scrollbarWidth=this.measureScrollbar()},s.prototype.setScrollbar=function(){var t=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"";var n=this.scrollbarWidth;this.bodyIsOverflowing&&(this.$body.css("padding-right",t+n),a(this.fixedContent).each(function(t,e){var i=e.style.paddingRight,o=a(e).css("padding-right");a(e).data("padding-right",i).css("padding-right",parseFloat(o)+n+"px")}))},s.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad),a(this.fixedContent).each(function(t,e){var i=a(e).data("padding-right");a(e).removeData("padding-right"),e.style.paddingRight=i||""})},s.prototype.measureScrollbar=function(){var t=document.createElement("div");t.className="modal-scrollbar-measure",this.$body.append(t);var e=t.offsetWidth-t.clientWidth;return this.$body[0].removeChild(t),e};var t=a.fn.modal;a.fn.modal=r,a.fn.modal.Constructor=s,a.fn.modal.noConflict=function(){return a.fn.modal=t,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(t){var e=a(this),i=e.attr("href"),o=e.attr("data-target")||i&&i.replace(/.*(?=#[^\s]+$)/,""),n=a(document).find(o),s=n.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(i)&&i},n.data(),e.data());e.is("a")&&t.preventDefault(),n.one("show.bs.modal",function(t){t.isDefaultPrevented()||n.one("hidden.bs.modal",function(){e.is(":visible")&&e.trigger("focus")})}),r.call(n,s,this)})}(jQuery),function(g){"use strict";var o=["sanitize","whiteList","sanitizeFn"],a=["background","cite","href","itemtype","longdesc","poster","src","xlink:href"],t={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},r=/^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,l=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;function u(t,e){var i=t.nodeName.toLowerCase();if(-1!==g.inArray(i,e))return-1===g.inArray(i,a)||Boolean(t.nodeValue.match(r)||t.nodeValue.match(l));for(var o=g(e).filter(function(t,e){return e instanceof RegExp}),n=0,s=o.length;n<s;n++)if(i.match(o[n]))return!0;return!1}function n(t,e,i){if(0===t.length)return t;if(i&&"function"==typeof i)return i(t);if(!document.implementation||!document.implementation.createHTMLDocument)return t;var o=document.implementation.createHTMLDocument("sanitization");o.body.innerHTML=t;for(var n=g.map(e,function(t,e){return e}),s=g(o.body).find("*"),a=0,r=s.length;a<r;a++){var l=s[a],h=l.nodeName.toLowerCase();if(-1!==g.inArray(h,n))for(var d=g.map(l.attributes,function(t){return t}),p=[].concat(e["*"]||[],e[h]||[]),c=0,f=d.length;c<f;c++)u(d[c],p)||l.removeAttribute(d[c].nodeName);else l.parentNode.removeChild(l)}return o.body.innerHTML}var m=function(t,e){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",t,e)};m.VERSION="3.4.1",m.TRANSITION_DURATION=150,m.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0},sanitize:!0,sanitizeFn:null,whiteList:t},m.prototype.init=function(t,e,i){if(this.enabled=!0,this.type=t,this.$element=g(e),this.options=this.getOptions(i),this.$viewport=this.options.viewport&&g(document).find(g.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var o=this.options.trigger.split(" "),n=o.length;n--;){var s=o[n];if("click"==s)this.$element.on("click."+this.type,this.options.selector,g.proxy(this.toggle,this));else if("manual"!=s){var a="hover"==s?"mouseenter":"focusin",r="hover"==s?"mouseleave":"focusout";this.$element.on(a+"."+this.type,this.options.selector,g.proxy(this.enter,this)),this.$element.on(r+"."+this.type,this.options.selector,g.proxy(this.leave,this))}}this.options.selector?this._options=g.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},m.prototype.getDefaults=function(){return m.DEFAULTS},m.prototype.getOptions=function(t){var e=this.$element.data();for(var i in e)e.hasOwnProperty(i)&&-1!==g.inArray(i,o)&&delete e[i];return(t=g.extend({},this.getDefaults(),e,t)).delay&&"number"==typeof t.delay&&(t.delay={show:t.delay,hide:t.delay}),t.sanitize&&(t.template=n(t.template,t.whiteList,t.sanitizeFn)),t},m.prototype.getDelegateOptions=function(){var i={},o=this.getDefaults();return this._options&&g.each(this._options,function(t,e){o[t]!=e&&(i[t]=e)}),i},m.prototype.enter=function(t){var e=t instanceof this.constructor?t:g(t.currentTarget).data("bs."+this.type);if(e||(e=new this.constructor(t.currentTarget,this.getDelegateOptions()),g(t.currentTarget).data("bs."+this.type,e)),t instanceof g.Event&&(e.inState["focusin"==t.type?"focus":"hover"]=!0),e.tip().hasClass("in")||"in"==e.hoverState)e.hoverState="in";else{if(clearTimeout(e.timeout),e.hoverState="in",!e.options.delay||!e.options.delay.show)return e.show();e.timeout=setTimeout(function(){"in"==e.hoverState&&e.show()},e.options.delay.show)}},m.prototype.isInStateTrue=function(){for(var t in this.inState)if(this.inState[t])return!0;return!1},m.prototype.leave=function(t){var e=t instanceof this.constructor?t:g(t.currentTarget).data("bs."+this.type);if(e||(e=new this.constructor(t.currentTarget,this.getDelegateOptions()),g(t.currentTarget).data("bs."+this.type,e)),t instanceof g.Event&&(e.inState["focusout"==t.type?"focus":"hover"]=!1),!e.isInStateTrue()){if(clearTimeout(e.timeout),e.hoverState="out",!e.options.delay||!e.options.delay.hide)return e.hide();e.timeout=setTimeout(function(){"out"==e.hoverState&&e.hide()},e.options.delay.hide)}},m.prototype.show=function(){var t=g.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(t);var e=g.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(t.isDefaultPrevented()||!e)return;var i=this,o=this.tip(),n=this.getUID(this.type);this.setContent(),o.attr("id",n),this.$element.attr("aria-describedby",n),this.options.animation&&o.addClass("fade");var s="function"==typeof this.options.placement?this.options.placement.call(this,o[0],this.$element[0]):this.options.placement,a=/\s?auto?\s?/i,r=a.test(s);r&&(s=s.replace(a,"")||"top"),o.detach().css({top:0,left:0,display:"block"}).addClass(s).data("bs."+this.type,this),this.options.container?o.appendTo(g(document).find(this.options.container)):o.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var l=this.getPosition(),h=o[0].offsetWidth,d=o[0].offsetHeight;if(r){var p=s,c=this.getPosition(this.$viewport);s="bottom"==s&&l.bottom+d>c.bottom?"top":"top"==s&&l.top-d<c.top?"bottom":"right"==s&&l.right+h>c.width?"left":"left"==s&&l.left-h<c.left?"right":s,o.removeClass(p).addClass(s)}var f=this.getCalculatedOffset(s,l,h,d);this.applyPlacement(f,s);var u=function(){var t=i.hoverState;i.$element.trigger("shown.bs."+i.type),i.hoverState=null,"out"==t&&i.leave(i)};g.support.transition&&this.$tip.hasClass("fade")?o.one("bsTransitionEnd",u).emulateTransitionEnd(m.TRANSITION_DURATION):u()}},m.prototype.applyPlacement=function(t,e){var i=this.tip(),o=i[0].offsetWidth,n=i[0].offsetHeight,s=parseInt(i.css("margin-top"),10),a=parseInt(i.css("margin-left"),10);isNaN(s)&&(s=0),isNaN(a)&&(a=0),t.top+=s,t.left+=a,g.offset.setOffset(i[0],g.extend({using:function(t){i.css({top:Math.round(t.top),left:Math.round(t.left)})}},t),0),i.addClass("in");var r=i[0].offsetWidth,l=i[0].offsetHeight;"top"==e&&l!=n&&(t.top=t.top+n-l);var h=this.getViewportAdjustedDelta(e,t,r,l);h.left?t.left+=h.left:t.top+=h.top;var d=/top|bottom/.test(e),p=d?2*h.left-o+r:2*h.top-n+l,c=d?"offsetWidth":"offsetHeight";i.offset(t),this.replaceArrow(p,i[0][c],d)},m.prototype.replaceArrow=function(t,e,i){this.arrow().css(i?"left":"top",50*(1-t/e)+"%").css(i?"top":"left","")},m.prototype.setContent=function(){var t=this.tip(),e=this.getTitle();this.options.html?(this.options.sanitize&&(e=n(e,this.options.whiteList,this.options.sanitizeFn)),t.find(".tooltip-inner").html(e)):t.find(".tooltip-inner").text(e),t.removeClass("fade in top bottom left right")},m.prototype.hide=function(t){var e=this,i=g(this.$tip),o=g.Event("hide.bs."+this.type);function n(){"in"!=e.hoverState&&i.detach(),e.$element&&e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),t&&t()}if(this.$element.trigger(o),!o.isDefaultPrevented())return i.removeClass("in"),g.support.transition&&i.hasClass("fade")?i.one("bsTransitionEnd",n).emulateTransitionEnd(m.TRANSITION_DURATION):n(),this.hoverState=null,this},m.prototype.fixTitle=function(){var t=this.$element;(t.attr("title")||"string"!=typeof t.attr("data-original-title"))&&t.attr("data-original-title",t.attr("title")||"").attr("title","")},m.prototype.hasContent=function(){return this.getTitle()},m.prototype.getPosition=function(t){var e=(t=t||this.$element)[0],i="BODY"==e.tagName,o=e.getBoundingClientRect();null==o.width&&(o=g.extend({},o,{width:o.right-o.left,height:o.bottom-o.top}));var n=window.SVGElement&&e instanceof window.SVGElement,s=i?{top:0,left:0}:n?null:t.offset(),a={scroll:i?document.documentElement.scrollTop||document.body.scrollTop:t.scrollTop()},r=i?{width:g(window).width(),height:g(window).height()}:null;return g.extend({},o,a,r,s)},m.prototype.getCalculatedOffset=function(t,e,i,o){return"bottom"==t?{top:e.top+e.height,left:e.left+e.width/2-i/2}:"top"==t?{top:e.top-o,left:e.left+e.width/2-i/2}:"left"==t?{top:e.top+e.height/2-o/2,left:e.left-i}:{top:e.top+e.height/2-o/2,left:e.left+e.width}},m.prototype.getViewportAdjustedDelta=function(t,e,i,o){var n={top:0,left:0};if(!this.$viewport)return n;var s=this.options.viewport&&this.options.viewport.padding||0,a=this.getPosition(this.$viewport);if(/right|left/.test(t)){var r=e.top-s-a.scroll,l=e.top+s-a.scroll+o;r<a.top?n.top=a.top-r:l>a.top+a.height&&(n.top=a.top+a.height-l)}else{var h=e.left-s,d=e.left+s+i;h<a.left?n.left=a.left-h:d>a.right&&(n.left=a.left+a.width-d)}return n},m.prototype.getTitle=function(){var t=this.$element,e=this.options;return t.attr("data-original-title")||("function"==typeof e.title?e.title.call(t[0]):e.title)},m.prototype.getUID=function(t){for(;t+=~~(1e6*Math.random()),document.getElementById(t););return t},m.prototype.tip=function(){if(!this.$tip&&(this.$tip=g(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},m.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},m.prototype.enable=function(){this.enabled=!0},m.prototype.disable=function(){this.enabled=!1},m.prototype.toggleEnabled=function(){this.enabled=!this.enabled},m.prototype.toggle=function(t){var e=this;t&&((e=g(t.currentTarget).data("bs."+this.type))||(e=new this.constructor(t.currentTarget,this.getDelegateOptions()),g(t.currentTarget).data("bs."+this.type,e))),t?(e.inState.click=!e.inState.click,e.isInStateTrue()?e.enter(e):e.leave(e)):e.tip().hasClass("in")?e.leave(e):e.enter(e)},m.prototype.destroy=function(){var t=this;clearTimeout(this.timeout),this.hide(function(){t.$element.off("."+t.type).removeData("bs."+t.type),t.$tip&&t.$tip.detach(),t.$tip=null,t.$arrow=null,t.$viewport=null,t.$element=null})},m.prototype.sanitizeHtml=function(t){return n(t,this.options.whiteList,this.options.sanitizeFn)};var e=g.fn.tooltip;g.fn.tooltip=function i(o){return this.each(function(){var t=g(this),e=t.data("bs.tooltip"),i="object"==typeof o&&o;!e&&/destroy|hide/.test(o)||(e||t.data("bs.tooltip",e=new m(this,i)),"string"==typeof o&&e[o]())})},g.fn.tooltip.Constructor=m,g.fn.tooltip.noConflict=function(){return g.fn.tooltip=e,this}}(jQuery),function(n){"use strict";var s=function(t,e){this.init("popover",t,e)};if(!n.fn.tooltip)throw new Error("Popover requires tooltip.js");s.VERSION="3.4.1",s.DEFAULTS=n.extend({},n.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),((s.prototype=n.extend({},n.fn.tooltip.Constructor.prototype)).constructor=s).prototype.getDefaults=function(){return s.DEFAULTS},s.prototype.setContent=function(){var t=this.tip(),e=this.getTitle(),i=this.getContent();if(this.options.html){var o=typeof i;this.options.sanitize&&(e=this.sanitizeHtml(e),"string"===o&&(i=this.sanitizeHtml(i))),t.find(".popover-title").html(e),t.find(".popover-content").children().detach().end()["string"===o?"html":"append"](i)}else t.find(".popover-title").text(e),t.find(".popover-content").children().detach().end().text(i);t.removeClass("fade top bottom left right in"),t.find(".popover-title").html()||t.find(".popover-title").hide()},s.prototype.hasContent=function(){return this.getTitle()||this.getContent()},s.prototype.getContent=function(){var t=this.$element,e=this.options;return t.attr("data-content")||("function"==typeof e.content?e.content.call(t[0]):e.content)},s.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var t=n.fn.popover;n.fn.popover=function e(o){return this.each(function(){var t=n(this),e=t.data("bs.popover"),i="object"==typeof o&&o;!e&&/destroy|hide/.test(o)||(e||t.data("bs.popover",e=new s(this,i)),"string"==typeof o&&e[o]())})},n.fn.popover.Constructor=s,n.fn.popover.noConflict=function(){return n.fn.popover=t,this}}(jQuery),function(s){"use strict";function n(t,e){this.$body=s(document.body),this.$scrollElement=s(t).is(document.body)?s(window):s(t),this.options=s.extend({},n.DEFAULTS,e),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",s.proxy(this.process,this)),this.refresh(),this.process()}function e(o){return this.each(function(){var t=s(this),e=t.data("bs.scrollspy"),i="object"==typeof o&&o;e||t.data("bs.scrollspy",e=new n(this,i)),"string"==typeof o&&e[o]()})}n.VERSION="3.4.1",n.DEFAULTS={offset:10},n.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},n.prototype.refresh=function(){var t=this,o="offset",n=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),s.isWindow(this.$scrollElement[0])||(o="position",n=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var t=s(this),e=t.data("target")||t.attr("href"),i=/^#./.test(e)&&s(e);return i&&i.length&&i.is(":visible")&&[[i[o]().top+n,e]]||null}).sort(function(t,e){return t[0]-e[0]}).each(function(){t.offsets.push(this[0]),t.targets.push(this[1])})},n.prototype.process=function(){var t,e=this.$scrollElement.scrollTop()+this.options.offset,i=this.getScrollHeight(),o=this.options.offset+i-this.$scrollElement.height(),n=this.offsets,s=this.targets,a=this.activeTarget;if(this.scrollHeight!=i&&this.refresh(),o<=e)return a!=(t=s[s.length-1])&&this.activate(t);if(a&&e<n[0])return this.activeTarget=null,this.clear();for(t=n.length;t--;)a!=s[t]&&e>=n[t]&&(n[t+1]===undefined||e<n[t+1])&&this.activate(s[t])},n.prototype.activate=function(t){this.activeTarget=t,this.clear();var e=this.selector+'[data-target="'+t+'"],'+this.selector+'[href="'+t+'"]',i=s(e).parents("li").addClass("active");i.parent(".dropdown-menu").length&&(i=i.closest("li.dropdown").addClass("active")),i.trigger("activate.bs.scrollspy")},n.prototype.clear=function(){s(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var t=s.fn.scrollspy;s.fn.scrollspy=e,s.fn.scrollspy.Constructor=n,s.fn.scrollspy.noConflict=function(){return s.fn.scrollspy=t,this},s(window).on("load.bs.scrollspy.data-api",function(){s('[data-spy="scroll"]').each(function(){var t=s(this);e.call(t,t.data())})})}(jQuery),function(r){"use strict";var a=function(t){this.element=r(t)};function e(i){return this.each(function(){var t=r(this),e=t.data("bs.tab");e||t.data("bs.tab",e=new a(this)),"string"==typeof i&&e[i]()})}a.VERSION="3.4.1",a.TRANSITION_DURATION=150,a.prototype.show=function(){var t=this.element,e=t.closest("ul:not(.dropdown-menu)"),i=t.data("target");if(i||(i=(i=t.attr("href"))&&i.replace(/.*(?=#[^\s]*$)/,"")),!t.parent("li").hasClass("active")){var o=e.find(".active:last a"),n=r.Event("hide.bs.tab",{relatedTarget:t[0]}),s=r.Event("show.bs.tab",{relatedTarget:o[0]});if(o.trigger(n),t.trigger(s),!s.isDefaultPrevented()&&!n.isDefaultPrevented()){var a=r(document).find(i);this.activate(t.closest("li"),e),this.activate(a,a.parent(),function(){o.trigger({type:"hidden.bs.tab",relatedTarget:t[0]}),t.trigger({type:"shown.bs.tab",relatedTarget:o[0]})})}}},a.prototype.activate=function(t,e,i){var o=e.find("> .active"),n=i&&r.support.transition&&(o.length&&o.hasClass("fade")||!!e.find("> .fade").length);function s(){o.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),t.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),n?(t[0].offsetWidth,t.addClass("in")):t.removeClass("fade"),t.parent(".dropdown-menu").length&&t.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),i&&i()}o.length&&n?o.one("bsTransitionEnd",s).emulateTransitionEnd(a.TRANSITION_DURATION):s(),o.removeClass("in")};var t=r.fn.tab;r.fn.tab=e,r.fn.tab.Constructor=a,r.fn.tab.noConflict=function(){return r.fn.tab=t,this};var i=function(t){t.preventDefault(),e.call(r(this),"show")};r(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',i).on("click.bs.tab.data-api",'[data-toggle="pill"]',i)}(jQuery),function(l){"use strict";var h=function(t,e){this.options=l.extend({},h.DEFAULTS,e);var i=this.options.target===h.DEFAULTS.target?l(this.options.target):l(document).find(this.options.target);this.$target=i.on("scroll.bs.affix.data-api",l.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",l.proxy(this.checkPositionWithEventLoop,this)),this.$element=l(t),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};function i(o){return this.each(function(){var t=l(this),e=t.data("bs.affix"),i="object"==typeof o&&o;e||t.data("bs.affix",e=new h(this,i)),"string"==typeof o&&e[o]()})}h.VERSION="3.4.1",h.RESET="affix affix-top affix-bottom",h.DEFAULTS={offset:0,target:window},h.prototype.getState=function(t,e,i,o){var n=this.$target.scrollTop(),s=this.$element.offset(),a=this.$target.height();if(null!=i&&"top"==this.affixed)return n<i&&"top";if("bottom"==this.affixed)return null!=i?!(n+this.unpin<=s.top)&&"bottom":!(n+a<=t-o)&&"bottom";var r=null==this.affixed,l=r?n:s.top;return null!=i&&n<=i?"top":null!=o&&t-o<=l+(r?a:e)&&"bottom"},h.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(h.RESET).addClass("affix");var t=this.$target.scrollTop(),e=this.$element.offset();return this.pinnedOffset=e.top-t},h.prototype.checkPositionWithEventLoop=function(){setTimeout(l.proxy(this.checkPosition,this),1)},h.prototype.checkPosition=function(){if(this.$element.is(":visible")){var t=this.$element.height(),e=this.options.offset,i=e.top,o=e.bottom,n=Math.max(l(document).height(),l(document.body).height());"object"!=typeof e&&(o=i=e),"function"==typeof i&&(i=e.top(this.$element)),"function"==typeof o&&(o=e.bottom(this.$element));var s=this.getState(n,t,i,o);if(this.affixed!=s){null!=this.unpin&&this.$element.css("top","");var a="affix"+(s?"-"+s:""),r=l.Event(a+".bs.affix");if(this.$element.trigger(r),r.isDefaultPrevented())return;this.affixed=s,this.unpin="bottom"==s?this.getPinnedOffset():null,this.$element.removeClass(h.RESET).addClass(a).trigger(a.replace("affix","affixed")+".bs.affix")}"bottom"==s&&this.$element.offset({top:n-t-o})}};var t=l.fn.affix;l.fn.affix=i,l.fn.affix.Constructor=h,l.fn.affix.noConflict=function(){return l.fn.affix=t,this},l(window).on("load",function(){l('[data-spy="affix"]').each(function(){var t=l(this),e=t.data();e.offset=e.offset||{},null!=e.offsetBottom&&(e.offset.bottom=e.offsetBottom),null!=e.offsetTop&&(e.offset.top=e.offsetTop),i.call(t,e)})})}(jQuery);
;/**
 * <========= Table of Contents: =========>
 *
 *  imagesLoaded PACKAGED
 *	Isotope PACKAGED v2.2.2
 *  jQuery appear plugin
 *  jQuery fancyBox
 *	Masonry PACKAGED
 *	Owl carousel
 *	Simple JavaScript Inheritance
 *	jquery countdown
 *	jquery validate
 *  jquery easein
 *  WOW - v1.1.3
 *	jQuery magnific popup
 *	slick slider
 *	odometer 0.4.8
 *
 * ========================================>
 **/
/*!
 * imagesLoaded PACKAGED v4.1.0
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
!(function (t, e) {
    "function" == typeof define && define.amd
        ? define("ev-emitter/ev-emitter", e)
        : "object" == typeof module && module.exports
            ? (module.exports = e())
            : (t.EvEmitter = e());
})(this, function () {
    function t() { }
    var e = t.prototype;
    return ((e.on = function (t, e) {
        if (t && e) {
            var i = (this._events = this._events || {}), n = (i[t] = i[t] || []);
            return -1 == n.indexOf(e) && n.push(e), this;
        }
    }),
        (e.once = function (t, e) {
            if (t && e) {
                this.on(t, e);
                var i = (this._onceEvents = this._onceEvents || {}), n = (i[t] = i[t] || []);
                return (n[e] = !0), this;
            }
        }),
        (e.off = function (t, e) {
            var i = this._events && this._events[t];
            if (i && i.length) {
                var n = i.indexOf(e);
                return -1 != n && i.splice(n, 1), this;
            }
        }),
        (e.emitEvent = function (t, e) {
            var i = this._events && this._events[t];
            if (i && i.length) {
                var n = 0, o = i[n];
                e = e || [];
                for (var r = this._onceEvents && this._onceEvents[t]; o;) {
                    var s = r && r[o];
                    s && (this.off(t, o), delete r[o]),
                        o.apply(this, e),
                        (n += s ? 0 : 1),
                        (o = i[n]);
                }
                return this;
            }
        }),
        t);
}),
    (function (t, e) {
        "use strict";
        "function" == typeof define && define.amd
            ? define(["ev-emitter/ev-emitter"], function (i) {
                return e(t, i);
            })
            : "object" == typeof module && module.exports
                ? (module.exports = e(t, require("ev-emitter")))
                : (t.imagesLoaded = e(t, t.EvEmitter));
    })(window, function (t, e) {
        function i(t, e) {
            for (var i in e)
                t[i] = e[i];
            return t;
        }
        function n(t) {
            var e = [];
            if (Array.isArray(t))
                e = t;
            else if ("number" == typeof t.length)
                for (var i = 0; i < t.length; i++)
                    e.push(t[i]);
            else
                e.push(t);
            return e;
        }
        function o(t, e, r) {
            return this instanceof o
                ? ("string" == typeof t && (t = document.querySelectorAll(t)),
                    (this.elements = n(t)),
                    (this.options = i({}, this.options)),
                    "function" == typeof e ? (r = e) : i(this.options, e),
                    r && this.on("always", r),
                    this.getImages(),
                    h && (this.jqDeferred = new h.Deferred()),
                    void setTimeout(function () {
                        this.check();
                    }.bind(this)))
                : new o(t, e, r);
        }
        function r(t) {
            this.img = t;
        }
        function s(t, e) {
            (this.url = t), (this.element = e), (this.img = new Image());
        }
        var h = t.jQuery, a = t.console;
        (o.prototype = Object.create(e.prototype)),
            (o.prototype.options = {}),
            (o.prototype.getImages = function () {
                (this.images = []), this.elements.forEach(this.addElementImages, this);
            }),
            (o.prototype.addElementImages = function (t) {
                "IMG" == t.nodeName && this.addImage(t),
                    this.options.background === !0 && this.addElementBackgroundImages(t);
                var e = t.nodeType;
                if (e && d[e]) {
                    for (var i = t.querySelectorAll("img"), n = 0; n < i.length; n++) {
                        var o = i[n];
                        this.addImage(o);
                    }
                    if ("string" == typeof this.options.background) {
                        var r = t.querySelectorAll(this.options.background);
                        for (n = 0; n < r.length; n++) {
                            var s = r[n];
                            this.addElementBackgroundImages(s);
                        }
                    }
                }
            });
        var d = { 1: !0, 9: !0, 11: !0 };
        return ((o.prototype.addElementBackgroundImages = function (t) {
            var e = getComputedStyle(t);
            if (e)
                for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(e.backgroundImage); null !== n;) {
                    var o = n && n[2];
                    o && this.addBackground(o, t), (n = i.exec(e.backgroundImage));
                }
        }),
            (o.prototype.addImage = function (t) {
                var e = new r(t);
                this.images.push(e);
            }),
            (o.prototype.addBackground = function (t, e) {
                var i = new s(t, e);
                this.images.push(i);
            }),
            (o.prototype.check = function () {
                function t(t, i, n) {
                    setTimeout(function () {
                        e.progress(t, i, n);
                    });
                }
                var e = this;
                return ((this.progressedCount = 0),
                    (this.hasAnyBroken = !1),
                    this.images.length
                        ? void this.images.forEach(function (e) {
                            e.once("progress", t), e.check();
                        })
                        : void this.complete());
            }),
            (o.prototype.progress = function (t, e, i) {
                this.progressedCount++,
                    (this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded),
                    this.emitEvent("progress", [this, t, e]),
                    this.jqDeferred &&
                        this.jqDeferred.notify &&
                        this.jqDeferred.notify(this, t),
                    this.progressedCount == this.images.length && this.complete(),
                    this.options.debug && a && a.log("progress: " + i, t, e);
            }),
            (o.prototype.complete = function () {
                var t = this.hasAnyBroken ? "fail" : "done";
                if (((this.isComplete = !0),
                    this.emitEvent(t, [this]),
                    this.emitEvent("always", [this]),
                    this.jqDeferred)) {
                    var e = this.hasAnyBroken ? "reject" : "resolve";
                    this.jqDeferred[e](this);
                }
            }),
            (r.prototype = Object.create(e.prototype)),
            (r.prototype.check = function () {
                var t = this.getIsImageComplete();
                return t
                    ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth")
                    : ((this.proxyImage = new Image()),
                        this.proxyImage.addEventListener("load", this),
                        this.proxyImage.addEventListener("error", this),
                        this.img.addEventListener("load", this),
                        this.img.addEventListener("error", this),
                        void (this.proxyImage.src = this.img.src));
            }),
            (r.prototype.getIsImageComplete = function () {
                return this.img.complete && void 0 !== this.img.naturalWidth;
            }),
            (r.prototype.confirm = function (t, e) {
                (this.isLoaded = t), this.emitEvent("progress", [this, this.img, e]);
            }),
            (r.prototype.handleEvent = function (t) {
                var e = "on" + t.type;
                this[e] && this[e](t);
            }),
            (r.prototype.onload = function () {
                this.confirm(!0, "onload"), this.unbindEvents();
            }),
            (r.prototype.onerror = function () {
                this.confirm(!1, "onerror"), this.unbindEvents();
            }),
            (r.prototype.unbindEvents = function () {
                this.proxyImage.removeEventListener("load", this),
                    this.proxyImage.removeEventListener("error", this),
                    this.img.removeEventListener("load", this),
                    this.img.removeEventListener("error", this);
            }),
            (s.prototype = Object.create(r.prototype)),
            (s.prototype.check = function () {
                this.img.addEventListener("load", this),
                    this.img.addEventListener("error", this),
                    (this.img.src = this.url);
                var t = this.getIsImageComplete();
                t &&
                    (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"),
                        this.unbindEvents());
            }),
            (s.prototype.unbindEvents = function () {
                this.img.removeEventListener("load", this),
                    this.img.removeEventListener("error", this);
            }),
            (s.prototype.confirm = function (t, e) {
                (this.isLoaded = t),
                    this.emitEvent("progress", [this, this.element, e]);
            }),
            (o.makeJQueryPlugin = function (e) {
                (e = e || t.jQuery),
                    e &&
                        ((h = e),
                            (h.fn.imagesLoaded = function (t, e) {
                                var i = new o(this, t, e);
                                return i.jqDeferred.promise(h(this));
                            }));
            }),
            o.makeJQueryPlugin(),
            o);
    });
/*!
 * Isotope PACKAGED v2.2.2
 *
 * http://isotope.metafizzy.co
 * Copyright 2015 Metafizzy
 */
!(function (a) {
    function b() { }
    function c(a) {
        function c(b) {
            b.prototype.option ||
                (b.prototype.option = function (b) {
                    a.isPlainObject(b) && (this.options = a.extend(!0, this.options, b));
                });
        }
        function e(b, c) {
            a.fn[b] = function (e) {
                if ("string" == typeof e) {
                    for (var g = d.call(arguments, 1), h = 0, i = this.length; i > h; h++) {
                        var j = this[h], k = a.data(j, b);
                        if (k)
                            if (a.isFunction(k[e]) && "_" !== e.charAt(0)) {
                                var l = k[e].apply(k, g);
                                if (void 0 !== l)
                                    return l;
                            }
                            else
                                f("no such method '" + e + "' for " + b + " instance");
                        else
                            f("cannot call methods on " +
                                b +
                                " prior to initialization; attempted to call '" +
                                e +
                                "'");
                    }
                    return this;
                }
                return this.each(function () {
                    var d = a.data(this, b);
                    d
                        ? (d.option(e), d._init())
                        : ((d = new c(this, e)), a.data(this, b, d));
                });
            };
        }
        if (a) {
            var f = "undefined" == typeof console
                ? b
                : function (a) {
                    console.error(a);
                };
            return ((a.bridget = function (a, b) {
                c(b), e(a, b);
            }),
                a.bridget);
        }
    }
    var d = Array.prototype.slice;
    "function" == typeof define && define.amd
        ? define("jquery-bridget/jquery.bridget", ["jquery"], c)
        : c("object" == typeof exports ? require("jquery") : a.jQuery);
})(window),
    (function (a) {
        function b(b) {
            var c = a.event;
            return (c.target = c.target || c.srcElement || b), c;
        }
        var c = document.documentElement, d = function () { };
        c.addEventListener
            ? (d = function (a, b, c) {
                a.addEventListener(b, c, !1);
            })
            : c.attachEvent &&
                (d = function (a, c, d) {
                    (a[c + d] = d.handleEvent
                        ? function () {
                            var c = b(a);
                            d.handleEvent.call(d, c);
                        }
                        : function () {
                            var c = b(a);
                            d.call(a, c);
                        }),
                        a.attachEvent("on" + c, a[c + d]);
                });
        var e = function () { };
        c.removeEventListener
            ? (e = function (a, b, c) {
                a.removeEventListener(b, c, !1);
            })
            : c.detachEvent &&
                (e = function (a, b, c) {
                    a.detachEvent("on" + b, a[b + c]);
                    try {
                        delete a[b + c];
                    }
                    catch (d) {
                        a[b + c] = void 0;
                    }
                });
        var f = { bind: d, unbind: e };
        "function" == typeof define && define.amd
            ? define("eventie/eventie", f)
            : "object" == typeof exports
                ? (module.exports = f)
                : (a.eventie = f);
    })(window),
    function () {
        "use strict";
        function a() { }
        function b(a, b) {
            for (var c = a.length; c--;)
                if (a[c].listener === b)
                    return c;
            return -1;
        }
        function c(a) {
            return function () {
                return this[a].apply(this, arguments);
            };
        }
        var d = a.prototype, e = this, f = e.EventEmitter;
        (d.getListeners = function (a) {
            var b, c, d = this._getEvents();
            if (a instanceof RegExp) {
                b = {};
                for (c in d)
                    d.hasOwnProperty(c) && a.test(c) && (b[c] = d[c]);
            }
            else
                b = d[a] || (d[a] = []);
            return b;
        }),
            (d.flattenListeners = function (a) {
                var b, c = [];
                for (b = 0; b < a.length; b += 1)
                    c.push(a[b].listener);
                return c;
            }),
            (d.getListenersAsObject = function (a) {
                var b, c = this.getListeners(a);
                return c instanceof Array && ((b = {}), (b[a] = c)), b || c;
            }),
            (d.addListener = function (a, c) {
                var d, e = this.getListenersAsObject(a), f = "object" == typeof c;
                for (d in e)
                    e.hasOwnProperty(d) &&
                        -1 === b(e[d], c) &&
                        e[d].push(f ? c : { listener: c, once: !1 });
                return this;
            }),
            (d.on = c("addListener")),
            (d.addOnceListener = function (a, b) {
                return this.addListener(a, { listener: b, once: !0 });
            }),
            (d.once = c("addOnceListener")),
            (d.defineEvent = function (a) {
                return this.getListeners(a), this;
            }),
            (d.defineEvents = function (a) {
                for (var b = 0; b < a.length; b += 1)
                    this.defineEvent(a[b]);
                return this;
            }),
            (d.removeListener = function (a, c) {
                var d, e, f = this.getListenersAsObject(a);
                for (e in f)
                    f.hasOwnProperty(e) &&
                        ((d = b(f[e], c)), -1 !== d && f[e].splice(d, 1));
                return this;
            }),
            (d.off = c("removeListener")),
            (d.addListeners = function (a, b) {
                return this.manipulateListeners(!1, a, b);
            }),
            (d.removeListeners = function (a, b) {
                return this.manipulateListeners(!0, a, b);
            }),
            (d.manipulateListeners = function (a, b, c) {
                var d, e, f = a ? this.removeListener : this.addListener, g = a ? this.removeListeners : this.addListeners;
                if ("object" != typeof b || b instanceof RegExp)
                    for (d = c.length; d--;)
                        f.call(this, b, c[d]);
                else
                    for (d in b)
                        b.hasOwnProperty(d) &&
                            (e = b[d]) &&
                            ("function" == typeof e
                                ? f.call(this, d, e)
                                : g.call(this, d, e));
                return this;
            }),
            (d.removeEvent = function (a) {
                var b, c = typeof a, d = this._getEvents();
                if ("string" === c)
                    delete d[a];
                else if (a instanceof RegExp)
                    for (b in d)
                        d.hasOwnProperty(b) && a.test(b) && delete d[b];
                else
                    delete this._events;
                return this;
            }),
            (d.removeAllListeners = c("removeEvent")),
            (d.emitEvent = function (a, b) {
                var c, d, e, f, g = this.getListenersAsObject(a);
                for (e in g)
                    if (g.hasOwnProperty(e))
                        for (d = g[e].length; d--;)
                            (c = g[e][d]),
                                c.once === !0 && this.removeListener(a, c.listener),
                                (f = c.listener.apply(this, b || [])),
                                f === this._getOnceReturnValue() &&
                                    this.removeListener(a, c.listener);
                return this;
            }),
            (d.trigger = c("emitEvent")),
            (d.emit = function (a) {
                var b = Array.prototype.slice.call(arguments, 1);
                return this.emitEvent(a, b);
            }),
            (d.setOnceReturnValue = function (a) {
                return (this._onceReturnValue = a), this;
            }),
            (d._getOnceReturnValue = function () {
                return this.hasOwnProperty("_onceReturnValue")
                    ? this._onceReturnValue
                    : !0;
            }),
            (d._getEvents = function () {
                return this._events || (this._events = {});
            }),
            (a.noConflict = function () {
                return (e.EventEmitter = f), a;
            }),
            "function" == typeof define && define.amd
                ? define("eventEmitter/EventEmitter", [], function () {
                    return a;
                })
                : "object" == typeof module && module.exports
                    ? (module.exports = a)
                    : (e.EventEmitter = a);
    }.call(this),
    (function (a) {
        function b(a) {
            if (a) {
                if ("string" == typeof d[a])
                    return a;
                a = a.charAt(0).toUpperCase() + a.slice(1);
                for (var b, e = 0, f = c.length; f > e; e++)
                    if (((b = c[e] + a), "string" == typeof d[b]))
                        return b;
            }
        }
        var c = "Webkit Moz ms Ms O".split(" "), d = document.documentElement.style;
        "function" == typeof define && define.amd
            ? define("get-style-property/get-style-property", [], function () {
                return b;
            })
            : "object" == typeof exports
                ? (module.exports = b)
                : (a.getStyleProperty = b);
    })(window),
    (function (a, b) {
        function c(a) {
            var b = parseFloat(a), c = -1 === a.indexOf("%") && !isNaN(b);
            return c && b;
        }
        function d() { }
        function e() {
            for (var a = {
                width: 0,
                height: 0,
                innerWidth: 0,
                innerHeight: 0,
                outerWidth: 0,
                outerHeight: 0
            }, b = 0, c = h.length; c > b; b++) {
                var d = h[b];
                a[d] = 0;
            }
            return a;
        }
        function f(b) {
            function d() {
                if (!m) {
                    m = !0;
                    var d = a.getComputedStyle;
                    if (((j = (function () {
                        var a = d
                            ? function (a) {
                                return d(a, null);
                            }
                            : function (a) {
                                return a.currentStyle;
                            };
                        return function (b) {
                            var c = a(b);
                            return (c ||
                                g("Style returned " +
                                    c +
                                    ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"),
                                c);
                        };
                    })()),
                        (k = b("boxSizing")))) {
                        var e = document.createElement("div");
                        (e.style.width = "200px"),
                            (e.style.padding = "1px 2px 3px 4px"),
                            (e.style.borderStyle = "solid"),
                            (e.style.borderWidth = "1px 2px 3px 4px"),
                            (e.style[k] = "border-box");
                        var f = document.body || document.documentElement;
                        f.appendChild(e);
                        var h = j(e);
                        (l = 200 === c(h.width)), f.removeChild(e);
                    }
                }
            }
            function f(a) {
                if ((d(),
                    "string" == typeof a && (a = document.querySelector(a)),
                    a && "object" == typeof a && a.nodeType)) {
                    var b = j(a);
                    if ("none" === b.display)
                        return e();
                    var f = {};
                    (f.width = a.offsetWidth), (f.height = a.offsetHeight);
                    for (var g = (f.isBorderBox = !(!k || !b[k] || "border-box" !== b[k])), m = 0, n = h.length; n > m; m++) {
                        var o = h[m], p = b[o];
                        p = i(a, p);
                        var q = parseFloat(p);
                        f[o] = isNaN(q) ? 0 : q;
                    }
                    var r = f.paddingLeft + f.paddingRight, s = f.paddingTop + f.paddingBottom, t = f.marginLeft + f.marginRight, u = f.marginTop + f.marginBottom, v = f.borderLeftWidth + f.borderRightWidth, w = f.borderTopWidth + f.borderBottomWidth, x = g && l, y = c(b.width);
                    y !== !1 && (f.width = y + (x ? 0 : r + v));
                    var z = c(b.height);
                    return (z !== !1 && (f.height = z + (x ? 0 : s + w)),
                        (f.innerWidth = f.width - (r + v)),
                        (f.innerHeight = f.height - (s + w)),
                        (f.outerWidth = f.width + t),
                        (f.outerHeight = f.height + u),
                        f);
                }
            }
            function i(b, c) {
                if (a.getComputedStyle || -1 === c.indexOf("%"))
                    return c;
                var d = b.style, e = d.left, f = b.runtimeStyle, g = f && f.left;
                return (g && (f.left = b.currentStyle.left),
                    (d.left = c),
                    (c = d.pixelLeft),
                    (d.left = e),
                    g && (f.left = g),
                    c);
            }
            var j, k, l, m = !1;
            return f;
        }
        var g = "undefined" == typeof console
            ? d
            : function (a) {
                console.error(a);
            }, h = [
            "paddingLeft",
            "paddingRight",
            "paddingTop",
            "paddingBottom",
            "marginLeft",
            "marginRight",
            "marginTop",
            "marginBottom",
            "borderLeftWidth",
            "borderRightWidth",
            "borderTopWidth",
            "borderBottomWidth"
        ];
        "function" == typeof define && define.amd
            ? define("get-size/get-size", [
                "get-style-property/get-style-property"
            ], f)
            : "object" == typeof exports
                ? (module.exports = f(require("desandro-get-style-property")))
                : (a.getSize = f(a.getStyleProperty));
    })(window),
    (function (a) {
        function b(a) {
            "function" == typeof a && (b.isReady ? a() : g.push(a));
        }
        function c(a) {
            var c = "readystatechange" === a.type && "complete" !== f.readyState;
            b.isReady || c || d();
        }
        function d() {
            b.isReady = !0;
            for (var a = 0, c = g.length; c > a; a++) {
                var d = g[a];
                d();
            }
        }
        function e(e) {
            return ("complete" === f.readyState
                ? d()
                : (e.bind(f, "DOMContentLoaded", c),
                    e.bind(f, "readystatechange", c),
                    e.bind(a, "load", c)),
                b);
        }
        var f = a.document, g = [];
        (b.isReady = !1),
            "function" == typeof define && define.amd
                ? define("doc-ready/doc-ready", ["eventie/eventie"], e)
                : "object" == typeof exports
                    ? (module.exports = e(require("eventie")))
                    : (a.docReady = e(a.eventie));
    })(window),
    (function (a) {
        "use strict";
        function b(a, b) {
            return a[g](b);
        }
        function c(a) {
            if (!a.parentNode) {
                var b = document.createDocumentFragment();
                b.appendChild(a);
            }
        }
        function d(a, b) {
            c(a);
            for (var d = a.parentNode.querySelectorAll(b), e = 0, f = d.length; f > e; e++)
                if (d[e] === a)
                    return !0;
            return !1;
        }
        function e(a, d) {
            return c(a), b(a, d);
        }
        var f, g = (function () {
            if (a.matches)
                return "matches";
            if (a.matchesSelector)
                return "matchesSelector";
            for (var b = ["webkit", "moz", "ms", "o"], c = 0, d = b.length; d > c; c++) {
                var e = b[c], f = e + "MatchesSelector";
                if (a[f])
                    return f;
            }
        })();
        if (g) {
            var h = document.createElement("div"), i = b(h, "div");
            f = i ? b : e;
        }
        else
            f = d;
        "function" == typeof define && define.amd
            ? define("matches-selector/matches-selector", [], function () {
                return f;
            })
            : "object" == typeof exports
                ? (module.exports = f)
                : (window.matchesSelector = f);
    })(Element.prototype),
    (function (a, b) {
        "use strict";
        "function" == typeof define && define.amd
            ? define("fizzy-ui-utils/utils", [
                "doc-ready/doc-ready",
                "matches-selector/matches-selector"
            ], function (c, d) {
                return b(a, c, d);
            })
            : "object" == typeof exports
                ? (module.exports = b(a, require("doc-ready"), require("desandro-matches-selector")))
                : (a.fizzyUIUtils = b(a, a.docReady, a.matchesSelector));
    })(window, function (a, b, c) {
        var d = {};
        (d.extend = function (a, b) {
            for (var c in b)
                a[c] = b[c];
            return a;
        }),
            (d.modulo = function (a, b) {
                return ((a % b) + b) % b;
            });
        var e = Object.prototype.toString;
        (d.isArray = function (a) {
            return "[object Array]" == e.call(a);
        }),
            (d.makeArray = function (a) {
                var b = [];
                if (d.isArray(a))
                    b = a;
                else if (a && "number" == typeof a.length)
                    for (var c = 0, e = a.length; e > c; c++)
                        b.push(a[c]);
                else
                    b.push(a);
                return b;
            }),
            (d.indexOf = Array.prototype.indexOf
                ? function (a, b) {
                    return a.indexOf(b);
                }
                : function (a, b) {
                    for (var c = 0, d = a.length; d > c; c++)
                        if (a[c] === b)
                            return c;
                    return -1;
                }),
            (d.removeFrom = function (a, b) {
                var c = d.indexOf(a, b);
                -1 != c && a.splice(c, 1);
            }),
            (d.isElement =
                "function" == typeof HTMLElement || "object" == typeof HTMLElement
                    ? function (a) {
                        return a instanceof HTMLElement;
                    }
                    : function (a) {
                        return (a &&
                            "object" == typeof a &&
                            1 == a.nodeType &&
                            "string" == typeof a.nodeName);
                    }),
            (d.setText = (function () {
                function a(a, c) {
                    (b =
                        b ||
                            (void 0 !== document.documentElement.textContent
                                ? "textContent"
                                : "innerText")),
                        (a[b] = c);
                }
                var b;
                return a;
            })()),
            (d.getParent = function (a, b) {
                for (; a != document.body;)
                    if (((a = a.parentNode), c(a, b)))
                        return a;
            }),
            (d.getQueryElement = function (a) {
                return "string" == typeof a ? document.querySelector(a) : a;
            }),
            (d.handleEvent = function (a) {
                var b = "on" + a.type;
                this[b] && this[b](a);
            }),
            (d.filterFindElements = function (a, b) {
                a = d.makeArray(a);
                for (var e = [], f = 0, g = a.length; g > f; f++) {
                    var h = a[f];
                    if (d.isElement(h))
                        if (b) {
                            c(h, b) && e.push(h);
                            for (var i = h.querySelectorAll(b), j = 0, k = i.length; k > j; j++)
                                e.push(i[j]);
                        }
                        else
                            e.push(h);
                }
                return e;
            }),
            (d.debounceMethod = function (a, b, c) {
                var d = a.prototype[b], e = b + "Timeout";
                a.prototype[b] = function () {
                    var a = this[e];
                    a && clearTimeout(a);
                    var b = arguments, f = this;
                    this[e] = setTimeout(function () {
                        d.apply(f, b), delete f[e];
                    }, c || 100);
                };
            }),
            (d.toDashed = function (a) {
                return a
                    .replace(/(.)([A-Z])/g, function (a, b, c) {
                    return b + "-" + c;
                })
                    .toLowerCase();
            });
        var f = a.console;
        return ((d.htmlInit = function (c, e) {
            b(function () {
                for (var b = d.toDashed(e), g = document.querySelectorAll(".js-" + b), h = "data-" + b + "-options", i = 0, j = g.length; j > i; i++) {
                    var k, l = g[i], m = l.getAttribute(h);
                    try {
                        k = m && JSON.parse(m);
                    }
                    catch (n) {
                        f &&
                            f.error("Error parsing " +
                                h +
                                " on " +
                                l.nodeName.toLowerCase() +
                                (l.id ? "#" + l.id : "") +
                                ": " +
                                n);
                        continue;
                    }
                    var o = new c(l, k), p = a.jQuery;
                    p && p.data(l, e, o);
                }
            });
        }),
            d);
    }),
    (function (a, b) {
        "use strict";
        "function" == typeof define && define.amd
            ? define("outlayer/item", [
                "eventEmitter/EventEmitter",
                "get-size/get-size",
                "get-style-property/get-style-property",
                "fizzy-ui-utils/utils"
            ], function (c, d, e, f) {
                return b(a, c, d, e, f);
            })
            : "object" == typeof exports
                ? (module.exports = b(a, require("wolfy87-eventemitter"), require("get-size"), require("desandro-get-style-property"), require("fizzy-ui-utils")))
                : ((a.Outlayer = {}),
                    (a.Outlayer.Item = b(a, a.EventEmitter, a.getSize, a.getStyleProperty, a.fizzyUIUtils)));
    })(window, function (a, b, c, d, e) {
        "use strict";
        function f(a) {
            for (var b in a)
                return !1;
            return (b = null), !0;
        }
        function g(a, b) {
            a &&
                ((this.element = a),
                    (this.layout = b),
                    (this.position = { x: 0, y: 0 }),
                    this._create());
        }
        function h(a) {
            return a.replace(/([A-Z])/g, function (a) {
                return "-" + a.toLowerCase();
            });
        }
        var i = a.getComputedStyle, j = i
            ? function (a) {
                return i(a, null);
            }
            : function (a) {
                return a.currentStyle;
            }, k = d("transition"), l = d("transform"), m = k && l, n = !!d("perspective"), o = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "otransitionend",
            transition: "transitionend"
        }[k], p = [
            "transform",
            "transition",
            "transitionDuration",
            "transitionProperty"
        ], q = (function () {
            for (var a = {}, b = 0, c = p.length; c > b; b++) {
                var e = p[b], f = d(e);
                f && f !== e && (a[e] = f);
            }
            return a;
        })();
        e.extend(g.prototype, b.prototype),
            (g.prototype._create = function () {
                (this._transn = { ingProperties: {}, clean: {}, onEnd: {} }),
                    this.css({ position: "absolute" });
            }),
            (g.prototype.handleEvent = function (a) {
                var b = "on" + a.type;
                this[b] && this[b](a);
            }),
            (g.prototype.getSize = function () {
                this.size = c(this.element);
            }),
            (g.prototype.css = function (a) {
                var b = this.element.style;
                for (var c in a) {
                    var d = q[c] || c;
                    b[d] = a[c];
                }
            }),
            (g.prototype.getPosition = function () {
                var a = j(this.element), b = this.layout.options, c = b.isOriginLeft, d = b.isOriginTop, e = a[c ? "left" : "right"], f = a[d ? "top" : "bottom"], g = this.layout.size, h = -1 != e.indexOf("%")
                    ? (parseFloat(e) / 100) * g.width
                    : parseInt(e, 10), i = -1 != f.indexOf("%")
                    ? (parseFloat(f) / 100) * g.height
                    : parseInt(f, 10);
                (h = isNaN(h) ? 0 : h),
                    (i = isNaN(i) ? 0 : i),
                    (h -= c ? g.paddingLeft : g.paddingRight),
                    (i -= d ? g.paddingTop : g.paddingBottom),
                    (this.position.x = h),
                    (this.position.y = i);
            }),
            (g.prototype.layoutPosition = function () {
                var a = this.layout.size, b = this.layout.options, c = {}, d = b.isOriginLeft ? "paddingLeft" : "paddingRight", e = b.isOriginLeft ? "left" : "right", f = b.isOriginLeft ? "right" : "left", g = this.position.x + a[d];
                (c[e] = this.getXValue(g)), (c[f] = "");
                var h = b.isOriginTop ? "paddingTop" : "paddingBottom", i = b.isOriginTop ? "top" : "bottom", j = b.isOriginTop ? "bottom" : "top", k = this.position.y + a[h];
                (c[i] = this.getYValue(k)),
                    (c[j] = ""),
                    this.css(c),
                    this.emitEvent("layout", [this]);
            }),
            (g.prototype.getXValue = function (a) {
                var b = this.layout.options;
                return b.percentPosition && !b.isHorizontal
                    ? (a / this.layout.size.width) * 100 + "%"
                    : a + "px";
            }),
            (g.prototype.getYValue = function (a) {
                var b = this.layout.options;
                return b.percentPosition && b.isHorizontal
                    ? (a / this.layout.size.height) * 100 + "%"
                    : a + "px";
            }),
            (g.prototype._transitionTo = function (a, b) {
                this.getPosition();
                var c = this.position.x, d = this.position.y, e = parseInt(a, 10), f = parseInt(b, 10), g = e === this.position.x && f === this.position.y;
                if ((this.setPosition(a, b), g && !this.isTransitioning))
                    return void this.layoutPosition();
                var h = a - c, i = b - d, j = {};
                (j.transform = this.getTranslate(h, i)),
                    this.transition({
                        to: j,
                        onTransitionEnd: { transform: this.layoutPosition },
                        isCleaning: !0
                    });
            }),
            (g.prototype.getTranslate = function (a, b) {
                var c = this.layout.options;
                return ((a = c.isOriginLeft ? a : -a),
                    (b = c.isOriginTop ? b : -b),
                    n
                        ? "translate3d(" + a + "px, " + b + "px, 0)"
                        : "translate(" + a + "px, " + b + "px)");
            }),
            (g.prototype.goTo = function (a, b) {
                this.setPosition(a, b), this.layoutPosition();
            }),
            (g.prototype.moveTo = m ? g.prototype._transitionTo : g.prototype.goTo),
            (g.prototype.setPosition = function (a, b) {
                (this.position.x = parseInt(a, 10)),
                    (this.position.y = parseInt(b, 10));
            }),
            (g.prototype._nonTransition = function (a) {
                this.css(a.to), a.isCleaning && this._removeStyles(a.to);
                for (var b in a.onTransitionEnd)
                    a.onTransitionEnd[b].call(this);
            }),
            (g.prototype._transition = function (a) {
                if (!parseFloat(this.layout.options.transitionDuration))
                    return void this._nonTransition(a);
                var b = this._transn;
                for (var c in a.onTransitionEnd)
                    b.onEnd[c] = a.onTransitionEnd[c];
                for (c in a.to)
                    (b.ingProperties[c] = !0), a.isCleaning && (b.clean[c] = !0);
                if (a.from) {
                    this.css(a.from);
                    var d = this.element.offsetHeight;
                    d = null;
                }
                this.enableTransition(a.to),
                    this.css(a.to),
                    (this.isTransitioning = !0);
            });
        var r = "opacity," + h(q.transform || "transform");
        (g.prototype.enableTransition = function () {
            this.isTransitioning ||
                (this.css({
                    transitionProperty: r,
                    transitionDuration: this.layout.options.transitionDuration
                }),
                    this.element.addEventListener(o, this, !1));
        }),
            (g.prototype.transition =
                g.prototype[k ? "_transition" : "_nonTransition"]),
            (g.prototype.onwebkitTransitionEnd = function (a) {
                this.ontransitionend(a);
            }),
            (g.prototype.onotransitionend = function (a) {
                this.ontransitionend(a);
            });
        var s = {
            "-webkit-transform": "transform",
            "-moz-transform": "transform",
            "-o-transform": "transform"
        };
        (g.prototype.ontransitionend = function (a) {
            if (a.target === this.element) {
                var b = this._transn, c = s[a.propertyName] || a.propertyName;
                if ((delete b.ingProperties[c],
                    f(b.ingProperties) && this.disableTransition(),
                    c in b.clean &&
                        ((this.element.style[a.propertyName] = ""), delete b.clean[c]),
                    c in b.onEnd)) {
                    var d = b.onEnd[c];
                    d.call(this), delete b.onEnd[c];
                }
                this.emitEvent("transitionEnd", [this]);
            }
        }),
            (g.prototype.disableTransition = function () {
                this.removeTransitionStyles(),
                    this.element.removeEventListener(o, this, !1),
                    (this.isTransitioning = !1);
            }),
            (g.prototype._removeStyles = function (a) {
                var b = {};
                for (var c in a)
                    b[c] = "";
                this.css(b);
            });
        var t = { transitionProperty: "", transitionDuration: "" };
        return ((g.prototype.removeTransitionStyles = function () {
            this.css(t);
        }),
            (g.prototype.removeElem = function () {
                this.element.parentNode.removeChild(this.element),
                    this.css({ display: "" }),
                    this.emitEvent("remove", [this]);
            }),
            (g.prototype.remove = function () {
                if (!k || !parseFloat(this.layout.options.transitionDuration))
                    return void this.removeElem();
                var a = this;
                this.once("transitionEnd", function () {
                    a.removeElem();
                }),
                    this.hide();
            }),
            (g.prototype.reveal = function () {
                delete this.isHidden, this.css({ display: "" });
                var a = this.layout.options, b = {}, c = this.getHideRevealTransitionEndProperty("visibleStyle");
                (b[c] = this.onRevealTransitionEnd),
                    this.transition({
                        from: a.hiddenStyle,
                        to: a.visibleStyle,
                        isCleaning: !0,
                        onTransitionEnd: b
                    });
            }),
            (g.prototype.onRevealTransitionEnd = function () {
                this.isHidden || this.emitEvent("reveal");
            }),
            (g.prototype.getHideRevealTransitionEndProperty = function (a) {
                var b = this.layout.options[a];
                if (b.opacity)
                    return "opacity";
                for (var c in b)
                    return c;
            }),
            (g.prototype.hide = function () {
                (this.isHidden = !0), this.css({ display: "" });
                var a = this.layout.options, b = {}, c = this.getHideRevealTransitionEndProperty("hiddenStyle");
                (b[c] = this.onHideTransitionEnd),
                    this.transition({
                        from: a.visibleStyle,
                        to: a.hiddenStyle,
                        isCleaning: !0,
                        onTransitionEnd: b
                    });
            }),
            (g.prototype.onHideTransitionEnd = function () {
                this.isHidden &&
                    (this.css({ display: "none" }), this.emitEvent("hide"));
            }),
            (g.prototype.destroy = function () {
                this.css({
                    position: "",
                    left: "",
                    right: "",
                    top: "",
                    bottom: "",
                    transition: "",
                    transform: ""
                });
            }),
            g);
    }),
    (function (a, b) {
        "use strict";
        "function" == typeof define && define.amd
            ? define("outlayer/outlayer", [
                "eventie/eventie",
                "eventEmitter/EventEmitter",
                "get-size/get-size",
                "fizzy-ui-utils/utils",
                "./item"
            ], function (c, d, e, f, g) {
                return b(a, c, d, e, f, g);
            })
            : "object" == typeof exports
                ? (module.exports = b(a, require("eventie"), require("wolfy87-eventemitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")))
                : (a.Outlayer = b(a, a.eventie, a.EventEmitter, a.getSize, a.fizzyUIUtils, a.Outlayer.Item));
    })(window, function (a, b, c, d, e, f) {
        "use strict";
        function g(a, b) {
            var c = e.getQueryElement(a);
            if (!c)
                return void (h &&
                    h.error("Bad element for " + this.constructor.namespace + ": " + (c || a)));
            (this.element = c),
                i && (this.$element = i(this.element)),
                (this.options = e.extend({}, this.constructor.defaults)),
                this.option(b);
            var d = ++k;
            (this.element.outlayerGUID = d),
                (l[d] = this),
                this._create(),
                this.options.isInitLayout && this.layout();
        }
        var h = a.console, i = a.jQuery, j = function () { }, k = 0, l = {};
        return ((g.namespace = "outlayer"),
            (g.Item = f),
            (g.defaults = {
                containerStyle: { position: "relative" },
                isInitLayout: !0,
                isOriginLeft: !0,
                isOriginTop: !0,
                isResizeBound: !0,
                isResizingContainer: !0,
                transitionDuration: "0.4s",
                hiddenStyle: { opacity: 0, transform: "scale(0.001)" },
                visibleStyle: { opacity: 1, transform: "scale(1)" }
            }),
            e.extend(g.prototype, c.prototype),
            (g.prototype.option = function (a) {
                e.extend(this.options, a);
            }),
            (g.prototype._create = function () {
                this.reloadItems(),
                    (this.stamps = []),
                    this.stamp(this.options.stamp),
                    e.extend(this.element.style, this.options.containerStyle),
                    this.options.isResizeBound && this.bindResize();
            }),
            (g.prototype.reloadItems = function () {
                this.items = this._itemize(this.element.children);
            }),
            (g.prototype._itemize = function (a) {
                for (var b = this._filterFindItemElements(a), c = this.constructor.Item, d = [], e = 0, f = b.length; f > e; e++) {
                    var g = b[e], h = new c(g, this);
                    d.push(h);
                }
                return d;
            }),
            (g.prototype._filterFindItemElements = function (a) {
                return e.filterFindElements(a, this.options.itemSelector);
            }),
            (g.prototype.getItemElements = function () {
                for (var a = [], b = 0, c = this.items.length; c > b; b++)
                    a.push(this.items[b].element);
                return a;
            }),
            (g.prototype.layout = function () {
                this._resetLayout(), this._manageStamps();
                var a = void 0 !== this.options.isLayoutInstant
                    ? this.options.isLayoutInstant
                    : !this._isLayoutInited;
                this.layoutItems(this.items, a), (this._isLayoutInited = !0);
            }),
            (g.prototype._init = g.prototype.layout),
            (g.prototype._resetLayout = function () {
                this.getSize();
            }),
            (g.prototype.getSize = function () {
                this.size = d(this.element);
            }),
            (g.prototype._getMeasurement = function (a, b) {
                var c, f = this.options[a];
                f
                    ? ("string" == typeof f
                        ? (c = this.element.querySelector(f))
                        : e.isElement(f) && (c = f),
                        (this[a] = c ? d(c)[b] : f))
                    : (this[a] = 0);
            }),
            (g.prototype.layoutItems = function (a, b) {
                (a = this._getItemsForLayout(a)),
                    this._layoutItems(a, b),
                    this._postLayout();
            }),
            (g.prototype._getItemsForLayout = function (a) {
                for (var b = [], c = 0, d = a.length; d > c; c++) {
                    var e = a[c];
                    e.isIgnored || b.push(e);
                }
                return b;
            }),
            (g.prototype._layoutItems = function (a, b) {
                if ((this._emitCompleteOnItems("layout", a), a && a.length)) {
                    for (var c = [], d = 0, e = a.length; e > d; d++) {
                        var f = a[d], g = this._getItemLayoutPosition(f);
                        (g.item = f), (g.isInstant = b || f.isLayoutInstant), c.push(g);
                    }
                    this._processLayoutQueue(c);
                }
            }),
            (g.prototype._getItemLayoutPosition = function () {
                return { x: 0, y: 0 };
            }),
            (g.prototype._processLayoutQueue = function (a) {
                for (var b = 0, c = a.length; c > b; b++) {
                    var d = a[b];
                    this._positionItem(d.item, d.x, d.y, d.isInstant);
                }
            }),
            (g.prototype._positionItem = function (a, b, c, d) {
                d ? a.goTo(b, c) : a.moveTo(b, c);
            }),
            (g.prototype._postLayout = function () {
                this.resizeContainer();
            }),
            (g.prototype.resizeContainer = function () {
                if (this.options.isResizingContainer) {
                    var a = this._getContainerSize();
                    a &&
                        (this._setContainerMeasure(a.width, !0),
                            this._setContainerMeasure(a.height, !1));
                }
            }),
            (g.prototype._getContainerSize = j),
            (g.prototype._setContainerMeasure = function (a, b) {
                if (void 0 !== a) {
                    var c = this.size;
                    c.isBorderBox &&
                        (a += b
                            ? c.paddingLeft +
                                c.paddingRight +
                                c.borderLeftWidth +
                                c.borderRightWidth
                            : c.paddingBottom +
                                c.paddingTop +
                                c.borderTopWidth +
                                c.borderBottomWidth),
                        (a = Math.max(a, 0)),
                        (this.element.style[b ? "width" : "height"] = a + "px");
                }
            }),
            (g.prototype._emitCompleteOnItems = function (a, b) {
                function c() {
                    e.dispatchEvent(a + "Complete", null, [b]);
                }
                function d() {
                    g++, g === f && c();
                }
                var e = this, f = b.length;
                if (!b || !f)
                    return void c();
                for (var g = 0, h = 0, i = b.length; i > h; h++) {
                    var j = b[h];
                    j.once(a, d);
                }
            }),
            (g.prototype.dispatchEvent = function (a, b, c) {
                var d = b ? [b].concat(c) : c;
                if ((this.emitEvent(a, d), i))
                    if (((this.$element = this.$element || i(this.element)), b)) {
                        var e = i.Event(b);
                        (e.type = a), this.$element.trigger(e, c);
                    }
                    else
                        this.$element.trigger(a, c);
            }),
            (g.prototype.ignore = function (a) {
                var b = this.getItem(a);
                b && (b.isIgnored = !0);
            }),
            (g.prototype.unignore = function (a) {
                var b = this.getItem(a);
                b && delete b.isIgnored;
            }),
            (g.prototype.stamp = function (a) {
                if ((a = this._find(a))) {
                    this.stamps = this.stamps.concat(a);
                    for (var b = 0, c = a.length; c > b; b++) {
                        var d = a[b];
                        this.ignore(d);
                    }
                }
            }),
            (g.prototype.unstamp = function (a) {
                if ((a = this._find(a)))
                    for (var b = 0, c = a.length; c > b; b++) {
                        var d = a[b];
                        e.removeFrom(this.stamps, d), this.unignore(d);
                    }
            }),
            (g.prototype._find = function (a) {
                return a
                    ? ("string" == typeof a && (a = this.element.querySelectorAll(a)),
                        (a = e.makeArray(a)))
                    : void 0;
            }),
            (g.prototype._manageStamps = function () {
                if (this.stamps && this.stamps.length) {
                    this._getBoundingRect();
                    for (var a = 0, b = this.stamps.length; b > a; a++) {
                        var c = this.stamps[a];
                        this._manageStamp(c);
                    }
                }
            }),
            (g.prototype._getBoundingRect = function () {
                var a = this.element.getBoundingClientRect(), b = this.size;
                this._boundingRect = {
                    left: a.left + b.paddingLeft + b.borderLeftWidth,
                    top: a.top + b.paddingTop + b.borderTopWidth,
                    right: a.right - (b.paddingRight + b.borderRightWidth),
                    bottom: a.bottom - (b.paddingBottom + b.borderBottomWidth)
                };
            }),
            (g.prototype._manageStamp = j),
            (g.prototype._getElementOffset = function (a) {
                var b = a.getBoundingClientRect(), c = this._boundingRect, e = d(a), f = {
                    left: b.left - c.left - e.marginLeft,
                    top: b.top - c.top - e.marginTop,
                    right: c.right - b.right - e.marginRight,
                    bottom: c.bottom - b.bottom - e.marginBottom
                };
                return f;
            }),
            (g.prototype.handleEvent = function (a) {
                var b = "on" + a.type;
                this[b] && this[b](a);
            }),
            (g.prototype.bindResize = function () {
                this.isResizeBound ||
                    (b.bind(a, "resize", this), (this.isResizeBound = !0));
            }),
            (g.prototype.unbindResize = function () {
                this.isResizeBound && b.unbind(a, "resize", this),
                    (this.isResizeBound = !1);
            }),
            (g.prototype.onresize = function () {
                function a() {
                    b.resize(), delete b.resizeTimeout;
                }
                this.resizeTimeout && clearTimeout(this.resizeTimeout);
                var b = this;
                this.resizeTimeout = setTimeout(a, 100);
            }),
            (g.prototype.resize = function () {
                this.isResizeBound && this.needsResizeLayout() && this.layout();
            }),
            (g.prototype.needsResizeLayout = function () {
                var a = d(this.element), b = this.size && a;
                return b && a.innerWidth !== this.size.innerWidth;
            }),
            (g.prototype.addItems = function (a) {
                var b = this._itemize(a);
                return b.length && (this.items = this.items.concat(b)), b;
            }),
            (g.prototype.appended = function (a) {
                var b = this.addItems(a);
                b.length && (this.layoutItems(b, !0), this.reveal(b));
            }),
            (g.prototype.prepended = function (a) {
                var b = this._itemize(a);
                if (b.length) {
                    var c = this.items.slice(0);
                    (this.items = b.concat(c)),
                        this._resetLayout(),
                        this._manageStamps(),
                        this.layoutItems(b, !0),
                        this.reveal(b),
                        this.layoutItems(c);
                }
            }),
            (g.prototype.reveal = function (a) {
                this._emitCompleteOnItems("reveal", a);
                for (var b = a && a.length, c = 0; b && b > c; c++) {
                    var d = a[c];
                    d.reveal();
                }
            }),
            (g.prototype.hide = function (a) {
                this._emitCompleteOnItems("hide", a);
                for (var b = a && a.length, c = 0; b && b > c; c++) {
                    var d = a[c];
                    d.hide();
                }
            }),
            (g.prototype.revealItemElements = function (a) {
                var b = this.getItems(a);
                this.reveal(b);
            }),
            (g.prototype.hideItemElements = function (a) {
                var b = this.getItems(a);
                this.hide(b);
            }),
            (g.prototype.getItem = function (a) {
                for (var b = 0, c = this.items.length; c > b; b++) {
                    var d = this.items[b];
                    if (d.element === a)
                        return d;
                }
            }),
            (g.prototype.getItems = function (a) {
                a = e.makeArray(a);
                for (var b = [], c = 0, d = a.length; d > c; c++) {
                    var f = a[c], g = this.getItem(f);
                    g && b.push(g);
                }
                return b;
            }),
            (g.prototype.remove = function (a) {
                var b = this.getItems(a);
                if ((this._emitCompleteOnItems("remove", b), b && b.length))
                    for (var c = 0, d = b.length; d > c; c++) {
                        var f = b[c];
                        f.remove(), e.removeFrom(this.items, f);
                    }
            }),
            (g.prototype.destroy = function () {
                var a = this.element.style;
                (a.height = ""), (a.position = ""), (a.width = "");
                for (var b = 0, c = this.items.length; c > b; b++) {
                    var d = this.items[b];
                    d.destroy();
                }
                this.unbindResize();
                var e = this.element.outlayerGUID;
                delete l[e],
                    delete this.element.outlayerGUID,
                    i && i.removeData(this.element, this.constructor.namespace);
            }),
            (g.data = function (a) {
                a = e.getQueryElement(a);
                var b = a && a.outlayerGUID;
                return b && l[b];
            }),
            (g.create = function (a, b) {
                function c() {
                    g.apply(this, arguments);
                }
                return (Object.create
                    ? (c.prototype = Object.create(g.prototype))
                    : e.extend(c.prototype, g.prototype),
                    (c.prototype.constructor = c),
                    (c.defaults = e.extend({}, g.defaults)),
                    e.extend(c.defaults, b),
                    (c.prototype.settings = {}),
                    (c.namespace = a),
                    (c.data = g.data),
                    (c.Item = function () {
                        f.apply(this, arguments);
                    }),
                    (c.Item.prototype = new f()),
                    e.htmlInit(c, a),
                    i && i.bridget && i.bridget(a, c),
                    c);
            }),
            (g.Item = f),
            g);
    }),
    (function (a, b) {
        "use strict";
        "function" == typeof define && define.amd
            ? define("isotope/js/item", ["outlayer/outlayer"], b)
            : "object" == typeof exports
                ? (module.exports = b(require("outlayer")))
                : ((a.Isotope = a.Isotope || {}), (a.Isotope.Item = b(a.Outlayer)));
    })(window, function (a) {
        "use strict";
        function b() {
            a.Item.apply(this, arguments);
        }
        (b.prototype = new a.Item()),
            (b.prototype._create = function () {
                (this.id = this.layout.itemGUID++),
                    a.Item.prototype._create.call(this),
                    (this.sortData = {});
            }),
            (b.prototype.updateSortData = function () {
                if (!this.isIgnored) {
                    (this.sortData.id = this.id),
                        (this.sortData["original-order"] = this.id),
                        (this.sortData.random = Math.random());
                    var a = this.layout.options.getSortData, b = this.layout._sorters;
                    for (var c in a) {
                        var d = b[c];
                        this.sortData[c] = d(this.element, this);
                    }
                }
            });
        var c = b.prototype.destroy;
        return ((b.prototype.destroy = function () {
            c.apply(this, arguments), this.css({ display: "" });
        }),
            b);
    }),
    (function (a, b) {
        "use strict";
        "function" == typeof define && define.amd
            ? define("isotope/js/layout-mode", [
                "get-size/get-size",
                "outlayer/outlayer"
            ], b)
            : "object" == typeof exports
                ? (module.exports = b(require("get-size"), require("outlayer")))
                : ((a.Isotope = a.Isotope || {}),
                    (a.Isotope.LayoutMode = b(a.getSize, a.Outlayer)));
    })(window, function (a, b) {
        "use strict";
        function c(a) {
            (this.isotope = a),
                a &&
                    ((this.options = a.options[this.namespace]),
                        (this.element = a.element),
                        (this.items = a.filteredItems),
                        (this.size = a.size));
        }
        return ((function () {
            function a(a) {
                return function () {
                    return b.prototype[a].apply(this.isotope, arguments);
                };
            }
            for (var d = [
                "_resetLayout",
                "_getItemLayoutPosition",
                "_manageStamp",
                "_getContainerSize",
                "_getElementOffset",
                "needsResizeLayout"
            ], e = 0, f = d.length; f > e; e++) {
                var g = d[e];
                c.prototype[g] = a(g);
            }
        })(),
            (c.prototype.needsVerticalResizeLayout = function () {
                var b = a(this.isotope.element), c = this.isotope.size && b;
                return c && b.innerHeight != this.isotope.size.innerHeight;
            }),
            (c.prototype._getMeasurement = function () {
                this.isotope._getMeasurement.apply(this, arguments);
            }),
            (c.prototype.getColumnWidth = function () {
                this.getSegmentSize("column", "Width");
            }),
            (c.prototype.getRowHeight = function () {
                this.getSegmentSize("row", "Height");
            }),
            (c.prototype.getSegmentSize = function (a, b) {
                var c = a + b, d = "outer" + b;
                if ((this._getMeasurement(c, d), !this[c])) {
                    var e = this.getFirstItemSize();
                    this[c] = (e && e[d]) || this.isotope.size["inner" + b];
                }
            }),
            (c.prototype.getFirstItemSize = function () {
                var b = this.isotope.filteredItems[0];
                return b && b.element && a(b.element);
            }),
            (c.prototype.layout = function () {
                this.isotope.layout.apply(this.isotope, arguments);
            }),
            (c.prototype.getSize = function () {
                this.isotope.getSize(), (this.size = this.isotope.size);
            }),
            (c.modes = {}),
            (c.create = function (a, b) {
                function d() {
                    c.apply(this, arguments);
                }
                return ((d.prototype = new c()),
                    b && (d.options = b),
                    (d.prototype.namespace = a),
                    (c.modes[a] = d),
                    d);
            }),
            c);
    }),
    (function (a, b) {
        "use strict";
        "function" == typeof define && define.amd
            ? define("masonry/masonry", [
                "outlayer/outlayer",
                "get-size/get-size",
                "fizzy-ui-utils/utils"
            ], b)
            : "object" == typeof exports
                ? (module.exports = b(require("outlayer"), require("get-size"), require("fizzy-ui-utils")))
                : (a.Masonry = b(a.Outlayer, a.getSize, a.fizzyUIUtils));
    })(window, function (a, b, c) {
        var d = a.create("masonry");
        return ((d.prototype._resetLayout = function () {
            this.getSize(),
                this._getMeasurement("columnWidth", "outerWidth"),
                this._getMeasurement("gutter", "outerWidth"),
                this.measureColumns();
            var a = this.cols;
            for (this.colYs = []; a--;)
                this.colYs.push(0);
            this.maxY = 0;
        }),
            (d.prototype.measureColumns = function () {
                if ((this.getContainerWidth(), !this.columnWidth)) {
                    var a = this.items[0], c = a && a.element;
                    this.columnWidth = (c && b(c).outerWidth) || this.containerWidth;
                }
                var d = (this.columnWidth += this.gutter), e = this.containerWidth + this.gutter, f = e / d, g = d - (e % d), h = g && 1 > g ? "round" : "floor";
                (f = Math[h](f)), (this.cols = Math.max(f, 1));
            }),
            (d.prototype.getContainerWidth = function () {
                var a = this.options.isFitWidth
                    ? this.element.parentNode
                    : this.element, c = b(a);
                this.containerWidth = c && c.innerWidth;
            }),
            (d.prototype._getItemLayoutPosition = function (a) {
                a.getSize();
                var b = a.size.outerWidth % this.columnWidth, d = b && 1 > b ? "round" : "ceil", e = Math[d](a.size.outerWidth / this.columnWidth);
                e = Math.min(e, this.cols);
                for (var f = this._getColGroup(e), g = Math.min.apply(Math, f), h = c.indexOf(f, g), i = { x: this.columnWidth * h, y: g }, j = g + a.size.outerHeight, k = this.cols + 1 - f.length, l = 0; k > l; l++)
                    this.colYs[h + l] = j;
                return i;
            }),
            (d.prototype._getColGroup = function (a) {
                if (2 > a)
                    return this.colYs;
                for (var b = [], c = this.cols + 1 - a, d = 0; c > d; d++) {
                    var e = this.colYs.slice(d, d + a);
                    b[d] = Math.max.apply(Math, e);
                }
                return b;
            }),
            (d.prototype._manageStamp = function (a) {
                var c = b(a), d = this._getElementOffset(a), e = this.options.isOriginLeft ? d.left : d.right, f = e + c.outerWidth, g = Math.floor(e / this.columnWidth);
                g = Math.max(0, g);
                var h = Math.floor(f / this.columnWidth);
                (h -= f % this.columnWidth ? 0 : 1), (h = Math.min(this.cols - 1, h));
                for (var i = (this.options.isOriginTop ? d.top : d.bottom) + c.outerHeight, j = g; h >= j; j++)
                    this.colYs[j] = Math.max(i, this.colYs[j]);
            }),
            (d.prototype._getContainerSize = function () {
                this.maxY = Math.max.apply(Math, this.colYs);
                var a = { height: this.maxY };
                return (this.options.isFitWidth && (a.width = this._getContainerFitWidth()), a);
            }),
            (d.prototype._getContainerFitWidth = function () {
                for (var a = 0, b = this.cols; --b && 0 === this.colYs[b];)
                    a++;
                return (this.cols - a) * this.columnWidth - this.gutter;
            }),
            (d.prototype.needsResizeLayout = function () {
                var a = this.containerWidth;
                return this.getContainerWidth(), a !== this.containerWidth;
            }),
            d);
    }),
    (function (a, b) {
        "use strict";
        "function" == typeof define && define.amd
            ? define("isotope/js/layout-modes/masonry", [
                "../layout-mode",
                "masonry/masonry"
            ], b)
            : "object" == typeof exports
                ? (module.exports = b(require("../layout-mode"), require("masonry-layout")))
                : b(a.Isotope.LayoutMode, a.Masonry);
    })(window, function (a, b) {
        "use strict";
        function c(a, b) {
            for (var c in b)
                a[c] = b[c];
            return a;
        }
        var d = a.create("masonry"), e = d.prototype._getElementOffset, f = d.prototype.layout, g = d.prototype._getMeasurement;
        c(d.prototype, b.prototype),
            (d.prototype._getElementOffset = e),
            (d.prototype.layout = f),
            (d.prototype._getMeasurement = g);
        var h = d.prototype.measureColumns;
        d.prototype.measureColumns = function () {
            (this.items = this.isotope.filteredItems), h.call(this);
        };
        var i = d.prototype._manageStamp;
        return ((d.prototype._manageStamp = function () {
            (this.options.isOriginLeft = this.isotope.options.isOriginLeft),
                (this.options.isOriginTop = this.isotope.options.isOriginTop),
                i.apply(this, arguments);
        }),
            d);
    }),
    (function (a, b) {
        "use strict";
        "function" == typeof define && define.amd
            ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], b)
            : "object" == typeof exports
                ? (module.exports = b(require("../layout-mode")))
                : b(a.Isotope.LayoutMode);
    })(window, function (a) {
        "use strict";
        var b = a.create("fitRows");
        return ((b.prototype._resetLayout = function () {
            (this.x = 0),
                (this.y = 0),
                (this.maxY = 0),
                this._getMeasurement("gutter", "outerWidth");
        }),
            (b.prototype._getItemLayoutPosition = function (a) {
                a.getSize();
                var b = a.size.outerWidth + this.gutter, c = this.isotope.size.innerWidth + this.gutter;
                0 !== this.x && b + this.x > c && ((this.x = 0), (this.y = this.maxY));
                var d = { x: this.x, y: this.y };
                return ((this.maxY = Math.max(this.maxY, this.y + a.size.outerHeight)),
                    (this.x += b),
                    d);
            }),
            (b.prototype._getContainerSize = function () {
                return { height: this.maxY };
            }),
            b);
    }),
    (function (a, b) {
        "use strict";
        "function" == typeof define && define.amd
            ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], b)
            : "object" == typeof exports
                ? (module.exports = b(require("../layout-mode")))
                : b(a.Isotope.LayoutMode);
    })(window, function (a) {
        "use strict";
        var b = a.create("vertical", { horizontalAlignment: 0 });
        return ((b.prototype._resetLayout = function () {
            this.y = 0;
        }),
            (b.prototype._getItemLayoutPosition = function (a) {
                a.getSize();
                var b = (this.isotope.size.innerWidth - a.size.outerWidth) *
                    this.options.horizontalAlignment, c = this.y;
                return (this.y += a.size.outerHeight), { x: b, y: c };
            }),
            (b.prototype._getContainerSize = function () {
                return { height: this.y };
            }),
            b);
    }),
    (function (a, b) {
        "use strict";
        "function" == typeof define && define.amd
            ? define([
                "outlayer/outlayer",
                "get-size/get-size",
                "matches-selector/matches-selector",
                "fizzy-ui-utils/utils",
                "isotope/js/item",
                "isotope/js/layout-mode",
                "isotope/js/layout-modes/masonry",
                "isotope/js/layout-modes/fit-rows",
                "isotope/js/layout-modes/vertical"
            ], function (c, d, e, f, g, h) {
                return b(a, c, d, e, f, g, h);
            })
            : "object" == typeof exports
                ? (module.exports = b(a, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("./item"), require("./layout-mode"), require("./layout-modes/masonry"), require("./layout-modes/fit-rows"), require("./layout-modes/vertical")))
                : (a.Isotope = b(a, a.Outlayer, a.getSize, a.matchesSelector, a.fizzyUIUtils, a.Isotope.Item, a.Isotope.LayoutMode));
    })(window, function (a, b, c, d, e, f, g) {
        function h(a, b) {
            return function (c, d) {
                for (var e = 0, f = a.length; f > e; e++) {
                    var g = a[e], h = c.sortData[g], i = d.sortData[g];
                    if (h > i || i > h) {
                        var j = void 0 !== b[g] ? b[g] : b, k = j ? 1 : -1;
                        return (h > i ? 1 : -1) * k;
                    }
                }
                return 0;
            };
        }
        var i = a.jQuery, j = String.prototype.trim
            ? function (a) {
                return a.trim();
            }
            : function (a) {
                return a.replace(/^\s+|\s+$/g, "");
            }, k = document.documentElement, l = k.textContent
            ? function (a) {
                return a.textContent;
            }
            : function (a) {
                return a.innerText;
            }, m = b.create("isotope", {
            layoutMode: "masonry",
            isJQueryFiltering: !0,
            sortAscending: !0
        });
        (m.Item = f),
            (m.LayoutMode = g),
            (m.prototype._create = function () {
                (this.itemGUID = 0),
                    (this._sorters = {}),
                    this._getSorters(),
                    b.prototype._create.call(this),
                    (this.modes = {}),
                    (this.filteredItems = this.items),
                    (this.sortHistory = ["original-order"]);
                for (var a in g.modes)
                    this._initLayoutMode(a);
            }),
            (m.prototype.reloadItems = function () {
                (this.itemGUID = 0), b.prototype.reloadItems.call(this);
            }),
            (m.prototype._itemize = function () {
                for (var a = b.prototype._itemize.apply(this, arguments), c = 0, d = a.length; d > c; c++) {
                    var e = a[c];
                    e.id = this.itemGUID++;
                }
                return this._updateItemsSortData(a), a;
            }),
            (m.prototype._initLayoutMode = function (a) {
                var b = g.modes[a], c = this.options[a] || {};
                (this.options[a] = b.options ? e.extend(b.options, c) : c),
                    (this.modes[a] = new b(this));
            }),
            (m.prototype.layout = function () {
                return !this._isLayoutInited && this.options.isInitLayout
                    ? void this.arrange()
                    : void this._layout();
            }),
            (m.prototype._layout = function () {
                var a = this._getIsInstant();
                this._resetLayout(),
                    this._manageStamps(),
                    this.layoutItems(this.filteredItems, a),
                    (this._isLayoutInited = !0);
            }),
            (m.prototype.arrange = function (a) {
                function b() {
                    d.reveal(c.needReveal), d.hide(c.needHide);
                }
                this.option(a), this._getIsInstant();
                var c = this._filter(this.items);
                this.filteredItems = c.matches;
                var d = this;
                this._bindArrangeComplete(),
                    this._isInstant ? this._noTransition(b) : b(),
                    this._sort(),
                    this._layout();
            }),
            (m.prototype._init = m.prototype.arrange),
            (m.prototype._getIsInstant = function () {
                var a = void 0 !== this.options.isLayoutInstant
                    ? this.options.isLayoutInstant
                    : !this._isLayoutInited;
                return (this._isInstant = a), a;
            }),
            (m.prototype._bindArrangeComplete = function () {
                function a() {
                    b &&
                        c &&
                        d &&
                        e.dispatchEvent("arrangeComplete", null, [e.filteredItems]);
                }
                var b, c, d, e = this;
                this.once("layoutComplete", function () {
                    (b = !0), a();
                }),
                    this.once("hideComplete", function () {
                        (c = !0), a();
                    }),
                    this.once("revealComplete", function () {
                        (d = !0), a();
                    });
            }),
            (m.prototype._filter = function (a) {
                var b = this.options.filter;
                b = b || "*";
                for (var c = [], d = [], e = [], f = this._getFilterTest(b), g = 0, h = a.length; h > g; g++) {
                    var i = a[g];
                    if (!i.isIgnored) {
                        var j = f(i);
                        j && c.push(i),
                            j && i.isHidden ? d.push(i) : j || i.isHidden || e.push(i);
                    }
                }
                return { matches: c, needReveal: d, needHide: e };
            }),
            (m.prototype._getFilterTest = function (a) {
                return i && this.options.isJQueryFiltering
                    ? function (b) {
                        return i(b.element).is(a);
                    }
                    : "function" == typeof a
                        ? function (b) {
                            return a(b.element);
                        }
                        : function (b) {
                            return d(b.element, a);
                        };
            }),
            (m.prototype.updateSortData = function (a) {
                var b;
                a ? ((a = e.makeArray(a)), (b = this.getItems(a))) : (b = this.items),
                    this._getSorters(),
                    this._updateItemsSortData(b);
            }),
            (m.prototype._getSorters = function () {
                var a = this.options.getSortData;
                for (var b in a) {
                    var c = a[b];
                    this._sorters[b] = n(c);
                }
            }),
            (m.prototype._updateItemsSortData = function (a) {
                for (var b = a && a.length, c = 0; b && b > c; c++) {
                    var d = a[c];
                    d.updateSortData();
                }
            });
        var n = (function () {
            function a(a) {
                if ("string" != typeof a)
                    return a;
                var c = j(a).split(" "), d = c[0], e = d.match(/^\[(.+)\]$/), f = e && e[1], g = b(f, d), h = m.sortDataParsers[c[1]];
                return (a = h
                    ? function (a) {
                        return a && h(g(a));
                    }
                    : function (a) {
                        return a && g(a);
                    });
            }
            function b(a, b) {
                var c;
                return (c = a
                    ? function (b) {
                        return b.getAttribute(a);
                    }
                    : function (a) {
                        var c = a.querySelector(b);
                        return c && l(c);
                    });
            }
            return a;
        })();
        (m.sortDataParsers = {
            parseInt: function (a) {
                return parseInt(a, 10);
            },
            parseFloat: function (a) {
                return parseFloat(a);
            }
        }),
            (m.prototype._sort = function () {
                var a = this.options.sortBy;
                if (a) {
                    var b = [].concat.apply(a, this.sortHistory), c = h(b, this.options.sortAscending);
                    this.filteredItems.sort(c),
                        a != this.sortHistory[0] && this.sortHistory.unshift(a);
                }
            }),
            (m.prototype._mode = function () {
                var a = this.options.layoutMode, b = this.modes[a];
                if (!b)
                    throw new Error("No layout mode: " + a);
                return (b.options = this.options[a]), b;
            }),
            (m.prototype._resetLayout = function () {
                b.prototype._resetLayout.call(this), this._mode()._resetLayout();
            }),
            (m.prototype._getItemLayoutPosition = function (a) {
                return this._mode()._getItemLayoutPosition(a);
            }),
            (m.prototype._manageStamp = function (a) {
                this._mode()._manageStamp(a);
            }),
            (m.prototype._getContainerSize = function () {
                return this._mode()._getContainerSize();
            }),
            (m.prototype.needsResizeLayout = function () {
                return this._mode().needsResizeLayout();
            }),
            (m.prototype.appended = function (a) {
                var b = this.addItems(a);
                if (b.length) {
                    var c = this._filterRevealAdded(b);
                    this.filteredItems = this.filteredItems.concat(c);
                }
            }),
            (m.prototype.prepended = function (a) {
                var b = this._itemize(a);
                if (b.length) {
                    this._resetLayout(), this._manageStamps();
                    var c = this._filterRevealAdded(b);
                    this.layoutItems(this.filteredItems),
                        (this.filteredItems = c.concat(this.filteredItems)),
                        (this.items = b.concat(this.items));
                }
            }),
            (m.prototype._filterRevealAdded = function (a) {
                var b = this._filter(a);
                return (this.hide(b.needHide),
                    this.reveal(b.matches),
                    this.layoutItems(b.matches, !0),
                    b.matches);
            }),
            (m.prototype.insert = function (a) {
                var b = this.addItems(a);
                if (b.length) {
                    var c, d, e = b.length;
                    for (c = 0; e > c; c++)
                        (d = b[c]), this.element.appendChild(d.element);
                    var f = this._filter(b).matches;
                    for (c = 0; e > c; c++)
                        b[c].isLayoutInstant = !0;
                    for (this.arrange(), c = 0; e > c; c++)
                        delete b[c].isLayoutInstant;
                    this.reveal(f);
                }
            });
        var o = m.prototype.remove;
        return ((m.prototype.remove = function (a) {
            a = e.makeArray(a);
            var b = this.getItems(a);
            o.call(this, a);
            var c = b && b.length;
            if (c)
                for (var d = 0; c > d; d++) {
                    var f = b[d];
                    e.removeFrom(this.filteredItems, f);
                }
        }),
            (m.prototype.shuffle = function () {
                for (var a = 0, b = this.items.length; b > a; a++) {
                    var c = this.items[a];
                    c.sortData.random = Math.random();
                }
                (this.options.sortBy = "random"), this._sort(), this._layout();
            }),
            (m.prototype._noTransition = function (a) {
                var b = this.options.transitionDuration;
                this.options.transitionDuration = 0;
                var c = a.call(this);
                return (this.options.transitionDuration = b), c;
            }),
            (m.prototype.getFilteredItemElements = function () {
                for (var a = [], b = 0, c = this.filteredItems.length; c > b; b++)
                    a.push(this.filteredItems[b].element);
                return a;
            }),
            m);
    });
!(function (a) {
    function h(b) {
        return a(b).filter(function () {
            return a(this).is(":appeared");
        });
    }
    function i() {
        d = !1;
        for (var a = 0, c = b.length; a < c; a++) {
            var e = h(b[a]);
            if ((e.trigger("appear", [e]), g[a])) {
                var f = g[a].not(e);
                f.trigger("disappear", [f]);
            }
            g[a] = e;
        }
    }
    function j(a) {
        b.push(a), g.push();
    }
    var b = [], c = !1, d = !1, e = { interval: 250, force_process: !1 }, f = a(window), g = [];
    (a.expr[":"].appeared = function (b) {
        var c = a(b);
        if (!c.is(":visible"))
            return !1;
        var d = f.scrollLeft(), e = f.scrollTop(), g = c.offset(), h = g.left, i = g.top;
        return (i + c.height() >= e &&
            i - (c.data("appear-top-offset") || 0) <= e + f.height() &&
            h + c.width() >= d &&
            h - (c.data("appear-left-offset") || 0) <= d + f.width());
    }),
        a.fn.extend({
            appear: function (b) {
                var f = a.extend({}, e, b || {}), g = this.selector || this;
                if (!c) {
                    var h = function () {
                        d || ((d = !0), setTimeout(i, f.interval));
                    };
                    a(window)
                        .scroll(h)
                        .resize(h),
                        (c = !0);
                }
                return f.force_process && setTimeout(i, f.interval), j(g), a(g);
            }
        }),
        a.extend({
            force_appear: function () {
                return !!c && (i(), !0);
            }
        });
})((function () {
    return "undefined" != typeof module ? require("jquery") : jQuery;
})());
/*
 * jQuery appear plugin
 *
 * Copyright (c) 2012 Andrey Sidorov
 * licensed under MIT license.
 *
 * https://github.com/morr/jquery.appear/
 *
 * Version: 0.3.6
 */
!(function (a) {
    function h(b) {
        return a(b).filter(function () {
            return a(this).is(":appeared");
        });
    }
    function i() {
        d = !1;
        for (var a = 0, c = b.length; a < c; a++) {
            var e = h(b[a]);
            if ((e.trigger("appear", [e]), g[a])) {
                var f = g[a].not(e);
                f.trigger("disappear", [f]);
            }
            g[a] = e;
        }
    }
    function j(a) {
        b.push(a), g.push();
    }
    var b = [], c = !1, d = !1, e = { interval: 250, force_process: !1 }, f = a(window), g = [];
    (a.expr[":"].appeared = function (b) {
        var c = a(b);
        if (!c.is(":visible"))
            return !1;
        var d = f.scrollLeft(), e = f.scrollTop(), g = c.offset(), h = g.left, i = g.top;
        return (i + c.height() >= e &&
            i - (c.data("appear-top-offset") || 0) <= e + f.height() &&
            h + c.width() >= d &&
            h - (c.data("appear-left-offset") || 0) <= d + f.width());
    }),
        a.fn.extend({
            appear: function (b) {
                var f = a.extend({}, e, b || {}), g = this.selector || this;
                if (!c) {
                    var h = function () {
                        d || ((d = !0), setTimeout(i, f.interval));
                    };
                    a(window)
                        .scroll(h)
                        .resize(h),
                        (c = !0);
                }
                return f.force_process && setTimeout(i, f.interval), j(g), a(g);
            }
        }),
        a.extend({
            force_appear: function () {
                return !!c && (i(), !0);
            }
        });
})((function () {
    return "undefined" != typeof module ? require("jquery") : jQuery;
})());
/*
 * ! fancyBox v2.1.5 fancyapps.com |
 *fancyapps.com/fancybox/#license
 */
(function (r, G, f, v) {
    var J = f("html"), n = f(r), p = f(G), b = (f.fancybox = function () {
        b.open.apply(this, arguments);
    }), I = navigator.userAgent.match(/msie/i), B = null, s = G.createTouch !== v, t = function (a) {
        return a && a.hasOwnProperty && a instanceof f;
    }, q = function (a) {
        return a && "string" === f.type(a);
    }, E = function (a) {
        return q(a) && 0 < a.indexOf("%");
    }, l = function (a, d) {
        var e = parseInt(a, 10) || 0;
        d && E(a) && (e *= b.getViewport()[d] / 100);
        return Math.ceil(e);
    }, w = function (a, b) {
        return l(a, b) + "px";
    };
    f.extend(b, {
        version: "2.1.5",
        defaults: {
            padding: 15,
            margin: 20,
            width: 800,
            height: 600,
            minWidth: 100,
            minHeight: 100,
            maxWidth: 9999,
            maxHeight: 9999,
            pixelRatio: 1,
            autoSize: !0,
            autoHeight: !1,
            autoWidth: !1,
            autoResize: !0,
            autoCenter: !s,
            fitToView: !0,
            aspectRatio: !1,
            topRatio: 0.5,
            leftRatio: 0.5,
            scrolling: "auto",
            wrapCSS: "",
            arrows: !0,
            closeBtn: !0,
            closeClick: !1,
            nextClick: !1,
            mouseWheel: !0,
            autoPlay: !1,
            playSpeed: 3e3,
            preload: 3,
            modal: !1,
            loop: !0,
            ajax: { dataType: "html", headers: { "X-fancyBox": !0 } },
            iframe: { scrolling: "auto", preload: !0 },
            swf: {
                wmode: "transparent",
                allowfullscreen: "true",
                allowscriptaccess: "always"
            },
            keys: {
                next: { 13: "left", 34: "up", 39: "left", 40: "up" },
                prev: { 8: "right", 33: "down", 37: "right", 38: "down" },
                close: [27],
                play: [32],
                toggle: [70]
            },
            direction: { next: "left", prev: "right" },
            scrollOutside: !0,
            index: 0,
            type: null,
            href: null,
            content: null,
            title: null,
            tpl: {
                wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
                image: '<img class="fancybox-image" src="{href}" alt="" />',
                iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' +
                    (I ? ' allowtransparency="true"' : "") +
                    "></iframe>",
                error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
                closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
                next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
                prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
            },
            openEffect: "fade",
            openSpeed: 250,
            openEasing: "swing",
            openOpacity: !0,
            openMethod: "zoomIn",
            closeEffect: "fade",
            closeSpeed: 250,
            closeEasing: "swing",
            closeOpacity: !0,
            closeMethod: "zoomOut",
            nextEffect: "elastic",
            nextSpeed: 250,
            nextEasing: "swing",
            nextMethod: "changeIn",
            prevEffect: "elastic",
            prevSpeed: 250,
            prevEasing: "swing",
            prevMethod: "changeOut",
            helpers: { overlay: !0, title: !0 },
            onCancel: f.noop,
            beforeLoad: f.noop,
            afterLoad: f.noop,
            beforeShow: f.noop,
            afterShow: f.noop,
            beforeChange: f.noop,
            beforeClose: f.noop,
            afterClose: f.noop
        },
        group: {},
        opts: {},
        previous: null,
        coming: null,
        current: null,
        isActive: !1,
        isOpen: !1,
        isOpened: !1,
        wrap: null,
        skin: null,
        outer: null,
        inner: null,
        player: { timer: null, isActive: !1 },
        ajaxLoad: null,
        imgPreload: null,
        transitions: {},
        helpers: {},
        open: function (a, d) {
            if (a && (f.isPlainObject(d) || (d = {}), !1 !== b.close(!0)))
                return (f.isArray(a) || (a = t(a) ? f(a).get() : [a]),
                    f.each(a, function (e, c) {
                        var k = {}, g, h, j, m, l;
                        "object" === f.type(c) &&
                            (c.nodeType && (c = f(c)),
                                t(c)
                                    ? ((k = {
                                        href: c.data("fancybox-href") || c.attr("href"),
                                        title: c.data("fancybox-title") || c.attr("title"),
                                        isDom: !0,
                                        element: c
                                    }),
                                        f.metadata && f.extend(!0, k, c.metadata()))
                                    : (k = c));
                        g = d.href || k.href || (q(c) ? c : null);
                        h = d.title !== v ? d.title : k.title || "";
                        m = (j = d.content || k.content) ? "html" : d.type || k.type;
                        !m &&
                            k.isDom &&
                            ((m = c.data("fancybox-type")),
                                m ||
                                    (m = (m = c.prop("class").match(/fancybox\.(\w+)/))
                                        ? m[1]
                                        : null));
                        q(g) &&
                            (m ||
                                (b.isImage(g)
                                    ? (m = "image")
                                    : b.isSWF(g)
                                        ? (m = "swf")
                                        : "#" === g.charAt(0)
                                            ? (m = "inline")
                                            : q(c) && ((m = "html"), (j = c))),
                                "ajax" === m &&
                                    ((l = g.split(/\s+/, 2)), (g = l.shift()), (l = l.shift())));
                        j ||
                            ("inline" === m
                                ? g
                                    ? (j = f(q(g) ? g.replace(/.*(?=#[^\s]+$)/, "") : g))
                                    : k.isDom && (j = c)
                                : "html" === m
                                    ? (j = g)
                                    : !m && (!g && k.isDom) && ((m = "inline"), (j = c)));
                        f.extend(k, {
                            href: g,
                            type: m,
                            content: j,
                            title: h,
                            selector: l
                        });
                        a[e] = k;
                    }),
                    (b.opts = f.extend(!0, {}, b.defaults, d)),
                    d.keys !== v &&
                        (b.opts.keys = d.keys ? f.extend({}, b.defaults.keys, d.keys) : !1),
                    (b.group = a),
                    b._start(b.opts.index));
        },
        cancel: function () {
            var a = b.coming;
            a &&
                !1 !== b.trigger("onCancel") &&
                (b.hideLoading(),
                    b.ajaxLoad && b.ajaxLoad.abort(),
                    (b.ajaxLoad = null),
                    b.imgPreload && (b.imgPreload.onload = b.imgPreload.onerror = null),
                    a.wrap &&
                        a.wrap
                            .stop(!0, !0)
                            .trigger("onReset")
                            .remove(),
                    (b.coming = null),
                    b.current || b._afterZoomOut(a));
        },
        close: function (a) {
            b.cancel();
            !1 !== b.trigger("beforeClose") &&
                (b.unbindEvents(),
                    b.isActive &&
                        (!b.isOpen || !0 === a
                            ? (f(".fancybox-wrap")
                                .stop(!0)
                                .trigger("onReset")
                                .remove(),
                                b._afterZoomOut())
                            : ((b.isOpen = b.isOpened = !1),
                                (b.isClosing = !0),
                                f(".fancybox-item, .fancybox-nav").remove(),
                                b.wrap.stop(!0, !0).removeClass("fancybox-opened"),
                                b.transitions[b.current.closeMethod]())));
        },
        play: function (a) {
            var d = function () {
                clearTimeout(b.player.timer);
            }, e = function () {
                d();
                b.current &&
                    b.player.isActive &&
                    (b.player.timer = setTimeout(b.next, b.current.playSpeed));
            }, c = function () {
                d();
                p.unbind(".player");
                b.player.isActive = !1;
                b.trigger("onPlayEnd");
            };
            if (!0 === a || (!b.player.isActive && !1 !== a)) {
                if (b.current &&
                    (b.current.loop || b.current.index < b.group.length - 1))
                    (b.player.isActive = !0),
                        p.bind({
                            "onCancel.player beforeClose.player": c,
                            "onUpdate.player": e,
                            "beforeLoad.player": d
                        }),
                        e(),
                        b.trigger("onPlayStart");
            }
            else
                c();
        },
        next: function (a) {
            var d = b.current;
            d && (q(a) || (a = d.direction.next), b.jumpto(d.index + 1, a, "next"));
        },
        prev: function (a) {
            var d = b.current;
            d && (q(a) || (a = d.direction.prev), b.jumpto(d.index - 1, a, "prev"));
        },
        jumpto: function (a, d, e) {
            var c = b.current;
            c &&
                ((a = l(a)),
                    (b.direction = d || c.direction[a >= c.index ? "next" : "prev"]),
                    (b.router = e || "jumpto"),
                    c.loop &&
                        (0 > a && (a = c.group.length + (a % c.group.length)),
                            (a %= c.group.length)),
                    c.group[a] !== v && (b.cancel(), b._start(a)));
        },
        reposition: function (a, d) {
            var e = b.current, c = e ? e.wrap : null, k;
            c &&
                ((k = b._getPosition(d)),
                    a && "scroll" === a.type
                        ? (delete k.position, c.stop(!0, !0).animate(k, 200))
                        : (c.css(k), (e.pos = f.extend({}, e.dim, k))));
        },
        update: function (a) {
            var d = a && a.type, e = !d || "orientationchange" === d;
            e && (clearTimeout(B), (B = null));
            b.isOpen &&
                !B &&
                (B = setTimeout(function () {
                    var c = b.current;
                    c &&
                        !b.isClosing &&
                        (b.wrap.removeClass("fancybox-tmp"),
                            (e || "load" === d || ("resize" === d && c.autoResize)) &&
                                b._setDimension(),
                            ("scroll" === d && c.canShrink) || b.reposition(a),
                            b.trigger("onUpdate"),
                            (B = null));
                }, e && !s ? 0 : 300));
        },
        toggle: function (a) {
            b.isOpen &&
                ((b.current.fitToView =
                    "boolean" === f.type(a) ? a : !b.current.fitToView),
                    s &&
                        (b.wrap.removeAttr("style").addClass("fancybox-tmp"),
                            b.trigger("onUpdate")),
                    b.update());
        },
        hideLoading: function () {
            p.unbind(".loading");
            f("#fancybox-loading").remove();
        },
        showLoading: function () {
            var a, d;
            b.hideLoading();
            a = f('<div id="fancybox-loading"><div></div></div>')
                .click(b.cancel)
                .appendTo("body");
            p.bind("keydown.loading", function (a) {
                if (27 === (a.which || a.keyCode))
                    a.preventDefault(), b.cancel();
            });
            b.defaults.fixed ||
                ((d = b.getViewport()),
                    a.css({
                        position: "absolute",
                        top: 0.5 * d.h + d.y,
                        left: 0.5 * d.w + d.x
                    }));
        },
        getViewport: function () {
            var a = (b.current && b.current.locked) || !1, d = { x: n.scrollLeft(), y: n.scrollTop() };
            a
                ? ((d.w = a[0].clientWidth), (d.h = a[0].clientHeight))
                : ((d.w = s && r.innerWidth ? r.innerWidth : n.width()),
                    (d.h = s && r.innerHeight ? r.innerHeight : n.height()));
            return d;
        },
        unbindEvents: function () {
            b.wrap && t(b.wrap) && b.wrap.unbind(".fb");
            p.unbind(".fb");
            n.unbind(".fb");
        },
        bindEvents: function () {
            var a = b.current, d;
            a &&
                (n.bind("orientationchange.fb" +
                    (s ? "" : " resize.fb") +
                    (a.autoCenter && !a.locked ? " scroll.fb" : ""), b.update),
                    (d = a.keys) &&
                        p.bind("keydown.fb", function (e) {
                            var c = e.which || e.keyCode, k = e.target || e.srcElement;
                            if (27 === c && b.coming)
                                return !1;
                            !e.ctrlKey &&
                                (!e.altKey &&
                                    !e.shiftKey &&
                                    !e.metaKey &&
                                    (!k || (!k.type && !f(k).is("[contenteditable]")))) &&
                                f.each(d, function (d, k) {
                                    if (1 < a.group.length && k[c] !== v)
                                        return b[d](k[c]), e.preventDefault(), !1;
                                    if (-1 < f.inArray(c, k))
                                        return b[d](), e.preventDefault(), !1;
                                });
                        }),
                    f.fn.mousewheel &&
                        a.mouseWheel &&
                        b.wrap.bind("mousewheel.fb", function (d, c, k, g) {
                            for (var h = f(d.target || null), j = !1; h.length &&
                                !j &&
                                !h.is(".fancybox-skin") &&
                                !h.is(".fancybox-wrap");)
                                (j =
                                    h[0] &&
                                        !(h[0].style.overflow && "hidden" === h[0].style.overflow) &&
                                        ((h[0].clientWidth && h[0].scrollWidth > h[0].clientWidth) ||
                                            (h[0].clientHeight &&
                                                h[0].scrollHeight > h[0].clientHeight))),
                                    (h = f(h).parent());
                            if (0 !== c && !j && 1 < b.group.length && !a.canShrink) {
                                if (0 < g || 0 < k)
                                    b.prev(0 < g ? "down" : "left");
                                else if (0 > g || 0 > k)
                                    b.next(0 > g ? "up" : "right");
                                d.preventDefault();
                            }
                        }));
        },
        trigger: function (a, d) {
            var e, c = d || b.coming || b.current;
            if (c) {
                f.isFunction(c[a]) &&
                    (e = c[a].apply(c, Array.prototype.slice.call(arguments, 1)));
                if (!1 === e)
                    return !1;
                c.helpers &&
                    f.each(c.helpers, function (d, e) {
                        if (e && b.helpers[d] && f.isFunction(b.helpers[d][a]))
                            b.helpers[d][a](f.extend(!0, {}, b.helpers[d].defaults, e), c);
                    });
                p.trigger(a);
            }
        },
        isImage: function (a) {
            return (q(a) &&
                a.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i));
        },
        isSWF: function (a) {
            return q(a) && a.match(/\.(swf)((\?|#).*)?$/i);
        },
        _start: function (a) {
            var d = {}, e, c;
            a = l(a);
            e = b.group[a] || null;
            if (!e)
                return !1;
            d = f.extend(!0, {}, b.opts, e);
            e = d.margin;
            c = d.padding;
            "number" === f.type(e) && (d.margin = [e, e, e, e]);
            "number" === f.type(c) && (d.padding = [c, c, c, c]);
            d.modal &&
                f.extend(!0, d, {
                    closeBtn: !1,
                    closeClick: !1,
                    nextClick: !1,
                    arrows: !1,
                    mouseWheel: !1,
                    keys: null,
                    helpers: { overlay: { closeClick: !1 } }
                });
            d.autoSize && (d.autoWidth = d.autoHeight = !0);
            "auto" === d.width && (d.autoWidth = !0);
            "auto" === d.height && (d.autoHeight = !0);
            d.group = b.group;
            d.index = a;
            b.coming = d;
            if (!1 === b.trigger("beforeLoad"))
                b.coming = null;
            else {
                c = d.type;
                e = d.href;
                if (!c)
                    return ((b.coming = null),
                        b.current && b.router && "jumpto" !== b.router
                            ? ((b.current.index = a), b[b.router](b.direction))
                            : !1);
                b.isActive = !0;
                if ("image" === c || "swf" === c)
                    (d.autoHeight = d.autoWidth = !1), (d.scrolling = "visible");
                "image" === c && (d.aspectRatio = !0);
                "iframe" === c && s && (d.scrolling = "scroll");
                d.wrap = f(d.tpl.wrap)
                    .addClass("fancybox-" +
                    (s ? "mobile" : "desktop") +
                    " fancybox-type-" +
                    c +
                    " fancybox-tmp " +
                    d.wrapCSS)
                    .appendTo(d.parent || "body");
                f.extend(d, {
                    skin: f(".fancybox-skin", d.wrap),
                    outer: f(".fancybox-outer", d.wrap),
                    inner: f(".fancybox-inner", d.wrap)
                });
                f.each(["Top", "Right", "Bottom", "Left"], function (a, b) {
                    d.skin.css("padding" + b, w(d.padding[a]));
                });
                b.trigger("onReady");
                if ("inline" === c || "html" === c) {
                    if (!d.content || !d.content.length)
                        return b._error("content");
                }
                else if (!e)
                    return b._error("href");
                "image" === c
                    ? b._loadImage()
                    : "ajax" === c
                        ? b._loadAjax()
                        : "iframe" === c
                            ? b._loadIframe()
                            : b._afterLoad();
            }
        },
        _error: function (a) {
            f.extend(b.coming, {
                type: "html",
                autoWidth: !0,
                autoHeight: !0,
                minWidth: 0,
                minHeight: 0,
                scrolling: "no",
                hasError: a,
                content: b.coming.tpl.error
            });
            b._afterLoad();
        },
        _loadImage: function () {
            var a = (b.imgPreload = new Image());
            a.onload = function () {
                this.onload = this.onerror = null;
                b.coming.width = this.width / b.opts.pixelRatio;
                b.coming.height = this.height / b.opts.pixelRatio;
                b._afterLoad();
            };
            a.onerror = function () {
                this.onload = this.onerror = null;
                b._error("image");
            };
            a.src = b.coming.href;
            !0 !== a.complete && b.showLoading();
        },
        _loadAjax: function () {
            var a = b.coming;
            b.showLoading();
            b.ajaxLoad = f.ajax(f.extend({}, a.ajax, {
                url: a.href,
                error: function (a, e) {
                    b.coming && "abort" !== e ? b._error("ajax", a) : b.hideLoading();
                },
                success: function (d, e) {
                    "success" === e && ((a.content = d), b._afterLoad());
                }
            }));
        },
        _loadIframe: function () {
            var a = b.coming, d = f(a.tpl.iframe.replace(/\{rnd\}/g, new Date().getTime()))
                .attr("scrolling", s ? "auto" : a.iframe.scrolling)
                .attr("src", a.href);
            f(a.wrap).bind("onReset", function () {
                try {
                    f(this)
                        .find("iframe")
                        .hide()
                        .attr("src", "//about:blank")
                        .end()
                        .empty();
                }
                catch (a) { }
            });
            a.iframe.preload &&
                (b.showLoading(),
                    d.one("load", function () {
                        f(this).data("ready", 1);
                        s || f(this).bind("load.fb", b.update);
                        f(this)
                            .parents(".fancybox-wrap")
                            .width("100%")
                            .removeClass("fancybox-tmp")
                            .show();
                        b._afterLoad();
                    }));
            a.content = d.appendTo(a.inner);
            a.iframe.preload || b._afterLoad();
        },
        _preloadImages: function () {
            var a = b.group, d = b.current, e = a.length, c = d.preload ? Math.min(d.preload, e - 1) : 0, f, g;
            for (g = 1; g <= c; g += 1)
                (f = a[(d.index + g) % e]),
                    "image" === f.type && f.href && (new Image().src = f.href);
        },
        _afterLoad: function () {
            var a = b.coming, d = b.current, e, c, k, g, h;
            b.hideLoading();
            if (a && !1 !== b.isActive)
                if (!1 === b.trigger("afterLoad", a, d))
                    a.wrap
                        .stop(!0)
                        .trigger("onReset")
                        .remove(),
                        (b.coming = null);
                else {
                    d &&
                        (b.trigger("beforeChange", d),
                            d.wrap
                                .stop(!0)
                                .removeClass("fancybox-opened")
                                .find(".fancybox-item, .fancybox-nav")
                                .remove());
                    b.unbindEvents();
                    e = a.content;
                    c = a.type;
                    k = a.scrolling;
                    f.extend(b, {
                        wrap: a.wrap,
                        skin: a.skin,
                        outer: a.outer,
                        inner: a.inner,
                        current: a,
                        previous: d
                    });
                    g = a.href;
                    switch (c) {
                        case "inline":
                        case "ajax":
                        case "html":
                            a.selector
                                ? (e = f("<div>")
                                    .html(e)
                                    .find(a.selector))
                                : t(e) &&
                                    (e.data("fancybox-placeholder") ||
                                        e.data("fancybox-placeholder", f('<div class="fancybox-placeholder"></div>')
                                            .insertAfter(e)
                                            .hide()),
                                        (e = e.show().detach()),
                                        a.wrap.bind("onReset", function () {
                                            f(this).find(e).length &&
                                                e
                                                    .hide()
                                                    .replaceAll(e.data("fancybox-placeholder"))
                                                    .data("fancybox-placeholder", !1);
                                        }));
                            break;
                        case "image":
                            e = a.tpl.image.replace("{href}", g);
                            break;
                        case "swf":
                            (e =
                                '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' +
                                    g +
                                    '"></param>'),
                                (h = ""),
                                f.each(a.swf, function (a, b) {
                                    e += '<param name="' + a + '" value="' + b + '"></param>';
                                    h += " " + a + '="' + b + '"';
                                }),
                                (e +=
                                    '<embed src="' +
                                        g +
                                        '" type="application/x-shockwave-flash" width="100%" height="100%"' +
                                        h +
                                        "></embed></object>");
                    }
                    (!t(e) || !e.parent().is(a.inner)) && a.inner.append(e);
                    b.trigger("beforeShow");
                    a.inner.css("overflow", "yes" === k ? "scroll" : "no" === k ? "hidden" : k);
                    b._setDimension();
                    b.reposition();
                    b.isOpen = !1;
                    b.coming = null;
                    b.bindEvents();
                    if (b.isOpened) {
                        if (d.prevMethod)
                            b.transitions[d.prevMethod]();
                    }
                    else
                        f(".fancybox-wrap")
                            .not(a.wrap)
                            .stop(!0)
                            .trigger("onReset")
                            .remove();
                    b.transitions[b.isOpened ? a.nextMethod : a.openMethod]();
                    b._preloadImages();
                }
        },
        _setDimension: function () {
            var a = b.getViewport(), d = 0, e = !1, c = !1, e = b.wrap, k = b.skin, g = b.inner, h = b.current, c = h.width, j = h.height, m = h.minWidth, u = h.minHeight, n = h.maxWidth, p = h.maxHeight, s = h.scrolling, q = h.scrollOutside ? h.scrollbarWidth : 0, x = h.margin, y = l(x[1] + x[3]), r = l(x[0] + x[2]), v, z, t, C, A, F, B, D, H;
            e.add(k)
                .add(g)
                .width("auto")
                .height("auto")
                .removeClass("fancybox-tmp");
            x = l(k.outerWidth(!0) - k.width());
            v = l(k.outerHeight(!0) - k.height());
            z = y + x;
            t = r + v;
            C = E(c) ? ((a.w - z) * l(c)) / 100 : c;
            A = E(j) ? ((a.h - t) * l(j)) / 100 : j;
            if ("iframe" === h.type) {
                if (((H = h.content), h.autoHeight && 1 === H.data("ready")))
                    try {
                        H[0].contentWindow.document.location &&
                            (g.width(C).height(9999),
                                (F = H.contents().find("body")),
                                q && F.css("overflow-x", "hidden"),
                                (A = F.outerHeight(!0)));
                    }
                    catch (G) { }
            }
            else if (h.autoWidth || h.autoHeight)
                g.addClass("fancybox-tmp"),
                    h.autoWidth || g.width(C),
                    h.autoHeight || g.height(A),
                    h.autoWidth && (C = g.width()),
                    h.autoHeight && (A = g.height()),
                    g.removeClass("fancybox-tmp");
            c = l(C);
            j = l(A);
            D = C / A;
            m = l(E(m) ? l(m, "w") - z : m);
            n = l(E(n) ? l(n, "w") - z : n);
            u = l(E(u) ? l(u, "h") - t : u);
            p = l(E(p) ? l(p, "h") - t : p);
            F = n;
            B = p;
            h.fitToView && ((n = Math.min(a.w - z, n)), (p = Math.min(a.h - t, p)));
            z = a.w - y;
            r = a.h - r;
            h.aspectRatio
                ? (c > n && ((c = n), (j = l(c / D))),
                    j > p && ((j = p), (c = l(j * D))),
                    c < m && ((c = m), (j = l(c / D))),
                    j < u && ((j = u), (c = l(j * D))))
                : ((c = Math.max(m, Math.min(c, n))),
                    h.autoHeight && "iframe" !== h.type && (g.width(c), (j = g.height())),
                    (j = Math.max(u, Math.min(j, p))));
            if (h.fitToView)
                if ((g.width(c).height(j),
                    e.width(c + x),
                    (a = e.width()),
                    (y = e.height()),
                    h.aspectRatio))
                    for (; (a > z || y > r) && (c > m && j > u) && !(19 < d++);)
                        (j = Math.max(u, Math.min(p, j - 10))),
                            (c = l(j * D)),
                            c < m && ((c = m), (j = l(c / D))),
                            c > n && ((c = n), (j = l(c / D))),
                            g.width(c).height(j),
                            e.width(c + x),
                            (a = e.width()),
                            (y = e.height());
                else
                    (c = Math.max(m, Math.min(c, c - (a - z)))),
                        (j = Math.max(u, Math.min(j, j - (y - r))));
            q && ("auto" === s && j < A && c + x + q < z) && (c += q);
            g.width(c).height(j);
            e.width(c + x);
            a = e.width();
            y = e.height();
            e = (a > z || y > r) && c > m && j > u;
            c = h.aspectRatio
                ? c < F && j < B && c < C && j < A
                : (c < F || j < B) && (c < C || j < A);
            f.extend(h, {
                dim: { width: w(a), height: w(y) },
                origWidth: C,
                origHeight: A,
                canShrink: e,
                canExpand: c,
                wPadding: x,
                hPadding: v,
                wrapSpace: y - k.outerHeight(!0),
                skinSpace: k.height() - j
            });
            !H && (h.autoHeight && j > u && j < p && !c) && g.height("auto");
        },
        _getPosition: function (a) {
            var d = b.current, e = b.getViewport(), c = d.margin, f = b.wrap.width() + c[1] + c[3], g = b.wrap.height() + c[0] + c[2], c = { position: "absolute", top: c[0], left: c[3] };
            d.autoCenter && d.fixed && !a && g <= e.h && f <= e.w
                ? (c.position = "fixed")
                : d.locked || ((c.top += e.y), (c.left += e.x));
            c.top = w(Math.max(c.top, c.top + (e.h - g) * d.topRatio));
            c.left = w(Math.max(c.left, c.left + (e.w - f) * d.leftRatio));
            return c;
        },
        _afterZoomIn: function () {
            var a = b.current;
            a &&
                ((b.isOpen = b.isOpened = !0),
                    b.wrap.css("overflow", "visible").addClass("fancybox-opened"),
                    b.update(),
                    (a.closeClick || (a.nextClick && 1 < b.group.length)) &&
                        b.inner.css("cursor", "pointer").bind("click.fb", function (d) {
                            !f(d.target).is("a") &&
                                !f(d.target)
                                    .parent()
                                    .is("a") &&
                                (d.preventDefault(), b[a.closeClick ? "close" : "next"]());
                        }),
                    a.closeBtn &&
                        f(a.tpl.closeBtn)
                            .appendTo(b.skin)
                            .bind("click.fb", function (a) {
                            a.preventDefault();
                            b.close();
                        }),
                    a.arrows &&
                        1 < b.group.length &&
                        ((a.loop || 0 < a.index) &&
                            f(a.tpl.prev)
                                .appendTo(b.outer)
                                .bind("click.fb", b.prev),
                            (a.loop || a.index < b.group.length - 1) &&
                                f(a.tpl.next)
                                    .appendTo(b.outer)
                                    .bind("click.fb", b.next)),
                    b.trigger("afterShow"),
                    !a.loop && a.index === a.group.length - 1
                        ? b.play(!1)
                        : b.opts.autoPlay &&
                            !b.player.isActive &&
                            ((b.opts.autoPlay = !1), b.play()));
        },
        _afterZoomOut: function (a) {
            a = a || b.current;
            f(".fancybox-wrap")
                .trigger("onReset")
                .remove();
            f.extend(b, {
                group: {},
                opts: {},
                router: !1,
                current: null,
                isActive: !1,
                isOpened: !1,
                isOpen: !1,
                isClosing: !1,
                wrap: null,
                skin: null,
                outer: null,
                inner: null
            });
            b.trigger("afterClose", a);
        }
    });
    b.transitions = {
        getOrigPosition: function () {
            var a = b.current, d = a.element, e = a.orig, c = {}, f = 50, g = 50, h = a.hPadding, j = a.wPadding, m = b.getViewport();
            !e &&
                (a.isDom && d.is(":visible")) &&
                ((e = d.find("img:first")), e.length || (e = d));
            t(e)
                ? ((c = e.offset()),
                    e.is("img") && ((f = e.outerWidth()), (g = e.outerHeight())))
                : ((c.top = m.y + (m.h - g) * a.topRatio),
                    (c.left = m.x + (m.w - f) * a.leftRatio));
            if ("fixed" === b.wrap.css("position") || a.locked)
                (c.top -= m.y), (c.left -= m.x);
            return (c = {
                top: w(c.top - h * a.topRatio),
                left: w(c.left - j * a.leftRatio),
                width: w(f + j),
                height: w(g + h)
            });
        },
        step: function (a, d) {
            var e, c, f = d.prop;
            c = b.current;
            var g = c.wrapSpace, h = c.skinSpace;
            if ("width" === f || "height" === f)
                (e = d.end === d.start ? 1 : (a - d.start) / (d.end - d.start)),
                    b.isClosing && (e = 1 - e),
                    (c = "width" === f ? c.wPadding : c.hPadding),
                    (c = a - c),
                    b.skin[f](l("width" === f ? c : c - g * e)),
                    b.inner[f](l("width" === f ? c : c - g * e - h * e));
        },
        zoomIn: function () {
            var a = b.current, d = a.pos, e = a.openEffect, c = "elastic" === e, k = f.extend({ opacity: 1 }, d);
            delete k.position;
            c
                ? ((d = this.getOrigPosition()), a.openOpacity && (d.opacity = 0.1))
                : "fade" === e && (d.opacity = 0.1);
            b.wrap.css(d).animate(k, {
                duration: "none" === e ? 0 : a.openSpeed,
                easing: a.openEasing,
                step: c ? this.step : null,
                complete: b._afterZoomIn
            });
        },
        zoomOut: function () {
            var a = b.current, d = a.closeEffect, e = "elastic" === d, c = { opacity: 0.1 };
            e && ((c = this.getOrigPosition()), a.closeOpacity && (c.opacity = 0.1));
            b.wrap.animate(c, {
                duration: "none" === d ? 0 : a.closeSpeed,
                easing: a.closeEasing,
                step: e ? this.step : null,
                complete: b._afterZoomOut
            });
        },
        changeIn: function () {
            var a = b.current, d = a.nextEffect, e = a.pos, c = { opacity: 1 }, f = b.direction, g;
            e.opacity = 0.1;
            "elastic" === d &&
                ((g = "down" === f || "up" === f ? "top" : "left"),
                    "down" === f || "right" === f
                        ? ((e[g] = w(l(e[g]) - 200)), (c[g] = "+=200px"))
                        : ((e[g] = w(l(e[g]) + 200)), (c[g] = "-=200px")));
            "none" === d
                ? b._afterZoomIn()
                : b.wrap.css(e).animate(c, {
                    duration: a.nextSpeed,
                    easing: a.nextEasing,
                    complete: b._afterZoomIn
                });
        },
        changeOut: function () {
            var a = b.previous, d = a.prevEffect, e = { opacity: 0.1 }, c = b.direction;
            "elastic" === d &&
                (e["down" === c || "up" === c ? "top" : "left"] =
                    ("up" === c || "left" === c ? "-" : "+") + "=200px");
            a.wrap.animate(e, {
                duration: "none" === d ? 0 : a.prevSpeed,
                easing: a.prevEasing,
                complete: function () {
                    f(this)
                        .trigger("onReset")
                        .remove();
                }
            });
        }
    };
    b.helpers.overlay = {
        defaults: {
            closeClick: !0,
            speedOut: 200,
            showEarly: !0,
            css: {},
            locked: !s,
            fixed: !0
        },
        overlay: null,
        fixed: !1,
        el: f("html"),
        create: function (a) {
            a = f.extend({}, this.defaults, a);
            this.overlay && this.close();
            this.overlay = f('<div class="fancybox-overlay"></div>').appendTo(b.coming ? b.coming.parent : a.parent);
            this.fixed = !1;
            a.fixed &&
                b.defaults.fixed &&
                (this.overlay.addClass("fancybox-overlay-fixed"), (this.fixed = !0));
        },
        open: function (a) {
            var d = this;
            a = f.extend({}, this.defaults, a);
            this.overlay
                ? this.overlay
                    .unbind(".overlay")
                    .width("auto")
                    .height("auto")
                : this.create(a);
            this.fixed ||
                (n.bind("resize.overlay", f.proxy(this.update, this)), this.update());
            a.closeClick &&
                this.overlay.bind("click.overlay", function (a) {
                    if (f(a.target).hasClass("fancybox-overlay"))
                        return b.isActive ? b.close() : d.close(), !1;
                });
            this.overlay.css(a.css).show();
        },
        close: function () {
            var a, b;
            n.unbind("resize.overlay");
            this.el.hasClass("fancybox-lock") &&
                (f(".fancybox-margin").removeClass("fancybox-margin"),
                    (a = n.scrollTop()),
                    (b = n.scrollLeft()),
                    this.el.removeClass("fancybox-lock"),
                    n.scrollTop(a).scrollLeft(b));
            f(".fancybox-overlay")
                .remove()
                .hide();
            f.extend(this, { overlay: null, fixed: !1 });
        },
        update: function () {
            var a = "100%", b;
            this.overlay.width(a).height("100%");
            I
                ? ((b = Math.max(G.documentElement.offsetWidth, G.body.offsetWidth)),
                    p.width() > b && (a = p.width()))
                : p.width() > n.width() && (a = p.width());
            this.overlay.width(a).height(p.height());
        },
        onReady: function (a, b) {
            var e = this.overlay;
            f(".fancybox-overlay").stop(!0, !0);
            e || this.create(a);
            a.locked &&
                (this.fixed && b.fixed) &&
                (e ||
                    (this.margin =
                        p.height() > n.height()
                            ? f("html")
                                .css("margin-right")
                                .replace("px", "")
                            : !1),
                    (b.locked = this.overlay.append(b.wrap)),
                    (b.fixed = !1));
            !0 === a.showEarly && this.beforeShow.apply(this, arguments);
        },
        beforeShow: function (a, b) {
            var e, c;
            b.locked &&
                (!1 !== this.margin &&
                    (f("*")
                        .filter(function () {
                        return ("fixed" === f(this).css("position") &&
                            !f(this).hasClass("fancybox-overlay") &&
                            !f(this).hasClass("fancybox-wrap"));
                    })
                        .addClass("fancybox-margin"),
                        this.el.addClass("fancybox-margin")),
                    (e = n.scrollTop()),
                    (c = n.scrollLeft()),
                    this.el.addClass("fancybox-lock"),
                    n.scrollTop(e).scrollLeft(c));
            this.open(a);
        },
        onUpdate: function () {
            this.fixed || this.update();
        },
        afterClose: function (a) {
            this.overlay &&
                !b.coming &&
                this.overlay.fadeOut(a.speedOut, f.proxy(this.close, this));
        }
    };
    b.helpers.title = {
        defaults: { type: "float", position: "bottom" },
        beforeShow: function (a) {
            var d = b.current, e = d.title, c = a.type;
            f.isFunction(e) && (e = e.call(d.element, d));
            if (q(e) && "" !== f.trim(e)) {
                d = f('<div class="fancybox-title fancybox-title-' +
                    c +
                    '-wrap">' +
                    e +
                    "</div>");
                switch (c) {
                    case "inside":
                        c = b.skin;
                        break;
                    case "outside":
                        c = b.wrap;
                        break;
                    case "over":
                        c = b.inner;
                        break;
                    default:
                        (c = b.skin),
                            d.appendTo("body"),
                            I && d.width(d.width()),
                            d.wrapInner('<span class="child"></span>'),
                            (b.current.margin[2] += Math.abs(l(d.css("margin-bottom"))));
                }
                d["top" === a.position ? "prependTo" : "appendTo"](c);
            }
        }
    };
    f.fn.fancybox = function (a) {
        var d, e = f(this), c = this.selector || "", k = function (g) {
            var h = f(this).blur(), j = d, k, l;
            !g.ctrlKey &&
                (!g.altKey && !g.shiftKey && !g.metaKey) &&
                !h.is(".fancybox-wrap") &&
                ((k = a.groupAttr || "data-fancybox-group"),
                    (l = h.attr(k)),
                    l || ((k = "rel"), (l = h.get(0)[k])),
                    l &&
                        ("" !== l && "nofollow" !== l) &&
                        ((h = c.length ? f(c) : e),
                            (h = h.filter("[" + k + '="' + l + '"]')),
                            (j = h.index(this))),
                    (a.index = j),
                    !1 !== b.open(h, a) && g.preventDefault());
        };
        a = a || {};
        d = a.index || 0;
        !c || !1 === a.live
            ? e.unbind("click.fb-start").bind("click.fb-start", k)
            : p
                .undelegate(c, "click.fb-start")
                .delegate(c + ":not('.fancybox-item, .fancybox-nav')", "click.fb-start", k);
        this.filter("[data-fancybox-start=1]").trigger("click");
        return this;
    };
    p.ready(function () {
        var a, d;
        f.scrollbarWidth === v &&
            (f.scrollbarWidth = function () {
                var a = f('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"), b = a.children(), b = b.innerWidth() - b.height(99).innerWidth();
                a.remove();
                return b;
            });
        if (f.support.fixedPosition === v) {
            a = f.support;
            d = f('<div style="position:fixed;top:20px;"></div>').appendTo("body");
            var e = 20 === d[0].offsetTop || 15 === d[0].offsetTop;
            d.remove();
            a.fixedPosition = e;
        }
        f.extend(b.defaults, {
            scrollbarWidth: f.scrollbarWidth(),
            fixed: f.support.fixedPosition,
            parent: f("body")
        });
        a = f(r).width();
        J.addClass("fancybox-lock-test");
        d = f(r).width();
        J.removeClass("fancybox-lock-test");
        f("<style type='text/css'>.fancybox-margin{margin-right:" +
            (d - a) +
            "px;}</style>").appendTo("head");
    });
})(window, document, jQuery);
/*!
 * Masonry PACKAGED v4.1.0
 * Cascading grid layout library
 * http://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */
!(function (t, e) {
    "use strict";
    "function" == typeof define && define.amd
        ? define("jquery-bridget/jquery-bridget", ["jquery"], function (i) {
            e(t, i);
        })
        : "object" == typeof module && module.exports
            ? (module.exports = e(t, require("jquery")))
            : (t.jQueryBridget = e(t, t.jQuery));
})(window, function (t, e) {
    "use strict";
    function i(i, r, a) {
        function h(t, e, n) {
            var o, r = "$()." + i + '("' + e + '")';
            return (t.each(function (t, h) {
                var u = a.data(h, i);
                if (!u)
                    return void s(i + " not initialized. Cannot call methods, i.e. " + r);
                var d = u[e];
                if (!d || "_" == e.charAt(0))
                    return void s(r + " is not a valid method");
                var l = d.apply(u, n);
                o = void 0 === o ? l : o;
            }),
                void 0 !== o ? o : t);
        }
        function u(t, e) {
            t.each(function (t, n) {
                var o = a.data(n, i);
                o ? (o.option(e), o._init()) : ((o = new r(n, e)), a.data(n, i, o));
            });
        }
        (a = a || e || t.jQuery),
            a &&
                (r.prototype.option ||
                    (r.prototype.option = function (t) {
                        a.isPlainObject(t) &&
                            (this.options = a.extend(!0, this.options, t));
                    }),
                    (a.fn[i] = function (t) {
                        if ("string" == typeof t) {
                            var e = o.call(arguments, 1);
                            return h(this, t, e);
                        }
                        return u(this, t), this;
                    }),
                    n(a));
    }
    function n(t) {
        !t || (t && t.bridget) || (t.bridget = i);
    }
    var o = Array.prototype.slice, r = t.console, s = "undefined" == typeof r
        ? function () { }
        : function (t) {
            r.error(t);
        };
    return n(e || t.jQuery), i;
}),
    (function (t, e) {
        "function" == typeof define && define.amd
            ? define("ev-emitter/ev-emitter", e)
            : "object" == typeof module && module.exports
                ? (module.exports = e())
                : (t.EvEmitter = e());
    })(this, function () {
        function t() { }
        var e = t.prototype;
        return ((e.on = function (t, e) {
            if (t && e) {
                var i = (this._events = this._events || {}), n = (i[t] = i[t] || []);
                return -1 == n.indexOf(e) && n.push(e), this;
            }
        }),
            (e.once = function (t, e) {
                if (t && e) {
                    this.on(t, e);
                    var i = (this._onceEvents = this._onceEvents || {}), n = (i[t] = i[t] || {});
                    return (n[e] = !0), this;
                }
            }),
            (e.off = function (t, e) {
                var i = this._events && this._events[t];
                if (i && i.length) {
                    var n = i.indexOf(e);
                    return -1 != n && i.splice(n, 1), this;
                }
            }),
            (e.emitEvent = function (t, e) {
                var i = this._events && this._events[t];
                if (i && i.length) {
                    var n = 0, o = i[n];
                    e = e || [];
                    for (var r = this._onceEvents && this._onceEvents[t]; o;) {
                        var s = r && r[o];
                        s && (this.off(t, o), delete r[o]),
                            o.apply(this, e),
                            (n += s ? 0 : 1),
                            (o = i[n]);
                    }
                    return this;
                }
            }),
            t);
    }),
    (function (t, e) {
        "use strict";
        "function" == typeof define && define.amd
            ? define("get-size/get-size", [], function () {
                return e();
            })
            : "object" == typeof module && module.exports
                ? (module.exports = e())
                : (t.getSize = e());
    })(window, function () {
        "use strict";
        function t(t) {
            var e = parseFloat(t), i = -1 == t.indexOf("%") && !isNaN(e);
            return i && e;
        }
        function e() { }
        function i() {
            for (var t = {
                width: 0,
                height: 0,
                innerWidth: 0,
                innerHeight: 0,
                outerWidth: 0,
                outerHeight: 0
            }, e = 0; u > e; e++) {
                var i = h[e];
                t[i] = 0;
            }
            return t;
        }
        function n(t) {
            var e = getComputedStyle(t);
            return (e ||
                a("Style returned " +
                    e +
                    ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"),
                e);
        }
        function o() {
            if (!d) {
                d = !0;
                var e = document.createElement("div");
                (e.style.width = "200px"),
                    (e.style.padding = "1px 2px 3px 4px"),
                    (e.style.borderStyle = "solid"),
                    (e.style.borderWidth = "1px 2px 3px 4px"),
                    (e.style.boxSizing = "border-box");
                var i = document.body || document.documentElement;
                i.appendChild(e);
                var o = n(e);
                (r.isBoxSizeOuter = s = 200 == t(o.width)), i.removeChild(e);
            }
        }
        function r(e) {
            if ((o(),
                "string" == typeof e && (e = document.querySelector(e)),
                e && "object" == typeof e && e.nodeType)) {
                var r = n(e);
                if ("none" == r.display)
                    return i();
                var a = {};
                (a.width = e.offsetWidth), (a.height = e.offsetHeight);
                for (var d = (a.isBorderBox = "border-box" == r.boxSizing), l = 0; u > l; l++) {
                    var c = h[l], f = r[c], m = parseFloat(f);
                    a[c] = isNaN(m) ? 0 : m;
                }
                var p = a.paddingLeft + a.paddingRight, g = a.paddingTop + a.paddingBottom, y = a.marginLeft + a.marginRight, v = a.marginTop + a.marginBottom, _ = a.borderLeftWidth + a.borderRightWidth, E = a.borderTopWidth + a.borderBottomWidth, z = d && s, b = t(r.width);
                b !== !1 && (a.width = b + (z ? 0 : p + _));
                var x = t(r.height);
                return (x !== !1 && (a.height = x + (z ? 0 : g + E)),
                    (a.innerWidth = a.width - (p + _)),
                    (a.innerHeight = a.height - (g + E)),
                    (a.outerWidth = a.width + y),
                    (a.outerHeight = a.height + v),
                    a);
            }
        }
        var s, a = "undefined" == typeof console
            ? e
            : function (t) {
                console.error(t);
            }, h = [
            "paddingLeft",
            "paddingRight",
            "paddingTop",
            "paddingBottom",
            "marginLeft",
            "marginRight",
            "marginTop",
            "marginBottom",
            "borderLeftWidth",
            "borderRightWidth",
            "borderTopWidth",
            "borderBottomWidth"
        ], u = h.length, d = !1;
        return r;
    }),
    (function (t, e) {
        "use strict";
        "function" == typeof define && define.amd
            ? define("desandro-matches-selector/matches-selector", e)
            : "object" == typeof module && module.exports
                ? (module.exports = e())
                : (t.matchesSelector = e());
    })(window, function () {
        "use strict";
        var t = (function () {
            var t = Element.prototype;
            if (t.matches)
                return "matches";
            if (t.matchesSelector)
                return "matchesSelector";
            for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
                var n = e[i], o = n + "MatchesSelector";
                if (t[o])
                    return o;
            }
        })();
        return function (e, i) {
            return e[t](i);
        };
    }),
    (function (t, e) {
        "function" == typeof define && define.amd
            ? define("fizzy-ui-utils/utils", [
                "desandro-matches-selector/matches-selector"
            ], function (i) {
                return e(t, i);
            })
            : "object" == typeof module && module.exports
                ? (module.exports = e(t, require("desandro-matches-selector")))
                : (t.fizzyUIUtils = e(t, t.matchesSelector));
    })(window, function (t, e) {
        var i = {};
        (i.extend = function (t, e) {
            for (var i in e)
                t[i] = e[i];
            return t;
        }),
            (i.modulo = function (t, e) {
                return ((t % e) + e) % e;
            }),
            (i.makeArray = function (t) {
                var e = [];
                if (Array.isArray(t))
                    e = t;
                else if (t && "number" == typeof t.length)
                    for (var i = 0; i < t.length; i++)
                        e.push(t[i]);
                else
                    e.push(t);
                return e;
            }),
            (i.removeFrom = function (t, e) {
                var i = t.indexOf(e);
                -1 != i && t.splice(i, 1);
            }),
            (i.getParent = function (t, i) {
                for (; t != document.body;)
                    if (((t = t.parentNode), e(t, i)))
                        return t;
            }),
            (i.getQueryElement = function (t) {
                return "string" == typeof t ? document.querySelector(t) : t;
            }),
            (i.handleEvent = function (t) {
                var e = "on" + t.type;
                this[e] && this[e](t);
            }),
            (i.filterFindElements = function (t, n) {
                t = i.makeArray(t);
                var o = [];
                return (t.forEach(function (t) {
                    if (t instanceof HTMLElement) {
                        if (!n)
                            return void o.push(t);
                        e(t, n) && o.push(t);
                        for (var i = t.querySelectorAll(n), r = 0; r < i.length; r++)
                            o.push(i[r]);
                    }
                }),
                    o);
            }),
            (i.debounceMethod = function (t, e, i) {
                var n = t.prototype[e], o = e + "Timeout";
                t.prototype[e] = function () {
                    var t = this[o];
                    t && clearTimeout(t);
                    var e = arguments, r = this;
                    this[o] = setTimeout(function () {
                        n.apply(r, e), delete r[o];
                    }, i || 100);
                };
            }),
            (i.docReady = function (t) {
                "complete" == document.readyState
                    ? t()
                    : document.addEventListener("DOMContentLoaded", t);
            }),
            (i.toDashed = function (t) {
                return t
                    .replace(/(.)([A-Z])/g, function (t, e, i) {
                    return e + "-" + i;
                })
                    .toLowerCase();
            });
        var n = t.console;
        return ((i.htmlInit = function (e, o) {
            i.docReady(function () {
                var r = i.toDashed(o), s = "data-" + r, a = document.querySelectorAll("[" + s + "]"), h = document.querySelectorAll(".js-" + r), u = i.makeArray(a).concat(i.makeArray(h)), d = s + "-options", l = t.jQuery;
                u.forEach(function (t) {
                    var i, r = t.getAttribute(s) || t.getAttribute(d);
                    try {
                        i = r && JSON.parse(r);
                    }
                    catch (a) {
                        return void (n &&
                            n.error("Error parsing " + s + " on " + t.className + ": " + a));
                    }
                    var h = new e(t, i);
                    l && l.data(t, o, h);
                });
            });
        }),
            i);
    }),
    (function (t, e) {
        "function" == typeof define && define.amd
            ? define("outlayer/item", [
                "ev-emitter/ev-emitter",
                "get-size/get-size"
            ], e)
            : "object" == typeof module && module.exports
                ? (module.exports = e(require("ev-emitter"), require("get-size")))
                : ((t.Outlayer = {}), (t.Outlayer.Item = e(t.EvEmitter, t.getSize)));
    })(window, function (t, e) {
        "use strict";
        function i(t) {
            for (var e in t)
                return !1;
            return (e = null), !0;
        }
        function n(t, e) {
            t &&
                ((this.element = t),
                    (this.layout = e),
                    (this.position = { x: 0, y: 0 }),
                    this._create());
        }
        function o(t) {
            return t.replace(/([A-Z])/g, function (t) {
                return "-" + t.toLowerCase();
            });
        }
        var r = document.documentElement.style, s = "string" == typeof r.transition ? "transition" : "WebkitTransition", a = "string" == typeof r.transform ? "transform" : "WebkitTransform", h = {
            WebkitTransition: "webkitTransitionEnd",
            transition: "transitionend"
        }[s], u = {
            transform: a,
            transition: s,
            transitionDuration: s + "Duration",
            transitionProperty: s + "Property",
            transitionDelay: s + "Delay"
        }, d = (n.prototype = Object.create(t.prototype));
        (d.constructor = n),
            (d._create = function () {
                (this._transn = { ingProperties: {}, clean: {}, onEnd: {} }),
                    this.css({ position: "absolute" });
            }),
            (d.handleEvent = function (t) {
                var e = "on" + t.type;
                this[e] && this[e](t);
            }),
            (d.getSize = function () {
                this.size = e(this.element);
            }),
            (d.css = function (t) {
                var e = this.element.style;
                for (var i in t) {
                    var n = u[i] || i;
                    e[n] = t[i];
                }
            }),
            (d.getPosition = function () {
                var t = getComputedStyle(this.element), e = this.layout._getOption("originLeft"), i = this.layout._getOption("originTop"), n = t[e ? "left" : "right"], o = t[i ? "top" : "bottom"], r = this.layout.size, s = -1 != n.indexOf("%")
                    ? (parseFloat(n) / 100) * r.width
                    : parseInt(n, 10), a = -1 != o.indexOf("%")
                    ? (parseFloat(o) / 100) * r.height
                    : parseInt(o, 10);
                (s = isNaN(s) ? 0 : s),
                    (a = isNaN(a) ? 0 : a),
                    (s -= e ? r.paddingLeft : r.paddingRight),
                    (a -= i ? r.paddingTop : r.paddingBottom),
                    (this.position.x = s),
                    (this.position.y = a);
            }),
            (d.layoutPosition = function () {
                var t = this.layout.size, e = {}, i = this.layout._getOption("originLeft"), n = this.layout._getOption("originTop"), o = i ? "paddingLeft" : "paddingRight", r = i ? "left" : "right", s = i ? "right" : "left", a = this.position.x + t[o];
                (e[r] = this.getXValue(a)), (e[s] = "");
                var h = n ? "paddingTop" : "paddingBottom", u = n ? "top" : "bottom", d = n ? "bottom" : "top", l = this.position.y + t[h];
                (e[u] = this.getYValue(l)),
                    (e[d] = ""),
                    this.css(e),
                    this.emitEvent("layout", [this]);
            }),
            (d.getXValue = function (t) {
                var e = this.layout._getOption("horizontal");
                return this.layout.options.percentPosition && !e
                    ? (t / this.layout.size.width) * 100 + "%"
                    : t + "px";
            }),
            (d.getYValue = function (t) {
                var e = this.layout._getOption("horizontal");
                return this.layout.options.percentPosition && e
                    ? (t / this.layout.size.height) * 100 + "%"
                    : t + "px";
            }),
            (d._transitionTo = function (t, e) {
                this.getPosition();
                var i = this.position.x, n = this.position.y, o = parseInt(t, 10), r = parseInt(e, 10), s = o === this.position.x && r === this.position.y;
                if ((this.setPosition(t, e), s && !this.isTransitioning))
                    return void this.layoutPosition();
                var a = t - i, h = e - n, u = {};
                (u.transform = this.getTranslate(a, h)),
                    this.transition({
                        to: u,
                        onTransitionEnd: { transform: this.layoutPosition },
                        isCleaning: !0
                    });
            }),
            (d.getTranslate = function (t, e) {
                var i = this.layout._getOption("originLeft"), n = this.layout._getOption("originTop");
                return ((t = i ? t : -t),
                    (e = n ? e : -e),
                    "translate3d(" + t + "px, " + e + "px, 0)");
            }),
            (d.goTo = function (t, e) {
                this.setPosition(t, e), this.layoutPosition();
            }),
            (d.moveTo = d._transitionTo),
            (d.setPosition = function (t, e) {
                (this.position.x = parseInt(t, 10)),
                    (this.position.y = parseInt(e, 10));
            }),
            (d._nonTransition = function (t) {
                this.css(t.to), t.isCleaning && this._removeStyles(t.to);
                for (var e in t.onTransitionEnd)
                    t.onTransitionEnd[e].call(this);
            }),
            (d.transition = function (t) {
                if (!parseFloat(this.layout.options.transitionDuration))
                    return void this._nonTransition(t);
                var e = this._transn;
                for (var i in t.onTransitionEnd)
                    e.onEnd[i] = t.onTransitionEnd[i];
                for (i in t.to)
                    (e.ingProperties[i] = !0), t.isCleaning && (e.clean[i] = !0);
                if (t.from) {
                    this.css(t.from);
                    var n = this.element.offsetHeight;
                    n = null;
                }
                this.enableTransition(t.to),
                    this.css(t.to),
                    (this.isTransitioning = !0);
            });
        var l = "opacity," + o(a);
        (d.enableTransition = function () {
            if (!this.isTransitioning) {
                var t = this.layout.options.transitionDuration;
                (t = "number" == typeof t ? t + "ms" : t),
                    this.css({
                        transitionProperty: l,
                        transitionDuration: t,
                        transitionDelay: this.staggerDelay || 0
                    }),
                    this.element.addEventListener(h, this, !1);
            }
        }),
            (d.onwebkitTransitionEnd = function (t) {
                this.ontransitionend(t);
            }),
            (d.onotransitionend = function (t) {
                this.ontransitionend(t);
            });
        var c = { "-webkit-transform": "transform" };
        (d.ontransitionend = function (t) {
            if (t.target === this.element) {
                var e = this._transn, n = c[t.propertyName] || t.propertyName;
                if ((delete e.ingProperties[n],
                    i(e.ingProperties) && this.disableTransition(),
                    n in e.clean &&
                        ((this.element.style[t.propertyName] = ""), delete e.clean[n]),
                    n in e.onEnd)) {
                    var o = e.onEnd[n];
                    o.call(this), delete e.onEnd[n];
                }
                this.emitEvent("transitionEnd", [this]);
            }
        }),
            (d.disableTransition = function () {
                this.removeTransitionStyles(),
                    this.element.removeEventListener(h, this, !1),
                    (this.isTransitioning = !1);
            }),
            (d._removeStyles = function (t) {
                var e = {};
                for (var i in t)
                    e[i] = "";
                this.css(e);
            });
        var f = {
            transitionProperty: "",
            transitionDuration: "",
            transitionDelay: ""
        };
        return ((d.removeTransitionStyles = function () {
            this.css(f);
        }),
            (d.stagger = function (t) {
                (t = isNaN(t) ? 0 : t), (this.staggerDelay = t + "ms");
            }),
            (d.removeElem = function () {
                this.element.parentNode.removeChild(this.element),
                    this.css({ display: "" }),
                    this.emitEvent("remove", [this]);
            }),
            (d.remove = function () {
                return s && parseFloat(this.layout.options.transitionDuration)
                    ? (this.once("transitionEnd", function () {
                        this.removeElem();
                    }),
                        void this.hide())
                    : void this.removeElem();
            }),
            (d.reveal = function () {
                delete this.isHidden, this.css({ display: "" });
                var t = this.layout.options, e = {}, i = this.getHideRevealTransitionEndProperty("visibleStyle");
                (e[i] = this.onRevealTransitionEnd),
                    this.transition({
                        from: t.hiddenStyle,
                        to: t.visibleStyle,
                        isCleaning: !0,
                        onTransitionEnd: e
                    });
            }),
            (d.onRevealTransitionEnd = function () {
                this.isHidden || this.emitEvent("reveal");
            }),
            (d.getHideRevealTransitionEndProperty = function (t) {
                var e = this.layout.options[t];
                if (e.opacity)
                    return "opacity";
                for (var i in e)
                    return i;
            }),
            (d.hide = function () {
                (this.isHidden = !0), this.css({ display: "" });
                var t = this.layout.options, e = {}, i = this.getHideRevealTransitionEndProperty("hiddenStyle");
                (e[i] = this.onHideTransitionEnd),
                    this.transition({
                        from: t.visibleStyle,
                        to: t.hiddenStyle,
                        isCleaning: !0,
                        onTransitionEnd: e
                    });
            }),
            (d.onHideTransitionEnd = function () {
                this.isHidden &&
                    (this.css({ display: "none" }), this.emitEvent("hide"));
            }),
            (d.destroy = function () {
                this.css({
                    position: "",
                    left: "",
                    right: "",
                    top: "",
                    bottom: "",
                    transition: "",
                    transform: ""
                });
            }),
            n);
    }),
    (function (t, e) {
        "use strict";
        "function" == typeof define && define.amd
            ? define("outlayer/outlayer", [
                "ev-emitter/ev-emitter",
                "get-size/get-size",
                "fizzy-ui-utils/utils",
                "./item"
            ], function (i, n, o, r) {
                return e(t, i, n, o, r);
            })
            : "object" == typeof module && module.exports
                ? (module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")))
                : (t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item));
    })(window, function (t, e, i, n, o) {
        "use strict";
        function r(t, e) {
            var i = n.getQueryElement(t);
            if (!i)
                return void (h &&
                    h.error("Bad element for " + this.constructor.namespace + ": " + (i || t)));
            (this.element = i),
                u && (this.$element = u(this.element)),
                (this.options = n.extend({}, this.constructor.defaults)),
                this.option(e);
            var o = ++l;
            (this.element.outlayerGUID = o), (c[o] = this), this._create();
            var r = this._getOption("initLayout");
            r && this.layout();
        }
        function s(t) {
            function e() {
                t.apply(this, arguments);
            }
            return ((e.prototype = Object.create(t.prototype)),
                (e.prototype.constructor = e),
                e);
        }
        function a(t) {
            if ("number" == typeof t)
                return t;
            var e = t.match(/(^\d*\.?\d*)(\w*)/), i = e && e[1], n = e && e[2];
            if (!i.length)
                return 0;
            i = parseFloat(i);
            var o = m[n] || 1;
            return i * o;
        }
        var h = t.console, u = t.jQuery, d = function () { }, l = 0, c = {};
        (r.namespace = "outlayer"),
            (r.Item = o),
            (r.defaults = {
                containerStyle: { position: "relative" },
                initLayout: !0,
                originLeft: !0,
                originTop: !0,
                resize: !0,
                resizeContainer: !0,
                transitionDuration: "0.4s",
                hiddenStyle: { opacity: 0, transform: "scale(0.001)" },
                visibleStyle: { opacity: 1, transform: "scale(1)" }
            });
        var f = r.prototype;
        n.extend(f, e.prototype),
            (f.option = function (t) {
                n.extend(this.options, t);
            }),
            (f._getOption = function (t) {
                var e = this.constructor.compatOptions[t];
                return e && void 0 !== this.options[e]
                    ? this.options[e]
                    : this.options[t];
            }),
            (r.compatOptions = {
                initLayout: "isInitLayout",
                horizontal: "isHorizontal",
                layoutInstant: "isLayoutInstant",
                originLeft: "isOriginLeft",
                originTop: "isOriginTop",
                resize: "isResizeBound",
                resizeContainer: "isResizingContainer"
            }),
            (f._create = function () {
                this.reloadItems(),
                    (this.stamps = []),
                    this.stamp(this.options.stamp),
                    n.extend(this.element.style, this.options.containerStyle);
                var t = this._getOption("resize");
                t && this.bindResize();
            }),
            (f.reloadItems = function () {
                this.items = this._itemize(this.element.children);
            }),
            (f._itemize = function (t) {
                for (var e = this._filterFindItemElements(t), i = this.constructor.Item, n = [], o = 0; o < e.length; o++) {
                    var r = e[o], s = new i(r, this);
                    n.push(s);
                }
                return n;
            }),
            (f._filterFindItemElements = function (t) {
                return n.filterFindElements(t, this.options.itemSelector);
            }),
            (f.getItemElements = function () {
                return this.items.map(function (t) {
                    return t.element;
                });
            }),
            (f.layout = function () {
                this._resetLayout(), this._manageStamps();
                var t = this._getOption("layoutInstant"), e = void 0 !== t ? t : !this._isLayoutInited;
                this.layoutItems(this.items, e), (this._isLayoutInited = !0);
            }),
            (f._init = f.layout),
            (f._resetLayout = function () {
                this.getSize();
            }),
            (f.getSize = function () {
                this.size = i(this.element);
            }),
            (f._getMeasurement = function (t, e) {
                var n, o = this.options[t];
                o
                    ? ("string" == typeof o
                        ? (n = this.element.querySelector(o))
                        : o instanceof HTMLElement && (n = o),
                        (this[t] = n ? i(n)[e] : o))
                    : (this[t] = 0);
            }),
            (f.layoutItems = function (t, e) {
                (t = this._getItemsForLayout(t)),
                    this._layoutItems(t, e),
                    this._postLayout();
            }),
            (f._getItemsForLayout = function (t) {
                return t.filter(function (t) {
                    return !t.isIgnored;
                });
            }),
            (f._layoutItems = function (t, e) {
                if ((this._emitCompleteOnItems("layout", t), t && t.length)) {
                    var i = [];
                    t.forEach(function (t) {
                        var n = this._getItemLayoutPosition(t);
                        (n.item = t), (n.isInstant = e || t.isLayoutInstant), i.push(n);
                    }, this),
                        this._processLayoutQueue(i);
                }
            }),
            (f._getItemLayoutPosition = function () {
                return { x: 0, y: 0 };
            }),
            (f._processLayoutQueue = function (t) {
                this.updateStagger(),
                    t.forEach(function (t, e) {
                        this._positionItem(t.item, t.x, t.y, t.isInstant, e);
                    }, this);
            }),
            (f.updateStagger = function () {
                var t = this.options.stagger;
                return null === t || void 0 === t
                    ? void (this.stagger = 0)
                    : ((this.stagger = a(t)), this.stagger);
            }),
            (f._positionItem = function (t, e, i, n, o) {
                n ? t.goTo(e, i) : (t.stagger(o * this.stagger), t.moveTo(e, i));
            }),
            (f._postLayout = function () {
                this.resizeContainer();
            }),
            (f.resizeContainer = function () {
                var t = this._getOption("resizeContainer");
                if (t) {
                    var e = this._getContainerSize();
                    e &&
                        (this._setContainerMeasure(e.width, !0),
                            this._setContainerMeasure(e.height, !1));
                }
            }),
            (f._getContainerSize = d),
            (f._setContainerMeasure = function (t, e) {
                if (void 0 !== t) {
                    var i = this.size;
                    i.isBorderBox &&
                        (t += e
                            ? i.paddingLeft +
                                i.paddingRight +
                                i.borderLeftWidth +
                                i.borderRightWidth
                            : i.paddingBottom +
                                i.paddingTop +
                                i.borderTopWidth +
                                i.borderBottomWidth),
                        (t = Math.max(t, 0)),
                        (this.element.style[e ? "width" : "height"] = t + "px");
                }
            }),
            (f._emitCompleteOnItems = function (t, e) {
                function i() {
                    o.dispatchEvent(t + "Complete", null, [e]);
                }
                function n() {
                    s++, s == r && i();
                }
                var o = this, r = e.length;
                if (!e || !r)
                    return void i();
                var s = 0;
                e.forEach(function (e) {
                    e.once(t, n);
                });
            }),
            (f.dispatchEvent = function (t, e, i) {
                var n = e ? [e].concat(i) : i;
                if ((this.emitEvent(t, n), u))
                    if (((this.$element = this.$element || u(this.element)), e)) {
                        var o = u.Event(e);
                        (o.type = t), this.$element.trigger(o, i);
                    }
                    else
                        this.$element.trigger(t, i);
            }),
            (f.ignore = function (t) {
                var e = this.getItem(t);
                e && (e.isIgnored = !0);
            }),
            (f.unignore = function (t) {
                var e = this.getItem(t);
                e && delete e.isIgnored;
            }),
            (f.stamp = function (t) {
                (t = this._find(t)),
                    t &&
                        ((this.stamps = this.stamps.concat(t)),
                            t.forEach(this.ignore, this));
            }),
            (f.unstamp = function (t) {
                (t = this._find(t)),
                    t &&
                        t.forEach(function (t) {
                            n.removeFrom(this.stamps, t), this.unignore(t);
                        }, this);
            }),
            (f._find = function (t) {
                return t
                    ? ("string" == typeof t && (t = this.element.querySelectorAll(t)),
                        (t = n.makeArray(t)))
                    : void 0;
            }),
            (f._manageStamps = function () {
                this.stamps &&
                    this.stamps.length &&
                    (this._getBoundingRect(),
                        this.stamps.forEach(this._manageStamp, this));
            }),
            (f._getBoundingRect = function () {
                var t = this.element.getBoundingClientRect(), e = this.size;
                this._boundingRect = {
                    left: t.left + e.paddingLeft + e.borderLeftWidth,
                    top: t.top + e.paddingTop + e.borderTopWidth,
                    right: t.right - (e.paddingRight + e.borderRightWidth),
                    bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
                };
            }),
            (f._manageStamp = d),
            (f._getElementOffset = function (t) {
                var e = t.getBoundingClientRect(), n = this._boundingRect, o = i(t), r = {
                    left: e.left - n.left - o.marginLeft,
                    top: e.top - n.top - o.marginTop,
                    right: n.right - e.right - o.marginRight,
                    bottom: n.bottom - e.bottom - o.marginBottom
                };
                return r;
            }),
            (f.handleEvent = n.handleEvent),
            (f.bindResize = function () {
                t.addEventListener("resize", this), (this.isResizeBound = !0);
            }),
            (f.unbindResize = function () {
                t.removeEventListener("resize", this), (this.isResizeBound = !1);
            }),
            (f.onresize = function () {
                this.resize();
            }),
            n.debounceMethod(r, "onresize", 100),
            (f.resize = function () {
                this.isResizeBound && this.needsResizeLayout() && this.layout();
            }),
            (f.needsResizeLayout = function () {
                var t = i(this.element), e = this.size && t;
                return e && t.innerWidth !== this.size.innerWidth;
            }),
            (f.addItems = function (t) {
                var e = this._itemize(t);
                return e.length && (this.items = this.items.concat(e)), e;
            }),
            (f.appended = function (t) {
                var e = this.addItems(t);
                e.length && (this.layoutItems(e, !0), this.reveal(e));
            }),
            (f.prepended = function (t) {
                var e = this._itemize(t);
                if (e.length) {
                    var i = this.items.slice(0);
                    (this.items = e.concat(i)),
                        this._resetLayout(),
                        this._manageStamps(),
                        this.layoutItems(e, !0),
                        this.reveal(e),
                        this.layoutItems(i);
                }
            }),
            (f.reveal = function (t) {
                if ((this._emitCompleteOnItems("reveal", t), t && t.length)) {
                    var e = this.updateStagger();
                    t.forEach(function (t, i) {
                        t.stagger(i * e), t.reveal();
                    });
                }
            }),
            (f.hide = function (t) {
                if ((this._emitCompleteOnItems("hide", t), t && t.length)) {
                    var e = this.updateStagger();
                    t.forEach(function (t, i) {
                        t.stagger(i * e), t.hide();
                    });
                }
            }),
            (f.revealItemElements = function (t) {
                var e = this.getItems(t);
                this.reveal(e);
            }),
            (f.hideItemElements = function (t) {
                var e = this.getItems(t);
                this.hide(e);
            }),
            (f.getItem = function (t) {
                for (var e = 0; e < this.items.length; e++) {
                    var i = this.items[e];
                    if (i.element == t)
                        return i;
                }
            }),
            (f.getItems = function (t) {
                t = n.makeArray(t);
                var e = [];
                return (t.forEach(function (t) {
                    var i = this.getItem(t);
                    i && e.push(i);
                }, this),
                    e);
            }),
            (f.remove = function (t) {
                var e = this.getItems(t);
                this._emitCompleteOnItems("remove", e),
                    e &&
                        e.length &&
                        e.forEach(function (t) {
                            t.remove(), n.removeFrom(this.items, t);
                        }, this);
            }),
            (f.destroy = function () {
                var t = this.element.style;
                (t.height = ""),
                    (t.position = ""),
                    (t.width = ""),
                    this.items.forEach(function (t) {
                        t.destroy();
                    }),
                    this.unbindResize();
                var e = this.element.outlayerGUID;
                delete c[e],
                    delete this.element.outlayerGUID,
                    u && u.removeData(this.element, this.constructor.namespace);
            }),
            (r.data = function (t) {
                t = n.getQueryElement(t);
                var e = t && t.outlayerGUID;
                return e && c[e];
            }),
            (r.create = function (t, e) {
                var i = s(r);
                return ((i.defaults = n.extend({}, r.defaults)),
                    n.extend(i.defaults, e),
                    (i.compatOptions = n.extend({}, r.compatOptions)),
                    (i.namespace = t),
                    (i.data = r.data),
                    (i.Item = s(o)),
                    n.htmlInit(i, t),
                    u && u.bridget && u.bridget(t, i),
                    i);
            });
        var m = { ms: 1, s: 1e3 };
        return (r.Item = o), r;
    }),
    (function (t, e) {
        "function" == typeof define && define.amd
            ? define(["outlayer/outlayer", "get-size/get-size"], e)
            : "object" == typeof module && module.exports
                ? (module.exports = e(require("outlayer"), require("get-size")))
                : (t.Masonry = e(t.Outlayer, t.getSize));
    })(window, function (t, e) {
        var i = t.create("masonry");
        return ((i.compatOptions.fitWidth = "isFitWidth"),
            (i.prototype._resetLayout = function () {
                this.getSize(),
                    this._getMeasurement("columnWidth", "outerWidth"),
                    this._getMeasurement("gutter", "outerWidth"),
                    this.measureColumns(),
                    (this.colYs = []);
                for (var t = 0; t < this.cols; t++)
                    this.colYs.push(0);
                this.maxY = 0;
            }),
            (i.prototype.measureColumns = function () {
                if ((this.getContainerWidth(), !this.columnWidth)) {
                    var t = this.items[0], i = t && t.element;
                    this.columnWidth = (i && e(i).outerWidth) || this.containerWidth;
                }
                var n = (this.columnWidth += this.gutter), o = this.containerWidth + this.gutter, r = o / n, s = n - (o % n), a = s && 1 > s ? "round" : "floor";
                (r = Math[a](r)), (this.cols = Math.max(r, 1));
            }),
            (i.prototype.getContainerWidth = function () {
                var t = this._getOption("fitWidth"), i = t ? this.element.parentNode : this.element, n = e(i);
                this.containerWidth = n && n.innerWidth;
            }),
            (i.prototype._getItemLayoutPosition = function (t) {
                t.getSize();
                var e = t.size.outerWidth % this.columnWidth, i = e && 1 > e ? "round" : "ceil", n = Math[i](t.size.outerWidth / this.columnWidth);
                n = Math.min(n, this.cols);
                for (var o = this._getColGroup(n), r = Math.min.apply(Math, o), s = o.indexOf(r), a = { x: this.columnWidth * s, y: r }, h = r + t.size.outerHeight, u = this.cols + 1 - o.length, d = 0; u > d; d++)
                    this.colYs[s + d] = h;
                return a;
            }),
            (i.prototype._getColGroup = function (t) {
                if (2 > t)
                    return this.colYs;
                for (var e = [], i = this.cols + 1 - t, n = 0; i > n; n++) {
                    var o = this.colYs.slice(n, n + t);
                    e[n] = Math.max.apply(Math, o);
                }
                return e;
            }),
            (i.prototype._manageStamp = function (t) {
                var i = e(t), n = this._getElementOffset(t), o = this._getOption("originLeft"), r = o ? n.left : n.right, s = r + i.outerWidth, a = Math.floor(r / this.columnWidth);
                a = Math.max(0, a);
                var h = Math.floor(s / this.columnWidth);
                (h -= s % this.columnWidth ? 0 : 1), (h = Math.min(this.cols - 1, h));
                for (var u = this._getOption("originTop"), d = (u ? n.top : n.bottom) + i.outerHeight, l = a; h >= l; l++)
                    this.colYs[l] = Math.max(d, this.colYs[l]);
            }),
            (i.prototype._getContainerSize = function () {
                this.maxY = Math.max.apply(Math, this.colYs);
                var t = { height: this.maxY };
                return (this._getOption("fitWidth") &&
                    (t.width = this._getContainerFitWidth()),
                    t);
            }),
            (i.prototype._getContainerFitWidth = function () {
                for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];)
                    t++;
                return (this.cols - t) * this.columnWidth - this.gutter;
            }),
            (i.prototype.needsResizeLayout = function () {
                var t = this.containerWidth;
                return this.getContainerWidth(), t != this.containerWidth;
            }),
            i);
    });
/**
 * Owl carousel
 * @version 2.0.0
 * @author Bartosz Wojciechowski
 * @license The MIT License (MIT)
 * @todo Lazy Load Icon
 * @todo prevent animationend bubling
 * @todo itemsScaleUp
 * @todo Test Zepto
 * @todo stagePadding calculate wrong active classes
 */
!(function (a, b, c, d) {
    function e(b, c) {
        (this.settings = null),
            (this.options = a.extend({}, e.Defaults, c)),
            (this.$element = a(b)),
            (this.drag = a.extend({}, m)),
            (this.state = a.extend({}, n)),
            (this.e = a.extend({}, o)),
            (this._plugins = {}),
            (this._supress = {}),
            (this._current = null),
            (this._speed = null),
            (this._coordinates = []),
            (this._breakpoint = null),
            (this._width = null),
            (this._items = []),
            (this._clones = []),
            (this._mergers = []),
            (this._invalidated = {}),
            (this._pipe = []),
            a.each(e.Plugins, a.proxy(function (a, b) {
                this._plugins[a[0].toLowerCase() + a.slice(1)] = new b(this);
            }, this)),
            a.each(e.Pipe, a.proxy(function (b, c) {
                this._pipe.push({ filter: c.filter, run: a.proxy(c.run, this) });
            }, this)),
            this.setup(),
            this.initialize();
    }
    function f(a) {
        if (a.touches !== d)
            return { x: a.touches[0].pageX, y: a.touches[0].pageY };
        if (a.touches === d) {
            if (a.pageX !== d)
                return { x: a.pageX, y: a.pageY };
            if (a.pageX === d)
                return { x: a.clientX, y: a.clientY };
        }
    }
    function g(a) {
        var b, d, e = c.createElement("div"), f = a;
        for (b in f)
            if (((d = f[b]), "undefined" != typeof e.style[d]))
                return (e = null), [d, b];
        return [!1];
    }
    function h() {
        return g([
            "transition",
            "WebkitTransition",
            "MozTransition",
            "OTransition"
        ])[1];
    }
    function i() {
        return g([
            "transform",
            "WebkitTransform",
            "MozTransform",
            "OTransform",
            "msTransform"
        ])[0];
    }
    function j() {
        return g([
            "perspective",
            "webkitPerspective",
            "MozPerspective",
            "OPerspective",
            "MsPerspective"
        ])[0];
    }
    function k() {
        return "ontouchstart" in b || !!navigator.msMaxTouchPoints;
    }
    function l() {
        return b.navigator.msPointerEnabled;
    }
    var m, n, o;
    (m = {
        start: 0,
        startX: 0,
        startY: 0,
        current: 0,
        currentX: 0,
        currentY: 0,
        offsetX: 0,
        offsetY: 0,
        distance: null,
        startTime: 0,
        endTime: 0,
        updatedX: 0,
        targetEl: null
    }),
        (n = {
            isTouch: !1,
            isScrolling: !1,
            isSwiping: !1,
            direction: !1,
            inMotion: !1
        }),
        (o = {
            _onDragStart: null,
            _onDragMove: null,
            _onDragEnd: null,
            _transitionEnd: null,
            _resizer: null,
            _responsiveCall: null,
            _goToLoop: null,
            _checkVisibile: null
        }),
        (e.Defaults = {
            items: 3,
            loop: !1,
            center: !1,
            mouseDrag: !0,
            touchDrag: !0,
            pullDrag: !0,
            freeDrag: !1,
            margin: 0,
            stagePadding: 0,
            merge: !1,
            mergeFit: !0,
            autoWidth: !1,
            startPosition: 0,
            rtl: !1,
            smartSpeed: 250,
            fluidSpeed: !1,
            dragEndSpeed: !1,
            responsive: {},
            responsiveRefreshRate: 200,
            responsiveBaseElement: b,
            responsiveClass: !1,
            fallbackEasing: "swing",
            info: !1,
            nestedItemSelector: !1,
            itemElement: "div",
            stageElement: "div",
            themeClass: "owl-theme",
            baseClass: "owl-carousel",
            itemClass: "owl-item",
            centerClass: "center",
            activeClass: "active"
        }),
        (e.Width = { Default: "default", Inner: "inner", Outer: "outer" }),
        (e.Plugins = {}),
        (e.Pipe = [
            {
                filter: ["width", "items", "settings"],
                run: function (a) {
                    a.current = this._items && this._items[this.relative(this._current)];
                }
            },
            {
                filter: ["items", "settings"],
                run: function () {
                    var a = this._clones, b = this.$stage.children(".cloned");
                    (b.length !== a.length || (!this.settings.loop && a.length > 0)) &&
                        (this.$stage.children(".cloned").remove(), (this._clones = []));
                }
            },
            {
                filter: ["items", "settings"],
                run: function () {
                    var a, b, c = this._clones, d = this._items, e = this.settings.loop
                        ? c.length - Math.max(2 * this.settings.items, 4)
                        : 0;
                    for (a = 0, b = Math.abs(e / 2); b > a; a++)
                        e > 0
                            ? (this.$stage
                                .children()
                                .eq(d.length + c.length - 1)
                                .remove(),
                                c.pop(),
                                this.$stage
                                    .children()
                                    .eq(0)
                                    .remove(),
                                c.pop())
                            : (c.push(c.length / 2),
                                this.$stage.append(d[c[c.length - 1]].clone().addClass("cloned")),
                                c.push(d.length - 1 - (c.length - 1) / 2),
                                this.$stage.prepend(d[c[c.length - 1]].clone().addClass("cloned")));
                }
            },
            {
                filter: ["width", "items", "settings"],
                run: function () {
                    var a, b, c, d = this.settings.rtl ? 1 : -1, e = (this.width() / this.settings.items).toFixed(3), f = 0;
                    for (this._coordinates = [],
                        b = 0,
                        c = this._clones.length + this._items.length; c > b; b++)
                        (a = this._mergers[this.relative(b)]),
                            (a =
                                (this.settings.mergeFit && Math.min(a, this.settings.items)) ||
                                    a),
                            (f +=
                                (this.settings.autoWidth
                                    ? this._items[this.relative(b)].width() + this.settings.margin
                                    : e * a) * d),
                            this._coordinates.push(f);
                }
            },
            {
                filter: ["width", "items", "settings"],
                run: function () {
                    var b, c, d = (this.width() / this.settings.items).toFixed(3), e = {
                        width: Math.abs(this._coordinates[this._coordinates.length - 1]) +
                            2 * this.settings.stagePadding,
                        "padding-left": this.settings.stagePadding || "",
                        "padding-right": this.settings.stagePadding || ""
                    };
                    if ((this.$stage.css(e),
                        (e = {
                            width: this.settings.autoWidth ? "auto" : d - this.settings.margin
                        }),
                        (e[this.settings.rtl ? "margin-left" : "margin-right"] = this.settings.margin),
                        !this.settings.autoWidth &&
                            a.grep(this._mergers, function (a) {
                                return a > 1;
                            }).length > 0))
                        for (b = 0, c = this._coordinates.length; c > b; b++)
                            (e.width =
                                Math.abs(this._coordinates[b]) -
                                    Math.abs(this._coordinates[b - 1] || 0) -
                                    this.settings.margin),
                                this.$stage
                                    .children()
                                    .eq(b)
                                    .css(e);
                    else
                        this.$stage.children().css(e);
                }
            },
            {
                filter: ["width", "items", "settings"],
                run: function (a) {
                    a.current && this.reset(this.$stage.children().index(a.current));
                }
            },
            {
                filter: ["position"],
                run: function () {
                    this.animate(this.coordinates(this._current));
                }
            },
            {
                filter: ["width", "position", "items", "settings"],
                run: function () {
                    var a, b, c, d, e = this.settings.rtl ? 1 : -1, f = 2 * this.settings.stagePadding, g = this.coordinates(this.current()) + f, h = g + this.width() * e, i = [];
                    for (c = 0, d = this._coordinates.length; d > c; c++)
                        (a = this._coordinates[c - 1] || 0),
                            (b = Math.abs(this._coordinates[c]) + f * e),
                            ((this.op(a, "<=", g) && this.op(a, ">", h)) ||
                                (this.op(b, "<", g) && this.op(b, ">", h))) &&
                                i.push(c);
                    this.$stage
                        .children("." + this.settings.activeClass)
                        .removeClass(this.settings.activeClass),
                        this.$stage
                            .children(":eq(" + i.join("), :eq(") + ")")
                            .addClass(this.settings.activeClass),
                        this.settings.center &&
                            (this.$stage
                                .children("." + this.settings.centerClass)
                                .removeClass(this.settings.centerClass),
                                this.$stage
                                    .children()
                                    .eq(this.current())
                                    .addClass(this.settings.centerClass));
                }
            }
        ]),
        (e.prototype.initialize = function () {
            if ((this.trigger("initialize"),
                this.$element
                    .addClass(this.settings.baseClass)
                    .addClass(this.settings.themeClass)
                    .toggleClass("owl-rtl", this.settings.rtl),
                this.browserSupport(),
                this.settings.autoWidth && this.state.imagesLoaded !== !0)) {
                var b, c, e;
                if (((b = this.$element.find("img")),
                    (c = this.settings.nestedItemSelector
                        ? "." + this.settings.nestedItemSelector
                        : d),
                    (e = this.$element.children(c).width()),
                    b.length && 0 >= e))
                    return this.preloadAutoWidthImages(b), !1;
            }
            this.$element.addClass("owl-loading"),
                (this.$stage = a("<" + this.settings.stageElement + ' class="owl-stage"/>').wrap('<div class="owl-stage-outer">')),
                this.$element.append(this.$stage.parent()),
                this.replace(this.$element.children().not(this.$stage.parent())),
                (this._width = this.$element.width()),
                this.refresh(),
                this.$element.removeClass("owl-loading").addClass("owl-loaded"),
                this.eventsCall(),
                this.internalEvents(),
                this.addTriggerableEvents(),
                this.trigger("initialized");
        }),
        (e.prototype.setup = function () {
            var b = this.viewport(), c = this.options.responsive, d = -1, e = null;
            c
                ? (a.each(c, function (a) {
                    b >= a && a > d && (d = Number(a));
                }),
                    (e = a.extend({}, this.options, c[d])),
                    delete e.responsive,
                    e.responsiveClass &&
                        this.$element
                            .attr("class", function (a, b) {
                            return b.replace(/\b owl-responsive-\S+/g, "");
                        })
                            .addClass("owl-responsive-" + d))
                : (e = a.extend({}, this.options)),
                (null === this.settings || this._breakpoint !== d) &&
                    (this.trigger("change", { property: { name: "settings", value: e } }),
                        (this._breakpoint = d),
                        (this.settings = e),
                        this.invalidate("settings"),
                        this.trigger("changed", {
                            property: { name: "settings", value: this.settings }
                        }));
        }),
        (e.prototype.optionsLogic = function () {
            this.$element.toggleClass("owl-center", this.settings.center),
                this.settings.loop &&
                    this._items.length < this.settings.items &&
                    (this.settings.loop = !1),
                this.settings.autoWidth &&
                    ((this.settings.stagePadding = !1), (this.settings.merge = !1));
        }),
        (e.prototype.prepare = function (b) {
            var c = this.trigger("prepare", { content: b });
            return (c.data ||
                (c.data = a("<" + this.settings.itemElement + "/>")
                    .addClass(this.settings.itemClass)
                    .append(b)),
                this.trigger("prepared", { content: c.data }),
                c.data);
        }),
        (e.prototype.update = function () {
            for (var b = 0, c = this._pipe.length, d = a.proxy(function (a) {
                return this[a];
            }, this._invalidated), e = {}; c > b;)
                (this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) &&
                    this._pipe[b].run(e),
                    b++;
            this._invalidated = {};
        }),
        (e.prototype.width = function (a) {
            switch ((a = a || e.Width.Default)) {
                case e.Width.Inner:
                case e.Width.Outer:
                    return this._width;
                default:
                    return (this._width - 2 * this.settings.stagePadding + this.settings.margin);
            }
        }),
        (e.prototype.refresh = function () {
            if (0 === this._items.length)
                return !1;
            new Date().getTime();
            this.trigger("refresh"),
                this.setup(),
                this.optionsLogic(),
                this.$stage.addClass("owl-refresh"),
                this.update(),
                this.$stage.removeClass("owl-refresh"),
                (this.state.orientation = b.orientation),
                this.watchVisibility(),
                this.trigger("refreshed");
        }),
        (e.prototype.eventsCall = function () {
            (this.e._onDragStart = a.proxy(function (a) {
                this.onDragStart(a);
            }, this)),
                (this.e._onDragMove = a.proxy(function (a) {
                    this.onDragMove(a);
                }, this)),
                (this.e._onDragEnd = a.proxy(function (a) {
                    this.onDragEnd(a);
                }, this)),
                (this.e._onResize = a.proxy(function (a) {
                    this.onResize(a);
                }, this)),
                (this.e._transitionEnd = a.proxy(function (a) {
                    this.transitionEnd(a);
                }, this)),
                (this.e._preventClick = a.proxy(function (a) {
                    this.preventClick(a);
                }, this));
        }),
        (e.prototype.onThrottledResize = function () {
            b.clearTimeout(this.resizeTimer),
                (this.resizeTimer = b.setTimeout(this.e._onResize, this.settings.responsiveRefreshRate));
        }),
        (e.prototype.onResize = function () {
            return this._items.length
                ? this._width === this.$element.width()
                    ? !1
                    : this.trigger("resize").isDefaultPrevented()
                        ? !1
                        : ((this._width = this.$element.width()),
                            this.invalidate("width"),
                            this.refresh(),
                            void this.trigger("resized"))
                : !1;
        }),
        (e.prototype.eventsRouter = function (a) {
            var b = a.type;
            "mousedown" === b || "touchstart" === b
                ? this.onDragStart(a)
                : "mousemove" === b || "touchmove" === b
                    ? this.onDragMove(a)
                    : "mouseup" === b || "touchend" === b
                        ? this.onDragEnd(a)
                        : "touchcancel" === b && this.onDragEnd(a);
        }),
        (e.prototype.internalEvents = function () {
            var c = (k(), l());
            this.settings.mouseDrag
                ? (this.$stage.on("mousedown", a.proxy(function (a) {
                    this.eventsRouter(a);
                }, this)),
                    this.$stage.on("dragstart", function () {
                        return !1;
                    }),
                    (this.$stage.get(0).onselectstart = function () {
                        return !1;
                    }))
                : this.$element.addClass("owl-text-select-on"),
                this.settings.touchDrag &&
                    !c &&
                    this.$stage.on("touchstart touchcancel", a.proxy(function (a) {
                        this.eventsRouter(a);
                    }, this)),
                this.transitionEndVendor &&
                    this.on(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd, !1),
                this.settings.responsive !== !1 &&
                    this.on(b, "resize", a.proxy(this.onThrottledResize, this));
        }),
        (e.prototype.onDragStart = function (d) {
            var e, g, h, i;
            if (((e = d.originalEvent || d || b.event),
                3 === e.which || this.state.isTouch))
                return !1;
            if (("mousedown" === e.type && this.$stage.addClass("owl-grab"),
                this.trigger("drag"),
                (this.drag.startTime = new Date().getTime()),
                this.speed(0),
                (this.state.isTouch = !0),
                (this.state.isScrolling = !1),
                (this.state.isSwiping = !1),
                (this.drag.distance = 0),
                (g = f(e).x),
                (h = f(e).y),
                (this.drag.offsetX = this.$stage.position().left),
                (this.drag.offsetY = this.$stage.position().top),
                this.settings.rtl &&
                    (this.drag.offsetX =
                        this.$stage.position().left +
                            this.$stage.width() -
                            this.width() +
                            this.settings.margin),
                this.state.inMotion && this.support3d))
                (i = this.getTransformProperty()),
                    (this.drag.offsetX = i),
                    this.animate(i),
                    (this.state.inMotion = !0);
            else if (this.state.inMotion && !this.support3d)
                return (this.state.inMotion = !1), !1;
            (this.drag.startX = g - this.drag.offsetX),
                (this.drag.startY = h - this.drag.offsetY),
                (this.drag.start = g - this.drag.startX),
                (this.drag.targetEl = e.target || e.srcElement),
                (this.drag.updatedX = this.drag.start),
                ("IMG" === this.drag.targetEl.tagName ||
                    "A" === this.drag.targetEl.tagName) &&
                    (this.drag.targetEl.draggable = !1),
                a(c).on("mousemove.owl.dragEvents mouseup.owl.dragEvents touchmove.owl.dragEvents touchend.owl.dragEvents", a.proxy(function (a) {
                    this.eventsRouter(a);
                }, this));
        }),
        (e.prototype.onDragMove = function (a) {
            var c, e, g, h, i, j;
            this.state.isTouch &&
                (this.state.isScrolling ||
                    ((c = a.originalEvent || a || b.event),
                        (e = f(c).x),
                        (g = f(c).y),
                        (this.drag.currentX = e - this.drag.startX),
                        (this.drag.currentY = g - this.drag.startY),
                        (this.drag.distance = this.drag.currentX - this.drag.offsetX),
                        this.drag.distance < 0
                            ? (this.state.direction = this.settings.rtl ? "right" : "left")
                            : this.drag.distance > 0 &&
                                (this.state.direction = this.settings.rtl ? "left" : "right"),
                        this.settings.loop
                            ? this.op(this.drag.currentX, ">", this.coordinates(this.minimum())) && "right" === this.state.direction
                                ? (this.drag.currentX -=
                                    (this.settings.center && this.coordinates(0)) -
                                        this.coordinates(this._items.length))
                                : this.op(this.drag.currentX, "<", this.coordinates(this.maximum())) &&
                                    "left" === this.state.direction &&
                                    (this.drag.currentX +=
                                        (this.settings.center && this.coordinates(0)) -
                                            this.coordinates(this._items.length))
                            : ((h = this.coordinates(this.settings.rtl ? this.maximum() : this.minimum())),
                                (i = this.coordinates(this.settings.rtl ? this.minimum() : this.maximum())),
                                (j = this.settings.pullDrag ? this.drag.distance / 5 : 0),
                                (this.drag.currentX = Math.max(Math.min(this.drag.currentX, h + j), i + j))),
                        (this.drag.distance > 8 || this.drag.distance < -8) &&
                            (c.preventDefault !== d ? c.preventDefault() : (c.returnValue = !1),
                                (this.state.isSwiping = !0)),
                        (this.drag.updatedX = this.drag.currentX),
                        (this.drag.currentY > 16 || this.drag.currentY < -16) &&
                            this.state.isSwiping === !1 &&
                            ((this.state.isScrolling = !0),
                                (this.drag.updatedX = this.drag.start)),
                        this.animate(this.drag.updatedX)));
        }),
        (e.prototype.onDragEnd = function (b) {
            var d, e, f;
            if (this.state.isTouch) {
                if (("mouseup" === b.type && this.$stage.removeClass("owl-grab"),
                    this.trigger("dragged"),
                    this.drag.targetEl.removeAttribute("draggable"),
                    (this.state.isTouch = !1),
                    (this.state.isScrolling = !1),
                    (this.state.isSwiping = !1),
                    0 === this.drag.distance && this.state.inMotion !== !0))
                    return (this.state.inMotion = !1), !1;
                (this.drag.endTime = new Date().getTime()),
                    (d = this.drag.endTime - this.drag.startTime),
                    (e = Math.abs(this.drag.distance)),
                    (e > 3 || d > 300) && this.removeClick(this.drag.targetEl),
                    (f = this.closest(this.drag.updatedX)),
                    this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed),
                    this.current(f),
                    this.invalidate("position"),
                    this.update(),
                    this.settings.pullDrag ||
                        this.drag.updatedX !== this.coordinates(f) ||
                        this.transitionEnd(),
                    (this.drag.distance = 0),
                    a(c).off(".owl.dragEvents");
            }
        }),
        (e.prototype.removeClick = function (c) {
            (this.drag.targetEl = c),
                a(c).on("click.preventClick", this.e._preventClick),
                b.setTimeout(function () {
                    a(c).off("click.preventClick");
                }, 300);
        }),
        (e.prototype.preventClick = function (b) {
            b.preventDefault ? b.preventDefault() : (b.returnValue = !1),
                b.stopPropagation && b.stopPropagation(),
                a(b.target).off("click.preventClick");
        }),
        (e.prototype.getTransformProperty = function () {
            var a, c;
            return ((a = b
                .getComputedStyle(this.$stage.get(0), null)
                .getPropertyValue(this.vendorName + "transform")),
                (a = a.replace(/matrix(3d)?\(|\)/g, "").split(",")),
                (c = 16 === a.length),
                c !== !0 ? a[4] : a[12]);
        }),
        (e.prototype.closest = function (b) {
            var c = -1, d = 30, e = this.width(), f = this.coordinates();
            return (this.settings.freeDrag ||
                a.each(f, a.proxy(function (a, g) {
                    return (b > g - d && g + d > b
                        ? (c = a)
                        : this.op(b, "<", g) &&
                            this.op(b, ">", f[a + 1] || g - e) &&
                            (c = "left" === this.state.direction ? a + 1 : a),
                        -1 === c);
                }, this)),
                this.settings.loop ||
                    (this.op(b, ">", f[this.minimum()])
                        ? (c = b = this.minimum())
                        : this.op(b, "<", f[this.maximum()]) && (c = b = this.maximum())),
                c);
        }),
        (e.prototype.animate = function (b) {
            this.trigger("translate"),
                (this.state.inMotion = this.speed() > 0),
                this.support3d
                    ? this.$stage.css({
                        transform: "translate3d(" + b + "px,0px, 0px)",
                        transition: this.speed() / 1e3 + "s"
                    })
                    : this.state.isTouch
                        ? this.$stage.css({ left: b + "px" })
                        : this.$stage.animate({ left: b }, this.speed() / 1e3, this.settings.fallbackEasing, a.proxy(function () {
                            this.state.inMotion && this.transitionEnd();
                        }, this));
        }),
        (e.prototype.current = function (a) {
            if (a === d)
                return this._current;
            if (0 === this._items.length)
                return d;
            if (((a = this.normalize(a)), this._current !== a)) {
                var b = this.trigger("change", {
                    property: { name: "position", value: a }
                });
                b.data !== d && (a = this.normalize(b.data)),
                    (this._current = a),
                    this.invalidate("position"),
                    this.trigger("changed", {
                        property: { name: "position", value: this._current }
                    });
            }
            return this._current;
        }),
        (e.prototype.invalidate = function (a) {
            this._invalidated[a] = !0;
        }),
        (e.prototype.reset = function (a) {
            (a = this.normalize(a)),
                a !== d &&
                    ((this._speed = 0),
                        (this._current = a),
                        this.suppress(["translate", "translated"]),
                        this.animate(this.coordinates(a)),
                        this.release(["translate", "translated"]));
        }),
        (e.prototype.normalize = function (b, c) {
            var e = c ? this._items.length : this._items.length + this._clones.length;
            return !a.isNumeric(b) || 1 > e
                ? d
                : (b = this._clones.length
                    ? ((b % e) + e) % e
                    : Math.max(this.minimum(c), Math.min(this.maximum(c), b)));
        }),
        (e.prototype.relative = function (a) {
            return ((a = this.normalize(a)),
                (a -= this._clones.length / 2),
                this.normalize(a, !0));
        }),
        (e.prototype.maximum = function (a) {
            var b, c, d, e = 0, f = this.settings;
            if (a)
                return this._items.length - 1;
            if (!f.loop && f.center)
                b = this._items.length - 1;
            else if (f.loop || f.center)
                if (f.loop || f.center)
                    b = this._items.length + f.items;
                else {
                    if (!f.autoWidth && !f.merge)
                        throw "Can not detect maximum absolute position.";
                    for (revert = f.rtl ? 1 : -1,
                        c = this.$stage.width() - this.$element.width(); (d = this.coordinates(e)) && !(d * revert >= c);)
                        b = ++e;
                }
            else
                b = this._items.length - f.items;
            return b;
        }),
        (e.prototype.minimum = function (a) {
            return a ? 0 : this._clones.length / 2;
        }),
        (e.prototype.items = function (a) {
            return a === d
                ? this._items.slice()
                : ((a = this.normalize(a, !0)), this._items[a]);
        }),
        (e.prototype.mergers = function (a) {
            return a === d
                ? this._mergers.slice()
                : ((a = this.normalize(a, !0)), this._mergers[a]);
        }),
        (e.prototype.clones = function (b) {
            var c = this._clones.length / 2, e = c + this._items.length, f = function (a) {
                return a % 2 === 0 ? e + a / 2 : c - (a + 1) / 2;
            };
            return b === d
                ? a.map(this._clones, function (a, b) {
                    return f(b);
                })
                : a.map(this._clones, function (a, c) {
                    return a === b ? f(c) : null;
                });
        }),
        (e.prototype.speed = function (a) {
            return a !== d && (this._speed = a), this._speed;
        }),
        (e.prototype.coordinates = function (b) {
            var c = null;
            return b === d
                ? a.map(this._coordinates, a.proxy(function (a, b) {
                    return this.coordinates(b);
                }, this))
                : (this.settings.center
                    ? ((c = this._coordinates[b]),
                        (c +=
                            ((this.width() - c + (this._coordinates[b - 1] || 0)) / 2) *
                                (this.settings.rtl ? -1 : 1)))
                    : (c = this._coordinates[b - 1] || 0),
                    c);
        }),
        (e.prototype.duration = function (a, b, c) {
            return (Math.min(Math.max(Math.abs(b - a), 1), 6) *
                Math.abs(c || this.settings.smartSpeed));
        }),
        (e.prototype.to = function (c, d) {
            if (this.settings.loop) {
                var e = c - this.relative(this.current()), f = this.current(), g = this.current(), h = this.current() + e, i = 0 > g - h ? !0 : !1, j = this._clones.length + this._items.length;
                h < this.settings.items && i === !1
                    ? ((f = g + this._items.length), this.reset(f))
                    : h >= j - this.settings.items &&
                        i === !0 &&
                        ((f = g - this._items.length), this.reset(f)),
                    b.clearTimeout(this.e._goToLoop),
                    (this.e._goToLoop = b.setTimeout(a.proxy(function () {
                        this.speed(this.duration(this.current(), f + e, d)),
                            this.current(f + e),
                            this.update();
                    }, this), 30));
            }
            else
                this.speed(this.duration(this.current(), c, d)),
                    this.current(c),
                    this.update();
        }),
        (e.prototype.next = function (a) {
            (a = a || !1), this.to(this.relative(this.current()) + 1, a);
        }),
        (e.prototype.prev = function (a) {
            (a = a || !1), this.to(this.relative(this.current()) - 1, a);
        }),
        (e.prototype.transitionEnd = function (a) {
            return a !== d &&
                (a.stopPropagation(),
                    (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0))
                ? !1
                : ((this.state.inMotion = !1), void this.trigger("translated"));
        }),
        (e.prototype.viewport = function () {
            var d;
            if (this.options.responsiveBaseElement !== b)
                d = a(this.options.responsiveBaseElement).width();
            else if (b.innerWidth)
                d = b.innerWidth;
            else {
                if (!c.documentElement || !c.documentElement.clientWidth)
                    throw "Can not detect viewport width.";
                d = c.documentElement.clientWidth;
            }
            return d;
        }),
        (e.prototype.replace = function (b) {
            this.$stage.empty(),
                (this._items = []),
                b && (b = b instanceof jQuery ? b : a(b)),
                this.settings.nestedItemSelector &&
                    (b = b.find("." + this.settings.nestedItemSelector)),
                b
                    .filter(function () {
                    return 1 === this.nodeType;
                })
                    .each(a.proxy(function (a, b) {
                    (b = this.prepare(b)),
                        this.$stage.append(b),
                        this._items.push(b),
                        this._mergers.push(1 *
                            b
                                .find("[data-merge]")
                                .andSelf("[data-merge]")
                                .attr("data-merge") || 1);
                }, this)),
                this.reset(a.isNumeric(this.settings.startPosition)
                    ? this.settings.startPosition
                    : 0),
                this.invalidate("items");
        }),
        (e.prototype.add = function (a, b) {
            (b = b === d ? this._items.length : this.normalize(b, !0)),
                this.trigger("add", { content: a, position: b }),
                0 === this._items.length || b === this._items.length
                    ? (this.$stage.append(a),
                        this._items.push(a),
                        this._mergers.push(1 *
                            a
                                .find("[data-merge]")
                                .andSelf("[data-merge]")
                                .attr("data-merge") || 1))
                    : (this._items[b].before(a),
                        this._items.splice(b, 0, a),
                        this._mergers.splice(b, 0, 1 *
                            a
                                .find("[data-merge]")
                                .andSelf("[data-merge]")
                                .attr("data-merge") || 1)),
                this.invalidate("items"),
                this.trigger("added", { content: a, position: b });
        }),
        (e.prototype.remove = function (a) {
            (a = this.normalize(a, !0)),
                a !== d &&
                    (this.trigger("remove", { content: this._items[a], position: a }),
                        this._items[a].remove(),
                        this._items.splice(a, 1),
                        this._mergers.splice(a, 1),
                        this.invalidate("items"),
                        this.trigger("removed", { content: null, position: a }));
        }),
        (e.prototype.addTriggerableEvents = function () {
            var b = a.proxy(function (b, c) {
                return a.proxy(function (a) {
                    a.relatedTarget !== this &&
                        (this.suppress([c]),
                            b.apply(this, [].slice.call(arguments, 1)),
                            this.release([c]));
                }, this);
            }, this);
            a.each({
                next: this.next,
                prev: this.prev,
                to: this.to,
                destroy: this.destroy,
                refresh: this.refresh,
                replace: this.replace,
                add: this.add,
                remove: this.remove
            }, a.proxy(function (a, c) {
                this.$element.on(a + ".owl.carousel", b(c, a + ".owl.carousel"));
            }, this));
        }),
        (e.prototype.watchVisibility = function () {
            function c(a) {
                return a.offsetWidth > 0 && a.offsetHeight > 0;
            }
            function d() {
                c(this.$element.get(0)) &&
                    (this.$element.removeClass("owl-hidden"),
                        this.refresh(),
                        b.clearInterval(this.e._checkVisibile));
            }
            c(this.$element.get(0)) ||
                (this.$element.addClass("owl-hidden"),
                    b.clearInterval(this.e._checkVisibile),
                    (this.e._checkVisibile = b.setInterval(a.proxy(d, this), 500)));
        }),
        (e.prototype.preloadAutoWidthImages = function (b) {
            var c, d, e, f;
            (c = 0),
                (d = this),
                b.each(function (g, h) {
                    (e = a(h)),
                        (f = new Image()),
                        (f.onload = function () {
                            c++,
                                e.attr("src", f.src),
                                e.css("opacity", 1),
                                c >= b.length && ((d.state.imagesLoaded = !0), d.initialize());
                        }),
                        (f.src =
                            e.attr("src") || e.attr("data-src") || e.attr("data-src-retina"));
                });
        }),
        (e.prototype.destroy = function () {
            this.$element.hasClass(this.settings.themeClass) &&
                this.$element.removeClass(this.settings.themeClass),
                this.settings.responsive !== !1 && a(b).off("resize.owl.carousel"),
                this.transitionEndVendor &&
                    this.off(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd);
            for (var d in this._plugins)
                this._plugins[d].destroy();
            (this.settings.mouseDrag || this.settings.touchDrag) &&
                (this.$stage.off("mousedown touchstart touchcancel"),
                    a(c).off(".owl.dragEvents"),
                    (this.$stage.get(0).onselectstart = function () { }),
                    this.$stage.off("dragstart", function () {
                        return !1;
                    })),
                this.$element.off(".owl"),
                this.$stage.children(".cloned").remove(),
                (this.e = null),
                this.$element.removeData("owlCarousel"),
                this.$stage
                    .children()
                    .contents()
                    .unwrap(),
                this.$stage.children().unwrap(),
                this.$stage.unwrap();
        }),
        (e.prototype.op = function (a, b, c) {
            var d = this.settings.rtl;
            switch (b) {
                case "<":
                    return d ? a > c : c > a;
                case ">":
                    return d ? c > a : a > c;
                case ">=":
                    return d ? c >= a : a >= c;
                case "<=":
                    return d ? a >= c : c >= a;
            }
        }),
        (e.prototype.on = function (a, b, c, d) {
            a.addEventListener
                ? a.addEventListener(b, c, d)
                : a.attachEvent && a.attachEvent("on" + b, c);
        }),
        (e.prototype.off = function (a, b, c, d) {
            a.removeEventListener
                ? a.removeEventListener(b, c, d)
                : a.detachEvent && a.detachEvent("on" + b, c);
        }),
        (e.prototype.trigger = function (b, c, d) {
            var e = { item: { count: this._items.length, index: this.current() } }, f = a.camelCase(a
                .grep(["on", b, d], function (a) {
                return a;
            })
                .join("-")
                .toLowerCase()), g = a.Event([b, "owl", d || "carousel"].join(".").toLowerCase(), a.extend({ relatedTarget: this }, e, c));
            return (this._supress[b] ||
                (a.each(this._plugins, function (a, b) {
                    b.onTrigger && b.onTrigger(g);
                }),
                    this.$element.trigger(g),
                    this.settings &&
                        "function" == typeof this.settings[f] &&
                        this.settings[f].apply(this, g)),
                g);
        }),
        (e.prototype.suppress = function (b) {
            a.each(b, a.proxy(function (a, b) {
                this._supress[b] = !0;
            }, this));
        }),
        (e.prototype.release = function (b) {
            a.each(b, a.proxy(function (a, b) {
                delete this._supress[b];
            }, this));
        }),
        (e.prototype.browserSupport = function () {
            if (((this.support3d = j()), this.support3d)) {
                this.transformVendor = i();
                var a = [
                    "transitionend",
                    "webkitTransitionEnd",
                    "transitionend",
                    "oTransitionEnd"
                ];
                (this.transitionEndVendor = a[h()]),
                    (this.vendorName = this.transformVendor.replace(/Transform/i, "")),
                    (this.vendorName =
                        "" !== this.vendorName
                            ? "-" + this.vendorName.toLowerCase() + "-"
                            : "");
            }
            this.state.orientation = b.orientation;
        }),
        (a.fn.owlCarousel = function (b) {
            return this.each(function () {
                a(this).data("owlCarousel") ||
                    a(this).data("owlCarousel", new e(this, b));
            });
        }),
        (a.fn.owlCarousel.Constructor = e);
})(window.Zepto || window.jQuery, window, document),
    (function (a, b) {
        var c = function (b) {
            (this._core = b),
                (this._loaded = []),
                (this._handlers = {
                    "initialized.owl.carousel change.owl.carousel": a.proxy(function (b) {
                        if (b.namespace &&
                            this._core.settings &&
                            this._core.settings.lazyLoad &&
                            ((b.property && "position" == b.property.name) ||
                                "initialized" == b.type))
                            for (var c = this._core.settings, d = (c.center && Math.ceil(c.items / 2)) || c.items, e = (c.center && -1 * d) || 0, f = ((b.property && b.property.value) || this._core.current()) +
                                e, g = this._core.clones().length, h = a.proxy(function (a, b) {
                                this.load(b);
                            }, this); e++ < d;)
                                this.load(g / 2 + this._core.relative(f)),
                                    g && a.each(this._core.clones(this._core.relative(f++)), h);
                    }, this)
                }),
                (this._core.options = a.extend({}, c.Defaults, this._core.options)),
                this._core.$element.on(this._handlers);
        };
        (c.Defaults = { lazyLoad: !1 }),
            (c.prototype.load = function (c) {
                var d = this._core.$stage.children().eq(c), e = d && d.find(".owl-lazy");
                !e ||
                    a.inArray(d.get(0), this._loaded) > -1 ||
                    (e.each(a.proxy(function (c, d) {
                        var e, f = a(d), g = (b.devicePixelRatio > 1 && f.attr("data-src-retina")) ||
                            f.attr("data-src");
                        this._core.trigger("load", { element: f, url: g }, "lazy"),
                            f.is("img")
                                ? f
                                    .one("load.owl.lazy", a.proxy(function () {
                                    f.css("opacity", 1),
                                        this._core.trigger("loaded", { element: f, url: g }, "lazy");
                                }, this))
                                    .attr("src", g)
                                : ((e = new Image()),
                                    (e.onload = a.proxy(function () {
                                        f.css({
                                            "background-image": "url(" + g + ")",
                                            opacity: "1"
                                        }),
                                            this._core.trigger("loaded", { element: f, url: g }, "lazy");
                                    }, this)),
                                    (e.src = g));
                    }, this)),
                        this._loaded.push(d.get(0)));
            }),
            (c.prototype.destroy = function () {
                var a, b;
                for (a in this.handlers)
                    this._core.$element.off(a, this.handlers[a]);
                for (b in Object.getOwnPropertyNames(this))
                    "function" != typeof this[b] && (this[b] = null);
            }),
            (a.fn.owlCarousel.Constructor.Plugins.Lazy = c);
    })(window.Zepto || window.jQuery, window, document),
    (function (a) {
        var b = function (c) {
            (this._core = c),
                (this._handlers = {
                    "initialized.owl.carousel": a.proxy(function () {
                        this._core.settings.autoHeight && this.update();
                    }, this),
                    "changed.owl.carousel": a.proxy(function (a) {
                        this._core.settings.autoHeight &&
                            "position" == a.property.name &&
                            this.update();
                    }, this),
                    "loaded.owl.lazy": a.proxy(function (a) {
                        this._core.settings.autoHeight &&
                            a.element.closest("." + this._core.settings.itemClass) ===
                                this._core.$stage.children().eq(this._core.current()) &&
                            this.update();
                    }, this)
                }),
                (this._core.options = a.extend({}, b.Defaults, this._core.options)),
                this._core.$element.on(this._handlers);
        };
        (b.Defaults = { autoHeight: !1, autoHeightClass: "owl-height" }),
            (b.prototype.update = function () {
                this._core.$stage
                    .parent()
                    .height(this._core.$stage
                    .children()
                    .eq(this._core.current())
                    .height())
                    .addClass(this._core.settings.autoHeightClass);
            }),
            (b.prototype.destroy = function () {
                var a, b;
                for (a in this._handlers)
                    this._core.$element.off(a, this._handlers[a]);
                for (b in Object.getOwnPropertyNames(this))
                    "function" != typeof this[b] && (this[b] = null);
            }),
            (a.fn.owlCarousel.Constructor.Plugins.AutoHeight = b);
    })(window.Zepto || window.jQuery, window, document),
    (function (a, b, c) {
        var d = function (b) {
            (this._core = b),
                (this._videos = {}),
                (this._playing = null),
                (this._fullscreen = !1),
                (this._handlers = {
                    "resize.owl.carousel": a.proxy(function (a) {
                        this._core.settings.video &&
                            !this.isInFullScreen() &&
                            a.preventDefault();
                    }, this),
                    "refresh.owl.carousel changed.owl.carousel": a.proxy(function () {
                        this._playing && this.stop();
                    }, this),
                    "prepared.owl.carousel": a.proxy(function (b) {
                        var c = a(b.content).find(".owl-video");
                        c.length && (c.css("display", "none"), this.fetch(c, a(b.content)));
                    }, this)
                }),
                (this._core.options = a.extend({}, d.Defaults, this._core.options)),
                this._core.$element.on(this._handlers),
                this._core.$element.on("click.owl.video", ".owl-video-play-icon", a.proxy(function (a) {
                    this.play(a);
                }, this));
        };
        (d.Defaults = { video: !1, videoHeight: !1, videoWidth: !1 }),
            (d.prototype.fetch = function (a, b) {
                var c = a.attr("data-vimeo-id") ? "vimeo" : "youtube", d = a.attr("data-vimeo-id") || a.attr("data-youtube-id"), e = a.attr("data-width") || this._core.settings.videoWidth, f = a.attr("data-height") || this._core.settings.videoHeight, g = a.attr("href");
                if (!g)
                    throw new Error("Missing video URL.");
                if (((d = g.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/)),
                    d[3].indexOf("youtu") > -1))
                    c = "youtube";
                else {
                    if (!(d[3].indexOf("vimeo") > -1))
                        throw new Error("Video URL not supported.");
                    c = "vimeo";
                }
                (d = d[6]),
                    (this._videos[g] = { type: c, id: d, width: e, height: f }),
                    b.attr("data-video", g),
                    this.thumbnail(a, this._videos[g]);
            }),
            (d.prototype.thumbnail = function (b, c) {
                var d, e, f, g = c.width && c.height
                    ? 'style="width:' + c.width + "px;height:" + c.height + 'px;"'
                    : "", h = b.find("img"), i = "src", j = "", k = this._core.settings, l = function (a) {
                    (e = '<div class="owl-video-play-icon"></div>'),
                        (d = k.lazyLoad
                            ? '<div class="owl-video-tn ' +
                                j +
                                '" ' +
                                i +
                                '="' +
                                a +
                                '"></div>'
                            : '<div class="owl-video-tn" style="opacity:1;background-image:url(' +
                                a +
                                ')"></div>'),
                        b.after(d),
                        b.after(e);
                };
                return (b.wrap('<div class="owl-video-wrapper"' + g + "></div>"),
                    this._core.settings.lazyLoad && ((i = "data-src"), (j = "owl-lazy")),
                    h.length
                        ? (l(h.attr(i)), h.remove(), !1)
                        : void ("youtube" === c.type
                            ? ((f = "http://img.youtube.com/vi/" + c.id + "/hqdefault.jpg"),
                                l(f))
                            : "vimeo" === c.type &&
                                a.ajax({
                                    type: "GET",
                                    url: "http://vimeo.com/api/v2/video/" + c.id + ".json",
                                    jsonp: "callback",
                                    dataType: "jsonp",
                                    success: function (a) {
                                        (f = a[0].thumbnail_large), l(f);
                                    }
                                })));
            }),
            (d.prototype.stop = function () {
                this._core.trigger("stop", null, "video"),
                    this._playing.find(".owl-video-frame").remove(),
                    this._playing.removeClass("owl-video-playing"),
                    (this._playing = null);
            }),
            (d.prototype.play = function (b) {
                this._core.trigger("play", null, "video"), this._playing && this.stop();
                var c, d, e = a(b.target || b.srcElement), f = e.closest("." + this._core.settings.itemClass), g = this._videos[f.attr("data-video")], h = g.width || "100%", i = g.height || this._core.$stage.height();
                "youtube" === g.type
                    ? (c =
                        '<iframe width="' +
                            h +
                            '" height="' +
                            i +
                            '" src="http://www.youtube.com/embed/' +
                            g.id +
                            "?autoplay=1&v=" +
                            g.id +
                            '" frameborder="0" allowfullscreen></iframe>')
                    : "vimeo" === g.type &&
                        (c =
                            '<iframe src="http://player.vimeo.com/video/' +
                                g.id +
                                '?autoplay=1" width="' +
                                h +
                                '" height="' +
                                i +
                                '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'),
                    f.addClass("owl-video-playing"),
                    (this._playing = f),
                    (d = a('<div style="height:' +
                        i +
                        "px; width:" +
                        h +
                        'px" class="owl-video-frame">' +
                        c +
                        "</div>")),
                    e.after(d);
            }),
            (d.prototype.isInFullScreen = function () {
                var d = c.fullscreenElement ||
                    c.mozFullScreenElement ||
                    c.webkitFullscreenElement;
                return (d &&
                    a(d)
                        .parent()
                        .hasClass("owl-video-frame") &&
                    (this._core.speed(0), (this._fullscreen = !0)),
                    d && this._fullscreen && this._playing
                        ? !1
                        : this._fullscreen
                            ? ((this._fullscreen = !1), !1)
                            : this._playing && this._core.state.orientation !== b.orientation
                                ? ((this._core.state.orientation = b.orientation), !1)
                                : !0);
            }),
            (d.prototype.destroy = function () {
                var a, b;
                this._core.$element.off("click.owl.video");
                for (a in this._handlers)
                    this._core.$element.off(a, this._handlers[a]);
                for (b in Object.getOwnPropertyNames(this))
                    "function" != typeof this[b] && (this[b] = null);
            }),
            (a.fn.owlCarousel.Constructor.Plugins.Video = d);
    })(window.Zepto || window.jQuery, window, document),
    (function (a, b, c, d) {
        var e = function (b) {
            (this.core = b),
                (this.core.options = a.extend({}, e.Defaults, this.core.options)),
                (this.swapping = !0),
                (this.previous = d),
                (this.next = d),
                (this.handlers = {
                    "change.owl.carousel": a.proxy(function (a) {
                        "position" == a.property.name &&
                            ((this.previous = this.core.current()),
                                (this.next = a.property.value));
                    }, this),
                    "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(function (a) {
                        this.swapping = "translated" == a.type;
                    }, this),
                    "translate.owl.carousel": a.proxy(function () {
                        this.swapping &&
                            (this.core.options.animateOut || this.core.options.animateIn) &&
                            this.swap();
                    }, this)
                }),
                this.core.$element.on(this.handlers);
        };
        (e.Defaults = { animateOut: !1, animateIn: !1 }),
            (e.prototype.swap = function () {
                if (1 === this.core.settings.items && this.core.support3d) {
                    this.core.speed(0);
                    var b, c = a.proxy(this.clear, this), d = this.core.$stage.children().eq(this.previous), e = this.core.$stage.children().eq(this.next), f = this.core.settings.animateIn, g = this.core.settings.animateOut;
                    this.core.current() !== this.previous &&
                        (g &&
                            ((b =
                                this.core.coordinates(this.previous) -
                                    this.core.coordinates(this.next)),
                                d
                                    .css({ left: b + "px" })
                                    .addClass("animated owl-animated-out")
                                    .addClass(g)
                                    .one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", c)),
                            f &&
                                e
                                    .addClass("animated owl-animated-in")
                                    .addClass(f)
                                    .one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", c));
                }
            }),
            (e.prototype.clear = function (b) {
                a(b.target)
                    .css({ left: "" })
                    .removeClass("animated owl-animated-out owl-animated-in")
                    .removeClass(this.core.settings.animateIn)
                    .removeClass(this.core.settings.animateOut),
                    this.core.transitionEnd();
            }),
            (e.prototype.destroy = function () {
                var a, b;
                for (a in this.handlers)
                    this.core.$element.off(a, this.handlers[a]);
                for (b in Object.getOwnPropertyNames(this))
                    "function" != typeof this[b] && (this[b] = null);
            }),
            (a.fn.owlCarousel.Constructor.Plugins.Animate = e);
    })(window.Zepto || window.jQuery, window, document),
    (function (a, b, c) {
        var d = function (b) {
            (this.core = b),
                (this.core.options = a.extend({}, d.Defaults, this.core.options)),
                (this.handlers = {
                    "translated.owl.carousel refreshed.owl.carousel": a.proxy(function () {
                        this.autoplay();
                    }, this),
                    "play.owl.autoplay": a.proxy(function (a, b, c) {
                        this.play(b, c);
                    }, this),
                    "stop.owl.autoplay": a.proxy(function () {
                        this.stop();
                    }, this),
                    "mouseover.owl.autoplay": a.proxy(function () {
                        this.core.settings.autoplayHoverPause && this.pause();
                    }, this),
                    "mouseleave.owl.autoplay": a.proxy(function () {
                        this.core.settings.autoplayHoverPause && this.autoplay();
                    }, this)
                }),
                this.core.$element.on(this.handlers);
        };
        (d.Defaults = {
            autoplay: !1,
            autoplayTimeout: 5e3,
            autoplayHoverPause: !1,
            autoplaySpeed: !1
        }),
            (d.prototype.autoplay = function () {
                this.core.settings.autoplay && !this.core.state.videoPlay
                    ? (b.clearInterval(this.interval),
                        (this.interval = b.setInterval(a.proxy(function () {
                            this.play();
                        }, this), this.core.settings.autoplayTimeout)))
                    : b.clearInterval(this.interval);
            }),
            (d.prototype.play = function () {
                return c.hidden === !0 ||
                    this.core.state.isTouch ||
                    this.core.state.isScrolling ||
                    this.core.state.isSwiping ||
                    this.core.state.inMotion
                    ? void 0
                    : this.core.settings.autoplay === !1
                        ? void b.clearInterval(this.interval)
                        : void this.core.next(this.core.settings.autoplaySpeed);
            }),
            (d.prototype.stop = function () {
                b.clearInterval(this.interval);
            }),
            (d.prototype.pause = function () {
                b.clearInterval(this.interval);
            }),
            (d.prototype.destroy = function () {
                var a, c;
                b.clearInterval(this.interval);
                for (a in this.handlers)
                    this.core.$element.off(a, this.handlers[a]);
                for (c in Object.getOwnPropertyNames(this))
                    "function" != typeof this[c] && (this[c] = null);
            }),
            (a.fn.owlCarousel.Constructor.Plugins.autoplay = d);
    })(window.Zepto || window.jQuery, window, document),
    (function (a) {
        "use strict";
        var b = function (c) {
            (this._core = c),
                (this._initialized = !1),
                (this._pages = []),
                (this._controls = {}),
                (this._templates = []),
                (this.$element = this._core.$element),
                (this._overrides = {
                    next: this._core.next,
                    prev: this._core.prev,
                    to: this._core.to
                }),
                (this._handlers = {
                    "prepared.owl.carousel": a.proxy(function (b) {
                        this._core.settings.dotsData &&
                            this._templates.push(a(b.content)
                                .find("[data-dot]")
                                .andSelf("[data-dot]")
                                .attr("data-dot"));
                    }, this),
                    "add.owl.carousel": a.proxy(function (b) {
                        this._core.settings.dotsData &&
                            this._templates.splice(b.position, 0, a(b.content)
                                .find("[data-dot]")
                                .andSelf("[data-dot]")
                                .attr("data-dot"));
                    }, this),
                    "remove.owl.carousel prepared.owl.carousel": a.proxy(function (a) {
                        this._core.settings.dotsData &&
                            this._templates.splice(a.position, 1);
                    }, this),
                    "change.owl.carousel": a.proxy(function (a) {
                        if ("position" == a.property.name &&
                            !this._core.state.revert &&
                            !this._core.settings.loop &&
                            this._core.settings.navRewind) {
                            var b = this._core.current(), c = this._core.maximum(), d = this._core.minimum();
                            a.data =
                                a.property.value > c
                                    ? b >= c
                                        ? d
                                        : c
                                    : a.property.value < d
                                        ? c
                                        : a.property.value;
                        }
                    }, this),
                    "changed.owl.carousel": a.proxy(function (a) {
                        "position" == a.property.name && this.draw();
                    }, this),
                    "refreshed.owl.carousel": a.proxy(function () {
                        this._initialized || (this.initialize(), (this._initialized = !0)),
                            this._core.trigger("refresh", null, "navigation"),
                            this.update(),
                            this.draw(),
                            this._core.trigger("refreshed", null, "navigation");
                    }, this)
                }),
                (this._core.options = a.extend({}, b.Defaults, this._core.options)),
                this.$element.on(this._handlers);
        };
        (b.Defaults = {
            nav: !1,
            navRewind: !0,
            navText: ["prev", "next"],
            navSpeed: !1,
            navElement: "div",
            navContainer: !1,
            navContainerClass: "owl-nav",
            navClass: ["owl-prev", "owl-next"],
            slideBy: 1,
            dotClass: "owl-dot",
            dotsClass: "owl-dots",
            dots: !0,
            dotsEach: !1,
            dotData: !1,
            dotsSpeed: !1,
            dotsContainer: !1,
            controlsClass: "owl-controls"
        }),
            (b.prototype.initialize = function () {
                var b, c, d = this._core.settings;
                d.dotsData ||
                    (this._templates = [
                        a("<div>")
                            .addClass(d.dotClass)
                            .append(a("<span>"))
                            .prop("outerHTML")
                    ]),
                    (d.navContainer && d.dotsContainer) ||
                        (this._controls.$container = a("<div>")
                            .addClass(d.controlsClass)
                            .appendTo(this.$element)),
                    (this._controls.$indicators = d.dotsContainer
                        ? a(d.dotsContainer)
                        : a("<div>")
                            .hide()
                            .addClass(d.dotsClass)
                            .appendTo(this._controls.$container)),
                    this._controls.$indicators.on("click", "div", a.proxy(function (b) {
                        var c = a(b.target)
                            .parent()
                            .is(this._controls.$indicators)
                            ? a(b.target).index()
                            : a(b.target)
                                .parent()
                                .index();
                        b.preventDefault(), this.to(c, d.dotsSpeed);
                    }, this)),
                    (b = d.navContainer
                        ? a(d.navContainer)
                        : a("<div>")
                            .addClass(d.navContainerClass)
                            .prependTo(this._controls.$container)),
                    (this._controls.$next = a("<" + d.navElement + ">")),
                    (this._controls.$previous = this._controls.$next.clone()),
                    this._controls.$previous
                        .addClass(d.navClass[0])
                        .html(d.navText[0])
                        .hide()
                        .prependTo(b)
                        .on("click", a.proxy(function () {
                        this.prev(d.navSpeed);
                    }, this)),
                    this._controls.$next
                        .addClass(d.navClass[1])
                        .html(d.navText[1])
                        .hide()
                        .appendTo(b)
                        .on("click", a.proxy(function () {
                        this.next(d.navSpeed);
                    }, this));
                for (c in this._overrides)
                    this._core[c] = a.proxy(this[c], this);
            }),
            (b.prototype.destroy = function () {
                var a, b, c, d;
                for (a in this._handlers)
                    this.$element.off(a, this._handlers[a]);
                for (b in this._controls)
                    this._controls[b].remove();
                for (d in this.overides)
                    this._core[d] = this._overrides[d];
                for (c in Object.getOwnPropertyNames(this))
                    "function" != typeof this[c] && (this[c] = null);
            }),
            (b.prototype.update = function () {
                var a, b, c, d = this._core.settings, e = this._core.clones().length / 2, f = e + this._core.items().length, g = d.center || d.autoWidth || d.dotData ? 1 : d.dotsEach || d.items;
                if (("page" !== d.slideBy && (d.slideBy = Math.min(d.slideBy, d.items)),
                    d.dots || "page" == d.slideBy))
                    for (this._pages = [], a = e, b = 0, c = 0; f > a; a++)
                        (b >= g || 0 === b) &&
                            (this._pages.push({ start: a - e, end: a - e + g - 1 }),
                                (b = 0),
                                ++c),
                            (b += this._core.mergers(this._core.relative(a)));
            }),
            (b.prototype.draw = function () {
                var b, c, d = "", e = this._core.settings, f = (this._core.$stage.children(),
                    this._core.relative(this._core.current()));
                if ((!e.nav ||
                    e.loop ||
                    e.navRewind ||
                    (this._controls.$previous.toggleClass("disabled", 0 >= f),
                        this._controls.$next.toggleClass("disabled", f >= this._core.maximum())),
                    this._controls.$previous.toggle(e.nav),
                    this._controls.$next.toggle(e.nav),
                    e.dots)) {
                    if (((b =
                        this._pages.length -
                            this._controls.$indicators.children().length),
                        e.dotData && 0 !== b)) {
                        for (c = 0; c < this._controls.$indicators.children().length; c++)
                            d += this._templates[this._core.relative(c)];
                        this._controls.$indicators.html(d);
                    }
                    else
                        b > 0
                            ? ((d = new Array(b + 1).join(this._templates[0])),
                                this._controls.$indicators.append(d))
                            : 0 > b &&
                                this._controls.$indicators
                                    .children()
                                    .slice(b)
                                    .remove();
                    this._controls.$indicators.find(".active").removeClass("active"),
                        this._controls.$indicators
                            .children()
                            .eq(a.inArray(this.current(), this._pages))
                            .addClass("active");
                }
                this._controls.$indicators.toggle(e.dots);
            }),
            (b.prototype.onTrigger = function (b) {
                var c = this._core.settings;
                b.page = {
                    index: a.inArray(this.current(), this._pages),
                    count: this._pages.length,
                    size: c &&
                        (c.center || c.autoWidth || c.dotData ? 1 : c.dotsEach || c.items)
                };
            }),
            (b.prototype.current = function () {
                var b = this._core.relative(this._core.current());
                return a
                    .grep(this._pages, function (a) {
                    return a.start <= b && a.end >= b;
                })
                    .pop();
            }),
            (b.prototype.getPosition = function (b) {
                var c, d, e = this._core.settings;
                return ("page" == e.slideBy
                    ? ((c = a.inArray(this.current(), this._pages)),
                        (d = this._pages.length),
                        b ? ++c : --c,
                        (c = this._pages[((c % d) + d) % d].start))
                    : ((c = this._core.relative(this._core.current())),
                        (d = this._core.items().length),
                        b ? (c += e.slideBy) : (c -= e.slideBy)),
                    c);
            }),
            (b.prototype.next = function (b) {
                a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b);
            }),
            (b.prototype.prev = function (b) {
                a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b);
            }),
            (b.prototype.to = function (b, c, d) {
                var e;
                d
                    ? a.proxy(this._overrides.to, this._core)(b, c)
                    : ((e = this._pages.length),
                        a.proxy(this._overrides.to, this._core)(this._pages[((b % e) + e) % e].start, c));
            }),
            (a.fn.owlCarousel.Constructor.Plugins.Navigation = b);
    })(window.Zepto || window.jQuery, window, document),
    (function (a, b) {
        "use strict";
        var c = function (d) {
            (this._core = d),
                (this._hashes = {}),
                (this.$element = this._core.$element),
                (this._handlers = {
                    "initialized.owl.carousel": a.proxy(function () {
                        "URLHash" == this._core.settings.startPosition &&
                            a(b).trigger("hashchange.owl.navigation");
                    }, this),
                    "prepared.owl.carousel": a.proxy(function (b) {
                        var c = a(b.content)
                            .find("[data-hash]")
                            .andSelf("[data-hash]")
                            .attr("data-hash");
                        this._hashes[c] = b.content;
                    }, this)
                }),
                (this._core.options = a.extend({}, c.Defaults, this._core.options)),
                this.$element.on(this._handlers),
                a(b).on("hashchange.owl.navigation", a.proxy(function () {
                    var a = b.location.hash.substring(1), c = this._core.$stage.children(), d = (this._hashes[a] && c.index(this._hashes[a])) || 0;
                    return a ? void this._core.to(d, !1, !0) : !1;
                }, this));
        };
        (c.Defaults = { URLhashListener: !1 }),
            (c.prototype.destroy = function () {
                var c, d;
                a(b).off("hashchange.owl.navigation");
                for (c in this._handlers)
                    this._core.$element.off(c, this._handlers[c]);
                for (d in Object.getOwnPropertyNames(this))
                    "function" != typeof this[d] && (this[d] = null);
            }),
            (a.fn.owlCarousel.Constructor.Plugins.Hash = c);
    })(window.Zepto || window.jQuery, window, document);
/* Simple JavaScript Inheritance
 * By John Resig http://ejohn.org/
 * MIT Licensed.
 */
!(function () {
    var t = !1;
    (window.JQClass = function () { }),
        (JQClass.classes = {}),
        (JQClass.extend = function e(n) {
            function a() {
                !t && this._init && this._init.apply(this, arguments);
            }
            var s = this.prototype;
            t = !0;
            var i = new this();
            t = !1;
            for (var r in n)
                i[r] =
                    "function" == typeof n[r] && "function" == typeof s[r]
                        ? (function (t, e) {
                            return function () {
                                var n = this._super;
                                this._super = function (e) {
                                    return s[t].apply(this, e || []);
                                };
                                var a = e.apply(this, arguments);
                                return (this._super = n), a;
                            };
                        })(r, n[r])
                        : n[r];
            return ((a.prototype = i), (a.prototype.constructor = a), (a.extend = e), a);
        });
})(),
    (function ($) {
        function camelCase(t) {
            return t.replace(/-([a-z])/g, function (t, e) {
                return e.toUpperCase();
            });
        }
        (JQClass.classes.JQPlugin = JQClass.extend({
            name: "plugin",
            defaultOptions: {},
            regionalOptions: {},
            _getters: [],
            _getMarker: function () {
                return "is-" + this.name;
            },
            _init: function () {
                $.extend(this.defaultOptions, (this.regionalOptions && this.regionalOptions[""]) || {});
                var t = camelCase(this.name);
                ($[t] = this),
                    ($.fn[t] = function (e) {
                        var n = Array.prototype.slice.call(arguments, 1);
                        return $[t]._isNotChained(e, n)
                            ? $[t][e].apply($[t], [this[0]].concat(n))
                            : this.each(function () {
                                if ("string" == typeof e) {
                                    if ("_" === e[0] || !$[t][e])
                                        throw "Unknown method: " + e;
                                    $[t][e].apply($[t], [this].concat(n));
                                }
                                else
                                    $[t]._attach(this, e);
                            });
                    });
            },
            setDefaults: function (t) {
                $.extend(this.defaultOptions, t || {});
            },
            _isNotChained: function (t, e) {
                return "option" === t &&
                    (0 === e.length || (1 === e.length && "string" == typeof e[0]))
                    ? !0
                    : $.inArray(t, this._getters) > -1;
            },
            _attach: function (t, e) {
                if (((t = $(t)), !t.hasClass(this._getMarker()))) {
                    t.addClass(this._getMarker()),
                        (e = $.extend({}, this.defaultOptions, this._getMetadata(t), e || {}));
                    var n = $.extend({ name: this.name, elem: t, options: e }, this._instSettings(t, e));
                    t.data(this.name, n), this._postAttach(t, n), this.option(t, e);
                }
            },
            _instSettings: function (t, e) {
                return {};
            },
            _postAttach: function (t, e) { },
            _getMetadata: function (elem) {
                try {
                    var data = elem.data(this.name.toLowerCase()) || "";
                    (data = data.replace(/'/g, '"')),
                        (data = data.replace(/([a-zA-Z0-9]+):/g, function (t, e, n) {
                            var a = data.substring(0, n).match(/"/g);
                            return a && a.length % 2 !== 0 ? e + ":" : '"' + e + '":';
                        })),
                        (data = $.parseJSON("{" + data + "}"));
                    for (var name in data) {
                        var value = data[name];
                        "string" == typeof value &&
                            value.match(/^new Date\((.*)\)$/) &&
                            (data[name] = eval(value));
                    }
                    return data;
                }
                catch (e) {
                    return {};
                }
            },
            _getInst: function (t) {
                return $(t).data(this.name) || {};
            },
            option: function (t, e, n) {
                t = $(t);
                var a = t.data(this.name);
                if (!e || ("string" == typeof e && null == n)) {
                    var s = (a || {}).options;
                    return s && e ? s[e] : s;
                }
                if (t.hasClass(this._getMarker())) {
                    var s = e || {};
                    "string" == typeof e && ((s = {}), (s[e] = n)),
                        this._optionsChanged(t, a, s),
                        $.extend(a.options, s);
                }
            },
            _optionsChanged: function (t, e, n) { },
            destroy: function (t) {
                (t = $(t)),
                    t.hasClass(this._getMarker()) &&
                        (this._preDestroy(t, this._getInst(t)),
                            t.removeData(this.name).removeClass(this._getMarker()));
            },
            _preDestroy: function (t, e) { }
        })),
            ($.JQPlugin = {
                createPlugin: function (t, e) {
                    "object" == typeof t && ((e = t), (t = "JQPlugin")),
                        (t = camelCase(t));
                    var n = camelCase(e.name);
                    (JQClass.classes[n] = JQClass.classes[t].extend(e)),
                        new JQClass.classes[n]();
                }
            });
    })(jQuery);
/* http://keith-wood.name/countdown.html
 * Countdown for jQuery v2.0.2.
 * Written by Keith Wood (kbwood{at}iinet.com.au) January 2008.
 * Available under the MIT (http://keith-wood.name/licence.html) license.
 */
(function ($) {
    var w = "countdown";
    var Y = 0;
    var O = 1;
    var W = 2;
    var D = 3;
    var H = 4;
    var M = 5;
    var S = 6;
    $.JQPlugin.createPlugin({
        name: w,
        defaultOptions: {
            until: null,
            since: null,
            timezone: null,
            serverSync: null,
            format: "dHMS",
            layout: "",
            compact: false,
            padZeroes: false,
            significant: 0,
            description: "",
            expiryUrl: "",
            expiryText: "",
            alwaysExpire: false,
            onExpiry: null,
            onTick: null,
            tickInterval: 1
        },
        regionalOptions: {
            "": {
                labels: [
                    "Years",
                    "Months",
                    "Weeks",
                    "Days",
                    "Hours",
                    "Minutes",
                    "Seconds"
                ],
                labels1: ["Year", "Month", "Week", "Day", "Hour", "Minute", "Second"],
                compactLabels: ["y", "m", "w", "d"],
                whichLabels: null,
                digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
                timeSeparator: ":",
                isRTL: false
            }
        },
        _getters: ["getTimes"],
        _rtlClass: w + "-rtl",
        _sectionClass: w + "-section",
        _amountClass: w + "-amount",
        _periodClass: w + "-period",
        _rowClass: w + "-row",
        _holdingClass: w + "-holding",
        _showClass: w + "-show",
        _descrClass: w + "-descr",
        _timerElems: [],
        _init: function () {
            var c = this;
            this._super();
            this._serverSyncs = [];
            var d = typeof Date.now == "function"
                ? Date.now
                : function () {
                    return new Date().getTime();
                };
            var e = window.performance && typeof window.performance.now == "function";
            function timerCallBack(a) {
                var b = a < 1e12
                    ? e
                        ? performance.now() + performance.timing.navigationStart
                        : d()
                    : a || d();
                if (b - g >= 1000) {
                    c._updateElems();
                    g = b;
                }
                f(timerCallBack);
            }
            var f = window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                window.oRequestAnimationFrame ||
                window.msRequestAnimationFrame ||
                null;
            var g = 0;
            if (!f || $.noRequestAnimationFrame) {
                $.noRequestAnimationFrame = null;
                setInterval(function () {
                    c._updateElems();
                }, 980);
            }
            else {
                g =
                    window.animationStartTime ||
                        window.webkitAnimationStartTime ||
                        window.mozAnimationStartTime ||
                        window.oAnimationStartTime ||
                        window.msAnimationStartTime ||
                        d();
                f(timerCallBack);
            }
        },
        UTCDate: function (a, b, c, e, f, g, h, i) {
            if (typeof b == "object" && b.constructor == Date) {
                i = b.getMilliseconds();
                h = b.getSeconds();
                g = b.getMinutes();
                f = b.getHours();
                e = b.getDate();
                c = b.getMonth();
                b = b.getFullYear();
            }
            var d = new Date();
            d.setUTCFullYear(b);
            d.setUTCDate(1);
            d.setUTCMonth(c || 0);
            d.setUTCDate(e || 1);
            d.setUTCHours(f || 0);
            d.setUTCMinutes((g || 0) - (Math.abs(a) < 30 ? a * 60 : a));
            d.setUTCSeconds(h || 0);
            d.setUTCMilliseconds(i || 0);
            return d;
        },
        periodsToSeconds: function (a) {
            return (a[0] * 31557600 +
                a[1] * 2629800 +
                a[2] * 604800 +
                a[3] * 86400 +
                a[4] * 3600 +
                a[5] * 60 +
                a[6]);
        },
        resync: function () {
            var d = this;
            $("." + this._getMarker()).each(function () {
                var a = $.data(this, d.name);
                if (a.options.serverSync) {
                    var b = null;
                    for (var i = 0; i < d._serverSyncs.length; i++) {
                        if (d._serverSyncs[i][0] == a.options.serverSync) {
                            b = d._serverSyncs[i];
                            break;
                        }
                    }
                    if (b[2] == null) {
                        var c = $.isFunction(a.options.serverSync)
                            ? a.options.serverSync.apply(this, [])
                            : null;
                        b[2] = (c ? new Date().getTime() - c.getTime() : 0) - b[1];
                    }
                    if (a._since) {
                        a._since.setMilliseconds(a._since.getMilliseconds() + b[2]);
                    }
                    a._until.setMilliseconds(a._until.getMilliseconds() + b[2]);
                }
            });
            for (var i = 0; i < d._serverSyncs.length; i++) {
                if (d._serverSyncs[i][2] != null) {
                    d._serverSyncs[i][1] += d._serverSyncs[i][2];
                    delete d._serverSyncs[i][2];
                }
            }
        },
        _instSettings: function (a, b) {
            return { _periods: [0, 0, 0, 0, 0, 0, 0] };
        },
        _addElem: function (a) {
            if (!this._hasElem(a)) {
                this._timerElems.push(a);
            }
        },
        _hasElem: function (a) {
            return $.inArray(a, this._timerElems) > -1;
        },
        _removeElem: function (b) {
            this._timerElems = $.map(this._timerElems, function (a) {
                return a == b ? null : a;
            });
        },
        _updateElems: function () {
            for (var i = this._timerElems.length - 1; i >= 0; i--) {
                this._updateCountdown(this._timerElems[i]);
            }
        },
        _optionsChanged: function (a, b, c) {
            if (c.layout) {
                c.layout = c.layout.replace(/&lt;/g, "<").replace(/&gt;/g, ">");
            }
            this._resetExtraLabels(b.options, c);
            var d = b.options.timezone != c.timezone;
            $.extend(b.options, c);
            this._adjustSettings(a, b, c.until != null || c.since != null || d);
            var e = new Date();
            if ((b._since && b._since < e) || (b._until && b._until > e)) {
                this._addElem(a[0]);
            }
            this._updateCountdown(a, b);
        },
        _updateCountdown: function (a, b) {
            a = a.jquery ? a : $(a);
            b = b || this._getInst(a);
            if (!b) {
                return;
            }
            a.html(this._generateHTML(b)).toggleClass(this._rtlClass, b.options.isRTL);
            if ($.isFunction(b.options.onTick)) {
                var c = b._hold != "lap"
                    ? b._periods
                    : this._calculatePeriods(b, b._show, b.options.significant, new Date());
                if (b.options.tickInterval == 1 ||
                    this.periodsToSeconds(c) % b.options.tickInterval == 0) {
                    b.options.onTick.apply(a[0], [c]);
                }
            }
            var d = b._hold != "pause" &&
                (b._since
                    ? b._now.getTime() < b._since.getTime()
                    : b._now.getTime() >= b._until.getTime());
            if (d && !b._expiring) {
                b._expiring = true;
                if (this._hasElem(a[0]) || b.options.alwaysExpire) {
                    this._removeElem(a[0]);
                    if ($.isFunction(b.options.onExpiry)) {
                        b.options.onExpiry.apply(a[0], []);
                    }
                    if (b.options.expiryText) {
                        var e = b.options.layout;
                        b.options.layout = b.options.expiryText;
                        this._updateCountdown(a[0], b);
                        b.options.layout = e;
                    }
                    if (b.options.expiryUrl) {
                        window.location = b.options.expiryUrl;
                    }
                }
                b._expiring = false;
            }
            else if (b._hold == "pause") {
                this._removeElem(a[0]);
            }
        },
        _resetExtraLabels: function (a, b) {
            for (var n in b) {
                if (n.match(/[Ll]abels[02-9]|compactLabels1/)) {
                    a[n] = b[n];
                }
            }
            for (var n in a) {
                if (n.match(/[Ll]abels[02-9]|compactLabels1/) &&
                    typeof b[n] === "undefined") {
                    a[n] = null;
                }
            }
        },
        _adjustSettings: function (a, b, c) {
            var d = null;
            for (var i = 0; i < this._serverSyncs.length; i++) {
                if (this._serverSyncs[i][0] == b.options.serverSync) {
                    d = this._serverSyncs[i][1];
                    break;
                }
            }
            if (d != null) {
                var e = b.options.serverSync ? d : 0;
                var f = new Date();
            }
            else {
                var g = $.isFunction(b.options.serverSync)
                    ? b.options.serverSync.apply(a[0], [])
                    : null;
                var f = new Date();
                var e = g ? f.getTime() - g.getTime() : 0;
                this._serverSyncs.push([b.options.serverSync, e]);
            }
            var h = b.options.timezone;
            h = h == null ? -f.getTimezoneOffset() : h;
            if (c || (!c && b._until == null && b._since == null)) {
                b._since = b.options.since;
                if (b._since != null) {
                    b._since = this.UTCDate(h, this._determineTime(b._since, null));
                    if (b._since && e) {
                        b._since.setMilliseconds(b._since.getMilliseconds() + e);
                    }
                }
                b._until = this.UTCDate(h, this._determineTime(b.options.until, f));
                if (e) {
                    b._until.setMilliseconds(b._until.getMilliseconds() + e);
                }
            }
            b._show = this._determineShow(b);
        },
        _preDestroy: function (a, b) {
            this._removeElem(a[0]);
            a.empty();
        },
        pause: function (a) {
            this._hold(a, "pause");
        },
        lap: function (a) {
            this._hold(a, "lap");
        },
        resume: function (a) {
            this._hold(a, null);
        },
        toggle: function (a) {
            var b = $.data(a, this.name) || {};
            this[!b._hold ? "pause" : "resume"](a);
        },
        toggleLap: function (a) {
            var b = $.data(a, this.name) || {};
            this[!b._hold ? "lap" : "resume"](a);
        },
        _hold: function (a, b) {
            var c = $.data(a, this.name);
            if (c) {
                if (c._hold == "pause" && !b) {
                    c._periods = c._savePeriods;
                    var d = c._since ? "-" : "+";
                    c[c._since ? "_since" : "_until"] = this._determineTime(d +
                        c._periods[0] +
                        "y" +
                        d +
                        c._periods[1] +
                        "o" +
                        d +
                        c._periods[2] +
                        "w" +
                        d +
                        c._periods[3] +
                        "d" +
                        d +
                        c._periods[4] +
                        "h" +
                        d +
                        c._periods[5] +
                        "m" +
                        d +
                        c._periods[6] +
                        "s");
                    this._addElem(a);
                }
                c._hold = b;
                c._savePeriods = b == "pause" ? c._periods : null;
                $.data(a, this.name, c);
                this._updateCountdown(a, c);
            }
        },
        getTimes: function (a) {
            var b = $.data(a, this.name);
            return !b
                ? null
                : b._hold == "pause"
                    ? b._savePeriods
                    : !b._hold
                        ? b._periods
                        : this._calculatePeriods(b, b._show, b.options.significant, new Date());
        },
        _determineTime: function (k, l) {
            var m = this;
            var n = function (a) {
                var b = new Date();
                b.setTime(b.getTime() + a * 1000);
                return b;
            };
            var o = function (a) {
                a = a.toLowerCase();
                var b = new Date();
                var c = b.getFullYear();
                var d = b.getMonth();
                var e = b.getDate();
                var f = b.getHours();
                var g = b.getMinutes();
                var h = b.getSeconds();
                var i = /([+-]?[0-9]+)\s*(s|m|h|d|w|o|y)?/g;
                var j = i.exec(a);
                while (j) {
                    switch (j[2] || "s") {
                        case "s":
                            h += parseInt(j[1], 10);
                            break;
                        case "m":
                            g += parseInt(j[1], 10);
                            break;
                        case "h":
                            f += parseInt(j[1], 10);
                            break;
                        case "d":
                            e += parseInt(j[1], 10);
                            break;
                        case "w":
                            e += parseInt(j[1], 10) * 7;
                            break;
                        case "o":
                            d += parseInt(j[1], 10);
                            e = Math.min(e, m._getDaysInMonth(c, d));
                            break;
                        case "y":
                            c += parseInt(j[1], 10);
                            e = Math.min(e, m._getDaysInMonth(c, d));
                            break;
                    }
                    j = i.exec(a);
                }
                return new Date(c, d, e, f, g, h, 0);
            };
            var p = k == null
                ? l
                : typeof k == "string"
                    ? o(k)
                    : typeof k == "number"
                        ? n(k)
                        : k;
            if (p)
                p.setMilliseconds(0);
            return p;
        },
        _getDaysInMonth: function (a, b) {
            return 32 - new Date(a, b, 32).getDate();
        },
        _normalLabels: function (a) {
            return a;
        },
        _generateHTML: function (c) {
            var d = this;
            c._periods = c._hold
                ? c._periods
                : this._calculatePeriods(c, c._show, c.options.significant, new Date());
            var e = false;
            var f = 0;
            var g = c.options.significant;
            var h = $.extend({}, c._show);
            for (var i = Y; i <= S; i++) {
                e |= c._show[i] == "?" && c._periods[i] > 0;
                h[i] = c._show[i] == "?" && !e ? null : c._show[i];
                f += h[i] ? 1 : 0;
                g -= c._periods[i] > 0 ? 1 : 0;
            }
            var j = [false, false, false, false, false, false, false];
            for (var i = S; i >= Y; i--) {
                if (c._show[i]) {
                    if (c._periods[i]) {
                        j[i] = true;
                    }
                    else {
                        j[i] = g > 0;
                        g--;
                    }
                }
            }
            var k = c.options.compact ? c.options.compactLabels : c.options.labels;
            var l = c.options.whichLabels || this._normalLabels;
            var m = function (a) {
                var b = c.options["compactLabels" + l(c._periods[a])];
                return h[a]
                    ? d._translateDigits(c, c._periods[a]) + (b ? b[a] : k[a]) + " "
                    : "";
            };
            var n = c.options.padZeroes ? 2 : 1;
            var o = function (a) {
                var b = c.options["labels" + l(c._periods[a])];
                return (!c.options.significant && h[a]) ||
                    (c.options.significant && j[a])
                    ? '<span class="' +
                        d._sectionClass +
                        '">' +
                        '<span class="' +
                        d._amountClass +
                        '">' +
                        d._minDigits(c, c._periods[a], n) +
                        "</span>" +
                        '<span class="' +
                        d._periodClass +
                        '">' +
                        (b ? b[a] : k[a]) +
                        "</span></span>"
                    : "";
            };
            return c.options.layout
                ? this._buildLayout(c, h, c.options.layout, c.options.compact, c.options.significant, j)
                : (c.options.compact
                    ? '<span class="' +
                        this._rowClass +
                        " " +
                        this._amountClass +
                        (c._hold ? " " + this._holdingClass : "") +
                        '">' +
                        m(Y) +
                        m(O) +
                        m(W) +
                        m(D) +
                        (h[H] ? this._minDigits(c, c._periods[H], 2) : "") +
                        (h[M]
                            ? (h[H] ? c.options.timeSeparator : "") +
                                this._minDigits(c, c._periods[M], 2)
                            : "") +
                        (h[S]
                            ? (h[H] || h[M] ? c.options.timeSeparator : "") +
                                this._minDigits(c, c._periods[S], 2)
                            : "")
                    : '<span class="' +
                        this._rowClass +
                        " " +
                        this._showClass +
                        (c.options.significant || f) +
                        (c._hold ? " " + this._holdingClass : "") +
                        '">' +
                        o(Y) +
                        o(O) +
                        o(W) +
                        o(D) +
                        o(H) +
                        o(M) +
                        o(S)) +
                    "</span>" +
                    (c.options.description
                        ? '<span class="' +
                            this._rowClass +
                            " " +
                            this._descrClass +
                            '">' +
                            c.options.description +
                            "</span>"
                        : "");
        },
        _buildLayout: function (c, d, e, f, g, h) {
            var j = c.options[f ? "compactLabels" : "labels"];
            var k = c.options.whichLabels || this._normalLabels;
            var l = function (a) {
                return (c.options[(f ? "compactLabels" : "labels") + k(c._periods[a])] || j)[a];
            };
            var m = function (a, b) {
                return c.options.digits[Math.floor(a / b) % 10];
            };
            var o = {
                desc: c.options.description,
                sep: c.options.timeSeparator,
                yl: l(Y),
                yn: this._minDigits(c, c._periods[Y], 1),
                ynn: this._minDigits(c, c._periods[Y], 2),
                ynnn: this._minDigits(c, c._periods[Y], 3),
                y1: m(c._periods[Y], 1),
                y10: m(c._periods[Y], 10),
                y100: m(c._periods[Y], 100),
                y1000: m(c._periods[Y], 1000),
                ol: l(O),
                on: this._minDigits(c, c._periods[O], 1),
                onn: this._minDigits(c, c._periods[O], 2),
                onnn: this._minDigits(c, c._periods[O], 3),
                o1: m(c._periods[O], 1),
                o10: m(c._periods[O], 10),
                o100: m(c._periods[O], 100),
                o1000: m(c._periods[O], 1000),
                wl: l(W),
                wn: this._minDigits(c, c._periods[W], 1),
                wnn: this._minDigits(c, c._periods[W], 2),
                wnnn: this._minDigits(c, c._periods[W], 3),
                w1: m(c._periods[W], 1),
                w10: m(c._periods[W], 10),
                w100: m(c._periods[W], 100),
                w1000: m(c._periods[W], 1000),
                dl: l(D),
                dn: this._minDigits(c, c._periods[D], 1),
                dnn: this._minDigits(c, c._periods[D], 2),
                dnnn: this._minDigits(c, c._periods[D], 3),
                d1: m(c._periods[D], 1),
                d10: m(c._periods[D], 10),
                d100: m(c._periods[D], 100),
                d1000: m(c._periods[D], 1000),
                hl: l(H),
                hn: this._minDigits(c, c._periods[H], 1),
                hnn: this._minDigits(c, c._periods[H], 2),
                hnnn: this._minDigits(c, c._periods[H], 3),
                h1: m(c._periods[H], 1),
                h10: m(c._periods[H], 10),
                h100: m(c._periods[H], 100),
                h1000: m(c._periods[H], 1000),
                ml: l(M),
                mn: this._minDigits(c, c._periods[M], 1),
                mnn: this._minDigits(c, c._periods[M], 2),
                mnnn: this._minDigits(c, c._periods[M], 3),
                m1: m(c._periods[M], 1),
                m10: m(c._periods[M], 10),
                m100: m(c._periods[M], 100),
                m1000: m(c._periods[M], 1000),
                sl: l(S),
                sn: this._minDigits(c, c._periods[S], 1),
                snn: this._minDigits(c, c._periods[S], 2),
                snnn: this._minDigits(c, c._periods[S], 3),
                s1: m(c._periods[S], 1),
                s10: m(c._periods[S], 10),
                s100: m(c._periods[S], 100),
                s1000: m(c._periods[S], 1000)
            };
            var p = e;
            for (var i = Y; i <= S; i++) {
                var q = "yowdhms".charAt(i);
                var r = new RegExp("\\{" + q + "<\\}([\\s\\S]*)\\{" + q + ">\\}", "g");
                p = p.replace(r, (!g && d[i]) || (g && h[i]) ? "$1" : "");
            }
            $.each(o, function (n, v) {
                var a = new RegExp("\\{" + n + "\\}", "g");
                p = p.replace(a, v);
            });
            return p;
        },
        _minDigits: function (a, b, c) {
            b = "" + b;
            if (b.length >= c) {
                return this._translateDigits(a, b);
            }
            b = "0000000000" + b;
            return this._translateDigits(a, b.substr(b.length - c));
        },
        _translateDigits: function (b, c) {
            return ("" + c).replace(/[0-9]/g, function (a) {
                return b.options.digits[a];
            });
        },
        _determineShow: function (a) {
            var b = a.options.format;
            var c = [];
            c[Y] = b.match("y") ? "?" : b.match("Y") ? "!" : null;
            c[O] = b.match("o") ? "?" : b.match("O") ? "!" : null;
            c[W] = b.match("w") ? "?" : b.match("W") ? "!" : null;
            c[D] = b.match("d") ? "?" : b.match("D") ? "!" : null;
            c[H] = b.match("h") ? "?" : b.match("H") ? "!" : null;
            c[M] = b.match("m") ? "?" : b.match("M") ? "!" : null;
            c[S] = b.match("s") ? "?" : b.match("S") ? "!" : null;
            return c;
        },
        _calculatePeriods: function (c, d, e, f) {
            c._now = f;
            c._now.setMilliseconds(0);
            var g = new Date(c._now.getTime());
            if (c._since) {
                if (f.getTime() < c._since.getTime()) {
                    c._now = f = g;
                }
                else {
                    f = c._since;
                }
            }
            else {
                g.setTime(c._until.getTime());
                if (f.getTime() > c._until.getTime()) {
                    c._now = f = g;
                }
            }
            var h = [0, 0, 0, 0, 0, 0, 0];
            if (d[Y] || d[O]) {
                var i = this._getDaysInMonth(f.getFullYear(), f.getMonth());
                var j = this._getDaysInMonth(g.getFullYear(), g.getMonth());
                var k = g.getDate() == f.getDate() ||
                    (g.getDate() >= Math.min(i, j) && f.getDate() >= Math.min(i, j));
                var l = function (a) {
                    return (a.getHours() * 60 + a.getMinutes()) * 60 + a.getSeconds();
                };
                var m = Math.max(0, (g.getFullYear() - f.getFullYear()) * 12 +
                    g.getMonth() -
                    f.getMonth() +
                    ((g.getDate() < f.getDate() && !k) || (k && l(g) < l(f)) ? -1 : 0));
                h[Y] = d[Y] ? Math.floor(m / 12) : 0;
                h[O] = d[O] ? m - h[Y] * 12 : 0;
                f = new Date(f.getTime());
                var n = f.getDate() == i;
                var o = this._getDaysInMonth(f.getFullYear() + h[Y], f.getMonth() + h[O]);
                if (f.getDate() > o) {
                    f.setDate(o);
                }
                f.setFullYear(f.getFullYear() + h[Y]);
                f.setMonth(f.getMonth() + h[O]);
                if (n) {
                    f.setDate(o);
                }
            }
            var p = Math.floor((g.getTime() - f.getTime()) / 1000);
            var q = function (a, b) {
                h[a] = d[a] ? Math.floor(p / b) : 0;
                p -= h[a] * b;
            };
            q(W, 604800);
            q(D, 86400);
            q(H, 3600);
            q(M, 60);
            q(S, 1);
            if (p > 0 && !c._since) {
                var r = [1, 12, 4.3482, 7, 24, 60, 60];
                var s = S;
                var t = 1;
                for (var u = S; u >= Y; u--) {
                    if (d[u]) {
                        if (h[s] >= t) {
                            h[s] = 0;
                            p = 1;
                        }
                        if (p > 0) {
                            h[u]++;
                            p = 0;
                            s = u;
                            t = 1;
                        }
                    }
                    t *= r[u];
                }
            }
            if (e) {
                for (var u = Y; u <= S; u++) {
                    if (e && h[u]) {
                        e--;
                    }
                    else if (!e) {
                        h[u] = 0;
                    }
                }
            }
            return h;
        }
    });
})(jQuery);
/*! jQuery Validation Plugin - v1.15.0 - 2/24/2016
 * http://jqueryvalidation.org/
 * Copyright (c) 2016 Jörn Zaefferer; Licensed MIT */
!(function (a) {
    "function" == typeof define && define.amd
        ? define(["jquery"], a)
        : "object" == typeof module && module.exports
            ? (module.exports = a(require("jquery")))
            : a(jQuery);
})(function (a) {
    a.extend(a.fn, {
        validate: function (b) {
            if (!this.length)
                return void (b &&
                    b.debug &&
                    window.console &&
                    console.warn("Nothing selected, can't validate, returning nothing."));
            var c = a.data(this[0], "validator");
            return c
                ? c
                : (this.attr("novalidate", "novalidate"),
                    (c = new a.validator(b, this[0])),
                    a.data(this[0], "validator", c),
                    c.settings.onsubmit &&
                        (this.on("click.validate", ":submit", function (b) {
                            c.settings.submitHandler && (c.submitButton = b.target),
                                a(this).hasClass("cancel") && (c.cancelSubmit = !0),
                                void 0 !== a(this).attr("formnovalidate") &&
                                    (c.cancelSubmit = !0);
                        }),
                            this.on("submit.validate", function (b) {
                                function d() {
                                    var d, e;
                                    return c.settings.submitHandler
                                        ? (c.submitButton &&
                                            (d = a("<input type='hidden'/>")
                                                .attr("name", c.submitButton.name)
                                                .val(a(c.submitButton).val())
                                                .appendTo(c.currentForm)),
                                            (e = c.settings.submitHandler.call(c, c.currentForm, b)),
                                            c.submitButton && d.remove(),
                                            void 0 !== e ? e : !1)
                                        : !0;
                                }
                                return (c.settings.debug && b.preventDefault(),
                                    c.cancelSubmit
                                        ? ((c.cancelSubmit = !1), d())
                                        : c.form()
                                            ? c.pendingRequest
                                                ? ((c.formSubmitted = !0), !1)
                                                : d()
                                            : (c.focusInvalid(), !1));
                            })),
                    c);
        },
        valid: function () {
            var b, c, d;
            return (a(this[0]).is("form")
                ? (b = this.validate().form())
                : ((d = []),
                    (b = !0),
                    (c = a(this[0].form).validate()),
                    this.each(function () {
                        (b = c.element(this) && b), b || (d = d.concat(c.errorList));
                    }),
                    (c.errorList = d)),
                b);
        },
        rules: function (b, c) {
            if (this.length) {
                var d, e, f, g, h, i, j = this[0];
                if (b)
                    switch (((d = a.data(j.form, "validator").settings),
                        (e = d.rules),
                        (f = a.validator.staticRules(j)),
                        b)) {
                        case "add":
                            a.extend(f, a.validator.normalizeRule(c)),
                                delete f.messages,
                                (e[j.name] = f),
                                c.messages &&
                                    (d.messages[j.name] = a.extend(d.messages[j.name], c.messages));
                            break;
                        case "remove":
                            return c
                                ? ((i = {}),
                                    a.each(c.split(/\s/), function (b, c) {
                                        (i[c] = f[c]),
                                            delete f[c],
                                            "required" === c && a(j).removeAttr("aria-required");
                                    }),
                                    i)
                                : (delete e[j.name], f);
                    }
                return ((g = a.validator.normalizeRules(a.extend({}, a.validator.classRules(j), a.validator.attributeRules(j), a.validator.dataRules(j), a.validator.staticRules(j)), j)),
                    g.required &&
                        ((h = g.required),
                            delete g.required,
                            (g = a.extend({ required: h }, g)),
                            a(j).attr("aria-required", "true")),
                    g.remote &&
                        ((h = g.remote), delete g.remote, (g = a.extend(g, { remote: h }))),
                    g);
            }
        }
    }),
        a.extend(a.expr[":"], {
            blank: function (b) {
                return !a.trim("" + a(b).val());
            },
            filled: function (b) {
                var c = a(b).val();
                return null !== c && !!a.trim("" + c);
            },
            unchecked: function (b) {
                return !a(b).prop("checked");
            }
        }),
        (a.validator = function (b, c) {
            (this.settings = a.extend(!0, {}, a.validator.defaults, b)),
                (this.currentForm = c),
                this.init();
        }),
        (a.validator.format = function (b, c) {
            return 1 === arguments.length
                ? function () {
                    var c = a.makeArray(arguments);
                    return c.unshift(b), a.validator.format.apply(this, c);
                }
                : void 0 === c
                    ? b
                    : (arguments.length > 2 &&
                        c.constructor !== Array &&
                        (c = a.makeArray(arguments).slice(1)),
                        c.constructor !== Array && (c = [c]),
                        a.each(c, function (a, c) {
                            b = b.replace(new RegExp("\\{" + a + "\\}", "g"), function () {
                                return c;
                            });
                        }),
                        b);
        }),
        a.extend(a.validator, {
            defaults: {
                messages: {},
                groups: {},
                rules: {},
                errorClass: "error",
                pendingClass: "pending",
                validClass: "valid",
                errorElement: "label",
                focusCleanup: !1,
                focusInvalid: !0,
                errorContainer: a([]),
                errorLabelContainer: a([]),
                onsubmit: !0,
                ignore: ":hidden",
                ignoreTitle: !1,
                onfocusin: function (a) {
                    (this.lastActive = a),
                        this.settings.focusCleanup &&
                            (this.settings.unhighlight &&
                                this.settings.unhighlight.call(this, a, this.settings.errorClass, this.settings.validClass),
                                this.hideThese(this.errorsFor(a)));
                },
                onfocusout: function (a) {
                    this.checkable(a) ||
                        (!(a.name in this.submitted) && this.optional(a)) ||
                        this.element(a);
                },
                onkeyup: function (b, c) {
                    var d = [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225];
                    (9 === c.which && "" === this.elementValue(b)) ||
                        -1 !== a.inArray(c.keyCode, d) ||
                        ((b.name in this.submitted || b.name in this.invalid) &&
                            this.element(b));
                },
                onclick: function (a) {
                    a.name in this.submitted
                        ? this.element(a)
                        : a.parentNode.name in this.submitted && this.element(a.parentNode);
                },
                highlight: function (b, c, d) {
                    "radio" === b.type
                        ? this.findByName(b.name)
                            .addClass(c)
                            .removeClass(d)
                        : a(b)
                            .addClass(c)
                            .removeClass(d);
                },
                unhighlight: function (b, c, d) {
                    "radio" === b.type
                        ? this.findByName(b.name)
                            .removeClass(c)
                            .addClass(d)
                        : a(b)
                            .removeClass(c)
                            .addClass(d);
                }
            },
            setDefaults: function (b) {
                a.extend(a.validator.defaults, b);
            },
            messages: {
                required: "This field is required.",
                remote: "Please fix this field.",
                email: "Please enter a valid email address.",
                url: "Please enter a valid URL.",
                date: "Please enter a valid date.",
                dateISO: "Please enter a valid date ( ISO ).",
                number: "Please enter a valid number.",
                digits: "Please enter only digits.",
                equalTo: "Please enter the same value again.",
                maxlength: a.validator.format("Please enter no more than {0} characters."),
                minlength: a.validator.format("Please enter at least {0} characters."),
                rangelength: a.validator.format("Please enter a value between {0} and {1} characters long."),
                range: a.validator.format("Please enter a value between {0} and {1}."),
                max: a.validator.format("Please enter a value less than or equal to {0}."),
                min: a.validator.format("Please enter a value greater than or equal to {0}."),
                step: a.validator.format("Please enter a multiple of {0}.")
            },
            autoCreateRanges: !1,
            prototype: {
                init: function () {
                    function b(b) {
                        var c = a.data(this.form, "validator"), d = "on" + b.type.replace(/^validate/, ""), e = c.settings;
                        e[d] && !a(this).is(e.ignore) && e[d].call(c, this, b);
                    }
                    (this.labelContainer = a(this.settings.errorLabelContainer)),
                        (this.errorContext =
                            (this.labelContainer.length && this.labelContainer) ||
                                a(this.currentForm)),
                        (this.containers = a(this.settings.errorContainer).add(this.settings.errorLabelContainer)),
                        (this.submitted = {}),
                        (this.valueCache = {}),
                        (this.pendingRequest = 0),
                        (this.pending = {}),
                        (this.invalid = {}),
                        this.reset();
                    var c, d = (this.groups = {});
                    a.each(this.settings.groups, function (b, c) {
                        "string" == typeof c && (c = c.split(/\s/)),
                            a.each(c, function (a, c) {
                                d[c] = b;
                            });
                    }),
                        (c = this.settings.rules),
                        a.each(c, function (b, d) {
                            c[b] = a.validator.normalizeRule(d);
                        }),
                        a(this.currentForm)
                            .on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable]", b)
                            .on("click.validate", "select, option, [type='radio'], [type='checkbox']", b),
                        this.settings.invalidHandler &&
                            a(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler),
                        a(this.currentForm)
                            .find("[required], [data-rule-required], .required")
                            .attr("aria-required", "true");
                },
                form: function () {
                    return (this.checkForm(),
                        a.extend(this.submitted, this.errorMap),
                        (this.invalid = a.extend({}, this.errorMap)),
                        this.valid() ||
                            a(this.currentForm).triggerHandler("invalid-form", [this]),
                        this.showErrors(),
                        this.valid());
                },
                checkForm: function () {
                    this.prepareForm();
                    for (var a = 0, b = (this.currentElements = this.elements()); b[a]; a++)
                        this.check(b[a]);
                    return this.valid();
                },
                element: function (b) {
                    var c, d, e = this.clean(b), f = this.validationTargetFor(e), g = this, h = !0;
                    return (void 0 === f
                        ? delete this.invalid[e.name]
                        : (this.prepareElement(f),
                            (this.currentElements = a(f)),
                            (d = this.groups[f.name]),
                            d &&
                                a.each(this.groups, function (a, b) {
                                    b === d &&
                                        a !== f.name &&
                                        ((e = g.validationTargetFor(g.clean(g.findByName(a)))),
                                            e &&
                                                e.name in g.invalid &&
                                                (g.currentElements.push(e), (h = h && g.check(e))));
                                }),
                            (c = this.check(f) !== !1),
                            (h = h && c),
                            c ? (this.invalid[f.name] = !1) : (this.invalid[f.name] = !0),
                            this.numberOfInvalids() ||
                                (this.toHide = this.toHide.add(this.containers)),
                            this.showErrors(),
                            a(b).attr("aria-invalid", !c)),
                        h);
                },
                showErrors: function (b) {
                    if (b) {
                        var c = this;
                        a.extend(this.errorMap, b),
                            (this.errorList = a.map(this.errorMap, function (a, b) {
                                return { message: a, element: c.findByName(b)[0] };
                            })),
                            (this.successList = a.grep(this.successList, function (a) {
                                return !(a.name in b);
                            }));
                    }
                    this.settings.showErrors
                        ? this.settings.showErrors.call(this, this.errorMap, this.errorList)
                        : this.defaultShowErrors();
                },
                resetForm: function () {
                    a.fn.resetForm && a(this.currentForm).resetForm(),
                        (this.invalid = {}),
                        (this.submitted = {}),
                        this.prepareForm(),
                        this.hideErrors();
                    var b = this.elements()
                        .removeData("previousValue")
                        .removeAttr("aria-invalid");
                    this.resetElements(b);
                },
                resetElements: function (a) {
                    var b;
                    if (this.settings.unhighlight)
                        for (b = 0; a[b]; b++)
                            this.settings.unhighlight.call(this, a[b], this.settings.errorClass, ""),
                                this.findByName(a[b].name).removeClass(this.settings.validClass);
                    else
                        a.removeClass(this.settings.errorClass).removeClass(this.settings.validClass);
                },
                numberOfInvalids: function () {
                    return this.objectLength(this.invalid);
                },
                objectLength: function (a) {
                    var b, c = 0;
                    for (b in a)
                        a[b] && c++;
                    return c;
                },
                hideErrors: function () {
                    this.hideThese(this.toHide);
                },
                hideThese: function (a) {
                    a.not(this.containers).text(""), this.addWrapper(a).hide();
                },
                valid: function () {
                    return 0 === this.size();
                },
                size: function () {
                    return this.errorList.length;
                },
                focusInvalid: function () {
                    if (this.settings.focusInvalid)
                        try {
                            a(this.findLastActive() ||
                                (this.errorList.length && this.errorList[0].element) ||
                                [])
                                .filter(":visible")
                                .focus()
                                .trigger("focusin");
                        }
                        catch (b) { }
                },
                findLastActive: function () {
                    var b = this.lastActive;
                    return (b &&
                        1 ===
                            a.grep(this.errorList, function (a) {
                                return a.element.name === b.name;
                            }).length &&
                        b);
                },
                elements: function () {
                    var b = this, c = {};
                    return a(this.currentForm)
                        .find("input, select, textarea, [contenteditable]")
                        .not(":submit, :reset, :image, :disabled")
                        .not(this.settings.ignore)
                        .filter(function () {
                        var d = this.name || a(this).attr("name");
                        return (!d &&
                            b.settings.debug &&
                            window.console &&
                            console.error("%o has no name assigned", this),
                            this.hasAttribute("contenteditable") &&
                                (this.form = a(this).closest("form")[0]),
                            d in c || !b.objectLength(a(this).rules())
                                ? !1
                                : ((c[d] = !0), !0));
                    });
                },
                clean: function (b) {
                    return a(b)[0];
                },
                errors: function () {
                    var b = this.settings.errorClass.split(" ").join(".");
                    return a(this.settings.errorElement + "." + b, this.errorContext);
                },
                resetInternals: function () {
                    (this.successList = []),
                        (this.errorList = []),
                        (this.errorMap = {}),
                        (this.toShow = a([])),
                        (this.toHide = a([]));
                },
                reset: function () {
                    this.resetInternals(), (this.currentElements = a([]));
                },
                prepareForm: function () {
                    this.reset(), (this.toHide = this.errors().add(this.containers));
                },
                prepareElement: function (a) {
                    this.reset(), (this.toHide = this.errorsFor(a));
                },
                elementValue: function (b) {
                    var c, d, e = a(b), f = b.type;
                    return "radio" === f || "checkbox" === f
                        ? this.findByName(b.name)
                            .filter(":checked")
                            .val()
                        : "number" === f && "undefined" != typeof b.validity
                            ? b.validity.badInput
                                ? "NaN"
                                : e.val()
                            : ((c = b.hasAttribute("contenteditable") ? e.text() : e.val()),
                                "file" === f
                                    ? "C:\\fakepath\\" === c.substr(0, 12)
                                        ? c.substr(12)
                                        : ((d = c.lastIndexOf("/")),
                                            d >= 0
                                                ? c.substr(d + 1)
                                                : ((d = c.lastIndexOf("\\")),
                                                    d >= 0 ? c.substr(d + 1) : c))
                                    : "string" == typeof c
                                        ? c.replace(/\r/g, "")
                                        : c);
                },
                check: function (b) {
                    b = this.validationTargetFor(this.clean(b));
                    var c, d, e, f = a(b).rules(), g = a.map(f, function (a, b) {
                        return b;
                    }).length, h = !1, i = this.elementValue(b);
                    if ("function" == typeof f.normalizer) {
                        if (((i = f.normalizer.call(b, i)), "string" != typeof i))
                            throw new TypeError("The normalizer should return a string value.");
                        delete f.normalizer;
                    }
                    for (d in f) {
                        e = { method: d, parameters: f[d] };
                        try {
                            if (((c = a.validator.methods[d].call(this, i, b, e.parameters)),
                                "dependency-mismatch" === c && 1 === g)) {
                                h = !0;
                                continue;
                            }
                            if (((h = !1), "pending" === c))
                                return void (this.toHide = this.toHide.not(this.errorsFor(b)));
                            if (!c)
                                return this.formatAndAdd(b, e), !1;
                        }
                        catch (j) {
                            throw (this.settings.debug &&
                                window.console &&
                                console.log("Exception occurred when checking element " +
                                    b.id +
                                    ", check the '" +
                                    e.method +
                                    "' method.", j),
                                j instanceof TypeError &&
                                    (j.message +=
                                        ".  Exception occurred when checking element " +
                                            b.id +
                                            ", check the '" +
                                            e.method +
                                            "' method."),
                                j);
                        }
                    }
                    if (!h)
                        return this.objectLength(f) && this.successList.push(b), !0;
                },
                customDataMessage: function (b, c) {
                    return (a(b).data("msg" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()) || a(b).data("msg"));
                },
                customMessage: function (a, b) {
                    var c = this.settings.messages[a];
                    return c && (c.constructor === String ? c : c[b]);
                },
                findDefined: function () {
                    for (var a = 0; a < arguments.length; a++)
                        if (void 0 !== arguments[a])
                            return arguments[a];
                },
                defaultMessage: function (b, c) {
                    var d = this.findDefined(this.customMessage(b.name, c.method), this.customDataMessage(b, c.method), (!this.settings.ignoreTitle && b.title) || void 0, a.validator.messages[c.method], "<strong>Warning: No message defined for " + b.name + "</strong>"), e = /\$?\{(\d+)\}/g;
                    return ("function" == typeof d
                        ? (d = d.call(this, c.parameters, b))
                        : e.test(d) &&
                            (d = a.validator.format(d.replace(e, "{$1}"), c.parameters)),
                        d);
                },
                formatAndAdd: function (a, b) {
                    var c = this.defaultMessage(a, b);
                    this.errorList.push({ message: c, element: a, method: b.method }),
                        (this.errorMap[a.name] = c),
                        (this.submitted[a.name] = c);
                },
                addWrapper: function (a) {
                    return (this.settings.wrapper &&
                        (a = a.add(a.parent(this.settings.wrapper))),
                        a);
                },
                defaultShowErrors: function () {
                    var a, b, c;
                    for (a = 0; this.errorList[a]; a++)
                        (c = this.errorList[a]),
                            this.settings.highlight &&
                                this.settings.highlight.call(this, c.element, this.settings.errorClass, this.settings.validClass),
                            this.showLabel(c.element, c.message);
                    if ((this.errorList.length &&
                        (this.toShow = this.toShow.add(this.containers)),
                        this.settings.success))
                        for (a = 0; this.successList[a]; a++)
                            this.showLabel(this.successList[a]);
                    if (this.settings.unhighlight)
                        for (a = 0, b = this.validElements(); b[a]; a++)
                            this.settings.unhighlight.call(this, b[a], this.settings.errorClass, this.settings.validClass);
                    (this.toHide = this.toHide.not(this.toShow)),
                        this.hideErrors(),
                        this.addWrapper(this.toShow).show();
                },
                validElements: function () {
                    return this.currentElements.not(this.invalidElements());
                },
                invalidElements: function () {
                    return a(this.errorList).map(function () {
                        return this.element;
                    });
                },
                showLabel: function (b, c) {
                    var d, e, f, g, h = this.errorsFor(b), i = this.idOrName(b), j = a(b).attr("aria-describedby");
                    h.length
                        ? (h
                            .removeClass(this.settings.validClass)
                            .addClass(this.settings.errorClass),
                            h.html(c))
                        : ((h = a("<" + this.settings.errorElement + ">")
                            .attr("id", i + "-error")
                            .addClass(this.settings.errorClass)
                            .html(c || "")),
                            (d = h),
                            this.settings.wrapper &&
                                (d = h
                                    .hide()
                                    .show()
                                    .wrap("<" + this.settings.wrapper + "/>")
                                    .parent()),
                            this.labelContainer.length
                                ? this.labelContainer.append(d)
                                : this.settings.errorPlacement
                                    ? this.settings.errorPlacement(d, a(b))
                                    : d.insertAfter(b),
                            h.is("label")
                                ? h.attr("for", i)
                                : 0 ===
                                    h.parents("label[for='" + this.escapeCssMeta(i) + "']")
                                        .length &&
                                    ((f = h.attr("id")),
                                        j
                                            ? j.match(new RegExp("\\b" + this.escapeCssMeta(f) + "\\b")) || (j += " " + f)
                                            : (j = f),
                                        a(b).attr("aria-describedby", j),
                                        (e = this.groups[b.name]),
                                        e &&
                                            ((g = this),
                                                a.each(g.groups, function (b, c) {
                                                    c === e &&
                                                        a("[name='" + g.escapeCssMeta(b) + "']", g.currentForm).attr("aria-describedby", h.attr("id"));
                                                })))),
                        !c &&
                            this.settings.success &&
                            (h.text(""),
                                "string" == typeof this.settings.success
                                    ? h.addClass(this.settings.success)
                                    : this.settings.success(h, b)),
                        (this.toShow = this.toShow.add(h));
                },
                errorsFor: function (b) {
                    var c = this.escapeCssMeta(this.idOrName(b)), d = a(b).attr("aria-describedby"), e = "label[for='" + c + "'], label[for='" + c + "'] *";
                    return (d && (e = e + ", #" + this.escapeCssMeta(d).replace(/\s+/g, ", #")),
                        this.errors().filter(e));
                },
                escapeCssMeta: function (a) {
                    return a.replace(/([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g, "\\$1");
                },
                idOrName: function (a) {
                    return (this.groups[a.name] || (this.checkable(a) ? a.name : a.id || a.name));
                },
                validationTargetFor: function (b) {
                    return (this.checkable(b) && (b = this.findByName(b.name)),
                        a(b).not(this.settings.ignore)[0]);
                },
                checkable: function (a) {
                    return /radio|checkbox/i.test(a.type);
                },
                findByName: function (b) {
                    return a(this.currentForm).find("[name='" + this.escapeCssMeta(b) + "']");
                },
                getLength: function (b, c) {
                    switch (c.nodeName.toLowerCase()) {
                        case "select":
                            return a("option:selected", c).length;
                        case "input":
                            if (this.checkable(c))
                                return this.findByName(c.name).filter(":checked").length;
                    }
                    return b.length;
                },
                depend: function (a, b) {
                    return this.dependTypes[typeof a]
                        ? this.dependTypes[typeof a](a, b)
                        : !0;
                },
                dependTypes: {
                    boolean: function (a) {
                        return a;
                    },
                    string: function (b, c) {
                        return !!a(b, c.form).length;
                    },
                    function: function (a, b) {
                        return a(b);
                    }
                },
                optional: function (b) {
                    var c = this.elementValue(b);
                    return (!a.validator.methods.required.call(this, c, b) &&
                        "dependency-mismatch");
                },
                startRequest: function (b) {
                    this.pending[b.name] ||
                        (this.pendingRequest++,
                            a(b).addClass(this.settings.pendingClass),
                            (this.pending[b.name] = !0));
                },
                stopRequest: function (b, c) {
                    this.pendingRequest--,
                        this.pendingRequest < 0 && (this.pendingRequest = 0),
                        delete this.pending[b.name],
                        a(b).removeClass(this.settings.pendingClass),
                        c && 0 === this.pendingRequest && this.formSubmitted && this.form()
                            ? (a(this.currentForm).submit(), (this.formSubmitted = !1))
                            : !c &&
                                0 === this.pendingRequest &&
                                this.formSubmitted &&
                                (a(this.currentForm).triggerHandler("invalid-form", [this]),
                                    (this.formSubmitted = !1));
                },
                previousValue: function (b, c) {
                    return (a.data(b, "previousValue") ||
                        a.data(b, "previousValue", {
                            old: null,
                            valid: !0,
                            message: this.defaultMessage(b, { method: c })
                        }));
                },
                destroy: function () {
                    this.resetForm(),
                        a(this.currentForm)
                            .off(".validate")
                            .removeData("validator")
                            .find(".validate-equalTo-blur")
                            .off(".validate-equalTo")
                            .removeClass("validate-equalTo-blur");
                }
            },
            classRuleSettings: {
                required: { required: !0 },
                email: { email: !0 },
                url: { url: !0 },
                date: { date: !0 },
                dateISO: { dateISO: !0 },
                number: { number: !0 },
                digits: { digits: !0 },
                creditcard: { creditcard: !0 }
            },
            addClassRules: function (b, c) {
                b.constructor === String
                    ? (this.classRuleSettings[b] = c)
                    : a.extend(this.classRuleSettings, b);
            },
            classRules: function (b) {
                var c = {}, d = a(b).attr("class");
                return (d &&
                    a.each(d.split(" "), function () {
                        this in a.validator.classRuleSettings &&
                            a.extend(c, a.validator.classRuleSettings[this]);
                    }),
                    c);
            },
            normalizeAttributeRule: function (a, b, c, d) {
                /min|max|step/.test(c) &&
                    (null === b || /number|range|text/.test(b)) &&
                    ((d = Number(d)), isNaN(d) && (d = void 0)),
                    d || 0 === d ? (a[c] = d) : b === c && "range" !== b && (a[c] = !0);
            },
            attributeRules: function (b) {
                var c, d, e = {}, f = a(b), g = b.getAttribute("type");
                for (c in a.validator.methods)
                    "required" === c
                        ? ((d = b.getAttribute(c)), "" === d && (d = !0), (d = !!d))
                        : (d = f.attr(c)),
                        this.normalizeAttributeRule(e, g, c, d);
                return (e.maxlength &&
                    /-1|2147483647|524288/.test(e.maxlength) &&
                    delete e.maxlength,
                    e);
            },
            dataRules: function (b) {
                var c, d, e = {}, f = a(b), g = b.getAttribute("type");
                for (c in a.validator.methods)
                    (d = f.data("rule" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase())),
                        this.normalizeAttributeRule(e, g, c, d);
                return e;
            },
            staticRules: function (b) {
                var c = {}, d = a.data(b.form, "validator");
                return (d.settings.rules &&
                    (c = a.validator.normalizeRule(d.settings.rules[b.name]) || {}),
                    c);
            },
            normalizeRules: function (b, c) {
                return (a.each(b, function (d, e) {
                    if (e === !1)
                        return void delete b[d];
                    if (e.param || e.depends) {
                        var f = !0;
                        switch (typeof e.depends) {
                            case "string":
                                f = !!a(e.depends, c.form).length;
                                break;
                            case "function":
                                f = e.depends.call(c, c);
                        }
                        f
                            ? (b[d] = void 0 !== e.param ? e.param : !0)
                            : (a.data(c.form, "validator").resetElements(a(c)),
                                delete b[d]);
                    }
                }),
                    a.each(b, function (d, e) {
                        b[d] = a.isFunction(e) && "normalizer" !== d ? e(c) : e;
                    }),
                    a.each(["minlength", "maxlength"], function () {
                        b[this] && (b[this] = Number(b[this]));
                    }),
                    a.each(["rangelength", "range"], function () {
                        var c;
                        b[this] &&
                            (a.isArray(b[this])
                                ? (b[this] = [Number(b[this][0]), Number(b[this][1])])
                                : "string" == typeof b[this] &&
                                    ((c = b[this].replace(/[\[\]]/g, "").split(/[\s,]+/)),
                                        (b[this] = [Number(c[0]), Number(c[1])])));
                    }),
                    a.validator.autoCreateRanges &&
                        (null != b.min &&
                            null != b.max &&
                            ((b.range = [b.min, b.max]), delete b.min, delete b.max),
                            null != b.minlength &&
                                null != b.maxlength &&
                                ((b.rangelength = [b.minlength, b.maxlength]),
                                    delete b.minlength,
                                    delete b.maxlength)),
                    b);
            },
            normalizeRule: function (b) {
                if ("string" == typeof b) {
                    var c = {};
                    a.each(b.split(/\s/), function () {
                        c[this] = !0;
                    }),
                        (b = c);
                }
                return b;
            },
            addMethod: function (b, c, d) {
                (a.validator.methods[b] = c),
                    (a.validator.messages[b] =
                        void 0 !== d ? d : a.validator.messages[b]),
                    c.length < 3 &&
                        a.validator.addClassRules(b, a.validator.normalizeRule(b));
            },
            methods: {
                required: function (b, c, d) {
                    if (!this.depend(d, c))
                        return "dependency-mismatch";
                    if ("select" === c.nodeName.toLowerCase()) {
                        var e = a(c).val();
                        return e && e.length > 0;
                    }
                    return this.checkable(c) ? this.getLength(b, c) > 0 : b.length > 0;
                },
                email: function (a, b) {
                    return (this.optional(b) ||
                        /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a));
                },
                url: function (a, b) {
                    return (this.optional(b) ||
                        /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(a));
                },
                date: function (a, b) {
                    return (this.optional(b) || !/Invalid|NaN/.test(new Date(a).toString()));
                },
                dateISO: function (a, b) {
                    return (this.optional(b) ||
                        /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a));
                },
                number: function (a, b) {
                    return (this.optional(b) ||
                        /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a));
                },
                digits: function (a, b) {
                    return this.optional(b) || /^\d+$/.test(a);
                },
                minlength: function (b, c, d) {
                    var e = a.isArray(b) ? b.length : this.getLength(b, c);
                    return this.optional(c) || e >= d;
                },
                maxlength: function (b, c, d) {
                    var e = a.isArray(b) ? b.length : this.getLength(b, c);
                    return this.optional(c) || d >= e;
                },
                rangelength: function (b, c, d) {
                    var e = a.isArray(b) ? b.length : this.getLength(b, c);
                    return this.optional(c) || (e >= d[0] && e <= d[1]);
                },
                min: function (a, b, c) {
                    return this.optional(b) || a >= c;
                },
                max: function (a, b, c) {
                    return this.optional(b) || c >= a;
                },
                range: function (a, b, c) {
                    return this.optional(b) || (a >= c[0] && a <= c[1]);
                },
                step: function (b, c, d) {
                    var e = a(c).attr("type"), f = "Step attribute on input type " + e + " is not supported.", g = ["text", "number", "range"], h = new RegExp("\\b" + e + "\\b"), i = e && !h.test(g.join());
                    if (i)
                        throw new Error(f);
                    return this.optional(c) || b % d === 0;
                },
                equalTo: function (b, c, d) {
                    var e = a(d);
                    return (this.settings.onfocusout &&
                        e.not(".validate-equalTo-blur").length &&
                        e
                            .addClass("validate-equalTo-blur")
                            .on("blur.validate-equalTo", function () {
                            a(c).valid();
                        }),
                        b === e.val());
                },
                remote: function (b, c, d, e) {
                    if (this.optional(c))
                        return "dependency-mismatch";
                    e = ("string" == typeof e && e) || "remote";
                    var f, g, h, i = this.previousValue(c, e);
                    return (this.settings.messages[c.name] ||
                        (this.settings.messages[c.name] = {}),
                        (i.originalMessage =
                            i.originalMessage || this.settings.messages[c.name][e]),
                        (this.settings.messages[c.name][e] = i.message),
                        (d = ("string" == typeof d && { url: d }) || d),
                        (h = a.param(a.extend({ data: b }, d.data))),
                        i.old === h
                            ? i.valid
                            : ((i.old = h),
                                (f = this),
                                this.startRequest(c),
                                (g = {}),
                                (g[c.name] = b),
                                a.ajax(a.extend(!0, {
                                    mode: "abort",
                                    port: "validate" + c.name,
                                    dataType: "json",
                                    data: g,
                                    context: f.currentForm,
                                    success: function (a) {
                                        var d, g, h, j = a === !0 || "true" === a;
                                        (f.settings.messages[c.name][e] = i.originalMessage),
                                            j
                                                ? ((h = f.formSubmitted),
                                                    f.resetInternals(),
                                                    (f.toHide = f.errorsFor(c)),
                                                    (f.formSubmitted = h),
                                                    f.successList.push(c),
                                                    (f.invalid[c.name] = !1),
                                                    f.showErrors())
                                                : ((d = {}),
                                                    (g =
                                                        a ||
                                                            f.defaultMessage(c, {
                                                                method: e,
                                                                parameters: b
                                                            })),
                                                    (d[c.name] = i.message = g),
                                                    (f.invalid[c.name] = !0),
                                                    f.showErrors(d)),
                                            (i.valid = j),
                                            f.stopRequest(c, j);
                                    }
                                }, d)),
                                "pending"));
                }
            }
        });
    var b, c = {};
    a.ajaxPrefilter
        ? a.ajaxPrefilter(function (a, b, d) {
            var e = a.port;
            "abort" === a.mode && (c[e] && c[e].abort(), (c[e] = d));
        })
        : ((b = a.ajax),
            (a.ajax = function (d) {
                var e = ("mode" in d ? d : a.ajaxSettings).mode, f = ("port" in d ? d : a.ajaxSettings).port;
                return "abort" === e
                    ? (c[f] && c[f].abort(), (c[f] = b.apply(this, arguments)), c[f])
                    : b.apply(this, arguments);
            }));
});
/*
 * jQuery Easing v1.4.0 - http://gsgd.co.uk/sandbox/jquery/easing/
 * Open source under the BSD License.
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * https://raw.github.com/gdsmith/jquery-easing/master/LICENSE
 */
(function (factory) {
    if (typeof define === "function" && define.amd) {
        define(["jquery"], function ($) {
            return factory($);
        });
    }
    else if (typeof module === "object" && typeof module.exports === "object") {
        exports = factory(require("jquery"));
    }
    else {
        factory(jQuery);
    }
})(function ($) {
    $.easing["jswing"] = $.easing["swing"];
    var pow = Math.pow, sqrt = Math.sqrt, sin = Math.sin, cos = Math.cos, PI = Math.PI, c1 = 1.70158, c2 = c1 * 1.525, c3 = c1 + 1, c4 = (2 * PI) / 3, c5 = (2 * PI) / 4.5;
    function bounceOut(x) {
        var n1 = 7.5625, d1 = 2.75;
        if (x < 1 / d1) {
            return n1 * x * x;
        }
        else if (x < 2 / d1) {
            return n1 * (x -= 1.5 / d1) * x + 0.75;
        }
        else if (x < 2.5 / d1) {
            return n1 * (x -= 2.25 / d1) * x + 0.9375;
        }
        else {
            return n1 * (x -= 2.625 / d1) * x + 0.984375;
        }
    }
    $.extend($.easing, {
        def: "easeOutQuad",
        swing: function (x) {
            return $.easing[$.easing.def](x);
        },
        easeInQuad: function (x) {
            return x * x;
        },
        easeOutQuad: function (x) {
            return 1 - (1 - x) * (1 - x);
        },
        easeInOutQuad: function (x) {
            return x < 0.5 ? 2 * x * x : 1 - pow(-2 * x + 2, 2) / 2;
        },
        easeInCubic: function (x) {
            return x * x * x;
        },
        easeOutCubic: function (x) {
            return 1 - pow(1 - x, 3);
        },
        easeInOutCubic: function (x) {
            return x < 0.5 ? 4 * x * x * x : 1 - pow(-2 * x + 2, 3) / 2;
        },
        easeInQuart: function (x) {
            return x * x * x * x;
        },
        easeOutQuart: function (x) {
            return 1 - pow(1 - x, 4);
        },
        easeInOutQuart: function (x) {
            return x < 0.5 ? 8 * x * x * x * x : 1 - pow(-2 * x + 2, 4) / 2;
        },
        easeInQuint: function (x) {
            return x * x * x * x * x;
        },
        easeOutQuint: function (x) {
            return 1 - pow(1 - x, 5);
        },
        easeInOutQuint: function (x) {
            return x < 0.5 ? 16 * x * x * x * x * x : 1 - pow(-2 * x + 2, 5) / 2;
        },
        easeInSine: function (x) {
            return 1 - cos((x * PI) / 2);
        },
        easeOutSine: function (x) {
            return sin((x * PI) / 2);
        },
        easeInOutSine: function (x) {
            return -(cos(PI * x) - 1) / 2;
        },
        easeInExpo: function (x) {
            return x === 0 ? 0 : pow(2, 10 * x - 10);
        },
        easeOutExpo: function (x) {
            return x === 1 ? 1 : 1 - pow(2, -10 * x);
        },
        easeInOutExpo: function (x) {
            return x === 0
                ? 0
                : x === 1
                    ? 1
                    : x < 0.5
                        ? pow(2, 20 * x - 10) / 2
                        : (2 - pow(2, -20 * x + 10)) / 2;
        },
        easeInCirc: function (x) {
            return 1 - sqrt(1 - pow(x, 2));
        },
        easeOutCirc: function (x) {
            return sqrt(1 - pow(x - 1, 2));
        },
        easeInOutCirc: function (x) {
            return x < 0.5
                ? (1 - sqrt(1 - pow(2 * x, 2))) / 2
                : (sqrt(1 - pow(-2 * x + 2, 2)) + 1) / 2;
        },
        easeInElastic: function (x) {
            return x === 0
                ? 0
                : x === 1
                    ? 1
                    : -pow(2, 10 * x - 10) * sin((x * 10 - 10.75) * c4);
        },
        easeOutElastic: function (x) {
            return x === 0
                ? 0
                : x === 1
                    ? 1
                    : pow(2, -10 * x) * sin((x * 10 - 0.75) * c4) + 1;
        },
        easeInOutElastic: function (x) {
            return x === 0
                ? 0
                : x === 1
                    ? 1
                    : x < 0.5
                        ? -(pow(2, 20 * x - 10) * sin((20 * x - 11.125) * c5)) / 2
                        : (pow(2, -20 * x + 10) * sin((20 * x - 11.125) * c5)) / 2 + 1;
        },
        easeInBack: function (x) {
            return c3 * x * x * x - c1 * x * x;
        },
        easeOutBack: function (x) {
            return 1 + c3 * pow(x - 1, 3) + c1 * pow(x - 1, 2);
        },
        easeInOutBack: function (x) {
            return x < 0.5
                ? (pow(2 * x, 2) * ((c2 + 1) * 2 * x - c2)) / 2
                : (pow(2 * x - 2, 2) * ((c2 + 1) * (x * 2 - 2) + c2) + 2) / 2;
        },
        easeInBounce: function (x) {
            return 1 - bounceOut(1 - x);
        },
        easeOutBounce: bounceOut,
        easeInOutBounce: function (x) {
            return x < 0.5
                ? (1 - bounceOut(1 - 2 * x)) / 2
                : (1 + bounceOut(2 * x - 1)) / 2;
        }
    });
});
/*! WOW - v1.1.3 - 2016-05-06
 * Copyright (c) 2016 Matthieu Aussaguel;*/
(function () {
    var a, b, c, d, e, f = function (a, b) {
        return function () {
            return a.apply(b, arguments);
        };
    }, g = [].indexOf ||
        function (a) {
            for (var b = 0, c = this.length; c > b; b++)
                if (b in this && this[b] === a)
                    return b;
            return -1;
        };
    (b = (function () {
        function a() { }
        return ((a.prototype.extend = function (a, b) {
            var c, d;
            for (c in b)
                (d = b[c]), null == a[c] && (a[c] = d);
            return a;
        }),
            (a.prototype.isMobile = function (a) {
                return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a);
            }),
            (a.prototype.createEvent = function (a, b, c, d) {
                var e;
                return (null == b && (b = !1),
                    null == c && (c = !1),
                    null == d && (d = null),
                    null != document.createEvent
                        ? ((e = document.createEvent("CustomEvent")),
                            e.initCustomEvent(a, b, c, d))
                        : null != document.createEventObject
                            ? ((e = document.createEventObject()), (e.eventType = a))
                            : (e.eventName = a),
                    e);
            }),
            (a.prototype.emitEvent = function (a, b) {
                return null != a.dispatchEvent
                    ? a.dispatchEvent(b)
                    : b in (null != a)
                        ? a[b]()
                        : "on" + b in (null != a)
                            ? a["on" + b]()
                            : void 0;
            }),
            (a.prototype.addEvent = function (a, b, c) {
                return null != a.addEventListener
                    ? a.addEventListener(b, c, !1)
                    : null != a.attachEvent
                        ? a.attachEvent("on" + b, c)
                        : (a[b] = c);
            }),
            (a.prototype.removeEvent = function (a, b, c) {
                return null != a.removeEventListener
                    ? a.removeEventListener(b, c, !1)
                    : null != a.detachEvent
                        ? a.detachEvent("on" + b, c)
                        : delete a[b];
            }),
            (a.prototype.innerHeight = function () {
                return "innerHeight" in window
                    ? window.innerHeight
                    : document.documentElement.clientHeight;
            }),
            a);
    })()),
        (c =
            this.WeakMap ||
                this.MozWeakMap ||
                (c = (function () {
                    function a() {
                        (this.keys = []), (this.values = []);
                    }
                    return ((a.prototype.get = function (a) {
                        var b, c, d, e, f;
                        for (f = this.keys, b = d = 0, e = f.length; e > d; b = ++d)
                            if (((c = f[b]), c === a))
                                return this.values[b];
                    }),
                        (a.prototype.set = function (a, b) {
                            var c, d, e, f, g;
                            for (g = this.keys, c = e = 0, f = g.length; f > e; c = ++e)
                                if (((d = g[c]), d === a))
                                    return void (this.values[c] = b);
                            return this.keys.push(a), this.values.push(b);
                        }),
                        a);
                })())),
        (a =
            this.MutationObserver ||
                this.WebkitMutationObserver ||
                this.MozMutationObserver ||
                (a = (function () {
                    function a() {
                        "undefined" != typeof console &&
                            null !== console &&
                            console.warn("MutationObserver is not supported by your browser."),
                            "undefined" != typeof console &&
                                null !== console &&
                                console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.");
                    }
                    return (a.notSupported = !0), (a.prototype.observe = function () { }), a;
                })())),
        (d =
            this.getComputedStyle ||
                function (a, b) {
                    return ((this.getPropertyValue = function (b) {
                        var c;
                        return ("float" === b && (b = "styleFloat"),
                            e.test(b) &&
                                b.replace(e, function (a, b) {
                                    return b.toUpperCase();
                                }),
                            (null != (c = a.currentStyle) ? c[b] : void 0) || null);
                    }),
                        this);
                }),
        (e = /(\-([a-z]){1})/g),
        (this.WOW = (function () {
            function e(a) {
                null == a && (a = {}),
                    (this.scrollCallback = f(this.scrollCallback, this)),
                    (this.scrollHandler = f(this.scrollHandler, this)),
                    (this.resetAnimation = f(this.resetAnimation, this)),
                    (this.start = f(this.start, this)),
                    (this.scrolled = !0),
                    (this.config = this.util().extend(a, this.defaults)),
                    null != a.scrollContainer &&
                        (this.config.scrollContainer = document.querySelector(a.scrollContainer)),
                    (this.animationNameCache = new c()),
                    (this.wowEvent = this.util().createEvent(this.config.boxClass));
            }
            return ((e.prototype.defaults = {
                boxClass: "wow",
                animateClass: "animated",
                offset: 0,
                mobile: !0,
                live: !0,
                callback: null,
                scrollContainer: null
            }),
                (e.prototype.init = function () {
                    var a;
                    return ((this.element = window.document.documentElement),
                        "interactive" === (a = document.readyState) || "complete" === a
                            ? this.start()
                            : this.util().addEvent(document, "DOMContentLoaded", this.start),
                        (this.finished = []));
                }),
                (e.prototype.start = function () {
                    var b, c, d, e;
                    if (((this.stopped = !1),
                        (this.boxes = function () {
                            var a, c, d, e;
                            for (d = this.element.querySelectorAll("." + this.config.boxClass),
                                e = [],
                                a = 0,
                                c = d.length; c > a; a++)
                                (b = d[a]), e.push(b);
                            return e;
                        }.call(this)),
                        (this.all = function () {
                            var a, c, d, e;
                            for (d = this.boxes, e = [], a = 0, c = d.length; c > a; a++)
                                (b = d[a]), e.push(b);
                            return e;
                        }.call(this)),
                        this.boxes.length))
                        if (this.disabled())
                            this.resetStyle();
                        else
                            for (e = this.boxes, c = 0, d = e.length; d > c; c++)
                                (b = e[c]), this.applyStyle(b, !0);
                    return (this.disabled() ||
                        (this.util().addEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler),
                            this.util().addEvent(window, "resize", this.scrollHandler),
                            (this.interval = setInterval(this.scrollCallback, 50))),
                        this.config.live
                            ? new a((function (a) {
                                return function (b) {
                                    var c, d, e, f, g;
                                    for (g = [], c = 0, d = b.length; d > c; c++)
                                        (f = b[c]),
                                            g.push(function () {
                                                var a, b, c, d;
                                                for (c = f.addedNodes || [],
                                                    d = [],
                                                    a = 0,
                                                    b = c.length; b > a; a++)
                                                    (e = c[a]), d.push(this.doSync(e));
                                                return d;
                                            }.call(a));
                                    return g;
                                };
                            })(this)).observe(document.body, { childList: !0, subtree: !0 })
                            : void 0);
                }),
                (e.prototype.stop = function () {
                    return ((this.stopped = !0),
                        this.util().removeEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler),
                        this.util().removeEvent(window, "resize", this.scrollHandler),
                        null != this.interval ? clearInterval(this.interval) : void 0);
                }),
                (e.prototype.sync = function (b) {
                    return a.notSupported ? this.doSync(this.element) : void 0;
                }),
                (e.prototype.doSync = function (a) {
                    var b, c, d, e, f;
                    if ((null == a && (a = this.element), 1 === a.nodeType)) {
                        for (a = a.parentNode || a,
                            e = a.querySelectorAll("." + this.config.boxClass),
                            f = [],
                            c = 0,
                            d = e.length; d > c; c++)
                            (b = e[c]),
                                g.call(this.all, b) < 0
                                    ? (this.boxes.push(b),
                                        this.all.push(b),
                                        this.stopped || this.disabled()
                                            ? this.resetStyle()
                                            : this.applyStyle(b, !0),
                                        f.push((this.scrolled = !0)))
                                    : f.push(void 0);
                        return f;
                    }
                }),
                (e.prototype.show = function (a) {
                    return (this.applyStyle(a),
                        (a.className = a.className + " " + this.config.animateClass),
                        null != this.config.callback && this.config.callback(a),
                        this.util().emitEvent(a, this.wowEvent),
                        this.util().addEvent(a, "animationend", this.resetAnimation),
                        this.util().addEvent(a, "oanimationend", this.resetAnimation),
                        this.util().addEvent(a, "webkitAnimationEnd", this.resetAnimation),
                        this.util().addEvent(a, "MSAnimationEnd", this.resetAnimation),
                        a);
                }),
                (e.prototype.applyStyle = function (a, b) {
                    var c, d, e;
                    return ((d = a.getAttribute("data-wow-duration")),
                        (c = a.getAttribute("data-wow-delay")),
                        (e = a.getAttribute("data-wow-iteration")),
                        this.animate((function (f) {
                            return function () {
                                return f.customStyle(a, b, d, c, e);
                            };
                        })(this)));
                }),
                (e.prototype.animate = (function () {
                    return "requestAnimationFrame" in window
                        ? function (a) {
                            return window.requestAnimationFrame(a);
                        }
                        : function (a) {
                            return a();
                        };
                })()),
                (e.prototype.resetStyle = function () {
                    var a, b, c, d, e;
                    for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++)
                        (a = d[b]), e.push((a.style.visibility = "visible"));
                    return e;
                }),
                (e.prototype.resetAnimation = function (a) {
                    var b;
                    return a.type.toLowerCase().indexOf("animationend") >= 0
                        ? ((b = a.target || a.srcElement),
                            (b.className = b.className
                                .replace(this.config.animateClass, "")
                                .trim()))
                        : void 0;
                }),
                (e.prototype.customStyle = function (a, b, c, d, e) {
                    return (b && this.cacheAnimationName(a),
                        (a.style.visibility = b ? "hidden" : "visible"),
                        c && this.vendorSet(a.style, { animationDuration: c }),
                        d && this.vendorSet(a.style, { animationDelay: d }),
                        e && this.vendorSet(a.style, { animationIterationCount: e }),
                        this.vendorSet(a.style, {
                            animationName: b ? "none" : this.cachedAnimationName(a)
                        }),
                        a);
                }),
                (e.prototype.vendors = ["moz", "webkit"]),
                (e.prototype.vendorSet = function (a, b) {
                    var c, d, e, f;
                    d = [];
                    for (c in b)
                        (e = b[c]),
                            (a["" + c] = e),
                            d.push(function () {
                                var b, d, g, h;
                                for (g = this.vendors, h = [], b = 0, d = g.length; d > b; b++)
                                    (f = g[b]),
                                        h.push((a["" + f + c.charAt(0).toUpperCase() + c.substr(1)] = e));
                                return h;
                            }.call(this));
                    return d;
                }),
                (e.prototype.vendorCSS = function (a, b) {
                    var c, e, f, g, h, i;
                    for (h = d(a),
                        g = h.getPropertyCSSValue(b),
                        f = this.vendors,
                        c = 0,
                        e = f.length; e > c; c++)
                        (i = f[c]), (g = g || h.getPropertyCSSValue("-" + i + "-" + b));
                    return g;
                }),
                (e.prototype.animationName = function (a) {
                    var b;
                    try {
                        b = this.vendorCSS(a, "animation-name").cssText;
                    }
                    catch (c) {
                        b = d(a).getPropertyValue("animation-name");
                    }
                    return "none" === b ? "" : b;
                }),
                (e.prototype.cacheAnimationName = function (a) {
                    return this.animationNameCache.set(a, this.animationName(a));
                }),
                (e.prototype.cachedAnimationName = function (a) {
                    return this.animationNameCache.get(a);
                }),
                (e.prototype.scrollHandler = function () {
                    return (this.scrolled = !0);
                }),
                (e.prototype.scrollCallback = function () {
                    var a;
                    return !this.scrolled ||
                        ((this.scrolled = !1),
                            (this.boxes = function () {
                                var b, c, d, e;
                                for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++)
                                    (a = d[b]), a && (this.isVisible(a) ? this.show(a) : e.push(a));
                                return e;
                            }.call(this)),
                            this.boxes.length || this.config.live)
                        ? void 0
                        : this.stop();
                }),
                (e.prototype.offsetTop = function (a) {
                    for (var b; void 0 === a.offsetTop;)
                        a = a.parentNode;
                    for (b = a.offsetTop; (a = a.offsetParent);)
                        b += a.offsetTop;
                    return b;
                }),
                (e.prototype.isVisible = function (a) {
                    var b, c, d, e, f;
                    return ((c = a.getAttribute("data-wow-offset") || this.config.offset),
                        (f =
                            (this.config.scrollContainer &&
                                this.config.scrollContainer.scrollTop) ||
                                window.pageYOffset),
                        (e =
                            f +
                                Math.min(this.element.clientHeight, this.util().innerHeight()) -
                                c),
                        (d = this.offsetTop(a)),
                        (b = d + a.clientHeight),
                        e >= d && b >= f);
                }),
                (e.prototype.util = function () {
                    return null != this._util ? this._util : (this._util = new b());
                }),
                (e.prototype.disabled = function () {
                    return (!this.config.mobile && this.util().isMobile(navigator.userAgent));
                }),
                e);
        })());
}.call(this));
/*! Magnific Popup - v1.1.0 - 2016-02-20
 * http://dimsemenov.com/plugins/magnific-popup/
 * Copyright (c) 2016 Dmitry Semenov; */
!(function (a) {
    "function" == typeof define && define.amd
        ? define(["jquery"], a)
        : a("object" == typeof exports
            ? require("jquery")
            : window.jQuery || window.Zepto);
})(function (a) {
    var b, c, d, e, f, g, h = "Close", i = "BeforeClose", j = "AfterClose", k = "BeforeAppend", l = "MarkupParse", m = "Open", n = "Change", o = "mfp", p = "." + o, q = "mfp-ready", r = "mfp-removing", s = "mfp-prevent-close", t = function () { }, u = !!window.jQuery, v = a(window), w = function (a, c) {
        b.ev.on(o + a + p, c);
    }, x = function (b, c, d, e) {
        var f = document.createElement("div");
        return ((f.className = "mfp-" + b),
            d && (f.innerHTML = d),
            e ? c && c.appendChild(f) : ((f = a(f)), c && f.appendTo(c)),
            f);
    }, y = function (c, d) {
        b.ev.triggerHandler(o + c, d),
            b.st.callbacks &&
                ((c = c.charAt(0).toLowerCase() + c.slice(1)),
                    b.st.callbacks[c] &&
                        b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d]));
    }, z = function (c) {
        return ((c === g && b.currTemplate.closeBtn) ||
            ((b.currTemplate.closeBtn = a(b.st.closeMarkup.replace("%title%", b.st.tClose))),
                (g = c)),
            b.currTemplate.closeBtn);
    }, A = function () {
        a.magnificPopup.instance ||
            ((b = new t()), b.init(), (a.magnificPopup.instance = b));
    }, B = function () {
        var a = document.createElement("p").style, b = ["ms", "O", "Moz", "Webkit"];
        if (void 0 !== a.transition)
            return !0;
        for (; b.length;)
            if (b.pop() + "Transition" in a)
                return !0;
        return !1;
    };
    (t.prototype = {
        constructor: t,
        init: function () {
            var c = navigator.appVersion;
            (b.isLowIE = b.isIE8 = document.all && !document.addEventListener),
                (b.isAndroid = /android/gi.test(c)),
                (b.isIOS = /iphone|ipad|ipod/gi.test(c)),
                (b.supportsTransition = B()),
                (b.probablyMobile =
                    b.isAndroid ||
                        b.isIOS ||
                        /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent)),
                (d = a(document)),
                (b.popupsCache = {});
        },
        open: function (c) {
            var e;
            if (c.isObj === !1) {
                (b.items = c.items.toArray()), (b.index = 0);
                var g, h = c.items;
                for (e = 0; e < h.length; e++)
                    if (((g = h[e]), g.parsed && (g = g.el[0]), g === c.el[0])) {
                        b.index = e;
                        break;
                    }
            }
            else
                (b.items = a.isArray(c.items) ? c.items : [c.items]),
                    (b.index = c.index || 0);
            if (b.isOpen)
                return void b.updateItemHTML();
            (b.types = []),
                (f = ""),
                c.mainEl && c.mainEl.length ? (b.ev = c.mainEl.eq(0)) : (b.ev = d),
                c.key
                    ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}),
                        (b.currTemplate = b.popupsCache[c.key]))
                    : (b.currTemplate = {}),
                (b.st = a.extend(!0, {}, a.magnificPopup.defaults, c)),
                (b.fixedContentPos =
                    "auto" === b.st.fixedContentPos
                        ? !b.probablyMobile
                        : b.st.fixedContentPos),
                b.st.modal &&
                    ((b.st.closeOnContentClick = !1),
                        (b.st.closeOnBgClick = !1),
                        (b.st.showCloseBtn = !1),
                        (b.st.enableEscapeKey = !1)),
                b.bgOverlay ||
                    ((b.bgOverlay = x("bg").on("click" + p, function () {
                        b.close();
                    })),
                        (b.wrap = x("wrap")
                            .attr("tabindex", -1)
                            .on("click" + p, function (a) {
                            b._checkIfClose(a.target) && b.close();
                        })),
                        (b.container = x("container", b.wrap))),
                (b.contentContainer = x("content")),
                b.st.preloader &&
                    (b.preloader = x("preloader", b.container, b.st.tLoading));
            var i = a.magnificPopup.modules;
            for (e = 0; e < i.length; e++) {
                var j = i[e];
                (j = j.charAt(0).toUpperCase() + j.slice(1)), b["init" + j].call(b);
            }
            y("BeforeOpen"),
                b.st.showCloseBtn &&
                    (b.st.closeBtnInside
                        ? (w(l, function (a, b, c, d) {
                            c.close_replaceWith = z(d.type);
                        }),
                            (f += " mfp-close-btn-in"))
                        : b.wrap.append(z())),
                b.st.alignTop && (f += " mfp-align-top"),
                b.fixedContentPos
                    ? b.wrap.css({
                        overflow: b.st.overflowY,
                        overflowX: "hidden",
                        overflowY: b.st.overflowY
                    })
                    : b.wrap.css({ top: v.scrollTop(), position: "absolute" }),
                (b.st.fixedBgPos === !1 ||
                    ("auto" === b.st.fixedBgPos && !b.fixedContentPos)) &&
                    b.bgOverlay.css({ height: d.height(), position: "absolute" }),
                b.st.enableEscapeKey &&
                    d.on("keyup" + p, function (a) {
                        27 === a.keyCode && b.close();
                    }),
                v.on("resize" + p, function () {
                    b.updateSize();
                }),
                b.st.closeOnContentClick || (f += " mfp-auto-cursor"),
                f && b.wrap.addClass(f);
            var k = (b.wH = v.height()), n = {};
            if (b.fixedContentPos && b._hasScrollBar(k)) {
                var o = b._getScrollbarSize();
                o && (n.marginRight = o);
            }
            b.fixedContentPos &&
                (b.isIE7
                    ? a("body, html").css("overflow", "hidden")
                    : (n.overflow = "hidden"));
            var r = b.st.mainClass;
            return (b.isIE7 && (r += " mfp-ie7"),
                r && b._addClassToMFP(r),
                b.updateItemHTML(),
                y("BuildControls"),
                a("html").css(n),
                b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)),
                (b._lastFocusedEl = document.activeElement),
                setTimeout(function () {
                    b.content
                        ? (b._addClassToMFP(q), b._setFocus())
                        : b.bgOverlay.addClass(q),
                        d.on("focusin" + p, b._onFocusIn);
                }, 16),
                (b.isOpen = !0),
                b.updateSize(k),
                y(m),
                c);
        },
        close: function () {
            b.isOpen &&
                (y(i),
                    (b.isOpen = !1),
                    b.st.removalDelay && !b.isLowIE && b.supportsTransition
                        ? (b._addClassToMFP(r),
                            setTimeout(function () {
                                b._close();
                            }, b.st.removalDelay))
                        : b._close());
        },
        _close: function () {
            y(h);
            var c = r + " " + q + " ";
            if ((b.bgOverlay.detach(),
                b.wrap.detach(),
                b.container.empty(),
                b.st.mainClass && (c += b.st.mainClass + " "),
                b._removeClassFromMFP(c),
                b.fixedContentPos)) {
                var e = { marginRight: "" };
                b.isIE7 ? a("body, html").css("overflow", "") : (e.overflow = ""),
                    a("html").css(e);
            }
            d.off("keyup" + p + " focusin" + p),
                b.ev.off(p),
                b.wrap.attr("class", "mfp-wrap").removeAttr("style"),
                b.bgOverlay.attr("class", "mfp-bg"),
                b.container.attr("class", "mfp-container"),
                !b.st.showCloseBtn ||
                    (b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0) ||
                    (b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach()),
                b.st.autoFocusLast && b._lastFocusedEl && a(b._lastFocusedEl).focus(),
                (b.currItem = null),
                (b.content = null),
                (b.currTemplate = null),
                (b.prevHeight = 0),
                y(j);
        },
        updateSize: function (a) {
            if (b.isIOS) {
                var c = document.documentElement.clientWidth / window.innerWidth, d = window.innerHeight * c;
                b.wrap.css("height", d), (b.wH = d);
            }
            else
                b.wH = a || v.height();
            b.fixedContentPos || b.wrap.css("height", b.wH), y("Resize");
        },
        updateItemHTML: function () {
            var c = b.items[b.index];
            b.contentContainer.detach(),
                b.content && b.content.detach(),
                c.parsed || (c = b.parseEl(b.index));
            var d = c.type;
            if ((y("BeforeChange", [b.currItem ? b.currItem.type : "", d]),
                (b.currItem = c),
                !b.currTemplate[d])) {
                var f = b.st[d] ? b.st[d].markup : !1;
                y("FirstMarkupParse", f),
                    f ? (b.currTemplate[d] = a(f)) : (b.currTemplate[d] = !0);
            }
            e && e !== c.type && b.container.removeClass("mfp-" + e + "-holder");
            var g = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](c, b.currTemplate[d]);
            b.appendContent(g, d),
                (c.preloaded = !0),
                y(n, c),
                (e = c.type),
                b.container.prepend(b.contentContainer),
                y("AfterChange");
        },
        appendContent: function (a, c) {
            (b.content = a),
                a
                    ? b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0
                        ? b.content.find(".mfp-close").length || b.content.append(z())
                        : (b.content = a)
                    : (b.content = ""),
                y(k),
                b.container.addClass("mfp-" + c + "-holder"),
                b.contentContainer.append(b.content);
        },
        parseEl: function (c) {
            var d, e = b.items[c];
            if ((e.tagName
                ? (e = { el: a(e) })
                : ((d = e.type), (e = { data: e, src: e.src })),
                e.el)) {
                for (var f = b.types, g = 0; g < f.length; g++)
                    if (e.el.hasClass("mfp-" + f[g])) {
                        d = f[g];
                        break;
                    }
                (e.src = e.el.attr("data-mfp-src")),
                    e.src || (e.src = e.el.attr("href"));
            }
            return ((e.type = d || b.st.type || "inline"),
                (e.index = c),
                (e.parsed = !0),
                (b.items[c] = e),
                y("ElementParse", e),
                b.items[c]);
        },
        addGroup: function (a, c) {
            var d = function (d) {
                (d.mfpEl = this), b._openClick(d, a, c);
            };
            c || (c = {});
            var e = "click.magnificPopup";
            (c.mainEl = a),
                c.items
                    ? ((c.isObj = !0), a.off(e).on(e, d))
                    : ((c.isObj = !1),
                        c.delegate
                            ? a.off(e).on(e, c.delegate, d)
                            : ((c.items = a), a.off(e).on(e, d)));
        },
        _openClick: function (c, d, e) {
            var f = void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick;
            if (f ||
                !(2 === c.which || c.ctrlKey || c.metaKey || c.altKey || c.shiftKey)) {
                var g = void 0 !== e.disableOn
                    ? e.disableOn
                    : a.magnificPopup.defaults.disableOn;
                if (g)
                    if (a.isFunction(g)) {
                        if (!g.call(b))
                            return !0;
                    }
                    else if (v.width() < g)
                        return !0;
                c.type && (c.preventDefault(), b.isOpen && c.stopPropagation()),
                    (e.el = a(c.mfpEl)),
                    e.delegate && (e.items = d.find(e.delegate)),
                    b.open(e);
            }
        },
        updateStatus: function (a, d) {
            if (b.preloader) {
                c !== a && b.container.removeClass("mfp-s-" + c),
                    d || "loading" !== a || (d = b.st.tLoading);
                var e = { status: a, text: d };
                y("UpdateStatus", e),
                    (a = e.status),
                    (d = e.text),
                    b.preloader.html(d),
                    b.preloader.find("a").on("click", function (a) {
                        a.stopImmediatePropagation();
                    }),
                    b.container.addClass("mfp-s-" + a),
                    (c = a);
            }
        },
        _checkIfClose: function (c) {
            if (!a(c).hasClass(s)) {
                var d = b.st.closeOnContentClick, e = b.st.closeOnBgClick;
                if (d && e)
                    return !0;
                if (!b.content ||
                    a(c).hasClass("mfp-close") ||
                    (b.preloader && c === b.preloader[0]))
                    return !0;
                if (c === b.content[0] || a.contains(b.content[0], c)) {
                    if (d)
                        return !0;
                }
                else if (e && a.contains(document, c))
                    return !0;
                return !1;
            }
        },
        _addClassToMFP: function (a) {
            b.bgOverlay.addClass(a), b.wrap.addClass(a);
        },
        _removeClassFromMFP: function (a) {
            this.bgOverlay.removeClass(a), b.wrap.removeClass(a);
        },
        _hasScrollBar: function (a) {
            return ((b.isIE7 ? d.height() : document.body.scrollHeight) > (a || v.height()));
        },
        _setFocus: function () {
            (b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus();
        },
        _onFocusIn: function (c) {
            return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target)
                ? void 0
                : (b._setFocus(), !1);
        },
        _parseMarkup: function (b, c, d) {
            var e;
            d.data && (c = a.extend(d.data, c)),
                y(l, [b, c, d]),
                a.each(c, function (c, d) {
                    if (void 0 === d || d === !1)
                        return !0;
                    if (((e = c.split("_")), e.length > 1)) {
                        var f = b.find(p + "-" + e[0]);
                        if (f.length > 0) {
                            var g = e[1];
                            "replaceWith" === g
                                ? f[0] !== d[0] && f.replaceWith(d)
                                : "img" === g
                                    ? f.is("img")
                                        ? f.attr("src", d)
                                        : f.replaceWith(a("<img>")
                                            .attr("src", d)
                                            .attr("class", f.attr("class")))
                                    : f.attr(e[1], d);
                        }
                    }
                    else
                        b.find(p + "-" + c).html(d);
                });
        },
        _getScrollbarSize: function () {
            if (void 0 === b.scrollbarSize) {
                var a = document.createElement("div");
                (a.style.cssText =
                    "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;"),
                    document.body.appendChild(a),
                    (b.scrollbarSize = a.offsetWidth - a.clientWidth),
                    document.body.removeChild(a);
            }
            return b.scrollbarSize;
        }
    }),
        (a.magnificPopup = {
            instance: null,
            proto: t.prototype,
            modules: [],
            open: function (b, c) {
                return (A(),
                    (b = b ? a.extend(!0, {}, b) : {}),
                    (b.isObj = !0),
                    (b.index = c || 0),
                    this.instance.open(b));
            },
            close: function () {
                return a.magnificPopup.instance && a.magnificPopup.instance.close();
            },
            registerModule: function (b, c) {
                c.options && (a.magnificPopup.defaults[b] = c.options),
                    a.extend(this.proto, c.proto),
                    this.modules.push(b);
            },
            defaults: {
                disableOn: 0,
                key: null,
                midClick: !1,
                mainClass: "",
                preloader: !0,
                focus: "",
                closeOnContentClick: !1,
                closeOnBgClick: !0,
                closeBtnInside: !0,
                showCloseBtn: !0,
                enableEscapeKey: !0,
                modal: !1,
                alignTop: !1,
                removalDelay: 0,
                prependTo: null,
                fixedContentPos: "auto",
                fixedBgPos: "auto",
                overflowY: "auto",
                closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
                tClose: "Close (Esc)",
                tLoading: "Loading...",
                autoFocusLast: !0
            }
        }),
        (a.fn.magnificPopup = function (c) {
            A();
            var d = a(this);
            if ("string" == typeof c)
                if ("open" === c) {
                    var e, f = u ? d.data("magnificPopup") : d[0].magnificPopup, g = parseInt(arguments[1], 10) || 0;
                    f.items
                        ? (e = f.items[g])
                        : ((e = d), f.delegate && (e = e.find(f.delegate)), (e = e.eq(g))),
                        b._openClick({ mfpEl: e }, d, f);
                }
                else
                    b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1));
            else
                (c = a.extend(!0, {}, c)),
                    u ? d.data("magnificPopup", c) : (d[0].magnificPopup = c),
                    b.addGroup(d, c);
            return d;
        });
    var C, D, E, F = "inline", G = function () {
        E && (D.after(E.addClass(C)).detach(), (E = null));
    };
    a.magnificPopup.registerModule(F, {
        options: {
            hiddenClass: "hide",
            markup: "",
            tNotFound: "Content not found"
        },
        proto: {
            initInline: function () {
                b.types.push(F),
                    w(h + "." + F, function () {
                        G();
                    });
            },
            getInline: function (c, d) {
                if ((G(), c.src)) {
                    var e = b.st.inline, f = a(c.src);
                    if (f.length) {
                        var g = f[0].parentNode;
                        g &&
                            g.tagName &&
                            (D || ((C = e.hiddenClass), (D = x(C)), (C = "mfp-" + C)),
                                (E = f
                                    .after(D)
                                    .detach()
                                    .removeClass(C))),
                            b.updateStatus("ready");
                    }
                    else
                        b.updateStatus("error", e.tNotFound), (f = a("<div>"));
                    return (c.inlineElement = f), f;
                }
                return b.updateStatus("ready"), b._parseMarkup(d, {}, c), d;
            }
        }
    });
    var H, I = "ajax", J = function () {
        H && a(document.body).removeClass(H);
    }, K = function () {
        J(), b.req && b.req.abort();
    };
    a.magnificPopup.registerModule(I, {
        options: {
            settings: null,
            cursor: "mfp-ajax-cur",
            tError: '<a href="%url%">The content</a> could not be loaded.'
        },
        proto: {
            initAjax: function () {
                b.types.push(I),
                    (H = b.st.ajax.cursor),
                    w(h + "." + I, K),
                    w("BeforeChange." + I, K);
            },
            getAjax: function (c) {
                H && a(document.body).addClass(H), b.updateStatus("loading");
                var d = a.extend({
                    url: c.src,
                    success: function (d, e, f) {
                        var g = { data: d, xhr: f };
                        y("ParseAjax", g),
                            b.appendContent(a(g.data), I),
                            (c.finished = !0),
                            J(),
                            b._setFocus(),
                            setTimeout(function () {
                                b.wrap.addClass(q);
                            }, 16),
                            b.updateStatus("ready"),
                            y("AjaxContentAdded");
                    },
                    error: function () {
                        J(),
                            (c.finished = c.loadError = !0),
                            b.updateStatus("error", b.st.ajax.tError.replace("%url%", c.src));
                    }
                }, b.st.ajax.settings);
                return (b.req = a.ajax(d)), "";
            }
        }
    });
    var L, M = function (c) {
        if (c.data && void 0 !== c.data.title)
            return c.data.title;
        var d = b.st.image.titleSrc;
        if (d) {
            if (a.isFunction(d))
                return d.call(b, c);
            if (c.el)
                return c.el.attr(d) || "";
        }
        return "";
    };
    a.magnificPopup.registerModule("image", {
        options: {
            markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
            cursor: "mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: !0,
            tError: '<a href="%url%">The image</a> could not be loaded.'
        },
        proto: {
            initImage: function () {
                var c = b.st.image, d = ".image";
                b.types.push("image"),
                    w(m + d, function () {
                        "image" === b.currItem.type &&
                            c.cursor &&
                            a(document.body).addClass(c.cursor);
                    }),
                    w(h + d, function () {
                        c.cursor && a(document.body).removeClass(c.cursor),
                            v.off("resize" + p);
                    }),
                    w("Resize" + d, b.resizeImage),
                    b.isLowIE && w("AfterChange", b.resizeImage);
            },
            resizeImage: function () {
                var a = b.currItem;
                if (a && a.img && b.st.image.verticalFit) {
                    var c = 0;
                    b.isLowIE &&
                        (c =
                            parseInt(a.img.css("padding-top"), 10) +
                                parseInt(a.img.css("padding-bottom"), 10)),
                        a.img.css("max-height", b.wH - c);
                }
            },
            _onImageHasSize: function (a) {
                a.img &&
                    ((a.hasSize = !0),
                        L && clearInterval(L),
                        (a.isCheckingImgSize = !1),
                        y("ImageHasSize", a),
                        a.imgHidden &&
                            (b.content && b.content.removeClass("mfp-loading"),
                                (a.imgHidden = !1)));
            },
            findImageSize: function (a) {
                var c = 0, d = a.img[0], e = function (f) {
                    L && clearInterval(L),
                        (L = setInterval(function () {
                            return d.naturalWidth > 0
                                ? void b._onImageHasSize(a)
                                : (c > 200 && clearInterval(L),
                                    c++,
                                    void (3 === c
                                        ? e(10)
                                        : 40 === c
                                            ? e(50)
                                            : 100 === c && e(500)));
                        }, f));
                };
                e(1);
            },
            getImage: function (c, d) {
                var e = 0, f = function () {
                    c &&
                        (c.img[0].complete
                            ? (c.img.off(".mfploader"),
                                c === b.currItem &&
                                    (b._onImageHasSize(c), b.updateStatus("ready")),
                                (c.hasSize = !0),
                                (c.loaded = !0),
                                y("ImageLoadComplete"))
                            : (e++, 200 > e ? setTimeout(f, 100) : g()));
                }, g = function () {
                    c &&
                        (c.img.off(".mfploader"),
                            c === b.currItem &&
                                (b._onImageHasSize(c),
                                    b.updateStatus("error", h.tError.replace("%url%", c.src))),
                            (c.hasSize = !0),
                            (c.loaded = !0),
                            (c.loadError = !0));
                }, h = b.st.image, i = d.find(".mfp-img");
                if (i.length) {
                    var j = document.createElement("img");
                    (j.className = "mfp-img"),
                        c.el &&
                            c.el.find("img").length &&
                            (j.alt = c.el.find("img").attr("alt")),
                        (c.img = a(j)
                            .on("load.mfploader", f)
                            .on("error.mfploader", g)),
                        (j.src = c.src),
                        i.is("img") && (c.img = c.img.clone()),
                        (j = c.img[0]),
                        j.naturalWidth > 0 ? (c.hasSize = !0) : j.width || (c.hasSize = !1);
                }
                return (b._parseMarkup(d, { title: M(c), img_replaceWith: c.img }, c),
                    b.resizeImage(),
                    c.hasSize
                        ? (L && clearInterval(L),
                            c.loadError
                                ? (d.addClass("mfp-loading"),
                                    b.updateStatus("error", h.tError.replace("%url%", c.src)))
                                : (d.removeClass("mfp-loading"), b.updateStatus("ready")),
                            d)
                        : (b.updateStatus("loading"),
                            (c.loading = !0),
                            c.hasSize ||
                                ((c.imgHidden = !0),
                                    d.addClass("mfp-loading"),
                                    b.findImageSize(c)),
                            d));
            }
        }
    });
    var N, O = function () {
        return (void 0 === N &&
            (N = void 0 !== document.createElement("p").style.MozTransform),
            N);
    };
    a.magnificPopup.registerModule("zoom", {
        options: {
            enabled: !1,
            easing: "ease-in-out",
            duration: 300,
            opener: function (a) {
                return a.is("img") ? a : a.find("img");
            }
        },
        proto: {
            initZoom: function () {
                var a, c = b.st.zoom, d = ".zoom";
                if (c.enabled && b.supportsTransition) {
                    var e, f, g = c.duration, j = function (a) {
                        var b = a
                            .clone()
                            .removeAttr("style")
                            .removeAttr("class")
                            .addClass("mfp-animated-image"), d = "all " + c.duration / 1e3 + "s " + c.easing, e = {
                            position: "fixed",
                            zIndex: 9999,
                            left: 0,
                            top: 0,
                            "-webkit-backface-visibility": "hidden"
                        }, f = "transition";
                        return ((e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d),
                            b.css(e),
                            b);
                    }, k = function () {
                        b.content.css("visibility", "visible");
                    };
                    w("BuildControls" + d, function () {
                        if (b._allowZoom()) {
                            if ((clearTimeout(e),
                                b.content.css("visibility", "hidden"),
                                (a = b._getItemToZoom()),
                                !a))
                                return void k();
                            (f = j(a)),
                                f.css(b._getOffset()),
                                b.wrap.append(f),
                                (e = setTimeout(function () {
                                    f.css(b._getOffset(!0)),
                                        (e = setTimeout(function () {
                                            k(),
                                                setTimeout(function () {
                                                    f.remove(), (a = f = null), y("ZoomAnimationEnded");
                                                }, 16);
                                        }, g));
                                }, 16));
                        }
                    }),
                        w(i + d, function () {
                            if (b._allowZoom()) {
                                if ((clearTimeout(e), (b.st.removalDelay = g), !a)) {
                                    if (((a = b._getItemToZoom()), !a))
                                        return;
                                    f = j(a);
                                }
                                f.css(b._getOffset(!0)),
                                    b.wrap.append(f),
                                    b.content.css("visibility", "hidden"),
                                    setTimeout(function () {
                                        f.css(b._getOffset());
                                    }, 16);
                            }
                        }),
                        w(h + d, function () {
                            b._allowZoom() && (k(), f && f.remove(), (a = null));
                        });
                }
            },
            _allowZoom: function () {
                return "image" === b.currItem.type;
            },
            _getItemToZoom: function () {
                return b.currItem.hasSize ? b.currItem.img : !1;
            },
            _getOffset: function (c) {
                var d;
                d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem);
                var e = d.offset(), f = parseInt(d.css("padding-top"), 10), g = parseInt(d.css("padding-bottom"), 10);
                e.top -= a(window).scrollTop() - f;
                var h = {
                    width: d.width(),
                    height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f
                };
                return (O()
                    ? (h["-moz-transform"] = h.transform =
                        "translate(" + e.left + "px," + e.top + "px)")
                    : ((h.left = e.left), (h.top = e.top)),
                    h);
            }
        }
    });
    var P = "iframe", Q = "//about:blank", R = function (a) {
        if (b.currTemplate[P]) {
            var c = b.currTemplate[P].find("iframe");
            c.length &&
                (a || (c[0].src = Q),
                    b.isIE8 && c.css("display", a ? "block" : "none"));
        }
    };
    a.magnificPopup.registerModule(P, {
        options: {
            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
            srcAction: "iframe_src",
            patterns: {
                youtube: {
                    index: "youtube.com",
                    id: "v=",
                    src: "//www.youtube.com/embed/%id%?autoplay=1"
                },
                vimeo: {
                    index: "vimeo.com/",
                    id: "/",
                    src: "//player.vimeo.com/video/%id%?autoplay=1"
                },
                gmaps: { index: "//maps.google.", src: "%id%&output=embed" }
            }
        },
        proto: {
            initIframe: function () {
                b.types.push(P),
                    w("BeforeChange", function (a, b, c) {
                        b !== c && (b === P ? R() : c === P && R(!0));
                    }),
                    w(h + "." + P, function () {
                        R();
                    });
            },
            getIframe: function (c, d) {
                var e = c.src, f = b.st.iframe;
                a.each(f.patterns, function () {
                    return e.indexOf(this.index) > -1
                        ? (this.id &&
                            (e =
                                "string" == typeof this.id
                                    ? e.substr(e.lastIndexOf(this.id) + this.id.length, e.length)
                                    : this.id.call(this, e)),
                            (e = this.src.replace("%id%", e)),
                            !1)
                        : void 0;
                });
                var g = {};
                return (f.srcAction && (g[f.srcAction] = e),
                    b._parseMarkup(d, g, c),
                    b.updateStatus("ready"),
                    d);
            }
        }
    });
    var S = function (a) {
        var c = b.items.length;
        return a > c - 1 ? a - c : 0 > a ? c + a : a;
    }, T = function (a, b, c) {
        return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c);
    };
    a.magnificPopup.registerModule("gallery", {
        options: {
            enabled: !1,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [0, 2],
            navigateByImgClick: !0,
            arrows: !0,
            tPrev: "Previous (Left arrow key)",
            tNext: "Next (Right arrow key)",
            tCounter: "%curr% of %total%"
        },
        proto: {
            initGallery: function () {
                var c = b.st.gallery, e = ".mfp-gallery";
                return ((b.direction = !0),
                    c && c.enabled
                        ? ((f += " mfp-gallery"),
                            w(m + e, function () {
                                c.navigateByImgClick &&
                                    b.wrap.on("click" + e, ".mfp-img", function () {
                                        return b.items.length > 1 ? (b.next(), !1) : void 0;
                                    }),
                                    d.on("keydown" + e, function (a) {
                                        37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next();
                                    });
                            }),
                            w("UpdateStatus" + e, function (a, c) {
                                c.text &&
                                    (c.text = T(c.text, b.currItem.index, b.items.length));
                            }),
                            w(l + e, function (a, d, e, f) {
                                var g = b.items.length;
                                e.counter = g > 1 ? T(c.tCounter, f.index, g) : "";
                            }),
                            w("BuildControls" + e, function () {
                                if (b.items.length > 1 && c.arrows && !b.arrowLeft) {
                                    var d = c.arrowMarkup, e = (b.arrowLeft = a(d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")).addClass(s)), f = (b.arrowRight = a(d
                                        .replace(/%title%/gi, c.tNext)
                                        .replace(/%dir%/gi, "right")).addClass(s));
                                    e.click(function () {
                                        b.prev();
                                    }),
                                        f.click(function () {
                                            b.next();
                                        }),
                                        b.container.append(e.add(f));
                                }
                            }),
                            w(n + e, function () {
                                b._preloadTimeout && clearTimeout(b._preloadTimeout),
                                    (b._preloadTimeout = setTimeout(function () {
                                        b.preloadNearbyImages(), (b._preloadTimeout = null);
                                    }, 16));
                            }),
                            void w(h + e, function () {
                                d.off(e),
                                    b.wrap.off("click" + e),
                                    (b.arrowRight = b.arrowLeft = null);
                            }))
                        : !1);
            },
            next: function () {
                (b.direction = !0), (b.index = S(b.index + 1)), b.updateItemHTML();
            },
            prev: function () {
                (b.direction = !1), (b.index = S(b.index - 1)), b.updateItemHTML();
            },
            goTo: function (a) {
                (b.direction = a >= b.index), (b.index = a), b.updateItemHTML();
            },
            preloadNearbyImages: function () {
                var a, c = b.st.gallery.preload, d = Math.min(c[0], b.items.length), e = Math.min(c[1], b.items.length);
                for (a = 1; a <= (b.direction ? e : d); a++)
                    b._preloadItem(b.index + a);
                for (a = 1; a <= (b.direction ? d : e); a++)
                    b._preloadItem(b.index - a);
            },
            _preloadItem: function (c) {
                if (((c = S(c)), !b.items[c].preloaded)) {
                    var d = b.items[c];
                    d.parsed || (d = b.parseEl(c)),
                        y("LazyLoad", d),
                        "image" === d.type &&
                            (d.img = a('<img class="mfp-img" />')
                                .on("load.mfploader", function () {
                                d.hasSize = !0;
                            })
                                .on("error.mfploader", function () {
                                (d.hasSize = !0), (d.loadError = !0), y("LazyLoadError", d);
                            })
                                .attr("src", d.src)),
                        (d.preloaded = !0);
                }
            }
        }
    });
    var U = "retina";
    a.magnificPopup.registerModule(U, {
        options: {
            replaceSrc: function (a) {
                return a.src.replace(/\.\w+$/, function (a) {
                    return "@2x" + a;
                });
            },
            ratio: 1
        },
        proto: {
            initRetina: function () {
                if (window.devicePixelRatio > 1) {
                    var a = b.st.retina, c = a.ratio;
                    (c = isNaN(c) ? c() : c),
                        c > 1 &&
                            (w("ImageHasSize." + U, function (a, b) {
                                b.img.css({
                                    "max-width": b.img[0].naturalWidth / c,
                                    width: "100%"
                                });
                            }),
                                w("ElementParse." + U, function (b, d) {
                                    d.src = a.replaceSrc(d, c);
                                }));
                }
            }
        }
    }),
        A();
});
/*
 *  slick slider
 * 	Version: 1.6.0
 *	Docs: http://kenwheeler.github.io/slick
 */
!(function (a) {
    "use strict";
    "function" == typeof define && define.amd
        ? define(["jquery"], a)
        : "undefined" != typeof exports
            ? (module.exports = a(require("jquery")))
            : a(jQuery);
})(function (a) {
    "use strict";
    var b = window.Slick || {};
    (b = (function () {
        function c(c, d) {
            var f, e = this;
            (e.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: a(c),
                appendDots: a(c),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function (b, c) {
                    return a('<button type="button" data-role="none" role="button" tabindex="0" />').text(c + 1);
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: 0.35,
                fade: !1,
                focusOnSelect: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnFocus: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3
            }),
                (e.initials = {
                    animating: !1,
                    dragging: !1,
                    autoPlayTimer: null,
                    currentDirection: 0,
                    currentLeft: null,
                    currentSlide: 0,
                    direction: 1,
                    $dots: null,
                    listWidth: null,
                    listHeight: null,
                    loadIndex: 0,
                    $nextArrow: null,
                    $prevArrow: null,
                    slideCount: null,
                    slideWidth: null,
                    $slideTrack: null,
                    $slides: null,
                    sliding: !1,
                    slideOffset: 0,
                    swipeLeft: null,
                    $list: null,
                    touchObject: {},
                    transformsEnabled: !1,
                    unslicked: !1
                }),
                a.extend(e, e.initials),
                (e.activeBreakpoint = null),
                (e.animType = null),
                (e.animProp = null),
                (e.breakpoints = []),
                (e.breakpointSettings = []),
                (e.cssTransitions = !1),
                (e.focussed = !1),
                (e.interrupted = !1),
                (e.hidden = "hidden"),
                (e.paused = !0),
                (e.positionProp = null),
                (e.respondTo = null),
                (e.rowCount = 1),
                (e.shouldClick = !0),
                (e.$slider = a(c)),
                (e.$slidesCache = null),
                (e.transformType = null),
                (e.transitionType = null),
                (e.visibilityChange = "visibilitychange"),
                (e.windowWidth = 0),
                (e.windowTimer = null),
                (f = a(c).data("slick") || {}),
                (e.options = a.extend({}, e.defaults, d, f)),
                (e.currentSlide = e.options.initialSlide),
                (e.originalSettings = e.options),
                "undefined" != typeof document.mozHidden
                    ? ((e.hidden = "mozHidden"),
                        (e.visibilityChange = "mozvisibilitychange"))
                    : "undefined" != typeof document.webkitHidden &&
                        ((e.hidden = "webkitHidden"),
                            (e.visibilityChange = "webkitvisibilitychange")),
                (e.autoPlay = a.proxy(e.autoPlay, e)),
                (e.autoPlayClear = a.proxy(e.autoPlayClear, e)),
                (e.autoPlayIterator = a.proxy(e.autoPlayIterator, e)),
                (e.changeSlide = a.proxy(e.changeSlide, e)),
                (e.clickHandler = a.proxy(e.clickHandler, e)),
                (e.selectHandler = a.proxy(e.selectHandler, e)),
                (e.setPosition = a.proxy(e.setPosition, e)),
                (e.swipeHandler = a.proxy(e.swipeHandler, e)),
                (e.dragHandler = a.proxy(e.dragHandler, e)),
                (e.keyHandler = a.proxy(e.keyHandler, e)),
                (e.instanceUid = b++),
                (e.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
                e.registerBreakpoints(),
                e.init(!0);
        }
        var b = 0;
        return c;
    })()),
        (b.prototype.activateADA = function () {
            var a = this;
            a.$slideTrack
                .find(".slick-active")
                .attr({ "aria-hidden": "false" })
                .find("a, input, button, select")
                .attr({ tabindex: "0" });
        }),
        (b.prototype.addSlide = b.prototype.slickAdd = function (b, c, d) {
            var e = this;
            if ("boolean" == typeof c)
                (d = c), (c = null);
            else if (0 > c || c >= e.slideCount)
                return !1;
            e.unload(),
                "number" == typeof c
                    ? 0 === c && 0 === e.$slides.length
                        ? a(b).appendTo(e.$slideTrack)
                        : d
                            ? a(b).insertBefore(e.$slides.eq(c))
                            : a(b).insertAfter(e.$slides.eq(c))
                    : d === !0
                        ? a(b).prependTo(e.$slideTrack)
                        : a(b).appendTo(e.$slideTrack),
                (e.$slides = e.$slideTrack.children(this.options.slide)),
                e.$slideTrack.children(this.options.slide).detach(),
                e.$slideTrack.append(e.$slides),
                e.$slides.each(function (b, c) {
                    a(c).attr("data-slick-index", b);
                }),
                (e.$slidesCache = e.$slides),
                e.reinit();
        }),
        (b.prototype.animateHeight = function () {
            var a = this;
            if (1 === a.options.slidesToShow &&
                a.options.adaptiveHeight === !0 &&
                a.options.vertical === !1) {
                var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
                a.$list.animate({ height: b }, a.options.speed);
            }
        }),
        (b.prototype.animateSlide = function (b, c) {
            var d = {}, e = this;
            e.animateHeight(),
                e.options.rtl === !0 && e.options.vertical === !1 && (b = -b),
                e.transformsEnabled === !1
                    ? e.options.vertical === !1
                        ? e.$slideTrack.animate({ left: b }, e.options.speed, e.options.easing, c)
                        : e.$slideTrack.animate({ top: b }, e.options.speed, e.options.easing, c)
                    : e.cssTransitions === !1
                        ? (e.options.rtl === !0 && (e.currentLeft = -e.currentLeft),
                            a({ animStart: e.currentLeft }).animate({ animStart: b }, {
                                duration: e.options.speed,
                                easing: e.options.easing,
                                step: function (a) {
                                    (a = Math.ceil(a)),
                                        e.options.vertical === !1
                                            ? ((d[e.animType] = "translate(" + a + "px, 0px)"),
                                                e.$slideTrack.css(d))
                                            : ((d[e.animType] = "translate(0px," + a + "px)"),
                                                e.$slideTrack.css(d));
                                },
                                complete: function () {
                                    c && c.call();
                                }
                            }))
                        : (e.applyTransition(),
                            (b = Math.ceil(b)),
                            e.options.vertical === !1
                                ? (d[e.animType] = "translate3d(" + b + "px, 0px, 0px)")
                                : (d[e.animType] = "translate3d(0px," + b + "px, 0px)"),
                            e.$slideTrack.css(d),
                            c &&
                                setTimeout(function () {
                                    e.disableTransition(), c.call();
                                }, e.options.speed));
        }),
        (b.prototype.getNavTarget = function () {
            var b = this, c = b.options.asNavFor;
            return c && null !== c && (c = a(c).not(b.$slider)), c;
        }),
        (b.prototype.asNavFor = function (b) {
            var c = this, d = c.getNavTarget();
            null !== d &&
                "object" == typeof d &&
                d.each(function () {
                    var c = a(this).slick("getSlick");
                    c.unslicked || c.slideHandler(b, !0);
                });
        }),
        (b.prototype.applyTransition = function (a) {
            var b = this, c = {};
            b.options.fade === !1
                ? (c[b.transitionType] =
                    b.transformType + " " + b.options.speed + "ms " + b.options.cssEase)
                : (c[b.transitionType] =
                    "opacity " + b.options.speed + "ms " + b.options.cssEase),
                b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c);
        }),
        (b.prototype.autoPlay = function () {
            var a = this;
            a.autoPlayClear(),
                a.slideCount > a.options.slidesToShow &&
                    (a.autoPlayTimer = setInterval(a.autoPlayIterator, a.options.autoplaySpeed));
        }),
        (b.prototype.autoPlayClear = function () {
            var a = this;
            a.autoPlayTimer && clearInterval(a.autoPlayTimer);
        }),
        (b.prototype.autoPlayIterator = function () {
            var a = this, b = a.currentSlide + a.options.slidesToScroll;
            a.paused ||
                a.interrupted ||
                a.focussed ||
                (a.options.infinite === !1 &&
                    (1 === a.direction && a.currentSlide + 1 === a.slideCount - 1
                        ? (a.direction = 0)
                        : 0 === a.direction &&
                            ((b = a.currentSlide - a.options.slidesToScroll),
                                a.currentSlide - 1 === 0 && (a.direction = 1))),
                    a.slideHandler(b));
        }),
        (b.prototype.buildArrows = function () {
            var b = this;
            b.options.arrows === !0 &&
                ((b.$prevArrow = a(b.options.prevArrow).addClass("slick-arrow")),
                    (b.$nextArrow = a(b.options.nextArrow).addClass("slick-arrow")),
                    b.slideCount > b.options.slidesToShow
                        ? (b.$prevArrow
                            .removeClass("slick-hidden")
                            .removeAttr("aria-hidden tabindex"),
                            b.$nextArrow
                                .removeClass("slick-hidden")
                                .removeAttr("aria-hidden tabindex"),
                            b.htmlExpr.test(b.options.prevArrow) &&
                                b.$prevArrow.prependTo(b.options.appendArrows),
                            b.htmlExpr.test(b.options.nextArrow) &&
                                b.$nextArrow.appendTo(b.options.appendArrows),
                            b.options.infinite !== !0 &&
                                b.$prevArrow
                                    .addClass("slick-disabled")
                                    .attr("aria-disabled", "true"))
                        : b.$prevArrow
                            .add(b.$nextArrow)
                            .addClass("slick-hidden")
                            .attr({ "aria-disabled": "true", tabindex: "-1" }));
        }),
        (b.prototype.buildDots = function () {
            var c, d, b = this;
            if (b.options.dots === !0 && b.slideCount > b.options.slidesToShow) {
                for (b.$slider.addClass("slick-dotted"),
                    d = a("<ul />").addClass(b.options.dotsClass),
                    c = 0; c <= b.getDotCount(); c += 1)
                    d.append(a("<li />").append(b.options.customPaging.call(this, b, c)));
                (b.$dots = d.appendTo(b.options.appendDots)),
                    b.$dots
                        .find("li")
                        .first()
                        .addClass("slick-active")
                        .attr("aria-hidden", "false");
            }
        }),
        (b.prototype.buildOut = function () {
            var b = this;
            (b.$slides = b.$slider
                .children(b.options.slide + ":not(.slick-cloned)")
                .addClass("slick-slide")),
                (b.slideCount = b.$slides.length),
                b.$slides.each(function (b, c) {
                    a(c)
                        .attr("data-slick-index", b)
                        .data("originalStyling", a(c).attr("style") || "");
                }),
                b.$slider.addClass("slick-slider"),
                (b.$slideTrack =
                    0 === b.slideCount
                        ? a('<div class="slick-track"/>').appendTo(b.$slider)
                        : b.$slides.wrapAll('<div class="slick-track"/>').parent()),
                (b.$list = b.$slideTrack
                    .wrap('<div aria-live="polite" class="slick-list"/>')
                    .parent()),
                b.$slideTrack.css("opacity", 0),
                (b.options.centerMode === !0 || b.options.swipeToSlide === !0) &&
                    (b.options.slidesToScroll = 1),
                a("img[data-lazy]", b.$slider)
                    .not("[src]")
                    .addClass("slick-loading"),
                b.setupInfinite(),
                b.buildArrows(),
                b.buildDots(),
                b.updateDots(),
                b.setSlideClasses("number" == typeof b.currentSlide ? b.currentSlide : 0),
                b.options.draggable === !0 && b.$list.addClass("draggable");
        }),
        (b.prototype.buildRows = function () {
            var b, c, d, e, f, g, h, a = this;
            if (((e = document.createDocumentFragment()),
                (g = a.$slider.children()),
                a.options.rows > 1)) {
                for (h = a.options.slidesPerRow * a.options.rows,
                    f = Math.ceil(g.length / h),
                    b = 0; f > b; b++) {
                    var i = document.createElement("div");
                    for (c = 0; c < a.options.rows; c++) {
                        var j = document.createElement("div");
                        for (d = 0; d < a.options.slidesPerRow; d++) {
                            var k = b * h + (c * a.options.slidesPerRow + d);
                            g.get(k) && j.appendChild(g.get(k));
                        }
                        i.appendChild(j);
                    }
                    e.appendChild(i);
                }
                a.$slider.empty().append(e),
                    a.$slider
                        .children()
                        .children()
                        .children()
                        .css({
                        width: 100 / a.options.slidesPerRow + "%",
                        display: "inline-block"
                    });
            }
        }),
        (b.prototype.checkResponsive = function (b, c) {
            var e, f, g, d = this, h = !1, i = d.$slider.width(), j = window.innerWidth || a(window).width();
            if (("window" === d.respondTo
                ? (g = j)
                : "slider" === d.respondTo
                    ? (g = i)
                    : "min" === d.respondTo && (g = Math.min(j, i)),
                d.options.responsive &&
                    d.options.responsive.length &&
                    null !== d.options.responsive)) {
                f = null;
                for (e in d.breakpoints)
                    d.breakpoints.hasOwnProperty(e) &&
                        (d.originalSettings.mobileFirst === !1
                            ? g < d.breakpoints[e] && (f = d.breakpoints[e])
                            : g > d.breakpoints[e] && (f = d.breakpoints[e]));
                null !== f
                    ? null !== d.activeBreakpoint
                        ? (f !== d.activeBreakpoint || c) &&
                            ((d.activeBreakpoint = f),
                                "unslick" === d.breakpointSettings[f]
                                    ? d.unslick(f)
                                    : ((d.options = a.extend({}, d.originalSettings, d.breakpointSettings[f])),
                                        b === !0 && (d.currentSlide = d.options.initialSlide),
                                        d.refresh(b)),
                                (h = f))
                        : ((d.activeBreakpoint = f),
                            "unslick" === d.breakpointSettings[f]
                                ? d.unslick(f)
                                : ((d.options = a.extend({}, d.originalSettings, d.breakpointSettings[f])),
                                    b === !0 && (d.currentSlide = d.options.initialSlide),
                                    d.refresh(b)),
                            (h = f))
                    : null !== d.activeBreakpoint &&
                        ((d.activeBreakpoint = null),
                            (d.options = d.originalSettings),
                            b === !0 && (d.currentSlide = d.options.initialSlide),
                            d.refresh(b),
                            (h = f)),
                    b || h === !1 || d.$slider.trigger("breakpoint", [d, h]);
            }
        }),
        (b.prototype.changeSlide = function (b, c) {
            var f, g, h, d = this, e = a(b.currentTarget);
            switch ((e.is("a") && b.preventDefault(),
                e.is("li") || (e = e.closest("li")),
                (h = d.slideCount % d.options.slidesToScroll !== 0),
                (f = h
                    ? 0
                    : (d.slideCount - d.currentSlide) % d.options.slidesToScroll),
                b.data.message)) {
                case "previous":
                    (g = 0 === f ? d.options.slidesToScroll : d.options.slidesToShow - f),
                        d.slideCount > d.options.slidesToShow &&
                            d.slideHandler(d.currentSlide - g, !1, c);
                    break;
                case "next":
                    (g = 0 === f ? d.options.slidesToScroll : f),
                        d.slideCount > d.options.slidesToShow &&
                            d.slideHandler(d.currentSlide + g, !1, c);
                    break;
                case "index":
                    var i = 0 === b.data.index
                        ? 0
                        : b.data.index || e.index() * d.options.slidesToScroll;
                    d.slideHandler(d.checkNavigable(i), !1, c),
                        e.children().trigger("focus");
                    break;
                default:
                    return;
            }
        }),
        (b.prototype.checkNavigable = function (a) {
            var c, d, b = this;
            if (((c = b.getNavigableIndexes()), (d = 0), a > c[c.length - 1]))
                a = c[c.length - 1];
            else
                for (var e in c) {
                    if (a < c[e]) {
                        a = d;
                        break;
                    }
                    d = c[e];
                }
            return a;
        }),
        (b.prototype.cleanUpEvents = function () {
            var b = this;
            b.options.dots &&
                null !== b.$dots &&
                a("li", b.$dots)
                    .off("click.slick", b.changeSlide)
                    .off("mouseenter.slick", a.proxy(b.interrupt, b, !0))
                    .off("mouseleave.slick", a.proxy(b.interrupt, b, !1)),
                b.$slider.off("focus.slick blur.slick"),
                b.options.arrows === !0 &&
                    b.slideCount > b.options.slidesToShow &&
                    (b.$prevArrow && b.$prevArrow.off("click.slick", b.changeSlide),
                        b.$nextArrow && b.$nextArrow.off("click.slick", b.changeSlide)),
                b.$list.off("touchstart.slick mousedown.slick", b.swipeHandler),
                b.$list.off("touchmove.slick mousemove.slick", b.swipeHandler),
                b.$list.off("touchend.slick mouseup.slick", b.swipeHandler),
                b.$list.off("touchcancel.slick mouseleave.slick", b.swipeHandler),
                b.$list.off("click.slick", b.clickHandler),
                a(document).off(b.visibilityChange, b.visibility),
                b.cleanUpSlideEvents(),
                b.options.accessibility === !0 &&
                    b.$list.off("keydown.slick", b.keyHandler),
                b.options.focusOnSelect === !0 &&
                    a(b.$slideTrack)
                        .children()
                        .off("click.slick", b.selectHandler),
                a(window).off("orientationchange.slick.slick-" + b.instanceUid, b.orientationChange),
                a(window).off("resize.slick.slick-" + b.instanceUid, b.resize),
                a("[draggable!=true]", b.$slideTrack).off("dragstart", b.preventDefault),
                a(window).off("load.slick.slick-" + b.instanceUid, b.setPosition),
                a(document).off("ready.slick.slick-" + b.instanceUid, b.setPosition);
        }),
        (b.prototype.cleanUpSlideEvents = function () {
            var b = this;
            b.$list.off("mouseenter.slick", a.proxy(b.interrupt, b, !0)),
                b.$list.off("mouseleave.slick", a.proxy(b.interrupt, b, !1));
        }),
        (b.prototype.cleanUpRows = function () {
            var b, a = this;
            a.options.rows > 1 &&
                ((b = a.$slides.children().children()),
                    b.removeAttr("style"),
                    a.$slider.empty().append(b));
        }),
        (b.prototype.clickHandler = function (a) {
            var b = this;
            b.shouldClick === !1 &&
                (a.stopImmediatePropagation(), a.stopPropagation(), a.preventDefault());
        }),
        (b.prototype.destroy = function (b) {
            var c = this;
            c.autoPlayClear(),
                (c.touchObject = {}),
                c.cleanUpEvents(),
                a(".slick-cloned", c.$slider).detach(),
                c.$dots && c.$dots.remove(),
                c.$prevArrow &&
                    c.$prevArrow.length &&
                    (c.$prevArrow
                        .removeClass("slick-disabled slick-arrow slick-hidden")
                        .removeAttr("aria-hidden aria-disabled tabindex")
                        .css("display", ""),
                        c.htmlExpr.test(c.options.prevArrow) && c.$prevArrow.remove()),
                c.$nextArrow &&
                    c.$nextArrow.length &&
                    (c.$nextArrow
                        .removeClass("slick-disabled slick-arrow slick-hidden")
                        .removeAttr("aria-hidden aria-disabled tabindex")
                        .css("display", ""),
                        c.htmlExpr.test(c.options.nextArrow) && c.$nextArrow.remove()),
                c.$slides &&
                    (c.$slides
                        .removeClass("slick-slide slick-active slick-center slick-visible slick-current")
                        .removeAttr("aria-hidden")
                        .removeAttr("data-slick-index")
                        .each(function () {
                        a(this).attr("style", a(this).data("originalStyling"));
                    }),
                        c.$slideTrack.children(this.options.slide).detach(),
                        c.$slideTrack.detach(),
                        c.$list.detach(),
                        c.$slider.append(c.$slides)),
                c.cleanUpRows(),
                c.$slider.removeClass("slick-slider"),
                c.$slider.removeClass("slick-initialized"),
                c.$slider.removeClass("slick-dotted"),
                (c.unslicked = !0),
                b || c.$slider.trigger("destroy", [c]);
        }),
        (b.prototype.disableTransition = function (a) {
            var b = this, c = {};
            (c[b.transitionType] = ""),
                b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c);
        }),
        (b.prototype.fadeSlide = function (a, b) {
            var c = this;
            c.cssTransitions === !1
                ? (c.$slides.eq(a).css({ zIndex: c.options.zIndex }),
                    c.$slides
                        .eq(a)
                        .animate({ opacity: 1 }, c.options.speed, c.options.easing, b))
                : (c.applyTransition(a),
                    c.$slides.eq(a).css({ opacity: 1, zIndex: c.options.zIndex }),
                    b &&
                        setTimeout(function () {
                            c.disableTransition(a), b.call();
                        }, c.options.speed));
        }),
        (b.prototype.fadeSlideOut = function (a) {
            var b = this;
            b.cssTransitions === !1
                ? b.$slides
                    .eq(a)
                    .animate({ opacity: 0, zIndex: b.options.zIndex - 2 }, b.options.speed, b.options.easing)
                : (b.applyTransition(a),
                    b.$slides.eq(a).css({ opacity: 0, zIndex: b.options.zIndex - 2 }));
        }),
        (b.prototype.filterSlides = b.prototype.slickFilter = function (a) {
            var b = this;
            null !== a &&
                ((b.$slidesCache = b.$slides),
                    b.unload(),
                    b.$slideTrack.children(this.options.slide).detach(),
                    b.$slidesCache.filter(a).appendTo(b.$slideTrack),
                    b.reinit());
        }),
        (b.prototype.focusHandler = function () {
            var b = this;
            b.$slider
                .off("focus.slick blur.slick")
                .on("focus.slick blur.slick", "*:not(.slick-arrow)", function (c) {
                c.stopImmediatePropagation();
                var d = a(this);
                setTimeout(function () {
                    b.options.pauseOnFocus &&
                        ((b.focussed = d.is(":focus")), b.autoPlay());
                }, 0);
            });
        }),
        (b.prototype.getCurrent = b.prototype.slickCurrentSlide = function () {
            var a = this;
            return a.currentSlide;
        }),
        (b.prototype.getDotCount = function () {
            var a = this, b = 0, c = 0, d = 0;
            if (a.options.infinite === !0)
                for (; b < a.slideCount;)
                    ++d,
                        (b = c + a.options.slidesToScroll),
                        (c +=
                            a.options.slidesToScroll <= a.options.slidesToShow
                                ? a.options.slidesToScroll
                                : a.options.slidesToShow);
            else if (a.options.centerMode === !0)
                d = a.slideCount;
            else if (a.options.asNavFor)
                for (; b < a.slideCount;)
                    ++d,
                        (b = c + a.options.slidesToScroll),
                        (c +=
                            a.options.slidesToScroll <= a.options.slidesToShow
                                ? a.options.slidesToScroll
                                : a.options.slidesToShow);
            else
                d =
                    1 +
                        Math.ceil((a.slideCount - a.options.slidesToShow) / a.options.slidesToScroll);
            return d - 1;
        }),
        (b.prototype.getLeft = function (a) {
            var c, d, f, b = this, e = 0;
            return ((b.slideOffset = 0),
                (d = b.$slides.first().outerHeight(!0)),
                b.options.infinite === !0
                    ? (b.slideCount > b.options.slidesToShow &&
                        ((b.slideOffset = b.slideWidth * b.options.slidesToShow * -1),
                            (e = d * b.options.slidesToShow * -1)),
                        b.slideCount % b.options.slidesToScroll !== 0 &&
                            a + b.options.slidesToScroll > b.slideCount &&
                            b.slideCount > b.options.slidesToShow &&
                            (a > b.slideCount
                                ? ((b.slideOffset =
                                    (b.options.slidesToShow - (a - b.slideCount)) *
                                        b.slideWidth *
                                        -1),
                                    (e = (b.options.slidesToShow - (a - b.slideCount)) * d * -1))
                                : ((b.slideOffset =
                                    (b.slideCount % b.options.slidesToScroll) *
                                        b.slideWidth *
                                        -1),
                                    (e = (b.slideCount % b.options.slidesToScroll) * d * -1))))
                    : a + b.options.slidesToShow > b.slideCount &&
                        ((b.slideOffset =
                            (a + b.options.slidesToShow - b.slideCount) * b.slideWidth),
                            (e = (a + b.options.slidesToShow - b.slideCount) * d)),
                b.slideCount <= b.options.slidesToShow &&
                    ((b.slideOffset = 0), (e = 0)),
                b.options.centerMode === !0 && b.options.infinite === !0
                    ? (b.slideOffset +=
                        b.slideWidth * Math.floor(b.options.slidesToShow / 2) -
                            b.slideWidth)
                    : b.options.centerMode === !0 &&
                        ((b.slideOffset = 0),
                            (b.slideOffset +=
                                b.slideWidth * Math.floor(b.options.slidesToShow / 2))),
                (c =
                    b.options.vertical === !1
                        ? a * b.slideWidth * -1 + b.slideOffset
                        : a * d * -1 + e),
                b.options.variableWidth === !0 &&
                    ((f =
                        b.slideCount <= b.options.slidesToShow || b.options.infinite === !1
                            ? b.$slideTrack.children(".slick-slide").eq(a)
                            : b.$slideTrack
                                .children(".slick-slide")
                                .eq(a + b.options.slidesToShow)),
                        (c =
                            b.options.rtl === !0
                                ? f[0]
                                    ? -1 * (b.$slideTrack.width() - f[0].offsetLeft - f.width())
                                    : 0
                                : f[0]
                                    ? -1 * f[0].offsetLeft
                                    : 0),
                        b.options.centerMode === !0 &&
                            ((f =
                                b.slideCount <= b.options.slidesToShow ||
                                    b.options.infinite === !1
                                    ? b.$slideTrack.children(".slick-slide").eq(a)
                                    : b.$slideTrack
                                        .children(".slick-slide")
                                        .eq(a + b.options.slidesToShow + 1)),
                                (c =
                                    b.options.rtl === !0
                                        ? f[0]
                                            ? -1 * (b.$slideTrack.width() - f[0].offsetLeft - f.width())
                                            : 0
                                        : f[0]
                                            ? -1 * f[0].offsetLeft
                                            : 0),
                                (c += (b.$list.width() - f.outerWidth()) / 2))),
                c);
        }),
        (b.prototype.getOption = b.prototype.slickGetOption = function (a) {
            var b = this;
            return b.options[a];
        }),
        (b.prototype.getNavigableIndexes = function () {
            var e, a = this, b = 0, c = 0, d = [];
            for (a.options.infinite === !1
                ? (e = a.slideCount)
                : ((b = -1 * a.options.slidesToScroll),
                    (c = -1 * a.options.slidesToScroll),
                    (e = 2 * a.slideCount)); e > b;)
                d.push(b),
                    (b = c + a.options.slidesToScroll),
                    (c +=
                        a.options.slidesToScroll <= a.options.slidesToShow
                            ? a.options.slidesToScroll
                            : a.options.slidesToShow);
            return d;
        }),
        (b.prototype.getSlick = function () {
            return this;
        }),
        (b.prototype.getSlideCount = function () {
            var c, d, e, b = this;
            return ((e =
                b.options.centerMode === !0
                    ? b.slideWidth * Math.floor(b.options.slidesToShow / 2)
                    : 0),
                b.options.swipeToSlide === !0
                    ? (b.$slideTrack.find(".slick-slide").each(function (c, f) {
                        return f.offsetLeft - e + a(f).outerWidth() / 2 > -1 * b.swipeLeft
                            ? ((d = f), !1)
                            : void 0;
                    }),
                        (c = Math.abs(a(d).attr("data-slick-index") - b.currentSlide) || 1))
                    : b.options.slidesToScroll);
        }),
        (b.prototype.goTo = b.prototype.slickGoTo = function (a, b) {
            var c = this;
            c.changeSlide({ data: { message: "index", index: parseInt(a) } }, b);
        }),
        (b.prototype.init = function (b) {
            var c = this;
            a(c.$slider).hasClass("slick-initialized") ||
                (a(c.$slider).addClass("slick-initialized"),
                    c.buildRows(),
                    c.buildOut(),
                    c.setProps(),
                    c.startLoad(),
                    c.loadSlider(),
                    c.initializeEvents(),
                    c.updateArrows(),
                    c.updateDots(),
                    c.checkResponsive(!0),
                    c.focusHandler()),
                b && c.$slider.trigger("init", [c]),
                c.options.accessibility === !0 && c.initADA(),
                c.options.autoplay && ((c.paused = !1), c.autoPlay());
        }),
        (b.prototype.initADA = function () {
            var b = this;
            b.$slides
                .add(b.$slideTrack.find(".slick-cloned"))
                .attr({ "aria-hidden": "true", tabindex: "-1" })
                .find("a, input, button, select")
                .attr({ tabindex: "-1" }),
                b.$slideTrack.attr("role", "listbox"),
                b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function (c) {
                    a(this).attr({
                        role: "option",
                        "aria-describedby": "slick-slide" + b.instanceUid + c
                    });
                }),
                null !== b.$dots &&
                    b.$dots
                        .attr("role", "tablist")
                        .find("li")
                        .each(function (c) {
                        a(this).attr({
                            role: "presentation",
                            "aria-selected": "false",
                            "aria-controls": "navigation" + b.instanceUid + c,
                            id: "slick-slide" + b.instanceUid + c
                        });
                    })
                        .first()
                        .attr("aria-selected", "true")
                        .end()
                        .find("button")
                        .attr("role", "button")
                        .end()
                        .closest("div")
                        .attr("role", "toolbar"),
                b.activateADA();
        }),
        (b.prototype.initArrowEvents = function () {
            var a = this;
            a.options.arrows === !0 &&
                a.slideCount > a.options.slidesToShow &&
                (a.$prevArrow
                    .off("click.slick")
                    .on("click.slick", { message: "previous" }, a.changeSlide),
                    a.$nextArrow
                        .off("click.slick")
                        .on("click.slick", { message: "next" }, a.changeSlide));
        }),
        (b.prototype.initDotEvents = function () {
            var b = this;
            b.options.dots === !0 &&
                b.slideCount > b.options.slidesToShow &&
                a("li", b.$dots).on("click.slick", { message: "index" }, b.changeSlide),
                b.options.dots === !0 &&
                    b.options.pauseOnDotsHover === !0 &&
                    a("li", b.$dots)
                        .on("mouseenter.slick", a.proxy(b.interrupt, b, !0))
                        .on("mouseleave.slick", a.proxy(b.interrupt, b, !1));
        }),
        (b.prototype.initSlideEvents = function () {
            var b = this;
            b.options.pauseOnHover &&
                (b.$list.on("mouseenter.slick", a.proxy(b.interrupt, b, !0)),
                    b.$list.on("mouseleave.slick", a.proxy(b.interrupt, b, !1)));
        }),
        (b.prototype.initializeEvents = function () {
            var b = this;
            b.initArrowEvents(),
                b.initDotEvents(),
                b.initSlideEvents(),
                b.$list.on("touchstart.slick mousedown.slick", { action: "start" }, b.swipeHandler),
                b.$list.on("touchmove.slick mousemove.slick", { action: "move" }, b.swipeHandler),
                b.$list.on("touchend.slick mouseup.slick", { action: "end" }, b.swipeHandler),
                b.$list.on("touchcancel.slick mouseleave.slick", { action: "end" }, b.swipeHandler),
                b.$list.on("click.slick", b.clickHandler),
                a(document).on(b.visibilityChange, a.proxy(b.visibility, b)),
                b.options.accessibility === !0 &&
                    b.$list.on("keydown.slick", b.keyHandler),
                b.options.focusOnSelect === !0 &&
                    a(b.$slideTrack)
                        .children()
                        .on("click.slick", b.selectHandler),
                a(window).on("orientationchange.slick.slick-" + b.instanceUid, a.proxy(b.orientationChange, b)),
                a(window).on("resize.slick.slick-" + b.instanceUid, a.proxy(b.resize, b)),
                a("[draggable!=true]", b.$slideTrack).on("dragstart", b.preventDefault),
                a(window).on("load.slick.slick-" + b.instanceUid, b.setPosition),
                a(document).on("ready.slick.slick-" + b.instanceUid, b.setPosition);
        }),
        (b.prototype.initUI = function () {
            var a = this;
            a.options.arrows === !0 &&
                a.slideCount > a.options.slidesToShow &&
                (a.$prevArrow.show(), a.$nextArrow.show()),
                a.options.dots === !0 &&
                    a.slideCount > a.options.slidesToShow &&
                    a.$dots.show();
        }),
        (b.prototype.keyHandler = function (a) {
            var b = this;
            a.target.tagName.match("TEXTAREA|INPUT|SELECT") ||
                (37 === a.keyCode && b.options.accessibility === !0
                    ? b.changeSlide({
                        data: { message: b.options.rtl === !0 ? "next" : "previous" }
                    })
                    : 39 === a.keyCode &&
                        b.options.accessibility === !0 &&
                        b.changeSlide({
                            data: { message: b.options.rtl === !0 ? "previous" : "next" }
                        }));
        }),
        (b.prototype.lazyLoad = function () {
            function g(c) {
                a("img[data-lazy]", c).each(function () {
                    var c = a(this), d = a(this).attr("data-lazy"), e = document.createElement("img");
                    (e.onload = function () {
                        c.animate({ opacity: 0 }, 100, function () {
                            c.attr("src", d).animate({ opacity: 1 }, 200, function () {
                                c.removeAttr("data-lazy").removeClass("slick-loading");
                            }),
                                b.$slider.trigger("lazyLoaded", [b, c, d]);
                        });
                    }),
                        (e.onerror = function () {
                            c
                                .removeAttr("data-lazy")
                                .removeClass("slick-loading")
                                .addClass("slick-lazyload-error"),
                                b.$slider.trigger("lazyLoadError", [b, c, d]);
                        }),
                        (e.src = d);
                });
            }
            var c, d, e, f, b = this;
            b.options.centerMode === !0
                ? b.options.infinite === !0
                    ? ((e = b.currentSlide + (b.options.slidesToShow / 2 + 1)),
                        (f = e + b.options.slidesToShow + 2))
                    : ((e = Math.max(0, b.currentSlide - (b.options.slidesToShow / 2 + 1))),
                        (f = 2 + (b.options.slidesToShow / 2 + 1) + b.currentSlide))
                : ((e = b.options.infinite
                    ? b.options.slidesToShow + b.currentSlide
                    : b.currentSlide),
                    (f = Math.ceil(e + b.options.slidesToShow)),
                    b.options.fade === !0 && (e > 0 && e--, f <= b.slideCount && f++)),
                (c = b.$slider.find(".slick-slide").slice(e, f)),
                g(c),
                b.slideCount <= b.options.slidesToShow
                    ? ((d = b.$slider.find(".slick-slide")), g(d))
                    : b.currentSlide >= b.slideCount - b.options.slidesToShow
                        ? ((d = b.$slider
                            .find(".slick-cloned")
                            .slice(0, b.options.slidesToShow)),
                            g(d))
                        : 0 === b.currentSlide &&
                            ((d = b.$slider
                                .find(".slick-cloned")
                                .slice(-1 * b.options.slidesToShow)),
                                g(d));
        }),
        (b.prototype.loadSlider = function () {
            var a = this;
            a.setPosition(),
                a.$slideTrack.css({ opacity: 1 }),
                a.$slider.removeClass("slick-loading"),
                a.initUI(),
                "progressive" === a.options.lazyLoad && a.progressiveLazyLoad();
        }),
        (b.prototype.next = b.prototype.slickNext = function () {
            var a = this;
            a.changeSlide({ data: { message: "next" } });
        }),
        (b.prototype.orientationChange = function () {
            var a = this;
            a.checkResponsive(), a.setPosition();
        }),
        (b.prototype.pause = b.prototype.slickPause = function () {
            var a = this;
            a.autoPlayClear(), (a.paused = !0);
        }),
        (b.prototype.play = b.prototype.slickPlay = function () {
            var a = this;
            a.autoPlay(),
                (a.options.autoplay = !0),
                (a.paused = !1),
                (a.focussed = !1),
                (a.interrupted = !1);
        }),
        (b.prototype.postSlide = function (a) {
            var b = this;
            b.unslicked ||
                (b.$slider.trigger("afterChange", [b, a]),
                    (b.animating = !1),
                    b.setPosition(),
                    (b.swipeLeft = null),
                    b.options.autoplay && b.autoPlay(),
                    b.options.accessibility === !0 && b.initADA());
        }),
        (b.prototype.prev = b.prototype.slickPrev = function () {
            var a = this;
            a.changeSlide({ data: { message: "previous" } });
        }),
        (b.prototype.preventDefault = function (a) {
            a.preventDefault();
        }),
        (b.prototype.progressiveLazyLoad = function (b) {
            b = b || 1;
            var e, f, g, c = this, d = a("img[data-lazy]", c.$slider);
            d.length
                ? ((e = d.first()),
                    (f = e.attr("data-lazy")),
                    (g = document.createElement("img")),
                    (g.onload = function () {
                        e
                            .attr("src", f)
                            .removeAttr("data-lazy")
                            .removeClass("slick-loading"),
                            c.options.adaptiveHeight === !0 && c.setPosition(),
                            c.$slider.trigger("lazyLoaded", [c, e, f]),
                            c.progressiveLazyLoad();
                    }),
                    (g.onerror = function () {
                        3 > b
                            ? setTimeout(function () {
                                c.progressiveLazyLoad(b + 1);
                            }, 500)
                            : (e
                                .removeAttr("data-lazy")
                                .removeClass("slick-loading")
                                .addClass("slick-lazyload-error"),
                                c.$slider.trigger("lazyLoadError", [c, e, f]),
                                c.progressiveLazyLoad());
                    }),
                    (g.src = f))
                : c.$slider.trigger("allImagesLoaded", [c]);
        }),
        (b.prototype.refresh = function (b) {
            var d, e, c = this;
            (e = c.slideCount - c.options.slidesToShow),
                !c.options.infinite && c.currentSlide > e && (c.currentSlide = e),
                c.slideCount <= c.options.slidesToShow && (c.currentSlide = 0),
                (d = c.currentSlide),
                c.destroy(!0),
                a.extend(c, c.initials, { currentSlide: d }),
                c.init(),
                b || c.changeSlide({ data: { message: "index", index: d } }, !1);
        }),
        (b.prototype.registerBreakpoints = function () {
            var c, d, e, b = this, f = b.options.responsive || null;
            if ("array" === a.type(f) && f.length) {
                b.respondTo = b.options.respondTo || "window";
                for (c in f)
                    if (((e = b.breakpoints.length - 1),
                        (d = f[c].breakpoint),
                        f.hasOwnProperty(c))) {
                        for (; e >= 0;)
                            b.breakpoints[e] &&
                                b.breakpoints[e] === d &&
                                b.breakpoints.splice(e, 1),
                                e--;
                        b.breakpoints.push(d), (b.breakpointSettings[d] = f[c].settings);
                    }
                b.breakpoints.sort(function (a, c) {
                    return b.options.mobileFirst ? a - c : c - a;
                });
            }
        }),
        (b.prototype.reinit = function () {
            var b = this;
            (b.$slides = b.$slideTrack
                .children(b.options.slide)
                .addClass("slick-slide")),
                (b.slideCount = b.$slides.length),
                b.currentSlide >= b.slideCount &&
                    0 !== b.currentSlide &&
                    (b.currentSlide = b.currentSlide - b.options.slidesToScroll),
                b.slideCount <= b.options.slidesToShow && (b.currentSlide = 0),
                b.registerBreakpoints(),
                b.setProps(),
                b.setupInfinite(),
                b.buildArrows(),
                b.updateArrows(),
                b.initArrowEvents(),
                b.buildDots(),
                b.updateDots(),
                b.initDotEvents(),
                b.cleanUpSlideEvents(),
                b.initSlideEvents(),
                b.checkResponsive(!1, !0),
                b.options.focusOnSelect === !0 &&
                    a(b.$slideTrack)
                        .children()
                        .on("click.slick", b.selectHandler),
                b.setSlideClasses("number" == typeof b.currentSlide ? b.currentSlide : 0),
                b.setPosition(),
                b.focusHandler(),
                (b.paused = !b.options.autoplay),
                b.autoPlay(),
                b.$slider.trigger("reInit", [b]);
        }),
        (b.prototype.resize = function () {
            var b = this;
            a(window).width() !== b.windowWidth &&
                (clearTimeout(b.windowDelay),
                    (b.windowDelay = window.setTimeout(function () {
                        (b.windowWidth = a(window).width()),
                            b.checkResponsive(),
                            b.unslicked || b.setPosition();
                    }, 50)));
        }),
        (b.prototype.removeSlide = b.prototype.slickRemove = function (a, b, c) {
            var d = this;
            return ("boolean" == typeof a
                ? ((b = a), (a = b === !0 ? 0 : d.slideCount - 1))
                : (a = b === !0 ? --a : a),
                d.slideCount < 1 || 0 > a || a > d.slideCount - 1
                    ? !1
                    : (d.unload(),
                        c === !0
                            ? d.$slideTrack.children().remove()
                            : d.$slideTrack
                                .children(this.options.slide)
                                .eq(a)
                                .remove(),
                        (d.$slides = d.$slideTrack.children(this.options.slide)),
                        d.$slideTrack.children(this.options.slide).detach(),
                        d.$slideTrack.append(d.$slides),
                        (d.$slidesCache = d.$slides),
                        void d.reinit()));
        }),
        (b.prototype.setCSS = function (a) {
            var d, e, b = this, c = {};
            b.options.rtl === !0 && (a = -a),
                (d = "left" == b.positionProp ? Math.ceil(a) + "px" : "0px"),
                (e = "top" == b.positionProp ? Math.ceil(a) + "px" : "0px"),
                (c[b.positionProp] = a),
                b.transformsEnabled === !1
                    ? b.$slideTrack.css(c)
                    : ((c = {}),
                        b.cssTransitions === !1
                            ? ((c[b.animType] = "translate(" + d + ", " + e + ")"),
                                b.$slideTrack.css(c))
                            : ((c[b.animType] = "translate3d(" + d + ", " + e + ", 0px)"),
                                b.$slideTrack.css(c)));
        }),
        (b.prototype.setDimensions = function () {
            var a = this;
            a.options.vertical === !1
                ? a.options.centerMode === !0 &&
                    a.$list.css({ padding: "0px " + a.options.centerPadding })
                : (a.$list.height(a.$slides.first().outerHeight(!0) * a.options.slidesToShow),
                    a.options.centerMode === !0 &&
                        a.$list.css({ padding: a.options.centerPadding + " 0px" })),
                (a.listWidth = a.$list.width()),
                (a.listHeight = a.$list.height()),
                a.options.vertical === !1 && a.options.variableWidth === !1
                    ? ((a.slideWidth = Math.ceil(a.listWidth / a.options.slidesToShow)),
                        a.$slideTrack.width(Math.ceil(a.slideWidth * a.$slideTrack.children(".slick-slide").length)))
                    : a.options.variableWidth === !0
                        ? a.$slideTrack.width(5e3 * a.slideCount)
                        : ((a.slideWidth = Math.ceil(a.listWidth)),
                            a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0) *
                                a.$slideTrack.children(".slick-slide").length)));
            var b = a.$slides.first().outerWidth(!0) - a.$slides.first().width();
            a.options.variableWidth === !1 &&
                a.$slideTrack.children(".slick-slide").width(a.slideWidth - b);
        }),
        (b.prototype.setFade = function () {
            var c, b = this;
            b.$slides.each(function (d, e) {
                (c = b.slideWidth * d * -1),
                    b.options.rtl === !0
                        ? a(e).css({
                            position: "relative",
                            right: c,
                            top: 0,
                            zIndex: b.options.zIndex - 2,
                            opacity: 0
                        })
                        : a(e).css({
                            position: "relative",
                            left: c,
                            top: 0,
                            zIndex: b.options.zIndex - 2,
                            opacity: 0
                        });
            }),
                b.$slides
                    .eq(b.currentSlide)
                    .css({ zIndex: b.options.zIndex - 1, opacity: 1 });
        }),
        (b.prototype.setHeight = function () {
            var a = this;
            if (1 === a.options.slidesToShow &&
                a.options.adaptiveHeight === !0 &&
                a.options.vertical === !1) {
                var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
                a.$list.css("height", b);
            }
        }),
        (b.prototype.setOption = b.prototype.slickSetOption = function () {
            var c, d, e, f, h, b = this, g = !1;
            if (("object" === a.type(arguments[0])
                ? ((e = arguments[0]), (g = arguments[1]), (h = "multiple"))
                : "string" === a.type(arguments[0]) &&
                    ((e = arguments[0]),
                        (f = arguments[1]),
                        (g = arguments[2]),
                        "responsive" === arguments[0] && "array" === a.type(arguments[1])
                            ? (h = "responsive")
                            : "undefined" != typeof arguments[1] && (h = "single")),
                "single" === h))
                b.options[e] = f;
            else if ("multiple" === h)
                a.each(e, function (a, c) {
                    b.options[a] = c;
                });
            else if ("responsive" === h)
                for (d in f)
                    if ("array" !== a.type(b.options.responsive))
                        b.options.responsive = [f[d]];
                    else {
                        for (c = b.options.responsive.length - 1; c >= 0;)
                            b.options.responsive[c].breakpoint === f[d].breakpoint &&
                                b.options.responsive.splice(c, 1),
                                c--;
                        b.options.responsive.push(f[d]);
                    }
            g && (b.unload(), b.reinit());
        }),
        (b.prototype.setPosition = function () {
            var a = this;
            a.setDimensions(),
                a.setHeight(),
                a.options.fade === !1
                    ? a.setCSS(a.getLeft(a.currentSlide))
                    : a.setFade(),
                a.$slider.trigger("setPosition", [a]);
        }),
        (b.prototype.setProps = function () {
            var a = this, b = document.body.style;
            (a.positionProp = a.options.vertical === !0 ? "top" : "left"),
                "top" === a.positionProp
                    ? a.$slider.addClass("slick-vertical")
                    : a.$slider.removeClass("slick-vertical"),
                (void 0 !== b.WebkitTransition ||
                    void 0 !== b.MozTransition ||
                    void 0 !== b.msTransition) &&
                    a.options.useCSS === !0 &&
                    (a.cssTransitions = !0),
                a.options.fade &&
                    ("number" == typeof a.options.zIndex
                        ? a.options.zIndex < 3 && (a.options.zIndex = 3)
                        : (a.options.zIndex = a.defaults.zIndex)),
                void 0 !== b.OTransform &&
                    ((a.animType = "OTransform"),
                        (a.transformType = "-o-transform"),
                        (a.transitionType = "OTransition"),
                        void 0 === b.perspectiveProperty &&
                            void 0 === b.webkitPerspective &&
                            (a.animType = !1)),
                void 0 !== b.MozTransform &&
                    ((a.animType = "MozTransform"),
                        (a.transformType = "-moz-transform"),
                        (a.transitionType = "MozTransition"),
                        void 0 === b.perspectiveProperty &&
                            void 0 === b.MozPerspective &&
                            (a.animType = !1)),
                void 0 !== b.webkitTransform &&
                    ((a.animType = "webkitTransform"),
                        (a.transformType = "-webkit-transform"),
                        (a.transitionType = "webkitTransition"),
                        void 0 === b.perspectiveProperty &&
                            void 0 === b.webkitPerspective &&
                            (a.animType = !1)),
                void 0 !== b.msTransform &&
                    ((a.animType = "msTransform"),
                        (a.transformType = "-ms-transform"),
                        (a.transitionType = "msTransition"),
                        void 0 === b.msTransform && (a.animType = !1)),
                void 0 !== b.transform &&
                    a.animType !== !1 &&
                    ((a.animType = "transform"),
                        (a.transformType = "transform"),
                        (a.transitionType = "transition")),
                (a.transformsEnabled =
                    a.options.useTransform && null !== a.animType && a.animType !== !1);
        }),
        (b.prototype.setSlideClasses = function (a) {
            var c, d, e, f, b = this;
            (d = b.$slider
                .find(".slick-slide")
                .removeClass("slick-active slick-center slick-current")
                .attr("aria-hidden", "true")),
                b.$slides.eq(a).addClass("slick-current"),
                b.options.centerMode === !0
                    ? ((c = Math.floor(b.options.slidesToShow / 2)),
                        b.options.infinite === !0 &&
                            (a >= c && a <= b.slideCount - 1 - c
                                ? b.$slides
                                    .slice(a - c, a + c + 1)
                                    .addClass("slick-active")
                                    .attr("aria-hidden", "false")
                                : ((e = b.options.slidesToShow + a),
                                    d
                                        .slice(e - c + 1, e + c + 2)
                                        .addClass("slick-active")
                                        .attr("aria-hidden", "false")),
                                0 === a
                                    ? d
                                        .eq(d.length - 1 - b.options.slidesToShow)
                                        .addClass("slick-center")
                                    : a === b.slideCount - 1 &&
                                        d.eq(b.options.slidesToShow).addClass("slick-center")),
                        b.$slides.eq(a).addClass("slick-center"))
                    : a >= 0 && a <= b.slideCount - b.options.slidesToShow
                        ? b.$slides
                            .slice(a, a + b.options.slidesToShow)
                            .addClass("slick-active")
                            .attr("aria-hidden", "false")
                        : d.length <= b.options.slidesToShow
                            ? d.addClass("slick-active").attr("aria-hidden", "false")
                            : ((f = b.slideCount % b.options.slidesToShow),
                                (e = b.options.infinite === !0 ? b.options.slidesToShow + a : a),
                                b.options.slidesToShow == b.options.slidesToScroll &&
                                    b.slideCount - a < b.options.slidesToShow
                                    ? d
                                        .slice(e - (b.options.slidesToShow - f), e + f)
                                        .addClass("slick-active")
                                        .attr("aria-hidden", "false")
                                    : d
                                        .slice(e, e + b.options.slidesToShow)
                                        .addClass("slick-active")
                                        .attr("aria-hidden", "false")),
                "ondemand" === b.options.lazyLoad && b.lazyLoad();
        }),
        (b.prototype.setupInfinite = function () {
            var c, d, e, b = this;
            if ((b.options.fade === !0 && (b.options.centerMode = !1),
                b.options.infinite === !0 &&
                    b.options.fade === !1 &&
                    ((d = null), b.slideCount > b.options.slidesToShow))) {
                for (e =
                    b.options.centerMode === !0
                        ? b.options.slidesToShow + 1
                        : b.options.slidesToShow,
                    c = b.slideCount; c > b.slideCount - e; c -= 1)
                    (d = c - 1),
                        a(b.$slides[d])
                            .clone(!0)
                            .attr("id", "")
                            .attr("data-slick-index", d - b.slideCount)
                            .prependTo(b.$slideTrack)
                            .addClass("slick-cloned");
                for (c = 0; e > c; c += 1)
                    (d = c),
                        a(b.$slides[d])
                            .clone(!0)
                            .attr("id", "")
                            .attr("data-slick-index", d + b.slideCount)
                            .appendTo(b.$slideTrack)
                            .addClass("slick-cloned");
                b.$slideTrack
                    .find(".slick-cloned")
                    .find("[id]")
                    .each(function () {
                    a(this).attr("id", "");
                });
            }
        }),
        (b.prototype.interrupt = function (a) {
            var b = this;
            a || b.autoPlay(), (b.interrupted = a);
        }),
        (b.prototype.selectHandler = function (b) {
            var c = this, d = a(b.target).is(".slick-slide")
                ? a(b.target)
                : a(b.target).parents(".slick-slide"), e = parseInt(d.attr("data-slick-index"));
            return (e || (e = 0),
                c.slideCount <= c.options.slidesToShow
                    ? (c.setSlideClasses(e), void c.asNavFor(e))
                    : void c.slideHandler(e));
        }),
        (b.prototype.slideHandler = function (a, b, c) {
            var d, e, f, g, j, h = null, i = this;
            return ((b = b || !1),
                (i.animating === !0 && i.options.waitForAnimate === !0) ||
                    (i.options.fade === !0 && i.currentSlide === a) ||
                    i.slideCount <= i.options.slidesToShow
                    ? void 0
                    : (b === !1 && i.asNavFor(a),
                        (d = a),
                        (h = i.getLeft(d)),
                        (g = i.getLeft(i.currentSlide)),
                        (i.currentLeft = null === i.swipeLeft ? g : i.swipeLeft),
                        i.options.infinite === !1 &&
                            i.options.centerMode === !1 &&
                            (0 > a || a > i.getDotCount() * i.options.slidesToScroll)
                            ? void (i.options.fade === !1 &&
                                ((d = i.currentSlide),
                                    c !== !0
                                        ? i.animateSlide(g, function () {
                                            i.postSlide(d);
                                        })
                                        : i.postSlide(d)))
                            : i.options.infinite === !1 &&
                                i.options.centerMode === !0 &&
                                (0 > a || a > i.slideCount - i.options.slidesToScroll)
                                ? void (i.options.fade === !1 &&
                                    ((d = i.currentSlide),
                                        c !== !0
                                            ? i.animateSlide(g, function () {
                                                i.postSlide(d);
                                            })
                                            : i.postSlide(d)))
                                : (i.options.autoplay && clearInterval(i.autoPlayTimer),
                                    (e =
                                        0 > d
                                            ? i.slideCount % i.options.slidesToScroll !== 0
                                                ? i.slideCount - (i.slideCount % i.options.slidesToScroll)
                                                : i.slideCount + d
                                            : d >= i.slideCount
                                                ? i.slideCount % i.options.slidesToScroll !== 0
                                                    ? 0
                                                    : d - i.slideCount
                                                : d),
                                    (i.animating = !0),
                                    i.$slider.trigger("beforeChange", [i, i.currentSlide, e]),
                                    (f = i.currentSlide),
                                    (i.currentSlide = e),
                                    i.setSlideClasses(i.currentSlide),
                                    i.options.asNavFor &&
                                        ((j = i.getNavTarget()),
                                            (j = j.slick("getSlick")),
                                            j.slideCount <= j.options.slidesToShow &&
                                                j.setSlideClasses(i.currentSlide)),
                                    i.updateDots(),
                                    i.updateArrows(),
                                    i.options.fade === !0
                                        ? (c !== !0
                                            ? (i.fadeSlideOut(f),
                                                i.fadeSlide(e, function () {
                                                    i.postSlide(e);
                                                }))
                                            : i.postSlide(e),
                                            void i.animateHeight())
                                        : void (c !== !0
                                            ? i.animateSlide(h, function () {
                                                i.postSlide(e);
                                            })
                                            : i.postSlide(e)))));
        }),
        (b.prototype.startLoad = function () {
            var a = this;
            a.options.arrows === !0 &&
                a.slideCount > a.options.slidesToShow &&
                (a.$prevArrow.hide(), a.$nextArrow.hide()),
                a.options.dots === !0 &&
                    a.slideCount > a.options.slidesToShow &&
                    a.$dots.hide(),
                a.$slider.addClass("slick-loading");
        }),
        (b.prototype.swipeDirection = function () {
            var a, b, c, d, e = this;
            return ((a = e.touchObject.startX - e.touchObject.curX),
                (b = e.touchObject.startY - e.touchObject.curY),
                (c = Math.atan2(b, a)),
                (d = Math.round((180 * c) / Math.PI)),
                0 > d && (d = 360 - Math.abs(d)),
                45 >= d && d >= 0
                    ? e.options.rtl === !1
                        ? "left"
                        : "right"
                    : 360 >= d && d >= 315
                        ? e.options.rtl === !1
                            ? "left"
                            : "right"
                        : d >= 135 && 225 >= d
                            ? e.options.rtl === !1
                                ? "right"
                                : "left"
                            : e.options.verticalSwiping === !0
                                ? d >= 35 && 135 >= d
                                    ? "down"
                                    : "up"
                                : "vertical");
        }),
        (b.prototype.swipeEnd = function (a) {
            var c, d, b = this;
            if (((b.dragging = !1),
                (b.interrupted = !1),
                (b.shouldClick = b.touchObject.swipeLength > 10 ? !1 : !0),
                void 0 === b.touchObject.curX))
                return !1;
            if ((b.touchObject.edgeHit === !0 &&
                b.$slider.trigger("edge", [b, b.swipeDirection()]),
                b.touchObject.swipeLength >= b.touchObject.minSwipe)) {
                switch ((d = b.swipeDirection())) {
                    case "left":
                    case "down":
                        (c = b.options.swipeToSlide
                            ? b.checkNavigable(b.currentSlide + b.getSlideCount())
                            : b.currentSlide + b.getSlideCount()),
                            (b.currentDirection = 0);
                        break;
                    case "right":
                    case "up":
                        (c = b.options.swipeToSlide
                            ? b.checkNavigable(b.currentSlide - b.getSlideCount())
                            : b.currentSlide - b.getSlideCount()),
                            (b.currentDirection = 1);
                }
                "vertical" != d &&
                    (b.slideHandler(c),
                        (b.touchObject = {}),
                        b.$slider.trigger("swipe", [b, d]));
            }
            else
                b.touchObject.startX !== b.touchObject.curX &&
                    (b.slideHandler(b.currentSlide), (b.touchObject = {}));
        }),
        (b.prototype.swipeHandler = function (a) {
            var b = this;
            if (!(b.options.swipe === !1 ||
                ("ontouchend" in document && b.options.swipe === !1) ||
                (b.options.draggable === !1 && -1 !== a.type.indexOf("mouse"))))
                switch (((b.touchObject.fingerCount =
                    a.originalEvent && void 0 !== a.originalEvent.touches
                        ? a.originalEvent.touches.length
                        : 1),
                    (b.touchObject.minSwipe = b.listWidth / b.options.touchThreshold),
                    b.options.verticalSwiping === !0 &&
                        (b.touchObject.minSwipe = b.listHeight / b.options.touchThreshold),
                    a.data.action)) {
                    case "start":
                        b.swipeStart(a);
                        break;
                    case "move":
                        b.swipeMove(a);
                        break;
                    case "end":
                        b.swipeEnd(a);
                }
        }),
        (b.prototype.swipeMove = function (a) {
            var d, e, f, g, h, b = this;
            return ((h = void 0 !== a.originalEvent ? a.originalEvent.touches : null),
                !b.dragging || (h && 1 !== h.length)
                    ? !1
                    : ((d = b.getLeft(b.currentSlide)),
                        (b.touchObject.curX = void 0 !== h ? h[0].pageX : a.clientX),
                        (b.touchObject.curY = void 0 !== h ? h[0].pageY : a.clientY),
                        (b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curX - b.touchObject.startX, 2)))),
                        b.options.verticalSwiping === !0 &&
                            (b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curY - b.touchObject.startY, 2)))),
                        (e = b.swipeDirection()),
                        "vertical" !== e
                            ? (void 0 !== a.originalEvent &&
                                b.touchObject.swipeLength > 4 &&
                                a.preventDefault(),
                                (g =
                                    (b.options.rtl === !1 ? 1 : -1) *
                                        (b.touchObject.curX > b.touchObject.startX ? 1 : -1)),
                                b.options.verticalSwiping === !0 &&
                                    (g = b.touchObject.curY > b.touchObject.startY ? 1 : -1),
                                (f = b.touchObject.swipeLength),
                                (b.touchObject.edgeHit = !1),
                                b.options.infinite === !1 &&
                                    ((0 === b.currentSlide && "right" === e) ||
                                        (b.currentSlide >= b.getDotCount() && "left" === e)) &&
                                    ((f = b.touchObject.swipeLength * b.options.edgeFriction),
                                        (b.touchObject.edgeHit = !0)),
                                b.options.vertical === !1
                                    ? (b.swipeLeft = d + f * g)
                                    : (b.swipeLeft =
                                        d + f * (b.$list.height() / b.listWidth) * g),
                                b.options.verticalSwiping === !0 && (b.swipeLeft = d + f * g),
                                b.options.fade === !0 || b.options.touchMove === !1
                                    ? !1
                                    : b.animating === !0
                                        ? ((b.swipeLeft = null), !1)
                                        : void b.setCSS(b.swipeLeft))
                            : void 0));
        }),
        (b.prototype.swipeStart = function (a) {
            var c, b = this;
            return ((b.interrupted = !0),
                1 !== b.touchObject.fingerCount ||
                    b.slideCount <= b.options.slidesToShow
                    ? ((b.touchObject = {}), !1)
                    : (void 0 !== a.originalEvent &&
                        void 0 !== a.originalEvent.touches &&
                        (c = a.originalEvent.touches[0]),
                        (b.touchObject.startX = b.touchObject.curX =
                            void 0 !== c ? c.pageX : a.clientX),
                        (b.touchObject.startY = b.touchObject.curY =
                            void 0 !== c ? c.pageY : a.clientY),
                        void (b.dragging = !0)));
        }),
        (b.prototype.unfilterSlides = b.prototype.slickUnfilter = function () {
            var a = this;
            null !== a.$slidesCache &&
                (a.unload(),
                    a.$slideTrack.children(this.options.slide).detach(),
                    a.$slidesCache.appendTo(a.$slideTrack),
                    a.reinit());
        }),
        (b.prototype.unload = function () {
            var b = this;
            a(".slick-cloned", b.$slider).remove(),
                b.$dots && b.$dots.remove(),
                b.$prevArrow &&
                    b.htmlExpr.test(b.options.prevArrow) &&
                    b.$prevArrow.remove(),
                b.$nextArrow &&
                    b.htmlExpr.test(b.options.nextArrow) &&
                    b.$nextArrow.remove(),
                b.$slides
                    .removeClass("slick-slide slick-active slick-visible slick-current")
                    .attr("aria-hidden", "true")
                    .css("width", "");
        }),
        (b.prototype.unslick = function (a) {
            var b = this;
            b.$slider.trigger("unslick", [b, a]), b.destroy();
        }),
        (b.prototype.updateArrows = function () {
            var b, a = this;
            (b = Math.floor(a.options.slidesToShow / 2)),
                a.options.arrows === !0 &&
                    a.slideCount > a.options.slidesToShow &&
                    !a.options.infinite &&
                    (a.$prevArrow
                        .removeClass("slick-disabled")
                        .attr("aria-disabled", "false"),
                        a.$nextArrow
                            .removeClass("slick-disabled")
                            .attr("aria-disabled", "false"),
                        0 === a.currentSlide
                            ? (a.$prevArrow
                                .addClass("slick-disabled")
                                .attr("aria-disabled", "true"),
                                a.$nextArrow
                                    .removeClass("slick-disabled")
                                    .attr("aria-disabled", "false"))
                            : a.currentSlide >= a.slideCount - a.options.slidesToShow &&
                                a.options.centerMode === !1
                                ? (a.$nextArrow
                                    .addClass("slick-disabled")
                                    .attr("aria-disabled", "true"),
                                    a.$prevArrow
                                        .removeClass("slick-disabled")
                                        .attr("aria-disabled", "false"))
                                : a.currentSlide >= a.slideCount - 1 &&
                                    a.options.centerMode === !0 &&
                                    (a.$nextArrow
                                        .addClass("slick-disabled")
                                        .attr("aria-disabled", "true"),
                                        a.$prevArrow
                                            .removeClass("slick-disabled")
                                            .attr("aria-disabled", "false")));
        }),
        (b.prototype.updateDots = function () {
            var a = this;
            null !== a.$dots &&
                (a.$dots
                    .find("li")
                    .removeClass("slick-active")
                    .attr("aria-hidden", "true"),
                    a.$dots
                        .find("li")
                        .eq(Math.floor(a.currentSlide / a.options.slidesToScroll))
                        .addClass("slick-active")
                        .attr("aria-hidden", "false"));
        }),
        (b.prototype.visibility = function () {
            var a = this;
            a.options.autoplay &&
                (document[a.hidden] ? (a.interrupted = !0) : (a.interrupted = !1));
        }),
        (a.fn.slick = function () {
            var f, g, a = this, c = arguments[0], d = Array.prototype.slice.call(arguments, 1), e = a.length;
            for (f = 0; e > f; f++)
                if (("object" == typeof c || "undefined" == typeof c
                    ? (a[f].slick = new b(a[f], c))
                    : (g = a[f].slick[c].apply(a[f].slick, d)),
                    "undefined" != typeof g))
                    return g;
            return a;
        });
});
/*! odometer 0.4.8 */
(function () {
    var a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G = [].slice;
    (q = '<span class="odometer-value"></span>'),
        (n =
            '<span class="odometer-ribbon"><span class="odometer-ribbon-inner">' +
                q +
                "</span></span>"),
        (d =
            '<span class="odometer-digit"><span class="odometer-digit-spacer">8</span><span class="odometer-digit-inner">' +
                n +
                "</span></span>"),
        (g = '<span class="odometer-formatting-mark"></span>'),
        (c = "(,ddd).dd"),
        (h = /^\(?([^)]*)\)?(?:(.)(d+))?$/),
        (i = 30),
        (f = 2e3),
        (a = 20),
        (j = 2),
        (e = 0.5),
        (k = 1e3 / i),
        (b = 1e3 / a),
        (o =
            "transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd"),
        (y = document.createElement("div").style),
        (p =
            null != y.transition ||
                null != y.webkitTransition ||
                null != y.mozTransition ||
                null != y.oTransition),
        (w =
            window.requestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.msRequestAnimationFrame),
        (l =
            window.MutationObserver ||
                window.WebKitMutationObserver ||
                window.MozMutationObserver),
        (s = function (a) {
            var b;
            return ((b = document.createElement("div")), (b.innerHTML = a), b.children[0]);
        }),
        (v = function (a, b) {
            return (a.className = a.className.replace(new RegExp("(^| )" + b.split(" ").join("|") + "( |$)", "gi"), " "));
        }),
        (r = function (a, b) {
            return v(a, b), (a.className += " " + b);
        }),
        (z = function (a, b) {
            var c;
            return null != document.createEvent
                ? ((c = document.createEvent("HTMLEvents")),
                    c.initEvent(b, !0, !0),
                    a.dispatchEvent(c))
                : void 0;
        }),
        (u = function () {
            var a, b;
            return null !=
                (a =
                    null != (b = window.performance) && "function" == typeof b.now
                        ? b.now()
                        : void 0)
                ? a
                : +new Date();
        }),
        (x = function (a, b) {
            return (null == b && (b = 0),
                b
                    ? ((a *= Math.pow(10, b)),
                        (a += 0.5),
                        (a = Math.floor(a)),
                        (a /= Math.pow(10, b)))
                    : Math.round(a));
        }),
        (A = function (a) {
            return 0 > a ? Math.ceil(a) : Math.floor(a);
        }),
        (t = function (a) {
            return a - x(a);
        }),
        (C = !1),
        (B = function () {
            var a, b, c, d, e;
            if (!C && null != window.jQuery) {
                for (C = !0, d = ["html", "text"], e = [], b = 0, c = d.length; c > b; b++)
                    (a = d[b]),
                        e.push((function (a) {
                            var b;
                            return ((b = window.jQuery.fn[a]),
                                (window.jQuery.fn[a] = function (a) {
                                    var c;
                                    return null == a ||
                                        null == (null != (c = this[0]) ? c.odometer : void 0)
                                        ? b.apply(this, arguments)
                                        : this[0].odometer.update(a);
                                }));
                        })(a));
                return e;
            }
        })(),
        setTimeout(B, 0),
        (m = (function () {
            function a(b) {
                var c, d, e, g, h, i, l, m, n, o, p = this;
                if (((this.options = b),
                    (this.el = this.options.el),
                    null != this.el.odometer))
                    return this.el.odometer;
                (this.el.odometer = this), (m = a.options);
                for (d in m)
                    (g = m[d]), null == this.options[d] && (this.options[d] = g);
                null == (h = this.options).duration && (h.duration = f),
                    (this.MAX_VALUES = (this.options.duration / k / j) | 0),
                    this.resetFormat(),
                    (this.value = this.cleanValue(null != (n = this.options.value) ? n : "")),
                    this.renderInside(),
                    this.render();
                try {
                    for (o = ["innerHTML", "innerText", "textContent"], i = 0, l = o.length; l > i; i++)
                        (e = o[i]),
                            null != this.el[e] &&
                                !(function (a) {
                                    return Object.defineProperty(p.el, a, {
                                        get: function () {
                                            var b;
                                            return "innerHTML" === a
                                                ? p.inside.outerHTML
                                                : null != (b = p.inside.innerText)
                                                    ? b
                                                    : p.inside.textContent;
                                        },
                                        set: function (a) {
                                            return p.update(a);
                                        }
                                    });
                                })(e);
                }
                catch (q) {
                    (c = q), this.watchForMutations();
                }
            }
            return ((a.prototype.renderInside = function () {
                return ((this.inside = document.createElement("div")),
                    (this.inside.className = "odometer-inside"),
                    (this.el.innerHTML = ""),
                    this.el.appendChild(this.inside));
            }),
                (a.prototype.watchForMutations = function () {
                    var a, b = this;
                    if (null != l)
                        try {
                            return (null == this.observer &&
                                (this.observer = new l(function (a) {
                                    var c;
                                    return ((c = b.el.innerText),
                                        b.renderInside(),
                                        b.render(b.value),
                                        b.update(c));
                                })),
                                (this.watchMutations = !0),
                                this.startWatchingMutations());
                        }
                        catch (c) {
                            a = c;
                        }
                }),
                (a.prototype.startWatchingMutations = function () {
                    return this.watchMutations
                        ? this.observer.observe(this.el, { childList: !0 })
                        : void 0;
                }),
                (a.prototype.stopWatchingMutations = function () {
                    var a;
                    return null != (a = this.observer) ? a.disconnect() : void 0;
                }),
                (a.prototype.cleanValue = function (a) {
                    var b;
                    return ("string" == typeof a &&
                        ((a = a.replace(null != (b = this.format.radix) ? b : ".", "<radix>")),
                            (a = a.replace(/[.,]/g, "")),
                            (a = a.replace("<radix>", ".")),
                            (a = parseFloat(a, 10) || 0)),
                        x(a, this.format.precision));
                }),
                (a.prototype.bindTransitionEnd = function () {
                    var a, b, c, d, e, f, g = this;
                    if (!this.transitionEndBound) {
                        for (this.transitionEndBound = !0,
                            b = !1,
                            e = o.split(" "),
                            f = [],
                            c = 0,
                            d = e.length; d > c; c++)
                            (a = e[c]),
                                f.push(this.el.addEventListener(a, function () {
                                    return b
                                        ? !0
                                        : ((b = !0),
                                            setTimeout(function () {
                                                return (g.render(), (b = !1), z(g.el, "odometerdone"));
                                            }, 0),
                                            !0);
                                }, !1));
                        return f;
                    }
                }),
                (a.prototype.resetFormat = function () {
                    var a, b, d, e, f, g, i, j;
                    if (((a = null != (i = this.options.format) ? i : c),
                        a || (a = "d"),
                        (d = h.exec(a)),
                        !d))
                        throw new Error("Odometer: Unparsable digit format");
                    return ((j = d.slice(1, 4)),
                        (g = j[0]),
                        (f = j[1]),
                        (b = j[2]),
                        (e = (null != b ? b.length : void 0) || 0),
                        (this.format = { repeating: g, radix: f, precision: e }));
                }),
                (a.prototype.render = function (a) {
                    var b, c, d, e, f, g, h;
                    for (null == a && (a = this.value),
                        this.stopWatchingMutations(),
                        this.resetFormat(),
                        this.inside.innerHTML = "",
                        f = this.options.theme,
                        b = this.el.className.split(" "),
                        e = [],
                        g = 0,
                        h = b.length; h > g; g++)
                        (c = b[g]),
                            c.length &&
                                ((d = /^odometer-theme-(.+)$/.exec(c))
                                    ? (f = d[1])
                                    : /^odometer(-|$)/.test(c) || e.push(c));
                    return (e.push("odometer"),
                        p || e.push("odometer-no-transitions"),
                        f ? e.push("odometer-theme-" + f) : e.push("odometer-auto-theme"),
                        (this.el.className = e.join(" ")),
                        (this.ribbons = {}),
                        this.formatDigits(a),
                        this.startWatchingMutations());
                }),
                (a.prototype.formatDigits = function (a) {
                    var b, c, d, e, f, g, h, i, j, k;
                    if (((this.digits = []), this.options.formatFunction))
                        for (d = this.options.formatFunction(a),
                            j = d.split("").reverse(),
                            f = 0,
                            h = j.length; h > f; f++)
                            (c = j[f]),
                                c.match(/0-9/)
                                    ? ((b = this.renderDigit()),
                                        (b.querySelector(".odometer-value").innerHTML = c),
                                        this.digits.push(b),
                                        this.insertDigit(b))
                                    : this.addSpacer(c);
                    else
                        for (e = !this.format.precision || !t(a) || !1,
                            k = a
                                .toString()
                                .split("")
                                .reverse(),
                            g = 0,
                            i = k.length; i > g; g++)
                            (b = k[g]), "." === b && (e = !0), this.addDigit(b, e);
                }),
                (a.prototype.update = function (a) {
                    var b, c = this;
                    return ((a = this.cleanValue(a)),
                        (b = a - this.value)
                            ? (v(this.el, "odometer-animating-up odometer-animating-down odometer-animating"),
                                b > 0
                                    ? r(this.el, "odometer-animating-up")
                                    : r(this.el, "odometer-animating-down"),
                                this.stopWatchingMutations(),
                                this.animate(a),
                                this.startWatchingMutations(),
                                setTimeout(function () {
                                    return c.el.offsetHeight, r(c.el, "odometer-animating");
                                }, 0),
                                (this.value = a))
                            : void 0);
                }),
                (a.prototype.renderDigit = function () {
                    return s(d);
                }),
                (a.prototype.insertDigit = function (a, b) {
                    return null != b
                        ? this.inside.insertBefore(a, b)
                        : this.inside.children.length
                            ? this.inside.insertBefore(a, this.inside.children[0])
                            : this.inside.appendChild(a);
                }),
                (a.prototype.addSpacer = function (a, b, c) {
                    var d;
                    return ((d = s(g)), (d.innerHTML = a), c && r(d, c), this.insertDigit(d, b));
                }),
                (a.prototype.addDigit = function (a, b) {
                    var c, d, e, f;
                    if ((null == b && (b = !0), "-" === a))
                        return this.addSpacer(a, null, "odometer-negation-mark");
                    if ("." === a)
                        return this.addSpacer(null != (f = this.format.radix) ? f : ".", null, "odometer-radix-mark");
                    if (b)
                        for (e = !1;;) {
                            if (!this.format.repeating.length) {
                                if (e)
                                    throw new Error("Bad odometer format without digits");
                                this.resetFormat(), (e = !0);
                            }
                            if (((c = this.format.repeating[this.format.repeating.length - 1]),
                                (this.format.repeating = this.format.repeating.substring(0, this.format.repeating.length - 1)),
                                "d" === c))
                                break;
                            this.addSpacer(c);
                        }
                    return ((d = this.renderDigit()),
                        (d.querySelector(".odometer-value").innerHTML = a),
                        this.digits.push(d),
                        this.insertDigit(d));
                }),
                (a.prototype.animate = function (a) {
                    return p && "count" !== this.options.animation
                        ? this.animateSlide(a)
                        : this.animateCount(a);
                }),
                (a.prototype.animateCount = function (a) {
                    var c, d, e, f, g, h = this;
                    if ((d = +a - this.value))
                        return ((f = e = u()),
                            (c = this.value),
                            (g = function () {
                                var i, j, k;
                                return u() - f > h.options.duration
                                    ? ((h.value = a), h.render(), void z(h.el, "odometerdone"))
                                    : ((i = u() - e),
                                        i > b &&
                                            ((e = u()),
                                                (k = i / h.options.duration),
                                                (j = d * k),
                                                (c += j),
                                                h.render(Math.round(c))),
                                        null != w ? w(g) : setTimeout(g, b));
                            })());
                }),
                (a.prototype.getDigitCount = function () {
                    var a, b, c, d, e, f;
                    for (d = 1 <= arguments.length ? G.call(arguments, 0) : [],
                        a = e = 0,
                        f = d.length; f > e; a = ++e)
                        (c = d[a]), (d[a] = Math.abs(c));
                    return ((b = Math.max.apply(Math, d)),
                        Math.ceil(Math.log(b + 1) / Math.log(10)));
                }),
                (a.prototype.getFractionalDigitCount = function () {
                    var a, b, c, d, e, f, g;
                    for (e = 1 <= arguments.length ? G.call(arguments, 0) : [],
                        b = /^\-?\d*\.(\d*?)0*$/,
                        a = f = 0,
                        g = e.length; g > f; a = ++f)
                        (d = e[a]),
                            (e[a] = d.toString()),
                            (c = b.exec(e[a])),
                            null == c ? (e[a] = 0) : (e[a] = c[1].length);
                    return Math.max.apply(Math, e);
                }),
                (a.prototype.resetDigits = function () {
                    return ((this.digits = []),
                        (this.ribbons = []),
                        (this.inside.innerHTML = ""),
                        this.resetFormat());
                }),
                (a.prototype.animateSlide = function (a) {
                    var b, c, d, f, g, h, i, j, k, l, m, n, o, p, q, s, t, u, v, w, x, y, z, B, C, D, E;
                    if (((s = this.value),
                        (j = this.getFractionalDigitCount(s, a)),
                        j && ((a *= Math.pow(10, j)), (s *= Math.pow(10, j))),
                        (d = a - s))) {
                        for (this.bindTransitionEnd(),
                            f = this.getDigitCount(s, a),
                            g = [],
                            b = 0,
                            m = v = 0; f >= 0 ? f > v : v > f; m = f >= 0 ? ++v : --v) {
                            if (((t = A(s / Math.pow(10, f - m - 1))),
                                (i = A(a / Math.pow(10, f - m - 1))),
                                (h = i - t),
                                Math.abs(h) > this.MAX_VALUES)) {
                                for (l = [],
                                    n = h / (this.MAX_VALUES + this.MAX_VALUES * b * e),
                                    c = t; (h > 0 && i > c) || (0 > h && c > i);)
                                    l.push(Math.round(c)), (c += n);
                                l[l.length - 1] !== i && l.push(i), b++;
                            }
                            else
                                l = function () {
                                    E = [];
                                    for (var a = t; i >= t ? i >= a : a >= i; i >= t ? a++ : a--)
                                        E.push(a);
                                    return E;
                                }.apply(this);
                            for (m = w = 0, y = l.length; y > w; m = ++w)
                                (k = l[m]), (l[m] = Math.abs(k % 10));
                            g.push(l);
                        }
                        for (this.resetDigits(), D = g.reverse(), m = x = 0, z = D.length; z > x; m = ++x)
                            for (l = D[m],
                                this.digits[m] || this.addDigit(" ", m >= j),
                                null == (u = this.ribbons)[m] &&
                                    (u[m] = this.digits[m].querySelector(".odometer-ribbon-inner")),
                                this.ribbons[m].innerHTML = "",
                                0 > d && (l = l.reverse()),
                                o = C = 0,
                                B = l.length; B > C; o = ++C)
                                (k = l[o]),
                                    (q = document.createElement("div")),
                                    (q.className = "odometer-value"),
                                    (q.innerHTML = k),
                                    this.ribbons[m].appendChild(q),
                                    o === l.length - 1 && r(q, "odometer-last-value"),
                                    0 === o && r(q, "odometer-first-value");
                        return (0 > t && this.addDigit("-"),
                            (p = this.inside.querySelector(".odometer-radix-mark")),
                            null != p && p.parent.removeChild(p),
                            j
                                ? this.addSpacer(this.format.radix, this.digits[j - 1], "odometer-radix-mark")
                                : void 0);
                    }
                }),
                a);
        })()),
        (m.options = null != (E = window.odometerOptions) ? E : {}),
        setTimeout(function () {
            var a, b, c, d, e;
            if (window.odometerOptions) {
                (d = window.odometerOptions), (e = []);
                for (a in d)
                    (b = d[a]),
                        e.push(null != (c = m.options)[a] ? (c = m.options)[a] : (c[a] = b));
                return e;
            }
        }, 0),
        (m.init = function () {
            var a, b, c, d, e, f;
            if (null != document.querySelectorAll) {
                for (b = document.querySelectorAll(m.options.selector || ".odometer"),
                    f = [],
                    c = 0,
                    d = b.length; d > c; c++)
                    (a = b[c]),
                        f.push((a.odometer = new m({
                            el: a,
                            value: null != (e = a.innerText) ? e : a.textContent
                        })));
                return f;
            }
        }),
        null != (null != (F = document.documentElement) ? F.doScroll : void 0) &&
            null != document.createEventObject
            ? ((D = document.onreadystatechange),
                (document.onreadystatechange = function () {
                    return ("complete" === document.readyState &&
                        m.options.auto !== !1 &&
                        m.init(),
                        null != D ? D.apply(this, arguments) : void 0);
                }))
            : document.addEventListener("DOMContentLoaded", function () {
                return m.options.auto !== !1 ? m.init() : void 0;
            }, !1),
        "function" == typeof define && define.amd
            ? define([], function () {
                return m;
            })
            : "undefined" != typeof exports && null !== exports
                ? (module.exports = m)
                : (window.Odometer = m);
}.call(this));
//# sourceMappingURL=jquery-plugin-collection.js.map
;jQuery(document).ready(function () {
    // Handler for .ready() called.
    (function ($) {
        "use strict";
        /*------------------------------------------
            = FUNCTIONS
        -------------------------------------------*/
        // Check ie and version
        function isIE() {
            var myNav = navigator.userAgent.toLowerCase();
            return myNav.indexOf("msie") != -1
                ? parseInt(myNav.split("msie")[1], 10)
                : false;
        }
        // Toggle mobile navigation
        function toggleMobileNavigation() {
            var navbar = $(".navigation-holder");
            var openBtn = $(".navbar-header .open-btn");
            var closeBtn = $(".navigation-holder .close-navbar");
            openBtn.on("click", function () {
                if (!navbar.hasClass("slideInn")) {
                    navbar.addClass("slideInn");
                }
                return false;
            });
            closeBtn.on("click", function () {
                if (navbar.hasClass("slideInn")) {
                    navbar.removeClass("slideInn");
                }
                return false;
            });
        }
        toggleMobileNavigation();
        // Function for toggle a class for small menu
        function toggleClassForSmallNav() {
            var windowWidth = window.innerWidth;
            var mainNav = $("#navbar > ul");
            if (windowWidth <= 991) {
                mainNav.addClass("small-nav");
            }
            else {
                mainNav.removeClass("small-nav");
            }
        }
        toggleClassForSmallNav();
        // Function for small menu
        function smallNavFunctionality() {
            var windowWidth = window.innerWidth;
            var mainNav = $(".navigation-holder");
            var smallNav = $(".navigation-holder > .small-nav");
            var subMenu = smallNav.find(".sub-menu");
            var megamenu = smallNav.find(".mega-menu");
            var menuItemWidthSubMenu = smallNav.find(".menu-item-has-children > a");
            if (windowWidth <= 991) {
                subMenu.hide();
                megamenu.hide();
                menuItemWidthSubMenu.on("click", function (e) {
                    var $this = $(this);
                    $this.siblings().slideToggle();
                    e.preventDefault();
                    e.stopImmediatePropagation();
                });
            }
            else if (windowWidth > 991) {
                mainNav.find(".sub-menu").show();
                mainNav.find(".mega-menu").show();
            }
        }
        smallNavFunctionality();
        // Parallax background
        function bgParallax() {
            if ($(".parallax").length) {
                $(".parallax").each(function () {
                    var height = $(this).position().top;
                    var resize = height - $(window).scrollTop();
                    var doParallax = -(resize / 5);
                    var positionValue = doParallax + "px";
                    var img = $(this).data("bg-image");
                    $(this).css({
                        backgroundImage: "url(" + img + ")",
                        backgroundPosition: "50%" + positionValue,
                        backgroundSize: "cover"
                    });
                });
            }
        }
        // Hero slider background setting
        function sliderBgSetting() {
            if ($(".hero-slider .slide").length) {
                $(".hero-slider .slide").each(function () {
                    var $this = $(this);
                    var img = $this.find(".slider-bg").attr("src")
                        ? $this.find(".slider-bg").attr("src")
                        : false;
                    if (img) {
                        $this.css({
                            backgroundImage: "url(" + img + ")",
                            backgroundSize: "cover",
                            backgroundPosition: "center center"
                        });
                    }
                });
            }
        }
        //Setting hero slider
        function heroSlider() {
            if ($(".hero-slider").length) {
                $(".hero-slider").slick({
                    autoplay: true,
                    autoplaySpeed: 8000,
                    arrows: true,
                    prevArrow: '<button type="button" class="slick-prev">Previous</button>',
                    nextArrow: '<button type="button" class="slick-next">Next</button>',
                    dots: true,
                    fade: true,
                    cssEase: "linear"
                });
            }
        }
        //Active heor slider
        heroSlider();
        /*------------------------------------------
            = HIDE PRELOADER
        -------------------------------------------*/
        function preloader() {
            if ($(".preloader").length) {
                $(".preloader")
                    .delay(100)
                    .fadeOut(500, function () {
                    //active wow
                    wow.init();
                });
            }
        }
        /*------------------------------------------
            = WOW ANIMATION SETTING
        -------------------------------------------*/
        var wow = new WOW({
            boxClass: "wow",
            animateClass: "animated",
            offset: 0,
            mobile: true,
            live: true // default
        });
        /*------------------------------------------
            = ACTIVE POPUP IMAGE
        -------------------------------------------*/
        if ($(".fancybox").length) {
            $(".fancybox").fancybox({
                openEffect: "elastic",
                closeEffect: "elastic",
                wrapCSS: "project-fancybox-title-style"
            });
        }
        /*------------------------------------------
            = POPUP VIDEO
        -------------------------------------------*/
        if ($(".video-btn").length) {
            $(".video-btn").on("click", function () {
                $.fancybox({
                    href: this.href,
                    type: $(this).data("type"),
                    title: this.title,
                    helpers: {
                        title: { type: "inside" },
                        media: {}
                    },
                    beforeShow: function () {
                        $(".fancybox-wrap").addClass("gallery-fancybox");
                    }
                });
                return false;
            });
        }
        /*------------------------------------------
            = ACTIVE GALLERY POPUP IMAGE
        -------------------------------------------*/
        if ($(".popup-gallery").length) {
            $(".popup-gallery").magnificPopup({
                delegate: "a",
                type: "image",
                gallery: {
                    enabled: true
                },
                zoom: {
                    enabled: true,
                    duration: 300,
                    easing: "ease-in-out",
                    opener: function (openerElement) {
                        return openerElement.is("img")
                            ? openerElement
                            : openerElement.find("img");
                    }
                }
            });
        }
        /*------------------------------------------
            = FUNCTION FORM SORTING GALLERY
        -------------------------------------------*/
        function sortingGallery() {
            if ($(".sortable-gallery .gallery-filters").length) {
                var $container = $(".gallery-container");
                $container.isotope({
                    filter: "*",
                    animationOptions: {
                        duration: 750,
                        easing: "linear",
                        queue: false
                    }
                });
                $(".gallery-filters li a").on("click", function () {
                    $(".gallery-filters li .current").removeClass("current");
                    $(this).addClass("current");
                    var selector = $(this).attr("data-filter");
                    $container.isotope({
                        filter: selector,
                        animationOptions: {
                            duration: 750,
                            easing: "linear",
                            queue: false
                        }
                    });
                    return false;
                });
            }
        }
        sortingGallery();
        /*------------------------------------------
            = MASONRY GALLERY SETTING
        -------------------------------------------*/
        function masonryGridSetting() {
            if ($(".masonry-gallery").length) {
                var $grid = $(".masonry-gallery").masonry({
                    itemSelector: ".grid-item",
                    columnWidth: ".grid-item",
                    percentPosition: true
                });
                $grid.imagesLoaded().progress(function () {
                    $grid.masonry("layout");
                });
            }
        }
        // masonryGridSetting();
        /*------------------------------------------
            = STICKY HEADER
        -------------------------------------------*/
        // // Function for clone an element for sticky menu
        // function cloneNavForSticyMenu($ele, $newElmClass) {
        //     $ele.addClass('original').clone().insertAfter($ele).addClass($newElmClass).removeClass('original');
        // }
        // // clone home style 1 navigation for sticky menu
        // if ($('.header-style-1 .navigation').length) {
        //     cloneNavForSticyMenu($('.header-style-1 .navigation'), "sticky");
        // }
        // // Function for sticky menu
        // function stickIt($stickyClass, $toggleClass) {
        //     if ($(window).scrollTop() >= 300) {
        //         var orgElement = $(".original");
        //         var coordsOrgElement = orgElement.offset();
        //         var leftOrgElement = coordsOrgElement.left;
        //         var widthOrgElement = orgElement.css("width");
        //         $stickyClass.addClass($toggleClass);
        //         $stickyClass.css({
        //             "width": widthOrgElement
        //         }).show();
        //         $(".original").css({
        //             "visibility": "hidden"
        //         });
        //     } else {
        //         $(".original").css({
        //             "visibility": "visible"
        //         });
        //         $stickyClass.removeClass($toggleClass);
        //     }
        // }
        // Function for clone an element for sticky menu
        function cloneNavForSticyMenu($ele, $newElmClass) {
            $ele
                .addClass("original")
                .clone()
                .insertAfter($ele)
                .addClass($newElmClass)
                .removeClass("original");
        }
        // clone home style 1 navigation for sticky menu
        if ($(".site-header .navigation").length) {
            cloneNavForSticyMenu($(".site-header .navigation"), "sticky-header");
        }
        var lastScrollTop = "";
        function stickyMenu($targetMenu, $toggleClass) {
            var st = $(window).scrollTop();
            var mainMenuTop = $(".site-header .navigation");
            if ($(window).scrollTop() > 1000) {
                if (st > lastScrollTop) {
                    // hide sticky menu on scroll down
                    $targetMenu.removeClass($toggleClass);
                }
                else {
                    // active sticky menu on scroll up
                    $targetMenu.addClass($toggleClass);
                }
            }
            else {
                $targetMenu.removeClass($toggleClass);
            }
            lastScrollTop = st;
        }
        /*------------------------------------------
            = TOGGLE SIDE INFOBAR
        -------------------------------------------*/
        function toggleSideInfo() {
            if ($(".side-info").length) {
                var sindeInfo = $(".side-info .side-info-wrapper");
                var sideInfoOpenBtn = $(".info-bars");
                var sideInfoCloseBtn = $(".side-info-close-btn");
                $(document.body).append(sindeInfo);
                sideInfoOpenBtn.on("click", function (e) {
                    sindeInfo.find(".side-info-inner").toggleClass("toggle-side-info");
                    sindeInfo.toggleClass("side-info-wrapper-toggle");
                    return false;
                });
                sideInfoCloseBtn.on("click", function (e) {
                    sindeInfo.find(".side-info-inner").toggleClass("toggle-side-info");
                    sindeInfo.toggleClass("side-info-wrapper-toggle");
                    return false;
                });
            }
        }
        console.log($(".header-search-form-wrapper").length);
        /*------------------------------------------
            = Header search toggle
        -------------------------------------------*/
        if ($(".header-search-form-wrapper").length) {
            var searchToggleBtn = $(".search-toggle-btn");
            var searchContent = $(".header-search-form");
            var body = $("body");
            searchToggleBtn.on("click", function (e) {
                searchContent.toggleClass("header-search-content-toggle");
                e.stopPropagation();
            });
            body
                .on("click", function () {
                searchContent.removeClass("header-search-content-toggle");
            })
                .find(searchContent)
                .on("click", function (e) {
                e.stopPropagation();
            });
        }
        /*------------------------------------------
            = PRICING TAB SWITCHER
        -------------------------------------------*/
        if ($(".pricing-switcher-wrapper").length) {
            var switcher = $(".pricing-switcher-wrapper .switch");
            var pricingTab = $(".pricing-tab");
            var tablist = $(".pricing-switcher-wrapper .tablist");
            switcher.on("click", function () {
                var $this = $(this);
                $this.find(".slider").toggleClass("slide-off");
                pricingTab.children(".pricing-grids").toggleClass("active-grid");
                tablist.children("span").toggleClass("active");
            });
        }
        /*------------------------------------------
            = TESTIMONIALS SLIDER
        -------------------------------------------*/
        if ($(".testimonials-slider".length)) {
            console.log($(".testimonials-slider"), $);
            $(".testimonials-slider").owlCarousel({
                mouseDrag: false,
                smartSpeed: 1500,
                margin: 30,
                loop: true,
                items: 1
            });
        }
        else {
            console.log("testimonials123");
        }
        /*------------------------------------------
            = PARTNERS SLIDER
        -------------------------------------------*/
        if ($(".partners-slider").length) {
            $(".partners-slider").owlCarousel({
                autoplay: true,
                smartSpeed: 300,
                margin: 30,
                loop: true,
                autoplayHoverPause: true,
                dots: false,
                responsive: {
                    0: {
                        items: 2
                    },
                    550: {
                        items: 3
                    },
                    992: {
                        items: 4
                    },
                    1200: {
                        items: 5
                    }
                }
            });
        }
        /*------------------------------------------
            = newAdded SLIDER
        -------------------------------------------*/
        if ($(".newAdded-slider").length) {
            console.log($(".newAdded-slider"), $);
            $(".newAdded-slider").owlCarousel({
                autoplay: false,
                smartSpeed: 300,
                navText: ["<div class='left-arrow'><img src='assets/images/icons/right-arrow.svg' alt></div>", "<div class='right-arrow'><img src='assets/images/icons/right-arrow.svg' alt></div>"],
                margin: 30,
                loop: true,
                autoplayHoverPause: true,
                dots: false,
                nav: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    550: {
                        items: 1
                    },
                    992: {
                        items: 2
                    },
                    1200: {
                        items: 2
                    }
                }
            });
        }
        /*------------------------------------------
              = trending SLIDER
          -------------------------------------------*/
        if ($(".trending-slider").length) {
            $(".trending-slider").owlCarousel({
                autoplay: false,
                smartSpeed: 300,
                navText: ["<div class='left-arrow'><img src='assets/images/icons/right-arrow.svg' alt></div>", "<div class='right-arrow'><img src='assets/images/icons/right-arrow.svg' alt></div>"],
                margin: 30,
                loop: true,
                autoplayHoverPause: true,
                dots: false,
                nav: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    550: {
                        items: 1
                    },
                    992: {
                        items: 2
                    },
                    1200: {
                        items: 2
                    }
                }
            });
        }
        /*------------------------------------------
            = FUNFACT
        -------------------------------------------*/
        if ($(".odometer").length) {
            $(".odometer").appear();
            $(document.body).on("appear", ".odometer", function (e) {
                var odo = $(".odometer");
                odo.each(function () {
                    var countNumber = $(this).attr("data-count");
                    $(this).html(countNumber);
                });
            });
        }
        /*------------------------------------------
            = POST SLIDER
        -------------------------------------------*/
        if ($(".post-slider".length)) {
            $(".post-slider").owlCarousel({
                mouseDrag: false,
                smartSpeed: 1000,
                loop: true,
                nav: true,
                navText: [
                    '<i class="ti-arrow-left"></i>',
                    '<i class="ti-arrow-right"></i>'
                ],
                dots: false,
                items: 1
            });
        }
        /*------------------------------------------
            = CONTACT FORM SUBMISSION
        -------------------------------------------*/
        if ($("#contact-form").length) {
            $("#contact-form").validate({
                rules: {
                    name: {
                        required: true,
                        minlength: 2
                    },
                    email: "required",
                    subject: "required"
                },
                messages: {
                    name: "Please enter your name",
                    email: "Please enter your email address",
                    subject: "Please enter contact subject"
                },
                submitHandler: function (form) {
                    $.ajax({
                        type: "POST",
                        url: "mail.php",
                        data: $(form).serialize(),
                        success: function () {
                            $("#loader").hide();
                            $("#success").slideDown("slow");
                            setTimeout(function () {
                                $("#success").slideUp("slow");
                            }, 3000);
                            form.reset();
                        },
                        error: function () {
                            $("#loader").hide();
                            $("#error").slideDown("slow");
                            setTimeout(function () {
                                $("#error").slideUp("slow");
                            }, 3000);
                        }
                    });
                    return false; // required to block normal submit since you used ajax
                }
            });
        }
        /*======================Custom =====================*/
        function settings() {
            var maxHeight = 0;
            console.log("SETTINGS");
            $(".sameHeight .sameCol").each(function () {
                if ($(this).height() > maxHeight) {
                    maxHeight = $(this).height();
                }
            });
            $(".sameHeight .sameCol").height(maxHeight);
            $(".chooseSameCol .sameCol").each(function () {
                if ($(this).height() > maxHeight) {
                    maxHeight = $(this).height();
                }
            });
            $(".chooseSameCol .sameCol").height(maxHeight);
            $("section.hero .slide-content .col").each(function () {
                if ($(this).height() > maxHeight) {
                    maxHeight = $(this).height();
                }
            });
            $("section.hero .slide-content .col").height(maxHeight);
            $("#displayFilter").click(function () {
                $(".exploreFilters").show();
                $(".hidethis").hide();
            });
            $("#hideFilter").click(function () {
                $(".exploreFilters").hide();
                $(".hidethis").show();
            });
        }
        // var maxHeight = 0;
        settings();
        /*======================Custom =====================*/
        /*==========================================================================
            WHEN DOCUMENT LOADING
        ==========================================================================*/
        $(window).on("load", function () {
            console.log("Onload ");
            preloader();
            sliderBgSetting();
            toggleMobileNavigation();
            smallNavFunctionality();
            toggleSideInfo();
        });
        /*==========================================================================
            WHEN WINDOW SCROLL
        ==========================================================================*/
        $(window).on("scroll", function () {
            if ($(".site-header").length) {
                stickyMenu($(".site-header .navigation"), "sticky-on");
            }
        });
        /*==========================================================================
            WHEN WINDOW RESIZE
        ==========================================================================*/
        $(window).on("resize", function () {
            toggleClassForSmallNav();
            clearTimeout($.data(this, "resizeTimer"));
            $.data(this, "resizeTimer", setTimeout(function () {
                smallNavFunctionality();
            }, 200));
        });
    })(window.jQuery);
});
//# sourceMappingURL=script.js.map
;// The MIT License (MIT)
// Typed.js | Copyright (c) 2016 Matt Boldt | www.mattboldt.com
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
!function (window, document, $) {
    "use strict";
    var Typed = function (el, options) {
        var self = this;
        // chosen element to manipulate text
        this.el = el;
        // options
        this.options = {};
        Object.keys(defaults).forEach(function (key) {
            self.options[key] = defaults[key];
        });
        Object.keys(options).forEach(function (key) {
            self.options[key] = options[key];
        });
        // attribute to type into
        this.isInput = this.el.tagName.toLowerCase() === 'input';
        this.attr = this.options.attr;
        // show cursor
        this.showCursor = this.isInput ? false : this.options.showCursor;
        // text content of element
        this.elContent = this.attr ? this.el.getAttribute(this.attr) : this.el.textContent;
        // html or plain text
        this.contentType = this.options.contentType;
        // typing speed
        this.typeSpeed = this.options.typeSpeed;
        // add a delay before typing starts
        this.startDelay = this.options.startDelay;
        // backspacing speed
        this.backSpeed = this.options.backSpeed;
        // amount of time to wait before backspacing
        this.backDelay = this.options.backDelay;
        // Fade out instead of backspace
        this.fadeOut = this.options.fadeOut;
        this.fadeOutClass = this.options.fadeOutClass;
        this.fadeOutDelay = this.options.fadeOutDelay;
        // div containing strings
        if ($ && this.options.stringsElement instanceof $) {
            this.stringsElement = this.options.stringsElement[0];
        }
        else {
            this.stringsElement = this.options.stringsElement;
        }
        // input strings of text
        this.strings = this.options.strings;
        // character number position of current string
        this.strPos = 0;
        // current array position
        this.arrayPos = 0;
        // number to stop backspacing on.
        // default 0, can change depending on how many chars
        // you want to remove at the time
        this.stopNum = 0;
        // Looping logic
        this.loop = this.options.loop;
        this.loopCount = this.options.loopCount;
        this.curLoop = 0;
        // for stopping
        this.stop = false;
        // custom cursor
        this.cursorChar = this.options.cursorChar;
        // shuffle the strings
        this.shuffle = this.options.shuffle;
        // the order of strings
        this.sequence = [];
        // All systems go!
        this.build();
    };
    Typed.prototype = {
        constructor: Typed,
        init: function () {
            // begin the loop w/ first current string (global self.strings)
            // current string will be passed as an argument each time after this
            var self = this;
            self.timeout = setTimeout(function () {
                for (var i = 0; i < self.strings.length; ++i)
                    self.sequence[i] = i;
                // shuffle the array if true
                if (self.shuffle)
                    self.sequence = self.shuffleArray(self.sequence);
                var elContent;
                if (self.isInput) {
                    elContent = self.el.value;
                }
                else if (self.contentType === 'html') {
                    elContent = self.el.innerHTML;
                }
                else {
                    elContent = self.el.textContent;
                }
                // Start typing
                // Check if there is some text in the element, if yes start by backspacing the default message
                if (elContent.length == 0) {
                    self.typewrite(self.strings[self.sequence[self.arrayPos]], self.strPos);
                }
                else {
                    self.backspace(elContent, elContent.length);
                }
            }, self.startDelay);
        },
        build: function () {
            var self = this;
            // Insert cursor
            if (this.showCursor === true) {
                this.cursor = document.createElement('span');
                this.cursor.className = 'typed-cursor';
                this.cursor.innerHTML = this.cursorChar;
                this.el.parentNode && this.el.parentNode.insertBefore(this.cursor, this.el.nextSibling);
            }
            if (this.stringsElement) {
                this.strings = [];
                this.stringsElement.style.display = 'none';
                var strings = Array.prototype.slice.apply(this.stringsElement.children);
                strings.forEach(function (stringElement) {
                    self.strings.push(stringElement.innerHTML);
                });
            }
            this.init();
        },
        // pass current string state to each function, types 1 char per call
        typewrite: function (curString, curStrPos) {
            // exit when stopped
            if (this.stop === true) {
                return;
            }
            if (this.fadeOut && this.el.classList.contains(this.fadeOutClass)) {
                this.el.classList.remove(this.fadeOutClass);
                this.cursor.classList.remove(this.fadeOutClass);
            }
            // varying values for setTimeout during typing
            // can't be global since number changes each time loop is executed
            var humanize = Math.round(Math.random() * (100 - 30)) + this.typeSpeed;
            var self = this;
            // ------------- optional ------------- //
            // backpaces a certain string faster
            // ------------------------------------ //
            // if (self.arrayPos == 1){
            //  self.backDelay = 50;
            // }
            // else{ self.backDelay = 500; }
            // contain typing function in a timeout humanize'd delay
            self.timeout = setTimeout(function () {
                // check for an escape character before a pause value
                // format: \^\d+ .. eg: ^1000 .. should be able to print the ^ too using ^^
                // single ^ are removed from string
                var charPause = 0;
                var substr = curString.substr(curStrPos);
                if (substr.charAt(0) === '^') {
                    var skip = 1; // skip atleast 1
                    if (/^\^\d+/.test(substr)) {
                        substr = /\d+/.exec(substr)[0];
                        skip += substr.length;
                        charPause = parseInt(substr);
                    }
                    // strip out the escape character and pause value so they're not printed
                    curString = curString.substring(0, curStrPos) + curString.substring(curStrPos + skip);
                }
                if (self.contentType === 'html') {
                    // skip over html tags while typing
                    var curChar = curString.substr(curStrPos).charAt(0);
                    if (curChar === '<' || curChar === '&') {
                        var tag = '';
                        var endTag = '';
                        if (curChar === '<') {
                            endTag = '>';
                        }
                        else {
                            endTag = ';';
                        }
                        while (curString.substr(curStrPos + 1).charAt(0) !== endTag) {
                            tag += curString.substr(curStrPos).charAt(0);
                            curStrPos++;
                            if (curStrPos + 1 > curString.length) {
                                break;
                            }
                        }
                        curStrPos++;
                        tag += endTag;
                    }
                }
                // timeout for any pause after a character
                self.timeout = setTimeout(function () {
                    if (curStrPos === curString.length) {
                        // fires callback function
                        self.options.onStringTyped(self.arrayPos);
                        // is this the final string
                        if (self.arrayPos === self.strings.length - 1) {
                            // animation that occurs on the last typed string
                            self.options.callback();
                            self.curLoop++;
                            // quit if we wont loop back
                            if (self.loop === false || self.curLoop === self.loopCount)
                                return;
                        }
                        self.timeout = setTimeout(function () {
                            self.backspace(curString, curStrPos);
                        }, self.backDelay);
                    }
                    else {
                        /* call before functions if applicable */
                        if (curStrPos === 0) {
                            self.options.preStringTyped(self.arrayPos);
                        }
                        // start typing each new char into existing string
                        // curString: arg, self.el.html: original text inside element
                        var nextString = curString.substr(0, curStrPos + 1);
                        if (self.attr) {
                            self.el.setAttribute(self.attr, nextString);
                        }
                        else {
                            if (self.isInput) {
                                self.el.value = nextString;
                            }
                            else if (self.contentType === 'html') {
                                self.el.innerHTML = nextString;
                            }
                            else {
                                self.el.textContent = nextString;
                            }
                        }
                        // add characters one by one
                        curStrPos++;
                        // loop the function
                        self.typewrite(curString, curStrPos);
                    }
                    // end of character pause
                }, charPause);
                // humanized value for typing
            }, humanize);
        },
        backspace: function (curString, curStrPos) {
            var self = this;
            // exit when stopped
            if (this.stop === true) {
                return;
            }
            if (this.fadeOut) {
                this.initFadeOut();
                return;
            }
            // varying values for setTimeout during typing
            // can't be global since number changes each time loop is executed
            var humanize = Math.round(Math.random() * (100 - 30)) + this.backSpeed;
            self.timeout = setTimeout(function () {
                // ----- this part is optional ----- //
                // check string array position
                // on the first string, only delete one word
                // the stopNum actually represents the amount of chars to
                // keep in the current string. In my case it's 14.
                // if (self.arrayPos == 1){
                //  self.stopNum = 14;
                // }
                //every other time, delete the whole typed string
                // else{
                //  self.stopNum = 0;
                // }
                if (self.contentType === 'html') {
                    // skip over html tags while backspacing
                    if (curString.substr(curStrPos).charAt(0) === '>') {
                        var tag = '';
                        while (curString.substr(curStrPos - 1).charAt(0) !== '<') {
                            tag -= curString.substr(curStrPos).charAt(0);
                            curStrPos--;
                            if (curStrPos < 0) {
                                break;
                            }
                        }
                        curStrPos--;
                        tag += '<';
                    }
                }
                // ----- continue important stuff ----- //
                // replace text with base text + typed characters
                var nextString = curString.substr(0, curStrPos);
                self.replaceText(nextString);
                // if the number (id of character in current string) is
                // less than the stop number, keep going
                if (curStrPos > self.stopNum) {
                    // subtract characters one by one
                    curStrPos--;
                    // loop the function
                    self.backspace(curString, curStrPos);
                }
                // if the stop number has been reached, increase
                // array position to next string
                else if (curStrPos <= self.stopNum) {
                    self.arrayPos++;
                    if (self.arrayPos === self.strings.length) {
                        self.arrayPos = 0;
                        // Shuffle sequence again
                        if (self.shuffle)
                            self.sequence = self.shuffleArray(self.sequence);
                        self.init();
                    }
                    else
                        self.typewrite(self.strings[self.sequence[self.arrayPos]], curStrPos);
                }
                // humanized value for typing
            }, humanize);
        },
        // Adds a CSS class to fade out current string
        initFadeOut: function () {
            self = this;
            this.el.className += ' ' + this.fadeOutClass;
            this.cursor.className += ' ' + this.fadeOutClass;
            return setTimeout(function () {
                self.arrayPos++;
                self.replaceText('');
                // Resets current string if end of loop reached
                if (self.strings.length > self.arrayPos) {
                    self.typewrite(self.strings[self.sequence[self.arrayPos]], 0);
                }
                else {
                    self.typewrite(self.strings[0], 0);
                    self.arrayPos = 0;
                }
            }, self.fadeOutDelay);
        },
        // Replaces current text in the HTML element
        replaceText: function (str) {
            if (this.attr) {
                this.el.setAttribute(this.attr, str);
            }
            else {
                if (this.isInput) {
                    this.el.value = str;
                }
                else if (this.contentType === 'html') {
                    this.el.innerHTML = str;
                }
                else {
                    this.el.textContent = str;
                }
            }
        },
        // Shuffles the numbers in the given array.
        shuffleArray: function (array) {
            var tmp, current, top = array.length;
            if (top)
                while (--top) {
                    current = Math.floor(Math.random() * (top + 1));
                    tmp = array[current];
                    array[current] = array[top];
                    array[top] = tmp;
                }
            return array;
        },
        // Start & Stop currently not working
        // , stop: function() {
        //     var self = this;
        //     self.stop = true;
        //     clearInterval(self.timeout);
        // }
        // , start: function() {
        //     var self = this;
        //     if(self.stop === false)
        //        return;
        //     this.stop = false;
        //     this.init();
        // }
        // Reset and rebuild the element
        reset: function () {
            var self = this;
            clearInterval(self.timeout);
            var id = this.el.getAttribute('id');
            this.el.textContent = '';
            if (typeof this.cursor !== 'undefined' && typeof this.cursor.parentNode !== 'undefined') {
                this.cursor.parentNode.removeChild(this.cursor);
            }
            this.strPos = 0;
            this.arrayPos = 0;
            this.curLoop = 0;
            // Send the callback
            this.options.resetCallback();
        }
    };
    Typed.new = function (selector, option) {
        var elements = Array.prototype.slice.apply(document.querySelectorAll(selector));
        elements.forEach(function (element) {
            var instance = element._typed, options = typeof option == 'object' && option;
            if (instance) {
                instance.reset();
            }
            element._typed = instance = new Typed(element, options);
            if (typeof option == 'string')
                instance[option]();
        });
    };
    if ($) {
        $.fn.typed = function (option) {
            return this.each(function () {
                var $this = $(this), data = $this.data('typed'), options = typeof option == 'object' && option;
                if (data) {
                    data.reset();
                }
                $this.data('typed', (data = new Typed(this, options)));
                if (typeof option == 'string')
                    data[option]();
            });
        };
    }
    window.Typed = Typed;
    var defaults = {
        strings: ["These are the default values...", "You know what you should do?", "Use your own!", "Have a great day!"],
        stringsElement: null,
        // typing speed
        typeSpeed: 0,
        // time before typing starts
        startDelay: 0,
        // backspacing speed
        backSpeed: 0,
        // shuffle the strings
        shuffle: false,
        // time before backspacing
        backDelay: 500,
        // Fade out instead of backspace
        fadeOut: false,
        fadeOutClass: 'typed-fade-out',
        fadeOutDelay: 500,
        // loop
        loop: false,
        // false = infinite
        loopCount: false,
        // show cursor
        showCursor: true,
        // character for cursor
        cursorChar: "|",
        // attribute to type (null == text)
        attr: null,
        // either html or text
        contentType: 'html',
        // call when done callback function
        callback: function () { },
        // starting callback function before each string
        preStringTyped: function () { },
        //callback for every typed string
        onStringTyped: function () { },
        // callback for reset
        resetCallback: function () { }
    };
}(window, document, window.jQuery);
//# sourceMappingURL=typed.js.map
;
//# sourceMappingURL=scripts.js.map