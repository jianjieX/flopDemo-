<template>
    <div class="WxShare">
<!-- 内网需要在index.html中引入-->
      <h5>洗牌</h5>
<!--      抽奖-->
      <div class="homeJudge_flop">
<!--        翻牌-->
           <div class="homeJudge_flop_active">
<!--             绑定后台返回的数组列表-->
<!--                  绑定点击事件-->
                <div v-for="(item,index) in cardList" :key="item.index" :id="index" @click="FlopSingleOne(index)">
<!--                    翻牌子正反面 -->
                       <div class="homeJudge_flop_active_twoSide" style="transition:transform 2s">
<!--          v-show="item.front"           正面-->
                            <div class="fc_front"  v-show="item.front">
                                <img :src="item.img" alt="">
                            </div>
<!--&lt;!&ndash;                          反面&ndash;&gt;-->
                             <div class="fc_back">
                                  <img :src="backImg" alt="">
                             </div>
                       </div>
                </div>
             <div class="startFlot" @click="StartFlot">开始洗牌</div>
           </div>
      </div>

    </div>
</template>

<script>
    export default {
        name: "WxShare",
        data(){
            return {

                 iscanclick:false,//卡片是否可以点击
                 cardList:[],//牌子列表
                 isClick:true,   //设置一个变量，防止按钮多次点击
                 backImg:'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3327793117,1234001359&fm=26&gp=0.jpg',
            }
        },
        created() {
        
           let cardList = [
             {
               'img':'https://dss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2300875363,445064071&fm=5',
               front:true,
             },
             {
               'img':'https://dss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1794064296,746211315&fm=5',
               front:true,
             },
             {
               'img':'https://dss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2152435263,329091142&fm=5',
               front:true,
             },
             {
               'img':'https://dss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=1820154701,1076679668&fm=5',
               front:true,
             },
             {
               'img':'https://dss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=416160078,4249346239&fm=5',
               front:true,
             },
             {
               'img':'https://dss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2169658390,1178081336&fm=5',
               front:true,
             },
             {
               'img':'https://dss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=598069525,3705173246&fm=5',
               front:true,
             },
             {
               'img':'https://dss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2038406380,317017081&fm=5',
               front:true,
             }
           ]
           this.cardList =cardList;
            
        },
        methods:{
            //开始洗牌
            StartFlot(){
          
                //动画执行过程中，不允许再次点击
              if(!this.isClick){
                return false;
              }
              let that=this;
              this.cardList.forEach((item,index)=>{
                 $(`#${index} .homeJudge_flop_active_twoSide`).removeClass('fztogether')
                 item.front=false;
                 // that.fanzhuan = true;
               })
              this.iscanclick=true;//洗牌的时候设置成可以点击
              this.isClick=false;
                $('#0').css({
                  transform:'translate(34%,48px)',
                  transition:'all 1s'
                })
                $('#1').css({
                  transform:'translate(10%,48px)',
                  transition:'all 1s'
                })
                $('#2').css({
                  transform:'translate(-14%,48px)',
                  transition:'all 1s'
                })
                $('#3').css({
                  transform:'translate(-38%,50px)',
                  transition:'all 1s'
                })
                $('#4').css({
                  transform:'translate(34%,-43px)',
                  transition:'all 1s'
                })
                $('#5').css({
                  transform:'translate(10%,-43px)',
                  transition:'all 1s'
                })
                $('#6').css({
                  transform:'translate(-14%,-43px)',
                  transition:'all 1s'
                })
                $('#7').css({
                  transform:'translate(-38%,-43px)',
                  transition:'all 1s'
                })

                // 延时3s执行，复原操作
                setTimeout(function () {
                  $('#0').css({
                    transform:'translate(0,0)',
                    transition:'all 1s'
                  })
                  $('#1').css({
                    transform:'translate(0,0)',
                    transition:'all 1s'
                  })
                  $('#2').css({
                    transform:'translate(0,0)',
                    transition:'all 1s'
                  })
                  $('#3').css({
                    transform:'translate(0,0)',
                    transition:'all 1s'
                  })
                  $('#4').css({
                    transform:'translate(0,0)',
                    transition:'all 1s'
                  })
                  $('#5').css({
                    transform:'translate(0,0)',
                    transition:'all 1s'
                  })
                  $('#6').css({
                    transform:'translate(0,0)',
                    transition:'all 1s'
                  })
                  $('#7').css({
                    transform:'translate(0,0)',
                    transition:'all 1s'
                  })
                },1000)
              // }

              //放在期间洗牌按钮被点击
              setTimeout(function () {
                that.isClick=true
              },2000)
            },
        //  翻牌
          FlopSingleOne(index){
              this.isClick = false;
            //  重新定义一个数组--是后台返回的
            let cardList =  [
              {
                'img':'https://dss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2300875363,445064071&fm=5',
                front:false,
              },
              {
                'img':'https://dss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1794064296,746211315&fm=5',
                front:false,
              },
              {
                'img':'https://dss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2152435263,329091142&fm=5',
                front:false,
              },
              {
                'img':'https://dss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=1820154701,1076679668&fm=5',
                front:false,
              },
              {
                'img':'https://dss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=416160078,4249346239&fm=5',
                front:false,
              },
              {
                'img':'https://dss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2169658390,1178081336&fm=5',
                front:false,
              },
              {
                'img':'https://dss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=598069525,3705173246&fm=5',
                front:false
              },
              {
                'img':'https://dss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2038406380,317017081&fm=5',
                front:false,
              }
            ]
            if(!this.iscanclick) return;//卡片不可以点击
            this.iscanclick=false;//一次只能点击一张
            this.cardList[index].img = cardList[index].img;//当前点击的牌
            this.cardList[index].front=true;
            $(`#${index} .homeJudge_flop_active_twoSide`).addClass('fztogether')
            setTimeout(()=>{//2s后反转其他的
              this.cardList.forEach((item,index)=>{
                for(var j = 0;j<cardList.length;j++){
                  if(index == j){
                    item.img = cardList[j].img
                    $(`#${index} .homeJudge_flop_active_twoSide`).addClass('fztogether')
                  }
                }
                item.front=true;
              })
            },2000)
            setTimeout(()=>{//4s后洗牌可以使用
              this.isClick = true;
            },4000)
          }
        }
    }
</script>

<style scoped>
     .homeJudge_flop{
       width:100%;
       height:100%;
     }
      .homeJudge_flop_active{
          width:90%;
          height:13.7rem;
          margin-left:5%;
          background: #aa3311;
          border-radius: .5rem;
          position:relative;
      }
         .homeJudge_flop_active_twoSide{
            position: relative;
           transform-style: preserve-3d;
             margin-top:.5rem;
             margin-left:4%;
             width:20%;
             height:5.2rem;
             float: left;
         }
    .startFlot{
       margin-top:.5rem;
       width:92%;
       color:#fff;
      height:1.5rem;
      line-height: 1.4rem;
      font-size:.2rem;
      position:absolute;
      left:4%;
      bottom:.3rem;
      text-align: center;
      border-radius: .3rem;
      background: #fdd26c;
    }



/*  新添加*/
  .fztogether{
    transform: rotateY(360deg) translateZ(0);
  }
     .fc_front{
       position:absolute;
       z-index: 4;
       left:0;
       top:0;
       width:100%;
       height:100%;
       backface-visibility: hidden;
     }
     .fc_back{
       position:absolute;
       z-index:2;
       left:0;
       top:0;
       width:100%;
       height:100%;
     }
     .fc_front img,.fc_back img{
       width:100%;
       height:100%;
     }
</style>
