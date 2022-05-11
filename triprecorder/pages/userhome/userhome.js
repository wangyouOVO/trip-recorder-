// pages/userhome/userhome.js
const app = getApp()
let id = ''
let username = ''
let nickname = ''
Page({
  data: {
    id: '',
    username: '',
    nickname: '',
    clientHeight: ''
  },
  onLoad() {
    var that = this
    this.setData({
      id: app.data.id,
      username: app.data.username,
      nickname: app.data.nickname,
    })
    console.log(this.data.username)
    wx.getSystemInfo({
        success: (result) => {
          that.setData({
            clientHeight: result.windowHeight
          })
        },
      }),
      wx.request({
        // 获取用户数据
        url: 'http://127.0.0.1:3007/my/userinfo',
        method: 'GET',
        header: {
          'content-type': 'application/x-www-form-urlencoded',
          'Authorization': app.data.token
        },
        success: function (res) {
          // 从数据库中获取用户信息
          console.log(res.data.data.nickname)
          that.setData({
            id: res.data.data.id,
            username: res.data.data.username,
            nickname: res.data.data.nickname,
            email: res.data.data.email,
            location: res.data.data.location,
            describe: res.data.data.description
          })
          // 保存用户数据
          app.data.id = that.data.id
          app.data.username = that.data.username
          app.data.email = that.data.email
          app.data.nickname = that.data.nickname
          app.data.describe = that.data.describe
          app.data.location = that.data.location
        }
      })
  },
  orderform() {
    wx.navigateTo({
      url: '/pages/order/order',
    })
  },
  favorloc() {
    wx.navigateTo({
      url: '/pages/alladdress/alladdress',
    })
  },
  useredit() {
    // TODO:跳转到用户个人信息页面
    wx.navigateTo({
      url: '/pages/userpage/userpage',
    })
  },
  logout(){
    // TODO:退出登录
    wx.redirectTo({
      url: '/pages/mylogin/mylogin',
    })
  },
  updatepwd(){
    wx.navigateTo({
      url: '/pages/updatepwd/updatepwd',
    })
  }

})