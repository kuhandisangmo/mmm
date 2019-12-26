$(function() {
    var id = location.search.split("=")[1]
    let pageid = 1
    var categoryid

    function render() {
        $.ajax({
            type: 'get',
            url: 'http://localhost:3000/api/getcategorybyid',
            data: { categoryid: id },
            success(info) {
                let arr = [info.result]
                info.arr = arr
                console.log(info);
                $('.breadcrumb').html(template('tpl2', info))
            }
        })
    }
    render()
        // 分页注册点击事件



    function render2() {
        $.ajax({
            type: 'get',
            url: 'http://localhost:3000/api/getproductlist',
            data: {
                pageid: pageid,
                categoryid: id
            },
            success(info) {
                info = info.result
                console.log(info);
                $('.mm_main .main').html(template('tpl', info))
            }

        })
    }
    render2()
    $('.rightBtn').on('click', function() {
        console.log(pageid);

        if (pageid >= 1) {
            pageid++
            $('.middleBtn').html(`<option value="${pageid}">第${pageid}页</option>`)
            render2()
        }
    })
    $('.leftBtn').on('click', function() {

        console.log(pageid);
        if (pageid <= 3) {
            pageid--
            $('.middleBtn').html(`<option value="${pageid}">第${pageid}页</option>`)
            render2()
        }

    })
    console.log(pageid);
})