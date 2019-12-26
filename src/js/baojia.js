$(function() {
    let id = location.search.split('=')[1]
    console.log(id);

    $.ajax({
        type: 'get',
        url: 'http://localhost:3000/api/getproduct',
        data: { productid: id },
        success(info) {
            let arr = [info.result]
            info.arr = arr
            console.log(info);
            $('.main_top').html(template('tpl', info))
        }
    })

    // 评论区渲染
    $.ajax({
        type: 'get',
        url: 'http://localhost:3000/api/getproductcom',
        data: { productid: id },
        success(info) {
            console.log(info);
            $('.evaluate').html(template('tpl2', info))
        }
    })
})