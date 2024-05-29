import{h as P,u,P as x,d as N,g as Q,o as F,n as _,a,b as d}from"./vue.esm-bundler-2b92b106.js";import"./index-c013ead5.js";import{Z as O,$ as j,a0 as L,L as $,a1 as S}from"./el-message-box-0e7d5819.js";import{f as U}from"./index-507dd2a8.js";import{d as Z}from"./index-17335d71.js";import{u as z}from"./index-e2a56f9c.js";import"./_commonjsHelpers-725317a4.js";import"./cloneDeep-bdfe0376.js";function V(s){const{tableState:m,editRow:c,delRow:p,cancelRow:b,saveRow:v,addRow:w,...f}=z({mapColumn(n){const{formItemProps:o,editable:l,formatter:i,...R}=U(n);return{...R,formatter(y,B,C,I){return(O(l)||l===!0)&&(y!=null&&y._editing)?P(L,{...o,label:""},{default:()=>j(y,R)??""}):i?i(y,B,C,I):Z(C,R.rFormat,R.defaultValue)??C??R.defaultValue}}},...s,...s.query&&{query(n){return(n.currentPage===1||u(m).mode===$.single)&&u(e)&&(e.value=null),s.query(n)}}}),r=x(null),e=N(null);return{verifyTableState:Q(()=>({tableState:u(m),model:u(e),ref(n){r.value=n==null?void 0:n.elForm}})),form:r,editRow:n=>{u(e)||(e.value=n,c(n))},delRow:n=>{e.value=null,p(n)},cancelRow:n=>{e.value=null,b(n)},saveRow:async n=>{var o,l;try{const i=await((l=(o=r.value)==null?void 0:o.validate)==null?void 0:l.call(o));return i&&(e.value=null,v(n)),[!!i,null]}catch(i){return[!1,i]}},addRow:(n,o=-1)=>{if(u(e))return;const l=w(n,o);return e.value=l,l},hasEditingRow:()=>!!u(e),...f}}const le={title:"Example/OneVerifyEditTable",component:S,tags:["autodocs"],argTypes:{columns:{description:"列信息",defaultValue:{summary:"VerifyEditTableColumn<T>[]"},control:{type:"object"}},model:{description:"表单数据对象(同el-form)",defaultValue:{summary:"object"},control:{type:"object"}}},parameters:{docs:{description:{component:`带验证条件的可编辑的表格
基于 el-form 和 OneTable 实现 $attrs会透传至OneTable`}}}},g={args:{},render:()=>({components:{Table:S},setup(){const{verifyTableState:s,handleQuery:m,editRow:c,cancelRow:p,delRow:b,saveRow:v,rowIsEditing:w,addRow:f,setColumn:r}=V({columns:[{label:"Date",prop:"date",rFormat:0,rType:"date"},{label:"Name",prop:"name",requiredMsg:"name必填"},{label:"Address",prop:"address"},{label:"Custom",prop:"custom"},{label:"state",prop:"state",editable:!1,formatter(t){return w(t)?"编辑中":"-"}},{label:"opera",prop:"",editable:!1,formatter(t){return a("div",null,[a("div",{onClick:()=>{r("custom",{editable:!1}),c(t)}},[d("edit")]),a("div",{onClick:()=>b(t)},[d("delete")]),a("div",{onClick:()=>p(t)},[d("cancel")]),a("div",{onClick:()=>v(t)},[d("save")])])}}],query(){return new Promise(t=>{setTimeout(()=>{const T=new Array(10).fill(0).map(()=>({date:new Date().toString(),name:"name",address:Math.random().toString(),custom:"新增时可编辑"}));t({list:T,total:100})},1e3)})}});return F(m),{tableState:s,onAdd:()=>{r("custom",{editable:!0}),f({})}}},template:`
        <button @click="onAdd">add</button>
        <Table v-bind="tableState" height=300 />
      `})},E={args:{},render:()=>({components:{Table:S},setup(){const{verifyTableState:s,handleQuery:m,editRow:c,cancelRow:p,delRow:b,saveRow:v,rowIsEditing:w,table:f,form:r}=V({columns:[{label:"Date",prop:"date",rFormat:0,rType:"date"},{label:"Name",prop:"name",requiredMsg:"name必填"},{label:"Address",prop:"address"},{label:"state",prop:"state",editable:!1,formatter(e){return w(e)?"编辑中":"-"}},{label:"opera",prop:"",editable:!1,formatter(e){return a("div",null,[a("div",{onClick:()=>c(e)},[d("edit")]),a("div",{onClick:()=>b(e)},[d("delete")]),a("div",{onClick:()=>p(e)},[d("cancel")]),a("div",{onClick:()=>v(e)},[d("save")])])}}],query(){return new Promise(e=>{setTimeout(()=>{const t=new Array(10).fill(0).map(()=>({date:new Date().toString(),name:"name",address:Math.random().toString()}));e({list:t,total:100})},1e3)})}});return F(m),F(()=>{_(()=>{console.log("组件实例：",f.value,r.value)})}),{tableState:s}},template:`
        <Table v-bind="tableState" height=300 />
      `})};var h,k,A;g.parameters={...g.parameters,docs:{...(h=g.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
          addRow,
          setColumn
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
            label: 'Custom',
            prop: 'custom'
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
              const onEdit = () => {
                setColumn('custom', {
                  editable: false
                });
                editRow(row);
              };
              return <div>
                      <div onClick={onEdit}>edit</div>
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
                  address: Math.random().toString(),
                  custom: '新增时可编辑'
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
        const onAdd = () => {
          setColumn('custom', {
            editable: true
          });
          addRow(({} as any));
        };
        return {
          tableState: verifyTableState,
          onAdd
        };
      },
      template: \`
        <button @click="onAdd">add</button>
        <Table v-bind="tableState" height=300 />
      \`
    };
  }
}`,...(A=(k=g.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};var M,D,q;E.parameters={...E.parameters,docs:{...(M=E.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(q=(D=E.parameters)==null?void 0:D.docs)==null?void 0:q.source}}};const de=["基础用例","获取ElForm和ElTable组件实例"];export{de as __namedExportsOrder,le as default,g as 基础用例,E as 获取ElForm和ElTable组件实例};
//# sourceMappingURL=VerifyEditTable.stories-f3b5a9de.js.map
