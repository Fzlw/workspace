import{w as te,i as Ge,e as J,f as me,g as C,j as g,k as X,a as F,l as h,m as ee,p as T,q as d,u as l,s as R,v as ne,T as he,n as Y,x as Xe,d as $,o as Be,y as B,z as ge,A,B as x,F as Re,C as _,D as pe,E as ie,r as Ze,G as Je,H as We,I as K,J as re,b as fe,h as Oe}from"./vue.esm-bundler-ca95eab4.js";import{c as Te,d as G,u as Ye,p as xe,e as _e,i as ye,f as Se,w as en,g as Ne,h as nn,m as tn,j as we,k as Ve,T as de,l as on,n as sn,o as ve,q as He,r as an,s as ce,t as oe,v as be,x as rn,E as ke,y as ln,z as un,A as dn,B as cn,C as Ie,D as mn,F as pn,G as fn,H as $e,I as gn,J as yn,L as vn,_ as bn,b as En,a as Cn}from"./el-message-box-0cba906a.js";import{E as hn}from"./el-pagination-12979bf3.js";import{u as Bn,F as Tn}from"./index-82a350d0.js";import{u as Sn}from"./index-a2564e87.js";import{u as wn}from"./index-4225d51c.js";import"./_commonjsHelpers-725317a4.js";import"./cloneDeep-fd8ee826.js";function kn(){}const Mn='a[href],button:not([disabled]),button:not([hidden]),:not([tabindex="-1"]),input:not([disabled]),input:not([type="hidden"]),select:not([disabled]),textarea:not([disabled])',Fn=e=>getComputedStyle(e).position==="fixed"?!1:e.offsetParent!==null,De=e=>Array.from(e.querySelectorAll(Mn)).filter(n=>An(n)&&Fn(n)),An=e=>{if(e.tabIndex>0||e.tabIndex===0&&e.getAttribute("tabIndex")!==null)return!0;if(e.disabled)return!1;switch(e.nodeName){case"A":return!!e.href&&e.rel!=="ignore";case"INPUT":return!(e.type==="hidden"||e.type==="file");case"BUTTON":case"SELECT":case"TEXTAREA":return!0;default:return!1}},On=(e,n)=>{let t;te(()=>e.value,s=>{var o,r;s?(t=document.activeElement,Ge(n)&&((r=(o=n.value).focus)==null||r.call(o))):t.focus()})},In=Te({a11y:{type:Boolean,default:!0},locale:{type:G(Object)},size:Ye,button:{type:G(Object)},experimentalFeatures:{type:G(Object)},keyboardNavigation:{type:Boolean,default:!0},message:{type:G(Object)},zIndex:Number,namespace:{type:String,default:"el"}}),Ee={};J({name:"ElConfigProvider",props:In,setup(e,{slots:n}){te(()=>e.message,s=>{Object.assign(Ee,s??{})},{immediate:!0,deep:!0});const t=xe(e);return()=>me(n,"default",{config:t==null?void 0:t.value})}});const $n=Te({value:{type:[String,Number],default:""},max:{type:Number,default:99},isDot:Boolean,hidden:Boolean,type:{type:String,values:["primary","success","warning","info","danger"],default:"danger"}}),Dn=["textContent"],Pn=J({name:"ElBadge"}),Ln=J({...Pn,props:$n,setup(e,{expose:n}){const t=e,s=_e("badge"),o=C(()=>t.isDot?"":ye(t.value)&&ye(t.max)?t.max<t.value?`${t.max}+`:`${t.value}`:`${t.value}`);return n({content:o}),(r,u)=>(g(),X("div",{class:d(l(s).b())},[me(r.$slots,"default"),F(he,{name:`${l(s).namespace.value}-zoom-in-center`,persisted:""},{default:h(()=>[ee(T("sup",{class:d([l(s).e("content"),l(s).em("content",r.type),l(s).is("fixed",!!r.$slots.default),l(s).is("dot",r.isDot)]),textContent:R(l(o))},null,10,Dn),[[ne,!r.hidden&&(l(o)||r.isDot)]])]),_:1},8,["name"])],2))}});var qn=Se(Ln,[["__file","/home/runner/work/element-plus/element-plus/packages/components/badge/src/badge.vue"]]);const zn=en(qn),Ce="_trap-focus-children",N=[],Pe=e=>{if(N.length===0)return;const n=N[N.length-1][Ce];if(n.length>0&&e.code===Ne.tab){if(n.length===1){e.preventDefault(),document.activeElement!==n[0]&&n[0].focus();return}const t=e.shiftKey,s=e.target===n[0],o=e.target===n[n.length-1];s&&t&&(e.preventDefault(),n[n.length-1].focus()),o&&!t&&(e.preventDefault(),n[0].focus())}},Rn={beforeMount(e){e[Ce]=De(e),N.push(e),N.length<=1&&document.addEventListener("keydown",Pe)},updated(e){Y(()=>{e[Ce]=De(e)})},unmounted(){N.shift(),N.length===0&&document.removeEventListener("keydown",Pe)}},Ue=["success","info","warning","error"],E=tn({customClass:"",center:!1,dangerouslyUseHTMLString:!1,duration:3e3,icon:void 0,id:"",message:"",onClose:void 0,showClose:!1,type:"info",offset:16,zIndex:0,grouping:!1,repeatNum:1,appendTo:we?document.body:void 0}),Nn=Te({customClass:{type:String,default:E.customClass},center:{type:Boolean,default:E.center},dangerouslyUseHTMLString:{type:Boolean,default:E.dangerouslyUseHTMLString},duration:{type:Number,default:E.duration},icon:{type:nn,default:E.icon},id:{type:String,default:E.id},message:{type:G([String,Object,Function]),default:E.message},onClose:{type:G(Function),required:!1},showClose:{type:Boolean,default:E.showClose},type:{type:String,values:Ue,default:E.type},offset:{type:Number,default:E.offset},zIndex:{type:Number,default:E.zIndex},grouping:{type:Boolean,default:E.grouping},repeatNum:{type:Number,default:E.repeatNum}}),Vn={destroy:()=>!0},S=Xe([]),Hn=e=>{const n=S.findIndex(o=>o.id===e),t=S[n];let s;return n>0&&(s=S[n-1]),{current:t,prev:s}},Un=e=>{const{prev:n}=Hn(e);return n?n.vm.exposed.bottom.value:0},jn=(e,n)=>S.findIndex(s=>s.id===e)>0?20:n,Qn=["id"],Kn=["innerHTML"],Gn=J({name:"ElMessage"}),Xn=J({...Gn,props:Nn,emits:Vn,setup(e,{expose:n}){const t=e,{Close:s}=He,{ns:o,zIndex:r}=Ve("message"),{currentZIndex:u,nextZIndex:m}=r,y=$(),a=$(!1),p=$(0);let b;const c=C(()=>t.type?t.type==="error"?"danger":t.type:"info"),V=C(()=>{const i=t.type;return{[o.bm("icon",i)]:i&&de[i]}}),H=C(()=>t.icon||de[t.type]||""),w=C(()=>Un(t.id)),z=C(()=>jn(t.id,t.offset)+w.value),k=C(()=>p.value+z.value),M=C(()=>({top:`${z.value}px`,zIndex:u.value}));function I(){t.duration!==0&&({stop:b}=an(()=>{D()},t.duration))}function U(){b==null||b()}function D(){a.value=!1}function v({code:i}){i===Ne.esc&&D()}return Be(()=>{I(),m(),a.value=!0}),te(()=>t.repeatNum,()=>{U(),I()}),on(document,"keydown",v),sn(y,()=>{p.value=y.value.getBoundingClientRect().height}),n({visible:a,bottom:k,close:D}),(i,P)=>(g(),B(he,{name:l(o).b("fade"),onBeforeLeave:i.onClose,onAfterLeave:P[0]||(P[0]=j=>i.$emit("destroy")),persisted:""},{default:h(()=>[ee(T("div",{id:i.id,ref_key:"messageRef",ref:y,class:d([l(o).b(),{[l(o).m(i.type)]:i.type&&!i.icon},l(o).is("center",i.center),l(o).is("closable",i.showClose),i.customClass]),style:ge(l(M)),role:"alert",onMouseenter:U,onMouseleave:I},[i.repeatNum>1?(g(),B(l(zn),{key:0,value:i.repeatNum,type:l(c),class:d(l(o).e("badge"))},null,8,["value","type","class"])):A("v-if",!0),l(H)?(g(),B(l(ve),{key:1,class:d([l(o).e("icon"),l(V)])},{default:h(()=>[(g(),B(x(l(H))))]),_:1},8,["class"])):A("v-if",!0),me(i.$slots,"default",{},()=>[i.dangerouslyUseHTMLString?(g(),X(Re,{key:1},[A(" Caution here, message could've been compromised, never use user's input as message "),T("p",{class:d(l(o).e("content")),innerHTML:i.message},null,10,Kn)],2112)):(g(),X("p",{key:0,class:d(l(o).e("content"))},R(i.message),3))]),i.showClose?(g(),B(l(ve),{key:2,class:d(l(o).e("closeBtn")),onClick:_(D,["stop"])},{default:h(()=>[F(l(s))]),_:1},8,["class","onClick"])):A("v-if",!0)],46,Qn),[[ne,a.value]])]),_:3},8,["name","onBeforeLeave"]))}});var Zn=Se(Xn,[["__file","/home/runner/work/element-plus/element-plus/packages/components/message/src/message.vue"]]);let Jn=1;const je=e=>{const n=!e||ce(e)||pe(e)||oe(e)?{message:e}:e,t={...E,...n};if(!t.appendTo)t.appendTo=document.body;else if(ce(t.appendTo)){let s=document.querySelector(t.appendTo);be(s)||(s=document.body),t.appendTo=s}return t},Wn=e=>{const n=S.indexOf(e);if(n===-1)return;S.splice(n,1);const{handler:t}=e;t.close()},Yn=({appendTo:e,...n},t)=>{const s=`message_${Jn++}`,o=n.onClose,r=document.createElement("div"),u={...n,id:s,onClose:()=>{o==null||o(),Wn(p)},onDestroy:()=>{ie(null,r)}},m=F(Zn,u,oe(u.message)||pe(u.message)?{default:oe(u.message)?u.message:()=>u.message}:null);m.appContext=t||Z._context,ie(m,r),e.appendChild(r.firstElementChild);const y=m.component,p={id:s,vnode:m,vm:y,handler:{close:()=>{y.exposed.visible.value=!1}},props:m.component.props};return p},Z=(e={},n)=>{if(!we)return{close:()=>{}};if(ye(Ee.max)&&S.length>=Ee.max)return{close:()=>{}};const t=je(e);if(t.grouping&&S.length){const o=S.find(({vnode:r})=>{var u;return((u=r.props)==null?void 0:u.message)===t.message});if(o)return o.props.repeatNum+=1,o.props.type=t.type,o.handler}const s=Yn(t,n);return S.push(s),s.handler};Ue.forEach(e=>{Z[e]=(n={},t)=>{const s=je(n);return Z({...s,type:e},t)}});function xn(e){for(const n of S)(!e||e===n.props.type)&&n.handler.close()}Z.closeAll=xn;Z._context=null;const le=rn(Z,"$message"),_n=J({name:"ElMessageBox",directives:{TrapFocus:Rn},components:{ElButton:ke,ElFocusTrap:ln,ElInput:un,ElOverlay:dn,ElIcon:ve,...He},inheritAttrs:!1,props:{buttonSize:{type:String,validator:cn},modal:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},showClose:{type:Boolean,default:!0},closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},closeOnHashChange:{type:Boolean,default:!0},center:Boolean,draggable:Boolean,roundButton:{default:!1,type:Boolean},container:{type:String,default:"body"},boxType:{type:String,default:""}},emits:["vanish","action"],setup(e,{emit:n}){const{locale:t,zIndex:s,ns:o,size:r}=Ve("message-box",C(()=>e.buttonSize)),{t:u}=t,{nextZIndex:m}=s,y=$(!1),a=Ze({autofocus:!0,beforeClose:null,callback:null,cancelButtonText:"",cancelButtonClass:"",confirmButtonText:"",confirmButtonClass:"",customClass:"",customStyle:{},dangerouslyUseHTMLString:!1,distinguishCancelAndClose:!1,icon:"",inputPattern:null,inputPlaceholder:"",inputType:"text",inputValue:null,inputValidator:null,inputErrorMessage:"",message:null,modalFade:!0,modalClass:"",showCancelButton:!1,showConfirmButton:!0,type:"",title:void 0,showInput:!1,action:"",confirmButtonLoading:!1,cancelButtonLoading:!1,confirmButtonDisabled:!1,editorErrorMessage:"",validateError:!1,zIndex:m()}),p=C(()=>{const f=a.type;return{[o.bm("icon",f)]:f&&de[f]}}),b=Ie(),c=Ie(),V=C(()=>a.icon||de[a.type]||""),H=C(()=>!!a.message),w=$(),z=$(),k=$(),M=$(),I=$(),U=C(()=>a.confirmButtonClass);te(()=>a.inputValue,async f=>{await Y(),e.boxType==="prompt"&&f!==null&&Me()},{immediate:!0}),te(()=>y.value,f=>{var L,Q;f&&(e.boxType!=="prompt"&&(a.autofocus?k.value=(Q=(L=I.value)==null?void 0:L.$el)!=null?Q:w.value:k.value=w.value),a.zIndex=m()),e.boxType==="prompt"&&(f?Y().then(()=>{var Ae;M.value&&M.value.$el&&(a.autofocus?k.value=(Ae=Qe())!=null?Ae:w.value:k.value=w.value)}):(a.editorErrorMessage="",a.validateError=!1))});const D=C(()=>e.draggable);mn(w,z,D),Be(async()=>{await Y(),e.closeOnHashChange&&window.addEventListener("hashchange",v)}),Je(()=>{e.closeOnHashChange&&window.removeEventListener("hashchange",v)});function v(){y.value&&(y.value=!1,Y(()=>{a.action&&n("action",a.action)}))}const i=()=>{e.closeOnClickModal&&ae(a.distinguishCancelAndClose?"close":"cancel")},P=fn(i),j=f=>{if(a.inputType!=="textarea")return f.preventDefault(),ae("confirm")},ae=f=>{var L;e.boxType==="prompt"&&f==="confirm"&&!Me()||(a.action=f,a.beforeClose?(L=a.beforeClose)==null||L.call(a,f,a,v):v())},Me=()=>{if(e.boxType==="prompt"){const f=a.inputPattern;if(f&&!f.test(a.inputValue||""))return a.editorErrorMessage=a.inputErrorMessage||u("el.messagebox.error"),a.validateError=!0,!1;const L=a.inputValidator;if(typeof L=="function"){const Q=L(a.inputValue);if(Q===!1)return a.editorErrorMessage=a.inputErrorMessage||u("el.messagebox.error"),a.validateError=!0,!1;if(typeof Q=="string")return a.editorErrorMessage=Q,a.validateError=!0,!1}}return a.editorErrorMessage="",a.validateError=!1,!0},Qe=()=>{const f=M.value.$refs;return f.input||f.textarea},Fe=()=>{ae("close")},Ke=()=>{e.closeOnPressEscape&&Fe()};return e.lockScroll&&pn(y),On(y),{...We(a),ns:o,overlayEvent:P,visible:y,hasMessage:H,typeClass:p,contentId:b,inputId:c,btnSize:r,iconComponent:V,confirmButtonClasses:U,rootRef:w,focusStartRef:k,headerRef:z,inputRef:M,confirmRef:I,doClose:v,handleClose:Fe,onCloseRequested:Ke,handleWrapperClick:i,handleInputEnter:j,handleAction:ae,t:u}}}),et=["aria-label","aria-describedby"],nt=["aria-label"],tt=["id"];function ot(e,n,t,s,o,r){const u=K("el-icon"),m=K("close"),y=K("el-input"),a=K("el-button"),p=K("el-focus-trap"),b=K("el-overlay");return g(),B(he,{name:"fade-in-linear",onAfterLeave:n[11]||(n[11]=c=>e.$emit("vanish")),persisted:""},{default:h(()=>[ee(F(b,{"z-index":e.zIndex,"overlay-class":[e.ns.is("message-box"),e.modalClass],mask:e.modal},{default:h(()=>[T("div",{role:"dialog","aria-label":e.title,"aria-modal":"true","aria-describedby":e.showInput?void 0:e.contentId,class:d(`${e.ns.namespace.value}-overlay-message-box`),onClick:n[8]||(n[8]=(...c)=>e.overlayEvent.onClick&&e.overlayEvent.onClick(...c)),onMousedown:n[9]||(n[9]=(...c)=>e.overlayEvent.onMousedown&&e.overlayEvent.onMousedown(...c)),onMouseup:n[10]||(n[10]=(...c)=>e.overlayEvent.onMouseup&&e.overlayEvent.onMouseup(...c))},[F(p,{loop:"",trapped:e.visible,"focus-trap-el":e.rootRef,"focus-start-el":e.focusStartRef,onReleaseRequested:e.onCloseRequested},{default:h(()=>[T("div",{ref:"rootRef",class:d([e.ns.b(),e.customClass,e.ns.is("draggable",e.draggable),{[e.ns.m("center")]:e.center}]),style:ge(e.customStyle),tabindex:"-1",onClick:n[7]||(n[7]=_(()=>{},["stop"]))},[e.title!==null&&e.title!==void 0?(g(),X("div",{key:0,ref:"headerRef",class:d(e.ns.e("header"))},[T("div",{class:d(e.ns.e("title"))},[e.iconComponent&&e.center?(g(),B(u,{key:0,class:d([e.ns.e("status"),e.typeClass])},{default:h(()=>[(g(),B(x(e.iconComponent)))]),_:1},8,["class"])):A("v-if",!0),T("span",null,R(e.title),1)],2),e.showClose?(g(),X("button",{key:0,type:"button",class:d(e.ns.e("headerbtn")),"aria-label":e.t("el.messagebox.close"),onClick:n[0]||(n[0]=c=>e.handleAction(e.distinguishCancelAndClose?"close":"cancel")),onKeydown:n[1]||(n[1]=re(_(c=>e.handleAction(e.distinguishCancelAndClose?"close":"cancel"),["prevent"]),["enter"]))},[F(u,{class:d(e.ns.e("close"))},{default:h(()=>[F(m)]),_:1},8,["class"])],42,nt)):A("v-if",!0)],2)):A("v-if",!0),T("div",{id:e.contentId,class:d(e.ns.e("content"))},[T("div",{class:d(e.ns.e("container"))},[e.iconComponent&&!e.center&&e.hasMessage?(g(),B(u,{key:0,class:d([e.ns.e("status"),e.typeClass])},{default:h(()=>[(g(),B(x(e.iconComponent)))]),_:1},8,["class"])):A("v-if",!0),e.hasMessage?(g(),X("div",{key:1,class:d(e.ns.e("message"))},[me(e.$slots,"default",{},()=>[e.dangerouslyUseHTMLString?(g(),B(x(e.showInput?"label":"p"),{key:1,for:e.showInput?e.inputId:void 0,innerHTML:e.message},null,8,["for","innerHTML"])):(g(),B(x(e.showInput?"label":"p"),{key:0,for:e.showInput?e.inputId:void 0},{default:h(()=>[fe(R(e.dangerouslyUseHTMLString?"":e.message),1)]),_:1},8,["for"]))])],2)):A("v-if",!0)],2),ee(T("div",{class:d(e.ns.e("input"))},[F(y,{id:e.inputId,ref:"inputRef",modelValue:e.inputValue,"onUpdate:modelValue":n[2]||(n[2]=c=>e.inputValue=c),type:e.inputType,placeholder:e.inputPlaceholder,"aria-invalid":e.validateError,class:d({invalid:e.validateError}),onKeydown:re(e.handleInputEnter,["enter"])},null,8,["id","modelValue","type","placeholder","aria-invalid","class","onKeydown"]),T("div",{class:d(e.ns.e("errormsg")),style:ge({visibility:e.editorErrorMessage?"visible":"hidden"})},R(e.editorErrorMessage),7)],2),[[ne,e.showInput]])],10,tt),T("div",{class:d(e.ns.e("btns"))},[e.showCancelButton?(g(),B(a,{key:0,loading:e.cancelButtonLoading,class:d([e.cancelButtonClass]),round:e.roundButton,size:e.btnSize,onClick:n[3]||(n[3]=c=>e.handleAction("cancel")),onKeydown:n[4]||(n[4]=re(_(c=>e.handleAction("cancel"),["prevent"]),["enter"]))},{default:h(()=>[fe(R(e.cancelButtonText||e.t("el.messagebox.cancel")),1)]),_:1},8,["loading","class","round","size"])):A("v-if",!0),ee(F(a,{ref:"confirmRef",type:"primary",loading:e.confirmButtonLoading,class:d([e.confirmButtonClasses]),round:e.roundButton,disabled:e.confirmButtonDisabled,size:e.btnSize,onClick:n[5]||(n[5]=c=>e.handleAction("confirm")),onKeydown:n[6]||(n[6]=re(_(c=>e.handleAction("confirm"),["prevent"]),["enter"]))},{default:h(()=>[fe(R(e.confirmButtonText||e.t("el.messagebox.confirm")),1)]),_:1},8,["loading","class","round","disabled","size"]),[[ne,e.showConfirmButton]])],2)],6)]),_:3},8,["trapped","focus-trap-el","focus-start-el","onReleaseRequested"])],42,et)]),_:3},8,["z-index","overlay-class","mask"]),[[ne,e.visible]])]),_:3})}var st=Se(_n,[["render",ot],["__file","/home/runner/work/element-plus/element-plus/packages/components/message-box/src/index.vue"]]);const se=new Map,at=e=>{let n=document.body;return e.appendTo&&(ce(e.appendTo)&&(n=document.querySelector(e.appendTo)),be(e.appendTo)&&(n=e.appendTo),be(n)||(n=document.body)),n},rt=(e,n,t=null)=>{const s=F(st,e,oe(e.message)||pe(e.message)?{default:oe(e.message)?e.message:()=>e.message}:null);return s.appContext=t,ie(s,n),at(e).appendChild(n.firstElementChild),s.component},lt=()=>document.createElement("div"),ut=(e,n)=>{const t=lt();e.onVanish=()=>{ie(null,t),se.delete(o)},e.onAction=r=>{const u=se.get(o);let m;e.showInput?m={value:o.inputValue,action:r}:m=r,e.callback?e.callback(m,s.proxy):r==="cancel"||r==="close"?e.distinguishCancelAndClose&&r!=="cancel"?u.reject("close"):u.reject("cancel"):u.resolve(m)};const s=rt(e,t,n),o=s.proxy;for(const r in e)$e(e,r)&&!$e(o.$props,r)&&(o[r]=e[r]);return o.visible=!0,o};function W(e,n=null){if(!we)return Promise.reject();let t;return ce(e)||pe(e)?e={message:e}:t=e.callback,new Promise((s,o)=>{const r=ut(e,n??W._context);se.set(r,{options:e,callback:t,resolve:s,reject:o})})}const it=["alert","confirm","prompt"],dt={alert:{closeOnPressEscape:!1,closeOnClickModal:!1},confirm:{showCancelButton:!0},prompt:{showCancelButton:!0,showInput:!0}};it.forEach(e=>{W[e]=ct(e)});function ct(e){return(n,t,s,o)=>{let r="";return gn(t)?(s=t,r=""):yn(t)?r="":r=t,W(Object.assign({title:r,message:n,type:"",...dt[e]},s,{boxType:e}),o)}}W.close=()=>{se.forEach((e,n)=>{n.doClose()}),se.clear()};W._context=null;const q=W;q.install=e=>{q._context=e._context,e.config.globalProperties.$msgbox=q,e.config.globalProperties.$messageBox=q,e.config.globalProperties.$alert=q.alert,e.config.globalProperties.$confirm=q.confirm,e.config.globalProperties.$prompt=q.prompt};const mt=q;var O=(e=>(e[e.post=0]="post",e[e.put=1]="put",e[e.delete=2]="delete",e[e.export=3]="export",e))(O||{});const pt=()=>(n,t)=>({prop:"",label:"操作",align:"center",formatter(s){return Oe(Re,n.map(o=>Oe(ke,{...o,key:o.command,onClick:()=>t(o.command,s)},o.label)))}});function ft(e){const{get:n,post:t,put:s,delete:o,export:r,columns:u,mode:m,pagination:y,queryColumns:a,formColumns:p,commands:b,queryState:c}=e,V=(P,j)=>{switch(P){case O.post:v.setModel(j??{},!0),v.show({title:"新增",onSubmit:()=>v.submit(t)});break;case O.put:v.setModel(j??{},!0),v.show({title:"修改",onSubmit:()=>v.submit(s)});break;case O.delete:mt.confirm("确定删除所选的数据吗？","确认删除",{confirmButtonText:"确定",cancelButtonText:"取消"}).then(()=>o==null?void 0:o(j));break;case O.export:r==null||r(l(M.model),l(k));break}},H=pt(),{tableState:w,handleQuery:z,pagination:k}=Bn({columns:b?u.concat(H(b,V)):u,mode:m??vn.single,query:P=>n(l(M.model),P),pagination:y}),{formState:M,...I}=Sn({columns:a,initData:c}),U=()=>{I.submit(()=>z())},{formDialogState:D,...v}=wn({columns:p,post:kn}),i=()=>I.setModel({},!0);return{tableState:w,queryState:M,formDialogState:D,pagination:k,query:U,command:V,setForm:v.setModel,showDialog:v.show,hideialog:v.hide,resetQuery:i}}const Tt={title:"Example/useLayout",tags:["autodocs"],argTypes:{get:{description:"查询接口"},post:{description:"新增接口"},put:{description:"修改接口"},delete:{description:"删除接口"},export:{description:"导出接口"},commands:{description:"操作项",defaultValue:{summary:"CommandItem[]"}},columns:{description:"列表展示项",defaultValue:{summary:"同useTable的columns"}},pagination:{description:"分页信息",defaultValue:{summary:"参考el-pagination"}},mode:{description:"单页/无限滚动",defaultValue:{summary:"LoadMode.single"}},queryColumns:{description:"查询条件项",defaultValue:{summary:"同useForm的columns"}},queryState:{description:"默认查询条件",defaultValue:{summary:"同useForm的initData"}},formColumns:{description:"弹窗条件项",defaultValue:{summary:"同useFormDialog的columns"}}},parameters:{docs:{description:{component:`目前为TODO状态 未来阶段可能会修改或移除
提供基本的布局响应式状态
包括查询、新增、修改、删除、导出
不提供具体的页面布局组件`}}}},ue={args:{},render:()=>({components:{OneTable:bn,ElPagination:hn,OneFormDialog:En,ElButton:ke,OneForm:Cn},setup(){const{tableState:e,queryState:n,formDialogState:t,pagination:s,query:o,command:r,resetQuery:u}=ft({columns:[{label:"name",prop:"name"},{label:"age",prop:"age"},{label:"date",prop:"date",rFormat:Tn.dateTime}],queryColumns:[{label:"name",prop:"name"},{label:"age",prop:"age",rType:"number"}],formColumns:[{label:"name",prop:"name",requiredMsg:"必填啊"},{label:"age",prop:"age",rType:"number",min:0},{label:"date",prop:"date",rType:"date"}],get(a,p){return new Promise(b=>{setTimeout(()=>{const c=new Array(10).fill(0).map(()=>({date:new Date().toString(),name:`name-${p.currentPage}-${a.name}`,age:Math.random()}));b({list:c,total:100})},1e3)})},post(a){return new Promise(p=>{setTimeout(()=>{le.success("新增成功"),p()},1e3)})},put(a){return new Promise(p=>{setTimeout(()=>{le.success("修改成功"),p()},1e3)})},delete(a){return new Promise(p=>{setTimeout(()=>{le.success("删除成功"),p()},1e3)})},export(a,p){return new Promise(b=>{setTimeout(()=>{le.success("导出成功"),b()},1e3)})},commands:[{label:"编辑",command:O.put},{label:"导出",command:O.export},{label:"删除",command:O.delete,link:!0,type:"danger"}],queryState:{age:2}});return Be(o),{tableState:e,queryState:n,formDialogState:t,pagination:s,onAdd:()=>r(O.post),onExport:()=>r(O.export),query:o,resetQuery:u}},template:`
        <ElButton @click="onAdd">新增</ElButton>
        <ElButton @click="onExport">导出</ElButton>
        <OneForm v-bind="queryState" />
        <ElButton @click="query">查询</ElButton>
        <ElButton @click="resetQuery">重置</ElButton>
        <OneTable v-bind="tableState" height=300 />
        <ElPagination v-bind="pagination" />
        <OneFormDialog v-bind="formDialogState" />
      `})};var Le,qe,ze;ue.parameters={...ue.parameters,docs:{...(Le=ue.parameters)==null?void 0:Le.docs,source:{originalSource:`{
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
}`,...(ze=(qe=ue.parameters)==null?void 0:qe.docs)==null?void 0:ze.source}}};const St=["基础用例"];export{St as __namedExportsOrder,Tt as default,ue as 基础用例};
//# sourceMappingURL=UseLayout.stories-f729d67c.js.map
