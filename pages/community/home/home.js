const app = getApp();
Component({
  lifetimes: {
    attached: function () {
      wx.request({
        url: 'http://127.0.0.1:8080/api/community',
        method: 'GET',
        success: res => {
          this.setData({
            list: res.data
          })
        }
      })
    },
  },
  options: {
    addGlobalClass: true,
  },
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    list: []
  },
  methods: {
    toChild(e) {
      wx.navigateTo({
        url: '/pages/community/publicity/publicity?id=' + e.currentTarget.dataset.url
      })
    },
  }
});