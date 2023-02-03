(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();function Ln(){}function Jc(i){return i()}function sl(){return Object.create(null)}function Os(i){i.forEach(Jc)}function Ha(i){return typeof i=="function"}function Ns(i,t){return i!=i?t==t:i!==t||i&&typeof i=="object"||typeof i=="function"}function qh(i){return Object.keys(i).length===0}function jh(i){return i??""}function st(i,t){i.appendChild(t)}function Kr(i,t,e){i.insertBefore(t,e||null)}function ks(i){i.parentNode&&i.parentNode.removeChild(i)}function Tt(i){return document.createElement(i)}function Ae(i){return document.createTextNode(i)}function Gt(){return Ae(" ")}function qt(i,t,e,n){return i.addEventListener(t,e,n),()=>i.removeEventListener(t,e,n)}function et(i,t,e){e==null?i.removeAttribute(t):i.getAttribute(t)!==e&&i.setAttribute(t,e)}function Jn(i){return i===""?null:+i}function Xh(i){return Array.from(i.childNodes)}function jt(i,t){i.value=t??""}let Ts;function Cs(i){Ts=i}function Kc(){if(!Ts)throw new Error("Function called outside component initialization");return Ts}function Yh(i){Kc().$$.on_mount.push(i)}function qa(i){Kc().$$.on_destroy.push(i)}const Xi=[],re=[],kr=[],Ca=[],Zh=Promise.resolve();let Ta=!1;function Jh(){Ta||(Ta=!0,Zh.then(Qc))}function Aa(i){kr.push(i)}function fe(i){Ca.push(i)}const uo=new Set;let Mi=0;function Qc(){if(Mi!==0)return;const i=Ts;do{try{for(;Mi<Xi.length;){const t=Xi[Mi];Mi++,Cs(t),Kh(t.$$)}}catch(t){throw Xi.length=0,Mi=0,t}for(Cs(null),Xi.length=0,Mi=0;re.length;)re.pop()();for(let t=0;t<kr.length;t+=1){const e=kr[t];uo.has(e)||(uo.add(e),e())}kr.length=0}while(Xi.length);for(;Ca.length;)Ca.pop()();Ta=!1,uo.clear(),Cs(i)}function Kh(i){if(i.fragment!==null){i.update(),Os(i.before_update);const t=i.dirty;i.dirty=[-1],i.fragment&&i.fragment.p(i.ctx,t),i.after_update.forEach(Aa)}}const Vr=new Set;let Qh;function As(i,t){i&&i.i&&(Vr.delete(i),i.i(t))}function Xr(i,t,e,n){if(i&&i.o){if(Vr.has(i))return;Vr.add(i),Qh.c.push(()=>{Vr.delete(i),n&&(e&&i.d(1),n())}),i.o(t)}else n&&n()}function de(i,t,e){const n=i.$$.props[t];n!==void 0&&(i.$$.bound[n]=e,e(i.$$.ctx[n]))}function Yr(i){i&&i.c()}function Es(i,t,e,n){const{fragment:s,after_update:r}=i.$$;s&&s.m(t,e),n||Aa(()=>{const o=i.$$.on_mount.map(Jc).filter(Ha);i.$$.on_destroy?i.$$.on_destroy.push(...o):Os(o),i.$$.on_mount=[]}),r.forEach(Aa)}function Ps(i,t){const e=i.$$;e.fragment!==null&&(Os(e.on_destroy),e.fragment&&e.fragment.d(t),e.on_destroy=e.fragment=null,e.ctx=[])}function $h(i,t){i.$$.dirty[0]===-1&&(Xi.push(i),Jh(),i.$$.dirty.fill(0)),i.$$.dirty[t/31|0]|=1<<t%31}function Vs(i,t,e,n,s,r,o,a=[-1]){const c=Ts;Cs(i);const l=i.$$={fragment:null,ctx:[],props:r,update:Ln,not_equal:s,bound:sl(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(c?c.$$.context:[])),callbacks:sl(),dirty:a,skip_bound:!1,root:t.target||c.$$.root};o&&o(l.root);let h=!1;if(l.ctx=e?e(i,t.props||{},(f,u,...d)=>{const g=d.length?d[0]:u;return l.ctx&&s(l.ctx[f],l.ctx[f]=g)&&(!l.skip_bound&&l.bound[f]&&l.bound[f](g),h&&$h(i,f)),u}):[],l.update(),h=!0,Os(l.before_update),l.fragment=n?n(l.ctx):!1,t.target){if(t.hydrate){const f=Xh(t.target);l.fragment&&l.fragment.l(f),f.forEach(ks)}else l.fragment&&l.fragment.c();t.intro&&As(i.$$.fragment),Es(i,t.target,t.anchor,t.customElement),Qc()}Cs(c)}class Gs{$destroy(){Ps(this,1),this.$destroy=Ln}$on(t,e){if(!Ha(e))return Ln;const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const s=n.indexOf(e);s!==-1&&n.splice(s,1)}}$set(t){this.$$set&&!qh(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ja="149",fo={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},tu=0,rl=1,eu=2,$c=1,th=2,Ss=3,Xn=0,Xe=1,Wn=2,qn=0,Qi=1,ol=2,al=3,ll=4,nu=5,Yi=100,iu=101,su=102,cl=103,hl=104,ru=200,ou=201,au=202,lu=203,eh=204,nh=205,cu=206,hu=207,uu=208,fu=209,du=210,pu=0,mu=1,gu=2,Ea=3,_u=4,xu=5,yu=6,vu=7,ih=0,Mu=1,bu=2,Rn=0,Su=1,wu=2,Cu=3,Tu=4,Au=5,sh=300,ts=301,es=302,Pa=303,Da=304,Qr=306,Fa=1e3,ln=1001,La=1002,Ie=1003,ul=1004,po=1005,$e=1006,Eu=1007,Ds=1008,di=1009,Pu=1010,Du=1011,rh=1012,Fu=1013,oi=1014,ai=1015,Fs=1016,Lu=1017,Ru=1018,$i=1020,Iu=1021,cn=1023,zu=1024,Bu=1025,li=1026,ns=1027,Uu=1028,Ou=1029,Nu=1030,ku=1031,Vu=1033,mo=33776,go=33777,_o=33778,xo=33779,fl=35840,dl=35841,pl=35842,ml=35843,Gu=36196,gl=37492,_l=37496,xl=37808,yl=37809,vl=37810,Ml=37811,bl=37812,Sl=37813,wl=37814,Cl=37815,Tl=37816,Al=37817,El=37818,Pl=37819,Dl=37820,Fl=37821,yo=36492,Wu=36283,Ll=36284,Rl=36285,Il=36286,pi=3e3,$t=3001,Hu=3200,qu=3201,ju=0,Xu=1,gn="srgb",Ls="srgb-linear",vo=7680,Yu=519,zl=35044,Bl="300 es",Ra=1035;let xi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}};const Ce=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Mo=Math.PI/180,Ul=180/Math.PI;function Ws(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ce[i&255]+Ce[i>>8&255]+Ce[i>>16&255]+Ce[i>>24&255]+"-"+Ce[t&255]+Ce[t>>8&255]+"-"+Ce[t>>16&15|64]+Ce[t>>24&255]+"-"+Ce[e&63|128]+Ce[e>>8&255]+"-"+Ce[e>>16&255]+Ce[e>>24&255]+Ce[n&255]+Ce[n>>8&255]+Ce[n>>16&255]+Ce[n>>24&255]).toLowerCase()}function We(i,t,e){return Math.max(t,Math.min(e,i))}function Zu(i,t){return(i%t+t)%t}function bo(i,t,e){return(1-e)*i+e*t}function Ol(i){return(i&i-1)===0&&i!==0}function Ia(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Qs(i,t){switch(t.constructor){case Float32Array:return i;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ue(i,t){switch(t.constructor){case Float32Array:return i;case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}let Wt=class oh{constructor(t=0,e=0){oh.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},hn=class ah{constructor(){ah.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(t,e,n,s,r,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],f=n[7],u=n[2],d=n[5],g=n[8],p=s[0],m=s[3],_=s[6],S=s[1],x=s[4],M=s[7],y=s[2],b=s[5],A=s[8];return r[0]=o*p+a*S+c*y,r[3]=o*m+a*x+c*b,r[6]=o*_+a*M+c*A,r[1]=l*p+h*S+f*y,r[4]=l*m+h*x+f*b,r[7]=l*_+h*M+f*A,r[2]=u*p+d*S+g*y,r[5]=u*m+d*x+g*b,r[8]=u*_+d*M+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],f=h*o-a*l,u=a*c-h*r,d=l*r-o*c,g=e*f+n*u+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/g;return t[0]=f*p,t[1]=(s*l-h*n)*p,t[2]=(a*n-s*o)*p,t[3]=u*p,t[4]=(h*e-s*c)*p,t[5]=(s*r-a*e)*p,t[6]=d*p,t[7]=(n*c-l*e)*p,t[8]=(o*e-n*r)*p,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(So.makeScale(t,e)),this}rotate(t){return this.premultiply(So.makeRotation(-t)),this}translate(t,e){return this.premultiply(So.makeTranslation(t,e)),this}makeTranslation(t,e){return this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};const So=new hn;function lh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Zr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ci(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Gr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const wo={[gn]:{[Ls]:ci},[Ls]:{[gn]:Gr}},Fe={legacyMode:!0,get workingColorSpace(){return Ls},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,t,e){if(this.legacyMode||t===e||!t||!e)return i;if(wo[t]&&wo[t][e]!==void 0){const n=wo[t][e];return i.r=n(i.r),i.g=n(i.g),i.b=n(i.b),i}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)}},ch={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ge={r:0,g:0,b:0},en={h:0,s:0,l:0},$s={h:0,s:0,l:0};function Co(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}function tr(i,t){return t.r=i.r,t.g=i.g,t.b=i.b,t}let te=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,e===void 0&&n===void 0?this.set(t):this.setRGB(t,e,n)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=gn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Fe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Fe.workingColorSpace){return this.r=t,this.g=e,this.b=n,Fe.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Fe.workingColorSpace){if(t=Zu(t,1),e=We(e,0,1),n=We(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Co(o,r,t+1/3),this.g=Co(o,r,t),this.b=Co(o,r,t-1/3)}return Fe.toWorkingColorSpace(this,s),this}setStyle(t,e=gn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,Fe.toWorkingColorSpace(this,e),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,Fe.toWorkingColorSpace(this,e),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const c=parseFloat(r[1])/360,l=parseFloat(r[2])/100,h=parseFloat(r[3])/100;return n(r[4]),this.setHSL(c,l,h,e)}break}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,Fe.toWorkingColorSpace(this,e),this;if(o===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,Fe.toWorkingColorSpace(this,e),this}return t&&t.length>0?this.setColorName(t,e):this}setColorName(t,e=gn){const n=ch[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ci(t.r),this.g=ci(t.g),this.b=ci(t.b),this}copyLinearToSRGB(t){return this.r=Gr(t.r),this.g=Gr(t.g),this.b=Gr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=gn){return Fe.fromWorkingColorSpace(tr(this,ge),t),We(ge.r*255,0,255)<<16^We(ge.g*255,0,255)<<8^We(ge.b*255,0,255)<<0}getHexString(t=gn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Fe.workingColorSpace){Fe.fromWorkingColorSpace(tr(this,ge),e);const n=ge.r,s=ge.g,r=ge.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const f=o-a;switch(l=h<=.5?f/(o+a):f/(2-o-a),o){case n:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-n)/f+2;break;case r:c=(n-s)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Fe.workingColorSpace){return Fe.fromWorkingColorSpace(tr(this,ge),e),t.r=ge.r,t.g=ge.g,t.b=ge.b,t}getStyle(t=gn){return Fe.fromWorkingColorSpace(tr(this,ge),t),t!==gn?`color(${t} ${ge.r} ${ge.g} ${ge.b})`:`rgb(${ge.r*255|0},${ge.g*255|0},${ge.b*255|0})`}offsetHSL(t,e,n){return this.getHSL(en),en.h+=t,en.s+=e,en.l+=n,this.setHSL(en.h,en.s,en.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(en),t.getHSL($s);const n=bo(en.h,$s.h,e),s=bo(en.s,$s.s,e),r=bo(en.l,$s.l,e);return this.setHSL(n,s,r),this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};te.NAMES=ch;let bi,hh=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{bi===void 0&&(bi=Zr("canvas")),bi.width=t.width,bi.height=t.height;const n=bi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=bi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Zr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ci(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ci(e[n]/255)*255):e[n]=ci(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},uh=class{constructor(t=null){this.isSource=!0,this.uuid=Ws(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(To(s[o].image)):r.push(To(s[o]))}else r=To(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function To(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?hh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ju=0,In=class Wr extends xi{constructor(t=Wr.DEFAULT_IMAGE,e=Wr.DEFAULT_MAPPING,n=ln,s=ln,r=$e,o=Ds,a=cn,c=di,l=Wr.DEFAULT_ANISOTROPY,h=pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ju++}),this.uuid=Ws(),this.name="",this.source=new uh(t),this.mipmaps=[],this.mapping=e,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Wt(0,0),this.repeat=new Wt(1,1),this.center=new Wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new hn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==sh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Fa:t.x=t.x-Math.floor(t.x);break;case ln:t.x=t.x<0?0:1;break;case La:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Fa:t.y=t.y-Math.floor(t.y);break;case ln:t.y=t.y<0?0:1;break;case La:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}};In.DEFAULT_IMAGE=null;In.DEFAULT_MAPPING=sh;In.DEFAULT_ANISOTROPY=1;class ae{constructor(t=0,e=0,n=0,s=1){ae.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],h=c[4],f=c[8],u=c[1],d=c[5],g=c[9],p=c[2],m=c[6],_=c[10];if(Math.abs(h-u)<.01&&Math.abs(f-p)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+p)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+_-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(l+1)/2,M=(d+1)/2,y=(_+1)/2,b=(h+u)/4,A=(f+p)/4,v=(g+m)/4;return x>M&&x>y?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=b/n,r=A/n):M>y?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=b/s,r=v/s):y<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(y),n=A/r,s=v/r),this.set(n,s,r,e),this}let S=Math.sqrt((m-g)*(m-g)+(f-p)*(f-p)+(u-h)*(u-h));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(f-p)/S,this.z=(u-h)/S,this.w=Math.acos((l+d+_-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class mi extends xi{constructor(t=1,e=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ae(0,0,t,e),this.scissorTest=!1,this.viewport=new ae(0,0,t,e);const s={width:t,height:e,depth:1};this.texture=new In(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:$e,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new uh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class fh extends In{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ie,this.minFilter=Ie,this.wrapR=ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ku extends In{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ie,this.minFilter=Ie,this.wrapR=ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}let ss=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],f=n[s+3];const u=r[o+0],d=r[o+1],g=r[o+2],p=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=f;return}if(a===1){t[e+0]=u,t[e+1]=d,t[e+2]=g,t[e+3]=p;return}if(f!==p||c!==u||l!==d||h!==g){let m=1-a;const _=c*u+l*d+h*g+f*p,S=_>=0?1:-1,x=1-_*_;if(x>Number.EPSILON){const y=Math.sqrt(x),b=Math.atan2(y,_*S);m=Math.sin(m*b)/y,a=Math.sin(a*b)/y}const M=a*S;if(c=c*m+u*M,l=l*m+d*M,h=h*m+g*M,f=f*m+p*M,m===1-a){const y=1/Math.sqrt(c*c+l*l+h*h+f*f);c*=y,l*=y,h*=y,f*=y}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],f=r[o],u=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+h*f+c*d-l*u,t[e+1]=c*g+h*u+l*f-a*d,t[e+2]=l*g+h*d+a*u-c*f,t[e+3]=h*g-a*f-c*u-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),f=a(r/2),u=c(n/2),d=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=u*h*f+l*d*g,this._y=l*d*f-u*h*g,this._z=l*h*g+u*d*f,this._w=l*h*f-u*d*g;break;case"YXZ":this._x=u*h*f+l*d*g,this._y=l*d*f-u*h*g,this._z=l*h*g-u*d*f,this._w=l*h*f+u*d*g;break;case"ZXY":this._x=u*h*f-l*d*g,this._y=l*d*f+u*h*g,this._z=l*h*g+u*d*f,this._w=l*h*f-u*d*g;break;case"ZYX":this._x=u*h*f-l*d*g,this._y=l*d*f+u*h*g,this._z=l*h*g-u*d*f,this._w=l*h*f+u*d*g;break;case"YZX":this._x=u*h*f+l*d*g,this._y=l*d*f+u*h*g,this._z=l*h*g-u*d*f,this._w=l*h*f-u*d*g;break;case"XZY":this._x=u*h*f-l*d*g,this._y=l*d*f-u*h*g,this._z=l*h*g+u*d*f,this._w=l*h*f+u*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],f=e[10],u=n+a+f;if(u>0){const d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(n>a&&n>f){const d=2*Math.sqrt(1+n-a-f);this._w=(h-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>f){const d=2*Math.sqrt(1+a-n-f);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+h)/d}else{const d=2*Math.sqrt(1+f-n-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(We(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),f=Math.sin((1-e)*h)/l,u=Math.sin(e*h)/l;return this._w=o*f+this._w*u,this._x=n*f+this._x*u,this._y=s*f+this._y*u,this._z=r*f+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(s),n*Math.sin(r),n*Math.cos(r),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class dh{constructor(t=0,e=0,n=0){dh.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Nl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Nl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=c*e+o*s-a*n,h=c*n+a*e-r*s,f=c*s+r*n-o*e,u=-r*e-o*n-a*s;return this.x=l*c+u*-r+h*-a-f*-o,this.y=h*c+u*-o+f*-r-l*-a,this.z=f*c+u*-a+l*-o-h*-r,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ao.copy(this).projectOnVector(t),this.sub(Ao)}reflect(t){return this.sub(Ao.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(We(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};const Ao=new U,Nl=new ss;let Hs=class{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){let e=1/0,n=1/0,s=1/0,r=-1/0,o=-1/0,a=-1/0;for(let c=0,l=t.length;c<l;c+=3){const h=t[c],f=t[c+1],u=t[c+2];h<e&&(e=h),f<n&&(n=f),u<s&&(s=u),h>r&&(r=h),f>o&&(o=f),u>a&&(a=u)}return this.min.set(e,n,s),this.max.set(r,o,a),this}setFromBufferAttribute(t){let e=1/0,n=1/0,s=1/0,r=-1/0,o=-1/0,a=-1/0;for(let c=0,l=t.count;c<l;c++){const h=t.getX(c),f=t.getY(c),u=t.getZ(c);h<e&&(e=h),f<n&&(n=f),u<s&&(s=u),h>r&&(r=h),f>o&&(o=f),u>a&&(a=u)}return this.min.set(e,n,s),this.max.set(r,o,a),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Kn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0)if(e&&n.attributes!=null&&n.attributes.position!==void 0){const r=n.attributes.position;for(let o=0,a=r.count;o<a;o++)Kn.fromBufferAttribute(r,o).applyMatrix4(t.matrixWorld),this.expandByPoint(Kn)}else n.boundingBox===null&&n.computeBoundingBox(),Eo.copy(n.boundingBox),Eo.applyMatrix4(t.matrixWorld),this.union(Eo);const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Kn),Kn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ls),er.subVectors(this.max,ls),Si.subVectors(t.a,ls),wi.subVectors(t.b,ls),Ci.subVectors(t.c,ls),zn.subVectors(wi,Si),Bn.subVectors(Ci,wi),Qn.subVectors(Si,Ci);let e=[0,-zn.z,zn.y,0,-Bn.z,Bn.y,0,-Qn.z,Qn.y,zn.z,0,-zn.x,Bn.z,0,-Bn.x,Qn.z,0,-Qn.x,-zn.y,zn.x,0,-Bn.y,Bn.x,0,-Qn.y,Qn.x,0];return!Po(e,Si,wi,Ci,er)||(e=[1,0,0,0,1,0,0,0,1],!Po(e,Si,wi,Ci,er))?!1:(nr.crossVectors(zn,Bn),e=[nr.x,nr.y,nr.z],Po(e,Si,wi,Ci,er))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return Kn.copy(t).clamp(this.min,this.max).sub(t).length()}getBoundingSphere(t){return this.getCenter(t.center),t.radius=this.getSize(Kn).length()*.5,t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(vn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}};const vn=[new U,new U,new U,new U,new U,new U,new U,new U],Kn=new U,Eo=new Hs,Si=new U,wi=new U,Ci=new U,zn=new U,Bn=new U,Qn=new U,ls=new U,er=new U,nr=new U,$n=new U;function Po(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){$n.fromArray(i,r);const a=s.x*Math.abs($n.x)+s.y*Math.abs($n.y)+s.z*Math.abs($n.z),c=t.dot($n),l=e.dot($n),h=n.dot($n);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Qu=new Hs,cs=new U,Do=new U;let Xa=class{constructor(t=new U,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Qu.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;cs.subVectors(t,this.center);const e=cs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(cs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Do.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(cs.copy(t.center).add(Do)),this.expandByPoint(cs.copy(t.center).sub(Do))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}};const Mn=new U,Fo=new U,ir=new U,Un=new U,Lo=new U,sr=new U,Ro=new U;let $u=class{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.direction).multiplyScalar(t).add(this.origin)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Mn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Mn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Mn.copy(this.direction).multiplyScalar(e).add(this.origin),Mn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Fo.copy(t).add(e).multiplyScalar(.5),ir.copy(e).sub(t).normalize(),Un.copy(this.origin).sub(Fo);const r=t.distanceTo(e)*.5,o=-this.direction.dot(ir),a=Un.dot(this.direction),c=-Un.dot(ir),l=Un.lengthSq(),h=Math.abs(1-o*o);let f,u,d,g;if(h>0)if(f=o*c-a,u=o*a-c,g=r*h,f>=0)if(u>=-g)if(u<=g){const p=1/h;f*=p,u*=p,d=f*(f+o*u+2*a)+u*(o*f+u+2*c)+l}else u=r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*c)+l;else u=-r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*c)+l;else u<=-g?(f=Math.max(0,-(-o*r+a)),u=f>0?-r:Math.min(Math.max(-r,-c),r),d=-f*f+u*(u+2*c)+l):u<=g?(f=0,u=Math.min(Math.max(-r,-c),r),d=u*(u+2*c)+l):(f=Math.max(0,-(o*r+a)),u=f>0?r:Math.min(Math.max(-r,-c),r),d=-f*f+u*(u+2*c)+l);else u=o>0?-r:r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*c)+l;return n&&n.copy(this.direction).multiplyScalar(f).add(this.origin),s&&s.copy(ir).multiplyScalar(u).add(Fo),d}intersectSphere(t,e){Mn.subVectors(t.center,this.origin);const n=Mn.dot(this.direction),s=Mn.dot(Mn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return a<0&&c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return l>=0?(n=(t.min.x-u.x)*l,s=(t.max.x-u.x)*l):(n=(t.max.x-u.x)*l,s=(t.min.x-u.x)*l),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(t.min.z-u.z)*f,c=(t.max.z-u.z)*f):(a=(t.max.z-u.z)*f,c=(t.min.z-u.z)*f),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Mn)!==null}intersectTriangle(t,e,n,s,r){Lo.subVectors(e,t),sr.subVectors(n,t),Ro.crossVectors(Lo,sr);let o=this.direction.dot(Ro),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Un.subVectors(this.origin,t);const c=a*this.direction.dot(sr.crossVectors(Un,sr));if(c<0)return null;const l=a*this.direction.dot(Lo.cross(Un));if(l<0||c+l>o)return null;const h=-a*Un.dot(Ro);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Se=class za{constructor(){za.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(t,e,n,s,r,o,a,c,l,h,f,u,d,g,p,m){const _=this.elements;return _[0]=t,_[4]=e,_[8]=n,_[12]=s,_[1]=r,_[5]=o,_[9]=a,_[13]=c,_[2]=l,_[6]=h,_[10]=f,_[14]=u,_[3]=d,_[7]=g,_[11]=p,_[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new za().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Ti.setFromMatrixColumn(t,0).length(),r=1/Ti.setFromMatrixColumn(t,1).length(),o=1/Ti.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){const u=o*h,d=o*f,g=a*h,p=a*f;e[0]=c*h,e[4]=-c*f,e[8]=l,e[1]=d+g*l,e[5]=u-p*l,e[9]=-a*c,e[2]=p-u*l,e[6]=g+d*l,e[10]=o*c}else if(t.order==="YXZ"){const u=c*h,d=c*f,g=l*h,p=l*f;e[0]=u+p*a,e[4]=g*a-d,e[8]=o*l,e[1]=o*f,e[5]=o*h,e[9]=-a,e[2]=d*a-g,e[6]=p+u*a,e[10]=o*c}else if(t.order==="ZXY"){const u=c*h,d=c*f,g=l*h,p=l*f;e[0]=u-p*a,e[4]=-o*f,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*h,e[9]=p-u*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const u=o*h,d=o*f,g=a*h,p=a*f;e[0]=c*h,e[4]=g*l-d,e[8]=u*l+p,e[1]=c*f,e[5]=p*l+u,e[9]=d*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const u=o*c,d=o*l,g=a*c,p=a*l;e[0]=c*h,e[4]=p-u*f,e[8]=g*f+d,e[1]=f,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=d*f+g,e[10]=u-p*f}else if(t.order==="XZY"){const u=o*c,d=o*l,g=a*c,p=a*l;e[0]=c*h,e[4]=-f,e[8]=l*h,e[1]=u*f+p,e[5]=o*h,e[9]=d*f-g,e[2]=g*f-d,e[6]=a*h,e[10]=p*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(tf,t,ef)}lookAt(t,e,n){const s=this.elements;return Oe.subVectors(t,e),Oe.lengthSq()===0&&(Oe.z=1),Oe.normalize(),On.crossVectors(n,Oe),On.lengthSq()===0&&(Math.abs(n.z)===1?Oe.x+=1e-4:Oe.z+=1e-4,Oe.normalize(),On.crossVectors(n,Oe)),On.normalize(),rr.crossVectors(Oe,On),s[0]=On.x,s[4]=rr.x,s[8]=Oe.x,s[1]=On.y,s[5]=rr.y,s[9]=Oe.y,s[2]=On.z,s[6]=rr.z,s[10]=Oe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],f=n[5],u=n[9],d=n[13],g=n[2],p=n[6],m=n[10],_=n[14],S=n[3],x=n[7],M=n[11],y=n[15],b=s[0],A=s[4],v=s[8],T=s[12],D=s[1],R=s[5],q=s[9],P=s[13],F=s[2],k=s[6],K=s[10],tt=s[14],G=s[3],rt=s[7],it=s[11],H=s[15];return r[0]=o*b+a*D+c*F+l*G,r[4]=o*A+a*R+c*k+l*rt,r[8]=o*v+a*q+c*K+l*it,r[12]=o*T+a*P+c*tt+l*H,r[1]=h*b+f*D+u*F+d*G,r[5]=h*A+f*R+u*k+d*rt,r[9]=h*v+f*q+u*K+d*it,r[13]=h*T+f*P+u*tt+d*H,r[2]=g*b+p*D+m*F+_*G,r[6]=g*A+p*R+m*k+_*rt,r[10]=g*v+p*q+m*K+_*it,r[14]=g*T+p*P+m*tt+_*H,r[3]=S*b+x*D+M*F+y*G,r[7]=S*A+x*R+M*k+y*rt,r[11]=S*v+x*q+M*K+y*it,r[15]=S*T+x*P+M*tt+y*H,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],f=t[6],u=t[10],d=t[14],g=t[3],p=t[7],m=t[11],_=t[15];return g*(+r*c*f-s*l*f-r*a*u+n*l*u+s*a*d-n*c*d)+p*(+e*c*d-e*l*u+r*o*u-s*o*d+s*l*h-r*c*h)+m*(+e*l*f-e*a*d-r*o*f+n*o*d+r*a*h-n*l*h)+_*(-s*a*h-e*c*f+e*a*u+s*o*f-n*o*u+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],f=t[9],u=t[10],d=t[11],g=t[12],p=t[13],m=t[14],_=t[15],S=f*m*l-p*u*l+p*c*d-a*m*d-f*c*_+a*u*_,x=g*u*l-h*m*l-g*c*d+o*m*d+h*c*_-o*u*_,M=h*p*l-g*f*l+g*a*d-o*p*d-h*a*_+o*f*_,y=g*f*c-h*p*c-g*a*u+o*p*u+h*a*m-o*f*m,b=e*S+n*x+s*M+r*y;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/b;return t[0]=S*A,t[1]=(p*u*r-f*m*r-p*s*d+n*m*d+f*s*_-n*u*_)*A,t[2]=(a*m*r-p*c*r+p*s*l-n*m*l-a*s*_+n*c*_)*A,t[3]=(f*c*r-a*u*r-f*s*l+n*u*l+a*s*d-n*c*d)*A,t[4]=x*A,t[5]=(h*m*r-g*u*r+g*s*d-e*m*d-h*s*_+e*u*_)*A,t[6]=(g*c*r-o*m*r-g*s*l+e*m*l+o*s*_-e*c*_)*A,t[7]=(o*u*r-h*c*r+h*s*l-e*u*l-o*s*d+e*c*d)*A,t[8]=M*A,t[9]=(g*f*r-h*p*r-g*n*d+e*p*d+h*n*_-e*f*_)*A,t[10]=(o*p*r-g*a*r+g*n*l-e*p*l-o*n*_+e*a*_)*A,t[11]=(h*a*r-o*f*r-h*n*l+e*f*l+o*n*d-e*a*d)*A,t[12]=y*A,t[13]=(h*p*s-g*f*s+g*n*u-e*p*u-h*n*m+e*f*m)*A,t[14]=(g*a*s-o*p*s-g*n*c+e*p*c+o*n*m-e*a*m)*A,t[15]=(o*f*s-h*a*s+h*n*c-e*f*c-o*n*u+e*a*u)*A,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,f=a+a,u=r*l,d=r*h,g=r*f,p=o*h,m=o*f,_=a*f,S=c*l,x=c*h,M=c*f,y=n.x,b=n.y,A=n.z;return s[0]=(1-(p+_))*y,s[1]=(d+M)*y,s[2]=(g-x)*y,s[3]=0,s[4]=(d-M)*b,s[5]=(1-(u+_))*b,s[6]=(m+S)*b,s[7]=0,s[8]=(g+x)*A,s[9]=(m-S)*A,s[10]=(1-(u+p))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Ti.set(s[0],s[1],s[2]).length();const o=Ti.set(s[4],s[5],s[6]).length(),a=Ti.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],nn.copy(this);const l=1/r,h=1/o,f=1/a;return nn.elements[0]*=l,nn.elements[1]*=l,nn.elements[2]*=l,nn.elements[4]*=h,nn.elements[5]*=h,nn.elements[6]*=h,nn.elements[8]*=f,nn.elements[9]*=f,nn.elements[10]*=f,e.setFromRotationMatrix(nn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o){const a=this.elements,c=2*r/(e-t),l=2*r/(n-s),h=(e+t)/(e-t),f=(n+s)/(n-s),u=-(o+r)/(o-r),d=-2*o*r/(o-r);return a[0]=c,a[4]=0,a[8]=h,a[12]=0,a[1]=0,a[5]=l,a[9]=f,a[13]=0,a[2]=0,a[6]=0,a[10]=u,a[14]=d,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(t,e,n,s,r,o){const a=this.elements,c=1/(e-t),l=1/(n-s),h=1/(o-r),f=(e+t)*c,u=(n+s)*l,d=(o+r)*h;return a[0]=2*c,a[4]=0,a[8]=0,a[12]=-f,a[1]=0,a[5]=2*l,a[9]=0,a[13]=-u,a[2]=0,a[6]=0,a[10]=-2*h,a[14]=-d,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};const Ti=new U,nn=new Se,tf=new U(0,0,0),ef=new U(1,1,1),On=new U,rr=new U,Oe=new U,kl=new Se,Vl=new ss;let ph=class mh{constructor(t=0,e=0,n=0,s=mh.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],f=s[2],u=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(We(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-We(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(We(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-We(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(We(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-We(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return kl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(kl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Vl.setFromEuler(this),this.setFromQuaternion(Vl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ph.DEFAULT_ORDER="XYZ";let gh=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},nf=0;const Gl=new U,Ai=new ss,bn=new Se,or=new U,hs=new U,sf=new U,rf=new ss,Wl=new U(1,0,0),Hl=new U(0,1,0),ql=new U(0,0,1),of={type:"added"},jl={type:"removed"};let yn=class Hr extends xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nf++}),this.uuid=Ws(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Hr.DEFAULT_UP.clone();const t=new U,e=new ph,n=new ss,s=new U(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Se},normalMatrix:{value:new hn}}),this.matrix=new Se,this.matrixWorld=new Se,this.matrixAutoUpdate=Hr.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Hr.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new gh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ai.setFromAxisAngle(t,e),this.quaternion.multiply(Ai),this}rotateOnWorldAxis(t,e){return Ai.setFromAxisAngle(t,e),this.quaternion.premultiply(Ai),this}rotateX(t){return this.rotateOnAxis(Wl,t)}rotateY(t){return this.rotateOnAxis(Hl,t)}rotateZ(t){return this.rotateOnAxis(ql,t)}translateOnAxis(t,e){return Gl.copy(t).applyQuaternion(this.quaternion),this.position.add(Gl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Wl,t)}translateY(t){return this.translateOnAxis(Hl,t)}translateZ(t){return this.translateOnAxis(ql,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(bn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?or.copy(t):or.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),hs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bn.lookAt(hs,or,this.up):bn.lookAt(or,hs,this.up),this.quaternion.setFromRotationMatrix(bn),s&&(bn.extractRotation(s.matrixWorld),Ai.setFromRotationMatrix(bn),this.quaternion.premultiply(Ai.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(of)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(jl)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(jl)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),bn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),bn.multiply(t.parent.matrixWorld)),t.applyMatrix4(bn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e){let n=[];this[t]===e&&n.push(this);for(let s=0,r=this.children.length;s<r;s++){const o=this.children[s].getObjectsByProperty(t,e);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hs,t,sf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hs,rf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const f=c[l];r(t.shapes,f)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),f=o(t.shapes),u=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}};yn.DEFAULT_UP=new U(0,1,0);yn.DEFAULT_MATRIX_AUTO_UPDATE=!0;yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const sn=new U,Sn=new U,Io=new U,wn=new U,Ei=new U,Pi=new U,Xl=new U,zo=new U,Bo=new U,Uo=new U;let Oo=class Zi{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),sn.subVectors(t,e),s.cross(sn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){sn.subVectors(s,e),Sn.subVectors(n,e),Io.subVectors(t,e);const o=sn.dot(sn),a=sn.dot(Sn),c=sn.dot(Io),l=Sn.dot(Sn),h=Sn.dot(Io),f=o*l-a*a;if(f===0)return r.set(-2,-1,-1);const u=1/f,d=(l*c-a*h)*u,g=(o*h-a*c)*u;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,wn),wn.x>=0&&wn.y>=0&&wn.x+wn.y<=1}static getUV(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,wn),c.set(0,0),c.addScaledVector(r,wn.x),c.addScaledVector(o,wn.y),c.addScaledVector(a,wn.z),c}static isFrontFacing(t,e,n,s){return sn.subVectors(n,e),Sn.subVectors(t,e),sn.cross(Sn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return sn.subVectors(this.c,this.b),Sn.subVectors(this.a,this.b),sn.cross(Sn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Zi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Zi.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,s,r){return Zi.getUV(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Zi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Zi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Ei.subVectors(s,n),Pi.subVectors(r,n),zo.subVectors(t,n);const c=Ei.dot(zo),l=Pi.dot(zo);if(c<=0&&l<=0)return e.copy(n);Bo.subVectors(t,s);const h=Ei.dot(Bo),f=Pi.dot(Bo);if(h>=0&&f<=h)return e.copy(s);const u=c*f-h*l;if(u<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(Ei,o);Uo.subVectors(t,r);const d=Ei.dot(Uo),g=Pi.dot(Uo);if(g>=0&&d<=g)return e.copy(r);const p=d*l-c*g;if(p<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(Pi,a);const m=h*g-d*f;if(m<=0&&f-h>=0&&d-g>=0)return Xl.subVectors(r,s),a=(f-h)/(f-h+(d-g)),e.copy(s).addScaledVector(Xl,a);const _=1/(m+p+u);return o=p*_,a=u*_,e.copy(n).addScaledVector(Ei,o).addScaledVector(Pi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},af=0,$r=class extends xi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:af++}),this.uuid=Ws(),this.name="",this.type="Material",this.blending=Qi,this.side=Xn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=eh,this.blendDst=nh,this.blendEquation=Yi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ea,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vo,this.stencilZFail=vo,this.stencilZPass=vo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}const s=this[e];if(s===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Qi&&(n.blending=this.blending),this.side!==Xn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},_h=class extends $r{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ih,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};const pe=new U,ar=new Wt;let xn=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=zl,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ar.fromBufferAttribute(this,e),ar.applyMatrix3(t),this.setXY(e,ar.x,ar.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix3(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix4(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyNormalMatrix(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.transformDirection(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Qs(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Qs(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Qs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Qs(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ue(e,this.array),n=Ue(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ue(e,this.array),n=Ue(n,this.array),s=Ue(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ue(e,this.array),n=Ue(n,this.array),s=Ue(s,this.array),r=Ue(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==zl&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}},xh=class extends xn{constructor(t,e,n){super(new Uint16Array(t),e,n)}},yh=class extends xn{constructor(t,e,n){super(new Uint32Array(t),e,n)}},hi=class extends xn{constructor(t,e,n){super(new Float32Array(t),e,n)}},lf=0;const Je=new Se,No=new yn,Di=new U,Ne=new Hs,us=new Hs,ve=new U;let qs=class vh extends xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lf++}),this.uuid=Ws(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(lh(t)?yh:xh)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new hn().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Je.makeRotationFromQuaternion(t),this.applyMatrix4(Je),this}rotateX(t){return Je.makeRotationX(t),this.applyMatrix4(Je),this}rotateY(t){return Je.makeRotationY(t),this.applyMatrix4(Je),this}rotateZ(t){return Je.makeRotationZ(t),this.applyMatrix4(Je),this}translate(t,e,n){return Je.makeTranslation(t,e,n),this.applyMatrix4(Je),this}scale(t,e,n){return Je.makeScale(t,e,n),this.applyMatrix4(Je),this}lookAt(t){return No.lookAt(t),No.updateMatrix(),this.applyMatrix4(No.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Di).negate(),this.translate(Di.x,Di.y,Di.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new hi(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Ne.setFromBufferAttribute(r),this.morphTargetsRelative?(ve.addVectors(this.boundingBox.min,Ne.min),this.boundingBox.expandByPoint(ve),ve.addVectors(this.boundingBox.max,Ne.max),this.boundingBox.expandByPoint(ve)):(this.boundingBox.expandByPoint(Ne.min),this.boundingBox.expandByPoint(Ne.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xa);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new U,1/0);return}if(t){const n=this.boundingSphere.center;if(Ne.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];us.setFromBufferAttribute(a),this.morphTargetsRelative?(ve.addVectors(Ne.min,us.min),Ne.expandByPoint(ve),ve.addVectors(Ne.max,us.max),Ne.expandByPoint(ve)):(Ne.expandByPoint(us.min),Ne.expandByPoint(us.max))}Ne.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)ve.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ve));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)ve.fromBufferAttribute(a,l),c&&(Di.fromBufferAttribute(t,l),ve.add(Di)),s=Math.max(s,n.distanceToSquared(ve))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,s=e.position.array,r=e.normal.array,o=e.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xn(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],h=[];for(let D=0;D<a;D++)l[D]=new U,h[D]=new U;const f=new U,u=new U,d=new U,g=new Wt,p=new Wt,m=new Wt,_=new U,S=new U;function x(D,R,q){f.fromArray(s,D*3),u.fromArray(s,R*3),d.fromArray(s,q*3),g.fromArray(o,D*2),p.fromArray(o,R*2),m.fromArray(o,q*2),u.sub(f),d.sub(f),p.sub(g),m.sub(g);const P=1/(p.x*m.y-m.x*p.y);isFinite(P)&&(_.copy(u).multiplyScalar(m.y).addScaledVector(d,-p.y).multiplyScalar(P),S.copy(d).multiplyScalar(p.x).addScaledVector(u,-m.x).multiplyScalar(P),l[D].add(_),l[R].add(_),l[q].add(_),h[D].add(S),h[R].add(S),h[q].add(S))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let D=0,R=M.length;D<R;++D){const q=M[D],P=q.start,F=q.count;for(let k=P,K=P+F;k<K;k+=3)x(n[k+0],n[k+1],n[k+2])}const y=new U,b=new U,A=new U,v=new U;function T(D){A.fromArray(r,D*3),v.copy(A);const R=l[D];y.copy(R),y.sub(A.multiplyScalar(A.dot(R))).normalize(),b.crossVectors(v,R);const P=b.dot(h[D])<0?-1:1;c[D*4]=y.x,c[D*4+1]=y.y,c[D*4+2]=y.z,c[D*4+3]=P}for(let D=0,R=M.length;D<R;++D){const q=M[D],P=q.start,F=q.count;for(let k=P,K=P+F;k<K;k+=3)T(n[k+0]),T(n[k+1]),T(n[k+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new xn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);const s=new U,r=new U,o=new U,a=new U,c=new U,l=new U,h=new U,f=new U;if(t)for(let u=0,d=t.count;u<d;u+=3){const g=t.getX(u+0),p=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,p),o.fromBufferAttribute(e,m),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,p),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(p,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,d=e.count;u<d;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ve.fromBufferAttribute(t,e),ve.normalize(),t.setXYZ(e,ve.x,ve.y,ve.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,f=a.normalized,u=new l.constructor(c.length*h);let d=0,g=0;for(let p=0,m=c.length;p<m;p++){a.isInterleavedBufferAttribute?d=c[p]*a.data.stride+a.offset:d=c[p]*h;for(let _=0;_<h;_++)u[g++]=l[d++]}return new xn(u,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new vh,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,f=l.length;h<f;h++){const u=l[h],d=t(u,n);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let f=0,u=l.length;f<u;f++){const d=l[f];h.push(d.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],f=r[l];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,t.parameters!==void 0&&(this.parameters=Object.assign({},t.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}};const Yl=new Se,Fi=new $u,ko=new Xa,fs=new U,ds=new U,ps=new U,Vo=new U,lr=new U,cr=new Wt,hr=new Wt,ur=new Wt,Go=new U,fr=new U;let Hn=class extends yn{constructor(t=new qs,e=new _h){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){lr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],f=r[c];h!==0&&(Vo.fromBufferAttribute(f,t),o?lr.addScaledVector(Vo,h):lr.addScaledVector(Vo.sub(e),h))}e.add(lr)}return this.isSkinnedMesh&&this.boneTransform(t,e),e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;if(s===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),ko.copy(n.boundingSphere),ko.applyMatrix4(r),t.ray.intersectsSphere(ko)===!1)||(Yl.copy(r).invert(),Fi.copy(t.ray).applyMatrix4(Yl),n.boundingBox!==null&&Fi.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,c=n.attributes.position,l=n.attributes.uv,h=n.attributes.uv2,f=n.groups,u=n.drawRange;if(a!==null)if(Array.isArray(s))for(let d=0,g=f.length;d<g;d++){const p=f[d],m=s[p.materialIndex],_=Math.max(p.start,u.start),S=Math.min(a.count,Math.min(p.start+p.count,u.start+u.count));for(let x=_,M=S;x<M;x+=3){const y=a.getX(x),b=a.getX(x+1),A=a.getX(x+2);o=dr(this,m,t,Fi,l,h,y,b,A),o&&(o.faceIndex=Math.floor(x/3),o.face.materialIndex=p.materialIndex,e.push(o))}}else{const d=Math.max(0,u.start),g=Math.min(a.count,u.start+u.count);for(let p=d,m=g;p<m;p+=3){const _=a.getX(p),S=a.getX(p+1),x=a.getX(p+2);o=dr(this,s,t,Fi,l,h,_,S,x),o&&(o.faceIndex=Math.floor(p/3),e.push(o))}}else if(c!==void 0)if(Array.isArray(s))for(let d=0,g=f.length;d<g;d++){const p=f[d],m=s[p.materialIndex],_=Math.max(p.start,u.start),S=Math.min(c.count,Math.min(p.start+p.count,u.start+u.count));for(let x=_,M=S;x<M;x+=3){const y=x,b=x+1,A=x+2;o=dr(this,m,t,Fi,l,h,y,b,A),o&&(o.faceIndex=Math.floor(x/3),o.face.materialIndex=p.materialIndex,e.push(o))}}else{const d=Math.max(0,u.start),g=Math.min(c.count,u.start+u.count);for(let p=d,m=g;p<m;p+=3){const _=p,S=p+1,x=p+2;o=dr(this,s,t,Fi,l,h,_,S,x),o&&(o.faceIndex=Math.floor(p/3),e.push(o))}}}};function cf(i,t,e,n,s,r,o,a){let c;if(t.side===Xe?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===Xn,a),c===null)return null;fr.copy(a),fr.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(fr);return l<e.near||l>e.far?null:{distance:l,point:fr.clone(),object:i}}function dr(i,t,e,n,s,r,o,a,c){i.getVertexPosition(o,fs),i.getVertexPosition(a,ds),i.getVertexPosition(c,ps);const l=cf(i,t,e,n,fs,ds,ps,Go);if(l){s&&(cr.fromBufferAttribute(s,o),hr.fromBufferAttribute(s,a),ur.fromBufferAttribute(s,c),l.uv=Oo.getUV(Go,fs,ds,ps,cr,hr,ur,new Wt)),r&&(cr.fromBufferAttribute(r,o),hr.fromBufferAttribute(r,a),ur.fromBufferAttribute(r,c),l.uv2=Oo.getUV(Go,fs,ds,ps,cr,hr,ur,new Wt));const h={a:o,b:a,c,normal:new U,materialIndex:0};Oo.getNormal(fs,ds,ps,h.normal),l.face=h}return l}class js extends qs{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],f=[];let u=0,d=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new hi(l,3)),this.setAttribute("normal",new hi(h,3)),this.setAttribute("uv",new hi(f,2));function g(p,m,_,S,x,M,y,b,A,v,T){const D=M/A,R=y/v,q=M/2,P=y/2,F=b/2,k=A+1,K=v+1;let tt=0,G=0;const rt=new U;for(let it=0;it<K;it++){const H=it*R-P;for(let I=0;I<k;I++){const Z=I*D-q;rt[p]=Z*S,rt[m]=H*x,rt[_]=F,l.push(rt.x,rt.y,rt.z),rt[p]=0,rt[m]=0,rt[_]=b>0?1:-1,h.push(rt.x,rt.y,rt.z),f.push(I/A),f.push(1-it/v),tt+=1}}for(let it=0;it<v;it++)for(let H=0;H<A;H++){const I=u+H+k*it,Z=u+H+k*(it+1),ot=u+(H+1)+k*(it+1),ut=u+(H+1)+k*it;c.push(I,Z,ut),c.push(Z,ot,ut),G+=6}a.addGroup(d,G,T),d+=G,u+=tt}}static fromJSON(t){return new js(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function is(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Re(i){const t={};for(let e=0;e<i.length;e++){const n=is(i[e]);for(const s in n)t[s]=n[s]}return t}function hf(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Mh(i){return i.getRenderTarget()===null&&i.outputEncoding===$t?gn:Ls}const uf={clone:is,merge:Re};var ff=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,df=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class gi extends $r{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ff,this.fragmentShader=df,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=is(t.uniforms),this.uniformsGroups=hf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class bh extends yn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Se,this.projectionMatrix=new Se,this.projectionMatrixInverse=new Se}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class He extends bh{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ul*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Mo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ul*2*Math.atan(Math.tan(Mo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Mo*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Li=-90,Ri=1;class pf extends yn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n;const s=new He(Li,Ri,t,e);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(1,0,0),this.add(s);const r=new He(Li,Ri,t,e);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const o=new He(Li,Ri,t,e);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new He(Li,Ri,t,e);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const c=new He(Li,Ri,t,e);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,1),this.add(c);const l=new He(Li,Ri,t,e);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,-1),this.add(l)}update(t,e){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[s,r,o,a,c,l]=this.children,h=t.getRenderTarget(),f=t.toneMapping,u=t.xr.enabled;t.toneMapping=Rn,t.xr.enabled=!1;const d=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0),t.render(e,s),t.setRenderTarget(n,1),t.render(e,r),t.setRenderTarget(n,2),t.render(e,o),t.setRenderTarget(n,3),t.render(e,a),t.setRenderTarget(n,4),t.render(e,c),n.texture.generateMipmaps=d,t.setRenderTarget(n,5),t.render(e,l),t.setRenderTarget(h),t.toneMapping=f,t.xr.enabled=u,n.texture.needsPMREMUpdate=!0}}class Sh extends In{constructor(t,e,n,s,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:ts,super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class mf extends mi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Sh(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:$e}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.encoding=e.encoding,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new js(5,5,5),r=new gi({name:"CubemapFromEquirect",uniforms:is(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Xe,blending:qn});r.uniforms.tEquirect.value=e;const o=new Hn(s,r),a=e.minFilter;return e.minFilter===Ds&&(e.minFilter=$e),new pf(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const Wo=new U,gf=new U,_f=new hn;let ii=class{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Wo.subVectors(n,e).cross(gf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)}intersectLine(t,e){const n=t.delta(Wo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(n).multiplyScalar(r).add(t.start)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||_f.getNormalMatrix(t),s=this.coplanarPoint(Wo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}};const Ii=new Xa,pr=new U;class Ya{constructor(t=new ii,e=new ii,n=new ii,s=new ii,r=new ii,o=new ii){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t){const e=this.planes,n=t.elements,s=n[0],r=n[1],o=n[2],a=n[3],c=n[4],l=n[5],h=n[6],f=n[7],u=n[8],d=n[9],g=n[10],p=n[11],m=n[12],_=n[13],S=n[14],x=n[15];return e[0].setComponents(a-s,f-c,p-u,x-m).normalize(),e[1].setComponents(a+s,f+c,p+u,x+m).normalize(),e[2].setComponents(a+r,f+l,p+d,x+_).normalize(),e[3].setComponents(a-r,f-l,p-d,x-_).normalize(),e[4].setComponents(a-o,f-h,p-g,x-S).normalize(),e[5].setComponents(a+o,f+h,p+g,x+S).normalize(),this}intersectsObject(t){const e=t.geometry;return e.boundingSphere===null&&e.computeBoundingSphere(),Ii.copy(e.boundingSphere).applyMatrix4(t.matrixWorld),this.intersectsSphere(Ii)}intersectsSprite(t){return Ii.center.set(0,0,0),Ii.radius=.7071067811865476,Ii.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ii)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(pr.x=s.normal.x>0?t.max.x:t.min.x,pr.y=s.normal.y>0?t.max.y:t.min.y,pr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(pr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function wh(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function xf(i,t){const e=t.isWebGL2,n=new WeakMap;function s(l,h){const f=l.array,u=l.usage,d=i.createBuffer();i.bindBuffer(h,d),i.bufferData(h,f,u),l.onUploadCallback();let g;if(f instanceof Float32Array)g=5126;else if(f instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(f instanceof Int16Array)g=5122;else if(f instanceof Uint32Array)g=5125;else if(f instanceof Int32Array)g=5124;else if(f instanceof Int8Array)g=5120;else if(f instanceof Uint8Array)g=5121;else if(f instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:d,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:l.version}}function r(l,h,f){const u=h.array,d=h.updateRange;i.bindBuffer(f,l),d.count===-1?i.bufferSubData(f,0,u):(e?i.bufferSubData(f,d.offset*u.BYTES_PER_ELEMENT,u,d.offset,d.count):i.bufferSubData(f,d.offset*u.BYTES_PER_ELEMENT,u.subarray(d.offset,d.offset+d.count)),d.count=-1),h.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h&&(i.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){const u=n.get(l);(!u||u.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const f=n.get(l);f===void 0?n.set(l,s(l,h)):f.version<l.version&&(r(f.buffer,l,h),f.version=l.version)}return{get:o,remove:a,update:c}}class Za extends qs{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,f=t/a,u=e/c,d=[],g=[],p=[],m=[];for(let _=0;_<h;_++){const S=_*u-o;for(let x=0;x<l;x++){const M=x*f-r;g.push(M,-S,0),p.push(0,0,1),m.push(x/a),m.push(1-_/c)}}for(let _=0;_<c;_++)for(let S=0;S<a;S++){const x=S+l*_,M=S+l*(_+1),y=S+1+l*(_+1),b=S+1+l*_;d.push(x,M,b),d.push(M,y,b)}this.setIndex(d),this.setAttribute("position",new hi(g,3)),this.setAttribute("normal",new hi(p,3)),this.setAttribute("uv",new hi(m,2))}static fromJSON(t){return new Za(t.width,t.height,t.widthSegments,t.heightSegments)}}var yf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,vf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mf=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,bf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Sf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,wf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Cf="vec3 transformed = vec3( position );",Tf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Af=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,Ef=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Pf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Df=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Ff=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Lf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Rf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,If=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,zf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Bf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Uf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Of=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Nf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,kf=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Vf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Gf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Wf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Hf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qf="gl_FragColor = linearToOutputTexel( gl_FragColor );",jf=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Xf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Yf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Zf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Jf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Kf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Qf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$f=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,td=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ed=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,nd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,id=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,sd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,od=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ad=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ld=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,cd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ud=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,pd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,md=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,gd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,_d=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,xd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Md=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,bd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Sd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Cd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Td=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ad=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ed=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Pd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Dd=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Fd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Ld=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Rd=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Id=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ud=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Od=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Nd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,kd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Vd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Wd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Hd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Xd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Yd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Zd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Jd=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Kd=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Qd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,$d=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,tp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ep=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,np=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ip=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,sp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,op=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ap=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,lp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,cp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,hp=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,up=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,fp=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,dp=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,pp=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,mp=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,gp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _p=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,yp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Mp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Sp=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,wp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Cp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Tp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Ap=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ep=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Pp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Dp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Fp=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Lp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ip=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Bp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Up=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Op=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Np=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Gp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,jp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Xp=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Zp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Jp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ot={alphamap_fragment:yf,alphamap_pars_fragment:vf,alphatest_fragment:Mf,alphatest_pars_fragment:bf,aomap_fragment:Sf,aomap_pars_fragment:wf,begin_vertex:Cf,beginnormal_vertex:Tf,bsdfs:Af,iridescence_fragment:Ef,bumpmap_pars_fragment:Pf,clipping_planes_fragment:Df,clipping_planes_pars_fragment:Ff,clipping_planes_pars_vertex:Lf,clipping_planes_vertex:Rf,color_fragment:If,color_pars_fragment:zf,color_pars_vertex:Bf,color_vertex:Uf,common:Of,cube_uv_reflection_fragment:Nf,defaultnormal_vertex:kf,displacementmap_pars_vertex:Vf,displacementmap_vertex:Gf,emissivemap_fragment:Wf,emissivemap_pars_fragment:Hf,encodings_fragment:qf,encodings_pars_fragment:jf,envmap_fragment:Xf,envmap_common_pars_fragment:Yf,envmap_pars_fragment:Zf,envmap_pars_vertex:Jf,envmap_physical_pars_fragment:ld,envmap_vertex:Kf,fog_vertex:Qf,fog_pars_vertex:$f,fog_fragment:td,fog_pars_fragment:ed,gradientmap_pars_fragment:nd,lightmap_fragment:id,lightmap_pars_fragment:sd,lights_lambert_fragment:rd,lights_lambert_pars_fragment:od,lights_pars_begin:ad,lights_toon_fragment:cd,lights_toon_pars_fragment:hd,lights_phong_fragment:ud,lights_phong_pars_fragment:fd,lights_physical_fragment:dd,lights_physical_pars_fragment:pd,lights_fragment_begin:md,lights_fragment_maps:gd,lights_fragment_end:_d,logdepthbuf_fragment:xd,logdepthbuf_pars_fragment:yd,logdepthbuf_pars_vertex:vd,logdepthbuf_vertex:Md,map_fragment:bd,map_pars_fragment:Sd,map_particle_fragment:wd,map_particle_pars_fragment:Cd,metalnessmap_fragment:Td,metalnessmap_pars_fragment:Ad,morphcolor_vertex:Ed,morphnormal_vertex:Pd,morphtarget_pars_vertex:Dd,morphtarget_vertex:Fd,normal_fragment_begin:Ld,normal_fragment_maps:Rd,normal_pars_fragment:Id,normal_pars_vertex:zd,normal_vertex:Bd,normalmap_pars_fragment:Ud,clearcoat_normal_fragment_begin:Od,clearcoat_normal_fragment_maps:Nd,clearcoat_pars_fragment:kd,iridescence_pars_fragment:Vd,output_fragment:Gd,packing:Wd,premultiplied_alpha_fragment:Hd,project_vertex:qd,dithering_fragment:jd,dithering_pars_fragment:Xd,roughnessmap_fragment:Yd,roughnessmap_pars_fragment:Zd,shadowmap_pars_fragment:Jd,shadowmap_pars_vertex:Kd,shadowmap_vertex:Qd,shadowmask_pars_fragment:$d,skinbase_vertex:tp,skinning_pars_vertex:ep,skinning_vertex:np,skinnormal_vertex:ip,specularmap_fragment:sp,specularmap_pars_fragment:rp,tonemapping_fragment:op,tonemapping_pars_fragment:ap,transmission_fragment:lp,transmission_pars_fragment:cp,uv_pars_fragment:hp,uv_pars_vertex:up,uv_vertex:fp,uv2_pars_fragment:dp,uv2_pars_vertex:pp,uv2_vertex:mp,worldpos_vertex:gp,background_vert:_p,background_frag:xp,backgroundCube_vert:yp,backgroundCube_frag:vp,cube_vert:Mp,cube_frag:bp,depth_vert:Sp,depth_frag:wp,distanceRGBA_vert:Cp,distanceRGBA_frag:Tp,equirect_vert:Ap,equirect_frag:Ep,linedashed_vert:Pp,linedashed_frag:Dp,meshbasic_vert:Fp,meshbasic_frag:Lp,meshlambert_vert:Rp,meshlambert_frag:Ip,meshmatcap_vert:zp,meshmatcap_frag:Bp,meshnormal_vert:Up,meshnormal_frag:Op,meshphong_vert:Np,meshphong_frag:kp,meshphysical_vert:Vp,meshphysical_frag:Gp,meshtoon_vert:Wp,meshtoon_frag:Hp,points_vert:qp,points_frag:jp,shadow_vert:Xp,shadow_frag:Yp,sprite_vert:Zp,sprite_frag:Jp},dt={common:{diffuse:{value:new te(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new hn},uv2Transform:{value:new hn},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new hn}},sprite:{diffuse:{value:new te(16777215)},opacity:{value:1},center:{value:new Wt(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new hn}}},_n={basic:{uniforms:Re([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.fog]),vertexShader:Ot.meshbasic_vert,fragmentShader:Ot.meshbasic_frag},lambert:{uniforms:Re([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new te(0)}}]),vertexShader:Ot.meshlambert_vert,fragmentShader:Ot.meshlambert_frag},phong:{uniforms:Re([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new te(0)},specular:{value:new te(1118481)},shininess:{value:30}}]),vertexShader:Ot.meshphong_vert,fragmentShader:Ot.meshphong_frag},standard:{uniforms:Re([dt.common,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.roughnessmap,dt.metalnessmap,dt.fog,dt.lights,{emissive:{value:new te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag},toon:{uniforms:Re([dt.common,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.gradientmap,dt.fog,dt.lights,{emissive:{value:new te(0)}}]),vertexShader:Ot.meshtoon_vert,fragmentShader:Ot.meshtoon_frag},matcap:{uniforms:Re([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,{matcap:{value:null}}]),vertexShader:Ot.meshmatcap_vert,fragmentShader:Ot.meshmatcap_frag},points:{uniforms:Re([dt.points,dt.fog]),vertexShader:Ot.points_vert,fragmentShader:Ot.points_frag},dashed:{uniforms:Re([dt.common,dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ot.linedashed_vert,fragmentShader:Ot.linedashed_frag},depth:{uniforms:Re([dt.common,dt.displacementmap]),vertexShader:Ot.depth_vert,fragmentShader:Ot.depth_frag},normal:{uniforms:Re([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,{opacity:{value:1}}]),vertexShader:Ot.meshnormal_vert,fragmentShader:Ot.meshnormal_frag},sprite:{uniforms:Re([dt.sprite,dt.fog]),vertexShader:Ot.sprite_vert,fragmentShader:Ot.sprite_frag},background:{uniforms:{uvTransform:{value:new hn},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ot.background_vert,fragmentShader:Ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ot.backgroundCube_vert,fragmentShader:Ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ot.cube_vert,fragmentShader:Ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ot.equirect_vert,fragmentShader:Ot.equirect_frag},distanceRGBA:{uniforms:Re([dt.common,dt.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ot.distanceRGBA_vert,fragmentShader:Ot.distanceRGBA_frag},shadow:{uniforms:Re([dt.lights,dt.fog,{color:{value:new te(0)},opacity:{value:1}}]),vertexShader:Ot.shadow_vert,fragmentShader:Ot.shadow_frag}};_n.physical={uniforms:Re([_n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Wt(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new te(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new te(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new te(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag};const mr={r:0,b:0,g:0};function Kp(i,t,e,n,s,r,o){const a=new te(0);let c=r===!0?0:1,l,h,f=null,u=0,d=null;function g(m,_){let S=!1,x=_.isScene===!0?_.background:null;x&&x.isTexture&&(x=(_.backgroundBlurriness>0?e:t).get(x));const M=i.xr,y=M.getSession&&M.getSession();y&&y.environmentBlendMode==="additive"&&(x=null),x===null?p(a,c):x&&x.isColor&&(p(x,1),S=!0),(i.autoClear||S)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Qr)?(h===void 0&&(h=new Hn(new js(1,1,1),new gi({name:"BackgroundCubeMaterial",uniforms:is(_n.backgroundCube.uniforms),vertexShader:_n.backgroundCube.vertexShader,fragmentShader:_n.backgroundCube.fragmentShader,side:Xe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(b,A,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.toneMapped=x.encoding!==$t,(f!==x||u!==x.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,f=x,u=x.version,d=i.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Hn(new Za(2,2),new gi({name:"BackgroundMaterial",uniforms:is(_n.background.uniforms),vertexShader:_n.background.vertexShader,fragmentShader:_n.background.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=x.encoding!==$t,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(f!==x||u!==x.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,f=x,u=x.version,d=i.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function p(m,_){m.getRGB(mr,Mh(i)),n.buffers.color.setClear(mr.r,mr.g,mr.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(m,_=1){a.set(m),c=_,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,p(a,c)},render:g}}function Qp(i,t,e,n){const s=i.getParameter(34921),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},c=m(null);let l=c,h=!1;function f(F,k,K,tt,G){let rt=!1;if(o){const it=p(tt,K,k);l!==it&&(l=it,d(l.object)),rt=_(F,tt,K,G),rt&&S(F,tt,K,G)}else{const it=k.wireframe===!0;(l.geometry!==tt.id||l.program!==K.id||l.wireframe!==it)&&(l.geometry=tt.id,l.program=K.id,l.wireframe=it,rt=!0)}G!==null&&e.update(G,34963),(rt||h)&&(h=!1,v(F,k,K,tt),G!==null&&i.bindBuffer(34963,e.get(G).buffer))}function u(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function d(F){return n.isWebGL2?i.bindVertexArray(F):r.bindVertexArrayOES(F)}function g(F){return n.isWebGL2?i.deleteVertexArray(F):r.deleteVertexArrayOES(F)}function p(F,k,K){const tt=K.wireframe===!0;let G=a[F.id];G===void 0&&(G={},a[F.id]=G);let rt=G[k.id];rt===void 0&&(rt={},G[k.id]=rt);let it=rt[tt];return it===void 0&&(it=m(u()),rt[tt]=it),it}function m(F){const k=[],K=[],tt=[];for(let G=0;G<s;G++)k[G]=0,K[G]=0,tt[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:K,attributeDivisors:tt,object:F,attributes:{},index:null}}function _(F,k,K,tt){const G=l.attributes,rt=k.attributes;let it=0;const H=K.getAttributes();for(const I in H)if(H[I].location>=0){const ot=G[I];let ut=rt[I];if(ut===void 0&&(I==="instanceMatrix"&&F.instanceMatrix&&(ut=F.instanceMatrix),I==="instanceColor"&&F.instanceColor&&(ut=F.instanceColor)),ot===void 0||ot.attribute!==ut||ut&&ot.data!==ut.data)return!0;it++}return l.attributesNum!==it||l.index!==tt}function S(F,k,K,tt){const G={},rt=k.attributes;let it=0;const H=K.getAttributes();for(const I in H)if(H[I].location>=0){let ot=rt[I];ot===void 0&&(I==="instanceMatrix"&&F.instanceMatrix&&(ot=F.instanceMatrix),I==="instanceColor"&&F.instanceColor&&(ot=F.instanceColor));const ut={};ut.attribute=ot,ot&&ot.data&&(ut.data=ot.data),G[I]=ut,it++}l.attributes=G,l.attributesNum=it,l.index=tt}function x(){const F=l.newAttributes;for(let k=0,K=F.length;k<K;k++)F[k]=0}function M(F){y(F,0)}function y(F,k){const K=l.newAttributes,tt=l.enabledAttributes,G=l.attributeDivisors;K[F]=1,tt[F]===0&&(i.enableVertexAttribArray(F),tt[F]=1),G[F]!==k&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](F,k),G[F]=k)}function b(){const F=l.newAttributes,k=l.enabledAttributes;for(let K=0,tt=k.length;K<tt;K++)k[K]!==F[K]&&(i.disableVertexAttribArray(K),k[K]=0)}function A(F,k,K,tt,G,rt){n.isWebGL2===!0&&(K===5124||K===5125)?i.vertexAttribIPointer(F,k,K,G,rt):i.vertexAttribPointer(F,k,K,tt,G,rt)}function v(F,k,K,tt){if(n.isWebGL2===!1&&(F.isInstancedMesh||tt.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;x();const G=tt.attributes,rt=K.getAttributes(),it=k.defaultAttributeValues;for(const H in rt){const I=rt[H];if(I.location>=0){let Z=G[H];if(Z===void 0&&(H==="instanceMatrix"&&F.instanceMatrix&&(Z=F.instanceMatrix),H==="instanceColor"&&F.instanceColor&&(Z=F.instanceColor)),Z!==void 0){const ot=Z.normalized,ut=Z.itemSize,N=e.get(Z);if(N===void 0)continue;const O=N.buffer,nt=N.type,V=N.bytesPerElement;if(Z.isInterleavedBufferAttribute){const lt=Z.data,Lt=lt.stride,_t=Z.offset;if(lt.isInstancedInterleavedBuffer){for(let St=0;St<I.locationSize;St++)y(I.location+St,lt.meshPerAttribute);F.isInstancedMesh!==!0&&tt._maxInstanceCount===void 0&&(tt._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let St=0;St<I.locationSize;St++)M(I.location+St);i.bindBuffer(34962,O);for(let St=0;St<I.locationSize;St++)A(I.location+St,ut/I.locationSize,nt,ot,Lt*V,(_t+ut/I.locationSize*St)*V)}else{if(Z.isInstancedBufferAttribute){for(let lt=0;lt<I.locationSize;lt++)y(I.location+lt,Z.meshPerAttribute);F.isInstancedMesh!==!0&&tt._maxInstanceCount===void 0&&(tt._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let lt=0;lt<I.locationSize;lt++)M(I.location+lt);i.bindBuffer(34962,O);for(let lt=0;lt<I.locationSize;lt++)A(I.location+lt,ut/I.locationSize,nt,ot,ut*V,ut/I.locationSize*lt*V)}}else if(it!==void 0){const ot=it[H];if(ot!==void 0)switch(ot.length){case 2:i.vertexAttrib2fv(I.location,ot);break;case 3:i.vertexAttrib3fv(I.location,ot);break;case 4:i.vertexAttrib4fv(I.location,ot);break;default:i.vertexAttrib1fv(I.location,ot)}}}}b()}function T(){q();for(const F in a){const k=a[F];for(const K in k){const tt=k[K];for(const G in tt)g(tt[G].object),delete tt[G];delete k[K]}delete a[F]}}function D(F){if(a[F.id]===void 0)return;const k=a[F.id];for(const K in k){const tt=k[K];for(const G in tt)g(tt[G].object),delete tt[G];delete k[K]}delete a[F.id]}function R(F){for(const k in a){const K=a[k];if(K[F.id]===void 0)continue;const tt=K[F.id];for(const G in tt)g(tt[G].object),delete tt[G];delete K[F.id]}}function q(){P(),h=!0,l!==c&&(l=c,d(l.object))}function P(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:f,reset:q,resetDefaultState:P,dispose:T,releaseStatesOfGeometry:D,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:M,disableUnusedAttributes:b}}function $p(i,t,e,n){const s=n.isWebGL2;let r;function o(l){r=l}function a(l,h){i.drawArrays(r,l,h),e.update(h,r,1)}function c(l,h,f){if(f===0)return;let u,d;if(s)u=i,d="drawArraysInstanced";else if(u=t.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",u===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}u[d](r,l,h,f),e.update(h,r,f)}this.setMode=o,this.render=a,this.renderInstances=c}function tm(i,t,e){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(A){if(A==="highp"){if(i.getShaderPrecisionFormat(35633,36338).precision>0&&i.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(35633,36337).precision>0&&i.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i instanceof WebGL2RenderingContext;let a=e.precision!==void 0?e.precision:"highp";const c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,f=i.getParameter(34930),u=i.getParameter(35660),d=i.getParameter(3379),g=i.getParameter(34076),p=i.getParameter(34921),m=i.getParameter(36347),_=i.getParameter(36348),S=i.getParameter(36349),x=u>0,M=o||t.has("OES_texture_float"),y=x&&M,b=o?i.getParameter(36183):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:f,maxVertexTextures:u,maxTextureSize:d,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:m,maxVaryings:_,maxFragmentUniforms:S,vertexTextures:x,floatFragmentTextures:M,floatVertexTextures:y,maxSamples:b}}function em(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new ii,a=new hn,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const d=f.length!==0||u||n!==0||s;return s=u,n=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,d){const g=f.clippingPlanes,p=f.clipIntersection,m=f.clipShadows,_=i.get(f);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{const S=r?0:n,x=S*4;let M=_.clippingState||null;c.value=M,M=h(g,u,x,d);for(let y=0;y!==x;++y)M[y]=e[y];_.clippingState=M,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,u,d,g){const p=f!==null?f.length:0;let m=null;if(p!==0){if(m=c.value,g!==!0||m===null){const _=d+p*4,S=u.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<_)&&(m=new Float32Array(_));for(let x=0,M=d;x!==p;++x,M+=4)o.copy(f[x]).applyMatrix4(S,a),o.normal.toArray(m,M),m[M+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=p,t.numIntersection=0,m}}function nm(i){let t=new WeakMap;function e(o,a){return a===Pa?o.mapping=ts:a===Da&&(o.mapping=es),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Pa||a===Da)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new mf(c.height/2);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class im extends bh{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ji=4,Zl=[.125,.215,.35,.446,.526,.582],ri=20,Ho=new im,Jl=new te;let qo=null;const si=(1+Math.sqrt(5))/2,zi=1/si,Kl=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,si,zi),new U(0,si,-zi),new U(zi,0,si),new U(-zi,0,si),new U(si,zi,0),new U(-si,zi,0)];class Ql{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){qo=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ec(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(qo),t.scissorTest=!1,gr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ts||t.mapping===es?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),qo=this._renderer.getRenderTarget();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:$e,minFilter:$e,generateMipmaps:!1,type:Fs,format:cn,encoding:pi,depthBuffer:!1},s=$l(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$l(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=sm(r)),this._blurMaterial=rm(r,t,e)}return s}_compileMaterial(t){const e=new Hn(this._lodPlanes[0],t);this._renderer.compile(e,Ho)}_sceneToCubeUV(t,e,n,s){const a=new He(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,u=h.toneMapping;h.getClearColor(Jl),h.toneMapping=Rn,h.autoClear=!1;const d=new _h({name:"PMREM.Background",side:Xe,depthWrite:!1,depthTest:!1}),g=new Hn(new js,d);let p=!1;const m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,p=!0):(d.color.copy(Jl),p=!0);for(let _=0;_<6;_++){const S=_%3;S===0?(a.up.set(0,c[_],0),a.lookAt(l[_],0,0)):S===1?(a.up.set(0,0,c[_]),a.lookAt(0,l[_],0)):(a.up.set(0,c[_],0),a.lookAt(0,0,l[_]));const x=this._cubeSize;gr(s,S*x,_>2?x:0,x,x),h.setRenderTarget(s),p&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=f,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===ts||t.mapping===es;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ec()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=tc());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Hn(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;gr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Ho)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Kl[(s-1)%Kl.length];this._blur(t,s-1,s,r,o)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new Hn(this._lodPlanes[s],l),u=l.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*ri-1),p=r/g,m=isFinite(r)?1+Math.floor(h*p):ri;m>ri&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ri}`);const _=[];let S=0;for(let A=0;A<ri;++A){const v=A/p,T=Math.exp(-v*v/2);_.push(T),A===0?S+=T:A<m&&(S+=2*T)}for(let A=0;A<_.length;A++)_[A]=_[A]/S;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=_,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:x}=this;u.dTheta.value=g,u.mipInt.value=x-n;const M=this._sizeLods[s],y=3*M*(s>x-Ji?s-x+Ji:0),b=4*(this._cubeSize-M);gr(e,y,b,3*M,2*M),c.setRenderTarget(e),c.render(f,Ho)}}function sm(i){const t=[],e=[],n=[];let s=i;const r=i-Ji+1+Zl.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>i-Ji?c=Zl[o-i+Ji-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,f=1+l,u=[h,h,f,h,f,f,h,h,f,f,h,f],d=6,g=6,p=3,m=2,_=1,S=new Float32Array(p*g*d),x=new Float32Array(m*g*d),M=new Float32Array(_*g*d);for(let b=0;b<d;b++){const A=b%3*2/3-1,v=b>2?0:-1,T=[A,v,0,A+2/3,v,0,A+2/3,v+1,0,A,v,0,A+2/3,v+1,0,A,v+1,0];S.set(T,p*g*b),x.set(u,m*g*b);const D=[b,b,b,b,b,b];M.set(D,_*g*b)}const y=new qs;y.setAttribute("position",new xn(S,p)),y.setAttribute("uv",new xn(x,m)),y.setAttribute("faceIndex",new xn(M,_)),t.push(y),s>Ji&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function $l(i,t,e){const n=new mi(i,t,e);return n.texture.mapping=Qr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function gr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function rm(i,t,e){const n=new Float32Array(ri),s=new U(0,1,0);return new gi({name:"SphericalGaussianBlur",defines:{n:ri,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ja(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function tc(){return new gi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ja(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function ec(){return new gi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ja(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function Ja(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function om(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Pa||c===Da,h=c===ts||c===es;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=t.get(a);return e===null&&(e=new Ql(i)),f=l?e.fromEquirectangular(a,f):e.fromCubemap(a,f),t.set(a,f),f.texture}else{if(t.has(a))return t.get(a).texture;{const f=a.image;if(l&&f&&f.height>0||h&&f&&s(f)){e===null&&(e=new Ql(i));const u=l?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,u),a.addEventListener("dispose",r),u.texture}else return null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function am(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const s=e(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function lm(i,t,e,n){const s={},r=new WeakMap;function o(f){const u=f.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",o),delete s[u.id];const d=r.get(u);d&&(t.remove(d),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(f,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,e.memory.geometries++),u}function c(f){const u=f.attributes;for(const g in u)t.update(u[g],34962);const d=f.morphAttributes;for(const g in d){const p=d[g];for(let m=0,_=p.length;m<_;m++)t.update(p[m],34962)}}function l(f){const u=[],d=f.index,g=f.attributes.position;let p=0;if(d!==null){const S=d.array;p=d.version;for(let x=0,M=S.length;x<M;x+=3){const y=S[x+0],b=S[x+1],A=S[x+2];u.push(y,b,b,A,A,y)}}else{const S=g.array;p=g.version;for(let x=0,M=S.length/3-1;x<M;x+=3){const y=x+0,b=x+1,A=x+2;u.push(y,b,b,A,A,y)}}const m=new(lh(u)?yh:xh)(u,1);m.version=p;const _=r.get(f);_&&t.remove(_),r.set(f,m)}function h(f){const u=r.get(f);if(u){const d=f.index;d!==null&&u.version<d.version&&l(f)}else l(f);return r.get(f)}return{get:a,update:c,getWireframeAttribute:h}}function cm(i,t,e,n){const s=n.isWebGL2;let r;function o(u){r=u}let a,c;function l(u){a=u.type,c=u.bytesPerElement}function h(u,d){i.drawElements(r,d,a,u*c),e.update(d,r,1)}function f(u,d,g){if(g===0)return;let p,m;if(s)p=i,m="drawElementsInstanced";else if(p=t.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[m](r,d,a,u*c,g),e.update(d,r,g)}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=f}function hm(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case 4:e.triangles+=a*(r/3);break;case 1:e.lines+=a*(r/2);break;case 3:e.lines+=a*(r-1);break;case 2:e.lines+=a*r;break;case 0:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function um(i,t){return i[0]-t[0]}function fm(i,t){return Math.abs(t[1])-Math.abs(i[1])}function dm(i,t,e){const n={},s=new Float32Array(8),r=new WeakMap,o=new ae,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,h,f,u){const d=l.morphTargetInfluences;if(t.isWebGL2===!0){const p=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,m=p!==void 0?p.length:0;let _=r.get(h);if(_===void 0||_.count!==m){let K=function(){F.dispose(),r.delete(h),h.removeEventListener("dispose",K)};var g=K;_!==void 0&&_.texture.dispose();const M=h.morphAttributes.position!==void 0,y=h.morphAttributes.normal!==void 0,b=h.morphAttributes.color!==void 0,A=h.morphAttributes.position||[],v=h.morphAttributes.normal||[],T=h.morphAttributes.color||[];let D=0;M===!0&&(D=1),y===!0&&(D=2),b===!0&&(D=3);let R=h.attributes.position.count*D,q=1;R>t.maxTextureSize&&(q=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);const P=new Float32Array(R*q*4*m),F=new fh(P,R,q,m);F.type=ai,F.needsUpdate=!0;const k=D*4;for(let tt=0;tt<m;tt++){const G=A[tt],rt=v[tt],it=T[tt],H=R*q*4*tt;for(let I=0;I<G.count;I++){const Z=I*k;M===!0&&(o.fromBufferAttribute(G,I),P[H+Z+0]=o.x,P[H+Z+1]=o.y,P[H+Z+2]=o.z,P[H+Z+3]=0),y===!0&&(o.fromBufferAttribute(rt,I),P[H+Z+4]=o.x,P[H+Z+5]=o.y,P[H+Z+6]=o.z,P[H+Z+7]=0),b===!0&&(o.fromBufferAttribute(it,I),P[H+Z+8]=o.x,P[H+Z+9]=o.y,P[H+Z+10]=o.z,P[H+Z+11]=it.itemSize===4?o.w:1)}}_={count:m,texture:F,size:new Wt(R,q)},r.set(h,_),h.addEventListener("dispose",K)}let S=0;for(let M=0;M<d.length;M++)S+=d[M];const x=h.morphTargetsRelative?1:1-S;u.getUniforms().setValue(i,"morphTargetBaseInfluence",x),u.getUniforms().setValue(i,"morphTargetInfluences",d),u.getUniforms().setValue(i,"morphTargetsTexture",_.texture,e),u.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}else{const p=d===void 0?0:d.length;let m=n[h.id];if(m===void 0||m.length!==p){m=[];for(let y=0;y<p;y++)m[y]=[y,0];n[h.id]=m}for(let y=0;y<p;y++){const b=m[y];b[0]=y,b[1]=d[y]}m.sort(fm);for(let y=0;y<8;y++)y<p&&m[y][1]?(a[y][0]=m[y][0],a[y][1]=m[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(um);const _=h.morphAttributes.position,S=h.morphAttributes.normal;let x=0;for(let y=0;y<8;y++){const b=a[y],A=b[0],v=b[1];A!==Number.MAX_SAFE_INTEGER&&v?(_&&h.getAttribute("morphTarget"+y)!==_[A]&&h.setAttribute("morphTarget"+y,_[A]),S&&h.getAttribute("morphNormal"+y)!==S[A]&&h.setAttribute("morphNormal"+y,S[A]),s[y]=v,x+=v):(_&&h.hasAttribute("morphTarget"+y)===!0&&h.deleteAttribute("morphTarget"+y),S&&h.hasAttribute("morphNormal"+y)===!0&&h.deleteAttribute("morphNormal"+y),s[y]=0)}const M=h.morphTargetsRelative?1:1-x;u.getUniforms().setValue(i,"morphTargetBaseInfluence",M),u.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:c}}function pm(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,f=t.get(c,h);return s.get(f)!==l&&(t.update(f),s.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),e.update(c.instanceMatrix,34962),c.instanceColor!==null&&e.update(c.instanceColor,34962)),f}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}const Ch=new In,Th=new fh,Ah=new Ku,Eh=new Sh,nc=[],ic=[],sc=new Float32Array(16),rc=new Float32Array(9),oc=new Float32Array(4);function rs(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=nc[s];if(r===void 0&&(r=new Float32Array(s),nc[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function xe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ye(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function to(i,t){let e=ic[t];e===void 0&&(e=new Int32Array(t),ic[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function mm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function gm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;i.uniform2fv(this.addr,t),ye(e,t)}}function _m(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(xe(e,t))return;i.uniform3fv(this.addr,t),ye(e,t)}}function xm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;i.uniform4fv(this.addr,t),ye(e,t)}}function ym(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ye(e,t)}else{if(xe(e,n))return;oc.set(n),i.uniformMatrix2fv(this.addr,!1,oc),ye(e,n)}}function vm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ye(e,t)}else{if(xe(e,n))return;rc.set(n),i.uniformMatrix3fv(this.addr,!1,rc),ye(e,n)}}function Mm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ye(e,t)}else{if(xe(e,n))return;sc.set(n),i.uniformMatrix4fv(this.addr,!1,sc),ye(e,n)}}function bm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Sm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;i.uniform2iv(this.addr,t),ye(e,t)}}function wm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;i.uniform3iv(this.addr,t),ye(e,t)}}function Cm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;i.uniform4iv(this.addr,t),ye(e,t)}}function Tm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Am(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;i.uniform2uiv(this.addr,t),ye(e,t)}}function Em(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;i.uniform3uiv(this.addr,t),ye(e,t)}}function Pm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;i.uniform4uiv(this.addr,t),ye(e,t)}}function Dm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2D(t||Ch,s)}function Fm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Ah,s)}function Lm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Eh,s)}function Rm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Th,s)}function Im(i){switch(i){case 5126:return mm;case 35664:return gm;case 35665:return _m;case 35666:return xm;case 35674:return ym;case 35675:return vm;case 35676:return Mm;case 5124:case 35670:return bm;case 35667:case 35671:return Sm;case 35668:case 35672:return wm;case 35669:case 35673:return Cm;case 5125:return Tm;case 36294:return Am;case 36295:return Em;case 36296:return Pm;case 35678:case 36198:case 36298:case 36306:case 35682:return Dm;case 35679:case 36299:case 36307:return Fm;case 35680:case 36300:case 36308:case 36293:return Lm;case 36289:case 36303:case 36311:case 36292:return Rm}}function zm(i,t){i.uniform1fv(this.addr,t)}function Bm(i,t){const e=rs(t,this.size,2);i.uniform2fv(this.addr,e)}function Um(i,t){const e=rs(t,this.size,3);i.uniform3fv(this.addr,e)}function Om(i,t){const e=rs(t,this.size,4);i.uniform4fv(this.addr,e)}function Nm(i,t){const e=rs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function km(i,t){const e=rs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Vm(i,t){const e=rs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Gm(i,t){i.uniform1iv(this.addr,t)}function Wm(i,t){i.uniform2iv(this.addr,t)}function Hm(i,t){i.uniform3iv(this.addr,t)}function qm(i,t){i.uniform4iv(this.addr,t)}function jm(i,t){i.uniform1uiv(this.addr,t)}function Xm(i,t){i.uniform2uiv(this.addr,t)}function Ym(i,t){i.uniform3uiv(this.addr,t)}function Zm(i,t){i.uniform4uiv(this.addr,t)}function Jm(i,t,e){const n=this.cache,s=t.length,r=to(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Ch,r[o])}function Km(i,t,e){const n=this.cache,s=t.length,r=to(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Ah,r[o])}function Qm(i,t,e){const n=this.cache,s=t.length,r=to(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Eh,r[o])}function $m(i,t,e){const n=this.cache,s=t.length,r=to(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Th,r[o])}function tg(i){switch(i){case 5126:return zm;case 35664:return Bm;case 35665:return Um;case 35666:return Om;case 35674:return Nm;case 35675:return km;case 35676:return Vm;case 5124:case 35670:return Gm;case 35667:case 35671:return Wm;case 35668:case 35672:return Hm;case 35669:case 35673:return qm;case 5125:return jm;case 36294:return Xm;case 36295:return Ym;case 36296:return Zm;case 35678:case 36198:case 36298:case 36306:case 35682:return Jm;case 35679:case 36299:case 36307:return Km;case 35680:case 36300:case 36308:case 36293:return Qm;case 36289:case 36303:case 36311:case 36292:return $m}}class eg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=Im(e.type)}}class ng{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=tg(e.type)}}class ig{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const jo=/(\w+)(\])?(\[|\.)?/g;function ac(i,t){i.seq.push(t),i.map[t.id]=t}function sg(i,t,e){const n=i.name,s=n.length;for(jo.lastIndex=0;;){const r=jo.exec(n),o=jo.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){ac(e,l===void 0?new eg(a,i,t):new ng(a,i,t));break}else{let f=e.map[a];f===void 0&&(f=new ig(a),ac(e,f)),e=f}}}class qr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,35718);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);sg(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function lc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}let rg=0;function og(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function ag(i){switch(i){case pi:return["Linear","( value )"];case $t:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",i),["Linear","( value )"]}}function cc(i,t,e){const n=i.getShaderParameter(t,35713),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+og(i.getShaderSource(t),o)}else return s}function lg(i,t){const e=ag(t);return"vec4 "+i+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function cg(i,t){let e;switch(t){case Su:e="Linear";break;case wu:e="Reinhard";break;case Cu:e="OptimizedCineon";break;case Tu:e="ACESFilmic";break;case Au:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function hg(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.tangentSpaceNormalMap||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ws).join(`
`)}function ug(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function fg(i,t){const e={},n=i.getProgramParameter(t,35721);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===35674&&(a=2),r.type===35675&&(a=3),r.type===35676&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function ws(i){return i!==""}function hc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function uc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const dg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ba(i){return i.replace(dg,pg)}function pg(i,t){const e=Ot[t];if(e===void 0)throw new Error("Can not resolve #include <"+t+">");return Ba(e)}const mg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fc(i){return i.replace(mg,gg)}function gg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function dc(i){let t="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function _g(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===$c?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===th?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ss&&(t="SHADOWMAP_TYPE_VSM"),t}function xg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ts:case es:t="ENVMAP_TYPE_CUBE";break;case Qr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function yg(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case es:t="ENVMAP_MODE_REFRACTION";break}return t}function vg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ih:t="ENVMAP_BLENDING_MULTIPLY";break;case Mu:t="ENVMAP_BLENDING_MIX";break;case bu:t="ENVMAP_BLENDING_ADD";break}return t}function Mg(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function bg(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=_g(e),l=xg(e),h=yg(e),f=vg(e),u=Mg(e),d=e.isWebGL2?"":hg(e),g=ug(r),p=s.createProgram();let m,_,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=[g].filter(ws).join(`
`),m.length>0&&(m+=`
`),_=[d,g].filter(ws).join(`
`),_.length>0&&(_+=`
`)):(m=[dc(e),"#define SHADER_NAME "+e.shaderName,g,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.supportsVertexTextures?"#define VERTEX_TEXTURES":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.displacementMap&&e.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ws).join(`
`),_=[d,dc(e),"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Rn?"#define TONE_MAPPING":"",e.toneMapping!==Rn?Ot.tonemapping_pars_fragment:"",e.toneMapping!==Rn?cg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ot.encodings_pars_fragment,lg("linearToOutputTexel",e.outputEncoding),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ws).join(`
`)),o=Ba(o),o=hc(o,e),o=uc(o,e),a=Ba(a),a=hc(a,e),a=uc(a,e),o=fc(o),a=fc(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,_=["#define varying in",e.glslVersion===Bl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Bl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const x=S+m+o,M=S+_+a,y=lc(s,35633,x),b=lc(s,35632,M);if(s.attachShader(p,y),s.attachShader(p,b),e.index0AttributeName!==void 0?s.bindAttribLocation(p,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p),i.debug.checkShaderErrors){const T=s.getProgramInfoLog(p).trim(),D=s.getShaderInfoLog(y).trim(),R=s.getShaderInfoLog(b).trim();let q=!0,P=!0;if(s.getProgramParameter(p,35714)===!1){q=!1;const F=cc(s,y,"vertex"),k=cc(s,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,35715)+`

Program Info Log: `+T+`
`+F+`
`+k)}else T!==""?console.warn("THREE.WebGLProgram: Program Info Log:",T):(D===""||R==="")&&(P=!1);P&&(this.diagnostics={runnable:q,programLog:T,vertexShader:{log:D,prefix:m},fragmentShader:{log:R,prefix:_}})}s.deleteShader(y),s.deleteShader(b);let A;this.getUniforms=function(){return A===void 0&&(A=new qr(s,p)),A};let v;return this.getAttributes=function(){return v===void 0&&(v=fg(s,p)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.name=e.shaderName,this.id=rg++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=y,this.fragmentShader=b,this}let Sg=0;class wg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Cg(t),e.set(t,n)),n}}class Cg{constructor(t){this.id=Sg++,this.code=t,this.usedTimes=0}}function Tg(i,t,e,n,s,r,o){const a=new gh,c=new wg,l=[],h=s.isWebGL2,f=s.logarithmicDepthBuffer,u=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v,T,D,R,q){const P=R.fog,F=q.geometry,k=v.isMeshStandardMaterial?R.environment:null,K=(v.isMeshStandardMaterial?e:t).get(v.envMap||k),tt=K&&K.mapping===Qr?K.image.height:null,G=g[v.type];v.precision!==null&&(d=s.getMaxPrecision(v.precision),d!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));const rt=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,it=rt!==void 0?rt.length:0;let H=0;F.morphAttributes.position!==void 0&&(H=1),F.morphAttributes.normal!==void 0&&(H=2),F.morphAttributes.color!==void 0&&(H=3);let I,Z,ot,ut;if(G){const Lt=_n[G];I=Lt.vertexShader,Z=Lt.fragmentShader}else I=v.vertexShader,Z=v.fragmentShader,c.update(v),ot=c.getVertexShaderID(v),ut=c.getFragmentShaderID(v);const N=i.getRenderTarget(),O=v.alphaTest>0,nt=v.clearcoat>0,V=v.iridescence>0;return{isWebGL2:h,shaderID:G,shaderName:v.type,vertexShader:I,fragmentShader:Z,defines:v.defines,customVertexShaderID:ot,customFragmentShaderID:ut,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,instancing:q.isInstancedMesh===!0,instancingColor:q.isInstancedMesh===!0&&q.instanceColor!==null,supportsVertexTextures:u,outputEncoding:N===null?i.outputEncoding:N.isXRRenderTarget===!0?N.texture.encoding:pi,map:!!v.map,matcap:!!v.matcap,envMap:!!K,envMapMode:K&&K.mapping,envMapCubeUVHeight:tt,lightMap:!!v.lightMap,aoMap:!!v.aoMap,emissiveMap:!!v.emissiveMap,bumpMap:!!v.bumpMap,normalMap:!!v.normalMap,objectSpaceNormalMap:v.normalMapType===Xu,tangentSpaceNormalMap:v.normalMapType===ju,decodeVideoTexture:!!v.map&&v.map.isVideoTexture===!0&&v.map.encoding===$t,clearcoat:nt,clearcoatMap:nt&&!!v.clearcoatMap,clearcoatRoughnessMap:nt&&!!v.clearcoatRoughnessMap,clearcoatNormalMap:nt&&!!v.clearcoatNormalMap,iridescence:V,iridescenceMap:V&&!!v.iridescenceMap,iridescenceThicknessMap:V&&!!v.iridescenceThicknessMap,displacementMap:!!v.displacementMap,roughnessMap:!!v.roughnessMap,metalnessMap:!!v.metalnessMap,specularMap:!!v.specularMap,specularIntensityMap:!!v.specularIntensityMap,specularColorMap:!!v.specularColorMap,opaque:v.transparent===!1&&v.blending===Qi,alphaMap:!!v.alphaMap,alphaTest:O,gradientMap:!!v.gradientMap,sheen:v.sheen>0,sheenColorMap:!!v.sheenColorMap,sheenRoughnessMap:!!v.sheenRoughnessMap,transmission:v.transmission>0,transmissionMap:!!v.transmissionMap,thicknessMap:!!v.thicknessMap,combine:v.combine,vertexTangents:!!v.normalMap&&!!F.attributes.tangent,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUvs:!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatMap||!!v.clearcoatRoughnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||!!v.displacementMap||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||!!v.sheenColorMap||!!v.sheenRoughnessMap,uvsVertexOnly:!(v.map||v.bumpMap||v.normalMap||v.specularMap||v.alphaMap||v.emissiveMap||v.roughnessMap||v.metalnessMap||v.clearcoatNormalMap||v.iridescenceMap||v.iridescenceThicknessMap||v.transmission>0||v.transmissionMap||v.thicknessMap||v.specularIntensityMap||v.specularColorMap||v.sheen>0||v.sheenColorMap||v.sheenRoughnessMap)&&!!v.displacementMap,fog:!!P,useFog:v.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:!!v.flatShading,sizeAttenuation:v.sizeAttenuation,logarithmicDepthBuffer:f,skinning:q.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:it,morphTextureStride:H,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:v.toneMapped?i.toneMapping:Rn,physicallyCorrectLights:i.physicallyCorrectLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Wn,flipSided:v.side===Xe,useDepthPacking:!!v.depthPacking,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:v.extensions&&v.extensions.derivatives,extensionFragDepth:v.extensions&&v.extensions.fragDepth,extensionDrawBuffers:v.extensions&&v.extensions.drawBuffers,extensionShaderTextureLOD:v.extensions&&v.extensions.shaderTextureLOD,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function m(v){const T=[];if(v.shaderID?T.push(v.shaderID):(T.push(v.customVertexShaderID),T.push(v.customFragmentShaderID)),v.defines!==void 0)for(const D in v.defines)T.push(D),T.push(v.defines[D]);return v.isRawShaderMaterial===!1&&(_(T,v),S(T,v),T.push(i.outputEncoding)),T.push(v.customProgramCacheKey),T.join()}function _(v,T){v.push(T.precision),v.push(T.outputEncoding),v.push(T.envMapMode),v.push(T.envMapCubeUVHeight),v.push(T.combine),v.push(T.vertexUvs),v.push(T.fogExp2),v.push(T.sizeAttenuation),v.push(T.morphTargetsCount),v.push(T.morphAttributeCount),v.push(T.numDirLights),v.push(T.numPointLights),v.push(T.numSpotLights),v.push(T.numSpotLightMaps),v.push(T.numHemiLights),v.push(T.numRectAreaLights),v.push(T.numDirLightShadows),v.push(T.numPointLightShadows),v.push(T.numSpotLightShadows),v.push(T.numSpotLightShadowsWithMaps),v.push(T.shadowMapType),v.push(T.toneMapping),v.push(T.numClippingPlanes),v.push(T.numClipIntersection),v.push(T.depthPacking)}function S(v,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.map&&a.enable(4),T.matcap&&a.enable(5),T.envMap&&a.enable(6),T.lightMap&&a.enable(7),T.aoMap&&a.enable(8),T.emissiveMap&&a.enable(9),T.bumpMap&&a.enable(10),T.normalMap&&a.enable(11),T.objectSpaceNormalMap&&a.enable(12),T.tangentSpaceNormalMap&&a.enable(13),T.clearcoat&&a.enable(14),T.clearcoatMap&&a.enable(15),T.clearcoatRoughnessMap&&a.enable(16),T.clearcoatNormalMap&&a.enable(17),T.iridescence&&a.enable(18),T.iridescenceMap&&a.enable(19),T.iridescenceThicknessMap&&a.enable(20),T.displacementMap&&a.enable(21),T.specularMap&&a.enable(22),T.roughnessMap&&a.enable(23),T.metalnessMap&&a.enable(24),T.gradientMap&&a.enable(25),T.alphaMap&&a.enable(26),T.alphaTest&&a.enable(27),T.vertexColors&&a.enable(28),T.vertexAlphas&&a.enable(29),T.vertexUvs&&a.enable(30),T.vertexTangents&&a.enable(31),T.uvsVertexOnly&&a.enable(32),v.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.physicallyCorrectLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.specularIntensityMap&&a.enable(15),T.specularColorMap&&a.enable(16),T.transmission&&a.enable(17),T.transmissionMap&&a.enable(18),T.thicknessMap&&a.enable(19),T.sheen&&a.enable(20),T.sheenColorMap&&a.enable(21),T.sheenRoughnessMap&&a.enable(22),T.decodeVideoTexture&&a.enable(23),T.opaque&&a.enable(24),v.push(a.mask)}function x(v){const T=g[v.type];let D;if(T){const R=_n[T];D=uf.clone(R.uniforms)}else D=v.uniforms;return D}function M(v,T){let D;for(let R=0,q=l.length;R<q;R++){const P=l[R];if(P.cacheKey===T){D=P,++D.usedTimes;break}}return D===void 0&&(D=new bg(i,T,v,r),l.push(D)),D}function y(v){if(--v.usedTimes===0){const T=l.indexOf(v);l[T]=l[l.length-1],l.pop(),v.destroy()}}function b(v){c.remove(v)}function A(){c.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:x,acquireProgram:M,releaseProgram:y,releaseShaderCache:b,programs:l,dispose:A}}function Ag(){let i=new WeakMap;function t(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function e(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function Eg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function pc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function mc(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(f,u,d,g,p,m){let _=i[t];return _===void 0?(_={id:f.id,object:f,geometry:u,material:d,groupOrder:g,renderOrder:f.renderOrder,z:p,group:m},i[t]=_):(_.id=f.id,_.object=f,_.geometry=u,_.material=d,_.groupOrder=g,_.renderOrder=f.renderOrder,_.z=p,_.group=m),t++,_}function a(f,u,d,g,p,m){const _=o(f,u,d,g,p,m);d.transmission>0?n.push(_):d.transparent===!0?s.push(_):e.push(_)}function c(f,u,d,g,p,m){const _=o(f,u,d,g,p,m);d.transmission>0?n.unshift(_):d.transparent===!0?s.unshift(_):e.unshift(_)}function l(f,u){e.length>1&&e.sort(f||Eg),n.length>1&&n.sort(u||pc),s.length>1&&s.sort(u||pc)}function h(){for(let f=t,u=i.length;f<u;f++){const d=i[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function Pg(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new mc,i.set(n,[o])):s>=r.length?(o=new mc,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Dg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new te};break;case"SpotLight":e={position:new U,direction:new U,color:new te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new te,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new te,groundColor:new te};break;case"RectAreaLight":e={color:new te,position:new U,halfWidth:new U,halfHeight:new U};break}return i[t.id]=e,e}}}function Fg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Lg=0;function Rg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Ig(i,t){const e=new Dg,n=Fg(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)s.probe.push(new U);const r=new U,o=new Se,a=new Se;function c(h,f){let u=0,d=0,g=0;for(let R=0;R<9;R++)s.probe[R].set(0,0,0);let p=0,m=0,_=0,S=0,x=0,M=0,y=0,b=0,A=0,v=0;h.sort(Rg);const T=f!==!0?Math.PI:1;for(let R=0,q=h.length;R<q;R++){const P=h[R],F=P.color,k=P.intensity,K=P.distance,tt=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=F.r*k*T,d+=F.g*k*T,g+=F.b*k*T;else if(P.isLightProbe)for(let G=0;G<9;G++)s.probe[G].addScaledVector(P.sh.coefficients[G],k);else if(P.isDirectionalLight){const G=e.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity*T),P.castShadow){const rt=P.shadow,it=n.get(P);it.shadowBias=rt.bias,it.shadowNormalBias=rt.normalBias,it.shadowRadius=rt.radius,it.shadowMapSize=rt.mapSize,s.directionalShadow[p]=it,s.directionalShadowMap[p]=tt,s.directionalShadowMatrix[p]=P.shadow.matrix,M++}s.directional[p]=G,p++}else if(P.isSpotLight){const G=e.get(P);G.position.setFromMatrixPosition(P.matrixWorld),G.color.copy(F).multiplyScalar(k*T),G.distance=K,G.coneCos=Math.cos(P.angle),G.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),G.decay=P.decay,s.spot[_]=G;const rt=P.shadow;if(P.map&&(s.spotLightMap[A]=P.map,A++,rt.updateMatrices(P),P.castShadow&&v++),s.spotLightMatrix[_]=rt.matrix,P.castShadow){const it=n.get(P);it.shadowBias=rt.bias,it.shadowNormalBias=rt.normalBias,it.shadowRadius=rt.radius,it.shadowMapSize=rt.mapSize,s.spotShadow[_]=it,s.spotShadowMap[_]=tt,b++}_++}else if(P.isRectAreaLight){const G=e.get(P);G.color.copy(F).multiplyScalar(k),G.halfWidth.set(P.width*.5,0,0),G.halfHeight.set(0,P.height*.5,0),s.rectArea[S]=G,S++}else if(P.isPointLight){const G=e.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity*T),G.distance=P.distance,G.decay=P.decay,P.castShadow){const rt=P.shadow,it=n.get(P);it.shadowBias=rt.bias,it.shadowNormalBias=rt.normalBias,it.shadowRadius=rt.radius,it.shadowMapSize=rt.mapSize,it.shadowCameraNear=rt.camera.near,it.shadowCameraFar=rt.camera.far,s.pointShadow[m]=it,s.pointShadowMap[m]=tt,s.pointShadowMatrix[m]=P.shadow.matrix,y++}s.point[m]=G,m++}else if(P.isHemisphereLight){const G=e.get(P);G.skyColor.copy(P.color).multiplyScalar(k*T),G.groundColor.copy(P.groundColor).multiplyScalar(k*T),s.hemi[x]=G,x++}}S>0&&(t.isWebGL2||i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=dt.LTC_FLOAT_1,s.rectAreaLTC2=dt.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=dt.LTC_HALF_1,s.rectAreaLTC2=dt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=u,s.ambient[1]=d,s.ambient[2]=g;const D=s.hash;(D.directionalLength!==p||D.pointLength!==m||D.spotLength!==_||D.rectAreaLength!==S||D.hemiLength!==x||D.numDirectionalShadows!==M||D.numPointShadows!==y||D.numSpotShadows!==b||D.numSpotMaps!==A)&&(s.directional.length=p,s.spot.length=_,s.rectArea.length=S,s.point.length=m,s.hemi.length=x,s.directionalShadow.length=M,s.directionalShadowMap.length=M,s.pointShadow.length=y,s.pointShadowMap.length=y,s.spotShadow.length=b,s.spotShadowMap.length=b,s.directionalShadowMatrix.length=M,s.pointShadowMatrix.length=y,s.spotLightMatrix.length=b+A-v,s.spotLightMap.length=A,s.numSpotLightShadowsWithMaps=v,D.directionalLength=p,D.pointLength=m,D.spotLength=_,D.rectAreaLength=S,D.hemiLength=x,D.numDirectionalShadows=M,D.numPointShadows=y,D.numSpotShadows=b,D.numSpotMaps=A,s.version=Lg++)}function l(h,f){let u=0,d=0,g=0,p=0,m=0;const _=f.matrixWorldInverse;for(let S=0,x=h.length;S<x;S++){const M=h[S];if(M.isDirectionalLight){const y=s.directional[u];y.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(_),u++}else if(M.isSpotLight){const y=s.spot[g];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(_),y.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(_),g++}else if(M.isRectAreaLight){const y=s.rectArea[p];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(_),a.identity(),o.copy(M.matrixWorld),o.premultiply(_),a.extractRotation(o),y.halfWidth.set(M.width*.5,0,0),y.halfHeight.set(0,M.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),p++}else if(M.isPointLight){const y=s.point[d];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(_),d++}else if(M.isHemisphereLight){const y=s.hemi[m];y.direction.setFromMatrixPosition(M.matrixWorld),y.direction.transformDirection(_),m++}}}return{setup:c,setupView:l,state:s}}function gc(i,t){const e=new Ig(i,t),n=[],s=[];function r(){n.length=0,s.length=0}function o(f){n.push(f)}function a(f){s.push(f)}function c(f){e.setup(n,f)}function l(f){e.setupView(n,f)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:e},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function zg(i,t){let e=new WeakMap;function n(r,o=0){const a=e.get(r);let c;return a===void 0?(c=new gc(i,t),e.set(r,[c])):o>=a.length?(c=new gc(i,t),a.push(c)):c=a[o],c}function s(){e=new WeakMap}return{get:n,dispose:s}}class Bg extends $r{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Hu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Ug extends $r{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new U,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.referencePosition.copy(t.referencePosition),this.nearDistance=t.nearDistance,this.farDistance=t.farDistance,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Og=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ng=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function kg(i,t,e){let n=new Ya;const s=new Wt,r=new Wt,o=new ae,a=new Bg({depthPacking:qu}),c=new Ug,l={},h=e.maxTextureSize,f={[Xn]:Xe,[Xe]:Xn,[Wn]:Wn},u=new gi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Wt},radius:{value:4}},vertexShader:Og,fragmentShader:Ng}),d=u.clone();d.defines.HORIZONTAL_PASS=1;const g=new qs;g.setAttribute("position",new xn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new Hn(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$c,this.render=function(M,y,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;const A=i.getRenderTarget(),v=i.getActiveCubeFace(),T=i.getActiveMipmapLevel(),D=i.state;D.setBlending(qn),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);for(let R=0,q=M.length;R<q;R++){const P=M[R],F=P.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",P,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;s.copy(F.mapSize);const k=F.getFrameExtents();if(s.multiply(k),r.copy(F.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/k.x),s.x=r.x*k.x,F.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/k.y),s.y=r.y*k.y,F.mapSize.y=r.y)),F.map===null){const tt=this.type!==Ss?{minFilter:Ie,magFilter:Ie}:{};F.map=new mi(s.x,s.y,tt),F.map.texture.name=P.name+".shadowMap",F.camera.updateProjectionMatrix()}i.setRenderTarget(F.map),i.clear();const K=F.getViewportCount();for(let tt=0;tt<K;tt++){const G=F.getViewport(tt);o.set(r.x*G.x,r.y*G.y,r.x*G.z,r.y*G.w),D.viewport(o),F.updateMatrices(P,tt),n=F.getFrustum(),x(y,b,F.camera,P,this.type)}F.isPointLightShadow!==!0&&this.type===Ss&&_(F,b),F.needsUpdate=!1}m.needsUpdate=!1,i.setRenderTarget(A,v,T)};function _(M,y){const b=t.update(p);u.defines.VSM_SAMPLES!==M.blurSamples&&(u.defines.VSM_SAMPLES=M.blurSamples,d.defines.VSM_SAMPLES=M.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new mi(s.x,s.y)),u.uniforms.shadow_pass.value=M.map.texture,u.uniforms.resolution.value=M.mapSize,u.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(y,null,b,u,p,null),d.uniforms.shadow_pass.value=M.mapPass.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(y,null,b,d,p,null)}function S(M,y,b,A,v,T){let D=null;const R=b.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(R!==void 0)D=R;else if(D=b.isPointLight===!0?c:a,i.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0){const q=D.uuid,P=y.uuid;let F=l[q];F===void 0&&(F={},l[q]=F);let k=F[P];k===void 0&&(k=D.clone(),F[P]=k),D=k}return D.visible=y.visible,D.wireframe=y.wireframe,T===Ss?D.side=y.shadowSide!==null?y.shadowSide:y.side:D.side=y.shadowSide!==null?y.shadowSide:f[y.side],D.alphaMap=y.alphaMap,D.alphaTest=y.alphaTest,D.map=y.map,D.clipShadows=y.clipShadows,D.clippingPlanes=y.clippingPlanes,D.clipIntersection=y.clipIntersection,D.displacementMap=y.displacementMap,D.displacementScale=y.displacementScale,D.displacementBias=y.displacementBias,D.wireframeLinewidth=y.wireframeLinewidth,D.linewidth=y.linewidth,b.isPointLight===!0&&D.isMeshDistanceMaterial===!0&&(D.referencePosition.setFromMatrixPosition(b.matrixWorld),D.nearDistance=A,D.farDistance=v),D}function x(M,y,b,A,v){if(M.visible===!1)return;if(M.layers.test(y.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&v===Ss)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,M.matrixWorld);const R=t.update(M),q=M.material;if(Array.isArray(q)){const P=R.groups;for(let F=0,k=P.length;F<k;F++){const K=P[F],tt=q[K.materialIndex];if(tt&&tt.visible){const G=S(M,tt,A,b.near,b.far,v);i.renderBufferDirect(b,null,R,G,M,K)}}}else if(q.visible){const P=S(M,q,A,b.near,b.far,v);i.renderBufferDirect(b,null,R,P,M,null)}}const D=M.children;for(let R=0,q=D.length;R<q;R++)x(D[R],y,b,A,v)}}function Vg(i,t,e){const n=e.isWebGL2;function s(){let L=!1;const j=new ae;let at=null;const pt=new ae(0,0,0,0);return{setMask:function(bt){at!==bt&&!L&&(i.colorMask(bt,bt,bt,bt),at=bt)},setLocked:function(bt){L=bt},setClear:function(bt,Rt,ue,he,dn){dn===!0&&(bt*=he,Rt*=he,ue*=he),j.set(bt,Rt,ue,he),pt.equals(j)===!1&&(i.clearColor(bt,Rt,ue,he),pt.copy(j))},reset:function(){L=!1,at=null,pt.set(-1,0,0,0)}}}function r(){let L=!1,j=null,at=null,pt=null;return{setTest:function(bt){bt?O(2929):nt(2929)},setMask:function(bt){j!==bt&&!L&&(i.depthMask(bt),j=bt)},setFunc:function(bt){if(at!==bt){switch(bt){case pu:i.depthFunc(512);break;case mu:i.depthFunc(519);break;case gu:i.depthFunc(513);break;case Ea:i.depthFunc(515);break;case _u:i.depthFunc(514);break;case xu:i.depthFunc(518);break;case yu:i.depthFunc(516);break;case vu:i.depthFunc(517);break;default:i.depthFunc(515)}at=bt}},setLocked:function(bt){L=bt},setClear:function(bt){pt!==bt&&(i.clearDepth(bt),pt=bt)},reset:function(){L=!1,j=null,at=null,pt=null}}}function o(){let L=!1,j=null,at=null,pt=null,bt=null,Rt=null,ue=null,he=null,dn=null;return{setTest:function(Xt){L||(Xt?O(2960):nt(2960))},setMask:function(Xt){j!==Xt&&!L&&(i.stencilMask(Xt),j=Xt)},setFunc:function(Xt,Ze,ee){(at!==Xt||pt!==Ze||bt!==ee)&&(i.stencilFunc(Xt,Ze,ee),at=Xt,pt=Ze,bt=ee)},setOp:function(Xt,Ze,ee){(Rt!==Xt||ue!==Ze||he!==ee)&&(i.stencilOp(Xt,Ze,ee),Rt=Xt,ue=Ze,he=ee)},setLocked:function(Xt){L=Xt},setClear:function(Xt){dn!==Xt&&(i.clearStencil(Xt),dn=Xt)},reset:function(){L=!1,j=null,at=null,pt=null,bt=null,Rt=null,ue=null,he=null,dn=null}}}const a=new s,c=new r,l=new o,h=new WeakMap,f=new WeakMap;let u={},d={},g=new WeakMap,p=[],m=null,_=!1,S=null,x=null,M=null,y=null,b=null,A=null,v=null,T=!1,D=null,R=null,q=null,P=null,F=null;const k=i.getParameter(35661);let K=!1,tt=0;const G=i.getParameter(7938);G.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(G)[1]),K=tt>=1):G.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),K=tt>=2);let rt=null,it={};const H=i.getParameter(3088),I=i.getParameter(2978),Z=new ae().fromArray(H),ot=new ae().fromArray(I);function ut(L,j,at){const pt=new Uint8Array(4),bt=i.createTexture();i.bindTexture(L,bt),i.texParameteri(L,10241,9728),i.texParameteri(L,10240,9728);for(let Rt=0;Rt<at;Rt++)i.texImage2D(j+Rt,0,6408,1,1,0,6408,5121,pt);return bt}const N={};N[3553]=ut(3553,3553,1),N[34067]=ut(34067,34069,6),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),O(2929),c.setFunc(Ea),Et(!1),ct(rl),O(2884),Y(qn);function O(L){u[L]!==!0&&(i.enable(L),u[L]=!0)}function nt(L){u[L]!==!1&&(i.disable(L),u[L]=!1)}function V(L,j){return d[L]!==j?(i.bindFramebuffer(L,j),d[L]=j,n&&(L===36009&&(d[36160]=j),L===36160&&(d[36009]=j)),!0):!1}function lt(L,j){let at=p,pt=!1;if(L)if(at=g.get(j),at===void 0&&(at=[],g.set(j,at)),L.isWebGLMultipleRenderTargets){const bt=L.texture;if(at.length!==bt.length||at[0]!==36064){for(let Rt=0,ue=bt.length;Rt<ue;Rt++)at[Rt]=36064+Rt;at.length=bt.length,pt=!0}}else at[0]!==36064&&(at[0]=36064,pt=!0);else at[0]!==1029&&(at[0]=1029,pt=!0);pt&&(e.isWebGL2?i.drawBuffers(at):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(at))}function Lt(L){return m!==L?(i.useProgram(L),m=L,!0):!1}const _t={[Yi]:32774,[iu]:32778,[su]:32779};if(n)_t[cl]=32775,_t[hl]=32776;else{const L=t.get("EXT_blend_minmax");L!==null&&(_t[cl]=L.MIN_EXT,_t[hl]=L.MAX_EXT)}const St={[ru]:0,[ou]:1,[au]:768,[eh]:770,[du]:776,[uu]:774,[cu]:772,[lu]:769,[nh]:771,[fu]:775,[hu]:773};function Y(L,j,at,pt,bt,Rt,ue,he){if(L===qn){_===!0&&(nt(3042),_=!1);return}if(_===!1&&(O(3042),_=!0),L!==nu){if(L!==S||he!==T){if((x!==Yi||b!==Yi)&&(i.blendEquation(32774),x=Yi,b=Yi),he)switch(L){case Qi:i.blendFuncSeparate(1,771,1,771);break;case ol:i.blendFunc(1,1);break;case al:i.blendFuncSeparate(0,769,0,1);break;case ll:i.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Qi:i.blendFuncSeparate(770,771,1,771);break;case ol:i.blendFunc(770,1);break;case al:i.blendFuncSeparate(0,769,0,1);break;case ll:i.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}M=null,y=null,A=null,v=null,S=L,T=he}return}bt=bt||j,Rt=Rt||at,ue=ue||pt,(j!==x||bt!==b)&&(i.blendEquationSeparate(_t[j],_t[bt]),x=j,b=bt),(at!==M||pt!==y||Rt!==A||ue!==v)&&(i.blendFuncSeparate(St[at],St[pt],St[Rt],St[ue]),M=at,y=pt,A=Rt,v=ue),S=L,T=!1}function xt(L,j){L.side===Wn?nt(2884):O(2884);let at=L.side===Xe;j&&(at=!at),Et(at),L.blending===Qi&&L.transparent===!1?Y(qn):Y(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.premultipliedAlpha),c.setFunc(L.depthFunc),c.setTest(L.depthTest),c.setMask(L.depthWrite),a.setMask(L.colorWrite);const pt=L.stencilWrite;l.setTest(pt),pt&&(l.setMask(L.stencilWriteMask),l.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),l.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),kt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?O(32926):nt(32926)}function Et(L){D!==L&&(L?i.frontFace(2304):i.frontFace(2305),D=L)}function ct(L){L!==tu?(O(2884),L!==R&&(L===rl?i.cullFace(1029):L===eu?i.cullFace(1028):i.cullFace(1032))):nt(2884),R=L}function Zt(L){L!==q&&(K&&i.lineWidth(L),q=L)}function kt(L,j,at){L?(O(32823),(P!==j||F!==at)&&(i.polygonOffset(j,at),P=j,F=at)):nt(32823)}function Qt(L){L?O(3089):nt(3089)}function ze(L){L===void 0&&(L=33984+k-1),rt!==L&&(i.activeTexture(L),rt=L)}function E(L,j,at){at===void 0&&(rt===null?at=33984+k-1:at=rt);let pt=it[at];pt===void 0&&(pt={type:void 0,texture:void 0},it[at]=pt),(pt.type!==L||pt.texture!==j)&&(rt!==at&&(i.activeTexture(at),rt=at),i.bindTexture(L,j||N[L]),pt.type=L,pt.texture=j)}function w(){const L=it[rt];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function W(){try{i.compressedTexImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ht(){try{i.compressedTexImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ft(){try{i.texSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function mt(){try{i.texSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Pt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function gt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Q(){try{i.texStorage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function At(){try{i.texStorage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Mt(){try{i.texImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function vt(){try{i.texImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function wt(L){Z.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),Z.copy(L))}function Ct(L){ot.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),ot.copy(L))}function It(L,j){let at=f.get(j);at===void 0&&(at=new WeakMap,f.set(j,at));let pt=at.get(L);pt===void 0&&(pt=i.getUniformBlockIndex(j,L.name),at.set(L,pt))}function Jt(L,j){const pt=f.get(j).get(L);h.get(j)!==pt&&(i.uniformBlockBinding(j,pt,L.__bindingPointIndex),h.set(j,pt))}function Yt(){i.disable(3042),i.disable(2884),i.disable(2929),i.disable(32823),i.disable(3089),i.disable(2960),i.disable(32926),i.blendEquation(32774),i.blendFunc(1,0),i.blendFuncSeparate(1,0,1,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(513),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(519,0,4294967295),i.stencilOp(7680,7680,7680),i.clearStencil(0),i.cullFace(1029),i.frontFace(2305),i.polygonOffset(0,0),i.activeTexture(33984),i.bindFramebuffer(36160,null),n===!0&&(i.bindFramebuffer(36009,null),i.bindFramebuffer(36008,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},rt=null,it={},d={},g=new WeakMap,p=[],m=null,_=!1,S=null,x=null,M=null,y=null,b=null,A=null,v=null,T=!1,D=null,R=null,q=null,P=null,F=null,Z.set(0,0,i.canvas.width,i.canvas.height),ot.set(0,0,i.canvas.width,i.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:O,disable:nt,bindFramebuffer:V,drawBuffers:lt,useProgram:Lt,setBlending:Y,setMaterial:xt,setFlipSided:Et,setCullFace:ct,setLineWidth:Zt,setPolygonOffset:kt,setScissorTest:Qt,activeTexture:ze,bindTexture:E,unbindTexture:w,compressedTexImage2D:W,compressedTexImage3D:ht,texImage2D:Mt,texImage3D:vt,updateUBOMapping:It,uniformBlockBinding:Jt,texStorage2D:Q,texStorage3D:At,texSubImage2D:ft,texSubImage3D:mt,compressedTexSubImage2D:Pt,compressedTexSubImage3D:gt,scissor:wt,viewport:Ct,reset:Yt}}function Gg(i,t,e,n,s,r,o){const a=s.isWebGL2,c=s.maxTextures,l=s.maxCubemapSize,h=s.maxTextureSize,f=s.maxSamples,u=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let p;const m=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(E,w){return _?new OffscreenCanvas(E,w):Zr("canvas")}function x(E,w,W,ht){let ft=1;if((E.width>ht||E.height>ht)&&(ft=ht/Math.max(E.width,E.height)),ft<1||w===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){const mt=w?Ia:Math.floor,Pt=mt(ft*E.width),gt=mt(ft*E.height);p===void 0&&(p=S(Pt,gt));const Q=W?S(Pt,gt):p;return Q.width=Pt,Q.height=gt,Q.getContext("2d").drawImage(E,0,0,Pt,gt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+Pt+"x"+gt+")."),Q}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function M(E){return Ol(E.width)&&Ol(E.height)}function y(E){return a?!1:E.wrapS!==ln||E.wrapT!==ln||E.minFilter!==Ie&&E.minFilter!==$e}function b(E,w){return E.generateMipmaps&&w&&E.minFilter!==Ie&&E.minFilter!==$e}function A(E){i.generateMipmap(E)}function v(E,w,W,ht,ft=!1){if(a===!1)return w;if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let mt=w;return w===6403&&(W===5126&&(mt=33326),W===5131&&(mt=33325),W===5121&&(mt=33321)),w===33319&&(W===5126&&(mt=33328),W===5131&&(mt=33327),W===5121&&(mt=33323)),w===6408&&(W===5126&&(mt=34836),W===5131&&(mt=34842),W===5121&&(mt=ht===$t&&ft===!1?35907:32856),W===32819&&(mt=32854),W===32820&&(mt=32855)),(mt===33325||mt===33326||mt===33327||mt===33328||mt===34842||mt===34836)&&t.get("EXT_color_buffer_float"),mt}function T(E,w,W){return b(E,W)===!0||E.isFramebufferTexture&&E.minFilter!==Ie&&E.minFilter!==$e?Math.log2(Math.max(w.width,w.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?w.mipmaps.length:1}function D(E){return E===Ie||E===ul||E===po?9728:9729}function R(E){const w=E.target;w.removeEventListener("dispose",R),P(w),w.isVideoTexture&&g.delete(w)}function q(E){const w=E.target;w.removeEventListener("dispose",q),k(w)}function P(E){const w=n.get(E);if(w.__webglInit===void 0)return;const W=E.source,ht=m.get(W);if(ht){const ft=ht[w.__cacheKey];ft.usedTimes--,ft.usedTimes===0&&F(E),Object.keys(ht).length===0&&m.delete(W)}n.remove(E)}function F(E){const w=n.get(E);i.deleteTexture(w.__webglTexture);const W=E.source,ht=m.get(W);delete ht[w.__cacheKey],o.memory.textures--}function k(E){const w=E.texture,W=n.get(E),ht=n.get(w);if(ht.__webglTexture!==void 0&&(i.deleteTexture(ht.__webglTexture),o.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let ft=0;ft<6;ft++)i.deleteFramebuffer(W.__webglFramebuffer[ft]),W.__webglDepthbuffer&&i.deleteRenderbuffer(W.__webglDepthbuffer[ft]);else{if(i.deleteFramebuffer(W.__webglFramebuffer),W.__webglDepthbuffer&&i.deleteRenderbuffer(W.__webglDepthbuffer),W.__webglMultisampledFramebuffer&&i.deleteFramebuffer(W.__webglMultisampledFramebuffer),W.__webglColorRenderbuffer)for(let ft=0;ft<W.__webglColorRenderbuffer.length;ft++)W.__webglColorRenderbuffer[ft]&&i.deleteRenderbuffer(W.__webglColorRenderbuffer[ft]);W.__webglDepthRenderbuffer&&i.deleteRenderbuffer(W.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let ft=0,mt=w.length;ft<mt;ft++){const Pt=n.get(w[ft]);Pt.__webglTexture&&(i.deleteTexture(Pt.__webglTexture),o.memory.textures--),n.remove(w[ft])}n.remove(w),n.remove(E)}let K=0;function tt(){K=0}function G(){const E=K;return E>=c&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+c),K+=1,E}function rt(E){const w=[];return w.push(E.wrapS),w.push(E.wrapT),w.push(E.wrapR||0),w.push(E.magFilter),w.push(E.minFilter),w.push(E.anisotropy),w.push(E.internalFormat),w.push(E.format),w.push(E.type),w.push(E.generateMipmaps),w.push(E.premultiplyAlpha),w.push(E.flipY),w.push(E.unpackAlignment),w.push(E.encoding),w.join()}function it(E,w){const W=n.get(E);if(E.isVideoTexture&&Qt(E),E.isRenderTargetTexture===!1&&E.version>0&&W.__version!==E.version){const ht=E.image;if(ht===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ht.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{nt(W,E,w);return}}e.bindTexture(3553,W.__webglTexture,33984+w)}function H(E,w){const W=n.get(E);if(E.version>0&&W.__version!==E.version){nt(W,E,w);return}e.bindTexture(35866,W.__webglTexture,33984+w)}function I(E,w){const W=n.get(E);if(E.version>0&&W.__version!==E.version){nt(W,E,w);return}e.bindTexture(32879,W.__webglTexture,33984+w)}function Z(E,w){const W=n.get(E);if(E.version>0&&W.__version!==E.version){V(W,E,w);return}e.bindTexture(34067,W.__webglTexture,33984+w)}const ot={[Fa]:10497,[ln]:33071,[La]:33648},ut={[Ie]:9728,[ul]:9984,[po]:9986,[$e]:9729,[Eu]:9985,[Ds]:9987};function N(E,w,W){if(W?(i.texParameteri(E,10242,ot[w.wrapS]),i.texParameteri(E,10243,ot[w.wrapT]),(E===32879||E===35866)&&i.texParameteri(E,32882,ot[w.wrapR]),i.texParameteri(E,10240,ut[w.magFilter]),i.texParameteri(E,10241,ut[w.minFilter])):(i.texParameteri(E,10242,33071),i.texParameteri(E,10243,33071),(E===32879||E===35866)&&i.texParameteri(E,32882,33071),(w.wrapS!==ln||w.wrapT!==ln)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(E,10240,D(w.magFilter)),i.texParameteri(E,10241,D(w.minFilter)),w.minFilter!==Ie&&w.minFilter!==$e&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),t.has("EXT_texture_filter_anisotropic")===!0){const ht=t.get("EXT_texture_filter_anisotropic");if(w.magFilter===Ie||w.minFilter!==po&&w.minFilter!==Ds||w.type===ai&&t.has("OES_texture_float_linear")===!1||a===!1&&w.type===Fs&&t.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||n.get(w).__currentAnisotropy)&&(i.texParameterf(E,ht.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy)}}function O(E,w){let W=!1;E.__webglInit===void 0&&(E.__webglInit=!0,w.addEventListener("dispose",R));const ht=w.source;let ft=m.get(ht);ft===void 0&&(ft={},m.set(ht,ft));const mt=rt(w);if(mt!==E.__cacheKey){ft[mt]===void 0&&(ft[mt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,W=!0),ft[mt].usedTimes++;const Pt=ft[E.__cacheKey];Pt!==void 0&&(ft[E.__cacheKey].usedTimes--,Pt.usedTimes===0&&F(w)),E.__cacheKey=mt,E.__webglTexture=ft[mt].texture}return W}function nt(E,w,W){let ht=3553;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ht=35866),w.isData3DTexture&&(ht=32879);const ft=O(E,w),mt=w.source;e.bindTexture(ht,E.__webglTexture,33984+W);const Pt=n.get(mt);if(mt.version!==Pt.__version||ft===!0){e.activeTexture(33984+W),i.pixelStorei(37440,w.flipY),i.pixelStorei(37441,w.premultiplyAlpha),i.pixelStorei(3317,w.unpackAlignment),i.pixelStorei(37443,0);const gt=y(w)&&M(w.image)===!1;let Q=x(w.image,gt,!1,h);Q=ze(w,Q);const At=M(Q)||a,Mt=r.convert(w.format,w.encoding);let vt=r.convert(w.type),wt=v(w.internalFormat,Mt,vt,w.encoding,w.isVideoTexture);N(ht,w,At);let Ct;const It=w.mipmaps,Jt=a&&w.isVideoTexture!==!0,Yt=Pt.__version===void 0||ft===!0,L=T(w,Q,At);if(w.isDepthTexture)wt=6402,a?w.type===ai?wt=36012:w.type===oi?wt=33190:w.type===$i?wt=35056:wt=33189:w.type===ai&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===li&&wt===6402&&w.type!==rh&&w.type!==oi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=oi,vt=r.convert(w.type)),w.format===ns&&wt===6402&&(wt=34041,w.type!==$i&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=$i,vt=r.convert(w.type))),Yt&&(Jt?e.texStorage2D(3553,1,wt,Q.width,Q.height):e.texImage2D(3553,0,wt,Q.width,Q.height,0,Mt,vt,null));else if(w.isDataTexture)if(It.length>0&&At){Jt&&Yt&&e.texStorage2D(3553,L,wt,It[0].width,It[0].height);for(let j=0,at=It.length;j<at;j++)Ct=It[j],Jt?e.texSubImage2D(3553,j,0,0,Ct.width,Ct.height,Mt,vt,Ct.data):e.texImage2D(3553,j,wt,Ct.width,Ct.height,0,Mt,vt,Ct.data);w.generateMipmaps=!1}else Jt?(Yt&&e.texStorage2D(3553,L,wt,Q.width,Q.height),e.texSubImage2D(3553,0,0,0,Q.width,Q.height,Mt,vt,Q.data)):e.texImage2D(3553,0,wt,Q.width,Q.height,0,Mt,vt,Q.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Jt&&Yt&&e.texStorage3D(35866,L,wt,It[0].width,It[0].height,Q.depth);for(let j=0,at=It.length;j<at;j++)Ct=It[j],w.format!==cn?Mt!==null?Jt?e.compressedTexSubImage3D(35866,j,0,0,0,Ct.width,Ct.height,Q.depth,Mt,Ct.data,0,0):e.compressedTexImage3D(35866,j,wt,Ct.width,Ct.height,Q.depth,0,Ct.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Jt?e.texSubImage3D(35866,j,0,0,0,Ct.width,Ct.height,Q.depth,Mt,vt,Ct.data):e.texImage3D(35866,j,wt,Ct.width,Ct.height,Q.depth,0,Mt,vt,Ct.data)}else{Jt&&Yt&&e.texStorage2D(3553,L,wt,It[0].width,It[0].height);for(let j=0,at=It.length;j<at;j++)Ct=It[j],w.format!==cn?Mt!==null?Jt?e.compressedTexSubImage2D(3553,j,0,0,Ct.width,Ct.height,Mt,Ct.data):e.compressedTexImage2D(3553,j,wt,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Jt?e.texSubImage2D(3553,j,0,0,Ct.width,Ct.height,Mt,vt,Ct.data):e.texImage2D(3553,j,wt,Ct.width,Ct.height,0,Mt,vt,Ct.data)}else if(w.isDataArrayTexture)Jt?(Yt&&e.texStorage3D(35866,L,wt,Q.width,Q.height,Q.depth),e.texSubImage3D(35866,0,0,0,0,Q.width,Q.height,Q.depth,Mt,vt,Q.data)):e.texImage3D(35866,0,wt,Q.width,Q.height,Q.depth,0,Mt,vt,Q.data);else if(w.isData3DTexture)Jt?(Yt&&e.texStorage3D(32879,L,wt,Q.width,Q.height,Q.depth),e.texSubImage3D(32879,0,0,0,0,Q.width,Q.height,Q.depth,Mt,vt,Q.data)):e.texImage3D(32879,0,wt,Q.width,Q.height,Q.depth,0,Mt,vt,Q.data);else if(w.isFramebufferTexture){if(Yt)if(Jt)e.texStorage2D(3553,L,wt,Q.width,Q.height);else{let j=Q.width,at=Q.height;for(let pt=0;pt<L;pt++)e.texImage2D(3553,pt,wt,j,at,0,Mt,vt,null),j>>=1,at>>=1}}else if(It.length>0&&At){Jt&&Yt&&e.texStorage2D(3553,L,wt,It[0].width,It[0].height);for(let j=0,at=It.length;j<at;j++)Ct=It[j],Jt?e.texSubImage2D(3553,j,0,0,Mt,vt,Ct):e.texImage2D(3553,j,wt,Mt,vt,Ct);w.generateMipmaps=!1}else Jt?(Yt&&e.texStorage2D(3553,L,wt,Q.width,Q.height),e.texSubImage2D(3553,0,0,0,Mt,vt,Q)):e.texImage2D(3553,0,wt,Mt,vt,Q);b(w,At)&&A(ht),Pt.__version=mt.version,w.onUpdate&&w.onUpdate(w)}E.__version=w.version}function V(E,w,W){if(w.image.length!==6)return;const ht=O(E,w),ft=w.source;e.bindTexture(34067,E.__webglTexture,33984+W);const mt=n.get(ft);if(ft.version!==mt.__version||ht===!0){e.activeTexture(33984+W),i.pixelStorei(37440,w.flipY),i.pixelStorei(37441,w.premultiplyAlpha),i.pixelStorei(3317,w.unpackAlignment),i.pixelStorei(37443,0);const Pt=w.isCompressedTexture||w.image[0].isCompressedTexture,gt=w.image[0]&&w.image[0].isDataTexture,Q=[];for(let j=0;j<6;j++)!Pt&&!gt?Q[j]=x(w.image[j],!1,!0,l):Q[j]=gt?w.image[j].image:w.image[j],Q[j]=ze(w,Q[j]);const At=Q[0],Mt=M(At)||a,vt=r.convert(w.format,w.encoding),wt=r.convert(w.type),Ct=v(w.internalFormat,vt,wt,w.encoding),It=a&&w.isVideoTexture!==!0,Jt=mt.__version===void 0||ht===!0;let Yt=T(w,At,Mt);N(34067,w,Mt);let L;if(Pt){It&&Jt&&e.texStorage2D(34067,Yt,Ct,At.width,At.height);for(let j=0;j<6;j++){L=Q[j].mipmaps;for(let at=0;at<L.length;at++){const pt=L[at];w.format!==cn?vt!==null?It?e.compressedTexSubImage2D(34069+j,at,0,0,pt.width,pt.height,vt,pt.data):e.compressedTexImage2D(34069+j,at,Ct,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):It?e.texSubImage2D(34069+j,at,0,0,pt.width,pt.height,vt,wt,pt.data):e.texImage2D(34069+j,at,Ct,pt.width,pt.height,0,vt,wt,pt.data)}}}else{L=w.mipmaps,It&&Jt&&(L.length>0&&Yt++,e.texStorage2D(34067,Yt,Ct,Q[0].width,Q[0].height));for(let j=0;j<6;j++)if(gt){It?e.texSubImage2D(34069+j,0,0,0,Q[j].width,Q[j].height,vt,wt,Q[j].data):e.texImage2D(34069+j,0,Ct,Q[j].width,Q[j].height,0,vt,wt,Q[j].data);for(let at=0;at<L.length;at++){const bt=L[at].image[j].image;It?e.texSubImage2D(34069+j,at+1,0,0,bt.width,bt.height,vt,wt,bt.data):e.texImage2D(34069+j,at+1,Ct,bt.width,bt.height,0,vt,wt,bt.data)}}else{It?e.texSubImage2D(34069+j,0,0,0,vt,wt,Q[j]):e.texImage2D(34069+j,0,Ct,vt,wt,Q[j]);for(let at=0;at<L.length;at++){const pt=L[at];It?e.texSubImage2D(34069+j,at+1,0,0,vt,wt,pt.image[j]):e.texImage2D(34069+j,at+1,Ct,vt,wt,pt.image[j])}}}b(w,Mt)&&A(34067),mt.__version=ft.version,w.onUpdate&&w.onUpdate(w)}E.__version=w.version}function lt(E,w,W,ht,ft){const mt=r.convert(W.format,W.encoding),Pt=r.convert(W.type),gt=v(W.internalFormat,mt,Pt,W.encoding);n.get(w).__hasExternalTextures||(ft===32879||ft===35866?e.texImage3D(ft,0,gt,w.width,w.height,w.depth,0,mt,Pt,null):e.texImage2D(ft,0,gt,w.width,w.height,0,mt,Pt,null)),e.bindFramebuffer(36160,E),kt(w)?u.framebufferTexture2DMultisampleEXT(36160,ht,ft,n.get(W).__webglTexture,0,Zt(w)):(ft===3553||ft>=34069&&ft<=34074)&&i.framebufferTexture2D(36160,ht,ft,n.get(W).__webglTexture,0),e.bindFramebuffer(36160,null)}function Lt(E,w,W){if(i.bindRenderbuffer(36161,E),w.depthBuffer&&!w.stencilBuffer){let ht=33189;if(W||kt(w)){const ft=w.depthTexture;ft&&ft.isDepthTexture&&(ft.type===ai?ht=36012:ft.type===oi&&(ht=33190));const mt=Zt(w);kt(w)?u.renderbufferStorageMultisampleEXT(36161,mt,ht,w.width,w.height):i.renderbufferStorageMultisample(36161,mt,ht,w.width,w.height)}else i.renderbufferStorage(36161,ht,w.width,w.height);i.framebufferRenderbuffer(36160,36096,36161,E)}else if(w.depthBuffer&&w.stencilBuffer){const ht=Zt(w);W&&kt(w)===!1?i.renderbufferStorageMultisample(36161,ht,35056,w.width,w.height):kt(w)?u.renderbufferStorageMultisampleEXT(36161,ht,35056,w.width,w.height):i.renderbufferStorage(36161,34041,w.width,w.height),i.framebufferRenderbuffer(36160,33306,36161,E)}else{const ht=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let ft=0;ft<ht.length;ft++){const mt=ht[ft],Pt=r.convert(mt.format,mt.encoding),gt=r.convert(mt.type),Q=v(mt.internalFormat,Pt,gt,mt.encoding),At=Zt(w);W&&kt(w)===!1?i.renderbufferStorageMultisample(36161,At,Q,w.width,w.height):kt(w)?u.renderbufferStorageMultisampleEXT(36161,At,Q,w.width,w.height):i.renderbufferStorage(36161,Q,w.width,w.height)}}i.bindRenderbuffer(36161,null)}function _t(E,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(36160,E),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),it(w.depthTexture,0);const ht=n.get(w.depthTexture).__webglTexture,ft=Zt(w);if(w.depthTexture.format===li)kt(w)?u.framebufferTexture2DMultisampleEXT(36160,36096,3553,ht,0,ft):i.framebufferTexture2D(36160,36096,3553,ht,0);else if(w.depthTexture.format===ns)kt(w)?u.framebufferTexture2DMultisampleEXT(36160,33306,3553,ht,0,ft):i.framebufferTexture2D(36160,33306,3553,ht,0);else throw new Error("Unknown depthTexture format")}function St(E){const w=n.get(E),W=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!w.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");_t(w.__webglFramebuffer,E)}else if(W){w.__webglDepthbuffer=[];for(let ht=0;ht<6;ht++)e.bindFramebuffer(36160,w.__webglFramebuffer[ht]),w.__webglDepthbuffer[ht]=i.createRenderbuffer(),Lt(w.__webglDepthbuffer[ht],E,!1)}else e.bindFramebuffer(36160,w.__webglFramebuffer),w.__webglDepthbuffer=i.createRenderbuffer(),Lt(w.__webglDepthbuffer,E,!1);e.bindFramebuffer(36160,null)}function Y(E,w,W){const ht=n.get(E);w!==void 0&&lt(ht.__webglFramebuffer,E,E.texture,36064,3553),W!==void 0&&St(E)}function xt(E){const w=E.texture,W=n.get(E),ht=n.get(w);E.addEventListener("dispose",q),E.isWebGLMultipleRenderTargets!==!0&&(ht.__webglTexture===void 0&&(ht.__webglTexture=i.createTexture()),ht.__version=w.version,o.memory.textures++);const ft=E.isWebGLCubeRenderTarget===!0,mt=E.isWebGLMultipleRenderTargets===!0,Pt=M(E)||a;if(ft){W.__webglFramebuffer=[];for(let gt=0;gt<6;gt++)W.__webglFramebuffer[gt]=i.createFramebuffer()}else{if(W.__webglFramebuffer=i.createFramebuffer(),mt)if(s.drawBuffers){const gt=E.texture;for(let Q=0,At=gt.length;Q<At;Q++){const Mt=n.get(gt[Q]);Mt.__webglTexture===void 0&&(Mt.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&E.samples>0&&kt(E)===!1){const gt=mt?w:[w];W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(36160,W.__webglMultisampledFramebuffer);for(let Q=0;Q<gt.length;Q++){const At=gt[Q];W.__webglColorRenderbuffer[Q]=i.createRenderbuffer(),i.bindRenderbuffer(36161,W.__webglColorRenderbuffer[Q]);const Mt=r.convert(At.format,At.encoding),vt=r.convert(At.type),wt=v(At.internalFormat,Mt,vt,At.encoding,E.isXRRenderTarget===!0),Ct=Zt(E);i.renderbufferStorageMultisample(36161,Ct,wt,E.width,E.height),i.framebufferRenderbuffer(36160,36064+Q,36161,W.__webglColorRenderbuffer[Q])}i.bindRenderbuffer(36161,null),E.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),Lt(W.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(36160,null)}}if(ft){e.bindTexture(34067,ht.__webglTexture),N(34067,w,Pt);for(let gt=0;gt<6;gt++)lt(W.__webglFramebuffer[gt],E,w,36064,34069+gt);b(w,Pt)&&A(34067),e.unbindTexture()}else if(mt){const gt=E.texture;for(let Q=0,At=gt.length;Q<At;Q++){const Mt=gt[Q],vt=n.get(Mt);e.bindTexture(3553,vt.__webglTexture),N(3553,Mt,Pt),lt(W.__webglFramebuffer,E,Mt,36064+Q,3553),b(Mt,Pt)&&A(3553)}e.unbindTexture()}else{let gt=3553;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(a?gt=E.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(gt,ht.__webglTexture),N(gt,w,Pt),lt(W.__webglFramebuffer,E,w,36064,gt),b(w,Pt)&&A(gt),e.unbindTexture()}E.depthBuffer&&St(E)}function Et(E){const w=M(E)||a,W=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let ht=0,ft=W.length;ht<ft;ht++){const mt=W[ht];if(b(mt,w)){const Pt=E.isWebGLCubeRenderTarget?34067:3553,gt=n.get(mt).__webglTexture;e.bindTexture(Pt,gt),A(Pt),e.unbindTexture()}}}function ct(E){if(a&&E.samples>0&&kt(E)===!1){const w=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],W=E.width,ht=E.height;let ft=16384;const mt=[],Pt=E.stencilBuffer?33306:36096,gt=n.get(E),Q=E.isWebGLMultipleRenderTargets===!0;if(Q)for(let At=0;At<w.length;At++)e.bindFramebuffer(36160,gt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+At,36161,null),e.bindFramebuffer(36160,gt.__webglFramebuffer),i.framebufferTexture2D(36009,36064+At,3553,null,0);e.bindFramebuffer(36008,gt.__webglMultisampledFramebuffer),e.bindFramebuffer(36009,gt.__webglFramebuffer);for(let At=0;At<w.length;At++){mt.push(36064+At),E.depthBuffer&&mt.push(Pt);const Mt=gt.__ignoreDepthValues!==void 0?gt.__ignoreDepthValues:!1;if(Mt===!1&&(E.depthBuffer&&(ft|=256),E.stencilBuffer&&(ft|=1024)),Q&&i.framebufferRenderbuffer(36008,36064,36161,gt.__webglColorRenderbuffer[At]),Mt===!0&&(i.invalidateFramebuffer(36008,[Pt]),i.invalidateFramebuffer(36009,[Pt])),Q){const vt=n.get(w[At]).__webglTexture;i.framebufferTexture2D(36009,36064,3553,vt,0)}i.blitFramebuffer(0,0,W,ht,0,0,W,ht,ft,9728),d&&i.invalidateFramebuffer(36008,mt)}if(e.bindFramebuffer(36008,null),e.bindFramebuffer(36009,null),Q)for(let At=0;At<w.length;At++){e.bindFramebuffer(36160,gt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+At,36161,gt.__webglColorRenderbuffer[At]);const Mt=n.get(w[At]).__webglTexture;e.bindFramebuffer(36160,gt.__webglFramebuffer),i.framebufferTexture2D(36009,36064+At,3553,Mt,0)}e.bindFramebuffer(36009,gt.__webglMultisampledFramebuffer)}}function Zt(E){return Math.min(f,E.samples)}function kt(E){const w=n.get(E);return a&&E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Qt(E){const w=o.render.frame;g.get(E)!==w&&(g.set(E,w),E.update())}function ze(E,w){const W=E.encoding,ht=E.format,ft=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===Ra||W!==pi&&(W===$t?a===!1?t.has("EXT_sRGB")===!0&&ht===cn?(E.format=Ra,E.minFilter=$e,E.generateMipmaps=!1):w=hh.sRGBToLinear(w):(ht!==cn||ft!==di)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",W)),w}this.allocateTextureUnit=G,this.resetTextureUnits=tt,this.setTexture2D=it,this.setTexture2DArray=H,this.setTexture3D=I,this.setTextureCube=Z,this.rebindTextures=Y,this.setupRenderTarget=xt,this.updateRenderTargetMipmap=Et,this.updateMultisampleRenderTarget=ct,this.setupDepthRenderbuffer=St,this.setupFrameBufferTexture=lt,this.useMultisampledRTT=kt}function Wg(i,t,e){const n=e.isWebGL2;function s(r,o=null){let a;if(r===di)return 5121;if(r===Lu)return 32819;if(r===Ru)return 32820;if(r===Pu)return 5120;if(r===Du)return 5122;if(r===rh)return 5123;if(r===Fu)return 5124;if(r===oi)return 5125;if(r===ai)return 5126;if(r===Fs)return n?5131:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Iu)return 6406;if(r===cn)return 6408;if(r===zu)return 6409;if(r===Bu)return 6410;if(r===li)return 6402;if(r===ns)return 34041;if(r===Ra)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Uu)return 6403;if(r===Ou)return 36244;if(r===Nu)return 33319;if(r===ku)return 33320;if(r===Vu)return 36249;if(r===mo||r===go||r===_o||r===xo)if(o===$t)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===mo)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===go)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===_o)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===xo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===mo)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===go)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===_o)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===xo)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===fl||r===dl||r===pl||r===ml)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===fl)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===dl)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===pl)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ml)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Gu)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===gl||r===_l)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===gl)return o===$t?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===_l)return o===$t?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===xl||r===yl||r===vl||r===Ml||r===bl||r===Sl||r===wl||r===Cl||r===Tl||r===Al||r===El||r===Pl||r===Dl||r===Fl)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===xl)return o===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===yl)return o===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===vl)return o===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Ml)return o===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===bl)return o===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Sl)return o===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===wl)return o===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Cl)return o===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Tl)return o===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Al)return o===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===El)return o===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Pl)return o===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Dl)return o===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Fl)return o===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===yo)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===yo)return o===$t?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(r===Wu||r===Ll||r===Rl||r===Il)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(r===yo)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Ll)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Rl)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Il)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===$i?n?34042:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}class Hg extends He{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class _r extends yn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const qg={type:"move"};class Xo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _r,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _r,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _r,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const p of t.hand.values()){const m=e.getJointPose(p,n),_=this._getHandJoint(l,p);m!==null&&(_.matrix.fromArray(m.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=m.radius),_.visible=m!==null}const h=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,g=.005;l.inputState.pinching&&u>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(qg)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new _r;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class jg extends In{constructor(t,e,n,s,r,o,a,c,l,h){if(h=h!==void 0?h:li,h!==li&&h!==ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===li&&(n=oi),n===void 0&&h===ns&&(n=$i),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ie,this.minFilter=c!==void 0?c:Ie,this.flipY=!1,this.generateMipmaps=!1}}class Xg extends xi{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,f=null,u=null,d=null,g=null;const p=e.getContextAttributes();let m=null,_=null;const S=[],x=[],M=new Set,y=new Map,b=new He;b.layers.enable(1),b.viewport=new ae;const A=new He;A.layers.enable(2),A.viewport=new ae;const v=[b,A],T=new Hg;T.layers.enable(1),T.layers.enable(2);let D=null,R=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(I){let Z=S[I];return Z===void 0&&(Z=new Xo,S[I]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(I){let Z=S[I];return Z===void 0&&(Z=new Xo,S[I]=Z),Z.getGripSpace()},this.getHand=function(I){let Z=S[I];return Z===void 0&&(Z=new Xo,S[I]=Z),Z.getHandSpace()};function q(I){const Z=x.indexOf(I.inputSource);if(Z===-1)return;const ot=S[Z];ot!==void 0&&ot.dispatchEvent({type:I.type,data:I.inputSource})}function P(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",P),s.removeEventListener("inputsourceschange",F);for(let I=0;I<S.length;I++){const Z=x[I];Z!==null&&(x[I]=null,S[I].disconnect(Z))}D=null,R=null,t.setRenderTarget(m),d=null,u=null,f=null,s=null,_=null,H.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(I){r=I,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(I){a=I,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(I){l=I},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(I){if(s=I,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",P),s.addEventListener("inputsourceschange",F),p.xrCompatible!==!0&&await e.makeXRCompatible(),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const Z={antialias:s.renderState.layers===void 0?p.antialias:!0,alpha:p.alpha,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,Z),s.updateRenderState({baseLayer:d}),_=new mi(d.framebufferWidth,d.framebufferHeight,{format:cn,type:di,encoding:t.outputEncoding,stencilBuffer:p.stencil})}else{let Z=null,ot=null,ut=null;p.depth&&(ut=p.stencil?35056:33190,Z=p.stencil?ns:li,ot=p.stencil?$i:oi);const N={colorFormat:32856,depthFormat:ut,scaleFactor:r};f=new XRWebGLBinding(s,e),u=f.createProjectionLayer(N),s.updateRenderState({layers:[u]}),_=new mi(u.textureWidth,u.textureHeight,{format:cn,type:di,depthTexture:new jg(u.textureWidth,u.textureHeight,ot,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:p.stencil,encoding:t.outputEncoding,samples:p.antialias?4:0});const O=t.properties.get(_);O.__ignoreDepthValues=u.ignoreDepthValues}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),H.setContext(s),H.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function F(I){for(let Z=0;Z<I.removed.length;Z++){const ot=I.removed[Z],ut=x.indexOf(ot);ut>=0&&(x[ut]=null,S[ut].disconnect(ot))}for(let Z=0;Z<I.added.length;Z++){const ot=I.added[Z];let ut=x.indexOf(ot);if(ut===-1){for(let O=0;O<S.length;O++)if(O>=x.length){x.push(ot),ut=O;break}else if(x[O]===null){x[O]=ot,ut=O;break}if(ut===-1)break}const N=S[ut];N&&N.connect(ot)}}const k=new U,K=new U;function tt(I,Z,ot){k.setFromMatrixPosition(Z.matrixWorld),K.setFromMatrixPosition(ot.matrixWorld);const ut=k.distanceTo(K),N=Z.projectionMatrix.elements,O=ot.projectionMatrix.elements,nt=N[14]/(N[10]-1),V=N[14]/(N[10]+1),lt=(N[9]+1)/N[5],Lt=(N[9]-1)/N[5],_t=(N[8]-1)/N[0],St=(O[8]+1)/O[0],Y=nt*_t,xt=nt*St,Et=ut/(-_t+St),ct=Et*-_t;Z.matrixWorld.decompose(I.position,I.quaternion,I.scale),I.translateX(ct),I.translateZ(Et),I.matrixWorld.compose(I.position,I.quaternion,I.scale),I.matrixWorldInverse.copy(I.matrixWorld).invert();const Zt=nt+Et,kt=V+Et,Qt=Y-ct,ze=xt+(ut-ct),E=lt*V/kt*Zt,w=Lt*V/kt*Zt;I.projectionMatrix.makePerspective(Qt,ze,E,w,Zt,kt)}function G(I,Z){Z===null?I.matrixWorld.copy(I.matrix):I.matrixWorld.multiplyMatrices(Z.matrixWorld,I.matrix),I.matrixWorldInverse.copy(I.matrixWorld).invert()}this.updateCamera=function(I){if(s===null)return;T.near=A.near=b.near=I.near,T.far=A.far=b.far=I.far,(D!==T.near||R!==T.far)&&(s.updateRenderState({depthNear:T.near,depthFar:T.far}),D=T.near,R=T.far);const Z=I.parent,ot=T.cameras;G(T,Z);for(let N=0;N<ot.length;N++)G(ot[N],Z);T.matrixWorld.decompose(T.position,T.quaternion,T.scale),I.matrix.copy(T.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale);const ut=I.children;for(let N=0,O=ut.length;N<O;N++)ut[N].updateMatrixWorld(!0);ot.length===2?tt(T,b,A):T.projectionMatrix.copy(b.projectionMatrix)},this.getCamera=function(){return T},this.getFoveation=function(){if(!(u===null&&d===null))return c},this.setFoveation=function(I){c=I,u!==null&&(u.fixedFoveation=I),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=I)},this.getPlanes=function(){return M};let rt=null;function it(I,Z){if(h=Z.getViewerPose(l||o),g=Z,h!==null){const ot=h.views;d!==null&&(t.setRenderTargetFramebuffer(_,d.framebuffer),t.setRenderTarget(_));let ut=!1;ot.length!==T.cameras.length&&(T.cameras.length=0,ut=!0);for(let N=0;N<ot.length;N++){const O=ot[N];let nt=null;if(d!==null)nt=d.getViewport(O);else{const lt=f.getViewSubImage(u,O);nt=lt.viewport,N===0&&(t.setRenderTargetTextures(_,lt.colorTexture,u.ignoreDepthValues?void 0:lt.depthStencilTexture),t.setRenderTarget(_))}let V=v[N];V===void 0&&(V=new He,V.layers.enable(N),V.viewport=new ae,v[N]=V),V.matrix.fromArray(O.transform.matrix),V.projectionMatrix.fromArray(O.projectionMatrix),V.viewport.set(nt.x,nt.y,nt.width,nt.height),N===0&&T.matrix.copy(V.matrix),ut===!0&&T.cameras.push(V)}}for(let ot=0;ot<S.length;ot++){const ut=x[ot],N=S[ot];ut!==null&&N!==void 0&&N.update(ut,Z,l||o)}if(rt&&rt(I,Z),Z.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:Z.detectedPlanes});let ot=null;for(const ut of M)Z.detectedPlanes.has(ut)||(ot===null&&(ot=[]),ot.push(ut));if(ot!==null)for(const ut of ot)M.delete(ut),y.delete(ut),n.dispatchEvent({type:"planeremoved",data:ut});for(const ut of Z.detectedPlanes)if(!M.has(ut))M.add(ut),y.set(ut,Z.lastChangedTime),n.dispatchEvent({type:"planeadded",data:ut});else{const N=y.get(ut);ut.lastChangedTime>N&&(y.set(ut,ut.lastChangedTime),n.dispatchEvent({type:"planechanged",data:ut}))}}g=null}const H=new wh;H.setAnimationLoop(it),this.setAnimationLoop=function(I){rt=I},this.dispose=function(){}}}function Yg(i,t){function e(p,m){m.color.getRGB(p.fogColor.value,Mh(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function n(p,m,_,S,x){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(p,m):m.isMeshToonMaterial?(s(p,m),h(p,m)):m.isMeshPhongMaterial?(s(p,m),l(p,m)):m.isMeshStandardMaterial?(s(p,m),f(p,m),m.isMeshPhysicalMaterial&&u(p,m,x)):m.isMeshMatcapMaterial?(s(p,m),d(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),g(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(r(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?a(p,m,_,S):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.bumpMap&&(p.bumpMap.value=m.bumpMap,p.bumpScale.value=m.bumpScale,m.side===Xe&&(p.bumpScale.value*=-1)),m.displacementMap&&(p.displacementMap.value=m.displacementMap,p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap),m.normalMap&&(p.normalMap.value=m.normalMap,p.normalScale.value.copy(m.normalScale),m.side===Xe&&p.normalScale.value.negate()),m.specularMap&&(p.specularMap.value=m.specularMap),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const _=t.get(m).envMap;if(_&&(p.envMap.value=_,p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;const M=i.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*M}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity);let S;m.map?S=m.map:m.specularMap?S=m.specularMap:m.displacementMap?S=m.displacementMap:m.normalMap?S=m.normalMap:m.bumpMap?S=m.bumpMap:m.roughnessMap?S=m.roughnessMap:m.metalnessMap?S=m.metalnessMap:m.alphaMap?S=m.alphaMap:m.emissiveMap?S=m.emissiveMap:m.clearcoatMap?S=m.clearcoatMap:m.clearcoatNormalMap?S=m.clearcoatNormalMap:m.clearcoatRoughnessMap?S=m.clearcoatRoughnessMap:m.iridescenceMap?S=m.iridescenceMap:m.iridescenceThicknessMap?S=m.iridescenceThicknessMap:m.specularIntensityMap?S=m.specularIntensityMap:m.specularColorMap?S=m.specularColorMap:m.transmissionMap?S=m.transmissionMap:m.thicknessMap?S=m.thicknessMap:m.sheenColorMap?S=m.sheenColorMap:m.sheenRoughnessMap&&(S=m.sheenRoughnessMap),S!==void 0&&(S.isWebGLRenderTarget&&(S=S.texture),S.matrixAutoUpdate===!0&&S.updateMatrix(),p.uvTransform.value.copy(S.matrix));let x;m.aoMap?x=m.aoMap:m.lightMap&&(x=m.lightMap),x!==void 0&&(x.isWebGLRenderTarget&&(x=x.texture),x.matrixAutoUpdate===!0&&x.updateMatrix(),p.uv2Transform.value.copy(x.matrix))}function r(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function a(p,m,_,S){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*_,p.scale.value=S*.5,m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let x;m.map?x=m.map:m.alphaMap&&(x=m.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),p.uvTransform.value.copy(x.matrix))}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let _;m.map?_=m.map:m.alphaMap&&(_=m.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uvTransform.value.copy(_.matrix))}function l(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function h(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.roughness.value=m.roughness,p.metalness.value=m.metalness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap),m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap),t.get(m).envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function u(p,m,_){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap)),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap),m.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),p.clearcoatNormalMap.value=m.clearcoatNormalMap,m.side===Xe&&p.clearcoatNormalScale.value.negate())),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap)),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap)}function d(p,m){m.matcap&&(p.matcap.value=m.matcap)}function g(p,m){p.referencePosition.value.copy(m.referencePosition),p.nearDistance.value=m.nearDistance,p.farDistance.value=m.farDistance}return{refreshFogUniforms:e,refreshMaterialUniforms:n}}function Zg(i,t,e,n){let s={},r={},o=[];const a=e.isWebGL2?i.getParameter(35375):0;function c(S,x){const M=x.program;n.uniformBlockBinding(S,M)}function l(S,x){let M=s[S.id];M===void 0&&(g(S),M=h(S),s[S.id]=M,S.addEventListener("dispose",m));const y=x.program;n.updateUBOMapping(S,y);const b=t.render.frame;r[S.id]!==b&&(u(S),r[S.id]=b)}function h(S){const x=f();S.__bindingPointIndex=x;const M=i.createBuffer(),y=S.__size,b=S.usage;return i.bindBuffer(35345,M),i.bufferData(35345,y,b),i.bindBuffer(35345,null),i.bindBufferBase(35345,x,M),M}function f(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(S){const x=s[S.id],M=S.uniforms,y=S.__cache;i.bindBuffer(35345,x);for(let b=0,A=M.length;b<A;b++){const v=M[b];if(d(v,b,y)===!0){const T=v.__offset,D=Array.isArray(v.value)?v.value:[v.value];let R=0;for(let q=0;q<D.length;q++){const P=D[q],F=p(P);typeof P=="number"?(v.__data[0]=P,i.bufferSubData(35345,T+R,v.__data)):P.isMatrix3?(v.__data[0]=P.elements[0],v.__data[1]=P.elements[1],v.__data[2]=P.elements[2],v.__data[3]=P.elements[0],v.__data[4]=P.elements[3],v.__data[5]=P.elements[4],v.__data[6]=P.elements[5],v.__data[7]=P.elements[0],v.__data[8]=P.elements[6],v.__data[9]=P.elements[7],v.__data[10]=P.elements[8],v.__data[11]=P.elements[0]):(P.toArray(v.__data,R),R+=F.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(35345,T,v.__data)}}i.bindBuffer(35345,null)}function d(S,x,M){const y=S.value;if(M[x]===void 0){if(typeof y=="number")M[x]=y;else{const b=Array.isArray(y)?y:[y],A=[];for(let v=0;v<b.length;v++)A.push(b[v].clone());M[x]=A}return!0}else if(typeof y=="number"){if(M[x]!==y)return M[x]=y,!0}else{const b=Array.isArray(M[x])?M[x]:[M[x]],A=Array.isArray(y)?y:[y];for(let v=0;v<b.length;v++){const T=b[v];if(T.equals(A[v])===!1)return T.copy(A[v]),!0}}return!1}function g(S){const x=S.uniforms;let M=0;const y=16;let b=0;for(let A=0,v=x.length;A<v;A++){const T=x[A],D={boundary:0,storage:0},R=Array.isArray(T.value)?T.value:[T.value];for(let q=0,P=R.length;q<P;q++){const F=R[q],k=p(F);D.boundary+=k.boundary,D.storage+=k.storage}if(T.__data=new Float32Array(D.storage/Float32Array.BYTES_PER_ELEMENT),T.__offset=M,A>0){b=M%y;const q=y-b;b!==0&&q-D.boundary<0&&(M+=y-b,T.__offset=M)}M+=D.storage}return b=M%y,b>0&&(M+=y-b),S.__size=M,S.__cache={},this}function p(S){const x={boundary:0,storage:0};return typeof S=="number"?(x.boundary=4,x.storage=4):S.isVector2?(x.boundary=8,x.storage=8):S.isVector3||S.isColor?(x.boundary=16,x.storage=12):S.isVector4?(x.boundary=16,x.storage=16):S.isMatrix3?(x.boundary=48,x.storage=48):S.isMatrix4?(x.boundary=64,x.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),x}function m(S){const x=S.target;x.removeEventListener("dispose",m);const M=o.indexOf(x.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function _(){for(const S in s)i.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:c,update:l,dispose:_}}function Jg(){const i=Zr("canvas");return i.style.display="block",i}function Ph(i={}){this.isWebGLRenderer=!0;const t=i.canvas!==void 0?i.canvas:Jg(),e=i.context!==void 0?i.context:null,n=i.depth!==void 0?i.depth:!0,s=i.stencil!==void 0?i.stencil:!0,r=i.antialias!==void 0?i.antialias:!1,o=i.premultipliedAlpha!==void 0?i.premultipliedAlpha:!0,a=i.preserveDrawingBuffer!==void 0?i.preserveDrawingBuffer:!1,c=i.powerPreference!==void 0?i.powerPreference:"default",l=i.failIfMajorPerformanceCaveat!==void 0?i.failIfMajorPerformanceCaveat:!1;let h;e!==null?h=e.getContextAttributes().alpha:h=i.alpha!==void 0?i.alpha:!1;let f=null,u=null;const d=[],g=[];this.domElement=t,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=pi,this.physicallyCorrectLights=!1,this.toneMapping=Rn,this.toneMappingExposure=1;const p=this;let m=!1,_=0,S=0,x=null,M=-1,y=null;const b=new ae,A=new ae;let v=null,T=t.width,D=t.height,R=1,q=null,P=null;const F=new ae(0,0,T,D),k=new ae(0,0,T,D);let K=!1;const tt=new Ya;let G=!1,rt=!1,it=null;const H=new Se,I=new Wt,Z=new U,ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ut(){return x===null?R:1}let N=e;function O(C,B){for(let X=0;X<C.length;X++){const z=C[X],$=t.getContext(z,B);if($!==null)return $}return null}try{const C={alpha:!0,depth:n,stencil:s,antialias:r,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:c,failIfMajorPerformanceCaveat:l};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ja}`),t.addEventListener("webglcontextlost",wt,!1),t.addEventListener("webglcontextrestored",Ct,!1),t.addEventListener("webglcontextcreationerror",It,!1),N===null){const B=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&B.shift(),N=O(B,C),N===null)throw O(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}N.getShaderPrecisionFormat===void 0&&(N.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let nt,V,lt,Lt,_t,St,Y,xt,Et,ct,Zt,kt,Qt,ze,E,w,W,ht,ft,mt,Pt,gt,Q,At;function Mt(){nt=new am(N),V=new tm(N,nt,i),nt.init(V),gt=new Wg(N,nt,V),lt=new Vg(N,nt,V),Lt=new hm,_t=new Ag,St=new Gg(N,nt,lt,_t,V,gt,Lt),Y=new nm(p),xt=new om(p),Et=new xf(N,V),Q=new Qp(N,nt,Et,V),ct=new lm(N,Et,Lt,Q),Zt=new pm(N,ct,Et,Lt),ft=new dm(N,V,St),w=new em(_t),kt=new Tg(p,Y,xt,nt,V,Q,w),Qt=new Yg(p,_t),ze=new Pg,E=new zg(nt,V),ht=new Kp(p,Y,xt,lt,Zt,h,o),W=new kg(p,Zt,V),At=new Zg(N,Lt,V,lt),mt=new $p(N,nt,Lt,V),Pt=new cm(N,nt,Lt,V),Lt.programs=kt.programs,p.capabilities=V,p.extensions=nt,p.properties=_t,p.renderLists=ze,p.shadowMap=W,p.state=lt,p.info=Lt}Mt();const vt=new Xg(p,N);this.xr=vt,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const C=nt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=nt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return R},this.setPixelRatio=function(C){C!==void 0&&(R=C,this.setSize(T,D,!1))},this.getSize=function(C){return C.set(T,D)},this.setSize=function(C,B,X){if(vt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}T=C,D=B,t.width=Math.floor(C*R),t.height=Math.floor(B*R),X!==!1&&(t.style.width=C+"px",t.style.height=B+"px"),this.setViewport(0,0,C,B)},this.getDrawingBufferSize=function(C){return C.set(T*R,D*R).floor()},this.setDrawingBufferSize=function(C,B,X){T=C,D=B,R=X,t.width=Math.floor(C*X),t.height=Math.floor(B*X),this.setViewport(0,0,C,B)},this.getCurrentViewport=function(C){return C.copy(b)},this.getViewport=function(C){return C.copy(F)},this.setViewport=function(C,B,X,z){C.isVector4?F.set(C.x,C.y,C.z,C.w):F.set(C,B,X,z),lt.viewport(b.copy(F).multiplyScalar(R).floor())},this.getScissor=function(C){return C.copy(k)},this.setScissor=function(C,B,X,z){C.isVector4?k.set(C.x,C.y,C.z,C.w):k.set(C,B,X,z),lt.scissor(A.copy(k).multiplyScalar(R).floor())},this.getScissorTest=function(){return K},this.setScissorTest=function(C){lt.setScissorTest(K=C)},this.setOpaqueSort=function(C){q=C},this.setTransparentSort=function(C){P=C},this.getClearColor=function(C){return C.copy(ht.getClearColor())},this.setClearColor=function(){ht.setClearColor.apply(ht,arguments)},this.getClearAlpha=function(){return ht.getClearAlpha()},this.setClearAlpha=function(){ht.setClearAlpha.apply(ht,arguments)},this.clear=function(C=!0,B=!0,X=!0){let z=0;C&&(z|=16384),B&&(z|=256),X&&(z|=1024),N.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",wt,!1),t.removeEventListener("webglcontextrestored",Ct,!1),t.removeEventListener("webglcontextcreationerror",It,!1),ze.dispose(),E.dispose(),_t.dispose(),Y.dispose(),xt.dispose(),Zt.dispose(),Q.dispose(),At.dispose(),kt.dispose(),vt.dispose(),vt.removeEventListener("sessionstart",pt),vt.removeEventListener("sessionend",bt),it&&(it.dispose(),it=null),Rt.stop()};function wt(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),m=!0}function Ct(){console.log("THREE.WebGLRenderer: Context Restored."),m=!1;const C=Lt.autoReset,B=W.enabled,X=W.autoUpdate,z=W.needsUpdate,$=W.type;Mt(),Lt.autoReset=C,W.enabled=B,W.autoUpdate=X,W.needsUpdate=z,W.type=$}function It(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Jt(C){const B=C.target;B.removeEventListener("dispose",Jt),Yt(B)}function Yt(C){L(C),_t.remove(C)}function L(C){const B=_t.get(C).programs;B!==void 0&&(B.forEach(function(X){kt.releaseProgram(X)}),C.isShaderMaterial&&kt.releaseShaderCache(C))}this.renderBufferDirect=function(C,B,X,z,$,yt){B===null&&(B=ot);const Dt=$.isMesh&&$.matrixWorld.determinant()<0,zt=Yn(C,B,X,z,$);lt.setMaterial(z,Dt);let Ft=X.index,Ht=1;z.wireframe===!0&&(Ft=ct.getWireframeAttribute(X),Ht=2);const Ut=X.drawRange,Vt=X.attributes.position;let ne=Ut.start*Ht,we=(Ut.start+Ut.count)*Ht;yt!==null&&(ne=Math.max(ne,yt.start*Ht),we=Math.min(we,(yt.start+yt.count)*Ht)),Ft!==null?(ne=Math.max(ne,0),we=Math.min(we,Ft.count)):Vt!=null&&(ne=Math.max(ne,0),we=Math.min(we,Vt.count));const Pe=we-ne;if(Pe<0||Pe===1/0)return;Q.setup($,z,zt,X,Ft);let mn,ie=mt;if(Ft!==null&&(mn=Et.get(Ft),ie=Pt,ie.setIndex(mn)),$.isMesh)z.wireframe===!0?(lt.setLineWidth(z.wireframeLinewidth*ut()),ie.setMode(1)):ie.setMode(4);else if($.isLine){let Nt=z.linewidth;Nt===void 0&&(Nt=1),lt.setLineWidth(Nt*ut()),$.isLineSegments?ie.setMode(1):$.isLineLoop?ie.setMode(2):ie.setMode(3)}else $.isPoints?ie.setMode(0):$.isSprite&&ie.setMode(4);if($.isInstancedMesh)ie.renderInstances(ne,Pe,$.count);else if(X.isInstancedBufferGeometry){const Nt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,vi=Math.min(X.instanceCount,Nt);ie.renderInstances(ne,Pe,vi)}else ie.render(ne,Pe)},this.compile=function(C,B){function X(z,$,yt){z.transparent===!0&&z.side===Wn&&z.forceSinglePass===!1?(z.side=Xe,z.needsUpdate=!0,ee(z,$,yt),z.side=Xn,z.needsUpdate=!0,ee(z,$,yt),z.side=Wn):ee(z,$,yt)}u=E.get(C),u.init(),g.push(u),C.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(u.pushLight(z),z.castShadow&&u.pushShadow(z))}),u.setupLights(p.physicallyCorrectLights),C.traverse(function(z){const $=z.material;if($)if(Array.isArray($))for(let yt=0;yt<$.length;yt++){const Dt=$[yt];X(Dt,C,z)}else X($,C,z)}),g.pop(),u=null};let j=null;function at(C){j&&j(C)}function pt(){Rt.stop()}function bt(){Rt.start()}const Rt=new wh;Rt.setAnimationLoop(at),typeof self<"u"&&Rt.setContext(self),this.setAnimationLoop=function(C){j=C,vt.setAnimationLoop(C),C===null?Rt.stop():Rt.start()},vt.addEventListener("sessionstart",pt),vt.addEventListener("sessionend",bt),this.render=function(C,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(m===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),vt.enabled===!0&&vt.isPresenting===!0&&(vt.cameraAutoUpdate===!0&&vt.updateCamera(B),B=vt.getCamera()),C.isScene===!0&&C.onBeforeRender(p,C,B,x),u=E.get(C,g.length),u.init(),g.push(u),H.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),tt.setFromProjectionMatrix(H),rt=this.localClippingEnabled,G=w.init(this.clippingPlanes,rt),f=ze.get(C,d.length),f.init(),d.push(f),ue(C,B,0,p.sortObjects),f.finish(),p.sortObjects===!0&&f.sort(q,P),G===!0&&w.beginShadows();const X=u.state.shadowsArray;if(W.render(X,C,B),G===!0&&w.endShadows(),this.info.autoReset===!0&&this.info.reset(),ht.render(f,C),u.setupLights(p.physicallyCorrectLights),B.isArrayCamera){const z=B.cameras;for(let $=0,yt=z.length;$<yt;$++){const Dt=z[$];he(f,C,Dt,Dt.viewport)}}else he(f,C,B);x!==null&&(St.updateMultisampleRenderTarget(x),St.updateRenderTargetMipmap(x)),C.isScene===!0&&C.onAfterRender(p,C,B),Q.resetDefaultState(),M=-1,y=null,g.pop(),g.length>0?u=g[g.length-1]:u=null,d.pop(),d.length>0?f=d[d.length-1]:f=null};function ue(C,B,X,z){if(C.visible===!1)return;if(C.layers.test(B.layers)){if(C.isGroup)X=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(B);else if(C.isLight)u.pushLight(C),C.castShadow&&u.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||tt.intersectsSprite(C)){z&&Z.setFromMatrixPosition(C.matrixWorld).applyMatrix4(H);const Dt=Zt.update(C),zt=C.material;zt.visible&&f.push(C,Dt,zt,X,Z.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(C.isSkinnedMesh&&C.skeleton.frame!==Lt.render.frame&&(C.skeleton.update(),C.skeleton.frame=Lt.render.frame),!C.frustumCulled||tt.intersectsObject(C))){z&&Z.setFromMatrixPosition(C.matrixWorld).applyMatrix4(H);const Dt=Zt.update(C),zt=C.material;if(Array.isArray(zt)){const Ft=Dt.groups;for(let Ht=0,Ut=Ft.length;Ht<Ut;Ht++){const Vt=Ft[Ht],ne=zt[Vt.materialIndex];ne&&ne.visible&&f.push(C,Dt,ne,X,Z.z,Vt)}}else zt.visible&&f.push(C,Dt,zt,X,Z.z,null)}}const yt=C.children;for(let Dt=0,zt=yt.length;Dt<zt;Dt++)ue(yt[Dt],B,X,z)}function he(C,B,X,z){const $=C.opaque,yt=C.transmissive,Dt=C.transparent;u.setupLightsView(X),G===!0&&w.setGlobalState(p.clippingPlanes,X),yt.length>0&&dn($,B,X),z&&lt.viewport(b.copy(z)),$.length>0&&Xt($,B,X),yt.length>0&&Xt(yt,B,X),Dt.length>0&&Xt(Dt,B,X),lt.buffers.depth.setTest(!0),lt.buffers.depth.setMask(!0),lt.buffers.color.setMask(!0),lt.setPolygonOffset(!1)}function dn(C,B,X){const z=V.isWebGL2;it===null&&(it=new mi(1,1,{generateMipmaps:!0,type:nt.has("EXT_color_buffer_half_float")?Fs:di,minFilter:Ds,samples:z&&r===!0?4:0})),p.getDrawingBufferSize(I),z?it.setSize(I.x,I.y):it.setSize(Ia(I.x),Ia(I.y));const $=p.getRenderTarget();p.setRenderTarget(it),p.clear();const yt=p.toneMapping;p.toneMapping=Rn,Xt(C,B,X),p.toneMapping=yt,St.updateMultisampleRenderTarget(it),St.updateRenderTargetMipmap(it),p.setRenderTarget($)}function Xt(C,B,X){const z=B.isScene===!0?B.overrideMaterial:null;for(let $=0,yt=C.length;$<yt;$++){const Dt=C[$],zt=Dt.object,Ft=Dt.geometry,Ht=z===null?Dt.material:z,Ut=Dt.group;zt.layers.test(X.layers)&&Ze(zt,B,X,Ft,Ht,Ut)}}function Ze(C,B,X,z,$,yt){C.onBeforeRender(p,B,X,z,$,yt),C.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),$.onBeforeRender(p,B,X,z,C,yt),$.transparent===!0&&$.side===Wn&&$.forceSinglePass===!1?($.side=Xe,$.needsUpdate=!0,p.renderBufferDirect(X,B,z,$,C,yt),$.side=Xn,$.needsUpdate=!0,p.renderBufferDirect(X,B,z,$,C,yt),$.side=Wn):p.renderBufferDirect(X,B,z,$,C,yt),C.onAfterRender(p,B,X,z,$,yt)}function ee(C,B,X){B.isScene!==!0&&(B=ot);const z=_t.get(C),$=u.state.lights,yt=u.state.shadowsArray,Dt=$.state.version,zt=kt.getParameters(C,$.state,yt,B,X),Ft=kt.getProgramCacheKey(zt);let Ht=z.programs;z.environment=C.isMeshStandardMaterial?B.environment:null,z.fog=B.fog,z.envMap=(C.isMeshStandardMaterial?xt:Y).get(C.envMap||z.environment),Ht===void 0&&(C.addEventListener("dispose",Jt),Ht=new Map,z.programs=Ht);let Ut=Ht.get(Ft);if(Ut!==void 0){if(z.currentProgram===Ut&&z.lightsStateVersion===Dt)return os(C,zt),Ut}else zt.uniforms=kt.getUniforms(C),C.onBuild(X,zt,p),C.onBeforeCompile(zt,p),Ut=kt.acquireProgram(zt,Ft),Ht.set(Ft,Ut),z.uniforms=zt.uniforms;const Vt=z.uniforms;(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Vt.clippingPlanes=w.uniform),os(C,zt),z.needsLights=pn(C),z.lightsStateVersion=Dt,z.needsLights&&(Vt.ambientLightColor.value=$.state.ambient,Vt.lightProbe.value=$.state.probe,Vt.directionalLights.value=$.state.directional,Vt.directionalLightShadows.value=$.state.directionalShadow,Vt.spotLights.value=$.state.spot,Vt.spotLightShadows.value=$.state.spotShadow,Vt.rectAreaLights.value=$.state.rectArea,Vt.ltc_1.value=$.state.rectAreaLTC1,Vt.ltc_2.value=$.state.rectAreaLTC2,Vt.pointLights.value=$.state.point,Vt.pointLightShadows.value=$.state.pointShadow,Vt.hemisphereLights.value=$.state.hemi,Vt.directionalShadowMap.value=$.state.directionalShadowMap,Vt.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Vt.spotShadowMap.value=$.state.spotShadowMap,Vt.spotLightMatrix.value=$.state.spotLightMatrix,Vt.spotLightMap.value=$.state.spotLightMap,Vt.pointShadowMap.value=$.state.pointShadowMap,Vt.pointShadowMatrix.value=$.state.pointShadowMatrix);const ne=Ut.getUniforms(),we=qr.seqWithValue(ne.seq,Vt);return z.currentProgram=Ut,z.uniformsList=we,Ut}function os(C,B){const X=_t.get(C);X.outputEncoding=B.outputEncoding,X.instancing=B.instancing,X.skinning=B.skinning,X.morphTargets=B.morphTargets,X.morphNormals=B.morphNormals,X.morphColors=B.morphColors,X.morphTargetsCount=B.morphTargetsCount,X.numClippingPlanes=B.numClippingPlanes,X.numIntersection=B.numClipIntersection,X.vertexAlphas=B.vertexAlphas,X.vertexTangents=B.vertexTangents,X.toneMapping=B.toneMapping}function Yn(C,B,X,z,$){B.isScene!==!0&&(B=ot),St.resetTextureUnits();const yt=B.fog,Dt=z.isMeshStandardMaterial?B.environment:null,zt=x===null?p.outputEncoding:x.isXRRenderTarget===!0?x.texture.encoding:pi,Ft=(z.isMeshStandardMaterial?xt:Y).get(z.envMap||Dt),Ht=z.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Ut=!!z.normalMap&&!!X.attributes.tangent,Vt=!!X.morphAttributes.position,ne=!!X.morphAttributes.normal,we=!!X.morphAttributes.color,Pe=z.toneMapped?p.toneMapping:Rn,mn=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ie=mn!==void 0?mn.length:0,Nt=_t.get(z),vi=u.state.lights;if(G===!0&&(rt===!0||C!==y)){const Be=C===y&&z.id===M;w.setState(z,C,Be)}let se=!1;z.version===Nt.__version?(Nt.needsLights&&Nt.lightsStateVersion!==vi.state.version||Nt.outputEncoding!==zt||$.isInstancedMesh&&Nt.instancing===!1||!$.isInstancedMesh&&Nt.instancing===!0||$.isSkinnedMesh&&Nt.skinning===!1||!$.isSkinnedMesh&&Nt.skinning===!0||Nt.envMap!==Ft||z.fog===!0&&Nt.fog!==yt||Nt.numClippingPlanes!==void 0&&(Nt.numClippingPlanes!==w.numPlanes||Nt.numIntersection!==w.numIntersection)||Nt.vertexAlphas!==Ht||Nt.vertexTangents!==Ut||Nt.morphTargets!==Vt||Nt.morphNormals!==ne||Nt.morphColors!==we||Nt.toneMapping!==Pe||V.isWebGL2===!0&&Nt.morphTargetsCount!==ie)&&(se=!0):(se=!0,Nt.__version=z.version);let Bt=Nt.currentProgram;se===!0&&(Bt=ee(z,B,$));let nl=!1,as=!1,lo=!1;const De=Bt.getUniforms(),Zn=Nt.uniforms;if(lt.useProgram(Bt.program)&&(nl=!0,as=!0,lo=!0),z.id!==M&&(M=z.id,as=!0),nl||y!==C){if(De.setValue(N,"projectionMatrix",C.projectionMatrix),V.logarithmicDepthBuffer&&De.setValue(N,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),y!==C&&(y=C,as=!0,lo=!0),z.isShaderMaterial||z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshStandardMaterial||z.envMap){const Be=De.map.cameraPosition;Be!==void 0&&Be.setValue(N,Z.setFromMatrixPosition(C.matrixWorld))}(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&De.setValue(N,"isOrthographic",C.isOrthographicCamera===!0),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial||z.isShadowMaterial||$.isSkinnedMesh)&&De.setValue(N,"viewMatrix",C.matrixWorldInverse)}if($.isSkinnedMesh){De.setOptional(N,$,"bindMatrix"),De.setOptional(N,$,"bindMatrixInverse");const Be=$.skeleton;Be&&(V.floatVertexTextures?(Be.boneTexture===null&&Be.computeBoneTexture(),De.setValue(N,"boneTexture",Be.boneTexture,St),De.setValue(N,"boneTextureSize",Be.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const co=X.morphAttributes;if((co.position!==void 0||co.normal!==void 0||co.color!==void 0&&V.isWebGL2===!0)&&ft.update($,X,z,Bt),(as||Nt.receiveShadow!==$.receiveShadow)&&(Nt.receiveShadow=$.receiveShadow,De.setValue(N,"receiveShadow",$.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Zn.envMap.value=Ft,Zn.flipEnvMap.value=Ft.isCubeTexture&&Ft.isRenderTargetTexture===!1?-1:1),as&&(De.setValue(N,"toneMappingExposure",p.toneMappingExposure),Nt.needsLights&&Ks(Zn,lo),yt&&z.fog===!0&&Qt.refreshFogUniforms(Zn,yt),Qt.refreshMaterialUniforms(Zn,z,R,D,it),qr.upload(N,Nt.uniformsList,Zn,St)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(qr.upload(N,Nt.uniformsList,Zn,St),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&De.setValue(N,"center",$.center),De.setValue(N,"modelViewMatrix",$.modelViewMatrix),De.setValue(N,"normalMatrix",$.normalMatrix),De.setValue(N,"modelMatrix",$.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const Be=z.uniformsGroups;for(let ho=0,Hh=Be.length;ho<Hh;ho++)if(V.isWebGL2){const il=Be[ho];At.update(il,Bt),At.bind(il,Bt)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Bt}function Ks(C,B){C.ambientLightColor.needsUpdate=B,C.lightProbe.needsUpdate=B,C.directionalLights.needsUpdate=B,C.directionalLightShadows.needsUpdate=B,C.pointLights.needsUpdate=B,C.pointLightShadows.needsUpdate=B,C.spotLights.needsUpdate=B,C.spotLightShadows.needsUpdate=B,C.rectAreaLights.needsUpdate=B,C.hemisphereLights.needsUpdate=B}function pn(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return x},this.setRenderTargetTextures=function(C,B,X){_t.get(C.texture).__webglTexture=B,_t.get(C.depthTexture).__webglTexture=X;const z=_t.get(C);z.__hasExternalTextures=!0,z.__hasExternalTextures&&(z.__autoAllocateDepthBuffer=X===void 0,z.__autoAllocateDepthBuffer||nt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,B){const X=_t.get(C);X.__webglFramebuffer=B,X.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(C,B=0,X=0){x=C,_=B,S=X;let z=!0,$=null,yt=!1,Dt=!1;if(C){const Ft=_t.get(C);Ft.__useDefaultFramebuffer!==void 0?(lt.bindFramebuffer(36160,null),z=!1):Ft.__webglFramebuffer===void 0?St.setupRenderTarget(C):Ft.__hasExternalTextures&&St.rebindTextures(C,_t.get(C.texture).__webglTexture,_t.get(C.depthTexture).__webglTexture);const Ht=C.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(Dt=!0);const Ut=_t.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?($=Ut[B],yt=!0):V.isWebGL2&&C.samples>0&&St.useMultisampledRTT(C)===!1?$=_t.get(C).__webglMultisampledFramebuffer:$=Ut,b.copy(C.viewport),A.copy(C.scissor),v=C.scissorTest}else b.copy(F).multiplyScalar(R).floor(),A.copy(k).multiplyScalar(R).floor(),v=K;if(lt.bindFramebuffer(36160,$)&&V.drawBuffers&&z&&lt.drawBuffers(C,$),lt.viewport(b),lt.scissor(A),lt.setScissorTest(v),yt){const Ft=_t.get(C.texture);N.framebufferTexture2D(36160,36064,34069+B,Ft.__webglTexture,X)}else if(Dt){const Ft=_t.get(C.texture),Ht=B||0;N.framebufferTextureLayer(36160,36064,Ft.__webglTexture,X||0,Ht)}M=-1},this.readRenderTargetPixels=function(C,B,X,z,$,yt,Dt){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let zt=_t.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Dt!==void 0&&(zt=zt[Dt]),zt){lt.bindFramebuffer(36160,zt);try{const Ft=C.texture,Ht=Ft.format,Ut=Ft.type;if(Ht!==cn&&gt.convert(Ht)!==N.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Vt=Ut===Fs&&(nt.has("EXT_color_buffer_half_float")||V.isWebGL2&&nt.has("EXT_color_buffer_float"));if(Ut!==di&&gt.convert(Ut)!==N.getParameter(35738)&&!(Ut===ai&&(V.isWebGL2||nt.has("OES_texture_float")||nt.has("WEBGL_color_buffer_float")))&&!Vt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=C.width-z&&X>=0&&X<=C.height-$&&N.readPixels(B,X,z,$,gt.convert(Ht),gt.convert(Ut),yt)}finally{const Ft=x!==null?_t.get(x).__webglFramebuffer:null;lt.bindFramebuffer(36160,Ft)}}},this.copyFramebufferToTexture=function(C,B,X=0){const z=Math.pow(2,-X),$=Math.floor(B.image.width*z),yt=Math.floor(B.image.height*z);St.setTexture2D(B,0),N.copyTexSubImage2D(3553,X,0,0,C.x,C.y,$,yt),lt.unbindTexture()},this.copyTextureToTexture=function(C,B,X,z=0){const $=B.image.width,yt=B.image.height,Dt=gt.convert(X.format),zt=gt.convert(X.type);St.setTexture2D(X,0),N.pixelStorei(37440,X.flipY),N.pixelStorei(37441,X.premultiplyAlpha),N.pixelStorei(3317,X.unpackAlignment),B.isDataTexture?N.texSubImage2D(3553,z,C.x,C.y,$,yt,Dt,zt,B.image.data):B.isCompressedTexture?N.compressedTexSubImage2D(3553,z,C.x,C.y,B.mipmaps[0].width,B.mipmaps[0].height,Dt,B.mipmaps[0].data):N.texSubImage2D(3553,z,C.x,C.y,Dt,zt,B.image),z===0&&X.generateMipmaps&&N.generateMipmap(3553),lt.unbindTexture()},this.copyTextureToTexture3D=function(C,B,X,z,$=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const yt=C.max.x-C.min.x+1,Dt=C.max.y-C.min.y+1,zt=C.max.z-C.min.z+1,Ft=gt.convert(z.format),Ht=gt.convert(z.type);let Ut;if(z.isData3DTexture)St.setTexture3D(z,0),Ut=32879;else if(z.isDataArrayTexture)St.setTexture2DArray(z,0),Ut=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(37440,z.flipY),N.pixelStorei(37441,z.premultiplyAlpha),N.pixelStorei(3317,z.unpackAlignment);const Vt=N.getParameter(3314),ne=N.getParameter(32878),we=N.getParameter(3316),Pe=N.getParameter(3315),mn=N.getParameter(32877),ie=X.isCompressedTexture?X.mipmaps[0]:X.image;N.pixelStorei(3314,ie.width),N.pixelStorei(32878,ie.height),N.pixelStorei(3316,C.min.x),N.pixelStorei(3315,C.min.y),N.pixelStorei(32877,C.min.z),X.isDataTexture||X.isData3DTexture?N.texSubImage3D(Ut,$,B.x,B.y,B.z,yt,Dt,zt,Ft,Ht,ie.data):X.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),N.compressedTexSubImage3D(Ut,$,B.x,B.y,B.z,yt,Dt,zt,Ft,ie.data)):N.texSubImage3D(Ut,$,B.x,B.y,B.z,yt,Dt,zt,Ft,Ht,ie),N.pixelStorei(3314,Vt),N.pixelStorei(32878,ne),N.pixelStorei(3316,we),N.pixelStorei(3315,Pe),N.pixelStorei(32877,mn),$===0&&z.generateMipmaps&&N.generateMipmap(Ut),lt.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?St.setTextureCube(C,0):C.isData3DTexture?St.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?St.setTexture2DArray(C,0):St.setTexture2D(C,0),lt.unbindTexture()},this.resetState=function(){_=0,S=0,x=null,lt.reset(),Q.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Kg extends Ph{}Kg.prototype.isWebGL1Renderer=!0;class Qg extends yn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(t){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=t}}class $g extends yn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new te(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const Yo=new Se,_c=new U,xc=new U;class t0{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Wt(512,512),this.map=null,this.mapPass=null,this.matrix=new Se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ya,this._frameExtents=new Wt(1,1),this._viewportCount=1,this._viewports=[new ae(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;_c.setFromMatrixPosition(t.matrixWorld),e.position.copy(_c),xc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(xc),e.updateMatrixWorld(),Yo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Yo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const yc=new Se,ms=new U,Zo=new U;class e0 extends t0{constructor(){super(new He(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Wt(4,2),this._viewportCount=6,this._viewports=[new ae(2,1,1,1),new ae(0,1,1,1),new ae(3,1,1,1),new ae(1,1,1,1),new ae(3,0,1,1),new ae(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ms.setFromMatrixPosition(t.matrixWorld),n.position.copy(ms),Zo.copy(n.position),Zo.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Zo),n.updateMatrixWorld(),s.makeTranslation(-ms.x,-ms.y,-ms.z),yc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yc)}}class n0 extends $g{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new e0}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ja}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ja);const Jo={type:"change"},Ko={type:"start"},Qo={type:"end"};class i0 extends xi{constructor(t,e){super();const n=this,s={NONE:-1,ROTATE:0,ZOOM:1,PAN:2,TOUCH_ROTATE:3,TOUCH_ZOOM_PAN:4};this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.screen={left:0,top:0,width:0,height:0},this.rotateSpeed=1,this.zoomSpeed=1.2,this.panSpeed=.3,this.noRotate=!1,this.noZoom=!1,this.noPan=!1,this.staticMoving=!1,this.dynamicDampingFactor=.2,this.minDistance=0,this.maxDistance=1/0,this.keys=["KeyA","KeyS","KeyD"],this.mouseButtons={LEFT:fo.ROTATE,MIDDLE:fo.DOLLY,RIGHT:fo.PAN},this.target=new U;const r=1e-6,o=new U;let a=1,c=s.NONE,l=s.NONE,h=0,f=0,u=0;const d=new U,g=new Wt,p=new Wt,m=new U,_=new Wt,S=new Wt,x=new Wt,M=new Wt,y=[],b={};this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.up0=this.object.up.clone(),this.zoom0=this.object.zoom,this.handleResize=function(){const O=n.domElement.getBoundingClientRect(),nt=n.domElement.ownerDocument.documentElement;n.screen.left=O.left+window.pageXOffset-nt.clientLeft,n.screen.top=O.top+window.pageYOffset-nt.clientTop,n.screen.width=O.width,n.screen.height=O.height};const A=function(){const O=new Wt;return function(V,lt){return O.set((V-n.screen.left)/n.screen.width,(lt-n.screen.top)/n.screen.height),O}}(),v=function(){const O=new Wt;return function(V,lt){return O.set((V-n.screen.width*.5-n.screen.left)/(n.screen.width*.5),(n.screen.height+2*(n.screen.top-lt))/n.screen.width),O}}();this.rotateCamera=function(){const O=new U,nt=new ss,V=new U,lt=new U,Lt=new U,_t=new U;return function(){_t.set(p.x-g.x,p.y-g.y,0);let Y=_t.length();Y?(d.copy(n.object.position).sub(n.target),V.copy(d).normalize(),lt.copy(n.object.up).normalize(),Lt.crossVectors(lt,V).normalize(),lt.setLength(p.y-g.y),Lt.setLength(p.x-g.x),_t.copy(lt.add(Lt)),O.crossVectors(_t,d).normalize(),Y*=n.rotateSpeed,nt.setFromAxisAngle(O,Y),d.applyQuaternion(nt),n.object.up.applyQuaternion(nt),m.copy(O),u=Y):!n.staticMoving&&u&&(u*=Math.sqrt(1-n.dynamicDampingFactor),d.copy(n.object.position).sub(n.target),nt.setFromAxisAngle(m,u),d.applyQuaternion(nt),n.object.up.applyQuaternion(nt)),g.copy(p)}}(),this.zoomCamera=function(){let O;c===s.TOUCH_ZOOM_PAN?(O=h/f,h=f,n.object.isPerspectiveCamera?d.multiplyScalar(O):n.object.isOrthographicCamera?(n.object.zoom/=O,n.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")):(O=1+(S.y-_.y)*n.zoomSpeed,O!==1&&O>0&&(n.object.isPerspectiveCamera?d.multiplyScalar(O):n.object.isOrthographicCamera?(n.object.zoom/=O,n.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")),n.staticMoving?_.copy(S):_.y+=(S.y-_.y)*this.dynamicDampingFactor)},this.panCamera=function(){const O=new Wt,nt=new U,V=new U;return function(){if(O.copy(M).sub(x),O.lengthSq()){if(n.object.isOrthographicCamera){const Lt=(n.object.right-n.object.left)/n.object.zoom/n.domElement.clientWidth,_t=(n.object.top-n.object.bottom)/n.object.zoom/n.domElement.clientWidth;O.x*=Lt,O.y*=_t}O.multiplyScalar(d.length()*n.panSpeed),V.copy(d).cross(n.object.up).setLength(O.x),V.add(nt.copy(n.object.up).setLength(O.y)),n.object.position.add(V),n.target.add(V),n.staticMoving?x.copy(M):x.add(O.subVectors(M,x).multiplyScalar(n.dynamicDampingFactor))}}}(),this.checkDistances=function(){(!n.noZoom||!n.noPan)&&(d.lengthSq()>n.maxDistance*n.maxDistance&&(n.object.position.addVectors(n.target,d.setLength(n.maxDistance)),_.copy(S)),d.lengthSq()<n.minDistance*n.minDistance&&(n.object.position.addVectors(n.target,d.setLength(n.minDistance)),_.copy(S)))},this.update=function(){d.subVectors(n.object.position,n.target),n.noRotate||n.rotateCamera(),n.noZoom||n.zoomCamera(),n.noPan||n.panCamera(),n.object.position.addVectors(n.target,d),n.object.isPerspectiveCamera?(n.checkDistances(),n.object.lookAt(n.target),o.distanceToSquared(n.object.position)>r&&(n.dispatchEvent(Jo),o.copy(n.object.position))):n.object.isOrthographicCamera?(n.object.lookAt(n.target),(o.distanceToSquared(n.object.position)>r||a!==n.object.zoom)&&(n.dispatchEvent(Jo),o.copy(n.object.position),a=n.object.zoom)):console.warn("THREE.TrackballControls: Unsupported camera type")},this.reset=function(){c=s.NONE,l=s.NONE,n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.up.copy(n.up0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),d.subVectors(n.object.position,n.target),n.object.lookAt(n.target),n.dispatchEvent(Jo),o.copy(n.object.position),a=n.object.zoom};function T(O){n.enabled!==!1&&(y.length===0&&(n.domElement.setPointerCapture(O.pointerId),n.domElement.addEventListener("pointermove",D),n.domElement.addEventListener("pointerup",R)),Z(O),O.pointerType==="touch"?rt(O):k(O))}function D(O){n.enabled!==!1&&(O.pointerType==="touch"?it(O):K(O))}function R(O){n.enabled!==!1&&(O.pointerType==="touch"?H(O):tt(),ot(O),y.length===0&&(n.domElement.releasePointerCapture(O.pointerId),n.domElement.removeEventListener("pointermove",D),n.domElement.removeEventListener("pointerup",R)))}function q(O){ot(O)}function P(O){n.enabled!==!1&&(window.removeEventListener("keydown",P),l===s.NONE&&(O.code===n.keys[s.ROTATE]&&!n.noRotate?l=s.ROTATE:O.code===n.keys[s.ZOOM]&&!n.noZoom?l=s.ZOOM:O.code===n.keys[s.PAN]&&!n.noPan&&(l=s.PAN)))}function F(){n.enabled!==!1&&(l=s.NONE,window.addEventListener("keydown",P))}function k(O){if(c===s.NONE)switch(O.button){case n.mouseButtons.LEFT:c=s.ROTATE;break;case n.mouseButtons.MIDDLE:c=s.ZOOM;break;case n.mouseButtons.RIGHT:c=s.PAN;break}const nt=l!==s.NONE?l:c;nt===s.ROTATE&&!n.noRotate?(p.copy(v(O.pageX,O.pageY)),g.copy(p)):nt===s.ZOOM&&!n.noZoom?(_.copy(A(O.pageX,O.pageY)),S.copy(_)):nt===s.PAN&&!n.noPan&&(x.copy(A(O.pageX,O.pageY)),M.copy(x)),n.dispatchEvent(Ko)}function K(O){const nt=l!==s.NONE?l:c;nt===s.ROTATE&&!n.noRotate?(g.copy(p),p.copy(v(O.pageX,O.pageY))):nt===s.ZOOM&&!n.noZoom?S.copy(A(O.pageX,O.pageY)):nt===s.PAN&&!n.noPan&&M.copy(A(O.pageX,O.pageY))}function tt(){c=s.NONE,n.dispatchEvent(Qo)}function G(O){if(n.enabled!==!1&&n.noZoom!==!0){switch(O.preventDefault(),O.deltaMode){case 2:_.y-=O.deltaY*.025;break;case 1:_.y-=O.deltaY*.01;break;default:_.y-=O.deltaY*25e-5;break}n.dispatchEvent(Ko),n.dispatchEvent(Qo)}}function rt(O){switch(ut(O),y.length){case 1:c=s.TOUCH_ROTATE,p.copy(v(y[0].pageX,y[0].pageY)),g.copy(p);break;default:c=s.TOUCH_ZOOM_PAN;const nt=y[0].pageX-y[1].pageX,V=y[0].pageY-y[1].pageY;f=h=Math.sqrt(nt*nt+V*V);const lt=(y[0].pageX+y[1].pageX)/2,Lt=(y[0].pageY+y[1].pageY)/2;x.copy(A(lt,Lt)),M.copy(x);break}n.dispatchEvent(Ko)}function it(O){switch(ut(O),y.length){case 1:g.copy(p),p.copy(v(O.pageX,O.pageY));break;default:const nt=N(O),V=O.pageX-nt.x,lt=O.pageY-nt.y;f=Math.sqrt(V*V+lt*lt);const Lt=(O.pageX+nt.x)/2,_t=(O.pageY+nt.y)/2;M.copy(A(Lt,_t));break}}function H(O){switch(y.length){case 0:c=s.NONE;break;case 1:c=s.TOUCH_ROTATE,p.copy(v(O.pageX,O.pageY)),g.copy(p);break;case 2:c=s.TOUCH_ZOOM_PAN;for(let nt=0;nt<y.length;nt++)if(y[nt].pointerId!==O.pointerId){const V=b[y[nt].pointerId];p.copy(v(V.x,V.y)),g.copy(p);break}break}n.dispatchEvent(Qo)}function I(O){n.enabled!==!1&&O.preventDefault()}function Z(O){y.push(O)}function ot(O){delete b[O.pointerId];for(let nt=0;nt<y.length;nt++)if(y[nt].pointerId==O.pointerId){y.splice(nt,1);return}}function ut(O){let nt=b[O.pointerId];nt===void 0&&(nt=new Wt,b[O.pointerId]=nt),nt.set(O.pageX,O.pageY)}function N(O){const nt=O.pointerId===y[0].pointerId?y[1]:y[0];return b[nt.pointerId]}this.dispose=function(){n.domElement.removeEventListener("contextmenu",I),n.domElement.removeEventListener("pointerdown",T),n.domElement.removeEventListener("pointercancel",q),n.domElement.removeEventListener("wheel",G),n.domElement.removeEventListener("pointermove",D),n.domElement.removeEventListener("pointerup",R),window.removeEventListener("keydown",P),window.removeEventListener("keyup",F)},this.domElement.addEventListener("contextmenu",I),this.domElement.addEventListener("pointerdown",T),this.domElement.addEventListener("pointercancel",q),this.domElement.addEventListener("wheel",G,{passive:!1}),window.addEventListener("keydown",P),window.addEventListener("keyup",F),this.handleResize(),this.update()}}function s0(i){let t;return{c(){t=Tt("div"),et(t,"class","container svelte-19gsl9v")},m(e,n){Kr(e,t,n),i[4](t)},p:Ln,i:Ln,o:Ln,d(e){e&&ks(t),i[4](null)}}}function r0(i,t,e){let{didMount:n=()=>{}}=t,{didResize:s=()=>{}}=t,{animate:r=()=>{}}=t,o,a,c,l,h;const f=()=>{const _=l.clientWidth,S=l.clientHeight;o.setSize(_,S),c.aspect=_/S,c.updateProjectionMatrix()},u=(_=1)=>{const x=c.aspect>1?_*1.25:_*1.25*(1/c.aspect);c.position.set(0,0,x),c.up=new U(0,1,0),c.lookAt(0,0,0),c.far=_*100,c.near=_/100},d=()=>{o=new Ph({antialias:!0}),a=new Qg,c=new He(45,1/1,.1,1e3),o.setPixelRatio(window.devicePixelRatio),o.shadowMap.enabled=!0,o.shadowMap.type=th,f(),u(),l.appendChild(o.domElement)},g=()=>{const _=()=>{h=window.requestAnimationFrame(_),r&&r(),o.render(a,c)};_()},p=_=>{l.removeChild(o.domElement),f(),l.appendChild(o.domElement),s&&s(_)};Yh(()=>{d(),window.addEventListener("resize",p),n&&n({renderer:o,scene:a,camera:c}),g()}),qa(()=>{window.removeEventListener("resize",p),window.cancelAnimationFrame(h),a.clear(),o.renderLists.dispose(),o.dispose(),c=null,l.removeChild(o.domElement)});function m(_){re[_?"unshift":"push"](()=>{l=_,e(0,l)})}return i.$$set=_=>{"didMount"in _&&e(1,n=_.didMount),"didResize"in _&&e(2,s=_.didResize),"animate"in _&&e(3,r=_.animate)},[l,n,s,r,m]}class o0 extends Gs{constructor(t){super(),Vs(this,t,r0,s0,Ns,{didMount:1,didResize:2,animate:3})}}function a0(i){let t,e;return t=new o0({props:{didMount:i[0],didResize:i[1],animate:i[2]}}),{c(){Yr(t.$$.fragment)},m(n,s){Es(t,n,s),e=!0},p:Ln,i(n){e||(As(t.$$.fragment,n),e=!0)},o(n){Xr(t.$$.fragment,n),e=!1},d(n){Ps(t,n)}}}function l0(i,t,e){let{didMount:n=()=>{}}=t,{didResize:s=()=>{}}=t,{animate:r=()=>{}}=t,{enabled:o=!0}=t,{maxDistance:a=100}=t,{minDistance:c=.1}=t,{panSpeed:l=1}=t,{rotateSpeed:h=4}=t,{zoomSpeed:f=16}=t,{dynamicDampingFactor:u}=t,d;const g=({renderer:_,scene:S,camera:x})=>{e(13,d=new i0(x,_.domElement.parentNode)),n&&n({renderer:_,scene:S,camera:x})},p=_=>{d.handleResize(),s&&s(_)},m=()=>{d.update(),r&&r()};return qa(()=>d.dispose()),i.$$set=_=>{"didMount"in _&&e(3,n=_.didMount),"didResize"in _&&e(4,s=_.didResize),"animate"in _&&e(5,r=_.animate),"enabled"in _&&e(6,o=_.enabled),"maxDistance"in _&&e(7,a=_.maxDistance),"minDistance"in _&&e(8,c=_.minDistance),"panSpeed"in _&&e(9,l=_.panSpeed),"rotateSpeed"in _&&e(10,h=_.rotateSpeed),"zoomSpeed"in _&&e(11,f=_.zoomSpeed),"dynamicDampingFactor"in _&&e(12,u=_.dynamicDampingFactor)},i.$$.update=()=>{i.$$.dirty&8256&&d&&e(13,d.enabled=o,d),i.$$.dirty&8320&&d&&e(13,d.maxDistance=a,d),i.$$.dirty&8448&&d&&e(13,d.minDistance=c,d),i.$$.dirty&8704&&d&&e(13,d.panSpeed=l,d),i.$$.dirty&9216&&d&&e(13,d.rotateSpeed=h,d),i.$$.dirty&10240&&d&&e(13,d.zoomSpeed=f,d),i.$$.dirty&12288&&d&&e(13,d.dynamicDampingFactor=u,d)},[g,p,m,n,s,r,o,a,c,l,h,f,u,d]}class c0 extends Gs{constructor(t){super(),Vs(this,t,l0,a0,Ns,{didMount:3,didResize:4,animate:5,enabled:6,maxDistance:7,minDistance:8,panSpeed:9,rotateSpeed:10,zoomSpeed:11,dynamicDampingFactor:12})}}/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Dh="148",Rs=0,Ka=1,h0=2,vc=1,u0=100,f0=204,d0=205,p0=3,Fh=0,Lh=300,Mc=1e3,xr=1001,bc=1002,m0=1006,g0=1008,_0=1009,x0=1023,y0=3e3,v0=0,Dn="srgb",Ua="srgb-linear",$o=7680,M0=519,Sc=35044,ta=35048;class eo{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Te=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];function Xs(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Te[i&255]+Te[i>>8&255]+Te[i>>16&255]+Te[i>>24&255]+"-"+Te[t&255]+Te[t>>8&255]+"-"+Te[t>>16&15|64]+Te[t>>24&255]+"-"+Te[e&63|128]+Te[e>>8&255]+"-"+Te[e>>16&255]+Te[e>>24&255]+Te[n&255]+Te[n>>8&255]+Te[n>>16&255]+Te[n>>24&255]).toLowerCase()}function qe(i,t,e){return Math.max(t,Math.min(e,i))}function b0(i,t){return(i%t+t)%t}function ea(i,t,e){return(1-e)*i+e*t}function yr(i,t){switch(t.constructor){case Float32Array:return i;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ke(i,t){switch(t.constructor){case Float32Array:return i;case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Ee{constructor(t=0,e=0){Ee.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class yi{constructor(){yi.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(t,e,n,s,r,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],f=n[7],u=n[2],d=n[5],g=n[8],p=s[0],m=s[3],_=s[6],S=s[1],x=s[4],M=s[7],y=s[2],b=s[5],A=s[8];return r[0]=o*p+a*S+c*y,r[3]=o*m+a*x+c*b,r[6]=o*_+a*M+c*A,r[1]=l*p+h*S+f*y,r[4]=l*m+h*x+f*b,r[7]=l*_+h*M+f*A,r[2]=u*p+d*S+g*y,r[5]=u*m+d*x+g*b,r[8]=u*_+d*M+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],f=h*o-a*l,u=a*c-h*r,d=l*r-o*c,g=e*f+n*u+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/g;return t[0]=f*p,t[1]=(s*l-h*n)*p,t[2]=(a*n-s*o)*p,t[3]=u*p,t[4]=(h*e-s*c)*p,t[5]=(s*r-a*e)*p,t[6]=d*p,t[7]=(n*c-l*e)*p,t[8]=(o*e-n*r)*p,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(na.makeScale(t,e)),this}rotate(t){return this.premultiply(na.makeRotation(-t)),this}translate(t,e){return this.premultiply(na.makeTranslation(t,e)),this}makeTranslation(t,e){return this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const na=new yi;function S0(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function wc(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ui(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function jr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const ia={[Dn]:{[Ua]:ui},[Ua]:{[Dn]:jr}},Le={legacyMode:!0,get workingColorSpace(){return Ua},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,t,e){if(this.legacyMode||t===e||!t||!e)return i;if(ia[t]&&ia[t][e]!==void 0){const n=ia[t][e];return i.r=n(i.r),i.g=n(i.g),i.b=n(i.b),i}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)}},Rh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_e={r:0,g:0,b:0},rn={h:0,s:0,l:0},vr={h:0,s:0,l:0};function sa(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}function Mr(i,t){return t.r=i.r,t.g=i.g,t.b=i.b,t}class jn{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,e===void 0&&n===void 0?this.set(t):this.setRGB(t,e,n)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Dn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Le.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Le.workingColorSpace){return this.r=t,this.g=e,this.b=n,Le.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Le.workingColorSpace){if(t=b0(t,1),e=qe(e,0,1),n=qe(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=sa(o,r,t+1/3),this.g=sa(o,r,t),this.b=sa(o,r,t-1/3)}return Le.toWorkingColorSpace(this,s),this}setStyle(t,e=Dn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,Le.toWorkingColorSpace(this,e),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,Le.toWorkingColorSpace(this,e),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const c=parseFloat(r[1])/360,l=parseFloat(r[2])/100,h=parseFloat(r[3])/100;return n(r[4]),this.setHSL(c,l,h,e)}break}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,Le.toWorkingColorSpace(this,e),this;if(o===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,Le.toWorkingColorSpace(this,e),this}return t&&t.length>0?this.setColorName(t,e):this}setColorName(t,e=Dn){const n=Rh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ui(t.r),this.g=ui(t.g),this.b=ui(t.b),this}copyLinearToSRGB(t){return this.r=jr(t.r),this.g=jr(t.g),this.b=jr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Dn){return Le.fromWorkingColorSpace(Mr(this,_e),t),qe(_e.r*255,0,255)<<16^qe(_e.g*255,0,255)<<8^qe(_e.b*255,0,255)<<0}getHexString(t=Dn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Le.workingColorSpace){Le.fromWorkingColorSpace(Mr(this,_e),e);const n=_e.r,s=_e.g,r=_e.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const f=o-a;switch(l=h<=.5?f/(o+a):f/(2-o-a),o){case n:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-n)/f+2;break;case r:c=(n-s)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Le.workingColorSpace){return Le.fromWorkingColorSpace(Mr(this,_e),e),t.r=_e.r,t.g=_e.g,t.b=_e.b,t}getStyle(t=Dn){return Le.fromWorkingColorSpace(Mr(this,_e),t),t!==Dn?`color(${t} ${_e.r} ${_e.g} ${_e.b})`:`rgb(${_e.r*255|0},${_e.g*255|0},${_e.b*255|0})`}offsetHSL(t,e,n){return this.getHSL(rn),rn.h+=t,rn.s+=e,rn.l+=n,this.setHSL(rn.h,rn.s,rn.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(rn),t.getHSL(vr);const n=ea(rn.h,vr.h,e),s=ea(rn.s,vr.s,e),r=ea(rn.l,vr.l,e);return this.setHSL(n,s,r),this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}jn.NAMES=Rh;let Bi;class w0{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Bi===void 0&&(Bi=wc("canvas")),Bi.width=t.width,Bi.height=t.height;const n=Bi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Bi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=wc("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ui(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ui(e[n]/255)*255):e[n]=ui(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}class C0{constructor(t=null){this.isSource=!0,this.uuid=Xs(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ra(s[o].image)):r.push(ra(s[o]))}else r=ra(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function ra(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?w0.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let T0=0;class fi extends eo{constructor(t=fi.DEFAULT_IMAGE,e=fi.DEFAULT_MAPPING,n=xr,s=xr,r=m0,o=g0,a=x0,c=_0,l=fi.DEFAULT_ANISOTROPY,h=y0){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:T0++}),this.uuid=Xs(),this.name="",this.source=new C0(t),this.mipmaps=[],this.mapping=e,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ee(0,0),this.repeat=new Ee(1,1),this.center=new Ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new yi,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Lh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Mc:t.x=t.x-Math.floor(t.x);break;case xr:t.x=t.x<0?0:1;break;case bc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Mc:t.y=t.y-Math.floor(t.y);break;case xr:t.y=t.y<0?0:1;break;case bc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}}fi.DEFAULT_IMAGE=null;fi.DEFAULT_MAPPING=Lh;fi.DEFAULT_ANISOTROPY=1;class Ys{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],f=n[s+3];const u=r[o+0],d=r[o+1],g=r[o+2],p=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=f;return}if(a===1){t[e+0]=u,t[e+1]=d,t[e+2]=g,t[e+3]=p;return}if(f!==p||c!==u||l!==d||h!==g){let m=1-a;const _=c*u+l*d+h*g+f*p,S=_>=0?1:-1,x=1-_*_;if(x>Number.EPSILON){const y=Math.sqrt(x),b=Math.atan2(y,_*S);m=Math.sin(m*b)/y,a=Math.sin(a*b)/y}const M=a*S;if(c=c*m+u*M,l=l*m+d*M,h=h*m+g*M,f=f*m+p*M,m===1-a){const y=1/Math.sqrt(c*c+l*l+h*h+f*f);c*=y,l*=y,h*=y,f*=y}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],f=r[o],u=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+h*f+c*d-l*u,t[e+1]=c*g+h*u+l*f-a*d,t[e+2]=l*g+h*d+a*u-c*f,t[e+3]=h*g-a*f-c*u-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),f=a(r/2),u=c(n/2),d=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=u*h*f+l*d*g,this._y=l*d*f-u*h*g,this._z=l*h*g+u*d*f,this._w=l*h*f-u*d*g;break;case"YXZ":this._x=u*h*f+l*d*g,this._y=l*d*f-u*h*g,this._z=l*h*g-u*d*f,this._w=l*h*f+u*d*g;break;case"ZXY":this._x=u*h*f-l*d*g,this._y=l*d*f+u*h*g,this._z=l*h*g+u*d*f,this._w=l*h*f-u*d*g;break;case"ZYX":this._x=u*h*f-l*d*g,this._y=l*d*f+u*h*g,this._z=l*h*g-u*d*f,this._w=l*h*f+u*d*g;break;case"YZX":this._x=u*h*f+l*d*g,this._y=l*d*f+u*h*g,this._z=l*h*g-u*d*f,this._w=l*h*f-u*d*g;break;case"XZY":this._x=u*h*f-l*d*g,this._y=l*d*f-u*h*g,this._z=l*h*g+u*d*f,this._w=l*h*f+u*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],f=e[10],u=n+a+f;if(u>0){const d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(n>a&&n>f){const d=2*Math.sqrt(1+n-a-f);this._w=(h-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>f){const d=2*Math.sqrt(1+a-n-f);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+h)/d}else{const d=2*Math.sqrt(1+f-n-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(qe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),f=Math.sin((1-e)*h)/l,u=Math.sin(e*h)/l;return this._w=o*f+this._w*u,this._x=n*f+this._x*u,this._y=s*f+this._y*u,this._z=r*f+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(s),n*Math.sin(r),n*Math.cos(r),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class J{constructor(t=0,e=0,n=0){J.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Cc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Cc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=c*e+o*s-a*n,h=c*n+a*e-r*s,f=c*s+r*n-o*e,u=-r*e-o*n-a*s;return this.x=l*c+u*-r+h*-a-f*-o,this.y=h*c+u*-o+f*-r-l*-a,this.z=f*c+u*-a+l*-o-h*-r,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return oa.copy(this).projectOnVector(t),this.sub(oa)}reflect(t){return this.sub(oa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(qe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const oa=new J,Cc=new Ys;class Zs{constructor(t=new J(1/0,1/0,1/0),e=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){let e=1/0,n=1/0,s=1/0,r=-1/0,o=-1/0,a=-1/0;for(let c=0,l=t.length;c<l;c+=3){const h=t[c],f=t[c+1],u=t[c+2];h<e&&(e=h),f<n&&(n=f),u<s&&(s=u),h>r&&(r=h),f>o&&(o=f),u>a&&(a=u)}return this.min.set(e,n,s),this.max.set(r,o,a),this}setFromBufferAttribute(t){let e=1/0,n=1/0,s=1/0,r=-1/0,o=-1/0,a=-1/0;for(let c=0,l=t.count;c<l;c++){const h=t.getX(c),f=t.getY(c),u=t.getZ(c);h<e&&(e=h),f<n&&(n=f),u<s&&(s=u),h>r&&(r=h),f>o&&(o=f),u>a&&(a=u)}return this.min.set(e,n,s),this.max.set(r,o,a),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=ti.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0)if(e&&n.attributes!=null&&n.attributes.position!==void 0){const r=n.attributes.position;for(let o=0,a=r.count;o<a;o++)ti.fromBufferAttribute(r,o).applyMatrix4(t.matrixWorld),this.expandByPoint(ti)}else n.boundingBox===null&&n.computeBoundingBox(),aa.copy(n.boundingBox),aa.applyMatrix4(t.matrixWorld),this.union(aa);const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,ti),ti.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(gs),br.subVectors(this.max,gs),Ui.subVectors(t.a,gs),Oi.subVectors(t.b,gs),Ni.subVectors(t.c,gs),Nn.subVectors(Oi,Ui),kn.subVectors(Ni,Oi),ei.subVectors(Ui,Ni);let e=[0,-Nn.z,Nn.y,0,-kn.z,kn.y,0,-ei.z,ei.y,Nn.z,0,-Nn.x,kn.z,0,-kn.x,ei.z,0,-ei.x,-Nn.y,Nn.x,0,-kn.y,kn.x,0,-ei.y,ei.x,0];return!la(e,Ui,Oi,Ni,br)||(e=[1,0,0,0,1,0,0,0,1],!la(e,Ui,Oi,Ni,br))?!1:(Sr.crossVectors(Nn,kn),e=[Sr.x,Sr.y,Sr.z],la(e,Ui,Oi,Ni,br))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return ti.copy(t).clamp(this.min,this.max).sub(t).length()}getBoundingSphere(t){return this.getCenter(t.center),t.radius=this.getSize(ti).length()*.5,t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Cn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Cn=[new J,new J,new J,new J,new J,new J,new J,new J],ti=new J,aa=new Zs,Ui=new J,Oi=new J,Ni=new J,Nn=new J,kn=new J,ei=new J,gs=new J,br=new J,Sr=new J,ni=new J;function la(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ni.fromArray(i,r);const a=s.x*Math.abs(ni.x)+s.y*Math.abs(ni.y)+s.z*Math.abs(ni.z),c=t.dot(ni),l=e.dot(ni),h=n.dot(ni);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const A0=new Zs,_s=new J,ca=new J;class no{constructor(t=new J,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):A0.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;_s.subVectors(t,this.center);const e=_s.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(_s,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ca.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(_s.copy(t.center).add(ca)),this.expandByPoint(_s.copy(t.center).sub(ca))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Tn=new J,ha=new J,wr=new J,Vn=new J,ua=new J,Cr=new J,fa=new J;class io{constructor(t=new J,e=new J(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.direction).multiplyScalar(t).add(this.origin)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Tn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Tn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Tn.copy(this.direction).multiplyScalar(e).add(this.origin),Tn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ha.copy(t).add(e).multiplyScalar(.5),wr.copy(e).sub(t).normalize(),Vn.copy(this.origin).sub(ha);const r=t.distanceTo(e)*.5,o=-this.direction.dot(wr),a=Vn.dot(this.direction),c=-Vn.dot(wr),l=Vn.lengthSq(),h=Math.abs(1-o*o);let f,u,d,g;if(h>0)if(f=o*c-a,u=o*a-c,g=r*h,f>=0)if(u>=-g)if(u<=g){const p=1/h;f*=p,u*=p,d=f*(f+o*u+2*a)+u*(o*f+u+2*c)+l}else u=r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*c)+l;else u=-r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*c)+l;else u<=-g?(f=Math.max(0,-(-o*r+a)),u=f>0?-r:Math.min(Math.max(-r,-c),r),d=-f*f+u*(u+2*c)+l):u<=g?(f=0,u=Math.min(Math.max(-r,-c),r),d=u*(u+2*c)+l):(f=Math.max(0,-(o*r+a)),u=f>0?r:Math.min(Math.max(-r,-c),r),d=-f*f+u*(u+2*c)+l);else u=o>0?-r:r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*c)+l;return n&&n.copy(this.direction).multiplyScalar(f).add(this.origin),s&&s.copy(wr).multiplyScalar(u).add(ha),d}intersectSphere(t,e){Tn.subVectors(t.center,this.origin);const n=Tn.dot(this.direction),s=Tn.dot(Tn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return a<0&&c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return l>=0?(n=(t.min.x-u.x)*l,s=(t.max.x-u.x)*l):(n=(t.max.x-u.x)*l,s=(t.min.x-u.x)*l),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(t.min.z-u.z)*f,c=(t.max.z-u.z)*f):(a=(t.max.z-u.z)*f,c=(t.min.z-u.z)*f),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Tn)!==null}intersectTriangle(t,e,n,s,r){ua.subVectors(e,t),Cr.subVectors(n,t),fa.crossVectors(ua,Cr);let o=this.direction.dot(fa),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Vn.subVectors(this.origin,t);const c=a*this.direction.dot(Cr.crossVectors(Vn,Cr));if(c<0)return null;const l=a*this.direction.dot(ua.cross(Vn));if(l<0||c+l>o)return null;const h=-a*Vn.dot(fa);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ye{constructor(){Ye.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(t,e,n,s,r,o,a,c,l,h,f,u,d,g,p,m){const _=this.elements;return _[0]=t,_[4]=e,_[8]=n,_[12]=s,_[1]=r,_[5]=o,_[9]=a,_[13]=c,_[2]=l,_[6]=h,_[10]=f,_[14]=u,_[3]=d,_[7]=g,_[11]=p,_[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ye().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/ki.setFromMatrixColumn(t,0).length(),r=1/ki.setFromMatrixColumn(t,1).length(),o=1/ki.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){const u=o*h,d=o*f,g=a*h,p=a*f;e[0]=c*h,e[4]=-c*f,e[8]=l,e[1]=d+g*l,e[5]=u-p*l,e[9]=-a*c,e[2]=p-u*l,e[6]=g+d*l,e[10]=o*c}else if(t.order==="YXZ"){const u=c*h,d=c*f,g=l*h,p=l*f;e[0]=u+p*a,e[4]=g*a-d,e[8]=o*l,e[1]=o*f,e[5]=o*h,e[9]=-a,e[2]=d*a-g,e[6]=p+u*a,e[10]=o*c}else if(t.order==="ZXY"){const u=c*h,d=c*f,g=l*h,p=l*f;e[0]=u-p*a,e[4]=-o*f,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*h,e[9]=p-u*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const u=o*h,d=o*f,g=a*h,p=a*f;e[0]=c*h,e[4]=g*l-d,e[8]=u*l+p,e[1]=c*f,e[5]=p*l+u,e[9]=d*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const u=o*c,d=o*l,g=a*c,p=a*l;e[0]=c*h,e[4]=p-u*f,e[8]=g*f+d,e[1]=f,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=d*f+g,e[10]=u-p*f}else if(t.order==="XZY"){const u=o*c,d=o*l,g=a*c,p=a*l;e[0]=c*h,e[4]=-f,e[8]=l*h,e[1]=u*f+p,e[5]=o*h,e[9]=d*f-g,e[2]=g*f-d,e[6]=a*h,e[10]=p*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(E0,t,P0)}lookAt(t,e,n){const s=this.elements;return Ve.subVectors(t,e),Ve.lengthSq()===0&&(Ve.z=1),Ve.normalize(),Gn.crossVectors(n,Ve),Gn.lengthSq()===0&&(Math.abs(n.z)===1?Ve.x+=1e-4:Ve.z+=1e-4,Ve.normalize(),Gn.crossVectors(n,Ve)),Gn.normalize(),Tr.crossVectors(Ve,Gn),s[0]=Gn.x,s[4]=Tr.x,s[8]=Ve.x,s[1]=Gn.y,s[5]=Tr.y,s[9]=Ve.y,s[2]=Gn.z,s[6]=Tr.z,s[10]=Ve.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],f=n[5],u=n[9],d=n[13],g=n[2],p=n[6],m=n[10],_=n[14],S=n[3],x=n[7],M=n[11],y=n[15],b=s[0],A=s[4],v=s[8],T=s[12],D=s[1],R=s[5],q=s[9],P=s[13],F=s[2],k=s[6],K=s[10],tt=s[14],G=s[3],rt=s[7],it=s[11],H=s[15];return r[0]=o*b+a*D+c*F+l*G,r[4]=o*A+a*R+c*k+l*rt,r[8]=o*v+a*q+c*K+l*it,r[12]=o*T+a*P+c*tt+l*H,r[1]=h*b+f*D+u*F+d*G,r[5]=h*A+f*R+u*k+d*rt,r[9]=h*v+f*q+u*K+d*it,r[13]=h*T+f*P+u*tt+d*H,r[2]=g*b+p*D+m*F+_*G,r[6]=g*A+p*R+m*k+_*rt,r[10]=g*v+p*q+m*K+_*it,r[14]=g*T+p*P+m*tt+_*H,r[3]=S*b+x*D+M*F+y*G,r[7]=S*A+x*R+M*k+y*rt,r[11]=S*v+x*q+M*K+y*it,r[15]=S*T+x*P+M*tt+y*H,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],f=t[6],u=t[10],d=t[14],g=t[3],p=t[7],m=t[11],_=t[15];return g*(+r*c*f-s*l*f-r*a*u+n*l*u+s*a*d-n*c*d)+p*(+e*c*d-e*l*u+r*o*u-s*o*d+s*l*h-r*c*h)+m*(+e*l*f-e*a*d-r*o*f+n*o*d+r*a*h-n*l*h)+_*(-s*a*h-e*c*f+e*a*u+s*o*f-n*o*u+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],f=t[9],u=t[10],d=t[11],g=t[12],p=t[13],m=t[14],_=t[15],S=f*m*l-p*u*l+p*c*d-a*m*d-f*c*_+a*u*_,x=g*u*l-h*m*l-g*c*d+o*m*d+h*c*_-o*u*_,M=h*p*l-g*f*l+g*a*d-o*p*d-h*a*_+o*f*_,y=g*f*c-h*p*c-g*a*u+o*p*u+h*a*m-o*f*m,b=e*S+n*x+s*M+r*y;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/b;return t[0]=S*A,t[1]=(p*u*r-f*m*r-p*s*d+n*m*d+f*s*_-n*u*_)*A,t[2]=(a*m*r-p*c*r+p*s*l-n*m*l-a*s*_+n*c*_)*A,t[3]=(f*c*r-a*u*r-f*s*l+n*u*l+a*s*d-n*c*d)*A,t[4]=x*A,t[5]=(h*m*r-g*u*r+g*s*d-e*m*d-h*s*_+e*u*_)*A,t[6]=(g*c*r-o*m*r-g*s*l+e*m*l+o*s*_-e*c*_)*A,t[7]=(o*u*r-h*c*r+h*s*l-e*u*l-o*s*d+e*c*d)*A,t[8]=M*A,t[9]=(g*f*r-h*p*r-g*n*d+e*p*d+h*n*_-e*f*_)*A,t[10]=(o*p*r-g*a*r+g*n*l-e*p*l-o*n*_+e*a*_)*A,t[11]=(h*a*r-o*f*r-h*n*l+e*f*l+o*n*d-e*a*d)*A,t[12]=y*A,t[13]=(h*p*s-g*f*s+g*n*u-e*p*u-h*n*m+e*f*m)*A,t[14]=(g*a*s-o*p*s-g*n*c+e*p*c+o*n*m-e*a*m)*A,t[15]=(o*f*s-h*a*s+h*n*c-e*f*c-o*n*u+e*a*u)*A,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,f=a+a,u=r*l,d=r*h,g=r*f,p=o*h,m=o*f,_=a*f,S=c*l,x=c*h,M=c*f,y=n.x,b=n.y,A=n.z;return s[0]=(1-(p+_))*y,s[1]=(d+M)*y,s[2]=(g-x)*y,s[3]=0,s[4]=(d-M)*b,s[5]=(1-(u+_))*b,s[6]=(m+S)*b,s[7]=0,s[8]=(g+x)*A,s[9]=(m-S)*A,s[10]=(1-(u+p))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=ki.set(s[0],s[1],s[2]).length();const o=ki.set(s[4],s[5],s[6]).length(),a=ki.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],on.copy(this);const l=1/r,h=1/o,f=1/a;return on.elements[0]*=l,on.elements[1]*=l,on.elements[2]*=l,on.elements[4]*=h,on.elements[5]*=h,on.elements[6]*=h,on.elements[8]*=f,on.elements[9]*=f,on.elements[10]*=f,e.setFromRotationMatrix(on),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o){const a=this.elements,c=2*r/(e-t),l=2*r/(n-s),h=(e+t)/(e-t),f=(n+s)/(n-s),u=-(o+r)/(o-r),d=-2*o*r/(o-r);return a[0]=c,a[4]=0,a[8]=h,a[12]=0,a[1]=0,a[5]=l,a[9]=f,a[13]=0,a[2]=0,a[6]=0,a[10]=u,a[14]=d,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(t,e,n,s,r,o){const a=this.elements,c=1/(e-t),l=1/(n-s),h=1/(o-r),f=(e+t)*c,u=(n+s)*l,d=(o+r)*h;return a[0]=2*c,a[4]=0,a[8]=0,a[12]=-f,a[1]=0,a[5]=2*l,a[9]=0,a[13]=-u,a[2]=0,a[6]=0,a[10]=-2*h,a[14]=-d,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ki=new J,on=new Ye,E0=new J(0,0,0),P0=new J(1,1,1),Gn=new J,Tr=new J,Ve=new J,Tc=new Ye,Ac=new Ys;class Js{constructor(t=0,e=0,n=0,s=Js.DefaultOrder){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],f=s[2],u=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-qe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(qe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Tc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Tc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ac.setFromEuler(this),this.setFromQuaternion(Ac,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Js.DefaultOrder="XYZ";Js.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Ih{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let D0=0;const Ec=new J,Vi=new Ys,An=new Ye,Ar=new J,xs=new J,F0=new J,L0=new Ys,Pc=new J(1,0,0),Dc=new J(0,1,0),Fc=new J(0,0,1),R0={type:"added"},Lc={type:"removed"};class un extends eo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:D0++}),this.uuid=Xs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=un.DefaultUp.clone();const t=new J,e=new Js,n=new Ys,s=new J(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ye},normalMatrix:{value:new yi}}),this.matrix=new Ye,this.matrixWorld=new Ye,this.matrixAutoUpdate=un.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=un.DefaultMatrixWorldAutoUpdate,this.layers=new Ih,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Vi.setFromAxisAngle(t,e),this.quaternion.multiply(Vi),this}rotateOnWorldAxis(t,e){return Vi.setFromAxisAngle(t,e),this.quaternion.premultiply(Vi),this}rotateX(t){return this.rotateOnAxis(Pc,t)}rotateY(t){return this.rotateOnAxis(Dc,t)}rotateZ(t){return this.rotateOnAxis(Fc,t)}translateOnAxis(t,e){return Ec.copy(t).applyQuaternion(this.quaternion),this.position.add(Ec.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Pc,t)}translateY(t){return this.translateOnAxis(Dc,t)}translateZ(t){return this.translateOnAxis(Fc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(An.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ar.copy(t):Ar.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),xs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?An.lookAt(xs,Ar,this.up):An.lookAt(Ar,xs,this.up),this.quaternion.setFromRotationMatrix(An),s&&(An.extractRotation(s.matrixWorld),Vi.setFromRotationMatrix(An),this.quaternion.premultiply(Vi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(R0)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Lc)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(Lc)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),An.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),An.multiply(t.parent.matrixWorld)),t.applyMatrix4(An),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e){let n=[];this[t]===e&&n.push(this);for(let s=0,r=this.children.length;s<r;s++){const o=this.children[s].getObjectsByProperty(t,e);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xs,t,F0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xs,L0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const f=c[l];r(t.shapes,f)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),f=o(t.shapes),u=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}un.DefaultUp=new J(0,1,0);un.DefaultMatrixAutoUpdate=!0;un.DefaultMatrixWorldAutoUpdate=!0;const an=new J,En=new J,da=new J,Pn=new J,Gi=new J,Wi=new J,Rc=new J,pa=new J,ma=new J,ga=new J;class Fn{constructor(t=new J,e=new J,n=new J){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),an.subVectors(t,e),s.cross(an);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){an.subVectors(s,e),En.subVectors(n,e),da.subVectors(t,e);const o=an.dot(an),a=an.dot(En),c=an.dot(da),l=En.dot(En),h=En.dot(da),f=o*l-a*a;if(f===0)return r.set(-2,-1,-1);const u=1/f,d=(l*c-a*h)*u,g=(o*h-a*c)*u;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Pn),Pn.x>=0&&Pn.y>=0&&Pn.x+Pn.y<=1}static getUV(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,Pn),c.set(0,0),c.addScaledVector(r,Pn.x),c.addScaledVector(o,Pn.y),c.addScaledVector(a,Pn.z),c}static isFrontFacing(t,e,n,s){return an.subVectors(n,e),En.subVectors(t,e),an.cross(En).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return an.subVectors(this.c,this.b),En.subVectors(this.a,this.b),an.cross(En).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Fn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Fn.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,s,r){return Fn.getUV(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Fn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Fn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Gi.subVectors(s,n),Wi.subVectors(r,n),pa.subVectors(t,n);const c=Gi.dot(pa),l=Wi.dot(pa);if(c<=0&&l<=0)return e.copy(n);ma.subVectors(t,s);const h=Gi.dot(ma),f=Wi.dot(ma);if(h>=0&&f<=h)return e.copy(s);const u=c*f-h*l;if(u<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(Gi,o);ga.subVectors(t,r);const d=Gi.dot(ga),g=Wi.dot(ga);if(g>=0&&d<=g)return e.copy(r);const p=d*l-c*g;if(p<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(Wi,a);const m=h*g-d*f;if(m<=0&&f-h>=0&&d-g>=0)return Rc.subVectors(r,s),a=(f-h)/(f-h+(d-g)),e.copy(s).addScaledVector(Rc,a);const _=1/(m+p+u);return o=p*_,a=u*_,e.copy(n).addScaledVector(Gi,o).addScaledVector(Wi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let I0=0;class so extends eo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:I0++}),this.uuid=Xs(),this.name="",this.type="Material",this.blending=vc,this.side=Rs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=f0,this.blendDst=d0,this.blendEquation=u0,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=p0,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=M0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$o,this.stencilZFail=$o,this.stencilZPass=$o,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}const s=this[e];if(s===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==vc&&(n.blending=this.blending),this.side!==Rs&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class ro extends so{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new jn(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Fh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const me=new J,Er=new Ee;class je{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Sc,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Er.fromBufferAttribute(this,e),Er.applyMatrix3(t),this.setXY(e,Er.x,Er.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyMatrix3(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyMatrix4(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyNormalMatrix(t),this.setXYZ(e,me.x,me.y,me.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.transformDirection(t),this.setXYZ(e,me.x,me.y,me.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=yr(e,this.array)),e}setX(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=yr(e,this.array)),e}setY(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=yr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=yr(e,this.array)),e}setW(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),n=ke(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),n=ke(n,this.array),s=ke(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),n=ke(n,this.array),s=ke(s,this.array),r=ke(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Sc&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class z0 extends je{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class B0 extends je{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Qa extends je{constructor(t,e,n){super(new Float32Array(t),e,n)}}let U0=0;const Ke=new Ye,_a=new un,Hi=new J,Ge=new Zs,ys=new Zs,Me=new J;class fn extends eo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:U0++}),this.uuid=Xs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(S0(t)?B0:z0)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new yi().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ke.makeRotationFromQuaternion(t),this.applyMatrix4(Ke),this}rotateX(t){return Ke.makeRotationX(t),this.applyMatrix4(Ke),this}rotateY(t){return Ke.makeRotationY(t),this.applyMatrix4(Ke),this}rotateZ(t){return Ke.makeRotationZ(t),this.applyMatrix4(Ke),this}translate(t,e,n){return Ke.makeTranslation(t,e,n),this.applyMatrix4(Ke),this}scale(t,e,n){return Ke.makeScale(t,e,n),this.applyMatrix4(Ke),this}lookAt(t){return _a.lookAt(t),_a.updateMatrix(),this.applyMatrix4(_a.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hi).negate(),this.translate(Hi.x,Hi.y,Hi.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Qa(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Ge.setFromBufferAttribute(r),this.morphTargetsRelative?(Me.addVectors(this.boundingBox.min,Ge.min),this.boundingBox.expandByPoint(Me),Me.addVectors(this.boundingBox.max,Ge.max),this.boundingBox.expandByPoint(Me)):(this.boundingBox.expandByPoint(Ge.min),this.boundingBox.expandByPoint(Ge.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new no);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new J,1/0);return}if(t){const n=this.boundingSphere.center;if(Ge.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];ys.setFromBufferAttribute(a),this.morphTargetsRelative?(Me.addVectors(Ge.min,ys.min),Ge.expandByPoint(Me),Me.addVectors(Ge.max,ys.max),Ge.expandByPoint(Me)):(Ge.expandByPoint(ys.min),Ge.expandByPoint(ys.max))}Ge.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Me.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Me));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Me.fromBufferAttribute(a,l),c&&(Hi.fromBufferAttribute(t,l),Me.add(Hi)),s=Math.max(s,n.distanceToSquared(Me))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,s=e.position.array,r=e.normal.array,o=e.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new je(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],h=[];for(let D=0;D<a;D++)l[D]=new J,h[D]=new J;const f=new J,u=new J,d=new J,g=new Ee,p=new Ee,m=new Ee,_=new J,S=new J;function x(D,R,q){f.fromArray(s,D*3),u.fromArray(s,R*3),d.fromArray(s,q*3),g.fromArray(o,D*2),p.fromArray(o,R*2),m.fromArray(o,q*2),u.sub(f),d.sub(f),p.sub(g),m.sub(g);const P=1/(p.x*m.y-m.x*p.y);isFinite(P)&&(_.copy(u).multiplyScalar(m.y).addScaledVector(d,-p.y).multiplyScalar(P),S.copy(d).multiplyScalar(p.x).addScaledVector(u,-m.x).multiplyScalar(P),l[D].add(_),l[R].add(_),l[q].add(_),h[D].add(S),h[R].add(S),h[q].add(S))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let D=0,R=M.length;D<R;++D){const q=M[D],P=q.start,F=q.count;for(let k=P,K=P+F;k<K;k+=3)x(n[k+0],n[k+1],n[k+2])}const y=new J,b=new J,A=new J,v=new J;function T(D){A.fromArray(r,D*3),v.copy(A);const R=l[D];y.copy(R),y.sub(A.multiplyScalar(A.dot(R))).normalize(),b.crossVectors(v,R);const P=b.dot(h[D])<0?-1:1;c[D*4]=y.x,c[D*4+1]=y.y,c[D*4+2]=y.z,c[D*4+3]=P}for(let D=0,R=M.length;D<R;++D){const q=M[D],P=q.start,F=q.count;for(let k=P,K=P+F;k<K;k+=3)T(n[k+0]),T(n[k+1]),T(n[k+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new je(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);const s=new J,r=new J,o=new J,a=new J,c=new J,l=new J,h=new J,f=new J;if(t)for(let u=0,d=t.count;u<d;u+=3){const g=t.getX(u+0),p=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,p),o.fromBufferAttribute(e,m),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,p),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(p,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,d=e.count;u<d;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Me.fromBufferAttribute(t,e),Me.normalize(),t.setXYZ(e,Me.x,Me.y,Me.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,f=a.normalized,u=new l.constructor(c.length*h);let d=0,g=0;for(let p=0,m=c.length;p<m;p++){a.isInterleavedBufferAttribute?d=c[p]*a.data.stride+a.offset:d=c[p]*h;for(let _=0;_<h;_++)u[g++]=l[d++]}return new je(u,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new fn,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,f=l.length;h<f;h++){const u=l[h],d=t(u,n);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let f=0,u=l.length;f<u;f++){const d=l[f];h.push(d.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],f=r[l];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,t.parameters!==void 0&&(this.parameters=Object.assign({},t.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ic=new Ye,qi=new io,xa=new no,vs=new J,Ms=new J,bs=new J,ya=new J,Pr=new J,Dr=new Ee,Fr=new Ee,Lr=new Ee,va=new J,Rr=new J;class Oa extends un{constructor(t=new fn,e=new ro){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Pr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],f=r[c];h!==0&&(ya.fromBufferAttribute(f,t),o?Pr.addScaledVector(ya,h):Pr.addScaledVector(ya.sub(e),h))}e.add(Pr)}return this.isSkinnedMesh&&this.boneTransform(t,e),e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;if(s===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),xa.copy(n.boundingSphere),xa.applyMatrix4(r),t.ray.intersectsSphere(xa)===!1)||(Ic.copy(r).invert(),qi.copy(t.ray).applyMatrix4(Ic),n.boundingBox!==null&&qi.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,c=n.attributes.position,l=n.attributes.uv,h=n.attributes.uv2,f=n.groups,u=n.drawRange;if(a!==null)if(Array.isArray(s))for(let d=0,g=f.length;d<g;d++){const p=f[d],m=s[p.materialIndex],_=Math.max(p.start,u.start),S=Math.min(a.count,Math.min(p.start+p.count,u.start+u.count));for(let x=_,M=S;x<M;x+=3){const y=a.getX(x),b=a.getX(x+1),A=a.getX(x+2);o=Ir(this,m,t,qi,l,h,y,b,A),o&&(o.faceIndex=Math.floor(x/3),o.face.materialIndex=p.materialIndex,e.push(o))}}else{const d=Math.max(0,u.start),g=Math.min(a.count,u.start+u.count);for(let p=d,m=g;p<m;p+=3){const _=a.getX(p),S=a.getX(p+1),x=a.getX(p+2);o=Ir(this,s,t,qi,l,h,_,S,x),o&&(o.faceIndex=Math.floor(p/3),e.push(o))}}else if(c!==void 0)if(Array.isArray(s))for(let d=0,g=f.length;d<g;d++){const p=f[d],m=s[p.materialIndex],_=Math.max(p.start,u.start),S=Math.min(c.count,Math.min(p.start+p.count,u.start+u.count));for(let x=_,M=S;x<M;x+=3){const y=x,b=x+1,A=x+2;o=Ir(this,m,t,qi,l,h,y,b,A),o&&(o.faceIndex=Math.floor(x/3),o.face.materialIndex=p.materialIndex,e.push(o))}}else{const d=Math.max(0,u.start),g=Math.min(c.count,u.start+u.count);for(let p=d,m=g;p<m;p+=3){const _=p,S=p+1,x=p+2;o=Ir(this,s,t,qi,l,h,_,S,x),o&&(o.faceIndex=Math.floor(p/3),e.push(o))}}}}function O0(i,t,e,n,s,r,o,a){let c;if(t.side===Ka?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===Rs,a),c===null)return null;Rr.copy(a),Rr.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Rr);return l<e.near||l>e.far?null:{distance:l,point:Rr.clone(),object:i}}function Ir(i,t,e,n,s,r,o,a,c){i.getVertexPosition(o,vs),i.getVertexPosition(a,Ms),i.getVertexPosition(c,bs);const l=O0(i,t,e,n,vs,Ms,bs,va);if(l){s&&(Dr.fromBufferAttribute(s,o),Fr.fromBufferAttribute(s,a),Lr.fromBufferAttribute(s,c),l.uv=Fn.getUV(va,vs,Ms,bs,Dr,Fr,Lr,new Ee)),r&&(Dr.fromBufferAttribute(r,o),Fr.fromBufferAttribute(r,a),Lr.fromBufferAttribute(r,c),l.uv2=Fn.getUV(va,vs,Ms,bs,Dr,Fr,Lr,new Ee));const h={a:o,b:a,c,normal:new J,materialIndex:0};Fn.getNormal(vs,Ms,bs,h.normal),l.face=h}return l}const Ma=new J,N0=new J,k0=new yi;class V0{constructor(t=new J(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Ma.subVectors(n,e).cross(N0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)}intersectLine(t,e){const n=t.delta(Ma),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(n).multiplyScalar(r).add(t.start)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||k0.getNormalMatrix(t),s=this.coplanarPoint(Ma).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}class zh extends so{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new jn(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const zc=new J,Bc=new J,Uc=new Ye,ba=new io,zr=new no;class G0 extends un{constructor(t=new fn,e=new zh){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)zc.fromBufferAttribute(e,s-1),Bc.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=zc.distanceTo(Bc);t.setAttribute("lineDistance",new Qa(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),zr.copy(n.boundingSphere),zr.applyMatrix4(s),zr.radius+=r,t.ray.intersectsSphere(zr)===!1)return;Uc.copy(s).invert(),ba.copy(t.ray).applyMatrix4(Uc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new J,h=new J,f=new J,u=new J,d=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){const _=Math.max(0,o.start),S=Math.min(g.count,o.start+o.count);for(let x=_,M=S-1;x<M;x+=d){const y=g.getX(x),b=g.getX(x+1);if(l.fromBufferAttribute(m,y),h.fromBufferAttribute(m,b),ba.distanceSqToSegment(l,h,u,f)>c)continue;u.applyMatrix4(this.matrixWorld);const v=t.ray.origin.distanceTo(u);v<t.near||v>t.far||e.push({distance:v,point:f.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const _=Math.max(0,o.start),S=Math.min(m.count,o.start+o.count);for(let x=_,M=S-1;x<M;x+=d){if(l.fromBufferAttribute(m,x),h.fromBufferAttribute(m,x+1),ba.distanceSqToSegment(l,h,u,f)>c)continue;u.applyMatrix4(this.matrixWorld);const b=t.ray.origin.distanceTo(u);b<t.near||b>t.far||e.push({distance:b,point:f.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const Oc=new J,Nc=new J;class W0 extends G0{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Oc.fromBufferAttribute(e,s),Nc.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Oc.distanceTo(Nc);t.setAttribute("lineDistance",new Qa(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class $a extends so{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new jn(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const kc=new Ye,Na=new io,Br=new no,Ur=new J;class Vc extends un{constructor(t=new fn,e=new $a){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Br.copy(n.boundingSphere),Br.applyMatrix4(s),Br.radius+=r,t.ray.intersectsSphere(Br)===!1)return;kc.copy(s).invert(),Na.copy(t.ray).applyMatrix4(kc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,f=n.attributes.position;if(l!==null){const u=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let g=u,p=d;g<p;g++){const m=l.getX(g);Ur.fromBufferAttribute(f,m),Gc(Ur,m,c,s,t,e,this)}}else{const u=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let g=u,p=d;g<p;g++)Ur.fromBufferAttribute(f,g),Gc(Ur,g,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Gc(i,t,e,n,s,r,o){const a=Na.distanceSqToPoint(i);if(a<e){const c=new J;Na.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,object:o})}}class Bh extends so{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new jn(16777215),this.specular=new jn(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new jn(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=v0,this.normalScale=new Ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Fh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class H0{constructor(t,e,n=0,s=1/0){this.ray=new io(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Ih,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return ka(t,this,n,e),n.sort(Wc),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)ka(t[s],this,n,e);return n.sort(Wc),n}}function Wc(i,t){return i.distance-t.distance}function ka(i,t,e,n){if(i.layers.test(t.layers)&&i.raycast(t,e),n===!0){const s=i.children;for(let r=0,o=s.length;r<o;r++)ka(s[r],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Dh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Dh);function ce(i,t,e){this.type="node",this.index=t,this._originalPosition=i.clone(),this.beams=[],this.creases=[],this.invCreases=[],this.externalForce=null,this.fixed=!1,this.model=e}ce.prototype.setFixed=function(i){this.fixed=i,this.externalForce&&(i?this.externalForce.hide():this.externalForce.show())};ce.prototype.isFixed=function(){return this.fixed};ce.prototype.addExternalForce=function(i){};ce.prototype.getExternalForce=function(){return this.externalForce?this.externalForce.getForce():new J(0,0,0)};ce.prototype.addCrease=function(i){this.creases.push(i)};ce.prototype.removeCrease=function(i){if(this.creases===null)return;const t=this.creases.indexOf(i);t>=0&&this.creases.splice(t,1)};ce.prototype.addInvCrease=function(i){this.invCreases.push(i)};ce.prototype.removeInvCrease=function(i){if(this.invCreases===null)return;const t=this.invCreases.indexOf(i);t>=0&&this.invCreases.splice(t,1)};ce.prototype.addBeam=function(i){this.beams.push(i)};ce.prototype.removeBeam=function(i){if(this.beams===null)return;const t=this.beams.indexOf(i);t>=0&&this.beams.splice(t,1)};ce.prototype.getBeams=function(){return this.beams};ce.prototype.numBeams=function(){return this.beams.length};ce.prototype.isConnectedTo=function(i){for(let t=0;t<this.beams.length;t+=1)if(this.beams[t].getOtherNode(this)===i)return!0;return!1};ce.prototype.numCreases=function(){return this.creases.length};ce.prototype.getIndex=function(){return this.index};ce.prototype.getOriginalPosition=function(){return this._originalPosition.clone()};ce.prototype.setOriginalPosition=function(i,t,e){this._originalPosition.set(i,t,e)};ce.prototype.getPosition=function(){const i=this.getIndex();return new J(this.model.positions[3*i],this.model.positions[3*i+1],this.model.positions[3*i+2])};ce.prototype.moveManually=function(i){const t=this.getIndex();this.model.positions[3*t]=i.x,this.model.positions[3*t+1]=i.y,this.model.positions[3*t+2]=i.z};ce.prototype.getRelativePosition=function(){return this.getPosition().sub(this._originalPosition)};ce.prototype.getSimMass=function(){return 1};ce.prototype.destroy=function(){this.object3D=null,this.beams=null,this.creases=null,this.invCreases=null,this.externalForce=null};function tn(i,{axialStiffness:t,dampingRatio:e}){this.type="beam",this.axialStiffness=t,this.dampingRatio=e,i[0].addBeam(this),i[1].addBeam(this),this.vertices=[i[0]._originalPosition,i[1]._originalPosition],this.nodes=i,this.originalLength=this.getLength()}tn.prototype.getLength=function(){return this.getVector().length()};tn.prototype.getOriginalLength=function(){return this.originalLength};tn.prototype.recalcOriginalLength=function(){this.originalLength=this.getVector().length()};tn.prototype.isFixed=function(){return this.nodes[0].fixed&&this.nodes[1].fixed};tn.prototype.getVector=function(i){return i===this.nodes[1]?this.vertices[0].clone().sub(this.vertices[1]):this.vertices[1].clone().sub(this.vertices[0])};tn.prototype.getK=function(){return this.axialStiffness/this.getLength()};tn.prototype.getD=function(){return this.dampingRatio*2*Math.sqrt(this.getK()*this.getMinMass())};tn.prototype.getNaturalFrequency=function(){return Math.sqrt(this.getK()/this.getMinMass())};tn.prototype.getMinMass=function(){let i=this.nodes[0].getSimMass();return this.nodes[1].getSimMass()<i&&(i=this.nodes[1].getSimMass()),i};tn.prototype.getOtherNode=function(i){return this.nodes[0]===i?this.nodes[1]:this.nodes[0]};tn.prototype.destroy=function(){const i=this;this.nodes.forEach(t=>t.removeBeam(i)),this.vertices=null,this.nodes=null};function be(i,t,e,n,s,r,o,a,c){this.options=i,this.edge=t;for(let l=0;l<t.nodes.length;l+=1)t.nodes[l].addInvCrease(this);this.face1Index=e,this.face2Index=n,this.targetTheta=s,this.type=r,this.node1=o,this.node2=a,this.index=c,o.addCrease(this),a.addCrease(this),this.joinStiffness=i.joinStiffness!==void 0?i.joinStiffness:.7,this.creaseStiffness=i.creaseStiffness!==void 0?i.creaseStiffness:.7,this.dampingRatio=i.dampingRatio!==void 0?i.dampingRatio:.45}be.prototype.getLength=function(){return this.edge.getLength()};be.prototype.getVector=function(i){return this.edge.getVector(i)};be.prototype.getNormal1Index=function(){return this.face1Index};be.prototype.getNormal2Index=function(){return this.face2Index};be.prototype.getTargetTheta=function(){return this.targetTheta};be.prototype.getK=function(){const i=this.getLength();return this.type===0?this.joinStiffness*i:this.creaseStiffness*i};be.prototype.getD=function(){return this.dampingRatio*2*Math.sqrt(this.getK())};be.prototype.getIndex=function(){return this.index};be.prototype.getLengthToNode1=function(){return this.getLengthTo(this.node1)};be.prototype.getLengthToNode2=function(){return this.getLengthTo(this.node2)};be.prototype.getCoef1=function(i){return this.getCoef(this.node1,i)};be.prototype.getCoef2=function(i){return this.getCoef(this.node2,i)};be.prototype.getCoef=function(i,t){const e=this.getVector(t),n=e.length();e.normalize();const r=i.getOriginalPosition().sub(t.getOriginalPosition()),o=e.dot(r);let a=Math.sqrt(r.lengthSq()-o*o);return a<=0&&(console.warn("bad moment arm"),a=.001),1-o/n};be.prototype.getLengthTo=function(i){const t=this.getVector().normalize(),n=i.getOriginalPosition().sub(this.edge.nodes[1].getOriginalPosition()),s=t.dot(n);let r=Math.sqrt(n.lengthSq()-s*s);return r<=0&&(console.warn("bad moment arm"),r=.001),r};be.prototype.getNodeIndex=function(i){return i===this.node1?1:i===this.node2?2:i===this.edge.nodes[0]?3:i===this.edge.nodes[1]?4:(console.log("unknown node type"),0)};be.prototype.setVisibility=function(){let i=!1;this.type===0?i=this.options.visible.facet:i=this.targetTheta>0&&this.options.visible.mountain||this.targetTheta<0&&this.options.visible.valley,this.edge.setVisibility(i)};be.prototype.destroy=function(){if(this.node1.removeCrease(this),this.node2.removeCrease(this),this.edge&&this.edge.nodes)for(let i=0;i<this.edge.nodes.length;i+=1)this.edge.nodes[i].removeInvCrease(this);this.edge=null,this.face1Index=null,this.face2Index=null,this.targetTheta=null,this.type=null,this.node1=null,this.node2=null,this.index=null};const tl=.5,q0=new Bh({flatShading:!0,side:Rs,polygonOffset:!0,polygonOffsetFactor:tl,polygonOffsetUnits:1,color:15466635,emissive:0,specular:1118481,shininess:20,reflectivity:0,refractionRatio:0}),j0=new Bh({flatShading:!0,side:Ka,polygonOffset:!0,polygonOffsetFactor:tl,polygonOffsetUnits:1,color:16777215,emissive:0,specular:1118481,shininess:20,reflectivity:0,refractionRatio:0}),Hc=new zh({color:0,transparent:!0,opacity:.5}),X0=new ro({vertexColors:!0,side:h0,polygonOffset:!0,polygonOffsetFactor:tl,polygonOffsetUnits:1}),Y0=i=>{const t=[],e=i.faces_vertices;for(let n=0;n<i.edges_vertices.length;n+=1){const s=i.edges_assignment[n];if(s!=="M"&&s!=="V"&&s!=="F")continue;const r=i.edges_vertices[n],o=r[0],a=r[1];let c=[];const l={};for(let h=0;h<e.length;h+=1){const f=e[h],u=[f[0],f[1],f[2]],d=u.indexOf(o);if(d>=0){const g=u.indexOf(a);if(g>=0&&(c.push(h),g>d?(u.splice(g,1),u.splice(d,1)):(u.splice(d,1),u.splice(g,1)),c.push(u[0]),c.length===4)){(g-d===1||g-d===-2)&&(c=[c[2],c[3],c[0],c[1]]),c.push(n);const p=i.edges_foldAngle[n];c.push(p),l.faces=[c[0],c[2]],l.vertices=[c[1],c[3]],l.edge=c[4],l.foldAngle=c[5],t.push(l);break}}}}return t};var Jr={},Z0={get exports(){return Jr},set exports(i){Jr=i}};Z0.exports=oo;Jr.default=oo;function oo(i,t,e){e=e||2;var n=t&&t.length,s=n?t[0]*e:i.length,r=Uh(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;var a,c,l,h,f,u,d;if(n&&(r=t_(i,t,r,e)),i.length>80*e){a=l=i[0],c=h=i[1];for(var g=e;g<s;g+=e)f=i[g],u=i[g+1],f<a&&(a=f),u<c&&(c=u),f>l&&(l=f),u>h&&(h=u);d=Math.max(l-a,h-c),d=d!==0?32767/d:0}return Is(r,o,e,a,c,d,0),o}function Uh(i,t,e,n,s){var r,o;if(s===Wa(i,t,e,n)>0)for(r=t;r<e;r+=n)o=qc(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=qc(r,i[r],i[r+1],o);return o&&ao(o,o.next)&&(Bs(o),o=o.next),o}function _i(i,t){if(!i)return i;t||(t=i);var e=i,n;do if(n=!1,!e.steiner&&(ao(e,e.next)||le(e.prev,e,e.next)===0)){if(Bs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Is(i,t,e,n,s,r,o){if(i){!o&&r&&r_(i,n,s,r);for(var a=i,c,l;i.prev!==i.next;){if(c=i.prev,l=i.next,r?K0(i,n,s,r):J0(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),Bs(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=Q0(_i(i),t,e),Is(i,t,e,n,s,r,2)):o===2&&$0(i,t,e,n,s,r):Is(_i(i),t,e,n,s,r,1);break}}}}function J0(i){var t=i.prev,e=i,n=i.next;if(le(t,e,n)>=0)return!1;for(var s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=s<r?s<o?s:o:r<o?r:o,f=a<c?a<l?a:l:c<l?c:l,u=s>r?s>o?s:o:r>o?r:o,d=a>c?a>l?a:l:c>l?c:l,g=n.next;g!==t;){if(g.x>=h&&g.x<=u&&g.y>=f&&g.y<=d&&Ki(s,a,r,c,o,l,g.x,g.y)&&le(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function K0(i,t,e,n){var s=i.prev,r=i,o=i.next;if(le(s,r,o)>=0)return!1;for(var a=s.x,c=r.x,l=o.x,h=s.y,f=r.y,u=o.y,d=a<c?a<l?a:l:c<l?c:l,g=h<f?h<u?h:u:f<u?f:u,p=a>c?a>l?a:l:c>l?c:l,m=h>f?h>u?h:u:f>u?f:u,_=Va(d,g,t,e,n),S=Va(p,m,t,e,n),x=i.prevZ,M=i.nextZ;x&&x.z>=_&&M&&M.z<=S;){if(x.x>=d&&x.x<=p&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&Ki(a,h,c,f,l,u,x.x,x.y)&&le(x.prev,x,x.next)>=0||(x=x.prevZ,M.x>=d&&M.x<=p&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&Ki(a,h,c,f,l,u,M.x,M.y)&&le(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;x&&x.z>=_;){if(x.x>=d&&x.x<=p&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&Ki(a,h,c,f,l,u,x.x,x.y)&&le(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;M&&M.z<=S;){if(M.x>=d&&M.x<=p&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&Ki(a,h,c,f,l,u,M.x,M.y)&&le(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function Q0(i,t,e){var n=i;do{var s=n.prev,r=n.next.next;!ao(s,r)&&Oh(s,n,n.next,r)&&zs(s,r)&&zs(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Bs(n),Bs(n.next),n=i=r),n=n.next}while(n!==i);return _i(n)}function $0(i,t,e,n,s,r){var o=i;do{for(var a=o.next.next;a!==o.prev;){if(o.i!==a.i&&l_(o,a)){var c=Nh(o,a);o=_i(o,o.next),c=_i(c,c.next),Is(o,t,e,n,s,r,0),Is(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function t_(i,t,e,n){var s=[],r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=Uh(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(a_(l));for(s.sort(e_),r=0;r<s.length;r++)e=n_(s[r],e);return e}function e_(i,t){return i.x-t.x}function n_(i,t){var e=i_(i,t);if(!e)return t;var n=Nh(e,i);return _i(n,n.next),_i(e,e.next)}function i_(i,t){var e=t,n=i.x,s=i.y,r=-1/0,o;do{if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){var a=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(a<=n&&a>r&&(r=a,o=e.x<e.next.x?e:e.next,a===n))return o}e=e.next}while(e!==t);if(!o)return null;var c=o,l=o.x,h=o.y,f=1/0,u;e=o;do n>=e.x&&e.x>=l&&n!==e.x&&Ki(s<h?n:r,s,l,h,s<h?r:n,s,e.x,e.y)&&(u=Math.abs(s-e.y)/(n-e.x),zs(e,i)&&(u<f||u===f&&(e.x>o.x||e.x===o.x&&s_(o,e)))&&(o=e,f=u)),e=e.next;while(e!==c);return o}function s_(i,t){return le(i.prev,i,t.prev)<0&&le(t.next,i,i.next)<0}function r_(i,t,e,n){var s=i;do s.z===0&&(s.z=Va(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,o_(s)}function o_(i){var t,e,n,s,r,o,a,c,l=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(o>1);return i}function Va(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function a_(i){var t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Ki(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function l_(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!c_(i,t)&&(zs(i,t)&&zs(t,i)&&h_(i,t)&&(le(i.prev,i,t.prev)||le(i,t.prev,t))||ao(i,t)&&le(i.prev,i,i.next)>0&&le(t.prev,t,t.next)>0)}function le(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function ao(i,t){return i.x===t.x&&i.y===t.y}function Oh(i,t,e,n){var s=Nr(le(i,t,e)),r=Nr(le(i,t,n)),o=Nr(le(e,n,i)),a=Nr(le(e,n,t));return!!(s!==r&&o!==a||s===0&&Or(i,e,t)||r===0&&Or(i,n,t)||o===0&&Or(e,i,n)||a===0&&Or(e,t,n))}function Or(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Nr(i){return i>0?1:i<0?-1:0}function c_(i,t){var e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Oh(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function zs(i,t){return le(i.prev,i,i.next)<0?le(i,t,i.next)>=0&&le(i,i.prev,t)>=0:le(i,t,i.prev)<0||le(i,i.next,t)<0}function h_(i,t){var e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Nh(i,t){var e=new Ga(i.i,i.x,i.y),n=new Ga(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function qc(i,t,e,n){var s=new Ga(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Bs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ga(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}oo.deviation=function(i,t,e,n){var s=t&&t.length,r=s?t[0]*e:i.length,o=Math.abs(Wa(i,0,r,e));if(s)for(var a=0,c=t.length;a<c;a++){var l=t[a]*e,h=a<c-1?t[a+1]*e:i.length;o-=Math.abs(Wa(i,l,h,e))}var f=0;for(a=0;a<n.length;a+=3){var u=n[a]*e,d=n[a+1]*e,g=n[a+2]*e;f+=Math.abs((i[u]-i[g])*(i[d+1]-i[u+1])-(i[u]-i[d])*(i[g+1]-i[u+1]))}return o===0&&f===0?0:Math.abs((f-o)/o)};function Wa(i,t,e,n){for(var s=0,r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}oo.flatten=function(i){for(var t=i[0][0].length,e={vertices:[],holes:[],dimensions:t},n=0,s=0;s<i.length;s++){for(var r=0;r<i[s].length;r++)for(var o=0;o<t;o++)e.vertices.push(i[s][r][o]);s>0&&(n+=i[s-1].length,e.holes.push(n))}return e};const jc=(i,t)=>{const e=[t[0]-i[0],t[1]-i[1],(t[2]||0)-(i[2]||0)];return e[0]**2+e[1]**2+e[2]**2},u_=i=>JSON.parse(JSON.stringify({vertices_coords:i.vertices_coords||[],edges_vertices:i.edges_vertices||[],edges_foldAngle:i.edges_foldAngle||[],edges_assignment:i.edges_assignment||[],faces_vertices:i.faces_vertices||[]}));function f_(i,t){const e=u_(i),n=[];for(let s=0;s<e.faces_vertices.length;s+=1){const r=e.faces_vertices[s];if(r.length===3){n.push(r);continue}if(r.length===4){const h=jc(e.vertices_coords[r[0]],e.vertices_coords[r[2]]);jc(e.vertices_coords[r[1]],e.vertices_coords[r[3]])<h?(e.edges_vertices.push([r[1],r[3]]),e.edges_foldAngle.push(0),e.edges_assignment.push("F"),n.push([r[0],r[1],r[3]]),n.push([r[1],r[2],r[3]])):(e.edges_vertices.push([r[0],r[2]]),e.edges_foldAngle.push(0),e.edges_assignment.push("F"),n.push([r[0],r[1],r[2]]),n.push([r[0],r[2],r[3]]));continue}const o=[];for(let h=0;h<e.edges_vertices.length;h+=1){const f=e.edges_vertices[h];r.indexOf(f[0])>=0&&r.indexOf(f[1])>=0&&o.push(h)}const a=t?[0,1]:[0,1,2],c=e.faces_vertices[s].flatMap(h=>a.map(f=>e.vertices_coords[h][f])),l=Jr(c,null,t?2:3);for(let h=0;h<l.length;h+=3){const f=[r[l[h+1]],r[l[h+2]],r[l[h]]],u=[!1,!1,!1];for(let d=0;d<o.length;d+=1){const g=e.edges_vertices[o[d]],p=g.indexOf(f[0]),m=g.indexOf(f[1]),_=g.indexOf(f[2]);if(p>=0){if(m>=0){u[0]=!0;continue}if(_>=0){u[2]=!0;continue}}if(m>=0&&_>=0){u[1]=!0;continue}}for(let d=0;d<3;d+=1)u[d]||(d===0?(o.push(e.edges_vertices.length),e.edges_vertices.push([f[0],f[1]]),e.edges_foldAngle.push(0),e.edges_assignment.push("F")):d===1?(o.push(e.edges_vertices.length),e.edges_vertices.push([f[2],f[1]]),e.edges_foldAngle.push(0),e.edges_assignment.push("F")):d===2&&(o.push(e.edges_vertices.length),e.edges_vertices.push([f[2],f[0]]),e.edges_foldAngle.push(0),e.edges_assignment.push("F")));n.push(f)}}return e.faces_vertices=n,e}function d_(i){const t=[];for(let e=0;e<i.vertices_coords.length;e+=1)t.push([]);for(let e=0;e<i.faces_vertices.length;e+=1){const n=i.faces_vertices[e];for(let s=0;s<n.length;s+=1)t[n[s]].push(e)}return i.vertices_faces=t,i}function p_(i,t,e,n){if(e===n)return!1;for(let s=0;s<t.length;s+=1){const r=i.faces_vertices[t[s]];if(r.indexOf(e)>=0&&r.indexOf(n)>=0)return!0}return!1}function m_(i){for(let t=0;t<i.vertices_vertices.length;t+=1){const e=i.vertices_vertices[t],n=i.vertices_edges[t],s=[];for(let r=0;r<e.length;r+=1){let o=-1;for(let a=0;a<n.length;a+=1){const c=n[a];if(i.edges_vertices[c].indexOf(e[r])>=0){o=c;break}}o<0&&console.warn("origami simulator, no matching edge found"),s.push(o)}i.vertices_edges[t]=s}return i}const g_=i=>{i=m_(i),i=d_(i);for(let t=0;t<i.vertices_edges.length;t+=1){const e=[[]];let n=0;const s=i.vertices_edges[t],r=i.vertices_faces[t];for(let o=0;o<s.length;o+=1){const a=s[o],c=i.edges_assignment[a];if(e[n].push(a),c==="C"){e.push([i.edges_vertices.length]),n+=1;const l=i.edges_vertices.length,h=i.edges_vertices[a];i.edges_vertices.push([h[0],h[1]]),i.edges_assignment[a]="B",i.edges_foldAngle.push(null),i.edges_assignment.push("B");let f=h[0];f===t&&(f=h[1]);const u=i.vertices_edges[f],d=u.indexOf(a);u.splice(d,0,l)}else if(c==="B")if(o===0&&s.length>1){const l=s[1];if(i.edges_assignment[l]==="B"){const h=i.edges_vertices[a];let f=h[0];f===t&&(f=h[1]);const u=i.edges_vertices[l];let d=u[0];d===t&&(d=u[1]),p_(i,i.vertices_faces[t],f,d)||(e.push([]),n+=1)}}else e[n].length>1&&(e.push([]),n+=1)}if(!(e.length<=1)){for(let o=e[n].length-1;o>=0;o-=1)e[0].unshift(e[n][o]);e.pop();for(let o=1;o<e.length;o+=1){const a=i.vertices_coords[t],c=i.vertices_coords.length;i.vertices_coords.push(a.slice());const l=[];for(let h=0;h<e[o].length;h+=1){const f=e[o][h],u=i.edges_vertices[f];let d=u[0];u[0]===t?(u[0]=c,d=u[1]):u[1]=c,l.push(d)}if(l.length<2)console.warn("origami simulator, splitCuts problem");else for(let h=1;h<l.length;h+=1){const f=l[h],u=l[h-1];let d=!1;for(let g=0;g<r.length;g+=1){const p=i.faces_vertices[r[g]],m=p.indexOf(f),_=p.indexOf(u),S=p.indexOf(t);if(m>=0&&_>=0&&S>=0&&(Math.abs(m-S)===1||Math.abs(m-S)===p.length-1)&&(Math.abs(_-S)===1||Math.abs(_-S)===p.length-1)){d=!0,p[S]=c;break}}d||console.warn("origami simulator, splitCuts problem")}}}}return delete i.vertices_faces,delete i.vertices_edges,delete i.vertices_vertices,i},__=(i,t)=>Object.keys(i).filter(e=>e.slice(0,t.length)===t),x_=(i,t)=>Object.keys(i).filter(e=>e.slice(-t.length)===t),y_=(i,t,e)=>{const n=[];for(let o=0;o<e.length;o+=1){const a=e[o];a!=null&&(n[a]=o)}const s=__(i,`${t}_`);for(let o=0;o<s.length;o+=1)i[s[o]]=n.map(a=>i[s[o]][a]);const r=x_(i,`_${t}`);for(let o=0;o<r.length;o+=1)i[r[o]]=i[r[o]].map(a=>a.map(c=>e[c]));return i};function v_(i,t,e,n){let s=0,r=0;const o=[];let a=null;const c=[];for(let h=i.edges_vertices.length-1;h>=0;h-=1){const f=i.edges_vertices[h];if(f.indexOf(e)>=0&&(f.indexOf(t)>=0||f.indexOf(n)>=0)){if(a===null)a=i.edges_assignment[h];else if(a!==i.edges_assignment[h])return console.warn("different edge assignments"),!1;const u=i.edges_foldAngle[h];Number.isNaN(u)&&console.log(h),o.push(u),u&&(s+=u,r+=1),c.push(h)}}o[0]!==o[1]&&console.warn(`incompatible angles: ${JSON.stringify(o)}`);for(let h=0;h<c.length;h+=1){const f=c[h];i.edges_vertices.splice(f,1),i.edges_assignment.splice(f,1),i.edges_foldAngle.splice(f,1)}i.edges_vertices.push([t,n]),i.edges_assignment.push(a),r>0?i.edges_foldAngle.push(s/r):i.edges_foldAngle.push(null);let l=i.vertices_vertices[t].indexOf(e);return i.vertices_vertices[t].splice(l,1),i.vertices_vertices[t].push(n),l=i.vertices_vertices[n].indexOf(e),i.vertices_vertices[n].splice(l,1),i.vertices_vertices[n].push(t),!0}function M_(i,t){const e=[];let n=0,s=0;for(let r=0;r<i.vertices_vertices.length;r+=1){const o=i.vertices_vertices[r];if(o.length!==2){e.push(s++);continue}const a=i.vertices_coords[r],c=i.vertices_coords[o[0]],l=i.vertices_coords[o[1]],h=a.length===3,f=[c[0]-a[0],c[1]-a[1]],u=[l[0]-a[0],l[1]-a[1]];let d=f[0]*f[0]+f[1]*f[1],g=u[0]*u[0]+u[1]*u[1],p=f[0]*u[0]+f[1]*u[1];if(h&&(f.push(c[2]-a[2]),u.push(l[2]-a[2]),d+=f[2]*f[2],g+=u[2]*u[2],p+=f[2]*u[2]),p/=Math.sqrt(d*g),Math.abs(p+1)<t)if(v_(i,o[0],r,o[1]))n+=1,e.push(null);else{e.push(s++);continue}else e.push(s++)}if(n===0)return i;if(console.warn(`${n} redundant vertices found`),i=y_(i,"vertices",e),i.faces_vertices)for(let r=0;r<i.faces_vertices.length;r+=1){const o=i.faces_vertices[r];for(let a=o.length-1;a>=0;a-=1)o[a]===null&&o.splice(a,1)}return i}const kh=({vertices_coords:i},t=0)=>{if(!i||!i.length)return;const e=Array(i[0].length).fill(1/0),n=Array(i[0].length).fill(-1/0);i.forEach(r=>r.forEach((o,a)=>{o<e[a]&&(e[a]=o-t),o>n[a]&&(n[a]=o+t)}));const s=n.map((r,o)=>r-e[o]);return{min:e,max:n,span:s}},b_=(i,t)=>[i[0]-t[0],i[1]-t[1]],S_=({vertices_coords:i},t,e)=>t.map(n=>i[n]).map(n=>b_(n,i[e])).map(n=>Math.atan2(n[1],n[0])).map(n=>n>-1e-6?n:n+Math.PI*2).map((n,s)=>({a:n,i:s})).sort((n,s)=>n.a-s.a).map(n=>n.i).map(n=>t[n]),w_=({edges_vertices:i})=>{const t=[];return i.forEach((e,n)=>e.forEach(s=>{t[s]===void 0&&(t[s]=[]),t[s].push(n)})),t},C_=({edges_vertices:i})=>{const t={};return i.map(e=>e.join(" ")).forEach((e,n)=>{t[e]=n}),i.map(e=>`${e[1]} ${e[0]}`).forEach((e,n)=>{t[e]=n}),t},T_=({edges_vertices:i,vertices_vertices:t})=>{const e=C_({edges_vertices:i});return t.map((n,s)=>n.map(r=>e[`${s} ${r}`]))},A_=({vertices_coords:i,edges_vertices:t})=>{const e=w_({edges_vertices:t}).map((n,s)=>n.flatMap(r=>t[r].filter(o=>o!==s)));return i===void 0?e:e.map((n,s)=>S_({vertices_coords:i},n,s))},E_=({vertices_coords:i,faces_vertices:t})=>{if(!t)return i.map(()=>[]);const e=i.map(()=>[]);return t.forEach((n,s)=>{const r=[];n.forEach(o=>{r[o]=s}),r.forEach((o,a)=>e[a].push(o))}),e},P_=({vertices_coords:i,vertices_faces:t,faces_vertices:e})=>{t||(t=E_({vertices_coords:i,faces_vertices:e}));const n=t.map(c=>c.map(l=>e[l])),s=n.map((c,l)=>c.map(h=>h.indexOf(l)));return n.map((c,l)=>c.map((h,f)=>[(s[l][f]+h.length-1)%h.length,s[l][f],(s[l][f]+1)%h.length])).map((c,l)=>c.map((h,f)=>h.map(u=>n[l][f][u]))).map(c=>{const l=c.map(u=>[[0,1],[1,2]].map(d=>d.map(g=>u[g]).join(" "))),h={},f={};return l.forEach((u,d)=>{h[u[0]]=d,f[u[1]]=d}),{facesVerts:l,to:f,from:h}}).map(c=>{const l=Object.keys(c.to),h=l.map(p=>p.split(" ").reverse().join(" ")),f=l.filter((p,m)=>!(h[m]in c.from));if(f.length>2)return console.warn("vertices_vertices found an unsolvable vertex"),[];const u=f.length?f:[l[0]],d=[],g={};for(let p=0;p<u.length;p+=1){const m=u[p];let _=[m];g[m]=!0;let S=!1;do{const M=_[_.length-1],y=c.to[M];if(!(y in c.facesVerts))break;let b;if(c.facesVerts[y][0]===M&&(b=c.facesVerts[y][1]),c.facesVerts[y][1]===M&&(b=c.facesVerts[y][0]),b===void 0){_=[];break}const A=b.split(" ").reverse().join(" ");_.push(b),S=A in g,S||_.push(A),g[b]=!0,g[A]=!0}while(!S);const x=_.filter((M,y)=>y%2===0).map(M=>M.split(" ")[1]).map(M=>parseInt(M,10));d.push(...x)}return d})},Xc=i=>{if(!i.vertices_coords||!i.vertices_coords.length)return[];switch(i.vertices_coords[0].length){case 3:return P_(i);default:return A_(i)}},D_={M:-180,m:-180,V:180,v:180},F_=({edges_assignment:i})=>i.map(t=>D_[t]||0),L_=(i,t)=>{let e=JSON.parse(JSON.stringify(i));if(!e.vertices_coords||!e.edges_vertices)throw new Error("model must contain vertices_coords and edges_vertices");if(!e.edges_assignment&&!e.edges_foldAngle)throw new Error("model must contain either edges_assignment or edges_foldAngle");if(e.edges_assignment&&!e.edges_foldAngle&&(e.edges_foldAngle=F_(e)),t===void 0){const r=kh(e);t=r?Math.min(...r.span)*1e-4:.01}for(let r=0;r<e.vertices_coords.length;r+=1){const o=e.vertices_coords[r];o.length===2&&(e.vertices_coords[r]=[o[0],o[1],0])}return e.edges_assignment.map((r,o)=>r==="C"||r==="c"?o:void 0).filter(r=>r!==void 0).length>0&&(e.vertices_vertices||(e.vertices_vertices=Xc(e)),e.vertices_edges=T_(e),e=g_(e),e.vertices_vertices=Xc(e),e=M_(e,.01)),delete e.vertices_vertices,delete e.vertices_edges,f_(e,!0)},R_=(i,t,e,{triangulated:n,angles:s}={})=>{const r=n?{...e}:{...t};return r.vertices_coords.length!==i.positions.length/3?(console.warn("vertex count mismatch"),{}):(r.file_creator="Origami Simulator: http://git.amandaghassaei.com/OrigamiSimulator/",r.file_classes=["singleModel"],r.frame_classes=["foldedForm"],r.frame_attributes=["3D"],r.vertices_coords=r.vertices_coords.map((o,a)=>[i.positions[a*3+0],i.positions[a*3+1],i.positions[a*3+2]]),r)},Us=Array.from("BMVFCU");function Kt({scene:i}){this.fold={},this.foldUnmodified={},this.geometry=null,this.frontMesh=new Oa,this.backMesh=new Oa,this.lines={},Us.forEach(t=>{this.lines[t]=new W0(new fn,Hc)}),this.strain=!1,this.axialStiffness=20,this.joinStiffness=.7,this.creaseStiffness=.7,this.dampingRatio=.45,this.positions=null,this.colors=null,this.nodes=[],this.edges=[],this.creases=[],this.faces_vertices=[],this.materials={},this.materials.front=q0,this.materials.back=j0,this.materials.strain=X0,this.materials.line=Hc,this.frontMesh.castShadow=!0,this.frontMesh.receiveShadow=!0,this.backMesh.receiveShadow=!0,this.makeNewGeometries(),this.materialDidUpdate(),this.setScene(i)}Kt.prototype.setScene=function(i){[this.frontMesh,this.backMesh].filter(t=>t.removeFromParent).forEach(t=>t.removeFromParent()),Object.values(this.lines).filter(t=>t.removeFromParent).forEach(t=>t.removeFromParent()),i&&(i.add(this.frontMesh),i.add(this.backMesh),Object.values(this.lines).forEach(t=>i.add(t)))};Kt.prototype.makeNewGeometries=function(){this.geometry=new fn,this.geometry.dynamic=!0,this.frontMesh.geometry=this.geometry,this.backMesh.geometry=this.geometry,Object.values(this.lines).forEach(i=>{i.geometry=new fn,i.geometry.dynamic=!0})};Kt.prototype.faceMaterialDidUpdate=function(){this.frontMesh.material=this.strain?this.materials.strain:this.materials.front,this.backMesh.material=this.materials.back,this.backMesh.visible=!this.strain,this.frontMesh.material.needsUpdate=!0,this.backMesh.material.needsUpdate=!0};Kt.prototype.lineMaterialDidUpdate=function(){Object.values(this.lines).forEach(i=>{i.material=this.materials.line,i.material.needsUpdate=!0})};Kt.prototype.materialDidUpdate=function(){this.faceMaterialDidUpdate(),this.lineMaterialDidUpdate()};Kt.prototype.setStrain=function(i){this.strain=i,this.faceMaterialDidUpdate()};Kt.prototype.updateEdgeVisibility=function(i){Us.forEach(t=>{this.lines[t].visible=i[t]})};Kt.prototype.getMesh=function(){return[this.frontMesh,this.backMesh]};Kt.prototype.needsUpdate=function(){this.positions&&(this.geometry.attributes.position.needsUpdate=!0,this.strain&&(this.geometry.attributes.color.needsUpdate=!0),this.geometry.computeBoundingBox())};Kt.prototype.makeObjects=function(i){const t={axialStiffness:this.axialStiffness,joinStiffnes:this.joinStiffnes,creaseStiffness:this.creaseStiffness,dampingRatio:this.dampingRatio};this.nodes=i.vertices_coords.map(e=>new J(...e)).map((e,n)=>new ce(e.clone(),n,this)),this.edges=i.edges_vertices.map(e=>e.map(n=>this.nodes[n])).map(e=>new tn(e,t)),this.creases=Y0(i).map((e,n)=>new be(t,this.edges[e.edge],e.faces[0],e.faces[1],e.foldAngle*(Math.PI/180),e.foldAngle!==0?1:0,this.nodes[e.vertices[0]],this.nodes[e.vertices[1]],n)),this.faces_vertices=i.faces_vertices};Kt.prototype.makeTypedArrays=function(i){const t=new Float32Array(i.vertices_coords.length*3),e=new Float32Array(i.vertices_coords.length*3),n=new Uint16Array(i.faces_vertices.length*3),s={};for(let o=0;o<i.vertices_coords.length;o+=1)t[3*o]=i.vertices_coords[o][0],t[3*o+1]=i.vertices_coords[o][1],t[3*o+2]=i.vertices_coords[o][2];for(let o=0;o<i.faces_vertices.length;o+=1)n[3*o]=i.faces_vertices[o][0],n[3*o+1]=i.faces_vertices[o][1],n[3*o+2]=i.faces_vertices[o][2];const r={};return Us.forEach(o=>{r[o]=[]}),i.edges_assignment.map(o=>o.toUpperCase()).forEach((o,a)=>{r[o].push(i.edges_vertices[a][0]),r[o].push(i.edges_vertices[a][1])}),Us.forEach(o=>{s[o]=new Uint16Array(r[o].length);for(let a=0;a<r[o].length;a+=1)s[o][a]=r[o][a]}),{positions:t,colors:e,indices:n,lineIndices:s}};Kt.prototype.setGeometryBuffers=function({positions:i,colors:t,indices:e,lineIndices:n}){const s=new je(i,3);this.geometry.setAttribute("position",s),this.geometry.setAttribute("color",new je(t,3)),this.geometry.setIndex(new je(e,1)),Us.forEach(r=>{this.lines[r].geometry.setAttribute("position",s),this.lines[r].geometry.setIndex(new je(n[r],1)),this.lines[r].geometry.computeBoundingBox(),this.lines[r].geometry.computeBoundingSphere(),this.lines[r].geometry.center()}),this.geometry.computeVertexNormals(),this.geometry.computeBoundingBox(),this.geometry.computeBoundingSphere(),this.geometry.center()};Kt.prototype.dealloc=function(){[this.geometry,this.frontMesh.geometry,this.backMesh.geometry].filter(i=>i).forEach(i=>i.dispose()),this.geometry=null,this.frontMesh.geometry=null,this.backMesh.geometry=null,Object.values(this.lines).filter(i=>i.geometry).forEach(i=>i.geometry.dispose()),[this.frontMesh.material,this.backMesh.material].filter(i=>i).forEach(i=>i.dispose()),Object.values(this.lines).filter(i=>i.material).forEach(i=>i.material.dispose()),this.nodes.forEach(i=>i.destroy()),this.edges.forEach(i=>i.destroy()),this.creases.forEach(i=>i.destroy()),this.nodes=[],this.edges=[],this.creases=[]};Kt.prototype.load=function(i){this.dealloc(),this.makeNewGeometries();const t=L_(i);this.foldUnmodified=i,this.fold=t,this.makeObjects(t);const{positions:e,colors:n,indices:s,lineIndices:r}=this.makeTypedArrays(t);this.setGeometryBuffers({positions:e,colors:n,indices:s,lineIndices:r}),this.nodes.forEach((o,a)=>o.setOriginalPosition(e[3*a+0],e[3*a+1],e[3*a+2])),this.edges.forEach(o=>o.recalcOriginalLength()),this.positions=e,this.colors=n};Kt.prototype.export=function(){return R_(this,this.foldUnmodified,this.fold)};Kt.prototype.setAxialStiffness=function(i){this.axialStiffness=parseFloat(i),this.edges.forEach(t=>{t.axialStiffness=this.axialStiffness})};Kt.prototype.setJoinStiffness=function(i){this.joinStiffness=parseFloat(i),this.creases.forEach(t=>{t.joinStiffness=this.joinStiffness})};Kt.prototype.setCreaseStiffness=function(i){this.creaseStiffness=parseFloat(i),this.creases.forEach(t=>{t.creaseStiffness=this.creaseStiffness})};Kt.prototype.setDampingRatio=function(i){this.dampingRatio=parseFloat(i),this.creases.forEach(t=>{t.dampingRatio=this.dampingRatio}),this.edges.forEach(t=>{t.dampingRatio=this.dampingRatio})};Kt.prototype.setFrontColor=function(i){this.materials.front.color.set(i)};Kt.prototype.setBackColor=function(i){this.materials.back.color.set(i)};Kt.prototype.setLineColor=function(i){this.materials.line.color.set(i)};const el=(i,t,e)=>{i.materials[e]&&i.materials[e].dispose(),i.materials[e]=t,i.faceMaterialDidUpdate()};Kt.prototype.setMaterialFront=function(i){el(this,i,"front")};Kt.prototype.setMaterialBack=function(i){el(this,i,"back")};Kt.prototype.setMaterialStrain=function(i){el(this,i,"strain")};Kt.prototype.setMaterialLine=function(i){this.materials.line&&this.materials.line.dispose(),this.materials.line=i,this.lineMaterialDidUpdate()};const I_=(i,t,e)=>{const n=i.createShader(e);if(i.shaderSource(n,t),i.compileShader(n),!i.getShaderParameter(n,i.COMPILE_STATUS))throw new Error(`could not compile shader: ${i.getShaderInfoLog(n)}`);return n},z_=(i,t,e)=>{const n=i.createProgram();if(i.attachShader(n,t),i.attachShader(n,e),i.linkProgram(n),!i.getProgramParameter(n,i.LINK_STATUS))throw new Error(`program filed to link: ${i.getProgramInfoLog(n)}`);return n},Yc=(i,t,e)=>I_(i,t,e),B_=(i,t,e)=>{const n=Yc(i,t,i.VERTEX_SHADER),s=Yc(i,e,i.FRAGMENT_SHADER);return z_(i,n,s)},U_=(i,t)=>{i.bindBuffer(i.ARRAY_BUFFER,i.createBuffer()),i.bufferData(i.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),i.STATIC_DRAW);const e=i.getAttribLocation(t,"a_position");i.enableVertexAttribArray(e),i.vertexAttribPointer(e,2,i.FLOAT,!1,0,0)},O_=(i,t,e,n,s)=>{const r=i.createTexture();return i.bindTexture(i.TEXTURE_2D,r),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MAG_FILTER,i.NEAREST),i.texImage2D(i.TEXTURE_2D,0,i.RGBA,t,e,0,i.RGBA,n,s),r};function N_(){const i=window.document.createElement("canvas");i.setAttribute("style","display:none;"),i.setAttribute("class","gpuMathCanvas"),window.document.body.appendChild(i);const t=i.getContext("webgl",{antialias:!1})||i.getContext("experimental-webgl",{antialias:!1}),e=t.getExtension("OES_texture_float");function n(){console.warn("floating point textures are not supported on your system")}e||n(),t.disable(t.DEPTH_TEST);function s(){this.programs={},this.frameBuffers={},this.textures={},this.index=0}return s.prototype.createProgram=function(r,o,a){const c=this.programs;let l=c[r];if(l){t.useProgram(l.program);return}l=B_(t,o,a),t.useProgram(l),U_(t,l),c[r]={program:l,uniforms:{}}},s.prototype.initTextureFromData=function(r,o,a,c,l,h){let f=this.textures[r];if(f){if(!h){console.warn(`already a texture with the name ${r}`);return}t.deleteTexture(f)}f=O_(t,o,a,t[c],l),this.textures[r]=f},s.prototype.initFrameBufferForTexture=function(r,o){let a=this.frameBuffers[r];if(a){if(!o){console.warn(`framebuffer already exists for texture ${r}`);return}t.deleteFramebuffer(a)}const c=this.textures[r];if(!c){console.warn(`texture ${r} does not exist`);return}a=t.createFramebuffer(),t.bindFramebuffer(t.FRAMEBUFFER,a),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,c,0),t.getExtension("WEBGL_color_buffer_float"),t.checkFramebufferStatus(t.FRAMEBUFFER)!==t.FRAMEBUFFER_COMPLETE&&n(),this.frameBuffers[r]=a},s.prototype.setUniformForProgram=function(r,o,a,c){if(!this.programs[r]){console.log(r,this.programs,this.programs[r]),console.warn(`no program with name ${r}`);return}const l=this.programs[r].uniforms;let h=l[o];h||(h=t.getUniformLocation(this.programs[r].program,o),l[o]=h),c==="1f"?t.uniform1f(h,a):c==="2f"?t.uniform2f(h,a[0],a[1]):c==="3f"?t.uniform3f(h,a[0],a[1],a[2]):c==="1i"?t.uniform1i(h,a):console.warn(`no uniform for type ${c}`)},s.prototype.setSize=function(r,o){t.viewport(0,0,r,o),i.style.width=`${r}px`,i.style.height=`${o}px`},s.prototype.setProgram=function(r){const o=this.programs[r];o&&t.useProgram(o.program)},s.prototype.step=function(r,o,a,c){t.useProgram(this.programs[r].program),c&&this.setUniformForProgram(r,"u_time",c,"1f"),t.bindFramebuffer(t.FRAMEBUFFER,this.frameBuffers[a]);for(let l=0;l<o.length;l+=1)t.activeTexture(t.TEXTURE0+l),t.bindTexture(t.TEXTURE_2D,this.textures[o[l]]);t.drawArrays(t.TRIANGLE_STRIP,0,4)},s.prototype.swapTextures=function(r,o){let a=this.textures[r];this.textures[r]=this.textures[o],this.textures[o]=a,a=this.frameBuffers[r],this.frameBuffers[r]=this.frameBuffers[o],this.frameBuffers[o]=a},s.prototype.swap3Textures=function(r,o,a){let c=this.textures[a];this.textures[a]=this.textures[o],this.textures[o]=this.textures[r],this.textures[r]=c,c=this.frameBuffers[a],this.frameBuffers[a]=this.frameBuffers[o],this.frameBuffers[o]=this.frameBuffers[r],this.frameBuffers[r]=c},s.prototype.readyToRead=function(){return t.checkFramebufferStatus(t.FRAMEBUFFER)===t.FRAMEBUFFER_COMPLETE},s.prototype.readPixels=function(r,o,a,c,l){t.readPixels(r,o,a,c,t.RGBA,t.UNSIGNED_BYTE,l)},s.prototype.dealloc=function(){Object.values(this.programs).map(r=>r.program).forEach(r=>t.deleteProgram(r)),Object.values(this.frameBuffers).forEach(r=>t.deleteFramebuffer(r)),Object.values(this.textures).forEach(r=>t.deleteTexture(r)),this.programs={},this.frameBuffers={},this.textures={},this.setSize(1,1),window.document.body.removeChild(i)},new s}const k_=i=>{i.geometry.computeBoundingBox();const t=new J;return i.geometry.boundingBox.getCenter(t),t},Vh=i=>{const t=i.nodes.map(()=>[]);return i.faces_vertices.forEach((e,n)=>{const s=[];e.forEach(r=>{s[r]=n}),s.forEach((r,o)=>t[o].push(r))}),t},ji=i=>{if(i===1)return 2;for(let t=0;t<i;t+=1)if(2**(2*t)>=i)return 2**t;return console.warn(`no texture size found for ${i} items`),2},V_=(i,t)=>{const e=Vh(t).reduce((P,F)=>P+F.length,0),n=t.nodes.map(P=>P.numBeams()).reduce((P,F)=>P+F,0),s=t.faces_vertices.length,r=t.creases.length,o=r*2+t.nodes.map(P=>P.numCreases()).reduce((P,F)=>P+F,0),a=ji(t.nodes.length),c=ji(e),l=ji(n),h=ji(r),f=ji(o),u=ji(s),d=new Float32Array(a*a*4),g=new Float32Array(a*a*4),p=new Float32Array(a*a*4),m=new Float32Array(a*a*4),_=new Float32Array(a*a*4),S=new Float32Array(a*a*4),x=new Float32Array(a*a*4),M=new Float32Array(u*u*4),y=new Float32Array(u*u*4),b=new Float32Array(c*c*4),A=new Float32Array(u*u*4),v=new Float32Array(f*f*4),T=new Float32Array(h*h*4),D=new Float32Array(h*h*4),R=new Float32Array(h*h*4),q=new Float32Array(h*h*4);return{textureDim:a,textureDimEdges:l,textureDimFaces:u,textureDimCreases:h,textureDimNodeFaces:c,textureDimNodeCreases:f,position:d,lastPosition:g,lastLastPosition:p,velocity:m,lastVelocity:_,meta:S,meta2:x,normals:M,faceVertexIndices:y,nodeFaceMeta:b,nominalTriangles:A,nodeCreaseMeta:v,creaseMeta2:T,creaseGeo:D,theta:R,lastTheta:q}},oe="FLOAT",Gh=(i,t,{meta:e,beamMeta:n,textureDimEdges:s},r=!1)=>{let o=0;for(let a=0;a<t.nodes.length;a+=1){r&&(e[4*a]=o,e[4*a+1]=t.nodes[a].numBeams());for(let c=0;c<t.nodes[a].beams.length;c+=1){const l=t.nodes[a].beams[c];n[4*o]=l.getK(),n[4*o+1]=l.getD(),r&&(n[4*o+2]=l.getLength(),n[4*o+3]=l.getOtherNode(t.nodes[a]).getIndex()),o+=1}}i.initTextureFromData("u_beamMeta",s,s,oe,n,!0)},G_=(i,t,{externalForces:e,textureDim:n})=>{for(let s=0;s<t.nodes.length;s+=1){const r=t.nodes[s].getExternalForce();e[4*s]=r.x,e[4*s+1]=r.y,e[4*s+2]=r.z}i.initTextureFromData("u_externalForces",n,n,oe,e,!0)},W_=(i,t,{mass:e,textureDim:n})=>{for(let s=0;s<t.nodes.length;s+=1)e[4*s+1]=t.nodes[s].isFixed()?1:0;i.initTextureFromData("u_mass",n,n,oe,e,!0)},H_=(i,t,{originalPosition:e,textureDim:n})=>{for(let s=0;s<t.nodes.length;s+=1){const r=t.nodes[s].getOriginalPosition();e[4*s]=r.x,e[4*s+1]=r.y,e[4*s+2]=r.z}i.initTextureFromData("u_originalPosition",n,n,oe,e,!0)},q_=(i,t,{creaseVectors:e,textureDimCreases:n})=>{for(let s=0;s<t.creases.length;s+=1){const r=s*4,o=t.creases[s].edge.nodes;e[r]=o[0].getIndex(),e[r+1]=o[1].getIndex()}i.initTextureFromData("u_creaseVectors",n,n,oe,e,!0)},Wh=(i,t,{creaseMeta:e,textureDimCreases:n},s=!1)=>{for(let r=0;r<t.creases.length;r+=1){const o=t.creases[r];e[r*4]=o.getK()}if(s)for(let r=0;r<t.creases.length;r+=1){const o=t.creases[r];e[r*4+2]=o.getTargetTheta()}i.initTextureFromData("u_creaseMeta",n,n,oe,e,!0)},j_=(i,t,{lastPosition:e,textureDim:n})=>{for(let s=0;s<t.nodes.length;s+=1){const r=t.nodes[s].getRelativePosition();e[4*s]=r.x,e[4*s+1]=r.y,e[4*s+2]=r.z}i.initTextureFromData("u_lastPosition",n,n,oe,e,!0),i.initFrameBufferForTexture("u_lastPosition",!0)},X_=(i,t,{textureDim:e,textureDimEdges:n,textureDimCreases:s,meta:r,meta2:o,faceVertexIndices:a,nodeFaceMeta:c,nominalTriangles:l,nodeCreaseMeta:h,creaseMeta2:f,lastTheta:u})=>{const d=t.creases.length,g=Vh(t),p=new Float32Array(e*e*4),m=new Float32Array(e*e*4),_=new Float32Array(e*e*4),S=new Float32Array(n*n*4),x=new Float32Array(s*s*4),M=new Float32Array(s*s*4);for(let b=0;b<t.faces_vertices.length;b+=1){const A=t.faces_vertices[b];a[4*b+0]=A[0],a[4*b+1]=A[1],a[4*b+2]=A[2];const v=t.nodes[A[0]].getOriginalPosition(),T=t.nodes[A[1]].getOriginalPosition(),D=t.nodes[A[2]].getOriginalPosition(),R=T.clone().sub(v).normalize(),q=D.clone().sub(v).normalize(),P=D.clone().sub(T).normalize();l[4*b+0]=Math.acos(R.dot(q)),l[4*b+1]=Math.acos(-1*R.dot(P)),l[4*b+2]=Math.acos(q.dot(P)),Math.abs(l[4*b]+l[4*b+1]+l[4*b+2]-Math.PI)>.1&&console.warn("bad angles")}for(let b=0;b<e*e;b+=1)_[4*b+1]=1;for(let b=0;b<s*s;b+=1){if(b>=d){u[b*4+2]=-1,u[b*4+3]=-1;continue}u[b*4+2]=t.creases[b].getNormal1Index(),u[b*4+3]=t.creases[b].getNormal2Index()}let y=0;for(let b=0;b<t.nodes.length;b+=1){o[4*b]=y;const A=g[b].length;o[4*b+1]=A;for(let v=0;v<A;v+=1){const T=(y+v)*4,D=t.faces_vertices[g[b][v]];c[T]=g[b][v],c[T+1]=D[0]===b?-1:D[0],c[T+2]=D[1]===b?-1:D[1],c[T+3]=D[2]===b?-1:D[2]}y+=A}y=0;for(let b=0;b<t.nodes.length;b+=1){_[4*b]=t.nodes[b].getSimMass(),r[b*4+2]=y;const A=t.nodes[b].creases,v=t.nodes[b].invCreases;r[b*4+3]=A.length+v.length;for(let T=0;T<A.length;T+=1)h[y*4]=A[T].getIndex(),h[y*4+1]=A[T].getNodeIndex(t.nodes[b]),y+=1;for(let T=0;T<v.length;T+=1)h[y*4]=v[T].getIndex(),h[y*4+1]=v[T].getNodeIndex(t.nodes[b]),y+=1}for(let b=0;b<t.creases.length;b+=1){const A=t.creases[b];f[b*4]=A.node1.getIndex(),f[b*4+1]=A.node2.getIndex(),f[b*4+2]=A.edge.nodes[0].getIndex(),f[b*4+3]=A.edge.nodes[1].getIndex(),y+=1}return H_(i,t,{originalPosition:p,textureDim:e}),Gh(i,t,{meta:r,beamMeta:S,textureDimEdges:n},!0),W_(i,t,{mass:_,textureDim:e}),G_(i,t,{externalForces:m,textureDim:e}),Wh(i,t,{creaseMeta:M,textureDimCreases:s},!0),q_(i,t,{creaseVectors:x,textureDimCreases:s}),{originalPosition:p,externalForces:m,mass:_,beamMeta:S,creaseVectors:x,creaseMeta:M}},Y_=Object.freeze({creasePercent:0,axialStiffness:20,faceStiffness:.2,calcFaceStrain:!1}),Qe=`attribute vec2 a_position;
void main() {
   gl_Position = vec4(a_position, 0, 1);
}
`,Z_=`precision mediump float;
uniform vec2 u_textureDim;
uniform float u_dt;
uniform sampler2D u_lastPosition;
uniform sampler2D u_velocity;
uniform sampler2D u_mass;

void main(){
  vec2 fragCoord = gl_FragCoord.xy;
  vec2 scaledFragCoord = fragCoord/u_textureDim;

  vec3 lastPosition = texture2D(u_lastPosition, scaledFragCoord).xyz;

  float isFixed = texture2D(u_mass, scaledFragCoord).y;
  if (isFixed == 1.0){
    gl_FragColor = vec4(lastPosition, 0.0);
    return;
  }

  vec4 velocityData = texture2D(u_velocity, scaledFragCoord);
  vec3 position = velocityData.xyz*u_dt + lastPosition;
  gl_FragColor = vec4(position, velocityData.a);//velocity.a has error info
}
`,J_=`precision mediump float;
uniform vec2 u_textureDim;
uniform float u_dt;
uniform sampler2D u_position;
uniform sampler2D u_lastPosition;
uniform sampler2D u_mass;

void main(){
  vec2 fragCoord = gl_FragCoord.xy;
  vec2 scaledFragCoord = fragCoord/u_textureDim;

  float isFixed = texture2D(u_mass, scaledFragCoord).y;
  if (isFixed == 1.0){
    gl_FragColor = vec4(0.0);
    return;
  }

  vec3 position = texture2D(u_position, scaledFragCoord).xyz;
  vec3 lastPosition = texture2D(u_lastPosition, scaledFragCoord).xyz;
  gl_FragColor = vec4((position-lastPosition)/u_dt,0.0);
}
`,K_=`precision mediump float;
uniform vec2 u_textureDim;
uniform vec2 u_textureDimEdges;
uniform vec2 u_textureDimFaces;
uniform vec2 u_textureDimCreases;
uniform vec2 u_textureDimNodeCreases;
uniform vec2 u_textureDimNodeFaces;
uniform float u_creasePercent;
uniform float u_dt;
uniform float u_axialStiffness;
uniform float u_faceStiffness;
uniform sampler2D u_lastPosition;
uniform sampler2D u_lastVelocity;
uniform sampler2D u_originalPosition;
uniform sampler2D u_externalForces;
uniform sampler2D u_mass;
uniform sampler2D u_meta;//[beamsIndex, numBeam, nodeCreaseMetaIndex, numCreases]
uniform sampler2D u_beamMeta;//[k, d, length, otherNodeIndex]
uniform sampler2D u_creaseMeta;//[k, d, targetTheta]
uniform sampler2D u_nodeCreaseMeta;//[creaseIndex, nodeIndex, -, -]
uniform sampler2D u_normals;
uniform sampler2D u_theta;//[theta, z, normal1Index, normal2Index]
uniform sampler2D u_creaseGeo;//[h1, h2, coef1, coef2]
uniform sampler2D u_meta2;//[nodesFaceIndex, numFaces]
uniform sampler2D u_nodeFaceMeta;//[faceIndex, a, b, c]
uniform sampler2D u_nominalTriangles;//[angleA, angleB, angleC]
uniform bool u_calcFaceStrain;

vec4 getFromArray(float index1D, vec2 dimensions, sampler2D tex){
  vec2 index = vec2(mod(index1D, dimensions.x)+0.5, floor(index1D/dimensions.x)+0.5);
  vec2 scaledIndex = index/dimensions;
  return texture2D(tex, scaledIndex);
}

vec3 getPosition(float index1D){
  vec2 index = vec2(mod(index1D, u_textureDim.x)+0.5, floor(index1D/u_textureDim.x)+0.5);
  vec2 scaledIndex = index/u_textureDim;
  return texture2D(u_lastPosition, scaledIndex).xyz + texture2D(u_originalPosition, scaledIndex).xyz;
}

void main(){
  vec2 fragCoord = gl_FragCoord.xy;
  vec2 scaledFragCoord = fragCoord/u_textureDim;

  vec2 mass = texture2D(u_mass, scaledFragCoord).xy;
  if (mass[1] == 1.0){//fixed
    gl_FragColor = vec4(0.0);
    return;
  }
  vec3 force = texture2D(u_externalForces, scaledFragCoord).xyz;
  vec3 lastPosition = texture2D(u_lastPosition, scaledFragCoord).xyz;
  vec3 lastVelocity = texture2D(u_lastVelocity, scaledFragCoord).xyz;
  vec3 originalPosition = texture2D(u_originalPosition, scaledFragCoord).xyz;

  vec4 neighborIndices = texture2D(u_meta, scaledFragCoord);
  vec4 meta = texture2D(u_meta, scaledFragCoord);
  vec2 meta2 = texture2D(u_meta2, scaledFragCoord).xy;

  float nodeError = 0.0;

  for (int j=0;j<100;j++){//for all beams (up to 100, had to put a const int in here)
    if (j >= int(meta[1])) break;

    vec4 beamMeta = getFromArray(meta[0]+float(j), u_textureDimEdges, u_beamMeta);

    float neighborIndex1D = beamMeta[3];
    vec2 neighborIndex = vec2(mod(neighborIndex1D, u_textureDim.x)+0.5, floor(neighborIndex1D/u_textureDim.x)+0.5);
    vec2 scaledNeighborIndex = neighborIndex/u_textureDim;
    vec3 neighborLastPosition = texture2D(u_lastPosition, scaledNeighborIndex).xyz;
    vec3 neighborLastVelocity = texture2D(u_lastVelocity, scaledNeighborIndex).xyz;
    vec3 neighborOriginalPosition = texture2D(u_originalPosition, scaledNeighborIndex).xyz;

    vec3 nominalDist = neighborOriginalPosition-originalPosition;
    vec3 deltaP = neighborLastPosition-lastPosition+nominalDist;
    float deltaPLength = length(deltaP);
    deltaP -= deltaP*(beamMeta[2]/deltaPLength);
    if (!u_calcFaceStrain) nodeError += abs(deltaPLength/length(nominalDist) - 1.0);
    vec3 deltaV = neighborLastVelocity-lastVelocity;

    vec3 _force = deltaP*beamMeta[0] + deltaV*beamMeta[1];
    force += _force;
  }
  if (!u_calcFaceStrain) nodeError /= meta[1];

  for (int j=0;j<100;j++){//for all creases (up to 100, had to put a const int in here)
    if (j >= int(meta[3])) break;

    vec4 nodeCreaseMeta = getFromArray(meta[2]+float(j), u_textureDimNodeCreases, u_nodeCreaseMeta);

    float creaseIndex1D = nodeCreaseMeta[0];
    vec2 creaseIndex = vec2(mod(creaseIndex1D, u_textureDimCreases.x)+0.5, floor(creaseIndex1D/u_textureDimCreases.x)+0.5);
    vec2 scaledCreaseIndex = creaseIndex/u_textureDimCreases;

    vec4 thetas = texture2D(u_theta, scaledCreaseIndex);
    vec3 creaseMeta = texture2D(u_creaseMeta, scaledCreaseIndex).xyz;//[k, d, targetTheta]
    vec4 creaseGeo = texture2D(u_creaseGeo, scaledCreaseIndex);//[h1, h2, coef1, coef2]
    if (creaseGeo[0]< 0.0) continue;//crease disabled bc it has collapsed too much

    float targetTheta = creaseMeta[2] * u_creasePercent;
    float angForce = creaseMeta[0]*(targetTheta-thetas[0]);// + creaseMeta[1]*thetas[1];

    float nodeNum = nodeCreaseMeta[1];//1, 2, 3, 4

    if (nodeNum > 2.0){//crease reaction, node is on a crease

      //node #1
      vec3 normal1 = getFromArray(thetas[2], u_textureDimFaces, u_normals).xyz;

      //node #2
      vec3 normal2 = getFromArray(thetas[3], u_textureDimFaces, u_normals).xyz;

      float coef1 = creaseGeo[2];
      float coef2 = creaseGeo[3];

      if (nodeNum == 3.0){
        coef1 = 1.0-coef1;
        coef2 = 1.0-coef2;
      }

      vec3 _force = -angForce*(coef1/creaseGeo[0]*normal1 + coef2/creaseGeo[1]*normal2);
      force += _force;

    } else {

      float normalIndex1D = thetas[2];//node #1
      float momentArm = creaseGeo[0];//node #1
      if (nodeNum == 2.0) {
        normalIndex1D = thetas[3];//node #2
        momentArm = creaseGeo[1];//node #2
      }

      vec3 normal = getFromArray(normalIndex1D, u_textureDimFaces, u_normals).xyz;

      vec3 _force = angForce/momentArm*normal;
      force += _force;
    }
  }

  for (int j=0;j<100;j++){//for all faces (up to 100, had to put a const int in here)
    if (j >= int(meta2[1])) break;

    vec4 faceMeta = getFromArray(meta2[0]+float(j), u_textureDimNodeFaces, u_nodeFaceMeta);//[face index, a, b, c]
    vec3 nominalAngles = getFromArray(faceMeta[0], u_textureDimFaces, u_nominalTriangles).xyz;//[angA, angB, angC]

    int faceIndex = 0;
    if (faceMeta[2] < 0.0) faceIndex = 1;
    if (faceMeta[3] < 0.0) faceIndex = 2;

    //get node positions
    vec3 a = faceIndex == 0 ? lastPosition+originalPosition : getPosition(faceMeta[1]);
    vec3 b = faceIndex == 1 ? lastPosition+originalPosition : getPosition(faceMeta[2]);
    vec3 c = faceIndex == 2 ? lastPosition+originalPosition : getPosition(faceMeta[3]);

    //calc angles
    vec3 ab = b-a;
    vec3 ac = c-a;
    vec3 bc = c-b;

    float lengthAB = length(ab);
    float lengthAC = length(ac);
    float lengthBC = length(bc);

    float tol = 0.0000001;
    if (abs(lengthAB) < tol || abs(lengthBC) < tol || abs(lengthAC) < tol) continue;

    ab /= lengthAB;
    ac /= lengthAC;
    bc /= lengthBC;

    vec3 angles = vec3(acos(dot(ab, ac)),
      acos(-1.0*dot(ab, bc)),
      acos(dot(ac, bc)));
    vec3 anglesDiff = nominalAngles-angles;

    vec3 normal = getFromArray(faceMeta[0], u_textureDimFaces, u_normals).xyz;

    //calc forces
    anglesDiff *= u_faceStiffness;
    if (faceIndex == 0){//a
      vec3 normalCrossAC = cross(normal, ac)/lengthAC;
      vec3 normalCrossAB = cross(normal, ab)/lengthAB;
      force -= anglesDiff[0]*(normalCrossAC - normalCrossAB);
      if (u_calcFaceStrain) nodeError += abs((nominalAngles[0]-angles[0])/nominalAngles[0]);
      force -= anglesDiff[1]*normalCrossAB;
      force += anglesDiff[2]*normalCrossAC;
    } else if (faceIndex == 1){
      vec3 normalCrossAB = cross(normal, ab)/lengthAB;
      vec3 normalCrossBC = cross(normal, bc)/lengthBC;
      force -= anglesDiff[0]*normalCrossAB;
      force += anglesDiff[1]*(normalCrossAB + normalCrossBC);
      if (u_calcFaceStrain) nodeError += abs((nominalAngles[1]-angles[1])/nominalAngles[1]);
      force -= anglesDiff[2]*normalCrossBC;
    } else if (faceIndex == 2){
      vec3 normalCrossAC = cross(normal, ac)/lengthAC;
      vec3 normalCrossBC = cross(normal, bc)/lengthBC;
      force += anglesDiff[0]*normalCrossAC;
      force -= anglesDiff[1]*normalCrossBC;
      force += anglesDiff[2]*(normalCrossBC - normalCrossAC);
      if (u_calcFaceStrain) nodeError += abs((nominalAngles[2]-angles[2])/nominalAngles[2]);
    }

  }
  if (u_calcFaceStrain) nodeError /= meta2[1];

  vec3 velocity = force*u_dt/mass[0] + lastVelocity;
  gl_FragColor = vec4(velocity,nodeError);
}
`,Q_=`precision mediump float;
uniform vec2 u_textureDim;
uniform vec2 u_textureDimEdges;
uniform vec2 u_textureDimFaces;
uniform vec2 u_textureDimCreases;
uniform vec2 u_textureDimNodeCreases;
uniform vec2 u_textureDimNodeFaces;
uniform float u_creasePercent;
uniform float u_dt;
uniform float u_axialStiffness;
uniform float u_faceStiffness;
uniform sampler2D u_lastPosition;
uniform sampler2D u_lastLastPosition;
uniform sampler2D u_lastVelocity;
uniform sampler2D u_originalPosition;
uniform sampler2D u_externalForces;
uniform sampler2D u_mass;
uniform sampler2D u_meta;//[beamsIndex, numBeam, nodeCreaseMetaIndex, numCreases]
uniform sampler2D u_beamMeta;//[k, d, length, otherNodeIndex]
uniform sampler2D u_creaseMeta;//[k, d, targetTheta]
uniform sampler2D u_nodeCreaseMeta;//[creaseIndex, nodeIndex, -, -]
uniform sampler2D u_normals;
uniform sampler2D u_theta;//[theta, z, normal1Index, normal2Index]
uniform sampler2D u_creaseGeo;//[h1, h2, coef1, coef2]
uniform sampler2D u_meta2;//[nodesFaceIndex, numFaces]
uniform sampler2D u_nodeFaceMeta;//[faceIndex, a, b, c]
uniform sampler2D u_nominalTriangles;//[angleA, angleB, angleC]

vec4 getFromArray(float index1D, vec2 dimensions, sampler2D tex){
  vec2 index = vec2(mod(index1D, dimensions.x)+0.5, floor(index1D/dimensions.x)+0.5);
  vec2 scaledIndex = index/dimensions;
  return texture2D(tex, scaledIndex);
}

vec3 getPosition(float index1D){
  vec2 index = vec2(mod(index1D, u_textureDim.x)+0.5, floor(index1D/u_textureDim.x)+0.5);
  vec2 scaledIndex = index/u_textureDim;
  return texture2D(u_lastPosition, scaledIndex).xyz + texture2D(u_originalPosition, scaledIndex).xyz;
}

void main(){
  vec2 fragCoord = gl_FragCoord.xy;
  vec2 scaledFragCoord = fragCoord/u_textureDim;

  vec3 lastPosition = texture2D(u_lastPosition, scaledFragCoord).xyz;

  vec2 mass = texture2D(u_mass, scaledFragCoord).xy;
  if (mass[1] == 1.0){//fixed
    gl_FragColor = vec4(lastPosition, 0.0);
    return;
  }
  vec3 force = texture2D(u_externalForces, scaledFragCoord).xyz;
  vec3 lastLastPosition = texture2D(u_lastLastPosition, scaledFragCoord).xyz;
  vec3 lastVelocity = texture2D(u_lastVelocity, scaledFragCoord).xyz;
  vec3 originalPosition = texture2D(u_originalPosition, scaledFragCoord).xyz;

  vec4 neighborIndices = texture2D(u_meta, scaledFragCoord);
  vec4 meta = texture2D(u_meta, scaledFragCoord);
  vec2 meta2 = texture2D(u_meta2, scaledFragCoord).xy;

  float nodeError = 0.0;

  for (int j=0;j<100;j++){//for all beams (up to 100, had to put a const int in here)
    if (j >= int(meta[1])) break;

    vec4 beamMeta = getFromArray(meta[0]+float(j), u_textureDimEdges, u_beamMeta);

    float neighborIndex1D = beamMeta[3];
    vec2 neighborIndex = vec2(mod(neighborIndex1D, u_textureDim.x)+0.5, floor(neighborIndex1D/u_textureDim.x)+0.5);
    vec2 scaledNeighborIndex = neighborIndex/u_textureDim;
    vec3 neighborLastPosition = texture2D(u_lastPosition, scaledNeighborIndex).xyz;
    vec3 neighborLastVelocity = texture2D(u_lastVelocity, scaledNeighborIndex).xyz;
    vec3 neighborOriginalPosition = texture2D(u_originalPosition, scaledNeighborIndex).xyz;

    vec3 deltaP = neighborLastPosition+neighborOriginalPosition-lastPosition-originalPosition;
    float deltaPLength = length(deltaP);
    float nominalLength = beamMeta[2];
    deltaP *= (1.0-nominalLength/deltaPLength);
    nodeError += abs(deltaPLength/nominalLength - 1.0);
    vec3 deltaV = neighborLastVelocity-lastVelocity;

    vec3 _force = deltaP*beamMeta[0] + deltaV*beamMeta[1];
    force += _force;
  }
  nodeError /= meta[1];

  for (int j=0;j<100;j++){//for all creases (up to 100, had to put a const int in here)
    if (j >= int(meta[3])) break;

    vec4 nodeCreaseMeta = getFromArray(meta[2]+float(j), u_textureDimNodeCreases, u_nodeCreaseMeta);

    float creaseIndex1D = nodeCreaseMeta[0];
    vec2 creaseIndex = vec2(mod(creaseIndex1D, u_textureDimCreases.x)+0.5, floor(creaseIndex1D/u_textureDimCreases.x)+0.5);
    vec2 scaledCreaseIndex = creaseIndex/u_textureDimCreases;

    vec4 thetas = texture2D(u_theta, scaledCreaseIndex);
    vec3 creaseMeta = texture2D(u_creaseMeta, scaledCreaseIndex).xyz;//[k, d, targetTheta]
    vec4 creaseGeo = texture2D(u_creaseGeo, scaledCreaseIndex);//[h1, h2, coef1, coef2]
    if (creaseGeo[0]< 0.0) continue;//crease disabled bc it has collapsed too much

    float targetTheta = creaseMeta[2] * u_creasePercent;
    float angForce = creaseMeta[0]*(targetTheta-thetas[0]);// + creaseMeta[1]*thetas[1];

    float nodeNum = nodeCreaseMeta[1];//1, 2, 3, 4

    if (nodeNum > 2.0){//crease reaction, node is on a crease

      //node #1
      vec3 normal1 = getFromArray(thetas[2], u_textureDimFaces, u_normals).xyz;

      //node #2
      vec3 normal2 = getFromArray(thetas[3], u_textureDimFaces, u_normals).xyz;

      float coef1 = creaseGeo[2];
      float coef2 = creaseGeo[3];

      if (nodeNum == 3.0){
        coef1 = 1.0-coef1;
        coef2 = 1.0-coef2;
      }

      vec3 _force = -angForce*(coef1/creaseGeo[0]*normal1 + coef2/creaseGeo[1]*normal2);
      force += _force;

    } else {

      float normalIndex1D = thetas[2];//node #1
      float momentArm = creaseGeo[0];//node #1
      if (nodeNum == 2.0) {
        normalIndex1D = thetas[3];//node #2
        momentArm = creaseGeo[1];//node #2
      }

      vec3 normal = getFromArray(normalIndex1D, u_textureDimFaces, u_normals).xyz;

      vec3 _force = angForce/momentArm*normal;
      force += _force;
    }
  }

  for (int j=0;j<100;j++){//for all faces (up to 100, had to put a const int in here)
    if (j >= int(meta2[1])) break;

    vec4 faceMeta = getFromArray(meta2[0]+float(j), u_textureDimNodeFaces, u_nodeFaceMeta);//[face index, a, b, c]
    vec3 nominalAngles = getFromArray(faceMeta[0], u_textureDimFaces, u_nominalTriangles).xyz;//[angA, angB, angC]

    int faceIndex = 0;
    if (faceMeta[2] < 0.0) faceIndex = 1;
    if (faceMeta[3] < 0.0) faceIndex = 2;

    //get node positions
    vec3 a = faceIndex == 0 ? lastPosition+originalPosition : getPosition(faceMeta[1]);
    vec3 b = faceIndex == 1 ? lastPosition+originalPosition : getPosition(faceMeta[2]);
    vec3 c = faceIndex == 2 ? lastPosition+originalPosition : getPosition(faceMeta[3]);

    //calc angles
    vec3 ab = b-a;
    vec3 ac = c-a;
    vec3 bc = c-b;

    float lengthAB = length(ab);
    float lengthAC = length(ac);
    float lengthBC = length(bc);

    float tol = 0.0000001;
    if (abs(lengthAB) < tol || abs(lengthBC) < tol || abs(lengthAC) < tol) continue;

    ab /= lengthAB;
    ac /= lengthAC;
    bc /= lengthBC;

    vec3 angles = vec3(acos(dot(ab, ac)),
      acos(-1.0*dot(ab, bc)),
      acos(dot(ac, bc)));
    vec3 anglesDiff = nominalAngles-angles;

    vec3 normal = getFromArray(faceMeta[0], u_textureDimFaces, u_normals).xyz;

    //calc forces
    anglesDiff *= u_faceStiffness;
    if (faceIndex == 0){//a
      vec3 normalCrossAC = cross(normal, ac)/lengthAC;
      vec3 normalCrossAB = cross(normal, ab)/lengthAB;
      force -= anglesDiff[0]*(normalCrossAC - normalCrossAB);
      force -= anglesDiff[1]*normalCrossAB;
      force += anglesDiff[2]*normalCrossAC;
    } else if (faceIndex == 1){
      vec3 normalCrossAB = cross(normal, ab)/lengthAB;
      vec3 normalCrossBC = cross(normal, bc)/lengthBC;
      force -= anglesDiff[0]*normalCrossAB;
      force += anglesDiff[1]*(normalCrossAB + normalCrossBC);
      force -= anglesDiff[2]*normalCrossBC;
    } else if (faceIndex == 2){
      vec3 normalCrossAC = cross(normal, ac)/lengthAC;
      vec3 normalCrossBC = cross(normal, bc)/lengthBC;
      force += anglesDiff[0]*normalCrossAC;
      force -= anglesDiff[1]*normalCrossBC;
      force += anglesDiff[2]*(normalCrossBC - normalCrossAC);
    }

  }

  vec3 nextPosition = force*u_dt*u_dt/mass[0] + 2.0*lastPosition - lastLastPosition;
  gl_FragColor = vec4(nextPosition,nodeError);//position.a has error info
}
`,$_=`#define TWO_PI 6.283185307179586476925286766559
precision mediump float;
uniform vec2 u_textureDim;
uniform vec2 u_textureDimFaces;
uniform vec2 u_textureDimCreases;
uniform sampler2D u_normals;
uniform sampler2D u_lastTheta;
uniform sampler2D u_creaseVectors;
uniform sampler2D u_lastPosition;
uniform sampler2D u_originalPosition;
uniform float u_dt;

vec4 getFromArray(float index1D, vec2 dimensions, sampler2D tex){
  vec2 index = vec2(mod(index1D, dimensions.x)+0.5, floor(index1D/dimensions.x)+0.5);
  vec2 scaledIndex = index/dimensions;
  return texture2D(tex, scaledIndex);
}

void main(){

  vec2 fragCoord = gl_FragCoord.xy;
  vec2 scaledFragCoord = fragCoord/u_textureDimCreases;

  vec4 lastTheta = texture2D(u_lastTheta, scaledFragCoord);

  if (lastTheta[2]<0.0){
    gl_FragColor = vec4(lastTheta[0], 0.0, -1.0, -1.0);
    return;
  }

  vec3 normal1 = getFromArray(lastTheta[2], u_textureDimFaces, u_normals).xyz;
  vec3 normal2 = getFromArray(lastTheta[3], u_textureDimFaces, u_normals).xyz;

  float dotNormals = dot(normal1, normal2);//normals are already normalized, no need to divide by length
  if (dotNormals < -1.0) dotNormals = -1.0;
  else if (dotNormals > 1.0) dotNormals = 1.0;

  vec2 creaseVectorIndices = texture2D(u_creaseVectors, scaledFragCoord).xy;
  vec2 creaseNodeIndex = vec2(mod(creaseVectorIndices[0], u_textureDim.x)+0.5, floor(creaseVectorIndices[0]/u_textureDim.x)+0.5);
  vec2 scaledNodeIndex = creaseNodeIndex/u_textureDim;
  vec3 node0 = texture2D(u_lastPosition, scaledNodeIndex).xyz + texture2D(u_originalPosition, scaledNodeIndex).xyz;
  creaseNodeIndex = vec2(mod(creaseVectorIndices[1], u_textureDim.x)+0.5, floor(creaseVectorIndices[1]/u_textureDim.x)+0.5);
  scaledNodeIndex = creaseNodeIndex/u_textureDim;
  vec3 node1 = texture2D(u_lastPosition, scaledNodeIndex).xyz + texture2D(u_originalPosition, scaledNodeIndex).xyz;

  //https://math.stackexchange.com/questions/47059/how-do-i-calculate-a-dihedral-angle-given-cartesian-coordinates
  vec3 creaseVector = normalize(node1-node0);
  float x = dotNormals;
  float y = dot(cross(normal1, creaseVector), normal2);

  float theta = atan(y, x);

  float diff = theta-lastTheta[0];
  float origDiff = diff;
  if (diff < -5.0) {
    diff += TWO_PI;
  } else if (diff > 5.0) {
    diff -= TWO_PI;
  }
  theta = lastTheta[0] + diff;
  gl_FragColor = vec4(theta, diff, lastTheta[2], lastTheta[3]);//[theta, w, normal1Index, normal2Index]
}
`,tx=`precision mediump float;
uniform vec2 u_textureDim;
uniform vec2 u_textureDimFaces;
uniform sampler2D u_faceVertexIndices;
uniform sampler2D u_lastPosition;
uniform sampler2D u_originalPosition;

vec3 getPosition(float index1D){
  vec2 index = vec2(mod(index1D, u_textureDim.x)+0.5, floor(index1D/u_textureDim.x)+0.5);
  vec2 scaledIndex = index/u_textureDim;
  return texture2D(u_lastPosition, scaledIndex).xyz + texture2D(u_originalPosition, scaledIndex).xyz;
}

void main(){
  vec2 fragCoord = gl_FragCoord.xy;
  vec2 scaledFragCoord = fragCoord/u_textureDimFaces;

  vec3 indices = texture2D(u_faceVertexIndices, scaledFragCoord).xyz;

  vec3 a = getPosition(indices[0]);
  vec3 b = getPosition(indices[1]);
  vec3 c = getPosition(indices[2]);

  vec3 normal = normalize(cross(b-a, c-a));

  gl_FragColor = vec4(normal, 0.0);
}
`,ex=`precision mediump float;
uniform vec2 u_floatTextureDim;
uniform sampler2D u_floatTexture;
uniform float u_vectorLength;
float shift_right (float v, float amt) {
  v = floor(v) + 0.5;
  return floor(v / exp2(amt));
}
float shift_left (float v, float amt) {
  return floor(v * exp2(amt) + 0.5);
}
float mask_last (float v, float bits) {
  return mod(v, shift_left(1.0, bits));
}
float extract_bits (float num, float from, float to) {
  from = floor(from + 0.5); to = floor(to + 0.5);
  return mask_last(shift_right(num, from), to - from);
}
vec4 encode_float (float val) {
  if (val == 0.0) return vec4(0, 0, 0, 0);
  float sign = val > 0.0 ? 0.0 : 1.0;
  val = abs(val);
  float exponent = floor(log2(val));
  float biased_exponent = exponent + 127.0;
  float fraction = ((val / exp2(exponent)) - 1.0) * 8388608.0;
  float t = biased_exponent / 2.0;
  float last_bit_of_biased_exponent = fract(t) * 2.0;
  float remaining_bits_of_biased_exponent = floor(t);
  float byte4 = extract_bits(fraction, 0.0, 8.0) / 255.0;
  float byte3 = extract_bits(fraction, 8.0, 16.0) / 255.0;
  float byte2 = (last_bit_of_biased_exponent * 128.0 + extract_bits(fraction, 16.0, 23.0)) / 255.0;
  float byte1 = (sign * 128.0 + remaining_bits_of_biased_exponent) / 255.0;
  return vec4(byte4, byte3, byte2, byte1);
}
void main(){
  vec2 fragCoord = gl_FragCoord.xy;
  float textureXcoord = floor((fragCoord.x - 0.5)/u_vectorLength+0.0001) + 0.5;
  vec4 data = texture2D(u_floatTexture, vec2(textureXcoord, fragCoord.y)/u_floatTextureDim);
  int textureIndex = int(floor(mod(fragCoord.x-0.5+0.0001, u_vectorLength)));
  if (textureIndex == 0) gl_FragColor = encode_float(data[0]);
  else if (textureIndex == 1) gl_FragColor = encode_float(data[1]);
  else if (textureIndex == 2) gl_FragColor = encode_float(data[2]);
  else if (textureIndex == 3) gl_FragColor = encode_float(data[3]);
}
`,nx=`precision mediump float;
void main(){
  gl_FragColor = vec4(0.0);
}
`,ix=`precision mediump float;
uniform sampler2D u_theta;
uniform vec2 u_textureDimCreases;
void main(){
  vec2 fragCoord = gl_FragCoord.xy;
  vec2 scaledFragCoord = fragCoord/u_textureDimCreases;
  vec4 theta = texture2D(u_theta, scaledFragCoord);
  gl_FragColor = vec4(0.0, 0.0, theta[2], theta[3]);
}
`,sx=`precision mediump float;
uniform sampler2D u_lastPosition;
uniform vec2 u_textureDim;
uniform vec3 u_center;
void main(){
  vec2 fragCoord = gl_FragCoord.xy;
  vec2 scaledFragCoord = fragCoord/u_textureDim;
  vec3 position = texture2D(u_lastPosition, scaledFragCoord).xyz;
  gl_FragColor = vec4(position-u_center, 0.0);
}
`,rx=`precision mediump float;
uniform sampler2D u_orig;
uniform vec2 u_textureDim;
void main(){
  gl_FragColor = texture2D(u_orig, gl_FragCoord.xy/u_textureDim);
}
`,ox=`precision mediump float;
uniform vec2 u_textureDim;
uniform vec2 u_textureDimCreases;
uniform sampler2D u_lastPosition;
uniform sampler2D u_originalPosition;
uniform sampler2D u_creaseMeta2;

vec3 getPosition(float index1D){
  vec2 index = vec2(mod(index1D, u_textureDim.x)+0.5, floor(index1D/u_textureDim.x)+0.5);
  vec2 scaledIndex = index/u_textureDim;
  return texture2D(u_lastPosition, scaledIndex).xyz + texture2D(u_originalPosition, scaledIndex).xyz;
}

void main(){
  vec2 fragCoord = gl_FragCoord.xy;
  vec2 scaledFragCoord = fragCoord/u_textureDimCreases;

  vec4 creaseMeta = texture2D(u_creaseMeta2, scaledFragCoord);

  vec3 node1 = getPosition(creaseMeta[0]);
  vec3 node2 = getPosition(creaseMeta[1]);
  vec3 node3 = getPosition(creaseMeta[2]);
  vec3 node4 = getPosition(creaseMeta[3]);

  float tol = 0.000001;

  vec3 creaseVector = node4-node3;
  float creaseLength = length(creaseVector);

  if (abs(creaseLength)<tol) {
    gl_FragColor = vec4(-1);//disable crease
    return;
  }
  creaseVector /= creaseLength;

  vec3 vector1 = node1-node3;
  vec3 vector2 = node2-node3;

  float proj1Length = dot(creaseVector, vector1);
  float proj2Length = dot(creaseVector, vector2);

  float dist1 = sqrt(abs(vector1.x*vector1.x+vector1.y*vector1.y+vector1.z*vector1.z-proj1Length*proj1Length));
  float dist2 = sqrt(abs(vector2.x*vector2.x+vector2.y*vector2.y+vector2.z*vector2.z-proj2Length*proj2Length));

  if (dist1<tol || dist2<tol){
    gl_FragColor = vec4(-1);//disable crease
    return;
  }

  gl_FragColor = vec4(dist1, dist2, proj1Length/creaseLength, proj2Length/creaseLength);
}`,ax=(i,{textureDim:t,textureDimEdges:e,textureDimFaces:n,textureDimCreases:s,textureDimNodeFaces:r,textureDimNodeCreases:o,position:a,lastPosition:c,lastLastPosition:l,velocity:h,lastVelocity:f,meta:u,meta2:d,normals:g,faceVertexIndices:p,nodeFaceMeta:m,nominalTriangles:_,nodeCreaseMeta:S,creaseMeta2:x,creaseGeo:M,theta:y,lastTheta:b},A={})=>{const v={...Y_,...A};i.initTextureFromData("u_position",t,t,oe,a,!0),i.initTextureFromData("u_lastPosition",t,t,oe,c,!0),i.initTextureFromData("u_lastLastPosition",t,t,oe,l,!0),i.initTextureFromData("u_velocity",t,t,oe,h,!0),i.initTextureFromData("u_lastVelocity",t,t,oe,f,!0),i.initTextureFromData("u_theta",s,s,oe,y,!0),i.initTextureFromData("u_lastTheta",s,s,oe,b,!0),i.initTextureFromData("u_normals",n,n,oe,g,!0),i.initFrameBufferForTexture("u_position",!0),i.initFrameBufferForTexture("u_lastPosition",!0),i.initFrameBufferForTexture("u_lastLastPosition",!0),i.initFrameBufferForTexture("u_velocity",!0),i.initFrameBufferForTexture("u_lastVelocity",!0),i.initFrameBufferForTexture("u_theta",!0),i.initFrameBufferForTexture("u_lastTheta",!0),i.initFrameBufferForTexture("u_normals",!0),i.initTextureFromData("u_meta",t,t,oe,u,!0),i.initTextureFromData("u_meta2",t,t,oe,d,!0),i.initTextureFromData("u_nominalTrinagles",n,n,oe,_,!0),i.initTextureFromData("u_nodeCreaseMeta",o,o,oe,S,!0),i.initTextureFromData("u_creaseMeta2",s,s,oe,x,!0),i.initTextureFromData("u_nodeFaceMeta",r,r,oe,m,!0),i.initTextureFromData("u_creaseGeo",s,s,oe,M,!0),i.initFrameBufferForTexture("u_creaseGeo",!0),i.initTextureFromData("u_faceVertexIndices",n,n,oe,p,!0),i.initTextureFromData("u_nominalTriangles",n,n,oe,_,!0),i.createProgram("positionCalc",Qe,Z_),i.setUniformForProgram("positionCalc","u_velocity",0,"1i"),i.setUniformForProgram("positionCalc","u_lastPosition",1,"1i"),i.setUniformForProgram("positionCalc","u_mass",2,"1i"),i.setUniformForProgram("positionCalc","u_textureDim",[t,t],"2f"),i.createProgram("velocityCalcVerlet",Qe,J_),i.setUniformForProgram("velocityCalcVerlet","u_position",0,"1i"),i.setUniformForProgram("velocityCalcVerlet","u_lastPosition",1,"1i"),i.setUniformForProgram("velocityCalcVerlet","u_mass",2,"1i"),i.setUniformForProgram("velocityCalcVerlet","u_textureDim",[t,t],"2f"),i.createProgram("velocityCalc",Qe,K_),i.setUniformForProgram("velocityCalc","u_lastPosition",0,"1i"),i.setUniformForProgram("velocityCalc","u_lastVelocity",1,"1i"),i.setUniformForProgram("velocityCalc","u_originalPosition",2,"1i"),i.setUniformForProgram("velocityCalc","u_externalForces",3,"1i"),i.setUniformForProgram("velocityCalc","u_mass",4,"1i"),i.setUniformForProgram("velocityCalc","u_meta",5,"1i"),i.setUniformForProgram("velocityCalc","u_beamMeta",6,"1i"),i.setUniformForProgram("velocityCalc","u_creaseMeta",7,"1i"),i.setUniformForProgram("velocityCalc","u_nodeCreaseMeta",8,"1i"),i.setUniformForProgram("velocityCalc","u_normals",9,"1i"),i.setUniformForProgram("velocityCalc","u_theta",10,"1i"),i.setUniformForProgram("velocityCalc","u_creaseGeo",11,"1i"),i.setUniformForProgram("velocityCalc","u_meta2",12,"1i"),i.setUniformForProgram("velocityCalc","u_nodeFaceMeta",13,"1i"),i.setUniformForProgram("velocityCalc","u_nominalTriangles",14,"1i"),i.setUniformForProgram("velocityCalc","u_textureDim",[t,t],"2f"),i.setUniformForProgram("velocityCalc","u_textureDimEdges",[e,e],"2f"),i.setUniformForProgram("velocityCalc","u_textureDimFaces",[n,n],"2f"),i.setUniformForProgram("velocityCalc","u_textureDimCreases",[s,s],"2f"),i.setUniformForProgram("velocityCalc","u_textureDimNodeCreases",[o,o],"2f"),i.setUniformForProgram("velocityCalc","u_textureDimNodeFaces",[r,r],"2f"),i.setUniformForProgram("velocityCalc","u_creasePercent",v.creasePercent,"1f"),i.setUniformForProgram("velocityCalc","u_axialStiffness",v.axialStiffness,"1f"),i.setUniformForProgram("velocityCalc","u_faceStiffness",v.faceStiffness,"1f"),i.setUniformForProgram("velocityCalc","u_calcFaceStrain",v.calcFaceStrain,"1f"),i.createProgram("positionCalcVerlet",Qe,Q_),i.setUniformForProgram("positionCalcVerlet","u_lastPosition",0,"1i"),i.setUniformForProgram("positionCalcVerlet","u_lastLastPosition",1,"1i"),i.setUniformForProgram("positionCalcVerlet","u_lastVelocity",2,"1i"),i.setUniformForProgram("positionCalcVerlet","u_originalPosition",3,"1i"),i.setUniformForProgram("positionCalcVerlet","u_externalForces",4,"1i"),i.setUniformForProgram("positionCalcVerlet","u_mass",5,"1i"),i.setUniformForProgram("positionCalcVerlet","u_meta",6,"1i"),i.setUniformForProgram("positionCalcVerlet","u_beamMeta",7,"1i"),i.setUniformForProgram("positionCalcVerlet","u_creaseMeta",8,"1i"),i.setUniformForProgram("positionCalcVerlet","u_nodeCreaseMeta",9,"1i"),i.setUniformForProgram("positionCalcVerlet","u_normals",10,"1i"),i.setUniformForProgram("positionCalcVerlet","u_theta",11,"1i"),i.setUniformForProgram("positionCalcVerlet","u_creaseGeo",12,"1i"),i.setUniformForProgram("positionCalcVerlet","u_meta2",13,"1i"),i.setUniformForProgram("positionCalcVerlet","u_nodeFaceMeta",14,"1i"),i.setUniformForProgram("positionCalcVerlet","u_nominalTriangles",15,"1i"),i.setUniformForProgram("positionCalcVerlet","u_textureDim",[t,t],"2f"),i.setUniformForProgram("positionCalcVerlet","u_textureDimEdges",[e,e],"2f"),i.setUniformForProgram("positionCalcVerlet","u_textureDimFaces",[n,n],"2f"),i.setUniformForProgram("positionCalcVerlet","u_textureDimCreases",[s,s],"2f"),i.setUniformForProgram("positionCalcVerlet","u_textureDimNodeCreases",[o,o],"2f"),i.setUniformForProgram("positionCalcVerlet","u_textureDimNodeFaces",[r,r],"2f"),i.setUniformForProgram("positionCalcVerlet","u_creasePercent",v.creasePercent,"1f"),i.setUniformForProgram("positionCalcVerlet","u_axialStiffness",v.axialStiffness,"1f"),i.setUniformForProgram("positionCalcVerlet","u_faceStiffness",v.faceStiffness,"1f"),i.setUniformForProgram("positionCalcVerlet","u_calcFaceStrain",v.calcFaceStrain,"1f"),i.createProgram("thetaCalc",Qe,$_),i.setUniformForProgram("thetaCalc","u_normals",0,"1i"),i.setUniformForProgram("thetaCalc","u_lastTheta",1,"1i"),i.setUniformForProgram("thetaCalc","u_creaseVectors",2,"1i"),i.setUniformForProgram("thetaCalc","u_lastPosition",3,"1i"),i.setUniformForProgram("thetaCalc","u_originalPosition",4,"1i"),i.setUniformForProgram("thetaCalc","u_textureDim",[t,t],"2f"),i.setUniformForProgram("thetaCalc","u_textureDimFaces",[n,n],"2f"),i.setUniformForProgram("thetaCalc","u_textureDimCreases",[s,s],"2f"),i.createProgram("normalCalc",Qe,tx),i.setUniformForProgram("normalCalc","u_faceVertexIndices",0,"1i"),i.setUniformForProgram("normalCalc","u_lastPosition",1,"1i"),i.setUniformForProgram("normalCalc","u_originalPosition",2,"1i"),i.setUniformForProgram("normalCalc","u_textureDim",[t,t],"2f"),i.setUniformForProgram("normalCalc","u_textureDimFaces",[n,n],"2f"),i.createProgram("packToBytes",Qe,ex),i.initTextureFromData("outputBytes",t*4,t,"UNSIGNED_BYTE",null,!0),i.initFrameBufferForTexture("outputBytes",!0),i.setUniformForProgram("packToBytes","u_floatTextureDim",[t,t],"2f"),i.setUniformForProgram("packToBytes","u_floatTexture",0,"1i"),i.createProgram("zeroTexture",Qe,nx),i.createProgram("zeroThetaTexture",Qe,ix),i.setUniformForProgram("zeroThetaTexture","u_theta",0,"1i"),i.setUniformForProgram("zeroThetaTexture","u_textureDimCreases",[s,s],"2f"),i.createProgram("centerTexture",Qe,sx),i.setUniformForProgram("centerTexture","u_lastPosition",0,"1i"),i.setUniformForProgram("centerTexture","u_textureDim",[t,t],"2f"),i.createProgram("copyTexture",Qe,rx),i.setUniformForProgram("copyTexture","u_orig",0,"1i"),i.setUniformForProgram("copyTexture","u_textureDim",[t,t],"2f"),i.createProgram("updateCreaseGeo",Qe,ox),i.setUniformForProgram("updateCreaseGeo","u_lastPosition",0,"1i"),i.setUniformForProgram("updateCreaseGeo","u_originalPosition",1,"1i"),i.setUniformForProgram("updateCreaseGeo","u_creaseMeta2",2,"1i"),i.setUniformForProgram("updateCreaseGeo","u_textureDim",[t,t],"2f"),i.setUniformForProgram("updateCreaseGeo","u_textureDimCreases",[s,s],"2f"),i.setSize(t,t)},lx=i=>{let t=0;return i.edges.forEach(e=>{e.getNaturalFrequency()>t&&(t=e.getNaturalFrequency())}),1/(2*Math.PI*t)*.9},cx=(i,t)=>{const e=lx(t);i.setProgram("thetaCalc"),i.setUniformForProgram("thetaCalc","u_dt",e,"1f"),i.setProgram("velocityCalc"),i.setUniformForProgram("velocityCalc","u_dt",e,"1f"),i.setProgram("positionCalcVerlet"),i.setUniformForProgram("positionCalcVerlet","u_dt",e,"1f"),i.setProgram("positionCalc"),i.setUniformForProgram("positionCalc","u_dt",e,"1f"),i.setProgram("velocityCalcVerlet"),i.setUniformForProgram("velocityCalcVerlet","u_dt",e,"1f")},hx=(i,t,e)=>{const n=V_(i,t),s=X_(i,t,n);return ax(i,n,e),cx(i,t),{...n,...s}},Sa=.5,ux=(i,{textureDim:t,textureDimCreases:e,textureDimFaces:n,integrationType:s})=>{switch(i.setProgram("normalCalc"),i.setSize(n,n),i.step("normalCalc",["u_faceVertexIndices","u_lastPosition","u_originalPosition"],"u_normals"),i.setProgram("thetaCalc"),i.setSize(e,e),i.step("thetaCalc",["u_normals","u_lastTheta","u_creaseVectors","u_lastPosition","u_originalPosition"],"u_theta"),i.setProgram("updateCreaseGeo"),i.step("updateCreaseGeo",["u_lastPosition","u_originalPosition","u_creaseMeta2"],"u_creaseGeo"),s){case"verlet":i.setProgram("positionCalcVerlet"),i.setSize(t,t),i.step("positionCalcVerlet",["u_lastPosition","u_lastLastPosition","u_lastVelocity","u_originalPosition","u_externalForces","u_mass","u_meta","u_beamMeta","u_creaseMeta","u_nodeCreaseMeta","u_normals","u_theta","u_creaseGeo","u_meta2","u_nodeFaceMeta","u_nominalTriangles"],"u_position"),i.step("velocityCalcVerlet",["u_position","u_lastPosition","u_mass"],"u_velocity"),i.swapTextures("u_lastPosition","u_lastLastPosition");break;case"euler":default:i.setProgram("velocityCalc"),i.setSize(t,t),i.step("velocityCalc",["u_lastPosition","u_lastVelocity","u_originalPosition","u_externalForces","u_mass","u_meta","u_beamMeta","u_creaseMeta","u_nodeCreaseMeta","u_normals","u_theta","u_creaseGeo","u_meta2","u_nodeFaceMeta","u_nominalTriangles"],"u_velocity"),i.step("positionCalc",["u_velocity","u_lastPosition","u_mass"],"u_position");break}i.swapTextures("u_theta","u_lastTheta"),i.swapTextures("u_velocity","u_lastVelocity"),i.swapTextures("u_position","u_lastPosition")},Zc=(i,t,{textureDim:e,axialStrain:n})=>{if(!i)return 0;const s=4;if(i.setProgram("packToBytes"),i.setUniformForProgram("packToBytes","u_vectorLength",s,"1f"),i.setUniformForProgram("packToBytes","u_floatTextureDim",[e,e],"2f"),i.setSize(e*s,e),i.step("packToBytes",["u_lastPosition"],"outputBytes"),!i.readyToRead())return 0;const r=t.nodes.length*s,o=Math.ceil(r/(e*s)),a=new Uint8Array(o*e*4*s);i.readPixels(0,0,e*s,o,a);const c=new Float32Array(a.buffer);let l=0;for(let h=0;h<t.nodes.length;h+=1){const f=h*s;let u=c[f+3]*100;l+=u;const d=new J(c[f],c[f+1],c[f+2]);if(d.add(t.nodes[h]._originalPosition),t.positions[3*h]=d.x,t.positions[3*h+1]=d.y,t.positions[3*h+2]=d.z,n){u>Sa&&(u=Sa);const g=(1-u/Sa)*.7,p=new jn;p.setHSL(g,1,.5),t.colors[3*h]=p.r,t.colors[3*h+1]=p.g,t.colors[3*h+2]=p.b}}return l/t.nodes.length},fx=()=>{let i=N_(),t,e,n,s,r,o,a,c,l,h="euler";const f=()=>{if(!i||!t)return;j_(i,t,{lastPosition:l,textureDim:e});const b=k_(t);i.setProgram("centerTexture"),i.setUniformForProgram("centerTexture","u_center",[b.x,b.y,b.z],"3f"),i.step("centerTexture",["u_lastPosition"],"u_position"),h==="verlet"&&i.step("copyTexture",["u_position"],"u_lastLastPosition"),i.swapTextures("u_position","u_lastPosition"),i.step("zeroTexture",[],"u_lastVelocity"),i.step("zeroTexture",[],"u_velocity")},u=(b=100,A=!1)=>{if(!i||!t)return 0;for(let v=0;v<b;v+=1)ux(i,{textureDim:e,textureDimCreases:n,textureDimFaces:s,integrationType:h});return Zc(i,t,{textureDim:e,axialStrain:A})},d=(b,A={})=>{t=b,{textureDim:e,textureDimCreases:n,textureDimFaces:s,textureDimEdges:r,meta:o,beamMeta:a,creaseMeta:c,lastPosition:l}=hx(i,t,A)},g=()=>!i||!t?0:(i.step("zeroTexture",[],"u_position"),i.step("zeroTexture",[],"u_lastPosition"),i.step("zeroTexture",[],"u_lastLastPosition"),i.step("zeroTexture",[],"u_velocity"),i.step("zeroTexture",[],"u_lastVelocity"),i.step("zeroThetaTexture",["u_lastTheta"],"u_theta"),i.step("zeroThetaTexture",["u_theta"],"u_lastTheta"),Zc(i,t,{textureDim:e,axialStrain:!0}));return{solve:u,setModel:d,nodeDidMove:f,reset:g,dealloc:()=>{i&&(i.dealloc(),i=void 0)},setIntegration:b=>{h=b,g()},setCreasePercent:b=>{if(!i||!t)return;const A=parseFloat(b);i.setProgram("velocityCalc"),i.setUniformForProgram("velocityCalc","u_creasePercent",A,"1f"),i.setProgram("positionCalcVerlet"),i.setUniformForProgram("positionCalcVerlet","u_creasePercent",A,"1f")},setAxialStiffness:b=>{if(!i||!t)return;const A=parseFloat(b);i.setProgram("velocityCalc"),i.setUniformForProgram("velocityCalc","u_axialStiffness",A,"1f"),i.setProgram("positionCalcVerlet"),i.setUniformForProgram("positionCalcVerlet","u_axialStiffness",A,"1f")},setFaceStiffness:b=>{if(!i||!t)return;const A=parseFloat(b);i.setProgram("velocityCalc"),i.setUniformForProgram("velocityCalc","u_faceStiffness",A,"1f"),i.setProgram("positionCalcVerlet"),i.setUniformForProgram("positionCalcVerlet","u_faceStiffness",A,"1f")},setFaceStrain:b=>{if(!i||!t)return;const A=parseFloat(b);i.setProgram("velocityCalc"),i.setUniformForProgram("velocityCalc","u_calcFaceStrain",A,"1f"),i.setProgram("positionCalcVerlet"),i.setUniformForProgram("positionCalcVerlet","u_calcFaceStrain",A,"1f")},update:()=>{!i||!t||(Wh(i,t,{creaseMeta:c,textureDimCreases:n}),Gh(i,t,{meta:o,beamMeta:a,textureDimEdges:r}))}}},dx=({scene:i,onCompute:t}={})=>{const e=new Kt({scene:i}),n=fx();let s=0,r=0;const o=R=>{const q=parseFloat(R);r=Number.isNaN(q)?0:q,n.setCreasePercent(r)};let a=!1;const c=R=>{a=!!R,e.setStrain(a)};let l=!1;const h=R=>{l=R,e.frontMesh.castShadow=l,e.frontMesh.receiveShadow=l,e.backMesh.receiveShadow=l},f=()=>n.nodeDidMove(),u=()=>{s=n.solve(100,{axialStrain:a}),e.needsUpdate()};let d;const g=()=>{d=window.requestAnimationFrame(g),u(),t&&t({error:s})};let p=!1;const m=R=>{d&&(window.cancelAnimationFrame(d),d=void 0),p=R,p&&g()},D={load:R=>{e.load(R),n.setModel(e,{creasePercent:r})},export:()=>e.export(),model:e,reset:()=>n.reset(),dealloc:()=>{m(!1),e.dealloc(),n.dealloc()},nodeDidMove:f,setActive:m,setFoldAmount:o,setStrain:c,setShadows:h,setIntegration:R=>{n.setIntegration(R)},setAxialStiffness:R=>{n.setAxialStiffness(R),e.setAxialStiffness(R),n.update()},setFaceStiffness:R=>{n.setFaceStiffness(R),n.update()},setJoinStiffness:R=>{e.setJoinStiffness(R),n.update()},setCreaseStiffness:R=>{e.setCreaseStiffness(R),n.update()},setDampingRatio:R=>{e.setDampingRatio(R),n.update()},getMaterials:()=>e.materials,setFrontColor:R=>e.materials.front.color.set(R),setBackColor:R=>e.materials.back.color.set(R),setLineColor:R=>e.materials.line.color.set(R),setMaterialFront:(...R)=>e.setMaterialFront(...R),setMaterialBack:(...R)=>e.setMaterialBack(...R),setMaterialLine:(...R)=>e.setMaterialLine(...R),setMaterialStrain:(...R)=>e.setMaterialStrain(...R)};return Object.defineProperty(D,"active",{get:()=>p,set:m}),Object.defineProperty(D,"foldAmount",{get:()=>r,set:o}),Object.defineProperty(D,"strain",{get:()=>a,set:c}),Object.defineProperty(D,"shadows",{get:()=>l,set:h}),Object.defineProperty(D,"materials",{get:()=>e.materials}),D},px=new $a({sizeAttenuation:!1,depthTest:!1,color:0,size:5}),mx=new $a({sizeAttenuation:!1,depthTest:!1,color:0,size:10}),gx=new ro({side:Rs,color:16759620}),_x=new ro({side:Ka,color:16759620}),xx=({scene:i,simulator:t})=>{let e,n,s;const r=_=>{e.visible=_.point!=null,e.visible&&(e.geometry.attributes.position.array[0]=_.point.x,e.geometry.attributes.position.array[1]=_.point.y,e.geometry.attributes.position.array[2]=_.point.z,e.geometry.attributes.position.needsUpdate=!0)},o=_=>{n.visible=_.vertex!=null,n.visible&&(n.geometry.attributes.position.array[0]=_.vertex_coords.x,n.geometry.attributes.position.array[1]=_.vertex_coords.y,n.geometry.attributes.position.array[2]=_.vertex_coords.z,n.geometry.attributes.position.needsUpdate=!0)},a=_=>{s.visible=_.face!=null,s.visible&&(_.face_vertices.map(S=>[0,1,2].map(x=>t.model.positions[S*3+x])).forEach((S,x)=>[0,1].forEach((M,y)=>{for(let b=0;b<3;b+=1)s.geometry.attributes.position.array[y*9+x*3+b]=S[b]})),s.geometry.attributes.position.needsUpdate=!0)},c=()=>{e.visible=!1,n.visible=!1,s.visible=!1},l=_=>{c(),_!==void 0&&(r(_),o(_),a(_))},h=new je(new Float32Array([0,0,0]),3);h.setUsage(ta);const f=new fn;f.setAttribute("position",h),e=new Vc(f,px),e.renderOrder=1e3,i.add(e);const u=new je(new Float32Array([0,0,0]),3);u.setUsage(ta);const d=new fn;d.setAttribute("position",u),n=new Vc(d,mx),n.renderOrder=1001,i.add(n);const g=new Float32Array(Array(2*3*3).fill(0)),p=new je(g,3);p.setUsage(ta);const m=new fn;return m.setAttribute("position",p),m.addGroup(0,3,1),m.addGroup(3,3,0),s=new Oa(m,[gx,_x]),i.add(s),{point:e,vertex:n,face:s,highlightTouch:l,highlightPoint:r,highlightVertex:o,highlightFace:a,clear:c}},wa=(i,t)=>{if(!i)return[];const e=Date.now(),n=t.intersectObjects(i.getMesh());return n.forEach(s=>{s.timeStamp=e,s.face_vertices=[s.face.a,s.face.b,s.face.c],s.material=s.face.materialIndex,s.normal=s.face.normal,s.face=s.faceIndex,s.hover=s.point,delete s.faceIndex,s.touch_face_vertices_distance=s.face_vertices.map(o=>[0,1,2].map(a=>i.positions[o*3+a])).map(o=>new J(...o)).map(o=>o.distanceTo(s.point));const r=s.touch_face_vertices_distance.map((o,a)=>({d:o,i:a})).sort((o,a)=>o.d-a.d).map(o=>o.i).shift();s.vertex=s.face_vertices[r],s.vertex_coords=new J(i.positions[s.vertex*3+0],i.positions[s.vertex*3+1],i.positions[s.vertex*3+2])}),n},yx=({renderer:i,camera:t,simulator:e,setTouches:n})=>{let s,r,o;const a=()=>{const d=wa(e.model,s)[0];if(!d||d.vertex===void 0)return;o=d.vertex;const g=new J(e.model.positions[d.vertex*3+0],e.model.positions[d.vertex*3+1],e.model.positions[d.vertex*3+2]),p=new J;t.getWorldDirection(p);const m=g.dot(p);r.set(p,-m)},c=d=>{const g=i.domElement.getBoundingClientRect(),p=new Ee((d.clientX-g.x)/g.width*2-1,-((d.clientY-g.y)/g.height)*2+1);s.setFromCamera(p,t);const m=wa(e.model,s);n&&n(m)},l=()=>{o=void 0},h=()=>{const d=e.model.nodes[o];if(!d)return;const g=new J;s.ray.intersectPlane(r,g),d.moveManually(g),e.nodeDidMove()},f=({pullEnabled:d})=>{if(!e.active)return;const g=d&&o!==void 0?[]:wa(e.model,s);n&&n(g),d&&o!==void 0&&h()},u=()=>{i.domElement.removeEventListener("mousedown",a,!1),i.domElement.removeEventListener("mouseup",l,!1),i.domElement.removeEventListener("mousemove",c,!1)};return s=new H0,r=new V0(new J(0,0,1)),s.setFromCamera({x:1/0,y:0},t),i.domElement.addEventListener("mousedown",a,!1),i.domElement.addEventListener("mouseup",l,!1),i.domElement.addEventListener("mousemove",c,!1),{animate:f,dealloc:u,raycasterReleaseHandler:l}};function vx(i){let t,e,n;return e=new c0({props:{enabled:i[1],maxDistance:i[0]*30,minDistance:i[0]*.1,panSpeed:1,rotateSpeed:4,zoomSpeed:16,dynamicDampingFactor:1,didMount:i[2]}}),{c(){t=Tt("div"),Yr(e.$$.fragment),et(t,"class","simulator svelte-mvs9pu")},m(s,r){Kr(s,t,r),Es(e,t,null),n=!0},p(s,r){const o={};r[0]&2&&(o.enabled=s[1]),r[0]&1&&(o.maxDistance=s[0]*30),r[0]&1&&(o.minDistance=s[0]*.1),e.$set(o)},i(s){n||(As(e.$$.fragment,s),n=!0)},o(s){Xr(e.$$.fragment,s),n=!1},d(s){s&&ks(t),Ps(e)}}}function Mx(i,t,e){let{origami:n}=t,{active:s}=t,{foldAmount:r}=t,{strain:o}=t,{tool:a}=t,{showTouches:c}=t,{showShadows:l}=t,{backgroundColor:h}=t,{frontColor:f}=t,{backColor:u}=t,{lineColor:d}=t,{lineOpacity:g}=t,{integration:p}=t,{axialStiffness:m}=t,{faceStiffness:_}=t,{joinStiffness:S}=t,{creaseStiffness:x}=t,{dampingRatio:M}=t,{error:y}=t,{reset:b}=t,{exportModel:A}=t;const v=[[1,1,1],[-1,1,1],[1,-1,1],[-1,-1,1],[1,1,-1],[-1,1,-1],[1,-1,-1],[-1,-1,-1]];let T=1,D=!0,R=!1,q=[],P,F,k,K,tt,G=v.map(H=>{const I=new n0;return I.position.set(...H),I.intensity=.5,I.distance=0,I.decay=2,I.castShadow=!1,I.shadow.mapSize.width=512,I.shadow.mapSize.height=512,I});const rt=H=>{e(3,y=H.error),F.animate({pullEnabled:R})},it=({renderer:H,scene:I,camera:Z})=>{e(29,K=I),e(30,tt=Z),e(26,P=dx({scene:K,onCompute:rt})),e(28,k=xx({scene:K,simulator:P})),e(27,F=yx({renderer:H,camera:tt,simulator:P,setTouches:ot=>{e(25,q=ot)}})),G.forEach(ot=>K.add(ot)),e(5,A=P.export)};return qa(()=>{F&&F.dealloc(),P&&P.dealloc()}),i.$$set=H=>{"origami"in H&&e(6,n=H.origami),"active"in H&&e(7,s=H.active),"foldAmount"in H&&e(8,r=H.foldAmount),"strain"in H&&e(9,o=H.strain),"tool"in H&&e(10,a=H.tool),"showTouches"in H&&e(11,c=H.showTouches),"showShadows"in H&&e(12,l=H.showShadows),"backgroundColor"in H&&e(13,h=H.backgroundColor),"frontColor"in H&&e(14,f=H.frontColor),"backColor"in H&&e(15,u=H.backColor),"lineColor"in H&&e(16,d=H.lineColor),"lineOpacity"in H&&e(17,g=H.lineOpacity),"integration"in H&&e(18,p=H.integration),"axialStiffness"in H&&e(19,m=H.axialStiffness),"faceStiffness"in H&&e(20,_=H.faceStiffness),"joinStiffness"in H&&e(21,S=H.joinStiffness),"creaseStiffness"in H&&e(22,x=H.creaseStiffness),"dampingRatio"in H&&e(23,M=H.dampingRatio),"error"in H&&e(3,y=H.error),"reset"in H&&e(4,b=H.reset),"exportModel"in H&&e(5,A=H.exportModel)},i.$$.update=()=>{if(i.$$.dirty[0]&67108928&&P)try{P.load(n);const H=kh(n);e(0,T=H?Math.max(...H.span):1)}catch(H){window.alert(H)}if(i.$$.dirty[0]&1073741825&&tt){const Z=(tt.aspect>1?T*1.25:T*1.25*(1/tt.aspect))/tt.position.length();tt.position.multiplyScalar(Z),tt.lookAt(0,0,0),e(30,tt.far=T*100,tt),e(30,tt.near=T/100,tt)}if(i.$$.dirty[0]&67112960|i.$$.dirty[1]&1&&P&&(P.setShadows(l),[0,3,4,7].forEach(H=>{e(31,G[H%G.length].castShadow=l,G)})),i.$$.dirty[0]&1|i.$$.dirty[1]&1){const H=T*Math.SQRT1_2;G.forEach((I,Z)=>{I.position.set(...v[Z%v.length]),I.position.setLength(H),I.shadow.camera.near=H/10,I.shadow.camera.far=H*10})}i.$$.dirty[0]&1024&&(e(1,D=a!=="pull"),e(24,R=a==="pull")),i.$$.dirty[0]&67108992&&P&&P.setActive(s),i.$$.dirty[0]&67109376&&P&&P.setStrain(o),i.$$.dirty[0]&67109120&&P&&P.setFoldAmount(r),i.$$.dirty[0]&536879104&&K&&e(29,K.background=new te(h),K),i.$$.dirty[0]&67125248&&P&&P.setFrontColor(f),i.$$.dirty[0]&67141632&&P&&P.setBackColor(u),i.$$.dirty[0]&67174400&&P&&P.setLineColor(d),i.$$.dirty[0]&67239936&&P&&(P.getMaterials().line.opacity=g),i.$$.dirty[0]&67371008&&P&&P.setIntegration(p),i.$$.dirty[0]&67633152&&P&&P.setAxialStiffness(m),i.$$.dirty[0]&68157440&&P&&P.setFaceStiffness(_),i.$$.dirty[0]&69206016&&P&&P.setJoinStiffness(S),i.$$.dirty[0]&71303168&&P&&P.setCreaseStiffness(x),i.$$.dirty[0]&75497472&&P&&P.setDampingRatio(M),i.$$.dirty[0]&150994944&&F&&F.raycasterReleaseHandler(R),i.$$.dirty[0]&301991936&&k&&c&&k.highlightTouch(q[0]),i.$$.dirty[0]&268437504&&(c||k.clear()),i.$$.dirty[0]&67108864&&P&&e(4,b=P.reset)},[T,D,it,y,b,A,n,s,r,o,a,c,l,h,f,u,d,g,p,m,_,S,x,M,R,q,P,F,k,K,tt,G]}class bx extends Gs{constructor(t){super(),Vs(this,t,Mx,vx,Ns,{origami:6,active:7,foldAmount:8,strain:9,tool:10,showTouches:11,showShadows:12,backgroundColor:13,frontColor:14,backColor:15,lineColor:16,lineOpacity:17,integration:18,axialStiffness:19,faceStiffness:20,joinStiffness:21,creaseStiffness:22,dampingRatio:23,error:3,reset:4,exportModel:5},null,[-1,-1])}}function Sx(i){let t,e,n,s,r,o,a,c,l,h,f,u,d,g,p,m,_,S,x,M,y,b,A,v,T,D,R,q,P,F,k,K,tt,G,rt,it,H,I,Z,ot,ut,N,O,nt,V,lt,Lt,_t,St,Y,xt,Et,ct,Zt,kt,Qt,ze,E,w,W,ht,ft,mt,Pt,gt,Q,At,Mt,vt,wt,Ct,It,Jt,Yt,L,j,at,pt,bt,Rt,ue,he,dn,Xt,Ze,ee,os,Yn,Ks,pn,C,B,X,z,$,yt,Dt,zt,Ft,Ht,Ut,Vt,ne,we,Pe,mn,ie,Nt,vi;return{c(){t=Tt("div"),e=Tt("input"),n=Gt(),s=Tt("h3"),r=Ae(`simulator active
		`),o=Tt("input"),a=Gt(),c=Tt("h3"),c.textContent="fold amount",l=Gt(),h=Tt("input"),u=Gt(),d=Tt("h3"),d.textContent="pointer tool",g=Gt(),p=Tt("input"),m=Gt(),_=Tt("label"),_.textContent="trackball",S=Gt(),x=Tt("input"),M=Gt(),y=Tt("label"),y.textContent="pull",b=Gt(),A=Tt("h3"),v=Ae(`show strain
		`),T=Tt("input"),R=Gt(),q=Tt("h3"),P=Ae(`show touches
		`),F=Tt("input"),k=Gt(),K=Tt("h3"),tt=Ae(`show shadows
		`),G=Tt("input"),rt=Gt(),it=Tt("h3"),H=Ae(`front
		`),I=Tt("input"),Z=Gt(),ot=Tt("h3"),ut=Ae(`back
		`),N=Tt("input"),O=Gt(),nt=Tt("h3"),V=Ae(`lines
		`),lt=Tt("input"),Lt=Gt(),_t=Tt("input"),St=Gt(),Y=Tt("h3"),xt=Ae(`background
		`),Et=Tt("input"),ct=Gt(),Zt=Tt("h3"),Zt.textContent="integration",kt=Gt(),Qt=Tt("input"),ze=Gt(),E=Tt("label"),E.textContent="euler",w=Gt(),W=Tt("input"),ht=Gt(),ft=Tt("label"),ft.textContent="verlet",mt=Gt(),Pt=Tt("h3"),gt=Ae(`axial stiffness
		`),Q=Tt("input"),At=Gt(),Mt=Tt("input"),vt=Gt(),wt=Tt("h3"),Ct=Ae(`face stiffness
		`),It=Tt("input"),Jt=Gt(),Yt=Tt("input"),L=Gt(),j=Tt("h3"),at=Ae(`join stiffness
		`),pt=Tt("input"),bt=Gt(),Rt=Tt("input"),ue=Gt(),he=Tt("h3"),dn=Ae(`crease stiffness
		`),Xt=Tt("input"),Ze=Gt(),ee=Tt("input"),os=Gt(),Yn=Tt("h3"),Ks=Ae(`damping ratio
		`),pn=Tt("input"),C=Gt(),B=Tt("input"),X=Gt(),z=Tt("h3"),$=Ae(`error
		`),yt=Tt("input"),zt=Gt(),Ft=Tt("button"),Ht=Ae("reset model"),Vt=Gt(),ne=Tt("br"),we=Gt(),Pe=Tt("button"),Pe.textContent="export model as FOLD",mn=Gt(),ie=Tt("br"),et(e,"type","file"),et(e,"class","svelte-1v7duwr"),et(o,"type","checkbox"),et(o,"class","svelte-1v7duwr"),et(s,"class","svelte-1v7duwr"),et(c,"class","svelte-1v7duwr"),et(h,"type","range"),et(h,"min","0"),et(h,"max","1"),et(h,"step","0.01"),h.disabled=f=!i[2],et(h,"class","svelte-1v7duwr"),et(d,"class","svelte-1v7duwr"),et(p,"type","radio"),et(p,"id","radio-webgl-tool-trackball"),et(p,"name","radio-webgl-tool"),p.__value="trackball",p.value=p.__value,et(p,"class","svelte-1v7duwr"),i[27][0].push(p),et(_,"for","radio-webgl-tool-trackball"),et(_,"class","svelte-1v7duwr"),et(x,"type","radio"),et(x,"id","radio-webgl-tool-pull"),et(x,"name","radio-webgl-tool"),x.__value="pull",x.value=x.__value,et(x,"class","svelte-1v7duwr"),i[27][0].push(x),et(y,"for","radio-webgl-tool-pull"),et(y,"class","svelte-1v7duwr"),et(T,"type","checkbox"),T.disabled=D=!i[2],et(T,"class","svelte-1v7duwr"),et(A,"class","svelte-1v7duwr"),et(F,"type","checkbox"),et(F,"class","svelte-1v7duwr"),et(q,"class","svelte-1v7duwr"),et(G,"type","checkbox"),G.disabled=i[3],et(G,"class","svelte-1v7duwr"),et(K,"class","svelte-1v7duwr"),et(I,"type","text"),et(I,"class","medium svelte-1v7duwr"),et(it,"class","svelte-1v7duwr"),et(N,"type","text"),et(N,"class","medium svelte-1v7duwr"),et(ot,"class","svelte-1v7duwr"),et(lt,"type","text"),et(lt,"class","medium svelte-1v7duwr"),et(nt,"class","svelte-1v7duwr"),et(_t,"type","range"),et(_t,"min","0"),et(_t,"max","1"),et(_t,"step","0.02"),et(_t,"class","svelte-1v7duwr"),et(Et,"type","text"),et(Et,"class","medium svelte-1v7duwr"),et(Y,"class","svelte-1v7duwr"),et(Zt,"class","svelte-1v7duwr"),et(Qt,"type","radio"),et(Qt,"name","radio-integration"),et(Qt,"id","radio-integration-euler"),Qt.__value="euler",Qt.value=Qt.__value,et(Qt,"class","svelte-1v7duwr"),i[27][1].push(Qt),et(E,"for","radio-integration-euler"),et(E,"class","svelte-1v7duwr"),et(W,"type","radio"),et(W,"name","radio-integration"),et(W,"id","radio-integration-verlet"),W.__value="verlet",W.value=W.__value,et(W,"class","svelte-1v7duwr"),i[27][1].push(W),et(ft,"for","radio-integration-verlet"),et(ft,"class","svelte-1v7duwr"),et(Q,"type","text"),et(Q,"class","short svelte-1v7duwr"),et(Pt,"class","svelte-1v7duwr"),et(Mt,"type","range"),et(Mt,"min","10"),et(Mt,"max","100"),et(Mt,"step","1"),et(Mt,"class","svelte-1v7duwr"),et(It,"type","text"),et(It,"class","short svelte-1v7duwr"),et(wt,"class","svelte-1v7duwr"),et(Yt,"type","range"),et(Yt,"min","0"),et(Yt,"max","5"),et(Yt,"step","0.02"),et(Yt,"class","svelte-1v7duwr"),et(pt,"type","text"),et(pt,"class","short svelte-1v7duwr"),et(j,"class","svelte-1v7duwr"),et(Rt,"type","range"),et(Rt,"min","0"),et(Rt,"max","3"),et(Rt,"step","0.01"),et(Rt,"class","svelte-1v7duwr"),et(Xt,"type","text"),et(Xt,"class","short svelte-1v7duwr"),et(he,"class","svelte-1v7duwr"),et(ee,"type","range"),et(ee,"min","0"),et(ee,"max","3"),et(ee,"step","0.01"),et(ee,"class","svelte-1v7duwr"),et(pn,"type","text"),et(pn,"class","short svelte-1v7duwr"),et(Yn,"class","svelte-1v7duwr"),et(B,"type","range"),et(B,"min","0.01"),et(B,"max","0.5"),et(B,"step","0.01"),et(B,"class","svelte-1v7duwr"),et(yt,"type","text"),et(yt,"class","long svelte-1v7duwr"),yt.disabled=Dt=!i[2],et(z,"class","svelte-1v7duwr"),Ft.disabled=Ut=!i[2],et(Ft,"class","svelte-1v7duwr"),et(ne,"class","svelte-1v7duwr"),et(Pe,"class","svelte-1v7duwr"),et(ie,"class","svelte-1v7duwr"),et(t,"class",jh("container")+" svelte-1v7duwr")},m(se,Bt){Kr(se,t,Bt),st(t,e),st(t,n),st(t,s),st(s,r),st(s,o),o.checked=i[2],st(t,a),st(t,c),st(t,l),st(t,h),jt(h,i[4]),st(t,u),st(t,d),st(t,g),st(t,p),p.checked=p.__value===i[1],st(t,m),st(t,_),st(t,S),st(t,x),x.checked=x.__value===i[1],st(t,M),st(t,y),st(t,b),st(t,A),st(A,v),st(A,T),T.checked=i[3],st(t,R),st(t,q),st(q,P),st(q,F),F.checked=i[5],st(t,k),st(t,K),st(K,tt),st(K,G),G.checked=i[6],st(t,rt),st(t,it),st(it,H),st(it,I),jt(I,i[8]),st(t,Z),st(t,ot),st(ot,ut),st(ot,N),jt(N,i[9]),st(t,O),st(t,nt),st(nt,V),st(nt,lt),jt(lt,i[10]),st(t,Lt),st(t,_t),jt(_t,i[11]),st(t,St),st(t,Y),st(Y,xt),st(Y,Et),jt(Et,i[7]),st(t,ct),st(t,Zt),st(t,kt),st(t,Qt),Qt.checked=Qt.__value===i[12],st(t,ze),st(t,E),st(t,w),st(t,W),W.checked=W.__value===i[12],st(t,ht),st(t,ft),st(t,mt),st(t,Pt),st(Pt,gt),st(Pt,Q),jt(Q,i[13]),st(t,At),st(t,Mt),jt(Mt,i[13]),st(t,vt),st(t,wt),st(wt,Ct),st(wt,It),jt(It,i[14]),st(t,Jt),st(t,Yt),jt(Yt,i[14]),st(t,L),st(t,j),st(j,at),st(j,pt),jt(pt,i[15]),st(t,bt),st(t,Rt),jt(Rt,i[15]),st(t,ue),st(t,he),st(he,dn),st(he,Xt),jt(Xt,i[16]),st(t,Ze),st(t,ee),jt(ee,i[16]),st(t,os),st(t,Yn),st(Yn,Ks),st(Yn,pn),jt(pn,i[17]),st(t,C),st(t,B),jt(B,i[17]),st(t,X),st(t,z),st(z,$),st(z,yt),jt(yt,i[0]),st(t,zt),st(t,Ft),st(Ft,Ht),st(t,Vt),st(t,ne),st(t,we),st(t,Pe),st(t,mn),st(t,ie),Nt||(vi=[qt(e,"change",i[23]),qt(o,"change",i[24]),qt(h,"change",i[25]),qt(h,"input",i[25]),qt(p,"change",i[26]),qt(x,"change",i[28]),qt(T,"change",i[29]),qt(F,"change",i[30]),qt(G,"change",i[31]),qt(I,"input",i[32]),qt(N,"input",i[33]),qt(lt,"input",i[34]),qt(_t,"change",i[35]),qt(_t,"input",i[35]),qt(Et,"input",i[36]),qt(Qt,"change",i[37]),qt(W,"change",i[38]),qt(Q,"input",i[39]),qt(Mt,"change",i[40]),qt(Mt,"input",i[40]),qt(It,"input",i[41]),qt(Yt,"change",i[42]),qt(Yt,"input",i[42]),qt(pt,"input",i[43]),qt(Rt,"change",i[44]),qt(Rt,"input",i[44]),qt(Xt,"input",i[45]),qt(ee,"change",i[46]),qt(ee,"input",i[46]),qt(pn,"input",i[47]),qt(B,"change",i[48]),qt(B,"input",i[48]),qt(yt,"input",i[49]),qt(Ft,"click",function(){Ha(i[18])&&i[18].apply(this,arguments)}),qt(Pe,"click",i[20])],Nt=!0)},p(se,Bt){i=se,Bt[0]&4&&(o.checked=i[2]),Bt[0]&4&&f!==(f=!i[2])&&(h.disabled=f),Bt[0]&16&&jt(h,i[4]),Bt[0]&2&&(p.checked=p.__value===i[1]),Bt[0]&2&&(x.checked=x.__value===i[1]),Bt[0]&4&&D!==(D=!i[2])&&(T.disabled=D),Bt[0]&8&&(T.checked=i[3]),Bt[0]&32&&(F.checked=i[5]),Bt[0]&8&&(G.disabled=i[3]),Bt[0]&64&&(G.checked=i[6]),Bt[0]&256&&I.value!==i[8]&&jt(I,i[8]),Bt[0]&512&&N.value!==i[9]&&jt(N,i[9]),Bt[0]&1024&&lt.value!==i[10]&&jt(lt,i[10]),Bt[0]&2048&&jt(_t,i[11]),Bt[0]&128&&Et.value!==i[7]&&jt(Et,i[7]),Bt[0]&4096&&(Qt.checked=Qt.__value===i[12]),Bt[0]&4096&&(W.checked=W.__value===i[12]),Bt[0]&8192&&Q.value!==i[13]&&jt(Q,i[13]),Bt[0]&8192&&jt(Mt,i[13]),Bt[0]&16384&&It.value!==i[14]&&jt(It,i[14]),Bt[0]&16384&&jt(Yt,i[14]),Bt[0]&32768&&pt.value!==i[15]&&jt(pt,i[15]),Bt[0]&32768&&jt(Rt,i[15]),Bt[0]&65536&&Xt.value!==i[16]&&jt(Xt,i[16]),Bt[0]&65536&&jt(ee,i[16]),Bt[0]&131072&&pn.value!==i[17]&&jt(pn,i[17]),Bt[0]&131072&&jt(B,i[17]),Bt[0]&4&&Dt!==(Dt=!i[2])&&(yt.disabled=Dt),Bt[0]&1&&yt.value!==i[0]&&jt(yt,i[0]),Bt[0]&4&&Ut!==(Ut=!i[2])&&(Ft.disabled=Ut)},i:Ln,o:Ln,d(se){se&&ks(t),i[27][0].splice(i[27][0].indexOf(p),1),i[27][0].splice(i[27][0].indexOf(x),1),i[27][1].splice(i[27][1].indexOf(Qt),1),i[27][1].splice(i[27][1].indexOf(W),1),Nt=!1,Os(vi)}}}function wx(i,t,e){let{origami:n={}}=t,{tool:s}=t,{active:r}=t,{strain:o}=t,{foldAmount:a}=t,{showTouches:c}=t,{showShadows:l}=t,{backgroundColor:h}=t,{frontColor:f}=t,{backColor:u}=t,{lineColor:d}=t,{lineOpacity:g}=t,{error:p}=t,{reset:m}=t,{integration:_}=t,{axialStiffness:S}=t,{faceStiffness:x}=t,{joinStiffness:M}=t,{creaseStiffness:y}=t,{dampingRatio:b}=t,{exportModel:A}=t,v;const T=()=>{const ct=document.createElement("a");ct.style="display: none",document.body.appendChild(ct);const Zt=new Blob([JSON.stringify(A())],{type:"octet/stream"}),kt=window.URL.createObjectURL(Zt);ct.href=kt,ct.download="origami.fold",ct.click(),window.URL.revokeObjectURL(kt)},D=[[],[]];function R(){v=this.files,e(19,v)}function q(){r=this.checked,e(2,r)}function P(){a=Jn(this.value),e(4,a)}function F(){s=this.__value,e(1,s)}function k(){s=this.__value,e(1,s)}function K(){o=this.checked,e(3,o)}function tt(){c=this.checked,e(5,c)}function G(){l=this.checked,e(6,l)}function rt(){f=this.value,e(8,f)}function it(){u=this.value,e(9,u)}function H(){d=this.value,e(10,d)}function I(){g=Jn(this.value),e(11,g)}function Z(){h=this.value,e(7,h)}function ot(){_=this.__value,e(12,_)}function ut(){_=this.__value,e(12,_)}function N(){S=this.value,e(13,S)}function O(){S=Jn(this.value),e(13,S)}function nt(){x=this.value,e(14,x)}function V(){x=Jn(this.value),e(14,x)}function lt(){M=this.value,e(15,M)}function Lt(){M=Jn(this.value),e(15,M)}function _t(){y=this.value,e(16,y)}function St(){y=Jn(this.value),e(16,y)}function Y(){b=this.value,e(17,b)}function xt(){b=Jn(this.value),e(17,b)}function Et(){p=this.value,e(0,p)}return i.$$set=ct=>{"origami"in ct&&e(21,n=ct.origami),"tool"in ct&&e(1,s=ct.tool),"active"in ct&&e(2,r=ct.active),"strain"in ct&&e(3,o=ct.strain),"foldAmount"in ct&&e(4,a=ct.foldAmount),"showTouches"in ct&&e(5,c=ct.showTouches),"showShadows"in ct&&e(6,l=ct.showShadows),"backgroundColor"in ct&&e(7,h=ct.backgroundColor),"frontColor"in ct&&e(8,f=ct.frontColor),"backColor"in ct&&e(9,u=ct.backColor),"lineColor"in ct&&e(10,d=ct.lineColor),"lineOpacity"in ct&&e(11,g=ct.lineOpacity),"error"in ct&&e(0,p=ct.error),"reset"in ct&&e(18,m=ct.reset),"integration"in ct&&e(12,_=ct.integration),"axialStiffness"in ct&&e(13,S=ct.axialStiffness),"faceStiffness"in ct&&e(14,x=ct.faceStiffness),"joinStiffness"in ct&&e(15,M=ct.joinStiffness),"creaseStiffness"in ct&&e(16,y=ct.creaseStiffness),"dampingRatio"in ct&&e(17,b=ct.dampingRatio),"exportModel"in ct&&e(22,A=ct.exportModel)},i.$$.update=()=>{if(i.$$.dirty[0]&524288&&v){const ct=new FileReader;ct.onload=Zt=>{try{e(21,n=JSON.parse(Zt.target.result))}catch(kt){window.alert(kt)}},v.length&&ct.readAsText(v[0])}},[p,s,r,o,a,c,l,h,f,u,d,g,_,S,x,M,y,b,m,v,T,n,A,R,q,P,F,D,k,K,tt,G,rt,it,H,I,Z,ot,ut,N,O,nt,V,lt,Lt,_t,St,Y,xt,Et]}class Cx extends Gs{constructor(t){super(),Vs(this,t,wx,Sx,Ns,{origami:21,tool:1,active:2,strain:3,foldAmount:4,showTouches:5,showShadows:6,backgroundColor:7,frontColor:8,backColor:9,lineColor:10,lineOpacity:11,error:0,reset:18,integration:12,axialStiffness:13,faceStiffness:14,joinStiffness:15,creaseStiffness:16,dampingRatio:17,exportModel:22},null,[-1,-1])}}const Tx=`{
	"file_spec":1,
	"file_creator":"Rabbit Ear",
	"file_author":"Kraft",
	"file_classes":["singleModel"],
	"frame_classes":["creasePattern"],
	"vertices_coords":[
		[0,0],[1,0],[1,1],[0,1],[0.5,0.5],[0.5,0.792893218813],[0.207106781187,0.5],[0.5,0.207106781187],[0.792893218813,0.5],[0.66591068104,0.5],[0.716772751325,0.576120467489],[0.865619448968,0.675576651179],[0.5,0.33408931896],[0.423879532511,0.283227248675],[0.324423348821,0.134380551032],[0.5,0.66591068104],[0.576120467489,0.716772751325],[0.675576651179,0.865619448968],[0.33408931896,0.5],[0.283227248675,0.423879532511],[0.134380551032,0.324423348821],[0.5,1],[0.5,0],[0.476712746783,0.905175938977],[0.523287253217,0.094824061023],[0.461939766256,0.808658283817],[0.404137552497,0.72996392064],[0.353553390593,0.646446609407],[0.27003607936,0.595862447503],[0.191341716183,0.538060233744],[0.094824061023,0.523287253217],[0,0.5],[0.538060233744,0.191341716183],[0.595862447503,0.27003607936],[0.646446609407,0.353553390593],[0.72996392064,0.404137552497],[0.808658283817,0.461939766256],[0.905175938977,0.476712746783],[1,0.5],[0.373017462227,0.207106781187],[0.207106781187,0.373017462227],[0.180807836521,0.436508731113],[0.117316567635,0.410209786448],[0,0.410209786448],[0.436508731113,0.180807836521],[0.410209786448,0.117316567635],[0.410209786448,0],[0.180807836521,1],[0.150809885227,0.970002048705],[0.16704465948,0.930807836521],[0.127850447296,0.914573062268],[0.127850447296,0.872149552704],[0.085426937732,0.872149552704],[0.069192163479,0.83295534052],[0.029997951295,0.849190114773],[0,0.819192163479]
	],
	"faces_vertices":[
		[8,11,10],[11,8,36,37],[9,8,10],[8,9,35,36],[9,10,16,15,4],[10,11,2,17,16],[12,13,7],[13,12,4,18,19],[12,7,32,33],[4,12,33,34],[5,17,23,25],[17,5,16],[4,15,26,27],[15,16,5],[0,20,42,43],[20,0,14,39,40],[6,18,28,29],[18,6,19],[22,1,24],[14,0,46,45],[2,21,23,17],[23,21,47,48],[18,4,27,28],[22,24,45,46],[24,1,32],[9,4,34,35],[27,26,50,51],[28,27,51,52],[29,28,52,53],[30,31,43,42],[31,30,54,55],[6,29,30,42,41],[26,15,5,25],[24,32,7,44,45],[33,32,1],[34,33,1],[35,34,1],[36,35,1],[37,36,1],[37,38,2,11],[38,37,1],[7,13,39,44],[39,14,44],[39,13,19,40],[20,40,41],[40,19,6,41],[41,42,20],[44,14,45],[25,23,48,49],[26,25,49,50],[47,3,48],[30,29,53,54],[50,49,3],[51,50,3],[52,51,3],[53,52,3],[54,53,3],[55,54,3],[3,49,48]],"edges_vertices":[[8,11],[9,8],[9,10],[10,11],[10,8],[12,13],[7,12],[12,4],[5,17],[4,15],[15,16],[0,20],[6,18],[18,19],[22,1],[0,14],[21,2],[21,23],[18,4],[22,24],[24,1],[4,9],[16,10],[26,27],[27,28],[28,29],[30,31],[29,6],[28,18],[27,4],[26,15],[25,5],[24,32],[32,33],[33,34],[34,35],[35,36],[36,37],[37,38],[1,38],[8,36],[36,1],[11,37],[37,1],[9,35],[35,1],[7,32],[32,1],[12,33],[33,1],[4,34],[34,1],[13,7],[14,39],[39,13],[19,13],[20,40],[40,19],[6,19],[40,39],[40,41],[41,42],[20,41],[41,6],[30,42],[42,20],[42,43],[0,43],[43,31],[0,46],[46,22],[39,44],[14,44],[44,7],[45,46],[44,45],[14,45],[45,24],[38,2],[23,25],[17,23],[2,17],[2,11],[25,26],[5,15],[16,5],[17,16],[3,47],[47,21],[30,29],[23,48],[49,50],[50,51],[51,52],[52,53],[53,54],[54,55],[31,55],[55,3],[3,54],[54,30],[3,49],[49,25],[3,53],[53,29],[3,52],[52,28],[3,51],[51,27],[3,50],[50,26],[47,48],[48,49],[3,48]
	],
	"edges_assignment":[
		"M","M","V","M","V","V","M","M","M","M","V","M","M","V","B","M","B","M","M","M","V","M","V","V","V","M","M","M","M","V","M","M","V","M","V","V","M","V","M","B","M","M","V","V","M","M","M","M","M","M","V","M","V","M","M","V","M","M","V","M","V","M","M","M","V","V","V","B","B","B","B","V","M","M","V","M","V","V","B","V","V","M","M","M","M","V","M","B","B","V","V","V","M","M","V","M","V","B","B","V","V","M","M","M","M","M","M","V","M","M","M","V","M","V"
	]
}
`;function Ax(i){let t,e,n,s,r,o,a,c,l,h,f,u,d,g,p,m,_,S,x,M,y,b,A,v,T,D;function R(Y){i[21](Y)}function q(Y){i[22](Y)}function P(Y){i[23](Y)}function F(Y){i[24](Y)}function k(Y){i[25](Y)}function K(Y){i[26](Y)}function tt(Y){i[27](Y)}function G(Y){i[28](Y)}function rt(Y){i[29](Y)}function it(Y){i[30](Y)}function H(Y){i[31](Y)}function I(Y){i[32](Y)}function Z(Y){i[33](Y)}function ot(Y){i[34](Y)}function ut(Y){i[35](Y)}function N(Y){i[36](Y)}function O(Y){i[37](Y)}function nt(Y){i[38](Y)}let V={error:i[19],reset:i[12],exportModel:i[20]};i[0]!==void 0&&(V.origami=i[0]),i[1]!==void 0&&(V.tool=i[1]),i[2]!==void 0&&(V.active=i[2]),i[3]!==void 0&&(V.strain=i[3]),i[4]!==void 0&&(V.foldAmount=i[4]),i[5]!==void 0&&(V.showTouches=i[5]),i[6]!==void 0&&(V.showShadows=i[6]),i[7]!==void 0&&(V.backgroundColor=i[7]),i[8]!==void 0&&(V.frontColor=i[8]),i[9]!==void 0&&(V.backColor=i[9]),i[10]!==void 0&&(V.lineColor=i[10]),i[11]!==void 0&&(V.lineOpacity=i[11]),i[13]!==void 0&&(V.integration=i[13]),i[14]!==void 0&&(V.axialStiffness=i[14]),i[15]!==void 0&&(V.faceStiffness=i[15]),i[16]!==void 0&&(V.joinStiffness=i[16]),i[17]!==void 0&&(V.creaseStiffness=i[17]),i[18]!==void 0&&(V.dampingRatio=i[18]),e=new Cx({props:V}),re.push(()=>de(e,"origami",R)),re.push(()=>de(e,"tool",q)),re.push(()=>de(e,"active",P)),re.push(()=>de(e,"strain",F)),re.push(()=>de(e,"foldAmount",k)),re.push(()=>de(e,"showTouches",K)),re.push(()=>de(e,"showShadows",tt)),re.push(()=>de(e,"backgroundColor",G)),re.push(()=>de(e,"frontColor",rt)),re.push(()=>de(e,"backColor",it)),re.push(()=>de(e,"lineColor",H)),re.push(()=>de(e,"lineOpacity",I)),re.push(()=>de(e,"integration",Z)),re.push(()=>de(e,"axialStiffness",ot)),re.push(()=>de(e,"faceStiffness",ut)),re.push(()=>de(e,"joinStiffness",N)),re.push(()=>de(e,"creaseStiffness",O)),re.push(()=>de(e,"dampingRatio",nt));function lt(Y){i[39](Y)}function Lt(Y){i[40](Y)}function _t(Y){i[41](Y)}let St={origami:i[0],active:i[2],foldAmount:i[4],strain:i[3],tool:i[1],showTouches:i[5],showShadows:i[6],backgroundColor:i[7],frontColor:i[8],backColor:i[9],lineColor:i[10],lineOpacity:i[11],integration:i[13],axialStiffness:i[14],faceStiffness:i[15],joinStiffness:i[16],creaseStiffness:i[17],dampingRatio:i[18]};return i[19]!==void 0&&(St.error=i[19]),i[12]!==void 0&&(St.reset=i[12]),i[20]!==void 0&&(St.exportModel=i[20]),b=new bx({props:St}),re.push(()=>de(b,"error",lt)),re.push(()=>de(b,"reset",Lt)),re.push(()=>de(b,"exportModel",_t)),{c(){t=Tt("div"),Yr(e.$$.fragment),y=Gt(),Yr(b.$$.fragment),et(t,"class","App svelte-htc7ui")},m(Y,xt){Kr(Y,t,xt),Es(e,t,null),st(t,y),Es(b,t,null),D=!0},p(Y,xt){const Et={};xt[0]&524288&&(Et.error=Y[19]),xt[0]&4096&&(Et.reset=Y[12]),xt[0]&1048576&&(Et.exportModel=Y[20]),!n&&xt[0]&1&&(n=!0,Et.origami=Y[0],fe(()=>n=!1)),!s&&xt[0]&2&&(s=!0,Et.tool=Y[1],fe(()=>s=!1)),!r&&xt[0]&4&&(r=!0,Et.active=Y[2],fe(()=>r=!1)),!o&&xt[0]&8&&(o=!0,Et.strain=Y[3],fe(()=>o=!1)),!a&&xt[0]&16&&(a=!0,Et.foldAmount=Y[4],fe(()=>a=!1)),!c&&xt[0]&32&&(c=!0,Et.showTouches=Y[5],fe(()=>c=!1)),!l&&xt[0]&64&&(l=!0,Et.showShadows=Y[6],fe(()=>l=!1)),!h&&xt[0]&128&&(h=!0,Et.backgroundColor=Y[7],fe(()=>h=!1)),!f&&xt[0]&256&&(f=!0,Et.frontColor=Y[8],fe(()=>f=!1)),!u&&xt[0]&512&&(u=!0,Et.backColor=Y[9],fe(()=>u=!1)),!d&&xt[0]&1024&&(d=!0,Et.lineColor=Y[10],fe(()=>d=!1)),!g&&xt[0]&2048&&(g=!0,Et.lineOpacity=Y[11],fe(()=>g=!1)),!p&&xt[0]&8192&&(p=!0,Et.integration=Y[13],fe(()=>p=!1)),!m&&xt[0]&16384&&(m=!0,Et.axialStiffness=Y[14],fe(()=>m=!1)),!_&&xt[0]&32768&&(_=!0,Et.faceStiffness=Y[15],fe(()=>_=!1)),!S&&xt[0]&65536&&(S=!0,Et.joinStiffness=Y[16],fe(()=>S=!1)),!x&&xt[0]&131072&&(x=!0,Et.creaseStiffness=Y[17],fe(()=>x=!1)),!M&&xt[0]&262144&&(M=!0,Et.dampingRatio=Y[18],fe(()=>M=!1)),e.$set(Et);const ct={};xt[0]&1&&(ct.origami=Y[0]),xt[0]&4&&(ct.active=Y[2]),xt[0]&16&&(ct.foldAmount=Y[4]),xt[0]&8&&(ct.strain=Y[3]),xt[0]&2&&(ct.tool=Y[1]),xt[0]&32&&(ct.showTouches=Y[5]),xt[0]&64&&(ct.showShadows=Y[6]),xt[0]&128&&(ct.backgroundColor=Y[7]),xt[0]&256&&(ct.frontColor=Y[8]),xt[0]&512&&(ct.backColor=Y[9]),xt[0]&1024&&(ct.lineColor=Y[10]),xt[0]&2048&&(ct.lineOpacity=Y[11]),xt[0]&8192&&(ct.integration=Y[13]),xt[0]&16384&&(ct.axialStiffness=Y[14]),xt[0]&32768&&(ct.faceStiffness=Y[15]),xt[0]&65536&&(ct.joinStiffness=Y[16]),xt[0]&131072&&(ct.creaseStiffness=Y[17]),xt[0]&262144&&(ct.dampingRatio=Y[18]),!A&&xt[0]&524288&&(A=!0,ct.error=Y[19],fe(()=>A=!1)),!v&&xt[0]&4096&&(v=!0,ct.reset=Y[12],fe(()=>v=!1)),!T&&xt[0]&1048576&&(T=!0,ct.exportModel=Y[20],fe(()=>T=!1)),b.$set(ct)},i(Y){D||(As(e.$$.fragment,Y),As(b.$$.fragment,Y),D=!0)},o(Y){Xr(e.$$.fragment,Y),Xr(b.$$.fragment,Y),D=!1},d(Y){Y&&ks(t),Ps(e),Ps(b)}}}function Ex(i,t,e){let n=JSON.parse(Tx),s="trackball",r=!0,o=!1,a=.15,c=!0,l=!1,h="#1b1b1b",f="#ec008b",u="white",d="black",g=.5,p=()=>{},m="euler",_=20,S=.2,x=.7,M=.7,y=.45,b=0,A;function v(V){n=V,e(0,n)}function T(V){s=V,e(1,s)}function D(V){r=V,e(2,r)}function R(V){o=V,e(3,o)}function q(V){a=V,e(4,a)}function P(V){c=V,e(5,c)}function F(V){l=V,e(6,l)}function k(V){h=V,e(7,h)}function K(V){f=V,e(8,f)}function tt(V){u=V,e(9,u)}function G(V){d=V,e(10,d)}function rt(V){g=V,e(11,g)}function it(V){m=V,e(13,m)}function H(V){_=V,e(14,_)}function I(V){S=V,e(15,S)}function Z(V){x=V,e(16,x)}function ot(V){M=V,e(17,M)}function ut(V){y=V,e(18,y)}function N(V){b=V,e(19,b)}function O(V){p=V,e(12,p)}function nt(V){A=V,e(20,A)}return[n,s,r,o,a,c,l,h,f,u,d,g,p,m,_,S,x,M,y,b,A,v,T,D,R,q,P,F,k,K,tt,G,rt,it,H,I,Z,ot,ut,N,O,nt]}class Px extends Gs{constructor(t){super(),Vs(this,t,Ex,Ax,Ns,{},null,[-1,-1])}}new Px({target:document.getElementById("app")});
