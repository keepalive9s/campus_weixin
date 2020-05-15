const app = getApp();
Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    title: '',
    id: '',
    posts: [{
    }]
  },
  onLoad(options) {
    this.setData({
      id: options.id,
      title: options.title
    })
  },
  onShow() {
    wx.request({
      url: getApp().globalData.url + 'post/group/' + this.data.id,
      method: 'GET',
      success: res => {
        this.setData({
          posts: res.data
        })
      }
    })
  }
});