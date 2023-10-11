import{h as B,P as x,d as N,g as P,u as R,o as E,n as Q,a,b as o}from"./vue.esm-bundler-2b92b106.js";import"./index-c013ead5.js";import{X as _,Y as O,Z as j,$ as F}from"./el-message-box-dfb8e93c.js";import{f as $}from"./index-de164c88.js";import{d as U}from"./index-83833a79.js";import{u as X}from"./index-15d62663.js";import"./_commonjsHelpers-725317a4.js";import"./cloneDeep-da0589d6.js";function V(d){const{tableState:s,editRow:i,delRow:u,cancelRow:m,saveRow:c,addRow:p,...b}=X({mapColumn(n){const{formItemProps:r,editable:v,formatter:l,...w}=$(n);return{...w,label:n.label,formatter(f,q,T,I){return(_(v)||v===!0)&&(f!=null&&f._editing)?B(j,{...r,label:""},{default:()=>O(f,w)??""}):l?l(f,q,T,I):U(T,w.rFormat,w.defaultValue)??T??w.defaultValue}}},...d}),t=x(null),e=N(null);return{verifyTableState:P(()=>({tableState:R(s),model:R(e),ref(n){t.value=n==null?void 0:n.elForm}})),form:t,editRow:n=>{R(e)||(e.value=n,i(n))},delRow:n=>{e.value=null,u(n)},cancelRow:n=>{e.value=null,m(n)},saveRow:async n=>{var r,v;try{const l=await((v=(r=t.value)==null?void 0:r.validate)==null?void 0:v.call(r));return l&&(e.value=null,c(n)),[!!l,null]}catch(l){return[!1,l]}},addRow:n=>{if(R(e))return;const r=p(n);return e.value=r,r},hasEditingRow:()=>!!R(e),...b}}const oe={title:"Example/OneVerifyEditTable",component:F,tags:["autodocs"],argTypes:{columns:{description:"列信息",defaultValue:{summary:"VerifyEditTableColumn<T>[]"},control:{type:"object"}},model:{description:"表单数据对象(同el-form)",defaultValue:{summary:"object"},control:{type:"object"}}},parameters:{docs:{description:{component:`带验证条件的可编辑的表格
基于 el-form 和 OneTable 实现 $attrs会透传至OneTable`}}}},g={args:{},render:()=>({components:{Table:F},setup(){const{verifyTableState:d,handleQuery:s,editRow:i,cancelRow:u,delRow:m,saveRow:c,rowIsEditing:p,addRow:b}=V({columns:[{label:"Date",prop:"date",rFormat:0,rType:"date"},{label:"Name",prop:"name",requiredMsg:"name必填"},{label:"Address",prop:"address"},{label:"state",prop:"state",editable:!1,formatter(t){return p(t)?"编辑中":"-"}},{label:"opera",prop:"",editable:!1,formatter(t){return a("div",null,[a("div",{onClick:()=>i(t)},[o("edit")]),a("div",{onClick:()=>m(t)},[o("delete")]),a("div",{onClick:()=>u(t)},[o("cancel")]),a("div",{onClick:()=>c(t)},[o("save")])])}}],query(){return new Promise(t=>{setTimeout(()=>{const e=new Array(10).fill(0).map(()=>({date:new Date().toString(),name:"name",address:Math.random().toString()}));t({list:e,total:100})},1e3)})}});return E(s),{tableState:d,addRow:b}},template:`
        <button @click="addRow({})">add</button>
        <Table v-bind="tableState" height=300 />
      `})},y={args:{},render:()=>({components:{Table:F},setup(){const{verifyTableState:d,handleQuery:s,editRow:i,cancelRow:u,delRow:m,saveRow:c,rowIsEditing:p,table:b,form:t}=V({columns:[{label:"Date",prop:"date",rFormat:0,rType:"date"},{label:"Name",prop:"name",requiredMsg:"name必填"},{label:"Address",prop:"address"},{label:"state",prop:"state",editable:!1,formatter(e){return p(e)?"编辑中":"-"}},{label:"opera",prop:"",editable:!1,formatter(e){return a("div",null,[a("div",{onClick:()=>i(e)},[o("edit")]),a("div",{onClick:()=>m(e)},[o("delete")]),a("div",{onClick:()=>u(e)},[o("cancel")]),a("div",{onClick:()=>c(e)},[o("save")])])}}],query(){return new Promise(e=>{setTimeout(()=>{const S=new Array(10).fill(0).map(()=>({date:new Date().toString(),name:"name",address:Math.random().toString()}));e({list:S,total:100})},1e3)})}});return E(s),E(()=>{Q(()=>{console.log("组件实例：",b.value,t.value)})}),{tableState:d}},template:`
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
}`,...(k=(h=g.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};var A,D,M;y.parameters={...y.parameters,docs:{...(A=y.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(M=(D=y.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};const le=["基础用例","获取ElForm和ElTable组件实例"];export{le as __namedExportsOrder,oe as default,g as 基础用例,y as 获取ElForm和ElTable组件实例};
//# sourceMappingURL=VerifyEditTable.stories-db66326a.js.map
