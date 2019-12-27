$(function() {
  // 注册点击事件,渲染列表
  var shopId = $(".getshop").attr("id")
  var areaId = $(".getaddress").attr("id")
  console.log(shopId, areaId)

  var flag
  // 渲染主体区域
  function render() {
    $.ajax({
      type: "get",
      url: "http://localhost:3000/api/getgsproduct",
      data: {
        shopid: shopId,
        areaid: areaId
      },
      success(info) {
        console.log(info)
        $(".pd_list").html(template("tpl3", info))
      }
    })
  }
  render()
  // 点击店铺
  $(".getshop").on("click", function() {
    flag = true
    $(".shop").toggleClass("active")
    $.ajax({
      type: "get",
      url: "http://localhost:3000/api/getgsshop",
      success(info) {
        console.log(info)
        $(".shop").html(template("tpl", info))
      }
    })
  })
  //   点击地区
  $(".getaddress").on("click", function() {
    flag = false
    $(".shop").toggleClass("active")
    $.ajax({
      type: "get",
      url: "http://localhost:3000/api/getgsshoparea",
      success(info) {
        console.log(info)
        $(".shop").html(template("tpl2", info))
      }
    })
  })
  $(".price").on("click", function() {
    $(".shop").toggleClass("active")
    $(".shop").html(`<li><a>全部价格</a></li>`)
  })

  // 注册委托事件
  $(".shop").on("click", "li", function() {
    $(".shop").toggleClass("active")
    // 获取点击的内容
    let text = $(this).text()
    let id = $(this).data("id")
    if (flag) {
      $(".getshop").text(text)
      $(".getshop").attr("id", id)
      shopId = $(".getshop").attr("id")
      render()
    } else {
      $(".getaddress").text(text)
      $(".getaddress").attr("id", id)
      areaId = $(".getaddress").attr("id")
      render()
    }
    console.log(shopId, areaId)
  })
})
