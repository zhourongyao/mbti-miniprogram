// pages/detail/detail.js   # 更新后的逻辑3.12/20.16
const personalityData = require('../../utils/data/personality-data')
const colorConfig = require('../../utils/data/color-config')

Page({
  data: {
    typeColor: '#4A90E2',  // 默认颜色
    personalityData: {},          // 类型数据
    analysisNodes: [],      // A5区数据
    features: [], // 新增特征数据字段
    loading: true // 新增加载状态
  },

  onLoad(options) {
    const type = options.type || 'INTJ'
    this.loadpersonalityData(type)
  },

  // 修改loadpersonalityData方法
  loadpersonalityData(type) {
          
    const color = colorConfig[type] || '#4A90E2'  //引用color-config.js独立颜色配置文件如果不存在 → 使用默认的蓝色

          // ======== 关键修改开始 ========
    const data = personalityData[type] || {
      image: '/images/default-banner.jpg',
      features: ['数据加载中...'],
      analysis: { content: [] }
    }
      // ======== 关键修改结束 ========

        // 处理特征数据
    const features = data.features || []
       // 处理富文本节点
    const nodes = data.analysis?.content?.map(item => {
            // ...保持原有处理逻辑不变...
      switch(item.type) {
        case 'title':
          return {
            name: 'view',
            attrs: { style: item.style + ';font-weight:bold' },
            children: [{ type: 'text', text: item.text }]
          }
        case 'paragraph':
          return {
            name: 'view',
            attrs: { style: item.style },
            children: [{ type: 'text', text: item.text }]
          }
        case 'list':
          return {
            name: 'view',
            attrs: { style: item.style },
            children: item.items.map(text => ({
              name: 'view',
              children: [
                { 
                  name: 'text', 
                  attrs: { style: 'margin-right:10rpx' },
                  text: item.bullet || '•'
                },
                { type: 'text', text: text }
              ]
            }))
          }
        case 'image':
          return {
            name: 'img',
            attrs: { 
              src: item.src,
              style: item.style + ';display:block'
            }
          }
        case 'warning':
          return {
            name: 'view',
            attrs: { class: 'warning' },
            children: [
              {name:'text', text: '⚠️ ' },
              {
                name: 'text', 
                attrs: { class: 'highlight' },
                text: item.text 
              }
            ]
          }
        default:
          return { name: 'text', text: item.text }
      }
    })
    this.setData({
      typeColor: color,
      personalityData: data,
      features: features, // 新增特征数据绑定
      analysisNodes: nodes,
      loading: false
    })

  },
     // 新增默认数据方法
  getDefaultData() {
    return {
      image: '/images/default-banner.jpg',
      features: ['数据加载中...'],
      analysis: { content: [] }
    }
  }
})