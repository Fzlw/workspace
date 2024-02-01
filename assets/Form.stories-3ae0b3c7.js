import{d as fe,r as $e,t as Ee,o as Se,n as Te,a as _e,b as we}from"./vue.esm-bundler-2b92b106.js";import{a as l,E as d,b as he}from"./el-message-box-8ed4a58e.js";import{u}from"./index-423e2f99.js";import"./index-c013ead5.js";import"./_commonjsHelpers-725317a4.js";import"./cloneDeep-daeb6b54.js";const qe={title:"Example/OneForm",component:l,tags:["autodocs"],argTypes:{columns:{description:"列信息",defaultValue:{summary:"FormColumn[]"},control:{type:"object"}},model:{description:"表单数据对象(同el-form)",defaultValue:{summary:"object"},control:{type:"object"}}},parameters:{docs:{description:{component:`完全基于 el-form 组件 除列举的props外 其他$attrs会透传至el-form
https://element-plus.org/zh-CN/component/form.html`}}}},b={args:{model:{},columns:[{prop:"name",formItemProps:{prop:"name",label:"name",required:!0}},{prop:"age",rType:"number",min:1,formItemProps:{prop:"age",label:"age"}},{rType:"date",label:"date",prop:"date",formItemProps:{prop:"date",label:"date"}}]},render(r){return{components:{Form:l},setup(){const e=fe();return{args:r,formRef:e,click:()=>{var a;(a=e.value)==null||a.elForm.validate(o=>{console.log("valid",o)})}}},template:`
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
      `}}},p={render(){return{components:{Form:l},setup(){const{formState:r}=u({columns:[{label:"请输入内容",prop:"name"},{rType:"custom",prop:"",render(e){return _e("div",null,[we("JSX这是一段自定义内容:"),e.model.name])}}]});return{formState:r}},template:`
        <Form v-bind="formState">
        </Form>
      `}}},i={render(){return{components:{Form:l},setup(){const{formState:r}=u({columns:[{rType:"remote",prop:"remote",valueKey:"id",labelKey:"labelName",valueMap:{id:"iot"},method([e,n,a]){return console.log("query:",e,n,a),new Promise(o=>{if(n.indexOf("1")!==-1)return o({list:[{labelName:`ll-${e.currentPage}-0-${n}`,id:`${e.currentPage}-0-${n}`,value:{id:`${e.currentPage}-0-${n}`,i:0}}]});setTimeout(()=>{o({list:new Array(20).fill(1).map((m,t)=>({labelName:`ll-${e.currentPage}-${t}-${n}`,id:`${e.currentPage}-${t}-${n}`,value:{id:`${e.currentPage}-${t}-${n}`,i:t}})),total:50})},300)})},multiple:!0,onChange(e){console.log("onChange",e)},clearable:!0,filterable:!0,noCache:!0},{label:"区域",prop:"eqp_area_id",rType:"remote",valueKey:"id",labelKey:"label",noCache:!0,filterable:!0,method(){return new Promise(e=>{setTimeout(()=>{e({list:new Array(20).fill(1).map((n,a)=>({label:`机台区域_0822_${a}`,id:a}))})},500)})}}]});return{formState:r}},template:`
        <p>输入 1 只返回一项</p>
        <Form v-bind="formState">
        </Form>
      `}}},F={render(){return{components:{Form:l},setup(){const{formState:r}=u({columns:[{rType:"remote",prop:"remote",valueKey:"id",method([e,n,a]){return new Promise(o=>{setTimeout(()=>{o({list:new Array(20).fill(1).map((m,t)=>({label:`l-${e.currentPage}-${t}`,id:`i-${e.currentPage}-${t}-${n||0}`,value:{id:`${e.currentPage}-${t}-${n}`,i:t}})),total:50})},1e3)})},renderLabel(e){return e.label},clearable:!0,filterable:!0,noCache:!0},{rType:"remote",prop:"remote2",valueKey:"id",labelKey:"label2",method([e,n,a]){return new Promise(o=>{setTimeout(()=>{o({list:new Array(20).fill(1).map((m,t)=>({label2:`l2-${e.currentPage}-${t}`,id:`i2-${e.currentPage}-${t}-${n||0}`,value:{id:`${e.currentPage}-${t}-${n}`,i:t}})),total:50})},1e3)})},renderLabel(e){return e.label2+"=="},clearable:!0,filterable:!0,noCache:!1},{rType:"remote",prop:"remote3",valueKey:"id",labelKey:"label3",method([e,n,a]){return new Promise(o=>{setTimeout(()=>{o({list:new Array(20).fill(1).map((m,t)=>({label3:`l3-${e.currentPage}-${t}`,id:`i3-${e.currentPage}-${t}-${n||0}`,value:{id:`${e.currentPage}-${t}-${n}`,i:t}})),total:50})},1e3)})},renderLabel(e){return e.label3},clearable:!0,filterable:!0,multiple:!0}],initData:{remote:"i-1-0-0",label:"l-1-0",remote2:"i2-1-1-0",label2:"l2-1-1",remote3:["i3-1-2-0","i3-1-3-0"],label3:["l3-1-2","l3-1-3"]}});return{formState:r}},template:`
        <Form v-bind="formState">
        </Form>
      `}}},v={render(){return{components:{Form:l},setup(){const{formState:r,setModel:e}=u({columns:[{rType:"remote",prop:"remote",valueKey:"id",labelKey:"labelVal",method([n,a,o]){return new Promise(m=>{setTimeout(()=>{m({list:new Array(20).fill(1).map((t,T)=>({labelVal:`l-${n.currentPage}-${T}`,id:`i-${n.currentPage}-${T}-${a||0}`})),total:50})},1e3)})},clearable:!0,filterable:!0,noCache:!0}]});return e({remote:"i-1-2-0",labelVal:"l-1-2"}),{formState:r}},template:`
        <Form v-bind="formState">
        </Form>
      `}}},f={render(){return{components:{Form:l,ElDialog:he,ElButton:d},setup(){const{formState:r,setModel:e}=u({columns:[{rType:"remote",prop:"remote",valueKey:"id",labelKey:"labelVal",method([m,t,T]){return new Promise(ye=>{setTimeout(()=>{ye({list:new Array(20).fill(1).map((Pe,_)=>({labelVal:`l-${m.currentPage}-${_}`,id:`i-${m.currentPage}-${_}-${t||0}`})),total:50})},1e3)})},clearable:!0,filterable:!0,noCache:!0}]}),n=fe(!1);return{formState:r,toggle:()=>n.value=!n.value,visible:n,open:()=>e({remote:"i-1-2-0",labelVal:"l-1-2"})}},template:`
        <ElButton @click="toggle">Toggle</ElButton>
        <ElDialog v-model="visible" @open="open">
          <Form v-bind="formState">
          </Form>
        </ElDialog>
      `}}},y={render(){return{components:{Form:l},setup(){const{formState:r}=u({columns:[{label:"区域",prop:"name",rType:"remote",valueKey:"id",labelKey:"label",filterable:!0,multiple:!0,collapseTags:!0,method([,e]){return new Promise(n=>{if(e.indexOf("1")!==-1)return n({list:[{id:100,label:"100"}]});n({list:new Array(20).fill(1).map((a,o)=>({label:`机台区域_0822_${o}`,id:o}))})})}}]});return{formState:r}},template:`
        <p>输入 1 只返回一项</p>
        <Form v-bind="formState">
        </Form>
      `}}},$={render(){return{components:{Form:l,ElButton:d},setup(){const{formState:r,toggleColumn:e,setModel:n}=u({columns:[{label:"name",prop:"name"},{label:"age",prop:"age"},{rType:"radio",prop:"show",options:[{label:"显示",value:1},{label:"隐藏",value:0}],onChange(o){e("opera",o===1)}},{label:"opera",prop:"opera"}],initData:{show:1,age:1}});return{formState:r,reset:()=>{n({show:1,age:1},!0)}}},template:`
        <ElButton @click="reset">reset</ElButton>
        <Form v-bind="formState">
        </Form>
      `}}},E={render(){return{components:{Form:l,ElButton:d},setup(){const r=$e({age:11}),{formState:e,setModel:n}=u({columns:[{label:"文本输入框",prop:"name",requiredMsg:"name 必填"},{label:"数字输入框",prop:"age",rType:"number",min:1}],initData:Ee(r)});return{formState:e,reset:()=>{n({age:11},!0)}}},template:`
        <ElButton @click="reset">reset</ElButton>
        <Form v-bind="formState">
          <span>8765e</span>
        </Form>
      `}}},S={render(){return{components:{Form:l,ElButton:d},setup(){const{formState:r}=u({columns:[{label:"下拉框",prop:"selectVal",rType:"select",valueKey:"id",labelKey:"name",valueMap:{eqp_list:"eqpList",remark:"remarkremark"},options:[{name:"m-lw",eqp_area_id:6,remark:"test21212111111111",id:2,create_time:"2023-06-02 11:21:15",update_time:"2023-06-05 09:56:27",eqp_total:7,eqp_list:[{id:3,number:"lw3",status:4}]}],onChange(e){console.log("onChange",e)}}]});return{formState:r}},template:`
        <Form v-bind="formState">
        </Form>
      `}}},c={render(){return{components:{Form:l},setup(){const{formState:r,form:e}=u({columns:[{label:"下拉框",prop:"selectVal",rType:"select",valueKey:"id",labelKey:"name",valueMap:{eqp_list:"eqpList",remark:"remarkremark"},options:[{name:"m-lw",eqp_area_id:6,remark:"test21212111111111",id:2,create_time:"2023-06-02 11:21:15",update_time:"2023-06-05 09:56:27",eqp_total:7,eqp_list:[{id:3,number:"lw3",status:4}]}],onChange(n){console.log("onChange",n)}}]});return Se(()=>{Te(()=>{console.log("组件实例：",e.value)})}),{formState:r}},template:`
        <Form v-bind="formState">
        </Form>
      `}}};var w,h,P;b.parameters={...b.parameters,docs:{...(w=b.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(P=(h=b.parameters)==null?void 0:h.docs)==null?void 0:P.source}}};var k,B,D,C,A;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(D=(B=s.parameters)==null?void 0:B.docs)==null?void 0:D.source},description:{story:`OneForm 组件实例 ref此时由useForm 代理
需要使用组件实例可以使用 const { form } = useForm()`,...(A=(C=s.parameters)==null?void 0:C.docs)==null?void 0:A.description}}};var K,q,M;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(M=(q=g.parameters)==null?void 0:q.docs)==null?void 0:M.source}}};var V,x,L,j,N;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(L=(x=p.parameters)==null?void 0:x.docs)==null?void 0:L.source},description:{story:"配合 @vitejs/plugin-vue-jsx 使用",...(N=(j=p.parameters)==null?void 0:j.docs)==null?void 0:N.description}}};var R,O,I,J,G;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(I=(O=i.parameters)==null?void 0:O.docs)==null?void 0:I.source},description:{story:"内部使用 OneRemoteSelect 组件",...(G=(J=i.parameters)==null?void 0:J.docs)==null?void 0:G.description}}};var X,z,H;F.parameters={...F.parameters,docs:{...(X=F.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(H=(z=F.parameters)==null?void 0:z.docs)==null?void 0:H.source}}};var Q,U,W;v.parameters={...v.parameters,docs:{...(Q=v.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(W=(U=v.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};var Y,Z,ee;f.parameters={...f.parameters,docs:{...(Y=f.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(ee=(Z=f.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ne,re,te;y.parameters={...y.parameters,docs:{...(ne=y.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(te=(re=y.parameters)==null?void 0:re.docs)==null?void 0:te.source}}};var ae,oe,le;$.parameters={...$.parameters,docs:{...(ae=$.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(le=(oe=$.parameters)==null?void 0:oe.docs)==null?void 0:le.source}}};var ue,me,se;E.parameters={...E.parameters,docs:{...(ue=E.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(se=(me=E.parameters)==null?void 0:me.docs)==null?void 0:se.source}}};var pe,ie,ce;S.parameters={...S.parameters,docs:{...(pe=S.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(ce=(ie=S.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var de,be,ge,Fe,ve;c.parameters={...c.parameters,docs:{...(de=c.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(ge=(be=c.parameters)==null?void 0:be.docs)==null?void 0:ge.source},description:{story:"打开控制台查看",...(ve=(Fe=c.parameters)==null?void 0:Fe.docs)==null?void 0:ve.description}}};const Me=["基础用例","配合useForm使用","自定义内容Template","自定义内容Jsx","远程筛选","远程筛选默认值","远程筛选默认值_表单初始化","远程筛选默认值_弹窗初始化","远程筛选查询","隐藏显示切换","初始化数据","下拉选项映射","获取ElForm组件实例"];export{Me as __namedExportsOrder,qe as default,S as 下拉选项映射,E as 初始化数据,b as 基础用例,p as 自定义内容Jsx,g as 自定义内容Template,c as 获取ElForm组件实例,i as 远程筛选,y as 远程筛选查询,F as 远程筛选默认值,f as 远程筛选默认值_弹窗初始化,v as 远程筛选默认值_表单初始化,s as 配合useForm使用,$ as 隐藏显示切换};
//# sourceMappingURL=Form.stories-3ae0b3c7.js.map
