// pages/index/ordering.js
const app = getApp()
let count = 0
let name1 = ''
let name2 = ''
let idcard1 = ''
let phone1 = ''
Page({
    
    /**
     * 页面的初始数据
     */
    data: {
      userid:'',
      id3:"",
      src3:"",
      text3:"",
      price3:"",
      address3:"",
      count1: 0,
      orderlist:[
        {
        src:'/pages/img/disney.jpeg',
        id:1,
        text:"上海迪士尼度假区",
        price:435,
        ordered: 1
        
        },
        {
            src:'/pages/img/zoo.jpeg',
            id:2,
            text:'上海野生动物园',
            price:165,
            ordered: 0
        },
        {
            src:'/pages/img/huanlegu.jpeg',
            id:3,
            text:'上海欢乐谷',
            price:230,
            ordered: 0
        },
        {
            src:'/pages/img/dongfangmingzhu.jpeg',
            id:4,
            text:'东方明珠',
            price:199,
            ordered: 0
        },
        {
            src:'/pages/img/haichang.jpeg',
            id:5,
            text:'上海海昌海洋公园',
            price:279,
            ordered: 2
        },
        {
            src:'/pages/img/waitan.jpeg',
            id:5,
            text:'外滩',
            price:"免费",
            ordered: 0
        }

        ]

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
      const id = options.id1;
      const src = options.src1;
      const text = options.text1;
      const price = options.price1;
      const address = options.address1;
      console.log("id:"+id)
      console.log('app:'+app.data.id)
      this.setData({
        id,
        src,
        text,
        price,
        address,
        userid: app.data.id
      })

    },
    content(e) {
        count = e.detail.value;
        this.setData({
            count1: count
        })
      },

    name(e) {
      name2 = e.detail.value;
    },

    idcard(e) {
      idcard1 = e.detail.value;
    },

    phone(e) {
      phone1 = e.detail.value;
    },



    

    buy(){
      if (name2 == '') {
        wx.showToast({
          icon: 'none',
          title: '请输入姓名',
        })
      } else if (idcard1 == '') {
        wx.showToast({
          icon: 'none',
          title: '请输入身份证',
        })
      }

      else if (phone1 == '') {
        wx.showToast({
          icon: 'none',
          title: '请输入联系电话',
        })
      }

      else{
        let datas = this.data.orderlist;
        for (var index in datas) {
            if (this.data.orderlist[index].text == this.data.text) {
                this.data.orderlist[index].ordered = count;
                name1 = this.data.text;
                console.log(count);
                break
                
            }
        }
        console.log(this.data.userid);
        
        var userinfo = {
            id : this.data.userid,
          }
        userinfo[this.data.text] = count
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
                } 
                else if(res.data.status === 0) {
                  wx.showToast({
                    title: '购买成功',
                    icon: 'none',
                    duration: 1000,
                    mask: true,
                  })
                }
            }
          })
    }},

    add(){
        this.setData({
            count1: this.data.count1++
        })
        console.log(1);
    },

    handletap(e){
        const operation=e.currentTarget.dataset.operation;    
        this.setData({
        num: this.data.count1 + operation
      })
    }
  
})