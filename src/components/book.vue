<template>
  <div id="aboutMe">
    <div
      @click="jumpto('/')"
      class="jumpto"
      style="cursor: pointer; color: red"
    >
      back to home page
    </div>
    <div>book list</div>

    <el-collapse accordion>
      <el-collapse-item
        v-for="(book, index) in booklist"
        :key="index"
        :title="'《' + book.name + '》'"
        :name="index"
      >
        <div>
          {{ book.intro || '暂无内容' }}
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
  /deep/ .el-collapse-item__header{
    font-size: 20px;
    color: white;
    background: none;
    text-align: center;
  }
  /deep/ .el-collapse-item__wrap{
    background: none;
  }
  /deep/ .el-collapse-item__content{
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
