import{o as h,a as e,b as t}from"./vue.esm-bundler-ca95eab4.js";import"./index-c013ead5.js";import{_ as u}from"./el-message-box-e5e35739.js";import{u as D}from"./index-c1e67f32.js";import"./_commonjsHelpers-725317a4.js";import"./index-aad5bf47.js";import"./cloneDeep-a9e32adb.js";const y={title:"Example/OneEditTable",component:u,tags:["autodocs"],parameters:{docs:{description:{component:`可编辑表格基于 OneTable 实现 搭配useEditTable使用即可实现可编辑表格
不带有验证功能`}}}},a={render:()=>({components:{Table:u},setup(){const{tableState:l,handleQuery:m,editRow:i,cancelRow:g,delRow:c,saveRow:b,rowIsEditing:p,addRow:w,getChangedRows:S}=D({columns:[{label:"Date",prop:"date",rFormat:0,rType:"date"},{label:"Name",prop:"name"},{label:"Address",prop:"address",formatter(n,r,E,R){return"addrrrrr001"},elProps:{formatter(n){return n+"-"}}},{label:"state",prop:"state",editable:!1,formatter(n){return p(n)?"编辑中":"-"}},{label:"opera",prop:"",editable:!1,formatter(n){return e("div",null,[e("button",{onClick:()=>i(n)},[t("edit")]),e("button",{onClick:()=>c(n)},[t("delete")]),e("button",{onClick:()=>g(n)},[t("cancel")]),e("button",{onClick:()=>b(n)},[t("save")])])}}],query(){return new Promise(n=>{setTimeout(()=>{const r=[{date:new Date().toString(),name:"name",address:Math.random().toString()},{date:new Date().toString(),name:"name",address:Math.random().toString()},{date:new Date().toString(),name:"name",address:Math.random().toString()},{date:new Date().toString(),name:"name",address:Math.random().toString()},{date:new Date().toString(),name:"name",address:Math.random().toString()},{date:new Date().toString(),name:"name",address:Math.random().toString()},{date:new Date().toString(),name:"name",address:Math.random().toString()},{date:new Date().toString(),name:"name",address:Math.random().toString()}];n({list:r,total:100})},1e3)})}});return h(m),{tableState:l,addRow:w,getChanged:()=>{console.log(S())}}},template:`
        <button @click="addRow()">新增</button>
        <button @click="getChanged">获取修改过的行</button>
        <Table v-bind="tableState" height=300 />
      `})};var o,d,s;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
          getChangedRows
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
            formatter(_row, _column, _cellValue, _index) {
              return 'addrrrrr001';
            },
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
//# sourceMappingURL=EditTable.stories-bec2463c.js.map
