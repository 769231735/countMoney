// $(".container").hide();
// $(".container2").hide();
// $(".container3").hide();

$(".subBegin").on("click",function(){
    $(".detail").eq(0).hide();
    $(".left").addClass("actL");
    $(".down").addClass("actD");
    $(".hand").addClass("actHand");
    $(".beginImg").addClass("actBeginImg");
    $(".container2").hide();
})
$(".rank").on("click",function(){
    $(".detail").eq(1).show();
    $(".detail").eq(2).hide();
    $(".detail").eq(3).hide();
    $(".detail").eq(4).hide();

});
$(".rules").on("click",function(){
    $(".detail").eq(1).hide();
    $(".detail").eq(2).show();
    $(".detail").eq(3).hide();
    $(".detail").eq(4).hide();
});
$(".rewards").on("click",function(){
    $(".detail").eq(1).hide();
    $(".detail").eq(2).hide();
    $(".detail").eq(3).show();
    $(".detail").eq(4).hide();
});
$(".directions").on("click",function(){
    $(".detail").eq(1).hide();
    $(".detail").eq(2).hide();
    $(".detail").eq(3).hide();
    $(".detail").eq(4).show();
});

$(".X").click(function(){
    $(".detail").hide();
    // $(".detail")[0].style.backgroundColor= "transparent";
});
// 开始游戏

$(".beginImg").click(function(){
    console.log(11);
    $(".container").hide();
    $(".container2").show();

})
//滑动钱，就上去
var startY;
var num = 0;
var timer;
var clockNum = 10;
var bol = true;//判断是否开启定时器，有且只有一个定时器开始在运行
// var reBol = true;
// 点击开始游戏
$(".game").on("touchstart",function(e){

    // console.log(e.touches[0].clientY);
    startY =  e.touches[0].clientY;
    $(".bigHand").css("display","none");

    // 定时器
    if (bol) {
        timer = setInterval(function(){
            // 定时器让数字--
                clockNum--;
                console.log(clockNum);
                $(".clock").text(clockNum);
                if(clockNum<=0){
                    // 清除定时器
                    clearInterval(timer);
                    // 重新赋值clockNum
                    clockNum = 10;
                    $(".clock").text(clockNum);
                    $(".unit").text(num);
                    $(".tens").text(num);
                    $(".hundreds").text(num);
                    $(".container").hide();
                    $(".container2").hide();
                    $(".container3").show();
                    $(".getMoney").text("$"+num);
                    $(".glory span").eq(0).text("$"+num);

                    // 重新赋值数钱的个数
                    num = 0;
                    if (num==0) {
                        $(".yibeizi").show();
                        $(".youmeiyou").hide();
                        $(".leileme").hide();
                    }

                    // $(".game").off();
                    // alert("游戏结束");
                }
        },1000)

        bol = false;
    }
})

$(".game").on("touchend",function(e){
    // 重置滑钱上的文字图片
    // $(".yibeizi").show();
    // $(".leileme").hide();
    // $(".youmeiyou").hide();
    // console.log(e.changedTouches[0].clientY);
    // touch事件有专门的获得其点击距离的方式
    var endY = e.changedTouches[0].clientY;
    var slideLength = Math.abs(endY-startY);
    // console.log(slideLength);
    if (slideLength>100) {
        num++;
        $(".unit").text(num%10);
        $(".tens").text(Math.floor((num%100)/10));
        $(".hundreds").text(Math.floor(num/100));

        $("<img class = 'money' src = 'images/money.png' alt=''/>").insertAfter($(".frame"));
        console.log("要做动画了");
        $(".money").animate({top:-200,left:220,width:0,height:0,opacity:0.5
        },500,function(){
            $(this).remove();
        });
    }
    // 判断划了几张，然后显示不同的字图片
    switch (num) {
        case 15:
            $(".yibeizi").slideUp(1000,function () {
                $(".youmeiyou").show("slow");
            });
            break;
        case 30:
            $(".youmeiyou").slideUp(1000,function () {
                $(".leileme").show("slow");
            });
            break;
        default:
    }
})
// 第三页的js
$(".rank2").click(function(){
    console.log(11);
    $(".detail3").eq(0).show();
    $(".detail3").eq(1).hide();
    $(".detail3").eq(2).hide();
    $(".detail3").eq(3).hide();
})
$(".rules2").click(function(){
    console.log(11);
    $(".detail3").eq(0).hide();
    $(".detail3").eq(1).show();
    $(".detail3").eq(2).hide();
    $(".detail3").eq(3).hide();

})
$(".rewards2").click(function(){
    console.log(11);
    $(".detail3").eq(0).hide();
    $(".detail3").eq(1).hide();
    $(".detail3").eq(2).show();
    $(".detail3").eq(3).hide();

})
$(".directions2").click(function(){
    console.log(11);
    $(".detail3").eq(0).hide();
    $(".detail3").eq(1).hide();
    $(".detail3").eq(2).hide();
    $(".detail3").eq(3).show();

})
$(".X1").click(function(){
    $(".detail3").hide();
})
//再来一次
$(".onceAgain").click(function(){
    $(".container").hide();
    $(".container2").show();
    $(".container3").hide();
    $(".detail").eq(0).hide();
    $(".left").addClass("actL");
    $(".down").addClass("actD");
    $(".hand").addClass("actHand");
    $(".beginImg").addClass("actBeginImg");
    bol = true;
})
