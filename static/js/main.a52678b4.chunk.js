(window.webpackJsonpreact_search_api=window.webpackJsonpreact_search_api||[]).push([[0],{106:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),o=a.n(c),l=(a(82),a(37)),i=a(22),u=a(60),s=a(61),m=a(69),p=(a(83),a(133)),f=a(135),g=a(137),b=a(138),h=a(139),d=a(140),E=a(64),O=a.n(E),v=Object(p.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}})),w=function(){var e=v();return r.a.createElement("div",{className:e.root},r.a.createElement(f.a,{position:"static"},r.a.createElement(g.a,null,r.a.createElement(b.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu"},r.a.createElement(O.a,null)),r.a.createElement(h.a,{variant:"h6",className:e.title},"Image Finder"),r.a.createElement(d.a,{color:"inherit"},"Help"))))},j=a(9),y=a(30),C=a(67),k=a.n(C),N=a(146),x=a(152),P=a(155),S=a(149),W=a(154),_=a(141),I=a(142),B=a(143),D=a(151),L=a(144),R=a(145),U=a(68),z=a.n(U),G=Object(p.a)((function(e){return{root:{margin:e.spacing(2),display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:e.palette.background.paper},icon:{color:"rgba(255, 255, 255, 0.8)",marginRight:e.spacing(1)}}})),H=function(){var e=window;return{width:e.innerWidth,height:e.innerHeight}},J=function(e){var t=e.images,a=G(),c=Object(n.useState)(H()),o=Object(y.a)(c,2),l=o[0],i=o[1],u=Object(n.useState)(!1),s=Object(y.a)(u,2),m=s[0],p=s[1],f=Object(n.useState)(""),g=Object(y.a)(f,2),h=g[0],E=g[1],O=function(){p(!1)};return Object(n.useEffect)((function(){var e=function(){return i(H())};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),r.a.createElement("div",{className:a.root},r.a.createElement(_.a,{cols:Math.round(l.width/380)},t.map((function(e){return r.a.createElement(I.a,{key:e.id},r.a.createElement("img",{src:e.largeImageURL,alt:""}),r.a.createElement(B.a,{title:e.tags,subtitle:r.a.createElement("span",null,"by ",r.a.createElement("strong",null,e.user)),actionIcon:r.a.createElement(b.a,{"aria-label":"info about ...",className:a.icon,onClick:function(){return t=e.largeImageURL,p(!0),void E(t);var t}},r.a.createElement(z.a,null))}))}))),r.a.createElement(D.a,{open:m,onClose:O,"aria-labelledby":"draggable-dialog-title"},r.a.createElement(L.a,null,r.a.createElement("img",{src:h,alt:"",style:{width:"100%"}})),r.a.createElement(R.a,null,r.a.createElement(d.a,{onClick:O,color:"primary"},"Close"))))};function K(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var q=Object(p.a)((function(e){return{root:{display:"flex",flexWrap:"wrap"},formControl:{margin:e.spacing(2),minWidth:120},input:{width:160}}})),F=function(){var e=q(),t=Object(n.useState)([]),a=Object(y.a)(t,2),c=a[0],o=a[1],l=Object(n.useState)({count:"",apiUrl:"https://pixabay.com/api",apiKey:"13716808-3af92fba834c7ee7bad061620"}),i=Object(y.a)(l,2),u=i[0],s=i[1],m=function(e){s(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?K(a,!0).forEach((function(t){Object(j.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):K(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},u,Object(j.a)({},e.target.name,e.target.value))),""===e.target.value?o([]):"search"===e.target.name&&k.a.get("".concat(u.apiUrl,"/?key=").concat(u.apiKey,"&q=").concat(e.target.value,"&image_type=photo&per_page=").concat(u.count,"&safesearch=true")).then((function(e){o(e.data.hits)})).catch((function(e){o([]),console.log(e)}))};return r.a.createElement("form",{className:e.root,autoComplete:"off"},r.a.createElement(N.a,{className:e.formControl},r.a.createElement(x.a,{className:e.input,label:"Search for images",name:"search",onChange:m})),r.a.createElement(N.a,{className:e.formControl},r.a.createElement(P.a,null,"Number of results"),r.a.createElement(S.a,{className:e.input,name:"count",value:u.count,onChange:m},r.a.createElement(W.a,{value:5},"5"),r.a.createElement(W.a,{value:10},"10"),r.a.createElement(W.a,{value:20},"20"),r.a.createElement(W.a,{value:50},"50"))),r.a.createElement("br",null),c.length>0?r.a.createElement(J,{images:c}):null)},M=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(w,null),r.a.createElement(F,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},77:function(e,t,a){e.exports=a(106)},82:function(e,t,a){},83:function(e,t,a){}},[[77,1,2]]]);
//# sourceMappingURL=main.a52678b4.chunk.js.map