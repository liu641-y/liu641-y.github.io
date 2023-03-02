<template>
  <div id="answer">
    <div>简历上的一些缺点,随手写了个小页面回答下</div>
    
    <el-button
      type="primary "
      v-for="(oneQuestion, index) in questionList"
      :key="index"
      @click="showAnswer(index)"
      >{{ oneQuestion }}</el-button
    >

    <div>
      {{ myanswer }}
    </div>
  </div>
</template>
<script>
export default {
  name: "questionPage",
  data() {
    return {
      myanswer: '',
      answerList: [
        "大学时报班自学前端。但并不那种速成班，而是花钱买了全套的网课，自己坐在图书馆学了一年。网课内容很全面，也很底层。虽然我没全学会。",
        "上一份工作性质是驻场中国人寿的电商部。但不是那种只做低级工作的外包。而是完整负责项目的开发和运维。所以能接触到核心的代码。接触了很多的项目",
        "之前驾照报了名。去年年底驾照要到期了，所以辞职考驾照，一直到最近才开始找工作。这段时间做做个人网站，学学新技术",
        '想找一份有发展空间的工作，总换工作没有发展前景啊。'
      ],
      questionList: ["如何学习的前端", "上一份工作", "关于空档期",'下一步的规划'],
    };
  },
  methods: {
    showAnswer(ind) {
      //展示答案
      this.myanswer = this.answerList[ind];
    },
  },
  mounted() {
 
  },
};
</script>
<style lang="less" scoped>
.phone{
    #answer{
        width: 90vw;

    }
}
#answer {
  text-align: center;
  width: 600px;
  margin: auto;
}
#answer div{
 margin-top: 20px;
 margin-bottom: 20px;
}
div{
    text-align: center;
}
</style>