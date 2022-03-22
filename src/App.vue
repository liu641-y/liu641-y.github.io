<template>
  <div id="app">
    <canvas id="flo"></canvas>
    <router-view />
  
  </div>
</template>

<script>

export default {
  name: "App",
  methods: {
   hh(){
     console.log()
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
       cirArry.push(new cir(e.clientX, e.clientY, 5));
      });
      app.addEventListener("touchstart", function (e) {
        for (i = 0; i < 8; i++) {
          cirArry.push(new cir(e.clientX, e.clientY, 30));
        }
      });

      function cir(x, y, r) {
        this.x =  random(0,pat.width)// 在随机位置出现
        this.y = random(0,pat.height)
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
          pa.fillText("",this.x, this.y) ; //文字的位置   空心文字
          pa.fillStyle =
            "rgb(" + this.color1 + "," + this.color2 + "," + this.color3 + ")";
          // pa.fillStyle = 'grey';
          pa.globalAlpha = this.a;
          pa.arc(this.x, this.y, this.r, 0, Math.PI * 2);
          pa.fill();
          this.mov();
        },
        mov() {
          this.x += this.vx;
          this.y += this.vy;
          this.r += 0.01;
          this.a *= 0.93;
          this.color1 = (this.color1 + random(0, 10)) % 256;
          this.color2 = (this.color2 + random(0, 10)) % 256;
          this.color3 = (this.color3 + random(0, 10)) % 256;
        },
      };

      function rander() {
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
    this.aldraw();
  },
};
</script>
<style>
body,
html,
#app,
canvas {
  font-family: cursive;
  font-size: 30px;
  /* background-color: black;*/
  height: 100%;
  width: 100%;
  margin: 0;
  /* background-color: black; */
 
  font-size: 30px;
}
#app{
   overflow: scroll;
   
}
#app::-webkit-scrollbar{
  width: 0;
}
canvas {
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  /* opacity: 0; */
  background-color: black;
}
</style>
