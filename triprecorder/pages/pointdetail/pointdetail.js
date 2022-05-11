// pages/pointdetail/pointdetail.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isMe: 1,
    id: 0,
    showImage: 1,
    src: "",
    hiddenform: 1,
    marker: {
      id: 0,
      title: "",
      text: "",
      date: "",
      isarrived: 0
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */

  formSubmit(e) {
    console.log(e)
    if (e.detail.value.isarrived) {
      console.log("haode")
      var isarrived = 1;
    } else {
      console.log("坏的")
      var isarrived = 0;
    }
    var id = this.data.marker.id
    this.setData({
      marker: {
        title: e.detail.value.title,
        text: e.detail.value.text,
        date: e.detail.value.date,
        isarrived: isarrived
      },
    });

    //////////////////
    wx.request({
      url: 'http://127.0.0.1:3007/my/setMarker/',
      data: {
        id: id,
        title: e.detail.value.title,
        text: e.detail.value.text,
        timer: e.detail.value.date,
        isarrived: isarrived
      },
      method: "POST",
      header: {
        'content-type': 'application/x-www-form-urlencoded',
        'Authorization': app.data.token
      },
      success(res) {
        console.log(res.data)
        wx.showToast({
          title: '修改成功！',
          icon: 'success',
          duration: 1500
        })
        
        
      }
    })
    ///////////////////////////
  },

  openform: function () {
    this.setData({
      hiddenform: 0
    })
  },
  onLoad: function (options) {

    var that = this;
    wx.request({
      url: 'http://127.0.0.1:3007/my/getMarker?id=' + options.id,
      header: {
        'content-type': 'application/x-www-form-urlencoded',
        'Authorization': app.data.token
      },
      success(res) {
        var result = res.data;
        let id = result[0].id;
        let title = result[0].title;
        let isarrived = result[0].isarrived;
        let text = result[0].text;
        let date = result[0].timer;
        if (isarrived == 0) {
          console.log("没去过")
        } else {
          console.log("去过了")
        }

        that.setData({
          marker: {
            id: id,
            title: title,
            text: text,
            date: date,
            isarrived: isarrived
            // iconPath: iconPath,
            // width: 30,
            // height: 30
          },
        });
      }
    })
  },

  uploadImg: function () {
    var that = this;
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths;
        console.log(tempFilePaths)
        that.setData({
          src: tempFilePaths,
          showImage: 0
        })
      }
    })
  },
 
  onShareAppMessage() {
    const title = this.data.marker.title;
    console.log(title)
    const date = this.data.marker.date;
    const text = this.data.marker.text;
    const src = this.data.src;
    console.log(text)
    // debugger
    const path='/pages/sharedpage/sharedpage?title='+title+'&date='+date+'&text='+text+"&src="+src;
    return {
      title: "发送给好友",
      path: path,
    }
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
  // onShareAppMessage: function () {

  // }
})