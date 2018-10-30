$(function(){
     // var basepath = "http://192.168.1.177:8080/portal-bos/cjq/gua";
    var basepath = "https://www.caijinquan.cn/cjq/gua";
    function getQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
        var r = window.location.search.substr(1).match(reg); 
        if (r != null) return unescape(r[2]); return null; 
    }
    var parameter= getQueryString("login");
    var phone=getQueryString("loginName");
    // var phone=15210761741;
    //兑奖记录
    jiangpin = {    
                    '1':["0","0.3元"],
                    '2':["1","0.5元"],
                    '3':["2","10元"],
                    '4':["3","50元"],
                    '5':["4","100元"],
                    '6':["5","500元"],
                };
    $.jsonp({
        type : "POST",
        url : basepath+"/getGauByPhone.action",
        dataType:"json",  
        data:{'phone':phone,additionalCode:'0000',},
        callbackParameter:"callback", 
        success : function(data) {
            // 奖品
            var htmlData = "";
            var htmlData2 = "";
            var bianl=data.activitySize;
            for (var i=0;i<bianl;i++) {
                htmlData += ' <div class="duij-bb">';                            
                htmlData += ' <div class="rq">' + shijian(data.activityPrizeList[i].createTime) + '</div>'
                htmlData += '<div class="q">'+jiangpin[data.activityPrizeList[i].prizeType][1]+'</div>'
                htmlData += '</div>'
            }
            $("#data").html(htmlData);               
        }
    })
    function shijian(n){
        var msg2=n.split("-");
        if(msg2[1]<10){
            msg2[1]=msg2[1].substring(1)
        }else{
            msg2[1]=msg2[1];
        }
        if(msg2[2]<10){
            msg2[2]=msg2[2].substring(1)
        }else{
            msg2[2]=msg2[2];
        }
        return msg2[0]+"/"+msg2[1]+"/"+msg2[2];
    }
})