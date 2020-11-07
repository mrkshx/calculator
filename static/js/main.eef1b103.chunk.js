(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var u=n(0),a=n(1),r=n.n(a),c=n(5),o=n.n(c),i=(n(12),n(3)),l=n(2),s=function(e,t){switch(t.type){case"INPUT_KEYS":return Object(l.a)(Object(l.a)({},e),{},{equation:e.equation+t.payload,firstInput:!1});case"REMOVE_LEADING_ZERO":return Object(l.a)(Object(l.a)({},e),{},{equation:e.equation.substring(1)});case"RESET_DISPLAY":return Object(l.a)(Object(l.a)({},e),{},{equation:t.payload,calculation:"",firstInput:!0,isCalculation:!1});case"UNDO_LAST_INPUT":if(e.isCalculation)return Object(l.a)(Object(l.a)({},e),{},{isCalculation:!1});var n=e.equation.slice(0,-1);return Object(l.a)(Object(l.a)({},e),{},{equation:n});case"CALCULATE":return Object(l.a)(Object(l.a)({},e),{},{calculation:t.payload,isCalculation:!0});default:return e}},j={equation:"0",calculation:"",firstInput:!0,isCalculation:!1},p=Object(a.createContext)(j),b=function(e){var t=e.children,n=Object(a.useReducer)(s,j),r=Object(i.a)(n,2),c=r[0],o=r[1];return Object(u.jsx)(p.Provider,{value:[c,o],children:t})},O=(n(13),n(14),function(){var e=Object(a.useContext)(p),t=Object(i.a)(e,1)[0];return Object(u.jsx)("div",{id:"display",children:Object(u.jsx)("h1",{id:"display_output",children:t.isCalculation?t.calculation:t.equation})})}),d=n(6),v=(n(15),function(e){var t=Object(a.useContext)(p),n=Object(i.a)(t,2),r=n[0],c=n[1];return Object(u.jsx)("div",{className:"key ".concat(e.type,"_key"),id:function(){var t;return"number"===e.type?t="."===e.value?"numdot":"num".concat(e.value):"clear"===e.type&&(t="clear".concat(e.value)),t}(),onClick:function(){switch(e.type){case"number":!0===r.firstInput&&c({type:"REMOVE_LEADING_ZERO"}),r.equation.length<=9&&c({type:"INPUT_KEYS",payload:e.value});break;case"operator":if("="!==e.value)!0===r.firstInput&&c({type:"REMOVE_LEADING_ZERO"}),r.equation.length<=9&&c({type:"INPUT_KEYS",payload:e.value});else if("="===e.value){var t=0,n=r.equation.match(Object(d.a)(/^([\+\x2D]?[0-9]*\.?[0-9]*)([\+-x]?)([\+\x2D]?[0-9]*\.?[0-9]*)$/,{num1:1,operator:2,num2:3}));null!==n?0!==n.groups.operator.length&&(n.groups.num1=Number(n.groups.num1),n.groups.num2=Number(n.groups.num2),t=function(e){switch(e.groups.operator){case"+":return e.groups.num1+e.groups.num2;case"-":return e.groups.num1-e.groups.num2;case"x":return e.groups.num1*e.groups.num2;case":":return e.groups.num1/e.groups.num2;default:return 0}}(n),Number.isInteger(t)?t=t.toFixed(0):(t=t.toFixed(3),t=parseFloat(t)),c({type:"CALCULATE",payload:t})):c({type:"CALCULATE",payload:"ERR"})}break;case"clear":"AC"===e.value?c({type:"RESET_DISPLAY",payload:"0"}):"C"===e.value&&c({type:"UNDO_LAST_INPUT"});break;default:return""}},style:function(){var t="",n="";return"number"===e.type?t="white":"operator"===e.type&&"="!==e.value?t="#DF8601":"operator"===e.type?(t="black",n="white"):t="red",{backgroundColor:t,color:n}}(),children:Object(u.jsx)("p",{children:e.value})})}),y=(n(16),function(){return Object(u.jsxs)("div",{id:"clear_pad",children:[Object(u.jsx)(v,{value:"C",type:"clear"}),Object(u.jsx)(v,{value:"AC",type:"clear"})]})}),x=(n(17),function(){return Object(u.jsxs)("div",{id:"number_pad",children:[Object(u.jsx)(v,{value:"7",type:"number"}),Object(u.jsx)(v,{value:"8",type:"number"}),Object(u.jsx)(v,{value:"9",type:"number"}),Object(u.jsx)(v,{value:"4",type:"number"}),Object(u.jsx)(v,{value:"5",type:"number"}),Object(u.jsx)(v,{value:"6",type:"number"}),Object(u.jsx)(v,{value:"1",type:"number"}),Object(u.jsx)(v,{value:"2",type:"number"}),Object(u.jsx)(v,{value:"3",type:"number"}),Object(u.jsx)(v,{value:"0",type:"number"}),Object(u.jsx)(v,{value:".",type:"number"})]})}),m=(n(18),function(){return Object(u.jsxs)("div",{id:"operator_pad",children:[Object(u.jsx)(v,{value:":",type:"operator"}),Object(u.jsx)(v,{value:"x",type:"operator"}),Object(u.jsx)(v,{value:"+",type:"operator"}),Object(u.jsx)(v,{value:"-",type:"operator"}),Object(u.jsx)(v,{value:"=",type:"operator"})]})}),f=(n(19),function(){return Object(u.jsxs)("div",{id:"entry_pad",children:[Object(u.jsx)(y,{}),Object(u.jsx)(x,{}),Object(u.jsx)(m,{})]})}),h=(n(20),function(){return Object(u.jsxs)("div",{id:"calculator",children:[Object(u.jsx)(O,{}),Object(u.jsx)(f,{})]})});var g=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(b,{children:Object(u.jsx)(h,{})})})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(t){var n=t.getCLS,u=t.getFID,a=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),u(e),a(e),r(e),c(e)}))};o.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(g,{})}),document.getElementById("root")),C()}],[[21,1,2]]]);
//# sourceMappingURL=main.eef1b103.chunk.js.map