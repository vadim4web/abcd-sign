import{q as l,a as v,f as a,t as s,d as E,e as i,I as p,b as I,J as y,o as f}from"./vendor-7ZIIYpuG.js";import{e as S}from"./common-Dz5E8zRs.js";import{a as A}from"./index-By22PLB_.js";const L={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_BASE_URL:"/",VITE_EMAILER_SERVICE_ID:"service_b8m9pi3",VITE_EMAILER_TEMPLATE_ID:"template_62xrml7",VITE_EMAILER_USER_KEY:"8kWyayb90IiSLZud_",VITE_GEO_API_KEY:"2b8e2712d081486a81f6dd403a8a76f4"},M=["data-text"],D=["placeholder"],U=["data-text"],C=["title"],P=["data-text"],j=["placeholder"],B=["data-text"],k=["data-text"],w=["placeholder"],q={type:"submit"},K={key:0,class:"success"},N={key:1,class:"error"},Y={__name:"Contacts",setup(x){const r=l(""),n=l(""),u=l(""),m=l(""),d=l(""),_=l(!1),c=l(!1),b=e=>{e.target.value.startsWith("+380")||(e.target.value="+380")},h=e=>{const t=e.target.value.replace(/[^0-9+]/g,"").slice(0,13);e.target.value=t.startsWith("+380")?t:"+380"+t.slice(4),n.value=e.target.value},g=()=>{r.value="",n.value="",u.value="",m.value="",d.value=""},{VITE_EMAILER_SERVICE_ID:$,VITE_EMAILER_TEMPLATE_ID:V,VITE_EMAILER_USER_KEY:T}=L,R=async()=>{const e={name:r.value,phone:n.value,project:u.value,message:`
      Name: ${r.value}
      Phone: ${n.value}
      Project: ${u.value}
      Budget: ${m.value}
      Comment: ${d.value}
    `.trim()};try{const t=await S.send($,V,e,T);console.log("Email sent successfully!",t),_.value=!0,c.value=!1}catch(t){console.error("Error sending email:",t),_.value=!1,c.value=!0}setTimeout(()=>{_.value=!1,c.value=!1,g()},5e3)};return(e,t)=>(f(),v("main",null,[a("p",null,[a("strong",null,[a("em",null,s(e.$t("contact_intro")),1)])]),a("p",null,[E(s(e.$t("contact_phone"))+": ",1),t[5]||(t[5]=a("a",{href:"tel:+380933789883"},"+380 93 378 9883",-1))]),a("p",null,[E(s(e.$t("contact_tg"))+": ",1),t[6]||(t[6]=a("a",{href:"http://t.me/abcdesign1"},"@abcdesign1",-1))]),a("p",null,[E(s(e.$t("contact_mail"))+": ",1),t[7]||(t[7]=a("a",{href:"mailto:one.abcdesign@gmail.com"},"one.abcdesign@gmail.com",-1))]),a("form",{onSubmit:y(R,["prevent"]),class:"form",autocomplete:"on"},[a("label",{"data-text":e.$t("form_name")},[i(a("input",{autocomplete:"name",type:"text",placeholder:e.$t("form_name_ph"),"onUpdate:modelValue":t[0]||(t[0]=o=>r.value=o),required:"","aria-label":"name-input"},null,8,D),[[p,r.value]])],8,M),a("label",{"data-text":e.$t("form_phone")},[i(a("input",{autocomplete:"tel",type:"tel",placeholder:"+380 99 999 9999",onFocus:b,onInput:h,"onUpdate:modelValue":t[1]||(t[1]=o=>n.value=o),required:"","aria-label":"phone-input",pattern:"^\\+380[0-9]{9}$",title:e.$t("form_phone_tip")},null,40,C),[[p,n.value]])],8,U),a("label",{"data-text":e.$t("form_project")},[i(a("input",{type:"text",placeholder:e.$t("form_project_ph"),"onUpdate:modelValue":t[2]||(t[2]=o=>u.value=o),required:"","aria-label":"project-input"},null,8,j),[[p,u.value]])],8,P),a("label",{"data-text":e.$t("form_budget")},[i(a("input",{type:"number",placeholder:"100000",min:"10000","onUpdate:modelValue":t[3]||(t[3]=o=>m.value=o),"aria-label":"budget-input"},null,512),[[p,m.value]])],8,B),a("label",{"data-text":e.$t("form_comment")},[i(a("textarea",{"onUpdate:modelValue":t[4]||(t[4]=o=>d.value=o),placeholder:e.$t("form_comment_ph")},null,8,w),[[p,d.value]])],8,k),a("button",q,[E(s(e.$t("form_send"))+" ",1),_.value?(f(),v("span",K,s(e.$t("success")),1)):I("",!0),c.value?(f(),v("span",N,s(e.$t("try_again")),1)):I("",!0)])],32)]))}},G=A(Y,[["__scopeId","data-v-5cdbb78e"]]);export{G as default};
