import{d as Z,r as ee,t as y,a as ne,b as re}from"./vue.esm-bundler-b66df92b.js";import{a as l,E as v}from"./el-message-box-75759634.js";import{u}from"./index-4ced5a21.js";import"./index-c013ead5.js";import"./_commonjsHelpers-725317a4.js";import"./cloneDeep-37d6b104.js";const se={title:"Example/OneForm",component:l,tags:["autodocs"],argTypes:{columns:{description:"列信息",defaultValue:{summary:"FormColumn[]"},control:{type:"object"}},model:{description:"表单数据对象(同el-form)",defaultValue:{summary:"object"},control:{type:"object"}}},parameters:{docs:{description:{component:`完全基于 el-form 组件 除列举的props外 其他$attrs会透传至el-form
https://element-plus.org/zh-CN/component/form.html`}}}},i={args:{model:{},columns:[{prop:"name",formItemProps:{prop:"name",label:"name",required:!0}},{prop:"age",rType:"number",min:1,formItemProps:{prop:"age",label:"age"}},{rType:"date",label:"date",prop:"date",formItemProps:{prop:"date",label:"date"}}]},render(t){return{components:{Form:l},setup(){const e=Z();return{args:t,formRef:e,click:()=>{var a;(a=e.value)==null||a.validate(o=>{console.log("valid",o)})}}},template:`
        <button @click="click">submit</button>
        <Form v-bind="args" class="frfr" ref='formRef'>
          <template #custom="{ model }">
            <div>customcustom {{model.name}}</div>
          </template>
        </Form>
      `}}},m={render(){return{components:{Form:l,ElButton:v},setup(){const{formState:t,submit:e}=u({columns:[{label:"文本输入框",prop:"name",requiredMsg:"name 必填"},{label:"数字输入框",prop:"age",rType:"number",min:1},{label:"多选框",prop:"opera",rType:"checkbox",options:[{label:"多选1",value:1},{label:"多选2",value:2},{label:"多选3",value:3},{label:"多选4",value:4},{label:"多选5",value:5}]},{label:"单选框",prop:"radio",rType:"radio",options:[{label:"多选1",value:1},{label:"多选2",value:2},{label:"多选3",value:3},{label:"多选4",value:4},{label:"多选5",value:5}]},{rType:"date",prop:"date",label:"日期选择"},{label:"选择器",prop:"select",rType:"select",options:[{label:"选择1",value:1},{label:"选择2",value:2},{label:"选择3",value:3},{label:"选择4",value:4},{label:"选择5",value:5}]}]});return{formState:t,click:()=>{e(a=>{console.log(a)})}}},template:`
        <ElButton @click="click">submit</ElButton>
        <Form v-bind="formState">
          <span>8765e</span>
        </Form>
      `}}},c={render(){return{components:{Form:l},setup(){const{formState:t}=u({columns:[{label:"请输入内容",prop:"name"},{rType:"custom",prop:"custom"}]});return{formState:t}},template:`
        <Form v-bind="formState">
          <template #custom="{ model }">
            <div>这是一段自定义内容 {{ model.name }}</div>
          </template>
        </Form>
      `}}},s={render(){return{components:{Form:l},setup(){const{formState:t}=u({columns:[{label:"请输入内容",prop:"name"},{rType:"custom",prop:"",render(e){return ne("div",null,[re("JSX这是一段自定义内容:"),e.model.name])}}]});return{formState:t}},template:`
        <Form v-bind="formState">
        </Form>
      `}}},p={render(){return{components:{Form:l},setup(){const{formState:t}=u({columns:[{rType:"remote",prop:"remote",valueKey:"id",valueMap:{id:"iot"},method([e,n,a]){return console.log("query:",e,n,a),new Promise(o=>{setTimeout(()=>{o({list:new Array(20).fill(1).map((f,r)=>({label:`${e.currentPage}-${r}-${n}`,id:`${e.currentPage}-${r}-${n}`,value:{id:`${e.currentPage}-${r}-${n}`,i:r}})),total:50})},1e3)})},multiple:!0,renderLabel(e){return e.label},onChange(e){console.log("onChange",e)},clearable:!0,filterable:!0,noCache:!0}]});return{formState:t}},template:`
        <Form v-bind="formState">
        </Form>
      `}}},d={render(){return{components:{Form:l},setup(){const{formState:t}=u({columns:[{rType:"remote",prop:"remote",valueKey:"id",method([e,n,a]){return new Promise(o=>{setTimeout(()=>{o({list:new Array(20).fill(1).map((f,r)=>({label:`l-${e.currentPage}-${r}`,id:`i-${e.currentPage}-${r}-${n||0}`,value:{id:`${e.currentPage}-${r}-${n}`,i:r}})),total:50})},1e3)})},renderLabel(e){return e.label},clearable:!0,filterable:!0,noCache:!0},{rType:"remote",prop:"remote2",valueKey:"id",labelKey:"label2",method([e,n,a]){return new Promise(o=>{setTimeout(()=>{o({list:new Array(20).fill(1).map((f,r)=>({label2:`l2-${e.currentPage}-${r}`,id:`i2-${e.currentPage}-${r}-${n??0}`,value:{id:`${e.currentPage}-${r}-${n}`,i:r}})),total:50})},1e3)})},renderLabel(e){return e.label2+"=="},clearable:!0,filterable:!0,noCache:!1},{rType:"remote",prop:"remote3",valueKey:"id",labelKey:"label3",method([e,n,a]){return new Promise(o=>{setTimeout(()=>{o({list:new Array(20).fill(1).map((f,r)=>({label3:`l3-${e.currentPage}-${r}`,id:`i3-${e.currentPage}-${r}-${n??0}`,value:{id:`${e.currentPage}-${r}-${n}`,i:r}})),total:50})},1e3)})},renderLabel(e){return e.label3},clearable:!0,filterable:!0,multiple:!0}],initData:{remote:"i-1-0-0",label:"l-1-0",remote2:"i2-1-1-0",label2:"l2-1-1",remote3:["i3-1-2-0","i3-1-3-0"],label3:["l3-1-2","l3-1-3"]}});return{formState:t}},template:`
        <Form v-bind="formState">
        </Form>
      `}}},b={render(){return{components:{Form:l,ElButton:v},setup(){const{formState:t,toggleColumn:e,setModel:n}=u({columns:[{label:"name",prop:"name"},{label:"age",prop:"age"},{rType:"radio",prop:"show",options:[{label:"显示",value:1},{label:"隐藏",value:0}],onChange(o){e("opera",o===1)}},{label:"opera",prop:"opera"}],initData:{show:1,age:1}});return{formState:t,reset:()=>{n({show:1,age:1},!0)}}},template:`
        <ElButton @click="reset">reset</ElButton>
        <Form v-bind="formState">
        </Form>
      `}}},g={render(){return{components:{Form:l,ElButton:v},setup(){const t=ee({age:11}),{formState:e,setModel:n}=u({columns:[{label:"文本输入框",prop:"name",requiredMsg:"name 必填"},{label:"数字输入框",prop:"age",rType:"number",min:1}],initData:y(t)});return{formState:e,reset:()=>{n(y(t),!0)}}},template:`
        <ElButton @click="reset">reset</ElButton>
        <Form v-bind="formState">
          <span>8765e</span>
        </Form>
      `}}},F={render(){return{components:{Form:l,ElButton:v},setup(){const{formState:t}=u({columns:[{label:"下拉框",prop:"selectVal",rType:"select",valueKey:"id",labelKey:"name",valueMap:{eqp_list:"eqpList",remark:"remarkremark"},options:[{name:"m-lw",eqp_area_id:6,remark:"test21212111111111",id:2,create_time:"2023-06-02 11:21:15",update_time:"2023-06-05 09:56:27",eqp_total:7,eqp_list:[{id:3,number:"lw3",status:4}]}],onChange(e){console.log("onChange",e)}}]});return{formState:t}},template:`
        <Form v-bind="formState">
        </Form>
      `}}};var $,E,S;i.parameters={...i.parameters,docs:{...($=i.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    model: {},
    columns: [{
      prop: 'name',
      formItemProps: {
        prop: 'name',
        label: 'name',
        required: true
      }
    }, {
      prop: 'age',
      rType: 'number',
      min: 1,
      formItemProps: {
        prop: 'age',
        label: 'age'
      }
    }, {
      rType: 'date',
      label: 'date',
      prop: 'date',
      formItemProps: {
        prop: 'date',
        label: 'date'
      }
    }]
  },
  render(args) {
    return {
      components: {
        Form
      },
      setup() {
        const formRef = ref<FormInstance>();
        const click = () => {
          formRef.value?.validate(v => {
            console.log('valid', v);
          });
        };
        return {
          args,
          formRef,
          click
        };
      },
      template: \`
        <button @click="click">submit</button>
        <Form v-bind="args" class="frfr" ref='formRef'>
          <template #custom="{ model }">
            <div>customcustom {{model.name}}</div>
          </template>
        </Form>
      \`
    };
  }
}`,...(S=(E=i.parameters)==null?void 0:E.docs)==null?void 0:S.source}}};var B,T,h,k,w;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render() {
    return {
      components: {
        Form,
        ElButton
      },
      setup() {
        type Data = {
          name: string;
          age: number;
          opera: number[];
          radio: number;
          date: Date;
        };
        const {
          formState,
          submit
        } = useForm<Data>({
          columns: [{
            label: '文本输入框',
            prop: 'name',
            requiredMsg: 'name 必填'
          }, {
            label: '数字输入框',
            prop: 'age',
            rType: 'number',
            min: 1
          }, {
            label: '多选框',
            prop: 'opera',
            rType: 'checkbox',
            options: [{
              label: '多选1',
              value: 1
            }, {
              label: '多选2',
              value: 2
            }, {
              label: '多选3',
              value: 3
            }, {
              label: '多选4',
              value: 4
            }, {
              label: '多选5',
              value: 5
            }]
          }, {
            label: '单选框',
            prop: 'radio',
            rType: 'radio',
            options: [{
              label: '多选1',
              value: 1
            }, {
              label: '多选2',
              value: 2
            }, {
              label: '多选3',
              value: 3
            }, {
              label: '多选4',
              value: 4
            }, {
              label: '多选5',
              value: 5
            }]
          }, {
            rType: 'date',
            prop: 'date',
            label: '日期选择'
          }, {
            label: '选择器',
            prop: 'select',
            rType: 'select',
            options: [{
              label: '选择1',
              value: 1
            }, {
              label: '选择2',
              value: 2
            }, {
              label: '选择3',
              value: 3
            }, {
              label: '选择4',
              value: 4
            }, {
              label: '选择5',
              value: 5
            }]
          }]
        });
        const click = () => {
          submit(model => {
            console.log(model);
          });
        };
        return {
          formState,
          click
        };
      },
      template: \`
        <ElButton @click="click">submit</ElButton>
        <Form v-bind="formState">
          <span>8765e</span>
        </Form>
      \`
    };
  }
}`,...(h=(T=m.parameters)==null?void 0:T.docs)==null?void 0:h.source},description:{story:`OneForm 组件实例 ref此时由useForm 代理
需要使用组件实例可以使用 const { form } = useForm()`,...(w=(k=m.parameters)==null?void 0:k.docs)==null?void 0:w.description}}};var P,C,_;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render() {
    return {
      components: {
        Form
      },
      setup() {
        type Data = {
          name: string;
          age: number;
          opera: number[];
          radio: number;
          date: Date;
        };
        const {
          formState
        } = useForm<Data>({
          columns: [{
            label: '请输入内容',
            prop: 'name'
          }, {
            rType: 'custom',
            prop: 'custom'
          }]
        });
        return {
          formState
        };
      },
      template: \`
        <Form v-bind="formState">
          <template #custom="{ model }">
            <div>这是一段自定义内容 {{ model.name }}</div>
          </template>
        </Form>
      \`
    };
  }
}`,...(_=(C=c.parameters)==null?void 0:C.docs)==null?void 0:_.source}}};var D,A,q,M,K;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render() {
    return {
      components: {
        Form
      },
      setup() {
        type Data = {
          name: string;
          age: number;
          opera: number[];
          radio: number;
          date: Date;
        };
        const {
          formState
        } = useForm<Data>({
          columns: [{
            label: '请输入内容',
            prop: 'name'
          }, {
            rType: 'custom',
            prop: '',
            render(scope: CustomScope<Data>) {
              return <div>JSX这是一段自定义内容:{scope.model.name}</div>;
            }
          }]
        });
        return {
          formState
        };
      },
      template: \`
        <Form v-bind="formState">
        </Form>
      \`
    };
  }
}`,...(q=(A=s.parameters)==null?void 0:A.docs)==null?void 0:q.source},description:{story:"配合 @vitejs/plugin-vue-jsx 使用",...(K=(M=s.parameters)==null?void 0:M.docs)==null?void 0:K.description}}};var L,R,x,I,V;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render() {
    return {
      components: {
        Form
      },
      setup() {
        type Data = {
          name: string;
          age: number;
          opera: number[];
          radio: number;
          date: Date;
        };
        const {
          formState
        } = useForm<Data>({
          columns: [{
            rType: 'remote',
            prop: 'remote',
            valueKey: 'id',
            valueMap: {
              id: 'iot'
            },
            method([p, keyword, params]) {
              console.log('query:', p, keyword, params);
              return new Promise(r => {
                setTimeout(() => {
                  r({
                    list: new Array(20).fill(1).map((_, i) => {
                      return {
                        label: \`\${p.currentPage}-\${i}-\${keyword}\`,
                        id: \`\${p.currentPage}-\${i}-\${keyword}\`,
                        value: {
                          id: \`\${p.currentPage}-\${i}-\${keyword}\`,
                          i
                        }
                      };
                    }),
                    total: 50
                  });
                }, 1000);
              });
            },
            multiple: true,
            renderLabel(i) {
              return i.label;
            },
            onChange(val) {
              console.log('onChange', val);
            },
            clearable: true,
            filterable: true,
            noCache: true
          }]
        });
        return {
          formState
        };
      },
      template: \`
        <Form v-bind="formState">
        </Form>
      \`
    };
  }
}`,...(x=(R=p.parameters)==null?void 0:R.docs)==null?void 0:x.source},description:{story:"内部使用 OneRemoteSelect 组件",...(V=(I=p.parameters)==null?void 0:I.docs)==null?void 0:V.description}}};var j,J,O;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render() {
    return {
      components: {
        Form
      },
      setup() {
        type Data = {
          remote: string;
          label: string;
          remote2: string;
          label2: string;
          remote3: string[];
          label3: string[];
        };
        const {
          formState
        } = useForm<Data>({
          columns: [{
            rType: 'remote',
            prop: 'remote',
            valueKey: 'id',
            method([p, keyword, _params]) {
              return new Promise(r => {
                setTimeout(() => {
                  r({
                    list: new Array(20).fill(1).map((_, i) => {
                      return {
                        label: \`l-\${p.currentPage}-\${i}\`,
                        id: \`i-\${p.currentPage}-\${i}-\${keyword || 0}\`,
                        value: {
                          id: \`\${p.currentPage}-\${i}-\${keyword}\`,
                          i
                        }
                      };
                    }),
                    total: 50
                  });
                }, 1000);
              });
            },
            renderLabel(i) {
              return i.label;
            },
            clearable: true,
            filterable: true,
            noCache: true
          }, {
            rType: 'remote',
            prop: 'remote2',
            valueKey: 'id',
            labelKey: 'label2',
            method([p, keyword, _params]) {
              return new Promise(r => {
                setTimeout(() => {
                  r({
                    list: new Array(20).fill(1).map((_, i) => {
                      return {
                        label2: \`l2-\${p.currentPage}-\${i}\`,
                        id: \`i2-\${p.currentPage}-\${i}-\${keyword ?? 0}\`,
                        value: {
                          id: \`\${p.currentPage}-\${i}-\${keyword}\`,
                          i
                        }
                      };
                    }),
                    total: 50
                  });
                }, 1000);
              });
            },
            renderLabel(i) {
              return i.label2 + '==';
            },
            clearable: true,
            filterable: true,
            noCache: false
          }, {
            rType: 'remote',
            prop: 'remote3',
            valueKey: 'id',
            labelKey: 'label3',
            method([p, keyword, _params]) {
              return new Promise(r => {
                setTimeout(() => {
                  r({
                    list: new Array(20).fill(1).map((_, i) => {
                      return {
                        label3: \`l3-\${p.currentPage}-\${i}\`,
                        id: \`i3-\${p.currentPage}-\${i}-\${keyword ?? 0}\`,
                        value: {
                          id: \`\${p.currentPage}-\${i}-\${keyword}\`,
                          i
                        }
                      };
                    }),
                    total: 50
                  });
                }, 1000);
              });
            },
            renderLabel(i) {
              return i.label3;
            },
            clearable: true,
            filterable: true,
            multiple: true
          }],
          initData: {
            remote: 'i-1-0-0',
            label: 'l-1-0',
            remote2: 'i2-1-1-0',
            label2: 'l2-1-1',
            remote3: ['i3-1-2-0', 'i3-1-3-0'],
            label3: ['l3-1-2', 'l3-1-3']
          }
        });
        return {
          formState
        };
      },
      template: \`
        <Form v-bind="formState">
        </Form>
      \`
    };
  }
}`,...(O=(J=d.parameters)==null?void 0:J.docs)==null?void 0:O.source}}};var N,X,z;b.parameters={...b.parameters,docs:{...(N=b.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render() {
    return {
      components: {
        Form,
        ElButton
      },
      setup() {
        type Data = {
          name: string;
          age: number;
          opera: number[];
          show: number;
        };
        const {
          formState,
          toggleColumn,
          setModel
        } = useForm<Data>({
          columns: [{
            label: 'name',
            prop: 'name'
          }, {
            label: 'age',
            prop: 'age'
          }, {
            rType: 'radio',
            prop: 'show',
            options: [{
              label: '显示',
              value: 1
            }, {
              label: '隐藏',
              value: 0
            }],
            onChange(val) {
              toggleColumn('opera', val === 1);
            }
          }, {
            label: 'opera',
            prop: 'opera'
          }],
          initData: {
            show: 1,
            age: 1
          }
        });
        const reset = () => {
          setModel({
            show: 1,
            age: 1
          }, true);
        };
        return {
          formState,
          reset
        };
      },
      template: \`
        <ElButton @click="reset">reset</ElButton>
        <Form v-bind="formState">
        </Form>
      \`
    };
  }
}`,...(z=(X=b.parameters)==null?void 0:X.docs)==null?void 0:z.source}}};var G,H,Q;g.parameters={...g.parameters,docs:{...(G=g.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render() {
    return {
      components: {
        Form,
        ElButton
      },
      setup() {
        type Data = {
          name: string;
          age: number;
          opera: number[];
          radio: number;
          date: Date;
        };
        const otherModel = reactive({
          age: 11
        });
        const {
          formState,
          setModel
        } = useForm<Data>({
          columns: [{
            label: '文本输入框',
            prop: 'name',
            requiredMsg: 'name 必填'
          }, {
            label: '数字输入框',
            prop: 'age',
            rType: 'number',
            min: 1
          }],
          initData: toRaw(otherModel)
        });
        const reset = () => {
          setModel(toRaw(otherModel), true);
        };
        return {
          formState,
          reset
        };
      },
      template: \`
        <ElButton @click="reset">reset</ElButton>
        <Form v-bind="formState">
          <span>8765e</span>
        </Form>
      \`
    };
  }
}`,...(Q=(H=g.parameters)==null?void 0:H.docs)==null?void 0:Q.source}}};var U,W,Y;F.parameters={...F.parameters,docs:{...(U=F.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render() {
    return {
      components: {
        Form,
        ElButton
      },
      setup() {
        const {
          formState
        } = useForm({
          columns: [{
            label: '下拉框',
            prop: 'selectVal',
            rType: 'select',
            valueKey: 'id',
            labelKey: 'name',
            valueMap: {
              eqp_list: 'eqpList',
              remark: 'remarkremark'
            },
            options: [{
              name: 'm-lw',
              eqp_area_id: 6,
              remark: 'test21212111111111',
              id: 2,
              create_time: '2023-06-02 11:21:15',
              update_time: '2023-06-05 09:56:27',
              eqp_total: 7,
              eqp_list: [{
                id: 3,
                number: 'lw3',
                status: 4
              }]
            }],
            onChange(v) {
              console.log('onChange', v);
            }
          }]
        });
        return {
          formState
        };
      },
      template: \`
        <Form v-bind="formState">
        </Form>
      \`
    };
  }
}`,...(Y=(W=F.parameters)==null?void 0:W.docs)==null?void 0:Y.source}}};const pe=["基础用例","配合useForm使用","自定义内容Template","自定义内容Jsx","远程筛选","远程筛选默认值","隐藏显示切换","初始化数据","下拉选项映射"];export{pe as __namedExportsOrder,se as default,F as 下拉选项映射,g as 初始化数据,i as 基础用例,s as 自定义内容Jsx,c as 自定义内容Template,p as 远程筛选,d as 远程筛选默认值,m as 配合useForm使用,b as 隐藏显示切换};
//# sourceMappingURL=Form.stories-bd0b6aa5.js.map
