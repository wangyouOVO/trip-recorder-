// pages/updatepwd/updatepwd.js
const app = getApp()
let id = ''
let oldpwd = ''
let newpwd = ''
let confirnewpwd = ''
let clientHeight = ''
Page({
  data: {
    id: '',
    oldpwd: '',
    newpwd: '',
    confirnewpwd: '',
    clientHeight: ''
  },
  onLoad() {
    this.setData({
      id: app.data.id,
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
  oldpwd(e) {
    this.setData({
      oldpwd: e.detail.value
    })
  },
  newpwd(e) {
    this.setData({
      newpwd: e.detail.value
    })
  },
  confirnewpwd(e) {
    this.setData({
      confirnewpwd: e.detail.value
    })
  },
  back(e){
    wx.navigateBack({
      delta: 1,
    })
  },
  userupdate(e) {
    // 前端验证新密码是否符合要求，后端验证旧密码是否正确
    if (this.data.oldpwd == '' || this.data.newpwd == '') {
      wx.showToast({
        icon: 'none',
        title: '密码不能为空',
      })
    } else if (this.data.newpwd.length < 6 || this.data.oldpwd.length < 6) {
      wx.showToast({
        icon: 'none',
        title: '密码长度不能小于六位',
      })
    } else if (this.data.newpwd !== this.data.confirnewpwd) {
      wx.showToast({
        icon: 'none',
        title: '两次密码不一致'
      })
    } else {
      var userinfo = {
        id: this.data.id,
        oldPwd: this.data.oldpwd,
        newPwd: this.data.newpwd
      }
      wx.request({
        url: 'http://127.0.0.1:3007/my/updatepwd',
        method: 'POST',
        header: {
          'content-type': 'application/x-www-form-urlencoded',
          'Authorization': app.data.token
        },
        data: userinfo,
        success: (res) => {
          // 操作失败，返回登陆页面
          // 原密码错误，停留在修改页面
          if (res.data.status === 1 && (res.data.message !== '原密码错误！')) {
            wx.showToast({
              title: res.data.message,
              icon: 'none',
              duration: 1000,
              mask: true,
              success: function () {
                setTimeout(() => {
                  wx.navigateTo({
                    url: '../mylogin/mylogin',
                  })
                }, 1000)
              }
            })
          } else if (res.data.status == 0) {
            // 密码修改成功，返回用户主页
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
                }, 1000)
              }
            })
          }
        }
      })
    }

  }

})