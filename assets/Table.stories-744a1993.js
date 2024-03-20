import{a as c,b,o,n as Y}from"./vue.esm-bundler-2b92b106.js";import"./index-c013ead5.js";import{_ as l,L as Z}from"./el-message-box-76cb5148.js";import{E as w}from"./el-pagination-e61ab0b6.js";import{u as s,F as d}from"./index-d7c31b80.js";import"./_commonjsHelpers-725317a4.js";const se={title:"Example/OneTable",component:l,tags:["autodocs"],argTypes:{loading:{description:"组件加载状态 通过vLoading指令实现",defaultValue:{summary:!1},control:{type:"boolean"}},columns:{description:"列信息",defaultValue:{summary:"TableColumn<T>[]"},control:{type:"object"}},selected:{description:"table组件在可选择模式下当前选择的项",defaultValue:{summary:"T[]"},control:{type:"object"}}},parameters:{docs:{description:{component:`完全基于 el-table 组件 除列举的props外 其他$attrs会透传至el-table
selection-change事件会失效 取而代之可以直接使用 v-model:selected
https://element-plus.org/zh-CN/component/table.html`}}}},g={args:{height:300,data:[{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles"}],columns:[{label:"Date",prop:"date"},{label:"Name",prop:"name"},{label:"Address",prop:"address"}]}},m={render:()=>({components:{Table:l,ElPagination:w},setup(){const{tableState:a,handleQuery:r,pagination:t}=s({columns:[{label:"Date",prop:"date",rFormat:d.dateTime},{label:"Name",prop:"name"},{label:"Address",prop:"address",formatter(n,e,u,F){return c("div",null,[b("addrrrrr")])}}],query(){return new Promise(n=>{setTimeout(()=>{const e=new Array(20).fill({date:new Date().toString(),name:"name",address:Math.random().toString()});n({list:e,total:100})},1e3)})}});return o(r),{tableState:a,pagination:t}},template:`
        <Table v-bind="tableState" height=300 />
        <ElPagination v-bind="pagination" />
      `})},T={render:()=>({components:{Table:l,ElPagination:w},setup(){const{tableState:a,handleQuery:r,pagination:t}=s({columns:[{label:"Date",prop:"date",rFormat:d.dateTime},{label:"Name",prop:"name"},{label:"Address",prop:"address",formatter(n,e,u,F){return c("div",null,[b("addrrrrr")])}}],query(){return new Promise(n=>{setTimeout(()=>{const e=new Array(10).fill({date:new Date().toString(),name:"name",address:Math.random().toString()});n({list:e,total:100})},1e3)})},pagination:{pageSize:10,pageSizes:[10,20]}});return o(r),{tableState:a,pagination:t}},template:`
        <Table v-bind="tableState" height=300 />
        <ElPagination v-bind="pagination" />
      `})},i={render:()=>({components:{Table:l},setup(){const{tableState:a,handleQuery:r}=s({columns:[{label:"Date",prop:"date",rFormat:d.dateTime},{label:"Name",prop:"name"},{label:"Address",prop:"address",formatter(t,n,e,u){return c("div",null,[b("addrrrrr")])}}],query(){return new Promise(t=>{setTimeout(()=>{const n=new Array(10).fill({date:new Date().toString(),name:"name",address:Math.random().toString()});t({list:n,total:100})},1e3)})},mode:Z.infinite});return o(r),{tableState:a}},template:`
        <Table v-bind="tableState" height=300 />
      `})},S={render:()=>({components:{Table:l,ElPagination:w},setup(){const{tableState:a,handleQuery:r,pagination:t}=s({columns:[{type:"selection",width:40},{label:"Date",prop:"date",rFormat:d.dateTime},{label:"Name",prop:"name"},{label:"Address",prop:"address"}],query(){return new Promise(n=>{setTimeout(()=>{const e=new Array(10).fill(0).map(()=>({date:new Date().toString(),name:"name",address:Math.random().toString()}));n({list:e,total:100})},1e3)})}});return o(r),{tableState:a,pagination:t}},template:`
        <div>当前已选择数：{{ tableState.selected.length }}</div>
        <Table v-bind="tableState" height=300 />
        <ElPagination v-bind="pagination" />
      `})},p={render:()=>({components:{Table:l},setup(){const{tableState:a,handleQuery:r,table:t}=s({columns:[{label:"Date",prop:"date",rFormat:d.dateTime},{label:"Name",prop:"name"},{label:"Address",prop:"address"}],query(){return new Promise(n=>{setTimeout(()=>{const e=new Array(10).fill(0).map(()=>({date:new Date().toString(),name:"name",address:Math.random().toString()}));n({list:e,total:100})},1e3)})}});return o(r),o(()=>{Y(()=>{console.log("组件实例：",t.value)})}),{tableState:a}},template:`
        <Table v-bind="tableState" height=300 />
      `})},h={render:()=>({components:{Table:l},setup(){const{tableState:a,handleQuery:r,toggleColumn:t}=s({columns:[{label:"Date",prop:"date",rFormat:d.dateTime},{label:"Name",prop:"name"},{label:"Address",prop:"address",formatter(n,e,u,F){return c("div",null,[b("addrrrrr")])}}],query(){return new Promise(n=>{setTimeout(()=>{const e=new Array(20).fill({date:new Date().toString(),name:"name",address:Math.random().toString()});n({list:e,total:100})},1e3)})}});return o(r),{tableState:a,toggleColumn:t}},template:`
        <Table v-bind="tableState" height=300 />
        <button @click="() => toggleColumn('name', false)">隐藏Name列</button>
        <button @click="() => toggleColumn('name', true)">显示Name列</button>
        <button @click="() => toggleColumn('name')">显示/隐藏Name列</button>
      `})},y={render:()=>({components:{Table:l},setup(){const{tableState:a,handleQuery:r,setState:t}=s({columns:[{label:"Date",prop:"date",rFormat:d.dateTime},{label:"Name",prop:"name"},{label:"Address",prop:"address",formatter(e,u,F,ee){return c("div",null,[b("addrrrrr")])}}],query(){return new Promise(e=>{setTimeout(()=>{const u=new Array(20).fill({date:new Date().toString(),name:"name",address:Math.random().toString()});e({list:u,total:100})},1e3)})}});return o(r),{tableState:a,changeColumns:()=>{t({columns:[{label:"Name",prop:"name",formatter:e=>e.name+"change"}]})}}},template:`
        <Table v-bind="tableState" height=300 />
        <button @click="changeColumns">改变columns</button>
      `})};var D,A,E;g.parameters={...g.parameters,docs:{...(D=g.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(E=(A=g.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var v,_,f,N,C;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(f=(_=m.parameters)==null?void 0:_.docs)==null?void 0:f.source},description:{story:`配合useTable使用
内部会自动生成符合OneTable组件props的响应式状态 同时返回一个符合el-pagination组件props的分页状态`,...(C=(N=m.parameters)==null?void 0:N.docs)==null?void 0:C.description}}};var M,P,Q;T.parameters={...T.parameters,docs:{...(M=T.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(Q=(P=T.parameters)==null?void 0:P.docs)==null?void 0:Q.source}}};var x,V,q,B,L;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(q=(V=i.parameters)==null?void 0:V.docs)==null?void 0:q.source},description:{story:"通过 `el-table-infinite-scroll` 实现 然后useTable代理onNext实现",...(L=(B=i.parameters)==null?void 0:B.docs)==null?void 0:L.description}}};var k,G,z;S.parameters={...S.parameters,docs:{...(k=S.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(z=(G=S.parameters)==null?void 0:G.docs)==null?void 0:z.source}}};var O,j,$,H,I;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...($=(j=p.parameters)==null?void 0:j.docs)==null?void 0:$.source},description:{story:"打开控制台查看",...(I=(H=p.parameters)==null?void 0:H.docs)==null?void 0:I.description}}};var J,K,R;h.parameters={...h.parameters,docs:{...(J=h.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(R=(K=h.parameters)==null?void 0:K.docs)==null?void 0:R.source}}};var U,W,X;y.parameters={...y.parameters,docs:{...(U=y.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
          setState
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
        const changeColumns = () => {
          setState({
            columns: [{
              label: 'Name',
              prop: 'name',
              formatter: row => row.name + 'change'
            }]
          });
        };
        return {
          tableState,
          changeColumns
        };
      },
      template: \`
        <Table v-bind="tableState" height=300 />
        <button @click="changeColumns">改变columns</button>
      \`
    };
  }
}`,...(X=(W=y.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};const de=["基础用例","配合useTable使用","自定义分页参数","无限滚动列表","可选择列表","获取ElTable组件实例","可隐藏Table列","重置Table列"];export{de as __namedExportsOrder,se as default,S as 可选择列表,h as 可隐藏Table列,g as 基础用例,i as 无限滚动列表,T as 自定义分页参数,p as 获取ElTable组件实例,m as 配合useTable使用,y as 重置Table列};
//# sourceMappingURL=Table.stories-744a1993.js.map
