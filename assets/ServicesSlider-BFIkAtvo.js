import{Z as f,b as g}from"./vendor-CTozpBxZ.js";import{f as p}from"./flatPhotos-BJH0RvRV.js";import{r as d,b as i,f as u,w as $,c as b,F as _,y as w,C as c}from"./vue-CSzecv1Y.js";const y=(n,o=10)=>{const s=[];for(let t=0;t<n.length;t+=o)s.push(n.slice(t,t+o));return s},r=y(p),P={__name:"ServicesSlider",setup(n){const o="https://1abcdesign.github.io/";r.forEach(e=>e.sort(()=>Math.random()-.5));const s=[],t=Math.max(...r.map(e=>e.length));for(let e=0;e<t;e++)for(let a=0;a<r.length;a++)r[a][e]&&s.push(r[a][e]);const m=d(s.map(e=>({group:`${e.charAt(0)+"00"}`,title:`${e.slice(0,3)+"_title"}`,image:`${o}${e}`})));return(e,a)=>(i(),u(c(g),{lazy:"","lazy-load-on-drag":"","visible-slides":1,autoplay:!0,arrows:!1,bullets:!1,"fixed-height":!0,class:"no-shadow bg-texture main",style:"box-shadow: inset 0 0 1rem 0.5rem var(--shadow)"},{default:$(()=>[(i(!0),b(_,null,w(m.value,(l,h)=>(i(),u(c(f),{key:h,title:`<em>
                <span class='first-letter'>
                  ${e.$t(l.group)[0]}
                </span>
                  ${e.$t(l.group).slice(1)} : ${e.$t(l.title)}
              </em>`,image:l.image},null,8,["title","image"]))),128))]),_:1}))}};export{P as default};
