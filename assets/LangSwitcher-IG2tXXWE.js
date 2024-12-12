import{i as o}from"./index-C1K01LSQ.js";import{a as C}from"./vendor-CTozpBxZ.js";import{K as S,r as p,o as _,N as B,j as I,b as r,c,F as b,y as h,e as y,l as w}from"./vue-CSzecv1Y.js";const N={city:{name:"Boyarka",names:{en:"Boyarka"}},continent:{code:"EU",geoname_id:6255148,names:{de:"Europa",en:"Europe",es:"Europa",fa:" اروپا",fr:"Europe",ja:"ヨーロッパ大陸",ko:"유럽","pt-BR":"Europa",ru:"Европа","zh-CN":"欧洲"},name:"Europe"},country:{geoname_id:690791,iso_code:"UA",names:{de:"Ukraine",en:"Ukraine",es:"Ucrania",fa:"اوکراین",fr:"Ukraine",ja:"ウクライナ",ko:"우크라이나","pt-BR":"Ucrânia",ru:"Украина","zh-CN":"乌克兰"},name:"Ukraine",name_native:"Україна",phone_code:"380",capital:"Kyiv",currency:"UAH",flag:"🇺🇦",languages:[{iso_code:"uk",name:"Ukrainian",name_native:"Українська"}]},location:{latitude:50.317,longitude:30.2902},subdivisions:[{names:{en:"Kyiv"}}],state:{name:"Kyiv"},datasource:[{name:"IP to City Lite",attribution:"<a href='https://db-ip.com'>IP Geolocation by DB-IP</a>",license:"Creative Commons Attribution License"}],ip:"178.158.203.59"},T="2b8e2712d081486a81f6dd403a8a76f4",E=async()=>{try{return(await C.get(`https://api.geoapify.com/v1/ipinfo?apiKey=${T}`)).data}catch(a){return console.error("Error fetching IP info:",a),N}},U=["title"],G=["onClick"],L=["src","alt"],j={__name:"LangSwitcher",setup(a){const l="/",k=Object.keys(o.global.messages).map(e=>({value:e,image:l+o.global.messages[e].flag})),f=S(()=>[...k].sort(e=>o.global.locale===e.value?-1:1)),u=p(o.global.locale),i=p(!1),A=e=>{d(e),i.value=!i.value},v=()=>{i.value=!1},m=()=>{const e=o.global.locale==="en"?"From «A-B-C» to «All-Turnkey» Design!":"Від «А-Б-Ц» до «Під-ключ-Все» Дизайн!";document.title=`ABCDΞSIGN — ${e}`},D=e=>{document.documentElement.lang=e,document.documentElement.setAttribute("xml:lang",e);const t={uk:{description:"ABCDΞSIGN — Від «А-Б-Ц» до «Під-ключ-Все» Дизайн! Професійний дизайн інтер'єру, екстер'єру та ландшафтний дизайн в Україні.",keywords:"дизайн інтер'єру, екстер'єрний дизайн, ландшафтний дизайн, дизайнерські послуги, ABCDΞSIGN, дизайн під ключ, Україна",title:"ABCDΞSIGN — Від «А-Б-Ц» до «Під-ключ-Все» Дизайн!",ogTitle:"ABCDΞSIGN — Від «А-Б-Ц» до «Під-ключ-Все» Дизайн!",ogDescription:"Від Ескізу до Дизайну Під Ключ — Все в Одному Місці. Надаємо комплексні дизайнерські послуги.",twitterTitle:"ABCDΞSIGN — Від «А-Б-Ц» до «Під-ключ-Все» Дизайн!",twitterDescription:"Від Ескізу до Дизайну Під Ключ. Надаємо дизайнерські послуги для вашого простору."},en:{description:"ABCDΞSIGN — From «A-B-C» to «All-Turnkey» Design! Professional interior, exterior, and landscape design services in Ukraine.",keywords:"interior design, exterior design, landscape design, design services, ABCDΞSIGN, turnkey design, Ukraine",title:"ABCDΞSIGN — From «A-B-C» to «All-Turnkey» Design!",ogTitle:"ABCDΞSIGN — From «A-B-C» to «All-Turnkey» Design!",ogDescription:"From Sketch to Turnkey Design — All in One Place. We provide comprehensive design services.",twitterTitle:"ABCDΞSIGN — From «A-B-C» to «All-Turnkey» Design!",twitterDescription:"From Sketch to Turnkey Design. Providing design services for your space."}}[e];document.querySelector("meta[name='description']").setAttribute("content",t.description),document.querySelector("meta[name='keywords']").setAttribute("content",t.keywords),document.querySelector("meta[property='og:title']").setAttribute("content",t.ogTitle),document.querySelector("meta[property='og:description']").setAttribute("content",t.ogDescription),document.querySelector("meta[name='twitter:title']").setAttribute("content",t.twitterTitle),document.querySelector("meta[name='twitter:description']").setAttribute("content",t.twitterDescription),document.title=t.title;const n=document.querySelector('script[type="application/ld+json"]');if(n){const s=JSON.parse(n.textContent);s.description=t.description,n.textContent=JSON.stringify(s,null,2)}},d=e=>{o.global.locale=e,localStorage.setItem("lang",e),u.value=e,m(),D(e)};return _(async()=>{let e=localStorage.getItem("lang");e?o.global.locale=e:(e=(await E()).country.iso_code==="UA"?"uk":"en",d(e)),m()}),(e,g)=>{const t=B("click-outside");return I((r(),c("menu",{title:e.$t("toggleLangTip"),class:y(["lang-switcher select flex-align flex-col",{open:i.value,close:!i.value}])},[(r(!0),c(b,null,h(f.value,(n,s)=>(r(),c("li",{onClick:x=>A(n.value),key:s,class:y([{selected:u.value===n.value},"select-option"])},[w("img",{src:n.image,alt:e.$t("lang")+" flag",class:"select-option-img"},null,8,L)],10,G))),128))],10,U)),[[t,v]])}}};export{j as default};
