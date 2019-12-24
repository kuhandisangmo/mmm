$(function() {
    let rendernav = function() {
        // 发送ajax请求
        $.ajax({
            type: 'get',
            url: 'http://localhost:3000/api/getindexmenu',
            success(info) {
                // console.log(info);
                $('.mm_nav').html(template('tpl', info))
            }
        })
    }
    rendernav()

    // 注册点击事件
    $('.mm_nav').on('click', 'li:nth-child(8)', function() {
        $(this).nextAll().toggleClass('active')
    })

    // 渲染折扣产品
    let renderDiscount = function() {
        $.ajax({
            type: 'get',
            url: 'http://localhost:3000/api/getmoneyctrl',
            data: { pageid: 1 },
            success(info) {
                console.log(info);
                $('.mm_discount .main').html(template('tpl2', info))
            }
        })
    }
    renderDiscount()
})