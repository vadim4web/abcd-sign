import{b as i,e as p,I as w,C as d,f as u,F as h,A as m,u as s,Z as f,M as g}from"./vueperslides-CxVlc_dm.js";const _={__name:"ServicesSlider",setup($){const t=[["a01.webp","a02.webp","a03.webp","a04.webp","a05.webp","a06.webp","a07.webp","a08.webp","a09.webp","a10.webp"],["b01.webp","b02.webp","b03.webp","b04.webp","b05.webp","b06.webp","b07.webp","b08.webp","b09.webp","b10.webp"],["c01.webp","c02.webp","c03.webp","c04.webp","c05.webp","c06.webp","c07.webp","c08.webp","c09.webp","c10.webp"],["d01.webp","d02.webp","d03.webp","d04.webp","d05.webp","d06.webp","d07.webp","d08.webp","d09.webp","d10.webp"]],n="/";t.forEach(e=>e.sort(()=>Math.random()-.5));const r=[],o=Math.max(...t.map(e=>e.length));for(let e=0;e<o;e++)for(let b=0;b<t.length;b++)t[b][e]&&r.push(t[b][e]);const c=i(r.map(e=>({group:`${e.charAt(0)+"00"}`,title:`${e.slice(0,3)+"_title"}`,content:`<div style="background-image: url('${n}${e}'); width: 100vmin; height: 17.5rem; background-size: cover; background-position: center;"></div>`})));return(e,b)=>(p(),w(s(g),{autoplay:!0,arrows:!1,bullets:!1,"fixed-height":!0,class:"no-shadow",style:"box-shadow: inset 0 0 1rem 0.5rem var(--shadow)"},{default:d(()=>[(p(!0),u(h,null,m(c.value,(a,l)=>(p(),w(s(f),{key:l,title:`<em><span class='first-letter'>${e.$t(a.group)[0]}</span>${e.$t(a.group).slice(1)} : ${e.$t(a.title)}</em>`,content:a.content},null,8,["title","content"]))),128))]),_:1}))}};export{_ as default};
