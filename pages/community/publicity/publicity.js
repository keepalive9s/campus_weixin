Page({
  data: {
    cardCur: 0,
    swiperList: [{
      id: 0,
      type: 'image',
      url: 'http://123.57.78.6:9000/ioibhbgh/tooopen_sy_154918491850672.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=e07e56d6258c%2F20200507%2F%2Fs3%2Faws4_request&X-Amz-Date=20200507T175048Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=f7fb31a868c0b60271f7ca321a001e75a88384cbcdd6df986334aec830572c5b'
    }, {
      id: 1,
        type: 'image',
        url: 'http://123.57.78.6:9000/ioibhbgh/tooopen_sy_134826482642993.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=e07e56d6258c%2F20200507%2F%2Fs3%2Faws4_request&X-Amz-Date=20200507T175113Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=429882e0b5ab9d1692ae25ccb747bb9c15115870437b33ce5f9330029ca57f16',
    }, {
      id: 2,
      type: 'image',
      url: 'http://123.57.78.6:9000/ioibhbgh/tooopen_sy_15095795779119.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=e07e56d6258c%2F20200507%2F%2Fs3%2Faws4_request&X-Amz-Date=20200507T175124Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=67c16099f1d512fdc6d64ba336bcda96c00a3a0f7a0d1771019894573d28cc10'
    }, {
      id: 3,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg'
    }, {
      id: 4,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg'
    }, {
      id: 5,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg'
    }, {
      id: 6,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg'
    }],
  },
  onLoad() {
    this.towerSwiper('swiperList');
    // 初始化towerSwiper 传已有的数组名即可
  },
  DotStyle(e) {
    this.setData({
      DotStyle: e.detail.value
    })
  },
  // cardSwiper
  cardSwiper(e) {
    this.setData({
      cardCur: e.detail.current
    })
  },
  // towerSwiper
  // 初始化towerSwiper
  towerSwiper(name) {
    let list = this.data[name];
    for (let i = 0; i < list.length; i++) {
      list[i].zIndex = parseInt(list.length / 2) + 1 - Math.abs(i - parseInt(list.length / 2))
      list[i].mLeft = i - parseInt(list.length / 2)
    }
    this.setData({
      swiperList: list
    })
  },
  // towerSwiper触摸开始
  towerStart(e) {
    this.setData({
      towerStart: e.touches[0].pageX
    })
  },
  // towerSwiper计算方向
  towerMove(e) {
    this.setData({
      direction: e.touches[0].pageX - this.data.towerStart > 0 ? 'right' : 'left'
    })
  },
  // towerSwiper计算滚动
  towerEnd(e) {
    let direction = this.data.direction;
    let list = this.data.swiperList;
    if (direction == 'right') {
      let mLeft = list[0].mLeft;
      let zIndex = list[0].zIndex;
      for (let i = 1; i < list.length; i++) {
        list[i - 1].mLeft = list[i].mLeft
        list[i - 1].zIndex = list[i].zIndex
      }
      list[list.length - 1].mLeft = mLeft;
      list[list.length - 1].zIndex = zIndex;
      this.setData({
        swiperList: list
      })
    } else {
      let mLeft = list[list.length - 1].mLeft;
      let zIndex = list[list.length - 1].zIndex;
      for (let i = list.length - 1; i > 0; i--) {
        list[i].mLeft = list[i - 1].mLeft
        list[i].zIndex = list[i - 1].zIndex
      }
      list[0].mLeft = mLeft;
      list[0].zIndex = zIndex;
      this.setData({
        swiperList: list
      })
    }
  }
})