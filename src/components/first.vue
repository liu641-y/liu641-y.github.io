<template>
  <div id="firpage">
     <!-- <div @click="jumpto('/nag')" class="jumpto">学习记录</div> -->
    <div @click="jumpto('/game')" class="jumpto">play game click me</div>
    <div @click="jumpto('/about')" class="jumpto">about me</div>
    <div @click="jumpto('/book')" class="jumpto">book list</div>
    <div @click="jumpto('/shares')" class="jumpto">操作记录</div>
   
    <span class="intr" v-for="letter in intrarr">{{ letter }}</span>
     <div><i class="el-icon-football"></i></div>
  </div>
</template>
<script>
export default {
  name: "first",
  data() {
    return {
      intr: "你好，我是LSY，这个网站用来放一些小东西",
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
        fontSize: "30px",
        delay: this.anime.stagger(100),
        easing: "linear",
      });
      this.anime({
        targets: ".el-icon-football",
        top: '250',
        direction: 'alternate',
        rotate: "0.5turn",
        loop: true,
  easing: 'cubicBezier(.5, .05, .1, .3)',
        duration: 1000,
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
#firpage {
  
  color: white;
  // overflow: hidden;
  font-weight: bolder;
  .jumpto {
    cursor: pointer;
  }
  .intr {
    font-size: 0;
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
