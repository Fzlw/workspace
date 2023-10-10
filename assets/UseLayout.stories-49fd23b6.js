import{w as W,i as Xe,e as x,f as ge,g as E,j as g,k as J,a as A,l as T,m as ae,p as k,q as d,u,s as j,v as le,T as we,n as te,x as Ve,d as q,o as ke,y as S,z as Ce,A as I,B as oe,F as He,C as se,D as ye,E as me,r as Ze,G as Je,H as We,I as X,J as ie,b as be,h as $e}from"./vue.esm-bundler-2b92b106.js";import{c as Me,d as Z,u as Ye,p as xe,e as _e,i as Ee,f as Fe,w as en,g as Ue,h as nn,m as tn,j as Oe,k as je,T as pe,l as on,n as sn,o as he,q as Ke,r as an,s as fe,t as re,v as Be,x as ln,E as Ae,y as rn,z as un,A as dn,B as cn,C as De,D as mn,F as pn,G as fn,H as Pe,I as gn,J as yn,L as vn,_ as bn,b as Cn,a as En}from"./el-message-box-dfb8e93c.js";import{E as hn}from"./el-pagination-50d8ae56.js";import{u as Bn,F as Tn}from"./index-83833a79.js";import{u as Sn}from"./index-de164c88.js";import{u as wn}from"./index-e25dbc17.js";import"./_commonjsHelpers-725317a4.js";import"./cloneDeep-da0589d6.js";function kn(){}const Mn='a[href],button:not([disabled]),button:not([hidden]),:not([tabindex="-1"]),input:not([disabled]),input:not([type="hidden"]),select:not([disabled]),textarea:not([disabled])',Fn=e=>getComputedStyle(e).position==="fixed"?!1:e.offsetParent!==null,Le=e=>Array.from(e.querySelectorAll(Mn)).filter(n=>On(n)&&Fn(n)),On=e=>{if(e.tabIndex>0||e.tabIndex===0&&e.getAttribute("tabIndex")!==null)return!0;if(e.disabled)return!1;switch(e.nodeName){case"A":return!!e.href&&e.rel!=="ignore";case"INPUT":return!(e.type==="hidden"||e.type==="file");case"BUTTON":case"SELECT":case"TEXTAREA":return!0;default:return!1}},An=(e,n)=>{let t;W(()=>e.value,o=>{var s,a;o?(t=document.activeElement,Xe(n)&&((a=(s=n.value).focus)==null||a.call(s))):t.focus()})},In=Me({a11y:{type:Boolean,default:!0},locale:{type:Z(Object)},size:Ye,button:{type:Z(Object)},experimentalFeatures:{type:Z(Object)},keyboardNavigation:{type:Boolean,default:!0},message:{type:Z(Object)},zIndex:Number,namespace:{type:String,default:"el"}}),Te={};x({name:"ElConfigProvider",props:In,setup(e,{slots:n}){W(()=>e.message,o=>{Object.assign(Te,o??{})},{immediate:!0,deep:!0});const t=xe(e);return()=>ge(n,"default",{config:t==null?void 0:t.value})}});const $n=Me({value:{type:[String,Number],default:""},max:{type:Number,default:99},isDot:Boolean,hidden:Boolean,type:{type:String,values:["primary","success","warning","info","danger"],default:"danger"}}),Dn=["textContent"],Pn=x({name:"ElBadge"}),Ln=x({...Pn,props:$n,setup(e,{expose:n}){const t=e,o=_e("badge"),s=E(()=>t.isDot?"":Ee(t.value)&&Ee(t.max)?t.max<t.value?`${t.max}+`:`${t.value}`:`${t.value}`);return n({content:s}),(a,r)=>(g(),J("div",{class:d(u(o).b())},[ge(a.$slots,"default"),A(we,{name:`${u(o).namespace.value}-zoom-in-center`,persisted:""},{default:T(()=>[ae(k("sup",{class:d([u(o).e("content"),u(o).em("content",a.type),u(o).is("fixed",!!a.$slots.default),u(o).is("dot",a.isDot)]),textContent:j(u(s))},null,10,Dn),[[le,!a.hidden&&(u(s)||a.isDot)]])]),_:1},8,["name"])],2))}});var qn=Fe(Ln,[["__file","/home/runner/work/element-plus/element-plus/packages/components/badge/src/badge.vue"]]);const zn=en(qn),Se="_trap-focus-children",K=[],qe=e=>{if(K.length===0)return;const n=K[K.length-1][Se];if(n.length>0&&e.code===Ue.tab){if(n.length===1){e.preventDefault(),document.activeElement!==n[0]&&n[0].focus();return}const t=e.shiftKey,o=e.target===n[0],s=e.target===n[n.length-1];o&&t&&(e.preventDefault(),n[n.length-1].focus()),s&&!t&&(e.preventDefault(),n[0].focus())}},Rn={beforeMount(e){e[Se]=Le(e),K.push(e),K.length<=1&&document.addEventListener("keydown",qe)},updated(e){te(()=>{e[Se]=Le(e)})},unmounted(){K.shift(),K.length===0&&document.removeEventListener("keydown",qe)}},Qe=["success","info","warning","error"],C=tn({customClass:"",center:!1,dangerouslyUseHTMLString:!1,duration:3e3,icon:void 0,id:"",message:"",onClose:void 0,showClose:!1,type:"info",offset:16,zIndex:0,grouping:!1,repeatNum:1,appendTo:Oe?document.body:void 0}),Nn=Me({customClass:{type:String,default:C.customClass},center:{type:Boolean,default:C.center},dangerouslyUseHTMLString:{type:Boolean,default:C.dangerouslyUseHTMLString},duration:{type:Number,default:C.duration},icon:{type:nn,default:C.icon},id:{type:String,default:C.id},message:{type:Z([String,Object,Function]),default:C.message},onClose:{type:Z(Function),required:!1},showClose:{type:Boolean,default:C.showClose},type:{type:String,values:Qe,default:C.type},offset:{type:Number,default:C.offset},zIndex:{type:Number,default:C.zIndex},grouping:{type:Boolean,default:C.grouping},repeatNum:{type:Number,default:C.repeatNum}}),Vn={destroy:()=>!0},O=Ve([]),Hn=e=>{const n=O.findIndex(s=>s.id===e),t=O[n];let o;return n>0&&(o=O[n-1]),{current:t,prev:o}},Un=e=>{const{prev:n}=Hn(e);return n?n.vm.exposed.bottom.value:0},jn=(e,n)=>O.findIndex(o=>o.id===e)>0?20:n,Kn=["id"],Qn=["innerHTML"],Gn=x({name:"ElMessage"}),Xn=x({...Gn,props:Nn,emits:Vn,setup(e,{expose:n}){const t=e,{Close:o}=Ke,{ns:s,zIndex:a}=je("message"),{currentZIndex:r,nextZIndex:p}=a,y=q(),l=q(!1),f=q(0);let v;const m=E(()=>t.type?t.type==="error"?"danger":t.type:"info"),Q=E(()=>{const i=t.type;return{[s.bm("icon",i)]:i&&pe[i]}}),V=E(()=>t.icon||pe[t.type]||""),M=E(()=>Un(t.id)),$=E(()=>jn(t.id,t.offset)+M.value),F=E(()=>f.value+$.value),D=E(()=>({top:`${$.value}px`,zIndex:r.value}));function P(){t.duration!==0&&({stop:v}=an(()=>{z()},t.duration))}function H(){v==null||v()}function z(){l.value=!1}function L({code:i}){i===Ue.esc&&z()}return ke(()=>{P(),p(),l.value=!0}),W(()=>t.repeatNum,()=>{H(),P()}),on(document,"keydown",L),sn(y,()=>{f.value=y.value.getBoundingClientRect().height}),n({visible:l,bottom:F,close:z}),(i,b)=>(g(),S(we,{name:u(s).b("fade"),onBeforeLeave:i.onClose,onAfterLeave:b[0]||(b[0]=h=>i.$emit("destroy")),persisted:""},{default:T(()=>[ae(k("div",{id:i.id,ref_key:"messageRef",ref:y,class:d([u(s).b(),{[u(s).m(i.type)]:i.type&&!i.icon},u(s).is("center",i.center),u(s).is("closable",i.showClose),i.customClass]),style:Ce(u(D)),role:"alert",onMouseenter:H,onMouseleave:P},[i.repeatNum>1?(g(),S(u(zn),{key:0,value:i.repeatNum,type:u(m),class:d(u(s).e("badge"))},null,8,["value","type","class"])):I("v-if",!0),u(V)?(g(),S(u(he),{key:1,class:d([u(s).e("icon"),u(Q)])},{default:T(()=>[(g(),S(oe(u(V))))]),_:1},8,["class"])):I("v-if",!0),ge(i.$slots,"default",{},()=>[i.dangerouslyUseHTMLString?(g(),J(He,{key:1},[I(" Caution here, message could've been compromised, never use user's input as message "),k("p",{class:d(u(s).e("content")),innerHTML:i.message},null,10,Qn)],2112)):(g(),J("p",{key:0,class:d(u(s).e("content"))},j(i.message),3))]),i.showClose?(g(),S(u(he),{key:2,class:d(u(s).e("closeBtn")),onClick:se(z,["stop"])},{default:T(()=>[A(u(o))]),_:1},8,["class","onClick"])):I("v-if",!0)],46,Kn),[[le,l.value]])]),_:3},8,["name","onBeforeLeave"]))}});var Zn=Fe(Xn,[["__file","/home/runner/work/element-plus/element-plus/packages/components/message/src/message.vue"]]);let Jn=1;const Ge=e=>{const n=!e||fe(e)||ye(e)||re(e)?{message:e}:e,t={...C,...n};if(!t.appendTo)t.appendTo=document.body;else if(fe(t.appendTo)){let o=document.querySelector(t.appendTo);Be(o)||(o=document.body),t.appendTo=o}return t},Wn=e=>{const n=O.indexOf(e);if(n===-1)return;O.splice(n,1);const{handler:t}=e;t.close()},Yn=({appendTo:e,...n},t)=>{const o=`message_${Jn++}`,s=n.onClose,a=document.createElement("div"),r={...n,id:o,onClose:()=>{s==null||s(),Wn(f)},onDestroy:()=>{me(null,a)}},p=A(Zn,r,re(r.message)||ye(r.message)?{default:re(r.message)?r.message:()=>r.message}:null);p.appContext=t||Y._context,me(p,a),e.appendChild(a.firstElementChild);const y=p.component,f={id:o,vnode:p,vm:y,handler:{close:()=>{y.exposed.visible.value=!1}},props:p.component.props};return f},Y=(e={},n)=>{if(!Oe)return{close:()=>{}};if(Ee(Te.max)&&O.length>=Te.max)return{close:()=>{}};const t=Ge(e);if(t.grouping&&O.length){const s=O.find(({vnode:a})=>{var r;return((r=a.props)==null?void 0:r.message)===t.message});if(s)return s.props.repeatNum+=1,s.props.type=t.type,s.handler}const o=Yn(t,n);return O.push(o),o.handler};Qe.forEach(e=>{Y[e]=(n={},t)=>{const o=Ge(n);return Y({...o,type:e},t)}});function xn(e){for(const n of O)(!e||e===n.props.type)&&n.handler.close()}Y.closeAll=xn;Y._context=null;const de=ln(Y,"$message"),_n=x({name:"ElMessageBox",directives:{TrapFocus:Rn},components:{ElButton:Ae,ElFocusTrap:rn,ElInput:un,ElOverlay:dn,ElIcon:he,...Ke},inheritAttrs:!1,props:{buttonSize:{type:String,validator:cn},modal:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},showClose:{type:Boolean,default:!0},closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},closeOnHashChange:{type:Boolean,default:!0},center:Boolean,draggable:Boolean,roundButton:{default:!1,type:Boolean},container:{type:String,default:"body"},boxType:{type:String,default:""}},emits:["vanish","action"],setup(e,{emit:n}){const{locale:t,zIndex:o,ns:s,size:a}=je("message-box",E(()=>e.buttonSize)),{t:r}=t,{nextZIndex:p}=o,y=q(!1),l=Ze({autofocus:!0,beforeClose:null,callback:null,cancelButtonText:"",cancelButtonClass:"",confirmButtonText:"",confirmButtonClass:"",customClass:"",customStyle:{},dangerouslyUseHTMLString:!1,distinguishCancelAndClose:!1,icon:"",inputPattern:null,inputPlaceholder:"",inputType:"text",inputValue:null,inputValidator:null,inputErrorMessage:"",message:null,modalFade:!0,modalClass:"",showCancelButton:!1,showConfirmButton:!0,type:"",title:void 0,showInput:!1,action:"",confirmButtonLoading:!1,cancelButtonLoading:!1,confirmButtonDisabled:!1,editorErrorMessage:"",validateError:!1,zIndex:p()}),f=E(()=>{const c=l.type;return{[s.bm("icon",c)]:c&&pe[c]}}),v=De(),m=De(),Q=E(()=>l.icon||pe[l.type]||""),V=E(()=>!!l.message),M=q(),$=q(),F=q(),D=q(),P=q(),H=E(()=>l.confirmButtonClass);W(()=>l.inputValue,async c=>{await te(),e.boxType==="prompt"&&c!==null&&U()},{immediate:!0}),W(()=>y.value,c=>{var R,G;c&&(e.boxType!=="prompt"&&(l.autofocus?F.value=(G=(R=P.value)==null?void 0:R.$el)!=null?G:M.value:F.value=M.value),l.zIndex=p()),e.boxType==="prompt"&&(c?te().then(()=>{var Ie;D.value&&D.value.$el&&(l.autofocus?F.value=(Ie=ee())!=null?Ie:M.value:F.value=M.value)}):(l.editorErrorMessage="",l.validateError=!1))});const z=E(()=>e.draggable);mn(M,$,z),ke(async()=>{await te(),e.closeOnHashChange&&window.addEventListener("hashchange",L)}),Je(()=>{e.closeOnHashChange&&window.removeEventListener("hashchange",L)});function L(){y.value&&(y.value=!1,te(()=>{l.action&&n("action",l.action)}))}const i=()=>{e.closeOnClickModal&&B(l.distinguishCancelAndClose?"close":"cancel")},b=fn(i),h=c=>{if(l.inputType!=="textarea")return c.preventDefault(),B("confirm")},B=c=>{var R;e.boxType==="prompt"&&c==="confirm"&&!U()||(l.action=c,l.beforeClose?(R=l.beforeClose)==null||R.call(l,c,l,L):L())},U=()=>{if(e.boxType==="prompt"){const c=l.inputPattern;if(c&&!c.test(l.inputValue||""))return l.editorErrorMessage=l.inputErrorMessage||r("el.messagebox.error"),l.validateError=!0,!1;const R=l.inputValidator;if(typeof R=="function"){const G=R(l.inputValue);if(G===!1)return l.editorErrorMessage=l.inputErrorMessage||r("el.messagebox.error"),l.validateError=!0,!1;if(typeof G=="string")return l.editorErrorMessage=G,l.validateError=!0,!1}}return l.editorErrorMessage="",l.validateError=!1,!0},ee=()=>{const c=D.value.$refs;return c.input||c.textarea},ne=()=>{B("close")},ve=()=>{e.closeOnPressEscape&&ne()};return e.lockScroll&&pn(y),An(y),{...We(l),ns:s,overlayEvent:b,visible:y,hasMessage:V,typeClass:f,contentId:v,inputId:m,btnSize:a,iconComponent:Q,confirmButtonClasses:H,rootRef:M,focusStartRef:F,headerRef:$,inputRef:D,confirmRef:P,doClose:L,handleClose:ne,onCloseRequested:ve,handleWrapperClick:i,handleInputEnter:h,handleAction:B,t:r}}}),et=["aria-label","aria-describedby"],nt=["aria-label"],tt=["id"];function ot(e,n,t,o,s,a){const r=X("el-icon"),p=X("close"),y=X("el-input"),l=X("el-button"),f=X("el-focus-trap"),v=X("el-overlay");return g(),S(we,{name:"fade-in-linear",onAfterLeave:n[11]||(n[11]=m=>e.$emit("vanish")),persisted:""},{default:T(()=>[ae(A(v,{"z-index":e.zIndex,"overlay-class":[e.ns.is("message-box"),e.modalClass],mask:e.modal},{default:T(()=>[k("div",{role:"dialog","aria-label":e.title,"aria-modal":"true","aria-describedby":e.showInput?void 0:e.contentId,class:d(`${e.ns.namespace.value}-overlay-message-box`),onClick:n[8]||(n[8]=(...m)=>e.overlayEvent.onClick&&e.overlayEvent.onClick(...m)),onMousedown:n[9]||(n[9]=(...m)=>e.overlayEvent.onMousedown&&e.overlayEvent.onMousedown(...m)),onMouseup:n[10]||(n[10]=(...m)=>e.overlayEvent.onMouseup&&e.overlayEvent.onMouseup(...m))},[A(f,{loop:"",trapped:e.visible,"focus-trap-el":e.rootRef,"focus-start-el":e.focusStartRef,onReleaseRequested:e.onCloseRequested},{default:T(()=>[k("div",{ref:"rootRef",class:d([e.ns.b(),e.customClass,e.ns.is("draggable",e.draggable),{[e.ns.m("center")]:e.center}]),style:Ce(e.customStyle),tabindex:"-1",onClick:n[7]||(n[7]=se(()=>{},["stop"]))},[e.title!==null&&e.title!==void 0?(g(),J("div",{key:0,ref:"headerRef",class:d(e.ns.e("header"))},[k("div",{class:d(e.ns.e("title"))},[e.iconComponent&&e.center?(g(),S(r,{key:0,class:d([e.ns.e("status"),e.typeClass])},{default:T(()=>[(g(),S(oe(e.iconComponent)))]),_:1},8,["class"])):I("v-if",!0),k("span",null,j(e.title),1)],2),e.showClose?(g(),J("button",{key:0,type:"button",class:d(e.ns.e("headerbtn")),"aria-label":e.t("el.messagebox.close"),onClick:n[0]||(n[0]=m=>e.handleAction(e.distinguishCancelAndClose?"close":"cancel")),onKeydown:n[1]||(n[1]=ie(se(m=>e.handleAction(e.distinguishCancelAndClose?"close":"cancel"),["prevent"]),["enter"]))},[A(r,{class:d(e.ns.e("close"))},{default:T(()=>[A(p)]),_:1},8,["class"])],42,nt)):I("v-if",!0)],2)):I("v-if",!0),k("div",{id:e.contentId,class:d(e.ns.e("content"))},[k("div",{class:d(e.ns.e("container"))},[e.iconComponent&&!e.center&&e.hasMessage?(g(),S(r,{key:0,class:d([e.ns.e("status"),e.typeClass])},{default:T(()=>[(g(),S(oe(e.iconComponent)))]),_:1},8,["class"])):I("v-if",!0),e.hasMessage?(g(),J("div",{key:1,class:d(e.ns.e("message"))},[ge(e.$slots,"default",{},()=>[e.dangerouslyUseHTMLString?(g(),S(oe(e.showInput?"label":"p"),{key:1,for:e.showInput?e.inputId:void 0,innerHTML:e.message},null,8,["for","innerHTML"])):(g(),S(oe(e.showInput?"label":"p"),{key:0,for:e.showInput?e.inputId:void 0},{default:T(()=>[be(j(e.dangerouslyUseHTMLString?"":e.message),1)]),_:1},8,["for"]))])],2)):I("v-if",!0)],2),ae(k("div",{class:d(e.ns.e("input"))},[A(y,{id:e.inputId,ref:"inputRef",modelValue:e.inputValue,"onUpdate:modelValue":n[2]||(n[2]=m=>e.inputValue=m),type:e.inputType,placeholder:e.inputPlaceholder,"aria-invalid":e.validateError,class:d({invalid:e.validateError}),onKeydown:ie(e.handleInputEnter,["enter"])},null,8,["id","modelValue","type","placeholder","aria-invalid","class","onKeydown"]),k("div",{class:d(e.ns.e("errormsg")),style:Ce({visibility:e.editorErrorMessage?"visible":"hidden"})},j(e.editorErrorMessage),7)],2),[[le,e.showInput]])],10,tt),k("div",{class:d(e.ns.e("btns"))},[e.showCancelButton?(g(),S(l,{key:0,loading:e.cancelButtonLoading,class:d([e.cancelButtonClass]),round:e.roundButton,size:e.btnSize,onClick:n[3]||(n[3]=m=>e.handleAction("cancel")),onKeydown:n[4]||(n[4]=ie(se(m=>e.handleAction("cancel"),["prevent"]),["enter"]))},{default:T(()=>[be(j(e.cancelButtonText||e.t("el.messagebox.cancel")),1)]),_:1},8,["loading","class","round","size"])):I("v-if",!0),ae(A(l,{ref:"confirmRef",type:"primary",loading:e.confirmButtonLoading,class:d([e.confirmButtonClasses]),round:e.roundButton,disabled:e.confirmButtonDisabled,size:e.btnSize,onClick:n[5]||(n[5]=m=>e.handleAction("confirm")),onKeydown:n[6]||(n[6]=ie(se(m=>e.handleAction("confirm"),["prevent"]),["enter"]))},{default:T(()=>[be(j(e.confirmButtonText||e.t("el.messagebox.confirm")),1)]),_:1},8,["loading","class","round","disabled","size"]),[[le,e.showConfirmButton]])],2)],6)]),_:3},8,["trapped","focus-trap-el","focus-start-el","onReleaseRequested"])],42,et)]),_:3},8,["z-index","overlay-class","mask"]),[[le,e.visible]])]),_:3})}var st=Fe(_n,[["render",ot],["__file","/home/runner/work/element-plus/element-plus/packages/components/message-box/src/index.vue"]]);const ue=new Map,at=e=>{let n=document.body;return e.appendTo&&(fe(e.appendTo)&&(n=document.querySelector(e.appendTo)),Be(e.appendTo)&&(n=e.appendTo),Be(n)||(n=document.body)),n},lt=(e,n,t=null)=>{const o=A(st,e,re(e.message)||ye(e.message)?{default:re(e.message)?e.message:()=>e.message}:null);return o.appContext=t,me(o,n),at(e).appendChild(n.firstElementChild),o.component},rt=()=>document.createElement("div"),ut=(e,n)=>{const t=rt();e.onVanish=()=>{me(null,t),ue.delete(s)},e.onAction=a=>{const r=ue.get(s);let p;e.showInput?p={value:s.inputValue,action:a}:p=a,e.callback?e.callback(p,o.proxy):a==="cancel"||a==="close"?e.distinguishCancelAndClose&&a!=="cancel"?r.reject("close"):r.reject("cancel"):r.resolve(p)};const o=lt(e,t,n),s=o.proxy;for(const a in e)Pe(e,a)&&!Pe(s.$props,a)&&(s[a]=e[a]);return s.visible=!0,s};function _(e,n=null){if(!Oe)return Promise.reject();let t;return fe(e)||ye(e)?e={message:e}:t=e.callback,new Promise((o,s)=>{const a=ut(e,n??_._context);ue.set(a,{options:e,callback:t,resolve:o,reject:s})})}const it=["alert","confirm","prompt"],dt={alert:{closeOnPressEscape:!1,closeOnClickModal:!1},confirm:{showCancelButton:!0},prompt:{showCancelButton:!0,showInput:!0}};it.forEach(e=>{_[e]=ct(e)});function ct(e){return(n,t,o,s)=>{let a="";return gn(t)?(o=t,a=""):yn(t)?a="":a=t,_(Object.assign({title:a,message:n,type:"",...dt[e]},o,{boxType:e}),s)}}_.close=()=>{ue.forEach((e,n)=>{n.doClose()}),ue.clear()};_._context=null;const N=_;N.install=e=>{N._context=e._context,e.config.globalProperties.$msgbox=N,e.config.globalProperties.$messageBox=N,e.config.globalProperties.$alert=N.alert,e.config.globalProperties.$confirm=N.confirm,e.config.globalProperties.$prompt=N.prompt};const mt=N;var w=(e=>(e[e.post=0]="post",e[e.put=1]="put",e[e.delete=2]="delete",e[e.export=3]="export",e))(w||{});const pt=(e,n,t)=>({prop:"operation",label:"操作",align:"center",...t,formatter(o){const s=Array.isArray(e)?e:e(o);return $e(He,s.map(a=>$e(Ae,{...a,key:a.command,onClick:r=>a.onClick?a.onClick(o,a,r):n(a.command,o,a.options)},{default:a.default??(()=>a.label)})))}});function ft(e){const{get:n,post:t,put:o,delete:s,export:a,columns:r=[],mode:p,pagination:y,queryColumns:l=[],formColumns:f=[],commands:v,commandColumn:m,queryState:Q}=e;function V(B,U,ee){switch((B===w.post||B===w.put)&&b.forEachColumns(ne=>{var c;const ve=ne;b.patchColumn(ne,{disabled:(c=ve.disabledType)==null?void 0:c.includes(B)})}),B){case w.post:b.setModel(U??{},!0),b.show({title:"新增",...ee,onSubmit:()=>(h.posting=!0,b.submit(t).finally(()=>h.posting=!1))});break;case w.put:b.setModel(U??{},!0),b.show({title:"修改",...ee,onSubmit:()=>(h.puting=!0,b.submit(o).finally(()=>h.puting=!1))});break;case w.delete:mt({type:"warning",message:"确定删除所选的数据吗？",title:"确认删除",confirmButtonText:"确定",cancelButtonText:"取消",showCancelButton:!0,confirmButtonClass:"el-button--danger",...ee}).then(()=>(h.deleting=!0,s==null?void 0:s(U))).finally(()=>h.deleting=!1);break;case w.export:Promise.resolve().then(()=>(h.exporting=!0,a==null?void 0:a(U,u($.model),u(P)))).finally(()=>h.exporting=!1);break}}const M=v?pt(v,V,m):null,{formState:$,...F}=Sn({columns:l,initData:Q}),{tableState:D,pagination:P,...H}=Bn({columns:M?r.concat(M):r,mode:p??vn.single,query:n?B=>n(u($.model),B):void 0,pagination:y,mapColumn(){return{align:"center"}}}),z=()=>F.submit(()=>H.handleQuery()),L=()=>F.setModel(Q??{},!0),{formDialogState:i,...b}=wn({columns:f,post:kn}),h=Ve({querying:!1,posting:!1,puting:!1,deleting:!1,exporting:!1});return W(()=>D.pending,B=>h.querying=B,{immediate:!0}),{tableState:D,queryState:$,formDialogState:i,pagination:P,mixedState:h,query:z,resetQuery:L,command:V,queryOpera:F,tableOpera:H,formDialogOpera:b}}const Tt={title:"Example/useLayout",tags:["autodocs"],argTypes:{get:{description:"查询接口"},post:{description:"新增接口"},put:{description:"修改接口"},delete:{description:"删除接口"},export:{description:"导出接口"},commands:{description:"操作项",defaultValue:{summary:"CommandItem[]"}},columns:{description:"列表展示项",defaultValue:{summary:"同useTable的columns"}},pagination:{description:"分页信息",defaultValue:{summary:"参考el-pagination"}},mode:{description:"单页/无限滚动",defaultValue:{summary:"LoadMode.single"}},queryColumns:{description:"查询条件项",defaultValue:{summary:"同useForm的columns"}},queryState:{description:"默认查询条件",defaultValue:{summary:"同useForm的initData"}},formColumns:{description:"弹窗条件项",defaultValue:{summary:"同useFormDialog的columns"}}},parameters:{docs:{description:{component:`提供基本的布局响应式状态
包括查询、新增、修改、删除、导出
不提供具体的页面布局组件`}}}},ce={args:{},render:()=>({components:{OneTable:bn,ElPagination:hn,OneFormDialog:Cn,ElButton:Ae,OneForm:En},setup(){const{tableState:e,queryState:n,formDialogState:t,pagination:o,query:s,command:a,resetQuery:r}=ft({columns:[{label:"name",prop:"name"},{label:"age",prop:"age"},{label:"date",prop:"date",rFormat:Tn.dateTime}],queryColumns:[{label:"name",prop:"name"},{label:"age",prop:"age",rType:"number"}],formColumns:[{label:"name",prop:"name",requiredMsg:"必填啊",disabledType:[w.put]},{label:"age",prop:"age",rType:"number",min:0},{label:"date",prop:"date",rType:"date"}],get(l,f){return new Promise(v=>{setTimeout(()=>{const m=new Array(10).fill(0).map(()=>({date:new Date().toString(),name:`name-${f.currentPage}-${l.name??""}`,age:Math.random()}));v({list:m,total:100})},1e3)})},post(l){return new Promise(f=>{setTimeout(()=>{de.success("新增成功"),f()},1e3)})},put(l){return new Promise(f=>{setTimeout(()=>{de.success("修改成功"),f()},1e3)})},delete(l){return new Promise(f=>{setTimeout(()=>{de.success("删除成功"),f()},1e3)})},export(l,f){return new Promise(v=>{setTimeout(()=>{de.success("导出成功"),v()},1e3)})},commands:[{label:"编辑",command:w.put,options:{title:"来编辑"}},{label:"导出",command:w.export},{label:"删除",command:w.delete,link:!0,type:"danger",options:{title:"98765",type:"error"}}],queryState:{age:2}});return ke(s),{tableState:e,queryState:n,formDialogState:t,pagination:o,onAdd:()=>a(w.post),onExport:()=>a(w.export),query:s,resetQuery:r}},template:`
        <ElButton @click="onAdd">新增</ElButton>
        <ElButton @click="onExport">导出</ElButton>
        <OneForm v-bind="queryState" />
        <ElButton @click="query">查询</ElButton>
        <ElButton @click="resetQuery">重置</ElButton>
        <OneTable v-bind="tableState" height=300 />
        <ElPagination v-bind="pagination" />
        <OneFormDialog v-bind="formDialogState" />
      `})};var ze,Re,Ne;ce.parameters={...ce.parameters,docs:{...(ze=ce.parameters)==null?void 0:ze.docs,source:{originalSource:`{
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
            rType: 'number',
            min: 0
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
}`,...(Ne=(Re=ce.parameters)==null?void 0:Re.docs)==null?void 0:Ne.source}}};const St=["基础用例"];export{St as __namedExportsOrder,Tt as default,ce as 基础用例};
//# sourceMappingURL=UseLayout.stories-49fd23b6.js.map
