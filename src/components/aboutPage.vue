<template>
  <div id="aboutMe">
    <!-- <i
      class="el-icon-s-home backhome"
      @click="jumpto('/')" 
    >
    </i> -->

    <div class="title" style=""><span>刘思远</span></div>
    <div class="title">
      <span>性别：</span><span>男</span><span>年龄：</span><span>二十好几</span>
    </div> 
    <div>个人说明：爱好广泛，工作前端。</div>
    <div>项目介绍：前端用的vue2，动效使用了animejs，组件库使用的element。背景动效使用的canvas。后端利用了nodejs，但是还没来得及使用数据库。利用node对于文件的读写功能，将数据暂时写到了一个md文件中。刚开始做，样式和功能还没完善。暂时刚写两个接口。</div>
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
  padding: 30px;
  color: white;
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
