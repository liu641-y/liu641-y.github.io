<template>
  <div id="firpage">
    <span class="intr" v-for="letter in intrarr">{{ letter }}</span>
    <div @click="jumpto('/game')" class="jumpto">play game click me</div>
    <div @click="jumpto('/demo')" class="jumpto">demo show click me</div>
    <div @click="jumpto('/about')" class="jumpto">about me</div>
    <div @click="jumpto('/nag')" class="jumpto">some words</div>
    <div @click="jumpto('/book')" class="jumpto">book list</div>
    <div @click="jumpto('/shares')" class="jumpto">操作记录</div>
    <div><i class="el-icon-s-tools"></i></div>
    


    <!-- <addFunc></addFunc> -->
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
    jj() {
      console.log("j");
    },
    jumpto(ad) {
      this.$router.push(ad);
    },
    listAnimate() {
      this.anime({
        targets: ".intr",
        fontSize: "30px",
        delay: this.anime.stagger(100),
        easing: "linear",
        //  easing: 'spring(1, 80, 10, 0)'
      });
      this.anime({
        targets: ".el-icon-s-tools",
        rotate: "1turn",
        loop: true,
        // delay: this.anime.stagger(100),
        easing: "linear",
        duration: 3000
        //  easing: 'spring(1, 80, 10, 0)'
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
  .el-icon-s-tools{
    font-size: 50px;
  }
  .tou {
    width: 20px;
  }
  // z-index: 100;
  color: white;
  font-size: 30px;
  font-weight: bolder;
  .jumpto {
    cursor: pointer;
  }
  .intr {
    font-size: 0;
  }
  // span{
  //   margin: 1px;
  // }
}
</style>
