import{L as f,X as z,a1 as y}from"./el-message-box-442f4f74.js";import{P as h,x as w,r as D,u as c,w as M}from"./vue.esm-bundler-2b92b106.js";var T=(t=>(t[t.dateTime=0]="dateTime",t[t.date=1]="date",t))(T||{});const v=t=>y(t).format("YYYY-MM-DD HH:mm:ss"),C=t=>y(t).format("YYYY-MM-DD"),b=(t,u,r)=>{if(u===0&&t)return v(t);if(u===1&&t)return C(t);if(t==="")return r},q=t=>{const u=h(null),r=w({currentPage:1,pageSize:20,total:0,pageSizes:[10,20,30,40,50],layout:"sizes, total, prev, pager, next, jumper","onUpdate:pageSize"(e){r.pageSize=e},"onUpdate:currentPage"(e){r.currentPage=e},...t.pagination}),g=h(t.columns.map(e=>{const{defaultValue:a="-",rFormat:s,formatter:d,...o}=e;return{...o,formatter:(i,S,l,Y)=>d?d(i,S,l,Y):b(l,s,a)??l??a,...e.type==="index"&&{index:e.index??(i=>t.mode===f.infinite?i+1:(r.currentPage-1)*r.pageSize+i+1)},...t.mapColumn&&t.mapColumn(e)}})),n=D({loading:!1,pending:!1,data:[],selected:[],columns:c(g).filter(e=>!e.hidden),mode:t.mode??f.single,onNext(){n.mode===f.infinite&&p()},"onUpdate:selected"(e){n.selected=e},ref(e){u.value=e==null?void 0:e.elTable}}),m=async(e=!1)=>{if(!(!t.query||n.pending))try{n.pending=!0,!e&&(n.loading=!0);const a=await t.query(c(r)),{list:s=[],total:d=0}=a??{},o=r.currentPage;n.data=o===1||n.mode===f.single?s:n.data.concat(s),r.total=d||s.length,n.pending=!1,n.loading=!1}catch(a){throw n.pending=!1,n.loading=!1,a}},p=()=>{const{currentPage:e,pageSize:a,total:s=0}=r;!n.loading&&e*a<s&&(r.currentPage=e+1)},P=e=>{for(const a in e)a in n&&(n[a]=e[a])},x=(e,a)=>{if(!e)return;const s=typeof e=="string"?{[e]:a}:Array.isArray(e)?e.reduce((o,i)=>(i&&(o[i]=a),o),{}):e,d=[];for(const o of c(g)){const i=o.prop;i&&i in s&&(o.hidden=z(s[i])?!o.hidden:!s[i]),!o.hidden&&d.push(o)}n.columns=d};return M(()=>[r.currentPage],()=>m()),{tableState:n,pagination:r,table:u,handleQuery:m,handleNext:p,setState:P,toggleColumn:x}};export{T as F,b as d,q as u};
//# sourceMappingURL=index-b5f4c8aa.js.map