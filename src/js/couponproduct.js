$(function() {
    let id = location.search.split('=')[1]
    console.log(id);
    $.ajax({
        type: 'get',
        url: 'http://localhost:3000/api/getcouponproduct',
        data: { couponid: id },
        success(info) {
            console.log(info);
            $('.lists').html(template('tpl', info))
        }
    })
})