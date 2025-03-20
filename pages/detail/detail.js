// pages/detail/detail.js
const app = getApp();

const personalityData = require('../../utils/data/personality-data');
const colorConfig = require('../../utils/data/color-config');


Page({
  data: {
    typeColor: '#4A90E2',
    typeData: {},
    analysisNodes: [],
    loading: true,
    article: {}
  },

  onLoad(options) {
    const type = decodeURIComponent(options.type);
    const data = personalityData[type] || {};


    this.setData({
      typeData: {
        features: data.features || [], // A3数据
        details: data.details || { A3: '', A5: '' }, // A3/A5文本
        banner: data.banner || '/images/default-banner.jpg',

      }
    });
  },
    // 切换标签（A3/A5）
    switchTab(e) {
      this.setData({ activeTab: e.currentTarget.dataset.tab });
    },


  loadData(type) {
    const color = colorConfig[type] || '#4A90E2';
    const data = personalityData[type] || {
      banner: '/images/default-banner.jpg',
      features: [],
      details: { A3: '数据加载中...', A5: '数据加载中...' }
    };

    // 处理特征标签数据
    const features = data.features || [];
    
    // 处理富文本内容（保持原有逻辑）
    const nodes = [];
    if (data.details && data.details.A3) {
      nodes.push({
        name: 'text',
        text: data.details.A3
      });
    }

    this.setData({
      typeColor: color,
      typeData: data,
      analysisNodes: nodes,
      loading: false
    });
  },
  // 修改标签位置示例方法
  updateTagPosition(e) {
    const index = e.currentTarget.dataset.index; // 当前标签索引
    const newX = "30%"; // 新X坐标 (根据实际需求计算)
    const newY = "50%"; // 新Y坐标

    this.setData({
      [`typeData.features[${index}].position`]: { x: newX, y: newY }
    });
}

});