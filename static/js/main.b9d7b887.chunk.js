(this.webpackJsonp12_todo_react=this.webpackJsonp12_todo_react||[]).push([[0],[,,,,,function(e,t,a){e.exports={form:"TaskForm_form__1NX0q",input_container:"TaskForm_input_container__KDLxv"}},function(e,t,a){e.exports={task:"TaskList_task__3ZB1t",details:"TaskList_details__dJD2K",actions:"TaskList_actions__Ikf3z"}},,function(e,t,a){e.exports={main:"App_main__3oJQz"}},function(e,t,a){e.exports={fade:"Modal_fade__2sVql",modal:"Modal_modal__IPgLJ"}},,function(e,t,a){e.exports={footer:"Footer_footer__2aenp"}},function(e,t,a){e.exports={header:"Header_header__3byrL"}},,,,,,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),i=a(10),s=a.n(i),r=(a(18),a(2)),l=a(8),d=a.n(l),o=a(11),j=a.n(o),u=a(0),f=function(){return Object(u.jsx)("footer",{className:j.a.footer,children:Object(u.jsxs)("p",{children:[Object(u.jsx)("span",{children:"React + TS Todo"})," @ 2021"]})})},b=a(12),h=a.n(b),O=function(){return Object(u.jsx)("header",{className:h.a.header,children:Object(u.jsx)("h1",{children:"React + TS Todo"})})},m=a(9),x=a.n(m),_=function(e){var t=e.children,a=e.title;return Object(u.jsxs)("div",{id:"modal",className:"hide",children:[Object(u.jsx)("div",{className:x.a.fade,onClick:function(e){document.getElementById("modal").classList.add("hide")}}),Object(u.jsxs)("div",{className:x.a.modal,children:[Object(u.jsx)("h2",{children:a}),t]})]})},p=a(13),v=a(5),k=a.n(v),N=function(e){var t=e.btnText,a=e.taskList,c=e.setTaskList,i=e.task,s=e.handleUpdate,l=Object(n.useState)(0),d=Object(r.a)(l,2),o=d[0],j=d[1],f=Object(n.useState)(""),b=Object(r.a)(f,2),h=b[0],O=b[1],m=Object(n.useState)(0),x=Object(r.a)(m,2),_=x[0],v=x[1];Object(n.useEffect)((function(){i&&(j(i.id),O(i.title),v(i.difficulty))}),[i]);var N=function(e){"title"===e.target.name?O(e.target.value):v(parseInt(e.target.value))};return Object(u.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),console.log(s),a)if(s)console.log(h),console.log(_),s(o,h,_);else{var t={id:Math.floor(1e3*Math.random()),title:h,difficulty:_};c([].concat(Object(p.a)(a),[t])),O(""),v(0)}},className:k.a.form,children:[Object(u.jsxs)("div",{className:k.a.input_container,children:[Object(u.jsx)("label",{htmlFor:"title",children:"T\xedtulo:"}),Object(u.jsx)("input",{type:"text",name:"title",placeholder:"T\xedtulo da tarefa",value:h,onChange:N})]}),Object(u.jsxs)("div",{className:k.a.input_container,children:[Object(u.jsx)("label",{htmlFor:"difficulty",children:"Dificuldade:"}),Object(u.jsx)("input",{type:"number",name:"difficulty",placeholder:"Dificuldade da tarefa (1 a 5)",value:_,onChange:N})]}),Object(u.jsx)("input",{type:"submit",value:t})]})},L=a(6),T=a.n(L),g=function(e){var t=e.taskList,a=e.handleDelete,n=e.handleEdit;return Object(u.jsx)(u.Fragment,{children:t.length>0?t.map((function(e,t){return Object(u.jsxs)("div",{className:T.a.task,children:[Object(u.jsxs)("div",{className:T.a.details,children:[Object(u.jsx)("h4",{children:e.title}),Object(u.jsxs)("p",{children:["Dificuldade: ",e.difficulty]})]}),Object(u.jsxs)("div",{className:T.a.actions,children:[Object(u.jsx)("i",{className:"bi bi-pencil",onClick:function(){return n(e)}}),Object(u.jsx)("i",{className:"bi bi-trash",onClick:function(){return a(e.title)}})]})]},t)})):Object(u.jsx)("p",{children:"N\xe3o h\xe1 tarefas cadastradas"})})};var y=function(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(null),s=Object(r.a)(i,2),l=s[0],o=s[1],j=function(e){var t=document.getElementById("modal");e?t.classList.remove("hide"):t.classList.add("hide")};return Object(u.jsxs)("div",{children:[Object(u.jsx)(_,{title:"Editar tarefa",children:Object(u.jsx)(N,{btnText:"Editar",taskList:a,task:l,handleUpdate:function(e,t,n){var i={id:e,title:t,difficulty:n},s=a.map((function(e){return e.id===i.id?i:e}));c(s),j(!1)}})}),Object(u.jsx)(O,{}),Object(u.jsxs)("main",{className:d.a.main,children:[Object(u.jsxs)("div",{className:d.a.todo_form,children:[Object(u.jsx)("h2",{children:"O que voc\xea pretende fazer?"}),Object(u.jsx)(N,{taskList:a,setTaskList:c,btnText:"Cadastrar"})]}),Object(u.jsxs)("div",{className:"todo-container",children:[Object(u.jsx)("h2",{children:"Suas tarefas:"}),Object(u.jsx)(g,{taskList:a,handleDelete:function(e){c(a.filter((function(t){return t.title!==e})))},handleEdit:function(e){j(!0),o(e)}})]})]}),Object(u.jsx)(f,{})]})};s.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(y,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.b9d7b887.chunk.js.map