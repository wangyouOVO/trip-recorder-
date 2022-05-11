// pages/index/order.js
const app = getApp()
let checkedlist=[]
let judge = false
Page({

    /**
     * 页面的初始数据
     */
    data: {
      selectall: false,
      checkedlist:[],
        orderlist:[
            {
            src:'/pages/img/disney.jpeg',
            id:1,
            text:"上海迪士尼度假区",
            price:435,
            ordered: 0,
            checked: false
            
            },
            {
                src:'/pages/img/zoo.jpeg',
                id:2,
                text:'上海野生动物园',
                price:165,
                ordered: 0,
                checked: false
            },
            {
                src:'/pages/img/huanlegu.jpeg',
                id:3,
                text:'上海欢乐谷',
                price:230,
                ordered: 0,
                checked: false
            },
            {
                src:'/pages/img/dongfangmingzhu.jpeg',
                id:4,
                text:'东方明珠',
                price:199,
                ordered: 0,
                checked: false
            },
            {
                src:'/pages/img/haichang.jpeg',
                id:5,
                text:'上海海昌海洋公园',
                price:279,
                ordered: 0,
                checked: false
            },
            {
                src:'/pages/img/waitan.jpeg',
                id:6,
                text:'外滩',
                price:"免费",
                ordered: 0,
                checked: false
            }
    
            ]

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad() {
      var that = this
      // this.setData({
      //   id: app.data.id,
      //   username: app.data.username,
      //   nickname: app.data.nickname,
      // })
      // console.log(this.data.username)
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
            console.log(res);
            that.setData({
              ["orderlist["+0+"].ordered"]: res.data.data.上海迪士尼度假区,
              ["orderlist["+1+"].ordered"]: res.data.data.上海野生动物园,
              ["orderlist["+2+"].ordered"]: res.data.data.上海欢乐谷,
              ["orderlist["+3+"].ordered"]: res.data.data.东方明珠,
              ["orderlist["+4+"].ordered"]: res.data.data.上海海昌海洋公园,
            })
            // 保存用户数据
            app.data.disney = that.data.orderlist[0].ordered
            app.data.yeshengzoo = that.data.orderlist[1].ordered
            app.data.huanlegu = that.data.orderlist[2].ordered
            app.data.dongfangmingzhu = that.data.orderlist[3].ordered
            app.data.haichang = that.data.orderlist[4].ordered
           
          }
        })

    },

    selectall: function (e) {
      console.log(this.data.selectall);
      for(var index in this.data.orderlist){
        if (this.data.orderlist[index].ordered != 0){
          this.setData({
            ["orderlist["+index+"].checked"]: !this.data.orderlist[index].checked
      })
        }
      }}
      
      
    ,

     // 单选
  checkboxChange: function (e) {
      console.log(this.data.selectall)
    for(var index in this.data.orderlist){
      if (this.data.orderlist[index].ordered != 0){
        this.setData({
          ["orderlist["+index+"].checked"]: false
    })
      }
    }
    var count = 0;
    let checkedid=0;
    checkedid = e.detail.value-1;
    console.log("value"+e.detail.value);
    console.log('id:'+checkedid)
    for(index in e.detail.value) {
      checkedid = e.detail.value[index] - 1;
      this.setData({
      ["orderlist["+checkedid+"].checked"]:  true
    })
    }
    
    for(var index in this.data.orderlist){
      if (this.data.orderlist[index].ordered != 0 && this.data.orderlist[index].checked != true){
       count++;
       break
      }
    }
    if(count == 0){
      this.setData({
        selectall: true
      })
    }
    else{
      this.setData({
        selectall: false
      })
  }

    }
    ,


    clear() {
      console.log(1);
      for(var index in this.data.orderlist) {
        console.log(index);
       if(this.data.orderlist[index].checked == true) {
         this.setData({
          ["orderlist["+index+"].ordered"]:0
         })
         var userinfo = {
          id : app.data.id,
        }
      userinfo[this.data.orderlist[index].text] = 0
      console.log(userinfo);
      wx.request({
          url: 'http://127.0.0.1:3007/my/userinfo',
          method: 'POST',
          // post里面必须要有响应头，get里面可有可无
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
                })
              } else {
                wx.showToast({
                  title: '删除成功',
                  icon: 'none',
                  duration: 1000,
                  mask: true,
                })
              }
          }
        })
       }
      }
    }
})