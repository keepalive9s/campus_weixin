// pages/personal/profile/profile.js
Component({
  lifetimes: {
    attached: function () {
      wx.request({
        url: getApp().globalData.url + 'student/' + getApp().globalData.openid,
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
      collage: '',
      avatarUrl: ''
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    studentSubmit(e) {
      this.setData({
        student: {
          id: e.detail.value.id,
          name: e.detail.value.name,
          sex: e.detail.value.sex,
          speciality: e.detail.value.speciality,
          collage: e.detail.value.collage,
          avatarUrl: getApp().globalData.userInfo.avatarUrl
        }
      })
      wx.request({
        url: getApp().globalData.url + 'student/' + getApp().globalData.openid,
        method: 'POST',
        data: this.data.student,
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