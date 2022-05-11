// index.js
const app = getApp()
Page({
    data:{
 
        playlist:[
        {
        src:'/pages/img/disney.jpeg',
        id:1,
        text:"上海迪士尼度假区",
        price:435,
        address:'上海市浦东新区川沙镇',
        addressd:"上海市浦东新区川沙镇黄赵路310号",
        rate:"4.7分",
        pre:1,
        pred:"需提前预约",
        time:"10:00-22:00",
        latitude: "31.14038",
        longtitude: "121.663131",
        
        },
        {
            src:'/pages/img/zoo.jpeg',
            id:2,
            text:'上海野生动物园',
            price:165,
            address:'上海市浦东新区南六公路',
            addressd:"上海市浦东新区南六公路178号",
            rate:"4.7分",
            pre:1,
            pred:"需提前预约",
            time:"10:00-22:00",
            latitude: "31.055337",
            longtitude: "121.721793",
        },
        {
            src:'/pages/img/huanlegu.jpeg',
            id:3,
            text:'上海欢乐谷',
            price:230,
            address:'上海市松江区佘山镇',
            addressd:"上海市松江区佘山镇林湖路888号",
            rate:"4.7分",
            pre:1,
            pred:"需提前预约",
            time:"9:00-21:30(最晚入园20:30)",
            latitude: "31.09607",
            longtitude: "121.214778",
        },
        {
            src:'/pages/img/dongfangmingzhu.jpeg',
            id:4,
            text:'东方明珠',
            price:199,
            address:'上海市浦东新区陆家嘴',
            addressd:"上海市浦东新区陆家嘴世纪大道1号",
            rate:"4.6分",
            pre:1,
            pred:"需提前预约",
            time:"10:00-20:00",
            latitude: "31.239666",
            longtitude: "121.499809",
        },
        {
            src:'/pages/img/haichang.jpeg',
            id:5,
            text:'上海海昌海洋公园',
            price:279,
            address:'上海市浦东新区南汇新城',
            addressd:"上海市浦东新区南汇新城镇银飞路166号",
            rate:"4.6分",
            pre:1,
            pred:"需提前预约",
            time:"9:30-17:30(停止售票16:00,最晚入园16:30",
            longtitude:"121.90609",
            latitude:"30.91466"
        },
        {
            src:'/pages/img/waitan.jpeg',
            id:5,
            text:'外滩',
            price:"免费",
            address:"外滩核心区",
            addressd:"上海市黄浦区中山东一路(临黄浦江)",
            rate:"4.8分",
            pre:0,
            pred:"无需预约",
            time:"全天开放",
            latitude: "31.233462",
            longtitude: "121.492156",
        }

        ]
        
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
            console.log(res);
            // 保存用户数据
            app.data.id = res.data.data.id
            app.data.username = res.data.data.username
            app.data.email = res.data.data.email
            app.data.nickname = that.data.nickname
            app.data.describe = res.data.data.description
            app.data.location = res.data.data.location
          }
        })
        console.log(app.data);
    },
    
      
    }

)
