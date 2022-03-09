<template>
  <div id="aboutMe">
      <div @click="jumpto('/')" class="jumpto" style="cursor: pointer ; color: red">back to home page</div>
       <div>关灯，吃面</div>
       <span>今天回到家，煮了点面吃，一边吃面一边哭，泪水滴落在碗里，没有开灯</span>
  </div>
</template>
<script>
export default {
  name: "nag",
  data() {
    return {};
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
