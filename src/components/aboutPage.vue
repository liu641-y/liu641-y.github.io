<template>
  <div id="aboutMe">
    <!-- <i
      class="el-icon-s-home backhome"
      @click="jumpto('/')" 
    >
    </i> -->

    <div class="title" style=""><span>刘思远</span></div>
    <div class="title">
      <span>性别：</span><span>男</span><span>年龄：</span><span>24</span>
    </div>
    <div>个人说明：做前端的，最近对炒股比较感兴趣。</div>
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
