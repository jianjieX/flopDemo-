<template>
    <div>
      <div align="center" id="demo" style="overflow:hidden;height:200px;width:600px;border:1px solid #000;">
        <div id="demo1">
          HTML5是一个丰富的应用，可以给用户很多视觉上的享受！
        </div>
        <div id="demo2"></div>
      </div>
    </div>
</template>

<script>
  import $ from 'jquery'
    export default {
        name: "happy",
       data(){
          return{

          }
       },
      created() {
        var demo = $("#demo")[0];
        var demo1 = $("#demo1")[0];
        var demo2 = $("#demo2")[0];
        var speed = 10;    //滚动速度值，值越大速度越慢
        var nnn = 200 / demo1.offsetHeight;
        for (i = 0; i < nnn; i++) {
          demo1.innerHTML += "<br />" + demo1.innerHTML
        }
        demo2.innerHTML = demo1.innerHTML    //克隆demo2为demo1
        function Marquee() {
          if (demo2.offsetTop - demo.scrollTop <= 0)    //当滚动至demo1与demo2交界时
            demo.scrollTop -= demo1.offsetHeight    //demo跳到最顶端
          else {
            demo.scrollTop++
          }
        }

        var MyMar = setInterval(Marquee, speed);        //设置定时器
        demo.onmouseover = function () {
          clearInterval(MyMar)
        }    //鼠标经过时清除定时器达到滚动停止的目的
        demo.onmouseout = function () {
          MyMar = setInterval(Marquee, speed)
        }    //鼠标移开时重设定时器
      },
      methods:{


      }
    }
</script>

<style scoped>
  ul li{
    list-style: none;
  }
  body{
    background-color: #f3f3f3
  }
  .testScroll{
    overflow: hidden;
    height: 4rem;
    background-color: #fff;
  }
  #contentBlock{
    margin-top: 0;
    margin-bottom: 0;

    height: 101%;
  }
</style>
