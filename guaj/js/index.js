window.onload=function(){

      //var basepath = "http://192.168.1.177:8080/portal-bos/cjq/gua";
     var basepath = "https://www.caijinquan.cn/cjq/gua";
     // 刮奖
    // $('#redux').eraser({

          // completeRatio: 1,
          // size: 40,
          // progressFunction: function(p) {
          //   if(p*100>80||p*100==80){
          //     $('#redux').eraser('clear');
          //     setTimeout(function(){
          //          $(".mask1").css({display:"block"});
          //          $(".t-k1").css({display:"block"}); 
          //     },1500)
          //     $(".guaj-btn").click(function(){
          //         $('#redux').eraser('reset');
          //         $('#redux').eraser('disable');
          //         $(".banner-b a:eq(1) img").attr({src:"img/start.png"});
          //         $(".bd2").css({display:"none"});
          //     })
              
          //   }
          // }
    // });
    $('#redux').eraser('disable');  //不能刮奖
     function getQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
        var r = window.location.search.substr(1).match(reg); 
        if (r != null) return unescape(r[2]); return null; 
    }
    var parameter= getQueryString("login");
    var phone=getQueryString("loginName");
    // var phone=15210761741;
    // var parameter=1;  
    $(".mask").css({height:$(".box").height()+"px"});
    $(".mask1").css({height:$(".box").height()+"px"});
    var jph=$(".jp div").height();
    $(".jp div").css({lineHeight:jph+"px"});
    
    // 获取财金币-弹框
    $(".cjb span:eq(1)").click(function(){
        $(".mask").css({display:"block"});
        $(".t-k").css({display:"block"});
    })
    $(".tk-t img:eq(1)").click(function(){
        $(".mask").css({display:"none"});
        $(".t-k").css({display:"none"});
    })
    $(".jcq-btn").click(function(){
        $(".mask").css({display:"none"});
        $(".t-k").css({display:"none"});
         window.location.href = "cjq:terminal";
    })
    
    // 滚动-start
    // 左边
    var speedi=80;
    var colee2=document.getElementById("colee2");
    var colee1=document.getElementById("colee1");
    var colee=document.getElementById("colee");
    colee2.innerHTML=colee1.innerHTML; //克隆colee1为colee2
    function Marquee1(){
    //当滚动至colee1与colee2交界时
    if(colee2.offsetTop-colee.scrollTop<=0){
    colee.scrollTop-=colee1.offsetHeight; //colee跳到最顶端
    }else{
    colee.scrollTop++
    }
    }
    var MyMar1=setInterval(Marquee1,speedi)//设置定时器
// 右边
    var coleer2=document.getElementById("coleer2");
    var coleer1=document.getElementById("coleer1");
    var coleer=document.getElementById("coleer");
    coleer2.innerHTML=coleer1.innerHTML; //克隆colee1为colee2
    function Marqueer1(){
    //当滚动至colee1与colee2交界时
    if(coleer2.offsetTop-coleer.scrollTop<=0){
    coleer.scrollTop-=coleer1.offsetHeight; //colee跳到最顶端
    }else{
    coleer.scrollTop++
    }
    }
    var MyMarr1=setInterval(Marqueer1,speedi)//设置定时器
    // console.log(num+"  "+arr[num])
// 滚动-end
/*分享*/
    $(".fx").click(function(){
        // $.jsonp({
        //     type : "POST",
        //     url : basepath+"/guaShare.action",
        //     dataType:"json",  
        //     data:{'phone':phone,additionalCode:'0000',},
        //     callbackParameter:"callback", 
        //     success : function(data) {
        //         $.jsonp({
        //             type : "POST",
        //             url : basepath+"/getGauCJB.action",
        //             dataType:"json",  
        //             data:{'phone':phone,additionalCode:'0000',},
        //             callbackParameter:"callback", 
        //             success : function(data) {
        //                  console.log(data.balance)
        //                  $(".cjb span:eq(0)").html(Math.floor(data.balance));      
        //             } 
        //         })
        //     }
        // });
    })
   jp = {    
            '1':["0","0.3元"],
            '2':["1","0.5元"],
            '3':["2","10元"],
            '4':["3","50元"],
            '5':["4","100元"],
            '6':["5","500元"],
        };
// 中奖用户
   //  $.jsonp({
   //      type : "POST",
   //      url : basepath+"/getGuaPrizesWallIndex.action",
   //      dataType:"json",  
   //      data:{'phone':phone,additionalCode:'0000',},
   //      callbackParameter:"callback", 
   //      success : function(data) {
   //          // 奖品
   //          var bianl=data.activitySize;
   //          // console.log(bianl)
   //          for(var i=0;i<bianl;i++){
   //              $("<li>"+data.activityPrizeList[i].phone+"</li>").appendTo("#colee1");
   //              $("<li>"+jp[data.activityPrizeList[i].prizeType][1]+"</li>").appendTo("#coleer1");
   //          }
			// $("#mon").html(data.totalMoney)            
   //      }
   //  })
 /*刷新--财金币*/
        $.jsonp({
            type : "POST",
            url : basepath+"/getGauCJB.action",
            dataType:"json",  
            data:{'phone':phone,additionalCode:'0000',},
            callbackParameter:"callback", 
            success : function(data) {
                 console.log(data.state);
                     $(".cjb span:eq(0)").html(Math.floor(data.balance)); 
                     if(data.balance<5){
                        $('#redux').eraser('disable');  //不能刮奖
                        $(".weid").css({display:"block"});
                        $(".weid").click(function(){
                            $(".mask1").css({display:"block"});
                            $(".t-k1").css({display:"block"});
                        })   
                        $(".banner-b a:eq(1)").click(function(){
                             $(".mask1").css({display:"block"});
                            $(".t-k1").css({display:"block"});
                        })   
                        $(".t-k1 p").html("您的财金币余额不足");
                        $(".guaj-btn").html("获取更多财金币");
                        $(".guaj-btn").click(function(){
                            $(".mask1").css({display:"none"});
                            $(".t-k1").css({display:"none"});
                            window.location.href = "cjq:terminal"; //此链接为与前端定义的链接
                        }) 
                    }     
            }               
        });
    // 刮奖-弹框
    $(".guaj-btn").click(function(){
        $(".mask1").css({display:"none"});
        $(".t-k1").css({display:"none"});
    })
     jiangpin = {    '0':['很遗憾，您未中奖！<br/>继续加油吧！'],
                    '1':["恭喜您！您刮中0.3元现金!<br/>请在“我的红包”中查收"],
                    '2':["恭喜您！您刮中0.5元现金!<br/>请在“我的红包”中查收"],
                    '3':["恭喜您！您刮中10元现金!<br/>请在“我的红包”中查收"],
                    '4':["恭喜您！您刮中50元现金!<br/>请在“我的红包”中查收"],
                    '5':["恭喜您！您刮中100元现金!<br/>请在“我的红包”中查收"],
                    '6':["恭喜您！您刮中500元现金!<br/>请在“我的红包”中查收"],
                    '-1':["您的财金币余额不足"],
                    '-2':["请勿频繁操作！"],
                };

    $(".banner-b a:eq(1)").on("click", function(){

        //alert("活动已结束");
        $(".mask1").show();
         $(".t-k1").css({display:"block"});
         $(".t-k1>p").html("活动已结束") 
        $(".guaj-btn").html("确认");
         //alert("活动已结束");
         
        // $(".bd2").css({display:"block"});
        // $('#redux').eraser('enable');   //能刮奖
        // $(this).children("img").attr({src:"img/start2.png"});
        // $.jsonp({
        //     type : "POST",
        //     url : basepath+"/getGuaResult.action",
        //     dataType:"json",  
        //     data:{'phone':phone,additionalCode:'0000',},
        //     callbackParameter:"callback", 
        //     success : function(data) {  
        //         // data.balance=8;
        //         console.log(data.prizeType)
        //         $(".cjb span:eq(0)").html(Math.floor(data.balance));
        //             $(".t-k1 p").html(jiangpin[data.prizeType][0]);
        //             if(data.prizeType=="-1"){
        //                 $('#redux').eraser('disable');  //不能刮奖
        //                 $(this).children("img").attr({src:"img/start.png"});
        //                 $(".banner-b a:eq(1)").off("click");
        //                 $(".mask1").css({display:"block"});
        //                 $(".t-k1").css({display:"block"});
        //                 $(".banner-b a:eq(1)").click(function(){
        //                     $(".mask1").css({display:"block"});
        //                     $(".t-k1").css({display:"block"});
        //                 }) 
        //                 $(".guaj-btn").html("获取更多财金币");
        //                 $(".guaj-btn").click(function(){
        //                     $(".mask1").css({display:"none"});
        //                     $(".t-k1").css({display:"none"});
        //                     window.location.href = "cjq:terminal"; //此链接为与前端定义的链接
        //                 }) 
        //             }else{
        //                 console.log(data.guaGuaList)
        //                 for(var i=0;i<6;i++){
        //                     $(".jp div").eq(i).html(data.guaGuaList[i]);
        //                 }
        //              }
        //     }
        // })
    })
    
    if (parameter==1) {
        $(".weid").css({display:"none"});
        $(".cjb").css({display:"block"});
        // $(".jiant").css({display:"block"});
        $(".banner-b a:eq(0)").attr({href:"duij.html?login="+parameter+"&loginName="+phone});
        $(".banner-b a:eq(1)").attr({href:"javascript:;"});
        $(".fx").attr({href:"cjq:inviteone"});
    } else{
        $(".banner-b a:eq(1)").off("click");
        $(".weid").css({display:"block"});
        $(".weid").click(function(){
            window.location.href = "cjq:login";
        })
        $(".cjb").css({display:"none"});
        // $(".jiant").css({display:"none"});
        $(".banner-b a:eq(0)").attr({href:"cjq:login"});
        $(".banner-b a:eq(1)").attr({href:"cjq:login"});
        $(".fx").attr({href:"cjq:login"});
    } 

}