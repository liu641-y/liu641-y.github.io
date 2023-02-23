<template>
  <div id="bookPage">
    <!-- <i class="el-icon-s-home backhome" @click="jumpto('/')"> </i> -->
    <div class="booktitle">article list</div>
    <el-collapse accordion>
      <el-collapse-item
        v-for="(book, index) in booklist"
        :key="index"
        :title="book.name"
        :name="index" 
      >
        <!-- <div class="bookdate">{{ book.date }}</div> -->
        <div >
          {{ book.intro || "暂无内容" }}
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>
<script>
export default {
  name: "about",
  data() {
    return {
      booklist: [],
    };
  },
  watch: {},
  methods: {
    jumpto(ad) {
      this.$router.push(ad);
    },
  },
  created() {},
  mounted() {
    this.$http({
      method: "post",
      url: "querydata",
      data: {
        hh: "hh",
      },
    })
      .then((res) => {
        console.log(res, "res");
        let result = res.data;
        let data = result.data.split("\r\n##");
        let mydate = data.filter((item, index) => index % 2 === 1);
        let content = data.filter((item, index) => index % 2 === 0);
        console.log(mydate, content, "s");
        content = content.slice(1);
        let mytitle = [];
        let mycontent = [];
        let list = [];
        content.forEach((ele, ind) => {
          let contentarr = ele.split("\r\n");
          mytitle.push(contentarr[0].split("#")[1]);
          mycontent.push(contentarr[1]);
          list.push({
            name: contentarr[0].split("#")[1],
            date: mydate[ind],
            intro: contentarr[1],
          });
        });
        this.booklist = list;

        console.log(mytitle, mycontent, "my");
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style lang="less" scoped>
.pc {
}
.phone {
  #bookPage {
    width: 90vw;
  }
}
.bookdate {
  color: yellow;
}
#bookPage {
  color: white;
  width: 600px;
  padding-top: 40px;
  margin: auto;

  .booktitle {
    font-size: 30px;
    text-align: center;
    margin-bottom: 10px;
    font-weight: 600;
  }
  
  /deep/ .el-collapse-item__header {
    font-size: 20px;
    color: white;
    background: none;
    // justify-content: center;
    border: 0;
  }
  /deep/ .is-active{
    // border: 1px solid red;
    color: lightcoral !important;
  }
  /deep/ .el-collapse-item__arrow {
    // margin: 0;
    color: white;
    font-weight: bolder;
    // margin-left:40px;
  }
 
  /deep/ .el-collapse-item__wrap div div  {
    font-size: 19px;
   
  }
  /deep/ .el-collapse-item__wrap   {
    background: none;
   
  }
  /deep/ .el-collapse-item__content {
    color: white;
    font-size: 20px;
  }
  .booklist {
    display: flex;
    .abook {
      width: 100px;
      height: 90px;
      border: 1px solid red;
    }
  }
}
</style>
