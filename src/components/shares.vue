<template>
  <div id="shares">
    <i
      class="el-icon-s-home"
      @click="jumpto('/')"
      style="cursor: pointer; color: blue; font-size: 25px; padding: 10px"
    >
    </i>
    <div>
      1.是否出现背离
      2.是否资金无期限
      
    </div>
    <div>
      <el-timeline>
        <el-timeline-item
          v-for="(activity, index) in activities"
          :key="index"
          :icon="activity.icon"
          :type="activity.type"
          :color="activity.color"
          :size="lage"
          :timestamp="activity.timestamp"
        >
          <p>{{ activity.content }}</p>
          <p>{{ activity.intro }}</p>
        </el-timeline-item>
      </el-timeline>
    </div>
  </div>
</template>
<script>
export default {
  name: "about",
  data() {
    return {
      activities: [
        {
          content: "华钰st：300； 明阳智能：200； 彤程新材：100；",
          timestamp: "2022-3-21",
          color: "white",
        },
        {
          content: "卖出明阳智能：100",
          timestamp: "2018-03-22 20:46",
          intro: "",
          color: "lightgreen",
        },
        {
          content: "买入华钰：200",
          timestamp: "2018-03-22 20:46",
          intro:
            "昨天期货锌涨价，外加美股资源股大涨所以感觉国内资源股也会长，想做个断线套点钱",
          color: "red",
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
#shares {
  color: white;
  /deep/ .el-timeline-item__content {
    color: white;
  }
  .jumpto {
    margin-bottom: 20px;
  }
  /deep/ .el-timeline {
    font-size: 20px;
  }
}
</style>
