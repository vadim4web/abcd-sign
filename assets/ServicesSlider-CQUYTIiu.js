import{Z as i,b as u}from"./common-Dz5E8zRs.js";import{q as d,o as g,c as j,w as b,a as m,F as h,p as f,G as c}from"./vendor-7ZIIYpuG.js";const $={__name:"ServicesSlider",setup(v){const t=[["a01.jpg","a02.jpg","a03.jpg","a04.jpg","a05.jpg","a06.jpg","a07.jpg","a08.jpg","a09.jpg","a10.jpg"],["b01.jpg","b02.jpg","b03.jpg","b04.jpg","b05.jpg","b06.jpg","b07.jpg","b08.jpg","b09.jpg","b10.jpg"],["c01.jpg","c02.jpg","c03.jpg","c04.jpg","c05.jpg","c06.jpg","c07.jpg","c08.jpg","c09.jpg","c10.jpg"],["d01.jpg","d02.jpg","d03.jpg","d04.jpg","d05.jpg","d06.jpg","d07.jpg","d08.jpg","d09.jpg","d10.jpg"]],n="/";t.forEach(e=>e.sort(()=>Math.random()-.5));const r=[],o=Math.max(...t.map(e=>e.length));for(let e=0;e<o;e++)for(let p=0;p<t.length;p++)t[p][e]&&r.push(t[p][e]);const s=d(r.map(e=>({group:`${e.charAt(0)+"00"}`,title:`${e.slice(0,3)+"_title"}`,content:`<div style="background-image: url('${n}${e}'); width: 100vmin; height: calc(36 * var(--usable-vh)); background-size: cover; background-position: center;"></div>`})));return(e,p)=>(g(),j(c(u),{autoplay:!0,arrows:!1,bullets:!1,"fixed-height":!0},{default:b(()=>[(g(!0),m(h,null,f(s.value,(a,l)=>(g(),j(c(i),{key:l,title:"<em>"+e.$t(a.group)+" : "+e.$t(a.title)+"</em>",content:a.content},null,8,["title","content"]))),128))]),_:1}))}};export{$ as default};
