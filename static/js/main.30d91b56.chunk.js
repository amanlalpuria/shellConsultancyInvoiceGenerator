(this["webpackJsonpshell-consultancy-invoice-generator"]=this["webpackJsonpshell-consultancy-invoice-generator"]||[]).push([[0],{31:function(e,t,s){},32:function(e,t,s){},36:function(e,t,s){"use strict";s.r(t);var i=s(1),a=s.n(i),l=s(9),c=s.n(l),n=(s(31),s(14),s(32),s(23)),d=s(11),r=s(7),o=s(12),h=s(4),j=s(25),m=s(15),b=s(17),x=s(10),p=s(0);class O extends a.a.Component{render(){return Object(p.jsxs)(x.a,{className:"my-1 flex-nowrap",children:[null!=this.props.cellData.leading&&Object(p.jsx)(x.a.Text,{className:"bg-light fw-bold border-0 text-secondary px-2",children:Object(p.jsx)("span",{className:"border border-2 border-secondary rounded-circle d-flex align-items-center justify-content-center small",style:{width:"20px",height:"20px"},children:this.props.cellData.leading})}),Object(p.jsx)(h.a.Control,{className:this.props.cellData.textAlign,type:this.props.cellData.type,placeholder:this.props.cellData.placeholder,min:this.props.cellData.min,name:this.props.cellData.name,id:this.props.cellData.id,value:this.props.cellData.value,step:this.props.cellData.step,presicion:this.props.cellData.presicion,"aria-label":this.props.cellData.name,onChange:this.props.onItemizedItemEdit,required:!0})]})}}var u=O;class g extends a.a.Component{render(){var e=this.props.onItemizedItemEdit,t=this.props.currency,s=this.props.onRowDel,i=this.props.items.map((function(i){return Object(p.jsx)(y,{onItemizedItemEdit:e,item:i,onDelEvent:s.bind(this),currency:t},i.id)}));return Object(p.jsxs)("div",{children:[Object(p.jsxs)(m.a,{children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{children:"Candidate/s"}),Object(p.jsx)("th",{children:"Date of Joining"}),Object(p.jsx)("th",{children:"PRICE/RATE"}),Object(p.jsx)("th",{className:"text-center",children:"ACTION"})]})}),Object(p.jsx)("tbody",{children:i})]}),Object(p.jsx)(o.a,{className:"fw-bold",onClick:this.props.onRowAdd,children:"Add Candidate"})]})}}class y extends a.a.Component{onDelEvent(){this.props.onDelEvent(this.props.item)}render(){return Object(p.jsxs)("tr",{children:[Object(p.jsxs)("td",{style:{width:"100%"},children:[Object(p.jsx)(u,{onItemizedItemEdit:this.props.onItemizedItemEdit,cellData:{type:"text",name:"name",placeholder:"Candidate Name",value:this.props.item.name,id:this.props.item.id}}),Object(p.jsx)(u,{onItemizedItemEdit:this.props.onItemizedItemEdit,cellData:{type:"text",name:"description",placeholder:"Candidate Employee ID",value:this.props.item.description,id:this.props.item.id}})]}),Object(p.jsx)("td",{style:{minWidth:"180px"},children:Object(p.jsx)(u,{onItemizedItemEdit:this.props.onItemizedItemEdit,cellData:{type:"date",name:"dateOfJoining",placeholder:"Date of Joining",value:this.props.item.dateOfJoining,id:this.props.item.id}})}),Object(p.jsx)("td",{style:{minWidth:"130px"},children:Object(p.jsx)(u,{onItemizedItemEdit:this.props.onItemizedItemEdit,cellData:{leading:this.props.currency,type:"number",name:"price",min:1,step:"0.01",presicion:2,textAlign:"text-end",value:this.props.item.price,id:this.props.item.id}})}),Object(p.jsx)("td",{className:"text-center",style:{minWidth:"50px"},children:Object(p.jsx)(b.c,{onClick:this.onDelEvent.bind(this),style:{height:"33px",width:"33px",padding:"7.5px"},className:"text-white mt-1 btn btn-danger"})})]})}}var N=g,f=s(24),v=s(20),w=s.n(v),C=s(22),T=s.p+"static/media/logo.6bfc4488.png";function I(){w()(document.querySelector("#invoiceCapture")).then((e=>{const t=e.toDataURL("image/png",1),s=new C.a({orientation:"portrait",unit:"pt",format:[612,792]});s.internal.scaleFactor=1;const i=s.getImageProperties(t),a=s.internal.pageSize.getWidth(),l=i.height*a/i.width;s.addImage(t,"PNG",0,0,a,l),s.save("invoice-001.pdf")}))}class S extends a.a.Component{constructor(e){super(e)}render(){return Object(p.jsxs)("div",{children:[Object(p.jsxs)(f.a,{show:this.props.showModal,onHide:this.props.closeModal,size:"lg",centered:!0,children:[Object(p.jsxs)("div",{id:"invoiceCapture",children:[Object(p.jsxs)("div",{className:"d-flex flex-row justify-content-between align-items-start bg-light w-100 p-4",children:[Object(p.jsxs)("div",{className:"w-100",children:[Object(p.jsx)("img",{src:T,alt:"Shell Consultancy",width:150,height:100}),Object(p.jsxs)("h6",{className:"fw-bold text-secondary mb-1",children:["Invoice #: ",this.props.info.invoiceNumber||""]})]}),Object(p.jsxs)("div",{className:"text-end ms-4",children:[Object(p.jsx)("h6",{className:"fw-bold mt-1 mb-2",children:"Amount\xa0Due:"}),Object(p.jsxs)("h5",{className:"fw-bold text-secondary",children:[" ",this.props.currency," ",this.props.total]}),Object(p.jsxs)("h6",{className:"fw-bold text-secondary mb-1",children:["Date of Issue : ",this.props.info.dateOfIssue||""]})]})]}),Object(p.jsxs)("div",{className:"p-4",children:[Object(p.jsxs)(d.a,{className:"mb-lg-4",style:{justifyContent:"space-between"},children:[Object(p.jsxs)(r.a,{md:4,children:[Object(p.jsx)("div",{className:"fw-bold",children:"Bill to:"}),Object(p.jsx)("div",{children:this.props.info.billTo||""}),Object(p.jsx)("div",{children:this.props.info.billToAddress||""}),Object(p.jsxs)("div",{children:["State : ",this.props.info.billToState||""]}),Object(p.jsxs)("div",{children:["Email : ",this.props.info.billToEmail||""]}),Object(p.jsxs)("div",{children:["Contact : ",this.props.info.billToContact||""]}),Object(p.jsxs)("div",{children:["GSTIN.:",this.props.info.billToGST||""]})]}),Object(p.jsxs)(r.a,{md:4,children:[Object(p.jsx)("div",{className:"fw-bold",children:"Bill From:"}),Object(p.jsx)("div",{children:"Shell Consultancy"}),Object(p.jsx)("div",{children:"24 ,East Part Shyam Vihar, Benar Road"}),Object(p.jsx)("div",{children:" Murlipura, JAIPUR- 302039"}),Object(p.jsx)("div",{children:" State:    RAJASTHAN"}),Object(p.jsx)("div",{children:" State. Code :  08"}),Object(p.jsx)("div",{children:"Email : admin@shellconsultancy.in"}),Object(p.jsx)("div",{children:"Mobile No.: 6367194878"}),Object(p.jsx)("div",{children:"GSTIN.: 08LJMPS3489R1ZL"})]})]}),Object(p.jsxs)(m.a,{className:"mb-0",children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{children:"S No."}),Object(p.jsx)("th",{children:"Joining Date"}),Object(p.jsx)("th",{children:"DESCRIPTION"}),Object(p.jsx)("th",{className:"text-end",children:"PRICE"}),Object(p.jsx)("th",{className:"text-end",children:"AMOUNT"})]})}),Object(p.jsx)("tbody",{children:this.props.items.map(((e,t)=>Object(p.jsxs)("tr",{id:t,children:[Object(p.jsx)("td",{children:t+1}),Object(p.jsx)("td",{style:{width:"100px"},children:e.dateOfJoining}),Object(p.jsxs)("td",{children:[e.name," - ",e.description]}),Object(p.jsxs)("td",{className:"text-end",style:{width:"100px"},children:[this.props.currency," ",e.price]}),Object(p.jsxs)("td",{className:"text-end",style:{width:"100px"},children:[this.props.currency," ",e.price]})]},t)))})]}),Object(p.jsx)(m.a,{children:Object(p.jsxs)("tbody",{children:[Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:"\xa0"}),Object(p.jsx)("td",{children:"\xa0"}),Object(p.jsx)("td",{children:"\xa0"})]}),Object(p.jsxs)("tr",{className:"text-end",children:[Object(p.jsx)("td",{}),Object(p.jsx)("td",{className:"fw-bold",style:{width:"100px"},children:"SUBTOTAL"}),Object(p.jsxs)("td",{className:"text-end",style:{width:"100px"},children:[this.props.currency," ",this.props.subTotal]})]}),0!=this.props.sgsttaxAmount&&Object(p.jsxs)("tr",{className:"text-end",children:[Object(p.jsx)("td",{}),Object(p.jsx)("td",{className:"fw-bold",style:{width:"100px"},children:"S.G.S.T"}),Object(p.jsxs)("td",{className:"text-end",style:{width:"100px"},children:[this.props.currency," ",this.props.sgsttaxAmount]})]}),0!=this.props.cgsttaxAmount&&Object(p.jsxs)("tr",{className:"text-end",children:[Object(p.jsx)("td",{}),Object(p.jsx)("td",{className:"fw-bold",style:{width:"100px"},children:"C.G.S.T"}),Object(p.jsxs)("td",{className:"text-end",style:{width:"100px"},children:[this.props.currency," ",this.props.cgsttaxAmount]})]}),0!=this.props.discountAmmount&&Object(p.jsxs)("tr",{className:"text-end",children:[Object(p.jsx)("td",{}),Object(p.jsx)("td",{className:"fw-bold",style:{width:"100px"},children:"DISCOUNT"}),Object(p.jsxs)("td",{className:"text-end",style:{width:"100px"},children:[this.props.currency," ",this.props.discountAmmount]})]}),Object(p.jsxs)("tr",{className:"text-end",children:[Object(p.jsx)("td",{}),Object(p.jsx)("td",{className:"fw-bold",style:{width:"100px"},children:"TOTAL"}),Object(p.jsxs)("td",{className:"text-end",style:{width:"100px"},children:[this.props.currency," ",this.props.total]})]})]})}),this.props.info.notes&&Object(p.jsx)("div",{className:"bg-light py-3 px-4 rounded",children:this.props.info.notes}),Object(p.jsxs)(d.a,{className:"mb-lg-4",style:{justifyContent:"space-between",padding:"59px 0 0 0",marginTop:"50px"},children:[Object(p.jsxs)(r.a,{md:5,children:[Object(p.jsx)("div",{className:"fw-bold",children:"Bank Details:"}),Object(p.jsx)("div",{children:"State Bank of India, Murlipura Scheme, Jaipur"}),Object(p.jsx)("div",{children:"A/c No. 42391739087, IFSC: SBIN0031721"})]}),Object(p.jsxs)(r.a,{lg:5,children:[Object(p.jsx)("div",{className:"fw-bold mt-4",children:"For Shell Consultancy:"}),Object(p.jsx)("div",{children:"( Proprietor )"})]})]})]})]}),Object(p.jsx)("div",{className:"pb-4 px-4",children:Object(p.jsxs)(d.a,{children:[Object(p.jsx)(r.a,{md:6,children:Object(p.jsxs)(o.a,{variant:"primary",className:"d-block w-100",onClick:I,children:[Object(p.jsx)(b.b,{style:{width:"15px",height:"15px",marginTop:"-3px"},className:"me-2"}),"Send Invoice"]})}),Object(p.jsx)(r.a,{md:6,children:Object(p.jsxs)(o.a,{variant:"outline-primary",className:"d-block w-100 mt-3 mt-md-0",onClick:I,children:[Object(p.jsx)(b.a,{style:{width:"16px",height:"16px",marginTop:"-3px"},className:"me-2"}),"Download Copy"]})})]})})]}),Object(p.jsx)("hr",{className:"mt-4 mb-3"})]})}}var A=S;class D extends a.a.Component{constructor(e){super(e),this.editField=e=>{this.setState({[e.target.name]:e.target.value}),this.handleCalculateTotal()},this.onCurrencyChange=e=>{this.setState(e)},this.openModal=e=>{e.preventDefault(),this.handleCalculateTotal(),this.setState({isOpen:!0})},this.closeModal=e=>this.setState({isOpen:!1}),this.state={isOpen:!1,currency:"\u20b9",currentDate:"",invoiceNumber:1,dateOfIssue:"",billTo:"",billToEmail:"",billToContact:"",billToAddress:"",billToGST:"",billFrom:"",billToState:"",billFromEmail:"",billFromAddress:"",notes:"",total:"0.00",subTotal:"0.00",cgst:"",sgst:"",cgsttaxAmount:"0.00",sgsttaxAmount:"0.00",discountRate:"",discountAmmount:"0.00"},this.state.items=[{id:0,name:"",description:"",price:"1.00",dateOfJoining:""}],this.editField=this.editField.bind(this)}componentDidMount(e){this.handleCalculateTotal()}handleRowDel(e){var t=this.state.items.indexOf(e);this.state.items.splice(t,1),this.setState(this.state.items)}handleAddEvent(e){var t={id:(+new Date+Math.floor(999999*Math.random())).toString(36),name:"",price:"1.00",description:"",dateOfJoining:""};this.setState((e=>({items:[...e.items,t]})),(()=>{this.handleCalculateTotal()}))}handleCalculateTotal(){var e=this.state.items,t=0;e.forEach((e=>{t+=parseFloat(e.price)})),this.setState({subTotal:t.toFixed(2),cgsttaxAmount:(t*(this.state.cgst/100)).toFixed(2),sgsttaxAmount:(t*(this.state.sgst/100)).toFixed(2),discountAmmount:(t*(this.state.discountRate/100)).toFixed(2),total:(t-this.state.discountAmmount+parseFloat(this.state.cgsttaxAmount)+parseFloat(this.state.sgsttaxAmount)).toFixed(2)})}onItemizedItemEdit(e){var t={id:e.target.id,name:e.target.name,value:e.target.value},s=this.state.items.slice().map((function(e){for(var s in e)s==t.name&&e.id==t.id&&(e[s]=t.value);return e}));this.setState({items:s}),this.handleCalculateTotal()}render(){return Object(p.jsx)(h.a,{onSubmit:this.openModal,children:Object(p.jsxs)(d.a,{children:[Object(p.jsx)(r.a,{md:8,lg:9,children:Object(p.jsxs)(j.a,{className:"p-4 p-xl-5 my-3 my-xl-4",children:[Object(p.jsxs)("div",{className:"d-flex flex-row align-items-start justify-content-between mb-3",children:[Object(p.jsxs)("div",{class:"d-flex flex-column",children:[Object(p.jsx)("div",{className:"d-flex flex-column"}),Object(p.jsxs)("div",{className:"d-flex flex-row align-items-center",children:[Object(p.jsx)("span",{className:"fw-bold d-block me-2",children:"Date\xa0of\xa0Issue:"}),Object(p.jsx)(h.a.Control,{type:"date",value:this.state.dateOfIssue,name:"dateOfIssue",onChange:e=>this.editField(e),style:{maxWidth:"150px"},required:"required"})]})]}),Object(p.jsxs)("div",{className:"d-flex flex-row align-items-center",children:[Object(p.jsx)("span",{className:"fw-bold me-2",children:"Invoice\xa0Number:\xa0"}),Object(p.jsx)(h.a.Control,{type:"number",value:this.state.invoiceNumber,name:"invoiceNumber",onChange:e=>this.editField(e),min:"1",style:{maxWidth:"70px"},required:"required"})]})]}),Object(p.jsx)("hr",{className:"my-4"}),Object(p.jsx)(d.a,{className:"mb-5",children:Object(p.jsxs)(r.a,{children:[Object(p.jsx)(h.a.Label,{className:"fw-bold",children:"Bill to:"}),Object(p.jsx)(h.a.Control,{placeholder:"Who is this invoice to",rows:3,value:this.state.billTo,type:"text",name:"billTo",className:"my-2",onChange:e=>this.editField(e),autoComplete:"name",required:"required"}),Object(p.jsx)(h.a.Control,{placeholder:"Billing address",value:this.state.billToAddress,type:"text",name:"billToAddress",className:"my-2",autoComplete:"address",onChange:e=>this.editField(e),required:"required"}),Object(p.jsx)(h.a.Control,{placeholder:"State",value:this.state.billToState,type:"text",name:"billToState",className:"my-2",autoComplete:"address",onChange:e=>this.editField(e),required:"required"}),Object(p.jsx)(h.a.Control,{placeholder:"Email address",value:this.state.billToEmail,type:"email",name:"billToEmail",className:"my-2",onChange:e=>this.editField(e),autoComplete:"email",required:"required"}),Object(p.jsx)(h.a.Control,{placeholder:"Contact",value:this.state.billToContact,type:"text",name:"billToContact",className:"my-2",autoComplete:"address",onChange:e=>this.editField(e),required:"required"}),Object(p.jsx)(h.a.Control,{placeholder:"GST No:",value:this.state.billToGST,type:"text",name:"billToGST",className:"my-2",autoComplete:"gst",onChange:e=>this.editField(e),required:"required"})]})}),Object(p.jsx)(N,{onItemizedItemEdit:this.onItemizedItemEdit.bind(this),onRowAdd:this.handleAddEvent.bind(this),onRowDel:this.handleRowDel.bind(this),currency:this.state.currency,items:this.state.items}),Object(p.jsx)(d.a,{className:"mt-4 justify-content-end",children:Object(p.jsxs)(r.a,{lg:6,children:[Object(p.jsxs)("div",{className:"d-flex flex-row align-items-start justify-content-between",children:[Object(p.jsx)("span",{className:"fw-bold",children:"Subtotal:"}),Object(p.jsxs)("span",{children:[this.state.currency,this.state.subTotal]})]}),Object(p.jsxs)("div",{className:"d-flex flex-row align-items-start justify-content-between mt-2",children:[Object(p.jsx)("span",{className:"fw-bold",children:"Discount:"}),Object(p.jsxs)("span",{children:[Object(p.jsxs)("span",{className:"small ",children:["(",this.state.discountRate||0,"%)"]}),this.state.currency,this.state.discountAmmount||0]})]}),Object(p.jsxs)("div",{className:"d-flex flex-row align-items-start justify-content-between mt-2",children:[Object(p.jsx)("span",{className:"fw-bold",children:"S.G.S.T:"}),Object(p.jsxs)("span",{children:[Object(p.jsxs)("span",{className:"small ",children:["(",this.state.sgst||0,"%)"]}),this.state.currency,this.state.sgsttaxAmount||0]})]}),Object(p.jsxs)("div",{className:"d-flex flex-row align-items-start justify-content-between mt-2",children:[Object(p.jsx)("span",{className:"fw-bold",children:"C.G.S.T:"}),Object(p.jsxs)("span",{children:[Object(p.jsxs)("span",{className:"small ",children:["(",this.state.cgst||0,"%)"]}),this.state.currency,this.state.cgsttaxAmount||0]})]}),Object(p.jsx)("hr",{}),Object(p.jsxs)("div",{className:"d-flex flex-row align-items-start justify-content-between",style:{fontSize:"1.125rem"},children:[Object(p.jsx)("span",{className:"fw-bold",children:"Total:"}),Object(p.jsxs)("span",{className:"fw-bold",children:[this.state.currency,this.state.total||0]})]})]})}),Object(p.jsx)("hr",{className:"my-4"}),Object(p.jsx)(h.a.Label,{className:"fw-bold",children:"Notes:"}),Object(p.jsx)(h.a.Control,{placeholder:"Thanks for your business!",name:"notes",value:this.state.notes,onChange:e=>this.editField(e),as:"textarea",className:"my-2",rows:1})]})}),Object(p.jsx)(r.a,{md:4,lg:3,children:Object(p.jsxs)("div",{className:"sticky-top pt-md-3 pt-xl-4",children:[Object(p.jsx)(o.a,{variant:"primary",type:"submit",className:"d-block w-100",children:"Review Invoice"}),Object(p.jsx)(A,{showModal:this.state.isOpen,closeModal:this.closeModal,info:this.state,items:this.state.items,currency:this.state.currency,subTotal:this.state.subTotal,cgsttaxAmount:this.state.cgsttaxAmount,sgsttaxAmount:this.state.sgsttaxAmount,discountAmmount:this.state.discountAmmount,total:this.state.total}),Object(p.jsxs)(h.a.Group,{className:"my-3",children:[Object(p.jsx)(h.a.Label,{className:"fw-bold",children:"S.G.S.T:"}),Object(p.jsxs)(x.a,{className:"my-1 flex-nowrap",children:[Object(p.jsx)(h.a.Control,{name:"sgst",type:"number",value:this.state.sgst,onChange:e=>this.editField(e),className:"bg-white border",placeholder:"0.0",min:"0.00",step:"0.01",max:"100.00"}),Object(p.jsx)(x.a.Text,{className:"bg-light fw-bold text-secondary small",children:"%"})]}),Object(p.jsx)(h.a.Label,{className:"fw-bold",children:"C.G.S.T:"}),Object(p.jsxs)(x.a,{className:"my-1 flex-nowrap",children:[Object(p.jsx)(h.a.Control,{name:"cgst",type:"number",value:this.state.cgst,onChange:e=>this.editField(e),className:"bg-white border",placeholder:"0.0",min:"0.00",step:"0.01",max:"100.00"}),Object(p.jsx)(x.a.Text,{className:"bg-light fw-bold text-secondary small",children:"%"})]})]}),Object(p.jsxs)(h.a.Group,{className:"my-3",children:[Object(p.jsx)(h.a.Label,{className:"fw-bold",children:"Discount rate:"}),Object(p.jsxs)(x.a,{className:"my-1 flex-nowrap",children:[Object(p.jsx)(h.a.Control,{name:"discountRate",type:"number",value:this.state.discountRate,onChange:e=>this.editField(e),className:"bg-white border",placeholder:"0.0",min:"0.00",step:"0.01",max:"100.00"}),Object(p.jsx)(x.a.Text,{className:"bg-light fw-bold text-secondary small",children:"%"})]})]})]})})]})})}}var E=D;class F extends i.Component{render(){return Object(p.jsx)("div",{className:"App d-flex flex-column align-items-center justify-content-center w-100",children:Object(p.jsx)(n.a,{children:Object(p.jsx)(E,{})})})}}var R=F;var q=e=>{e&&e instanceof Function&&s.e(5).then(s.bind(null,429)).then((t=>{let{getCLS:s,getFID:i,getFCP:a,getLCP:l,getTTFB:c}=t;s(e),i(e),a(e),l(e),c(e)}))};c.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(R,{})}),document.getElementById("root")),q()}},[[36,1,3]]]);
//# sourceMappingURL=main.30d91b56.chunk.js.map