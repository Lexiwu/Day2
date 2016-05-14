/// <reference path="../js/jquery-1.12.3.js" />




$(function () {  

    /////////navbar effect
    $("#gotop").click(function () {
        jQuery("html,body").animate({ scrollTop: 0 }, 800); //1.點下按鈕之後會以 animate動態效果讓捲軸捲到網頁最頂端
    });
    //2.$(this).scrollTop()就是用來取得目前的位置距離網頁頂端有多遠，若大於 300px 就會將按鈕顯示出來，小於就會隱藏。
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('#gotop').fadeIn();
        } else {
            $('#gotop').stop().fadeOut();
        }
    });




    // who-we-are 文字輪轉效果

    $('.your-carousel').slick({
        autoplay: true,
        arrows: true,
        dots:true
    });




    // Work 圖片手動播放效果

    $('.lazy').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 4,
        slidesToScroll: 1
    });



    //Subscribe輸入email

    $('.click-btn').click(function () {

        var validator = $("#myform").validate({
            rules: {
                
                Email: { required: true, email: true }
                
            },
            messages: {
                
                Email: { required: "請留下email", email: "格式錯誤" }
                
            },
            errorPlacement: function (error, element) {
                //$('.click-btn').append(error.element);
                error.appendTo(element.parent().children().eq(2));
                console.log(error);
                console.log(element.parent())
            }
        });
        if($("#myform").valid()){
       
        $.ajaxSetup({ contentType: "application/json;charset=utf-8" });

        var clientEmail = $(".email-type").eq(1).val();    //取得email框框的值

        var customerInfo = {                                
            
            Email: clientEmail        //宣告json資料格式

        };

        var data1 = JSON.stringify(customerInfo);    //將取得的email轉成json格式

        $.post("http://localhost/myapi/api/myapi", data1)
                 .done(function (client_email) {
                     alert('新增Email成功!!');

                 });
        }

    });

});




          