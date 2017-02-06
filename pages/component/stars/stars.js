var app = getApp()

var starCount = 0;

Page({
  data: {
    stars: [0, 1, 2, 3, 4],
    emptysrc: '../../imgs/empty.png',
    halfsrc: '../../imgs/half.png',
    fullsrc: '../../imgs/full.png',
    key: 0,

    // 方法二
    starsselected: [false, false, false, false, false],

  },
  onLoad: function () {

  },

  //点击左半边
  tapLeft: function (e) {
    var key = e.currentTarget.dataset.key
    if (this.data.key == 0.5 && e.currentTarget.dataset.key == 0.5) {
      key = 0;
    }
    this.setData({
      key: key
    })
    console.log(key)
  },

  //点击右半边
  tapRight: function (e) {
    var key = e.currentTarget.dataset.key
    this.setData({
      key: key
    })
    console.log(key)
  },

  // 只能选中整颗星星
  bindStarTap: function (e) {
    var index = e.currentTarget.dataset.index;
    starCount = index + 1;
    var starsselected = this.data.starsselected.map(function (value, i) {
      return i <= index;
    });
    this.setData({
      starsselected: starsselected
    })
    console.log('星星个数：' + starCount);
  }

})
