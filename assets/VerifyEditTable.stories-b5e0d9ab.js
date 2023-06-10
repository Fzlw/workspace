import{h as k,d as A,r as V,H as D,u as M,o as I,a as i,b as u}from"./vue.esm-bundler-b66df92b.js";import"./index-c013ead5.js";import{X as _,Y as q,Z as x,$ as F}from"./el-message-box-75759634.js";import{f as B}from"./index-4ced5a21.js";import{d as N}from"./index-195384f1.js";import{u as O}from"./index-3dd2494e.js";import"./_commonjsHelpers-725317a4.js";import"./cloneDeep-37d6b104.js";function j(c){const p=x(),{tableState:f,editRow:w,delRow:b,cancelRow:v,saveRow:R,addRow:y,...n}=O({mapColumn(e){const{formItemProps:a,editable:l,formatter:o,...d}=B(e);return{...d,label:e.label,formatter(s,S,g,h){return(_(l)||l===!0)&&(s!=null&&s._editing)?k(q,{...a,label:""},{default:()=>p(s,d)??""}):o?o(s,S,g,h):N(g,d.rFormat,d.defaultValue)??g??d.defaultValue}}},...c}),r=A(null),t=V({...D(f),model:null,ref(e){r.value=e}});return{verifyTableState:t,form:r,editRow:e=>{t.model||(t.model=e,w(e))},delRow:e=>{t.model=null,b(e)},cancelRow:e=>{t.model=null,v(e)},saveRow:async e=>{var a,l;try{const o=await((l=(a=r.value)==null?void 0:a.validate)==null?void 0:l.call(a));return o&&(t.model=null,R(e)),[!!o,null]}catch(o){return[!1,o]}},addRow:e=>{if(t.model)return;const a=y(e);return t.model=a,a},hasEditingRow:()=>!!M(t.model),...n}}const ee={title:"Example/OneVerifyEditTable",component:F,tags:["autodocs"],argTypes:{columns:{description:"列信息",defaultValue:{summary:"VerifyEditTableColumn<T>[]"},control:{type:"object"}},model:{description:"表单数据对象(同el-form)",defaultValue:{summary:"object"},control:{type:"object"}}},parameters:{docs:{description:{component:`带验证条件的可编辑的表格
基于 el-form 和 OneTable 实现 $attrs会透传至OneTable`}}}},m={args:{},render:()=>({components:{Table:F},setup(){const{verifyTableState:c,handleQuery:p,editRow:f,cancelRow:w,delRow:b,saveRow:v,rowIsEditing:R,addRow:y}=j({columns:[{label:"Date",prop:"date",rFormat:0,rType:"date"},{label:"Name",prop:"name",requiredMsg:"name必填"},{label:"Address",prop:"address"},{label:"state",prop:"state",editable:!1,formatter(n){return R(n)?"编辑中":"-"}},{label:"opera",prop:"",editable:!1,formatter(n){return i("div",null,[i("div",{onClick:()=>f(n)},[u("edit")]),i("div",{onClick:()=>b(n)},[u("delete")]),i("div",{onClick:()=>w(n)},[u("cancel")]),i("div",{onClick:()=>v(n)},[u("save")])])}}],query(){return new Promise(n=>{setTimeout(()=>{const r=new Array(10).fill(0).map(()=>({date:new Date().toString(),name:"name",address:Math.random().toString()}));n({list:r,total:100})},1e3)})}});return I(p),{tableState:c,addRow:y}},template:`
        <button @click="addRow({})">add</button>
        <Table v-bind="tableState" height=300 />
      `})};var E,T,C;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(C=(T=m.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};const ne=["基础用例"];export{ne as __namedExportsOrder,ee as default,m as 基础用例};
//# sourceMappingURL=VerifyEditTable.stories-b5e0d9ab.js.map
