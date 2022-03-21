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

    <el-collapse v-model="activeName" accordion>
      <el-collapse-item
        v-for="(book, index) in booklist"
        :key="index"
        :title="'《' + book.name + '》'"
        :name="index"
      >
        <div>
          {{ book.intro }}
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>
<script>
export default {
  name: "about",
  data() {
    return {
      booklist: [
        { name: "共产党宣言", intro: "暂无感想" },
        {
          name: "海龟交易法则",
          intro: "以数学概率分析股市",
        },
      ],
    };
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
#aboutMe {
  color: white;
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
