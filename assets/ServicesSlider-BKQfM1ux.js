import{Z as i,b as d}from"./common-Dz5E8zRs.js";import{q as u,o as p,c as r,w as h,a as m,F as f,p as g,G as o}from"./vendor-7ZIIYpuG.js";const $={__name:"ServicesSlider",setup(v){const t=[["a01.webp","a02.webp","a03.webp","a04.webp","a05.webp","a06.webp","a07.webp","a08.webp","a09.webp","a10.webp"],["b01.webp","b02.webp","b03.webp","b04.webp","b05.webp","b06.webp","b07.webp","b08.webp","b09.webp","b10.webp"],["c01.webp","c02.webp","c03.webp","c04.webp","c05.webp","c06.webp","c07.webp","c08.webp","c09.webp","c10.webp"],["d01.webp","d02.webp","d03.webp","d04.webp","d05.webp","d06.webp","d07.webp","d08.webp","d09.webp","d10.webp"]],s="/";t.forEach(e=>e.sort(()=>Math.random()-.5));const w=[],c=Math.max(...t.map(e=>e.length));for(let e=0;e<c;e++)for(let b=0;b<t.length;b++)t[b][e]&&w.push(t[b][e]);const n=u(w.map(e=>({group:`${e.charAt(0)+"00"}`,title:`${e.slice(0,3)+"_title"}`,content:`<div style="background-image: url('${s}${e}'); width: 100vmin; height: calc(35 * var(--usable-vh)); background-size: cover; background-position: center;"></div>`})));return(e,b)=>(p(),r(o(d),{autoplay:!0,arrows:!1,bullets:!1,"fixed-height":!0,class:"no-shadow",style:"box-shadow: inset 0 0 1rem 0.5rem var(--shadow)"},{default:h(()=>[(p(!0),m(f,null,g(n.value,(a,l)=>(p(),r(o(i),{key:l,title:"<em>"+e.$t(a.group)+" : "+e.$t(a.title)+"</em>",content:a.content},null,8,["title","content"]))),128))]),_:1}))}};export{$ as default};
