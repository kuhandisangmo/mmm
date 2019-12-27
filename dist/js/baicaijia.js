$(function() {
  // 渲染导航
  $.ajax({
    type: "get",
    url: "http://localhost:3000/api/getbaicaijiatitle",
    success(info) {
      console.log(info)
      $(".nav").html(template("tpl", info))
      // 导航栏的宽
      var li = document.querySelector(".nav li")
      // 单个li的宽
      var liWidth = li.offsetWidth
      // 渲染的li的个数
      var num = info.result.length
      $(".nav").css("width", liWidth * num + "px")
      console.log(liWidth)
    }
  })

  // 渲染列表 需要先注册点击事件,在渲染列表

  // 注册点击委托事件
  var id = 0

  function render() {
    $.ajax({
      type: "get",
      url: "http://localhost:3000/api/getbaicaijiaproduct",
      data: { titleid: id },
      success(info) {
        console.log(info)
        $(".list").html(template("tpl2", info))
      }
    })
  }
  render()
  $(".nav").on("click", ".active", function() {
    id = $(this).data("id")
    // 重新渲染
    render()
  })
})
