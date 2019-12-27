
export const wxShare = function(biography,opstion) {
  wx.config({
    debug: false,          // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    appId: biography.appId,         // 必填，公众号的唯一标识
    timestamp: biography.timestamp, // 必填，生成签名的时间戳
    nonceStr: biography.nonceStr,   // 必填，生成签名的随机串
    signature:biography.signature, // 必填，签名
    jsApiList: [
      'updateAppMessageShareData',
    ]
  });
  console.log("进入分享的封装方法里")
  //分享给朋友
  wx.updateAppMessageShareData({
       title: opstion.title, // 分享标题
       link: opstion.link, // 分享链接
       imgUrl: opstion.imgUrl, // 分享图标
       desc: opstion.dec, // 分享描述
  })
}

