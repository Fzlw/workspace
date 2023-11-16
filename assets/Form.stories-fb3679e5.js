import{d as be,r as Fe,t as ve,o as fe,n as ye,a as $e,b as Ee}from"./vue.esm-bundler-2b92b106.js";import{a as l,E as d,b as Se}from"./el-message-box-5b1e6d94.js";import{u}from"./index-62c48eef.js";import"./index-c013ead5.js";import"./_commonjsHelpers-725317a4.js";import"./cloneDeep-2d0ab0a3.js";const Ce={title:"Example/OneForm",component:l,tags:["autodocs"],argTypes:{columns:{description:"列信息",defaultValue:{summary:"FormColumn[]"},control:{type:"object"}},model:{description:"表单数据对象(同el-form)",defaultValue:{summary:"object"},control:{type:"object"}}},parameters:{docs:{description:{component:`完全基于 el-form 组件 除列举的props外 其他$attrs会透传至el-form
https://element-plus.org/zh-CN/component/form.html`}}}},b={args:{model:{},columns:[{prop:"name",formItemProps:{prop:"name",label:"name",required:!0}},{prop:"age",rType:"number",min:1,formItemProps:{prop:"age",label:"age"}},{rType:"date",label:"date",prop:"date",formItemProps:{prop:"date",label:"date"}}]},render(r){return{components:{Form:l},setup(){const e=be();return{args:r,formRef:e,click:()=>{var a;(a=e.value)==null||a.elForm.validate(o=>{console.log("valid",o)})}}},template:`
        <button @click="click">submit</button>
        <Form v-bind="args" class="frfr" ref='formRef'>
          <template #custom="{ model }">
            <div>customcustom {{model.name}}</div>
          </template>
        </Form>
      `}}},s={render(){return{components:{Form:l,ElButton:d},setup(){const{formState:r,submit:e}=u({columns:[{label:"文本输入框",prop:"name",requiredMsg:"name 必填"},{label:"数字输入框",prop:"age",rType:"number",min:1},{label:"单独选框",prop:"opera-single",rType:"checkbox",border:!0},{label:"多选框",prop:"opera",rType:"checkboxGroup",options:[{label:"多选1",value:1},{label:"多选2",value:2},{label:"多选3",value:3},{label:"多选4",value:4},{label:"多选5",value:5}]},{label:"单选框",prop:"radio",rType:"radio",options:[{label:"单选1",value:1},{label:"单选2",value:2},{label:"单选3",value:3},{label:"单选4",value:4},{label:"单选5",value:5}]},{rType:"date",prop:"date",label:"日期选择"},{label:"选择器",prop:"select",rType:"select",options:[{label:"选择1",value:1},{label:"选择2",value:2},{label:"选择3",value:3},{label:"选择4",value:4},{label:"选择5",value:5}]},{label:"开关",rType:"switch",prop:"switch",inlinePrompt:!0,activeText:"是",inactiveText:"否"},{rType:"color",prop:"color",label:"颜色选择"}]});return{formState:r,click:()=>{e(a=>{console.log(a)})}}},template:`
        <ElButton @click="click">submit</ElButton>
        <Form v-bind="formState">
          <span>8765e</span>
        </Form>
      `}}},g={render(){return{components:{Form:l},setup(){const{formState:r}=u({columns:[{label:"请输入内容",prop:"name"},{rType:"custom",prop:"custom"}]});return{formState:r}},template:`
        <Form v-bind="formState">
          <template #custom="{ model }">
            <div>这是一段自定义内容 {{ model.name }}</div>
          </template>
        </Form>
      `}}},p={render(){return{components:{Form:l},setup(){const{formState:r}=u({columns:[{label:"请输入内容",prop:"name"},{rType:"custom",prop:"",render(e){return $e("div",null,[Ee("JSX这是一段自定义内容:"),e.model.name])}}]});return{formState:r}},template:`
        <Form v-bind="formState">
        </Form>
      `}}},i={render(){return{components:{Form:l},setup(){const{formState:r}=u({columns:[{rType:"remote",prop:"remote",valueKey:"id",valueMap:{id:"iot"},method([e,n,a]){return console.log("query:",e,n,a),new Promise(o=>{setTimeout(()=>{o({list:new Array(20).fill(1).map((m,t)=>({label:`${e.currentPage}-${t}-${n}`,id:`${e.currentPage}-${t}-${n}`,value:{id:`${e.currentPage}-${t}-${n}`,i:t}})),total:50})},1e3)})},multiple:!0,renderLabel(e){return e.label},onChange(e){console.log("onChange",e)},clearable:!0,filterable:!0,noCache:!0}]});return{formState:r}},template:`
        <Form v-bind="formState">
        </Form>
      `}}},F={render(){return{components:{Form:l},setup(){const{formState:r}=u({columns:[{rType:"remote",prop:"remote",valueKey:"id",method([e,n,a]){return new Promise(o=>{setTimeout(()=>{o({list:new Array(20).fill(1).map((m,t)=>({label:`l-${e.currentPage}-${t}`,id:`i-${e.currentPage}-${t}-${n||0}`,value:{id:`${e.currentPage}-${t}-${n}`,i:t}})),total:50})},1e3)})},renderLabel(e){return e.label},clearable:!0,filterable:!0,noCache:!0},{rType:"remote",prop:"remote2",valueKey:"id",labelKey:"label2",method([e,n,a]){return new Promise(o=>{setTimeout(()=>{o({list:new Array(20).fill(1).map((m,t)=>({label2:`l2-${e.currentPage}-${t}`,id:`i2-${e.currentPage}-${t}-${n??0}`,value:{id:`${e.currentPage}-${t}-${n}`,i:t}})),total:50})},1e3)})},renderLabel(e){return e.label2+"=="},clearable:!0,filterable:!0,noCache:!1},{rType:"remote",prop:"remote3",valueKey:"id",labelKey:"label3",method([e,n,a]){return new Promise(o=>{setTimeout(()=>{o({list:new Array(20).fill(1).map((m,t)=>({label3:`l3-${e.currentPage}-${t}`,id:`i3-${e.currentPage}-${t}-${n??0}`,value:{id:`${e.currentPage}-${t}-${n}`,i:t}})),total:50})},1e3)})},renderLabel(e){return e.label3},clearable:!0,filterable:!0,multiple:!0}],initData:{remote:"i-1-0-0",label:"l-1-0",remote2:"i2-1-1-0",label2:"l2-1-1",remote3:["i3-1-2-0","i3-1-3-0"],label3:["l3-1-2","l3-1-3"]}});return{formState:r}},template:`
        <Form v-bind="formState">
        </Form>
      `}}},v={render(){return{components:{Form:l},setup(){const{formState:r,setModel:e}=u({columns:[{rType:"remote",prop:"remote",valueKey:"id",labelKey:"labelVal",method([n,a,o]){return new Promise(m=>{setTimeout(()=>{m({list:new Array(20).fill(1).map((t,S)=>({labelVal:`l-${n.currentPage}-${S}`,id:`i-${n.currentPage}-${S}-${a||0}`})),total:50})},1e3)})},clearable:!0,filterable:!0,noCache:!0}]});return e({remote:"i-1-2-0",labelVal:"l-1-2"}),{formState:r}},template:`
        <Form v-bind="formState">
        </Form>
      `}}},f={render(){return{components:{Form:l,ElDialog:Se,ElButton:d},setup(){const{formState:r,setModel:e}=u({columns:[{rType:"remote",prop:"remote",valueKey:"id",labelKey:"labelVal",method([m,t,S]){return new Promise(ge=>{setTimeout(()=>{ge({list:new Array(20).fill(1).map((Te,T)=>({labelVal:`l-${m.currentPage}-${T}`,id:`i-${m.currentPage}-${T}-${t||0}`})),total:50})},1e3)})},clearable:!0,filterable:!0,noCache:!0}]}),n=be(!1);return{formState:r,toggle:()=>n.value=!n.value,visible:n,open:()=>e({remote:"i-1-2-0",labelVal:"l-1-2"})}},template:`
        <ElButton @click="toggle">Toggle</ElButton>
        <ElDialog v-model="visible" @open="open">
          <Form v-bind="formState">
          </Form>
        </ElDialog>
      `}}},y={render(){return{components:{Form:l,ElButton:d},setup(){const{formState:r,toggleColumn:e,setModel:n}=u({columns:[{label:"name",prop:"name"},{label:"age",prop:"age"},{rType:"radio",prop:"show",options:[{label:"显示",value:1},{label:"隐藏",value:0}],onChange(o){e("opera",o===1)}},{label:"opera",prop:"opera"}],initData:{show:1,age:1}});return{formState:r,reset:()=>{n({show:1,age:1},!0)}}},template:`
        <ElButton @click="reset">reset</ElButton>
        <Form v-bind="formState">
        </Form>
      `}}},$={render(){return{components:{Form:l,ElButton:d},setup(){const r=Fe({age:11}),{formState:e,setModel:n}=u({columns:[{label:"文本输入框",prop:"name",requiredMsg:"name 必填"},{label:"数字输入框",prop:"age",rType:"number",min:1}],initData:ve(r)});return{formState:e,reset:()=>{n({age:11},!0)}}},template:`
        <ElButton @click="reset">reset</ElButton>
        <Form v-bind="formState">
          <span>8765e</span>
        </Form>
      `}}},E={render(){return{components:{Form:l,ElButton:d},setup(){const{formState:r}=u({columns:[{label:"下拉框",prop:"selectVal",rType:"select",valueKey:"id",labelKey:"name",valueMap:{eqp_list:"eqpList",remark:"remarkremark"},options:[{name:"m-lw",eqp_area_id:6,remark:"test21212111111111",id:2,create_time:"2023-06-02 11:21:15",update_time:"2023-06-05 09:56:27",eqp_total:7,eqp_list:[{id:3,number:"lw3",status:4}]}],onChange(e){console.log("onChange",e)}}]});return{formState:r}},template:`
        <Form v-bind="formState">
        </Form>
      `}}},c={render(){return{components:{Form:l},setup(){const{formState:r,form:e}=u({columns:[{label:"下拉框",prop:"selectVal",rType:"select",valueKey:"id",labelKey:"name",valueMap:{eqp_list:"eqpList",remark:"remarkremark"},options:[{name:"m-lw",eqp_area_id:6,remark:"test21212111111111",id:2,create_time:"2023-06-02 11:21:15",update_time:"2023-06-05 09:56:27",eqp_total:7,eqp_list:[{id:3,number:"lw3",status:4}]}],onChange(n){console.log("onChange",n)}}]});return fe(()=>{ye(()=>{console.log("组件实例：",e.value)})}),{formState:r}},template:`
        <Form v-bind="formState">
        </Form>
      `}}};var B,_,h;b.parameters={...b.parameters,docs:{...(B=b.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(h=(_=b.parameters)==null?void 0:_.docs)==null?void 0:h.source}}};var w,k,P,C,D;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
            label: '单独选框',
            prop: 'opera-single',
            rType: 'checkbox',
            border: true
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
            }]
          }, {
            label: '开关',
            rType: 'switch',
            prop: 'switch',
            inlinePrompt: true,
            activeText: '是',
            inactiveText: '否'
          }, {
            rType: 'color',
            prop: 'color',
            label: '颜色选择'
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
}`,...(P=(k=s.parameters)==null?void 0:k.docs)==null?void 0:P.source},description:{story:`OneForm 组件实例 ref此时由useForm 代理
需要使用组件实例可以使用 const { form } = useForm()`,...(D=(C=s.parameters)==null?void 0:C.docs)==null?void 0:D.description}}};var A,q,K;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(K=(q=g.parameters)==null?void 0:q.docs)==null?void 0:K.source}}};var M,V,x,L,R;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(x=(V=p.parameters)==null?void 0:V.docs)==null?void 0:x.source},description:{story:"配合 @vitejs/plugin-vue-jsx 使用",...(R=(L=p.parameters)==null?void 0:L.docs)==null?void 0:R.description}}};var I,j,J,O,N;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(J=(j=i.parameters)==null?void 0:j.docs)==null?void 0:J.source},description:{story:"内部使用 OneRemoteSelect 组件",...(N=(O=i.parameters)==null?void 0:O.docs)==null?void 0:N.description}}};var G,X,z;F.parameters={...F.parameters,docs:{...(G=F.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(z=(X=F.parameters)==null?void 0:X.docs)==null?void 0:z.source}}};var H,Q,U;v.parameters={...v.parameters,docs:{...(H=v.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
        setModel({
          remote: 'i-1-2-0',
          labelVal: 'l-1-2'
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
}`,...(U=(Q=v.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var W,Y,Z;f.parameters={...f.parameters,docs:{...(W=f.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(Z=(Y=f.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ne,re;y.parameters={...y.parameters,docs:{...(ee=y.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(re=(ne=y.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};var te,ae,oe;$.parameters={...$.parameters,docs:{...(te=$.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(oe=(ae=$.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};var le,ue,me;E.parameters={...E.parameters,docs:{...(le=E.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(me=(ue=E.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};var se,pe,ie,ce,de;c.parameters={...c.parameters,docs:{...(se=c.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(ie=(pe=c.parameters)==null?void 0:pe.docs)==null?void 0:ie.source},description:{story:"打开控制台查看",...(de=(ce=c.parameters)==null?void 0:ce.docs)==null?void 0:de.description}}};const De=["基础用例","配合useForm使用","自定义内容Template","自定义内容Jsx","远程筛选","远程筛选默认值","远程筛选默认值_表单初始化","远程筛选默认值_弹窗初始化","隐藏显示切换","初始化数据","下拉选项映射","获取ElForm组件实例"];export{De as __namedExportsOrder,Ce as default,E as 下拉选项映射,$ as 初始化数据,b as 基础用例,p as 自定义内容Jsx,g as 自定义内容Template,c as 获取ElForm组件实例,i as 远程筛选,F as 远程筛选默认值,f as 远程筛选默认值_弹窗初始化,v as 远程筛选默认值_表单初始化,s as 配合useForm使用,y as 隐藏显示切换};
//# sourceMappingURL=Form.stories-fb3679e5.js.map
