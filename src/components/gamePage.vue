<template>
  <div class="mypage">
    <div class="days">第{{ days }}</div>
    <!-- <i
      class="el-icon-s-home  backhome"
      @click="jumpto('/')" 
    >
    </i> -->
    <div class="title">猜单词</div>

    <el-popover
      placement="bottom"
      width="200"
      trigger="click"
      content="单词有六个字母，字母不重复。单词中没有粉色字母，包含棕色字母但位置不正确，绿色为完全正确。你只有五次机会，单词每日更新"
    >
      <span class="rules" slot="reference"> 游戏规则</span>
    </el-popover>

    <!-- <div class="rules">
      游戏规则：
      单词有六个字母，字母不重复。单词中没有粉色字母，包含棕色字母但位置不正确，绿色为完全正确。你只有五次机会，单词每日更新
      <div>你只有五次机会，单词每日更新</div>
    </div> -->

    <div class="row" v-for="arow in upletter">
      <div v-for="alet in arow">
        <span :class="alet.text" class="unhave">{{ alet.text }}</span>
      </div>
    </div>

    <form name="myform" class="myform">
      <input
        @keyup="upkey($event, ind - 1)"
        @focus="befocus(ind)"
        class="inp"
        maxlength="1"
        type="text"
        v-for="ind in 6"
        :key="ind"
      />
    </form>
    <div class="butt">
      <button @click="def()" class="confirm">确定</button>
    </div>
    <div v-for="(wor, index) in enterarr" :key="index">
      <span v-for="(t, ind) in wor" :key="ind">
        <span :class="t" class="downlet">{{ t }}</span>
        <!-- <span v-if="t == world[ind]" class="downlet true">{{ t }}</span>
        <span v-else-if="world.indexOf(t) != -1" class="downlet have">{{
          t
        }}</span>
        <span v-else class="downlet unhave">{{ t }}</span> -->
      </span>
    </div>
  </div>
</template>

<script>
import { worldlist } from "../alldata";
export default {
  name: "game",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      upletter: [
        [
          {
            text: "q",
            color: "noth",
          },
          {
            text: "w",
            color: "noth",
          },
          {
            text: "e",
            color: "noth",
          },
          {
            text: "r",
            color: "noth",
          },
          {
            text: "t",
            color: "noth",
          },
          {
            text: "y",
            color: "noth",
          },
          {
            text: "u",
            color: "noth",
          },
          {
            text: "i",
            color: "noth",
          },
          {
            text: "o",
            color: "noth",
          },
          {
            text: "p",
            color: "noth",
          },
        ],
        [
          {
            text: "a",
            color: "noth",
          },
          {
            text: "s",
            color: "noth",
          },
          {
            text: "d",
            color: "noth",
          },
          {
            text: "f",
            color: "noth",
          },
          {
            text: "g",
            color: "noth",
          },
          {
            text: "h",
            color: "noth",
          },
          {
            text: "j",
            color: "noth",
          },
          {
            text: "k",
            color: "noth",
          },
          {
            text: "l",
            color: "noth",
          },
        ],
        [
          {
            text: "z",
            color: "noth",
          },
          {
            text: "x",
            color: "noth",
          },
          {
            text: "c",
            color: "noth",
          },
          {
            text: "v",
            color: "noth",
          },
          {
            text: "b",
            color: "noth",
          },
          {
            text: "n",
            color: "noth",
          },
          {
            text: "m",
            color: "noth",
          },
        ],
      ],
      enterarr: [],
      tes: "tailor",
      undoublearr: [],
      days: 0,
      rightletter: 0,
      inputarr: [], //input 数组
      world: "",
      letterarr: "", //正确单词的字母数组
      alright: false,
    };
  },
  created() {
    this.undoublearr = worldlist;
    this.inputarr = document.getElementsByClassName("inp");
    let firstwechat = new Date("2021/04/09/23:36").getTime();
    let nowtime = new Date();
    let firstdays = nowtime.getTime() - firstwechat;
    this.days = parseInt(firstdays / (1000 * 60 * 60 * 24));
    this.world = this.undoublearr[this.days - 312].toLowerCase();
    this.letterarr = this.world.split("");
  },
  methods: {
    jumpto(ad) {
      this.$router.push(ad);
    },
    befocus(ind) {
      this.inputarr[ind - 1].value = "";
    },
    upkey(e, i) {
      let reg = /^[A-Za-z]/;
      // 输入字母后跳到下一个
      if (i != 5) {
        if (reg.test(this.inputarr[i].value)) {
          if (this.inputarr[i + 1].value == "") {
            this.inputarr[i + 1].focus();
          }
        }
      }
      // 删除键删除上一个input
      if (e.keyCode == 8) {
        if (i != 0) {
          if (this.inputarr[i].value == "") {
            this.inputarr[i - 1].value = "";
            this.inputarr[i - 1].focus();
          }
        }
      }
    },
    def() {
      if (this.alright) {
      } else {
        this.rightletter = 0;
        let enterWorld = "",
          ifInWorldArr = false;
        for (let i = 0; i < 6; i++) {
          enterWorld += this.inputarr[i].value;
        }
        this.undoublearr.forEach((ele) => {
          if (ele.toLowerCase() == enterWorld) {
            ifInWorldArr = true;
          }
        });
        if (!ifInWorldArr) {
          this.$message.error("请输入正确的单词");
          navigator.vibrate(1000); // 手机震动
          for (let i = 0; i < 6; i++) {
            this.inputarr[i].value = "";
          }
        } else {
          this.enterarr.push(enterWorld);
          for (let i = 0; i < 6; i++) {
            this.deal(this.inputarr[i].value, this.letterarr[i]);
            this.inputarr[i].value = "";
          }

          this.$forceUpdate();
        }
        if (this.rightletter == 6) {
          this.$message({
            message: "恭喜你，答对了",
            type: "success",
          });
          this.alright = true;
        } else {
          if (this.enterarr.length == 5) {
            this.alright = true;
            this.$message({
              message: "很遗憾5次机会用尽了，这个单词是" + this.world,
              type: "warning",
            });
            // alert("很遗憾5次机会用尽了，这个单词是" + this.world);
          }
        }
      }
    },
    deal(invalue, num) {
      this.upletter.forEach((ele) => {
        ele.forEach((item) => {
          if (item.text == invalue) {
            if (invalue == num) {
              this.rightletter++;
              item.color = "true";
              this.anime({
                targets: '.' +item.text ,
                backgroundColor: "#67c23a",
                easing: "easeInOutQuad",
              });
            } else {
              let ifhave = false;
              this.letterarr.forEach((ele) => {
                if (invalue == ele) {
                  item.color = "have";
                  this.anime({
                    targets: '.' +item.text ,
                    backgroundColor: "#e6a23c",
                    easing: "easeInOutQuad",
                  });

                  ifhave = true;
                }
              });
              if (!ifhave) {
                item.color = "unhave"; 
              }
            }
          }
        });
      });
    },
  },
};
</script>

<style scoped>
.phone .inp{
  width: 10vw;
}
.mypage {
  /* background-color: white; */
  color: white;
}
.title {
  text-align: center;
  font-size: 25px;
  padding: 10px;
}
.title span {
  position: absolute;
  /* right: 50px; */
  font-size: 10px;
}
.row {
  display: flex;
  justify-content: center;
  margin-bottom: 7px;
}

.row span {
  margin: 0 5px;
  display: inline-block;
  height: 35px;
  width: 25px;
  border-radius: 5px;
  line-height: 30px;
  font-size: 30px;
  border: 2px solid white;
  text-align: center;

  color: white;
}
.days {
  text-align: center;
  position: absolute;
  right: 0;
  padding: 10px;
}
.rules {
  position: absolute;
  left: 50px;
  top: 10px;
  line-height: 25px;
  font-size: 13px;
  cursor: pointer;
}

.inp {
  /* display: inline-block; */

  width: 35px;
  height: 35px;
  line-height: 25px;
  font-size: 30px;
  text-align: center;
  margin: 0 1px;
  border-radius: 8px;
  padding: 0;
}

.butt,
.myform {
  display: flex;
  justify-content: center;
}

.downlet {
 background-color: #f56c6c;
  height: 40px;
  line-height: 40px;
  width: 40px;
  display: inline-block;
  color: white;
  font-size: 30px;
  text-align: center;
  margin-right: 5px;
  margin-left: 5px;
  border-radius: 2px;
  margin-bottom: 5px;
}
.noth {
  background-color: black;
}

.have {
  background-color: #e6a23c;
}

.true {
  background-color: #67c23a;
}

.unhave {
  background-color: #f56c6c;
}

.confirm {
  margin: auto;
  margin-top: 15px;
  margin-bottom: 15px;
  background-color: pink;
  color: white;
  border: none;
  height: 50px;
  line-height: 50px;
  /* width: 80px; */
  font-size: 30px;
  border-radius: 15px;
}
</style>
