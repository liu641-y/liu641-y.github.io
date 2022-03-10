<template>
  <div id="aboutMe">
      <div @click="jumpto('/')" class="jumpto" style="cursor: pointer ; color: red">back to home page</div>
      <div class="titleList">
        <div class="anag" v-for="(anag,index) in naglist" :key="index">
          <span>{{ anag.day}}</span>
          <span>{{ anag.month}}</span>
          <div>{{ anag.title}}</div>
          
        </div>

      </div>
  </div>
</template>
<script>
export default {
  name: "nag",
  data() {
    return {
      naglist: [{
        day: 9,
        month: 3,
        title: '关灯吃面',
      },{
        day: 9,
        month: 3,
        title: '关灯吃面',
      },{
        day: 9,
        month: 3,
        title: '关灯吃面',
      },{
        day: 9,
        month: 3,
        title: '关灯吃面',
      },{
        day: 9,
        month: 3,
        title: '关灯吃面',
      }]
    };
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
}
</style>
