<template>
  <div id="firpage">
 
    
   
    <div @click="jumpto('/game')" class="jumpto">play game click me</div>
    <div @click="jumpto('/about')" class="jumpto">about me</div>
    <div @click="jumpto('/book')" class="jumpto">book list</div>
  
   <!-- <div @click="jumpto('/demo')" class="jumpto">demo</div> -->
    <span class="intr" v-for="letter in intrarr">{{ letter }}</span>
    <div><i class="el-icon-football"></i></div>
  </div>

  <!-- <div class="all">
   <div class="left">在左边</div>
   <div class="right">在右边</div>
 </div> -->
</template>
<script>
export default {
  name: "first",
  data() {
    return {
      intr: "啊啊啊啊啊啊啊啊啊啊,毁灭吧",
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
        targets: "#firpage",
       rotate: "1turn",
        delay: this.anime.stagger(300),
        easing: "linear",
        // loop: true,
      });
      this.anime({
        targets: ".intr",
        fontSize: "10px",
        delay: this.anime.stagger(300),
        easing: "linear",
      });
      this.anime({
        targets: ".el-icon-football",
        top: "250",
        fontSize: "30px",
        direction: "alternate",
        rotate: "1turn",
        loop: true,
        easing: "cubicBezier(.5, .05, .1, .3)",
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
  .all{
    height: 100%;
    width: 100%;
    display: flex;
    text-align: center;
  
    .left{
      background-color: white;
      height: 100%;
      width: 50%;
      color: black;
      
    }
    .right{
      background-color: black;
       height: 100%;
      width: 50%;
      color: white;
    }
  }
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
