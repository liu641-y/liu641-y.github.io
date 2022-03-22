<template>
  <div id="firpage">
    <span class="intr" v-for="letter in intrarr">{{ letter }}</span>
    <div @click="jumpto('/game')" class="jumpto">play game click me</div>
    <div @click="jumpto('/about')" class="jumpto">about me</div>
    <div @click="jumpto('/book')" class="jumpto">book list</div>
    <div @click="jumpto('/shares')" class="jumpto">操作记录</div>
    <div><i class="el-icon-s-tools"></i></div>
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
        targets: ".el-icon-s-tools",
        rotate: "1turn",
        loop: true,
        easing: "linear",
        duration: 3000,
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
  font-size: 40px;
  font-weight: bolder;
  .jumpto {
    cursor: pointer;
  }
  .intr {
    font-size: 0;
  }
  .el-icon-s-tools {
    font-size: 50px;
  }
  .tou {
    width: 20px;
  }
}
</style>
