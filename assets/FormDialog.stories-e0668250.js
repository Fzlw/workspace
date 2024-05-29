import{a as y,b as v}from"./vue.esm-bundler-2b92b106.js";import{c as u}from"./el-message-box-0e7d5819.js";import{u as f}from"./index-223e4f80.js";import"./index-c013ead5.js";import"./_commonjsHelpers-725317a4.js";import"./index-507dd2a8.js";import"./cloneDeep-bdfe0376.js";const k={title:"Example/OneFormDialog",component:u,tags:["autodocs"],argTypes:{visible:{description:"显示/隐藏弹窗",defaultValue:{summary:!1},control:{type:"boolean"}},formProps:{description:"OneForm组件的props",defaultValue:{summary:"OneFormProps"},control:{type:"object"}},noText:{description:"取消按钮的文案(为空则不展示)",defaultValue:{summary:"取消"},control:{type:"text"}},noProps:{description:"取消按钮props",defaultValue:{summary:"Partial<ButtonProps>"},control:{type:"object"}},okText:{description:"确定按钮的文案(为空则不展示)",defaultValue:{summary:"确定"},control:{type:"text"}},okProps:{description:"确定按钮props",defaultValue:{summary:"Partial<ButtonProps>"},control:{type:"object"}},submitting:{description:"提交中的响应式状态",defaultValue:{summary:!1},control:{type:"boolean"}}},parameters:{docs:{description:{component:"基于 el-dialog 和 OneForm 实现 $attrs 会透传至 el-dialog"}}}},o={render(s){return{components:{Form:u},setup(){const{formDialogState:m,submit:p,show:i,hide:d,setColumn:c}=f({columns:[{label:"name",prop:"name",requiredMsg:"name 必填"},{label:"age",prop:"age",rType:"number",min:1},{label:"opera",prop:"opera",rType:"checkbox",options:[{label:"操作1",value:1},{label:"操作2",value:2},{label:"操作3",value:3},{label:"操作4",value:4},{label:"操作5",value:5}],onChange(){c("remote",{disabled:!1})}},{rType:"remote",prop:"remote",params:{},valueKey:"id",valueMap:{id:"iot"},disabled:!0,method([e,n,b]){return console.log("query:",e,n,b),new Promise(g=>{setTimeout(()=>{g({list:new Array(20).fill(1).map((C,r)=>({label:`${e.currentPage}-${r}`,id:`${e.currentPage}-${r}-${n}`,value:{id:`${e.currentPage}-${r}-${n}`,i:r}})),total:50})},500)})},multiple:!0,renderLabel(e){return e.label},onChange(e){console.log("onChange",e)},clearable:!0},{rType:"date",prop:""},{rType:"custom",prop:"",render(){return y("div",{onClick:d},[v("hide")])}}],post(e){return new Promise(n=>{setTimeout(()=>{console.log(e),n()},3e3)})}});return{args:s,formDialogState:m,submit:p,show:i}},template:`
        <button @click="show">show</button>
        <Form v-bind="{...args, ...formDialogState}">
        </Form>
      `}}};var a,t,l;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render(args) {
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
          formDialogState,
          submit,
          show,
          hide,
          setColumn
        } = useFormDialog<Data>({
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
            }],
            onChange() {
              setColumn('remote', {
                disabled: false
              });
            }
          }, {
            rType: 'remote',
            prop: 'remote',
            params: {},
            valueKey: 'id',
            valueMap: {
              id: 'iot'
            },
            disabled: true,
            method([p, keyword, params]) {
              console.log('query:', p, keyword, params);
              return new Promise(r => {
                setTimeout(() => {
                  r({
                    list: new Array(20).fill(1).map((_, i) => {
                      return {
                        label: \`\${p.currentPage}-\${i}\`,
                        id: \`\${p.currentPage}-\${i}-\${keyword}\`,
                        value: {
                          id: \`\${p.currentPage}-\${i}-\${keyword}\`,
                          i
                        }
                      };
                    }),
                    total: 50
                  });
                }, 500);
              });
            },
            multiple: true,
            renderLabel(i) {
              return i.label;
            },
            onChange(val) {
              console.log('onChange', val);
            },
            clearable: true
          }, {
            rType: 'date',
            prop: ''
          }, {
            rType: 'custom',
            prop: '',
            render() {
              return <div onClick={hide}>hide</div>;
            }
          }],
          post(model) {
            return new Promise<void>(r => {
              setTimeout(() => {
                console.log(model);
                r();
              }, 3000);
            });
          }
        });
        return {
          args,
          formDialogState,
          submit,
          show
        };
      },
      template: \`
        <button @click="show">show</button>
        <Form v-bind="{...args, ...formDialogState}">
        </Form>
      \`
    };
  }
}`,...(l=(t=o.parameters)==null?void 0:t.docs)==null?void 0:l.source}}};const x=["基础用例"];export{x as __namedExportsOrder,k as default,o as 基础用例};
//# sourceMappingURL=FormDialog.stories-e0668250.js.map
