import{o as V,p,q as x}from"./index-1cddbe14.js";import{t as r}from"./index-012bf22c.js";import{_ as D}from"./dynamicTable-cc858cfa.js";import{b7 as S,as as o,aw as g,ak as Y,m as B,n as s,a4 as i,u as c,F as G}from"./_plugin-vue_export-helper-27e74e83.js";const I={class:"boxConfigs"},N={class:"submit"},j={__name:"getHistory",setup(E){const l=o([]),t=o([]),h=o("configs"),f=V(),d=o("hidden"),y=o("container"),n=o(1),m=o(0),_=o("hidden"),b=()=>{p.push("/")},w=()=>{let a=[];for(let e=0;e<t.value.length;e++)a.push([t.value[e].longitude,t.value[e].latitude,t.value[e].angle]);localStorage.setItem("history",JSON.stringify(a)),p.push("/showGraph")},C=()=>{if(!l.value[0]||!l.value[1]){r.error("Please select a range",{autoClose:3e3});return}x.post("/user/fetchHistory",{object_id:f.params.object_id,startDate:l.value[0],endDate:l.value[1]}).then(a=>{console.log(a),_.value="table",t.value=a.data.history,m.value=t.value.length,t.value.length?a.data.code!=200?r.error("somthing went wrong when fetching history",{autoClose:3e3}):d.value="btnSubmit":r.error("history is emplty",{autoClose:3e3})}).catch(a=>{r.error("somthing went wrong when fetching history",{autoClose:3e3})})};return(a,e)=>{var v;const H=g("custom-date-picker"),k=g("vue-awesome-paginate");return Y(),B(G,null,[s("div",{class:i(y.value)},[s("i",{class:"fa fa-remove removeGap",onClick:b}),s("div",{class:i(h.value)},[s("div",I,[c(H,{modelValue:l.value,"onUpdate:modelValue":e[0]||(e[0]=u=>l.value=u),color:"gray",placeholder:"select time duration",range:"",clearable:"",format:"YYYY-MM-DD"},null,8,["modelValue"]),s("div",N,[s("button",{class:"btnSubmit",onClick:C},"Get History"),s("button",{class:i(d.value),onClick:w},"Show",2)])])],2)],2),s("div",{class:i(_.value)},[c(D,{headers:["time","longitude","latitude","altitude","angle","satellites","speed"],tableData:(v=t.value)==null?void 0:v.slice(n.value-1,n.value+5)},null,8,["tableData"]),c(k,{class:"paginate","total-items":m.value,"items-per-page":6,"max-pages-shown":5,modelValue:n.value,"onUpdate:modelValue":e[1]||(e[1]=u=>n.value=u)},null,8,["total-items","modelValue"])],2)],64)}}},z=S(j,[["__scopeId","data-v-f2a10e93"]]);export{z as default};