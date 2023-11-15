import{w as x,i as Xe,e as ee,f as ye,g as E,j as g,k as Y,a as $,l as h,m as ae,p as w,q as d,u,s as H,v as le,T as we,n as te,x as Ve,d as z,o as ke,y as B,z as Ce,A as D,B as oe,F as He,C as se,D as ve,E as pe,r as Ze,G as Je,H as We,I as J,J as de,b as be,h as $e}from"./vue.esm-bundler-2b92b106.js";import{c as Me,d as W,u as Ye,p as xe,e as _e,i as Ee,f as Fe,w as en,g as Ue,h as nn,m as tn,j as Oe,k as je,T as fe,l as on,n as sn,o as he,q as Ke,r as an,s as ge,t as re,v as Be,x as ln,E as Ae,y as rn,z as un,A as dn,B as cn,C as De,D as mn,F as pn,G as fn,H as Pe,I as gn,J as yn,L as vn,_ as bn,b as Cn,a as En}from"./el-message-box-442f4f74.js";import{E as hn}from"./el-pagination-5d4dee8e.js";import{u as Bn,F as Tn}from"./index-b5f4c8aa.js";import{u as Sn}from"./index-ffcd473e.js";import{u as wn}from"./index-8b917091.js";import"./_commonjsHelpers-725317a4.js";import"./cloneDeep-cb4525b6.js";function kn(){}const Mn='a[href],button:not([disabled]),button:not([hidden]),:not([tabindex="-1"]),input:not([disabled]),input:not([type="hidden"]),select:not([disabled]),textarea:not([disabled])',Fn=e=>getComputedStyle(e).position==="fixed"?!1:e.offsetParent!==null,Le=e=>Array.from(e.querySelectorAll(Mn)).filter(n=>On(n)&&Fn(n)),On=e=>{if(e.tabIndex>0||e.tabIndex===0&&e.getAttribute("tabIndex")!==null)return!0;if(e.disabled)return!1;switch(e.nodeName){case"A":return!!e.href&&e.rel!=="ignore";case"INPUT":return!(e.type==="hidden"||e.type==="file");case"BUTTON":case"SELECT":case"TEXTAREA":return!0;default:return!1}},An=(e,n)=>{let t;x(()=>e.value,o=>{var s,a;o?(t=document.activeElement,Xe(n)&&((a=(s=n.value).focus)==null||a.call(s))):t.focus()})},In=Me({a11y:{type:Boolean,default:!0},locale:{type:W(Object)},size:Ye,button:{type:W(Object)},experimentalFeatures:{type:W(Object)},keyboardNavigation:{type:Boolean,default:!0},message:{type:W(Object)},zIndex:Number,namespace:{type:String,default:"el"}}),Te={};ee({name:"ElConfigProvider",props:In,setup(e,{slots:n}){x(()=>e.message,o=>{Object.assign(Te,o??{})},{immediate:!0,deep:!0});const t=xe(e);return()=>ye(n,"default",{config:t==null?void 0:t.value})}});const $n=Me({value:{type:[String,Number],default:""},max:{type:Number,default:99},isDot:Boolean,hidden:Boolean,type:{type:String,values:["primary","success","warning","info","danger"],default:"danger"}}),Dn=["textContent"],Pn=ee({name:"ElBadge"}),Ln=ee({...Pn,props:$n,setup(e,{expose:n}){const t=e,o=_e("badge"),s=E(()=>t.isDot?"":Ee(t.value)&&Ee(t.max)?t.max<t.value?`${t.max}+`:`${t.value}`:`${t.value}`);return n({content:s}),(a,r)=>(g(),Y("div",{class:d(u(o).b())},[ye(a.$slots,"default"),$(we,{name:`${u(o).namespace.value}-zoom-in-center`,persisted:""},{default:h(()=>[ae(w("sup",{class:d([u(o).e("content"),u(o).em("content",a.type),u(o).is("fixed",!!a.$slots.default),u(o).is("dot",a.isDot)]),textContent:H(u(s))},null,10,Dn),[[le,!a.hidden&&(u(s)||a.isDot)]])]),_:1},8,["name"])],2))}});var qn=Fe(Ln,[["__file","/home/runner/work/element-plus/element-plus/packages/components/badge/src/badge.vue"]]);const zn=en(qn),Se="_trap-focus-children",U=[],qe=e=>{if(U.length===0)return;const n=U[U.length-1][Se];if(n.length>0&&e.code===Ue.tab){if(n.length===1){e.preventDefault(),document.activeElement!==n[0]&&n[0].focus();return}const t=e.shiftKey,o=e.target===n[0],s=e.target===n[n.length-1];o&&t&&(e.preventDefault(),n[n.length-1].focus()),s&&!t&&(e.preventDefault(),n[0].focus())}},Rn={beforeMount(e){e[Se]=Le(e),U.push(e),U.length<=1&&document.addEventListener("keydown",qe)},updated(e){te(()=>{e[Se]=Le(e)})},unmounted(){U.shift(),U.length===0&&document.removeEventListener("keydown",qe)}},Qe=["success","info","warning","error"],C=tn({customClass:"",center:!1,dangerouslyUseHTMLString:!1,duration:3e3,icon:void 0,id:"",message:"",onClose:void 0,showClose:!1,type:"info",offset:16,zIndex:0,grouping:!1,repeatNum:1,appendTo:Oe?document.body:void 0}),Nn=Me({customClass:{type:String,default:C.customClass},center:{type:Boolean,default:C.center},dangerouslyUseHTMLString:{type:Boolean,default:C.dangerouslyUseHTMLString},duration:{type:Number,default:C.duration},icon:{type:nn,default:C.icon},id:{type:String,default:C.id},message:{type:W([String,Object,Function]),default:C.message},onClose:{type:W(Function),required:!1},showClose:{type:Boolean,default:C.showClose},type:{type:String,values:Qe,default:C.type},offset:{type:Number,default:C.offset},zIndex:{type:Number,default:C.zIndex},grouping:{type:Boolean,default:C.grouping},repeatNum:{type:Number,default:C.repeatNum}}),Vn={destroy:()=>!0},A=Ve([]),Hn=e=>{const n=A.findIndex(s=>s.id===e),t=A[n];let o;return n>0&&(o=A[n-1]),{current:t,prev:o}},Un=e=>{const{prev:n}=Hn(e);return n?n.vm.exposed.bottom.value:0},jn=(e,n)=>A.findIndex(o=>o.id===e)>0?20:n,Kn=["id"],Qn=["innerHTML"],Gn=ee({name:"ElMessage"}),Xn=ee({...Gn,props:Nn,emits:Vn,setup(e,{expose:n}){const t=e,{Close:o}=Ke,{ns:s,zIndex:a}=je("message"),{currentZIndex:r,nextZIndex:p}=a,y=z(),l=z(!1),f=z(0);let b;const c=E(()=>t.type?t.type==="error"?"danger":t.type:"info"),j=E(()=>{const i=t.type;return{[s.bm("icon",i)]:i&&fe[i]}}),K=E(()=>t.icon||fe[t.type]||""),k=E(()=>Un(t.id)),R=E(()=>jn(t.id,t.offset)+k.value),M=E(()=>f.value+R.value),I=E(()=>({top:`${R.value}px`,zIndex:r.value}));function P(){t.duration!==0&&({stop:b}=an(()=>{L()},t.duration))}function V(){b==null||b()}function L(){l.value=!1}function q({code:i}){i===Ue.esc&&L()}return ke(()=>{P(),p(),l.value=!0}),x(()=>t.repeatNum,()=>{V(),P()}),on(document,"keydown",q),sn(y,()=>{f.value=y.value.getBoundingClientRect().height}),n({visible:l,bottom:M,close:L}),(i,Q)=>(g(),B(we,{name:u(s).b("fade"),onBeforeLeave:i.onClose,onAfterLeave:Q[0]||(Q[0]=S=>i.$emit("destroy")),persisted:""},{default:h(()=>[ae(w("div",{id:i.id,ref_key:"messageRef",ref:y,class:d([u(s).b(),{[u(s).m(i.type)]:i.type&&!i.icon},u(s).is("center",i.center),u(s).is("closable",i.showClose),i.customClass]),style:Ce(u(I)),role:"alert",onMouseenter:V,onMouseleave:P},[i.repeatNum>1?(g(),B(u(zn),{key:0,value:i.repeatNum,type:u(c),class:d(u(s).e("badge"))},null,8,["value","type","class"])):D("v-if",!0),u(K)?(g(),B(u(he),{key:1,class:d([u(s).e("icon"),u(j)])},{default:h(()=>[(g(),B(oe(u(K))))]),_:1},8,["class"])):D("v-if",!0),ye(i.$slots,"default",{},()=>[i.dangerouslyUseHTMLString?(g(),Y(He,{key:1},[D(" Caution here, message could've been compromised, never use user's input as message "),w("p",{class:d(u(s).e("content")),innerHTML:i.message},null,10,Qn)],2112)):(g(),Y("p",{key:0,class:d(u(s).e("content"))},H(i.message),3))]),i.showClose?(g(),B(u(he),{key:2,class:d(u(s).e("closeBtn")),onClick:se(L,["stop"])},{default:h(()=>[$(u(o))]),_:1},8,["class","onClick"])):D("v-if",!0)],46,Kn),[[le,l.value]])]),_:3},8,["name","onBeforeLeave"]))}});var Zn=Fe(Xn,[["__file","/home/runner/work/element-plus/element-plus/packages/components/message/src/message.vue"]]);let Jn=1;const Ge=e=>{const n=!e||ge(e)||ve(e)||re(e)?{message:e}:e,t={...C,...n};if(!t.appendTo)t.appendTo=document.body;else if(ge(t.appendTo)){let o=document.querySelector(t.appendTo);Be(o)||(o=document.body),t.appendTo=o}return t},Wn=e=>{const n=A.indexOf(e);if(n===-1)return;A.splice(n,1);const{handler:t}=e;t.close()},Yn=({appendTo:e,...n},t)=>{const o=`message_${Jn++}`,s=n.onClose,a=document.createElement("div"),r={...n,id:o,onClose:()=>{s==null||s(),Wn(f)},onDestroy:()=>{pe(null,a)}},p=$(Zn,r,re(r.message)||ve(r.message)?{default:re(r.message)?r.message:()=>r.message}:null);p.appContext=t||_._context,pe(p,a),e.appendChild(a.firstElementChild);const y=p.component,f={id:o,vnode:p,vm:y,handler:{close:()=>{y.exposed.visible.value=!1}},props:p.component.props};return f},_=(e={},n)=>{if(!Oe)return{close:()=>{}};if(Ee(Te.max)&&A.length>=Te.max)return{close:()=>{}};const t=Ge(e);if(t.grouping&&A.length){const s=A.find(({vnode:a})=>{var r;return((r=a.props)==null?void 0:r.message)===t.message});if(s)return s.props.repeatNum+=1,s.props.type=t.type,s.handler}const o=Yn(t,n);return A.push(o),o.handler};Qe.forEach(e=>{_[e]=(n={},t)=>{const o=Ge(n);return _({...o,type:e},t)}});function xn(e){for(const n of A)(!e||e===n.props.type)&&n.handler.close()}_.closeAll=xn;_._context=null;const ce=ln(_,"$message"),_n=ee({name:"ElMessageBox",directives:{TrapFocus:Rn},components:{ElButton:Ae,ElFocusTrap:rn,ElInput:un,ElOverlay:dn,ElIcon:he,...Ke},inheritAttrs:!1,props:{buttonSize:{type:String,validator:cn},modal:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},showClose:{type:Boolean,default:!0},closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},closeOnHashChange:{type:Boolean,default:!0},center:Boolean,draggable:Boolean,roundButton:{default:!1,type:Boolean},container:{type:String,default:"body"},boxType:{type:String,default:""}},emits:["vanish","action"],setup(e,{emit:n}){const{locale:t,zIndex:o,ns:s,size:a}=je("message-box",E(()=>e.buttonSize)),{t:r}=t,{nextZIndex:p}=o,y=z(!1),l=Ze({autofocus:!0,beforeClose:null,callback:null,cancelButtonText:"",cancelButtonClass:"",confirmButtonText:"",confirmButtonClass:"",customClass:"",customStyle:{},dangerouslyUseHTMLString:!1,distinguishCancelAndClose:!1,icon:"",inputPattern:null,inputPlaceholder:"",inputType:"text",inputValue:null,inputValidator:null,inputErrorMessage:"",message:null,modalFade:!0,modalClass:"",showCancelButton:!1,showConfirmButton:!0,type:"",title:void 0,showInput:!1,action:"",confirmButtonLoading:!1,cancelButtonLoading:!1,confirmButtonDisabled:!1,editorErrorMessage:"",validateError:!1,zIndex:p()}),f=E(()=>{const m=l.type;return{[s.bm("icon",m)]:m&&fe[m]}}),b=De(),c=De(),j=E(()=>l.icon||fe[l.type]||""),K=E(()=>!!l.message),k=z(),R=z(),M=z(),I=z(),P=z(),V=E(()=>l.confirmButtonClass);x(()=>l.inputValue,async m=>{await te(),e.boxType==="prompt"&&m!==null&&F()},{immediate:!0}),x(()=>y.value,m=>{var O,Z;m&&(e.boxType!=="prompt"&&(l.autofocus?M.value=(Z=(O=P.value)==null?void 0:O.$el)!=null?Z:k.value:M.value=k.value),l.zIndex=p()),e.boxType==="prompt"&&(m?te().then(()=>{var Ie;I.value&&I.value.$el&&(l.autofocus?M.value=(Ie=G())!=null?Ie:k.value:M.value=k.value)}):(l.editorErrorMessage="",l.validateError=!1))});const L=E(()=>e.draggable);mn(k,R,L),ke(async()=>{await te(),e.closeOnHashChange&&window.addEventListener("hashchange",q)}),Je(()=>{e.closeOnHashChange&&window.removeEventListener("hashchange",q)});function q(){y.value&&(y.value=!1,te(()=>{l.action&&n("action",l.action)}))}const i=()=>{e.closeOnClickModal&&v(l.distinguishCancelAndClose?"close":"cancel")},Q=fn(i),S=m=>{if(l.inputType!=="textarea")return m.preventDefault(),v("confirm")},v=m=>{var O;e.boxType==="prompt"&&m==="confirm"&&!F()||(l.action=m,l.beforeClose?(O=l.beforeClose)==null||O.call(l,m,l,q):q())},F=()=>{if(e.boxType==="prompt"){const m=l.inputPattern;if(m&&!m.test(l.inputValue||""))return l.editorErrorMessage=l.inputErrorMessage||r("el.messagebox.error"),l.validateError=!0,!1;const O=l.inputValidator;if(typeof O=="function"){const Z=O(l.inputValue);if(Z===!1)return l.editorErrorMessage=l.inputErrorMessage||r("el.messagebox.error"),l.validateError=!0,!1;if(typeof Z=="string")return l.editorErrorMessage=Z,l.validateError=!0,!1}}return l.editorErrorMessage="",l.validateError=!1,!0},G=()=>{const m=I.value.$refs;return m.input||m.textarea},X=()=>{v("close")},ie=()=>{e.closeOnPressEscape&&X()};return e.lockScroll&&pn(y),An(y),{...We(l),ns:s,overlayEvent:Q,visible:y,hasMessage:K,typeClass:f,contentId:b,inputId:c,btnSize:a,iconComponent:j,confirmButtonClasses:V,rootRef:k,focusStartRef:M,headerRef:R,inputRef:I,confirmRef:P,doClose:q,handleClose:X,onCloseRequested:ie,handleWrapperClick:i,handleInputEnter:S,handleAction:v,t:r}}}),et=["aria-label","aria-describedby"],nt=["aria-label"],tt=["id"];function ot(e,n,t,o,s,a){const r=J("el-icon"),p=J("close"),y=J("el-input"),l=J("el-button"),f=J("el-focus-trap"),b=J("el-overlay");return g(),B(we,{name:"fade-in-linear",onAfterLeave:n[11]||(n[11]=c=>e.$emit("vanish")),persisted:""},{default:h(()=>[ae($(b,{"z-index":e.zIndex,"overlay-class":[e.ns.is("message-box"),e.modalClass],mask:e.modal},{default:h(()=>[w("div",{role:"dialog","aria-label":e.title,"aria-modal":"true","aria-describedby":e.showInput?void 0:e.contentId,class:d(`${e.ns.namespace.value}-overlay-message-box`),onClick:n[8]||(n[8]=(...c)=>e.overlayEvent.onClick&&e.overlayEvent.onClick(...c)),onMousedown:n[9]||(n[9]=(...c)=>e.overlayEvent.onMousedown&&e.overlayEvent.onMousedown(...c)),onMouseup:n[10]||(n[10]=(...c)=>e.overlayEvent.onMouseup&&e.overlayEvent.onMouseup(...c))},[$(f,{loop:"",trapped:e.visible,"focus-trap-el":e.rootRef,"focus-start-el":e.focusStartRef,onReleaseRequested:e.onCloseRequested},{default:h(()=>[w("div",{ref:"rootRef",class:d([e.ns.b(),e.customClass,e.ns.is("draggable",e.draggable),{[e.ns.m("center")]:e.center}]),style:Ce(e.customStyle),tabindex:"-1",onClick:n[7]||(n[7]=se(()=>{},["stop"]))},[e.title!==null&&e.title!==void 0?(g(),Y("div",{key:0,ref:"headerRef",class:d(e.ns.e("header"))},[w("div",{class:d(e.ns.e("title"))},[e.iconComponent&&e.center?(g(),B(r,{key:0,class:d([e.ns.e("status"),e.typeClass])},{default:h(()=>[(g(),B(oe(e.iconComponent)))]),_:1},8,["class"])):D("v-if",!0),w("span",null,H(e.title),1)],2),e.showClose?(g(),Y("button",{key:0,type:"button",class:d(e.ns.e("headerbtn")),"aria-label":e.t("el.messagebox.close"),onClick:n[0]||(n[0]=c=>e.handleAction(e.distinguishCancelAndClose?"close":"cancel")),onKeydown:n[1]||(n[1]=de(se(c=>e.handleAction(e.distinguishCancelAndClose?"close":"cancel"),["prevent"]),["enter"]))},[$(r,{class:d(e.ns.e("close"))},{default:h(()=>[$(p)]),_:1},8,["class"])],42,nt)):D("v-if",!0)],2)):D("v-if",!0),w("div",{id:e.contentId,class:d(e.ns.e("content"))},[w("div",{class:d(e.ns.e("container"))},[e.iconComponent&&!e.center&&e.hasMessage?(g(),B(r,{key:0,class:d([e.ns.e("status"),e.typeClass])},{default:h(()=>[(g(),B(oe(e.iconComponent)))]),_:1},8,["class"])):D("v-if",!0),e.hasMessage?(g(),Y("div",{key:1,class:d(e.ns.e("message"))},[ye(e.$slots,"default",{},()=>[e.dangerouslyUseHTMLString?(g(),B(oe(e.showInput?"label":"p"),{key:1,for:e.showInput?e.inputId:void 0,innerHTML:e.message},null,8,["for","innerHTML"])):(g(),B(oe(e.showInput?"label":"p"),{key:0,for:e.showInput?e.inputId:void 0},{default:h(()=>[be(H(e.dangerouslyUseHTMLString?"":e.message),1)]),_:1},8,["for"]))])],2)):D("v-if",!0)],2),ae(w("div",{class:d(e.ns.e("input"))},[$(y,{id:e.inputId,ref:"inputRef",modelValue:e.inputValue,"onUpdate:modelValue":n[2]||(n[2]=c=>e.inputValue=c),type:e.inputType,placeholder:e.inputPlaceholder,"aria-invalid":e.validateError,class:d({invalid:e.validateError}),onKeydown:de(e.handleInputEnter,["enter"])},null,8,["id","modelValue","type","placeholder","aria-invalid","class","onKeydown"]),w("div",{class:d(e.ns.e("errormsg")),style:Ce({visibility:e.editorErrorMessage?"visible":"hidden"})},H(e.editorErrorMessage),7)],2),[[le,e.showInput]])],10,tt),w("div",{class:d(e.ns.e("btns"))},[e.showCancelButton?(g(),B(l,{key:0,loading:e.cancelButtonLoading,class:d([e.cancelButtonClass]),round:e.roundButton,size:e.btnSize,onClick:n[3]||(n[3]=c=>e.handleAction("cancel")),onKeydown:n[4]||(n[4]=de(se(c=>e.handleAction("cancel"),["prevent"]),["enter"]))},{default:h(()=>[be(H(e.cancelButtonText||e.t("el.messagebox.cancel")),1)]),_:1},8,["loading","class","round","size"])):D("v-if",!0),ae($(l,{ref:"confirmRef",type:"primary",loading:e.confirmButtonLoading,class:d([e.confirmButtonClasses]),round:e.roundButton,disabled:e.confirmButtonDisabled,size:e.btnSize,onClick:n[5]||(n[5]=c=>e.handleAction("confirm")),onKeydown:n[6]||(n[6]=de(se(c=>e.handleAction("confirm"),["prevent"]),["enter"]))},{default:h(()=>[be(H(e.confirmButtonText||e.t("el.messagebox.confirm")),1)]),_:1},8,["loading","class","round","disabled","size"]),[[le,e.showConfirmButton]])],2)],6)]),_:3},8,["trapped","focus-trap-el","focus-start-el","onReleaseRequested"])],42,et)]),_:3},8,["z-index","overlay-class","mask"]),[[le,e.visible]])]),_:3})}var st=Fe(_n,[["render",ot],["__file","/home/runner/work/element-plus/element-plus/packages/components/message-box/src/index.vue"]]);const ue=new Map,at=e=>{let n=document.body;return e.appendTo&&(ge(e.appendTo)&&(n=document.querySelector(e.appendTo)),Be(e.appendTo)&&(n=e.appendTo),Be(n)||(n=document.body)),n},lt=(e,n,t=null)=>{const o=$(st,e,re(e.message)||ve(e.message)?{default:re(e.message)?e.message:()=>e.message}:null);return o.appContext=t,pe(o,n),at(e).appendChild(n.firstElementChild),o.component},rt=()=>document.createElement("div"),ut=(e,n)=>{const t=rt();e.onVanish=()=>{pe(null,t),ue.delete(s)},e.onAction=a=>{const r=ue.get(s);let p;e.showInput?p={value:s.inputValue,action:a}:p=a,e.callback?e.callback(p,o.proxy):a==="cancel"||a==="close"?e.distinguishCancelAndClose&&a!=="cancel"?r.reject("close"):r.reject("cancel"):r.resolve(p)};const o=lt(e,t,n),s=o.proxy;for(const a in e)Pe(e,a)&&!Pe(s.$props,a)&&(s[a]=e[a]);return s.visible=!0,s};function ne(e,n=null){if(!Oe)return Promise.reject();let t;return ge(e)||ve(e)?e={message:e}:t=e.callback,new Promise((o,s)=>{const a=ut(e,n??ne._context);ue.set(a,{options:e,callback:t,resolve:o,reject:s})})}const it=["alert","confirm","prompt"],dt={alert:{closeOnPressEscape:!1,closeOnClickModal:!1},confirm:{showCancelButton:!0},prompt:{showCancelButton:!0,showInput:!0}};it.forEach(e=>{ne[e]=ct(e)});function ct(e){return(n,t,o,s)=>{let a="";return gn(t)?(o=t,a=""):yn(t)?a="":a=t,ne(Object.assign({title:a,message:n,type:"",...dt[e]},o,{boxType:e}),s)}}ne.close=()=>{ue.forEach((e,n)=>{n.doClose()}),ue.clear()};ne._context=null;const N=ne;N.install=e=>{N._context=e._context,e.config.globalProperties.$msgbox=N,e.config.globalProperties.$messageBox=N,e.config.globalProperties.$alert=N.alert,e.config.globalProperties.$confirm=N.confirm,e.config.globalProperties.$prompt=N.prompt};const mt=N;var T=(e=>(e[e.post=0]="post",e[e.put=1]="put",e[e.delete=2]="delete",e[e.export=3]="export",e))(T||{});const pt=(e,n,t)=>({prop:"operation",label:"操作",align:"center",...t,formatter(o){const s=Array.isArray(e)?e:e(o);return $e(He,s.map(a=>$e(Ae,{...a,key:a.command,onClick:r=>a.onClick?a.onClick(o,a,r):n(a.command,o,a.options)},{default:a.default??(()=>u(a.label))})))}});function ft(e){const{get:n,post:t,put:o,delete:s,export:a,columns:r=[],mode:p,pagination:y,queryColumns:l=[],formColumns:f=[],commands:b,commandColumn:c,queryState:j,align:K="center"}=e;function k(F,G,X){switch((F===T.post||F===T.put)&&S.forEachColumns(ie=>{var O;const m=ie;S.patchColumn(ie,{disabled:(O=m.disabledType)==null?void 0:O.includes(F)})}),F){case T.post:S.setModel(G??{},!0),S.show({title:"新增",...X,onSubmit:()=>(v.posting=!0,S.submit(t).finally(()=>v.posting=!1))});break;case T.put:S.setModel(G??{},!0),S.show({title:"修改",...X,onSubmit:()=>(v.puting=!0,S.submit(o).finally(()=>v.puting=!1))});break;case T.delete:mt({type:"warning",message:"确定删除所选的数据吗？",title:"确认删除",confirmButtonText:"确定",cancelButtonText:"取消",showCancelButton:!0,confirmButtonClass:"el-button--danger",...X}).then(()=>(v.deleting=!0,s==null?void 0:s(G))).finally(()=>v.deleting=!1);break;case T.export:Promise.resolve().then(()=>(v.exporting=!0,a==null?void 0:a(G,u(M.model),u(V)))).finally(()=>v.exporting=!1);break}}const R=b?pt(b,k,c):null,{formState:M,...I}=Sn({columns:l,initData:j}),{tableState:P,pagination:V,...L}=Bn({columns:R?r.concat(R):r,mode:p??vn.single,query:n?F=>n(u(M.model),F):void 0,pagination:y,mapColumn(){return{align:K}}}),q=()=>I.submit(()=>L.handleQuery()),i=()=>I.setModel(j??{},!0),{formDialogState:Q,...S}=wn({columns:f,post:kn}),v=Ve({querying:!1,posting:!1,puting:!1,deleting:!1,exporting:!1});return x(()=>P.pending,F=>v.querying=F,{immediate:!0}),{tableState:P,queryState:M,formDialogState:Q,pagination:V,mixedState:v,query:q,resetQuery:i,command:k,queryOpera:I,tableOpera:L,formDialogOpera:S}}const Tt={title:"Example/useLayout",tags:["autodocs"],argTypes:{get:{description:"查询接口"},post:{description:"新增接口"},put:{description:"修改接口"},delete:{description:"删除接口"},export:{description:"导出接口"},commands:{description:"操作项",defaultValue:{summary:"CommandItem[]"}},columns:{description:"列表展示项",defaultValue:{summary:"同useTable的columns"}},pagination:{description:"分页信息",defaultValue:{summary:"参考el-pagination"}},mode:{description:"单页/无限滚动",defaultValue:{summary:"LoadMode.single"}},queryColumns:{description:"查询条件项",defaultValue:{summary:"同useForm的columns"}},queryState:{description:"默认查询条件",defaultValue:{summary:"同useForm的initData"}},formColumns:{description:"弹窗条件项",defaultValue:{summary:"同useFormDialog的columns"}}},parameters:{docs:{description:{component:`提供基本的布局响应式状态
包括查询、新增、修改、删除、导出
不提供具体的页面布局组件`}}}},me={args:{},render:()=>({components:{OneTable:bn,ElPagination:hn,OneFormDialog:Cn,ElButton:Ae,OneForm:En},setup(){const{tableState:e,queryState:n,formDialogState:t,pagination:o,query:s,command:a,resetQuery:r}=ft({columns:[{label:"name",prop:"name"},{label:"age",prop:"age"},{label:"date",prop:"date",rFormat:Tn.dateTime}],queryColumns:[{label:"name",prop:"name"},{label:"age",prop:"age",rType:"number"}],formColumns:[{label:"name",prop:"name",requiredMsg:"必填啊",disabledType:[T.put]},{label:"age",prop:"age",rType:"number",min:0},{label:"date",prop:"date",rType:"date"}],get(l,f){return new Promise(b=>{setTimeout(()=>{const c=new Array(10).fill(0).map(()=>({date:new Date().toString(),name:`name-${f.currentPage}-${l.name??""}`,age:Math.random()}));b({list:c,total:100})},1e3)})},post(l){return new Promise(f=>{setTimeout(()=>{ce.success("新增成功"),f()},1e3)})},put(l){return new Promise(f=>{setTimeout(()=>{ce.success("修改成功"),f()},1e3)})},delete(l){return new Promise(f=>{setTimeout(()=>{ce.success("删除成功"),f()},1e3)})},export(l,f){return new Promise(b=>{setTimeout(()=>{ce.success("导出成功"),b()},1e3)})},commands:[{label:"编辑",command:T.put,options:{title:"来编辑"}},{label:"导出",command:T.export},{label:"删除",command:T.delete,link:!0,type:"danger",options:{title:"98765",type:"error"}}],queryState:{age:2}});return ke(s),{tableState:e,queryState:n,formDialogState:t,pagination:o,onAdd:()=>a(T.post),onExport:()=>a(T.export),query:s,resetQuery:r}},template:`
        <ElButton @click="onAdd">新增</ElButton>
        <ElButton @click="onExport">导出</ElButton>
        <OneForm v-bind="queryState" />
        <ElButton @click="query">查询</ElButton>
        <ElButton @click="resetQuery">重置</ElButton>
        <OneTable v-bind="tableState" height=300 />
        <ElPagination v-bind="pagination" />
        <OneFormDialog v-bind="formDialogState" />
      `})};var ze,Re,Ne;me.parameters={...me.parameters,docs:{...(ze=me.parameters)==null?void 0:ze.docs,source:{originalSource:`{
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
}`,...(Ne=(Re=me.parameters)==null?void 0:Re.docs)==null?void 0:Ne.source}}};const St=["基础用例"];export{St as __namedExportsOrder,Tt as default,me as 基础用例};
//# sourceMappingURL=UseLayout.stories-93f19a3d.js.map
