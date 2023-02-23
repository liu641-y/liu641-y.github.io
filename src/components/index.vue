<template>
  <div id="firpage">
    <div @click="jumpto('/aboutPage')" class="jumpto">个人介绍</div>
    <div @click="jumpto('/articlePage')" class="jumpto">文章列表</div>
    <!-- <div @click="jumpto('/demo')" class="jumpto">人类观察笔记</div> -->
    <div @click="jumpto('/gamePage')" class="jumpto">一个小游戏</div>
    <div @click="jumpto('/mywx')" class="jumpto">我的微信小程序</div>
    <!-- <div @click="jumpto('/demo')" class="jumpto">small demo</div> -->
    <div class="caesar">
      <span class="intr" v-for="(letter, ind) in intrarr" :key="ind">{{
        letter
      }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "first",
  data() {
    return {
      intr: "Veni,vidi,vici.   ---Caesar",
      intrarr: [],
    };
  },
  watch: {
    listData() {
      this.listAnimate();
    },
  },
  methods: {
    jumpto(ad) {
      this.$router.push(ad);
    },
    listAnimate() {
      this.anime({
        targets: ".intr",
        opacity: "1",
        delay: this.anime.stagger(300),
        easing: "linear",
      });
    },
  },
  created() {
    this.intrarr = this.intr.split("");
  },
  mounted() {
    this.listAnimate();
  },
};
</script>

<style lang="less" scoped>
.all {
  height: 100%;
  width: 100%;
  display: flex;
  text-align: center;

  .left {
    background-color: white;
    height: 100%;
    width: 50%;
    color: black;
  }
  .right {
    background-color: black;
    height: 100%;
    width: 50%;
    color: white;
  }
}
#firpage {
  .caesar {
    position: absolute;
    bottom: 90px;
    left: 50%;
    transform: translateX(-50%);
  }
  padding-top: 80px;
  color: white;
  // overflow: hidden;
  text-align: center;
  font-weight: bolder;

  .jumpto {
    cursor: pointer;
    height: 50px;
    line-height: 50px;
    margin-bottom: 50px;
  }
  .intr {
    opacity: 0;
    color: white;
  }
  .el-icon-football {
    // right: 20px;
    top: 0;
    // position: relative;
    position: relative;
    font-size: 50px;
  }
  .tou {
    width: 20px;
  }
}
</style>
