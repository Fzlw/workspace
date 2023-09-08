import{h as I,d as B,r as x,u as N,o as E,n as Q,a as r,b as l}from"./vue.esm-bundler-ca95eab4.js";import"./index-c013ead5.js";import{X as P,Y as _,Z as O,$ as F}from"./el-message-box-0cba906a.js";import{f as j}from"./index-a2564e87.js";import{d as $}from"./index-82a350d0.js";import{u as U}from"./index-8daeb9f7.js";import"./_commonjsHelpers-725317a4.js";import"./cloneDeep-fd8ee826.js";function M(s){const i=O(),{tableState:u,editRow:m,delRow:c,cancelRow:p,saveRow:b,addRow:w,...t}=U({mapColumn(e){const{formItemProps:o,editable:v,formatter:d,...f}=j(e);return{...f,label:e.label,formatter(R,V,T,q){return(P(v)||v===!0)&&(R!=null&&R._editing)?I(_,{...o,label:""},{default:()=>i(R,f)??""}):d?d(R,V,T,q):$(T,f.rFormat,f.defaultValue)??T??f.defaultValue}}},...s}),n=B(null),a=x({tableState:u,model:null,ref(e){n.value=e==null?void 0:e.elForm}});return{verifyTableState:a,form:n,editRow:e=>{a.model||(a.model=e,m(e))},delRow:e=>{a.model=null,c(e)},cancelRow:e=>{a.model=null,p(e)},saveRow:async e=>{var o,v;try{const d=await((v=(o=n.value)==null?void 0:o.validate)==null?void 0:v.call(o));return d&&(a.model=null,b(e)),[!!d,null]}catch(d){return[!1,d]}},addRow:e=>{if(a.model)return;const o=w(e);return a.model=o,o},hasEditingRow:()=>!!N(a.model),...t}}const re={title:"Example/OneVerifyEditTable",component:F,tags:["autodocs"],argTypes:{columns:{description:"列信息",defaultValue:{summary:"VerifyEditTableColumn<T>[]"},control:{type:"object"}},model:{description:"表单数据对象(同el-form)",defaultValue:{summary:"object"},control:{type:"object"}}},parameters:{docs:{description:{component:`带验证条件的可编辑的表格
基于 el-form 和 OneTable 实现 $attrs会透传至OneTable`}}}},g={args:{},render:()=>({components:{Table:F},setup(){const{verifyTableState:s,handleQuery:i,editRow:u,cancelRow:m,delRow:c,saveRow:p,rowIsEditing:b,addRow:w}=M({columns:[{label:"Date",prop:"date",rFormat:0,rType:"date"},{label:"Name",prop:"name",requiredMsg:"name必填"},{label:"Address",prop:"address"},{label:"state",prop:"state",editable:!1,formatter(t){return b(t)?"编辑中":"-"}},{label:"opera",prop:"",editable:!1,formatter(t){return r("div",null,[r("div",{onClick:()=>u(t)},[l("edit")]),r("div",{onClick:()=>c(t)},[l("delete")]),r("div",{onClick:()=>m(t)},[l("cancel")]),r("div",{onClick:()=>p(t)},[l("save")])])}}],query(){return new Promise(t=>{setTimeout(()=>{const n=new Array(10).fill(0).map(()=>({date:new Date().toString(),name:"name",address:Math.random().toString()}));t({list:n,total:100})},1e3)})}});return E(i),{tableState:s,addRow:w}},template:`
        <button @click="addRow({})">add</button>
        <Table v-bind="tableState" height=300 />
      `})},y={args:{},render:()=>({components:{Table:F},setup(){const{verifyTableState:s,handleQuery:i,editRow:u,cancelRow:m,delRow:c,saveRow:p,rowIsEditing:b,table:w,form:t}=M({columns:[{label:"Date",prop:"date",rFormat:0,rType:"date"},{label:"Name",prop:"name",requiredMsg:"name必填"},{label:"Address",prop:"address"},{label:"state",prop:"state",editable:!1,formatter(n){return b(n)?"编辑中":"-"}},{label:"opera",prop:"",editable:!1,formatter(n){return r("div",null,[r("div",{onClick:()=>u(n)},[l("edit")]),r("div",{onClick:()=>c(n)},[l("delete")]),r("div",{onClick:()=>m(n)},[l("cancel")]),r("div",{onClick:()=>p(n)},[l("save")])])}}],query(){return new Promise(n=>{setTimeout(()=>{const a=new Array(10).fill(0).map(()=>({date:new Date().toString(),name:"name",address:Math.random().toString()}));n({list:a,total:100})},1e3)})}});return E(i),E(()=>{Q(()=>{console.log("组件实例：",w.value,t.value)})}),{tableState:s}},template:`
        <Table v-bind="tableState" height=300 />
      `})};var C,S,h;g.parameters={...g.parameters,docs:{...(C=g.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
          verifyTableState,
          handleQuery,
          editRow,
          cancelRow,
          delRow,
          saveRow,
          rowIsEditing,
          addRow
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
                const list = new Array(10).fill(0).map(() => ({
                  date: new Date().toString(),
                  name: 'name',
                  address: Math.random().toString()
                }));
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
          tableState: verifyTableState,
          addRow
        };
      },
      template: \`
        <button @click="addRow({})">add</button>
        <Table v-bind="tableState" height=300 />
      \`
    };
  }
}`,...(h=(S=g.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};var k,A,D;y.parameters={...y.parameters,docs:{...(k=y.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
          verifyTableState,
          handleQuery,
          editRow,
          cancelRow,
          delRow,
          saveRow,
          rowIsEditing,
          table,
          form
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
                const list = new Array(10).fill(0).map(() => ({
                  date: new Date().toString(),
                  name: 'name',
                  address: Math.random().toString()
                }));
                r({
                  list,
                  total: 100
                });
              }, 1000);
            });
          }
        });
        onMounted(handleQuery);
        onMounted(() => {
          nextTick(() => {
            console.log('组件实例：', table.value, form.value);
          });
        });
        return {
          tableState: verifyTableState
        };
      },
      template: \`
        <Table v-bind="tableState" height=300 />
      \`
    };
  }
}`,...(D=(A=y.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};const oe=["基础用例","获取ElForm和ElTable组件实例"];export{oe as __namedExportsOrder,re as default,g as 基础用例,y as 获取ElForm和ElTable组件实例};
//# sourceMappingURL=VerifyEditTable.stories-a9f85441.js.map
