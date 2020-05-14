// pages/personal/profile/profile.js
Component({
  lifetimes: {
    attached: function () {
      wx.request({
        url: 'http://127.0.0.1:8080/api/student/' + getApp().globalData.openid,
        method: 'GET',
        success: res => {
          if (res.statusCode === 200) {
            this.setData({
              student: res.data
            })
          }
        }
      })
    },
  },

  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    student: {
      id: '',
      name: '',
      sex: false,
      speciality: '',
      collage: ''
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    studentSubmit(e) {
      wx.request({
        url: 'http://127.0.0.1:8080/api/student/' + getApp().globalData.openid,
        method: 'POST',
        data: e.detail.value,
        success: res => {
          if (res.statusCode === 200) {
            wx.showToast({
              title: res.data,
              duration: 2000
            })
          }
        }
      })
    }
  }
})