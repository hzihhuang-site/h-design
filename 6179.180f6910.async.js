(self.webpackChunkHDesign=self.webpackChunkHDesign||[]).push([[6179],{96179:function(h,j,f){"use strict";f.d(j,{yF:function(){return X},Tr:function(){return ce},l$:function(){return ge},YE:function(){return xe},Ch:function(){return Ce},$P:function(){return Ne},aB:function(){return we},aF:function(){return Ae}});var I=f(82092),O=f.n(I),p=f(26068),y=f.n(p),N=f(48305),A=f.n(N),$=f(82187),E=f.n($),a=f(50959),T=f(11527),Y=(0,a.forwardRef)(function(t,n){var e=t.ratio,v=e===void 0?1:e,u=t.children,s=t.className,c=s===void 0?"":s,d=t.boxStyle,o=t.boxClassName,r=o===void 0?"":o,i=t.style,C=(0,a.useRef)(null),R=(0,a.useRef)(null),b=(0,a.useState)("width"),g=A()(b,2),H=g[0],k=g[1];return(0,a.useEffect)(function(){if(C.current){var m=function(w){w.forEach(function(L){var M,W,P=L.contentRect,z=P.width,D=P.height,x=(M=(W=L.target.firstChild).getBoundingClientRect)===null||M===void 0?void 0:M.call(W),B=x.width,F=x.height;k(function(){return v===1?z>D?"height":"width":z/D>B/F?"height":"width"})})},l=new ResizeObserver(m);return l.observe(C.current),function(){return l.disconnect()}}},[v]),(0,a.useImperativeHandle)(n,function(){return{containerRef:C,boxRef:R}}),(0,T.jsx)("div",{className:E()("auto-ratio-container",c),style:i,ref:C,children:(0,T.jsx)("div",{className:E()("auto-ratio-box",r),style:y()(y()({},d!=null?d:{}),{},O()({aspectRatio:"".concat(v)},H,"100%")),children:u})})}),X=Y,_=f(67825),Q=f.n(_);function ee(t){var n=t.value,e=t.onChange,v=(0,a.useState)(n!=null?n:""),u=A()(v,2),s=u[0],c=u[1],d=(0,a.useCallback)(function(o){if(e)return e(o);c(o.target.value)},[e]);return(0,a.useEffect)(function(){return c(n)},[n]),{currentValue:s,handlerChange:d}}var te=ee,re=f(15558),G=f.n(re);function ne(t){var n=t.value,e=t.textareaRef,v=t.elementList,u=(0,a.useCallback)(function(c){c.target===c.currentTarget&&e.current&&(e.current.focus(),e.current.setSelectionRange(n.length,n.length))},[n]),s=(0,a.useCallback)(function(c){var d=window.getSelection(),o=G()(c.currentTarget.children),r=o.findIndex(function(g){return g===c.target}),i=v.filter(function(g,H){return H<(r>-1?r:v.length-1)}).reduce(function(g,H){return g+H.msg.length},0);if(d&&d.rangeCount>0&&e.current){var C=d.getRangeAt(0),R=C.startOffset+i,b=C.endOffset+i;e.current.focus(),e.current.setSelectionRange(R,b)}},[v]);return{handlerContainerClick:u,handlerBoxClick:s}}var ae=ne,oe=[];function se(t){var n=t.value,e=n===void 0?"":n,v=t.highlight,u=v===void 0?oe:v,s=t.formatHighlight,c=(0,a.useMemo)(function(){var o=[];return G()(e).reduce(function(r,i){r.str=r.str+i,o[r.idx]={type:r.type,msg:r.str};var C=u.some(function(R){return r.str.includes(R)?(r.type=R,!0):!1});return C&&(o[r.idx].msg=r.str.split(r.type)[0],o.push({type:r.type,msg:r.type}),r.idx=r.idx+2,r.str="",r.type="default"),r},{str:"",idx:0,type:"default"}),o},[e,u]),d=c.map(function(o,r){var i=null;switch(!0){case(c.length-1===r&&o.msg.includes(`
`)):{i=(0,T.jsxs)("span",{children:[o.msg,(0,T.jsx)("br",{})]});break}case o.type==="default":{i=(0,T.jsx)("span",{children:o.msg});break}case!!s:{i=s(o.msg);break}default:i=(0,T.jsx)("span",{style:{color:"blue"},children:o.msg})}return(0,T.jsx)(a.Fragment,{children:i},o.msg+r)});return{element:d,elementList:c}}var ue=se,ie=["className","style","value","onChange","highlight","formatHighlight"],le=(0,a.forwardRef)(function(t,n){var e=t.className,v=t.style,u=t.value,s=u===void 0?"":u,c=t.onChange,d=t.highlight,o=t.formatHighlight,r=Q()(t,ie),i=(0,a.useRef)(null),C=(0,a.useRef)(null),R=(0,a.useRef)(null);(0,a.useImperativeHandle)(n,function(){return{textareaRef:i,textRef:R,containerRef:C}},[]);var b=te({value:s,onChange:c}),g=b.currentValue,H=b.handlerChange,k=ue({value:g,highlight:d,formatHighlight:o}),m=k.element,l=k.elementList,S=ae({value:g,textareaRef:i,elementList:l}),w=S.handlerContainerClick,L=S.handlerBoxClick;return(0,T.jsx)("div",{className:E()("highlight-textarea-container",e),style:v,onClick:w,ref:C,children:(0,T.jsxs)("div",{className:"highlight-textarea",children:[(0,T.jsx)("textarea",y()(y()({},r),{},{className:"highlight-textarea-textarea",onChange:H,value:g,ref:i})),(0,T.jsx)("div",{className:"highlight-textarea-box",onClick:L,contentEditable:"plaintext-only",suppressContentEditableWarning:!0,ref:R,children:m})]})})}),ce=le;function fe(t){var n=t.children,e=t.containerRef,v=(0,a.useState)({hasX:!1,hasY:!1}),u=A()(v,2),s=u[0],c=u[1],d=(0,a.useCallback)(function(){if(e.current){var o=e.current,r=o.scrollHeight,i=o.clientHeight,C=o.scrollWidth,R=o.clientWidth,b=C>R,g=r>i;c({hasX:b,hasY:g})}},[]);return(0,a.useEffect)(function(){if(e.current){d();var o=new ResizeObserver(function(r){return r.forEach(function(){return d()})});return o.observe(e.current),function(){return o.disconnect()}}},[n]),{hasScroll:s}}var he=fe;function ve(t){var n=t.children,e=t.containerRef,v=t.contentRef,u=t.scrollThumbYRef,s=t.scrollThumbXRef,c=(0,a.useRef)(!1),d=(0,a.useRef)({X:0,Y:0}),o=(0,a.useRef)(0),r=(0,a.useRef)(0),i=(0,a.useRef)(null),C=(0,a.useCallback)(function(){if(!(!e.current||!u.current||!s.current)){var m=e.current,l=m.scrollTop,S=m.scrollLeft,w=m.clientHeight,L=m.clientWidth,M=m.scrollHeight,W=m.scrollWidth,P=M-w,z=W-L,D=l/P*o.current,x=S/z*r.current;u.current.style.top="".concat(Math.min(Math.max(D,0),o.current),"px"),s.current.style.left="".concat(Math.min(Math.max(x,0),r.current),"px")}},[]);(0,a.useEffect)(function(){if(!(!e.current||!v.current||!u.current||!s.current)){var m=e.current,l=m.offsetHeight,S=m.offsetWidth,w=m.scrollHeight,L=m.scrollWidth,M=l*(l/w),W=S*(S/L);o.current=l-M,r.current=S-W,s.current.style.width="".concat(W,"px"),u.current.style.height="".concat(M,"px"),C()}},[n]);var R=function(l){if(c.current&&e.current){var S=e.current,w=S.clientHeight,L=S.clientWidth,M=S.scrollHeight,W=S.scrollWidth,P=M-w,z=W-L;if(l.preventDefault(),i.current==="Y"){var D=l.pageY-d.current.Y,x=D/o.current*P;e.current.scrollTop=x}else if(i.current==="X"){var B=l.pageX-d.current.X,F=B/r.current*z;e.current.scrollLeft=F}}},b=function m(){var l,S;c.current=!1,i.current=null,(l=u.current)===null||l===void 0||l.classList.remove("active"),(S=s.current)===null||S===void 0||S.classList.remove("active"),document.removeEventListener("mousemove",R),document.removeEventListener("mouseup",m)},g=function(l){!u.current||!s.current||(c.current=!0,d.current={X:l.pageX-s.current.offsetLeft,Y:l.pageY-u.current.offsetTop},document.addEventListener("mousemove",R),document.addEventListener("mouseup",b))},H=(0,a.useCallback)(function(m){var l;i.current="Y",(l=u.current)===null||l===void 0||l.classList.add("active"),g(m)},[g]),k=(0,a.useCallback)(function(m){var l;i.current="X",(l=s.current)===null||l===void 0||l.classList.add("active"),g(m)},[g]);return{scrollThumbX:s,scrollThumbY:u,contentRef:v,onThumbX:k,onThumbY:H,handlerScroll:C}}var de=ve,K={gap:4,size:4,background:"#000",border:"none",radius:999,opacity:1},me=(0,a.forwardRef)(function(t,n){var e=t.className,v=t.style,u=t.containerStyle,s=t.containerClassName,c=t.thumbOptions,d=c===void 0?K:c,o=t.children,r=y()(y()({},K),d),i=(0,a.useRef)(null),C=he({children:o,containerRef:i}),R=C.hasScroll,b=(0,a.useRef)(null),g=(0,a.useRef)(null),H=(0,a.useRef)(null),k=de({children:o,containerRef:i,contentRef:H,scrollThumbXRef:b,scrollThumbYRef:g}),m=k.onThumbX,l=k.onThumbY,S=k.handlerScroll,w=(0,a.useRef)(null);return(0,a.useImperativeHandle)(n,function(){return{mainRef:w,containerRef:i,contentRef:H,scrollThumbXRef:b,scrollThumbYRef:g}},[]),(0,T.jsxs)("div",{className:E()("scroll-container",e),style:y()({"--scroll-thumb-gap":"".concat(r.gap,"px"),"--scroll-thumb-size":"".concat(r.size,"px"),"--scroll-thumb-background":r.background,"--scroll-thumb-border":r.border,"--scroll-thumb-border-radius":typeof r.radius=="string"?r.radius:"".concat(r.radius,"px"),"--scroll-thumb-opacity":r.opacity},v),ref:w,children:[(0,T.jsx)("div",{className:E()("scroll-container-content",s),style:u,onScroll:S,ref:i,children:(0,T.jsx)("div",{ref:H,children:o})}),(0,T.jsx)("div",{className:E()("scroll-thumb","scroll-thumb-y",{show:R.hasY}),onMouseDown:l,ref:g}),(0,T.jsx)("div",{className:E()("scroll-thumb","scroll-thumb-x",{show:R.hasX}),onMouseDown:m,ref:b})]})}),ge=me;function be(t){return t==null}var J=be,pe=f(10422),ye=function(n){var e=n.className,v=e===void 0?"":e,u=n.style,s=n.target,c=n.direction,d=c===void 0?"vertical":c,o=n.itemOptions,r=n.placement,i=r===void 0?"right":r,C=n.alignment,R=C===void 0?"end":C,b=n.offset,g=n.zIndex,H=n.children,k=(0,a.useState)(document.body),m=A()(k,2),l=m[0],S=m[1];(0,a.useEffect)(function(){if(!J(s)){if(s!=null&&s.current)return S(s==null?void 0:s.current);S(s)}},[s]);var w=(0,a.useMemo)(function(){return O()({},J(g)?"":"--sidebar-zIndex",g)},[g]),L=(0,a.useMemo)(function(){var x={};switch(i){case"right":x.alignItems="end";case"left":{switch(x.height="100%",x.width="0px",x.flexDirection="column",R){case"start":x.justifyContent="start";break;case"center":x.justifyContent="center";break;case"end":x.justifyContent="end";break}break}case"bottom":x.alignItems="end";case"top":switch(x.width="100%",x.height="0px",R){case"start":x.justifyContent="start";break;case"center":x.justifyContent="center";break;case"end":x.justifyContent="end";break}}return x[i]=0,x},[i,R]),M=(0,a.useMemo)(function(){return y()(y()(y()({},w),L),u)},[w,L,u]),W=o!=null?o:{},P=W.gap,z=(0,a.useMemo)(function(){return O()({},J(P)?"":"--sidebar-item-gap","".concat(P,"px"))},[P]),D=(0,a.useMemo)(function(){if(!b)return{};var x=b.top,B=b.left,F=b.bottom,q=b.right;return{transform:"translate(".concat(B!=null?B:q?-q:0,"px, ").concat(x!=null?x:F?-F:0,"px)")}},[b]);return(0,pe.createPortal)((0,T.jsx)("div",{className:E()("sidebar",v),style:M,children:(0,T.jsx)("div",{className:"sidebar-".concat(d),style:y()(y()({},z),D),children:H})}),l)},xe=ye,Re=["loadingClassName","className","src","style"],Se=function(n){var e=n.loadingClassName,v=e===void 0?"":e,u=n.className,s=n.src,c=n.style,d=Q()(n,Re),o=(0,a.useRef)(null),r=(0,a.useState)(!0),i=A()(r,2),C=i[0],R=i[1],b=(0,a.useRef)(document.createElement("img"));return(0,a.useEffect)(function(){if(o.current){var g=function(l){l.forEach(function(S){var w=S.target;R(!0),w.complete&&R(!1)})},H=new MutationObserver(g);H.observe(b.current,{attributes:!0,attributeFilter:["src"]});var k=function(){var l;(l=o.current)===null||l===void 0||l.setAttribute("src",b.current.getAttribute("src")),setTimeout(function(){R(!1)},200)};return b.current.addEventListener("load",k),b.current.addEventListener("error",k),function(){H.disconnect(),b.current.removeEventListener("load",k),b.current.removeEventListener("error",k)}}},[]),(0,a.useEffect)(function(){if(!(!o.current||s===void 0)){var g=function(m){m.forEach(function(l){l.isIntersecting&&b.current.setAttribute("src",s)})},H=new IntersectionObserver(g,{root:document,threshold:[0]});return H.observe(o.current),function(){return H.disconnect()}}},[s]),(0,T.jsx)("img",y()({className:E()(u,"simple-img",O()({},v,C)),style:y()({objectFit:"cover",imageRendering:"pixelated"},c),draggable:!1,ref:o},d))},Ce=Se;function Te(t,n){var e=(0,a.useRef)(),v=(0,a.useState)(t),u=A()(v,2),s=u[0],c=u[1],d=(0,a.useCallback)(function(r){clearTimeout(e.current),e.current=setTimeout(function(){return c(function(i){return typeof r=="function"?r(i):t})},n)},[n,t]),o=(0,a.useCallback)(function(r){e.current&&clearTimeout(e.current),c(function(i){return typeof r=="function"?r(i):t})},[t]);return[s,d,o]}var Ne=Te;function He(t,n){var e=(0,a.useRef)(),v=(0,a.useState)(t),u=A()(v,2),s=u[0],c=u[1],d=(0,a.useCallback)(function(r){e.current||(e.current=setTimeout(function(){clearTimeout(e.current),e.current=void 0,c(function(i){return typeof r=="function"?r(i):r})},n))},[n,t]),o=(0,a.useCallback)(function(r){e.current&&(clearTimeout(e.current),e.current=void 0),c(function(i){return typeof r=="function"?r(i):r})},[t]);return[s,d,o]}var Ae=He,U=new WeakMap,V;function ke(t,n){var e;return(0,a.useEffect)(function(){if(e=n.current?n.current:n,!!e)return V||(V=new ResizeObserver(function(v){v.forEach(function(u){var s;(s=U.get(u.target))===null||s===void 0||s(u,V)})})),U.set(e,t),V.observe(e),function(){e&&(U.delete(e),V.unobserve(e))}},[]),function(){e&&(U.delete(e),V.unobserve(e))}}var we=ke,Oe=f(31759);function Ee(t){if(!t.match(/^\[.*\]$/))return!1;try{var n=JSON.parse(t);return Array.isArray(n)?n.every(function(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"||e===null||Array.isArray(e)||_typeof(e)==="object"&&e!==null&&!Array.isArray(e)}):!1}catch(e){return!1}}function Le(t){if(!t.match(/^\{.*\}$/))return!1;try{var n=JSON.parse(t);return _typeof(n)==="object"&&n!==null&&!Array.isArray(n)}catch(e){return!1}}var Me=f(335),Z=function(n){var e=n.trim();switch(!0){case isArrayString(e):case isObjectString(e):return JSON.parse(e);case/^[0-9]+$/.test(e):return Number(e);case/^".*"$/.test(e):case/^'.*'$/.test(e):return e.slice(1,-1);default:return e}};function je(t){var n=t!=null?t:window.location.href;n[0]==="?"&&(n="https://www.baidu.com/asd".concat(n));var e=new URL(n),v=e.searchParams,u={},s=_createForOfIteratorHelper(v),c;try{for(s.s();!(c=s.n()).done;){var d=_slicedToArray(c.value,2),o=d[0],r=d[1];u.hasOwnProperty(o)?(Array.isArray(u[o])||(u[o]=[u[o]]),u[o].push(Z(r))):u[o]=Z(r)}}catch(i){s.e(i)}finally{s.f()}return u}var Ie=null;function We(t,n){return getParms(n)[t]}var Pe=null},38498:function(h,j,f){var I=f(78770);function O(p){if(Array.isArray(p))return I(p)}h.exports=O,h.exports.__esModule=!0,h.exports.default=h.exports},335:function(h,j,f){var I=f(31479);function O(p,y){var N=typeof Symbol!="undefined"&&p[Symbol.iterator]||p["@@iterator"];if(!N){if(Array.isArray(p)||(N=I(p))||y&&p&&typeof p.length=="number"){N&&(p=N);var A=0,$=function(){};return{s:$,n:function(){return A>=p.length?{done:!0}:{done:!1,value:p[A++]}},e:function(X){throw X},f:$}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var E=!0,a=!1,T;return{s:function(){N=N.call(p)},n:function(){var X=N.next();return E=X.done,X},e:function(X){a=!0,T=X},f:function(){try{!E&&N.return!=null&&N.return()}finally{if(a)throw T}}}}h.exports=O,h.exports.__esModule=!0,h.exports.default=h.exports},20698:function(h){function j(f){if(typeof Symbol!="undefined"&&f[Symbol.iterator]!=null||f["@@iterator"]!=null)return Array.from(f)}h.exports=j,h.exports.__esModule=!0,h.exports.default=h.exports},91162:function(h){function j(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}h.exports=j,h.exports.__esModule=!0,h.exports.default=h.exports},67825:function(h,j,f){var I=f(64382);function O(p,y){if(p==null)return{};var N=I(p,y),A,$;if(Object.getOwnPropertySymbols){var E=Object.getOwnPropertySymbols(p);for($=0;$<E.length;$++)A=E[$],!(y.indexOf(A)>=0)&&Object.prototype.propertyIsEnumerable.call(p,A)&&(N[A]=p[A])}return N}h.exports=O,h.exports.__esModule=!0,h.exports.default=h.exports},64382:function(h){function j(f,I){if(f==null)return{};var O={},p=Object.keys(f),y,N;for(N=0;N<p.length;N++)y=p[N],!(I.indexOf(y)>=0)&&(O[y]=f[y]);return O}h.exports=j,h.exports.__esModule=!0,h.exports.default=h.exports},15558:function(h,j,f){var I=f(38498),O=f(20698),p=f(31479),y=f(91162);function N(A){return I(A)||O(A)||p(A)||y()}h.exports=N,h.exports.__esModule=!0,h.exports.default=h.exports}}]);