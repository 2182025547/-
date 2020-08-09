//index.js

Page({
  data: {
    avatarUrl: './user-unlogin.png',
    userInfo: {},
    logged: false,
    takeSession: false,
    requestResult: '',
    test:"78787878787878"
  },

  onLoad: function() {
    console.log('onLoad');
  },

  onShow: function() {
    console.log('onShow');
  },

  onHide() {
    console.log('onSHide');
  },

  onGetUserInfo: function(e) {
   
  },

  onGetOpenid: function() {

  },

  // 上传图片
  doUpload: function () {
   
  },

})
