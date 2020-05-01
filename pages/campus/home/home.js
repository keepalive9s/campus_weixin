const colorMap = ['cyan', 'blue', 'purple', 'mauve', 'pink', 'brown', 'red', 'orange', 'olive', 'green', ]
Component({
  options: {
    addGlobalClass: true,
  },
  data: {
    groups: [{
        id: 1,
        title: '失物招领',
        name: 'Lost and found',
        color: 'cyan',
        icon: 'newsfill'
      },
      {
        id: 2,
        title: '二手市场',
        name: 'Second hand',
        color: 'blue',
        icon: 'newsfill'
      },
      {
        id: 3,
        title: '兼职',
        name: 'Part-time job',
        color: 'purple',
        icon: 'newsfill'
      },
      {
        id: 4,
        title: '代课',
        name: 'Class',
        color: 'mauve',
        icon: 'newsfill'
      },
      {
        id: 5,
        title: '考研',
        name: 'Post graduate',
        color: 'olive',
        icon: 'newsfill'
      }
    ]
  }
})