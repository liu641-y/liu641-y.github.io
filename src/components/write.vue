<template>
  <div id="writepage">
    <img class="dao" src="" alt="" />
    <input type="text" id="title" />
    <textarea
      name=""
      id="content"
      cols="100"
      rows="10"
      type="password"
    ></textarea>
    <button class="btn">提交</button>
  </div>
</template>
<script>
export default {
  name: "demo",
  data() {
    return {};
  },
  methods: {},
  created() {},
  mounted() {},
};
</script>

<style lang="less" scoped>
.phone{
  #writepage{
    input{
      width: 80vw;
    }
    textarea{
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
  button{
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
