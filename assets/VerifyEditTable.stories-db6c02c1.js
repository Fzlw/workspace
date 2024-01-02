import{h as B,u as s,P,d as x,g as N,o as E,n as Q,a,b as l}from"./vue.esm-bundler-2b92b106.js";import"./index-c013ead5.js";import{Z as _,$ as O,a0 as j,L,a1 as F}from"./el-message-box-8a9f8ff9.js";import{f as $}from"./index-e52b75b1.js";import{d as U}from"./index-6a8811e1.js";import{u as Z}from"./index-5085b121.js";import"./_commonjsHelpers-725317a4.js";import"./cloneDeep-1581ee03.js";function q(d){const{tableState:u,editRow:m,delRow:c,cancelRow:p,saveRow:b,addRow:v,...w}=Z({mapColumn(n){const{formItemProps:r,editable:o,formatter:i,...f}=$(n);return{...f,formatter(R,V,T,I){return(_(o)||o===!0)&&(R!=null&&R._editing)?B(j,{...r,label:""},{default:()=>O(R,f)??""}):i?i(R,V,T,I):U(T,f.rFormat,f.defaultValue)??T??f.defaultValue}}},...d,...d.query&&{query(n){return(n.currentPage===1||s(u).mode===L.single)&&s(e)&&(e.value=null),d.query(n)}}}),t=P(null),e=x(null);return{verifyTableState:N(()=>({tableState:s(u),model:s(e),ref(n){t.value=n==null?void 0:n.elForm}})),form:t,editRow:n=>{s(e)||(e.value=n,m(n))},delRow:n=>{e.value=null,c(n)},cancelRow:n=>{e.value=null,p(n)},saveRow:async n=>{var r,o;try{const i=await((o=(r=t.value)==null?void 0:r.validate)==null?void 0:o.call(r));return i&&(e.value=null,b(n)),[!!i,null]}catch(i){return[!1,i]}},addRow:(n,r=-1)=>{if(s(e))return;const o=v(n,r);return e.value=o,o},hasEditingRow:()=>!!s(e),...w}}const le={title:"Example/OneVerifyEditTable",component:F,tags:["autodocs"],argTypes:{columns:{description:"列信息",defaultValue:{summary:"VerifyEditTableColumn<T>[]"},control:{type:"object"}},model:{description:"表单数据对象(同el-form)",defaultValue:{summary:"object"},control:{type:"object"}}},parameters:{docs:{description:{component:`带验证条件的可编辑的表格
基于 el-form 和 OneTable 实现 $attrs会透传至OneTable`}}}},g={args:{},render:()=>({components:{Table:F},setup(){const{verifyTableState:d,handleQuery:u,editRow:m,cancelRow:c,delRow:p,saveRow:b,rowIsEditing:v,addRow:w}=q({columns:[{label:"Date",prop:"date",rFormat:0,rType:"date"},{label:"Name",prop:"name",requiredMsg:"name必填"},{label:"Address",prop:"address"},{label:"state",prop:"state",editable:!1,formatter(t){return v(t)?"编辑中":"-"}},{label:"opera",prop:"",editable:!1,formatter(t){return a("div",null,[a("div",{onClick:()=>m(t)},[l("edit")]),a("div",{onClick:()=>p(t)},[l("delete")]),a("div",{onClick:()=>c(t)},[l("cancel")]),a("div",{onClick:()=>b(t)},[l("save")])])}}],query(){return new Promise(t=>{setTimeout(()=>{const e=new Array(10).fill(0).map(()=>({date:new Date().toString(),name:"name",address:Math.random().toString()}));t({list:e,total:100})},1e3)})}});return E(u),{tableState:d,addRow:w}},template:`
        <button @click="addRow({})">add</button>
        <Table v-bind="tableState" height=300 />
      `})},y={args:{},render:()=>({components:{Table:F},setup(){const{verifyTableState:d,handleQuery:u,editRow:m,cancelRow:c,delRow:p,saveRow:b,rowIsEditing:v,table:w,form:t}=q({columns:[{label:"Date",prop:"date",rFormat:0,rType:"date"},{label:"Name",prop:"name",requiredMsg:"name必填"},{label:"Address",prop:"address"},{label:"state",prop:"state",editable:!1,formatter(e){return v(e)?"编辑中":"-"}},{label:"opera",prop:"",editable:!1,formatter(e){return a("div",null,[a("div",{onClick:()=>m(e)},[l("edit")]),a("div",{onClick:()=>p(e)},[l("delete")]),a("div",{onClick:()=>c(e)},[l("cancel")]),a("div",{onClick:()=>b(e)},[l("save")])])}}],query(){return new Promise(e=>{setTimeout(()=>{const S=new Array(10).fill(0).map(()=>({date:new Date().toString(),name:"name",address:Math.random().toString()}));e({list:S,total:100})},1e3)})}});return E(u),E(()=>{Q(()=>{console.log("组件实例：",w.value,t.value)})}),{tableState:d}},template:`
        <Table v-bind="tableState" height=300 />
      `})};var C,h,k;g.parameters={...g.parameters,docs:{...(C=g.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(k=(h=g.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};var A,M,D;y.parameters={...y.parameters,docs:{...(A=y.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(D=(M=y.parameters)==null?void 0:M.docs)==null?void 0:D.source}}};const de=["基础用例","获取ElForm和ElTable组件实例"];export{de as __namedExportsOrder,le as default,g as 基础用例,y as 获取ElForm和ElTable组件实例};
//# sourceMappingURL=VerifyEditTable.stories-db6c02c1.js.map
