<template>
    <div id="mywx"> 
        <div>学习小程序的时候重新写的猜词游戏,手机端的适配更好。</div>
        
        <div><img src="../../static/img/wx-img.jpg" alt=""></div>
        <div>清云起</div>
    </div>
  </template>
  <script>
  export default {
    name: "mywx",
    data() {
      return {};
    },
    methods: {},
    created() {},
    mounted() {},
  };
  </script>
  
  <style lang="less" scoped> 
  
.phone {
  #mywx {
    width: 90vw;
  }
}
#mywx {
  font-size: 18px;
  font-family: "Times New Roman", Times, serif;
  width: 600px;
  margin: auto;
  padding: 30px;
  font-weight: 600;
  div {
    display: flex;
    justify-content: center;
    padding-bottom: 20px;
    font-size: 20px;
  }
img{
    display: flex;
    justify-content: center;
    border-radius: 40px;
}
 
}
  </style>
  