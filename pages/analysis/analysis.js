// pages/analysis/analysis.js
Page({
  data: {
    types: [
      {
        title: "分析型人格",
        colorCode: "#8A2BE2",
        list: [
          { 
            name: "INTJ", 
            image: "/images/analysis/A1.png",
            desc: "战略家型人格..." 
          },
          { 
            name: "ENTJ", 
            image: "/images/analysis/A2.png", // 绝对路径
            desc: "战略家型人格..." 
          },
          { 
            name: "ENTP", 
            image: "/images/analysis/A3.png", // 绝对路径
            desc: "战略家型人格..." 
          },
          { 
            name: "INTP", 
            image: "/images/analysis/A4.png", // 绝对路径
            desc: "战略家型人格..." 
          },
          // 其他类型...
        ]
      },
      {
        title: "分析型人格",
        colorCode: "#FFF200", // 小黄
        list: [
          { 
            name: "ISFP", 
            image: "/images/analysis/B1.png", // 绝对路径
            desc: "战略家型人格..." 
          },
          { 
            name: "ESFP", 
            image: "/images/analysis/B2.png", // 绝对路径
            desc: "战略家型人格..." 
          },
          { 
            name: "ISTP", 
            image: "/images/analysis/B3.png", // 绝对路径
            desc: "战略家型人格..." 
          },
          { 
            name: "ESTP", 
            image: "/images/analysis/B4.png", // 绝对路径
            desc: "战略家型人格..." 
          },
        ]
      },
    
      {
        title: "分析型人格",
        colorCode: "#2A5934", // 小绿
        list: [
          { 
            name: "ISFP", 
            image: "/images/analysis/C1.png", // 绝对路径
            desc: "战略家型人格..." 
          },
          { 
            name: "ESFP", 
            image: "/images/analysis/C2.png", // 绝对路径
            desc: "战略家型人格..." 
          },
          { 
            name: "ISTP", 
            image: "/images/analysis/C3.png", // 绝对路径
            desc: "战略家型人格..." 
          },
          { 
            name: "ESTP", 
            image: "/images/analysis/C4.png", // 绝对路径
            desc: "战略家型人格..." 
          },
        ]
      },
      {
        title: "分析型人格",
        colorCode: "#1769FF", // 小蓝
        list: [
          { 
            name: "ISFP", 
            image: "/images/analysis/D1.png", // 绝对路径
            desc: "战略家型人格..." 
          },
          { 
            name: "ESFP", 
            image: "/images/analysis/D2.png", // 绝对路径
            desc: "战略家型人格..." 
          },
          { 
            name: "ISTP", 
            image: "/images/analysis/D3.png", // 绝对路径
            desc: "战略家型人格..." 
          },
          { 
            name: "ESTP", 
            image: "/images/analysis/D4.png", // 绝对路径
            desc: "战略家型人格..." 
          },
        ]
      },
      // 其他分组数据保持不变...
    ]
  },
  handleTypeTap(e) {
    const type = e.currentTarget.dataset.type;
    console.log('跳转类型参数:', type); // 调试日志
    
    wx.navigateTo({
      url: `/pages/detail/detail?type=${encodeURIComponent(type)}`, // 安全编码
      success: () => {
        console.log('跳转成功');
      },
      fail: (err) => {
        console.error('跳转失败:', err);
        wx.showToast({
          title: '页面加载失败',
          icon: 'none'
        });
      }
    });
  },
  onLoad() {
    let savedColors = wx.getStorageSync('bgColors');
    if (!savedColors || savedColors.length !== 2) {
      savedColors = this.data.colorPresets[0]; // 使用默认值
    }
    this.updateBackground(savedColors);
  }
});