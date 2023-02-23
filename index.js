var express = require("express");
// var anime = require("animejs/lib/anime");

const cors = require('cors')

var app = new express();

app.use(cors({
    // origin: 'http://localhost:8080',
    // methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: '*'
  }))

app.use(express.static("./docs/")); //建立静态资源服务器
 

app.listen('12301', function () {
    console.log("服务器已启动");
})

