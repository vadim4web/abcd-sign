import{J as b,s as l,u as x,y as B,a as u,f as o,t as s,d as f,e as m,K as c,k as U,C as q,b as I,L as z,o as d}from"./vue-Be0O9ZuW.js";import{F,e as K}from"./vendor-LdcJB_hU.js";const Y={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_ASSETS_DIR:"https://1abcdesign.github.io/",VITE_BASE_URL:"/",VITE_EMAILER_SERVICE_ID:"service_b8m9pi3",VITE_EMAILER_TEMPLATE_ID:"template_62xrml7",VITE_EMAILER_USER_KEY:"8kWyayb90IiSLZud_",VITE_GEO_API_KEY:"2b8e2712d081486a81f6dd403a8a76f4",VITE_GMAPS_API_KEY:"AIzaSyCul27pArARh2AfzsvLqCH-uSqok31yaqA"},N={class:"main contacts"},O={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1","stroke-linecap":"round","stroke-linejoin":"round",class:"icon feather-phone","aria-hidden":"true",style:{width:"1rem",height:"1rem",position:"relative",top:"0.15rem"}},H=["title"],W={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1","stroke-linecap":"round","stroke-linejoin":"round",class:"icon feather-send",style:{width:"1rem",height:"1rem",position:"relative",top:"0.15rem"}},G=["title"],J={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1","stroke-linecap":"round","stroke-linejoin":"round",class:"icon feather-mail",style:{width:"1rem",height:"1rem",position:"relative",top:"0.15rem"}},Z=["href","title"],Q=["data-text"],X=["placeholder"],ee=["data-text"],te=["title"],oe=["data-text"],ae=["placeholder"],le=["data-text"],ne=["data-text"],se=["data-text"],re=["placeholder"],ie=["title"],ue={key:0,class:"success flex-center","aria-live":"polite"},de={key:1,class:"error flex-center","aria-live":"polite"},ve={__name:"Contacts",setup(me){const w=b(()=>"AIzaSyCul27pArARh2AfzsvLqCH-uSqok31yaqA"),r=l(""),n=l(""),i=l(""),p=l(""),v=l(""),h=l(""),_=l(!1),E=l(!1),y=l([]),A=b(()=>r.value&&n.value&&i.value&&p.value),k=e=>{e.target.value.startsWith("+380")||(e.target.value="+380")},P=e=>{let t=e.target.value.replace(/[^0-9+]/g,"").slice(0,13);t.startsWith("+380")||(t="+380"+t.replace("+380","")),t=t.replace(/^(\+380)(\d{0,2})$/,"$1 $2").replace(/^(\+380)(\d{0,2})(\d{0,3})$/,"$1 $2 $3").replace(/^(\+380)(\d{0,2})(\d{0,3})(\d{0,4})$/,"$1 $2 $3 $4"),e.target.value=t,n.value=t},S=e=>{const t=e.target.value;(t==="+380"||t==="+380 ")&&(e.target.value="",n.value="")},V=({name:e,state:t,country:a})=>{p.value=[e,t,a].join(", ")},L=()=>{r.value="",n.value="",i.value="",p.value="",v.value="",h.value=""},{VITE_EMAILER_SERVICE_ID:T,VITE_EMAILER_TEMPLATE_ID:R,VITE_EMAILER_USER_KEY:C}=Y,M=async()=>{const e={name:r.value,phone:n.value,project:i.value,message:`
      Name: ${r.value}
      Phone: ${n.value}
      Project: ${i.value}
      Place: ${p.value}
      Budget: ${v.value}
      Comment: ${h.value}
    `.trim()};try{const t=await K.send(T,R,e,C);console.log("Email sent successfully!",t),_.value=!0,E.value=!1}catch(t){console.error("Error sending email:",t),_.value=!1,E.value=!0}setTimeout(()=>{_.value=!1,E.value=!1,L()},5e3)},j=()=>{y.value=document.querySelectorAll("#app input, #app textarea"),y.value.forEach(e=>{e.addEventListener("focus",g),e.addEventListener("blur",$)})},D=()=>{y.value.forEach(e=>{e.removeEventListener("focus",g),e.removeEventListener("blur",$)})},g=()=>{document.documentElement.style.setProperty("--vh","calc((100dvh - var(--safe-top) - var(--safe-bottom)) / 100)"),document.documentElement.style.setProperty("font-size","max(calc(2 * var(--vh)), calc(20 / 5.5 * 1vmin))"),document.documentElement.style.setProperty("--main-h","calc(100dvh - 2.75rem - 5.5rem)"),document.documentElement.style.setProperty("--main-cent","calc((100dvh - 2.75rem - 5.5rem) / 100)"),document.documentElement.style.setProperty("--main-em","calc((100dvh - 2.75rem - 5.5rem) / 41.75)")},$=()=>{document.documentElement.style.setProperty("--vh","calc((100svh - var(--safe-top) - var(--safe-bottom)) / 100)"),document.documentElement.style.setProperty("font-size","min(calc(2 * var(--vh)), calc(20 / 5.5 * 1vmin))"),document.documentElement.style.setProperty("--main-h","calc(100svh - 2.75rem - 5.5rem)"),document.documentElement.style.setProperty("--main-cent","calc((100svh - 2.75rem - 5.5rem) / 100)"),document.documentElement.style.setProperty("--main-em","calc((100svh - 2.75rem - 5.5rem) / 41.75)")};return x(()=>{j()}),B(()=>{D()}),(e,t)=>(d(),u("main",N,[o("p",null,[o("strong",null,[o("em",null,s(e.$t("contact_intro")),1)])]),o("p",null,[(d(),u("svg",O,t[5]||(t[5]=[o("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"},null,-1)]))),f(" "+s(e.$t("contact_phone"))+": ",1),o("a",{href:"tel:+380933789883",title:e.$t("phoneUs"),target:"_blank"}," +380 93 378 9883 ",8,H)]),o("p",null,[(d(),u("svg",W,t[6]||(t[6]=[o("line",{x1:"22",y1:"2",x2:"11",y2:"13"},null,-1),o("polygon",{points:"22 2 15 22 11 13 2 9 22 2"},null,-1)]))),f(" "+s(e.$t("contact_tg"))+": ",1),o("a",{href:"http://t.me/abcdesign1",title:e.$t("chatDirect"),target:"_blank"}," @abcdesign1 ",8,G)]),o("p",null,[(d(),u("svg",J,t[7]||(t[7]=[o("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"},null,-1),o("polyline",{points:"22,6 12,13 2,6"},null,-1)]))),f(" "+s(e.$t("contact_mail"))+": ",1),o("a",{href:`mailto:one.abcdesign@gmail.com?subject=${e.$t("email_subject")}`,title:e.$t("emailSend"),target:"_blank"}," one.abcdesign@gmail.com ",8,Z)]),o("form",{onSubmit:z(M,["prevent"]),class:"form flex-align flex-col box-shadow-1-05 bg-texture",autocomplete:"on"},[o("label",{"data-text":e.$t("form_name")},[m(o("input",{autocomplete:"name",type:"text",placeholder:e.$t("form_name_ph"),"onUpdate:modelValue":t[0]||(t[0]=a=>r.value=a),required:"","aria-label":"name-input"},null,8,X),[[c,r.value]])],8,Q),o("label",{"data-text":e.$t("form_phone")},[m(o("input",{autocomplete:"tel",type:"tel",placeholder:"+380 99 999 9999",onFocus:k,onInput:P,onBlur:S,"onUpdate:modelValue":t[1]||(t[1]=a=>n.value=a),required:"","aria-label":"phone-input",pattern:"^\\+380 \\d{2} \\d{3} \\d{4}$",title:e.$t("form_phone_tip")},null,40,te),[[c,n.value]])],8,ee),o("label",{"data-text":e.$t("form_project")},[m(o("input",{type:"text",placeholder:e.$t("form_project_ph"),"onUpdate:modelValue":t[2]||(t[2]=a=>i.value=a),required:"","aria-label":"project-input"},null,8,ae),[[c,i.value]])],8,oe),o("label",{"data-text":e.$t("form_location")},[U(q(F),{"api-key":w.value,onSet:V,placeholder:e.$t("form_location_ph"),required:""},null,8,["api-key","placeholder"])],8,le),o("label",{"data-text":e.$t("form_budget")},[m(o("input",{type:"number",placeholder:"100000",min:"10000","onUpdate:modelValue":t[3]||(t[3]=a=>v.value=a),"aria-label":"budget-input"},null,512),[[c,v.value]])],8,ne),o("label",{"data-text":e.$t("form_comment")},[m(o("textarea",{"onUpdate:modelValue":t[4]||(t[4]=a=>h.value=a),placeholder:e.$t("form_comment_ph")},null,8,re),[[c,h.value]])],8,se),o("button",{type:"submit",title:A.value?e.$t("form_send_valid_tip"):e.$t("form_send_invalid_tip")},[f(s(e.$t("form_send"))+" ",1),_.value?(d(),u("span",ue,s(e.$t("success")),1)):I("",!0),E.value?(d(),u("span",de,s(e.$t("try_again")),1)):I("",!0)],8,ie)],32)]))}};export{ve as default};
