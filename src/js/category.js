$(function() {
  let rendercategory = function() {
    // 渲染分类
    $.ajax({
      type: "get",
      url: "http://localhost:3000/api/getcategorytitle",
      success(info) {
        $(".mm_main").html(template("tpl", info))
      }
    })
  }
  rendercategory()

  var titleId

  // 注册点击事件
  $(".mm_main").on("click", ".top", function() {
    // 显示
    var that = $(this).next()
    $(this)
      .next(".lists")
      .toggleClass("active")
    titleId = $(this).data("id")
    $.ajax({
      type: "get",
      url: "http://localhost:3000/api/getcategory",
      data: { titleid: titleId },
      success(info) {
        that.html(template("tpl2", info))
      }
    })
  })
})
