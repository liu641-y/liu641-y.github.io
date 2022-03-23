<template>
  <div id="firpage">
      <i class="el-icon-s-home" @click="jumpto('/')" style="cursor: pointer; color: blue ;font-size: 25px;padding: 10px;">
   
    </i>
    <li
      v-for="(ali, index) in 6"
      :key="index"
      class="ali"
      :style="{
        background: 'url(../../static/man' + index + '.jpg)',
        backgroundSize: 'cover',
      }"
      @click="jumpto()"
    ></li>
  </div>
</template>
<script>
export default {
  name: "demo",
  data() {
    return {};
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
        targets: ".ali",
        height: "80%",
        width: "15%",
        color: "red",
        fontSize: "35px",
        delay: this.anime.stagger(300),
        direction: "normal",
        easing: "spring(1, 80, 10, 0)",
      });
    },
    shan() {
      this.anime({
        targets: ".ali",
        opacity: [1, 0, 1],
        // delay: 5000,
        loop: 3,
        delay: this.anime.stagger(100),
        // direction: "normal",
        easing: "spring(1, 80, 10, 0)",
      });
    },
  },
  created() {},
  mounted() {
    this.listAnimate();
    setTimeout(() => {
      this.shan();
    }, 5000);
  },
};
</script>

<style lang="less" scoped>
#firpage {
  width: 100%;
  height: 100%;
  perspective: 3000px;
  overflow: hidden;
  display: flex;
  justify-content: space-around;
  align-items: center;
  transform-style: preserve-3d;
  color: yellow;
 
  .ali:hover {
    opacity: 1;
  }
  .let {
    color: blue;
    display: inline-block;
    font-size: 0;
  }
  .ali {
    font-size: 35px;
    cursor: pointer;
    opacity: 1;
    height: 0%;
    width: 0;
    border-radius: 20px;
    display: flex;
    // writing-mode: vertical-lr;
    -webkit-box-reflect: below 10px -webkit-linear-gradient(top, rgba(
            0,
            0,
            0,
            0
          )
          10%, rgba(0, 0, 0, 0.7) 100%);
    position: relative;
    //  .atitle{
    //    position: absolute;
    //    top: -40px;
    //  }
  }
}
</style>
