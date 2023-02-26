<template>
  <div id="writepage">
    <img class="dao" src="" alt="" />
    <input type="text" v-model="titleContent" id="title" />
    <textarea
      name=""
      id="content"
      cols="100"
      rows="10"
      type="password"
      v-model="acontent"
    ></textarea>
    <button class="btn" @click="submitdata">提交</button>
  </div>
</template>
<script>
export default {
  name: "demo",
  data() {
    return {
      titleContent: "",
      acontent: "",
    };
  },
  methods: {
    submitdata() {
      let title = this.titleContent;
      let content = this.acontent;
      let nd = new Date();
      let weekarr = ["日", "一", "二", "三", "四", "五", "六"];
      let date =
        nd.getFullYear() +
        "年" +
        (nd.getMonth() + 1) +
        "月" +
        nd.getDate() +
        "日" +
        " " +
        nd.toLocaleTimeString() +
        " 星期" +
        weekarr[nd.getDay()];
      let data = JSON.stringify({
        title: title,
        content: content,
        date: date,
      });
      this.$http({
        method: "post",
        url: "editEveryDay",
        data: data
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
  },
  created() {},
  mounted() {},
};
</script>

<style lang="less" scoped>
.phone {
  #writepage {
    input {
      width: 80vw;
    }
    textarea {
      width: 80vw;
    }
  }
}
#writepage {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  input,
  textarea {
    margin-bottom: 40px;
    border-radius: 10px;
    border: none;
    background: rgba(0, 0, 0, 0.1);

    color: white;
    font-size: 20px;
  }
  input:focus,
  textarea:focus {
    outline: none;
  }
  input {
    height: 40px;
    margin-top: 50px;
    width: 500px;
    text-align: center;
    padding: 0 10px;
  }
  textarea {
    padding: 20px;
    width: 800px;
    line-height: 35px;
    resize: none;
  }
  button {
    width: 120px;
    height: 40px;
    border-radius: 10px;
    border: none;
    background: rgba(0, 0, 0, 0.1);
    color: white;
    font-size: 22px;
  }
}
</style>
