import{L as s,a1 as m}from"./el-message-box-75759634.js";import{r as f,w as P,u as h}from"./vue.esm-bundler-b66df92b.js";var z=(e=>(e[e.dateTime=0]="dateTime",e[e.date=1]="date",e))(z||{});const S=(e,a,r)=>{if(a===0&&e)return m(e).format("YYYY-MM-DD HH:mm:ss");if(a===1&&e)return m(e).format("YYYY-MM-DD");if(e==="")return r},D=e=>{const a=f({currentPage:1,pageSize:20,total:0,pageSizes:[10,20,30,40,50],layout:"sizes, total, prev, pager, next, jumper","onUpdate:pageSize"(t){a.pageSize=t},"onUpdate:currentPage"(t){a.currentPage=t},...e.pagination}),r=f({loading:!1,data:[],selected:[],columns:e.columns.map(t=>{var g;const{defaultValue:n="-",rFormat:o,formatter:i,...l}=t;return((g=e.mapColumn)==null?void 0:g.call(e,t))??{...l,formatter:(p,Y,d,y)=>i?i(p,Y,d,y):S(d,o,n)??d??n}}),mode:e.mode??s.single,onNext(){r.mode===s.infinite&&c()},"onUpdate:selected"(t){r.selected=t}}),u=async()=>{if(!(!e.query||r.loading)){try{r.loading=!0;const t=await e.query(h(a)),{list:n=[],total:o=0}=t??{},i=a.currentPage;r.data=i===1||r.mode===s.single?n:r.data.concat(n),a.total=o||n.length}catch(t){console.error(t)}r.loading=!1}},c=()=>{const{currentPage:t,pageSize:n,total:o=0}=a;!r.loading&&t*n<o&&(a.currentPage=t+1)};return P(()=>[a.currentPage],u),{tableState:r,pagination:a,handleQuery:u,handleNext:c}};export{z as F,S as d,D as u};
//# sourceMappingURL=index-195384f1.js.map
