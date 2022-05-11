//index.js
//获取应用实例
const app = getApp()
let username = ''
let password = ''
Page({
  data: {
    username: '',
    password: '',
    clientHeight: ''
  },
  onLoad() {
    var mywindow = this
    wx.getSystemInfo({
      success: function (res) {
        console.log('window height', res.windowHeight)
        mywindow.setData({
          clientHeight: res.windowHeight
        });
      }
    }),
    // 清空用户信息
    app.data.id = ''
    app.data.username = ''
    app.data.email = ''
    app.data.nickname = ''
    app.data.describe = ''
    app.data.location = ''
  },
  content(e) {
    username = e.detail.value
  },
  password(e) {
    password = e.detail.value
  },
  //登录事件
  userlogin() {
    let flag = false //表示账户是否存在,false为初始值
    if (username == '') {
      wx.showToast({
        icon: 'none',
        title: '账号不能为空',
      })
    } else if (password == '') {
      wx.showToast({
        icon: 'none',
        title: '密码不能为空',
      })
    } else {
      // 获取用户前端输入的信息
      var userinfo = {
        username: username,
        password: password
      }
      wx.request({
        url: 'http://127.0.0.1:3007/api/login',
        method: 'POST',
        // post里面必须要有响应头，get里面可有可无
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        data: userinfo,
        success: function (res) {
          // res：服务器响应信息
          console.log(res)
          if (res.data.status === 1) {
            wx.showToast({
              title: res.data.message,
              icon: 'none'
            })
          } else {
            // 登陆成功，把个人信息放入app
            app.data.token=res.data.token,
            wx.showToast({
              title: res.data.message,
              icon: 'none',
              duration: 2000,
              // 显示透明蒙层，防止触摸穿透
              mask: true,
              success: function () {
                setTimeout(() => {
                  wx.switchTab({
                    url: '/pages/index/index',
                  })
                  //  wx.navigateTo({
                  //    url: '/pages/market/market',
                  //  })
                }, 1500)
              }
            })
          }
        }
      })
      // console.log(this.password)
    }
  },
})