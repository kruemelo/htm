var t,n,e,i,_,r,o,u,f={},s=[],l=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,c=Array.isArray;function a(t,n){for(var e in n)t[e]=n[e];return t}function h(t){var n=t.parentNode;n&&n.removeChild(t)}function p(n,e,i){var _,r,o,u={};for(o in e)"key"==o?_=e[o]:"ref"==o?r=e[o]:u[o]=e[o];if(arguments.length>2&&(u.children=arguments.length>3?t.call(arguments,2):i),"function"==typeof n&&null!=n.defaultProps)for(o in n.defaultProps)void 0===u[o]&&(u[o]=n.defaultProps[o]);return v(n,u,_,r,null)}function v(t,i,_,r,o){var u={type:t,props:i,key:_,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++e:o};return null==o&&null!=n.vnode&&n.vnode(u),u}function d(){return{current:null}}function y(t){return t.children}function m(t,n){this.props=t,this.context=n}function g(t,n){if(null==n)return t.__?g(t.__,t.__.__k.indexOf(t)+1):null;for(var e;n<t.__k.length;n++)if(null!=(e=t.__k[n])&&null!=e.__e)return e.__e;return"function"==typeof t.type?g(t):null}function b(t){var n,e;if(null!=(t=t.__)&&null!=t.__c){for(t.__e=t.__c.base=null,n=0;n<t.__k.length;n++)if(null!=(e=t.__k[n])&&null!=e.__e){t.__e=t.__c.base=e.__e;break}return b(t)}}function k(t){(!t.__d&&(t.__d=!0)&&i.push(t)&&!S.__r++||_!==n.debounceRendering)&&((_=n.debounceRendering)||r)(S)}function S(){var t,n,e,_,r,u,f,s;for(i.sort(o);t=i.shift();)t.__d&&(n=i.length,_=void 0,r=void 0,f=(u=(e=t).__v).__e,(s=e.__P)&&(_=[],(r=a({},u)).__v=u.__v+1,$(s,u,r,e.__n,void 0!==s.ownerSVGElement,null!=u.__h?[f]:null,_,null==f?g(u):f,u.__h),T(_,u),u.__e!=f&&b(u)),i.length>n&&i.sort(o));S.__r=0}function x(t,n,e,i,_,r,o,u,l,a){var h,p,d,m,b,k,S,x=i&&i.__k||s,C=x.length;for(e.__k=[],h=0;h<n.length;h++)if(null!=(m=e.__k[h]=null==(m=n[h])||"boolean"==typeof m||"function"==typeof m?null:"string"==typeof m||"number"==typeof m||"bigint"==typeof m?v(null,m,null,null,m):c(m)?v(y,{children:m},null,null,null):m.__b>0?v(m.type,m.props,m.key,m.ref?m.ref:null,m.__v):m)){if(m.__=e,m.__b=e.__b+1,null===(d=x[h])||d&&m.key==d.key&&m.type===d.type)x[h]=void 0;else for(p=0;p<C;p++){if((d=x[p])&&m.key==d.key&&m.type===d.type){x[p]=void 0;break}d=null}$(t,m,d=d||f,_,r,o,u,l,a),b=m.__e,(p=m.ref)&&d.ref!=p&&(S||(S=[]),d.ref&&S.push(d.ref,null,m),S.push(p,m.__c||b,m)),null!=b?(null==k&&(k=b),"function"==typeof m.type&&m.__k===d.__k?m.__d=l=w(m,l,t):l=E(t,m,d,x,b,l),"function"==typeof e.type&&(e.__d=l)):l&&d.__e==l&&l.parentNode!=t&&(l=g(d))}for(e.__e=k,h=C;h--;)null!=x[h]&&("function"==typeof e.type&&null!=x[h].__e&&x[h].__e==e.__d&&(e.__d=U(i).nextSibling),M(x[h],x[h]));if(S)for(h=0;h<S.length;h++)V(S[h],S[++h],S[++h])}function w(t,n,e){for(var i,_=t.__k,r=0;_&&r<_.length;r++)(i=_[r])&&(i.__=t,n="function"==typeof i.type?w(i,n,e):E(e,i,i,_,i.__e,n));return n}function C(t,n){return n=n||[],null==t||"boolean"==typeof t||(c(t)?t.some(function(t){C(t,n)}):n.push(t)),n}function E(t,n,e,i,_,r){var o,u,f;if(void 0!==n.__d)o=n.__d,n.__d=void 0;else if(null==e||_!=r||null==_.parentNode)t:if(null==r||r.parentNode!==t)t.appendChild(_),o=null;else{for(u=r,f=0;(u=u.nextSibling)&&f<i.length;f+=1)if(u==_)break t;t.insertBefore(_,r),o=r}return void 0!==o?o:_.nextSibling}function U(t){var n,e,i;if(null==t.type||"string"==typeof t.type)return t.__e;if(t.__k)for(n=t.__k.length-1;n>=0;n--)if((e=t.__k[n])&&(i=U(e)))return i;return null}function H(t,n,e){"-"===n[0]?t.setProperty(n,null==e?"":e):t[n]=null==e?"":"number"!=typeof e||l.test(n)?e:e+"px"}function N(t,n,e,i,_){var r;t:if("style"===n)if("string"==typeof e)t.style.cssText=e;else{if("string"==typeof i&&(t.style.cssText=i=""),i)for(n in i)e&&n in e||H(t.style,n,"");if(e)for(n in e)i&&e[n]===i[n]||H(t.style,n,e[n])}else if("o"===n[0]&&"n"===n[1])r=n!==(n=n.replace(/Capture$/,"")),n=n.toLowerCase()in t?n.toLowerCase().slice(2):n.slice(2),t.l||(t.l={}),t.l[n+r]=e,e?i||t.addEventListener(n,r?D:P,r):t.removeEventListener(n,r?D:P,r);else if("dangerouslySetInnerHTML"!==n){if(_)n=n.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!==n&&"height"!==n&&"href"!==n&&"list"!==n&&"form"!==n&&"tabIndex"!==n&&"download"!==n&&"rowSpan"!==n&&"colSpan"!==n&&n in t)try{t[n]=null==e?"":e;break t}catch(t){}"function"==typeof e||(null==e||!1===e&&"-"!==n[4]?t.removeAttribute(n):t.setAttribute(n,e))}}function P(t){return this.l[t.type+!1](n.event?n.event(t):t)}function D(t){return this.l[t.type+!0](n.event?n.event(t):t)}function $(t,e,i,_,r,o,u,f,s){var l,h,p,v,d,g,b,k,S,w,C,E,U,H,N,P=e.type;if(void 0!==e.constructor)return null;null!=i.__h&&(s=i.__h,f=e.__e=i.__e,e.__h=null,o=[f]),(l=n.__b)&&l(e);try{t:if("function"==typeof P){if(k=e.props,S=(l=P.contextType)&&_[l.__c],w=l?S?S.props.value:l.__:_,i.__c?b=(h=e.__c=i.__c).__=h.__E:("prototype"in P&&P.prototype.render?e.__c=h=new P(k,w):(e.__c=h=new m(k,w),h.constructor=P,h.render=W),S&&S.sub(h),h.props=k,h.state||(h.state={}),h.context=w,h.__n=_,p=h.__d=!0,h.__h=[],h._sb=[]),null==h.__s&&(h.__s=h.state),null!=P.getDerivedStateFromProps&&(h.__s==h.state&&(h.__s=a({},h.__s)),a(h.__s,P.getDerivedStateFromProps(k,h.__s))),v=h.props,d=h.state,h.__v=e,p)null==P.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),null!=h.componentDidMount&&h.__h.push(h.componentDidMount);else{if(null==P.getDerivedStateFromProps&&k!==v&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(k,w),!h.__e&&null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(k,h.__s,w)||e.__v===i.__v){for(e.__v!==i.__v&&(h.props=k,h.state=h.__s,h.__d=!1),h.__e=!1,e.__e=i.__e,e.__k=i.__k,e.__k.forEach(function(t){t&&(t.__=e)}),C=0;C<h._sb.length;C++)h.__h.push(h._sb[C]);h._sb=[],h.__h.length&&u.push(h);break t}null!=h.componentWillUpdate&&h.componentWillUpdate(k,h.__s,w),null!=h.componentDidUpdate&&h.__h.push(function(){h.componentDidUpdate(v,d,g)})}if(h.context=w,h.props=k,h.__P=t,E=n.__r,U=0,"prototype"in P&&P.prototype.render){for(h.state=h.__s,h.__d=!1,E&&E(e),l=h.render(h.props,h.state,h.context),H=0;H<h._sb.length;H++)h.__h.push(h._sb[H]);h._sb=[]}else do{h.__d=!1,E&&E(e),l=h.render(h.props,h.state,h.context),h.state=h.__s}while(h.__d&&++U<25);h.state=h.__s,null!=h.getChildContext&&(_=a(a({},_),h.getChildContext())),p||null==h.getSnapshotBeforeUpdate||(g=h.getSnapshotBeforeUpdate(v,d)),x(t,c(N=null!=l&&l.type===y&&null==l.key?l.props.children:l)?N:[N],e,i,_,r,o,u,f,s),h.base=e.__e,e.__h=null,h.__h.length&&u.push(h),b&&(h.__E=h.__=null),h.__e=!1}else null==o&&e.__v===i.__v?(e.__k=i.__k,e.__e=i.__e):e.__e=A(i.__e,e,i,_,r,o,u,s);(l=n.diffed)&&l(e)}catch(t){e.__v=null,(s||null!=o)&&(e.__e=f,e.__h=!!s,o[o.indexOf(f)]=null),n.__e(t,e,i)}}function T(t,e){n.__c&&n.__c(e,t),t.some(function(e){try{t=e.__h,e.__h=[],t.some(function(t){t.call(e)})}catch(t){n.__e(t,e.__v)}})}function A(n,e,i,_,r,o,u,s){var l,a,p,v=i.props,d=e.props,y=e.type,m=0;if("svg"===y&&(r=!0),null!=o)for(;m<o.length;m++)if((l=o[m])&&"setAttribute"in l==!!y&&(y?l.localName===y:3===l.nodeType)){n=l,o[m]=null;break}if(null==n){if(null===y)return document.createTextNode(d);n=r?document.createElementNS("http://www.w3.org/2000/svg",y):document.createElement(y,d.is&&d),o=null,s=!1}if(null===y)v===d||s&&n.data===d||(n.data=d);else{if(o=o&&t.call(n.childNodes),a=(v=i.props||f).dangerouslySetInnerHTML,p=d.dangerouslySetInnerHTML,!s){if(null!=o)for(v={},m=0;m<n.attributes.length;m++)v[n.attributes[m].name]=n.attributes[m].value;(p||a)&&(p&&(a&&p.__html==a.__html||p.__html===n.innerHTML)||(n.innerHTML=p&&p.__html||""))}if(function(t,n,e,i,_){var r;for(r in e)"children"===r||"key"===r||r in n||N(t,r,null,e[r],i);for(r in n)_&&"function"!=typeof n[r]||"children"===r||"key"===r||"value"===r||"checked"===r||e[r]===n[r]||N(t,r,n[r],e[r],i)}(n,d,v,r,s),p)e.__k=[];else if(x(n,c(m=e.props.children)?m:[m],e,i,_,r&&"foreignObject"!==y,o,u,o?o[0]:i.__k&&g(i,0),s),null!=o)for(m=o.length;m--;)null!=o[m]&&h(o[m]);s||("value"in d&&void 0!==(m=d.value)&&(m!==n.value||"progress"===y&&!m||"option"===y&&m!==v.value)&&N(n,"value",m,v.value,!1),"checked"in d&&void 0!==(m=d.checked)&&m!==n.checked&&N(n,"checked",m,v.checked,!1))}return n}function V(t,e,i){try{"function"==typeof t?t(e):t.current=e}catch(t){n.__e(t,i)}}function M(t,e,i){var _,r;if(n.unmount&&n.unmount(t),(_=t.ref)&&(_.current&&_.current!==t.__e||V(_,null,e)),null!=(_=t.__c)){if(_.componentWillUnmount)try{_.componentWillUnmount()}catch(t){n.__e(t,e)}_.base=_.__P=null,t.__c=void 0}if(_=t.__k)for(r=0;r<_.length;r++)_[r]&&M(_[r],e,i||"function"!=typeof t.type);i||null==t.__e||h(t.__e),t.__=t.__e=t.__d=void 0}function W(t,n,e){return this.constructor(t,e)}function F(e,i,_){var r,o,u;n.__&&n.__(e,i),o=(r="function"==typeof _)?null:_&&_.__k||i.__k,u=[],$(i,e=(!r&&_||i).__k=p(y,null,[e]),o||f,f,void 0!==i.ownerSVGElement,!r&&_?[_]:o?null:i.firstChild?t.call(i.childNodes):null,u,!r&&_?_:o?o.__e:i.firstChild,r),T(u,e)}function O(t,n){F(t,n,O)}function L(t,n){var e={__c:n="__cC"+u++,__:t,Consumer:function(t,n){return t.children(n)},Provider:function(t){var e,i;return this.getChildContext||(e=[],(i={})[n]=this,this.getChildContext=function(){return i},this.shouldComponentUpdate=function(t){this.props.value!==t.value&&e.some(function(t){t.__e=!0,k(t)})},this.sub=function(t){e.push(t);var n=t.componentWillUnmount;t.componentWillUnmount=function(){e.splice(e.indexOf(t),1),n&&n.call(t)}}),t.children}};return e.Provider.__=e.Consumer.contextType=e}t=s.slice,n={__e:function(t,n,e,i){for(var _,r,o;n=n.__;)if((_=n.__c)&&!_.__)try{if((r=_.constructor)&&null!=r.getDerivedStateFromError&&(_.setState(r.getDerivedStateFromError(t)),o=_.__d),null!=_.componentDidCatch&&(_.componentDidCatch(t,i||{}),o=_.__d),o)return _.__E=_}catch(n){t=n}throw t}},e=0,m.prototype.setState=function(t,n){var e;e=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=a({},this.state),"function"==typeof t&&(t=t(a({},e),this.props)),t&&a(e,t),null!=t&&this.__v&&(n&&this._sb.push(n),k(this))},m.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),k(this))},m.prototype.render=y,i=[],r="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,o=function(t,n){return t.__v.__b-n.__v.__b},S.__r=0,u=0;var R,I,j,q,B=0,G=[],z=[],J=n.__b,K=n.__r,Q=n.diffed,X=n.__c,Y=n.unmount;function Z(t,e){n.__h&&n.__h(I,t,B||e),B=0;var i=I.__H||(I.__H={__:[],__h:[]});return t>=i.__.length&&i.__.push({__V:z}),i.__[t]}function tt(t){return B=1,nt(yt,t)}function nt(t,n,e){var i=Z(R++,2);if(i.t=t,!i.__c&&(i.__=[e?e(n):yt(void 0,n),function(t){var n=i.__N?i.__N[0]:i.__[0],e=i.t(n,t);n!==e&&(i.__N=[e,i.__[1]],i.__c.setState({}))}],i.__c=I,!I.u)){var _=function(t,n,e){if(!i.__c.__H)return!0;var _=i.__c.__H.__.filter(function(t){return t.__c});if(_.every(function(t){return!t.__N}))return!r||r.call(this,t,n,e);var o=!1;return _.forEach(function(t){if(t.__N){var n=t.__[0];t.__=t.__N,t.__N=void 0,n!==t.__[0]&&(o=!0)}}),!(!o&&i.__c.props===t)&&(!r||r.call(this,t,n,e))};I.u=!0;var r=I.shouldComponentUpdate,o=I.componentWillUpdate;I.componentWillUpdate=function(t,n,e){if(this.__e){var i=r;r=void 0,_(t,n,e),r=i}o&&o.call(this,t,n,e)},I.shouldComponentUpdate=_}return i.__N||i.__}function et(t,e){var i=Z(R++,3);!n.__s&&dt(i.__H,e)&&(i.__=t,i.i=e,I.__H.__h.push(i))}function it(t,e){var i=Z(R++,4);!n.__s&&dt(i.__H,e)&&(i.__=t,i.i=e,I.__h.push(i))}function _t(t){return B=5,ot(function(){return{current:t}},[])}function rt(t,n,e){B=6,it(function(){return"function"==typeof t?(t(n()),function(){return t(null)}):t?(t.current=n(),function(){return t.current=null}):void 0},null==e?e:e.concat(t))}function ot(t,n){var e=Z(R++,7);return dt(e.__H,n)?(e.__V=t(),e.i=n,e.__h=t,e.__V):e.__}function ut(t,n){return B=8,ot(function(){return t},n)}function ft(t){var n=I.context[t.__c],e=Z(R++,9);return e.c=t,n?(null==e.__&&(e.__=!0,n.sub(I)),n.props.value):t.__}function st(t,e){n.useDebugValue&&n.useDebugValue(e?e(t):t)}function lt(t){var n=Z(R++,10),e=tt();return n.__=t,I.componentDidCatch||(I.componentDidCatch=function(t,i){n.__&&n.__(t,i),e[1](t)}),[e[0],function(){e[1](void 0)}]}function ct(){var t=Z(R++,11);if(!t.__){for(var n=I.__v;null!==n&&!n.__m&&null!==n.__;)n=n.__;var e=n.__m||(n.__m=[0,0]);t.__="P"+e[0]+"-"+e[1]++}return t.__}function at(){for(var t;t=G.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(pt),t.__H.__h.forEach(vt),t.__H.__h=[]}catch(e){t.__H.__h=[],n.__e(e,t.__v)}}n.__b=function(t){I=null,J&&J(t)},n.__r=function(t){K&&K(t),R=0;var n=(I=t.__c).__H;n&&(j===I?(n.__h=[],I.__h=[],n.__.forEach(function(t){t.__N&&(t.__=t.__N),t.__V=z,t.__N=t.i=void 0})):(n.__h.forEach(pt),n.__h.forEach(vt),n.__h=[],R=0)),j=I},n.diffed=function(t){Q&&Q(t);var e=t.__c;e&&e.__H&&(e.__H.__h.length&&(1!==G.push(e)&&q===n.requestAnimationFrame||((q=n.requestAnimationFrame)||function(t){var n,e=function(){clearTimeout(i),ht&&cancelAnimationFrame(n),setTimeout(t)},i=setTimeout(e,100);ht&&(n=requestAnimationFrame(e))})(at)),e.__H.__.forEach(function(t){t.i&&(t.__H=t.i),t.__V!==z&&(t.__=t.__V),t.i=void 0,t.__V=z})),j=I=null},n.__c=function(t,e){e.some(function(t){try{t.__h.forEach(pt),t.__h=t.__h.filter(function(t){return!t.__||vt(t)})}catch(i){e.some(function(t){t.__h&&(t.__h=[])}),e=[],n.__e(i,t.__v)}}),X&&X(t,e)},n.unmount=function(t){Y&&Y(t);var e,i=t.__c;i&&i.__H&&(i.__H.__.forEach(function(t){try{pt(t)}catch(t){e=t}}),i.__H=void 0,e&&n.__e(e,i.__v))};var ht="function"==typeof requestAnimationFrame;function pt(t){var n=I,e=t.__c;"function"==typeof e&&(t.__c=void 0,e()),I=n}function vt(t){var n=I;t.__c=t.__(),I=n}function dt(t,n){return!t||t.length!==n.length||n.some(function(n,e){return n!==t[e]})}function yt(t,n){return"function"==typeof n?n(t):n}function mt(){throw new Error("Cycle detected")}function gt(){if(Ct>1)Ct--;else{for(var t,n=!1;void 0!==wt;){var e=wt;for(wt=void 0,Et++;void 0!==e;){var i=e.o;if(e.o=void 0,e.f&=-3,!(8&e.f)&&Dt(e))try{e.c()}catch(e){n||(t=e,n=!0)}e=i}}if(Et=0,Ct--,n)throw t}}function bt(t){if(Ct>0)return t();Ct++;try{return t()}finally{gt()}}var kt,St,xt=void 0,wt=void 0,Ct=0,Et=0,Ut=0;function Ht(t){if(void 0!==xt){var n=t.n;if(void 0===n||n.t!==xt)return n={i:0,S:t,p:xt.s,n:void 0,t:xt,e:void 0,x:void 0,r:n},void 0!==xt.s&&(xt.s.n=n),xt.s=n,t.n=n,32&xt.f&&t.S(n),n;if(-1===n.i)return n.i=0,void 0!==n.n&&(n.n.p=n.p,void 0!==n.p&&(n.p.n=n.n),n.p=xt.s,n.n=void 0,xt.s.n=n,xt.s=n),n}}function Nt(t){this.v=t,this.i=0,this.n=void 0,this.t=void 0}function Pt(t){return new Nt(t)}function Dt(t){for(var n=t.s;void 0!==n;n=n.n)if(n.S.i!==n.i||!n.S.h()||n.S.i!==n.i)return!0;return!1}function $t(t){for(var n=t.s;void 0!==n;n=n.n){var e=n.S.n;if(void 0!==e&&(n.r=e),n.S.n=n,n.i=-1,void 0===n.n){t.s=n;break}}}function Tt(t){for(var n=t.s,e=void 0;void 0!==n;){var i=n.p;-1===n.i?(n.S.U(n),void 0!==i&&(i.n=n.n),void 0!==n.n&&(n.n.p=i)):e=n,n.S.n=n.r,void 0!==n.r&&(n.r=void 0),n=i}t.s=e}function At(t){Nt.call(this,void 0),this.x=t,this.s=void 0,this.g=Ut-1,this.f=4}function Vt(t){return new At(t)}function Mt(t){var n=t.u;if(t.u=void 0,"function"==typeof n){Ct++;var e=xt;xt=void 0;try{n()}catch(n){throw t.f&=-2,t.f|=8,Wt(t),n}finally{xt=e,gt()}}}function Wt(t){for(var n=t.s;void 0!==n;n=n.n)n.S.U(n);t.x=void 0,t.s=void 0,Mt(t)}function Ft(t){this.x=t,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32}function Ot(t){var n=new Ft(t);try{n.c()}catch(t){throw n.d(),t}return n.d.bind(n)}function Lt(t,e){n[t]=e.bind(null,n[t]||function(){})}function Rt(t){St&&St(),St=t&&t.S()}function It(t){var n=this,e=t.data,i=qt(e);i.value=e;var _=ot(function(){for(var t=n.__v;t=t.__;)if(t.__c){t.__c.__$f|=4;break}return n.__$u.c=function(){n.base.data=_.peek()},Vt(function(){var t=i.value.value;return 0===t?0:!0===t?"":t||""})},[]);return _.value}function jt(t,n,e,i){var _=n in t&&void 0===t.ownerSVGElement,r=Pt(e);return{o:function(t,n){r.value=t,i=n},d:Ot(function(){var e=r.value.value;i[n]!==e&&(i[n]=e,_?t[n]=e:e?t.setAttribute(n,e):t.removeAttribute(n))})}}function qt(t){return ot(function(){return Pt(t)},[])}function Bt(t){var n=_t(t);return n.current=t,kt.__$f|=4,ot(function(){return Vt(function(){return n.current()})},[])}function Gt(t){var n=_t(t);n.current=t,et(function(){return Ot(function(){return n.current()})},[])}Nt.prototype.h=function(){return!0},Nt.prototype.S=function(t){this.t!==t&&void 0===t.e&&(t.x=this.t,void 0!==this.t&&(this.t.e=t),this.t=t)},Nt.prototype.U=function(t){if(void 0!==this.t){var n=t.e,e=t.x;void 0!==n&&(n.x=e,t.e=void 0),void 0!==e&&(e.e=n,t.x=void 0),t===this.t&&(this.t=e)}},Nt.prototype.subscribe=function(t){var n=this;return Ot(function(){var e=n.value,i=32&this.f;this.f&=-33;try{t(e)}finally{this.f|=i}})},Nt.prototype.valueOf=function(){return this.value},Nt.prototype.toString=function(){return this.value+""},Nt.prototype.toJSON=function(){return this.value},Nt.prototype.peek=function(){return this.v},Object.defineProperty(Nt.prototype,"value",{get:function(){var t=Ht(this);return void 0!==t&&(t.i=this.i),this.v},set:function(t){if(xt instanceof At&&function(){throw new Error("Computed cannot have side-effects")}(),t!==this.v){Et>100&&mt(),this.v=t,this.i++,Ut++,Ct++;try{for(var n=this.t;void 0!==n;n=n.x)n.t.N()}finally{gt()}}}}),(At.prototype=new Nt).h=function(){if(this.f&=-3,1&this.f)return!1;if(32==(36&this.f))return!0;if(this.f&=-5,this.g===Ut)return!0;if(this.g=Ut,this.f|=1,this.i>0&&!Dt(this))return this.f&=-2,!0;var t=xt;try{$t(this),xt=this;var n=this.x();(16&this.f||this.v!==n||0===this.i)&&(this.v=n,this.f&=-17,this.i++)}catch(t){this.v=t,this.f|=16,this.i++}return xt=t,Tt(this),this.f&=-2,!0},At.prototype.S=function(t){if(void 0===this.t){this.f|=36;for(var n=this.s;void 0!==n;n=n.n)n.S.S(n)}Nt.prototype.S.call(this,t)},At.prototype.U=function(t){if(void 0!==this.t&&(Nt.prototype.U.call(this,t),void 0===this.t)){this.f&=-33;for(var n=this.s;void 0!==n;n=n.n)n.S.U(n)}},At.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var t=this.t;void 0!==t;t=t.x)t.t.N()}},At.prototype.peek=function(){if(this.h()||mt(),16&this.f)throw this.v;return this.v},Object.defineProperty(At.prototype,"value",{get:function(){1&this.f&&mt();var t=Ht(this);if(this.h(),void 0!==t&&(t.i=this.i),16&this.f)throw this.v;return this.v}}),Ft.prototype.c=function(){var t=this.S();try{if(8&this.f)return;if(void 0===this.x)return;var n=this.x();"function"==typeof n&&(this.u=n)}finally{t()}},Ft.prototype.S=function(){1&this.f&&mt(),this.f|=1,this.f&=-9,Mt(this),$t(this),Ct++;var t=xt;return xt=this,function(t){if(xt!==this)throw new Error("Out-of-order effect");Tt(this),xt=t,this.f&=-2,8&this.f&&Wt(this),gt()}.bind(this,t)},Ft.prototype.N=function(){2&this.f||(this.f|=2,this.o=wt,wt=this)},Ft.prototype.d=function(){this.f|=8,1&this.f||Wt(this)},It.displayName="_st",Object.defineProperties(Nt.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:It},props:{configurable:!0,get:function(){return{data:this}}},__b:{configurable:!0,value:1}}),Lt("__b",function(t,n){if("string"==typeof n.type){var e,i=n.props;for(var _ in i)if("children"!==_){var r=i[_];r instanceof Nt&&(e||(n.__np=e={}),e[_]=r,i[_]=r.peek())}}t(n)}),Lt("__r",function(t,n){Rt();var e,i=n.__c;i&&(i.__$f&=-2,void 0===(e=i.__$u)&&(i.__$u=e=function(t){var n;return Ot(function(){n=this}),n.c=function(){i.__$f|=1,i.setState({})},n}())),kt=i,Rt(e),t(n)}),Lt("__e",function(t,n,e,i){Rt(),kt=void 0,t(n,e,i)}),Lt("diffed",function(t,n){var e;if(Rt(),kt=void 0,"string"==typeof n.type&&(e=n.__e)){var i=n.__np,_=n.props;if(i){var r=e.U;if(r)for(var o in r){var u=r[o];void 0===u||o in i||(u.d(),r[o]=void 0)}else e.U=r={};for(var f in i){var s=r[f],l=i[f];void 0===s?(s=jt(e,f,l,_),r[f]=s):s.o(l,_)}}}t(n)}),Lt("unmount",function(t,n){if("string"==typeof n.type){var e=n.__e;if(e){var i=e.U;if(i)for(var _ in e.U=void 0,i){var r=i[_];r&&r.d()}}}else{var o=n.__c;if(o){var u=o.__$u;u&&(o.__$u=void 0,u.d())}}t(n)}),Lt("__h",function(t,n,e,i){i<3&&(n.__$f|=2),t(n,e,i)}),m.prototype.shouldComponentUpdate=function(t,n){var e=this.__$u;if(!(e&&void 0!==e.s||4&this.__$f))return!0;if(3&this.__$f)return!0;for(var i in n)return!0;for(var _ in t)if("__source"!==_&&t[_]!==this.props[_])return!0;for(var r in this.props)if(!(r in t))return!0;return!1};var zt=function(t,n,e,i){var _;n[0]=0;for(var r=1;r<n.length;r++){var o=n[r++],u=n[r]?(n[0]|=o?1:2,e[n[r++]]):n[++r];3===o?i[0]=u:4===o?i[1]=Object.assign(i[1]||{},u):5===o?(i[1]=i[1]||{})[n[++r]]=u:6===o?i[1][n[++r]]+=u+"":o?(_=t.apply(u,zt(t,u,e,["",null])),i.push(_),u[0]?n[0]|=2:(n[r-2]=0,n[r]=_)):i.push(u)}return i},Jt=new Map,Kt=function(t){var n=Jt.get(this);return n||(n=new Map,Jt.set(this,n)),(n=zt(this,n.get(t)||(n.set(t,n=function(t){for(var n,e,i=1,_="",r="",o=[0],u=function(t){1===i&&(t||(_=_.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?o.push(0,t,_):3===i&&(t||_)?(o.push(3,t,_),i=2):2===i&&"..."===_&&t?o.push(4,t,0):2===i&&_&&!t?o.push(5,0,!0,_):i>=5&&((_||!t&&5===i)&&(o.push(i,0,_,e),i=6),t&&(o.push(i,t,0,e),i=6)),_=""},f=0;f<t.length;f++){f&&(1===i&&u(),u(f));for(var s=0;s<t[f].length;s++)n=t[f][s],1===i?"<"===n?(u(),o=[o],i=3):_+=n:4===i?"--"===_&&">"===n?(i=1,_=""):_=n+_[0]:r?n===r?r="":_+=n:'"'===n||"'"===n?r=n:">"===n?(u(),i=1):i&&("="===n?(i=5,e=_,_=""):"/"===n&&(i<5||">"===t[f][s+1])?(u(),3===i&&(o=o[0]),i=o,(o=o[0]).push(2,0,i),i=0):" "===n||"\t"===n||"\n"===n||"\r"===n?(u(),i=2):_+=n),3===i&&"!--"===_&&(i=4,o=o[0])}return u(),o}(t)),n),arguments,[])).length>1?n:n[0]}.bind(p);export{Kt as html,p as h,p as createElement,m as Component,L as createContext,d as createRef,F as render,O as hydrate,C as toChildArray,tt as useState,nt as useReducer,et as useEffect,it as useLayoutEffect,_t as useRef,rt as useImperativeHandle,ot as useMemo,ut as useCallback,ft as useContext,st as useDebugValue,lt as useErrorBoundary,ct as useId,qt as useSignal,Bt as useComputed,Gt as useSignalEffect,Nt as Signal,bt as batch,Vt as computed,Ot as effect,Pt as signal};
