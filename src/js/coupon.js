$(function() {
    $.ajax({
        type: 'get',
        url: 'http://localhost:3000/api/getcoupon',
        success(info) {
            console.log(info);
            $('.discount').html(template('tpl', info))
        }
    })
})