import{a as T,b as S,o,n as R}from"./vue.esm-bundler-2b92b106.js";import"./index-c013ead5.js";import{_ as l,L as U}from"./el-message-box-ea3a7dd8.js";import{E as y}from"./el-pagination-f7aa6f1f.js";import{u as s,F as d}from"./index-2003defc.js";import"./_commonjsHelpers-725317a4.js";const te={title:"Example/OneTable",component:l,tags:["autodocs"],argTypes:{loading:{description:"组件加载状态 通过vLoading指令实现",defaultValue:{summary:!1},control:{type:"boolean"}},columns:{description:"列信息",defaultValue:{summary:"TableColumn<T>[]"},control:{type:"object"}},selected:{description:"table组件在可选择模式下当前选择的项",defaultValue:{summary:"T[]"},control:{type:"object"}}},parameters:{docs:{description:{component:`完全基于 el-table 组件 除列举的props外 其他$attrs会透传至el-table
selection-change事件会失效 取而代之可以直接使用 v-model:selected
https://element-plus.org/zh-CN/component/table.html`}}}},p={args:{height:300,data:[{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles"}],columns:[{label:"Date",prop:"date"},{label:"Name",prop:"name"},{label:"Address",prop:"address"}]}},u={render:()=>({components:{Table:l,ElPagination:y},setup(){const{tableState:a,handleQuery:r,pagination:t}=s({columns:[{label:"Date",prop:"date",rFormat:d.dateTime},{label:"Name",prop:"name"},{label:"Address",prop:"address",formatter(e,n,h,F){return T("div",null,[S("addrrrrr")])}}],query(){return new Promise(e=>{setTimeout(()=>{const n=new Array(20).fill({date:new Date().toString(),name:"name",address:Math.random().toString()});e({list:n,total:100})},1e3)})}});return o(r),{tableState:a,pagination:t}},template:`
        <Table v-bind="tableState" height=300 />
        <ElPagination v-bind="pagination" />
      `})},c={render:()=>({components:{Table:l,ElPagination:y},setup(){const{tableState:a,handleQuery:r,pagination:t}=s({columns:[{label:"Date",prop:"date",rFormat:d.dateTime},{label:"Name",prop:"name"},{label:"Address",prop:"address",formatter(e,n,h,F){return T("div",null,[S("addrrrrr")])}}],query(){return new Promise(e=>{setTimeout(()=>{const n=new Array(10).fill({date:new Date().toString(),name:"name",address:Math.random().toString()});e({list:n,total:100})},1e3)})},pagination:{pageSize:10,pageSizes:[10,20]}});return o(r),{tableState:a,pagination:t}},template:`
        <Table v-bind="tableState" height=300 />
        <ElPagination v-bind="pagination" />
      `})},i={render:()=>({components:{Table:l},setup(){const{tableState:a,handleQuery:r}=s({columns:[{label:"Date",prop:"date",rFormat:d.dateTime},{label:"Name",prop:"name"},{label:"Address",prop:"address",formatter(t,e,n,h){return T("div",null,[S("addrrrrr")])}}],query(){return new Promise(t=>{setTimeout(()=>{const e=new Array(10).fill({date:new Date().toString(),name:"name",address:Math.random().toString()});t({list:e,total:100})},1e3)})},mode:U.infinite});return o(r),{tableState:a}},template:`
        <Table v-bind="tableState" height=300 />
      `})},b={render:()=>({components:{Table:l,ElPagination:y},setup(){const{tableState:a,handleQuery:r,pagination:t}=s({columns:[{type:"selection",width:40},{label:"Date",prop:"date",rFormat:d.dateTime},{label:"Name",prop:"name"},{label:"Address",prop:"address"}],query(){return new Promise(e=>{setTimeout(()=>{const n=new Array(10).fill(0).map(()=>({date:new Date().toString(),name:"name",address:Math.random().toString()}));e({list:n,total:100})},1e3)})}});return o(r),{tableState:a,pagination:t}},template:`
        <div>当前已选择数：{{ tableState.selected.length }}</div>
        <Table v-bind="tableState" height=300 />
        <ElPagination v-bind="pagination" />
      `})},m={render:()=>({components:{Table:l},setup(){const{tableState:a,handleQuery:r,table:t}=s({columns:[{label:"Date",prop:"date",rFormat:d.dateTime},{label:"Name",prop:"name"},{label:"Address",prop:"address"}],query(){return new Promise(e=>{setTimeout(()=>{const n=new Array(10).fill(0).map(()=>({date:new Date().toString(),name:"name",address:Math.random().toString()}));e({list:n,total:100})},1e3)})}});return o(r),o(()=>{R(()=>{console.log("组件实例：",t.value)})}),{tableState:a}},template:`
        <Table v-bind="tableState" height=300 />
      `})},g={render:()=>({components:{Table:l},setup(){const{tableState:a,handleQuery:r,toggleColumn:t}=s({columns:[{label:"Date",prop:"date",rFormat:d.dateTime},{label:"Name",prop:"name"},{label:"Address",prop:"address",formatter(e,n,h,F){return T("div",null,[S("addrrrrr")])}}],query(){return new Promise(e=>{setTimeout(()=>{const n=new Array(20).fill({date:new Date().toString(),name:"name",address:Math.random().toString()});e({list:n,total:100})},1e3)})}});return o(r),{tableState:a,toggleColumn:t}},template:`
        <Table v-bind="tableState" height=300 />
        <button @click="() => toggleColumn('name', false)">隐藏Name列</button>
        <button @click="() => toggleColumn('name', true)">显示Name列</button>
        <button @click="() => toggleColumn('name')">显示/隐藏Name列</button>
      `})};var E,A,v;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(v=(A=p.parameters)==null?void 0:A.docs)==null?void 0:v.source}}};var w,D,_,f,N;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(_=(D=u.parameters)==null?void 0:D.docs)==null?void 0:_.source},description:{story:`配合useTable使用
内部会自动生成符合OneTable组件props的响应式状态 同时返回一个符合el-pagination组件props的分页状态`,...(N=(f=u.parameters)==null?void 0:f.docs)==null?void 0:N.description}}};var C,M,P;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(P=(M=c.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};var Q,x,B,V,q;i.parameters={...i.parameters,docs:{...(Q=i.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(B=(x=i.parameters)==null?void 0:x.docs)==null?void 0:B.source},description:{story:"通过 `el-table-infinite-scroll` 实现 然后useTable代理onNext实现",...(q=(V=i.parameters)==null?void 0:V.docs)==null?void 0:q.description}}};var L,k,G;b.parameters={...b.parameters,docs:{...(L=b.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(G=(k=b.parameters)==null?void 0:k.docs)==null?void 0:G.source}}};var z,O,j,$,H;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(j=(O=m.parameters)==null?void 0:O.docs)==null?void 0:j.source},description:{story:"打开控制台查看",...(H=($=m.parameters)==null?void 0:$.docs)==null?void 0:H.description}}};var I,J,K;g.parameters={...g.parameters,docs:{...(I=g.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
          toggleColumn
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
          toggleColumn
        };
      },
      template: \`
        <Table v-bind="tableState" height=300 />
        <button @click="() => toggleColumn('name', false)">隐藏Name列</button>
        <button @click="() => toggleColumn('name', true)">显示Name列</button>
        <button @click="() => toggleColumn('name')">显示/隐藏Name列</button>
      \`
    };
  }
}`,...(K=(J=g.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const ae=["基础用例","配合useTable使用","自定义分页参数","无限滚动列表","可选择列表","获取ElTable组件实例","可隐藏Table列"];export{ae as __namedExportsOrder,te as default,b as 可选择列表,g as 可隐藏Table列,p as 基础用例,i as 无限滚动列表,c as 自定义分页参数,m as 获取ElTable组件实例,u as 配合useTable使用};
//# sourceMappingURL=Table.stories-9fd916e5.js.map
