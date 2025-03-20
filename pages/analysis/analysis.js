// pages/analysis/analysis.js
const mbtiData = require('../../utils/mbti-data');

Page({
  data: {
    types: mbtiData.types, // 使用外部数据源
    colorPresets: [         // 默认颜色配置
      ["#8A2BE2", "#FFF200"],
      ["#2A5934", "#1769FF"]
    ],
    loading: true           // 加载状态
  },

  // 处理人格类型点击事件
  handleTypeTap(e) {
      // 1. 安全获取类型参数
  const rawType = e.currentTarget.dataset.type;
  const type = (rawType || '').toString().trim().toUpperCase();
  
  // 2. 防御性日志
  console.log('[DEBUG] 原始类型:', rawType, '处理后:', type);
  
  // 3. 拦截无效参数
  if (!type || type.length !== 4) { // MBTI类型必须是4字母
    console.warn('无效参数:', e.currentTarget.dataset);
    wx.showToast({ title: '数据异常，请稍后重试', icon: 'none' });
    return;
  }

  // 4. 跳转逻辑（保持不变）
    wx.navigateTo({
      url: `/pages/detail/detail?type=${encodeURIComponent(type)}`,
      success: () => {
        console.log(`跳转至 ${type} 详情页成功`);
      },
      fail: (err) => {
        console.error('跳转失败详情:', { type, err });
        wx.showToast({
          title: `加载失败，请重试（${type}）`,
          icon: 'none',
          duration: 2000
        });
      }
    });
  },

  // 页面加载时初始化
  onLoad() {
    console.log('[DEBUG] 加载的人格数据:', this.data.types);
    // 初始化背景颜色
    let savedColors = wx.getStorageSync('bgColors');
    if (!Array.isArray(savedColors) || savedColors.length !== 2) {
      savedColors = this.data.colorPresets[0];
    }
    this.updateBackground(savedColors);
    
    // 关闭加载状态
    this.setData({ loading: false });
  },

  // 更新背景颜色（假设这是你已有的方法）
  updateBackground(colors) {
    // 你的原有逻辑...
  }
});