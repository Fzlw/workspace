import{d as V,a as D,o as k,e as _,w as x,u as h,b as s,m as I,h as q,r as A,t as N,p as P,l as S}from"./vue.esm-bundler-c47e0f3b.js";import"./index-c013ead5.js";import{i as B}from"./el-loading-2c8f0dc1.js";import{a as Q,f as U,E as $}from"./index-45a06ca4.js";import{_ as O,d as j}from"./index-2fddcceb.js";import{u as z}from"./index-a872ae1c.js";import{u as G}from"./index-bda78a88.js";import"./_commonjsHelpers-725317a4.js";const y=V({__name:"VerifyEditTable",props:{model:null,columns:null},setup(i,{expose:m}){const d=i,r=D({});return m({validate:n=>r.value.validate(n),validateField:(n,a)=>r.value.validateField(n,a),resetFields:n=>r.value.resetFields(n),scrollToField:n=>r.value.scrollToField(n),clearValidate:n=>r.value.clearValidate(n)}),(n,a)=>(k(),_(h(Q),{model:d.model,ref_key:"form",ref:r},{default:x(()=>[s(h(O),I(n.$attrs,{columns:d.columns}),null,16,["columns"])]),_:1},8,["model"]))}});y.__docgenInfo={exportName:"default",displayName:"VerifyEditTable",description:"",tags:{},expose:[{name:"validate"},{name:"validateField"},{name:"resetFields"},{name:"scrollToField"},{name:"clearValidate"}],props:[{name:"model",required:!0,type:{name:"TSIndexedAccessType"}},{name:"columns",required:!0,type:{name:"Array",elements:[{name:"VerifyEditTableColumn",elements:[{name:"T"}]}]}}],sourceFiles:["/home/runner/work/workspace/workspace/packages/component/src/VerifyEditTable/VerifyEditTable.vue"]};const H=i=>{const m=z(),{tableState:d,editRow:r,delRow:w,cancelRow:f,saveRow:g,addRow:t,...v}=G({mapColumn(e){const{formItemProps:l,editable:c,formatter:o,...u}=U(e);return{...u,label:e.label,formatter(p,M,R,C){return(B(c)||c===!0)&&(p!=null&&p._editing)?q($,{...l},{default:()=>m(p,u)??""}):o?o(p,M,R,C):j(R,u.rFormat,u.defaultValue)??R??u.defaultValue}}},...i}),n=D(null),a=A({...N(d),model:null,ref(e){n.value=e}});return{editRow:e=>{a.model||(a.model=e,r(e))},delRow:e=>{a.model=null,w(e)},cancelRow:e=>{a.model=null,f(e)},saveRow:async e=>{var l,c;try{const o=await((c=(l=n.value)==null?void 0:l.validate)==null?void 0:c.call(l));return o&&(a.model=null,g(e)),[!!o,null]}catch(o){return[!1,o]}},addRow:e=>{a.model||t(e)},tableState:a,getEditingRow:()=>h(a.model),...v}},le={title:"Example/VerifyEditTable",component:y,tags:["autodocs"],args:{loading:!1,height:300}},b={args:{},render:()=>({components:{Table:y},setup(){const{tableState:i,handleQuery:m,editRow:d,cancelRow:r,delRow:w,saveRow:f,rowIsEditing:g}=H({columns:[{label:"Date",prop:"date",rFormat:0,rType:"date"},{label:"Name",prop:"name",requiredMsg:"name必填"},{label:"Address",prop:"address"},{label:"state",prop:"state",editable:!1,formatter(t){return g(t)?"编辑中":"-"}},{label:"opera",prop:"",editable:!1,formatter(t){return s("div",null,[s("div",{onClick:()=>d(t)},[S("edit")]),s("div",{onClick:()=>w(t)},[S("delete")]),s("div",{onClick:()=>r(t)},[S("cancel")]),s("div",{onClick:()=>f(t)},[S("save")])])}}],query(){return new Promise(t=>{setTimeout(()=>{const v=[{date:new Date().toString(),name:"name",address:Math.random().toString()},{date:new Date().toString(),name:"name",address:Math.random().toString()},{date:new Date().toString(),name:"name",address:Math.random().toString()},{date:new Date().toString(),name:"name",address:Math.random().toString()},{date:new Date().toString(),name:"name",address:Math.random().toString()},{date:new Date().toString(),name:"name",address:Math.random().toString()},{date:new Date().toString(),name:"name",address:Math.random().toString()},{date:new Date().toString(),name:"name",address:Math.random().toString()}];t({list:v,total:100})},1e3)})}});return P(m),{tableState:i}},template:`
        <Table v-bind="tableState" height=300 />
      `})};var T,E,F;b.parameters={...b.parameters,docs:{...(T=b.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {},
  render: () => {
    return {
      components: {
        Table
      },
      setup() {
        type Row = {
          date: string;
          name: string;
          address: string;
        };
        const {
          tableState,
          handleQuery,
          editRow,
          cancelRow,
          delRow,
          saveRow,
          rowIsEditing
        } = useVerifyEditTable<Row>({
          columns: [{
            label: 'Date',
            prop: 'date',
            rFormat: 0,
            rType: 'date'
          }, {
            label: 'Name',
            prop: 'name',
            requiredMsg: 'name必填'
          }, {
            label: 'Address',
            prop: 'address'
          }, {
            label: 'state',
            prop: 'state',
            editable: false,
            formatter(row) {
              return rowIsEditing(row) ? '编辑中' : '-';
            }
          }, {
            label: 'opera',
            prop: '',
            editable: false,
            formatter(row) {
              return <div>
                    <div onClick={() => editRow(row)}>edit</div>
                    <div onClick={() => delRow(row)}>delete</div>
                    <div onClick={() => cancelRow(row)}>cancel</div>
                    <div onClick={() => saveRow(row)}>save</div>
                  </div>;
            }
          }],
          query() {
            return new Promise(r => {
              setTimeout(() => {
                const list = [{
                  date: new Date().toString(),
                  name: 'name',
                  address: Math.random().toString()
                }, {
                  date: new Date().toString(),
                  name: 'name',
                  address: Math.random().toString()
                }, {
                  date: new Date().toString(),
                  name: 'name',
                  address: Math.random().toString()
                }, {
                  date: new Date().toString(),
                  name: 'name',
                  address: Math.random().toString()
                }, {
                  date: new Date().toString(),
                  name: 'name',
                  address: Math.random().toString()
                }, {
                  date: new Date().toString(),
                  name: 'name',
                  address: Math.random().toString()
                }, {
                  date: new Date().toString(),
                  name: 'name',
                  address: Math.random().toString()
                }, {
                  date: new Date().toString(),
                  name: 'name',
                  address: Math.random().toString()
                }];
                r({
                  list,
                  total: 100
                });
              }, 1000);
            });
          }
        });
        onMounted(handleQuery);
        return {
          tableState
        };
      },
      template: \`
        <Table v-bind="tableState" height=300 />
      \`
    };
  }
}`,...(F=(E=b.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};const se=["UseVerifyEditTable"];export{b as UseVerifyEditTable,se as __namedExportsOrder,le as default};
//# sourceMappingURL=VerifyEditTable.stories-7f32327e.js.map
