// pages/alladdress/alladdress.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    marks: [],
    pointnum: 0,
    showform: true,
    date: "2022-5-13",
    // x轴方向的偏移
    x: 0,
    // 当前x的值
    currentX: 0
  },

  /**
   * 显示删除按钮
   */
  showDeleteButton: function (e) {
    let productIndex = e.currentTarget.dataset.productindex
    this.setXmove(productIndex, -65)
  },

  /**
   * 隐藏删除按钮
   */
  hideDeleteButton: function (e) {
    let productIndex = e.currentTarget.dataset.productindex

    this.setXmove(productIndex, 0)
  },

  /**
   * 设置movable-view位移
   */
  setXmove: function (Index, xmove) {
    let marks = this.data.marks
    marks[Index].xmove = xmove

    this.setData({
      marks: marks
    })
  },

  /**
   * 处理movable-view移动事件
   */
  handleMovableChange: function (e) {
    if (e.detail.source === 'friction') {
      if (e.detail.x < -30) {
        this.showDeleteButton(e)
      } else {
        this.hideDeleteButton(e)
      }
    } else if (e.detail.source === 'out-of-bounds' && e.detail.x === 0) {
      this.hideDeleteButton(e)
    }
  },

  /**
   * 处理touchstart事件
   */
  handleTouchStart(e) {
    this.startX = e.touches[0].pageX
  },

  /**
   * 处理touchend事件
   */
  handleTouchEnd(e) {
    if (e.changedTouches[0].pageX < this.startX && e.changedTouches[0].pageX - this.startX <= -30) {
      this.showDeleteButton(e)
    } else if (e.changedTouches[0].pageX > this.startX && e.changedTouches[0].pageX - this.startX < 30) {
      this.showDeleteButton(e)
    } else {
      this.hideDeleteButton(e)
    }
  },

  handleTap: function ({ currentTarget: { dataset: { id } } }) {
    const markerId = id;
    console.log(markerId)
    wx.navigateTo({
      url: '/pages/pointdetail/pointdetail?id=' + markerId,
    })

  },
  /**
   * 删除产品
   */
  handleDeleteProduct: function ({ currentTarget: { dataset: { id } } }) {
    let marks = this.data.marks
    let productIndex = marks.findIndex(item => item.id === id)
    marks.splice(productIndex, 1)
    this.setData({
      marks
    })
    if (marks[productIndex]) {
      this.setXmove(productIndex, 0)
    }
    console.log(id)
    wx.request({
      url: 'http://127.0.0.1:3007/my/delMarker?id=' + id,
      header: {
        'content-type': 'application/x-www-form-urlencoded',
        'Authorization': app.data.token
      },
      success(res) {
        console.log(res.data);
      }
    })
  },

  /**
   * slide-delete 删除产品
   */
  // handleSlideDelete({ detail: { id } }) {
  //   let slideProductList = this.data.slideProductList
  //   let productIndex = slideProductList.findIndex(item => item.id === id)
  //   slideProductList.splice(productIndex, 1)
  //   this.setData({
  //     slideProductList
  //   })
  // },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'http://127.0.0.1:3007/my/getMarkers/',
      header: {
        'content-type': 'application/x-www-form-urlencoded',
        'Authorization': app.data.token
      },
      success(res) {
        console.log(res.data);
        var result = res.data;
        console.log(result.length);
        for (var i = 0; i < result.length; i++) {
          let id = result[i].id;
          let title = result[i].title;
          let date = result[i].timer;
          let isarrived = result[i].isarrived;
          let iconPath;
          if (isarrived == 0) {
            iconPath = "../../image/未完成.png";
          } else {
            iconPath = "../../image/完成.png";
          }
          let index = "marks[" + i + "]";
          //设置本页数据，将所有的点当场显示出来
          that.setData({
            [index]: {
              id: id,
              title: title,
              iconPath: iconPath,
              date: date
            },
            pointnum: i + 1,
          });

        }
        console.log(that.data.marks)
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})