<template>
  <div id="aboutMe">
    <!-- <i
      class="el-icon-s-home backhome"
      @click="jumpto('/')" 
    >
    </i> -->

    <div class="title" style=""><span>刘思远</span></div>
    <div class="title">
      <span>性别：</span><span>男</span><span>年龄：</span><span>二十几</span>
    </div>
    <div>个人说明：爱好广泛，工作前端。</div>
    <div>
      本网站介绍：前端用的vue2，组件库使用的element，动效使用了animejs。背景动效使用的canvas。后端利用了nodejs，但是还没整数据库。利用node将数据暂时写到了一个md文件中。刚做不久，样式和功能还没完善。暂时刚写两个接口。
    </div>

    <div>
      项目经验：问卷管理系统，创建问卷、管理问卷、显示问卷、数据统计
    </div>
    <div class="mycarousel">
      <el-carousel height="250px" indicator-position="none">
        <el-carousel-item v-for="item in 5" :key="item"> 
          <el-image class="myimage"
            :src="'../../static/img/mypro ('+ item  +').png'"
            :preview-src-list="cList"
          >
          </el-image> 
        </el-carousel-item>
      </el-carousel>
    </div>
    <div>
      项目经验：国寿综合金融app样式改版，四个一级页面
    </div>
    <div class="mycarousel">
      <el-carousel height="250px" indicator-position="none">
        <el-carousel-item v-for="item in 4" :key="item"> 
          <el-image class="myimage"
            :src="'../../static/img/my-mb-pro ('+ item  +').png'"
            :preview-src-list="rList"
          >
          </el-image>
        </el-carousel-item>
      </el-carousel>
    </div>  
    <div>
      项目经验：国寿驾驶舱，数据报送页、固定报表页的开发。以及后期的bug修改，性能优化。
    </div>
     <div class="mycarousel">
      <el-carousel height="250px" indicator-position="none">
        <el-carousel-item v-for="item in 5" :key="item"> 
          <el-image class="myimage"
            :src="'../../static/img/my-j-pro ('+ item  +').png'"
            :preview-src-list="srcList"
          >
          </el-image>
        </el-carousel-item>
      </el-carousel>
    </div>

    <div>
      项目经验：国寿官网，产品中心的样式改版。以及国寿官网，喜迎二十大模块开发。链接 <a href="https://www.chinalife.com.cn/chinalife/shsyz90/shzyjym/">点此跳转</a>
    </div>
    <div class="mycarousel">
      <el-carousel height="250px" indicator-position="none">
        <el-carousel-item v-for="item in 3" :key="item"> 
          <el-image class="myimage"
            :src="'../../static/img/my-g-pro ('+ item  +').png'"
            :preview-src-list="sList"
          >
          </el-image>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>
<script>
export default {
  name: "about",
  data() {
    return {
      url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      srcList: [
          '../../static/img/my-j-pro (1).png',
          '../../static/img/my-j-pro (2).png',
          '../../static/img/my-j-pro (3).png',
          '../../static/img/my-j-pro (4).png',
          '../../static/img/my-j-pro (5).png'
        ],
        sList: [
          '../../static/img/my-g-pro (1).png',
          '../../static/img/my-g-pro (2).png',
          '../../static/img/my-g-pro (3).png'  
        ],
        rList: [
          '../../static/img/my-mb-pro (1).png',
          '../../static/img/my-mb-pro (2).png',
          '../../static/img/my-mb-pro (3).png',
          '../../static/img/my-mb-pro (4).png'
        ],
        cList: [
          '../../static/img/mypro (1).png',
          '../../static/img/mypro (2).png',
          '../../static/img/mypro (3).png',
          '../../static/img/mypro (4).png',
          '../../static/img/mypro (5).png'
        ],
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
.phone {
  #aboutMe {
    width: 90vw;
  }
}
#aboutMe {
  font-size: 18px;
  font-family: "Times New Roman", Times, serif;
  width: 600px;
  margin: auto;
  padding-top: 30px;
  font-weight: 600;
  .title {
    display: flex;
  }
  div {
    justify-content: space-between;
    padding-bottom: 20px;
    font-size: 20px;
  }
  .content {
    line-height: 30px;
  }
  /deep/ .el-descriptions__title {
    color: white;
    font-size: 25px;
  }
  /deep/ .el-descriptions__body {
    background-color: black;
    color: white;
    font-size: 20px;
  }
  /deep/ .el-carousel__item {
    width: 100%;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
    // background-color: red;
    display: flex;
    justify-content: center;
  }
  .mycarousel {
    width: 100%;
  }
  .myimage{
    height: 100%;
  }
}
</style>
