$(".main_menu > li").hover(
    function(){
        $(this).children(".download_menu").addClass("on");
    },
    function(){
        $(this).children(".download_menu").removeClass("on");
    }
)
$(".main_menu > li").hover(
    function(){
        $(this).children(".customer").addClass("on");
    },
    function(){
        $(this).children(".customer").removeClass("on");
    }
)

$(".ham_btn").click(function(){
    $(".mobile_menu").css({"display":"block"});
})
$(".close").click(function(){
    $(".mobile_menu").css({"display":"none"});
})

$(".mobile_menu > ul > li > a").click(function(){
    $(this).next().toggleClass("on");
    $(this).children().toggleClass("rotate");
})

// main slide banner
$(".slide").append($(".slide li:first-child").clone());

var n = 0;

function auto() {
    n++;
    if (n >= 3) {
        $(".slide").animate({"left":-n*100+"%"},500,function(){
            $(this).css({"left":"0"});
        });
        n = 0;
    } else {
        $(".slide").animate({"left":-n*100+"%"},500);
    }
    
    
    
}
var timer = setInterval("auto()",3000);
// main slide banner end

$(window).scroll(function(){
    var st = $(this).scrollTop();
    if(st > 0) {
        $("header").addClass("on")
    } else {
        $("header").removeClass("on")
    }
})


// $(".btn_slide").append($(".btn_slide li:first-child").clone());

// var p = 0;

// function play() {
//     p++;
//     if (p >= 2) {
//         $("btn_slide").animate({"left":-p*100+"%"},500,function(){
//             $(this).css({"left":"0"});
//         })
//         p = 0;
//     } else {
//         $(".btn_slide").animate({"left":-n*100+"%"},500);
//     }
// }

// var playauto = setInterval("play()",3000);


$(".Family_site p").click(function(){
    $(".site_list").toggleClass("on");
})

// 로그인 페이지
let id = $("#id"); 
let pw = $("#pw");
let btn = $(".btn-area button");

$(pw).on("focus", function(){
    if($(id).val() == "") {
        $(id).addClass("warning");
    } else {
        $(id).removeClass("warning");
    }
});

$(btn).click(function(){
    if($(pw).val() == "") {
        $(pw).addClass("warning");
    } else {
        $(pw).removeClass();
    }
});
// 로그인 페이지 END
$(".question ul li").click(function(){
    $(this).toggleClass("arrow_c");
    $(this).children().toggleClass("open");
})

$(".question_list li").click(function(){
    $(".question_list li a").removeClass("line");
    $(this).children("a").addClass("line");
})

$(".question_list li").click(function(){
    var qbox = $(this).index()+1;
    $(".common_box").removeClass("on");
    $(".common_box.box"+qbox).addClass("on");
})