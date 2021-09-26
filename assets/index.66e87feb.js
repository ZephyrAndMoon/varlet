import{R as t}from"./index.7f242a26.js";import{L as e}from"./index.704303b9.js";import{t as a}from"./elements.f945da86.js";import{_ as i,w as l}from"./IconSfc.22678cb1.js";import{q as r,e as s,i as o,o as n,c as p,n as c,m as d,d as u,h as g,w as h,F as f,l as v,t as m,a as y,S as z,U as j}from"./vendor.85536c59.js";import{A as x}from"./AppType.08a99ced.js";import{R as k}from"./index.a34414bf.js";import{u as b,a as L,_ as S,b as _,c as w}from"./en-US.97fca002.js";import"./shared.6d6b25a1.js";import"./components.0481fe69.js";const U=r({name:"VarImage",directives:{Lazy:e,Ripple:t},props:{src:{type:String},fit:{type:String,validator:function(t){return["fill","contain","cover","none","scale-down"].includes(t)},default:"fill"},alt:{type:String},width:{type:[String,Number]},height:{type:[String,Number]},radius:{type:[String,Number],default:0},loading:{type:String},error:{type:String},lazy:{type:Boolean,default:!1},ripple:{type:Boolean,default:!1},block:{type:Boolean,default:!0},onClick:{type:Function},onLoad:{type:Function},onError:{type:Function}},setup:t=>({toSizeUnit:a,handleLoad:e=>{const a=e.currentTarget,{lazy:i,onLoad:l,onError:r}=t;i?("success"===a._lazy.state&&(null==l||l(e)),"error"===a._lazy.state&&(null==r||r(e))):null==l||l(e)},handleError:e=>{const{lazy:a,onError:i}=t;!a&&(null==i||i(e))}})}),E=["alt","lazy-error","lazy-loading"],R=["alt","src"];var C=i(U,[["render",function(t,e,a,i,l,r){const u=s("lazy"),g=s("ripple");return o((n(),p("div",{class:d(["var-image var--box",[t.block?null:"var--inline-block"]]),style:c({width:t.toSizeUnit(t.width),height:t.toSizeUnit(t.height),"border-radius":t.toSizeUnit(t.radius)})},[t.lazy?o((n(),p("img",{key:0,class:"var-image__image",alt:t.alt,"lazy-error":t.error,"lazy-loading":t.loading,style:c({objectFit:t.fit}),onLoad:e[0]||(e[0]=(...e)=>t.handleLoad&&t.handleLoad(...e)),onError:e[1]||(e[1]=(...e)=>t.handleError&&t.handleError(...e)),onClick:e[2]||(e[2]=(...e)=>t.onClick&&t.onClick(...e))},null,44,E)),[[u,t.src]]):(n(),p("img",{key:1,class:"var-image__image",alt:t.alt,style:c({objectFit:t.fit}),src:t.src,onLoad:e[3]||(e[3]=(...e)=>t.handleLoad&&t.handleLoad(...e)),onError:e[4]||(e[4]=(...e)=>t.handleError&&t.handleError(...e)),onClick:e[5]||(e[5]=(...e)=>t.onClick&&t.onClick(...e))},null,44,R))],6)),[[g,{disabled:!t.ripple}]])}]]);C.install=function(t){t.component(C.name,C)};const{add:F,use:N,pack:B,packs:I,merge:M}=b(),A=t=>{w(t),N(t)};L("zh-CN",S),L("en-US",_),F("zh-CN",{basicUsage:"基本使用",fitMode:"填充模式",setRadius:"设置圆角",useRipple:"开启水波",useLazyLoad:"开启懒加载"}),F("en-US",{basicUsage:"Basic Usage",fitMode:"Fit Mode",setRadius:"Set Radius",useRipple:"Use Ripple",useLazyLoad:"Use LazyLoad"});const T={name:"ImageExample",components:{[C.name]:C,[k.name]:k,AppType:x},setup:()=>(l(A),{pack:B})},q=t=>(z("data-v-6ef0d0c6"),t=t(),j(),t),V={class:"fit-item"},D=q((()=>y("div",null,"fill",-1))),G={class:"fit-item"},H=q((()=>y("div",null,"cover",-1))),J={class:"fit-item"},K=q((()=>y("div",null,"contain",-1))),O={class:"fit-item"},P=q((()=>y("div",null,"none",-1))),Q={class:"fit-item"},W=q((()=>y("div",null,"scale-down",-1)));var X=i(T,[["render",function(t,e,a,i,l,r){const s=u("app-type"),o=u("var-image"),c=u("var-row");return n(),p(f,null,[g(s,null,{default:h((()=>[v(m(i.pack.basicUsage),1)])),_:1}),g(o,{src:"https://varlet.gitee.io/varlet-ui/cat.jpg"}),g(s,null,{default:h((()=>[v(m(i.pack.fitMode),1)])),_:1}),g(c,null,{default:h((()=>[y("div",V,[g(o,{width:"85px",height:"85px",src:"https://varlet.gitee.io/varlet-ui/cat.jpg"}),D]),y("div",G,[g(o,{width:"85px",height:"85px",fit:"cover",src:"https://varlet.gitee.io/varlet-ui/cat.jpg"}),H]),y("div",J,[g(o,{width:"85px",height:"85px",fit:"contain",src:"https://varlet.gitee.io/varlet-ui/cat.jpg"}),K]),y("div",O,[g(o,{width:"85px",height:"85px",fit:"none",src:"https://varlet.gitee.io/varlet-ui/cat.jpg"}),P]),y("div",Q,[g(o,{width:"85px",height:"85px",fit:"scale-down",src:"https://varlet.gitee.io/varlet-ui/cat.jpg"}),W])])),_:1}),g(s,null,{default:h((()=>[v(m(i.pack.setRadius),1)])),_:1}),g(c,null,{default:h((()=>[g(o,{width:"85px",height:"85px",fit:"cover",radius:10,src:"https://varlet.gitee.io/varlet-ui/cat.jpg",style:{"margin-right":"10px"}}),g(o,{width:"85px",height:"85px",fit:"cover",radius:"50%",src:"https://varlet.gitee.io/varlet-ui/cat.jpg"})])),_:1}),g(s,null,{default:h((()=>[v(m(i.pack.useRipple),1)])),_:1}),g(o,{ripple:"",src:"https://varlet.gitee.io/varlet-ui/cat.jpg"}),g(s,null,{default:h((()=>[v(m(i.pack.useLazyLoad),1)])),_:1}),g(o,{lazy:"",src:"https://varlet.gitee.io/varlet-ui/cat.jpg"})],64)}],["__scopeId","data-v-6ef0d0c6"]]);export{X as default};