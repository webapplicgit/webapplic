import{S as t,i as e,s,c as o,e as a,a as n,b as c,d as r,f as l,g as i,t as d,h as p,u,j as h,k as f,l as m,o as v,m as x,n as g,p as $,q as y,r as b,v as E,w as N,x as w,y as C,z as k,A as W,B as I}from"./client.1d248697.js";function M(t){let e,s;const m=t[6].default,v=o(m,t,t[5],null);return{c(){e=a("div"),v&&v.c(),this.h()},l(t){e=n(t,"DIV",{style:!0,class:!0});var s=c(e);v&&v.l(s),s.forEach(r),this.h()},h(){l(e,"--cursor-color","string"==typeof t[0]?t[0]:"black"),i(e,"class","svelte-1jxt921"),d(e,"cursor",t[0])},m(o,a){p(o,e,a),v&&v.m(e,null),t[7](e),s=!0},p(t,[o]){v&&v.p&&32&o&&u(v,m,t,t[5],o,null,null),(!s||1&o)&&l(e,"--cursor-color","string"==typeof t[0]?t[0]:"black"),1&o&&d(e,"cursor",t[0])},i(t){s||(h(v,t),s=!0)},o(t){f(v,t),s=!1},d(s){s&&r(e),v&&v.d(s),t[7](null)}}}function T(t,e,s){let o,{mode:a="default"}=e,{interval:n=30}=e,{loopInterval:c=1500}=e,{cursor:r=!0}=e,l=[];const i=m(),d=t=>new Promise(e=>setTimeout(e,t)),p=t=>1===t.childNodes.length&&3===t.childNodes[0].nodeType,u=async()=>{return await d(n[(t=0,e=n.length,Math.floor(Math.random()*(e-t)+t))]||n);var t,e},h=async({currentNode:t,text:e})=>{t.textContent="",t.classList.add("typing");for(const s of e){t.textContent+=s;if("loop"===a&&t.textContent===e.join("")){for(i("done"),await d(c);""!==t.textContent;)t.textContent=t.textContent.slice(0,-1),await u();return}await u()}1===t.classList.length&&null!==t.nextSibling?t.removeAttribute("class"):t.classList.remove("typing")};v(()=>{switch((t=>{const e=document.createTreeWalker(t,NodeFilter.SHOW_ELEMENT);let a=e.nextNode();for(;a;){const t=a.textContent.split("");p(a)&&l.push({currentNode:a,text:t}),a=e.nextNode()}if(p(o)){const t=o.textContent.split("");s(1,o.textContent="",o);const e=document.createElement("p");o.appendChild(e),l.push({currentNode:e,text:t})}})(o),a){case"cascade":case"default":(async()=>{"cascade"===a&&l.forEach(({currentNode:t})=>t.textContent="");for(const t of l)"cascade"===a?await h(t):h(t);i("done")})();break;case"loop":(async()=>{for(;"loop"===a;)for(const{currentNode:t,text:e}of l){o.childNodes.forEach(t=>t.remove());const s=t.tagName.toLowerCase(),a=document.createElement(s);a.textContent=e.join(""),o.appendChild(a),await h({currentNode:a,text:e}),o.childNodes.forEach(t=>t.remove())}})()}}),x(()=>s(2,a="default"));let{$$slots:f={},$$scope:$}=e;return t.$set=t=>{"mode"in t&&s(2,a=t.mode),"interval"in t&&s(3,n=t.interval),"loopInterval"in t&&s(4,c=t.loopInterval),"cursor"in t&&s(0,r=t.cursor),"$$scope"in t&&s(5,$=t.$$scope)},[r,o,a,n,c,$,f,function(t){g[t?"unshift":"push"](()=>{o=t,s(1,o)})}]}class j extends t{constructor(t){super(),e(this,t,T,M,s,{mode:2,interval:3,loopInterval:4,cursor:0})}}function L(t){let e,s;return{c(){e=a("p"),s=y("Mobile first, page speedy, PWA, SEO, landing page, dashboards, prototype design and data analisys."),this.h()},l(t){e=n(t,"P",{class:!0});var o=c(e);s=w(o,"Mobile first, page speedy, PWA, SEO, landing page, dashboards, prototype design and data analisys."),o.forEach(r),this.h()},h(){i(e,"class","svelte-79co9y")},m(t,o){p(t,e,o),k(e,s)},d(t){t&&r(e)}}}function S(t){let e,s,o,l,d,u,m,v,x,g,M;return m=new j({props:{interval:30,$$slots:{default:[L]},$$scope:{ctx:t}}}),{c(){e=$(),s=a("div"),o=$(),l=a("h1"),d=y("Webapplic"),u=$(),b(m.$$.fragment),v=$(),x=a("button"),g=y("know more"),this.h()},l(t){E('[data-svelte="svelte-t5fsl6"]',document.head).forEach(r),e=N(t),s=n(t,"DIV",{class:!0}),c(s).forEach(r),o=N(t),l=n(t,"H1",{class:!0});var a=c(l);d=w(a,"Webapplic"),a.forEach(r),u=N(t),C(m.$$.fragment,t),v=N(t),x=n(t,"BUTTON",{id:!0,onclick:!0,class:!0});var i=c(x);g=w(i,"know more"),i.forEach(r),this.h()},h(){document.title="   Webaplic - Mobile sites, prototypes design, code development,  ",i(s,"class","bg-video svelte-79co9y"),i(l,"class","svelte-79co9y"),i(x,"id","contact"),i(x,"onclick","window.location.href='services';"),i(x,"class","svelte-79co9y")},m(t,a){p(t,e,a),p(t,s,a),p(t,o,a),p(t,l,a),k(l,d),p(t,u,a),W(m,t,a),p(t,v,a),p(t,x,a),k(x,g),M=!0},p(t,[e]){const s={};1&e&&(s.$$scope={dirty:e,ctx:t}),m.$set(s)},i(t){M||(h(m.$$.fragment,t),M=!0)},o(t){f(m.$$.fragment,t),M=!1},d(t){t&&r(e),t&&r(s),t&&r(o),t&&r(l),t&&r(u),I(m,t),t&&r(v),t&&r(x)}}}export default class extends t{constructor(t){super(),e(this,t,null,S,s,{})}}
