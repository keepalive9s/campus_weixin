const app = getApp();
Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    title: '',
    id: '',
    posts: [{
      id: 1,
      pic: "http://123.57.78.6:9000/ioibhbgh/a2090497-bc24-4778-8a8a-9ad8676d5c7e.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=e07e56d6258c%2F20200501%2F%2Fs3%2Faws4_request&X-Amz-Date=20200501T124150Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=e6008567cb98713fe03216d3b6a2e62c494d99da85bacfe2e73b09a6d050a5fb",
      content: "测试标题1",
      avatar: "http://123.57.78.6:9000/ioibhbgh/IMG_00652.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=e07e56d6258c%2F20200501%2F%2Fs3%2Faws4_request&X-Amz-Date=20200501T112414Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=8b4cf09579c38075ca36a9fb9bb35a785d50cb12f8f3ae974df92f8ddd290dda",
      username: "测试用户1",
      time: "5月1日",
      view: 15,
      like: 20,
      comment: 30
    },
    {
      id: 2,
      pic: "http://123.57.78.6:9000/ioibhbgh/78378301-0db1-42d3-a21a-829a635ae02e.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=e07e56d6258c%2F20200501%2F%2Fs3%2Faws4_request&X-Amz-Date=20200501T125205Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=588a02e190cae122ce47b8dfe6fde45744eb5350de943e0936275d7228803497",
      content: "测试标题2",
      avatar: "http://123.57.78.6:9000/ioibhbgh/IMG_00652.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=e07e56d6258c%2F20200501%2F%2Fs3%2Faws4_request&X-Amz-Date=20200501T112414Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=8b4cf09579c38075ca36a9fb9bb35a785d50cb12f8f3ae974df92f8ddd290dda",
      username: "测试用户2",
      time: "5月1日",
      view: 40,
      like: 20,
      comment: 30
    },
    {
      id: 3,
      pic: "http://123.57.78.6:9000/ioibhbgh/20190215081642_3338.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=e07e56d6258c%2F20200501%2F%2Fs3%2Faws4_request&X-Amz-Date=20200501T131510Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=5acd2d1aafd695b5418059addd59d4ded067ff878061b3a2be2555fa482c7cd0",
      content: "测试标题2",
      avatar: "http://123.57.78.6:9000/ioibhbgh/IMG_00652.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=e07e56d6258c%2F20200501%2F%2Fs3%2Faws4_request&X-Amz-Date=20200501T112414Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=8b4cf09579c38075ca36a9fb9bb35a785d50cb12f8f3ae974df92f8ddd290dda",
      username: "考研用户1",
      time: "5月1日",
      view: 40,
      like: 20,
      comment: 30
    }]
  },
  onLoad(options) {
    this.setData({
      id: options.id,
      title: options.title
    })
  },
});