import{P as p,r as y,u as f,t as b}from"./vue.esm-bundler-2b92b106.js";import{c as d}from"./cloneDeep-cb4525b6.js";import{X as h}from"./el-message-box-442f4f74.js";const g=i=>{const{prop:l,formItemProps:u,labelWidth:e,rules:a,requiredMsg:c,...C}=i;return{...C,prop:l,formItemProps:{prop:l,labelWidth:e,rules:a||(c?[{required:!0,message:c}]:void 0),...u}}};function j(i){const l=p(null),u=p(i.columns.map(o=>g(o))),e=y({submitting:!1,model:{...i.initData??null},columns:f(u).filter(o=>!o.hidden),ref(o){l.value=o==null?void 0:o.elForm}});return{formState:e,getColumn:o=>{for(const t of f(u))if(t.prop===o)return t;return null},setColumn:(o,t,n)=>{for(const m of e.columns)if(m.prop===o){for(const r of i.columns)if(r.prop===o){const s=d(r),w=g(Object.assign(s,t));Object.assign(m,w);break}break}h(n)||(e.model[o]=n)},toggleColumn:(o,t)=>{if(!o)return;const n=typeof o=="string"?{[o]:t}:Array.isArray(o)?o.reduce((r,s)=>(s&&(r[s]=t),r),{}):o,m=[];for(const r of f(u)){const s=r.prop;s&&s in n&&(r.hidden=h(n[s])?!r.hidden:!n[s]),!r.hidden&&m.push(r)}e.columns=m},submit:async o=>{var t;try{e.submitting=!0,(await((t=l.value)==null?void 0:t.validate())??!0)&&o&&await o(d(b(e.model))),e.submitting=!1}catch(n){throw e.submitting=!1,n}},setModel:(o,t=!1)=>{var n;if(t){e.model=d(b(o)),e.columns=f(u).filter(m=>!m.hidden),(n=l.value)==null||n.clearValidate();return}e.model={...e.model,...o}},form:l,getModel:o=>e.model[o],patchColumn:(o,t)=>{if(t){const n=g({...t,prop:o.prop,formItemProps:o.formItemProps});Object.assign(o,n)}}}}export{g as f,j as u};
//# sourceMappingURL=index-ffcd473e.js.map
