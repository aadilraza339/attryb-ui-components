(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,t,a){e.exports=a(46)},38:function(e,t,a){},40:function(e,t,a){e.exports=a.p+"static/media/logo.06e73328.svg"},41:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),l=a(22),i=a.n(l),o=(a(38),a(40),a(41),a(3)),r=a(6),u=a(11),s=a(15),m=a.n(s);function d(e){var t=e.specifications,a=e.setSpecifications,l=Object(n.useState)(""),i=Object(o.a)(l,2),s=i[0],d=i[1];return c.a.createElement("div",{className:"center",style:{display:"flex",flexDirection:"column",gap:"24px"}},t.map(function(e,n){return c.a.createElement("div",{className:"box__input_list__item",key:e._id},c.a.createElement(u.e,{key:m()(),data:e,active:e._id===s,labelMaxChars:0,canEditLabel:!0,canRemove:!0,outsideClickCallback:function(e,t,a){console.log("outsideClick callback, activeState: ",s),console.log({outside:{data:e,isOutside:t,event:a},active:s}),d("")},onFocus:function(t){s!==e._id&&(console.log("onFocus"),d(e._id))},onMouseDown:function(t){s!==e._id&&(console.log("onMouseDown"),console.log({active:s}),d(e._id))},removeCallback:function(e,n,c){console.log("onRemove"),console.log({RemovedItemArg:e,active:s}),d(""),function(e){var n=Object(r.a)(t).filter(function(t){return!(t._id===e._id)});a(n)}(e)}}))}),c.a.createElement("div",{className:"add__specification"},c.a.createElement(u.a,{variant:"outline",onClick:function(){var e=m()(),n=[].concat(Object(r.a)(t),[{_id:e,label:"New Specification - "+e.substring(e.length-4),value:"",name:"New Specification",canRemove:!0,canEditLabel:!0,active:!1}]);console.log({new:n}),a(n)}},"Add Specification")))}var v=a(13);function p(){return c.a.createElement("div",{className:"list-component"},c.a.createElement("h1",null,"Select components"),c.a.createElement(v.c,{to:"/specifications"},"Product Specifications"),c.a.createElement(v.c,{to:"/editable-content"},"Editable Content"),c.a.createElement(v.c,{to:"/drop-down"},"Drop Down"))}function f(){var e=Object(n.useState)([{label:"Brand Name",value:"",name:"Enter specification value",_id:m()(),active:!1,canEditLabel:!1,canRemove:!1}]),t=Object(o.a)(e,2),a=t[0],l=t[1];return c.a.createElement("div",{className:""},c.a.createElement(p,null),c.a.createElement(d,{specifications:a,setSpecifications:l}))}var E=a(0),b=a(29),g=a.n(b);function S(e){var t=e.productTitleHtml,a=(e.setProductTitleHtml,Object(n.useState)(!1)),l=Object(o.a)(a,2),i=l[0],r=l[1];return c.a.createElement("div",{className:"center"},c.a.createElement(u.b,{editMode:i,showCharsCount:!0,maxCharsLimit:400,manualSave:!1,allowEmpty:!0,onClick:function(){console.log("on clicking..."),r(!0)},onBlur:function(e){r(!1)},responseCallback:function(e){console.log(e)}},c.a.createElement("div",{dangerouslySetInnerHTML:{__html:g.a.sanitize(t)}})))}function _(){var e=Object(n.useState)("Lorem ipsum dolor sit amet, consectetur adipiscing elit. In volutpat elit sit amet congue pretium. Nulla sit ametmetus ligula. Cras quis laoreet enim. Vestibulum aliquet sem a tortor blandit pharetra. Proin sed erat sit amet felis commodo sagittis. Phasellus feugiat volutpat mauris quis vestibulum. Proin sed erat sit amet felis commodo sagittis. Feugiat volutpat mauris quis vestibulum."),t=Object(o.a)(e,2),a=(t[0],t[1],Object(n.useState)()),l=Object(o.a)(a,2),i=l[0],r=l[1];return c.a.createElement("div",{className:""},c.a.createElement(p,null),c.a.createElement("div",{className:"",style:{marginTop:"3rem"}},"Write something"),c.a.createElement(S,{productTitleHtml:i,setProductTitleHtml:r}))}function k(e){var t=e.products,a=e.activeItem,n=e.SetActiveItem;return c.a.createElement("div",{className:"center"},c.a.createElement(u.c,{list:t,activeItem:a,searchProps:["value"],selectCallback:n},t.map(function(e){return c.a.createElement(u.d,{key:e._id,data:e},e.value)})))}function h(){var e=Object(n.useState)([{_id:"0AKGxNWVoFgYy5nnJu5ece4797eaf5e",value:"Fannie Morgan",data:{_id:"0AKGxNWVoFgYy5nnJu5ece4797eaf5e",value:"Fannie Morgan",email:"na@zed.az"}},{_id:"DKSmS636ccc0e4a2e9",value:"Derrick Banks",data:{_id:"DKSmS636ccc0e4a2e9",value:"Derrick Banks",email:"gaktertin@ho.br"}},{_id:"5SOVguIqGRY54uSece4797eauqe",value:"Leo Schultz",data:{_id:"5SOVguIqGRY54uSece4797eauqe",value:"Leo Schultz",email:"wetel@ra.az"}},{_id:"tn9598MB2BXNk2ERlTnJ636ccc0e4a2f1",value:"Blake Roy",data:{_id:"tn9598MB2BXNk2ERlTnJ636ccc0e4a2f1",value:"Blake Roy",email:"cem@birna.edu"}}]),t=Object(o.a)(e,2),a=t[0],l=(t[1],Object(n.useState)({})),i=Object(o.a)(l,2),r=i[0],u=i[1];return c.a.createElement("div",{className:""},c.a.createElement(p,null),c.a.createElement(k,{products:a,activeItem:r,SetActiveItem:u}))}var N=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(v.b,{basename:"/"},c.a.createElement(E.c,null,c.a.createElement(E.a,{path:"/editable-content",element:c.a.createElement(_,null)}),c.a.createElement(E.a,{path:"/specifications",element:c.a.createElement(f,null)}),c.a.createElement(E.a,{path:"/drop-down",element:c.a.createElement(h,null)}),c.a.createElement(E.a,{path:"/",element:c.a.createElement(p,null)}))))},O=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,47)).then(function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,l=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),l(e),i(e)})};i.a.createRoot(document.getElementById("root")).render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(v.a,null,c.a.createElement(N,null)))),O()}},[[30,3,2]]]);
//# sourceMappingURL=main.26b1a181.chunk.js.map