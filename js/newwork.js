var name_content = true;
var temp;
var $temp1;
var picture=0;
var flag=true;
var flag1=true;
var img=0;
$(".top_line_center_left_name").mouseover(function(event) {
    $(".name_content").show();
    $(this).css("background-color","#ffffff");
});
$(".top_line_center_left_name").mouseout(function(event) {
    $(".name_content").hide();
    $(this).css("background-color","#f5f5f5");
});

$(".top_line_right_gouwuche").mouseover(function(event) {
    $(".gouwuche_content").show();
    $(this).css("background-color","#ffffff");
});

$(".top_line_right_gouwuche").mouseout(function(event) {
    $(".gouwuche_content").hide();
    $(this).css("background-color","#f5f5f5");
});

$(".gouwuche_content").mouseover(function(event) {
    $(".gouwuche_content").show();
    $(".top_line_right_gouwuche").css("background-color","#ffffff");
});

$(".gouwuche_content").mouseout(function(event) {
    $(".gouwuche_content").hide();
    $(".top_line_right_gouwuche").css("background-color","#f5f5f5");
});


$(".top_line_daohang").mouseover(function(event) {
    $(".daohang_content").show();
    $(this).css("background-color","#ffffff");
});

$(".top_line_daohang").mouseout(function(event) {
    $(".daohang_content").hide();
    $(this).css("background-color","#f5f5f5");
});

$(".daohang_content").mouseover(function(event) {
    $(".daohang_content").show();
    $(".top_line_daohang").css("background-color","#ffffff");
});

$(".daohang_content").mouseout(function(event) {
    $(".daohang_content").hide();
    $(".top_line_daohang").css("background-color","#f5f5f5");
});




$(".danghang_congtent_third").mouseover(function(event) {
    $(this).css("background-color","#ff6537");
    $(this).css("color","#ffffff");
});




$(".second_left_input").keyup(function() {
    var data = $(".second_left_input").val();
    if(data==""){
        $(".imply").show();
    }else{
        $(".imply").hide();
    }
});











var jilu;
$(".twelve_min").mouseover(function(event) {
    var index = $(this).index();
    if(index<4){
        jilu = index;
        $(this).children("a").children("p").css({
            color: '#ff6537',
        });
        $(this).css({
            borderColor: '#ff6537 #ff6537 #ffffff #ff6537',
        });
        for (var i = 0; i <4; i++) {
            if (i!=index) {
                $(".twelve_min").eq(i).css({
                    borderColor: '#EAEAEA #EAEAEA #ff6537 #EAEAEA',
                });
            }
        }
        $(".four_content_ul1").show();

    }
});
$(".twelve_min").mouseout(function(event) {

    $(this).children("a").children("p").css({
        color: '#666',
    });
    $(".four_content_ul1").hide();
        for (var i = 0; i <4; i++) {
                $(".twelve_min").eq(i).css({
                    borderColor: '#EAEAEA',
                });
            
        }
});

$(".four_content_ul1").mouseover(function(event) {
        $(".twelve_min").eq(jilu).children("a").children("p").css({
            color: '#ff6537',
        });
         $(".twelve_min").eq(jilu).css({
            borderColor: '#ff6537 #ff6537 #ffffff #ff6537',
        });

        for (var i = 0; i <4; i++) {
            if (i!=jilu) {
                $(".twelve_min").eq(i).css({
                    borderColor: '#EAEAEA #EAEAEA #ff6537 #EAEAEA',
                });
            }
        }


    $(this).show();

});
$(".four_content_ul1").mouseout(function(event) {
     $(".twelve_min").eq(jilu).children("a").children("p").css({
            color: '#666',
        });
    $(this).hide();
    for (var i = 0; i <4; i++) {
                $(".twelve_min").eq(i).css({
                    borderColor: '#EAEAEA',
                });
            
    }
});



$(".incanghuafeili").click(function(event) {
    var text = $(this).text();
    $(".jiage1").text(text);
    $("#youhui").text(text*98/100+'-'+text*99.5/100);
    $(this).css({
        backgroundColor: '#aaa',
        color :'#fff'
    });
    $(".inhangdehuafei").hide();
});


$(".incanghuafeili").mouseover(function(event) {
    $(this).css({
        backgroundColor: '#aaa',
        color :'#fff'
    });
});
$(".incanghuafeili").mouseout(function(event) {
    if($(this).text()!=$(".jiage1").text()){
        $(this).css({
            backgroundColor: '#fff',
            color :'#000'
        });
    }
});

$(".four_content_lititle").mouseover(function(event) {
    var index = $(this).index();
    $(this).children().css({
        color: '#ff6537',
    });
    $(".out").animate({
        left: -300*index
    },150);
});


$(".four_content_lititle").mouseout(function(event) {
    $(this).children().css({
        color: '#666',
    });
});


$(".jiage").click(function(event) {
    if($(".inhangdehuafei").is(":hidden")){
        $(".inhangdehuafei").show();
    }else{
       $(".inhangdehuafei").hide(); 
    }
});






$("#lunbo_pre").click(function() {
    if(flag){
        picture-=1;
        flag=false;
        $("#third_line_center_center_fuck").animate({
            "left": -picture*520-520},
            100,function (argument) {
                if(picture<=-1){
                     $("#third_line_center_center_fuck").css("left","-2600px");
                     picture=4;
                }
                flag=true;
        });
    }

    $(".lunbo_five").eq(picture).css({
        backgroundColor: '#FF2400',
    });
    $(".lunbo_five").eq(picture).siblings().css({
        backgroundColor: '#aaaaaa',
    });
});

$(".lunbo_conmon").mouseover(function(event) {
    $(".lunbo_conmon").show();

    $(this).css("background-color","#777777");
});
$(".lunbo_conmon").mouseout(function(event) {
    $(this).css("background-color","#aaaaaa");
});

$(".third_line_center_center").mouseover(function(event) {
    $(".lunbo_conmon").show();
});
$(".third_line_center_center").mouseout(function(event) {
    $(".lunbo_conmon").hide();
});



$(".lunbo_conmon1").mouseover(function(event) {
    $(".lunbo_conmon1").show();

    $(this).css("background-color","#777777");
});
$(".lunbo_conmon1").mouseout(function(event) {
    $(this).css("background-color","#aaaaaa");
});

$(".third_line_center_bottom").mouseover(function(event) {
    $(".lunbo_conmon1").show();
});
$(".third_line_center_bottom").mouseout(function(event) {
    $(".lunbo_conmon1").hide();
});






$("#lunbo_next").click(function() {
    if(flag){
        picture+=1;
        flag=false;
        $("#third_line_center_center_fuck").animate({
            "left": -picture*520-520},
            100,function (argument) {
                if(picture>=5){
                     $("#third_line_center_center_fuck").css("left","-520px");
                     picture=0;
                }
                    $(".lunbo_five").eq(picture).css({
                        backgroundColor: '#FF2400',
                    });
                    $(".lunbo_five").eq(picture).siblings().css({
                        backgroundColor: '#aaaaaa',
                    });

                flag=true;
        });
    }

});

$("#lunbo_next2").click(function(event) {
    if(flag1){
        img+=1;
        flag1=false;
        $("#third_line_center_bottom_fuck").animate({
            "left": -img*520-520},
            100,function (argument) {
                if(img>=6){
                     $("#third_line_center_bottom_fuck").css("left","-520px");
                     img=0;
                }
                    $(".lunbo_six").eq(img).css({
                        backgroundColor: '#FF2400',
                    });
                    $(".lunbo_six").eq(img).siblings().css({
                        backgroundColor: '#aaaaaa',
                    });
                    $("#now_picture").text(img+1);
                flag1=true;
        });
    }
});


$("#lunbo_pre2").click(function() {
    if(flag1){
        img-=1;
        flag1=false;
        $("#third_line_center_bottom_fuck").animate({
            "left": -img*520-520},
            100,function (argument) {
                if(img<=-1){
                     $("#third_line_center_bottom_fuck").css("left","-3120px");
                     img=5;
                }
                $(".lunbo_six").eq(img).css({
                    backgroundColor: '#FF2400',
                });
                $(".lunbo_six").eq(img).siblings().css({
                    backgroundColor: '#aaaaaa',
                });
                $("#now_picture").text(img+1);
                 flag1=true;
        });
    }

});



$(".danghang_congtent_third").mouseout(function(event) {
    $(this).css("background-color","#ffffff");
    $(this).css("color","#000000");
});

$(".danghang_content_third_1").mouseover(function(event) {
    $(this).css("background-color","#A6BD46");
    $(this).css("color","#ffffff");
});


$(".danghang_content_third_1").mouseout(function(event) {
    $(this).css("background-color","#ffffff");
    $(this).css("color","#000000");
});

$(".danghang_content_third_2").mouseover(function(event) {
    $(this).css("background-color","#d75696");
    $(this).css("color","#ffffff");
});


$(".danghang_content_third_2").mouseout(function(event) {
    $(this).css("background-color","#ffffff");
    $(this).css("color","#000000");
});


$(".danghang_content_third_3").mouseover(function(event) {
    $(this).css("background-color","#2e9fdb");
    $(this).css("color","#ffffff");
});


$(".danghang_content_third_3").mouseout(function(event) {
    $(this).css("background-color","#ffffff");
    $(this).css("color","#000000");
});




$(".top_line_right_shoucangjia").mouseover(function(event) {
    $(".shoucangjia_content").show();
    $(this).css("background-color","#ffffff");
});

$(".shoucangjia_content").mouseover(function(event) {
    $(".shoucangjia_content").show();
    $(".top_line_right_shoucangjia").css("background-color","#ffffff");
});

$(".top_line_right_shoucangjia").mouseout(function(event) {
    $(".shoucangjia_content").hide();
    $(this).css("background-color","#f5f5f5");
});

$(".shoucangjia_content").mouseout(function(event) {
    $(".shoucangjia_content").hide();
    $(".top_line_right_shoucangjia").css("background-color","#f5f5f5");
});

function donghua () {
    $(".donghua").animate({
        "margin-top": '-=5px'},
        200);
    $(".donghua").animate({
    "margin-top": '+=5px'},
        200);
    $(".donghua").animate({
        "margin-top": '-=5px'},
        200);
    $(".donghua").animate({
    "margin-top": '+=5px'},
        200);
}
$(document).ready(function () {
            setInterval("donghua()", 3000);
});

$(".top_line_center_left_msg").mouseover(function(event) {
    $(".msg_content").show();
    $(this).css("background-color","#ffffff");
});

$(".top_line_right_mytaobao").mouseover(function(event) {
    $(".mytaobao_content").show();
    $(this).css("background-color","#ffffff");
});

$(".top_line_right_mytaobao").mouseout(function(event) {
    $(".mytaobao_content").hide();
    $(this).css("background-color","#f5f5f5");
});

$(".top_line_center_left_msg").mouseout(function(event) {
    $(".msg_content").hide();
    $(this).css("background-color","#f5f5f5");
});

$(".name_content").mouseover(function(event) {
    $(".name_content").show();
    $(".top_line_center_left_name").css("background-color","#ffffff");

});

$(".mytaobao_content").mouseover(function(event) {
    $(".mytaobao_content").show();
    $(".top_line_right_mytaobao").css("background-color","#ffffff");
});

$(".mytaobao_content").mouseout(function(event) {
    $(".mytaobao_content").hide();
    $(".top_line_right_mytaobao").css("background-color","#ffffff");
});

$(".msg_content").mouseover(function(event) {
    $(".msg_content").show();
    $(".top_line_center_left_msg").css("background-color","#ffffff");

});


$(".name_content").mouseout(function(event) {
    $(".name_content").hide();
    $(".top_line_center_left_name").css("background-color","#f5f5f5");

});

$(".msg_content").mouseout(function(event) {
    $(".msg_content").hide();
    $(".top_line_center_left_msg").css("background-color","#f5f5f5");

});


$(".beneath_hengxian_second").mouseover(function(event) {
    $(this).children('.beneath_wenzi').css({
        color: '#FF2400',
    });
});

$(".beneath_hengxian_second").mouseout(function(event) {
    $(this).children('.beneath_wenzi').css({
        color: '#B8B8B8',
    });
});

$(".mytaobao_content_bought").mouseover(function(event) {
    $(this).css("background-color","#f5f5f5");
    $(this).children('a').css("color","#000000");

});

$(".mytaobao_content_bought").mouseout(function(event) {
    $(this).css("background-color","#ffffff");
});


$("#content_line_right_icon").click(function() {
    if (name_content) {
        $(".beneath_hengxian .beneath_hengxian_first").first().css({left:"0"});
        $(".beneath_hengxian .beneath_hengxian_first").first().animate({left:'250px'});
        $(".beneath_hengxian .beneath_hengxian_first").last().css({left:'-250px'});
        $(".beneath_hengxian .beneath_hengxian_first").last().animate({left:'0'});
        name_content=false;
    }else {    
        $(".beneath_hengxian .beneath_hengxian_first").first().css({left:"-250px"});
        $(".beneath_hengxian .beneath_hengxian_first").first().animate({left:'0'});
        $(".beneath_hengxian .beneath_hengxian_first").last().css({left:'0'});
        $(".beneath_hengxian .beneath_hengxian_first").last().animate({left:'250px'});
    }




});

$("#content_line_left_icon").click(function() {
    if (name_content) {
        $(".beneath_hengxian .beneath_hengxian_first").first().css({left:"0"});
        $(".beneath_hengxian .beneath_hengxian_first").first().animate({left:'-250px'});
        $(".beneath_hengxian .beneath_hengxian_first").last().css({left:'250px'});
        $(".beneath_hengxian .beneath_hengxian_first").last().animate({left:'0'});
        name_content=false;
    }else {    
        $(".beneath_hengxian .beneath_hengxian_first").first().css({left:"250px"});
        $(".beneath_hengxian .beneath_hengxian_first").first().animate({left:'0'});
        $(".beneath_hengxian .beneath_hengxian_first").last().css({left:'0'});
        $(".beneath_hengxian .beneath_hengxian_first").last().animate({left:'-250px'});
    }
});


$(".seconde_title_line1").click(function() {
    $(this).css("background-color","#ff6537");
    $(this).css("color","#ffffff");
    $(this).siblings().css("background-color","#ffffff");
    $(this).siblings().css("color","#ff6537");
    $(".second_shurukuang").css("color","#000000");
    $(".imply1").text("懒人必备叠衣板");
    $(".second_right_button").css("background-color","#ff6537");
    $(".second_shurukuang").css("border-color","#ff6537");
    $(".second_left_input").css("border-color","#ff6537");
    $(".second_bottom").first().show();
    $(".second_bottom").last().hide();

});

$(".seconde_title_line2").click(function() {
    $(this).css("background-color","#C40000");
    $(this).css("color","#ffffff");
    $(this).siblings().css("background-color","#ffffff");
    $(this).siblings().css("color","#ff6537");
        $(".second_shurukuang").css("color","#000000");

    $(".imply1").text("潮鞋搭配 运动一夏");
    $(".second_right_button").css("background-color","#C40000");
    $(".second_shurukuang").css("border-color","#C40000");
    $(".second_left_input").css("border-color","#C40000");
    $(".second_bottom").last().show();
    $(".second_bottom").first().hide();

});

$(".seconde_title_line3").click(function() {
    $(this).css("background-color","#ff6537");
    $(this).css("color","#ffffff");
    $(this).siblings().css("background-color","#ffffff");
    $(this).siblings().css("color","#ff6537");
        $(".second_shurukuang").css("color","#000000");

    $(".imply1").text("");
    $(".second_right_button").css("background-color","#ff6537");
    $(".second_shurukuang").css("border-color","#ff6537");
    $(".second_left_input").css("border-color","#ff6537");
    $(".second_bottom").first().show();
    $(".second_bottom").last().hide();
});

$(".imply").click(function() {
    $(".second_left_input").focus();
});




$(document).ready(function() {
    $(".second_left_input").focus();
    $(".lunbo_point").children().first().css({
        backgroundColor: '#FF2400',
    });
    $(".lunbo_point1").children().first().css({
        backgroundColor: '#FF2400',
    });
    $(".wuge_lanmu").eq(0).css({
        borderColor: '#ff6537',
    });
});



$(".wuge_lanmu").mouseover(function(){
    var index = $(this).index();
    t=setTimeout(function(){
        $(".wuge_lanmu").eq(index).css({
            borderColor: '#ff6537',
            color:'#ff6537',
            fontWeight:'900'
        });
        $(".five_content_in").eq(index).css({
            display: 'block',
        });
        $(".wuge_lanmu").eq(index).siblings().css({
            borderColor: '#ffffff',
            color:'#000000',
            fontWeight:'normal'
        });
        $(".five_content_in").eq(index).siblings().css({
            display: 'none',
        });
    },250);
}).mouseout(function(){
clearTimeout(t);
});




$(".second_bottom_more").mouseover(function(event) {
    $(this).children().css("color","#ff6537");
});
$(".second_bottom_more").mouseout(function(event) {
    $(this).children().css("color","#000000");
});






$(".lunbo_five").click(function(event) {
    picture=$(this).index();
    $("#third_line_center_center_fuck").animate({
            "left": -picture*520-520},
            100,function (argument) {
                flag=true;
    });
    $(this).css({
        backgroundColor: '#FF2400',
    });
    $(this).siblings().css({
        backgroundColor: '#aaaaaa',
    });
});

$(".lunbo_six").click(function(event) {
    img=$(this).index();
    $("#third_line_center_bottom_fuck").animate({
            "left": -img*520-520},
            100,function (argument) {
                flag=true;
    });
    $(this).css({
        backgroundColor: '#FF2400',
    });
    $(this).siblings().css({
        backgroundColor: '#aaaaaa',
    });
});





$(".third_line_left_bottomline").mouseover(function() {
    $(this).children('i').first().css("opacity","1");
    $(this).css("background-color","#F64914");
    $(".third_line_left_bottomline_right").show();
    temp=$(this)[0];
});

$(".third_line_left_bottomline").mouseout(function() {
    $(this).children('i').first().css("opacity","0.3");
    $(this).css("background-color","#ff6537");
    $(".third_line_left_bottomline_right").hide();
});

$(".third_line_left_bottomline_right").mouseover(function() {
    $temp1=$(temp);
    $temp1.children('i').first().css("opacity","1");
    $temp1.css("background-color","#F64914");
    $(".third_line_left_bottomline_right").show();
});

$(".third_line_left_bottomline_right").mouseout(function() {
    $temp1.children('i').first().css("opacity","0.3");
    $temp1.css("background-color","#ff6537");
    $(".third_line_left_bottomline_right").hide();
});











$(".third_line_left_bottomline_right1_mode_1_more").mouseover(function(event) {
    $(this).children().css("color","#ff6537");
});
$(".third_line_left_bottomline_right1_mode_1_more").mouseout(function(event) {
    $(this).children().css("color","#000000");
});


$(".third_line_left_bottomline_right2_mode3_background").mouseover(function(event) {
    $(this).css("opacity","1");
    $(this).siblings('.third_line_left_bottomline_right2_mode3_describe').css("color","#FF2400");
}); 

$(".third_line_left_bottomline_right2_mode3_background").mouseout(function(event) {
    $(this).css("opacity","0.5");
    $(this).siblings('.third_line_left_bottomline_right2_mode3_describe').css("color","#555555");

}); 

$(".third_line_left_bottomline_right2_mode3_describe").mouseover(function(event) {
    $(this).siblings('.third_line_left_bottomline_right2_mode3_background').css("opacity","1");
    $(this).css("color","#FF2400");
}); 

$(".third_line_left_bottomline_right2_mode3_describe").mouseout(function(event) {
    $(this).siblings('.third_line_left_bottomline_right2_mode3_background').css("opacity","0.5");
    $(this).css("color","#555555");
}); 



$(".third_line_centet_top_content").mouseover(function(event) {
    $(this).css({
        color: '#ffffff',
        borderColor: '#ff6537',
        backgroundColor:'#ff6537'
    });
});

$(".third_line_centet_top_content").mouseout(function(event) {
    $(this).css({
        color: '#ff6537',
        borderColor: '#ffffff',
        backgroundColor:'#ffffff'
    });
});

$(".third_line_centet_top_content1").mouseover(function(event) {
    $(this).css({
        color: '#ffffff',
        borderColor: '#ff6537',
        backgroundColor:'#ff6537'
    });
});

$(".third_line_centet_top_content1").mouseout(function(event) {
    $(this).css({
        color: '#555555',
        borderColor: '#ffffff',
        backgroundColor:'#ffffff'
    });
});
