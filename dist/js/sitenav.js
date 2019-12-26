$(function() {

    $.ajax({
        type: 'get',
        url: 'http://localhost:3000/api/getsitenav',
        success(info) {
            console.log(info);
            $('.box').html(template('tpl', info))
        }
    })
})