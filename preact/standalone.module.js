var t,n,e,r,o,i,u,_,f,a={},c=[],l=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,s=Array.isArray;function h(t,n){for(var e in n)t[e]=n[e];return t}function p(t){var n=t.parentNode;n&&n.removeChild(t)}function v(n,e,r){var o,i,u,_={};for(u in e)"key"==u?o=e[u]:"ref"==u?i=e[u]:_[u]=e[u];if(arguments.length>2&&(_.children=arguments.length>3?t.call(arguments,2):r),"function"==typeof n&&null!=n.defaultProps)for(u in n.defaultProps)void 0===_[u]&&(_[u]=n.defaultProps[u]);return d(n,_,o,i,null)}function d(t,r,o,i,u){var _={type:t,props:r,key:o,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:null==u?++e:u,__i:-1,__u:0};return null==u&&null!=n.vnode&&n.vnode(_),_}function y(){return{current:null}}function m(t){return t.children}function g(t,n){this.props=t,this.context=n}function b(t,n){if(null==n)return t.__?b(t.__,t.__i+1):null;for(var e;n<t.__k.length;n++)if(null!=(e=t.__k[n])&&null!=e.__e)return e.__e;return"function"==typeof t.type?b(t):null}function k(t){var n,e;if(null!=(t=t.__)&&null!=t.__c){for(t.__e=t.__c.base=null,n=0;n<t.__k.length;n++)if(null!=(e=t.__k[n])&&null!=e.__e){t.__e=t.__c.base=e.__e;break}return k(t)}}function x(t){(!t.__d&&(t.__d=!0)&&o.push(t)&&!w.__r++||i!==n.debounceRendering)&&((i=n.debounceRendering)||u)(w)}function w(){var t,e,r,i,u,f,a,c,l;for(o.sort(_);t=o.shift();)t.__d&&(e=o.length,i=void 0,f=(u=(r=t).__v).__e,c=[],l=[],(a=r.__P)&&((i=h({},u)).__v=u.__v+1,n.vnode&&n.vnode(i),T(a,i,u,r.__n,void 0!==a.ownerSVGElement,32&u.__u?[f]:null,c,null==f?b(u):f,!!(32&u.__u),l),i.__v=u.__v,i.__.__k[i.__i]=i,N(c,i,l),i.__e!=f&&k(i)),o.length>e&&o.sort(_));w.__r=0}function C(t,n,e,r,o,i,u,_,f,l,s){var h,p,v,d,y,m=r&&r.__k||c,g=n.length;for(e.__d=f,S(e,n,m),f=e.__d,h=0;h<g;h++)null!=(v=e.__k[h])&&"boolean"!=typeof v&&"function"!=typeof v&&(p=-1===v.__i?a:m[v.__i]||a,v.__i=h,T(t,v,p,o,i,u,_,f,l,s),d=v.__e,v.ref&&p.ref!=v.ref&&(p.ref&&W(p.ref,null,v),s.push(v.ref,v.__c||d,v)),null==y&&null!=d&&(y=d),65536&v.__u||p.__k===v.__k?f=U(v,f,t):"function"==typeof v.type&&void 0!==v.__d?f=v.__d:d&&(f=d.nextSibling),v.__d=void 0,v.__u&=-196609);e.__d=f,e.__e=y}function S(t,n,e){var r,o,i,u,_,f=n.length,a=e.length,c=a,l=0;for(t.__k=[],r=0;r<f;r++)u=r+l,null!=(o=t.__k[r]=null==(o=n[r])||"boolean"==typeof o||"function"==typeof o?null:"string"==typeof o||"number"==typeof o||"bigint"==typeof o||o.constructor==String?d(null,o,null,null,null):s(o)?d(m,{children:o},null,null,null):void 0===o.constructor&&o.__b>0?d(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):o)?(o.__=t,o.__b=t.__b+1,_=E(o,e,u,c),o.__i=_,i=null,-1!==_&&(c--,(i=e[_])&&(i.__u|=131072)),null==i||null===i.__v?(-1==_&&l--,"function"!=typeof o.type&&(o.__u|=65536)):_!==u&&(_===u+1?l++:_>u?c>f-u?l+=_-u:l--:_<u?_==u-1&&(l=_-u):l=0,_!==r+l&&(o.__u|=65536))):(i=e[u])&&null==i.key&&i.__e&&0==(131072&i.__u)&&(i.__e==t.__d&&(t.__d=b(i)),M(i,i,!1),e[u]=null,c--);if(c)for(r=0;r<a;r++)null!=(i=e[r])&&0==(131072&i.__u)&&(i.__e==t.__d&&(t.__d=b(i)),M(i,i))}function U(t,n,e){var r,o;if("function"==typeof t.type){for(r=t.__k,o=0;r&&o<r.length;o++)r[o]&&(r[o].__=t,n=U(r[o],n,e));return n}t.__e!=n&&(e.insertBefore(t.__e,n||null),n=t.__e);do{n=n&&n.nextSibling}while(null!=n&&8===n.nodeType);return n}function A(t,n){return n=n||[],null==t||"boolean"==typeof t||(s(t)?t.some(function(t){A(t,n)}):n.push(t)),n}function E(t,n,e,r){var o=t.key,i=t.type,u=e-1,_=e+1,f=n[e];if(null===f||f&&o==f.key&&i===f.type&&0==(131072&f.__u))return e;if(r>(null!=f&&0==(131072&f.__u)?1:0))for(;u>=0||_<n.length;){if(u>=0){if((f=n[u])&&0==(131072&f.__u)&&o==f.key&&i===f.type)return u;u--}if(_<n.length){if((f=n[_])&&0==(131072&f.__u)&&o==f.key&&i===f.type)return _;_++}}return-1}function P(t,n,e){"-"===n[0]?t.setProperty(n,null==e?"":e):t[n]=null==e?"":"number"!=typeof e||l.test(n)?e:e+"px"}function H(t,n,e,r,o){var i;t:if("style"===n)if("string"==typeof e)t.style.cssText=e;else{if("string"==typeof r&&(t.style.cssText=r=""),r)for(n in r)e&&n in e||P(t.style,n,"");if(e)for(n in e)r&&e[n]===r[n]||P(t.style,n,e[n])}else if("o"===n[0]&&"n"===n[1])i=n!==(n=n.replace(/(PointerCapture)$|Capture$/i,"$1")),n=n.toLowerCase()in t?n.toLowerCase().slice(2):n.slice(2),t.l||(t.l={}),t.l[n+i]=e,e?r?e.u=r.u:(e.u=Date.now(),t.addEventListener(n,i?D:$,i)):t.removeEventListener(n,i?D:$,i);else{if(o)n=n.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!==n&&"height"!==n&&"href"!==n&&"list"!==n&&"form"!==n&&"tabIndex"!==n&&"download"!==n&&"rowSpan"!==n&&"colSpan"!==n&&"role"!==n&&n in t)try{t[n]=null==e?"":e;break t}catch(t){}"function"==typeof e||(null==e||!1===e&&"-"!==n[4]?t.removeAttribute(n):t.setAttribute(n,e))}}function $(t){if(this.l){var e=this.l[t.type+!1];if(t.t){if(t.t<=e.u)return}else t.t=Date.now();return e(n.event?n.event(t):t)}}function D(t){if(this.l)return this.l[t.type+!0](n.event?n.event(t):t)}function T(t,e,r,o,i,u,_,f,a,c){var l,p,v,d,y,b,k,x,w,S,U,A,E,P,H,$=e.type;if(void 0!==e.constructor)return null;128&r.__u&&(a=!!(32&r.__u),u=[f=e.__e=r.__e]),(l=n.__b)&&l(e);t:if("function"==typeof $)try{if(x=e.props,w=(l=$.contextType)&&o[l.__c],S=l?w?w.props.value:l.__:o,r.__c?k=(p=e.__c=r.__c).__=p.__E:("prototype"in $&&$.prototype.render?e.__c=p=new $(x,S):(e.__c=p=new g(x,S),p.constructor=$,p.render=O),w&&w.sub(p),p.props=x,p.state||(p.state={}),p.context=S,p.__n=o,v=p.__d=!0,p.__h=[],p._sb=[]),null==p.__s&&(p.__s=p.state),null!=$.getDerivedStateFromProps&&(p.__s==p.state&&(p.__s=h({},p.__s)),h(p.__s,$.getDerivedStateFromProps(x,p.__s))),d=p.props,y=p.state,p.__v=e,v)null==$.getDerivedStateFromProps&&null!=p.componentWillMount&&p.componentWillMount(),null!=p.componentDidMount&&p.__h.push(p.componentDidMount);else{if(null==$.getDerivedStateFromProps&&x!==d&&null!=p.componentWillReceiveProps&&p.componentWillReceiveProps(x,S),!p.__e&&(null!=p.shouldComponentUpdate&&!1===p.shouldComponentUpdate(x,p.__s,S)||e.__v===r.__v)){for(e.__v!==r.__v&&(p.props=x,p.state=p.__s,p.__d=!1),e.__e=r.__e,e.__k=r.__k,e.__k.forEach(function(t){t&&(t.__=e)}),U=0;U<p._sb.length;U++)p.__h.push(p._sb[U]);p._sb=[],p.__h.length&&_.push(p);break t}null!=p.componentWillUpdate&&p.componentWillUpdate(x,p.__s,S),null!=p.componentDidUpdate&&p.__h.push(function(){p.componentDidUpdate(d,y,b)})}if(p.context=S,p.props=x,p.__P=t,p.__e=!1,A=n.__r,E=0,"prototype"in $&&$.prototype.render){for(p.state=p.__s,p.__d=!1,A&&A(e),l=p.render(p.props,p.state,p.context),P=0;P<p._sb.length;P++)p.__h.push(p._sb[P]);p._sb=[]}else do{p.__d=!1,A&&A(e),l=p.render(p.props,p.state,p.context),p.state=p.__s}while(p.__d&&++E<25);p.state=p.__s,null!=p.getChildContext&&(o=h(h({},o),p.getChildContext())),v||null==p.getSnapshotBeforeUpdate||(b=p.getSnapshotBeforeUpdate(d,y)),C(t,s(H=null!=l&&l.type===m&&null==l.key?l.props.children:l)?H:[H],e,r,o,i,u,_,f,a,c),p.base=e.__e,e.__u&=-161,p.__h.length&&_.push(p),k&&(p.__E=p.__=null)}catch(t){e.__v=null,a||null!=u?(e.__e=f,e.__u|=a?160:32,u[u.indexOf(f)]=null):(e.__e=r.__e,e.__k=r.__k),n.__e(t,e,r)}else null==u&&e.__v===r.__v?(e.__k=r.__k,e.__e=r.__e):e.__e=L(r.__e,e,r,o,i,u,_,a,c);(l=n.diffed)&&l(e)}function N(t,e,r){e.__d=void 0;for(var o=0;o<r.length;o++)W(r[o],r[++o],r[++o]);n.__c&&n.__c(e,t),t.some(function(e){try{t=e.__h,e.__h=[],t.some(function(t){t.call(e)})}catch(t){n.__e(t,e.__v)}})}function L(n,e,r,o,i,u,_,f,c){var l,h,v,d,y,m,g,k=r.props,x=e.props,w=e.type;if("svg"===w&&(i=!0),null!=u)for(l=0;l<u.length;l++)if((y=u[l])&&"setAttribute"in y==!!w&&(w?y.localName===w:3===y.nodeType)){n=y,u[l]=null;break}if(null==n){if(null===w)return document.createTextNode(x);n=i?document.createElementNS("http://www.w3.org/2000/svg",w):document.createElement(w,x.is&&x),u=null,f=!1}if(null===w)k===x||f&&n.data===x||(n.data=x);else{if(u=u&&t.call(n.childNodes),k=r.props||a,!f&&null!=u)for(k={},l=0;l<n.attributes.length;l++)k[(y=n.attributes[l]).name]=y.value;for(l in k)y=k[l],"children"==l||("dangerouslySetInnerHTML"==l?v=y:"key"===l||l in x||H(n,l,null,y,i));for(l in x)y=x[l],"children"==l?d=y:"dangerouslySetInnerHTML"==l?h=y:"value"==l?m=y:"checked"==l?g=y:"key"===l||f&&"function"!=typeof y||k[l]===y||H(n,l,y,k[l],i);if(h)f||v&&(h.__html===v.__html||h.__html===n.innerHTML)||(n.innerHTML=h.__html),e.__k=[];else if(v&&(n.innerHTML=""),C(n,s(d)?d:[d],e,r,o,i&&"foreignObject"!==w,u,_,u?u[0]:r.__k&&b(r,0),f,c),null!=u)for(l=u.length;l--;)null!=u[l]&&p(u[l]);f||(l="value",void 0!==m&&(m!==n[l]||"progress"===w&&!m||"option"===w&&m!==k[l])&&H(n,l,m,k[l],!1),l="checked",void 0!==g&&g!==n[l]&&H(n,l,g,k[l],!1))}return n}function W(t,e,r){try{"function"==typeof t?t(e):t.current=e}catch(t){n.__e(t,r)}}function M(t,e,r){var o,i;if(n.unmount&&n.unmount(t),(o=t.ref)&&(o.current&&o.current!==t.__e||W(o,null,e)),null!=(o=t.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(t){n.__e(t,e)}o.base=o.__P=null,t.__c=void 0}if(o=t.__k)for(i=0;i<o.length;i++)o[i]&&M(o[i],e,r||"function"!=typeof t.type);r||null==t.__e||p(t.__e),t.__=t.__e=t.__d=void 0}function O(t,n,e){return this.constructor(t,e)}function R(e,r,o){var i,u,_,f;n.__&&n.__(e,r),u=(i="function"==typeof o)?null:o&&o.__k||r.__k,_=[],f=[],T(r,e=(!i&&o||r).__k=v(m,null,[e]),u||a,a,void 0!==r.ownerSVGElement,!i&&o?[o]:u?null:r.firstChild?t.call(r.childNodes):null,_,!i&&o?o:u?u.__e:r.firstChild,i,f),N(_,e,f)}function F(t,n){R(t,n,F)}function j(n,e,r){var o,i,u,_,f=h({},n.props);for(u in n.type&&n.type.defaultProps&&(_=n.type.defaultProps),e)"key"==u?o=e[u]:"ref"==u?i=e[u]:f[u]=void 0===e[u]&&void 0!==_?_[u]:e[u];return arguments.length>2&&(f.children=arguments.length>3?t.call(arguments,2):r),d(n.type,f,o||n.key,i||n.ref,null)}function V(t,n){var e={__c:n="__cC"+f++,__:t,Consumer:function(t,n){return t.children(n)},Provider:function(t){var e,r;return this.getChildContext||(e=[],(r={})[n]=this,this.getChildContext=function(){return r},this.shouldComponentUpdate=function(t){this.props.value!==t.value&&e.some(function(t){t.__e=!0,x(t)})},this.sub=function(t){e.push(t);var n=t.componentWillUnmount;t.componentWillUnmount=function(){e.splice(e.indexOf(t),1),n&&n.call(t)}}),t.children}};return e.Provider.__=e.Consumer.contextType=e}t=c.slice,n={__e:function(t,n,e,r){for(var o,i,u;n=n.__;)if((o=n.__c)&&!o.__)try{if((i=o.constructor)&&null!=i.getDerivedStateFromError&&(o.setState(i.getDerivedStateFromError(t)),u=o.__d),null!=o.componentDidCatch&&(o.componentDidCatch(t,r||{}),u=o.__d),u)return o.__E=o}catch(n){t=n}throw t}},e=0,r=function(t){return null!=t&&null==t.constructor},g.prototype.setState=function(t,n){var e;e=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=h({},this.state),"function"==typeof t&&(t=t(h({},e),this.props)),t&&h(e,t),null!=t&&this.__v&&(n&&this._sb.push(n),x(this))},g.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),x(this))},g.prototype.render=m,o=[],u="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,_=function(t,n){return t.__v.__b-n.__v.__b},w.__r=0,f=0;var I,q,B,Z,z=0,K=[],G=[],J=n,Q=J.__b,X=J.__r,Y=J.diffed,tt=J.__c,nt=J.unmount,et=J.__;function rt(t,n){J.__h&&J.__h(q,t,z||n),z=0;var e=q.__H||(q.__H={__:[],__h:[]});return t>=e.__.length&&e.__.push({__V:G}),e.__[t]}function ot(t){return z=1,it(kt,t)}function it(t,n,e){var r=rt(I++,2);if(r.t=t,!r.__c&&(r.__=[e?e(n):kt(void 0,n),function(t){var n=r.__N?r.__N[0]:r.__[0],e=r.t(n,t);n!==e&&(r.__N=[e,r.__[1]],r.__c.setState({}))}],r.__c=q,!q.u)){var o=function(t,n,e){if(!r.__c.__H)return!0;var o=r.__c.__H.__.filter(function(t){return!!t.__c});if(o.every(function(t){return!t.__N}))return!i||i.call(this,t,n,e);var u=!1;return o.forEach(function(t){if(t.__N){var n=t.__[0];t.__=t.__N,t.__N=void 0,n!==t.__[0]&&(u=!0)}}),!(!u&&r.__c.props===t)&&(!i||i.call(this,t,n,e))};q.u=!0;var i=q.shouldComponentUpdate,u=q.componentWillUpdate;q.componentWillUpdate=function(t,n,e){if(this.__e){var r=i;i=void 0,o(t,n,e),i=r}u&&u.call(this,t,n,e)},q.shouldComponentUpdate=o}return r.__N||r.__}function ut(t,n){var e=rt(I++,3);!J.__s&&bt(e.__H,n)&&(e.__=t,e.i=n,q.__H.__h.push(e))}function _t(t,n){var e=rt(I++,4);!J.__s&&bt(e.__H,n)&&(e.__=t,e.i=n,q.__h.push(e))}function ft(t){return z=5,ct(function(){return{current:t}},[])}function at(t,n,e){z=6,_t(function(){return"function"==typeof t?(t(n()),function(){return t(null)}):t?(t.current=n(),function(){return t.current=null}):void 0},null==e?e:e.concat(t))}function ct(t,n){var e=rt(I++,7);return bt(e.__H,n)?(e.__V=t(),e.i=n,e.__h=t,e.__V):e.__}function lt(t,n){return z=8,ct(function(){return t},n)}function st(t){var n=q.context[t.__c],e=rt(I++,9);return e.c=t,n?(null==e.__&&(e.__=!0,n.sub(q)),n.props.value):t.__}function ht(t,n){J.useDebugValue&&J.useDebugValue(n?n(t):t)}function pt(t){var n=rt(I++,10),e=ot();return n.__=t,q.componentDidCatch||(q.componentDidCatch=function(t,r){n.__&&n.__(t,r),e[1](t)}),[e[0],function(){e[1](void 0)}]}function vt(){var t=rt(I++,11);if(!t.__){for(var n=q.__v;null!==n&&!n.__m&&null!==n.__;)n=n.__;var e=n.__m||(n.__m=[0,0]);t.__="P"+e[0]+"-"+e[1]++}return t.__}function dt(){for(var t;t=K.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(mt),t.__H.__h.forEach(gt),t.__H.__h=[]}catch(n){t.__H.__h=[],J.__e(n,t.__v)}}J.__b=function(t){q=null,Q&&Q(t)},J.__=function(t,n){t&&n.__k&&n.__k.__m&&(t.__m=n.__k.__m),et&&et(t,n)},J.__r=function(t){X&&X(t),I=0;var n=(q=t.__c).__H;n&&(B===q?(n.__h=[],q.__h=[],n.__.forEach(function(t){t.__N&&(t.__=t.__N),t.__V=G,t.__N=t.i=void 0})):(n.__h.forEach(mt),n.__h.forEach(gt),n.__h=[],I=0)),B=q},J.diffed=function(t){Y&&Y(t);var n=t.__c;n&&n.__H&&(n.__H.__h.length&&(1!==K.push(n)&&Z===J.requestAnimationFrame||((Z=J.requestAnimationFrame)||function(t){var n,e=function(){clearTimeout(r),yt&&cancelAnimationFrame(n),setTimeout(t)},r=setTimeout(e,100);yt&&(n=requestAnimationFrame(e))})(dt)),n.__H.__.forEach(function(t){t.i&&(t.__H=t.i),t.__V!==G&&(t.__=t.__V),t.i=void 0,t.__V=G})),B=q=null},J.__c=function(t,n){n.some(function(t){try{t.__h.forEach(mt),t.__h=t.__h.filter(function(t){return!t.__||gt(t)})}catch(e){n.some(function(t){t.__h&&(t.__h=[])}),n=[],J.__e(e,t.__v)}}),tt&&tt(t,n)},J.unmount=function(t){nt&&nt(t);var n,e=t.__c;e&&e.__H&&(e.__H.__.forEach(function(t){try{mt(t)}catch(t){n=t}}),e.__H=void 0,n&&J.__e(n,e.__v))};var yt="function"==typeof requestAnimationFrame;function mt(t){var n=q,e=t.__c;"function"==typeof e&&(t.__c=void 0,e()),q=n}function gt(t){var n=q;t.__c=t.__(),q=n}function bt(t,n){return!t||t.length!==n.length||n.some(function(n,e){return n!==t[e]})}function kt(t,n){return"function"==typeof n?n(t):n}var xt=Symbol.for("preact-signals");function wt(){if(Ht>1)Ht--;else{for(var t,n=!1;void 0!==Pt;){var e=Pt;for(Pt=void 0,$t++;void 0!==e;){var r=e.o;if(e.o=void 0,e.f&=-3,!(8&e.f)&&Wt(e))try{e.c()}catch(e){n||(t=e,n=!0)}e=r}}if($t=0,Ht--,n)throw t}}function Ct(t){if(Ht>0)return t();Ht++;try{return t()}finally{wt()}}var St=void 0;function Ut(t){var n=St;St=void 0;try{return t()}finally{St=n}}var At,Et,Pt=void 0,Ht=0,$t=0,Dt=0;function Tt(t){if(void 0!==St){var n=t.n;if(void 0===n||n.t!==St)return n={i:0,S:t,p:St.s,n:void 0,t:St,e:void 0,x:void 0,r:n},void 0!==St.s&&(St.s.n=n),St.s=n,t.n=n,32&St.f&&t.S(n),n;if(-1===n.i)return n.i=0,void 0!==n.n&&(n.n.p=n.p,void 0!==n.p&&(n.p.n=n.n),n.p=St.s,n.n=void 0,St.s.n=n,St.s=n),n}}function Nt(t){this.v=t,this.i=0,this.n=void 0,this.t=void 0}function Lt(t){return new Nt(t)}function Wt(t){for(var n=t.s;void 0!==n;n=n.n)if(n.S.i!==n.i||!n.S.h()||n.S.i!==n.i)return!0;return!1}function Mt(t){for(var n=t.s;void 0!==n;n=n.n){var e=n.S.n;if(void 0!==e&&(n.r=e),n.S.n=n,n.i=-1,void 0===n.n){t.s=n;break}}}function Ot(t){for(var n=t.s,e=void 0;void 0!==n;){var r=n.p;-1===n.i?(n.S.U(n),void 0!==r&&(r.n=n.n),void 0!==n.n&&(n.n.p=r)):e=n,n.S.n=n.r,void 0!==n.r&&(n.r=void 0),n=r}t.s=e}function Rt(t){Nt.call(this,void 0),this.x=t,this.s=void 0,this.g=Dt-1,this.f=4}function Ft(t){return new Rt(t)}function jt(t){var n=t.u;if(t.u=void 0,"function"==typeof n){Ht++;var e=St;St=void 0;try{n()}catch(n){throw t.f&=-2,t.f|=8,Vt(t),n}finally{St=e,wt()}}}function Vt(t){for(var n=t.s;void 0!==n;n=n.n)n.S.U(n);t.x=void 0,t.s=void 0,jt(t)}function It(t){this.x=t,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32}function qt(t){var n=new It(t);try{n.c()}catch(t){throw n.d(),t}return n.d.bind(n)}function Bt(t,e){n[t]=e.bind(null,n[t]||function(){})}function Zt(t){Et&&Et(),Et=t&&t.S()}function zt(t){var n=this,e=t.data,o=Gt(e);o.value=e;var i=ct(function(){for(var t=n.__v;t=t.__;)if(t.__c){t.__c.__$f|=4;break}return n.__$u.c=function(){var t;r(i.peek())||3!==(null==(t=n.base)?void 0:t.nodeType)?(n.__$f|=1,n.setState({})):n.base.data=i.peek()},Ft(function(){var t=o.value.value;return 0===t?0:!0===t?"":t||""})},[]);return i.value}function Kt(t,n,e,r){var o=n in t&&void 0===t.ownerSVGElement,i=Lt(e);return{o:function(t,n){i.value=t,r=n},d:qt(function(){var e=i.value.value;r[n]!==e&&(r[n]=e,o?t[n]=e:e?t.setAttribute(n,e):t.removeAttribute(n))})}}function Gt(t){return ct(function(){return Lt(t)},[])}function Jt(t){var n=ft(t);return n.current=t,At.__$f|=4,ct(function(){return Ft(function(){return n.current()})},[])}function Qt(t){var n=ft(t);n.current=t,ut(function(){return qt(function(){return n.current()})},[])}Nt.prototype.brand=xt,Nt.prototype.h=function(){return!0},Nt.prototype.S=function(t){this.t!==t&&void 0===t.e&&(t.x=this.t,void 0!==this.t&&(this.t.e=t),this.t=t)},Nt.prototype.U=function(t){if(void 0!==this.t){var n=t.e,e=t.x;void 0!==n&&(n.x=e,t.e=void 0),void 0!==e&&(e.e=n,t.x=void 0),t===this.t&&(this.t=e)}},Nt.prototype.subscribe=function(t){var n=this;return qt(function(){var e=n.value,r=St;St=void 0;try{t(e)}finally{St=r}})},Nt.prototype.valueOf=function(){return this.value},Nt.prototype.toString=function(){return this.value+""},Nt.prototype.toJSON=function(){return this.value},Nt.prototype.peek=function(){var t=St;St=void 0;try{return this.value}finally{St=t}},Object.defineProperty(Nt.prototype,"value",{get:function(){var t=Tt(this);return void 0!==t&&(t.i=this.i),this.v},set:function(t){if(t!==this.v){if($t>100)throw new Error("Cycle detected");this.v=t,this.i++,Dt++,Ht++;try{for(var n=this.t;void 0!==n;n=n.x)n.t.N()}finally{wt()}}}}),(Rt.prototype=new Nt).h=function(){if(this.f&=-3,1&this.f)return!1;if(32==(36&this.f))return!0;if(this.f&=-5,this.g===Dt)return!0;if(this.g=Dt,this.f|=1,this.i>0&&!Wt(this))return this.f&=-2,!0;var t=St;try{Mt(this),St=this;var n=this.x();(16&this.f||this.v!==n||0===this.i)&&(this.v=n,this.f&=-17,this.i++)}catch(t){this.v=t,this.f|=16,this.i++}return St=t,Ot(this),this.f&=-2,!0},Rt.prototype.S=function(t){if(void 0===this.t){this.f|=36;for(var n=this.s;void 0!==n;n=n.n)n.S.S(n)}Nt.prototype.S.call(this,t)},Rt.prototype.U=function(t){if(void 0!==this.t&&(Nt.prototype.U.call(this,t),void 0===this.t)){this.f&=-33;for(var n=this.s;void 0!==n;n=n.n)n.S.U(n)}},Rt.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var t=this.t;void 0!==t;t=t.x)t.t.N()}},Object.defineProperty(Rt.prototype,"value",{get:function(){if(1&this.f)throw new Error("Cycle detected");var t=Tt(this);if(this.h(),void 0!==t&&(t.i=this.i),16&this.f)throw this.v;return this.v}}),It.prototype.c=function(){var t=this.S();try{if(8&this.f)return;if(void 0===this.x)return;var n=this.x();"function"==typeof n&&(this.u=n)}finally{t()}},It.prototype.S=function(){if(1&this.f)throw new Error("Cycle detected");this.f|=1,this.f&=-9,jt(this),Mt(this),Ht++;var t=St;return St=this,function(t){if(St!==this)throw new Error("Out-of-order effect");Ot(this),St=t,this.f&=-2,8&this.f&&Vt(this),wt()}.bind(this,t)},It.prototype.N=function(){2&this.f||(this.f|=2,this.o=Pt,Pt=this)},It.prototype.d=function(){this.f|=8,1&this.f||Vt(this)},zt.displayName="_st",Object.defineProperties(Nt.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:zt},props:{configurable:!0,get:function(){return{data:this}}},__b:{configurable:!0,value:1}}),Bt("__b",function(t,n){if("string"==typeof n.type){var e,r=n.props;for(var o in r)if("children"!==o){var i=r[o];i instanceof Nt&&(e||(n.__np=e={}),e[o]=i,r[o]=i.peek())}}t(n)}),Bt("__r",function(t,n){Zt();var e,r=n.__c;r&&(r.__$f&=-2,void 0===(e=r.__$u)&&(r.__$u=e=function(t){var n;return qt(function(){n=this}),n.c=function(){r.__$f|=1,r.setState({})},n}())),At=r,Zt(e),t(n)}),Bt("__e",function(t,n,e,r){Zt(),At=void 0,t(n,e,r)}),Bt("diffed",function(t,n){var e;if(Zt(),At=void 0,"string"==typeof n.type&&(e=n.__e)){var r=n.__np,o=n.props;if(r){var i=e.U;if(i)for(var u in i){var _=i[u];void 0===_||u in r||(_.d(),i[u]=void 0)}else e.U=i={};for(var f in r){var a=i[f],c=r[f];void 0===a?(a=Kt(e,f,c,o),i[f]=a):a.o(c,o)}}}t(n)}),Bt("unmount",function(t,n){if("string"==typeof n.type){var e=n.__e;if(e){var r=e.U;if(r)for(var o in e.U=void 0,r){var i=r[o];i&&i.d()}}}else{var u=n.__c;if(u){var _=u.__$u;_&&(u.__$u=void 0,_.d())}}t(n)}),Bt("__h",function(t,n,e,r){(r<3||9===r)&&(n.__$f|=2),t(n,e,r)}),g.prototype.shouldComponentUpdate=function(t,n){var e=this.__$u;if(!(e&&void 0!==e.s||4&this.__$f))return!0;if(3&this.__$f)return!0;for(var r in n)return!0;for(var o in t)if("__source"!==o&&t[o]!==this.props[o])return!0;for(var i in this.props)if(!(i in t))return!0;return!1};var Xt=function(t,n,e,r){var o;n[0]=0;for(var i=1;i<n.length;i++){var u=n[i++],_=n[i]?(n[0]|=u?1:2,e[n[i++]]):n[++i];3===u?r[0]=_:4===u?r[1]=Object.assign(r[1]||{},_):5===u?(r[1]=r[1]||{})[n[++i]]=_:6===u?r[1][n[++i]]+=_+"":u?(o=t.apply(_,Xt(t,_,e,["",null])),r.push(o),_[0]?n[0]|=2:(n[i-2]=0,n[i]=o)):r.push(_)}return r},Yt=new Map,tn=/[\s\n\\/='"\0<>]/,nn=/^(xlink|xmlns|xml)([A-Z])/,en=/^accessK|^auto[A-Z]|^ch|^col|cont|cross|dateT|encT|form[A-Z]|frame|hrefL|inputM|maxL|minL|noV|playsI|readO|rowS|spellC|src[A-Z]|tabI|item[A-Z]/,rn=/^ac|^ali|arabic|basel|cap|clipPath$|clipRule$|color|dominant|enable|fill|flood|font|glyph[^R]|horiz|image|letter|lighting|marker[^WUH]|overline|panose|pointe|paint|rendering|shape|stop|strikethrough|stroke|text[^L]|transform|underline|unicode|units|^v[^i]|^w|^xH/,on=/["&<]/;function un(t){if(0===t.length||!1===on.test(t))return t;for(var n=0,e=0,r="",o="";e<t.length;e++){switch(t.charCodeAt(e)){case 34:o="&quot;";break;case 38:o="&amp;";break;case 60:o="&lt;";break;default:continue}e!==n&&(r+=t.slice(n,e)),r+=o,n=e+1}return e!==n&&(r+=t.slice(n,e)),r}var _n={},fn=new Set(["animation-iteration-count","border-image-outset","border-image-slice","border-image-width","box-flex","box-flex-group","box-ordinal-group","column-count","fill-opacity","flex","flex-grow","flex-negative","flex-order","flex-positive","flex-shrink","flood-opacity","font-weight","grid-column","grid-row","line-clamp","line-height","opacity","order","orphans","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-miterlimit","stroke-opacity","stroke-width","tab-size","widows","z-index","zoom"]),an=/[A-Z]/g;function cn(t){var n="";for(var e in t){var r=t[e];if(null!=r&&""!==r){var o="-"==e[0]?e:_n[e]||(_n[e]=e.replace(an,"-$&").toLowerCase()),i=";";"number"!=typeof r||o.startsWith("--")||fn.has(o)||(i="px;"),n=n+o+":"+r+i}}return n||void 0}function ln(t,n,e){if(!t.s){if(e instanceof sn){if(!e.s)return void(e.o=ln.bind(null,t,n));1&n&&(n=e.s),e=e.v}if(e&&e.then)return void e.then(ln.bind(null,t,n),ln.bind(null,t,2));t.s=n,t.v=e;var r=t.o;r&&r(t)}}var sn=function(){function t(){}return t.prototype.then=function(n,e){var r=new t,o=this.s;if(o){var i=1&o?n:e;if(i){try{ln(r,1,i(this.v))}catch(t){ln(r,2,t)}return r}return this}return this.o=function(t){try{var o=t.v;1&t.s?ln(r,1,n?n(o):o):e?ln(r,1,e(o)):ln(r,2,o)}catch(t){ln(r,2,t)}},r},t}();function hn(t){return t instanceof sn&&1&t.s}var pn,vn,dn,yn,mn=function(t,e){try{var r,o=n.__s;n.__s=!0,pn=n.__b,vn=n.diffed,dn=n.__r,yn=n.unmount;var i=v(m,null);return i.__k=[t],Promise.resolve(function(n,o){try{var u=function(){var n=Un(t,e||Cn,!1,void 0,i,!0),o=function(){if(Array.isArray(n)){var t=function(){var t=o.join("");return r=1,t},e=0,o=n,i=function(t,n,e){for(var r;;){var o=t();if(hn(o)&&(o=o.v),!o)return i;if(o.then){r=0;break}var i=e();if(i&&i.then){if(!hn(i)){r=1;break}i=i.s}if(n){var u=n();if(u&&u.then&&!hn(u)){r=2;break}}}var _=new sn,f=ln.bind(null,_,2);return(0===r?o.then(c):1===r?i.then(a):u.then(l)).then(void 0,f),_;function a(r){i=r;do{if(n&&(u=n())&&u.then&&!hn(u))return void u.then(l).then(void 0,f);if(!(o=t())||hn(o)&&!o.v)return void ln(_,1,i);if(o.then)return void o.then(c).then(void 0,f);hn(i=e())&&(i=i.v)}while(!i||!i.then);i.then(a).then(void 0,f)}function c(t){t?(i=e())&&i.then?i.then(a).then(void 0,f):a(i):ln(_,1,i)}function l(){(o=t())?o.then?o.then(c).then(void 0,f):c(o):ln(_,1,i)}}(function(){return!!o.some(function(t){return"function"==typeof t.then})&&e++<25},void 0,function(){return Promise.resolve(Promise.all(o)).then(function(t){o=t.flat()})});return i&&i.then?i.then(t):t()}}();return o&&o.then?o.then(function(t){return r?t:n}):r?o:n}()}catch(n){return o(!0,n)}return u&&u.then?u.then(o.bind(null,!1),o.bind(null,!0)):o(!1,u)}(function(){var n=Un(t,e||Cn,!1,void 0,i,!0),o=function(){if(Array.isArray(n)){var t=function(){var t=o.join("");return r=1,t},e=0,o=n,i=function(t,n,e){for(var r;;){var o=t();if(hn(o)&&(o=o.v),!o)return i;if(o.then){r=0;break}var i=e();if(i&&i.then){if(!hn(i)){r=1;break}i=i.s}if(n){var u=n();if(u&&u.then&&!hn(u)){r=2;break}}}var _=new sn,f=ln.bind(null,_,2);return(0===r?o.then(c):1===r?i.then(a):u.then(l)).then(void 0,f),_;function a(r){i=r;do{if(n&&(u=n())&&u.then&&!hn(u))return void u.then(l).then(void 0,f);if(!(o=t())||hn(o)&&!o.v)return void ln(_,1,i);if(o.then)return void o.then(c).then(void 0,f);hn(i=e())&&(i=i.v)}while(!i||!i.then);i.then(a).then(void 0,f)}function c(t){t?(i=e())&&i.then?i.then(a).then(void 0,f):a(i):ln(_,1,i)}function l(){(o=t())?o.then?o.then(c).then(void 0,f):c(o):ln(_,1,i)}}(function(){return!!o.some(function(t){return"function"==typeof t.then})&&e++<25},void 0,function(){return Promise.resolve(Promise.all(o)).then(function(t){o=t.flat()})});return i&&i.then?i.then(t):t()}}();return o&&o.then?o.then(function(t){return r?t:n}):r?o:n},function(e,r){if(n.__c&&n.__c(t,gn),n.__s=o,gn.length=0,e)throw r;return r}))}catch(t){return Promise.reject(t)}},gn=[],bn=Array.isArray,kn=Object.assign;function xn(t,e){var r=n.__s;n.__s=!0,pn=n.__b,vn=n.diffed,dn=n.__r,yn=n.unmount;var o=v(m,null);o.__k=[t];try{return Un(t,e||Cn,!1,void 0,o,!1)}catch(t){if(t.then)throw new Error('Use "renderToStringAsync" for suspenseful rendering.');throw t}finally{n.__c&&n.__c(t,gn),n.__s=r,gn.length=0}}function wn(){this.__d=!0}var Cn={};function Sn(t,n){var e,r=t.type,o=!0;return t.__c?(o=!1,(e=t.__c).state=e.__s):e=new r(t.props,n),t.__c=e,e.__v=t,e.props=t.props,e.context=n,e.__d=!0,null==e.state&&(e.state=Cn),null==e.__s&&(e.__s=e.state),r.getDerivedStateFromProps?e.state=kn({},e.state,r.getDerivedStateFromProps(e.props,e.state)):o&&e.componentWillMount?(e.componentWillMount(),e.state=e.__s!==e.state?e.__s:e.state):!o&&e.componentWillUpdate&&e.componentWillUpdate(),dn&&dn(t),e.render(e.props,e.state,n)}function Un(t,e,r,o,i,u){if(null==t||!0===t||!1===t||""===t)return"";if("object"!=typeof t)return"function"==typeof t?"":un(t+"");if(bn(t)){var _,f="";i.__k=t;for(var a=0;a<t.length;a++){var c=t[a];if(null!=c&&"boolean"!=typeof c){var l,s=Un(c,e,r,o,i,u);"string"==typeof s?f+=s:(_=_||[],f&&_.push(f),f="",Array.isArray(s)?(l=_).push.apply(l,s):_.push(s))}}return _?(f&&_.push(f),_):f}if(void 0!==t.constructor)return"";t.__=i,pn&&pn(t);var h,p,v,d=t.type,y=t.props,g=e;if("function"==typeof d){if(d===m){if(y.tpl){for(var b="",k=0;k<y.tpl.length;k++)if(b+=y.tpl[k],y.exprs&&k<y.exprs.length){var x=y.exprs[k];if(null==x)continue;"object"!=typeof x||void 0!==x.constructor&&!bn(x)?b+=x:b+=Un(x,e,r,o,t,u)}return b}if(y.UNSTABLE_comment)return"\x3c!--"+un(y.UNSTABLE_comment||"")+"--\x3e";p=y.children}else{if(null!=(h=d.contextType)){var w=e[h.__c];g=w?w.props.value:h.__}if(d.prototype&&"function"==typeof d.prototype.render)p=Sn(t,g),v=t.__c;else{t.__c=v={__v:t,props:y,context:g,setState:wn,forceUpdate:wn,__d:!0,__h:[]};for(var C=0;v.__d&&C++<25;)v.__d=!1,dn&&dn(t),p=d.call(v,y,g);v.__d=!0}if(null!=v.getChildContext&&(e=kn({},e,v.getChildContext())),(d.getDerivedStateFromError||v.componentDidCatch)&&n.errorBoundaries){var S="";p=null!=p&&p.type===m&&null==p.key?p.props.children:p;try{return S=Un(p,e,r,o,t,u)}catch(n){return d.getDerivedStateFromError&&(v.__s=d.getDerivedStateFromError(n)),v.componentDidCatch&&v.componentDidCatch(n,{}),v.__d&&(p=Sn(t,e),null!=(v=t.__c).getChildContext&&(e=kn({},e,v.getChildContext())),S=Un(p=null!=p&&p.type===m&&null==p.key?p.props.children:p,e,r,o,t,u)),S}finally{vn&&vn(t),t.__=null,yn&&yn(t)}}}p=null!=p&&p.type===m&&null==p.key?p.props.children:p;var U=function(){return Un(p,e,r,o,t,u)};try{var A=U();return vn&&vn(t),t.__=null,yn&&yn(t),A}catch(t){if(!u)throw t;if(!t||"function"!=typeof t.then)throw t;return t.then(function(){return function t(){try{return U()}catch(n){if(!n||"function"!=typeof n.then)throw n;return n.then(function(){return U()},function(){return t()})}}()})}}var E,P="<"+d,H="";for(var $ in y){var D=y[$];switch($){case"children":E=D;continue;case"key":case"ref":case"__self":case"__source":continue;case"htmlFor":if("for"in y)continue;$="for";break;case"className":if("class"in y)continue;$="class";break;case"defaultChecked":$="checked";break;case"defaultSelected":$="selected";break;case"defaultValue":case"value":switch($="value",d){case"textarea":E=D;continue;case"select":o=D;continue;case"option":o!=D||"selected"in y||(P+=" selected")}break;case"dangerouslySetInnerHTML":H=D&&D.__html;continue;case"style":"object"==typeof D&&(D=cn(D));break;case"acceptCharset":$="accept-charset";break;case"httpEquiv":$="http-equiv";break;default:if(nn.test($))$=$.replace(nn,"$1:$2").toLowerCase();else{if(tn.test($))continue;"-"!==$[4]&&"draggable"!==$||null==D?r?rn.test($)&&($="panose1"===$?"panose-1":$.replace(/([A-Z])/g,"-$1").toLowerCase()):en.test($)&&($=$.toLowerCase()):D+=""}}null!=D&&!1!==D&&"function"!=typeof D&&(P=!0===D||""===D?P+" "+$:P+" "+$+'="'+un(D+"")+'"')}if(tn.test(d))throw new Error(d+" is not a valid HTML tag name in "+P+">");if(H||("string"==typeof E?H=un(E):null!=E&&!1!==E&&!0!==E&&(H=Un(E,e,"svg"===d||"foreignObject"!==d&&r,o,t,u))),vn&&vn(t),t.__=null,yn&&yn(t),!H&&An.has(d))return P+"/>";var T="</"+d+">",N=P+">";return Array.isArray(H)?[N].concat(H,[T]):"string"!=typeof H?[N,H,T]:N+H+T}var An=new Set(["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"]),En={};function Pn(t,n){for(var e in n)t[e]=n[e];return t}function Hn(t,n,e){var r,o=/(?:\?([^#]*))?(#.*)?$/,i=t.match(o),u={};if(i&&i[1])for(var _=i[1].split("&"),f=0;f<_.length;f++){var a=_[f].split("=");u[decodeURIComponent(a[0])]=decodeURIComponent(a.slice(1).join("="))}t=Tn(t.replace(o,"")),n=Tn(n||"");for(var c=Math.max(t.length,n.length),l=0;l<c;l++)if(n[l]&&":"===n[l].charAt(0)){var s=n[l].replace(/(^:|[+*?]+$)/g,""),h=(n[l].match(/[+*?]+$/)||En)[0]||"",p=~h.indexOf("+"),v=~h.indexOf("*"),d=t[l]||"";if(!d&&!v&&(h.indexOf("?")<0||p)){r=!1;break}if(u[s]=decodeURIComponent(d),p||v){u[s]=t.slice(l).map(decodeURIComponent).join("/");break}}else if(n[l]!==t[l]){r=!1;break}return(!0===e.default||!1!==r)&&u}function $n(t,n){return t.rank<n.rank?1:t.rank>n.rank?-1:t.index-n.index}function Dn(t,n){return t.index=n,t.rank=function(t){return t.props.default?0:Tn(t.props.path).map(Nn).join("")}(t),t.props}function Tn(t){return t.replace(/(^\/+|\/+$)/g,"").split("/")}function Nn(t){return":"==t.charAt(0)?1+"*+?".indexOf(t.charAt(t.length-1))||4:5}var Ln={},Wn=[],Mn=[],On=null,Rn={url:jn()},Fn=V(Rn);function jn(){var t;return""+((t=On&&On.location?On.location:On&&On.getCurrentLocation?On.getCurrentLocation():"undefined"!=typeof location?location:Ln).pathname||"")+(t.search||"")}function Vn(t,n){return void 0===n&&(n=!1),"string"!=typeof t&&t.url&&(n=t.replace,t=t.url),function(t){for(var n=Wn.length;n--;)if(Wn[n].canRoute(t))return!0;return!1}(t)&&function(t,n){void 0===n&&(n="push"),On&&On[n]?On[n](t):"undefined"!=typeof history&&history[n+"State"]&&history[n+"State"](null,null,t)}(t,n?"replace":"push"),In(t)}function In(t){for(var n=!1,e=0;e<Wn.length;e++)Wn[e].routeTo(t)&&(n=!0);return n}function qn(t){if(t&&t.getAttribute){var n=t.getAttribute("href"),e=t.getAttribute("target");if(n&&n.match(/^\//g)&&(!e||e.match(/^_?self$/i)))return Vn(n)}}function Bn(t){return t.stopImmediatePropagation&&t.stopImmediatePropagation(),t.stopPropagation&&t.stopPropagation(),t.preventDefault(),!1}function Zn(t){if(!(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||t.button)){var n=t.target;do{if("a"===n.localName&&n.getAttribute("href")){if(n.hasAttribute("data-native")||n.hasAttribute("native"))return;if(qn(n))return Bn(t)}}while(n=n.parentNode)}}var zn=!1;function Kn(t){t.history&&(On=t.history),this.state={url:t.url||jn()}}Pn(Kn.prototype=new g,{shouldComponentUpdate:function(t){return!0!==t.static||t.url!==this.props.url||t.onChange!==this.props.onChange},canRoute:function(t){var n=A(this.props.children);return void 0!==this.g(n,t)},routeTo:function(t){this.setState({url:t});var n=this.canRoute(t);return this.p||this.forceUpdate(),n},componentWillMount:function(){this.p=!0},componentDidMount:function(){var t=this;zn||(zn=!0,On||addEventListener("popstate",function(){In(jn())}),addEventListener("click",Zn)),Wn.push(this),On&&(this.u=On.listen(function(n){var e=n.location||n;t.routeTo(""+(e.pathname||"")+(e.search||""))})),this.p=!1},componentWillUnmount:function(){"function"==typeof this.u&&this.u(),Wn.splice(Wn.indexOf(this),1)},componentWillUpdate:function(){this.p=!0},componentDidUpdate:function(){this.p=!1},g:function(t,n){t=t.filter(Dn).sort($n);for(var e=0;e<t.length;e++){var r=t[e],o=Hn(n,r.props.path,r.props);if(o)return[r,o]}},render:function(t,n){var e,r,o=t.onChange,i=n.url,u=this.c,_=this.g(A(t.children),i);if(_&&(r=j(_[0],Pn(Pn({url:i,matches:e=_[1]},e),{key:void 0,ref:void 0}))),i!==(u&&u.url)){Pn(Rn,u=this.c={url:i,previous:u&&u.url,current:r,path:r?r.props.path:null,matches:e}),u.router=this,u.active=r?[r]:[];for(var f=Mn.length;f--;)Mn[f]({});"function"==typeof o&&o(u)}return v(Fn.Provider,{value:u},r)}});var Gn={Link:function(t){return v("a",Pn({onClick:Zn},t))},Route:function(t){return v(t.component,t)},Router:Kn,default:Kn,exec:Hn,getCurrentUrl:jn,route:Vn,useRouter:function(){var t=st(Fn);if(t===Rn){var n=ot()[1];ut(function(){return Mn.push(n),function(){return Mn.splice(Mn.indexOf(n),1)}},[])}return[t,Vn]}},Jn=function(t){var n=Yt.get(this);return n||(n=new Map,Yt.set(this,n)),(n=Xt(this,n.get(t)||(n.set(t,n=function(t){for(var n,e,r=1,o="",i="",u=[0],_=function(t){1===r&&(t||(o=o.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?u.push(0,t,o):3===r&&(t||o)?(u.push(3,t,o),r=2):2===r&&"..."===o&&t?u.push(4,t,0):2===r&&o&&!t?u.push(5,0,!0,o):r>=5&&((o||!t&&5===r)&&(u.push(r,0,o,e),r=6),t&&(u.push(r,t,0,e),r=6)),o=""},f=0;f<t.length;f++){f&&(1===r&&_(),_(f));for(var a=0;a<t[f].length;a++)n=t[f][a],1===r?"<"===n?(_(),u=[u],r=3):o+=n:4===r?"--"===o&&">"===n?(r=1,o=""):o=n+o[0]:i?n===i?i="":o+=n:'"'===n||"'"===n?i=n:">"===n?(_(),r=1):r&&("="===n?(r=5,e=o,o=""):"/"===n&&(r<5||">"===t[f][a+1])?(_(),3===r&&(u=u[0]),r=u,(u=u[0]).push(2,0,r),r=0):" "===n||"\t"===n||"\n"===n||"\r"===n?(_(),r=2):o+=n),3===r&&"!--"===o&&(r=4,u=u[0])}return _(),u}(t)),n),arguments,[])).length>1?n:n[0]}.bind(v),Qn=Gn;export{Jn as html,v as h,v as createElement,j as cloneElement,g as Component,V as createContext,y as createRef,R as render,F as hydrate,A as toChildArray,ot as useState,it as useReducer,ut as useEffect,_t as useLayoutEffect,ft as useRef,at as useImperativeHandle,ct as useMemo,lt as useCallback,st as useContext,ht as useDebugValue,pt as useErrorBoundary,vt as useId,Ut as untracked,Gt as useSignal,Jt as useComputed,Qt as useSignalEffect,Qn as router,xn as renderToString,mn as renderToStringAsync,Nt as Signal,Ct as batch,Ft as computed,qt as effect,Lt as signal};
//# sourceMappingURL=standalone.module.js.map
