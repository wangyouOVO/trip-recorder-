Page({

    /**
     * 页面的初始数据
     */
    data: {
        playlist1:[
            {
            src:'/pages/img/disney.jpeg',
            id:1,
            text:"上海迪士尼度假区",
            price:435,
            address:'上海市浦东新区川沙镇',
            addressd:"上海市浦东新区川沙镇黄赵路310号",
            rate:"4.7分",
            pre:true,
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
                pre:true,
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
                pre:true,
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
                pre:true,
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
                pre:true,
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
                pre:false,
                pred:"无需预约",
                time:"全天开放",
                latitude: "31.233462",
                longtitude: "121.492156",
            }
    
            ],	//这是搜索到的结果
            playlist2:[
                {
                src:'/pages/img/disney.jpeg',
                id:1,
                text:"上海迪士尼度假区",
                price:435,
                address:'上海市浦东新区川沙镇',
                addressd:"上海市浦东新区川沙镇黄赵路310号",
                rate:"4.7分",
                pre:true,
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
                    pre:true,
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
                    pre:true,
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
                    pre:true,
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
                    pre:true,
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
                    pre:false,
                    pred:"无需预约",
                    time:"全天开放",
                    latitude: "31.233462",
                    longtitude: "121.492156",
                }
        
                ],	//这是所有可供查询的记录
                recommend:[
                    {
                    src:'/pages/img/disney.jpeg',
                    id:1,
                    text:"上海迪士尼度假区",
                    price:435,
                    address:'上海市浦东新区川沙镇',
                    addressd:"上海市浦东新区川沙镇黄赵路310号",
                    rate:"4.7分",
                    pre:true,
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
                        pre:true,
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
                        pre:true,
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
                        pre:true,
                        pred:"需提前预约",
                        time:"10:00-20:00",
                        latitude: "31.239666",
                        longtitude: "121.499809",
                    },
                    {
                        src:'/pages/img/waitan.jpeg',
                        id:5,
                        text:'外滩',
                        price:"免费",
                        address:"外滩核心区",
                        addressd:"上海市黄浦区中山东一路(临黄浦江)",
                        rate:"4.8分",
                        pre:false,
                        pred:"无需预约",
                        time:"全天开放",
                        latitude: "31.233462",
                        longtitude: "121.492156",
                    }
            
                    ],
                
                
    focus:false,  //控制是否显示带取消按钮的搜索框
    inputValue:""
    },
    focusHandler(e){
      this.setData({focus:true});
    },
    cancelHandler(e)
    {
      this.setData({focus:false});
    },
    query(e){
     
      this.setData({
        inputValue: e.detail.value
    })  //首先回显输入的字符串
      //实现搜索的功能
      var list = this.data.playlist2;		//先把第二条json存起来
      var list2 = [];		//定义一个数组
      //循环去取数据
      for(var i=0;i<list.length;i++){
        var string = list[i].text;
        //查询json里的name是否包含搜索的关键词，如果有就把他装进list2数组
        if(string.indexOf(e.detail.value) >= 0){
          list2.push(list[i]);
        }
      }
      //到这里list2就已经是你查出的数据
      //如果输入的关键词为空就加载原来的全部数据，不是空就加载搜索到的数据
      if(e.detail.value == ""){
        //加载全部
        this.setData({
          playlist: []
        })
      } else {
        this.setData({
          playlist: list2
        })
      }
    },
})
  
  
  