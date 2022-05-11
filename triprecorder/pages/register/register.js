// pages/register/register.js
const app = getApp()
let username = ''
let password = ''
let confirpassword = ''
Page({
  data: {
    username: '',
    password: '',
    confirpassword: '',
    clientHeight: ''
  },
  onLoad() {
    var that = this
    wx.getSystemInfo({
      success: function (res) {
        console.log(res.windowHeight)
        that.setData({
          clientHeight: res.windowHeight
        });
      }
    })
  },
  //获取输入款内容
  content(e) {
    username = e.detail.value
  },
  password(e) {
    password = e.detail.value
  },
  confirpassword(e) {
    confirpassword = e.detail.value
  },
  // 登录事件
  // 前端验证+后端验证
  userlogin() {
    if (username == '') {
      wx.showToast({
        icon: 'none',
        title: '用户名不能为空',
      })
    } else if (username.length > 10) {
      wx.showToast({
        icon: 'none',
        title: '用户名长度不能超过10位',
      })
    } else if (!(/^([a-zA-Z0-9]{1,10})$/.test(username))) {
      wx.showToast({
        icon: 'none',
        title: '用户名只能包含数字和字母',
      })
    } else if (password == '') {
      wx.showToast({
        icon: 'none',
        title: '密码不能为空',
      })
    } else if (password.length < 6) {
      wx.showToast({
        icon: 'none',
        title: '密码长度不能小于六位',
      })
    } else if (password !== confirpassword) {
      wx.showToast({
        icon: 'none',
        title: '两次密码不一致'
      })
    } else {
      var userinfo = {
        username: username,
        password: password
      }
      wx.request({
        url: 'http://127.0.0.1:3007/api/reguser',
        method: 'POST',
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        data: userinfo,
        success: function (res) {
          console.log(res)
          // 注册失败，返回失败原因
          if (res.data.status === 1) {
            wx.showToast({
              title: res.data.message,
              icon: 'none'
            })
          }
          // 注册成功
          else {
            wx.showToast({
              title: res.data.message,
              icon: 'none',
              duration: 1000,
              // 显示透明蒙层，防止触摸穿透
              mask: true,
              success: function () {
                // 1.5s后跳转回注册页面
                setTimeout(() => {
                  wx.navigateBack({
                    delta: 1,
                  })
                },1000)
              }
            })
          }
        }
      })
    }
  },
})