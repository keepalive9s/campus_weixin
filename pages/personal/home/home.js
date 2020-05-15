Component({
  options: {
    addGlobalClass: true,
  },
  lifetimes: {
    attached: function () {
      wx.request({
        url: getApp().globalData.url + 'student/count/' + getApp().globalData.openid,
        method: 'GET',
        success: res => {
          this.setData({
            count: res.data
          })
        }
      })
      wx.getSetting({
        success: res => {
          if (!res.authSetting['scope.userInfo']) {
            this.setData({
              show: true
            })
          } else {
            this.setData({
              avatarUrl: getApp().globalData.userInfo.avatarUrl
            })
          }
        }
      })
    }
  },
  data: {
    count: {
      countCommunity: 0,
      countPost: 0
    },
    avatarUrl: '',
    starCount: 0,
    forksCount: 0,
    visitTotal: 0,
    show: false
  },
  methods: {
    getUserInfo(e) {
      getApp().globalData.userInfo = e.detail.userInfo
      this.setData({
        show: false,
        avatarUrl: e.detail.userInfo.avatarUrl
      })
    }
  }
})