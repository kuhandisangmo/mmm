$(function() {
    let productid = location.search.split('=')[1]
    console.log(productid);

    let render = function() {
        $.ajax({
            type: 'get',
            url: 'http://localhost:3000/api/getdiscountproduct',
            data: {
                productid: productid
            },
            success(info) {
                let result = info.result
                let arr = [result]
                console.log(arr);
                info.arr = arr
                console.log(info);
                $('.content').html(template('tpl', info))
            }
        })
    }
    render()
})