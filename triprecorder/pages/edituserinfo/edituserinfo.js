// pages/edituserinfo/edituserinfo.js
const app = getApp()
let username = ''
let nickname = ''
let location = ''
let id = ''
let email = ''
let describe = ''
Page({
  data: {
    id: '',
    username: '',
    nickname: '',
    location: '',
    phone: '',
    email: '',
    describe: '',
    clientHeight: ''
  },
  onLoad() {
    console.log(app.data.id)
    this.setData({
      id: app.data.id,
      username: app.data.username,
      nickname: app.data.nickname,
      email: app.data.email,
      describe: app.data.describe,
      location: app.data.location
    })
    var that = this
    wx.getSystemInfo({
      success: (result) => {
        that.setData({
          clientHeight: result.windowHeight
        })
      },
    })
  },
  // 获取输入内容
  nickname(e) {
    this.setData({
      nickname: e.detail.value
    })
  },
  location(e) {
    this.setData({
      location: e.detail.value
    })
  },
  email(e) {
    this.setData({
      email: e.detail.value
    })
  },
  describe(e) {
    this.setData({
      describe: e.detail.value
    })
  },
  useredit() {
    console.log(this.data.id)
    console.log(this.data.email)
    // 提交给后端的用户数据
    if (!(/^[a-zA-Z0-9]+([-_.][a-zA-Z0-9]+)*@[a-zA-Z0-9]+([-_.][a-zA-Z0-9]+)*\.[a-z]{2,}$/.test(this.data.email))) {
      wx.showToast({
        icon: 'none',
        title: '邮箱格式不正确',
      })
    } else {
      var userinfo = {
        id: this.data.id,
        nickname: this.data.nickname,
        location: this.data.location,
        email: this.data.email,
        description: this.data.describe
      }
      wx.request({
        // 修改用户数据
        url: 'http://127.0.0.1:3007/my/userinfo',
        method: 'POST',
        header: {
          'content-type': 'application/x-www-form-urlencoded',
          'Authorization': app.data.token
        },
        data: userinfo,
        success: function (res) {
          console.log(res)
          if (res.data.status === 1) {
            wx.showToast({
              title: res.data.message,
              icon: 'none',
              duration: 1000,
              mask: true,
              success: function () {
                setTimeout(() => {
                  wx.switchTab({
                    url: '../mylogin/mylogin',
                  })
                }, 1000)
              }
            })
          } else {
            wx.showToast({
              title: res.data.message,
              icon: 'none',
              duration: 1000,
              mask: true,
              success: function () {
                setTimeout(() => {
                  wx.navigateTo({
                    url: '../userpage/userpage',
                  })
                }, 1000)
              }
            })
          }
        }
      })
    }
  }
})