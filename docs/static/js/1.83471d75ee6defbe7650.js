webpackJsonp([1],{uHwl:function(t,i){},vDma:function(t,i,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e={name:"demo",data:function(){return{}},watch:{listData:function(){this.listAnimate()}},methods:{jumpto:function(t){this.$router.push(t)},listAnimate:function(){this.anime({targets:".ali",height:"80%",width:"15%",color:"red",fontSize:"35px",delay:this.anime.stagger(300),direction:"normal",easing:"spring(1, 80, 10, 0)"})},shan:function(){this.anime({targets:".ali",opacity:[1,0,1],loop:3,delay:this.anime.stagger(100),easing:"spring(1, 80, 10, 0)"})}},created:function(){},mounted:function(){var t=this;this.listAnimate(),setTimeout(function(){t.shan()},5e3)}},a={render:function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{attrs:{id:"firpage"}},[n("div",{staticClass:"jumpto",staticStyle:{cursor:"pointer",position:"absolute","z-index":"400",color:"red",top:"0"},on:{click:function(i){return t.jumpto("/")}}},[t._v("back to home page")]),t._v(" "),t._l(6,function(i,e){return n("li",{key:e,staticClass:"ali",style:{background:"url(../../static/man"+e+".jpg)",backgroundSize:"cover"},on:{click:function(i){return t.jumpto()}}})})],2)},staticRenderFns:[]};var o=n("VU/8")(e,a,!1,function(t){n("uHwl")},"data-v-ab836726",null);i.default=o.exports}});
//# sourceMappingURL=1.83471d75ee6defbe7650.js.map