!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("daggy"),require("fantasy-cofrees"),require("fantasy-eithers"),require("fantasy-frees"),require("fantasy-io"),require("fantasy-options"),require("fantasy-readers"),require("fantasy-states"),require("fantasy-tuples"),require("fantasy-validations"),require("fantasy-writers"),require("fluture"));else if("function"==typeof define&&define.amd)define(["daggy","fantasy-cofrees","fantasy-eithers","fantasy-frees","fantasy-io","fantasy-options","fantasy-readers","fantasy-states","fantasy-tuples","fantasy-validations","fantasy-writers","fluture"],t);else{var r="object"==typeof exports?t(require("daggy"),require("fantasy-cofrees"),require("fantasy-eithers"),require("fantasy-frees"),require("fantasy-io"),require("fantasy-options"),require("fantasy-readers"),require("fantasy-states"),require("fantasy-tuples"),require("fantasy-validations"),require("fantasy-writers"),require("fluture")):t(e.daggy,e["fantasy-cofrees"],e["fantasy-eithers"],e["fantasy-frees"],e["fantasy-io"],e["fantasy-options"],e["fantasy-readers"],e["fantasy-states"],e["fantasy-tuples"],e["fantasy-validations"],e["fantasy-writers"],e.fluture);for(var n in r)("object"==typeof exports?exports:e)[n]=r[n]}}(this,function(e,t,r,n,u,a,f,i,s,o,c,y){return function(e){function t(n){if(r[n])return r[n].exports;var u=r[n]={i:n,l:!1,exports:{}};return e[n].call(u.exports,u,u.exports,t),u.l=!0,u.exports}var r={};return t.m=e,t.c=r,t.i=function(e){return e},t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=13)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=t.I=function(e){return e},u=t.K=function(e){return function(t){return e}},a=t.A=function(e){return function(t){return e(t)}},f=t.T=function(e){return function(t){return t(e)}},i=t.W=function(e){return function(t){return e(t)(t)}},s=t.C=function(e){return function(t){return function(r){return e(r)(t)}}},o=t.B=function(e){return function(t){return function(r){return e(t(r))}}},c=t.S=function(e){return function(t){return function(r){return e(r)(t(r))}}},y=t.P=function(e){return function(t){return function(r){return function(n){return e(t(r))(t(n))}}}},l=t.Y=function(e){return function(e){return e(e)}(function(t){return e(function(e){return t(t)(e)})})};t.default={I:n,K:u,A:a,T:f,W:i,C:s,B:o,S:c,P:y,Y:l}},function(e,t){e.exports=require("daggy")},function(e,t){e.exports=require("fantasy-cofrees")},function(e,t){e.exports=require("fantasy-eithers")},function(e,t){e.exports=require("fantasy-frees")},function(e,t){e.exports=require("fantasy-io")},function(e,t){e.exports=require("fantasy-options")},function(e,t){e.exports=require("fantasy-readers")},function(e,t){e.exports=require("fantasy-states")},function(e,t){e.exports=require("fantasy-tuples")},function(e,t){e.exports=require("fantasy-validations")},function(e,t){e.exports=require("fantasy-writers")},function(e,t){e.exports=require("fluture")},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=r(2),f=n(a),i=r(3),s=n(i),o=r(4),c=n(o),y=r(5),l=n(y),p=r(7),d=n(p),q=r(8),x=n(q),v=r(10),g=n(v),T=r(11),b=n(T),h=r(6),j=n(h),O=r(12),w=n(O),m=r(1),P=n(m),_=r(9),C=r(0),I=n(C);e.exports=u({Cofree:f.default,Either:s.default,Free:c.default,IO:l.default,Reader:d.default,State:x.default,Validation:g.default,Writer:b.default,Options:j.default,Future:w.default,Custom:P.default,Tuple:_.Tuple,Tuple2:_.Tuple2,Tuple3:_.Tuple3,Tuple4:_.Tuple4,Tuple5:_.Tuple5},c.default,I.default)}])});