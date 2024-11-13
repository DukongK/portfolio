$(function () {
  // header menu color
  $(window).on("scroll", function () {
    let nav = $(this).scrollTop();
    // 스크롤 숫자 나오는지 확인
    console.log(nav);
    // backdrop-filter: blur(6px);
    // 아래로 스크롤 조금 할 때 (if)배경 나타나고 위로 올리면 (else)배경 투명
    if (nav >= 2) {
      $("header nav").css({ "backdrop-filter": "blur(6px)" });
      $("header nav").css({ height: "100px" });
      $(".logo_w").css({ display: "none" });
      $(".red_line").addClass("on");
    } else {
      $("header nav").css({ "background-color": "transparent" });
      $("header nav").css({ height: "80px" });
      $(".logo_w").css({ display: "none" });
      $(".red_line").removeClass("on");
    }
  });

  // header nav hover 마우스 닿았을 때 배경 변경
  $("header nav").on("mouseenter", function () {
    $(this).css({ "background-color": "#ff0000" });
    $(".logo_w").css({ display: "block" });
  });

  //   마우스 스크롤을 내릴 때 nav에 닿았다 빼도 그대로 유지하는 방법은
  // if else로 다시 나눠준다
  // window scrollTop >= 2 할 때 if는 배경색이 나타나고
  // 그렇지 않으면 배경색이 투명해진다
  //   그래서 위로 올릴때만 배경투명이 적용되고 아래로 2만큼 내리면 색상이 그대로 유지된다
  $("header nav").on("mouseleave", function () {
    if ($(window).scrollTop() >= 2) {
      $(this).css({ "background-color": "transparent" });
      $(".logo_w").css({ display: "none" });
    } else {
      $("header nav").css({ "background-color": "transparent" });
      $(".logo_w").css({ display: "none" });
    }
    // $(this).css({ "background-color": "transparent" });
  });

  // header hambergur_bar
  $(".menu_line").on("click", function () {
    $(".menu_line .line1").toggleClass("on");
    $(".menu_line .line2").toggleClass("on3");
    $(".menu_line .line3").toggleClass("on2");
    $(".menu_wrap").fadeToggle();
    $(".menu_list").toggleClass("on");
  });

  $(".menu_txt li").on("mouseenter", function () {
    let menu_li = $(this).index();
    $(".menu_txt ul li div").eq(menu_li).addClass("on");
    $(".menu_txt ul a").addClass("on");
    $(".menu_txt li").eq(menu_li).addClass("on");
    $(".menu_txt ul li a").eq(menu_li).addClass("on");
  });
  $(".menu_txt li").on("mouseleave", function () {
    $(".menu_txt ul li div").removeClass("on");
    $(".menu_txt li").removeClass("on");
    $(".menu_txt ul a").removeClass("on");
  });

  $(".hambergur li").on("mouseenter", function () {
    $(this).children(".linebox").stop().animate({ top: "10" });
  });
  $(".hambergur li").on("mouseleave", function () {
    $(this).children(".linebox").stop().animate({ top: "-50" });
  });

  // header main box
  $(function () {
    $(".main_point").addClass("on");
    $(".main_1").addClass("on");
    $(".main_2").addClass("on");
    $(".main_line1").addClass("on");
    $(".main_line2").addClass("on");
    $(".main_point img").addClass("on");
  });

  // card design
  $(function () {
    $(".card1").on("mouseenter", function () {
      $(".b_line1").addClass("on");
      $(".b_line2").addClass("on");
    });
    $(".card1").on("mouseleave", function () {
      $(".b_line1").removeClass("on");
      $(".b_line2").removeClass("on");
    });
  });

  // page8 자동 페이드---------------------

  let total = $(".p8_panel li").length;
  console.log(total);
  let i = 0;

  start();
  function start() {
    stop = setInterval(function () {
      if (i == total - 1) {
        i = 0;
      } else {
        i++;
      }
      fade();
    }, 2000);
  }

  function fade() {
    $(".p8_panel li").stop().fadeOut();
    $(".p8_panel li").eq(i).stop().fadeIn();
    $(".p8_button li").removeClass("on");
    $(".p8_button li").eq(i).addClass("on");
    $(".p8_button li").children("div").stop().css({ width: "0%" });
    $(".p8_button li")
      .eq(i)
      .children("div")
      .stop()
      .animate({ width: "100%" }, 1000);
  }

  // 버튼 여러개
  $(".p8_button li").on("click", function () {
    clearInterval(stop);
    i = $(this).index(".p8_button li");

    fade();
    start();
  });

  // 다음 버튼 fade
  $(".navi_bar .fade_b_r").on("click", function () {
    clearInterval(stop);
    if (i == total - 1) {
      i = 0;
    } else {
      i++;
    }

    start();
    fade();
  });
  // 이전 버튼 fade
  $(".navi_bar .fade_b_l").on("click", function () {
    clearInterval(stop);
    if (i == 0) {
      i = total - 1;
    } else {
      i--;
    }

    fade();
    start();
  });
});

// p9 자동슬라이드----------------------------
$(function () {
  let s_total = $(".p9_slide li").length;
  console.log(s_total);

  let s_i = 0;
  // 움직임
  p9_start();
  function p9_start() {
    s_timer = setInterval(function () {
      s_i++;
      if (s_i == s_total - 1) {
        $(".p9_slide")
          .stop()
          // -2400 왜 나왔는지 파악
          .animate({ "margin-left": "-2400px" }, function () {
            $(".p9_slide").css({ "margin-left": "0px" });
          });
        s_i = 0;
      } else {
        $(".p9_slide")
          .stop()
          .animate({ "margin-left": -s_i * 630 });
      }
    }, 3000);
  }

  // next
  $(".next").on("click", function () {
    clearInterval(s_timer);

    s_i++;
    if (s_i == s_total - 1) {
      $(".p9_slide")
        .stop()

        .animate({ "margin-left": "-2400px" }, function () {
          $(".p9_slide").css({ "margin-left": "0px" });
        });
      s_i = 0;
    } else {
      $(".p9_slide")
        .stop()
        .animate({ "margin-left": -s_i * 630 });
    }
    p9_start();
  });

  // prev
  $(".prev").on("click", function () {
    clearInterval(s_timer);
    s_i--;
    if (s_i < 0) {
      $(".p9_slide")
        .stop()
        .animate({ "margin-left": "-2400px" }, function () {
          $(".p9_slide").css({ "margin-left": "-1500px" });
        });
      s_i = 4;
    } else {
      $(".p9_slide")
        .stop()
        .animate({ "margin-left": -s_i * 630 });
    }
    p9_start();
  });
});

// 풀스크린 관련
$(function () {
  $("#header li").on("click", function () {
    let i = $(this).index();

    let button = $("#container section").eq(i).offset().top;
    console.log(button);

    $("html,body").stop().animate({ scrollTop: button });
  });

  $("#navi li").on("click", function () {
    let i = $(this).index();
    let button = $("#container section").eq(i).offset().top;
    console.log(button);

    $("html,body").stop().animate({ scrollTop: button });
  });
  // 스크롤 할 때 navi 변경되는 속도
  // baseline 을 위로 선언해야한다
  let baseline = -500;
  let con1 = $("#con1").offset().top + baseline;
  let con2 = $("#con2").offset().top + baseline;
  let con3 = $("#con3").offset().top + baseline;
  let con4 = $("#con4").offset().top + baseline;
  let con5 = $("#con5").offset().top + baseline;
  let con6 = $("#con6").offset().top + baseline;
  let con7 = $("#con7").offset().top + baseline;
  let con8 = $("#con8").offset().top + baseline;
  let con9 = $("#con9").offset().top + baseline;
  let con10 = $("#con10").offset().top + baseline;
  let con11 = $("#con11").offset().top + baseline;

  // console.log(con1, con2, con3, con4);

  // navibar 함수등록
  // function navibar(){
  //   $("#navi li div").removeClass("on");
  //   $("#navi li div").eq(0).addClass("on");
  //   $("#navi li p").removeClass("txton");
  //   $("#navi li p").eq(0).addClass("txton");
  // }

  // navibar();

  $(window).on("scroll", function () {
    let scroll = $(this).scrollTop();
    // console.log(scroll);
    // 만약 스크롤이 con1보다 같거나 크고 , 그리고 , 스크롤이 con2보다 작으면

    if (scroll >= con1 && scroll < con2) {
      // console.log("con1입니다");
      $("#navi li div").removeClass("on");
      $("#navi li div").eq(0).addClass("on");
      $("#navi li p").removeClass("txton");
      $("#navi li p").eq(0).addClass("txton");
    }
    // 그렇지 않고 만약 con2
    else if (scroll >= con2 && scroll < con3) {
      $("#navi li div").removeClass("on");
      $("#navi li div").eq(1).addClass("on");
      $("#navi li p").removeClass("txton");
      $("#navi li p").eq(1).addClass("txton");
      $("#con2").addClass("up");
      $(".p2_txt_move li").addClass("on");
      $(".p2_txt").addClass("on");

      // console.log("con2입니다");
    } else if (scroll >= con3 && scroll < con4) {
      $("#navi li div").removeClass("on");
      $("#navi li div").eq(2).addClass("on");
      $("#navi li p").removeClass("txton");
      $("#navi li p").eq(2).addClass("txton");
      $("#con3").addClass("ro");
      $(".mtop li .move_txt_p3").removeClass("on");
      $(".mtop li .move_txt_p3").addClass("on");
      $(".mtop li .move_txt_p3_box ").removeClass("on");
      $(".mtop li .move_txt_p3_box ").addClass("on");

      // con3 로고 설명 박스
      $(".line_t").addClass("on");
      $(".line_b").addClass("on");
      $(".line_l").addClass("on");
      $(".line_r").addClass("on");
      $(".f_ma strong").removeClass("on");
      $(".f_ma strong").addClass("on");
      $(".co_wrap").addClass("on");
      $(".c_red").addClass("on");
      $(".logo_wrap_yy").addClass("on");

      $(".co_box_r").css({ transform: "rotate(315deg)" });
      $(".co_box_k").css({ transform: "rotate(315deg)" });

      // console.log("con3입니다");
    } else if (scroll >= con4 && scroll < con5) {
      $("#navi li div").removeClass("on");
      $("#navi li div").eq(3).addClass("on");
      $("#navi li p").removeClass("txton");
      $("#navi li p").eq(3).addClass("txton");

      // p4 전체 상자
      $(".p4_wrap").addClass("on");
      $(".p4_main_txt").addClass("on");
      $(".p4_tt h2").addClass("on");
      $(".p4_txt_p").addClass("on");
      $(".p4_button li").addClass("on");
      $(".p4_long").addClass("long_on");
      $(".p4_img").addClass("on");
      $(".mo4_main_txt").addClass("on");

      // p4 design버튼
      $(".p4_but1").on("mouseenter", function () {
        $(".p4_box1,.p4_box2").addClass("on");
        $(".p4_tt").addClass("on");
        $(".p4_t2").addClass("on");
        $(".p4_but2 p").addClass("on");
        $(".p4_long").addClass("on");
        $(".p4_web_txt").addClass("on");
      });
      $(".p4_but1").on("mouseleave", function () {
        $(".p4_box1,.p4_box2").removeClass("on");
        $(".p4_tt").removeClass("on");
        $(".p4_t2").removeClass("on");
        $(".p4_but2 p").removeClass("on");
        $(".p4_long").removeClass("on");
        $(".p4_web_txt").removeClass("on");
      });
      // p4 web버튼
      $(".p4_but2").on("mouseenter", function () {
        $(".p4_box1,.p4_box2").addClass("ro");
        $(".p4_tt").addClass("on");
        $(".p4_t3").addClass("on");
        $(".p4_but1 p").addClass("on");
      });
      $(".p4_but2").on("mouseleave", function () {
        $(".p4_box1,.p4_box2").removeClass("ro");
        $(".p4_tt").removeClass("on");
        $(".p4_t3").removeClass("on");
        $(".p4_but1 p").removeClass("on");
      });

      $(".mo4_wrap").addClass("on");

      // console.log("con4입니다");
    } else if (scroll >= con5 && scroll < con6) {
      $("#navi li div").removeClass("on");
      $("#navi li div").eq(4).addClass("on");
      $("#navi li p").removeClass("txton");
      $("#navi li p").eq(4).addClass("txton");
      // p5 전체
      $(".p5_wrap").addClass("on");
      $(".p5_main_txt").addClass("on");
      $(".p5_tt h2").addClass("on");
      $(".p5_txt_p").addClass("on");
      $(".p5_button li").addClass("on");
      $(".p5_long").addClass("long_on");
      $(".p5_img").addClass("on");

      // p5 design버튼
      $(".p5_but1").on("mouseenter", function () {
        $(".p5_box1,.p5_box2").addClass("on");
        $(".p5_tt").addClass("on");
        $(".p5_t2").addClass("on");
        $(".p5_but2 p").addClass("on");
        $(".p5_long").addClass("on");
      });
      $(".p5_but1").on("mouseleave", function () {
        $(".p5_box1,.p5_box2").removeClass("on");
        $(".p5_tt").removeClass("on");
        $(".p5_t2").removeClass("on");
        $(".p5_but2 p").removeClass("on");
        $(".p5_long").removeClass("on");
      });
      // p5 web버튼
      $(".p5_but2").on("mouseenter", function () {
        $(".p5_box1,.p5_box2").addClass("ro");
        $(".p5_tt").addClass("on");
        $(".p5_t3").addClass("on");
        $(".p5_but1 p").addClass("on");
        $(".p5_long").addClass("on");
        $(".p5_web_txt").addClass("on");
      });
      $(".p5_but2").on("mouseleave", function () {
        $(".p5_box1,.p5_box2").removeClass("ro");
        $(".p5_tt").removeClass("on");
        $(".p5_t3").removeClass("on");
        $(".p5_but1 p").removeClass("on");
        $(".p5_long").removeClass("on");
        $(".p5_web_txt").removeClass("on");
      });

      $(".mo5_wrap").addClass("on");

      // console.log("con5입니다");
    } else if (scroll >= con6 && scroll < con7) {
      $("#navi li div").removeClass("on");
      $("#navi li div").eq(5).addClass("on");
      $("#navi li p").removeClass("txton");
      $("#navi li p").eq(5).addClass("txton");

      // p6움직임

      // p6 전체 상자
      $(".p6_wrap").addClass("on");
      $(".p6_main_txt").addClass("on");
      $(".p6_tt h2").addClass("on");
      $(".p6_txt_p").addClass("on");
      $(".p6_button li").addClass("on");
      $(".p6_long").addClass("long_on");
      $(".p6_img").addClass("on");

      // p6 design버튼
      $(".p6_but1").on("mouseenter", function () {
        $(".p6_box1,.p6_box2").addClass("on");
        $(".p6_tt").addClass("on");
        $(".p6_t2").addClass("on");
        $(".p6_but2 p").addClass("on");
        $(".p6_long").addClass("on");
        $(" .p6_web_txt").addClass("on");
        $(".ff").addClass("on");
        $(".p6_but2").css({ opacity: "0" });
      });
      $(".p6_but1").on("mouseleave", function () {
        $(".p6_box1,.p6_box2").removeClass("on");
        $(".p6_tt").removeClass("on");
        $(".p6_t2").removeClass("on");
        $(".p6_but2 p").removeClass("on");
        $(".p6_long").removeClass("on");
        $(".p6_web_txt").removeClass("on");
        $(".ff").removeClass("on");
        $(".p6_but2").css({ opacity: "1" });
      });
      // p6 web버튼
      $(".p6_but2").on("mouseenter", function () {
        $(".p6_box1,.p6_box2").addClass("ro");
        $(".p6_tt").addClass("on");
        $(".p6_t3").addClass("on");
        $(".p6_but1 p").addClass("on");
      });
      $(".p6_but2").on("mouseleave", function () {
        $(".p6_box1,.p6_box2").removeClass("ro");
        $(".p6_tt").removeClass("on");
        $(".p6_t3").removeClass("on");
        $(".p6_but1 p").removeClass("on");
      });
      $(".mo6_wrap").addClass("on");

      // let count3 = 1;
      // stop3 = setInterval(function () {
      //   count3++;
      //   if (count3 > 100) {
      //     clearInterval(stop3);
      //   } else {
      //     $(".p6_p").text(count3);
      //   }
      // });

      // console.log("con6입니다");
    } else if (scroll >= con7 && scroll < con8) {
      $("#navi li div").removeClass("on");
      $("#navi li div").eq(6).addClass("on");
      $("#navi li p").removeClass("txton");
      $("#navi li p").eq(6).addClass("txton");

      // p7움직임
      $(".p7_wrap").addClass("on");
      $(".p7_main_txt").addClass("on");
      $(".p7_tt h2").addClass("on");
      $(".p7_txt_p").addClass("on");
      $(".p7_button li").addClass("on");
      $(".p7_long").addClass("long_on");
      $(".p7_img").addClass("on");

      // p7 design버튼
      $(".p7_but1").on("mouseenter", function () {
        $(".p7_box1,.p7_box2").addClass("on");
        $(".p7_tt").addClass("on");
        $(".p7_t2").addClass("on");
        $(".p7_but2 p").addClass("on");
        $(".p7_long").addClass("on");
      });
      $(".p7_but1").on("mouseleave", function () {
        $(".p7_box1,.p7_box2").removeClass("on");
        $(".p7_tt").removeClass("on");
        $(".p7_t2").removeClass("on");
        $(".p7_but2 p").removeClass("on");
        $(".p7_long").removeClass("on");
      });
      // p7 web버튼
      $(".p7_but2").on("mouseenter", function () {
        $(".p7_box1,.p7_box2").addClass("ro");
        $(".p7_tt").addClass("on");
        $(".p7_t3").addClass("on");
        $(".p7_but1 p").addClass("on");
        $(".p7_long").addClass("on");
        $(".p7_web_txt").addClass("on");
      });
      $(".p7_but2").on("mouseleave", function () {
        $(".p7_box1,.p7_box2").removeClass("ro");
        $(".p7_tt").removeClass("on");
        $(".p7_t3").removeClass("on");
        $(".p7_but1 p").removeClass("on");
        $(".p7_long").removeClass("on");
        $(".p7_web_txt").removeClass("on");
      });

      $(".mo7_wrap").addClass("on");

      // let count4 = 1;
      // stop4 = setInterval(function () {
      //   count4++;
      //   if (count4 > 100) {
      //     clearInterval(stop4);
      //   } else {
      //     $(".p7_p").text(count4);
      //   }
      // });

      // console.log("con7입니다");
    } else if (scroll >= con8 && scroll < con9) {
      $("#navi li div").removeClass("on");
      $("#navi li div").eq(7).addClass("on");
      $("#navi li p").removeClass("txton");
      $("#navi li p").eq(7).addClass("txton");
      $("#con8").addClass("on");

      // console.log("con8입니다");
    } else if (scroll >= con9 && scroll < con10) {
      $("#navi li div").removeClass("on");
      $("#navi li div").eq(8).addClass("on");
      $("#navi li p").removeClass("txton");
      $("#navi li p").eq(8).addClass("txton");
      $(".p9_slide .p9_img1").addClass("on");
      $(".p9_slide .p9_img2").addClass("on");
      $(".p9_slide .p9_img3").addClass("on");
      $(".p9_main_txt").removeClass("on");
      $(".p9_main_txt").addClass("on");
      $(".back").addClass("on");
      $(".next").addClass("on");
      $(".p9_wrap_slide ").addClass("on");

      // console.log("con9입니다");
    } else if (scroll >= con10 && scroll < con11) {
      $("#navi li div").removeClass("on");
      $("#navi li div").eq(9).addClass("on");
      $("#navi li p").removeClass("txton");
      $("#navi li p").eq(9).addClass("txton");
      $(".c10_txt_move").addClass("on");
      $(".p10_move").addClass("on");

      // console.log("con10입니다");
    }

    // 그렇지 않으면
    else {
      $("#navi li div").removeClass("on");
      $("#navi li div").eq(10).addClass("on");
      $("#navi li p").removeClass("txton");
      $("#navi li p").eq(10).addClass("txton");
      $("#con11").addClass("tt");
      $(".fo_wrap > img").addClass("on");
      $(".tel").addClass("on");
      $(".foter_line").addClass("on");
      // console.log("con11입니다");
    }
  });

  //   상단버튼으로 자연스럽게 올라가게 하기

  $(".top_button").on("click", function () {
    let button = $("#container").offset().top;
    console.log(button);

    $("html,body").stop().animate({ scrollTop: button });
  });
});
