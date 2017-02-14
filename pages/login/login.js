// pages/login/login.js
Page({
  data: {
    userName: '',
    userPassword: '',
  },

  formSubmit: function (e) {
    console.log(e.detail.value);//格式 Object {userName: "user", userPassword: "password"}

    //获得表单数据
    var objData = e.detail.value;

    if (objData.userName && objData.userPassword) {
      // 同步方式存储表单数据
      wx.setStorageSync('userName', objData.userName);
      wx.setStorageSync('userPassword', objData.userPassword);
      console.log('aaa');
      wx.request({
        url: 'http://139.129.25.211:8801/MobileAjax?op=LOGIN',
        data: {
          name: objData.userName,
          password: objData.userPassword,
        },
        method: 'GET',
        success: function (res) {
          console.log(res);
          //跳转到成功页面
          wx.redirectTo({
            url: '../index/index'
          })
        },
        fail: function (res) {
          console.log(res.data);
          console.log('is failed')
        }
      })
    }
  },

  //加载完后，处理事件 
  // 如果有本地数据，则直接显示
  onLoad: function (options) {
    //获取本地数据
    var userName = wx.getStorageSync('userName');
    var userPassword = wx.getStorageSync('userPassword');

    console.log(userName);
    console.log(userPassword);
    if (userName) {
      this.setData({ userName: userName });
    }
    if (userPassword) {
      this.setData({ userPassword: userPassword });
    }

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