// 适配rem

$(window).resize(function() {
    // 获取屏幕宽度
    let width = $(window).width()
    width = Math.max(width, 320)
    width = Math.min(width, 750)

    $('html').css('fontSize', width / 15)
}).trigger('resize')