import{C as q,r as m,o as B,D as F,E as x,a as g,c as y,n as U,e as C,b as a,t as f,m as k,g as E,G as $,k as K,B as O,s as L,H}from"./index-bWiSWgfJ.js";import{_ as z}from"./_plugin-vue_export-helper-DlAUqK2U.js";const I={_origin:"https://api.emailjs.com"},N=(s,o="https://api.emailjs.com")=>{I._userID=s,I._origin=o},D=(s,o,r)=>{if(!s)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!o)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!r)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class R{constructor(o){this.status=o.status,this.text=o.responseText}}const j=(s,o,r={})=>new Promise((i,l)=>{const d=new XMLHttpRequest;d.addEventListener("load",({target:n})=>{const p=new R(n);p.status===200||p.text==="OK"?i(p):l(p)}),d.addEventListener("error",({target:n})=>{l(new R(n))}),d.open("POST",I._origin+s,!0),Object.keys(r).forEach(n=>{d.setRequestHeader(n,r[n])}),d.send(o)}),Y=(s,o,r,i)=>{const l=i||I._userID;return D(l,s,o),j("/api/v1.0/email/send",JSON.stringify({lib_version:"3.2.0",user_id:l,service_id:s,template_id:o,template_params:r}),{"Content-type":"application/json"})},G=s=>{let o;if(typeof s=="string"?o=document.querySelector(s):o=s,!o||o.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return o},W=(s,o,r,i)=>{const l=i||I._userID,d=G(r);D(l,s,o);const n=new FormData(d);return n.append("lib_version","3.2.0"),n.append("service_id",s),n.append("template_id",o),n.append("user_id",l),j("/api/v1.0/email/send-form",n)},J={init:N,send:Y,sendForm:W},X=["placeholder"],Z=q({__name:"GoogleAutocomplete",props:{modelValue:{type:String,default:""},apiKey:{type:String,required:!0},placeholder:{type:String,default:""},isFullPayload:{type:Boolean,default:!1},class:{type:String,default:""}},emits:["update:modelValue","set"],setup(s,{emit:o}){const r=s,i=m(),l=m(),d=m(!1),n=()=>new Promise((u,_)=>{if(window.google&&window.google.maps&&window.google.maps.places)u();else if(!d.value){d.value=!0;const h=document.createElement("script");h.setAttribute("src",`https://maps.googleapis.com/maps/api/js?key=${r.apiKey}&libraries=places&v=weekly&callback=initMap`),window.initMap=()=>{u()},h.onerror=async w=>{_(w)},document.head.appendChild(h)}}),p=()=>{if(i.value){const u=google.maps.places,_=new u.Autocomplete(i.value,{fields:["formatted_address","address_components","geometry","name"],strictBounds:!1});_.addListener("place_changed",async()=>{var h,w,b;l.value=await _.getPlace();const T=await l.value.geometry.location.lat(),M=await l.value.geometry.location.lng();let A="",S="",V="";for(const v of(h=l.value)==null?void 0:h.address_components)v.types.includes("locality")?A=await v.long_name:v.types.includes("administrative_area_level_1")?S=await v.long_name:v.types.includes("country")&&(V=await v.long_name);const P={name:(w=l.value)==null?void 0:w.name,city:A,state:S,country:V,latitude:T,longitude:M};o("update:modelValue",(b=l.value)==null?void 0:b.name),r.isFullPayload?o("set",l.value):o("set",P)})}};return B(async()=>{try{await n(),await F(),p()}catch(u){console.error("Failed to load Google Maps API",u)}}),x(()=>{delete window.initMap}),(u,_)=>(g(),y("input",{ref_key:"origin",ref:i,type:"text",class:U(s.class),placeholder:s.placeholder},null,10,X))}}),Q={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_BASE_URL:"/",VITE_EMAILER_SERVICE_ID:"service_b8m9pi3",VITE_EMAILER_TEMPLATE_ID:"template_62xrml7",VITE_EMAILER_USER_KEY:"8kWyayb90IiSLZud_",VITE_GEO_API_KEY:"2b8e2712d081486a81f6dd403a8a76f4",VITE_GMAPS_API_KEY:"AIzaSyCul27pArARh2AfzsvLqCH-uSqok31yaqA"},ee={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1","stroke-linecap":"round","stroke-linejoin":"round",class:"icon feather-phone","aria-hidden":"true",style:{width:"1rem",height:"1rem",position:"relative",top:"0.15rem"}},te=["title"],ae={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1","stroke-linecap":"round","stroke-linejoin":"round",class:"icon feather-send",style:{width:"1rem",height:"1rem",position:"relative",top:"0.15rem"}},oe=["title"],le={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1","stroke-linecap":"round","stroke-linejoin":"round",class:"icon feather-mail",style:{width:"1rem",height:"1rem",position:"relative",top:"0.15rem"}},se=["title"],ne=["data-text"],re=["placeholder"],ie=["data-text"],de=["title"],ue=["data-text"],pe=["placeholder"],ce=["data-text"],me=["data-text"],_e=["data-text"],he=["placeholder"],ve=["title"],fe={key:0,class:"success","aria-live":"polite"},ge={key:1,class:"error","aria-live":"polite"},ye={__name:"Contacts",setup(s){const o=C(()=>"AIzaSyCul27pArARh2AfzsvLqCH-uSqok31yaqA"),r=m(""),i=m(""),l=m(""),d=m(""),n=m(""),p=m(""),u=m(!1),_=m(!1),h=C(()=>r.value&&i.value&&l.value&&d.value),w=e=>{e.target.value.startsWith("+380")||(e.target.value="+380")},b=e=>{let t=e.target.value.replace(/[^0-9+]/g,"").slice(0,13);t.startsWith("+380")||(t="+380"+t.replace("+380","")),t=t.replace(/^(\+380)(\d{0,2})$/,"$1 $2").replace(/^(\+380)(\d{0,2})(\d{0,3})$/,"$1 $2 $3").replace(/^(\+380)(\d{0,2})(\d{0,3})(\d{0,4})$/,"$1 $2 $3 $4"),e.target.value=t,i.value=t},T=e=>{const t=e.target.value;(t==="+380"||t==="+380 ")&&(e.target.value="",i.value="")},M=({name:e,state:t,country:c})=>{d.value=[e,t,c].join(", ")},A=()=>{r.value="",i.value="",l.value="",d.value="",n.value="",p.value=""},{VITE_EMAILER_SERVICE_ID:S,VITE_EMAILER_TEMPLATE_ID:V,VITE_EMAILER_USER_KEY:P}=Q,v=async()=>{const e={name:r.value,phone:i.value,project:l.value,message:`
      Name: ${r.value}
      Phone: ${i.value}
      Project: ${l.value}
      Place: ${d.value}
      Budget: ${n.value}
      Comment: ${p.value}
    `.trim()};try{const t=await J.send(S,V,e,P);console.log("Email sent successfully!",t),u.value=!0,_.value=!1}catch(t){console.error("Error sending email:",t),u.value=!1,_.value=!0}setTimeout(()=>{u.value=!1,_.value=!1,A()},5e3)};return(e,t)=>(g(),y("main",null,[a("p",null,[a("strong",null,[a("em",null,f(e.$t("contact_intro")),1)])]),a("p",null,[(g(),y("svg",ee,t[5]||(t[5]=[a("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"},null,-1)]))),k(" "+f(e.$t("contact_phone"))+": ",1),a("a",{href:"tel:+380933789883",title:e.$t("phoneUs")}," +380 93 378 9883 ",8,te)]),a("p",null,[(g(),y("svg",ae,t[6]||(t[6]=[a("line",{x1:"22",y1:"2",x2:"11",y2:"13"},null,-1),a("polygon",{points:"22 2 15 22 11 13 2 9 22 2"},null,-1)]))),k(" "+f(e.$t("contact_tg"))+": ",1),a("a",{href:"http://t.me/abcdesign1",title:e.$t("chatDirect")}," @abcdesign1 ",8,oe)]),a("p",null,[(g(),y("svg",le,t[7]||(t[7]=[a("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"},null,-1),a("polyline",{points:"22,6 12,13 2,6"},null,-1)]))),k(" "+f(e.$t("contact_mail"))+": ",1),a("a",{href:"mailto:one.abcdesign@gmail.com",title:e.$t("emailSend")}," one.abcdesign@gmail.com ",8,se)]),a("form",{onSubmit:H(v,["prevent"]),class:"form",autocomplete:"on"},[a("label",{"data-text":e.$t("form_name")},[E(a("input",{autocomplete:"name",type:"text",placeholder:e.$t("form_name_ph"),"onUpdate:modelValue":t[0]||(t[0]=c=>r.value=c),required:"","aria-label":"name-input"},null,8,re),[[$,r.value]])],8,ne),a("label",{"data-text":e.$t("form_phone")},[E(a("input",{autocomplete:"tel",type:"tel",placeholder:"+380 99 999 9999",onFocus:w,onInput:b,onBlur:T,"onUpdate:modelValue":t[1]||(t[1]=c=>i.value=c),required:"","aria-label":"phone-input",pattern:"^\\+380 \\d{2} \\d{3} \\d{4}$",title:e.$t("form_phone_tip")},null,40,de),[[$,i.value]])],8,ie),a("label",{"data-text":e.$t("form_project")},[E(a("input",{type:"text",placeholder:e.$t("form_project_ph"),"onUpdate:modelValue":t[2]||(t[2]=c=>l.value=c),required:"","aria-label":"project-input"},null,8,pe),[[$,l.value]])],8,ue),a("label",{"data-text":e.$t("form_location")},[K(O(Z),{"api-key":o.value,onSet:M,placeholder:e.$t("form_location_ph"),required:""},null,8,["api-key","placeholder"])],8,ce),a("label",{"data-text":e.$t("form_budget")},[E(a("input",{type:"number",placeholder:"100000",min:"10000","onUpdate:modelValue":t[3]||(t[3]=c=>n.value=c),"aria-label":"budget-input"},null,512),[[$,n.value]])],8,me),a("label",{"data-text":e.$t("form_comment")},[E(a("textarea",{"onUpdate:modelValue":t[4]||(t[4]=c=>p.value=c),placeholder:e.$t("form_comment_ph")},null,8,he),[[$,p.value]])],8,_e),a("button",{type:"submit",title:h.value?e.$t("form_send_valid_tip"):e.$t("form_send_invalid_tip")},[k(f(e.$t("form_send"))+" ",1),u.value?(g(),y("span",fe,f(e.$t("success")),1)):L("",!0),_.value?(g(),y("span",ge,f(e.$t("try_again")),1)):L("",!0)],8,ve)],32)]))}},$e=z(ye,[["__scopeId","data-v-a81a540d"]]);export{$e as default};
