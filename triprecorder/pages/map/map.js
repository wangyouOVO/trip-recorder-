// pages/map/map.js
Page({
 
  /**
   * 页面的初始数据
   */
  
  data: {
    latitude: "31.233462",
    longtitude: "121.492156",
    scale: 15,
      },
  onLoad(options) {
    const id = options.id1;
    const src = options.src1;
    const text = options.text1;
    const price = options.price1;
    const address = options.address1;
    const rate = options.rate1;
    const addressd = options.addressd1;
    const pre = options.pre1;
    const pred = options.pred1;
    const time = options.time1;
    const longtitude = options.longtitude1;
    const latitude = options.latitude1;
    console.log("id:"+id)
    this.setData({
      id,
      src,
      text,
      price,
      address,
      rate,
      addressd,
      pre,
      pred,
      time,
      longtitude,
      latitude
        })}
 
})

