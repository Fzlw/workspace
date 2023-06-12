import{a as g,b as T,o,n as H}from"./vue.esm-bundler-ca95eab4.js";import"./index-c013ead5.js";import{_ as s,L as I}from"./el-message-box-e5e35739.js";import{E as S}from"./el-pagination-2765369d.js";import{u as i,F as m}from"./index-aad5bf47.js";import"./_commonjsHelpers-725317a4.js";const Y={title:"Example/OneTable",component:s,tags:["autodocs"],argTypes:{loading:{description:"组件加载状态 通过vLoading指令实现",defaultValue:{summary:!1},control:{type:"boolean"}},columns:{description:"列信息",defaultValue:{summary:"TableColumn<T>[]"},control:{type:"object"}},selected:{description:"table组件在可选择模式下当前选择的项",defaultValue:{summary:"T[]"},control:{type:"object"}}},parameters:{docs:{description:{component:`完全基于 el-table 组件 除列举的props外 其他$attrs会透传至el-table
selection-change事件会失效 取而代之可以直接使用 v-model:selected
https://element-plus.org/zh-CN/component/table.html`}}}},p={args:{height:300,data:[{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles"}],columns:[{label:"Date",prop:"date"},{label:"Name",prop:"name"},{label:"Address",prop:"address"}]}},l={render:()=>({components:{Table:s,ElPagination:S},setup(){const{tableState:t,handleQuery:r,pagination:n}=i({columns:[{label:"Date",prop:"date",rFormat:m.dateTime},{label:"Name",prop:"name"},{label:"Address",prop:"address",formatter(e,a,h,$){return g("div",null,[T("addrrrrr")])}}],query(){return new Promise(e=>{setTimeout(()=>{const a=new Array(20).fill({date:new Date().toString(),name:"name",address:Math.random().toString()});e({list:a,total:100})},1e3)})}});return o(r),{tableState:t,pagination:n}},template:`
        <Table v-bind="tableState" height=300 />
        <ElPagination v-bind="pagination" />
      `})},c={render:()=>({components:{Table:s,ElPagination:S},setup(){const{tableState:t,handleQuery:r,pagination:n}=i({columns:[{label:"Date",prop:"date",rFormat:m.dateTime},{label:"Name",prop:"name"},{label:"Address",prop:"address",formatter(e,a,h,$){return g("div",null,[T("addrrrrr")])}}],query(){return new Promise(e=>{setTimeout(()=>{const a=new Array(10).fill({date:new Date().toString(),name:"name",address:Math.random().toString()});e({list:a,total:100})},1e3)})},pagination:{pageSize:10,pageSizes:[10,20]}});return o(r),{tableState:t,pagination:n}},template:`
        <Table v-bind="tableState" height=300 />
        <ElPagination v-bind="pagination" />
      `})},d={render:()=>({components:{Table:s},setup(){const{tableState:t,handleQuery:r}=i({columns:[{label:"Date",prop:"date",rFormat:m.dateTime},{label:"Name",prop:"name"},{label:"Address",prop:"address",formatter(n,e,a,h){return g("div",null,[T("addrrrrr")])}}],query(){return new Promise(n=>{setTimeout(()=>{const e=new Array(10).fill({date:new Date().toString(),name:"name",address:Math.random().toString()});n({list:e,total:100})},1e3)})},mode:I.infinite});return o(r),{tableState:t}},template:`
        <Table v-bind="tableState" height=300 />
      `})},b={render:()=>({components:{Table:s,ElPagination:S},setup(){const{tableState:t,handleQuery:r,pagination:n}=i({columns:[{type:"selection",width:40},{label:"Date",prop:"date",rFormat:m.dateTime},{label:"Name",prop:"name"},{label:"Address",prop:"address"}],query(){return new Promise(e=>{setTimeout(()=>{const a=new Array(10).fill(0).map(()=>({date:new Date().toString(),name:"name",address:Math.random().toString()}));e({list:a,total:100})},1e3)})}});return o(r),{tableState:t,pagination:n}},template:`
        <div>当前已选择数：{{ tableState.selected.length }}</div>
        <Table v-bind="tableState" height=300 />
        <ElPagination v-bind="pagination" />
      `})},u={render:()=>({components:{Table:s},setup(){const{tableState:t,handleQuery:r,table:n}=i({columns:[{label:"Date",prop:"date",rFormat:m.dateTime},{label:"Name",prop:"name"},{label:"Address",prop:"address"}],query(){return new Promise(e=>{setTimeout(()=>{const a=new Array(10).fill(0).map(()=>({date:new Date().toString(),name:"name",address:Math.random().toString()}));e({list:a,total:100})},1e3)})}});return o(r),o(()=>{H(()=>{console.log("组件实例：",n.value)})}),{tableState:t}},template:`
        <Table v-bind="tableState" height=300 />
      `})};var y,E,F;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    height: 300,
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
}`,...(F=(E=p.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var A,v,D,w,f;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => {
    return {
      components: {
        Table,
        ElPagination
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
          pagination
        } = useTable<Data>({
          columns: [{
            label: 'Date',
            prop: 'date',
            rFormat: Format.dateTime
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
                const list = new Array(20).fill({
                  date: new Date().toString(),
                  name: 'name',
                  address: Math.random().toString()
                });
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
          pagination
        };
      },
      template: \`
        <Table v-bind="tableState" height=300 />
        <ElPagination v-bind="pagination" />
      \`
    };
  }
}`,...(D=(v=l.parameters)==null?void 0:v.docs)==null?void 0:D.source},description:{story:`配合useTable使用
内部会自动生成符合OneTable组件props的响应式状态 同时返回一个符合el-pagination组件props的分页状态`,...(f=(w=l.parameters)==null?void 0:w.docs)==null?void 0:f.description}}};var _,N,P;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => {
    return {
      components: {
        Table,
        ElPagination
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
          pagination
        } = useTable<Data>({
          columns: [{
            label: 'Date',
            prop: 'date',
            rFormat: Format.dateTime
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
                const list = new Array(10).fill({
                  date: new Date().toString(),
                  name: 'name',
                  address: Math.random().toString()
                });
                r({
                  list,
                  total: 100
                });
              }, 1000);
            });
          },
          pagination: {
            pageSize: 10,
            pageSizes: [10, 20]
          }
        });
        onMounted(handleQuery);
        return {
          tableState,
          pagination
        };
      },
      template: \`
        <Table v-bind="tableState" height=300 />
        <ElPagination v-bind="pagination" />
      \`
    };
  }
}`,...(P=(N=c.parameters)==null?void 0:N.docs)==null?void 0:P.source}}};var M,Q,B,x,L;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
          handleQuery
        } = useTable<Data>({
          columns: [{
            label: 'Date',
            prop: 'date',
            rFormat: Format.dateTime
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
                const list = new Array(10).fill({
                  date: new Date().toString(),
                  name: 'name',
                  address: Math.random().toString()
                });
                r({
                  list,
                  total: 100
                });
              }, 1000);
            });
          },
          mode: LoadMode.infinite
        });
        onMounted(handleQuery);
        return {
          tableState
        };
      },
      template: \`
        <Table v-bind="tableState" height=300 />
      \`
    };
  }
}`,...(B=(Q=d.parameters)==null?void 0:Q.docs)==null?void 0:B.source},description:{story:"通过 `el-table-infinite-scroll` 实现 然后useTable代理onNext实现",...(L=(x=d.parameters)==null?void 0:x.docs)==null?void 0:L.description}}};var C,V,q;b.parameters={...b.parameters,docs:{...(C=b.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => {
    return {
      components: {
        Table,
        ElPagination
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
          pagination
        } = useTable<Data>({
          columns: [{
            type: 'selection',
            width: 40
          }, {
            label: 'Date',
            prop: 'date',
            rFormat: Format.dateTime
          }, {
            label: 'Name',
            prop: 'name'
          }, {
            label: 'Address',
            prop: 'address'
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
          tableState,
          pagination
        };
      },
      template: \`
        <div>当前已选择数：{{ tableState.selected.length }}</div>
        <Table v-bind="tableState" height=300 />
        <ElPagination v-bind="pagination" />
      \`
    };
  }
}`,...(q=(V=b.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};var G,z,O,j,k;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
          table
        } = useTable<Data>({
          columns: [{
            label: 'Date',
            prop: 'date',
            rFormat: Format.dateTime
          }, {
            label: 'Name',
            prop: 'name'
          }, {
            label: 'Address',
            prop: 'address'
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
            console.log('组件实例：', table.value);
          });
        });
        return {
          tableState
        };
      },
      template: \`
        <Table v-bind="tableState" height=300 />
      \`
    };
  }
}`,...(O=(z=u.parameters)==null?void 0:z.docs)==null?void 0:O.source},description:{story:"打开控制台查看",...(k=(j=u.parameters)==null?void 0:j.docs)==null?void 0:k.description}}};const Z=["基础用例","配合useTable使用","自定义分页参数","无限滚动列表","可选择列表","获取ElTable组件实例"];export{Z as __namedExportsOrder,Y as default,b as 可选择列表,p as 基础用例,d as 无限滚动列表,c as 自定义分页参数,u as 获取ElTable组件实例,l as 配合useTable使用};
//# sourceMappingURL=Table.stories-149317bf.js.map
