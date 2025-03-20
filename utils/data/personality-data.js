// utils/data/personality-data.js   # 人格数据
const colors = require('./color-config.js')

module.exports = {

  "INTJ": {
    banner: "/images/detail-banners/INTJ-banner.png",
    features: [
      {
        text: "讨厌别人打乱计划",
        color: "#702963",  // 独立颜色
        size: 40,          // 独立字号
        fontFamily: "PingFang SC", // 新增字体名称
        fontWeight: "bold",        // 新增字体粗细
        fontStyle: "normal",       // 新增字体样式
        position: { x: "27%",y: "12%" }     // 独立坐标 (相对于A3容器) // 水平位置百分比 // 垂直位置百分比
      },
      {
        text: "自卑又自负",
        color: "#9b59b6",
        size: 30,
        fontFamily: "PingFang SC", // 新增字体名称
        fontWeight: "bold",        // 新增字体粗细
        fontStyle: "normal",       // 新增字体样式
        position: { x: "67%", y: "12%" }
      },
      {
        text: "寡王",
        color: "#702963",
        size: 40,
        fontFamily: "PingFang SC", // 新增字体名称
        fontWeight: "bold",        // 新增字体粗细
        fontStyle: "italic",       // 新增字体样式
        position: { x: "90%", y: "12%" }
      },
      {
        text: "讨厌被打扰被麻烦",
        color: "#9b59b6",
        size: 30,
        fontFamily: "PingFang SC", // 新增字体名称
        fontWeight: "bold",        // 新增字体粗细
        fontStyle: "normal",       // 新增字体样式
        position: { x: "18%", y: "35%" }
      },
      {
        text: "喜欢独处",
        color: "#702963",
        size: 40,
        fontFamily: "PingFang SC", // 新增字体名称
        fontWeight: "bold",        // 新增字体粗细
        fontStyle: "normal",       // 新增字体样式
        position: { x: "54%", y: "34%" }
      },
      {
        text: "完美主义",
        color: "#9b59b6",
        size: 30,
        fontFamily: "PingFang SC", // 新增字体名称
        fontWeight: "bold",        // 新增字体粗细
        fontStyle: "normal",       // 新增字体样式
        position: { x: "85%", y: "35%" }
      },
      {
        text: "理性疯批",
        color: "#702963",
        size: 40,
        fontFamily: "PingFang SC", // 新增字体名称
        fontWeight: "bold",        // 新增字体粗细
        fontStyle: "normal",       // 新增字体样式
        position: { x: "12%", y: "53%" }
      },
      {
        text: "沉稳独立",
        color: "#9b59b6",
        size: 30,
        fontFamily: "PingFang SC", // 新增字体名称
        fontWeight: "bold",        // 新增字体粗细
        fontStyle: "normal",       // 新增字体样式
        position: { x: "40%", y: "53%" }
      },
      {
        text: "计划制定者",
        color: "#9b59b6",
        size: 30,
        fontFamily: "PingFang SC", // 新增字体名称
        fontWeight: "bold",        // 新增字体粗细
        fontStyle: "normal",       // 新增字体样式
        position: { x: "85%", y: "53%" }
      },
      {
        text: "内向深沉",
        color: "#9b59b6",
        size: 30,
        fontFamily: "PingFang SC", // 新增字体名称
        fontWeight: "bold",        // 新增字体粗细
        fontStyle: "normal",       // 新增字体样式
        position: { x: "61%", y: "53%" }
      },
      {
        text: "洞察人心",
        color: "#702963",
        size: 40,
        fontFamily: "PingFang SC", // 新增字体名称
        fontWeight: "bold",        // 新增字体粗细
        fontStyle: "normal",       // 新增字体样式
        position: { x: "80%", y: "70%" }
      },
      {
        text: "冷暴力玩家",
        color: "#9b59b6",
        size: 30,
        fontFamily: "PingFang SC", // 新增字体名称
        fontWeight: "bold",        // 新增字体粗细
        fontStyle: "normal",       // 新增字体样式
        position: { x: "13%", y: "70%" }
      },
      {
        text: "独当一面",
        color: "#702963",
        size: 40,
        fontFamily: "PingFang SC", // 新增字体名称
        fontWeight: "bold",        // 新增字体粗细
        fontStyle: "normal",       // 新增字体样式
        position: { x: "42%", y: "70%" }
      },
      {
        text: "压抑",
        color: "#702963",
        size: 40,
        fontFamily: "PingFang SC", // 新增字体名称
        fontWeight: "bold",        // 新增字体粗细
        fontStyle: "normal",       // 新增字体样式
        position: { x: "65%", y: "88%" }
      },
      {
        text: "慕强厌蠢",
        color: "#9b59b6",
        size: 30,
        fontFamily: "PingFang SC", // 新增字体名称
        fontWeight: "bold",        // 新增字体粗细
        fontStyle: "normal",       // 新增字体样式
        position: { x: "41%", y: "88%" }
      },
      {
        text: "社交面具",
        color: "#9b59b6",
        size: 30,
        fontFamily: "PingFang SC", // 新增字体名称
        fontWeight: "bold",        // 新增字体粗细
        fontStyle: "normal",       // 新增字体样式
        position: { x: "12%", y: "88%" }
      },
      {
        text: "禁欲系",
        color: "#9b59b6",
        size: 30,
        fontFamily: "PingFang SC", // 新增字体名称
        fontWeight: "bold",        // 新增字体粗细
        fontStyle: "normal",       // 新增字体样式
        position: { x: "88%", y: "88%" }
      },
      // 其他专属标签配置...
    ],
      // 富文本详情（A5
    details: {
      A3: "INTJ型人群通常具有...",
      A5: "INTJ型人群通常具有."

    }
  },
  "INTP": {
    banner: "/images/detail-banners/INTP-banner.png",
    features: [
      {
        text: "讨厌别人打乱计划",
        color: "#702963",  // 独立颜色
        size: 40,          // 独立字号
        fontFamily: "PingFang SC", // 新增字体名称
        fontWeight: "bold",        // 新增字体粗细
        fontStyle: "normal",       // 新增字体样式
        position: { x: "27%",y: "12%" }     // 独立坐标 (相对于A3容器) // 水平位置百分比 // 垂直位置百分比
      },
      {
        text: "自卑又自负",
        color: "#9b59b6",
        size: 30,
        fontFamily: "PingFang SC", // 新增字体名称
        fontWeight: "bold",        // 新增字体粗细
        fontStyle: "normal",       // 新增字体样式
        position: { x: "67%", y: "12%" }
      },
      {
        text: "寡王",
        color: "#702963",
        size: 40,
        fontFamily: "PingFang SC", // 新增字体名称
        fontWeight: "bold",        // 新增字体粗细
        fontStyle: "italic",       // 新增字体样式
        position: { x: "90%", y: "12%" }
      },
      {
        text: "讨厌被打扰被麻烦",
        color: "#9b59b6",
        size: 30,
        fontFamily: "PingFang SC", // 新增字体名称
        fontWeight: "bold",        // 新增字体粗细
        fontStyle: "normal",       // 新增字体样式
        position: { x: "18%", y: "35%" }
      },
      {
        text: "喜欢独处",
        color: "#702963",
        size: 40,
        fontFamily: "PingFang SC", // 新增字体名称
        fontWeight: "bold",        // 新增字体粗细
        fontStyle: "normal",       // 新增字体样式
        position: { x: "54%", y: "34%" }
      },
      {
        text: "完美主义",
        color: "#9b59b6",
        size: 30,
        fontFamily: "PingFang SC", // 新增字体名称
        fontWeight: "bold",        // 新增字体粗细
        fontStyle: "normal",       // 新增字体样式
        position: { x: "85%", y: "35%" }
      },
      {
        text: "理性疯批",
        color: "#702963",
        size: 40,
        fontFamily: "PingFang SC", // 新增字体名称
        fontWeight: "bold",        // 新增字体粗细
        fontStyle: "normal",       // 新增字体样式
        position: { x: "12%", y: "53%" }
      },
      {
        text: "沉稳独立",
        color: "#9b59b6",
        size: 30,
        fontFamily: "PingFang SC", // 新增字体名称
        fontWeight: "bold",        // 新增字体粗细
        fontStyle: "normal",       // 新增字体样式
        position: { x: "40%", y: "53%" }
      },
      {
        text: "计划制定者",
        color: "#9b59b6",
        size: 30,
        fontFamily: "PingFang SC", // 新增字体名称
        fontWeight: "bold",        // 新增字体粗细
        fontStyle: "normal",       // 新增字体样式
        position: { x: "85%", y: "53%" }
      },
      {
        text: "内向深沉",
        color: "#9b59b6",
        size: 30,
        fontFamily: "PingFang SC", // 新增字体名称
        fontWeight: "bold",        // 新增字体粗细
        fontStyle: "normal",       // 新增字体样式
        position: { x: "61%", y: "53%" }
      },
      {
        text: "洞察人心",
        color: "#702963",
        size: 40,
        fontFamily: "PingFang SC", // 新增字体名称
        fontWeight: "bold",        // 新增字体粗细
        fontStyle: "normal",       // 新增字体样式
        position: { x: "80%", y: "70%" }
      },
      {
        text: "冷暴力玩家",
        color: "#9b59b6",
        size: 30,
        fontFamily: "PingFang SC", // 新增字体名称
        fontWeight: "bold",        // 新增字体粗细
        fontStyle: "normal",       // 新增字体样式
        position: { x: "13%", y: "70%" }
      },
      {
        text: "独当一面",
        color: "#702963",
        size: 40,
        fontFamily: "PingFang SC", // 新增字体名称
        fontWeight: "bold",        // 新增字体粗细
        fontStyle: "normal",       // 新增字体样式
        position: { x: "42%", y: "70%" }
      },
      {
        text: "压抑",
        color: "#702963",
        size: 40,
        fontFamily: "PingFang SC", // 新增字体名称
        fontWeight: "bold",        // 新增字体粗细
        fontStyle: "normal",       // 新增字体样式
        position: { x: "65%", y: "88%" }
      },
      {
        text: "慕强厌蠢",
        color: "#9b59b6",
        size: 30,
        fontFamily: "PingFang SC", // 新增字体名称
        fontWeight: "bold",        // 新增字体粗细
        fontStyle: "normal",       // 新增字体样式
        position: { x: "41%", y: "88%" }
      },
      {
        text: "社交面具",
        color: "#9b59b6",
        size: 30,
        fontFamily: "PingFang SC", // 新增字体名称
        fontWeight: "bold",        // 新增字体粗细
        fontStyle: "normal",       // 新增字体样式
        position: { x: "12%", y: "88%" }
      },
      {
        text: "禁欲系",
        color: "#9b59b6",
        size: 30,
        fontFamily: "PingFang SC", // 新增字体名称
        fontWeight: "bold",        // 新增字体粗细
        fontStyle: "normal",       // 新增字体样式
        position: { x: "88%", y: "88%" }
      },
      // 其他INTP专属标签...
    ],
    // 其他配置...
  },


  // 其他人格类型配置...


}