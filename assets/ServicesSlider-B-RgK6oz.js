import{o as n,j as w,w as k,c as a,F as x,z as D,x as h,e as B,t as _,A as b,s as M,B as v,b as f,C as $,n as S,D as N,r as P,E,a as T,G as m,i as I,l as A,u as L}from"./index-BxXCf26F.js";const V=["src"],H=["src"],R=["src"],X=["src"],Y=["src"],F={key:2},W={class:"vueperslide__content-wrapper"},q=["innerHTML"],U=["innerHTML"],K={class:"vueperslide__content-wrapper"},G=["innerHTML"],J=["innerHTML"],Q={key:4,class:"vueperslide__loader"};function Z(e,i,s,l,u,t){return n(),w(N(s.link?"a":"div"),{class:S(["vueperslide",t.slideClasses]),href:s.link&&!t.justDragged?s.link:!1,target:s.link&&s.openInNew?typeof s.openInNew=="boolean"?"_blank":s.openInNew:"_self",face:t.slideFace3d,style:b(t.slideStyles),"aria-hidden":t.slides.activeId===e._.uid||t.isSlideVisible?"false":"true",onMouseenter:i[0]||(i[0]=o=>e.$emit("mouse-enter",{slideIndex:t.slideIndex,title:s.title,content:s.content,image:s.image,link:s.link},e.$el)),onMouseleave:i[1]||(i[1]=o=>e.$emit("mouse-leave"))},{default:k(()=>[t.videoObj?(n(),a(x,{key:0},[t.videoObj.webm||t.videoObj.mp4?(n(),a("video",D({key:0,class:"vueperslide__video",width:"100%",height:"100%"},t.videoObj.props||{}),[t.videoObj.webm?(n(),a("source",{key:0,src:t.videoObj.webm,type:"video/webm"},null,8,V)):h("",!0),t.videoObj.mp4?(n(),a("source",{key:1,src:t.videoObj.mp4,type:"video/mp4"},null,8,H)):h("",!0),t.videoObj.ogv?(n(),a("source",{key:2,src:t.videoObj.ogv,type:"video/ogg"},null,8,R)):h("",!0),t.videoObj.avi?(n(),a("source",{key:3,src:t.videoObj.avi,type:"video/avi"},null,8,X)):h("",!0),B(_(t.videoObj.alt||"Sorry, your browser doesn't support embedded videos."),1)],16)):t.videoObj.url?(n(),a("iframe",D({key:1,class:"vueperslide__video",src:t.videoObj.url,type:"text/html",frameborder:"0",width:"100%",height:"100%"},t.videoObj.props||{}),null,16,Y)):h("",!0)],64)):h("",!0),e.imageSrc&&t.conf.slideImageInside?(n(),a("div",{key:1,class:"vueperslide__image",style:b(t.imageStyles)},null,4)):h("",!0),t.conf.slideContentOutside?M((n(),a("div",F,[v(e.$slots,"content",{},()=>[f("div",W,[s.title?(n(),a("div",{key:0,class:"vueperslide__title",innerHTML:s.title},null,8,q)):h("",!0),s.content?(n(),a("div",{key:1,class:"vueperslide__content",innerHTML:s.content},null,8,U)):h("",!0)])])],512)),[[$,!1]]):v(e.$slots,"content",{key:3},()=>[f("div",K,[s.title?(n(),a("div",{key:0,class:"vueperslide__title",innerHTML:s.title},null,8,G)):h("",!0),s.content?(n(),a("div",{key:1,class:"vueperslide__content",innerHTML:s.content},null,8,J)):h("",!0)])]),t.conf.lazy&&!e.loaded?(n(),a("div",Q,[v(e.$slots,"loader")])):h("",!0)]),_:3},40,["href","target","class","face","style","aria-hidden"])}const j=(e,i)=>{const s=e.__vccOpts||e;for(const[l,u]of i)s[l]=u;return s},ee={inject:["slides","touch","updateSlide","addClone","addSlide","removeSlide"],props:{clone:{type:Boolean},image:{type:String,default:""},video:{type:[String,Object],default:""},title:{type:String,default:""},content:{type:String,default:""},link:{type:String,default:""},duration:{type:Number,default:0},lazyloaded:{type:Boolean},openInNew:{type:[Boolean,String]}},emits:["mouse-enter","mouse-leave"],data:()=>({imageSrc:"",loading:!1,loaded:!1}),computed:{conf(){return this.$parent.conf},slideClasses(){return{"vueperslide--active":this.slides.activeId===this._.uid,"vueperslide--previous-slide":this.isPreviousSlide,"vueperslide--next-slide":this.isNextSlide,"vueperslide--visible":this.isSlideVisible,"vueperslide--loading":this.conf.lazy&&!this.loaded,"vueperslide--has-video":this.videoObj,"vueperslide--has-image-inside":this.conf.slideImageInside,"vueperslide--no-pointer-events":this.videoObj&&this.videoObj.pointerEvents===!1}},slideStyles(){const{visibleSlides:e,fade:i,slideImageInside:s,gap:l,gapPx:u}=this.conf;return{...!s&&this.imageSrc&&{backgroundImage:`url("${this.imageSrc}")`},...e>1&&{width:(100-(l?l*(e-1):0))/e+"%"},...e>1&&i&&{[this.conf.rtl?"right":"left"]:this.slideIndex%e/e*100+"%"},...l&&{[this.conf.rtl?"marginLeft":"marginRight"]:l+(u?"px":"%")}}},videoObj(){if(!this.video)return null;let e={url:"",alt:"",props:{controls:!0}};return typeof this.video=="object"?e=Object.assign(e,this.video):typeof this.video=="string"&&(e.url=this.video),e},youtubeVideo(){return/youtube\.|youtu\.be/.test(this.videoObj.url)},imageStyles(){return{...this.conf.slideImageInside&&this.imageSrc&&{backgroundImage:`url("${this.imageSrc}")`}}},slideFace3d(){if(!this.conf["3d"])return!1;const e=["front","right","back","left"],i=(this.slides.current-1+this.slidesCount)%this.slidesCount,s=(this.slides.current+1)%this.slidesCount;let l="front";return this.slideIndex===i?l=e[(4+this.slides.current-1)%4]:this.slideIndex===s&&(l=e[(this.slides.current+1)%4]),l=e[this.slideIndex%4],this.conf.rtl&&l==="left"?l="right":this.conf.rtl&&l==="right"&&(l="left"),l},isPreviousSlide(){if(!this.conf["3d"])return!1;const e=(this.slides.current-1+this.slidesCount)%this.slidesCount;return this._.uid===this.slides.list[e].id},isNextSlide(){if(!this.conf["3d"])return!1;const e=(this.slides.current+1)%this.slidesCount;return this._.uid===this.slides.list[e].id},isSlideVisible(){return this.slideIndex>=this.slides.firstVisible&&this.slideIndex<this.slides.firstVisible+this.conf.visibleSlides},slidesList(){return this.slides.list.map(e=>e.id)},slidesCount(){return this.slidesList.length},slideIndex(){return this.slidesList.indexOf(this._.uid)},justDragged(){return this.touch.justDragged}},methods:{updateThisSlide(e){this.updateSlide(this._.uid,e)},loadImage(){if(!(this.loading||this.loaded))return this.loading=!0,new Promise((e,i)=>{const s=document.createElement("img");s.onload=()=>{this.imageSrc=this.image,this.loading=!1,this.loaded=!0,this.$nextTick(()=>{e({image:this.imageSrc,style:((this.$el.attributes||{}).style||{}).value})})},s.onerror=(this.loading=!1)||i,s.src=this.image})},playVideo(){!this.videoObj||(this.videoObj.url?this.$el.querySelector("iframe").contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*"):this.$el.querySelector("video").play())},pauseVideo(){!this.videoObj||(this.videoObj.url?this.$el.querySelector("iframe").contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*"):this.$el.querySelector("video").pause())}},created(){if(this.imageSrc=this.conf.lazy?"":this.image,this.clone)return this.addClone();this.addSlide({id:this._.uid,image:this.imageSrc,video:this.videoObj&&{...this.videoObj,play:this.playVideo,pause:this.pauseVideo},title:this.title,content:this.content,contentSlot:this.$slots.content,loaderSlot:this.$slots.loader,link:this.link,style:"",loadImage:this.loadImage,duration:this.duration})},mounted(){this.clone||this.updateThisSlide({contentSlot:this.$slots.content,loaderSlot:this.$slots.loader,style:((this.$el.attributes||{}).style||{}).value})},beforeUnmount(){this.clone||this.removeSlide(this._.uid)},watch:{image(){this.imageSrc=this.conf.lazy&&!this.isSlideVisible?"":this.image,this.clone||this.updateThisSlide({image:this.imageSrc,...!this.conf.slideImageInside&&{style:this.slideStyles}})},title(){this.clone||this.updateThisSlide({title:this.title})},content(){this.clone||this.updateThisSlide({content:this.content})},link(){this.clone||this.updateThisSlide({link:this.link})},lazyloaded(){this.clone&&(this.loaded=this.lazyloaded)}}},z=j(ee,[["render",Z]]),te=["innerHTML"],ie=["innerHTML"],se={class:"vueperslides__inner"},le={key:0,class:"vueperslides__paused"},ne={key:1,class:"vueperslides__progress"},oe={key:2,class:"vueperslides__fractions"},ae={viewBox:"0 0 9 18"},re=["d"],de={viewBox:"0 0 9 18"},ue=["d"],he={key:4,class:"vueperslides__bullets",ref:"bullets",role:"tablist","aria-label":"Slideshow navigation"},ce=["aria-label","onClick"],pe={class:"default"},fe={key:1,class:"vueperslides__bullets vueperslides__bullets--outside",ref:"bullets",role:"tablist","aria-label":"Slideshow navigation"},ve=["aria-label","onClick"],ge={class:"default"},be=["innerHTML"],me=["innerHTML"];function Se(e,i,s,l,u,t){const o=P("vnodes"),p=P("vueper-slide");return n(),a("div",{class:S(["vueperslides",t.vueperslidesClasses]),ref:"vueperslides","aria-label":"Slideshow",style:b(t.vueperslidesStyles)},[t.slidesCount&&t.conf.slideContentOutside==="top"?(n(),a("div",{key:0,class:S(["vueperslide__content-wrapper vueperslide__content-wrapper--outside-top",t.conf.slideContentOutsideClass])},[t.currentSlide.contentSlot?(n(),w(o,{key:0,vnodes:t.currentSlide.contentSlot()},null,8,["vnodes"])):(n(),a(x,{key:1},[t.currentSlide.title?(n(),a("div",{key:0,class:"vueperslide__title",innerHTML:t.currentSlide.title},null,8,te)):h("",!0),t.currentSlide.content?(n(),a("div",{key:1,class:"vueperslide__content",innerHTML:t.currentSlide.content},null,8,ie)):h("",!0)],64))],2)):h("",!0),f("div",se,[f("div",{class:"vueperslides__parallax-wrapper",style:b(`padding-bottom: ${t.conf.slideRatio*100}%`),"aria-live":"polite"},[f("div",{class:S(["vueperslides__track",{"vueperslides__track--dragging":e.touch.dragging,"vueperslides__track--mousedown":e.mouseDown}]),ref:"track",style:b(t.trackStyles)},[f("div",{class:"vueperslides__track-inner",style:b(t.trackInnerStyles)},[v(e.$slots,"default"),e.isReady&&t.conf.infinite&&t.canSlide&&t.lastSlide?(n(),w(p,{key:0,class:"vueperslide--clone vueperslide--clone-1",clone:"",title:t.lastSlide.title,content:t.lastSlide.content,image:t.lastSlide.image,link:t.lastSlide.link,style:b(t.lastSlide.style),lazyloaded:t.lastSlide.loaded,"aria-hidden":"true"},E({_:2},[t.lastSlide.contentSlot?{name:"content",fn:k(()=>[T(o,{vnodes:t.lastSlide.contentSlot()},null,8,["vnodes"])]),key:"0"}:void 0,t.conf.lazy&&!t.lastSlide.loaded&&t.lastSlide.loaderSlot?{name:"loader",fn:k(()=>[T(o,{vnodes:t.lastSlide.loaderSlot()},null,8,["vnodes"])]),key:"1"}:void 0]),1032,["title","content","image","link","style","lazyloaded"])):h("",!0),e.isReady&&t.conf.infinite&&t.canSlide&&t.firstSlide?(n(),w(p,{key:1,class:"vueperslide--clone vueperslide--clone-2",clone:"",title:t.firstSlide.title,content:t.firstSlide.content,image:t.firstSlide.image,link:t.firstSlide.link,style:b(t.firstSlide.style),lazyloaded:t.firstSlide.loaded,"aria-hidden":"true"},E({_:2},[t.firstSlide.contentSlot?{name:"content",fn:k(()=>[T(o,{vnodes:t.firstSlide.contentSlot()},null,8,["vnodes"])]),key:"0"}:void 0,t.conf.lazy&&!t.firstSlide.loaded&&t.firstSlide.loaderSlot?{name:"loader",fn:k(()=>[T(o,{vnodes:t.firstSlide.loaderSlot()},null,8,["vnodes"])]),key:"1"}:void 0]),1032,["title","content","image","link","style","lazyloaded"])):h("",!0)],4)],6)],4),(t.conf.pauseOnHover||t.conf.pauseOnTouch)&&e.$slots.pause?(n(),a("div",le,[v(e.$slots,"pause")])):h("",!0),t.conf.progress?(n(),a("div",ne,[v(e.$slots,"progress",{current:e.slides.current+1,total:t.slidesCount},()=>[f("div",{style:b(`width: ${(e.slides.current+1)*100/t.slidesCount}%`)},null,4)])])):h("",!0),t.conf.fractions?(n(),a("div",oe,[v(e.$slots,"fraction",{current:e.slides.current+1,total:t.slidesCount},()=>[B(_(`${e.slides.current+1} / ${t.slidesCount}`),1)])])):h("",!0),t.conf.arrows&&t.canSlide&&!s.disable?(n(),a("div",{key:3,class:S(["vueperslides__arrows",{"vueperslides__arrows--outside":t.conf.arrowsOutside}])},[M(f("button",{class:"vueperslides__arrow vueperslides__arrow--prev",type:"button",onClick:i[0]||(i[0]=d=>t.previous()),"aria-label":"Previous",onKeyup:[i[1]||(i[1]=m(d=>t.conf.rtl?t.next():t.previous(),["left"])),i[2]||(i[2]=m(d=>t.conf.rtl?t.previous():t.next(),["right"]))]},[v(e.$slots,`arrow-${t.conf.rtl?"right":"left"}`,{},()=>[(n(),a("svg",ae,[f("path",{"stroke-linecap":"round",d:t.conf.rtl?"m1 1 l7 8 -7 8":"m8 1 l-7 8 7 8"},null,8,re)]))])],544),[[$,!t.arrowPrevDisabled]]),M(f("button",{class:"vueperslides__arrow vueperslides__arrow--next",type:"button",onClick:i[3]||(i[3]=d=>t.next()),"aria-label":"Next",onKeyup:[i[4]||(i[4]=m(d=>t.conf.rtl?t.next():t.previous(),["left"])),i[5]||(i[5]=m(d=>t.conf.rtl?t.previous():t.next(),["right"]))]},[v(e.$slots,`arrow-${t.conf.rtl?"left":"right"}`,{},()=>[(n(),a("svg",de,[f("path",{"stroke-linecap":"round",d:t.conf.rtl?"m8 1 l-7 8 7 8":"m1 1 l7 8 -7 8"},null,8,ue)]))])],544),[[$,!t.arrowNextDisabled]])],2)):h("",!0),t.conf.bullets&&t.canSlide&&!s.disable&&!t.conf.bulletsOutside?(n(),a("div",he,[v(e.$slots,"bullets",{currentSlide:e.slides.current,bulletIndexes:t.bulletIndexes,goToSlide:t.goToSlide,previous:t.previous,next:t.next},()=>[(n(!0),a(x,null,I(t.bulletIndexes,(d,r)=>(n(),a("button",{class:S(["vueperslides__bullet",{"vueperslides__bullet--active":e.slides.current===d}]),type:"button",key:r,role:"tab","aria-label":`Slide ${r+1}`,onClick:c=>t.goToSlide(d),onKeyup:[i[6]||(i[6]=m(c=>t.conf.rtl?t.next():t.previous(),["left"])),i[7]||(i[7]=m(c=>t.conf.rtl?t.previous():t.next(),["right"]))]},[v(e.$slots,"bullet",{active:e.slides.current===d,slideIndex:d,index:r+1},()=>[f("div",pe,[f("span",null,_(r+1),1)])])],42,ce))),128))])],512)):h("",!0)]),t.conf.bullets&&t.canSlide&&!s.disable&&t.conf.bulletsOutside?(n(),a("div",fe,[v(e.$slots,"bullets",{currentSlide:e.slides.current,bulletIndexes:t.bulletIndexes,goToSlide:t.goToSlide,previous:t.previous,next:t.next},()=>[(n(!0),a(x,null,I(t.bulletIndexes,(d,r)=>(n(),a("button",{class:S(["vueperslides__bullet",{"vueperslides__bullet--active":e.slides.current===d}]),type:"button",key:r,role:"tab","aria-label":`Slide ${r+1}`,onClick:c=>t.goToSlide(d),onKeyup:[i[8]||(i[8]=m(c=>t.conf.rtl?t.next():t.previous(),["left"])),i[9]||(i[9]=m(c=>t.conf.rtl?t.previous():t.next(),["right"]))]},[v(e.$slots,"bullet",{active:e.slides.current===d,slideIndex:d,index:r+1},()=>[f("div",ge,[f("span",null,_(r+1),1)])])],42,ve))),128))])],512)):h("",!0),t.slidesCount&&t.conf.slideContentOutside==="bottom"?(n(),a("div",{key:2,class:S(["vueperslide__content-wrapper vueperslide__content-wrapper--outside-bottom",t.conf.slideContentOutsideClass])},[t.currentSlide.contentSlot?(n(),w(o,{key:0,vnodes:t.currentSlide.contentSlot()},null,8,["vnodes"])):(n(),a(x,{key:1},[t.currentSlide.title?(n(),a("div",{key:0,class:"vueperslide__title",innerHTML:t.currentSlide.title},null,8,be)):h("",!0),t.currentSlide.content?(n(),a("div",{key:1,class:"vueperslide__content",innerHTML:t.currentSlide.content},null,8,me)):h("",!0)],64))],2)):h("",!0)],6)}const ye={name:"vueper-slides",components:{VueperSlide:z,vnodes:{render(){return this.$attrs.vnodes}}},provide(){return{conf:this.conf,slides:this.slides,touch:this.touch,updateSlide:this.updateSlide,addClone:this.addClone,addSlide:this.addSlide,removeSlide:this.removeSlide}},props:{alwaysRefreshClones:{type:Boolean,default:!1},arrows:{type:Boolean,default:!0},arrowsOutside:{type:Boolean,default:null},autoplay:{type:Boolean,default:!1},breakpoints:{type:Object,default:()=>({})},bullets:{type:Boolean,default:!0},bulletsOutside:{type:Boolean,default:null},disable:{type:Boolean,default:!1},disableArrowsOnEdges:{type:[Boolean,String],default:!1},draggingDistance:{type:Number,default:null},duration:{type:[Number,String],default:4e3},infinite:{type:Boolean,default:!0},fade:{type:Boolean,default:!1},fixedHeight:{type:[Boolean,String],default:!1},fractions:{type:Boolean,default:!1},gap:{type:Number,default:0},initSlide:{type:Number,default:1},lazy:{type:Boolean,default:!1},lazyLoadOnDrag:{type:Boolean,default:!1},pauseOnHover:{type:Boolean,default:!0},pauseOnTouch:{type:Boolean,default:!0},parallax:{type:[Boolean,Number],default:!1},pageScrollingElement:{type:String,default:""},parallaxFixedContent:{type:Boolean,default:!1},preventYScroll:{type:Boolean,default:!1},progress:{type:Boolean,default:!1},rtl:{type:Boolean,default:!1},slideContentOutside:{type:[Boolean,String],default:!1},slideContentOutsideClass:{type:String,default:""},slideImageInside:{type:Boolean,default:!1},slideMultiple:{type:[Boolean,Number],default:!1},slideRatio:{type:Number,default:1/3},touchable:{type:Boolean,default:!0},transitionSpeed:{type:[Number,String],default:600},visibleSlides:{type:Number,default:1},"3d":{type:Boolean,default:!1}},emits:["ready","next","previous","autoplay-pause","autoplay-resume","before-slide","slide","image-loaded","image-failed"],data:()=>({isReady:!1,isPaused:!1,container:null,slides:{list:[],activeId:null,current:0,focus:0,firstVisible:0},mouseDown:!1,mouseOver:!1,touch:{enabled:!0,dragging:!1,lazyloadTriggered:!1,justDragged:!1,dragStartX:0,dragNowX:0,dragAmount:0},transition:{currentTranslation:0,speed:0,animated:!1},autoplayTimer:null,nextSlideIsClone:!1,breakpointsData:{list:[],current:null},parallaxData:{translation:0,slideshowOffsetTop:null,isVisible:!1}}),computed:{conf(){const e={...this.$props,...this.$props.breakpoints&&this.$props.breakpoints[this.breakpointsData.current]||{}};return e.slideMultiple=e.slideMultiple?e.visibleSlides:1,e.gap=this.gap&&parseInt(this.gap)||0,e.visibleSlides>1&&(e["3d"]=!1),(e.fade||e.disableArrowsOnEdges||e.visibleSlides>1||e["3d"])&&(e.infinite=!1),e.visibleSlides>1&&e.arrowsOutside===null&&(e.arrowsOutside=!0),e.visibleSlides>1&&e.bulletsOutside===null&&(e.bulletsOutside=!0),this.touch.enabled!==e.touchable&&this.toggleTouchableOption(e.touchable),e.parallax&&e.parallaxFixedContent&&(e.slideContentOutside="top",e.slideContentOutsideClass="parallax-fixed-content"),e},slidesCount(){return this.slides.list.length},gapsCount(){const{fade:e,"3d":i,slideMultiple:s,gap:l}=this.conf;if(!l||e||i||this.multipleSlides1by1&&this.slides.current<this.preferredPosition)return 0;if(!this.slides.current&&this.nextSlideIsClone)return this.slidesCount;if(this.nextSlideIsClone===0)return-1;let u=this.slides.current/s-this.preferredPosition;return this.multipleSlides1by1&&this.slidePosAfterPreferred>0&&(u-=this.slidePosAfterPreferred),u},slidesAfterCurrent(){return this.slidesCount-(this.slides.current+1)},preferredPosition(){return this.multipleSlides1by1?Math.ceil(this.conf.visibleSlides/2)-1:0},slidePosAfterPreferred(){return this.conf.visibleSlides-this.preferredPosition-this.slidesAfterCurrent-1},multipleSlides1by1(){return this.conf.visibleSlides>1&&this.conf.slideMultiple===1},touchEnabled:{get(){return this.slidesCount>1&&this.touch.enabled},set(e){this.touch.enabled=e}},canSlide(){return this.slidesCount/this.conf.visibleSlides>1},firstSlide(){const e=this.slidesCount?this.slides.list[0]:{};return e.style&&typeof e.style=="string"&&(e.style=e.style.replace(/width: ?\d+.*?;?/,"")),e},lastSlide(){const e=this.slidesCount?this.slides.list[this.slidesCount-1]:{};return e.style&&typeof e.style=="string"&&(e.style=e.style.replace(/width: ?\d+.*?;?/,"")),e},currentSlide(){const e=this.slidesCount&&this.slides.list[this.slides.current]||{};return this.slides.current<this.slidesCount&&e.id!==this.slides.activeId&&this.goToSlide(this.slides.current,{animation:!1,autoPlaying:!0}),e},vueperslidesClasses(){return{"vueperslides--ready":this.isReady,"vueperslides--rtl":this.conf.rtl,"vueperslides--fade":this.conf.fade,"vueperslides--parallax":this.conf.parallax,"vueperslides--slide-image-inside":this.conf.slideImageInside,"vueperslides--touchable":this.touchEnabled&&!this.disable,"vueperslides--fixed-height":this.conf.fixedHeight,"vueperslides--3d":this.conf["3d"],"vueperslides--slide-multiple":this.conf.slideMultiple>1,"vueperslides--bullets-outside":this.conf.bulletsOutside,"vueperslides--animated":this.transition.animated,"vueperslides--no-animation":!this.isReady}},vueperslidesStyles(){return/^-?\d/.test(this.conf.fixedHeight)?`height: ${this.conf.fixedHeight}`:null},trackStyles(){const e={};return this.conf.parallax&&(e.transform=`translate3d(0, ${this.parallaxData.translation}%, 0)`,e.willChange=this.parallaxData.isVisible?"transform":"auto"),e},trackInnerStyles(){const e={},{fade:i,"3d":s}=this.conf;if(e.transitionDuration=`${this.transition.speed}ms`,s){const l=this.transition.currentTranslation*90/100;e.transform=`rotateY(-90deg) translateX(-50%) rotateY(90deg) rotateY(${l}deg)`}else i||(e.transform=`translate3d(${this.transition.currentTranslation}%, 0, 0)`,e.willChange=this.touch.dragging||this.transition.animated?"transform":"auto");return e},bulletIndexes(){return Array(Math.ceil(this.slidesCount/this.conf.slideMultiple)).fill().map((e,i)=>i*this.conf.slideMultiple)},arrowPrevDisabled(){return!this.slides.current&&this.conf.disableArrowsOnEdges},arrowNextDisabled(){const{disableArrowsOnEdges:e,visibleSlides:i,slideMultiple:s}=this.conf;return this.slides.current+(s>1&&i>1?i-1:0)===this.slidesCount-1&&e}},methods:{init(){this.container=this.$refs.vueperslides,this.touchEnabled=this.conf.touchable,this.transition.speed=this.conf.transitionSpeed,Object.keys(this.breakpoints).length&&(this.setBreakpointsList(),this.setBreakpointConfig(this.getCurrentBreakpoint()));const e={animation:!1,autoPlaying:this.conf.autoplay};this.goToSlide(this.conf.initSlide-1,e),this.bindEvents(),this.$nextTick(()=>{this.isReady=!0,this.emit("ready")})},emit(e,i=!0,s=!1){let l=null;if((i||typeof s=="number")&&(l={},i&&this.slides.activeId&&this.slidesCount&&(l.currentSlide=this.getSlideData(this.slides.current)),typeof s=="number"&&this.slidesCount)){const{nextSlide:u}=this.getSlideInRange(s);l.nextSlide=this.getSlideData(u)}this.$emit(...l?[e,l]:[e])},getSlideData(e){const i=this.slides.list[e];let s={};return i&&(s={index:e,title:i.title,content:i.content,contentSlot:i.contentSlot,image:i.image,link:i.link}),s},setBreakpointsList(){this.breakpointsData.list=[99999,...Object.keys(this.breakpoints)].map(e=>parseInt(e)).sort((e,i)=>parseInt(i)-parseInt(e))},getCurrentBreakpoint(){const e=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,i=[e,...this.breakpointsData.list].sort((s,l)=>parseInt(l)-parseInt(s));return this.breakpointsData.list[i.indexOf(e)-1]},hasBreakpointChanged(e){return this.breakpointsData.current!==parseInt(e)},setBreakpointConfig(e){const i=this.breakpoints&&this.breakpoints[e]||{},s=i.slideMultiple&&i.slideMultiple!==this.conf.slideMultiple,l=i.visibleSlides&&i.visibleSlides!==this.conf.visibleSlides;this.breakpointsData.current=e,this.slides.current=this.getFirstVisibleSlide(this.slides.focus),s||l?this.goToSlide(this.slides.current,{breakpointChange:!0}):this.updateTrackTranslation()},bindEvents(){const e="ontouchstart"in window;this.touchEnabled&&this.toggleTouchableOption(!0),this.conf.autoplay&&(this.conf.pauseOnHover&&!e?(this.container.addEventListener("mouseenter",this.onMouseEnter),this.container.addEventListener("mouseleave",this.onMouseLeave)):this.conf.pauseOnTouch&&e&&document.addEventListener("touchstart",i=>{this[this.$el.contains(i.target)?"onSlideshowTouch":"onOustideTouch"]()})),(this.breakpointsData.list.length||this.conf.parallax)&&window.addEventListener("resize",this.onResize),this.conf.parallax&&this.enableParallax()},getSlideshowOffsetTop(e=!1){if(this.parallaxData.slideshowOffsetTop===null||e){let i=this.container,s=i.offsetTop;for(;i=i.offsetParent;)s+=i.offsetTop;this.parallaxData.slideshowOffsetTop=s}return this.parallaxData.slideshowOffsetTop},enableParallax(){this.refreshParallax(),this.pageScrollingElement?(this.parallaxData.scrollingEl=document.querySelector(this.pageScrollingElement),this.parallaxData.scrollingEl.addEventListener("scroll",this.onScroll)):document.addEventListener("scroll",this.onScroll)},disableParallax(){(this.pageScrollingElement?document.querySelector(this.pageScrollingElement):document).removeEventListener("scroll",this.onScroll),this.parallaxData.scrollingEl=null,this.parallaxData.isVisible=!1,this.parallaxData.translation=0,this.parallaxData.slideshowOffsetTop=null},onScroll(){const{scrollingEl:e}=this.parallaxData,i=document.documentElement;let s=0;e?s=e.scrollTop:s=(window.pageYOffset||i.scrollTop)-(i.clientTop||0);const l=window.innerHeight||i.clientHeight||document.body.clientHeight,u=this.container.clientHeight,t=this.getSlideshowOffsetTop(),o=t+u-s,p=l+s-t;if(this.parallaxData.isVisible=o>0&&p>0,this.parallaxData.isVisible){const d=l+u,r=o*100/d,c=this.conf.parallax===-1?100-r:r;this.parallaxData.translation=-c/2}},onResize(){if(this.breakpointsData.list.length){const e=this.getCurrentBreakpoint();this.hasBreakpointChanged(e)&&this.setBreakpointConfig(e)}this.conf.parallax&&this.getSlideshowOffsetTop(!0)},onMouseEnter(){this.mouseOver=!0,this.conf.pauseOnHover&&this.conf.autoplay&&(this.isPaused=!0)},onMouseLeave(){this.mouseOver=!1,this.conf.pauseOnHover&&this.conf.autoplay&&(this.isPaused=!1)},onMouseDown(e){!this.touchEnabled||this.disable||(!e.touches&&this.preventYScroll&&e.preventDefault(),this.mouseDown=!0,this.touch.dragStartX=this.getCurrentMouseX(e),this.conf.draggingDistance||this.updateTrackTranslation(this.touch.dragStartX))},onMouseMove(e){if(this.mouseDown||this.touch.dragging)if(this.conf.autoplay&&(this.isPaused=!0),this.preventYScroll&&e.preventDefault(),this.mouseDown=!1,this.touch.dragging=!0,this.touch.dragNowX=this.getCurrentMouseX(e),this.conf.draggingDistance){this.touch.dragAmount=this.touch.dragNowX-this.touch.dragStartX;const i=this.touch.dragAmount/this.container.clientWidth;this.updateTrackTranslation(),this.transition.currentTranslation+=100*i}else this.updateTrackTranslation(this.touch.dragNowX)},onMouseUp(e){if(this.mouseDown=!1,this.touch.dragging)this.conf.autoplay&&(!("ontouchstart"in window)&&!this.mouseOver?this.isPaused=!1:this.conf.pauseOnTouch||(this.isPaused=!1));else return this.cancelSlideChange();this.touch.dragging=!1;const i=this.conf.draggingDistance?-this.touch.dragAmount:0,s=(this.touch.dragStartX-this.container.offsetLeft)/this.container.clientWidth,l=(this.touch.dragNowX-this.container.offsetLeft)/this.container.clientWidth,u=((s<.5?0:1)-l)*100;let t=(i||u)>0;if(this.conf.rtl&&(t=!t),[Math.abs(i)<this.conf.draggingDistance,!this.conf.draggingDistance&&Math.abs(u)<50,this.arrowPrevDisabled&&!this.slides.current&&!t,this.arrowNextDisabled&&this.slides.current===this.slidesCount-1&&t].includes(!0))this.cancelSlideChange();else{const o=this.slides.current+this.conf.slideMultiple*(t?1:-1);this.emit(t?"next":"previous"),this.goToSlide(o)}this.touch.dragStartX=null,this.touch.dragNowX=null,this.touch.dragAmount=null,this.touch.justDragged=!0,setTimeout(()=>this.touch.justDragged=!1,50),this.touch.lazyloadTriggered=!1},onSlideshowTouch(){this.isPaused=!0},onOustideTouch(){this.isPaused=!1},justDragged(){return this.touch.justDragged},cancelSlideChange(){this.conf.fade||this.updateTrackTranslation()},getCurrentMouseX(e){return"ontouchstart"in window?e.touches[0].clientX:e.clientX},getBasicTranslation(){return this.slides.current/this.conf.visibleSlides},updateTrackTranslation(e=null){let i=this.getBasicTranslation();const{infinite:s,visibleSlides:l,slideMultiple:u,gap:t,"3d":o,lazy:p,lazyLoadOnDrag:d}=this.conf;if(s&&this.nextSlideIsClone!==!1&&(i=(this.nextSlideIsClone?this.slidesCount:-1)/l),t&&(i+=this.gapsCount/(l/u)*t/100),this.touch.dragStartX&&e&&!(s&&this.nextSlideIsClone!==!1)){let r=0;const c=(this.touch.dragStartX-this.container.offsetLeft)/this.container.clientWidth;let y=(e-this.container.offsetLeft)/this.container.clientWidth;if(o){const g=Math.round(c)?[0,2]:[-1,1];y=Math.min(Math.max(y,g[0]),g[1])}if(r=(c<.5?0:1)-y,i+=r*(this.conf.rtl?-1:1),p&&d&&!this.touch.lazyloadTriggered){this.touch.lazyloadTriggered=!0;let g=this.slides.current+(r>0?1:-1)*l;s&&g===-1?g=this.slidesCount-1:s&&g===this.slidesCount&&(g=0);for(let C=0;C<l;C++){const O=this.slides.list[g+C];O&&!O.loaded&&this.loadSlide(O,g+C)}}}if(this.multipleSlides1by1&&!s){const r=this.slidePosAfterPreferred>0;let c=Math.min(this.preferredPosition,this.slides.current);r&&(c+=this.slidePosAfterPreferred),i-=c/l}this.transition.currentTranslation=-i*100*(this.conf.rtl?-1:1)},pauseAutoplay(){this.isPaused=!0,clearTimeout(this.autoplayTimer),this.autoplayTimer=0,this.emit("autoplay-pause")},resumeAutoplay(){this.isPaused=!1,this.doAutoplay(),this.emit("autoplay-resume")},doAutoplay(){clearTimeout(this.autoplayTimer),this.autoplayTimer=setTimeout(()=>{this.goToSlide(this.slides.current+this.conf.slideMultiple,{autoPlaying:!0})},this.currentSlide.duration||this.conf.duration)},previous(e=!0){e&&this.emit("previous"),this.goToSlide(this.slides.current-this.conf.slideMultiple)},next(e=!0){e&&this.emit("next"),this.goToSlide(this.slides.current+this.conf.slideMultiple)},refreshParallax(){setTimeout(()=>{this.onResize(),this.onScroll()},100)},getFirstVisibleSlide(e){const{slideMultiple:i,visibleSlides:s}=this.conf;let l=this.slides.current;return s>1&&i===s?l=Math.floor(e/s)*s:this.multipleSlides1by1&&(l=e-Math.min(e,this.preferredPosition)-Math.max(this.slidePosAfterPreferred,0)),l},getSlideInRange(e,i){let s=!1;this.conf.infinite&&e===-1?s=0:this.conf.infinite&&e===this.slidesCount&&(s=1);let l=(e+this.slidesCount)%this.slidesCount;if(this.conf.slideMultiple>1){const u=this.slidesCount%this.conf.slideMultiple||this.conf.slideMultiple,t=this.conf.slideMultiple-u;l+=e<0?t:0,l=this.getFirstVisibleSlide(l)}return this.conf.disableArrowsOnEdges&&(e<0||e>this.slidesCount-1)&&!i&&(l=this.slides.current),{nextSlide:l,clone:s}},goToSlide(e,{animation:i=!0,autoPlaying:s=!1,jumping:l=!1,breakpointChange:u=!1,emit:t=!0}={}){if(!this.slidesCount||this.disable)return;this.conf.autoplay&&!s&&!this.isPaused&&(this.isPaused=!0,this.$nextTick(()=>this.isPaused=!1)),this.transition.animated=i,setTimeout(()=>this.transition.animated=!1,this.transitionSpeed);const{nextSlide:o,clone:p}=this.getSlideInRange(e,s);if(this.nextSlideIsClone=p,!this.slides.list[o])return;if(this.conf.lazy)for(let r=0;r<this.conf.visibleSlides;r++){const c=this.slides.list[o+r];c&&!c.loaded&&this.loadSlide(c,o+r)}this.isReady&&!l&&t&&this.emit("before-slide",!0,o);const d=this.slides.list[o];if(this.isReady&&d.video){const r=this.slides.list[this.slides.current];r.video&&r.video.pause(),d.video.play()}if(p!==!1&&setTimeout(()=>{const r=e===-1&&this.slides.current!==this.slidesCount-1,c=e===this.slidesCount&&this.slides.current!==0;r||c||(this.transition.speed=0,this.goToSlide(p?0:this.slidesCount-1,{animation:!1,jumping:!0}),setTimeout(()=>this.transition.speed=this.conf.transitionSpeed,50))},this.transition.speed-50),this.slides.current=o,this.slides.firstVisible=this.getFirstVisibleSlide(o),u||(this.slides.focus=o),this.conf.fade||this.updateTrackTranslation(),this.slides.activeId=this.slides.list[this.slides.current].id,this.conf.autoplay&&s&&!this.isPaused&&this.doAutoplay(),this.slidesCount&&(this.isReady&&!l&&t&&this.emit("slide"),this.isReady&&this.conf.bullets&&!s&&!l&&this.$refs.bullets)){const r=this.$refs.bullets.children,c=r&&r[this.slides.current/this.conf.slideMultiple];if(c&&c.nodeName.toLowerCase()==="button"){let y=document.documentElement;this.pageScrollingElement&&(y=document.querySelector(this.pageScrollingElement));const g=y.scrollTop;c.focus({preventScroll:!0}),y.scrollTop=g}}},addSlide(e){return this.slides.list.push(e),this.isReady&&this.slidesCount===1&&this.conf.autoplay&&this.isPaused&&(this.isPaused=!1),this.slidesCount},addClone(){return this.updateTrackTranslation(),this.slidesCount},updateSlide(e,i){let s=this.slides.list.find(l=>l.id===e);s&&(s=Object.assign(s,i))},removeSlide(e){const i=this.slides.list.findIndex(s=>s.id===e);i>-1&&(this.slides.list.splice(i,1),this.slidesCount&&e===this.slides.activeId&&this.goToSlide(i-1,{autoPlaying:!0})),this.slides.current>=this.slidesCount&&this.goToSlide(0,{autoPlaying:!0})},loadSlide(e,i){e.loadImage().then(s=>{const{image:l,style:u}=s;e.loaded=!0,e.image=l,e.style=u,this.$emit("image-loaded",this.getSlideData(i))},()=>{e.loaded=!1,this.$emit("image-failed",this.getSlideData(i))})},toggleTouchableOption(e){const{track:i}=this.$refs;if(!i)return;this.touchEnabled=e;const s="ontouchstart"in window;e?(this.$refs.track.addEventListener(s?"touchstart":"mousedown",this.onMouseDown,{passive:!this.preventYScroll}),document.addEventListener(s?"touchmove":"mousemove",this.onMouseMove,{passive:!this.preventYScroll}),document.addEventListener(s?"touchend":"mouseup",this.onMouseUp,{passive:!0})):this.removeEventListeners()},removeEventListeners(){const e="ontouchstart"in window;this.$refs.track.removeEventListener(e?"touchstart":"mousedown",this.onMouseDown,{passive:!this.preventYScroll}),document.removeEventListener(e?"touchmove":"mousemove",this.onMouseMove,{passive:!this.preventYScroll}),document.removeEventListener(e?"touchend":"mouseup",this.onMouseUp,{passive:!0})}},watch:{isPaused(e){this[e?"pauseAutoplay":"resumeAutoplay"]()},parallax(e){this[e?"enableParallax":"disableParallax"]()}},mounted(){this.init()},beforeUnmount(){this.removeEventListeners(),this.conf.parallax&&this.disableParallax(),window.removeEventListener("resize",this.onResize),document.removeEventListener("touchstart",e=>{this[this.$el.contains(e.target)?"onSlideshowTouch":"onOustideTouch"]()}),this.container.removeEventListener("mouseenter",this.onMouseEnter),this.container.removeEventListener("mouseleave",this.onMouseLeave)}},we=j(ye,[["render",Se]]),xe={__name:"ServicesSlider",setup(e){const i=[["a01.webp","a02.webp","a03.webp","a04.webp","a05.webp","a06.webp","a07.webp","a08.webp","a09.webp","a10.webp"],["b01.webp","b02.webp","b03.webp","b04.webp","b05.webp","b06.webp","b07.webp","b08.webp","b09.webp","b10.webp"],["c01.webp","c02.webp","c03.webp","c04.webp","c05.webp","c06.webp","c07.webp","c08.webp","c09.webp","c10.webp"],["d01.webp","d02.webp","d03.webp","d04.webp","d05.webp","d06.webp","d07.webp","d08.webp","d09.webp","d10.webp"]],s="/";i.forEach(o=>o.sort(()=>Math.random()-.5));const l=[],u=Math.max(...i.map(o=>o.length));for(let o=0;o<u;o++)for(let p=0;p<i.length;p++)i[p][o]&&l.push(i[p][o]);const t=A(l.map(o=>({group:`${o.charAt(0)+"00"}`,title:`${o.slice(0,3)+"_title"}`,content:`<div style="background-image: url('${s}${o}'); width: 100vmin; height: 17.5rem; background-size: cover; background-position: center;"></div>`})));return(o,p)=>(n(),w(L(we),{autoplay:!0,arrows:!1,bullets:!1,"fixed-height":!0,class:"no-shadow",style:"box-shadow: inset 0 0 1rem 0.5rem var(--shadow)"},{default:k(()=>[(n(!0),a(x,null,I(t.value,(d,r)=>(n(),w(L(z),{key:r,title:`<em><span class='first-letter'>${o.$t(d.group)[0]}</span>${o.$t(d.group).slice(1)} : ${o.$t(d.title)}</em>`,content:d.content},null,8,["title","content"]))),128))]),_:1}))}};export{xe as default};
