import{M as H}from"./index.0be726aa.js";import{R as x}from"./index.389a472f.js";import{I as D}from"./index.56e052d1.js";import{C as q}from"./index.f249fe62.js";import{I as L}from"./index.5fa99b01.js";import{t as b,i as U}from"./shared.5973ad73.js";import{p as ee,u as ae,a as A,_ as ie,b as le,c as se}from"./en-US.610d9e58.js";import{_ as te}from"./IconSfc.7e66d829.js";import{q as ne,r as g,b as C,y as oe,d as B,e as ue,o as p,c,t as d,f as _,i as j,a as N,O as J,m as h,h as k,l as T,F as O,j as Q,w,k as re}from"./vendor.bac705d4.js";const de={current:{type:[Number,String]},size:{type:[Number,String],default:10},total:{type:[Number,String],default:0},maxShowBtnCount:{type:Number,default:3},disabled:{type:Boolean,default:!1},simple:{type:Boolean,default:!0},showSizeChanger:{type:Boolean,default:!0},showQuickJumper:{type:Boolean,default:!1},sizeOption:{type:Array,default:()=>[10,20,50,100]},showTotal:{type:Function},onChange:{type:Function}};const ve=ne({name:"VarPagination",components:{[H.name]:H,[D.name]:D,[q.name]:q,[L.name]:L},directives:{Ripple:x},props:de,setup(e){const t=g(!1),M=g(""),y=g("1"),S=g(!1),V=g(!1),l=g(b(e.current)||1),v=g(b(e.size)||10),z=g([]),$=C(()=>Math.ceil(e.maxShowBtnCount/2)),u=C(()=>Math.ceil(b(e.total)/b(v.value))),i=C(()=>{const a=v.value*(l.value-1)+1,s=Math.min(v.value*l.value,b(e.total));return[a,s]}),m=C(()=>e.showTotal?e.showTotal(b(e.total),i.value):""),I=(a,s)=>U(a)?!1:s===1?S.value:V.value,G=(a,s)=>U(a)?"basic":s===1?"head":"tail",K=(a,s)=>{a===l.value||e.disabled||(U(a)?l.value=a:a==="prev"?l.value>1&&(l.value-=1):a==="next"?l.value<u.value&&(l.value+=1):a==="..."&&(s===1?l.value=Math.max(l.value-e.maxShowBtnCount,1):l.value=Math.min(l.value+e.maxShowBtnCount,u.value)))},W=()=>{e.disabled||(t.value=!0)},X=a=>{v.value=a,t.value=!1},F=a=>/^[1-9][0-9]*$/.test(a),Y=(a,s)=>{if(F(s)){let f=b(s);f>u.value&&(f=u.value,y.value=`${f}`),f!==l.value&&(l.value=f)}a==="quick"&&(M.value=""),a==="simple"&&!F(s)&&(y.value=`${l.value}`)};return oe([l,u],([a,s],[f,Z])=>{var E;if(a>s){l.value=s;return}let o=[];const{maxShowBtnCount:r}=e,P=s-(r-$.value)-1;if(y.value=`${a}`,s-2>r){if(f===void 0||s!==Z)for(let n=2;n<r+2;n++)o.push(n);if(a<=r&&a<P){o=[];for(let n=1;n<r+1;n++)o.push(n+1);S.value=!0,V.value=!1}if(a>r&&a<P){o=[];for(let n=1;n<r+1;n++)o.push(a+n-$.value);S.value=a===2&&r===1,V.value=!1}if(a>=P){o=[];for(let n=1;n<r+1;n++)o.push(s-(r-n)-1);S.value=!1,V.value=!0}o=[1,"...",...o,"...",s]}else for(let n=1;n<=s;n++)o.push(n);z.value=o,f!==void 0&&((E=e.onChange)==null||E.call(e,a,v.value))},{immediate:!0}),{pack:ee,current:l,menuVisible:t,size:v,pageCount:u,pageList:z,inputValue:M,simpleValue:y,totalText:m,getMode:G,isHideEllipsis:I,clickItem:K,showMenu:W,clickSize:X,setPage:Y}}}),pe={class:"var-pagination"},me={key:0,class:"var-pagination__total"},fe=["item-mode","onClick"];function ge(e,t,M,y,S,V){const l=B("var-icon"),v=B("var-input"),z=B("var-cell"),$=B("var-menu"),u=ue("ripple");return p(),c("ul",pe,[e.totalText?(p(),c("li",me,d(e.totalText),1)):_("v-if",!0),j(N("li",{class:h(["var-pagination__item var-pagination__prev",{"var-pagination__item-disabled":e.current<=1||e.disabled}]),onClick:t[0]||(t[0]=i=>e.clickItem("prev"))},[J(e.$slots,"prev",{},()=>[k(l,{name:"chevron-left"})])],2),[[u,{disabled:e.current<=1||e.disabled}]]),e.simple?(p(),c("li",{key:1,class:h(["var-pagination__simple",{"var-pagination__item-disabled":e.disabled}])},[k(v,{modelValue:e.simpleValue,"onUpdate:modelValue":t[1]||(t[1]=i=>e.simpleValue=i),disabled:e.disabled,"var-pagination-cover":"",onBlur:t[2]||(t[2]=i=>e.setPage("simple",e.simpleValue))},null,8,["modelValue","disabled"]),T(" / "+d(e.pageCount),1)],2)):(p(!0),c(O,{key:2},Q(e.pageList,(i,m)=>j((p(),c("li",{key:i+m,"item-mode":e.getMode(i,m),class:h(["var-pagination__item",{"var-pagination__item-active":i===e.current,"var-pagination__item-hide":e.isHideEllipsis(i,m),"var-pagination__item-disabled":e.disabled}]),onClick:I=>e.clickItem(i,m)},[T(d(i),1)],10,fe)),[[u,{disabled:e.disabled}]])),128)),j(N("li",{class:h(["var-pagination__item var-pagination__next",{"var-pagination__item-disabled":e.current>=e.pageCount||e.disabled}]),onClick:t[3]||(t[3]=i=>e.clickItem("next"))},[J(e.$slots,"next",{},()=>[k(l,{name:"chevron-right"})])],2),[[u,{disabled:e.current>=e.pageCount||e.disabled}]]),e.showSizeChanger?(p(),c("li",{key:3,class:h(["var-pagination__size",{"var-pagination__item-disabled":e.disabled}])},[k($,{show:e.menuVisible,"onUpdate:show":t[5]||(t[5]=i=>e.menuVisible=i)},{menu:w(()=>[(p(!0),c(O,null,Q(e.sizeOption,(i,m)=>(p(),re(z,{class:h(["var-pagination__list",{"var-pagination__list-active":e.size===i}]),key:m,onClick:I=>e.clickSize(i)},{default:w(()=>[T(d(i)+d(e.pack.paginationItem)+" / "+d(e.pack.paginationPage),1)]),_:2},1032,["class","onClick"]))),128))]),default:w(()=>[N("div",{class:"var-pagination__size-open",style:{display:"flex"},onClick:t[4]||(t[4]=(...i)=>e.showMenu&&e.showMenu(...i))},[N("span",null,d(e.size)+d(e.pack.paginationItem)+" / "+d(e.pack.paginationPage),1),k(l,{name:"menu-down"})])]),_:1},8,["show"])],2)):_("v-if",!0),e.showQuickJumper&&!e.simple?(p(),c("li",{key:4,class:h(["var-pagination__quickly",{"var-pagination__item-disabled":e.disabled}])},[T(d(e.pack.paginationJump)+" ",1),k(v,{modelValue:e.inputValue,"onUpdate:modelValue":t[6]||(t[6]=i=>e.inputValue=i),disabled:e.disabled,"var-pagination-cover":"",onBlur:t[7]||(t[7]=i=>e.setPage("quick",e.inputValue))},null,8,["modelValue","disabled"])],2)):_("v-if",!0)])}var Te=te(ve,[["render",ge]]),ce={basicUsage:"\u57FA\u672C\u4F7F\u7528",showTotal:"\u663E\u793A\u603B\u6570",total:"\u5171",item:"\u6761",disabled:"\u7981\u7528",hideSize:"\u9690\u85CF size \u5207\u6362\u5668",pcTotal:"\u5171",current:"\u5F53\u524D"},be={basicUsage:"Basic Usage",showTotal:"Show Total",total:"",item:"items",disabled:"Disabled",hideSize:"Hide Size Changer",pcTotal:"Total ",current:"current"};const{add:R,use:he,pack:Me,packs:Ie,merge:Pe}=ae(),Ue=e=>{se(e),he(e)};A("zh-CN",ie);A("en-US",le);R("zh-CN",ce);R("en-US",be);export{Te as P,Me as p,Ue as u};