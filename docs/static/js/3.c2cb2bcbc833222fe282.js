webpackJsonp([3],{IetM:function(t,i){},vDma:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n={name:"demo",data:function(){return{}},watch:{listData:function(){this.listAnimate()}},methods:{jumpto:function(t){this.$router.push(t)},listAnimate:function(){this.anime({targets:".ali",height:"80%",width:"15%",color:"red",fontSize:"35px",delay:this.anime.stagger(300),direction:"normal",easing:"spring(1, 80, 10, 0)"})},shan:function(){this.anime({targets:".ali",opacity:[1,0,1],loop:3,delay:this.anime.stagger(100),easing:"spring(1, 80, 10, 0)"})}},created:function(){},mounted:function(){var t=this;this.listAnimate(),setTimeout(function(){t.shan()},5e3)}},a={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{attrs:{id:"firpage"}},[e("i",{staticClass:"el-icon-s-home",staticStyle:{cursor:"pointer",color:"blue","font-size":"25px",padding:"10px",position:"fixed",top:"5px",left:"5px"},on:{click:function(i){return t.jumpto("/")}}}),t._v(" "),t._l(6,function(i,n){return e("li",{key:n,staticClass:"ali",style:{background:"url(../../static/man"+n+".jpg)",backgroundSize:"cover"},on:{click:function(i){return t.jumpto()}}})})],2)},staticRenderFns:[]};var o=e("VU/8")(n,a,!1,function(t){e("IetM")},"data-v-d2a561e6",null);i.default=o.exports}});
//# sourceMappingURL=3.c2cb2bcbc833222fe282.js.map