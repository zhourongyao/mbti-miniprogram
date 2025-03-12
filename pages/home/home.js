Page({
  data: {
    // A区数据
    banners: [
      '/images/banner1.jpg',
      '/images/banner2.jpg',
      '/images/banner3.jpg'
    ],

    // D区数据
    tests: [
      { id: 1, title: '图1测试', img: '/images/test1.png' },
      { id: 2, title: '图2测试', img: '/images/test2.png' },
      { id: 3, title: '图3测试', img: '/images/test3.png' }
    ],

    // E区数据
    docContent: [
      {
        name: 'div',
        attrs: { class: 'doc-content' },
        children: [{
          type: 'text',
          text: '一、MBTI测试是什么？性格界的“16宫格自拍滤镜”MBTI 的全称是 “迈尔斯 - 布里格斯类型指标”（Myers-Briggs Type Indicator），它诞生于 20 世纪 40 年代。令人意想不到的是，它的创造者是一对并非心理学专业出身的母女 —— 凯瑟琳・布里格斯和伊莎贝尔・迈尔斯。这两位女士原本的职业分别是作家和家庭主妇，却凭借着对荣格心理学理论的浓厚兴趣，成功研发出了一套性格分类体系，如今这套体系已经成为了职场、婚恋以及综艺节目中备受瞩目的 “热门工具”...'
        }]
      }
    ]
  },

  // C区按钮点击
  handleBtn1() {
    wx.navigateTo({ url: '/pages/activities/activities' })
  },
  handleBtn2() {
    wx.showModal({
      title: '测试说明',
      content: '本测试基于MBTI最新版理论编制，结果仅供参考."不过尔尔,无心自困"',
      showCancel: false
    })
  },

  // D区测试入口点击
  goTest(e) {
    const id = e.currentTarget.dataset.id
    wx.navigateTo({ url: `/pages/test/test?id=${id}` })
  }
})