(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,function(e,t,n){e.exports={form:"Checkout_form__3ZJ-o",control:"Checkout_control__1oqRs",actions:"Checkout_actions__28u-O",submit:"Checkout_submit__3z3WM",invalid:"Checkout_invalid__3NbMl"}},function(e,t,n){e.exports={"cart-items":"Cart_cart-items__1tWHl",total:"Cart_total__3eNPE",actions:"Cart_actions__3rH0p","button--alt":"Cart_button--alt__Wq9ht",button:"Cart_button__2ZoKz",postError:"Cart_postError__3N4El"}},,,function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__1CwaY",summary:"CartItem_summary__3IwyR",price:"CartItem_price__3mG2M",amount:"CartItem_amount__1FgNs",actions:"CartItem_actions__20eOa"}},,,function(e,t,n){e.exports={button:"HeaderCartButton_button__lTdSa",icon:"HeaderCartButton_icon__13MAb",badge:"HeaderCartButton_badge__30RAx",bump:"HeaderCartButton_bump__3JjiL"}},,,function(e,t,n){e.exports={meal:"MealItem_meal__1_WTO",description:"MealItem_description__2U3QR",price:"MealItem_price__wWvI9"}},function(e,t,n){e.exports={meals:"AvailableMeals_meals__AXQO6","meals-appear":"AvailableMeals_meals-appear__1LeAa",mealsLoading:"AvailableMeals_mealsLoading__1VG9E",mealsError:"AvailableMeals_mealsError__2_6TZ"}},function(e,t,n){e.exports={backdrop:"Modal_backdrop__3I_5R",modal:"Modal_modal__1K0_i","slide-down":"Modal_slide-down__215xo"}},,function(e,t,n){e.exports={header:"Header_header__2eEJO","main-image":"Header_main-image__KU2bQ"}},,function(e,t,n){e.exports={summary:"MealsSummary_summary__3kU1j"}},function(e,t,n){e.exports={card:"Card_card__1cyT7"}},function(e,t,n){e.exports={input:"Input_input__1MD_c"}},function(e,t,n){e.exports={form:"MealItemForm_form__niUJ1"}},,,,,function(e,t,n){},,,function(e,t,n){"use strict";n.r(t);var c=n(8),a=n.n(c),r=(n(27),n(2)),s=n(1),i=n.n(s),o=n(0),l=function(){return Object(o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(o.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},u=i.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){},clearCart:function(){}}),d=n(10),j=n.n(d),m=function(e){var t=Object(s.useState)(!1),n=Object(r.a)(t,2),c=n[0],a=n[1],i=Object(s.useContext)(u).items,d=i.reduce((function(e,t){return e+t.amount}),0),m="".concat(j.a.button," ").concat(c?j.a.bump:"");return Object(s.useEffect)((function(){if(0!==i.length){a(!0);var e=setTimeout((function(){a(!1)}),300);return function(){clearTimeout(e)}}}),[i]),Object(o.jsxs)("button",{className:m,onClick:e.onClick,children:[Object(o.jsx)("span",{className:j.a.icon,children:Object(o.jsx)(l,{})}),Object(o.jsx)("span",{children:"Your Cart"}),Object(o.jsx)("span",{className:j.a.badge,children:d})]})},b=n.p+"static/media/meals.2971f633.jpg",O=n(17),x=n.n(O),h=function(e){return Object(o.jsxs)(s.Fragment,{children:[Object(o.jsxs)("header",{className:x.a.header,children:[Object(o.jsx)("h1",{children:"Indian Spice Bar"}),Object(o.jsx)(m,{onClick:e.onShowCart})]}),Object(o.jsx)("div",{className:x.a["main-image"],children:Object(o.jsx)("img",{src:b,alt:"A table full of delicious food!"})})]})},p=n(19),f=n.n(p),_=function(){return Object(o.jsxs)("section",{className:f.a.summary,children:[Object(o.jsx)("h2",{children:"Delicious Food, Delivered To You"}),Object(o.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(o.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},v=n(6),C=n.n(v),N=n(12),g=n(20),y=n.n(g),A=function(e){return Object(o.jsx)("div",{className:y.a.card,children:e.children})},k=n(5),w=n(21),S=n.n(w),I=i.a.forwardRef((function(e,t){return Object(o.jsxs)("div",{className:S.a.input,children:[Object(o.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(o.jsx)("input",Object(k.a)({ref:t},e.input))]})})),M=n(22),E=n.n(M),F=function(e){var t=Object(s.useState)(!0),n=Object(r.a)(t,2),c=n[0],a=n[1],i=Object(s.useRef)();return Object(o.jsxs)("form",{className:E.a.form,onSubmit:function(t){t.preventDefault();var n=i.current.value,c=+n;0===n.trim().length||c<1||c>5?a(!1):e.onAddToCart(c)},children:[Object(o.jsx)(I,{ref:i,label:"Amount",input:{id:"amount",type:"number",min:"1",max:"5",step:"1",defaultValue:"1"}}),Object(o.jsx)("button",{children:"+ Add"}),!c&&Object(o.jsx)("p",{children:"Please enter a valid amount (1-5)."})]})},R=n(13),H=n.n(R),P=function(e){var t=Object(s.useContext)(u),n="$".concat(e.price.toFixed(2));return Object(o.jsxs)("li",{className:H.a.meal,children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h3",{children:e.name}),Object(o.jsx)("div",{className:H.a.description,children:e.description}),Object(o.jsx)("div",{className:H.a.price,children:n})]}),Object(o.jsx)("div",{children:Object(o.jsx)(F,{onAddToCart:function(n){t.addItem({id:e.id,name:e.name,amount:n,price:e.price})}})})]})},T=n(14),D=n.n(T),B=function(){var e=Object(s.useState)([]),t=Object(r.a)(e,2),n=t[0],c=t[1],a=Object(s.useState)(!1),i=Object(r.a)(a,2),l=i[0],u=i[1],d=Object(s.useState)(),j=Object(r.a)(d,2),m=j[0],b=j[1];if(Object(s.useEffect)((function(){function e(){return(e=Object(N.a)(C.a.mark((function e(){var t,n,a,r;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),e.next=3,fetch("https://food-application-f69ab-default-rtdb.firebaseio.com/meals.json");case 3:if((t=e.sent).ok){e.next=6;break}throw new Error("Something Went Wrong!!!");case 6:return e.next=8,t.json();case 8:for(r in n=e.sent,a=[],n)a.push({id:r,name:n[r].name,description:n[r].description,price:n[r].price});c(a),u(!1);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(function(){return e.apply(this,arguments)})().catch((function(e){u(!1),b(e.message),console.dir(e)}))}),[]),l)return Object(o.jsx)("section",{className:D.a.mealsLoading,children:Object(o.jsx)("p",{children:"Loading...."})});if(m)return Object(o.jsx)("section",{className:D.a.mealsError,children:Object(o.jsx)("p",{children:m})});var O=n.map((function(e){return Object(o.jsx)(P,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)}));return Object(o.jsx)("section",{className:D.a.meals,children:Object(o.jsx)(A,{children:Object(o.jsx)("ul",{children:O})})})},J=function(){return Object(o.jsxs)(s.Fragment,{children:[Object(o.jsx)(_,{}),Object(o.jsx)(B,{})]})},L=n(3),W=n.n(L),z=function(e){return""===e.trim()},U=function(e){var t=Object(s.useState)({name:!0,street:!0,postalCode:!0,city:!0}),n=Object(r.a)(t,2),c=n[0],a=n[1],i=Object(s.useRef)(),l=Object(s.useRef)(),u=Object(s.useRef)(),d=Object(s.useRef)(),j="".concat(W.a.control," ").concat(c.name?"":W.a.invalid),m="".concat(W.a.control," ").concat(c.street?"":W.a.invalid),b="".concat(W.a.control," ").concat(c.postalCode?"":W.a.invalid),O="".concat(W.a.control," ").concat(c.city?"":W.a.invalid);return Object(o.jsxs)("form",{className:W.a.form,onSubmit:function(t){t.preventDefault();var n=i.current.value,c=l.current.value,r=u.current.value,s=d.current.value,o=!z(n),j=!z(c),m=!(5!==r.trim().length),b=!z(s);a({name:o,street:j,postalCode:m,city:b}),o&&j&&m&&b&&(e.onConfirm({name:n,street:c,postalCode:r,city:s}),console.log("Name:".concat(n," - Street:").concat(c," - PostalCode:").concat(r," - City:").concat(s)))},children:[Object(o.jsxs)("div",{className:j,children:[Object(o.jsx)("label",{htmlFor:"name",children:"Your Name"}),Object(o.jsx)("input",{type:"text",id:"name",ref:i}),!c.name&&Object(o.jsx)("p",{children:"Please enter a valid name!"})]}),Object(o.jsxs)("div",{className:m,children:[Object(o.jsx)("label",{htmlFor:"street",children:"Street"}),Object(o.jsx)("input",{type:"text",id:"street",ref:l}),!c.street&&Object(o.jsx)("p",{children:"Please enter a valid street!"})]}),Object(o.jsxs)("div",{className:b,children:[Object(o.jsx)("label",{htmlFor:"postal",children:"Postal Code"}),Object(o.jsx)("input",{type:"text",id:"postal",ref:u}),!c.postalCode&&Object(o.jsx)("p",{children:"Please enter a valid postal code!"})]}),Object(o.jsxs)("div",{className:O,children:[Object(o.jsx)("label",{htmlFor:"city",children:"City"}),Object(o.jsx)("input",{type:"text",id:"city",ref:d}),!c.city&&Object(o.jsx)("p",{children:"Please enter a valid city!"})]}),Object(o.jsxs)("div",{className:W.a.actions,children:[Object(o.jsx)("button",{type:"button",onClick:e.onCancel,children:"Cancel"}),Object(o.jsx)("button",{className:W.a.submit,children:"Confirm"})]})]})},V=n(15),Y=n.n(V),q=function(e){return Object(o.jsx)("div",{className:Y.a.backdrop,onClick:e.onClose})},K=function(e){return Object(o.jsx)("div",{className:Y.a.modal,children:Object(o.jsx)("div",{className:Y.a.content,children:e.children})})},Q=document.getElementById("overlays"),Z=function(e){return Object(o.jsxs)(s.Fragment,{children:[a.a.createPortal(Object(o.jsx)(q,{onClose:e.onClose}),Q),a.a.createPortal(Object(o.jsx)(K,{children:e.children}),Q)]})},$=n(7),G=n.n($),X=function(e){var t="$".concat(e.price.toFixed(2));return Object(o.jsxs)("li",{className:G.a["cart-item"],children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:e.name}),Object(o.jsxs)("div",{className:G.a.summary,children:[Object(o.jsx)("span",{className:G.a.price,children:t}),Object(o.jsxs)("span",{className:G.a.amount,children:["x ",e.amount]})]})]}),Object(o.jsxs)("div",{className:G.a.actions,children:[Object(o.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(o.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},ee=n(4),te=n.n(ee),ne=function(e){var t=Object(s.useState)(!1),n=Object(r.a)(t,2),c=n[0],a=n[1],l=Object(s.useState)(!1),d=Object(r.a)(l,2),j=d[0],m=d[1],b=Object(s.useState)(!1),O=Object(r.a)(b,2),x=O[0],h=O[1],p=Object(s.useState)(),f=Object(r.a)(p,2),_=f[0],v=f[1],g=Object(s.useContext)(u),y="$".concat(g.totalAmount.toFixed(2)),A=g.items.length>0,k=function(e){g.removeItem(e)},w=function(e){g.addItem(e)},S=function(){var e=Object(N.a)(C.a.mark((function e(t){var n,c;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(!0),e.prev=1,e.next=4,fetch("https://food-application-f69ab-default-rtdb.firebaseio.com/orders.json",{method:"POST",body:JSON.stringify({user:t,orderedItems:g.items})});case 4:if((n=e.sent).ok){e.next=7;break}throw new Error("Something went wrong!");case 7:return e.next=9,n.json();case 9:c=e.sent,console.log(c),m(!1),h(!0),g.clearCart(),e.next=22;break;case 16:e.prev=16,e.t0=e.catch(1),m(!1),h(!1),v(e.t0.message),console.dir(e.t0);case 22:case"end":return e.stop()}}),e,null,[[1,16]])})));return function(t){return e.apply(this,arguments)}}(),I=Object(o.jsx)("ul",{className:te.a["cart-items"],children:g.items.map((function(e){return Object(o.jsx)(X,{name:e.name,amount:e.amount,price:e.price,onRemove:k.bind(null,e.id),onAdd:w.bind(null,e)},e.id)}))}),M=Object(o.jsxs)("div",{className:te.a.actions,children:[Object(o.jsx)("button",{className:te.a["button--alt"],onClick:e.onClose,children:"Close"}),A&&Object(o.jsx)("button",{className:te.a.button,onClick:function(){a(!0)},children:"Order"})]}),E=Object(o.jsxs)(i.a.Fragment,{children:[I,Object(o.jsxs)("div",{className:te.a.total,children:[Object(o.jsx)("span",{children:"Total Amount"}),Object(o.jsx)("span",{children:y})]}),c&&Object(o.jsx)(U,{onConfirm:S,onCancel:e.onClose}),!c&&M]}),F=Object(o.jsx)("p",{children:"Sending Order Data..."}),R=Object(o.jsxs)(i.a.Fragment,{children:[Object(o.jsx)("p",{children:"Something went wrong - ".concat(_)}),Object(o.jsx)("div",{className:te.a.actions,children:Object(o.jsx)("button",{className:te.a.button,onClick:e.onClose,children:"Close"})})]}),H=Object(o.jsxs)(i.a.Fragment,{children:[Object(o.jsx)("p",{children:"Successfully sent the order!"}),Object(o.jsx)("div",{className:te.a.actions,children:Object(o.jsx)("button",{className:te.a.button,onClick:e.onClose,children:"Close"})})]});return Object(o.jsxs)(Z,{onClose:e.onClose,children:[!j&&!x&&_&&R,!j&&!x&&!_&&E,j&&F,!j&&x&&H]})},ce=n(18),ae={items:[],totalAmount:0},re=function(e,t){if("ADD"===t.type){var n,c=e.totalAmount+t.item.price*t.item.amount,a=e.items.findIndex((function(e){return e.id===t.item.id})),r=e.items[a];if(r){var s=Object(k.a)(Object(k.a)({},r),{},{amount:r.amount+t.item.amount});(n=Object(ce.a)(e.items))[a]=s}else n=e.items.concat(t.item);return{items:n,totalAmount:c}}if("REMOVE"===t.type){var i,o=e.items.findIndex((function(e){return e.id===t.id})),l=e.items[o],u=e.totalAmount-l.price;if(1===l.amount)i=e.items.filter((function(e){return e.id!==t.id}));else{var d=Object(k.a)(Object(k.a)({},l),{},{amount:l.amount-1});(i=Object(ce.a)(e.items))[o]=d}return{items:i,totalAmount:u}}return t.type,ae},se=function(e){var t=Object(s.useReducer)(re,ae),n=Object(r.a)(t,2),c=n[0],a=n[1],i={items:c.items,totalAmount:c.totalAmount,addItem:function(e){a({type:"ADD",item:e})},removeItem:function(e){a({type:"REMOVE",id:e})},clearCart:function(){a({type:"CLEAR"})}};return Object(o.jsx)(u.Provider,{value:i,children:e.children})};var ie=function(){var e=Object(s.useState)(!1),t=Object(r.a)(e,2),n=t[0],c=t[1];return Object(o.jsxs)(se,{children:[n&&Object(o.jsx)(ne,{onClose:function(){c(!1)}}),Object(o.jsx)(h,{onShowCart:function(){c(!0)}}),Object(o.jsx)("main",{children:Object(o.jsx)(J,{})})]})};a.a.render(Object(o.jsx)(ie,{}),document.getElementById("root"))}],[[30,1,2]]]);
//# sourceMappingURL=main.bbcf8bee.chunk.js.map