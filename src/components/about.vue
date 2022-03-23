<template>
  <div id="aboutMe">
    <i
      class="el-icon-s-home"
      @click="jumpto('/')"
      style="
        cursor: pointer;
        color: blue;
        font-size: 25px;
        padding: 10px;
        float: left;
      "
    >
    </i>
    <el-descriptions title="">
      <el-descriptions-item label="性别">男</el-descriptions-item>
      <el-descriptions-item label="年龄">24</el-descriptions-item>
      <el-descriptions-item label="职业">前端开发</el-descriptions-item>
      <el-descriptions-item label="业余活动">
        股市捐钱， 
        球场散步， 
        过目即忘式看书，
        运动 次/年
      </el-descriptions-item>
      
 
     
    </el-descriptions>
    <div style="padding-bottom: 10px">人生指南：</div>
     回到当下，不要陷入空想中，去做。生活的乐趣在于逃离生活。
      情绪可控，不要被情绪控制。不去讨厌任何人，不以任何恶意的态度对待他人。
      那些你想去讨厌的人，都只是可怜的人。对他人的不善，都只是在折磨自己。
      保持理性，保持开放，人不存在固定的定义，别用过去的记忆禁锢自己，享受未来的无限种可能。
      快乐和幸福都是一个想法，不是一种状态，任何时刻任何状态，人都可以笑起来。
      你应该追求的是平静，而不是快乐。 无需在乎他人的眼光。
      不要以他人的奖赏作为目标，回来，对自己负责。
      时刻抑制想要炫耀的心，想去指导别人的心，想去安利的心。
      尊重他人，不要自以为是，人是最复杂的结构之一，无法比较高低。
      这世上并没有对 与 错，只有不同立场的不同看法。
      允许不同的想法，并不是每个人的想法都需要自己去理解，每件事都是按照自己的想法去做。
      只有一件事是绝对的，那就是永远不要过于绝对。 多运动，保持健康。
      多读书，多思考，多记录，多复盘。 珍惜时间，但时刻记得保持优雅。
      不要被一件事或人吸走全部的时间和注意力，分散投资。
      不要进入等待的状态，而耗费当下的人生。可以有所期待，但期待的只能是自己。
      凡是坚持做的事，就会有放弃的一天。拖着疲惫努力坚持时，转变为被对目标的巨大欲望推着走。如果不能改变，说明报酬与付出不相匹配，早晚会放弃，不如尽早。
      跑的越快阻力越大。反之，阻力很大时，跑的最快，进步越大。
      今天敷衍过去的事情，大概率明天也会敷衍过去。
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
#aboutMe {
  color: white;
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
