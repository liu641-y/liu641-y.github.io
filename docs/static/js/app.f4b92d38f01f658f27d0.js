webpackJsonp([8],{NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e("/5sW"),a={name:"App",methods:{hh:function(){console.log()},aldraw:function(){var t=document.getElementById("flo"),n=document.getElementById("app"),e=t.getContext("2d"),o=[];function a(t,n){return Math.round(Math.random()*(n-t)+t)}function h(n,e,o){this.x=a(0,t.width),this.y=a(0,t.height),this.r=o,this.color1=a(0,255),this.color2=a(0,255),this.color3=a(0,255),this.a=1,this.vx=5*(Math.random()-.5),this.vy=5*(Math.random()-.5),this.draw()}t.width=window.innerWidth,t.height=window.innerHeight,n.addEventListener("mousemove",function(t){o.push(new h(t.clientX,t.clientY,5))}),n.addEventListener("touchstart",function(t){for(i=0;i<8;i++)o.push(new h(t.clientX,t.clientY,30))}),h.prototype={draw:function(){e.beginPath(),e.fillText("",this.x,this.y),e.fillStyle="rgb("+this.color1+","+this.color2+","+this.color3+")",e.globalAlpha=this.a,e.arc(this.x,this.y,this.r,0,2*Math.PI),e.fill(),this.mov()},mov:function(){this.x+=this.vx,this.y+=this.vy,this.r+=.01,this.a*=.999,this.color1=(this.color1+a(0,10))%256,this.color2=(this.color2+a(0,10))%256,this.color3=(this.color3+a(0,10))%256}},function n(){e.clearRect(0,0,t.width,t.height),o.forEach(function(n,e){n.draw(),(n.a<.1||n.x<0||n.y<0||n.x>t.width||n.y>t.height||n.r<0)&&o.splice(e,1)}),requestAnimationFrame(n)}()}},mounted:function(){this.aldraw()}},h={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"app"}},[n("canvas",{attrs:{id:"flo"}}),this._v(" "),n("router-view")],1)},staticRenderFns:[]};var r=e("VU/8")(a,h,!1,function(t){e("OyJk")},null,null).exports,c=e("/ocq");o.default.use(c.a);var u=new c.a({routes:[{path:"/game",name:"game",component:function(t){return e.e(2).then(function(){var n=[e("aTr5")];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"/",name:"first",component:function(t){return e.e(5).then(function(){var n=[e("mtIe")];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"/about",name:"about",component:function(t){return e.e(3).then(function(){var n=[e("zRCK")];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"/demo",name:"demo",component:function(t){return e.e(0).then(function(){var n=[e("vDma")];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"/nag",name:"nag",component:function(t){return e.e(6).then(function(){var n=[e("/+eE")];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"/book",name:"book",component:function(t){return e.e(1).then(function(){var n=[e("MFsm")];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"/shares",name:"shares",component:function(t){return e.e(4).then(function(){var n=[e("Xuke")];t.apply(null,n)}.bind(this)).catch(e.oe)}}]}),s=e("4ywN"),l=e("zL8q"),d=e.n(l),p=e("nrAE"),f=e.n(p),m=(e("tvR6"),e("LhB+")),v=e.n(m);o.default.use(v.a),console.log(v.a,"hs"),o.default.prototype.anime=s.a,o.default.config.productionTip=!1,o.default.use(d.a),o.default.use(f.a),new o.default({el:"#app",router:u,render:function(t){return t(r)}})},OyJk:function(t,n){},tvR6:function(t,n){}},["NHnr"]);
//# sourceMappingURL=app.f4b92d38f01f658f27d0.js.map