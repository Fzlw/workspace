import{w as x,i as Ze,e as ee,f as ve,g as E,j as g,k as Y,a as $,l as S,m as re,p as M,q as d,u as r,s as U,v as ue,T as ke,n as se,x as He,d as R,o as Me,y as w,z as Ee,A as D,B as ae,F as Ue,C as le,D as be,E as fe,r as Je,G as We,H as Ye,I as J,J as ce,b as Ce,h as De}from"./vue.esm-bundler-2b92b106.js";import{d as Fe,e as W,u as xe,p as _e,f as en,i as he,g as Ae,w as nn,h as je,j as tn,m as on,k as Oe,l as Ke,T as ge,n as sn,o as an,q as Be,r as Qe,s as ln,t as ye,v as ie,x as Te,y as rn,E as Ie,z as un,A as dn,B as cn,C as mn,D as Pe,F as pn,G as fn,H as gn,I as qe,J as yn,K as vn,L as bn,M as Cn,_ as En,c as hn,a as Bn}from"./el-message-box-8a9f8ff9.js";import{E as Tn}from"./el-pagination-9b1c9e88.js";import{u as Sn,F as wn}from"./index-6a8811e1.js";import{u as kn}from"./index-e52b75b1.js";import{u as Mn}from"./index-f3fa378b.js";import"./_commonjsHelpers-725317a4.js";import"./cloneDeep-1581ee03.js";function Fn(){}const An='a[href],button:not([disabled]),button:not([hidden]),:not([tabindex="-1"]),input:not([disabled]),input:not([type="hidden"]),select:not([disabled]),textarea:not([disabled])',On=e=>getComputedStyle(e).position==="fixed"?!1:e.offsetParent!==null,Le=e=>Array.from(e.querySelectorAll(An)).filter(n=>In(n)&&On(n)),In=e=>{if(e.tabIndex>0||e.tabIndex===0&&e.getAttribute("tabIndex")!==null)return!0;if(e.disabled)return!1;switch(e.nodeName){case"A":return!!e.href&&e.rel!=="ignore";case"INPUT":return!(e.type==="hidden"||e.type==="file");case"BUTTON":case"SELECT":case"TEXTAREA":return!0;default:return!1}},$n=(e,n)=>{let t;x(()=>e.value,o=>{var s,a;o?(t=document.activeElement,Ze(n)&&((a=(s=n.value).focus)==null||a.call(s))):t.focus()})},Dn=Fe({a11y:{type:Boolean,default:!0},locale:{type:W(Object)},size:xe,button:{type:W(Object)},experimentalFeatures:{type:W(Object)},keyboardNavigation:{type:Boolean,default:!0},message:{type:W(Object)},zIndex:Number,namespace:{type:String,default:"el"}}),Se={};ee({name:"ElConfigProvider",props:Dn,setup(e,{slots:n}){x(()=>e.message,o=>{Object.assign(Se,o??{})},{immediate:!0,deep:!0});const t=_e(e);return()=>ve(n,"default",{config:t==null?void 0:t.value})}});const Pn=Fe({value:{type:[String,Number],default:""},max:{type:Number,default:99},isDot:Boolean,hidden:Boolean,type:{type:String,values:["primary","success","warning","info","danger"],default:"danger"}}),qn=["textContent"],Ln=ee({name:"ElBadge"}),zn=ee({...Ln,props:Pn,setup(e,{expose:n}){const t=e,o=en("badge"),s=E(()=>t.isDot?"":he(t.value)&&he(t.max)?t.max<t.value?`${t.max}+`:`${t.value}`:`${t.value}`);return n({content:s}),(a,u)=>(g(),Y("div",{class:d(r(o).b())},[ve(a.$slots,"default"),$(ke,{name:`${r(o).namespace.value}-zoom-in-center`,persisted:""},{default:S(()=>[re(M("sup",{class:d([r(o).e("content"),r(o).em("content",a.type),r(o).is("fixed",!!a.$slots.default),r(o).is("dot",a.isDot)]),textContent:U(r(s))},null,10,qn),[[ue,!a.hidden&&(r(s)||a.isDot)]])]),_:1},8,["name"])],2))}});var Rn=Ae(zn,[["__file","/home/runner/work/element-plus/element-plus/packages/components/badge/src/badge.vue"]]);const Nn=nn(Rn),we="_trap-focus-children",j=[],ze=e=>{if(j.length===0)return;const n=j[j.length-1][we];if(n.length>0&&e.code===je.tab){if(n.length===1){e.preventDefault(),document.activeElement!==n[0]&&n[0].focus();return}const t=e.shiftKey,o=e.target===n[0],s=e.target===n[n.length-1];o&&t&&(e.preventDefault(),n[n.length-1].focus()),s&&!t&&(e.preventDefault(),n[0].focus())}},Vn={beforeMount(e){e[we]=Le(e),j.push(e),j.length<=1&&document.addEventListener("keydown",ze)},updated(e){se(()=>{e[we]=Le(e)})},unmounted(){j.shift(),j.length===0&&document.removeEventListener("keydown",ze)}},Ge=["success","info","warning","error"],C=on({customClass:"",center:!1,dangerouslyUseHTMLString:!1,duration:3e3,icon:void 0,id:"",message:"",onClose:void 0,showClose:!1,type:"info",offset:16,zIndex:0,grouping:!1,repeatNum:1,appendTo:Oe?document.body:void 0}),Hn=Fe({customClass:{type:String,default:C.customClass},center:{type:Boolean,default:C.center},dangerouslyUseHTMLString:{type:Boolean,default:C.dangerouslyUseHTMLString},duration:{type:Number,default:C.duration},icon:{type:tn,default:C.icon},id:{type:String,default:C.id},message:{type:W([String,Object,Function]),default:C.message},onClose:{type:W(Function),required:!1},showClose:{type:Boolean,default:C.showClose},type:{type:String,values:Ge,default:C.type},offset:{type:Number,default:C.offset},zIndex:{type:Number,default:C.zIndex},grouping:{type:Boolean,default:C.grouping},repeatNum:{type:Number,default:C.repeatNum}}),Un={destroy:()=>!0},O=He([]),jn=e=>{const n=O.findIndex(s=>s.id===e),t=O[n];let o;return n>0&&(o=O[n-1]),{current:t,prev:o}},Kn=e=>{const{prev:n}=jn(e);return n?n.vm.exposed.bottom.value:0},Qn=(e,n)=>O.findIndex(o=>o.id===e)>0?20:n,Gn=["id"],Xn=["innerHTML"],Zn=ee({name:"ElMessage"}),Jn=ee({...Zn,props:Hn,emits:Un,setup(e,{expose:n}){const t=e,{Close:o}=Qe,{ns:s,zIndex:a}=Ke("message"),{currentZIndex:u,nextZIndex:p}=a,y=R(),l=R(!1),f=R(0);let b;const m=E(()=>t.type?t.type==="error"?"danger":t.type:"info"),K=E(()=>{const i=t.type;return{[s.bm("icon",i)]:i&&ge[i]}}),Q=E(()=>t.icon||ge[t.type]||""),F=E(()=>Kn(t.id)),N=E(()=>Qn(t.id,t.offset)+F.value),A=E(()=>f.value+N.value),I=E(()=>({top:`${N.value}px`,zIndex:u.value}));function P(){t.duration!==0&&({stop:b}=ln(()=>{q()},t.duration))}function H(){b==null||b()}function q(){l.value=!1}function L({code:i}){i===je.esc&&q()}return Me(()=>{P(),p(),l.value=!0}),x(()=>t.repeatNum,()=>{H(),P()}),sn(document,"keydown",L),an(y,()=>{f.value=y.value.getBoundingClientRect().height}),n({visible:l,bottom:A,close:q}),(i,G)=>(g(),w(ke,{name:r(s).b("fade"),onBeforeLeave:i.onClose,onAfterLeave:G[0]||(G[0]=B=>i.$emit("destroy")),persisted:""},{default:S(()=>[re(M("div",{id:i.id,ref_key:"messageRef",ref:y,class:d([r(s).b(),{[r(s).m(i.type)]:i.type&&!i.icon},r(s).is("center",i.center),r(s).is("closable",i.showClose),i.customClass]),style:Ee(r(I)),role:"alert",onMouseenter:H,onMouseleave:P},[i.repeatNum>1?(g(),w(r(Nn),{key:0,value:i.repeatNum,type:r(m),class:d(r(s).e("badge"))},null,8,["value","type","class"])):D("v-if",!0),r(Q)?(g(),w(r(Be),{key:1,class:d([r(s).e("icon"),r(K)])},{default:S(()=>[(g(),w(ae(r(Q))))]),_:1},8,["class"])):D("v-if",!0),ve(i.$slots,"default",{},()=>[i.dangerouslyUseHTMLString?(g(),Y(Ue,{key:1},[D(" Caution here, message could've been compromised, never use user's input as message "),M("p",{class:d(r(s).e("content")),innerHTML:i.message},null,10,Xn)],2112)):(g(),Y("p",{key:0,class:d(r(s).e("content"))},U(i.message),3))]),i.showClose?(g(),w(r(Be),{key:2,class:d(r(s).e("closeBtn")),onClick:le(q,["stop"])},{default:S(()=>[$(r(o))]),_:1},8,["class","onClick"])):D("v-if",!0)],46,Gn),[[ue,l.value]])]),_:3},8,["name","onBeforeLeave"]))}});var Wn=Ae(Jn,[["__file","/home/runner/work/element-plus/element-plus/packages/components/message/src/message.vue"]]);let Yn=1;const Xe=e=>{const n=!e||ye(e)||be(e)||ie(e)?{message:e}:e,t={...C,...n};if(!t.appendTo)t.appendTo=document.body;else if(ye(t.appendTo)){let o=document.querySelector(t.appendTo);Te(o)||(o=document.body),t.appendTo=o}return t},xn=e=>{const n=O.indexOf(e);if(n===-1)return;O.splice(n,1);const{handler:t}=e;t.close()},_n=({appendTo:e,...n},t)=>{const o=`message_${Yn++}`,s=n.onClose,a=document.createElement("div"),u={...n,id:o,onClose:()=>{s==null||s(),xn(f)},onDestroy:()=>{fe(null,a)}},p=$(Wn,u,ie(u.message)||be(u.message)?{default:ie(u.message)?u.message:()=>u.message}:null);p.appContext=t||_._context,fe(p,a),e.appendChild(a.firstElementChild);const y=p.component,f={id:o,vnode:p,vm:y,handler:{close:()=>{y.exposed.visible.value=!1}},props:p.component.props};return f},_=(e={},n)=>{if(!Oe)return{close:()=>{}};if(he(Se.max)&&O.length>=Se.max)return{close:()=>{}};const t=Xe(e);if(t.grouping&&O.length){const s=O.find(({vnode:a})=>{var u;return((u=a.props)==null?void 0:u.message)===t.message});if(s)return s.props.repeatNum+=1,s.props.type=t.type,s.handler}const o=_n(t,n);return O.push(o),o.handler};Ge.forEach(e=>{_[e]=(n={},t)=>{const o=Xe(n);return _({...o,type:e},t)}});function et(e){for(const n of O)(!e||e===n.props.type)&&n.handler.close()}_.closeAll=et;_._context=null;const me=rn(_,"$message"),nt=ee({name:"ElMessageBox",directives:{TrapFocus:Vn},components:{ElButton:Ie,ElFocusTrap:un,ElInput:dn,ElOverlay:cn,ElIcon:Be,...Qe},inheritAttrs:!1,props:{buttonSize:{type:String,validator:mn},modal:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},showClose:{type:Boolean,default:!0},closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},closeOnHashChange:{type:Boolean,default:!0},center:Boolean,draggable:Boolean,roundButton:{default:!1,type:Boolean},container:{type:String,default:"body"},boxType:{type:String,default:""}},emits:["vanish","action"],setup(e,{emit:n}){const{locale:t,zIndex:o,ns:s,size:a}=Ke("message-box",E(()=>e.buttonSize)),{t:u}=t,{nextZIndex:p}=o,y=R(!1),l=Je({autofocus:!0,beforeClose:null,callback:null,cancelButtonText:"",cancelButtonClass:"",confirmButtonText:"",confirmButtonClass:"",customClass:"",customStyle:{},dangerouslyUseHTMLString:!1,distinguishCancelAndClose:!1,icon:"",inputPattern:null,inputPlaceholder:"",inputType:"text",inputValue:null,inputValidator:null,inputErrorMessage:"",message:null,modalFade:!0,modalClass:"",showCancelButton:!1,showConfirmButton:!0,type:"",title:void 0,showInput:!1,action:"",confirmButtonLoading:!1,cancelButtonLoading:!1,confirmButtonDisabled:!1,editorErrorMessage:"",validateError:!1,zIndex:p()}),f=E(()=>{const c=l.type;return{[s.bm("icon",c)]:c&&ge[c]}}),b=Pe(),m=Pe(),K=E(()=>l.icon||ge[l.type]||""),Q=E(()=>!!l.message),F=R(),N=R(),A=R(),I=R(),P=R(),H=E(()=>l.confirmButtonClass);x(()=>l.inputValue,async c=>{await se(),e.boxType==="prompt"&&c!==null&&k()},{immediate:!0}),x(()=>y.value,c=>{var T,z;c&&(e.boxType!=="prompt"&&(l.autofocus?A.value=(z=(T=P.value)==null?void 0:T.$el)!=null?z:F.value:A.value=F.value),l.zIndex=p()),e.boxType==="prompt"&&(c?se().then(()=>{var oe;I.value&&I.value.$el&&(l.autofocus?A.value=(oe=X())!=null?oe:F.value:A.value=F.value)}):(l.editorErrorMessage="",l.validateError=!1))});const q=E(()=>e.draggable);pn(F,N,q),Me(async()=>{await se(),e.closeOnHashChange&&window.addEventListener("hashchange",L)}),We(()=>{e.closeOnHashChange&&window.removeEventListener("hashchange",L)});function L(){y.value&&(y.value=!1,se(()=>{l.action&&n("action",l.action)}))}const i=()=>{e.closeOnClickModal&&v(l.distinguishCancelAndClose?"close":"cancel")},G=gn(i),B=c=>{if(l.inputType!=="textarea")return c.preventDefault(),v("confirm")},v=c=>{var T;e.boxType==="prompt"&&c==="confirm"&&!k()||(l.action=c,l.beforeClose?(T=l.beforeClose)==null||T.call(l,c,l,L):L())},k=()=>{if(e.boxType==="prompt"){const c=l.inputPattern;if(c&&!c.test(l.inputValue||""))return l.editorErrorMessage=l.inputErrorMessage||u("el.messagebox.error"),l.validateError=!0,!1;const T=l.inputValidator;if(typeof T=="function"){const z=T(l.inputValue);if(z===!1)return l.editorErrorMessage=l.inputErrorMessage||u("el.messagebox.error"),l.validateError=!0,!1;if(typeof z=="string")return l.editorErrorMessage=z,l.validateError=!0,!1}}return l.editorErrorMessage="",l.validateError=!1,!0},X=()=>{const c=I.value.$refs;return c.input||c.textarea},Z=()=>{v("close")},te=()=>{e.closeOnPressEscape&&Z()};return e.lockScroll&&fn(y),$n(y),{...Ye(l),ns:s,overlayEvent:G,visible:y,hasMessage:Q,typeClass:f,contentId:b,inputId:m,btnSize:a,iconComponent:K,confirmButtonClasses:H,rootRef:F,focusStartRef:A,headerRef:N,inputRef:I,confirmRef:P,doClose:L,handleClose:Z,onCloseRequested:te,handleWrapperClick:i,handleInputEnter:B,handleAction:v,t:u}}}),tt=["aria-label","aria-describedby"],ot=["aria-label"],st=["id"];function at(e,n,t,o,s,a){const u=J("el-icon"),p=J("close"),y=J("el-input"),l=J("el-button"),f=J("el-focus-trap"),b=J("el-overlay");return g(),w(ke,{name:"fade-in-linear",onAfterLeave:n[11]||(n[11]=m=>e.$emit("vanish")),persisted:""},{default:S(()=>[re($(b,{"z-index":e.zIndex,"overlay-class":[e.ns.is("message-box"),e.modalClass],mask:e.modal},{default:S(()=>[M("div",{role:"dialog","aria-label":e.title,"aria-modal":"true","aria-describedby":e.showInput?void 0:e.contentId,class:d(`${e.ns.namespace.value}-overlay-message-box`),onClick:n[8]||(n[8]=(...m)=>e.overlayEvent.onClick&&e.overlayEvent.onClick(...m)),onMousedown:n[9]||(n[9]=(...m)=>e.overlayEvent.onMousedown&&e.overlayEvent.onMousedown(...m)),onMouseup:n[10]||(n[10]=(...m)=>e.overlayEvent.onMouseup&&e.overlayEvent.onMouseup(...m))},[$(f,{loop:"",trapped:e.visible,"focus-trap-el":e.rootRef,"focus-start-el":e.focusStartRef,onReleaseRequested:e.onCloseRequested},{default:S(()=>[M("div",{ref:"rootRef",class:d([e.ns.b(),e.customClass,e.ns.is("draggable",e.draggable),{[e.ns.m("center")]:e.center}]),style:Ee(e.customStyle),tabindex:"-1",onClick:n[7]||(n[7]=le(()=>{},["stop"]))},[e.title!==null&&e.title!==void 0?(g(),Y("div",{key:0,ref:"headerRef",class:d(e.ns.e("header"))},[M("div",{class:d(e.ns.e("title"))},[e.iconComponent&&e.center?(g(),w(u,{key:0,class:d([e.ns.e("status"),e.typeClass])},{default:S(()=>[(g(),w(ae(e.iconComponent)))]),_:1},8,["class"])):D("v-if",!0),M("span",null,U(e.title),1)],2),e.showClose?(g(),Y("button",{key:0,type:"button",class:d(e.ns.e("headerbtn")),"aria-label":e.t("el.messagebox.close"),onClick:n[0]||(n[0]=m=>e.handleAction(e.distinguishCancelAndClose?"close":"cancel")),onKeydown:n[1]||(n[1]=ce(le(m=>e.handleAction(e.distinguishCancelAndClose?"close":"cancel"),["prevent"]),["enter"]))},[$(u,{class:d(e.ns.e("close"))},{default:S(()=>[$(p)]),_:1},8,["class"])],42,ot)):D("v-if",!0)],2)):D("v-if",!0),M("div",{id:e.contentId,class:d(e.ns.e("content"))},[M("div",{class:d(e.ns.e("container"))},[e.iconComponent&&!e.center&&e.hasMessage?(g(),w(u,{key:0,class:d([e.ns.e("status"),e.typeClass])},{default:S(()=>[(g(),w(ae(e.iconComponent)))]),_:1},8,["class"])):D("v-if",!0),e.hasMessage?(g(),Y("div",{key:1,class:d(e.ns.e("message"))},[ve(e.$slots,"default",{},()=>[e.dangerouslyUseHTMLString?(g(),w(ae(e.showInput?"label":"p"),{key:1,for:e.showInput?e.inputId:void 0,innerHTML:e.message},null,8,["for","innerHTML"])):(g(),w(ae(e.showInput?"label":"p"),{key:0,for:e.showInput?e.inputId:void 0},{default:S(()=>[Ce(U(e.dangerouslyUseHTMLString?"":e.message),1)]),_:1},8,["for"]))])],2)):D("v-if",!0)],2),re(M("div",{class:d(e.ns.e("input"))},[$(y,{id:e.inputId,ref:"inputRef",modelValue:e.inputValue,"onUpdate:modelValue":n[2]||(n[2]=m=>e.inputValue=m),type:e.inputType,placeholder:e.inputPlaceholder,"aria-invalid":e.validateError,class:d({invalid:e.validateError}),onKeydown:ce(e.handleInputEnter,["enter"])},null,8,["id","modelValue","type","placeholder","aria-invalid","class","onKeydown"]),M("div",{class:d(e.ns.e("errormsg")),style:Ee({visibility:e.editorErrorMessage?"visible":"hidden"})},U(e.editorErrorMessage),7)],2),[[ue,e.showInput]])],10,st),M("div",{class:d(e.ns.e("btns"))},[e.showCancelButton?(g(),w(l,{key:0,loading:e.cancelButtonLoading,class:d([e.cancelButtonClass]),round:e.roundButton,size:e.btnSize,onClick:n[3]||(n[3]=m=>e.handleAction("cancel")),onKeydown:n[4]||(n[4]=ce(le(m=>e.handleAction("cancel"),["prevent"]),["enter"]))},{default:S(()=>[Ce(U(e.cancelButtonText||e.t("el.messagebox.cancel")),1)]),_:1},8,["loading","class","round","size"])):D("v-if",!0),re($(l,{ref:"confirmRef",type:"primary",loading:e.confirmButtonLoading,class:d([e.confirmButtonClasses]),round:e.roundButton,disabled:e.confirmButtonDisabled,size:e.btnSize,onClick:n[5]||(n[5]=m=>e.handleAction("confirm")),onKeydown:n[6]||(n[6]=ce(le(m=>e.handleAction("confirm"),["prevent"]),["enter"]))},{default:S(()=>[Ce(U(e.confirmButtonText||e.t("el.messagebox.confirm")),1)]),_:1},8,["loading","class","round","disabled","size"]),[[ue,e.showConfirmButton]])],2)],6)]),_:3},8,["trapped","focus-trap-el","focus-start-el","onReleaseRequested"])],42,tt)]),_:3},8,["z-index","overlay-class","mask"]),[[ue,e.visible]])]),_:3})}var lt=Ae(nt,[["render",at],["__file","/home/runner/work/element-plus/element-plus/packages/components/message-box/src/index.vue"]]);const de=new Map,rt=e=>{let n=document.body;return e.appendTo&&(ye(e.appendTo)&&(n=document.querySelector(e.appendTo)),Te(e.appendTo)&&(n=e.appendTo),Te(n)||(n=document.body)),n},ut=(e,n,t=null)=>{const o=$(lt,e,ie(e.message)||be(e.message)?{default:ie(e.message)?e.message:()=>e.message}:null);return o.appContext=t,fe(o,n),rt(e).appendChild(n.firstElementChild),o.component},it=()=>document.createElement("div"),dt=(e,n)=>{const t=it();e.onVanish=()=>{fe(null,t),de.delete(s)},e.onAction=a=>{const u=de.get(s);let p;e.showInput?p={value:s.inputValue,action:a}:p=a,e.callback?e.callback(p,o.proxy):a==="cancel"||a==="close"?e.distinguishCancelAndClose&&a!=="cancel"?u.reject("close"):u.reject("cancel"):u.resolve(p)};const o=ut(e,t,n),s=o.proxy;for(const a in e)qe(e,a)&&!qe(s.$props,a)&&(s[a]=e[a]);return s.visible=!0,s};function ne(e,n=null){if(!Oe)return Promise.reject();let t;return ye(e)||be(e)?e={message:e}:t=e.callback,new Promise((o,s)=>{const a=dt(e,n??ne._context);de.set(a,{options:e,callback:t,resolve:o,reject:s})})}const ct=["alert","confirm","prompt"],mt={alert:{closeOnPressEscape:!1,closeOnClickModal:!1},confirm:{showCancelButton:!0},prompt:{showCancelButton:!0,showInput:!0}};ct.forEach(e=>{ne[e]=pt(e)});function pt(e){return(n,t,o,s)=>{let a="";return yn(t)?(o=t,a=""):vn(t)?a="":a=t,ne(Object.assign({title:a,message:n,type:"",...mt[e]},o,{boxType:e}),s)}}ne.close=()=>{de.forEach((e,n)=>{n.doClose()}),de.clear()};ne._context=null;const V=ne;V.install=e=>{V._context=e._context,e.config.globalProperties.$msgbox=V,e.config.globalProperties.$messageBox=V,e.config.globalProperties.$alert=V.alert,e.config.globalProperties.$confirm=V.confirm,e.config.globalProperties.$prompt=V.prompt};const ft=V;var h=(e=>(e[e.post=0]="post",e[e.put=1]="put",e[e.delete=2]="delete",e[e.export=3]="export",e))(h||{});const gt=(e,n,t)=>({prop:"operation",label:"操作",align:"center",...t,formatter(o){const s=Array.isArray(e)?e:e(o);return De(Ue,s.map(a=>De(Ie,{...a,key:a.command,onClick:u=>a.onClick?a.onClick(o,a,u):n(a.command,o,a.options)},{default:a.default??(()=>r(a.label))})))}});function yt(e){const{get:n,post:t,put:o,delete:s,export:a,columns:u=[],mode:p,pagination:y,queryColumns:l=[],formColumns:f=[],commands:b,commandColumn:m,queryState:K,align:Q="center"}=e;function F(k,X,Z){if(k===h.post||k===h.put){const te={};B.forEachColumns(c=>{var z,oe,$e;const T=r(c);B.patchColumn(c,{disabled:(z=T.disabledType)==null?void 0:z.includes(k)}),(oe=T.hiddenType)!=null&&oe.length&&(te[T.prop]=!(($e=T.hiddenType)!=null&&$e.includes(k)))}),!Cn(te)&&B.toggleColumn(te)}switch(k){case h.post:B.setModel(X??{},!0),B.show({title:"新增",...Z,onSubmit:()=>(v.posting=!0,B.submit(t).finally(()=>v.posting=!1))});break;case h.put:B.setModel(X??{},!0),B.show({title:"修改",...Z,onSubmit:()=>(v.puting=!0,B.submit(o).finally(()=>v.puting=!1))});break;case h.delete:ft({type:"warning",message:"确定删除所选的数据吗？",title:"确认删除",confirmButtonText:"确定",cancelButtonText:"取消",showCancelButton:!0,confirmButtonClass:"el-button--danger",...Z}).then(()=>(v.deleting=!0,s==null?void 0:s(X))).finally(()=>v.deleting=!1);break;case h.export:Promise.resolve().then(()=>(v.exporting=!0,a==null?void 0:a(X,r(A.model),r(H)))).finally(()=>v.exporting=!1);break}}const N=b?gt(b,F,m):null,{formState:A,...I}=kn({columns:l,initData:K}),{tableState:P,pagination:H,...q}=Sn({columns:N?u.concat(N):u,mode:p??bn.single,query:n?k=>n(r(A.model),k):void 0,pagination:y,mapColumn(){return{align:Q}}}),L=()=>I.submit(()=>q.handleQuery()),i=()=>I.setModel(K??{},!0),{formDialogState:G,...B}=Mn({columns:f,post:Fn}),v=He({querying:!1,posting:!1,puting:!1,deleting:!1,exporting:!1});return x(()=>P.pending,k=>v.querying=k,{immediate:!0}),{tableState:P,queryState:A,formDialogState:G,pagination:H,mixedState:v,query:L,resetQuery:i,command:F,queryOpera:I,tableOpera:q,formDialogOpera:B}}const wt={title:"Example/useLayout",tags:["autodocs"],argTypes:{get:{description:"查询接口"},post:{description:"新增接口"},put:{description:"修改接口"},delete:{description:"删除接口"},export:{description:"导出接口"},commands:{description:"操作项",defaultValue:{summary:"CommandItem[]"}},columns:{description:"列表展示项",defaultValue:{summary:"同useTable的columns"}},pagination:{description:"分页信息",defaultValue:{summary:"参考el-pagination"}},mode:{description:"单页/无限滚动",defaultValue:{summary:"LoadMode.single"}},queryColumns:{description:"查询条件项",defaultValue:{summary:"同useForm的columns"}},queryState:{description:"默认查询条件",defaultValue:{summary:"同useForm的initData"}},formColumns:{description:"弹窗条件项",defaultValue:{summary:"同useFormDialog的columns"}}},parameters:{docs:{description:{component:`提供基本的布局响应式状态
包括查询、新增、修改、删除、导出
不提供具体的页面布局组件`}}}},pe={args:{},render:()=>({components:{OneTable:En,ElPagination:Tn,OneFormDialog:hn,ElButton:Ie,OneForm:Bn},setup(){const{tableState:e,queryState:n,formDialogState:t,pagination:o,query:s,command:a,resetQuery:u}=yt({columns:[{label:"name",prop:"name"},{label:"age",prop:"age"},{label:"date",prop:"date",rFormat:wn.dateTime}],queryColumns:[{label:"name",prop:"name"},{label:"age",prop:"age",rType:"number"}],formColumns:[{label:"name",prop:"name",requiredMsg:"必填啊",disabledType:[h.put]},{label:"age",prop:"age",requiredMsg:"必填啊",rType:"number",min:0,hiddenType:[h.post]},{label:"date",prop:"date",rType:"date"}],get(l,f){return new Promise(b=>{setTimeout(()=>{const m=new Array(10).fill(0).map(()=>({date:new Date().toString(),name:`name-${f.currentPage}-${l.name??""}`,age:Math.random()}));b({list:m,total:100})},1e3)})},post(l){return new Promise(f=>{setTimeout(()=>{me.success("新增成功"),f()},1e3)})},put(l){return new Promise(f=>{setTimeout(()=>{me.success("修改成功"),f()},1e3)})},delete(l){return new Promise(f=>{setTimeout(()=>{me.success("删除成功"),f()},1e3)})},export(l,f){return new Promise(b=>{setTimeout(()=>{me.success("导出成功"),b()},1e3)})},commands:[{label:"编辑",command:h.put,options:{title:"来编辑"}},{label:"导出",command:h.export},{label:"删除",command:h.delete,link:!0,type:"danger",options:{title:"98765",type:"error"}}],queryState:{age:2}});return Me(s),{tableState:e,queryState:n,formDialogState:t,pagination:o,onAdd:()=>a(h.post),onExport:()=>a(h.export),query:s,resetQuery:u}},template:`
        <ElButton @click="onAdd">新增</ElButton>
        <ElButton @click="onExport">导出</ElButton>
        <OneForm v-bind="queryState" />
        <ElButton @click="query">查询</ElButton>
        <ElButton @click="resetQuery">重置</ElButton>
        <OneTable v-bind="tableState" height=300 />
        <ElPagination v-bind="pagination" />
        <OneFormDialog v-bind="formDialogState" />
      `})};var Re,Ne,Ve;pe.parameters={...pe.parameters,docs:{...(Re=pe.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  args: {},
  render: () => {
    return {
      components: {
        OneTable,
        ElPagination,
        OneFormDialog,
        ElButton,
        OneForm
      },
      setup() {
        type Row = {
          date: string;
          name: string;
          age: number;
        };
        const {
          tableState,
          queryState,
          formDialogState,
          pagination,
          query,
          command,
          resetQuery
        } = useLayout<Row>({
          columns: [{
            label: 'name',
            prop: 'name'
          }, {
            label: 'age',
            prop: 'age'
          }, {
            label: 'date',
            prop: 'date',
            rFormat: Format.dateTime
          }],
          queryColumns: [{
            label: 'name',
            prop: 'name'
          }, {
            label: 'age',
            prop: 'age',
            rType: 'number'
          }],
          formColumns: [{
            label: 'name',
            prop: 'name',
            requiredMsg: '必填啊',
            disabledType: [Commands.put]
          }, {
            label: 'age',
            prop: 'age',
            requiredMsg: '必填啊',
            rType: 'number',
            min: 0,
            hiddenType: [Commands.post]
          }, {
            label: 'date',
            prop: 'date',
            rType: 'date'
          }],
          get(query, pa) {
            return new Promise(r => {
              setTimeout(() => {
                const list = new Array(10).fill(0).map(() => ({
                  date: new Date().toString(),
                  name: \`name-\${pa.currentPage}-\${query.name ?? ''}\`,
                  age: Math.random()
                }));
                r({
                  list,
                  total: 100
                });
              }, 1000);
            });
          },
          post(_model) {
            return new Promise<void>(r => {
              setTimeout(() => {
                ElMessage.success('新增成功');
                r();
              }, 1000);
            });
          },
          put(_model) {
            return new Promise<void>(r => {
              setTimeout(() => {
                ElMessage.success('修改成功');
                r();
              }, 1000);
            });
          },
          delete(_model) {
            return new Promise<void>(r => {
              setTimeout(() => {
                ElMessage.success('删除成功');
                r();
              }, 1000);
            });
          },
          export(_model, _p) {
            return new Promise<void>(r => {
              setTimeout(() => {
                ElMessage.success('导出成功');
                r();
              }, 1000);
            });
          },
          commands: [{
            label: '编辑',
            command: Commands.put,
            options: {
              title: '来编辑'
            }
          }, {
            label: '导出',
            command: Commands.export
          }, {
            label: '删除',
            command: Commands.delete,
            link: true,
            type: 'danger',
            options: {
              title: '98765',
              type: 'error'
            }
          }],
          queryState: {
            age: 2
          }
        });
        onMounted(query);
        const onAdd = () => command(Commands.post);
        const onExport = () => command(Commands.export);
        return {
          tableState,
          queryState,
          formDialogState,
          pagination,
          onAdd,
          onExport,
          query,
          resetQuery
        };
      },
      template: \`
        <ElButton @click="onAdd">新增</ElButton>
        <ElButton @click="onExport">导出</ElButton>
        <OneForm v-bind="queryState" />
        <ElButton @click="query">查询</ElButton>
        <ElButton @click="resetQuery">重置</ElButton>
        <OneTable v-bind="tableState" height=300 />
        <ElPagination v-bind="pagination" />
        <OneFormDialog v-bind="formDialogState" />
      \`
    };
  }
}`,...(Ve=(Ne=pe.parameters)==null?void 0:Ne.docs)==null?void 0:Ve.source}}};const kt=["基础用例"];export{kt as __namedExportsOrder,wt as default,pe as 基础用例};
//# sourceMappingURL=UseLayout.stories-0daa3657.js.map
