import{d as i,g as b,w as h,u as C}from"./vue.esm-bundler-2b92b106.js";import{u as w}from"./index-507dd2a8.js";function D(o){const{formState:s,getModel:c,...t}=w(o),n=i(!1),a=i({}),l=(e=o.post)=>t.submit(async u=>{n.value&&e&&await e(u),r()}),m=e=>{n.value=e,!e&&(a.value={})},f=()=>l(o.post),d=b(()=>({formState:s,visible:n.value,submitting:s.submitting,"onUpdate:modelValue":m,onSubmit:f,...a.value})),v=e=>{e&&(a.value=e),n.value=!0},r=()=>{n.value=!1},g=()=>{if(o.onClose)return o.onClose();t.setModel({},!0)};return h(n,e=>{var u;e?(u=o.onOpen)==null||u.call(o):g()}),{...t,formDialogState:d,show:v,hide:r,submit:l,getModel:c,forEachColumns:e=>C(t.originColumns).forEach(e)}}export{D as u};
//# sourceMappingURL=index-223e4f80.js.map
