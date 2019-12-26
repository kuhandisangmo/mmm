$(function() {
    let rendercategory = function() {
        // 渲染分类
        $.ajax({
            type: 'get',
            url: 'http://localhost:3000/api/getcategorytitle',
            success(info) {
                $('.mm_main').html(template('tpl', info))
            }
        })
    }
    rendercategory()

    var titleId

    function render() {
        // 渲染列表
        $.ajax({
            type: 'get',
            url: 'http://localhost:3000/api/getcategory',
            data: { titleid: titleId },
            success(info) {
                $('.lists').html(template('tpl2', info))
            }
        })
    }
    render()

    // 注册点击事件
    $('.mm_main').on('click', '.top', function() {
        // 显示
        $(this).next('.lists').toggleClass('active')
        titleId = $(this).data('id')
        render()
    })
})