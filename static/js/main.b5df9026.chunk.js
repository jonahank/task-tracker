(this["webpackJsonptask-tracker"]=this["webpackJsonptask-tracker"]||[]).push([[0],{29:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(21),s=n.n(a),o=(n(29),n(14)),i=n(24),u=n(6),j=n.n(u),l=n(10),b=n(9),d=n(11),h=n(2),f=n(0),O=function(){return Object(f.jsxs)("div",{children:[Object(f.jsx)("h4",{children:"Version 1.0.0"}),Object(f.jsx)("p",{children:Object(f.jsx)("i",{children:"Last changes made in March"})}),Object(f.jsx)("br",{}),Object(f.jsxs)("p",{children:["Big credits to Traversy Media: \xa0",Object(f.jsx)("a",{href:"https://www.youtube.com/channel/UC29ju8bIPH5as8OGnQzwJyA",rel:"noreferrer",target:"_blank",children:"Check out his channel!"})]}),Object(f.jsx)("br",{})," ",Object(f.jsx)("br",{})," ",Object(f.jsx)("br",{})," ",Object(f.jsx)("br",{})," ",Object(f.jsx)("br",{}),Object(f.jsx)(d.b,{className:"btn",style:{background:"grey"},to:"/",children:"Go Back"})]})},x=function(e){var t=Object(r.useState)(""),n=Object(b.a)(t,2),c=n[0],a=n[1],s=Object(r.useState)(""),o=Object(b.a)(s,2),i=o[0],u=o[1],j=Object(r.useState)(!1),l=Object(b.a)(j,2),d=l[0],h=l[1];return Object(f.jsxs)("form",{className:"add-form",onSubmit:function(t){t.preventDefault(),c?(e.onAdd({text:c,day:i,reminder:d}),a(""),u(""),h(!1)):alert("Please add task")},children:[Object(f.jsxs)("div",{className:"form-control",children:[Object(f.jsx)("label",{children:"Task"}),Object(f.jsx)("input",{type:"text",placeholder:"Add Task",value:c,onChange:function(e){return a(e.target.value)}})]}),Object(f.jsxs)("div",{className:"form-control",children:[Object(f.jsx)("label",{children:"Day & Time"}),Object(f.jsx)("input",{type:"text",placeholder:"Add Day & Time",value:i,onChange:function(e){return u(e.target.value)}})]}),Object(f.jsxs)("div",{className:"form-control form-control-check",children:[Object(f.jsx)("label",{children:"Set Reminder"}),Object(f.jsx)("input",{type:"checkbox",checked:d,value:d,onChange:function(e){return h(e.currentTarget.checked)}})]}),Object(f.jsx)("input",{className:"btn btn-block",type:"submit",value:"Save Task"})]})},p=function(){return Object(f.jsxs)("footer",{children:[Object(f.jsx)("p",{children:"2021"}),Object(f.jsx)(d.b,{to:"/about",children:"About"})]})},k=function(e){return Object(f.jsx)("button",{onClick:e.onClick,style:{background:e.color},className:"btn",children:e.text})};k.defaultProps={color:"steelblue",text:"Error"};var m=k,g=function(e){return Object(f.jsxs)("header",{className:"header",children:[Object(f.jsx)("h1",{children:e.title}),Object(f.jsx)(m,{color:e.toggleOn?"grey":"green",text:e.toggleOn?"Close":"Add",onClick:e.showToggle})]})};g.defaultProps={title:"Task Tracker"};var v=g,y=n(23),w=function(e){return Object(f.jsxs)("div",{className:e.task.reminder?"task reminder":"task",onDoubleClick:function(){return e.toggle(e.task.id)},children:[Object(f.jsxs)("h3",{children:[e.task.text,Object(f.jsx)(y.a,{style:{color:"red",cursor:"pointer"},onClick:function(){return e.delete(e.task.id)}})]}),Object(f.jsx)("p",{children:e.task.day})]})},C=function(e){return Object(f.jsx)(f.Fragment,{children:e.tasks.map((function(t,n){return Object(f.jsx)(w,{task:t,delete:e.delete,toggle:e.toggle},n)}))})};var T=function(){var e=Object(r.useState)(!1),t=Object(b.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)([]),s=Object(b.a)(a,2),u=s[0],k=s[1];Object(r.useEffect)((function(){(function(){var e=Object(l.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m();case 2:t=e.sent,k(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var m=function(){var e=Object(l.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5001/tasks");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=Object(l.a)(j.a.mark((function e(t){var n,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5001/tasks/".concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(l.a)(j.a.mark((function e(t){var n,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5001/tasks",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(t)});case 2:return n=e.sent,e.next=5,n.json();case 5:r=e.sent,k([].concat(Object(i.a)(u),[r]));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(l.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5001/tasks/".concat(t),{method:"DELETE"});case 2:k(u.filter((function(e){return e.id!==t})));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=Object(l.a)(j.a.mark((function e(t){var n,r,c,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g(t);case 2:return n=e.sent,r=Object(o.a)(Object(o.a)({},n),{},{reminder:!n.reminder}),e.next=6,fetch("http://localhost:5001/tasks/".concat(t),{method:"PUT",headers:{"Content-type":"application/json"},body:JSON.stringify(r)});case 6:return c=e.sent,e.next=9,c.json();case 9:a=e.sent,k(u.map((function(e){return e.id===t?Object(o.a)(Object(o.a)({},e),{},{reminder:a.reminder}):e})));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function N(){c(!n)}return Object(f.jsx)(d.a,{children:Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)(h.a,{path:"/",exact:!0,render:function(e){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(v,{toggleOn:n,showToggle:N}),n?Object(f.jsx)(x,{onAdd:y}):"",u.length>0?Object(f.jsx)(C,{tasks:u,delete:w,toggle:T}):"No active tasks. Well done!",Object(f.jsx)(p,{})]})}}),Object(f.jsx)(h.a,{path:"/about",component:O})]})})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,38)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))};s.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(T,{})}),document.getElementById("root")),N()}},[[37,1,2]]]);
//# sourceMappingURL=main.b5df9026.chunk.js.map