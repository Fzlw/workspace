import{d as I,a as f,b as g,m as v,i as R,o as S,e as x,f as O,g as q,w as D,j as L,n as N,k as B,l as M}from"./vue.esm-bundler-c47e0f3b.js";import"./el-loading-2c8f0dc1.js";import{E as V,a as E,u as j}from"./index-45a06ca4.js";import{u as A}from"./index-a872ae1c.js";import"./index-c013ead5.js";import"./_commonjsHelpers-725317a4.js";function y(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!R(e)}const _=I({props:{columns:{type:Array,required:!0}},setup(e,{attrs:a}){const t=f(),o=a.model??{},l=A();return{oneForm:t,formState:o,renderColumn:l}},render(){let e;const{formState:a,$attrs:t,columns:o,renderColumn:l}=this;return g(E,v(t,{ref:"oneForm"}),y(e=o.map(p=>{let r;const{formItemProps:m,...u}=p;return g(V,v({key:p.prop},m),y(r=l(a,u,this.$slots))?r:{default:()=>[r]})}))?e:{default:()=>[e]})}});_.__docgenInfo={exportName:"default",displayName:"BaseForm",description:"",tags:{},props:[{name:"columns",type:{name:"array"},required:!0}],sourceFiles:["/home/runner/work/workspace/workspace/packages/component/src/Form/BaseForm.vue"]};const i=I({__name:"OneForm",props:{model:null,columns:null},setup(e,{expose:a}){const t=e,o=f({});return a({validate:n=>o.value.oneForm.validate(n),validateField:(n,b)=>o.value.oneForm.validateField(n,b),resetFields:n=>o.value.oneForm.resetFields(n),scrollToField:n=>o.value.oneForm.scrollToField(n),clearValidate:n=>o.value.oneForm.clearValidate(n)}),(n,b)=>(S(),x(_,v({...t,...n.$attrs},{ref_key:"form",ref:o}),O({_:2},[q(n.$slots,(s,F)=>({name:F,fn:D(w=>[L(n.$slots,F,N(B(w)))])}))]),1040))}});i.__docgenInfo={exportName:"default",displayName:"OneForm",description:"",tags:{},expose:[{name:"validate"},{name:"validateField"},{name:"resetFields"},{name:"scrollToField"},{name:"clearValidate"}],props:[{name:"model",required:!0,type:{name:"NonModel"}},{name:"columns",required:!0,type:{name:"Array",elements:[{name:"FormColumn"}]}}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/workspace/workspace/packages/component/src/Form/OneForm.vue"]};const Q={title:"Example/Form",component:i,tags:["autodocs"],args:{}},c={args:{model:{},columns:[{prop:"name",formItemProps:{prop:"name",label:"name",required:!0},onChange(e){console.log(e)}},{prop:"age",rType:"number",min:1,formItemProps:{prop:"age",label:"age"},onChange(e,a){console.log(e,a)}},{rType:"date",label:"date",prop:"date",formItemProps:{prop:"date",label:"date"}},{rType:"date",label:"date2",prop:"date2",type:"datetime",formItemProps:{prop:"date2",label:"date2"}},{rType:"radio",prop:"radio",options:[{label:"12121",value:1212},{label:"2222",value:2222}],onChange(e){console.log("val: ",e)},formItemProps:{prop:"radio",label:"radio"}},{prop:"opera",rType:"select",options:[{label:"12",value:12},{label:"14",value:14}],formItemProps:{prop:"opera",label:"opera"}},{prop:"check",rType:"checkbox",options:[{label:"12",value:22},{label:"14",value:23}],formItemProps:{prop:"checkbox",label:"checkbox"}},{rType:"custom",prop:"custom",render:()=>g("div",null,[M("0000000")]),formItemProps:{prop:"",label:""}}]},render(e){return{components:{Form:i},setup(){const a=f();return{args:e,formRef:a,click:()=>{var o;(o=a.value)==null||o.validate(l=>{console.log("valid",l)})}}},template:`
        <button @click="click">submit</button>
        <Form v-bind="args" class="frfr" ref='formRef'>
          <template #custom="{ model }">
            <div>customcustom {{model.name}}</div>
          </template>
        </Form>
      `}}},d={args:{model:{},columns:[]},render(){return{components:{Form:i},setup(){const{formState:e,toggleColumn:a,setColumn:t}=j({columns:[{label:"name",prop:"name",requiredMsg:"name 必填"},{label:"age",prop:"age",rType:"number",min:1},{label:"opera",prop:"opera",rType:"checkbox",options:[{label:"操作1",value:1},{label:"操作2",value:2},{label:"操作3",value:3},{label:"操作4",value:4},{label:"操作5",value:5}]},{rType:"remote",prop:"remote",params:{},valueKey:"id",valueMap:{id:"iot"},method([r,m,u]){return console.log("query:",r,m,u),new Promise(n=>{setTimeout(()=>{n({list:new Array(20).fill(1).map((b,s)=>({label:`${r.page}-${s}`,id:`${r.page}-${s}-${m}`,value:{id:`${r.page}-${s}-${m}`,i:s}})),total:50})},500)})},renderLabel(r){return r.label},onChange(r){console.log("onChange",r)},clearable:!0}]});return{formState:e,toggleOpera:()=>{a("remote")},randomLabel:()=>t("name",{label:Math.random().toString()}),setRemoteParams:()=>{t("remote",{params:{time:Date.now()}})}}},template:`
        <button @click="toggleOpera">toggle</button>
        <button @click="randomLabel">random name label</button>
        <button @click="setRemoteParams">setRemoteParams</button>
        <Form v-bind="formState">
        </Form>
      `}}};var k,C,h;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    model: {},
    columns: [{
      prop: 'name',
      formItemProps: {
        prop: 'name',
        label: 'name',
        required: true
      },
      onChange(value) {
        console.log(value);
      }
    }, {
      prop: 'age',
      rType: 'number',
      min: 1,
      formItemProps: {
        prop: 'age',
        label: 'age'
      },
      onChange(cur, prev) {
        console.log(cur, prev);
      }
    }, {
      rType: 'date',
      label: 'date',
      prop: 'date',
      formItemProps: {
        prop: 'date',
        label: 'date'
      }
    }, {
      rType: 'date',
      label: 'date2',
      prop: 'date2',
      type: 'datetime',
      formItemProps: {
        prop: 'date2',
        label: 'date2'
      }
    }, {
      rType: 'radio',
      prop: 'radio',
      options: [{
        label: '12121',
        value: 1212
      }, {
        label: '2222',
        value: 2222
      }],
      onChange(val) {
        console.log('val: ', val);
      },
      formItemProps: {
        prop: 'radio',
        label: 'radio'
      }
    }, {
      prop: 'opera',
      rType: 'select',
      options: [{
        label: '12',
        value: 12
      }, {
        label: '14',
        value: 14
      }],
      formItemProps: {
        prop: 'opera',
        label: 'opera'
      }
    }, {
      prop: 'check',
      rType: 'checkbox',
      options: [{
        label: '12',
        value: 22
      }, {
        label: '14',
        value: 23
      }],
      formItemProps: {
        prop: 'checkbox',
        label: 'checkbox'
      }
    }, {
      rType: 'custom',
      prop: 'custom',
      render: () => {
        return <div>0000000</div>;
      },
      formItemProps: {
        prop: '',
        label: ''
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
}`,...(h=(C=c.parameters)==null?void 0:C.docs)==null?void 0:h.source}}};var P,T,$;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    model: {},
    columns: []
  },
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
        };
        const {
          formState,
          toggleColumn,
          setColumn
        } = useForm<Data>({
          columns: [{
            label: 'name',
            prop: 'name',
            requiredMsg: 'name 必填'
          }, {
            label: 'age',
            prop: 'age',
            rType: 'number',
            min: 1
          }, {
            label: 'opera',
            prop: 'opera',
            rType: 'checkbox',
            options: [{
              label: '操作1',
              value: 1
            }, {
              label: '操作2',
              value: 2
            }, {
              label: '操作3',
              value: 3
            }, {
              label: '操作4',
              value: 4
            }, {
              label: '操作5',
              value: 5
            }]
          }, {
            rType: 'remote',
            prop: 'remote',
            params: {},
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
                        label: \`\${p.page}-\${i}\`,
                        id: \`\${p.page}-\${i}-\${keyword}\`,
                        value: {
                          id: \`\${p.page}-\${i}-\${keyword}\`,
                          i
                        }
                      };
                    }),
                    total: 50
                  });
                }, 500);
              });
            },
            // multiple: true,
            renderLabel(i) {
              return i.label;
            },
            onChange(val) {
              console.log('onChange', val);
            },
            clearable: true
          }]
        });
        const toggleOpera = () => {
          toggleColumn('remote');
        };
        const setRemoteParams = () => {
          setColumn('remote', {
            params: {
              time: Date.now()
            }
          });
        };
        const randomLabel = () => setColumn('name', {
          label: Math.random().toString()
        });
        return {
          formState,
          toggleOpera,
          randomLabel,
          setRemoteParams
        };
      },
      template: \`
        <button @click="toggleOpera">toggle</button>
        <button @click="randomLabel">random name label</button>
        <button @click="setRemoteParams">setRemoteParams</button>
        <Form v-bind="formState">
        </Form>
      \`
    };
  }
}`,...($=(T=d.parameters)==null?void 0:T.docs)==null?void 0:$.source}}};const W=["BasicForm","UseForm"];export{c as BasicForm,d as UseForm,W as __namedExportsOrder,Q as default};
//# sourceMappingURL=Form.stories-c79073d7.js.map
