<template>
  <div id="app" :class="classObject">
    <canvas id="flo"></canvas>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      classObject: {
        phone: false,
        pc: true,
      },
    };
  },
  methods: {
    fit() {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        this.classObject.phone = true;
        this.classObject.pc = false;
      } else {
        this.classObject.phone = false;
        this.classObject.pc = true;
      }
    },
    aldraw() {
      var pat = document.getElementById("flo");
      var app = document.getElementById("app");

      var pa = pat.getContext("2d");
      var cirArry = [];
      function random(min, max) {
        return Math.round(Math.random() * (max - min) + min);
      }
      pat.width = window.innerWidth;
      pat.height = window.innerHeight;

      // app.addEventListener("click", function (e) {
      //   cirArry.length = 0;
      // });
      app.addEventListener("mousemove", function (e) {
        if (cirArry.length < 10) {
          cirArry.push(new cir(e.clientX, e.clientY, 5));
        }
      });
      app.addEventListener("touchstart", function (e) {
        cirArry.push(new cir(e.clientX, e.clientY, 5));
      });

      function cir(x, y, r) {
        this.x = random(0, pat.width); // 在随机位置出现
        this.y = random(0, pat.height);
        this.r = r;
        this.color1 = random(0, 255);
        this.color2 = random(0, 255);
        this.color3 = random(0, 255);
        // this.color = 'rgb(' + random(0,255) + ',' + random(0,255) + ',' + random(0,255) +')';
        this.a = 1;
        this.vx = (Math.random() - 0.5) * 5;
        this.vy = (Math.random() - 0.5) * 5;
        this.draw();
      }
      cir.prototype = {
        draw() {
          pa.beginPath();
          // pa.font = "20px 楷体";    //设置字体大小字体样式
          // pa.fillStyle = 'red';
          pa.fillText("", this.x, this.y); //文字的位置   空心文字
          pa.fillStyle =
            "rgb(" + this.color1 + "," + this.color2 + "," + this.color3 + ")";
          pa.fillStyle = "yellow";
          pa.globalAlpha = this.a;
          pa.arc(this.x, this.y, this.r, 0, Math.PI * 2);
          pa.fill();
          this.mov();
        },
        mov() {
          this.x += this.vx;
          this.y += this.vy;
          this.r += 0.01;
          this.a *= 0.98;
          this.color1 = (this.color1 + random(0, 10)) % 256;
          this.color2 = (this.color2 + random(0, 10)) % 256;
          this.color3 = (this.color3 + random(0, 10)) % 256;
        },
      };

      function rander() {
        
        if(cirArry.length < 2){
          cirArry.push(new cir(random(0, pat.width), random(0, pat.height), 5));
        }
        pa.clearRect(0, 0, pat.width, pat.height);
        cirArry.forEach(function (ele, index) {
          ele.draw();
          if (
            ele.a < 0.1 ||
            ele.x < 0 ||
            ele.y < 0 ||
            ele.x > pat.width ||
            ele.y > pat.height ||
            ele.r < 0
          ) {
            cirArry.splice(index, 1);
          }
        });
        requestAnimationFrame(rander);
      }
      rander();
    },
  },
  mounted() {
    this.fit();
    this.aldraw();
  },
};
</script>
<style>
.backhome {
  cursor: pointer;
  color: red;
  position: fixed;
  left: 0;
  top: 0;
  font-size: 25px;
  padding: 10px;
}
body,
html,
#app,
canvas {
  /* font-family: cursive; */

  height: 100%;
  width: 100%;
  margin: 0;

  font-size: 25px;
}
#app {
  overflow: scroll;
}
#app::-webkit-scrollbar {
  width: 0;
}
canvas {
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  /* opacity: 0; */
  background-color: rgb(104, 104, 104);
}
</style>
