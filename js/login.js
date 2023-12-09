let identityOffset = $(".identity").offset().top; // distance of (.identity) from the top of window

$(window).scroll(function () {

    let windowScrollTop = $(window).scrollTop(); // to know the distance you scroll from top with mouse

    if (windowScrollTop >= identityOffset - 100) {
        $(".nav").css("backgroundColor", "white")
        $(".home_list").css("color", "black")
        $(".logo-image").attr("src", "images/bakery-color.png")
        $(".btn-arrow").fadeIn(500)
    }

    else {
        $(".nav").css("backgroundColor", "transparent")
        $(".home_list").css("color", "white")
        $(".logo-image").attr("src", "images/bakery-light-1.png")
        $(".btn-arrow").fadeOut(500)
    }
})



$(".btn-arrow").click(function () {
    $(window).scrollTop(0);
})

// $("#about").click(function()
// {
//     let aboutOffset = $("#aboutUs").offset().top;
//     $("body,html").animate({scrollTop:aboutOffset}, 1000)
// })

