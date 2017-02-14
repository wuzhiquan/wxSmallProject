// pages/shoporder/shoporder.js
Page({
  data: {
    orderShopList: [
      {
        BillDate: "2017-01-29",
        BillNo: "SO1701190081",
        Address: "深圳市杰尼斯科技有限公司",
        EmpFullName: "陈贵大",
        TotalTaxAmount: "288,000"
      },
      {
        BillDate: "2016-12-11",
        BillNo: "SO1701190082",
        Address: "佛山金亮计算机网络有限公司",
        EmpFullName: "吴之全",
        TotalTaxAmount: "67,000"
      },
      {
        BillDate: "2017-01-11",
        BillNo: "SO1701190083",
        Address: "河南新乡时代计算机网络工程有限公司",
        EmpFullName: "钟阳娜",
        TotalTaxAmount: "11,000"
      },
      {
        BillDate: "2016-06-06",
        BillNo: "SO1701190084",
        Address: "广州伟宏计算机有限公司",
        EmpFullName: "黄成红",
        TotalTaxAmount: "12,111"
      },
      {
        BillDate: "2015-11-28",
        BillNo: "SO1701190085",
        Address: "深圳金石开电气有限公司",
        EmpFullName: "姜元祥",
        TotalTaxAmount: "9,000"
      },
      {
        BillDate: "2017-01-29",
        BillNo: "SO1701190081",
        Address: "深圳市杰尼斯科技有限公司",
        EmpFullName: "陈贵达",
        TotalTaxAmount: "288,000"
      },
      {
        BillDate: "2016-12-11",
        BillNo: "SO1701190082",
        Address: "佛山金亮计算机网络有限公司",
        EmpFullName: "吴之全",
        TotalTaxAmount: "67,000"
      },
      {
        BillDate: "2017-01-11",
        BillNo: "SO1701190083",
        Address: "河南新乡时代计算机网络工程有限公司",
        EmpFullName: "钟阳娜",
        TotalTaxAmount: "11,000"
      },
      {
        BillDate: "2016-06-06",
        BillNo: "SO1701190084",
        Address: "广州伟宏计算机有限公司",
        EmpFullName: "黄成红",
        TotalTaxAmount: "12,111"
      },
      {
        BillDate: "2015-11-28",
        BillNo: "SO1701190085",
        Address: "深圳金石开电气有限公司",
        EmpFullName: "姜元祥",
        TotalTaxAmount: "9,000"
      },
      {
        BillDate: "2017-01-29",
        BillNo: "SO1701190081",
        Address: "深圳市杰尼斯科技有限公司",
        EmpFullName: "陈贵大",
        TotalTaxAmount: "288,000"
      },
      {
        BillDate: "2016-12-11",
        BillNo: "SO1701190082",
        Address: "佛山金亮计算机网络有限公司",
        EmpFullName: "吴之全",
        TotalTaxAmount: "67,000"
      },
      {
        BillDate: "2017-01-11",
        BillNo: "SO1701190083",
        Address: "河南新乡时代计算机网络工程有限公司",
        EmpFullName: "钟阳娜",
        TotalTaxAmount: "11,000"
      },
      {
        BillDate: "2016-06-06",
        BillNo: "SO1701190084",
        Address: "广州伟宏计算机有限公司",
        EmpFullName: "黄成红",
        TotalTaxAmount: "12,111"
      },
      {
        BillDate: "2015-11-28",
        BillNo: "SO1701190085",
        Address: "深圳金石开电气有限公司",
        EmpFullName: "姜元祥",
        TotalTaxAmount: "9,000"
      }
    ]

  },
  onItemClick: function (e) {
    var index = e.currentTarget.dataset.itemIndex;
    console.log(index);
  },
  goToPay: function () {
    console.log('aaa');
    //跳转到成功页面
    wx.navigateTo({
      url: '../order/order'
    })
    wx.request({
      url: 'http://news-at.zhihu.com/api/4/news/latest',
      dataType: 'json',
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        // success
        console.log(res);
      }
    })
  },
  onShareAppMessage: function () {
    return {
      title: '订单列表',
      desc: '好多好多东西，没钱了',
      path: 'www.baidu.com'
    }
  },
  onLoad: function () {
    wx.request({
      url: 'http://139.129.25.211:8801/MobileAjax?op=LOGIN',
      data: {
        name: 'admin',
        password: 'e10adc3949ba59abbe56e057f20f883e',
      },
      method: 'GET',
      success: function (res) {
        console.log(res);
        wx.request({
          url: 'http://139.129.25.211:8801/MobileAjax?op=report&tableName=CRMClientInfoDet',
          method: 'GET',
          success: function (res1) {
            console.log(res1);
          }
        })
      },
      fail: function (res) {
        console.log(res.data);
        console.log('is failed')
      }
    })
  }
})