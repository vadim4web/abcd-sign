import{_ as f}from"./index-DIXuIIaI.js";import{a as _,f as n,d as t,t as o,J as a,c as p,w as m,i as g,o as i}from"./vue-m0v5TED9.js";import"./vendor-BcxX2YnB.js";const k={class:"not-found flex-center"},$={__name:"404",setup(y){const l=JSON.parse(sessionStorage.getItem("navigation_history")||"[]"),d=l.pop()||"/",r=l.length?l.slice(-1)[0]:"/";return sessionStorage.setItem("navigation_history",JSON.stringify(l)),(e,s)=>{const u=g("router-link");return i(),_("main",k,[n("h2",null,[s[0]||(s[0]=t(" ⛔ 404 ")),s[1]||(s[1]=n("br",null,null,-1)),t(" "+o(e.$t("404")),1)]),n("p",null,[t(o(e.$t("404_1"))+" ",1),n("b",null,[n("i",null,"'"+o(a(d))+"'",1)]),t(" "+o(e.$t("404_2")),1),s[2]||(s[2]=n("br",null,null,-1)),t(" "+o(e.$t("404_3")),1)]),n("p",null,[t(o(e.$t("404_4"))+" —  ",1),a(r)!=="/"?(i(),p(u,{key:0,to:a(r)},{default:m(()=>[t(o(e.$t("backPreviousPage"))+" ",1),n("b",null,"«"+o(e.$t(a(r).slice(1)))+"»",1),s[3]||(s[3]=t(" ↺ "))]),_:1},8,["to"])):(i(),p(u,{key:1,to:"/"},{default:m(()=>[t(o(e.$t("back404"))+" ↺ ",1)]),_:1}))])])}}},S=f($,[["__scopeId","data-v-a672771c"]]);export{S as default};