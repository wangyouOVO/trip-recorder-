// pages/address/address.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */

  data: {
    marks: [],
    pointnum: 0,
    showform: true,
    date: "2022-0-0"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    var that = this;
    wx.getLocation({
      type: 'wgs84',
      success(res) {
        console.log(res);
        var num = that.data.pointnum;
        let index = "marks[" + num + "]";
        num++;
        that.setData({
          [index]: {
            latitude: res.latitude,
            longitude: res.longitude,
            title: "我的位置",
            iconPath: "../../image/视觉定位_o.png",
            width: 10,
            height: 10
          },
          pointnum: num
        })
      }
    })
  },

  chooseLocation: function () {
    var that = this;
    wx.chooseLocation({
      success: function (res) {
        console.log(res);

        var num = that.data.pointnum;
        let index = "marks[" + num + "]";
        num++;
        //设置本页数据，将选择的点当场显示出来
        that.setData({
          [index]: {
            latitude: res.latitude,
            longitude: res.longitude,
            title: "心愿地",
            iconPath: "../../image/已收藏.png",
            width: 25,
            height: 25
          },
          pointnum: num,
          showform: !that.data.showform
        })
       
        
        
      }
    })
  },

  click: function (e) {
    var that = this;
    var firstMarker = that.data.marks[0]
    var marks=that.data.marks
    marks = []
    marks[0]=firstMarker;
    that.setData({
      marks,
      pointnum:0
    })

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
          let lat = result[i].latitude;
          let lng = result[i].longitude;
          let title = result[i].title;
          let isarrived = result[i].isarrived;
          let iconPath;
          if (isarrived == 0){
            iconPath =  "../../image/爱心.png";
          }else{
            iconPath =  "../../image/蓝色爱心.png";
          }
          let index = "marks[" + (i + 1) + "]";

          console.log(lat);
          //设置本页数据，将所有的点当场显示出来
          that.setData({
            [index]: {
              id:id,
              latitude: lat,
              longitude: lng,
              // title: title,
              callout:{
                content:title,
                color:"#341f47",
                bgcolor:"#c1ceda",
                padding:3,
                fontSize:13,
                borderWidth:1,
                borderColor:"#341f40",
                borderRadius:5,

              },
              iconPath: iconPath,
              width: 30,
              height: 30
            },
            pointnum: i + 2,
          });
         
        }
        console.log(that.data.marks)
      }
    })
    wx.showToast({
      title: '更新成功！',
      icon: 'success',
      duration: 1500
    })
    
    
  },

  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },

  formSubmit(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    // var index =" marks[" + (this.data.pointnum-1) +"]";
    var index = this.data.marks;
    index[this.data.pointnum - 1].title = e.detail.value.name;
    index[this.data.pointnum - 1].text = e.detail.value.text;
    index[this.data.pointnum - 1].timer = e.detail.value.date;
    this.setData({
      marks: index,
      showform: !this.data.showform
    })
    console.log(this.data);
    var title = this.data.marks[this.data.pointnum - 1].title
    var lat = this.data.marks[this.data.pointnum - 1].latitude
    var lon = this.data.marks[this.data.pointnum - 1].longitude
    var text = this.data.marks[this.data.pointnum - 1].text
    var date = this.data.marks[this.data.pointnum - 1].timer
    wx.request({
      url: 'http://127.0.0.1:3007/my/upload/',
      data: {
        title: title ,
        latitude:lat,
        longitude:lon,
        text:text,
        date:date
      },
      method:"POST",
      header: {
        'content-type': 'application/x-www-form-urlencoded',
        'Authorization': app.data.token
      },
      success(res) {
        console.log(res.data)
        wx.showToast({
          title: '添加成功！',
          icon: 'success',
          duration: 1500
        })
      }
    })
  },
  moveToLocation: function () {
    this.mapCtx = wx.createMapContext('myMap')
    this.mapCtx.moveToLocation()
  },
  callouttap:function(e){
    var id = e.markerId
    console.log(e.markerId)
    console.log("得到了！")
    wx.navigateTo({
      url: '/pages/pointdetail/pointdetail?id='+id
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