"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[1125],{80540:(t,r,s)=>{s.d(r,{Z:()=>l});var e,i=s(61e3),h=s(86281),n=s(1031),c=s(35600),u=s(31437),a=s(77160);!function(t){t[t.COL0ROW0=0]="COL0ROW0",t[t.COL0ROW1=1]="COL0ROW1",t[t.COL0ROW2=2]="COL0ROW2",t[t.COL1ROW0=3]="COL1ROW0",t[t.COL1ROW1=4]="COL1ROW1",t[t.COL1ROW2=5]="COL1ROW2",t[t.COL2ROW0=6]="COL2ROW0",t[t.COL2ROW1=7]="COL2ROW1",t[t.COL2ROW2=8]="COL2ROW2"}(e||(e={}));const o=Object.freeze([1,0,0,0,1,0,0,0,1]);class l extends i.Z{static get IDENTITY(){return function(){k||(k=new l,Object.freeze(k));return k}()}static get ZERO(){return function(){f||(f=new l([0,0,0,0,0,0,0,0,0]),Object.freeze(f));return f}()}get ELEMENTS(){return 9}get RANK(){return 3}get INDICES(){return e}constructor(t,...r){super(-0,-0,-0,-0,-0,-0,-0,-0,-0),1===arguments.length&&Array.isArray(t)?this.copy(t):r.length>0?this.copy([t,...r]):this.identity()}copy(t){return this[0]=t[0],this[1]=t[1],this[2]=t[2],this[3]=t[3],this[4]=t[4],this[5]=t[5],this[6]=t[6],this[7]=t[7],this[8]=t[8],this.check()}identity(){return this.copy(o)}fromObject(t){return this.check()}fromQuaternion(t){return c.en(this,t),this.check()}set(t,r,s,e,i,h,n,c,u){return this[0]=t,this[1]=r,this[2]=s,this[3]=e,this[4]=i,this[5]=h,this[6]=n,this[7]=c,this[8]=u,this.check()}setRowMajor(t,r,s,e,i,h,n,c,u){return this[0]=t,this[1]=e,this[2]=n,this[3]=r,this[4]=i,this[5]=c,this[6]=s,this[7]=h,this[8]=u,this.check()}determinant(){return c.GH(this)}transpose(){return c.p4(this,this),this.check()}invert(){return c.U_(this,this),this.check()}multiplyLeft(t){return c.Jp(this,t,this),this.check()}multiplyRight(t){return c.Jp(this,this,t),this.check()}rotate(t){return c.U1(this,this,t),this.check()}scale(t){return Array.isArray(t)?c.bA(this,this,t):c.bA(this,this,[t,t]),this.check()}translate(t){return c.Iu(this,this,t),this.check()}transform(t,r){let s;switch(t.length){case 2:s=u.kK(r||[-0,-0],t,this);break;case 3:s=a.kK(r||[-0,-0,-0],t,this);break;case 4:s=(0,n._x)(r||[-0,-0,-0,-0],t,this);break;default:throw new Error("Illegal vector")}return(0,h.IL)(s,t.length),s}transformVector(t,r){return this.transform(t,r)}transformVector2(t,r){return this.transform(t,r)}transformVector3(t,r){return this.transform(t,r)}}let f,k},79108:(t,r,s)=>{s.d(r,{Z:()=>T});var e=s(6357),i=s(86281),h=s(89521),n=s(14034),c=s(77160),u=s(1031);let a;class o extends h.Z{static get ZERO(){return a||(a=new o(0,0,0,0),Object.freeze(a)),a}constructor(t=0,r=0,s=0,e=0){super(-0,-0,-0,-0),(0,n.kJ)(t)&&1===arguments.length?this.copy(t):(n.vc.debug&&((0,i.u5)(t),(0,i.u5)(r),(0,i.u5)(s),(0,i.u5)(e)),this[0]=t,this[1]=r,this[2]=s,this[3]=e)}set(t,r,s,e){return this[0]=t,this[1]=r,this[2]=s,this[3]=e,this.check()}copy(t){return this[0]=t[0],this[1]=t[1],this[2]=t[2],this[3]=t[3],this.check()}fromObject(t){return n.vc.debug&&((0,i.u5)(t.x),(0,i.u5)(t.y),(0,i.u5)(t.z),(0,i.u5)(t.w)),this[0]=t.x,this[1]=t.y,this[2]=t.z,this[3]=t.w,this}toObject(t){return t.x=this[0],t.y=this[1],t.z=this[2],t.w=this[3],t}get ELEMENTS(){return 4}get z(){return this[2]}set z(t){this[2]=(0,i.u5)(t)}get w(){return this[3]}set w(t){this[3]=(0,i.u5)(t)}transform(t){return c.fF(this,this,t),this.check()}transformByMatrix3(t){return(0,u._x)(this,this,t),this.check()}transformByMatrix2(t){return(0,u.G7)(this,this,t),this.check()}transformByQuaternion(t){return c.VC(this,this,t),this.check()}applyMatrix4(t){return t.transform(this,this),this}}var l=s(49685),f=s(35600),k=s(98333);function O(){var t=new l.WT(4);return l.WT!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0),t[3]=1,t}function v(t,r,s){s*=.5;var e=Math.sin(s);return t[0]=e*r[0],t[1]=e*r[1],t[2]=e*r[2],t[3]=Math.cos(s),t}function y(t,r,s){var e=r[0],i=r[1],h=r[2],n=r[3],c=s[0],u=s[1],a=s[2],o=s[3];return t[0]=e*o+n*c+i*a-h*u,t[1]=i*o+n*u+h*c-e*a,t[2]=h*o+n*a+e*u-i*c,t[3]=n*o-e*c-i*u-h*a,t}function p(t,r,s,e){var i,h,n,c,u,a=r[0],o=r[1],f=r[2],k=r[3],O=s[0],v=s[1],y=s[2],p=s[3];return(h=a*O+o*v+f*y+k*p)<0&&(h=-h,O=-O,v=-v,y=-y,p=-p),1-h>l.Ib?(i=Math.acos(h),n=Math.sin(i),c=Math.sin((1-e)*i)/n,u=Math.sin(e*i)/n):(c=1-e,u=e),t[0]=c*a+u*O,t[1]=c*o+u*v,t[2]=c*f+u*y,t[3]=c*k+u*p,t}function g(t,r){var s,e=r[0]+r[4]+r[8];if(e>0)s=Math.sqrt(e+1),t[3]=.5*s,s=.5/s,t[0]=(r[5]-r[7])*s,t[1]=(r[6]-r[2])*s,t[2]=(r[1]-r[3])*s;else{var i=0;r[4]>r[0]&&(i=1),r[8]>r[3*i+i]&&(i=2);var h=(i+1)%3,n=(i+2)%3;s=Math.sqrt(r[3*i+i]-r[3*h+h]-r[3*n+n]+1),t[i]=.5*s,s=.5/s,t[3]=(r[3*h+n]-r[3*n+h])*s,t[h]=(r[3*h+i]+r[3*i+h])*s,t[n]=(r[3*n+i]+r[3*i+n])*s}return t}k.d9,k.al,k.JG,k.t8;var m,M,R,C,L,b,w=k.IH,A=k.bA,W=k.AK,d=k.t7,x=k.kE,E=k.we,z=k.Fv,I=(k.I6,k.fS,m=c.Ue(),M=c.al(1,0,0),R=c.al(0,1,0),function(t,r,s){var e=c.AK(r,s);return e<-.999999?(c.kC(m,M,r),c.Zh(m)<1e-6&&c.kC(m,R,r),c.Fv(m,m),v(t,m,Math.PI),t):e>.999999?(t[0]=0,t[1]=0,t[2]=0,t[3]=1,t):(c.kC(m,r,s),t[0]=m[0],t[1]=m[1],t[2]=m[2],t[3]=1+e,z(t,t))});C=O(),L=O(),b=f.Ue();const j=[0,0,0,1];class T extends e.Z{constructor(t=0,r=0,s=0,e=1){super(-0,-0,-0,-0),Array.isArray(t)&&1===arguments.length?this.copy(t):this.set(t,r,s,e)}copy(t){return this[0]=t[0],this[1]=t[1],this[2]=t[2],this[3]=t[3],this.check()}set(t,r,s,e){return this[0]=t,this[1]=r,this[2]=s,this[3]=e,this.check()}fromObject(t){return this[0]=t.x,this[1]=t.y,this[2]=t.z,this[3]=t.w,this.check()}fromMatrix3(t){return g(this,t),this.check()}fromAxisRotation(t,r){return v(this,t,r),this.check()}identity(){var t;return(t=this)[0]=0,t[1]=0,t[2]=0,t[3]=1,this.check()}setAxisAngle(t,r){return this.fromAxisRotation(t,r)}get ELEMENTS(){return 4}get x(){return this[0]}set x(t){this[0]=(0,i.u5)(t)}get y(){return this[1]}set y(t){this[1]=(0,i.u5)(t)}get z(){return this[2]}set z(t){this[2]=(0,i.u5)(t)}get w(){return this[3]}set w(t){this[3]=(0,i.u5)(t)}len(){return x(this)}lengthSquared(){return E(this)}dot(t){return W(this,t)}rotationTo(t,r){return I(this,t,r),this.check()}add(t){return w(this,this,t),this.check()}calculateW(){var t,r,s,e,i;return t=this,s=(r=this)[0],e=r[1],i=r[2],t[0]=s,t[1]=e,t[2]=i,t[3]=Math.sqrt(Math.abs(1-s*s-e*e-i*i)),this.check()}conjugate(){var t,r;return r=this,(t=this)[0]=-r[0],t[1]=-r[1],t[2]=-r[2],t[3]=r[3],this.check()}invert(){return function(t,r){var s=r[0],e=r[1],i=r[2],h=r[3],n=s*s+e*e+i*i+h*h,c=n?1/n:0;t[0]=-s*c,t[1]=-e*c,t[2]=-i*c,t[3]=h*c}(this,this),this.check()}lerp(t,r,s){return void 0===s?this.lerp(this,t,r):(d(this,t,r,s),this.check())}multiplyRight(t){return y(this,this,t),this.check()}multiplyLeft(t){return y(this,t,this),this.check()}normalize(){const t=this.len(),r=t>0?1/t:0;return this[0]=this[0]*r,this[1]=this[1]*r,this[2]=this[2]*r,this[3]=this[3]*r,0===t&&(this[3]=1),this.check()}rotateX(t){return function(t,r,s){s*=.5;var e=r[0],i=r[1],h=r[2],n=r[3],c=Math.sin(s),u=Math.cos(s);t[0]=e*u+n*c,t[1]=i*u+h*c,t[2]=h*u-i*c,t[3]=n*u-e*c}(this,this,t),this.check()}rotateY(t){return function(t,r,s){s*=.5;var e=r[0],i=r[1],h=r[2],n=r[3],c=Math.sin(s),u=Math.cos(s);t[0]=e*u-h*c,t[1]=i*u+n*c,t[2]=h*u+e*c,t[3]=n*u-i*c}(this,this,t),this.check()}rotateZ(t){return function(t,r,s){s*=.5;var e=r[0],i=r[1],h=r[2],n=r[3],c=Math.sin(s),u=Math.cos(s);t[0]=e*u+i*c,t[1]=i*u-e*c,t[2]=h*u+n*c,t[3]=n*u-h*c}(this,this,t),this.check()}scale(t){return A(this,this,t),this.check()}slerp(t,r,s){let e,i,h;switch(arguments.length){case 1:({start:e=j,target:i,ratio:h}=t);break;case 2:e=this,i=t,h=r;break;default:e=t,i=r,h=s}return p(this,e,i,h),this.check()}transformVector4(t,r=new o){return k.VC(r,t,this),(0,i.IL)(r,4)}lengthSq(){return this.lengthSquared()}setFromAxisAngle(t,r){return this.setAxisAngle(t,r)}premultiply(t){return this.multiplyLeft(t)}multiply(t){return this.multiplyRight(t)}}},35600:(t,r,s)=>{s.d(r,{GH:()=>c,Iu:()=>a,Jp:()=>u,U1:()=>o,U_:()=>n,Ue:()=>i,bA:()=>l,en:()=>f,p4:()=>h});var e=s(49685);function i(){var t=new e.WT(9);return e.WT!=Float32Array&&(t[1]=0,t[2]=0,t[3]=0,t[5]=0,t[6]=0,t[7]=0),t[0]=1,t[4]=1,t[8]=1,t}function h(t,r){if(t===r){var s=r[1],e=r[2],i=r[5];t[1]=r[3],t[2]=r[6],t[3]=s,t[5]=r[7],t[6]=e,t[7]=i}else t[0]=r[0],t[1]=r[3],t[2]=r[6],t[3]=r[1],t[4]=r[4],t[5]=r[7],t[6]=r[2],t[7]=r[5],t[8]=r[8];return t}function n(t,r){var s=r[0],e=r[1],i=r[2],h=r[3],n=r[4],c=r[5],u=r[6],a=r[7],o=r[8],l=o*n-c*a,f=-o*h+c*u,k=a*h-n*u,O=s*l+e*f+i*k;return O?(O=1/O,t[0]=l*O,t[1]=(-o*e+i*a)*O,t[2]=(c*e-i*n)*O,t[3]=f*O,t[4]=(o*s-i*u)*O,t[5]=(-c*s+i*h)*O,t[6]=k*O,t[7]=(-a*s+e*u)*O,t[8]=(n*s-e*h)*O,t):null}function c(t){var r=t[0],s=t[1],e=t[2],i=t[3],h=t[4],n=t[5],c=t[6],u=t[7],a=t[8];return r*(a*h-n*u)+s*(-a*i+n*c)+e*(u*i-h*c)}function u(t,r,s){var e=r[0],i=r[1],h=r[2],n=r[3],c=r[4],u=r[5],a=r[6],o=r[7],l=r[8],f=s[0],k=s[1],O=s[2],v=s[3],y=s[4],p=s[5],g=s[6],m=s[7],M=s[8];return t[0]=f*e+k*n+O*a,t[1]=f*i+k*c+O*o,t[2]=f*h+k*u+O*l,t[3]=v*e+y*n+p*a,t[4]=v*i+y*c+p*o,t[5]=v*h+y*u+p*l,t[6]=g*e+m*n+M*a,t[7]=g*i+m*c+M*o,t[8]=g*h+m*u+M*l,t}function a(t,r,s){var e=r[0],i=r[1],h=r[2],n=r[3],c=r[4],u=r[5],a=r[6],o=r[7],l=r[8],f=s[0],k=s[1];return t[0]=e,t[1]=i,t[2]=h,t[3]=n,t[4]=c,t[5]=u,t[6]=f*e+k*n+a,t[7]=f*i+k*c+o,t[8]=f*h+k*u+l,t}function o(t,r,s){var e=r[0],i=r[1],h=r[2],n=r[3],c=r[4],u=r[5],a=r[6],o=r[7],l=r[8],f=Math.sin(s),k=Math.cos(s);return t[0]=k*e+f*n,t[1]=k*i+f*c,t[2]=k*h+f*u,t[3]=k*n-f*e,t[4]=k*c-f*i,t[5]=k*u-f*h,t[6]=a,t[7]=o,t[8]=l,t}function l(t,r,s){var e=s[0],i=s[1];return t[0]=e*r[0],t[1]=e*r[1],t[2]=e*r[2],t[3]=i*r[3],t[4]=i*r[4],t[5]=i*r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t}function f(t,r){var s=r[0],e=r[1],i=r[2],h=r[3],n=s+s,c=e+e,u=i+i,a=s*n,o=e*n,l=e*c,f=i*n,k=i*c,O=i*u,v=h*n,y=h*c,p=h*u;return t[0]=1-l-O,t[3]=o-p,t[6]=f+y,t[1]=o+p,t[4]=1-a-O,t[7]=k-v,t[2]=f-y,t[5]=k+v,t[8]=1-a-l,t}}}]);