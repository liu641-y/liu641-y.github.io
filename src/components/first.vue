<template>
  <div id="firpage">
    <div @click="jumpto('/game')">play game click me</div>
    <div @click="jumpto('/demo')">demo show click me</div>
    <span class="intr" v-for="letter in intrarr">{{ letter }}</span>
    
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
        fontSize: "20px",
        delay: this.anime.stagger(100),
        // easing: 'linear'
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
  // span{
  //   margin: 1px;
  // }
}
</style>
