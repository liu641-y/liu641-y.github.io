<template>
  <div id="firpage">
    <span class="intr" v-for="letter in intrarr">{{ letter }}</span>
    <span @click="jumpto('/game')">玩游戏点击这里</span>
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
        fontSize: "25px",
        delay: this.anime.stagger(200),
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
  color: blue;
  .intr {
    font-size: 0;
  }
}
</style>
