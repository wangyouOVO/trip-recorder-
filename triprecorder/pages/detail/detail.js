// pages/index/detail.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      id:"",
      src:"",
      text:"",
      price:"",
      address:"",
      addressd:"",
      rate:"",
      pre:"",
      pred:"",
      time:"",
      longtitude:"",
      latitude:""

    },

    /**
     * 生命周期函数--监听页面加载
     */
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
      })
      

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})