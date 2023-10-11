import{o as C,a as t,b as e}from"./vue.esm-bundler-2b92b106.js";import"./index-c013ead5.js";import{_ as u}from"./el-message-box-dfb8e93c.js";import{u as R}from"./index-15d62663.js";import"./_commonjsHelpers-725317a4.js";import"./index-83833a79.js";import"./cloneDeep-da0589d6.js";const y={title:"Example/OneEditTable",component:u,tags:["autodocs"],parameters:{docs:{description:{component:`可编辑表格基于 OneTable 实现 搭配useEditTable使用即可实现可编辑表格
不带有验证功能`}}}},a={render:()=>({components:{Table:u},setup(){const{tableState:m,handleQuery:i,editRow:l,cancelRow:g,delRow:c,saveRow:b,rowIsEditing:p,addRow:w,getChangedRows:S,moveRow:o}=R({columns:[{label:"Date",prop:"date",rFormat:0,rType:"date"},{label:"Name",prop:"name"},{label:"Address",prop:"address",elProps:{formatter(n){return n+"-"}}},{label:"state",prop:"state",editable:!1,formatter(n){return p(n)?"编辑中":"-"}},{label:"opera",prop:"",editable:!1,formatter(n){return t("div",null,[t("button",{onClick:()=>l(n)},[e("edit")]),t("button",{onClick:()=>c(n)},[e("delete")]),t("button",{onClick:()=>g(n)},[e("cancel")]),t("button",{onClick:()=>b(n)},[e("save")]),t("button",{onClick:()=>o(n,-1)},[e("move prev")]),t("button",{onClick:()=>o(n,1)},[e("move next")]),t("button",{onClick:()=>o(n,1,!1)},[e("move to 2")])])}}],query(){return new Promise(n=>{setTimeout(()=>{const h=[{date:new Date().toString(),name:"name",address:Math.random().toString()},{date:new Date().toString(),name:"name",address:Math.random().toString()},{date:new Date().toString(),name:"name",address:Math.random().toString()},{date:new Date().toString(),name:"name",address:Math.random().toString()},{date:new Date().toString(),name:"name",address:Math.random().toString()},{date:new Date().toString(),name:"name",address:Math.random().toString()},{date:new Date().toString(),name:"name",address:Math.random().toString()},{date:new Date().toString(),name:"name",address:Math.random().toString()}];n({list:h,total:100})},1e3)})}});return C(i),{tableState:m,addRow:w,getChanged:()=>{console.log(S())}}},template:`
        <button @click="addRow()">新增</button>
        <button @click="getChanged">获取修改过的行</button>
        <Table v-bind="tableState" height=300 />
      `})};var r,d,s;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
        <button @click="addRow()">新增</button>
        <button @click="getChanged">获取修改过的行</button>
        <Table v-bind="tableState" height=300 />
      \`
    };
  }
}`,...(s=(d=a.parameters)==null?void 0:d.docs)==null?void 0:s.source}}};const B=["可编辑表格"];export{B as __namedExportsOrder,y as default,a as 可编辑表格};
//# sourceMappingURL=EditTable.stories-a9f5563b.js.map
