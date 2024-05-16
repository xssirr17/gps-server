import{s as v}from"./index-71108b8b.js";import{o as R,q as O,p as Z}from"./index-1cddbe14.js";import{t as $}from"./index-012bf22c.js";import{_ as z}from"./dynamicTable-cc858cfa.js";import{b7 as G,as as i,aZ as N,ak as c,m as u,n as e,a4 as l,aS as s,F as E,au as F,u as J,aK as r,l as _,ao as H,al as Q}from"./_plugin-vue_export-helper-27e74e83.js";const h=w=>(H("data-v-444c02bd"),w=w(),Q(),w),U={class:"menus"},X={key:0,class:"key"},Y={class:"keyAndValue"},ee={key:1,class:"key"},te={class:"keyAndValue"},se=h(()=>e("p",null,"en date",-1)),ae={key:2,class:"key"},le={class:"keyAndValue"},ie=h(()=>e("p",null,"fa date",-1)),ne={key:0,class:"key"},oe={class:"keyAndValue"},ce=h(()=>e("p",null,"gps imei",-1)),ue={key:1,class:"key"},de={class:"keyAndValue"},re=h(()=>e("p",null,"gps time",-1)),ve={key:2,class:"key"},_e={class:"keyAndValue"},me=h(()=>e("p",null,"gps fa time",-1)),he={key:3,class:"key"},pe={class:"keyAndValue"},fe=h(()=>e("p",null,"server fa time",-1)),be={key:4,class:"key"},ge={class:"keyAndValue"},ye=h(()=>e("p",null,"server time",-1)),Se={__name:"gpsShowData",setup(w){const m=R();let d=i({}),p=i({}),f=i("hidden"),b=i(""),g=i(""),y=i(""),S=i("Active"),k=i("hidden"),D=i("container"),j=i("hidden"),C=i({}),A=i({}),W=i({}),V=i(0);const B=()=>{O.post("/user/fetchObjectData",{object_id:m.params.objectId}).then(a=>{var n;d.value=a.data.objectData,p.value.gps_imei=d.value.gps_imei,p.value.time=d.value.time,p.value.gps_time=d.value.gps_time,p.value.server_time=d.value.server_time,p.value.frTime=d.value.server_time,(n=d.value)==null||delete n.object_id,d.value.frTime=d.value.time,d.value=Object.fromEntries(Object.entries(d.value).sort((o,t)=>o[0].localeCompare(t[0])))}).catch(a=>{console.log(a)})},x=()=>{O.post("/user/fetchLimits",{object_id:m.params.objectId}).then(a=>{C.value=a.data.limits,W.value=JSON.parse(JSON.stringify(C.value));for(let n of C.value)n.delete="delete",n.show="show",delete n.object_id,delete n.limit_id}).catch(a=>{console.log(a)})},T=()=>{O.post("/user/fetchEvents",{object_id:m.params.objectId,title:"limitation_event"}).then(a=>{A.value=a.data.events;for(let n of A.value)delete n.object_id,delete n.event_id;A.value.sort((n,o)=>{const t=new Date(n.time);return new Date(o.time)-t})}).catch(a=>{console.log(a)})};m.path.startsWith("/object")&&(B(),x(),T()),setInterval(()=>{m.path.startsWith("/object")&&(B(),x(),T())},5e3),N(()=>m.fullPath,async()=>{m.path.startsWith("/object")&&(B(),x(),T())}),N(A,a=>{V.value=a==null?void 0:a.length},{deep:!0}),N(V,()=>{V.value&&$.info("you have new event!")});const I=()=>{Z.push("/")},q=()=>{b.value="Active",g.value="",k.value="hidden",f.value="container",y.value="",j.value="hidden",S.value="",D.value="hidden"},K=()=>{b.value="",g.value="Active",f.value="hidden",k.value="containerLimit",y.value="",j.value="hidden",S.value="",D.value="hidden"},M=()=>{b.value="",g.value="",y.value="Active",f.value="hidden",j.value="containerEvent",k.value="hidden",S.value="",D.value="hidden"},P=()=>{b.value="",g.value="",y.value="",f.value="hidden",j.value="containerEvent",k.value="hidden",S.value="Active",D.value="container"};return(a,n)=>(c(),u(E,null,[e("div",U,[e("button",{class:l(["menuBtn",s(S)]),onClick:P},"main",2),e("button",{class:l(["menuBtn",s(b)]),onClick:q}," Informations ",2),e("button",{class:l(["menuBtn",s(g)]),onClick:K}," limits ",2),e("button",{class:l(["menuBtn",s(y)]),onClick:M}," events ",2)]),e("div",{class:l(s(f))},[e("i",{class:"fa fa-close close",onClick:I}),(c(!0),u(E,null,F(s(d),(o,t,L)=>(c(),u("div",{class:"data",key:L},[t!="time"&&t!="frTime"?(c(),u("div",X,[e("i",{class:l(s(v).state.icons[t])},null,2),e("div",Y,[e("p",null,r(t),1),e("p",null,r(o),1)])])):_("",!0),t=="time"?(c(),u("div",ee,[e("i",{class:l(s(v).state.icons[t])},null,2),e("div",te,[se,e("p",null,r(new Date(o).toLocaleString("en")),1)])])):_("",!0),t=="frTime"?(c(),u("div",ae,[e("i",{class:l(s(v).state.icons.time)},null,2),e("div",le,[ie,e("p",null,r(new Date(o).toLocaleString("fa-Ir")),1)])])):_("",!0)]))),128))],2),e("div",{class:l(s(k))},[e("i",{class:"fa fa-close close",onClick:I}),J(z,{headers:["create_at","logitude","latitude","radius","delete","show"],tableData:s(C),limits:s(W),class:"Table"},null,8,["tableData","limits"])],2),e("div",{class:l(s(j))},[e("i",{class:"fa fa-close close",onClick:I}),J(z,{headers:["title","message","status","time"],tableData:s(A),class:"Table"},null,8,["tableData"])],2),e("div",{class:l(s(D))},[e("i",{class:"fa fa-close close",onClick:I}),(c(!0),u(E,null,F(s(p),(o,t,L)=>(c(),u("div",{class:"mainData",key:L},[t!="server_time"&&t!="gps_time"&&t!="time"&&t!="frTime"?(c(),u("div",ne,[e("i",{class:l(s(v).state.icons.gps_imei)},null,2),e("div",oe,[ce,e("p",null,r(o),1)])])):_("",!0),t=="time"?(c(),u("div",ue,[e("i",{class:l(s(v).state.icons[t])},null,2),e("div",de,[re,e("p",null,r(new Date(o).toLocaleString("en")),1)])])):_("",!0),t=="gps_time"?(c(),u("div",ve,[e("i",{class:l(s(v).state.icons.time)},null,2),e("div",_e,[me,e("p",null,r(new Date(o).toLocaleString("fa-Ir")),1)])])):_("",!0),t=="frTime"?(c(),u("div",he,[e("i",{class:l(s(v).state.icons.time)},null,2),e("div",pe,[fe,e("p",null,r(new Date(o).toLocaleString("fa-Ir")),1)])])):_("",!0),t=="server_time"?(c(),u("div",be,[e("i",{class:l(s(v).state.icons.time)},null,2),e("div",ge,[ye,e("p",null,r(new Date(o).toLocaleString("en")),1)])])):_("",!0)]))),128))],2)],64))}},Ce=G(Se,[["__scopeId","data-v-444c02bd"]]);export{Ce as default};