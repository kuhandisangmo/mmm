$(function() {
  var id = location.search.split("=")[1]
  var pageid = 1
  var page

  function render() {
    $.ajax({
      type: "get",
      url: "http://localhost:3000/api/getcategorybyid",
      data: { categoryid: id },
      success(info) {
        let arr = [info.result]
        info.arr = arr
        console.log(info)
        $(".breadcrumb").html(template("tpl2", info))
      }
    })
  }
  render()
  // 分页注册点击事件

  function render2() {
    $.ajax({
      type: "get",
      url: "http://localhost:3000/api/getproductlist",
      data: {
        pageid: pageid,
        categoryid: id
      },
      success(info) {
        info = info.result
        console.log(info)
        $(".mm_main .main").html(template("tpl", info))
        if (pageid === 1) {
          // 获取总页数
          page = Math.ceil(info.count / info.list.length)
          let arr = []
          for (let i = 0; i < page; i++) {
            let b = { a: i + 1 }
            arr.push(b)
          }
          info.arr = arr
          console.log(info)
          $(".middleBtn").html(template("tpl3", info))
        }
      }
    })
  }
  render2()

  $(".rightBtn").on("click", function() {
    console.log(pageid)
    pageid++
    if (pageid >= page) {
      pageid = page
    }
    $(".middleBtn").val(pageid)
    render2()
  })
  $(".leftBtn").on("click", function() {
    console.log(pageid)
    pageid--
    if (pageid <= 1) {
      pageid = 1
    }
    $(".middleBtn").val(pageid)
    render2()
  })

  $(".middleBtn").on("change", function() {
    pageid = $(".middleBtn").val()
    render2()
  })
  console.log(pageid)
})
