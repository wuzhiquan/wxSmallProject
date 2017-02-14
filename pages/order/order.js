// pages/order/order.js
Page({
  data: {
    sendwayData: [
      { name: '1', value: '市区送货(免费送货)', checked: true },
      { name: '2', value: '郊区配送(+30元)', checked: false },
      { name: '3', value: '远郊配送(+50元)', checked: false }
    ],
    payWay: [
      { name: '1', value: '微信支付', checked: true },
      { name: '2', value: '支付宝支付', checked: false },
      { name: '3', value: '现金支付', checked: false },
      { name: '4', value: '银联支付', checked: false }
    ],
    goodsList: [
      { picSrc: '../../img/shop_cart_img1.jpg', goodsName: '香喷喷的紫罗兰', goodsPrice: '203', goodsNumber: '39013908813', orderNum: 0 },
      { picSrc: '../../img/shop_cart_img2.jpg', goodsName: '水嫩嫩的红玫瑰', goodsPrice: '313', goodsNumber: '320183011', orderNum: 0 },
      { picSrc: '../../img/shop_cart_img3.jpg', goodsName: '经典的向日葵之爱情满满', goodsPrice: '203', goodsNumber: '4901213908813', orderNum: 0 },
      { picSrc: '../../img/shop_cart_img4.jpg', goodsName: '香喷喷的紫罗兰', goodsPrice: '203', goodsNumber: '39013908812', orderNum: 0 },
      { picSrc: '../../img/shop_cart_img5.jpg', goodsName: '经典的向日葵之爱情满满啊啊啊', goodsPrice: '203', goodsNumber: '559013908813', orderNum: 0 },
      { picSrc: '../../img/shop_cart_img1.jpg', goodsName: '香喷喷的紫罗兰', goodsPrice: '203', goodsNumber: '390139088233', orderNum: 0 },
      { picSrc: '../../img/shop_cart_img2.jpg', goodsName: '水嫩嫩的红玫瑰', goodsPrice: '313', goodsNumber: '1320181231', orderNum: 0 },
      { picSrc: '../../img/shop_cart_img3.jpg', goodsName: '经典的向日葵之爱情满满', goodsPrice: '203', goodsNumber: '63013908813', orderNum: 0 },
      { picSrc: '../../img/shop_cart_img4.jpg', goodsName: '香喷喷的紫罗兰', goodsPrice: '203', goodsNumber: '3123113908813', orderNum: 0 },
      { picSrc: '../../img/shop_cart_img5.jpg', goodsName: '经典的向日葵之爱情满满啊啊啊', goodsPrice: '203', goodsNumber: '1349013908813', orderNum: 0 }
    ],
    detailList: [
      // { name: '水嫩嫩的红玫瑰', num: 22, price: 111, goodsNumber: '32018301'}
    ],
    date: '选择日期',
    showPart: true,
    openGoodsList: true,
    openCartDetail: true,
    totalFee: 0
  },
  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
  },
  backFor: function () {
    this.setData({
      showPart: true
    })
  },
  nextStep: function () {
    this.setData({
      showPart: false
    })
  },
  openGoodsList: function () {
    this.setData({
      openGoodsList: false
    })
  },
  closeGoodsList: function () {
    this.setData({
      openGoodsList: true
    })
  },
  openCartDetail: function () {
    this.setData({
      openCartDetail: false
    })
  },
  closeCartDetail: function () {
    this.setData({
      openCartDetail: true
    })
  },
  stopTouch: function (event) {
  },
  //模拟radio
  selectPay: function (event) {
    var selectPayway = event.currentTarget.dataset.payway;
    console.log(selectPayway)
    for (let i = 0; i < this.data.payWay.length; i++) {
      if (this.data.payWay[i].name == selectPayway) {
        this.data.payWay[i].checked = true
      } else {
        this.data.payWay[i].checked = false
      }
    }
    this.setData({
      payWay: this.data.payWay
    })
    console.log(this.data)
  },
  selectSendway: function (event) {
    var selectSendway = event.currentTarget.dataset.sendway;
    console.log(selectSendway)
    for (let i = 0; i < this.data.sendwayData.length; i++) {
      if (this.data.sendwayData[i].name == selectSendway) {
        this.data.sendwayData[i].checked = true
      } else {
        this.data.sendwayData[i].checked = false
      }
    }
    this.setData({
      sendwayData: this.data.sendwayData
    })
    console.log(this.data)
  },
  // 增加订单
  addList: function (e) {
    var index = e.currentTarget.dataset.index
    this.data.goodsList[index].orderNum++
    // push订单列表
    // 先删除
    let detailList = this.data.detailList.filter(item => item.goodsNumber != this.data.goodsList[index].goodsNumber)
    detailList.push({ name: this.data.goodsList[index].goodsName, num: this.data.goodsList[index].orderNum, price: this.data.goodsList[index].goodsPrice, goodsNumber: this.data.goodsList[index].goodsNumber })
    console.log(this.data.detailList)
    this.setData({
      goodsList: this.data.goodsList,
      totalFee: Number(this.data.totalFee) + Number(this.data.goodsList[index].goodsPrice),
      detailList: detailList
    })
  },
  // 减少订单
  plusList: function (e) {
    var index = e.currentTarget.dataset.index
    // 数量大于等于0
    if (this.data.goodsList[index].orderNum) {
      this.data.goodsList[index].orderNum--
      if (this.data.goodsList[index].orderNum == 0) {
        // 等于0时删除详情中的数据
        let detailList = this.data.detailList.filter(item => item.goodsNumber != this.data.goodsList[index].goodsNumber)
        this.setData({
          goodsList: this.data.goodsList,
          totalFee: Number(this.data.totalFee) - Number(this.data.goodsList[index].goodsPrice),
          detailList: detailList
        })
      } else {
        let detailList = this.data.detailList.filter(item => item.goodsNumber != this.data.goodsList[index].goodsNumber)
        detailList.push({ name: this.data.goodsList[index].goodsName, num: this.data.goodsList[index].orderNum, price: this.data.goodsList[index].goodsPrice, goodsNumber: this.data.goodsList[index].goodsNumber })
        this.setData({
          goodsList: this.data.goodsList,
          totalFee: Number(this.data.totalFee) - Number(this.data.goodsList[index].goodsPrice),
          detailList: detailList
        })
      }
    } else {
      // 等于0时删除详情中的数据
      let detailList = this.data.detailList.filter(item => item.goodsNumber != this.data.goodsList[index].goodsNumber)
      this.setData({
        detailList: detailList
      })
    }
  },
  totalFeeFn: function () {
    let that = this
    this.data.goodsList.forEach(function (item) {
      that.data.totalFee += item.goodsPrice * item.orderNum
      that.setData({
        totalFee: that.data.totalFee
      })
    })
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    this.totalFeeFn()
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})