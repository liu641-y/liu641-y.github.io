<template>
  <div id="aboutMe">
    <!-- <i
      class="el-icon-s-home backhome"
      @click="jumpto('/')" 
    >
    </i> -->

    <div class="title" style=""><span>刘思远</span></div>
    <div class="title">
      <span>性别：</span><span>男</span><span>年龄：</span><span>二十几</span>
    </div> 
    <div>个人说明：爱好广泛，工作前端。</div>
    <div>项目介绍：前端用的vue2，组件库使用的element，动效使用了animejs。背景动效使用的canvas。后端利用了nodejs，但是还没整数据库。利用node将数据暂时写到了一个md文件中。刚做不久，样式和功能还没完善。暂时刚写两个接口。</div>
  </div>
</template>
<script>
export default {
  name: "about",
  data() {
    return {};
  },
  watch: {},
  methods: {
    jumpto(ad) {
      this.$router.push(ad);
    },
  },
  created() {},
  mounted() {},
};
</script>

<style lang="less" scoped>
.phone {
  #aboutMe {
    width: 90vw;
  }
}
#aboutMe {
  font-size: 18px;
  font-family: "Times New Roman", Times, serif;
  width: 600px;
  margin: auto;
  padding-top: 30px;
  font-weight: 600;
  div {
    display: flex;
    justify-content: space-between;
    padding-bottom: 20px;
    font-size: 20px;
  }
  .content {
    line-height: 30px;
  }
  /deep/ .el-descriptions__title {
    color: white;
    font-size: 25px;
  }
  /deep/ .el-descriptions__body {
    background-color: black;
    color: white;
    font-size: 20px;
  }
}
</style>
