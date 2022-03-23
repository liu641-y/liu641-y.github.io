<template>
  <div id="aboutMe">
    <i
      class="el-icon-s-home"
      @click="jumpto('/')"
      style="cursor: pointer; color: blue;position:fixed;left: 0; font-size: 25px; padding: 10px"
    >
    </i>
    <div class="booktitle">book list</div>

    <el-collapse accordion>
      <el-collapse-item
        v-for="(book, index) in booklist"
        :key="index"
        :title="'《' + book.name + '》'"
        :name="index"
      >
        <div>
          {{ book.intro || "暂无内容" }}
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>
<script>
import { booklist } from "../alldata.js";
export default {
  name: "about",
  data() {
    return {
      booklist: [],
    };
  },
  watch: {},
  methods: {
    jumpto(ad) {
      this.$router.push(ad);
    },
  },
  created() {},
  mounted() {
    this.booklist = booklist;
  },
};
</script>

<style lang="less" scoped>
#aboutMe {
  color: white;
  .booktitle {
    font-size: 25px;
    text-align: center;
    margin-bottom: 10px;
  }
  /deep/ .el-collapse-item__header {
    font-size: 20px;
    color: white;
    background: none;
    justify-content: center;
    border: 0;
  }
  /deep/ .el-collapse-item__arrow {
    margin: 0;
    color: red;
    font-weight: bolder;
    // margin-left:40px;
  }
  /deep/ .el-collapse-item__wrap {
    background: none;
  }
  /deep/ .el-collapse-item__content {
    color: white;
    font-size: 20px;
  }
  .booklist {
    display: flex;
    .abook {
      width: 100px;
      height: 90px;
      border: 1px solid red;
    }
  }
}
</style>
