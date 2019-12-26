$(function() {

    let render = function() {
        // 发送ajax请求
        $.ajax({
            type: 'get',
            url: 'http://localhost:3000/api/getinlanddiscount',
            success(info) {
                console.log(info);
                $('.box').html(template('tpl', info))
            }
        })
    }
    render()
})