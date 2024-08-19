$(function () {  
setTimeout(function(){
    $('.slider li .text0').addClass('on');
    $('.slider li .atext0').addClass('on');
},500); //0.5초후 최초 한번만 실행

    var bx = $('.slider').bxSlider({
       mode:'fade',
        auto:true,
        controls:false,
        pager:false,
        pause:5000,//슬라이드 실제속도 - setInterval과 유사
        autoHover:true,
        onSlideBefore:function(){},
        onSlideAfter:function(){
            var k = bx.getCurrentSlide();//현재의 슬라이드 번호
            $('.slider li').find('h2').removeClass('on');
            $('.slider li').find('p').removeClass('on');
            $('.slider li .text'+k).addClass('on');
            $('.slider li .atext'+k).addClass('on');
        },
    });
// $(".menu>li").mouseover(function(){
//    $('.menu>li>ul').stop().slideDown();
//    $('.shadow').stop().slideDown();
// });
// $(".menu>li, .shadow").mouseout(function(){
//     $('.menu>li>ul').stop().slideUp();
//    $('.shadow').stop().slideUp();
//  });
//#s2  위치들
var a1 = $('.s2_title img').offset().top; // '/'
var a2 = $('.s2_title h2').offset().top; // 제목
var a3 = $('.s2_title p').offset().top; // 내용
var a4 = $('.s2_table li').offset().top; //사각박스

 var a5 = $('.s3_title img').offset().top;//   '/'
  var a6 = $('.s3_title h2').offset().top; // 제목
  var a7 = $('.s3_title p').offset().top; // 내용
  var a8 = $('.s3_table li').offset().top; //사각박스

  var a9 = $('.s4_title img').offset().top;//   '/'
  var a10 = $('.s4_title h2').offset().top; // 제목
  var a11 = $('.s4_title p').offset().top; // 내용
  var a12 = $('.s4_table li').offset().top; //사각박스

console.log(a1, a2, a3, a4);

var b1 = $('#s5').offset().top;
var b2 = $('#s6').offset().top;

var f_box=$('.fix_box').offset().top;//400



$(window).scroll(function(){
    var sct = $(this).scrollTop();

  $('fix_box').stop().animate();

    if( a1 < sct + 600){
        $('.s2_title img').addClass('slide');
    }
    if(a2 < sct + 600){
        $('.s2_title h2').addClass('slide');
      }
    if(a3 < sct + 600){
        $('.s2_title p').addClass('slide');
    }
    if(a4 < sct + 600){
        $('.s2_table li').eq(0).addClass('slide');
        setTimeout(function(){
            $('.s2_table li').eq(1).addClass('slide');
        },300);
        setTimeout(function(){
            $('.s2_table li').eq(2).addClass('slide');
        },600);
        setTimeout(function(){
            $('.s2_table li').eq(3).addClass('slide');
        },900);
    }
    if(a5 < sct + 700){
        $('.s3_title img').addClass('slide');
      }
      if(a6 < sct + 700){
        $('.s3_title h2').addClass('slide');
      }
      if(a7 < sct + 700){
        $('.s3_title p').addClass('slide');
      }
      if(a8 < sct + 700){
        $('.s3_table li').eq(0).addClass('slide');
        setTimeout(function(){
          $('.s3_table li').eq(1).addClass('slide');
        },300);
        setTimeout(function(){
          $('.s3_table li').eq(2).addClass('slide');
        },600);
        setTimeout(function(){
            $('.s3_table li').eq(3).addClass('slide');
        },900);
        setTimeout(function(){
          $('.s3_table li').eq(4).addClass('slide');
      },1200);
      }
  
      if(a9 < sct + 700){
        $('.s4_title img').addClass('slide');
      }
      if(a10 < sct + 700){
        $('.s4_title h2').addClass('slide');
      }
      if(a11 < sct + 700){
        $('.s4_title p').addClass('slide');
      }
      if(a12 < sct + 700){
        $('.s4_table li').eq(0).addClass('slide');
        setTimeout(function(){
          $('.s4_table li').eq(1).addClass('slide');
        },300);
        setTimeout(function(){
          $('.s4_table li').eq(2).addClass('slide');
        },600);
        setTimeout(function(){
            $('.s4_table li').eq(3).addClass('slide');
        },900);
      }

      if(b1 < sct + 700 ){
        $('.s5_contents').addClass('slide1');
      }  
      if(b2 < sct + 700 ){
        $('.s6_noti, .s6_review').addClass('slide1');
      }  

});



});