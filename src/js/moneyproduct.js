$(function() {
    var id = location.search.split('=')[1]
    console.log(id);
    $.ajax({
        type: 'get',
        url: 'http://localhost:3000/api/getmoneyctrlproduct',
        data: { productid: id },
        success(info) {
            let arr = [info.result]
            info.arr = arr
            console.log(info);
            $('.content').html(template('tpl', info))
            $('.disstorck1').html(template('tpl2', info))
        }
    })
})