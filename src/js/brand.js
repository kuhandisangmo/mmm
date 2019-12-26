$(function() {
    let id = location.search.split('=')[1]
    console.log(id);

    $.ajax({
        type: 'get',
        url: 'http://localhost:3000/api/getbrand',
        data: { brandtitleid: id },
        success(info) {
            console.log(info);
            $('.product').html(template('tpl', info))
        }
    })
})