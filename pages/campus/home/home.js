const colorMap = ['cyan', 'blue', 'purple', 'mauve', 'pink', 'brown', 'red', 'orange', 'olive', 'green', ]
Component({
  lifetimes: {
    attached: function() {
      wx.request({
        url: 'http://127.0.0.1:8080/api/group',
        method: 'GET',
        success: res => {
          this.setData({
            groups: res.data
          })
        }
      })
    },
  },
  options: {
    addGlobalClass: true,
  },
  data: {
    groups: []
  }
})