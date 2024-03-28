import{d as $e,o as Ee,r as Se,t as we,n as _e,a as s,b as p}from"./vue.esm-bundler-2b92b106.js";import{a as l,E as g,b as he}from"./el-message-box-0e7d5819.js";import{u}from"./index-73e15c00.js";import"./index-c013ead5.js";import"./_commonjsHelpers-725317a4.js";import"./cloneDeep-bdfe0376.js";const Me={title:"Example/OneForm",component:l,tags:["autodocs"],argTypes:{columns:{description:"列信息",defaultValue:{summary:"FormColumn[]"},control:{type:"object"}},model:{description:"表单数据对象(同el-form)",defaultValue:{summary:"object"},control:{type:"object"}}},parameters:{docs:{description:{component:`完全基于 el-form 组件 除列举的props外 其他$attrs会透传至el-form
https://element-plus.org/zh-CN/component/form.html`}}}},f={args:{model:{},columns:[{prop:"name",formItemProps:{prop:"name",label:"name",required:!0}},{prop:"age",rType:"number",min:1,formItemProps:{prop:"age",label:"age"}},{rType:"date",label:"date",prop:"date",formItemProps:{prop:"date",label:"date"}}]},render(r){return{components:{Form:l},setup(){const e=$e();return{args:r,formRef:e,click:()=>{var o;(o=e.value)==null||o.elForm.validate(a=>{console.log("valid",a)})}}},template:`
        <button @click="click">submit</button>
        <Form v-bind="args" class="frfr" ref='formRef'>
          <template #custom="{ model }">
            <div>customcustom {{model.name}}</div>
          </template>
        </Form>
      `}}},i={render(){return{components:{Form:l,ElButton:g},setup(){const{formState:r,submit:e,setModel:n}=u({columns:[{label:"文本输入框",prop:"name",requiredMsg:"name 必填",slots:{prefix:()=>[s("span",null,[p("900")]),s("span",null,[p("500")])]}},{label:"数字输入框",prop:"age",rType:"number",min:1},{label:"单独选框",prop:"opera-single",rType:"checkbox",border:!0,slots:{default:()=>[s("span",null,[p("defaultdefault")])]}},{rType:"date",type:"daterange",prop:"time",slots:{"range-separator":()=>[s("span",null,[p("range-separator")])]}},{label:"多选框",prop:"opera",rType:"checkboxGroup",options:[{label:"多选1",value:1},{label:"多选2",value:2},{label:"多选3",value:3},{label:"多选4",value:4},{label:"多选5",value:5}]},{label:"单选框",prop:"radio",rType:"radio",options:[{label:"单选1",value:1},{label:"单选2",value:2},{label:"单选3",value:3},{label:"单选4",value:4},{label:"单选5",value:5}]},{rType:"date",prop:"date",label:"日期选择"},{label:"选择器",prop:"select",rType:"select",options:[{label:"选择1",value:1},{label:"选择2",value:2},{label:"选择3",value:3},{label:"选择4",value:4},{label:"选择5",value:5}],slots:{prefix:()=>[s("span",null,[p("prefix")])]}},{label:"开关",rType:"switch",prop:"switch",inlinePrompt:!0,activeText:"是",inactiveText:"否",slots:{"active-action":()=>[s("span",{class:"custom-active-action"},[p("T")])]}},{rType:"color",prop:"color",label:"颜色选择"}],initData:{time:[new Date("2024-02-01"),new Date("2024-02-20")]}});return{formState:r,click:()=>{e(m=>{console.log(m)})},reset:()=>n({},!0)}},template:`
        <ElButton @click="click">submit</ElButton>
        <ElButton @click="reset">reset</ElButton>
        <Form v-bind="formState">
          <span>8765e</span>
        </Form>
      `}}},F={render(){return{components:{Form:l},setup(){const{formState:r}=u({columns:[{label:"请输入内容",prop:"name"},{rType:"custom",prop:"custom"}]});return{formState:r}},template:`
        <Form v-bind="formState">
          <template #custom="{ model }">
            <div>这是一段自定义内容 {{ model.name }}</div>
          </template>
        </Form>
      `}}},c={render(){return{components:{Form:l},setup(){const{formState:r}=u({columns:[{label:"请输入内容",prop:"name"},{rType:"custom",prop:"",render(e){return s("div",null,[p("JSX这是一段自定义内容:"),e.model.name])}}]});return{formState:r}},template:`
        <Form v-bind="formState">
        </Form>
      `}}},d={render(){return{components:{Form:l},setup(){const{formState:r}=u({columns:[{rType:"remote",prop:"remote",valueKey:"id",labelKey:"labelName",valueMap:{id:"iot"},method([e,n,o]){return console.log("query:",e,n,o),new Promise(a=>{if(n.indexOf("1")!==-1)return a({list:[{labelName:`ll-${e.currentPage}-0-${n}`,id:`${e.currentPage}-0-${n}`,value:{id:`${e.currentPage}-0-${n}`,i:0}}]});setTimeout(()=>{a({list:new Array(20).fill(1).map((m,t)=>({labelName:`ll-${e.currentPage}-${t}-${n}`,id:`${e.currentPage}-${t}-${n}`,value:{id:`${e.currentPage}-${t}-${n}`,i:t}})),total:50})},300)})},multiple:!0,onChange(e){console.log("onChange",e)},"onVisible-change"(e){console.log("onVisible-change",e)},clearable:!0,filterable:!0,noCache:!0},{label:"区域",prop:"eqp_area_id",rType:"remote",valueKey:"id",labelKey:"label",noCache:!0,filterable:!0,method(){return new Promise(e=>{setTimeout(()=>{e({list:new Array(20).fill(1).map((n,o)=>({label:`机台区域_0822_${o}`,id:o}))})},500)})}}]});return{formState:r}},template:`
        <p>输入 1 只返回一项</p>
        <Form v-bind="formState">
        </Form>
      `}}},v={render(){return{components:{Form:l},setup(){const{formState:r}=u({columns:[{rType:"remote",prop:"remote",valueKey:"id",method([e,n,o]){return new Promise(a=>{setTimeout(()=>{a({list:new Array(20).fill(1).map((m,t)=>({label:`l-${e.currentPage}-${t}`,id:`i-${e.currentPage}-${t}-${n||0}`,value:{id:`${e.currentPage}-${t}-${n}`,i:t}})),total:50})},1e3)})},renderLabel(e){return e.label},clearable:!0,filterable:!0,noCache:!0},{rType:"remote",prop:"remote2",valueKey:"id",labelKey:"label2",method([e,n,o]){return new Promise(a=>{setTimeout(()=>{a({list:new Array(20).fill(1).map((m,t)=>({label2:`l2-${e.currentPage}-${t}`,id:`i2-${e.currentPage}-${t}-${n||0}`,value:{id:`${e.currentPage}-${t}-${n}`,i:t}})),total:50})},1e3)})},renderLabel(e){return e.label2+"=="},clearable:!0,filterable:!0,noCache:!1},{rType:"remote",prop:"remote3",valueKey:"id",labelKey:"label3",method([e,n,o]){return new Promise(a=>{setTimeout(()=>{a({list:new Array(20).fill(1).map((m,t)=>({label3:`l3-${e.currentPage}-${t}`,id:`i3-${e.currentPage}-${t}-${n||0}`,value:{id:`${e.currentPage}-${t}-${n}`,i:t}})),total:50})},1e3)})},renderLabel(e){return e.label3},clearable:!0,filterable:!0,multiple:!0}],initData:{remote:"i-1-0-0",label:"l-1-0",remote2:"i2-1-1-0",label2:"l2-1-1",remote3:["i3-1-2-0","i3-1-3-0"],label3:["l3-1-2","l3-1-3"]}});return{formState:r}},template:`
        <Form v-bind="formState">
        </Form>
      `}}},y={render(){return{components:{Form:l},setup(){const{formState:r,setModel:e}=u({columns:[{rType:"remote",prop:"remote",valueKey:"id",labelKey:"labelVal",method([n,o,a]){return new Promise(m=>{setTimeout(()=>{m({list:new Array(20).fill(1).map((t,_)=>({labelVal:`l-${n.currentPage}-${_}`,id:`i-${n.currentPage}-${_}-${o||0}`})),total:50})},1e3)})},clearable:!0,filterable:!0,noCache:!0}]});return Ee(()=>e({remote:"i-1-2-0",labelVal:"l-1-2"})),{formState:r}},template:`
        <Form v-bind="formState">
        </Form>
      `}}},$={render(){return{components:{Form:l,ElDialog:he,ElButton:g},setup(){const{formState:r,setModel:e}=u({columns:[{rType:"remote",prop:"remote",valueKey:"id",labelKey:"labelVal",method([m,t,_]){return new Promise(Te=>{setTimeout(()=>{Te({list:new Array(20).fill(1).map((Be,h)=>({labelVal:`l-${m.currentPage}-${h}`,id:`i-${m.currentPage}-${h}-${t||0}`})),total:50})},1e3)})},clearable:!0,filterable:!0,noCache:!0}]}),n=$e(!1);return{formState:r,toggle:()=>n.value=!n.value,visible:n,open:()=>e({remote:"i-1-2-0",labelVal:"l-1-2"})}},template:`
        <ElButton @click="toggle">Toggle</ElButton>
        <ElDialog v-model="visible" @open="open">
          <Form v-bind="formState">
          </Form>
        </ElDialog>
      `}}},E={render(){return{components:{Form:l},setup(){const{formState:r}=u({columns:[{label:"区域",prop:"name",rType:"remote",valueKey:"id",labelKey:"label",filterable:!0,multiple:!0,collapseTags:!0,method([,e]){return new Promise(n=>{if(e.indexOf("1")!==-1)return n({list:[{id:100,label:"100"}]});n({list:new Array(20).fill(1).map((o,a)=>({label:`机台区域_0822_${a}`,id:a}))})})}}]});return{formState:r}},template:`
        <p>输入 1 只返回一项</p>
        <Form v-bind="formState">
        </Form>
      `}}},T={render(){return{components:{Form:l,ElButton:g},setup(){const{formState:r,toggleColumn:e,setModel:n}=u({columns:[{label:"name",prop:"name"},{label:"age",prop:"age"},{rType:"radio",prop:"show",options:[{label:"显示",value:1},{label:"隐藏",value:0}],onChange(a){e("opera",a===1)}},{label:"opera",prop:"opera"}],initData:{show:1,age:1}});return{formState:r,reset:()=>{n({show:1,age:1},!0)}}},template:`
        <ElButton @click="reset">reset</ElButton>
        <Form v-bind="formState">
        </Form>
      `}}},S={render(){return{components:{Form:l,ElButton:g},setup(){const r=Se({age:11}),{formState:e,setModel:n}=u({columns:[{label:"文本输入框",prop:"name",requiredMsg:"name 必填"},{label:"数字输入框",prop:"age",rType:"number",min:1}],initData:we(r)});return{formState:e,reset:()=>{n({age:11},!0)}}},template:`
        <ElButton @click="reset">reset</ElButton>
        <Form v-bind="formState">
          <span>8765e</span>
        </Form>
      `}}},w={render(){return{components:{Form:l,ElButton:g},setup(){const{formState:r}=u({columns:[{label:"下拉框",prop:"selectVal",rType:"select",valueKey:"id",labelKey:"name",valueMap:{eqp_list:"eqpList",remark:"remarkremark"},options:[{name:"m-lw",eqp_area_id:6,remark:"test21212111111111",id:2,create_time:"2023-06-02 11:21:15",update_time:"2023-06-05 09:56:27",eqp_total:7,eqp_list:[{id:3,number:"lw3",status:4}]}],onChange(e){console.log("onChange",e)}}]});return{formState:r}},template:`
        <Form v-bind="formState">
        </Form>
      `}}},b={render(){return{components:{Form:l},setup(){const{formState:r,form:e}=u({columns:[{label:"下拉框",prop:"selectVal",rType:"select",valueKey:"id",labelKey:"name",valueMap:{eqp_list:"eqpList",remark:"remarkremark"},options:[{name:"m-lw",eqp_area_id:6,remark:"test21212111111111",id:2,create_time:"2023-06-02 11:21:15",update_time:"2023-06-05 09:56:27",eqp_total:7,eqp_list:[{id:3,number:"lw3",status:4}]}],onChange(n){console.log("onChange",n)}}]});return Ee(()=>{_e(()=>{console.log("组件实例：",e.value)})}),{formState:r}},template:`
        <Form v-bind="formState">
        </Form>
      `}}};var B,P,k;f.parameters={...f.parameters,docs:{...(B=f.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
        const formRef = ref<any>();
        const click = () => {
          formRef.value?.elForm.validate(v => {
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
}`,...(k=(P=f.parameters)==null?void 0:P.docs)==null?void 0:k.source}}};var D,C,A,K,M;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
          time: [Date, Date];
        };
        const {
          formState,
          submit,
          setModel
        } = useForm<Data>({
          columns: [{
            label: '文本输入框',
            prop: 'name',
            requiredMsg: 'name 必填',
            slots: {
              prefix: () => {
                return [<span>900</span>, <span>500</span>];
              }
            }
          }, {
            label: '数字输入框',
            prop: 'age',
            rType: 'number',
            min: 1
          }, {
            label: '单独选框',
            prop: 'opera-single',
            rType: 'checkbox',
            border: true,
            slots: {
              default: () => {
                return [<span>defaultdefault</span>];
              }
            }
          }, {
            rType: 'date',
            type: 'daterange',
            prop: 'time',
            slots: {
              'range-separator': () => {
                return [<span>range-separator</span>];
              }
            }
          }, {
            label: '多选框',
            prop: 'opera',
            rType: 'checkboxGroup',
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
              label: '单选1',
              value: 1
            }, {
              label: '单选2',
              value: 2
            }, {
              label: '单选3',
              value: 3
            }, {
              label: '单选4',
              value: 4
            }, {
              label: '单选5',
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
            }],
            slots: {
              prefix: () => {
                return [<span>prefix</span>];
              }
            }
          }, {
            label: '开关',
            rType: 'switch',
            prop: 'switch',
            inlinePrompt: true,
            activeText: '是',
            inactiveText: '否',
            slots: {
              // 2.4.4 新增
              'active-action': () => {
                return [<span class='custom-active-action'>T</span>];
              }
            }
          }, {
            rType: 'color',
            prop: 'color',
            label: '颜色选择'
          }],
          initData: {
            time: [new Date('2024-02-01'), new Date('2024-02-20')]
          }
        });
        const click = () => {
          submit(model => {
            console.log(model);
          });
        };
        const reset = () => setModel({}, true);
        return {
          formState,
          click,
          reset
        };
      },
      template: \`
        <ElButton @click="click">submit</ElButton>
        <ElButton @click="reset">reset</ElButton>
        <Form v-bind="formState">
          <span>8765e</span>
        </Form>
      \`
    };
  }
}`,...(A=(C=i.parameters)==null?void 0:C.docs)==null?void 0:A.source},description:{story:`OneForm 组件实例 ref此时由useForm 代理
需要使用组件实例可以使用 const { form } = useForm()`,...(M=(K=i.parameters)==null?void 0:K.docs)==null?void 0:M.description}}};var q,x,V;F.parameters={...F.parameters,docs:{...(q=F.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(V=(x=F.parameters)==null?void 0:x.docs)==null?void 0:V.source}}};var L,j,N,R,O;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(N=(j=c.parameters)==null?void 0:j.docs)==null?void 0:N.source},description:{story:"配合 @vitejs/plugin-vue-jsx 使用",...(O=(R=c.parameters)==null?void 0:R.docs)==null?void 0:O.description}}};var I,J,G,X,z;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
            labelKey: 'labelName',
            valueMap: {
              id: 'iot'
            },
            method([p, keyword, params]) {
              console.log('query:', p, keyword, params);
              return new Promise(r => {
                if (keyword.indexOf('1') !== -1) {
                  return r({
                    list: [{
                      labelName: \`ll-\${p.currentPage}-0-\${keyword}\`,
                      id: \`\${p.currentPage}-0-\${keyword}\`,
                      value: {
                        id: \`\${p.currentPage}-0-\${keyword}\`,
                        i: 0
                      }
                    }]
                  });
                }
                setTimeout(() => {
                  r({
                    list: new Array(20).fill(1).map((_, i) => {
                      return {
                        labelName: \`ll-\${p.currentPage}-\${i}-\${keyword}\`,
                        id: \`\${p.currentPage}-\${i}-\${keyword}\`,
                        value: {
                          id: \`\${p.currentPage}-\${i}-\${keyword}\`,
                          i
                        }
                      };
                    }),
                    total: 50
                  });
                }, 300);
              });
            },
            multiple: true,
            onChange(val) {
              console.log('onChange', val);
            },
            'onVisible-change'(val) {
              console.log('onVisible-change', val);
            },
            clearable: true,
            filterable: true,
            noCache: true
          }, {
            label: '区域',
            prop: 'eqp_area_id',
            rType: 'remote',
            valueKey: 'id',
            labelKey: 'label',
            noCache: true,
            filterable: true,
            method() {
              return new Promise(r => {
                setTimeout(() => {
                  r({
                    list: new Array(20).fill(1).map((i, j) => {
                      return {
                        label: \`机台区域_0822_\${j}\`,
                        id: j
                      };
                    })
                  });
                }, 500);
              });
            }
          }]
        });
        return {
          formState
        };
      },
      template: \`
        <p>输入 1 只返回一项</p>
        <Form v-bind="formState">
        </Form>
      \`
    };
  }
}`,...(G=(J=d.parameters)==null?void 0:J.docs)==null?void 0:G.source},description:{story:"内部使用 OneRemoteSelect 组件",...(z=(X=d.parameters)==null?void 0:X.docs)==null?void 0:z.description}}};var H,Q,U;v.parameters={...v.parameters,docs:{...(H=v.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
                        id: \`i2-\${p.currentPage}-\${i}-\${keyword || 0}\`,
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
                        id: \`i3-\${p.currentPage}-\${i}-\${keyword || 0}\`,
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
}`,...(U=(Q=v.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var W,Y,Z;y.parameters={...y.parameters,docs:{...(W=y.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render() {
    return {
      components: {
        Form
      },
      setup() {
        type Data = {
          remote: string;
          labelVal: string;
        };
        const {
          formState,
          setModel
        } = useForm<Data>({
          columns: [{
            rType: 'remote',
            prop: 'remote',
            valueKey: 'id',
            labelKey: 'labelVal',
            method([p, keyword, _params]) {
              return new Promise(r => {
                setTimeout(() => {
                  r({
                    list: new Array(20).fill(1).map((_, i) => {
                      return {
                        labelVal: \`l-\${p.currentPage}-\${i}\`,
                        id: \`i-\${p.currentPage}-\${i}-\${keyword || 0}\`
                      };
                    }),
                    total: 50
                  });
                }, 1000);
              });
            },
            clearable: true,
            filterable: true,
            noCache: true
          }]
        });
        onMounted(() => setModel({
          remote: 'i-1-2-0',
          labelVal: 'l-1-2'
        }));
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
}`,...(Z=(Y=y.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ne,re;$.parameters={...$.parameters,docs:{...(ee=$.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render() {
    return {
      components: {
        Form,
        ElDialog,
        ElButton
      },
      setup() {
        type Data = {
          remote: string;
          labelVal: string;
        };
        const {
          formState,
          setModel
        } = useForm<Data>({
          columns: [{
            rType: 'remote',
            prop: 'remote',
            valueKey: 'id',
            labelKey: 'labelVal',
            method([p, keyword, _params]) {
              return new Promise(r => {
                setTimeout(() => {
                  r({
                    list: new Array(20).fill(1).map((_, i) => {
                      return {
                        labelVal: \`l-\${p.currentPage}-\${i}\`,
                        id: \`i-\${p.currentPage}-\${i}-\${keyword || 0}\`
                      };
                    }),
                    total: 50
                  });
                }, 1000);
              });
            },
            clearable: true,
            filterable: true,
            noCache: true
          }]
        });
        const visible = ref(false);
        const toggle = () => visible.value = !visible.value;
        const open = () => setModel({
          remote: 'i-1-2-0',
          labelVal: 'l-1-2'
        });
        return {
          formState,
          toggle,
          visible,
          open
        };
      },
      template: \`
        <ElButton @click="toggle">Toggle</ElButton>
        <ElDialog v-model="visible" @open="open">
          <Form v-bind="formState">
          </Form>
        </ElDialog>
      \`
    };
  }
}`,...(re=(ne=$.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};var te,ae,oe;E.parameters={...E.parameters,docs:{...(te=E.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render() {
    return {
      components: {
        Form
      },
      setup() {
        type Data = {
          name: string;
        };
        const {
          formState
        } = useForm<Data>({
          columns: [{
            label: '区域',
            prop: 'name',
            rType: 'remote',
            valueKey: 'id',
            labelKey: 'label',
            filterable: true,
            multiple: true,
            collapseTags: true,
            method([, keyword]) {
              return new Promise(resolve => {
                if (keyword.indexOf('1') !== -1) {
                  return resolve({
                    list: [{
                      id: 100,
                      label: '100'
                    }]
                  });
                }
                resolve({
                  list: new Array(20).fill(1).map((i, j) => {
                    return {
                      label: \`机台区域_0822_\${j}\`,
                      id: j
                    };
                  })
                });
              });
            }
          }]
        });
        return {
          formState
        };
      },
      template: \`
        <p>输入 1 只返回一项</p>
        <Form v-bind="formState">
        </Form>
      \`
    };
  }
}`,...(oe=(ae=E.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};var le,ue,me;T.parameters={...T.parameters,docs:{...(le=T.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(me=(ue=T.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};var se,pe,ie;S.parameters={...S.parameters,docs:{...(se=S.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
          setModel({
            age: 11
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
          <span>8765e</span>
        </Form>
      \`
    };
  }
}`,...(ie=(pe=S.parameters)==null?void 0:pe.docs)==null?void 0:ie.source}}};var ce,de,be;w.parameters={...w.parameters,docs:{...(ce=w.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(be=(de=w.parameters)==null?void 0:de.docs)==null?void 0:be.source}}};var ge,fe,Fe,ve,ye;b.parameters={...b.parameters,docs:{...(ge=b.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  render() {
    return {
      components: {
        Form
      },
      setup() {
        const {
          formState,
          form
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
        onMounted(() => {
          nextTick(() => {
            console.log(\`组件实例：\`, form.value);
          });
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
}`,...(Fe=(fe=b.parameters)==null?void 0:fe.docs)==null?void 0:Fe.source},description:{story:"打开控制台查看",...(ye=(ve=b.parameters)==null?void 0:ve.docs)==null?void 0:ye.description}}};const qe=["基础用例","配合useForm使用","自定义内容Template","自定义内容Jsx","远程筛选","远程筛选默认值","远程筛选默认值_表单初始化","远程筛选默认值_弹窗初始化","远程筛选查询","隐藏显示切换","初始化数据","下拉选项映射","获取ElForm组件实例"];export{qe as __namedExportsOrder,Me as default,w as 下拉选项映射,S as 初始化数据,f as 基础用例,c as 自定义内容Jsx,F as 自定义内容Template,b as 获取ElForm组件实例,d as 远程筛选,E as 远程筛选查询,v as 远程筛选默认值,$ as 远程筛选默认值_弹窗初始化,y as 远程筛选默认值_表单初始化,i as 配合useForm使用,T as 隐藏显示切换};
//# sourceMappingURL=Form.stories-69f48fb2.js.map
