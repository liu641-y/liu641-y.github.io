webpackJsonp([3],{"1Tsb":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o={name:"about",data:function(){return{booklist:[]}},watch:{},methods:{jumpto:function(t){this.$router.push(t)}},created:function(){},mounted:function(){var t=this;this.$http({method:"post",url:"querydata",data:{hh:"hh"}}).then(function(n){console.log(n,"res");var e=n.data.data.split("\r\n##"),o=e.filter(function(t,n){return n%2==1}),a=e.filter(function(t,n){return n%2==0});console.log(o,a,"s");var i=[],r=[],s=[];(a=a.slice(1)).forEach(function(t,n){var e=t.split("\r\n");i.push(e[0].split("#")[1]),r.push(e[1]),s.push({name:e[0].split("#")[1],date:o[n],intro:e[1]})}),t.booklist=s,console.log(i,r,"my")}).catch(function(t){console.log(t)})}},a={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"bookPage"}},[e("div",{staticClass:"booktitle"},[t._v("article list")]),t._v(" "),e("el-collapse",{attrs:{accordion:""}},t._l(t.booklist,function(n,o){return e("el-collapse-item",{key:o,attrs:{title:n.name,name:o}},[e("div",[t._v("\n        "+t._s(n.intro||"暂无内容")+"\n      ")])])}),1)],1)},staticRenderFns:[]};var i=e("VU/8")(o,a,!1,function(t){e("tgQq")},"data-v-8c574c48",null);n.default=i.exports},tgQq:function(t,n){}});
//# sourceMappingURL=3.b39ae8f08aab757571f0.js.map