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



var example1 = new Vue({
  el: '#third_line_centet_fuck',
  data: {
    items: [
      { kind: "content",message: '天猫' },
      { kind: "content",message: '聚划算' },
      { kind: "content",message: '天猫超市' },
      { kind: "verticalline",message: '|' },
      { kind: "content1",message: '淘抢购' },
      { kind: "content1",message: '电器城' },
      { kind: "content1",message: '司法拍卖' },
      { kind: "content1",message: '中国质造' },
      { kind: "content1",message: '特色中国' },
      { kind: "verticalline",message: '|' },
      { kind: "content1",message: '阿里旅行' },
      { kind: "content1",message: '智能生活' },
      { kind: "content1",message: '苏宁易购' },
    ]
  }
})


var example2 = new Vue({
  el: '#third_line_center_center_fuck',
  data: {
    items: [
        { src: "img/5.jpg"},
        { src: "img/1.jpg"},
        { src: "img/2.jpg"},
        { src: "img/3.jpg"},
        { src: "img/4.jpg"},
        { src: "img/5.jpg"},
        { src: "img/1.jpg"},

    ]
  }
})






var example3 = new Vue({
  el: '#third_line_center_bottom_fuck',
  data: {
    items: [
        {
            id:"forth_kind",
            imglist:[
                {src: "img/261.jpg"},
                {src: "img/262.jpg"},
            ]
        },
        {
            id:"first_kind",
            imglist:[
                {src: "img/211.jpg",width:"33.3%",height:"100%"},
                {src: "img/212.jpg",width:"33.3%",height:"50%"},
                {src: "img/213.jpg",width:"33.3%",height:"50%"},
                {src: "img/214.jpg",width:"33.3%",height:"50%"},
                {src: "img/215.jpg",width:"33.3%",height:"50%"},

            ]

        },
        {
            id:"second_kind",
            imglist:[
                {src: "img/221.jpg"},
                {src: "img/222.jpg"},
                {src: "img/223.jpg"},
                {src: "img/224.jpg"},
                {src: "img/225.jpg"},
                {src: "img/226.jpg"},

            ]

        },
        {
            id:"second_kind",
            imglist:[
                {src: "img/231.jpg"},
                {src: "img/232.jpg"},
                {src: "img/233.jpg"},
                {src: "img/234.jpg"},
                {src: "img/235.jpg"},
                {src: "img/236.jpg"},

            ]

        },
        {
            id:"second_kind",
            imglist:[
                {src: "img/241.jpg"},
                {src: "img/242.jpg"},
                {src: "img/243.jpg"},
                {src: "img/244.jpg"},
                {src: "img/245.jpg"},
                {src: "img/246.jpg"},

            ]
        },
        {
            id:"third_kind",
            imglist:[
                {src: "img/251.jpg"},
                {src: "img/252.jpg"},
                {src: "img/253.jpg"},
                {src: "img/254.jpg"},
                {src: "img/255.jpg"},
                {src: "img/256.jpg"},
                {src: "img/257.jpg"},
                {src: "img/258.jpg"},
                {src: "img/259.jpg"},
                {src: "img/2510.jpg"},
                {src: "img/2511.jpg"},
                {src: "img/2512.jpg"},
            ]
        },
        {
            id:"forth_kind",
            imglist:[
                {src: "img/261.jpg"},
                {src: "img/262.jpg"},
            ]
        },
        {
            id:"first_kind",
            imglist:[
                {src: "img/211.jpg",width:"33.3%",height:"100%"},
                {src: "img/212.jpg",width:"33.3%",height:"50%"},
                {src: "img/213.jpg",width:"33.3%",height:"50%"},
                {src: "img/214.jpg",width:"33.3%",height:"50%"},
                {src: "img/215.jpg",width:"33.3%",height:"50%"},

            ]

        },
    ]
  }
})


var example3 = new Vue({
  el: '#third_line_center_bottom_fuck1',
  data: {
    items: [
        {
            display:"block",
            imglist:[
                {content: "阿里巴巴集团与哈萨克斯坦达成战略合作",width:"100%",color:"#FF2400"},
                {content: "全球领导力人才招募",width:"50%"},
                {content: "第三届县域电商峰会",width:"50%"},
            ]
        },
        {
            display:"none",    
            imglist:[
                {content: "出售假冒商品规则变更",width:"50%",color:"#FF2400"},
                {content: "商品发布数量限制变更",width:"50%"},
                {content: "中国质造市场管理规范",width:"50%"},
                {content: "淘宝网营销规则变更",width:"50%"},
            ]
        },
        {
            display:"none",    
            imglist:[
                {content: "淘宝行业规划发布会",width:"50%",color:"#FF2400"},
                {content: "阿里推出兼职神器",width:"50%"},
                {content: "原创设计女装乐往",width:"50%"},
                {content: "是赚钱还是骗子",width:"50%"},
            ]
        },
        {
            display:"none",    
            imglist:[
                {content: "淘宝用户必备神器",width:"50%",color:"#FF2400"},
                {content: "卖家账户安全9守则",width:"50%"},
                {content: "支付宝实名认证信息",width:"50%"},
                {content: "账户没钱也被骗？",width:"50%"},
            ]
        },
        {
            display:"none",    
            imglist:[
                {content: "阿里联合公益计划启动",width:"50%",color:"#FF2400"},
                {content: "一图看懂联合公益计划",width:"50%"},
                {content: "公益宝贝卖家发票索取",width:"50%"},
                {content: "公益机构淘宝开店攻略",width:"50%"},
            ]
        },
  
    ]
  }
})






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
        flag=false;
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
