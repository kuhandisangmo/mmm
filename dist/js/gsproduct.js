$(function() {
    // 注册点击事件,渲染列表
    var shopId
    var areaId
    $('.getshop').on('click', function() {
        $('.shop').toggleClass('active')
        $.ajax({
            type: 'get',
            url: 'http://localhost:3000/api/getgsshop',
            success(info) {
                console.log(info);
                $('.shop').html(template('tpl', info))
            }
        })
    })
    $('.getaddress').on('click', function() {
        $('.shop').toggleClass('active')
        $.ajax({
            type: 'get',
            url: 'http://localhost:3000/api/getgsshoparea',
            success(info) {
                console.log(info);
                $('.shop').html(template('tpl2', info))
            }
        })
    })
    $('.price').on('click', function() {
        $('.shop').toggleClass('active')
        $('.shop').html(`<li><a>全部价格</a></li>`)
    })


    // 渲染主体区域
    function render() {
        $.ajax({
            type: 'get',
            url: 'http://localhost:3000/api/getgsproduct',
            data: {
                shopid: shopId,
                areaid: areaId
            },
            success(info) {
                console.log(info);
                $('.pd_list').html(template('tpl3', info))
            }
        })
    }
    render()
        // 注册委托事件
    $('.shop').on('click', 'li', function() {
        $('.shop').toggleClass('active')
        console.log('哈哈');
        shopId = $(this).data('id')
        areaId = $(this).data('id2')
        render()
        console.log(shopId, areaId);
    })
})