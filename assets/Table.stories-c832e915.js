import{p as b,b as h,l as D}from"./vue.esm-bundler-c47e0f3b.js";import"./index-c013ead5.js";import{_ as g,u as T}from"./index-2fddcceb.js";import"./_commonjsHelpers-725317a4.js";import"./el-loading-2c8f0dc1.js";const G={title:"Example/Table",component:g,tags:["autodocs"],args:{loading:!1,height:300}},n={args:{data:[{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles"}],columns:[{label:"Date",prop:"date"},{label:"Name",prop:"name"},{label:"Address",prop:"address"}]}},e={args:{data:[],columns:[]},render:()=>({components:{Table:g},setup(){const{tableState:p,handleQuery:S,handleNext:c}=T({columns:[{label:"Date",prop:"date",rFormat:0},{label:"Name",prop:"name"},{label:"Address",prop:"address",formatter(a,t,w,N){return h("div",null,[D("addrrrrr")])}}],query(){return new Promise(a=>{setTimeout(()=>{const t=[{date:new Date().toString(),name:"",address:Math.random().toString()},{date:new Date().toString(),name:"name",address:Math.random().toString()},{date:new Date().toString(),name:"name",address:Math.random().toString()},{date:new Date().toString(),name:"name",address:Math.random().toString()},{date:new Date().toString(),name:"name",address:Math.random().toString()},{date:new Date().toString(),name:"name",address:Math.random().toString()},{date:new Date().toString(),name:"name",address:Math.random().toString()},{date:new Date().toString(),name:"name",address:Math.random().toString()}];a({list:t,total:100})},1e3)})}});return b(S),{tableState:p,handleNext:c}},template:`
        <div>
            当前已获取数据总条数{{ tableState.data.length }}
            <button @click="handleNext">加载下一页</button>
        </div>
        <Table v-bind="tableState" height=300 />
      `})};var r,o,d;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    data: [{
      date: '2016-05-03',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles'
    }, {
      date: '2016-05-02',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles'
    }, {
      date: '2016-05-04',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles'
    }, {
      date: '2016-05-01',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles'
    }],
    columns: [{
      label: 'Date',
      prop: 'date'
    }, {
      label: 'Name',
      prop: 'name'
    }, {
      label: 'Address',
      prop: 'address'
    }]
  }
}`,...(d=(o=n.parameters)==null?void 0:o.docs)==null?void 0:d.source}}};var s,m,l,i,u;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    data: [],
    columns: []
  },
  render: () => {
    return {
      components: {
        Table
      },
      setup() {
        type Data = {
          date: string;
          name: string;
          address: string;
        };
        const {
          tableState,
          handleQuery,
          handleNext
        } = useTable<Data>({
          columns: [{
            label: 'Date',
            prop: 'date',
            rFormat: 0
          }, {
            label: 'Name',
            prop: 'name'
          }, {
            label: 'Address',
            prop: 'address',
            formatter(_row, _column, _cellValue, _index) {
              return <div>addrrrrr</div>;
            }
          }],
          query() {
            return new Promise(r => {
              setTimeout(() => {
                const list = [{
                  date: new Date().toString(),
                  name: '',
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
          tableState,
          handleNext
        };
      },
      template: \`
        <div>
            当前已获取数据总条数{{ tableState.data.length }}
            <button @click="handleNext">加载下一页</button>
        </div>
        <Table v-bind="tableState" height=300 />
      \`
    };
  }
}`,...(l=(m=e.parameters)==null?void 0:m.docs)==null?void 0:l.source},description:{story:"配合useTable使用",...(u=(i=e.parameters)==null?void 0:i.docs)==null?void 0:u.description}}};const L=["BasicTable","UseTable"];export{n as BasicTable,e as UseTable,L as __namedExportsOrder,G as default};
//# sourceMappingURL=Table.stories-c832e915.js.map
