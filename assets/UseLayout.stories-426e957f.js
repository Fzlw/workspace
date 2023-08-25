import{w as ne,i as Ge,e as Z,f as ce,g as E,j as g,k as G,a as F,l as h,m as _,p as T,q as d,u as l,s as R,v as ee,T as Ee,n as W,x as Xe,d as I,o as he,y as B,z as fe,A as O,B as Y,F as Re,C as x,D as me,E as ue,r as Ze,G as Je,H as We,I as K,J as ae,b as pe,h as Ae}from"./vue.esm-bundler-ca95eab4.js";import{c as Be,d as Q,u as Ye,p as xe,e as _e,i as ge,f as Te,w as en,g as Ne,h as nn,m as tn,j as Se,k as Ve,T as ie,l as on,n as sn,o as ye,q as He,r as an,s as de,t as te,v as ve,x as rn,E as we,y as ln,z as un,A as dn,B as cn,C as Ie,D as mn,F as pn,G as fn,H as $e,I as gn,J as yn,L as vn,_ as bn,b as Cn,a as En}from"./el-message-box-22c42fed.js";import{E as hn}from"./el-pagination-4c062b91.js";import{u as Bn,F as Tn}from"./index-1afa3475.js";import{u as Sn}from"./index-729ede2f.js";import{u as wn}from"./index-4dd2df40.js";import"./_commonjsHelpers-725317a4.js";import"./cloneDeep-f29889c5.js";function kn(){}const Mn='a[href],button:not([disabled]),button:not([hidden]),:not([tabindex="-1"]),input:not([disabled]),input:not([type="hidden"]),select:not([disabled]),textarea:not([disabled])',Fn=e=>getComputedStyle(e).position==="fixed"?!1:e.offsetParent!==null,De=e=>Array.from(e.querySelectorAll(Mn)).filter(n=>On(n)&&Fn(n)),On=e=>{if(e.tabIndex>0||e.tabIndex===0&&e.getAttribute("tabIndex")!==null)return!0;if(e.disabled)return!1;switch(e.nodeName){case"A":return!!e.href&&e.rel!=="ignore";case"INPUT":return!(e.type==="hidden"||e.type==="file");case"BUTTON":case"SELECT":case"TEXTAREA":return!0;default:return!1}},An=(e,n)=>{let t;ne(()=>e.value,s=>{var o,r;s?(t=document.activeElement,Ge(n)&&((r=(o=n.value).focus)==null||r.call(o))):t.focus()})},In=Be({a11y:{type:Boolean,default:!0},locale:{type:Q(Object)},size:Ye,button:{type:Q(Object)},experimentalFeatures:{type:Q(Object)},keyboardNavigation:{type:Boolean,default:!0},message:{type:Q(Object)},zIndex:Number,namespace:{type:String,default:"el"}}),be={};Z({name:"ElConfigProvider",props:In,setup(e,{slots:n}){ne(()=>e.message,s=>{Object.assign(be,s??{})},{immediate:!0,deep:!0});const t=xe(e);return()=>ce(n,"default",{config:t==null?void 0:t.value})}});const $n=Be({value:{type:[String,Number],default:""},max:{type:Number,default:99},isDot:Boolean,hidden:Boolean,type:{type:String,values:["primary","success","warning","info","danger"],default:"danger"}}),Dn=["textContent"],Pn=Z({name:"ElBadge"}),Ln=Z({...Pn,props:$n,setup(e,{expose:n}){const t=e,s=_e("badge"),o=E(()=>t.isDot?"":ge(t.value)&&ge(t.max)?t.max<t.value?`${t.max}+`:`${t.value}`:`${t.value}`);return n({content:o}),(r,u)=>(g(),G("div",{class:d(l(s).b())},[ce(r.$slots,"default"),F(Ee,{name:`${l(s).namespace.value}-zoom-in-center`,persisted:""},{default:h(()=>[_(T("sup",{class:d([l(s).e("content"),l(s).em("content",r.type),l(s).is("fixed",!!r.$slots.default),l(s).is("dot",r.isDot)]),textContent:R(l(o))},null,10,Dn),[[ee,!r.hidden&&(l(o)||r.isDot)]])]),_:1},8,["name"])],2))}});var qn=Te(Ln,[["__file","/home/runner/work/element-plus/element-plus/packages/components/badge/src/badge.vue"]]);const zn=en(qn),Ce="_trap-focus-children",N=[],Pe=e=>{if(N.length===0)return;const n=N[N.length-1][Ce];if(n.length>0&&e.code===Ne.tab){if(n.length===1){e.preventDefault(),document.activeElement!==n[0]&&n[0].focus();return}const t=e.shiftKey,s=e.target===n[0],o=e.target===n[n.length-1];s&&t&&(e.preventDefault(),n[n.length-1].focus()),o&&!t&&(e.preventDefault(),n[0].focus())}},Rn={beforeMount(e){e[Ce]=De(e),N.push(e),N.length<=1&&document.addEventListener("keydown",Pe)},updated(e){W(()=>{e[Ce]=De(e)})},unmounted(){N.shift(),N.length===0&&document.removeEventListener("keydown",Pe)}},Ue=["success","info","warning","error"],C=tn({customClass:"",center:!1,dangerouslyUseHTMLString:!1,duration:3e3,icon:void 0,id:"",message:"",onClose:void 0,showClose:!1,type:"info",offset:16,zIndex:0,grouping:!1,repeatNum:1,appendTo:Se?document.body:void 0}),Nn=Be({customClass:{type:String,default:C.customClass},center:{type:Boolean,default:C.center},dangerouslyUseHTMLString:{type:Boolean,default:C.dangerouslyUseHTMLString},duration:{type:Number,default:C.duration},icon:{type:nn,default:C.icon},id:{type:String,default:C.id},message:{type:Q([String,Object,Function]),default:C.message},onClose:{type:Q(Function),required:!1},showClose:{type:Boolean,default:C.showClose},type:{type:String,values:Ue,default:C.type},offset:{type:Number,default:C.offset},zIndex:{type:Number,default:C.zIndex},grouping:{type:Boolean,default:C.grouping},repeatNum:{type:Number,default:C.repeatNum}}),Vn={destroy:()=>!0},S=Xe([]),Hn=e=>{const n=S.findIndex(o=>o.id===e),t=S[n];let s;return n>0&&(s=S[n-1]),{current:t,prev:s}},Un=e=>{const{prev:n}=Hn(e);return n?n.vm.exposed.bottom.value:0},jn=(e,n)=>S.findIndex(s=>s.id===e)>0?20:n,Kn=["id"],Qn=["innerHTML"],Gn=Z({name:"ElMessage"}),Xn=Z({...Gn,props:Nn,emits:Vn,setup(e,{expose:n}){const t=e,{Close:s}=He,{ns:o,zIndex:r}=Ve("message"),{currentZIndex:u,nextZIndex:m}=r,y=I(),a=I(!1),p=I(0);let b;const c=E(()=>t.type?t.type==="error"?"danger":t.type:"info"),V=E(()=>{const i=t.type;return{[o.bm("icon",i)]:i&&ie[i]}}),H=E(()=>t.icon||ie[t.type]||""),w=E(()=>Un(t.id)),z=E(()=>jn(t.id,t.offset)+w.value),k=E(()=>p.value+z.value),M=E(()=>({top:`${z.value}px`,zIndex:u.value}));function $(){t.duration!==0&&({stop:b}=an(()=>{D()},t.duration))}function U(){b==null||b()}function D(){a.value=!1}function v({code:i}){i===Ne.esc&&D()}return he(()=>{$(),m(),a.value=!0}),ne(()=>t.repeatNum,()=>{U(),$()}),on(document,"keydown",v),sn(y,()=>{p.value=y.value.getBoundingClientRect().height}),n({visible:a,bottom:k,close:D}),(i,P)=>(g(),B(Ee,{name:l(o).b("fade"),onBeforeLeave:i.onClose,onAfterLeave:P[0]||(P[0]=ke=>i.$emit("destroy")),persisted:""},{default:h(()=>[_(T("div",{id:i.id,ref_key:"messageRef",ref:y,class:d([l(o).b(),{[l(o).m(i.type)]:i.type&&!i.icon},l(o).is("center",i.center),l(o).is("closable",i.showClose),i.customClass]),style:fe(l(M)),role:"alert",onMouseenter:U,onMouseleave:$},[i.repeatNum>1?(g(),B(l(zn),{key:0,value:i.repeatNum,type:l(c),class:d(l(o).e("badge"))},null,8,["value","type","class"])):O("v-if",!0),l(H)?(g(),B(l(ye),{key:1,class:d([l(o).e("icon"),l(V)])},{default:h(()=>[(g(),B(Y(l(H))))]),_:1},8,["class"])):O("v-if",!0),ce(i.$slots,"default",{},()=>[i.dangerouslyUseHTMLString?(g(),G(Re,{key:1},[O(" Caution here, message could've been compromised, never use user's input as message "),T("p",{class:d(l(o).e("content")),innerHTML:i.message},null,10,Qn)],2112)):(g(),G("p",{key:0,class:d(l(o).e("content"))},R(i.message),3))]),i.showClose?(g(),B(l(ye),{key:2,class:d(l(o).e("closeBtn")),onClick:x(D,["stop"])},{default:h(()=>[F(l(s))]),_:1},8,["class","onClick"])):O("v-if",!0)],46,Kn),[[ee,a.value]])]),_:3},8,["name","onBeforeLeave"]))}});var Zn=Te(Xn,[["__file","/home/runner/work/element-plus/element-plus/packages/components/message/src/message.vue"]]);let Jn=1;const je=e=>{const n=!e||de(e)||me(e)||te(e)?{message:e}:e,t={...C,...n};if(!t.appendTo)t.appendTo=document.body;else if(de(t.appendTo)){let s=document.querySelector(t.appendTo);ve(s)||(s=document.body),t.appendTo=s}return t},Wn=e=>{const n=S.indexOf(e);if(n===-1)return;S.splice(n,1);const{handler:t}=e;t.close()},Yn=({appendTo:e,...n},t)=>{const s=`message_${Jn++}`,o=n.onClose,r=document.createElement("div"),u={...n,id:s,onClose:()=>{o==null||o(),Wn(p)},onDestroy:()=>{ue(null,r)}},m=F(Zn,u,te(u.message)||me(u.message)?{default:te(u.message)?u.message:()=>u.message}:null);m.appContext=t||X._context,ue(m,r),e.appendChild(r.firstElementChild);const y=m.component,p={id:s,vnode:m,vm:y,handler:{close:()=>{y.exposed.visible.value=!1}},props:m.component.props};return p},X=(e={},n)=>{if(!Se)return{close:()=>{}};if(ge(be.max)&&S.length>=be.max)return{close:()=>{}};const t=je(e);if(t.grouping&&S.length){const o=S.find(({vnode:r})=>{var u;return((u=r.props)==null?void 0:u.message)===t.message});if(o)return o.props.repeatNum+=1,o.props.type=t.type,o.handler}const s=Yn(t,n);return S.push(s),s.handler};Ue.forEach(e=>{X[e]=(n={},t)=>{const s=je(n);return X({...s,type:e},t)}});function xn(e){for(const n of S)(!e||e===n.props.type)&&n.handler.close()}X.closeAll=xn;X._context=null;const re=rn(X,"$message"),_n=Z({name:"ElMessageBox",directives:{TrapFocus:Rn},components:{ElButton:we,ElFocusTrap:ln,ElInput:un,ElOverlay:dn,ElIcon:ye,...He},inheritAttrs:!1,props:{buttonSize:{type:String,validator:cn},modal:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},showClose:{type:Boolean,default:!0},closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},closeOnHashChange:{type:Boolean,default:!0},center:Boolean,draggable:Boolean,roundButton:{default:!1,type:Boolean},container:{type:String,default:"body"},boxType:{type:String,default:""}},emits:["vanish","action"],setup(e,{emit:n}){const{locale:t,zIndex:s,ns:o,size:r}=Ve("message-box",E(()=>e.buttonSize)),{t:u}=t,{nextZIndex:m}=s,y=I(!1),a=Ze({autofocus:!0,beforeClose:null,callback:null,cancelButtonText:"",cancelButtonClass:"",confirmButtonText:"",confirmButtonClass:"",customClass:"",customStyle:{},dangerouslyUseHTMLString:!1,distinguishCancelAndClose:!1,icon:"",inputPattern:null,inputPlaceholder:"",inputType:"text",inputValue:null,inputValidator:null,inputErrorMessage:"",message:null,modalFade:!0,modalClass:"",showCancelButton:!1,showConfirmButton:!0,type:"",title:void 0,showInput:!1,action:"",confirmButtonLoading:!1,cancelButtonLoading:!1,confirmButtonDisabled:!1,editorErrorMessage:"",validateError:!1,zIndex:m()}),p=E(()=>{const f=a.type;return{[o.bm("icon",f)]:f&&ie[f]}}),b=Ie(),c=Ie(),V=E(()=>a.icon||ie[a.type]||""),H=E(()=>!!a.message),w=I(),z=I(),k=I(),M=I(),$=I(),U=E(()=>a.confirmButtonClass);ne(()=>a.inputValue,async f=>{await W(),e.boxType==="prompt"&&f!==null&&Me()},{immediate:!0}),ne(()=>y.value,f=>{var L,j;f&&(e.boxType!=="prompt"&&(a.autofocus?k.value=(j=(L=$.value)==null?void 0:L.$el)!=null?j:w.value:k.value=w.value),a.zIndex=m()),e.boxType==="prompt"&&(f?W().then(()=>{var Oe;M.value&&M.value.$el&&(a.autofocus?k.value=(Oe=Ke())!=null?Oe:w.value:k.value=w.value)}):(a.editorErrorMessage="",a.validateError=!1))});const D=E(()=>e.draggable);mn(w,z,D),he(async()=>{await W(),e.closeOnHashChange&&window.addEventListener("hashchange",v)}),Je(()=>{e.closeOnHashChange&&window.removeEventListener("hashchange",v)});function v(){y.value&&(y.value=!1,W(()=>{a.action&&n("action",a.action)}))}const i=()=>{e.closeOnClickModal&&se(a.distinguishCancelAndClose?"close":"cancel")},P=fn(i),ke=f=>{if(a.inputType!=="textarea")return f.preventDefault(),se("confirm")},se=f=>{var L;e.boxType==="prompt"&&f==="confirm"&&!Me()||(a.action=f,a.beforeClose?(L=a.beforeClose)==null||L.call(a,f,a,v):v())},Me=()=>{if(e.boxType==="prompt"){const f=a.inputPattern;if(f&&!f.test(a.inputValue||""))return a.editorErrorMessage=a.inputErrorMessage||u("el.messagebox.error"),a.validateError=!0,!1;const L=a.inputValidator;if(typeof L=="function"){const j=L(a.inputValue);if(j===!1)return a.editorErrorMessage=a.inputErrorMessage||u("el.messagebox.error"),a.validateError=!0,!1;if(typeof j=="string")return a.editorErrorMessage=j,a.validateError=!0,!1}}return a.editorErrorMessage="",a.validateError=!1,!0},Ke=()=>{const f=M.value.$refs;return f.input||f.textarea},Fe=()=>{se("close")},Qe=()=>{e.closeOnPressEscape&&Fe()};return e.lockScroll&&pn(y),An(y),{...We(a),ns:o,overlayEvent:P,visible:y,hasMessage:H,typeClass:p,contentId:b,inputId:c,btnSize:r,iconComponent:V,confirmButtonClasses:U,rootRef:w,focusStartRef:k,headerRef:z,inputRef:M,confirmRef:$,doClose:v,handleClose:Fe,onCloseRequested:Qe,handleWrapperClick:i,handleInputEnter:ke,handleAction:se,t:u}}}),et=["aria-label","aria-describedby"],nt=["aria-label"],tt=["id"];function ot(e,n,t,s,o,r){const u=K("el-icon"),m=K("close"),y=K("el-input"),a=K("el-button"),p=K("el-focus-trap"),b=K("el-overlay");return g(),B(Ee,{name:"fade-in-linear",onAfterLeave:n[11]||(n[11]=c=>e.$emit("vanish")),persisted:""},{default:h(()=>[_(F(b,{"z-index":e.zIndex,"overlay-class":[e.ns.is("message-box"),e.modalClass],mask:e.modal},{default:h(()=>[T("div",{role:"dialog","aria-label":e.title,"aria-modal":"true","aria-describedby":e.showInput?void 0:e.contentId,class:d(`${e.ns.namespace.value}-overlay-message-box`),onClick:n[8]||(n[8]=(...c)=>e.overlayEvent.onClick&&e.overlayEvent.onClick(...c)),onMousedown:n[9]||(n[9]=(...c)=>e.overlayEvent.onMousedown&&e.overlayEvent.onMousedown(...c)),onMouseup:n[10]||(n[10]=(...c)=>e.overlayEvent.onMouseup&&e.overlayEvent.onMouseup(...c))},[F(p,{loop:"",trapped:e.visible,"focus-trap-el":e.rootRef,"focus-start-el":e.focusStartRef,onReleaseRequested:e.onCloseRequested},{default:h(()=>[T("div",{ref:"rootRef",class:d([e.ns.b(),e.customClass,e.ns.is("draggable",e.draggable),{[e.ns.m("center")]:e.center}]),style:fe(e.customStyle),tabindex:"-1",onClick:n[7]||(n[7]=x(()=>{},["stop"]))},[e.title!==null&&e.title!==void 0?(g(),G("div",{key:0,ref:"headerRef",class:d(e.ns.e("header"))},[T("div",{class:d(e.ns.e("title"))},[e.iconComponent&&e.center?(g(),B(u,{key:0,class:d([e.ns.e("status"),e.typeClass])},{default:h(()=>[(g(),B(Y(e.iconComponent)))]),_:1},8,["class"])):O("v-if",!0),T("span",null,R(e.title),1)],2),e.showClose?(g(),G("button",{key:0,type:"button",class:d(e.ns.e("headerbtn")),"aria-label":e.t("el.messagebox.close"),onClick:n[0]||(n[0]=c=>e.handleAction(e.distinguishCancelAndClose?"close":"cancel")),onKeydown:n[1]||(n[1]=ae(x(c=>e.handleAction(e.distinguishCancelAndClose?"close":"cancel"),["prevent"]),["enter"]))},[F(u,{class:d(e.ns.e("close"))},{default:h(()=>[F(m)]),_:1},8,["class"])],42,nt)):O("v-if",!0)],2)):O("v-if",!0),T("div",{id:e.contentId,class:d(e.ns.e("content"))},[T("div",{class:d(e.ns.e("container"))},[e.iconComponent&&!e.center&&e.hasMessage?(g(),B(u,{key:0,class:d([e.ns.e("status"),e.typeClass])},{default:h(()=>[(g(),B(Y(e.iconComponent)))]),_:1},8,["class"])):O("v-if",!0),e.hasMessage?(g(),G("div",{key:1,class:d(e.ns.e("message"))},[ce(e.$slots,"default",{},()=>[e.dangerouslyUseHTMLString?(g(),B(Y(e.showInput?"label":"p"),{key:1,for:e.showInput?e.inputId:void 0,innerHTML:e.message},null,8,["for","innerHTML"])):(g(),B(Y(e.showInput?"label":"p"),{key:0,for:e.showInput?e.inputId:void 0},{default:h(()=>[pe(R(e.dangerouslyUseHTMLString?"":e.message),1)]),_:1},8,["for"]))])],2)):O("v-if",!0)],2),_(T("div",{class:d(e.ns.e("input"))},[F(y,{id:e.inputId,ref:"inputRef",modelValue:e.inputValue,"onUpdate:modelValue":n[2]||(n[2]=c=>e.inputValue=c),type:e.inputType,placeholder:e.inputPlaceholder,"aria-invalid":e.validateError,class:d({invalid:e.validateError}),onKeydown:ae(e.handleInputEnter,["enter"])},null,8,["id","modelValue","type","placeholder","aria-invalid","class","onKeydown"]),T("div",{class:d(e.ns.e("errormsg")),style:fe({visibility:e.editorErrorMessage?"visible":"hidden"})},R(e.editorErrorMessage),7)],2),[[ee,e.showInput]])],10,tt),T("div",{class:d(e.ns.e("btns"))},[e.showCancelButton?(g(),B(a,{key:0,loading:e.cancelButtonLoading,class:d([e.cancelButtonClass]),round:e.roundButton,size:e.btnSize,onClick:n[3]||(n[3]=c=>e.handleAction("cancel")),onKeydown:n[4]||(n[4]=ae(x(c=>e.handleAction("cancel"),["prevent"]),["enter"]))},{default:h(()=>[pe(R(e.cancelButtonText||e.t("el.messagebox.cancel")),1)]),_:1},8,["loading","class","round","size"])):O("v-if",!0),_(F(a,{ref:"confirmRef",type:"primary",loading:e.confirmButtonLoading,class:d([e.confirmButtonClasses]),round:e.roundButton,disabled:e.confirmButtonDisabled,size:e.btnSize,onClick:n[5]||(n[5]=c=>e.handleAction("confirm")),onKeydown:n[6]||(n[6]=ae(x(c=>e.handleAction("confirm"),["prevent"]),["enter"]))},{default:h(()=>[pe(R(e.confirmButtonText||e.t("el.messagebox.confirm")),1)]),_:1},8,["loading","class","round","disabled","size"]),[[ee,e.showConfirmButton]])],2)],6)]),_:3},8,["trapped","focus-trap-el","focus-start-el","onReleaseRequested"])],42,et)]),_:3},8,["z-index","overlay-class","mask"]),[[ee,e.visible]])]),_:3})}var st=Te(_n,[["render",ot],["__file","/home/runner/work/element-plus/element-plus/packages/components/message-box/src/index.vue"]]);const oe=new Map,at=e=>{let n=document.body;return e.appendTo&&(de(e.appendTo)&&(n=document.querySelector(e.appendTo)),ve(e.appendTo)&&(n=e.appendTo),ve(n)||(n=document.body)),n},rt=(e,n,t=null)=>{const s=F(st,e,te(e.message)||me(e.message)?{default:te(e.message)?e.message:()=>e.message}:null);return s.appContext=t,ue(s,n),at(e).appendChild(n.firstElementChild),s.component},lt=()=>document.createElement("div"),ut=(e,n)=>{const t=lt();e.onVanish=()=>{ue(null,t),oe.delete(o)},e.onAction=r=>{const u=oe.get(o);let m;e.showInput?m={value:o.inputValue,action:r}:m=r,e.callback?e.callback(m,s.proxy):r==="cancel"||r==="close"?e.distinguishCancelAndClose&&r!=="cancel"?u.reject("close"):u.reject("cancel"):u.resolve(m)};const s=rt(e,t,n),o=s.proxy;for(const r in e)$e(e,r)&&!$e(o.$props,r)&&(o[r]=e[r]);return o.visible=!0,o};function J(e,n=null){if(!Se)return Promise.reject();let t;return de(e)||me(e)?e={message:e}:t=e.callback,new Promise((s,o)=>{const r=ut(e,n??J._context);oe.set(r,{options:e,callback:t,resolve:s,reject:o})})}const it=["alert","confirm","prompt"],dt={alert:{closeOnPressEscape:!1,closeOnClickModal:!1},confirm:{showCancelButton:!0},prompt:{showCancelButton:!0,showInput:!0}};it.forEach(e=>{J[e]=ct(e)});function ct(e){return(n,t,s,o)=>{let r="";return gn(t)?(s=t,r=""):yn(t)?r="":r=t,J(Object.assign({title:r,message:n,type:"",...dt[e]},s,{boxType:e}),o)}}J.close=()=>{oe.forEach((e,n)=>{n.doClose()}),oe.clear()};J._context=null;const q=J;q.install=e=>{q._context=e._context,e.config.globalProperties.$msgbox=q,e.config.globalProperties.$messageBox=q,e.config.globalProperties.$alert=q.alert,e.config.globalProperties.$confirm=q.confirm,e.config.globalProperties.$prompt=q.prompt};const mt=q;var A=(e=>(e[e.post=0]="post",e[e.put=1]="put",e[e.delete=2]="delete",e[e.export=3]="export",e))(A||{});const pt=()=>(n,t)=>({prop:"",label:"操作",align:"center",formatter(s){return Ae(Re,n.map(o=>Ae(we,{...o,key:o.command,onClick:()=>t(o.command,s)},o.label)))}});function ft(e){const{get:n,post:t,put:s,delete:o,export:r,columns:u,mode:m,pagination:y,queryColumns:a,formColumns:p,commands:b,queryState:c}=e,V=(i,P)=>{switch(i){case A.post:v.setModel(P??{},!0),v.show({title:"新增",onSubmit:()=>v.submit(t)});break;case A.put:v.setModel(P??{},!0),v.show({title:"修改",onSubmit:()=>v.submit(s)});break;case A.delete:mt.confirm("确定删除所选的数据吗？","确认删除",{confirmButtonText:"确定",cancelButtonText:"取消"}).then(()=>o==null?void 0:o(P));break;case A.export:r==null||r(l(M.value.model),l(k));break}},H=pt(),{tableState:w,handleQuery:z,pagination:k}=Bn({columns:b?u.concat(H(b,V)):u,mode:m??vn.single,query:i=>n(l(M.value.model),i),pagination:y}),{formState:M,...$}=Sn({columns:a,initData:c}),U=()=>{$.submit(z)},{formDialogState:D,...v}=wn({columns:p,post:kn});return{tableState:w,queryState:M,formDialogState:D,pagination:k,query:U,command:V,setForm:v.setModel,showDialog:v.show,hideialog:v.hide}}const Tt={title:"Example/useLayout",tags:["autodocs"],argTypes:{get:{description:"查询接口"},post:{description:"新增接口"},put:{description:"修改接口"},delete:{description:"删除接口"},export:{description:"导出接口"},commands:{description:"操作项",defaultValue:{summary:"CommandItem[]"}},columns:{description:"列表展示项",defaultValue:{summary:"同useTable的columns"}},pagination:{description:"分页信息",defaultValue:{summary:"参考el-pagination"}},mode:{description:"单页/无限滚动",defaultValue:{summary:"LoadMode.single"}},queryColumns:{description:"查询条件项",defaultValue:{summary:"同useForm的columns"}},queryState:{description:"默认查询条件",defaultValue:{summary:"同useForm的initData"}},formColumns:{description:"弹窗条件项",defaultValue:{summary:"同useFormDialog的columns"}}},parameters:{docs:{description:{component:`提供基本的布局响应式状态
包括查询、新增、修改、删除、导出
不提供具体的页面布局组件`}}}},le={args:{},render:()=>({components:{OneTable:bn,ElPagination:hn,OneFormDialog:Cn,ElButton:we,OneForm:En},setup(){const{tableState:e,queryState:n,formDialogState:t,pagination:s,query:o,command:r,resetQuery:u}=ft({columns:[{label:"name",prop:"name"},{label:"age",prop:"age"},{label:"date",prop:"date",rFormat:Tn.dateTime}],queryColumns:[{label:"name",prop:"name"},{label:"age",prop:"age",rType:"number"}],formColumns:[{label:"name",prop:"name",requiredMsg:"必填啊"},{label:"age",prop:"age",rType:"number",min:0},{label:"date",prop:"date",rType:"date"}],get(a,p){return new Promise(b=>{setTimeout(()=>{const c=new Array(10).fill(0).map(()=>({date:new Date().toString(),name:`name-${p.currentPage}-${a.name}`,age:Math.random()}));b({list:c,total:100})},1e3)})},post(a){return new Promise(p=>{setTimeout(()=>{re.success("新增成功"),p()},1e3)})},put(a){return new Promise(p=>{setTimeout(()=>{re.success("修改成功"),p()},1e3)})},delete(a){return new Promise(p=>{setTimeout(()=>{re.success("删除成功"),p()},1e3)})},export(a,p){return new Promise(b=>{setTimeout(()=>{re.success("导出成功"),b()},1e3)})},commands:[{label:"编辑",command:A.put},{label:"导出",command:A.export},{label:"删除",command:A.delete,link:!0,type:"danger"}],queryState:{age:2}});return he(o),{tableState:e,queryState:n,formDialogState:t,pagination:s,onAdd:()=>r(A.post),onExport:()=>r(A.export),query:o,resetQuery:u}},template:`
        <ElButton @click="onAdd">新增</ElButton>
        <ElButton @click="onExport">导出</ElButton>
        <OneForm v-bind="queryState" />
        <ElButton @click="query">查询</ElButton>
        <ElButton @click="resetQuery">重置</ElButton>
        <OneTable v-bind="tableState" height=300 />
        <ElPagination v-bind="pagination" />
        <OneFormDialog v-bind="formDialogState" />
      `})};var Le,qe,ze;le.parameters={...le.parameters,docs:{...(Le=le.parameters)==null?void 0:Le.docs,source:{originalSource:`{
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
        type Query = {
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
        } = useLayout<Row, Query>({
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
            requiredMsg: '必填啊'
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
                  name: \`name-\${pa.currentPage}-\${query.name}\`,
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
            command: LayoutCommand.put
          }, {
            label: '导出',
            command: LayoutCommand.export
          }, {
            label: '删除',
            command: LayoutCommand.delete,
            link: true,
            type: 'danger'
          }],
          queryState: {
            age: 2
          }
        });
        onMounted(query);
        const onAdd = () => command(LayoutCommand.post);
        const onExport = () => command(LayoutCommand.export);
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
}`,...(ze=(qe=le.parameters)==null?void 0:qe.docs)==null?void 0:ze.source}}};const St=["基础用例"];export{St as __namedExportsOrder,Tt as default,le as 基础用例};
//# sourceMappingURL=UseLayout.stories-426e957f.js.map
