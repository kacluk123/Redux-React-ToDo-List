(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(t,e,a){t.exports=a(44)},32:function(t,e,a){},39:function(t,e,a){t.exports=a.p+"static/media/logo.5d5d9eef.svg"},40:function(t,e,a){},44:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),o=a(20),i=a.n(o),s=(a(32),a(3)),c=a(4),l=a(7),u=a(5),p=a(8),d=a(6),m=a(9),f=a(24),y=a(14),h={toDos:[]},O=Object(m.c)({toDos:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h.toDos,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD_TODO":return[e.payload].concat(Object(y.a)(t));case"ADD_TODO":return Object(y.a)(t);case"DELETE_TODO":return console.log(t),t.filter(function(t){return t.id!==e.payload});case"CHANGE_TODO":return t.map(function(t){return t.id===e.payload.id?t=e.payload:t});default:return t}}}),b=[f.a],E=Object(m.e)(O,{},Object(m.d)(m.a.apply(void 0,b),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),v=a(25),k=a(26),g=a.n(k),D=a(13),j=a.n(D),T=function(){return function(t){t({type:"ADD_TODO"})}},N=function(t){function e(){var t,a;Object(s.a)(this,e);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(l.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(r)))).state={task:"",priority:"",errors:{}},a.onChange=function(t){return a.setState(Object(v.a)({},t.target.name,t.target.value))},a.sendTodo=function(t){t.preventDefault();var e=a.state,n=e.task,r=e.priority,o={task:n,priority:Number(r),id:g()()};""!==n?""!==r?!0!==isNaN(r)?(a.props.addTodo(o),a.setState({task:"",priority:"",errors:{}})):a.setState({errors:{priority:"Must be a number"}}):a.setState({errors:{priority:"Type a priority"}}):a.setState({errors:{task:"Type something!"}})},a}return Object(p.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){var t=this.state,e=t.task,a=t.priority,n=t.errors;return r.a.createElement("div",{style:{padding:"30px"},className:"container"},r.a.createElement("form",{onSubmit:this.sendTodo},r.a.createElement("div",{className:"form-row"},r.a.createElement("div",{className:"col-sm-9"},r.a.createElement("input",{onChange:this.onChange,type:"text",name:"task",className:j()("form-control",{"is-invalid":n.task}),value:e,placeholder:"Type a task"}),"  ",n.task&&r.a.createElement("div",{style:{position:"absolute"},className:"invalid-feedback"},n.task)),r.a.createElement("div",{className:"col-sm-2"},r.a.createElement("input",{onChange:this.onChange,type:"text",style:{position:"relative"},name:"priority",className:j()("form-control editedform",{"is-invalid":n.priority}),value:a,placeholder:"Priority"}),n.priority&&r.a.createElement("div",{className:"invalid-feedback",style:{position:"absolute"}},n.priority),r.a.createElement("input",{className:"btn btn-primary rwd",style:{position:"absolute",top:"0",left:"100%"},type:"submit",value:"Add task"})))))}}]),e}(n.Component),w=Object(d.b)(null,{addTodo:function(t){return function(e){e({type:"ADD_TODO",payload:t})}},getTodo:T})(N),_=function(t){function e(t){var a;return Object(s.a)(this,e),(a=Object(l.a)(this,Object(u.a)(e).call(this,t))).onDelete=function(t){a.props.deleteTodo(t)},a.textChange=function(t){a.setState({task:t.target.value})},a.onEdit=function(){a.setState({edit:!a.state.edit});var t=a.props.task,e=t.priority,n=t.id,r={task:a.state.task,priority:e,id:n};a.props.task.task!==a.state.task&&""!==a.state.task&&a.props.changeTodo(r)},a.state={edit:!1,task:""},a}return Object(p.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){var t=this.props.task,e=t.task,a=t.priority,n=t.id;return r.a.createElement("li",{className:"list-group-item"},this.state.edit?r.a.createElement("input",{type:"text",onChange:this.textChange,placeholder:e,className:"form-control",id:"formGroupExampleInput2",value:this.state.task}):r.a.createElement("span",{style:{width:"80%",wordBreak:"break-all"}},e),r.a.createElement("div",{style:{display:"flex"}},r.a.createElement("div",{style:{fontSize:"20px",marginRight:"20px"}},r.a.createElement("span",null,"Priority"),r.a.createElement("span",null,a)),r.a.createElement("i",{className:"far fa-trash-alt",onClick:this.onDelete.bind(this,n),style:{fontSize:"30px",float:"right",cursor:"pointer"}}),r.a.createElement("i",{className:"far fa-edit",onClick:this.onEdit,style:{fontSize:"30px",cursor:"pointer",marginRight:"10px",float:"right"}})))}}]),e}(n.Component),C=Object(d.b)(null,{deleteTodo:function(t){return function(e){e({type:"DELETE_TODO",payload:t})}},changeTodo:function(t){return function(e){e({type:"CHANGE_TODO",payload:t})}}})(_),x=function(t){function e(){return Object(s.a)(this,e),Object(l.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){var t=this.props.toDos;return console.log(t),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"card"},r.a.createElement("ul",{className:"list-group list-group-flush"},t.sort(function(t,e){return e.priority-t.priority}).map(function(t){return r.a.createElement(C,{task:t})}))))}}]),e}(n.Component),S=Object(d.b)(function(t){return{toDos:t.toDos}},{getTodo:T})(x),A=(a(39),a(40),a(42),function(t){function e(){return Object(s.a)(this,e),Object(l.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return r.a.createElement(d.a,{store:E},r.a.createElement("div",null,r.a.createElement(w,null),r.a.createElement(S,null)))}}]),e}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[27,2,1]]]);
//# sourceMappingURL=main.8db3ee9b.chunk.js.map