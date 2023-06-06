import{a as b,b as g,o as m}from"./vue.esm-bundler-b66df92b.js";import"./index-c013ead5.js";import{_ as l}from"./el-message-box-9d0a0f53.js";import{E as T}from"./el-pagination-b75e78b0.js";import{u as p,F as c,L as G}from"./index-3dfc0b61.js";import"./_commonjsHelpers-725317a4.js";const I={title:"Example/OneTable",component:l,tags:["autodocs"],argTypes:{loading:{description:"组件加载状态 通过vLoading指令实现",defaultValue:{summary:!1},control:{type:"boolean"}},columns:{description:"列信息",defaultValue:{summary:"TableColumn<T>[]"},control:{type:"object"}},selected:{description:"table组件在可选择模式下当前选择的项",defaultValue:{summary:"T[]"},control:{type:"object"}}},parameters:{docs:{description:{component:`完全基于 el-table 组件 除列举的props外 其他$attrs会透传至el-table
selection-change事件会失效 取而代之可以直接使用 v-model:selected
https://element-plus.org/zh-CN/component/table.html`}}}},d={args:{height:300,data:[{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles"}],columns:[{label:"Date",prop:"date"},{label:"Name",prop:"name"},{label:"Address",prop:"address"}]}},o={render:()=>({components:{Table:l,ElPagination:T},setup(){const{tableState:t,handleQuery:r,pagination:n}=p({columns:[{label:"Date",prop:"date",rFormat:c.dateTime},{label:"Name",prop:"name"},{label:"Address",prop:"address",formatter(e,a,S,q){return b("div",null,[g("addrrrrr")])}}],query(){return new Promise(e=>{setTimeout(()=>{const a=new Array(20).fill({date:new Date().toString(),name:"name",address:Math.random().toString()});e({list:a,total:100})},1e3)})}});return m(r),{tableState:t,pagination:n}},template:`
        <Table v-bind="tableState" height=300 />
        <ElPagination v-bind="pagination" />
      `})},i={render:()=>({components:{Table:l,ElPagination:T},setup(){const{tableState:t,handleQuery:r,pagination:n}=p({columns:[{label:"Date",prop:"date",rFormat:c.dateTime},{label:"Name",prop:"name"},{label:"Address",prop:"address",formatter(e,a,S,q){return b("div",null,[g("addrrrrr")])}}],query(){return new Promise(e=>{setTimeout(()=>{const a=new Array(10).fill({date:new Date().toString(),name:"name",address:Math.random().toString()});e({list:a,total:100})},1e3)})},pagination:{pageSize:10,pageSizes:[10,20]}});return m(r),{tableState:t,pagination:n}},template:`
        <Table v-bind="tableState" height=300 />
        <ElPagination v-bind="pagination" />
      `})},s={render:()=>({components:{Table:l},setup(){const{tableState:t,handleQuery:r}=p({columns:[{label:"Date",prop:"date",rFormat:c.dateTime},{label:"Name",prop:"name"},{label:"Address",prop:"address",formatter(n,e,a,S){return b("div",null,[g("addrrrrr")])}}],query(){return new Promise(n=>{setTimeout(()=>{const e=new Array(10).fill({date:new Date().toString(),name:"name",address:Math.random().toString()});n({list:e,total:100})},1e3)})},mode:G.infinite});return m(r),{tableState:t}},template:`
        <Table v-bind="tableState" height=300 />
      `})},u={render:()=>({components:{Table:l,ElPagination:T},setup(){const{tableState:t,handleQuery:r,pagination:n}=p({columns:[{type:"selection",width:40},{label:"Date",prop:"date",rFormat:c.dateTime},{label:"Name",prop:"name"},{label:"Address",prop:"address"}],query(){return new Promise(e=>{setTimeout(()=>{const a=new Array(10).fill(0).map(()=>({date:new Date().toString(),name:"name",address:Math.random().toString()}));e({list:a,total:100})},1e3)})}});return m(r),{tableState:t,pagination:n}},template:`
        <div>当前已选择数：{{ tableState.selected.length }}</div>
        <Table v-bind="tableState" height=300 />
        <ElPagination v-bind="pagination" />
      `})};var h,E,y;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(y=(E=d.parameters)==null?void 0:E.docs)==null?void 0:y.source}}};var F,v,A,D,w;o.parameters={...o.parameters,docs:{...(F=o.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(A=(v=o.parameters)==null?void 0:v.docs)==null?void 0:A.source},description:{story:`配合useTable使用
内部会自动生成符合OneTable组件props的响应式状态 同时返回一个符合el-pagination组件props的分页状态`,...(w=(D=o.parameters)==null?void 0:D.docs)==null?void 0:w.description}}};var _,f,N;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(N=(f=i.parameters)==null?void 0:f.docs)==null?void 0:N.source}}};var P,M,L,Q,x;s.parameters={...s.parameters,docs:{...(P=s.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(L=(M=s.parameters)==null?void 0:M.docs)==null?void 0:L.source},description:{story:"通过 `el-table-infinite-scroll` 实现 然后useTable代理onNext实现",...(x=(Q=s.parameters)==null?void 0:Q.docs)==null?void 0:x.description}}};var B,V,C;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(C=(V=u.parameters)==null?void 0:V.docs)==null?void 0:C.source}}};const J=["基础用例","配合useTable使用","自定义分页参数","无限滚动列表","可选择列表"];export{J as __namedExportsOrder,I as default,u as 可选择列表,d as 基础用例,s as 无限滚动列表,i as 自定义分页参数,o as 配合useTable使用};
//# sourceMappingURL=Table.stories-6c56f2b5.js.map
