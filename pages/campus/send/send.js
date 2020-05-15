// pages/campus/send/send.js
Page({
  data: {
    gid: null,
    index: null,
    imgList: [],
    textareaAValue: '',
    modalName: null,
  },
  onLoad: function (options) {
    this.setData({
      gid: options.id,
    })
  },
  onReady: function () {

  },
  onShow: function () {

  },
  postSubmit(e) {
    var self = this
    wx.uploadFile({
      filePath: this.data.imgList[0],
      name: 'file',
      url: getApp().globalData.url + 'oss',
      success(res) {
        console.log(res)
        console.log(JSON.parse(res.data).url)
        wx.request({
          url: getApp().globalData.url + 'post/group/' + self.data.gid + '/' + getApp().globalData.openid,
          method: 'POST',
          data: {
            title: e.detail.value.title,
            content: e.detail.value.content,
            picUrl: JSON.parse(res.data).url
          },
          success: res => {
            if (res.statusCode === 200) {
              wx.showToast({
                title: "发布成功",
                duration: 2000
              })
            }
          }
        })
      }
    })
  },
  ChooseImage() {
    wx.chooseImage({
      count: 1, //默认9
      sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album'], //从相册选择
      success: (res) => {
        if (this.data.imgList.length != 0) {
          this.setData({
            imgList: this.data.imgList.concat(res.tempFilePaths)
          })
        } else {
          this.setData({
            imgList: res.tempFilePaths
          })
        }
      }
    });
  },
  ViewImage(e) {
    wx.previewImage({
      urls: this.data.imgList,
      current: e.currentTarget.dataset.url
    });
  },
  DelImg(e) {
    wx.showModal({
      title: '提示',
      content: '确定要删除这段回忆吗？',
      cancelText: '再看看',
      confirmText: '再见',
      success: res => {
        if (res.confirm) {
          this.data.imgList.splice(e.currentTarget.dataset.index, 1);
          this.setData({
            imgList: this.data.imgList
          })
        }
      }
    })
  },
  textareaAInput(e) {
    this.setData({
      textareaAValue: e.detail.value
    })
  },
})