import{_ as d}from"./index-DIkC_roI.js";import{s as h,u,o as n,a,f as m,B as v}from"./vue-DWba8sbm.js";const x=["title"],f={key:0,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"icon feather-moon"},g={key:1,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"var(--color)",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"icon feather-sun"},y={__name:"ThemeSwitcher",setup(w){const s="https://1abcdesign.github.io/",e=h(localStorage.getItem("theme")||"light"),l=()=>{document.documentElement.classList.add("force-redraw"),setTimeout(()=>{document.documentElement.classList.remove("force-redraw")},50)},i=()=>{const o=e.value==="light"?"#000":"#fff";document.querySelectorAll(".icon").forEach(t=>{t.setAttribute("stroke",o)})},r=()=>{const o=document.getElementById("favicon");o.href=s+(e.value==="dark"?"favicon_dark.ico":"favicon_light.ico")},c=()=>{e.value=e.value==="light"?"dark":"light",localStorage.setItem("theme",e.value),document.documentElement.setAttribute("data-theme",e.value),l(),i(),r()};return u(()=>{l(),i(),r()}),(o,t)=>(n(),a("button",{onClick:c,class:"theme-switcher flex-center",title:o.$t("toggleThemeTip")},[e.value==="light"?(n(),a("svg",f,t[0]||(t[0]=[m("path",{d:`
          M         22 12
          A 10 10   0 1 1   12 2
          A 6 6     0 0 0   22 12
          z
        `},null,-1)]))):(n(),a("svg",g,t[1]||(t[1]=[v('<circle cx="12" cy="12" r="5" data-v-2876e797></circle><line x1="12" y1="1" x2="12" y2="3" data-v-2876e797></line><line x1="12" y1="21" x2="12" y2="23" data-v-2876e797></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" data-v-2876e797></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" data-v-2876e797></line><line x1="1" y1="12" x2="3" y2="12" data-v-2876e797></line><line x1="21" y1="12" x2="23" y2="12" data-v-2876e797></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" data-v-2876e797></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" data-v-2876e797></line>',9)])))],8,x))}},_=d(y,[["__scopeId","data-v-2876e797"]]);export{_ as default};
