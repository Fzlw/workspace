import{p as h,b as e,l as t}from"./vue.esm-bundler-c47e0f3b.js";import"./index-c013ead5.js";import{_ as l}from"./index-2fddcceb.js";import{u as R}from"./index-bda78a88.js";import"./_commonjsHelpers-725317a4.js";import"./el-loading-2c8f0dc1.js";import"./index-a872ae1c.js";const x={title:"Example/EditTable",component:l,tags:["autodocs"],args:{loading:!1,height:300}},a={args:{},render:()=>({components:{Table:l},setup(){const{tableState:i,handleQuery:m,editRow:g,cancelRow:u,delRow:c,saveRow:w,rowIsEditing:b,addRow:p,getChangedRows:S}=R({columns:[{label:"Date",prop:"date",rFormat:0,rType:"date"},{label:"Name",prop:"name"},{label:"Address",prop:"address",formatter(n,r,D,f){return"addrrrrr001"},elProps:{formatter(n){return n+"-"}}},{label:"state",prop:"state",editable:!1,formatter(n){return b(n)?"编辑中":"-"}},{label:"opera",prop:"",editable:!1,formatter(n){return e("div",null,[e("button",{onClick:()=>g(n)},[t("edit")]),e("button",{onClick:()=>c(n)},[t("delete")]),e("button",{onClick:()=>u(n)},[t("cancel")]),e("button",{onClick:()=>w(n)},[t("save")])])}}],query(){return new Promise(n=>{setTimeout(()=>{const r=[{date:new Date().toString(),name:"name",address:Math.random().toString()},{date:new Date().toString(),name:"name",address:Math.random().toString()},{date:new Date().toString(),name:"name",address:Math.random().toString()},{date:new Date().toString(),name:"name",address:Math.random().toString()},{date:new Date().toString(),name:"name",address:Math.random().toString()},{date:new Date().toString(),name:"name",address:Math.random().toString()},{date:new Date().toString(),name:"name",address:Math.random().toString()},{date:new Date().toString(),name:"name",address:Math.random().toString()}];n({list:r,total:100})},1e3)})}});return h(m),{tableState:i,addRow:p,getChanged:()=>{console.log(S())}}},template:`
        <button @click="addRow()">addRow</button>
        <button @click="getChanged">getChangedRows</button>
        <Table v-bind="tableState" height=300 />
      `})};var o,d,s;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
        <button @click="addRow()">addRow</button>
        <button @click="getChanged">getChangedRows</button>
        <Table v-bind="tableState" height=300 />
      \`
    };
  }
}`,...(s=(d=a.parameters)==null?void 0:d.docs)==null?void 0:s.source}}};const F=["UseEditTable"];export{a as UseEditTable,F as __namedExportsOrder,x as default};
//# sourceMappingURL=EditTable.stories-f018dccd.js.map
