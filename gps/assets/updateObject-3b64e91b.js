import{o as V,k as m,l as b,p as j,q as O}from"./index-1cddbe14.js";import{t as h}from"./index-012bf22c.js";import{b7 as I,as as l,ak as S,m as U,n as t,b4 as v,aS as c,Y as r,ao as B,al as C,s as y}from"./_plugin-vue_export-helper-27e74e83.js";const g=f=>(B("data-v-fe27a5fe"),f=f(),C(),f),E={class:"container"},M={class:"choices"},N=g(()=>t("label",{for:"type"},"object type:",-1)),R=y('<option value="car" data-v-fe27a5fe>car</option><option value="bus" data-v-fe27a5fe>bus</option><option value="truck" data-v-fe27a5fe>truck</option><option value="Bike" data-v-fe27a5fe>Bike</option><option value="motorcycle" data-v-fe27a5fe>motorcycle</option><option value="human" data-v-fe27a5fe>human</option>',6),T=[R],q={class:"choices"},D=g(()=>t("label",{for:"model"},"model:",-1)),G=y('<option value="" data-v-fe27a5fe>value1</option><option value="" data-v-fe27a5fe>value2</option><option value="" data-v-fe27a5fe>value3</option><option value="" data-v-fe27a5fe>value4</option><option value="" data-v-fe27a5fe>value5</option>',5),Y=[G],z={class:"choices"},A=g(()=>t("label",{for:"engin"},"engin type:",-1)),F=y('<option value="" data-v-fe27a5fe>value1</option><option value="" data-v-fe27a5fe>value2</option><option value="" data-v-fe27a5fe>value3</option><option value="" data-v-fe27a5fe>value4</option><option value="" data-v-fe27a5fe>value5</option>',5),H=[F],J={__name:"updateObject",setup(f){const k=V();let s=l(),i=l(),d=l(),n=l(),u=l(),p=l();const w=()=>{j.push("/")};let o=l({});const x=()=>{o.value.object_id=k.params.editObjectId,s.value&&(o.value.type=s.value),i.value&&(o.value.model=i.value),d.value&&(o.value.engin_id=d.value),n.value&&(o.value.driver_id=n.value),u.value&&(o.value.engin_type=u.value),p.value&&(o.value.address=p.value),O.post("/user/updateObject",o.value).then(_=>{_.data.code==200?(h.success("object updated successfully",{autoClose:3e3}),j.push("/")):h.error("somthing went wrong when updating object",{autoClose:3e3})}).catch(_=>{h.error("somthing went wrong when updating object",{autoClose:3e3})})};return(_,a)=>(S(),U("div",E,[t("i",{class:"fa fa-remove removeGap",onClick:w}),t("div",M,[N,v(t("select",{name:"",id:"type","onUpdate:modelValue":a[0]||(a[0]=e=>r(s)?s.value=e:s=e)},T,512),[[m,c(s)]]),v(t("input",{type:"text",id:"driver",placeholder:"driver id","onUpdate:modelValue":a[1]||(a[1]=e=>r(n)?n.value=e:n=e)},null,512),[[b,c(n)]])]),t("div",q,[D,v(t("select",{name:"",id:"type","onUpdate:modelValue":a[2]||(a[2]=e=>r(i)?i.value=e:i=e)},Y,512),[[m,c(i)]]),v(t("input",{type:"text",id:"engin",placeholder:"engin id","onUpdate:modelValue":a[3]||(a[3]=e=>r(d)?d.value=e:d=e)},null,512),[[b,c(d)]])]),t("div",z,[A,v(t("select",{name:"",id:"type","onUpdate:modelValue":a[4]||(a[4]=e=>r(u)?u.value=e:u=e)},H,512),[[m,c(u)]]),v(t("input",{type:"text",id:"address",placeholder:"address ","onUpdate:modelValue":a[5]||(a[5]=e=>r(p)?p.value=e:p=e)},null,512),[[b,c(p)]])]),t("input",{type:"submit",class:"submit",value:"Edit",onClick:x})]))}},Q=I(J,[["__scopeId","data-v-fe27a5fe"]]);export{Q as default};
