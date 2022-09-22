!function(){"use strict";!function(t,a){void 0===a&&(a={});var o=a.insertAt;if(t&&"undefined"!=typeof document){var c=document.head||document.getElementsByTagName("head")[0],e=document.createElement("style");e.type="text/css","top"===o&&c.firstChild?c.insertBefore(e,c.firstChild):c.appendChild(e),e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}}(':root{--docsifytabs-border-color:#f4a460;--docsifytabs-border-px:3px;--docsifytabs-margin:1.5em 0;--docsifytabs-tab-background:#f8f8f8;--docsifytabs-tab-background--active:var(--docsifytabs-border-color);--docsifytabs-tab-color:#000000;--docsifytabs-tab-color--active:inherit;--docsifytabs-tab-highlight-px:3px;--docsifytabs-tab-highlight-color:var(--theme-color,currentColor);--docsifytabs-tab-padding:0.6em 1em;--docsifytabs-content-background:inherit;--docsifytabs-content-padding:1.5rem}.docsify-tabs:before,.docsify-tabs__tab{z-index:1}.docsify-tabs__tab--active,.docsify-tabs__tab:focus{z-index:2}.docsify-tabs{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;position:relative}.docsify-tabs:before{content:"";-ms-flex-order:0;order:0;-ms-flex:1;flex:1 1}.docsify-tabs__tab{-ms-flex-order:-1;order:-1;position:relative;margin:0;font-size:20px;appearance:none}.docsify-tabs__content{visibility:hidden;position:absolute;overflow:hidden;height:0;width:100%}.docsify-tabs__content :first-child{margin-top:0}.docsify-tabs__content :first-child~:last-child,.docsify-tabs__content :last-child{margin-bottom:0}.docsify-tabs__tab--active+.docsify-tabs__content{visibility:visible;position:relative;overflow:auto;height:auto}[class*=docsify-tabs--]{margin:1.5em 0;margin:var(--docsifytabs-margin)}[class*=docsify-tabs--] .docsify-tabs__tab{padding:.6em 1em;padding:var(--docsifytabs-tab-padding);background:#f8f8f8;background:var(--docsifytabs-tab-background);color:#999;color:var(--docsifytabs-tab-color)}[class*=docsify-tabs--] .docsify-tabs__tab--active{background:inherit;background:var(--docsifytabs-tab-background--active);color:inherit;color:var(--docsifytabs-tab-color--active)}[class*=docsify-tabs--] .docsify-tabs__content{padding:1.5rem;padding:var(--docsifytabs-content-padding);background:inherit;background:var(--docsifytabs-content-background)}.docsify-tabs--classic .docsify-tabs__content,.docsify-tabs--classic .docsify-tabs__tab,.docsify-tabs--classic:before{border-width:1px;border-color:#ededed;border:var(--docsifytabs-border-px) solid var(--docsifytabs-border-color)}.docsify-tabs--classic:before{margin-right:1px;margin-right:var(--docsifytabs-border-px);border-top-width:0;border-left-width:0;border-right-width:0}.docsify-tabs--classic .docsify-tabs__tab:first-of-type{border-top-left-radius:var(--docsifytabs-border-radius-px)}.docsify-tabs--classic .docsify-tabs__tab:last-of-type{border-top-right-radius:var(--docsifytabs-border-radius-px)}.docsify-tabs--classic .docsify-tabs__tab~.docsify-tabs__tab{margin-left:-1px;margin-left:calc(0px - var(--docsifytabs-border-px))}.docsify-tabs--classic .docsify-tabs__tab--active{border-bottom-width:0;box-shadow:inset 0 3px 0 0 var(--theme-color,currentColor);box-shadow:inset 0 var(--docsifytabs-tab-highlight-px) 0 0 var(--docsifytabs-tab-highlight-color)}.docsify-tabs--classic .docsify-tabs__content{margin-top:-1px;margin-top:calc(0px - var(--docsifytabs-border-px));border-top:0;border-radius:0;border-radius:0 var(--docsifytabs-border-radius-px) var(--docsifytabs-border-radius-px) var(--docsifytabs-border-radius-px)}.docsify-tabs--material .docsify-tabs__tab{margin-bottom:2px;margin-bottom:calc(var(--docsifytabs-tab-highlight-px) - var(--docsifytabs-border-px));background:transparent;border:0}.docsify-tabs--material .docsify-tabs__tab--active{box-shadow:0 3px 0 0 var(--theme-color,currentColor);box-shadow:0 var(--docsifytabs-tab-highlight-px) 0 0 var(--docsifytabs-tab-highlight-color);background:transparent}.docsify-tabs--material .docsify-tabs__content{border-width:1px 0;border-color:#ededed;border-left:0 solid var(--docsifytabs-border-color);border-bottom:var(--docsifytabs-border-px) solid var(--docsifytabs-border-color);border-right:0 solid var(--docsifytabs-border-color);border-top:var(--docsifytabs-border-px) solid var(--docsifytabs-border-color)}',{insertAt:"top"});var u="tabs:replace",y={tabsContainer:"content",tabBlock:"docsify-tabs",tabButton:"docsify-tabs__tab",tabButtonActive:"docsify-tabs__tab--active",tabContent:"docsify-tabs__content"},p={codeMarkup:/(```[\s\S]*?```)/gm,commentReplaceMarkup:new RegExp("\x3c!-- ".concat(u," (.*) --\x3e")),tabBlockMarkup:/[\r\n]*(\s*)(<!-+\s+tabs:\s*?start\s+-+>)[\r\n]+([\s|\S]*?)[\r\n\s]+(<!-+\s+tabs:\s*?end\s+-+>)/m,tabCommentMarkup:/[\r\n]*(\s*)<!-+\s+tab:\s*(.*)\s+-+>[\r\n]+([\s\S]*?)[\r\n]*\s*(?=<!-+\s+tabs?:(?!replace))/m,tabHeadingMarkup:/[\r\n]*(\s*)#{1,6}\s*[*_]{2}\s*(.*[^\s])\s*[*_]{2}[\r\n]+([\s\S]*?)(?=#{1,6}\s*[*_]{2}|<!-+\s+tabs:\s*?end\s+-+>)/m},m={persist:!0,sync:!0,theme:"classic",tabComments:!0,tabHeadings:!0};function g(t,a){var o=1<arguments.length&&void 0!==a&&a;if(t.classList.contains(y.tabButton)){var c=t,e=c.getAttribute("data-tab"),s=document.querySelector(".".concat(y.tabsContainer)),r=c.parentNode,n=Array.apply(null,r.querySelectorAll(".".concat(y.tabButton))),i=r.offsetTop;if(n.forEach(function(t){return t.classList.remove(y.tabButtonActive)}),c.classList.add(y.tabButtonActive),!o){if(m.persist){var d=(s?Array.apply(null,s.querySelectorAll(".".concat(y.tabBlock))):[]).indexOf(r),b=JSON.parse(sessionStorage.getItem(window.location.href))||{};b[d]=e,sessionStorage.setItem(window.location.href,JSON.stringify(b))}if(m.sync){var f=s?Array.apply(null,s.querySelectorAll(".".concat(y.tabButton,'[data-tab="').concat(e,'"]'))):[],l=JSON.parse(sessionStorage.getItem("*"))||[];f.forEach(function(t){g(t,!0)}),window.scrollBy(0,0-(i-r.offsetTop)),0<l.indexOf(e)&&l.splice(l.indexOf(e),1),0!==l.indexOf(e)&&(l.unshift(e),sessionStorage.setItem("*",JSON.stringify(l)))}}}}function s(){var t=(window.location.hash.match(/(?:id=)([^&]+)/)||[])[1],a=t&&".".concat(y.tabBlock," #").concat(-1<t.indexOf("%")?decodeURIComponent(t):t);if(t&&document.querySelector(a)){var o,c=document.querySelector("#".concat(t));if(c.closest)o=c.closest(".".concat(y.tabContent));else for(o=c.parentNode;o!==document.body&&!o.classList.contains("".concat(y.tabContent));)o=o.parentNode;g(o.previousElementSibling)}}window&&(window.$docsify=window.$docsify||{},window.$docsify.tabs=window.$docsify.tabs||{},Object.keys(window.$docsify.tabs).forEach(function(t){Object.prototype.hasOwnProperty.call(m,t)&&(m[t]=window.$docsify.tabs[t])}),window.$docsify.tabs.version="1.4.4",(m.tabComments||m.tabHeadings)&&(window.$docsify.plugins=[].concat(function(t,a){var o=!1;t.beforeEach(function(t){return(o=p.tabBlockMarkup.test(t))&&(t=function(d){for(var b,f,o=d.match(p.codeMarkup)||[],t=o.map(function(t,a){var o="\x3c!-- ".concat(u," CODEBLOCK").concat(a," --\x3e");return d=d.replace(t,function(){return o}),o}),l=m.theme?"".concat(y.tabBlock,"--").concat(m.theme):"",a=function(){var o=b[0],t="",a="",c=m.tabComments&&p.tabCommentMarkup.test(o),e=m.tabHeadings&&p.tabHeadingMarkup.test(o),s=b[1],r=b[2],n=b[4];if(c||e){t="\x3c!-- ".concat(u,' <div class="').concat([y.tabBlock,l].join(" "),'"> --\x3e'),a="\n".concat(s,"\x3c!-- ").concat(u," </div> --\x3e");for(var i=function(){var t=(f[2]||"[Tab]").trim(),a=(f[3]||"").trim();o=o.replace(f[0],function(){return["\n".concat(s,"\x3c!-- ").concat(u,' <button class="').concat(y.tabButton,'" data-tab="').concat(t.toLowerCase(),'">').concat(t,"</button> --\x3e"),"\n".concat(s,"\x3c!-- ").concat(u,' <div class="').concat(y.tabContent,'" data-tab-content="').concat(t.toLowerCase(),'"> --\x3e'),"\n\n".concat(s).concat(a),"\n\n".concat(s,"\x3c!-- ").concat(u," </div> --\x3e")].join("")})};null!==(f=(m.tabComments?p.tabCommentMarkup.exec(o):null)||(m.tabHeadings?p.tabHeadingMarkup.exec(o):null));)i()}o=(o=o.replace(r,function(){return t})).replace(n,function(){return a}),d=d.replace(b[0],function(){return o})};null!==(b=p.tabBlockMarkup.exec(d));)a();return t.forEach(function(t,a){d=d.replace(t,function(){return o[a]})}),d}(t)),t}),t.afterEach(function(t,a){o&&(t=function(o){for(var c,t=function(){var t=c[0],a=c[1]||"";o=o.replace(t,function(){return a})};null!==(c=p.commentReplaceMarkup.exec(o));)t();return o}(t)),a(t)}),t.doneEach(function(){var t,a,c,e;o&&(t=document.querySelector(".".concat(y.tabsContainer)),a=t?Array.apply(null,t.querySelectorAll(".".concat(y.tabBlock))):[],c=JSON.parse(sessionStorage.getItem(window.location.href))||{},e=JSON.parse(sessionStorage.getItem("*"))||[],s(),a.forEach(function(a,t){var o=a.querySelector(".".concat(y.tabButtonActive));o||(m.sync&&e.length&&(o=e.map(function(t){return a.querySelector(".".concat(y.tabButton,'[data-tab="').concat(t,'"]'))}).filter(function(t){return t})[0]),!o&&m.persist&&(o=a.querySelector(".".concat(y.tabButton,'[data-tab="').concat(c[t],'"]'))),(o=o||a.querySelector(".".concat(y.tabButton)))&&o.classList.add(y.tabButtonActive))}))}),t.mounted(function(){var t=document.querySelector(".".concat(y.tabsContainer));t&&t.addEventListener("click",function(t){g(t.target)}),window.addEventListener("hashchange",s,!1)})},window.$docsify.plugins||[])))}();