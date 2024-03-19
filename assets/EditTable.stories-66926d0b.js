import{o as C,a as t,b as e}from"./vue.esm-bundler-2b92b106.js";import"./index-c013ead5.js";import{_ as s}from"./el-message-box-c5f9193b.js";import{u as R}from"./index-535c2b9d.js";import"./_commonjsHelpers-725317a4.js";import"./index-c2f5c2e1.js";import"./cloneDeep-987627cc.js";const B={title:"Example/OneEditTable",component:s,tags:["autodocs"],parameters:{docs:{description:{component:`可编辑表格基于 OneTable 实现 搭配useEditTable使用即可实现可编辑表格
不带有验证功能`}}}},a={render:()=>({components:{Table:s},setup(){const{tableState:l,handleQuery:i,editRow:m,cancelRow:c,delRow:b,saveRow:g,rowIsEditing:w,addRow:p,getChangedRows:S,moveRow:o}=R({columns:[{label:"Date",prop:"date",rFormat:0,rType:"date"},{label:"Name",prop:"name"},{label:"Address",prop:"address",elProps:{formatter(n){return n+"-"}}},{label:"state",prop:"state",editable:!1,formatter(n){return w(n)?"编辑中":"-"}},{label:"opera",prop:"",editable:!1,formatter(n){return t("div",null,[t("button",{onClick:()=>m(n)},[e("edit")]),t("button",{onClick:()=>b(n)},[e("delete")]),t("button",{onClick:()=>c(n)},[e("cancel")]),t("button",{onClick:()=>g(n)},[e("save")]),t("button",{onClick:()=>o(n,-1)},[e("move prev")]),t("button",{onClick:()=>o(n,1)},[e("move next")]),t("button",{onClick:()=>o(n,1,!1)},[e("move to 2")])])}}],query(){return new Promise(n=>{setTimeout(()=>{const h=[{date:new Date().toString(),name:"name1",address:Math.random().toString()},{date:new Date().toString(),name:"name2",address:Math.random().toString()},{date:new Date().toString(),name:"name3",address:Math.random().toString()},{date:new Date().toString(),name:"name4",address:Math.random().toString()},{date:new Date().toString(),name:"name5",address:Math.random().toString()},{date:new Date().toString(),name:"name6",address:Math.random().toString()},{date:new Date().toString(),name:"name7",address:Math.random().toString()},{date:new Date().toString(),name:"name8",address:Math.random().toString()}];n({list:h,total:100})},1e3)})}});return C(i),{tableState:l,addRow:p,getChanged:()=>{console.log(S())}}},template:`
        <button @click="addRow()">新增到末尾</button>
        <button @click="addRow(null, 2)">新增到第3</button>
        <button @click="addRow(null, -3)">新增到倒数第3</button>
        <button @click="getChanged">获取修改过的行</button>
        <Table v-bind="tableState" height=300 />
      `})};var r,d,u;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
          rowIsEditing,
          addRow,
          getChangedRows,
          moveRow
        } = useEditTable<Row>({
          columns: [{
            label: 'Date',
            prop: 'date',
            rFormat: 0,
            rType: 'date'
          }, {
            label: 'Name',
            prop: 'name'
          }, {
            label: 'Address',
            prop: 'address',
            elProps: {
              formatter(value) {
                return value + '-';
              }
            }
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
                    <button onClick={() => editRow(row)}>edit</button>
                    <button onClick={() => delRow(row)}>delete</button>
                    <button onClick={() => cancelRow(row)}>cancel</button>
                    <button onClick={() => saveRow(row)}>save</button>
                    <button onClick={() => moveRow(row, -1)}>move prev</button>
                    <button onClick={() => moveRow(row, 1)}>move next</button>
                    <button onClick={() => moveRow(row, 1, false)}>move to 2</button>
                  </div>;
            }
          }],
          query() {
            return new Promise(r => {
              setTimeout(() => {
                const list = [{
                  date: new Date().toString(),
                  name: 'name1',
                  address: Math.random().toString()
                }, {
                  date: new Date().toString(),
                  name: 'name2',
                  address: Math.random().toString()
                }, {
                  date: new Date().toString(),
                  name: 'name3',
                  address: Math.random().toString()
                }, {
                  date: new Date().toString(),
                  name: 'name4',
                  address: Math.random().toString()
                }, {
                  date: new Date().toString(),
                  name: 'name5',
                  address: Math.random().toString()
                }, {
                  date: new Date().toString(),
                  name: 'name6',
                  address: Math.random().toString()
                }, {
                  date: new Date().toString(),
                  name: 'name7',
                  address: Math.random().toString()
                }, {
                  date: new Date().toString(),
                  name: 'name8',
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
        const getChanged = () => {
          console.log(getChangedRows());
        };
        return {
          tableState,
          addRow,
          getChanged
        };
      },
      template: \`
        <button @click="addRow()">新增到末尾</button>
        <button @click="addRow(null, 2)">新增到第3</button>
        <button @click="addRow(null, -3)">新增到倒数第3</button>
        <button @click="getChanged">获取修改过的行</button>
        <Table v-bind="tableState" height=300 />
      \`
    };
  }
}`,...(u=(d=a.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const y=["可编辑表格"];export{y as __namedExportsOrder,B as default,a as 可编辑表格};
//# sourceMappingURL=EditTable.stories-66926d0b.js.map
