webpackJsonp([6],{U1yW:function(t,n){},vDma:function(t,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e={name:"demo",data:function(){return{}},watch:{listData:function(){this.listAnimate()}},methods:{jumpto:function(t){this.$router.push(t)},listAnimate:function(){this.anime({targets:".ali",height:"80%",width:"15%",color:"red",fontSize:"35px",delay:this.anime.stagger(300),direction:"normal",easing:"spring(1, 80, 10, 0)"})},shan:function(){this.anime({targets:".ali",opacity:[1,0,1],loop:3,delay:this.anime.stagger(100),easing:"spring(1, 80, 10, 0)"})}},created:function(){},mounted:function(){var t=this;this.listAnimate(),setTimeout(function(){t.shan()},5e3)}},a={render:function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{attrs:{id:"firpage"}},[i("i",{staticClass:"el-icon-s-home",staticStyle:{cursor:"pointer",color:"blue","font-size":"25px",padding:"10px"},on:{click:function(n){return t.jumpto("/")}}}),t._v(" "),t._l(6,function(n,e){return i("li",{key:e,staticClass:"ali",style:{background:"url(../../static/man"+e+".jpg)",backgroundSize:"cover"},on:{click:function(n){return t.jumpto()}}})})],2)},staticRenderFns:[]};var o=i("VU/8")(e,a,!1,function(t){i("U1yW")},"data-v-12e8fbd1",null);n.default=o.exports}});
//# sourceMappingURL=6.677356d2bdfa7a8ab2d6.js.map