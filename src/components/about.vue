<template>
  <div id="aboutMe">
      <div @click="jumpto('/')" class="jumpto" style="cursor: pointer ; color: red">back to home page</div>
      <div>about me</div>
      <div>性别：男</div>
      <div>年龄：24</div>
      <div>爱好：在股市当韭菜，给大佬捐钱。在球场被人秀，给大佬当背景。曾热爱运动，热爱阅读，现在热爱躺平。</div>
  </div>
</template>
<script>
export default {
  name: "about",
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
