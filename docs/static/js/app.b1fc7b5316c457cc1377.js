webpackJsonp([6],{NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e("/5sW"),o={name:"App",methods:{aldraw:function(){var t=document.getElementById("flo"),n=document.getElementById("app"),e=t.getContext("2d"),i=[];function o(t,n){return Math.round(Math.random()*(n-t)+t)}function a(n,e,i){this.x=o(0,t.width),this.y=o(0,t.height),this.r=i,this.color1=o(0,255),this.color2=o(0,255),this.color3=o(0,255),this.a=1,this.vx=5*(Math.random()-.5),this.vy=5*(Math.random()-.5),this.draw()}t.width=window.innerWidth,t.height=window.innerHeight,n.addEventListener("mousemove",function(t){i.length<10&&i.push(new a(t.clientX,t.clientY,5))}),n.addEventListener("touchstart",function(t){i.push(new a(t.clientX,t.clientY,5))}),a.prototype={draw:function(){e.beginPath(),e.fillText("",this.x,this.y),e.fillStyle="rgb("+this.color1+","+this.color2+","+this.color3+")",e.fillStyle="pink",e.globalAlpha=this.a,e.arc(this.x,this.y,this.r,0,2*Math.PI),e.fill(),this.mov()},mov:function(){this.x+=this.vx,this.y+=this.vy,this.r+=.01,this.a*=.98,this.color1=(this.color1+o(0,10))%256,this.color2=(this.color2+o(0,10))%256,this.color3=(this.color3+o(0,10))%256}},function n(){e.clearRect(0,0,t.width,t.height),i.forEach(function(n,e){n.draw(),(n.a<.1||n.x<0||n.y<0||n.x>t.width||n.y>t.height||n.r<0)&&i.splice(e,1)}),requestAnimationFrame(n)}()}},mounted:function(){}},a={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"app"}},[n("canvas",{attrs:{id:"flo"}}),this._v(" "),n("router-view")],1)},staticRenderFns:[]};var r=e("VU/8")(o,a,!1,function(t){e("sO08")},null,null).exports,h=e("/ocq");i.default.use(h.a);var c=new h.a({routes:[{path:"/game",name:"game",component:function(t){return e.e(1).then(function(){var n=[e("aTr5")];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"/",name:"first",component:function(t){return e.e(3).then(function(){var n=[e("mtIe")];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"/about",name:"about",component:function(t){return e.e(2).then(function(){var n=[e("zRCK")];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"/demo",name:"demo",component:function(t){return e.e(4).then(function(){var n=[e("vDma")];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"/book",name:"book",component:function(t){return e.e(0).then(function(){var n=[e("MFsm")];t.apply(null,n)}.bind(this)).catch(e.oe)}}]}),s=e("4ywN"),u=e("zL8q"),l=e.n(u),d=e("nrAE"),f=e.n(d);e("tvR6");i.default.prototype.anime=s.a,i.default.config.productionTip=!1,i.default.use(l.a),i.default.use(f.a),new i.default({el:"#app",router:c,render:function(t){return t(r)}})},sO08:function(t,n){},tvR6:function(t,n){}},["NHnr"]);
//# sourceMappingURL=app.b1fc7b5316c457cc1377.js.map