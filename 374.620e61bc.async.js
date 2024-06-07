(self.webpackChunkHDesign=self.webpackChunkHDesign||[]).push([[374],{90374:function(d,M,h){"use strict";h.d(M,{yF:function(){return B},Tr:function(){return ce},l$:function(){return ge},YE:function(){return xe},Ch:function(){return Ae},$P:function(){return Oe},aB:function(){return je},aF:function(){return we}});var j=h(82092),L=h.n(j),b=h(26068),p=h.n(b),C=h(48305),H=h.n(C),X=h(82187),N=h.n(X),o=h(50959),T=h(11527),D=(0,o.forwardRef)(function(t,r){var e=t.ratio,l=e===void 0?1:e,u=t.children,s=t.className,c=s===void 0?"":s,f=t.boxStyle,n=t.boxClassName,a=n===void 0?"":n,i=t.style,x=(0,o.useRef)(null),S=(0,o.useRef)(null),k=(0,o.useState)("width"),R=H()(k,2),E=R[0],w=R[1];return(0,o.useEffect)(function(){if(x.current){var O=function(m){m.forEach(function(v){var g,I,A=v.contentRect,W=A.width,P=A.height,y=(g=(I=v.target.firstChild).getBoundingClientRect)===null||g===void 0?void 0:g.call(I),$=y.width,V=y.height;w(function(){return l===1?W>P?"height":"width":W/P>$/V?"height":"width"})})},z=new ResizeObserver(O);return z.observe(x.current),function(){return z.disconnect()}}},[l]),(0,o.useImperativeHandle)(r,function(){return{containerRef:x,boxRef:S}}),(0,T.jsx)("div",{className:N()("auto-ratio-container",c),style:i,ref:x,children:(0,T.jsx)("div",{className:N()("auto-ratio-box",a),style:p()(p()({},f!=null?f:{}),{},L()({aspectRatio:"".concat(l)},E,"100%")),children:u})})}),B=D,q=h(67825),G=h.n(q);function ee(t){var r=t.value,e=t.onChange,l=(0,o.useState)(r!=null?r:""),u=H()(l,2),s=u[0],c=u[1],f=(0,o.useCallback)(function(n){if(e)return e(n);c(n.target.value)},[e]);return(0,o.useEffect)(function(){return c(r)},[r]),{currentValue:s,handlerChange:f}}var re=ee,te=h(15558),K=h.n(te);function ne(t){var r=t.value,e=t.textareaRef,l=t.elementList,u=(0,o.useCallback)(function(c){c.target===c.currentTarget&&e.current&&(e.current.focus(),e.current.setSelectionRange(r.length,r.length))},[r]),s=(0,o.useCallback)(function(c){var f=window.getSelection(),n=K()(c.currentTarget.children),a=n.findIndex(function(R){return R===c.target}),i=l.filter(function(R,E){return E<(a>-1?a:l.length-1)}).reduce(function(R,E){return R+E.msg.length},0);if(f&&f.rangeCount>0&&e.current){var x=f.getRangeAt(0),S=x.startOffset+i,k=x.endOffset+i;e.current.focus(),e.current.setSelectionRange(S,k)}},[l]);return{handlerContainerClick:u,handlerBoxClick:s}}var ae=ne,oe=[];function ue(t){var r=t.value,e=r===void 0?"":r,l=t.highlight,u=l===void 0?oe:l,s=t.formatHighlight,c=(0,o.useMemo)(function(){var n=[];return K()(e).reduce(function(a,i){a.str=a.str+i,n[a.idx]={type:a.type,msg:a.str};var x=u.some(function(S){return a.str.includes(S)?(a.type=S,!0):!1});return x&&(n[a.idx].msg=a.str.split(a.type)[0],n.push({type:a.type,msg:a.type}),a.idx=a.idx+2,a.str="",a.type="default"),a},{str:"",idx:0,type:"default"}),n},[e,u]),f=c.map(function(n,a){var i=null;switch(!0){case(c.length-1===a&&n.msg.includes(`
`)):{i=(0,T.jsxs)("span",{children:[n.msg,(0,T.jsx)("br",{})]});break}case n.type==="default":{i=(0,T.jsx)("span",{children:n.msg});break}case!!s:{i=s(n.msg);break}default:i=(0,T.jsx)("span",{style:{color:"blue"},children:n.msg})}return(0,T.jsx)(o.Fragment,{children:i},n.msg+a)});return{element:f,elementList:c}}var ie=ue,se=["className","style","value","onChange","highlight","formatHighlight"],le=(0,o.forwardRef)(function(t,r){var e=t.className,l=t.style,u=t.value,s=u===void 0?"":u,c=t.onChange,f=t.highlight,n=t.formatHighlight,a=G()(t,se),i=(0,o.useRef)(null),x=(0,o.useRef)(null),S=(0,o.useRef)(null);(0,o.useImperativeHandle)(r,function(){return{textareaRef:i,textRef:S,containerRef:x}},[]);var k=re({value:s,onChange:c}),R=k.currentValue,E=k.handlerChange,w=ie({value:R,highlight:f,formatHighlight:n}),O=w.element,z=w.elementList,Y=ae({value:R,textareaRef:i,elementList:z}),m=Y.handlerContainerClick,v=Y.handlerBoxClick;return(0,T.jsx)("div",{className:N()("highlight-textarea-container",e),style:l,onClick:m,ref:x,children:(0,T.jsxs)("div",{className:"highlight-textarea",children:[(0,T.jsx)("textarea",p()(p()({},a),{},{className:"highlight-textarea-textarea",onChange:E,value:R,ref:i})),(0,T.jsx)("div",{className:"highlight-textarea-box",onClick:v,contentEditable:"plaintext-only",suppressContentEditableWarning:!0,ref:S,children:O})]})})}),ce=le;function fe(t){var r=t.children,e=t.containerRef,l=(0,o.useState)({hasX:!1,hasY:!1}),u=H()(l,2),s=u[0],c=u[1],f=(0,o.useCallback)(function(){if(e.current){var n=e.current,a=n.scrollHeight,i=n.clientHeight,x=n.scrollWidth,S=n.clientWidth,k=x>S,R=a>i;c({hasX:k,hasY:R})}},[]);return(0,o.useEffect)(function(){if(e.current){f();var n=new ResizeObserver(function(a){return a.forEach(function(){return f()})});return n.observe(e.current),function(){return n.disconnect()}}},[r]),{hasScroll:s}}var he=fe;function ve(t){var r=t.children,e=t.containerRef,l=t.scrollThumbYRef,u=t.scrollThumbXRef,s=t.gap,c=t.size,f=(0,o.useRef)(!1),n=(0,o.useRef)({X:0,Y:0}),a=(0,o.useRef)(0),i=(0,o.useRef)(0),x=(0,o.useRef)(null),S=(0,o.useMemo)(function(){return s+c},[s,c]),k=(0,o.useRef)(4),R=(0,o.useCallback)(function(){if(!(!e.current||!l.current||!u.current)){var m=e.current,v=m.scrollTop,g=m.scrollLeft,I=m.clientHeight,A=m.clientWidth,W=m.scrollHeight,P=m.scrollWidth,y=W-I,$=P-A,V=v/y*a.current,F=g/$*i.current;l.current.style.top="".concat(Math.min(Math.max(V,k.current),a.current),"px"),u.current.style.left="".concat(Math.min(Math.max(F,k.current),i.current),"px")}},[]);(0,o.useEffect)(function(){if(!(!e.current||!l.current||!u.current)){var m=e.current,v=m.offsetHeight,g=m.offsetWidth,I=m.scrollHeight,A=m.scrollWidth,W=v*(v/I),P=g*(g/A);a.current=v-W-S,i.current=g-P-S,u.current.style.width="".concat(P,"px"),l.current.style.height="".concat(W,"px"),R()}},[r,S]);var E=function(v){if(f.current&&e.current){var g=e.current,I=g.clientHeight,A=g.clientWidth,W=g.scrollHeight,P=g.scrollWidth,y=W-I,$=P-A;if(v.preventDefault(),x.current==="Y"){var V=v.pageY-n.current.Y,F=V/a.current*y;console.log(F),e.current.scrollTop=F}else if(x.current==="X"){var Ie=v.pageX-n.current.X,We=Ie/i.current*$;e.current.scrollLeft=We}}},w=function m(){var v,g;f.current=!1,x.current=null,(v=l.current)===null||v===void 0||v.classList.remove("active"),(g=u.current)===null||g===void 0||g.classList.remove("active"),document.removeEventListener("mousemove",E),document.removeEventListener("mouseup",m)},O=function(v){!l.current||!u.current||(v.preventDefault(),f.current=!0,n.current={X:v.pageX-u.current.offsetLeft,Y:v.pageY-l.current.offsetTop},document.addEventListener("mousemove",E),document.addEventListener("mouseup",w))},z=(0,o.useCallback)(function(m){var v;x.current="Y",(v=l.current)===null||v===void 0||v.classList.add("active"),O(m)},[O]),Y=(0,o.useCallback)(function(m){var v;x.current="X",(v=u.current)===null||v===void 0||v.classList.add("active"),O(m)},[O]);return{scrollThumbX:u,scrollThumbY:l,onThumbX:Y,onThumbY:z,handlerScroll:R}}var de=ve,Z={gap:4,size:4,background:"#000",border:"none",radius:999,opacity:1},me=(0,o.forwardRef)(function(t,r){var e=t.className,l=t.style,u=t.containerStyle,s=t.containerClassName,c=t.thumbOptions,f=c===void 0?Z:c,n=t.hoverThumbOptions,a=t.children,i=p()(p()({},Z),f),x=(0,o.useMemo)(function(){var g=function(A){return typeof A=="number"?"".concat(A,"px"):A};return p()({"--scroll-thumb-gap":g(i.gap),"--scroll-thumb-size":g(i.size),"--scroll-thumb-border-radius":g(i.radius),"--scroll-thumb-background":i.background,"--scroll-thumb-border":i.border,"--scroll-thumb-opacity":i.opacity,"--scroll-thumb-hover-gap":g(n==null?void 0:n.gap),"--scroll-thumb-hover-size":g(n==null?void 0:n.size),"--scroll-thumb-hover-border-radius":g(n==null?void 0:n.radius),"--scroll-thumb-hover-background":n==null?void 0:n.background,"--scroll-thumb-hover-border":n==null?void 0:n.border,"--scroll-thumb-hover-opacity":n==null?void 0:n.opacity},l)},[f,l,n,i]),S=(0,o.useRef)(null),k=he({children:a,containerRef:S}),R=k.hasScroll,E=(0,o.useRef)(null),w=(0,o.useRef)(null),O=de({children:a,containerRef:S,scrollThumbXRef:E,scrollThumbYRef:w,gap:i.gap,size:i.size}),z=O.onThumbX,Y=O.onThumbY,m=O.handlerScroll,v=(0,o.useRef)(null);return(0,o.useImperativeHandle)(r,function(){return{mainRef:v,containerRef:S,scrollThumbXRef:E,scrollThumbYRef:w}},[]),(0,T.jsxs)("div",{className:N()("scroll-container",e),style:x,ref:v,children:[(0,T.jsx)("div",{className:N()("scroll-container-content",s),style:u,onScroll:m,ref:S,children:a}),(0,T.jsx)("div",{className:N()("scroll-thumb scroll-thumb-y",{show:R.hasY}),onMouseDown:Y,ref:w}),(0,T.jsx)("div",{className:N()("scroll-thumb scroll-thumb-x",{show:R.hasX}),onMouseDown:z,ref:E})]})}),ge=me;function be(t){return t==null}var Q=be,pe=h(10422),ye=function(r){var e=r.className,l=e===void 0?"":e,u=r.style,s=r.target,c=r.direction,f=c===void 0?"vertical":c,n=r.itemOptions,a=r.placement,i=a===void 0?"right":a,x=r.alignment,S=x===void 0?"end":x,k=r.offset,R=r.zIndex,E=r.children,w=(0,o.useState)(document.body),O=H()(w,2),z=O[0],Y=O[1];(0,o.useEffect)(function(){if(!Q(s)){if(s!=null&&s.current)return Y(s==null?void 0:s.current);Y(s)}},[s]);var m=(0,o.useMemo)(function(){return L()({},Q(R)?"":"--sidebar-zIndex",R)},[R]),v=(0,o.useMemo)(function(){var y={};switch(i){case"right":y.alignItems="end";case"left":{switch(y.height="100%",y.width="0px",y.flexDirection="column",S){case"start":y.justifyContent="start";break;case"center":y.justifyContent="center";break;case"end":y.justifyContent="end";break}break}case"bottom":y.alignItems="end";case"top":switch(y.width="100%",y.height="0px",S){case"start":y.justifyContent="start";break;case"center":y.justifyContent="center";break;case"end":y.justifyContent="end";break}}return y[i]=0,y},[i,S]),g=(0,o.useMemo)(function(){return p()(p()(p()({},m),v),u)},[m,v,u]),I=n!=null?n:{},A=I.gap,W=(0,o.useMemo)(function(){return L()({},Q(A)?"":"--sidebar-item-gap","".concat(A,"px"))},[A]),P=(0,o.useMemo)(function(){if(!k)return{};var y=k.top,$=k.left,V=k.bottom,F=k.right;return{transform:"translate(".concat($!=null?$:F?-F:0,"px, ").concat(y!=null?y:V?-V:0,"px)")}},[k]);return(0,pe.createPortal)((0,T.jsx)("div",{className:N()("sidebar",l),style:g,children:(0,T.jsx)("div",{className:"sidebar-".concat(f),style:p()(p()({},W),P),children:E})}),z)},xe=ye;function Se(t){for(var r=t.parentElement;r;){if(r.scrollHeight>r.clientHeight||r.scrollWidth>r.clientWidth)return r;r=r.parentElement}return document}function Re(t){var r=t.imgRef,e=t.src;(0,o.useEffect)(function(){if(!(!r.current||e===void 0)){var l=function(f){f.forEach(function(n){if(n.isIntersecting){var a;(a=r.current)===null||a===void 0||a.setAttribute("src",e)}})},u=Se(r.current),s=new IntersectionObserver(l,{root:u,threshold:[0]});return s.observe(r.current),function(){return s.disconnect()}}},[e])}var Ce=Re;function Te(t){var r=t.imgRef,e=t.src,l=(0,o.useState)(!0),u=H()(l,2),s=u[0],c=u[1],f=function(){return c(!1)},n=function(){c(!1)};return(0,o.useEffect)(function(){if(r.current)return c(!0),r.current.getAttribute("src")&&r.current.complete&&c(!1),r.current.addEventListener("load",f),r.current.addEventListener("error",n),function(){var a,i;(a=r.current)===null||a===void 0||a.removeEventListener("load",f),(i=r.current)===null||i===void 0||i.removeEventListener("error",n)}},[e]),{loading:s}}var He=Te,ke=["className","src","style"],Ee=function(r){var e=r.className,l=r.src,u=r.style,s=G()(r,ke),c=(0,o.useRef)(null);Ce({src:l,imgRef:c});var f=He({src:l,imgRef:c}),n=f.loading,a=(0,o.useMemo)(function(){return p()({objectFit:"cover",imageRendering:"pixelated",opacity:n?0:1,pointerEvents:n?"none":void 0,userSelect:n?"none":void 0},u)},[u,n]);return(0,T.jsx)("img",p()({className:N()("simple-img",e),style:a,draggable:!1,loading:"lazy",ref:c},s))},Ae=Ee;function Ne(t,r){var e=(0,o.useRef)(),l=(0,o.useState)(t),u=H()(l,2),s=u[0],c=u[1],f=(0,o.useCallback)(function(a){clearTimeout(e.current),e.current=setTimeout(function(){return c(function(i){return typeof a=="function"?a(i):t})},r)},[r,t]),n=(0,o.useCallback)(function(a){e.current&&clearTimeout(e.current),c(function(i){return typeof a=="function"?a(i):t})},[t]);return[s,f,n]}var Oe=Ne;function Le(t,r){var e=(0,o.useRef)(),l=(0,o.useState)(t),u=H()(l,2),s=u[0],c=u[1],f=(0,o.useCallback)(function(a){e.current||(e.current=setTimeout(function(){clearTimeout(e.current),e.current=void 0,c(function(i){return typeof a=="function"?a(i):a})},r))},[r,t]),n=(0,o.useCallback)(function(a){e.current&&(clearTimeout(e.current),e.current=void 0),c(function(i){return typeof a=="function"?a(i):a})},[t]);return[s,f,n]}var we=Le,J=new WeakMap,U;function Me(t,r){var e;return(0,o.useEffect)(function(){if(e=r.current?r.current:r,!!e)return U||(U=new ResizeObserver(function(l){l.forEach(function(u){var s;(s=J.get(u.target))===null||s===void 0||s(u,U)})})),J.set(e,t),U.observe(e),function(){e&&(J.delete(e),U.unobserve(e))}},[]),function(){e&&(J.delete(e),U.unobserve(e))}}var je=Me,Pe=h(31759);function ze(t){if(!t.match(/^\[.*\]$/))return!1;try{var r=JSON.parse(t);return Array.isArray(r)?r.every(function(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"||e===null||Array.isArray(e)||_typeof(e)==="object"&&e!==null&&!Array.isArray(e)}):!1}catch(e){return!1}}function Ye(t){if(!t.match(/^\{.*\}$/))return!1;try{var r=JSON.parse(t);return _typeof(r)==="object"&&r!==null&&!Array.isArray(r)}catch(e){return!1}}var Xe=h(335),_=function(r){var e=r.trim();switch(!0){case isArrayString(e):case isObjectString(e):return JSON.parse(e);case/^[0-9]+$/.test(e):return Number(e);case/^".*"$/.test(e):case/^'.*'$/.test(e):return e.slice(1,-1);default:return e}};function $e(t){var r=t!=null?t:window.location.href;r[0]==="?"&&(r="https://www.baidu.com/asd".concat(r));var e=new URL(r),l=e.searchParams,u={},s=_createForOfIteratorHelper(l),c;try{for(s.s();!(c=s.n()).done;){var f=_slicedToArray(c.value,2),n=f[0],a=f[1];u.hasOwnProperty(n)?(Array.isArray(u[n])||(u[n]=[u[n]]),u[n].push(_(a))):u[n]=_(a)}}catch(i){s.e(i)}finally{s.f()}return u}var De=null;function Be(t,r){return getParms(r)[t]}var Ve=null},38498:function(d,M,h){var j=h(78770);function L(b){if(Array.isArray(b))return j(b)}d.exports=L,d.exports.__esModule=!0,d.exports.default=d.exports},335:function(d,M,h){var j=h(31479);function L(b,p){var C=typeof Symbol!="undefined"&&b[Symbol.iterator]||b["@@iterator"];if(!C){if(Array.isArray(b)||(C=j(b))||p&&b&&typeof b.length=="number"){C&&(b=C);var H=0,X=function(){};return{s:X,n:function(){return H>=b.length?{done:!0}:{done:!1,value:b[H++]}},e:function(B){throw B},f:X}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var N=!0,o=!1,T;return{s:function(){C=C.call(b)},n:function(){var B=C.next();return N=B.done,B},e:function(B){o=!0,T=B},f:function(){try{!N&&C.return!=null&&C.return()}finally{if(o)throw T}}}}d.exports=L,d.exports.__esModule=!0,d.exports.default=d.exports},20698:function(d){function M(h){if(typeof Symbol!="undefined"&&h[Symbol.iterator]!=null||h["@@iterator"]!=null)return Array.from(h)}d.exports=M,d.exports.__esModule=!0,d.exports.default=d.exports},91162:function(d){function M(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}d.exports=M,d.exports.__esModule=!0,d.exports.default=d.exports},67825:function(d,M,h){var j=h(64382);function L(b,p){if(b==null)return{};var C=j(b,p),H,X;if(Object.getOwnPropertySymbols){var N=Object.getOwnPropertySymbols(b);for(X=0;X<N.length;X++)H=N[X],!(p.indexOf(H)>=0)&&Object.prototype.propertyIsEnumerable.call(b,H)&&(C[H]=b[H])}return C}d.exports=L,d.exports.__esModule=!0,d.exports.default=d.exports},64382:function(d){function M(h,j){if(h==null)return{};var L={},b=Object.keys(h),p,C;for(C=0;C<b.length;C++)p=b[C],!(j.indexOf(p)>=0)&&(L[p]=h[p]);return L}d.exports=M,d.exports.__esModule=!0,d.exports.default=d.exports},15558:function(d,M,h){var j=h(38498),L=h(20698),b=h(31479),p=h(91162);function C(H){return j(H)||L(H)||b(H)||p()}d.exports=C,d.exports.__esModule=!0,d.exports.default=d.exports}}]);
