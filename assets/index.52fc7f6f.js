import{S as e}from"./index.4c2c26dd.js";import{u as a}from"./provide.af7e7d43.js";import{_ as n}from"./IconSfc.22678cb1.js";import{q as t,r as o,y as s,d as l,o as i,k as r,w as c,O as u}from"./vendor.85536c59.js";const p={active:{type:[String,Number],default:0},canSwipe:{type:Boolean,default:!0},loop:{type:Boolean,default:!1},"onUpdate:active":{type:Function}};var d=n(t({name:"VarTabsItems",components:{[e.name]:e},props:p,setup(e){const n=o(null),{tabItemList:t,bindTabItem:l,length:i}=a(),r=e=>(e=>t.find((({name:a})=>e===a.value)))(e)||(e=>t.find((({index:a})=>e===a.value)))(e),c=e=>{var a;const o=r(e);o&&(t.forEach((({setCurrent:e})=>e(!1))),o.setCurrent(!0),null==(a=n.value)||a.to(o.index.value))};return l({}),s((()=>e.active),c),s((()=>i.value),(()=>c(e.active))),{swipe:n,handleSwipeChange:a=>{var n,o;const s=t.find((({index:e})=>e.value===a)),l=null!=(n=s.name.value)?n:s.index.value;null==(o=e["onUpdate:active"])||o.call(e,l)}}}}),[["render",function(e,a,n,t,o,s){const p=l("var-swipe");return i(),r(p,{class:"var-tabs-items",ref:"swipe",loop:e.loop,touchable:e.canSwipe,indicator:!1,onChange:e.handleSwipeChange},{default:c((()=>[u(e.$slots,"default")])),_:3},8,["loop","touchable","onChange"])}]]);d.install=function(e){e.component(d.name,d)};export{d as T};