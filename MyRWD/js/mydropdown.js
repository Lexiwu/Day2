﻿$(function () {

    ///背景轉播


    // jQuery(document).ready(function($) {   
    //    $('#slider').cycle({   
    //        fx:'fade',  //特效           speed:  7500,
    //        timeout:  7200,
    //        random:  1
    //    });
    //}); 


//////下拉式選單
    document.getElementById("menu-blog").onclick = function () {

        document.getElementById("dropdown").classList.toggle("show");
    };


    // Close the dropdown if the user clicks outside of it
    window.onclick = function (event) {
        if (!event.target.matches('#menu-blog')) {

            var dropdowns = document.getElementsByClassName("content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }


});