import{S as t,i as s,s as a,p as e,e as n,q as o,v as i,d as r,w as l,a as c,b as u,x as h,g as p,h as d,z as f,D as m,C as v}from"./client.98d47989.js";function g(t){let s,a,g,x,j,w,y=t[0].title+"",E=t[0].html+"";return document.title=s=t[0].title,{c(){a=e(),g=n("h1"),x=o(y),j=e(),w=n("div"),this.h()},l(t){i('[data-svelte="svelte-1uty71u"]',document.head).forEach(r),a=l(t),g=c(t,"H1",{});var s=u(g);x=h(s,y),s.forEach(r),j=l(t),w=c(t,"DIV",{class:!0}),u(w).forEach(r),this.h()},h(){p(w,"class","content svelte-gnxal1")},m(t,s){d(t,a,s),d(t,g,s),f(g,x),d(t,j,s),d(t,w,s),w.innerHTML=E},p(t,[a]){1&a&&s!==(s=t[0].title)&&(document.title=s),1&a&&y!==(y=t[0].title+"")&&m(x,y),1&a&&E!==(E=t[0].html+"")&&(w.innerHTML=E)},i:v,o:v,d(t){t&&r(a),t&&r(g),t&&r(j),t&&r(w)}}}async function x({params:t,query:s}){const a=await this.fetch(`blog/${t.slug}.json`),e=await a.json();if(200===a.status)return{post:e};this.error(a.status,e.message)}function j(t,s,a){let{post:e}=s;return t.$set=t=>{"post"in t&&a(0,e=t.post)},[e]}export default class extends t{constructor(t){super(),s(this,t,j,g,a,{post:0})}}export{x as preload};
