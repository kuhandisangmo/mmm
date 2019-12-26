$(function() {
    let rendercategory = function() {
        // 渲染分类
        $.ajax({
            type: 'get',
            url: 'http://localhost:3000/api/getbrandtitle',
            success(info) {
                console.log(info);

                $('.mm_main').html(template('tpl', info))
            }
        })
    }
    rendercategory()
})