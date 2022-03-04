<template>
  <div id="firpage">
    <span class="let" v-for="letter in sentenarr">{{
      letter
    }}
    </span>
    <li
      v-for="(ali, index) in modarr"
      :key="index"
      class="ali"
      :style="{
        background: 'url(../../static/man' + index + '.jpg)',
        backgroundSize: 'cover',
      }"
      @click="jumpto(ali.ad)"
    >
    <div class="atitle">
       {{ ali.title }}
    </div>
     
      <!-- <img src="../assets/man1.jpg" alt=""> -->
    </li>
  </div>
</template>
<script>
export default {
  name: "first",
  data() {
    return {
      modarr: [
        {
          title: "关于我",
          ad: "",
        },
        { title: "小游戏", ad: "/game" },
        {
          title: "第一篇内容",
          ad: "",
        },
      ],
      senten: 'changshiyongyijuhua',
      sentenarr: [],
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
        targets: ".let",
        // height: "80%",
        // width: "15%",
        color: 'red',
        fontSize: '35px'
,        delay: this.anime.stagger(400),
        // direction: "normal",
        // easing: "spring(1, 80, 10, 0)",
      });
      // this.anime({
      //   targets: ".ali",
      //   opacity: [0, 1],
      //   delay: 5000,
      //   // loop: true,
      //   delay: this.anime.stagger(300),
      //   // direction: "normal",
      //   easing: "spring(1, 80, 10, 0)",
      // });
    },
  },
  created(){ this.sentenarr = this.senten.split('')},
  mounted() {
    
    this.listAnimate();
   
    console.log(this.sentenarr,'h')
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
  font-family: cursive;
  .ali:hover {
    opacity: 1;
  }
  .let{
    color: blue;
    display: inline-block;
    font-size: 0;
  }
  .ali {
    font-size: 35px;
    cursor: pointer;
    opacity: 0.5;
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
     .atitle{
       position: absolute;
       top: -40px;
     }
  }
}
</style>
