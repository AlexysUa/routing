(this.webpackJsonprouting=this.webpackJsonprouting||[]).push([[0],{17:function(t,e,n){},25:function(t,e,n){},33:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n.n(c),a=n(19),s=n.n(a),i=(n(25),n(17),n(7)),o=n(1);var j=function(){var t={color:"white",textDecoration:"none"};return Object(o.jsxs)("nav",{className:"mainNav",children:[Object(o.jsx)(i.b,{style:t,to:"/",children:Object(o.jsx)("h3",{children:"Logo"})}),Object(o.jsxs)("ul",{className:"mainNav__list",children:[Object(o.jsx)(i.b,{to:"/about",style:t,children:Object(o.jsx)("li",{children:"About"})}),Object(o.jsx)(i.b,{to:"/shop",style:t,children:Object(o.jsx)("li",{children:"Shop"})})]})]})};var h=function(){return Object(o.jsx)("div",{children:Object(o.jsx)("h1",{children:"About page"})})},u=n(9),b=n.n(u),d=n(11),p=n(12);var l=function(){Object(c.useEffect)((function(){a()}),[]);var t=Object(c.useState)([]),e=Object(p.a)(t,2),n=e[0],r=e[1],a=function(){var t=Object(d.a)(b.a.mark((function t(){var e,n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://fortnite-api.theapinetwork.com/upcoming/get");case 2:return e=t.sent,t.next=5,e.json();case 5:n=t.sent,r(n.data),console.log(n.data);case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:"Shop page"}),n.map((function(t){return Object(o.jsx)("h1",{children:Object(o.jsx)(i.b,{to:"/shop/".concat(t.itemId),children:t.item.name})},Math.random())}))]})};var x=function(t){var e=t.match,n=Object(c.useState)([]),r=Object(p.a)(n,2),a=r[0],s=r[1];Object(c.useEffect)((function(){i()}),[]);var i=function(){var t=Object(d.a)(b.a.mark((function t(){var n,c;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://fortnite-api.theapinetwork.com/item/get?id=".concat(e.params.id));case 2:return n=t.sent,t.next=5,n.json();case 5:c=t.sent,s(c.data.item);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(o.jsxs)("div",{children:[Object(o.jsxs)("h1",{children:["Name: ",a.name]}),Object(o.jsxs)("h2",{children:["Description: ",a.description]})]})},O=n(2);var f=function(){return Object(o.jsx)("div",{children:Object(o.jsx)("h1",{children:"Home Page"})})},m=function(){return Object(o.jsx)(i.a,{children:Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(j,{}),Object(o.jsxs)(O.c,{children:[Object(o.jsx)(O.a,{path:"/",exact:!0,component:f}),Object(o.jsx)(O.a,{path:"/about",component:h}),Object(o.jsx)(O.a,{path:"/shop",exact:!0,component:l}),Object(o.jsx)(O.a,{path:"/shop/:id",component:x})]})]})})},v=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,34)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,a=e.getLCP,s=e.getTTFB;n(t),c(t),r(t),a(t),s(t)}))};s.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(m,{})}),document.getElementById("root")),v()}},[[33,1,2]]]);
//# sourceMappingURL=main.78e5d77d.chunk.js.map