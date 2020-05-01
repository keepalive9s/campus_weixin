const app = getApp();
Component({
  options: {
    addGlobalClass: true,
  },
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    list: [{
        title: '网球社',
        img: 'https://image.weilanwl.com/color2.0/plugin/sylb2244.jpg',
        url: '/indexes/indexes'
      },
      {
        title: '大学生艺术团',
        img: 'https://image.weilanwl.com/color2.0/plugin/wdh2236.jpg',
        url: '/animation/animation'
      },
      {
        title: '凤凰文学社',
        img: 'https://image.weilanwl.com/color2.0/plugin/qpct2148.jpg',
        url: '/drawer/drawer'
      },
      {
        title: '自行车协会',
        img: 'https://image.weilanwl.com/color2.0/plugin/qpczdh2307.jpg',
        url: '/verticalnav/verticalnav'
      }
    ]
  },
  methods: {
    toChild(e) {
      wx.navigateTo({
        url: '/pages/plugin' + e.currentTarget.dataset.url
      })
    },
  }
});