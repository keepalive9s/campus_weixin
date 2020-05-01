Page({
  data: {
    PageCur: 'campus'
  },
  NavChange(e) {
    this.setData({
      PageCur: e.currentTarget.dataset.cur
    })
  }
})