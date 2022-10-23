

$(window).scroll(function () {
    var scrollTop = $(window).scrollTop();

    var ab_position = $('#menu2').position();
    var sk_position = $('#menu3').position();
    var pf_position = $('#menu4').position();
    var ct_position = $('#menu5').position();

    let up_btn = $('.up-btn');
    let menu_box = $('.menu-box');

    let about_me = $('.about');

    // console.log(pf_position["top"]);
    // console.log(ct_position["top"]);

    // console.log(menuTop);


    // 메뉴 스크롤 고정

    if (scrollTop > 200) {
        up_btn.addClass('block');
    } else if (scrollTop > 120) {
        up_btn.removeClass('block');
    }

    if (scrollTop > 630) {
        menu_box.addClass('drop');
        about_me.addClass('plus');

        menu_box.css('background-color', 'rgba(211, 211, 211, 0.388)');

    } else {
        menu_box.removeClass('drop');
        about_me.removeClass('plus');

        menu_box.css('background-color', '');


    }

    // 각 섹션의 스크롤 위치에 따라 타이틀 폰트 사이즈 커짐

    // 상단으로 이동
    if (scrollTop < 500) {
        $('.am, .sk, .pf, .ct').css('font-weight', "");
    }

    // about me 630
    if (scrollTop >= ab_position["top"]) {
        $('.am').css('font-weight', "bold");
        $('.sk, .pf, .ct').css('font-weight', "");
    }

    // skill moblie scroll - 2000 / pc scroll 1179
    if (scrollTop >= sk_position["top"]) {
        $('.sk').css('font-weight', "bold");
        $('.am, .pf, .ct').css('font-weight', "");
    }


    // portfolios 1679
    if (scrollTop >= (pf_position["top"] - 1)) {
        $('.pf').css('font-weight', "bold");
        $('.am, .sk, .ct').css('font-weight', "");
    }

    // contact 2000
    if (scrollTop >= ct_position["top"] - 750) {
        $('.ct').css('font-weight', "bold");
        $('.am, .sk, .pf').css('font-weight', "");
    }


});



$(document).ready(function () {


    // home
    $('.hm').click(function () {
        var offset = $('#home').offset();

        $('html').animate({ scrollTop: offset.top }, 300);

        $('.up-btn').removeClass('block');
    });


    // modal
    $('.admin-click').click(function () {

        $('.login-modal').css('display', 'flex');
    });

    // modal close
    $('#close').click(function () {
        $('.login-modal').css('display', 'none');
    });

    // slide menu
    // skill box를 누르면 해당 박스 아래에 있는 div hide가 아래로 내려간다. 한 번 더 누르면 원래 자리로 되돌아간다.


    
    // var show = $('.show');

    // $(show).click(function(){

    //     $(this).find('.hide').slideToggle('fast');

    // });

    // $(show).click(function (e) {
    //     console.log(e.target);
    //     console.log(show.children(hide));
    //     if (show.children(hide)) {
    //         console.log(show.children());
    //         $(hide).slideToggle();
    //     }
        
    // });


});

$(document).mouseup(function (e) {

    var container = $('.login-modal');

    if (container.has(e.target).length === 0) {
        container.css('display', 'none');
    }

});
