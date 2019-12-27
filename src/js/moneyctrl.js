$(function() {
  var pageId = 1
  var page
  function render() {
    $.ajax({
      type: "get",
      url: "http://localhost:3000/api/getmoneyctrl",
      data: { pageid: pageId },
      success(info) {
        console.log(info)
        $(".main").html(template("tpl", info))
        if (pageId === 1) {
          // 获取总页数
          page = Math.ceil(info.count / info.result.length)
          console.log(page)
          // 遍历
          for (let i = 1; i <= page; i++) {
            $(".middleBtn").append(`<option value="${i}">第${i}页</option>`)
          }
        }
      }
    })
  }
  render()

  //   注册点击事件
  $(".rightBtn").on("click", function() {
    console.log(pageId)
    pageId++
    if (pageId >= page) {
      pageId = page
    }
    $(".middleBtn").val(pageId)
    render()
  })

  $(".leftBtn").on("click", function() {
    console.log(pageId)
    pageId--
    if (pageId <= 1) {
      pageId = 1
    }
    $(".middleBtn").val(pageId)
    render()
  })

  $(".middleBtn").on("change", function() {
    pageId = $(".middleBtn").val()
    render()
    console.log(pageId)
  })
})
