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

    // 注册点击事件
    $('.mm_main').on('click', '.top', function() {
        // 显示
        $(this).next('.lists').toggleClass('active')
        let titleId = $(this).data('id')
            // window.titleId = titleId
        console.log($(this).next('.lists').find('a'));
        let that = $(this)

        function render() {
            // 渲染列表
            $.ajax({
                type: 'get',
                url: 'http://localhost:3000/api/getcategory?titleid=' + titleId,
                success(info) {
                    that.next().html(template('tpl2', info))
                }
            })
        }
        render()
    })
})