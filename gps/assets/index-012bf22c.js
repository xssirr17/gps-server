import{c as Ae}from"./index-1cddbe14.js";import{aq as D,x as V,as as M,j as v,a_ as k,u as d,N as j,aN as y,a2 as O,F as ye,a3 as le,ad as Ne,ai as Te,$ as ue,h as he}from"./_plugin-vue_export-helper-27e74e83.js";var Ie=Object.defineProperty,Pe=Object.defineProperties,Oe=Object.getOwnPropertyDescriptors,G=Object.getOwnPropertySymbols,de=Object.prototype.hasOwnProperty,ce=Object.prototype.propertyIsEnumerable,se=(e,t,n)=>t in e?Ie(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,l=(e,t)=>{for(var n in t||(t={}))de.call(t,n)&&se(e,n,t[n]);if(G)for(var n of G(t))ce.call(t,n)&&se(e,n,t[n]);return e},_=(e,t)=>Pe(e,Oe(t)),be=(e,t)=>{var n={};for(var o in e)de.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&G)for(var o of G(e))t.indexOf(o)<0&&ce.call(e,o)&&(n[o]=e[o]);return n},U={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},q={LIGHT:"light",DARK:"dark",COLORED:"colored",AUTO:"auto"},p={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},Le={BOUNCE:"bounce",SLIDE:"slide",FLIP:"flip",ZOOM:"zoom"},fe={dangerouslyHTMLString:!1,multiple:!0,position:U.TOP_RIGHT,autoClose:5e3,transition:"bounce",hideProgressBar:!1,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,className:"",bodyClassName:"",style:{},progressClassName:"",progressStyle:{},role:"alert",theme:"light"},$e={rtl:!1,newestOnTop:!1,toastClassName:""},me=l(l({},fe),$e);_(l({},fe),{data:{},type:p.DEFAULT,icon:!1});var r=function(e){return e[e.COLLAPSE_DURATION=300]="COLLAPSE_DURATION",e[e.DEBOUNCE_DURATION=50]="DEBOUNCE_DURATION",e.CSS_NAMESPACE="Toastify",e}({}),re=function(e){return e.ENTRANCE_ANIMATION_END="d",e}({}),Me={enter:`${r.CSS_NAMESPACE}--animate ${r.CSS_NAMESPACE}__bounce-enter`,exit:`${r.CSS_NAMESPACE}--animate ${r.CSS_NAMESPACE}__bounce-exit`,appendPosition:!0},Be={enter:`${r.CSS_NAMESPACE}--animate ${r.CSS_NAMESPACE}__slide-enter`,exit:`${r.CSS_NAMESPACE}--animate ${r.CSS_NAMESPACE}__slide-exit`,appendPosition:!0},qe={enter:`${r.CSS_NAMESPACE}--animate ${r.CSS_NAMESPACE}__zoom-enter`,exit:`${r.CSS_NAMESPACE}--animate ${r.CSS_NAMESPACE}__zoom-exit`},Re={enter:`${r.CSS_NAMESPACE}--animate ${r.CSS_NAMESPACE}__flip-enter`,exit:`${r.CSS_NAMESPACE}--animate ${r.CSS_NAMESPACE}__flip-exit`};function ge(e){let t=Me;if(!e||typeof e=="string")switch(e){case"flip":t=Re;break;case"zoom":t=qe;break;case"slide":t=Be;break}else t=e;return t}function we(e){return e.containerId||String(e.position)}var Q="will-unmount";function Fe(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:U.TOP_RIGHT;return!!document.querySelector(`.${r.CSS_NAMESPACE}__toast-container--${e}`)}function xe(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:U.TOP_RIGHT;return`${r.CSS_NAMESPACE}__toast-container--${e}`}function De(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;const o=[`${r.CSS_NAMESPACE}__toast-container`,`${r.CSS_NAMESPACE}__toast-container--${e}`,n?`${r.CSS_NAMESPACE}__toast-container--rtl`:null].filter(Boolean).join(" ");return B(t)?t({position:e,rtl:n,defaultClassName:o}):`${o} ${t||""}`}function Ue(e){var t;const{position:n,containerClassName:o,rtl:a=!1,style:s={}}=e,u=r.CSS_NAMESPACE,A=xe(n),c=document.querySelector(`.${u}`),S=document.querySelector(`.${A}`),m=!!S&&!((t=S.className)!=null&&t.includes(Q)),E=c||document.createElement("div"),g=document.createElement("div");g.className=De(n,o,a),g.dataset.testid=`${r.CSS_NAMESPACE}__toast-container--${n}`,g.id=we(e);for(const h in s)if(Object.prototype.hasOwnProperty.call(s,h)){const L=s[h];g.style[h]=L}return c||(E.className=r.CSS_NAMESPACE,document.body.appendChild(E)),m||E.appendChild(g),g}function X(e){var t,n,o;const a=typeof e=="string"?e:((t=e.currentTarget)==null?void 0:t.id)||((n=e.target)==null?void 0:n.id),s=document.getElementById(a);s&&s.removeEventListener("animationend",X,!1);try{x[a].unmount(),(o=document.getElementById(a))==null||o.remove(),delete x[a],delete f[a]}catch{}}var x=D({});function He(e,t){const n=document.getElementById(String(t));n&&(x[n.id]=e)}function J(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const n=String(e);if(!x[n])return;const o=document.getElementById(n);o&&o.classList.add(Q),t?(ke(e),o&&o.addEventListener("animationend",X,!1)):X(n),N.items=N.items.filter(a=>a.containerId!==e)}function je(e){for(const t in x)J(t,e);N.items=[]}function ve(e,t){const n=document.getElementById(e.toastId);if(n){let o=e;o=l(l({},o),ge(o.transition));const a=o.appendPosition?`${o.exit}--${o.position}`:o.exit;n.className+=` ${a}`,t&&t(n)}}function ke(e){for(const t in f)if(t===e)for(const n of f[t]||[])ve(n)}function ze(e){const n=H().find(o=>o.toastId===e);return n==null?void 0:n.containerId}function ae(e){return document.getElementById(e)}function Ge(e){const t=ae(e.containerId);return t&&t.classList.contains(Q)}function ie(e){var t;const n=ue(e.content)?y(e.content.props):null;return n??y((t=e.data)!=null?t:{})}function Ve(e){return e?N.items.filter(n=>n.containerId===e).length>0:N.items.length>0}function Qe(){if(N.items.length>0){const e=N.items.shift();ee(e==null?void 0:e.toastContent,e==null?void 0:e.toastProps)}}var f=D({}),N=D({items:[]});function H(){const e=y(f);return Object.values(e).reduce((t,n)=>[...t,...n],[])}function We(e){return H().find(n=>n.toastId===e)}function ee(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(Ge(t)){const n=ae(t.containerId);n&&n.addEventListener("animationend",te.bind(null,e,t),!1)}else te(e,t)}function te(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const n=ae(t.containerId);n&&n.removeEventListener("animationend",te.bind(null,e,t),!1);const o=f[t.containerId]||[],a=o.length>0;if(!a&&!Fe(t.position)){const s=Ue(t),u=Ae(St,t);u.mount(s),He(u,s.id)}a&&(t.position=o[0].position),le(()=>{t.updateId?T.update(t):T.add(e,t)})}var T={add(e,t){const{containerId:n=""}=t;n&&(f[n]=f[n]||[],f[n].find(o=>o.toastId===t.toastId)||setTimeout(()=>{var o,a;t.newestOnTop?(o=f[n])==null||o.unshift(t):(a=f[n])==null||a.push(t),t.onOpen&&t.onOpen(ie(t))},t.delay||0))},remove(e){if(e){const t=ze(e);if(t){const n=f[t];let o=n.find(a=>a.toastId===e);f[t]=n.filter(a=>a.toastId!==e),!f[t].length&&!Ve(t)&&J(t,!1),Qe(),le(()=>{o!=null&&o.onClose&&(o.onClose(ie(o)),o=void 0)})}}},update(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{containerId:t=""}=e;if(t&&e.updateId){f[t]=f[t]||[];const n=f[t].find(o=>o.toastId===e.toastId);n&&setTimeout(()=>{for(const o in e)if(Object.prototype.hasOwnProperty.call(e,o)){const a=e[o];n[o]=a}},e.delay||0)}},clear(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;e?J(e,t):je(t)},dismissCallback(e){var t;const n=(t=e.currentTarget)==null?void 0:t.id,o=document.getElementById(n);o&&(o.removeEventListener("animationend",T.dismissCallback,!1),setTimeout(()=>{T.remove(n)}))},dismiss(e){if(e){const t=H();for(const n of t)if(n.toastId===e){ve(n,o=>{o.addEventListener("animationend",T.dismissCallback,!1)});break}}}},pe=D({});function Se(){return Math.random().toString(36).substring(2,9)}function Ke(e){return typeof e=="number"&&!isNaN(e)}function ne(e){return typeof e=="string"}function B(e){return typeof e=="function"}function W(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return O(...t)}function z(e){return typeof e=="object"&&(!!(e!=null&&e.render)||!!(e!=null&&e.setup)||typeof(e==null?void 0:e.type)=="object")}function Ye(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};pe[`${r.CSS_NAMESPACE}-default-options`]=e}function Ze(){return pe[`${r.CSS_NAMESPACE}-default-options`]||me}function Xe(){return document.documentElement.classList.contains("dark")?"dark":"light"}var Y=function(e){return e[e.Enter=0]="Enter",e[e.Exit=1]="Exit",e}({}),Je={containerId:{type:[String,Number],required:!1,default:""},dangerouslyHTMLString:{type:Boolean,required:!1,default:!1},multiple:{type:Boolean,required:!1,default:!0},limit:{type:Number,required:!1,default:void 0},position:{type:String,required:!1,default:U.TOP_LEFT},bodyClassName:{type:String,required:!1,default:""},autoClose:{type:[Number,Boolean],required:!1,default:!1},closeButton:{type:[Boolean,Function,Object],required:!1,default:void 0},transition:{type:[String,Object],required:!1,default:"bounce"},hideProgressBar:{type:Boolean,required:!1,default:!1},pauseOnHover:{type:Boolean,required:!1,default:!0},pauseOnFocusLoss:{type:Boolean,required:!1,default:!0},closeOnClick:{type:Boolean,required:!1,default:!0},progress:{type:Number,required:!1,default:void 0},progressClassName:{type:String,required:!1,default:""},toastStyle:{type:Object,required:!1,default(){return{}}},progressStyle:{type:Object,required:!1,default(){return{}}},role:{type:String,required:!1,default:"alert"},theme:{type:String,required:!1,default:q.AUTO},content:{type:[String,Object,Function],required:!1,default:""},toastId:{type:[String,Number],required:!1,default:""},data:{type:[Object,String],required:!1,default(){return{}}},type:{type:String,required:!1,default:p.DEFAULT},icon:{type:[Boolean,String,Number,Object,Function],required:!1,default:void 0},delay:{type:Number,required:!1,default:void 0},onOpen:{type:Function,required:!1,default:void 0},onClose:{type:Function,required:!1,default:void 0},onClick:{type:Function,required:!1,default:void 0},isLoading:{type:Boolean,required:!1,default:void 0},rtl:{type:Boolean,required:!1,default:!1},toastClassName:{type:String,required:!1,default:""},updateId:{type:[String,Number],required:!1,default:""}},Ee=Je,et={autoClose:{type:[Number,Boolean],required:!0},isRunning:{type:Boolean,required:!1,default:void 0},type:{type:String,required:!1,default:p.DEFAULT},theme:{type:String,required:!1,default:q.AUTO},hide:{type:Boolean,required:!1,default:void 0},className:{type:[String,Function],required:!1,default:""},controlledProgress:{type:Boolean,required:!1,default:void 0},rtl:{type:Boolean,required:!1,default:void 0},isIn:{type:Boolean,required:!1,default:void 0},progress:{type:Number,required:!1,default:void 0},closeToast:{type:Function,required:!1,default:void 0}},tt=V({name:"ProgressBar",props:et,setup(e,t){let{attrs:n}=t;const o=M(),a=v(()=>e.hide?"true":"false"),s=v(()=>_(l({},n.style||{}),{animationDuration:`${e.autoClose===!0?5e3:e.autoClose}ms`,animationPlayState:e.isRunning?"running":"paused",opacity:e.hide?0:1,transform:e.controlledProgress?`scaleX(${e.progress})`:"none"})),u=v(()=>[`${r.CSS_NAMESPACE}__progress-bar`,e.controlledProgress?`${r.CSS_NAMESPACE}__progress-bar--controlled`:`${r.CSS_NAMESPACE}__progress-bar--animated`,`${r.CSS_NAMESPACE}__progress-bar-theme--${e.theme}`,`${r.CSS_NAMESPACE}__progress-bar--${e.type}`,e.rtl?`${r.CSS_NAMESPACE}__progress-bar--rtl`:null].filter(Boolean).join(" ")),A=v(()=>`${u.value} ${(n==null?void 0:n.class)||""}`),c=()=>{o.value&&(o.value.onanimationend=null,o.value.ontransitionend=null)},S=()=>{e.isIn&&e.closeToast&&e.autoClose!==!1&&(e.closeToast(),c())},m=v(()=>e.controlledProgress?null:S),E=v(()=>e.controlledProgress?S:null);return k(()=>{o.value&&(c(),o.value.onanimationend=m.value,o.value.ontransitionend=E.value)}),()=>d("div",{ref:o,role:"progressbar","aria-hidden":a.value,"aria-label":"notification timer",class:A.value,style:s.value},null)}}),nt=tt,ot=V({name:"CloseButton",inheritAttrs:!1,props:{theme:{type:String,required:!1,default:q.AUTO},type:{type:String,required:!1,default:q.LIGHT},ariaLabel:{type:String,required:!1,default:"close"},closeToast:{type:Function,required:!1,default:void 0}},setup(e){return()=>d("button",{class:`${r.CSS_NAMESPACE}__close-button ${r.CSS_NAMESPACE}__close-button--${e.theme}`,type:"button",onClick:t=>{t.stopPropagation(),e.closeToast&&e.closeToast(t)},"aria-label":e.ariaLabel},[d("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},[d("path",{"fill-rule":"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"},null)])])}}),K=e=>{let t=e,{theme:n,type:o,path:a}=t,s=be(t,["theme","type","path"]);return d("svg",O({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:n==="colored"?"currentColor":`var(--toastify-icon-color-${o})`},s),[d("path",{d:a},null)])};function at(e){return d(K,O(e,{path:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}),null)}function st(e){return d(K,O(e,{path:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}),null)}function rt(e){return d(K,O(e,{path:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}),null)}function it(e){return d(K,O(e,{path:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}),null)}function lt(){return d("div",{class:`${r.CSS_NAMESPACE}__spinner`},null)}var oe={info:st,warning:at,success:rt,error:it,spinner:lt},ut=e=>e in oe;function dt(e){let{theme:t,type:n,isLoading:o,icon:a}=e,s;const u={theme:t,type:n};return o?s=oe.spinner():a===!1?s=void 0:z(a)?s=y(a):B(a)?s=a(u):ue(a)?s=he(a,u):ne(a)||Ke(a)?s=a:ut(n)&&(s=oe[n](u)),s}var ct=()=>{};function ft(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:r.COLLAPSE_DURATION;const{scrollHeight:o,style:a}=e,s=n;requestAnimationFrame(()=>{a.minHeight="initial",a.height=o+"px",a.transition=`all ${s}ms`,requestAnimationFrame(()=>{a.height="0",a.padding="0",a.margin="0",setTimeout(t,s)})})}function mt(e){const t=M(!1),n=M(!1),o=M(!1),a=M(Y.Enter),s=D(_(l({},e),{appendPosition:e.appendPosition||!1,collapse:typeof e.collapse>"u"?!0:e.collapse,collapseDuration:e.collapseDuration||r.COLLAPSE_DURATION})),u=s.done||ct,A=v(()=>s.appendPosition?`${s.enter}--${s.position}`:s.enter),c=v(()=>s.appendPosition?`${s.exit}--${s.position}`:s.exit),S=v(()=>e.pauseOnHover?{onMouseenter:w,onMouseleave:R}:{});function m(){const C=A.value.split(" ");g().addEventListener(re.ENTRANCE_ANIMATION_END,R,{once:!0});const I=$=>{const F=g();$.target===F&&(F.dispatchEvent(new Event(re.ENTRANCE_ANIMATION_END)),F.removeEventListener("animationend",I),F.removeEventListener("animationcancel",I),a.value===Y.Enter&&$.type!=="animationcancel"&&F.classList.remove(...C))},P=()=>{const $=g();$.classList.add(...C),$.addEventListener("animationend",I),$.addEventListener("animationcancel",I)};e.pauseOnFocusLoss&&h(),P()}function E(){if(!g())return;const C=()=>{const P=g();P.removeEventListener("animationend",C),s.collapse?ft(P,u,s.collapseDuration):u()},I=()=>{const P=g();a.value=Y.Exit,P&&(P.className+=` ${c.value}`,P.addEventListener("animationend",C))};n.value||(o.value?C():setTimeout(I))}function g(){return e.toastRef.value}function h(){document.hasFocus()||w(),window.addEventListener("focus",R),window.addEventListener("blur",w)}function L(){window.removeEventListener("focus",R),window.removeEventListener("blur",w)}function R(){(!e.loading.value||e.isLoading===void 0)&&(t.value=!0)}function w(){t.value=!1}function _e(C){C&&(C.stopPropagation(),C.preventDefault()),n.value=!1}return k(E),k(()=>{const C=H();n.value=C.findIndex(I=>I.toastId===s.toastId)>-1}),k(()=>{e.isLoading!==void 0&&(e.loading.value?w():R())}),Ne(m),Te(()=>{e.pauseOnFocusLoss&&L()}),{isIn:n,isRunning:t,hideToast:_e,eventHandlers:S}}var gt=V({name:"ToastItem",inheritAttrs:!1,props:Ee,setup(e){const t=M(),n=v(()=>!!e.isLoading),o=v(()=>e.progress!==void 0&&e.progress!==null),a=v(()=>dt(e)),s=v(()=>[`${r.CSS_NAMESPACE}__toast`,`${r.CSS_NAMESPACE}__toast-theme--${e.theme}`,`${r.CSS_NAMESPACE}__toast--${e.type}`,e.rtl?`${r.CSS_NAMESPACE}__toast--rtl`:void 0,e.toastClassName||""].filter(Boolean).join(" ")),{isRunning:u,isIn:A,hideToast:c,eventHandlers:S}=mt(l(l({toastRef:t,loading:n,done:()=>{T.remove(e.toastId)}},ge(e.transition)),e));return()=>d("div",O({id:e.toastId,class:s.value,style:e.toastStyle||{},ref:t,"data-testid":`toast-item-${e.toastId}`,onClick:m=>{e.closeOnClick&&c(),e.onClick&&e.onClick(m)}},S.value),[d("div",{role:e.role,"data-testid":"toast-body",class:`${r.CSS_NAMESPACE}__toast-body ${e.bodyClassName||""}`},[a.value!=null&&d("div",{"data-testid":`toast-icon-${e.type}`,class:[`${r.CSS_NAMESPACE}__toast-icon`,e.isLoading?"":`${r.CSS_NAMESPACE}--animate-icon ${r.CSS_NAMESPACE}__zoom-enter`].join(" ")},[z(a.value)?j(y(a.value),{theme:e.theme,type:e.type}):B(a.value)?a.value({theme:e.theme,type:e.type}):a.value]),d("div",{"data-testid":"toast-content"},[z(e.content)?j(y(e.content),{toastProps:y(e),closeToast:c,data:e.data}):B(e.content)?e.content({toastProps:y(e),closeToast:c,data:e.data}):e.dangerouslyHTMLString?j("div",{innerHTML:e.content}):e.content])]),(e.closeButton===void 0||e.closeButton===!0)&&d(ot,{theme:e.theme,closeToast:m=>{m.stopPropagation(),m.preventDefault(),c()}},null),z(e.closeButton)?j(y(e.closeButton),{closeToast:c,type:e.type,theme:e.theme}):B(e.closeButton)?e.closeButton({closeToast:c,type:e.type,theme:e.theme}):null,d(nt,{className:e.progressClassName,style:e.progressStyle,rtl:e.rtl,theme:e.theme,isIn:A.value,type:e.type,hide:e.hideProgressBar,isRunning:u.value,autoClose:e.autoClose,controlledProgress:o.value,progress:e.progress,closeToast:e.isLoading?void 0:c},null)])}}),vt=gt,pt=V({name:"ToastifyContainer",inheritAttrs:!1,props:Ee,setup(e){const t=v(()=>e.containerId),n=v(()=>f[t.value]||[]),o=v(()=>n.value.filter(a=>a.position===e.position));return()=>d(ye,null,[o.value.map(a=>{const{toastId:s=""}=a;return d(vt,O({key:s},a),null)})])}}),St=pt,Z=!1;function Ce(){const e=[];return H().forEach(n=>{const o=document.getElementById(n.containerId);o&&!o.classList.contains(Q)&&e.push(n)}),e}function Et(e){const t=Ce().length,n=e??0;return n>0&&t+N.items.length>=n}function Ct(e){Et(e.limit)&&!e.updateId&&N.items.push({toastId:e.toastId,containerId:e.containerId,toastContent:e.content,toastProps:e})}function b(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(Z)return;n=W(Ze(),t,n),(!n.toastId||typeof n.toastId!="string"&&typeof n.toastId!="number")&&(n.toastId=Se()),n=_(l({},n),{content:e,containerId:n.containerId||String(n.position)});const o=Number(n==null?void 0:n.progress);return o<0&&(n.progress=0),o>1&&(n.progress=1),n.theme==="auto"&&(n.theme=Xe()),Ct(n),n.multiple?N.items.length||ee(e,n):(Z=!0,i.clearAll(void 0,!1),setTimeout(()=>{ee(e,n)},0),setTimeout(()=>{Z=!1},390)),n.toastId}var i=(e,t)=>b(e,p.DEFAULT,t);i.info=(e,t)=>b(e,p.DEFAULT,_(l({},t),{type:p.INFO}));i.error=(e,t)=>b(e,p.DEFAULT,_(l({},t),{type:p.ERROR}));i.warning=(e,t)=>b(e,p.DEFAULT,_(l({},t),{type:p.WARNING}));i.warn=i.warning;i.success=(e,t)=>b(e,p.DEFAULT,_(l({},t),{type:p.SUCCESS}));i.loading=(e,t)=>b(e,p.DEFAULT,W(t,{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1}));i.dark=(e,t)=>b(e,p.DEFAULT,W(t,{theme:q.DARK}));i.remove=e=>{e?T.dismiss(e):T.clear()};i.clearAll=(e,t)=>{T.clear(e,t)};i.isActive=e=>{let t=!1;return t=Ce().findIndex(o=>o.toastId===e)>-1,t};i.update=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};setTimeout(()=>{const n=We(e);if(n){const o=y(n),{content:a}=o,s=_(l(l({},o),t),{toastId:t.toastId||e,updateId:Se()}),u=s.render||a;delete s.render,b(u,s.type,s)}},0)};i.done=e=>{i.update(e,{isLoading:!1,progress:1})};i.promise=_t;function _t(e,t,n){let{pending:o,error:a,success:s}=t,u;o&&(u=ne(o)?i.loading(o,n):i.loading(o.render,l(l({},n),o)));const A={isLoading:void 0,autoClose:null,closeOnClick:null,closeButton:null,draggable:null,delay:100},c=(m,E,g)=>{if(E==null){i.remove(u);return}const h=_(l(l({type:m},A),n),{data:g}),L=ne(E)?{render:E}:E;return u?i.update(u,_(l(l({},h),L),{isLoading:!1,autoClose:!0})):i(L.render,_(l(l({},h),L),{isLoading:!1,autoClose:!0})),g},S=B(e)?e():e;return S.then(m=>c("success",s,m)).catch(m=>c("error",a,m)),S}i.POSITION=U;i.THEME=q;i.TYPE=p;i.TRANSITIONS=Le;var ht=i,At={install(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};yt(t)}};typeof window<"u"&&(window.Vue3Toastify=At);function yt(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const t=W(me,e);Ye(t)}export{ht as t};