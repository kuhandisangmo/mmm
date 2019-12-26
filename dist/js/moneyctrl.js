$(function() {
    var pageid = 1
    $.ajax({
        type: 'get',
        url: 'http://localhost:3000/api/getmoneyctrl',
        data: { pageid: pageid },
        success(info) {
            console.log(info);
            $('.main').html(template('tpl', info))
        }

    })
})