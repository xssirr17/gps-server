import{b as r,v as u,i as n}from"./axios-eaf5c85e.js";import{i as _}from"./api-d5b2fa82.js";import{_ as v}from"./_plugin-vue_export-helper-c27b6911.js";import{D as d,o as y,c as m,P as e,X as i,U as f,V as h,W as D,_ as b}from"./runtime-core.esm-bundler-8e25eac6.js";const k=t=>(h("data-v-c5fe348d"),t=t(),D(),t),x={class:"container"},S={class:"choices"},T=k(()=>e("label",{for:"type"},"type:",-1)),g=b('<option value="car" data-v-c5fe348d>car</option><option value="bus" data-v-c5fe348d>bus</option><option value="truck" data-v-c5fe348d>truck</option><option value="Bike" data-v-c5fe348d>Bike</option><option value="motorcycle" data-v-c5fe348d>motorcycle</option><option value="human" data-v-c5fe348d>human</option>',6),B=[g],V={class:"delay"},w={__name:"setTypeDelay",setup(t){const s=d(),o=d(),p=()=>{_.post("/admin/setTypeDelay",{type:s.value,delay:o.value}).then(l=>{l.data.code==200?n.success("type delay set successfully"):n.error("something went wrong")})};return(l,a)=>(y(),m("div",x,[e("div",S,[T,i(e("select",{name:"",id:"type","onUpdate:modelValue":a[0]||(a[0]=c=>s.value=c)},B,512),[[r,s.value]]),e("div",V,[i(e("input",{type:"range",min:"1",max:"10",id:"driver",placeholder:"delay based on minutes","onUpdate:modelValue":a[1]||(a[1]=c=>o.value=c)},null,512),[[u,o.value]]),e("p",null,f(o.value)+" m",1)]),e("button",{onClick:p},"submit")])]))}},C=v(w,[["__scopeId","data-v-c5fe348d"]]);export{C as default};