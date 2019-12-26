$(function() {
    var id = location.search.split("=")[1]
    let pageid = 1
    let categoryid
        /*  function render() {
             $.ajax({
                 type: 'get',
                 url: 'http://localhost:3000/api/getcategorybyid?categoryid=' + categoryid,
                 data: { number: categoryid },
                 success(info) {
                     console.log(info);
                     if (info.status === 200) {
                         href = location.href + '&category=' + info.result.category + '&pageid=1'
                         console.log(href);
                     }
                 }
             })
         } */
        // render()


    function render2() {
        $.ajax({
            type: 'get',
            url: 'http://localhost:3000/api/getproductlist',
            data: {
                pageid: 1,
                categoryid: id
            },
            success(info) {
                info = info.result
                console.log(info);
                $('.mm_main').html(template('tpl', info))
            }

        })
    }
    render2()
})