<template>
  <div id="shares">
     <div
      @click="jumpto('/')"
      class="jumpto"
      style="cursor: pointer; color: red"
    >
      back to home page
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
      :timestamp="activity.timestamp">
      {{activity.content}}
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
         activities: [{
          content: '华钰st：300； 明阳智能：200； 彤程新材：100；',
          timestamp: '2022-3-21',
          color: 'white'
        }, {
          content: '买入',
          timestamp: '2018-04-03 20:46',
          color: 'red'
        }, {
          content: '卖出',
          timestamp: '2018-04-03 20:46',
          color: 'lightgreen'
        }]
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
  /deep/ .el-timeline-item__content{
      color: white;
  }
 
}
</style>
