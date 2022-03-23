<template>
  <div id="aboutMe">
      <div @click="jumpto('/')" class="jumpto" style="cursor: pointer ; color: red">back to home page</div>
      <div class="titleList">
        <div class="anag" v-for="(anag,index) in naglist" :key="index">
          <span>{{ anag.month}}</span> 月
          <span>{{ anag.day}}</span> 日
          
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
        day: 22,
        month: 3,
        title: 'exports 和 module exports',
        content: ''
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
