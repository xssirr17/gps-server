import{i as j}from"./api-d5b2fa82.js";import{i as C}from"./axios-eaf5c85e.js";/* empty css                                                                */import{_ as I}from"./_plugin-vue_export-helper-c27b6911.js";import{D as S,o as i,c as n,P as e,U as t,F as w,R as x,T as B,V as D,W as O}from"./runtime-core.esm-bundler-8e25eac6.js";const V=s=>(D("data-v-81a53d0c"),s=s(),O(),s),F={class:"container"},N={class:"info"},E={class:"item"},L={class:"item"},P={class:"item"},R={class:"item"},T={class:"item"},W={class:"item"},q={class:"item"},z={class:"item"},A={class:"item"},G={class:"item"},H={key:0,class:"item"},J=V(()=>e("p",null,"gps's :",-1)),K={class:"select"},M=["value"],Q={__name:"userCom",props:["user"],setup(s){const o=s,r=S();(()=>{var d;const c=(d=o==null?void 0:o.user)==null?void 0:d.user_id;c&&j.post("/user/fetchUserObject",{user_id:c}).then(a=>{r.value=a.data.objectsData})})();const U=()=>{j.post("/admin/deleteUser",{userId:o.user.user_id}).then(c=>{c.data.code==200&&C.success("user remove successfully",{autoClose:3e3})})};return(c,d)=>{var a,u,l,m,_,h,p,f,v,g,y;return i(),n("div",F,[e("div",N,[e("p",E,"id :"+t((a=s.user)==null?void 0:a.user_id),1),e("p",L,"first name :"+t((u=s.user)==null?void 0:u.first_name),1),e("p",P,"last name :"+t((l=s.user)==null?void 0:l.last_name),1),e("p",R,"address :"+t((m=s.user)==null?void 0:m.address),1),e("p",T,"country :"+t((_=s.user)==null?void 0:_.country),1),e("p",W,"city :"+t((h=s.user)==null?void 0:h.city),1),e("p",q,"phone :"+t((p=s.user)==null?void 0:p.phone),1),e("p",z,"email :"+t((f=s.user)==null?void 0:f.email),1),e("p",A,"join at :"+t((v=s.user)==null?void 0:v.create_at),1),e("p",G,"password :"+t((g=s.user)==null?void 0:g.password),1),(y=r.value)!=null&&y.length?(i(),n("div",H,[J,e("select",K,[(i(!0),n(w,null,x(r.value,(b,k)=>(i(),n("option",{value:b.gps_imei,key:k},t(b.gps_imei),9,M))),128))])])):B("",!0)]),e("div",{class:"buttons"},[e("i",{class:"fa fa-trash",onClick:U})])])}}},ts=I(Q,[["__scopeId","data-v-81a53d0c"]]);export{ts as U};