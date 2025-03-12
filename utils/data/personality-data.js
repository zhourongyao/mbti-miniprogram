// utils/data/personality-data.js   # 人格数据
const colors = require('./color-config.js')

module.exports = {
  INTJ: {
    image: '/images/detail-banners/intj.png',  // A1区图片
    features: [ // A3区数据
      {text: "一切都在计划之中", color: "#2c3e50", size: 32},
      {text: "自信温和", color: "#3498db", size: 28},
      {text: "高冷禁欲", color: "#3498db", size: 28},
      {text: "多层面具", color: "#3498db", size: 28},
      {text: "面无表情", color: "#3498db", size: 28},
      {text: "极度独立", color: "#3498db", size: 28},
      {text: "祛魅达人", color: "#3498db", size: 28},
      {text: "总是有办法", color: "#3498db", size: 28},
      {text: "一语道破", color: "#3498db", size: 28},
      {text: "人性的根劣性少", color: "#3498db", size: 28},
      {text: "寡王", color: "#3498db", size: 28}
    ],
    analysis: { // A5区数据
      title: "INTJ(建筑师)深度解析",
      content: [
              // ▼▼▼ 支持多种内容类型 ▼▼▼
        { 
          type: 'title', 
          text: '🎯 核心优势',
          style: 'font-size:38rpx;color:#2c3e50;margin:40rpx 0 20rpx' 
        },
        {
          type: 'paragraph',
          text: 'INTJ是典型的战略家，具备以下突出特质：🌟',
          style: 'font-size:30rpx;line-height:1.8;color:#4a5568'
        },
        {
          type: 'list',
          items: [
            '💡 超强的逻辑分析能力',
            '🚀 卓越的长期规划能力',
            '🎯 精准的目标导向思维'
          ],
          style: 'margin-left:40rpx;color:#4a5568',
          bullet: '✨' // 自定义项目符号
        },
        {
          type: 'image',
          src: '/images/analysis/intj-strategy.png',
          style: 'width:100%;margin:30rpx 0;border-radius:12rpx'
        },
        {
          type: 'warning',
          text: '⚠️ 注意：INTJ类型可能过于追求完美，需要适当调整期望值'
        }
      ]
    }
  },
  // 补充其他类型...
  INTP: {
    image: '/images/types/intp.png',  // A1区图片
    features: [ // A3区数据
      {text: "智商超群", color: "#2c3e50", size: 32},
      {text: "关我P事", color: "#3498db", size: 28},
      {text: "好奇心强", color: "#2c3e50", size: 32},
      {text: "高冷=懒得理", color: "#2c3e50", size: 32},
      {text: "虚无主义", color: "#2c3e50", size: 32},
      {text: "三分钟热度", color: "#2c3e50", size: 32},
      {text: "洞察力MAX", color: "#2c3e50", size: 32},
      {text: "厌蠢", color: "#3498db", size: 28},
      {text: "智性恋", color: "#3498db", size: 28},
      {text: "天真像个小孩儿", color: "#3498db", size: 28},
      {text: "自恋但理性靠谱", color: "#3498db", size: 28}
    ],
    analysis: { // A5区数据
      title: "INTP(逻辑学家)深度解析",
      content: [
        {type: 'text', text: "INTP(逻辑学家)是一个深思熟虑,好奇心强,富有创造力的人格类型.他们通常能够通过独立思考和逻辑分析来解决问题,并对于理解世界的运作方式有着浓厚的兴趣.尽管他们在社交方面可能会面临游戏额挑战,但他们在追求知识和理解方面表现出色,常常能为解决复杂问题提供独特的视角和解决方案."},
        {type: 'image', src: '/images/analysis/intp-1.png'},
        {type: 'text', text: "典型特征包括..."}  // 可多添加说明
      ]
    }
  },
  // 补充其他类型...
  ENTJ: {
    image: '/images/types/entj.png',  // A1区图片
    features: [ // A3区数据
      {text: "战略思维", color: "#2c3e50", size: 32},
      {text: "理性分析", color: "#3498db", size: 28}
    ],
    analysis: { // A5区数据
      title: "INTJ深度解析",
      content: [
        {type: 'text', text: "INTJ是典型的战略家..."},
        {type: 'image', src: '/images/analysis/entj-1.png'}
      ]
    }
  },
  // 补充其他类型...
  ENTP: {
    image: '/images/types/intj.png',  // A1区图片
    features: [ // A3区数据
      {text: "战略思维", color: "#2c3e50", size: 32},
      {text: "理性分析", color: "#3498db", size: 28}
    ],
    analysis: { // A5区数据
      title: "INTJ深度解析",
      content: [
        {type: 'text', text: "INTJ是典型的战略家..."},
        {type: 'image', src: '/images/analysis/intj-1.png'}
      ]
    }
  },
  // 补充其他类型...
  INFJ: {
    image: '/images/types/intj.png',  // A1区图片
    features: [ // A3区数据
      {text: "战略思维", color: "#2c3e50", size: 32},
      {text: "理性分析", color: "#3498db", size: 28}
    ],
    analysis: { // A5区数据
      title: "INTJ深度解析",
      content: [
        {type: 'text', text: "INTJ是典型的战略家..."},
        {type: 'image', src: '/images/analysis/intj-1.png'}
      ]
    }
  },
  // 补充其他类型...
  ENFJ: {
    image: '/images/types/intj.png',  // A1区图片
    features: [ // A3区数据
      {text: "战略思维", color: "#2c3e50", size: 32},
      {text: "理性分析", color: "#3498db", size: 28}
    ],
    analysis: { // A5区数据
      title: "INTJ深度解析",
      content: [
        {type: 'text', text: "INTJ是典型的战略家..."},
        {type: 'image', src: '/images/analysis/intj-1.png'}
      ]
    }
  },
  // 补充其他类型...
  INFP: {
    image: '/images/types/intj.png',  // A1区图片
    features: [ // A3区数据
      {text: "战略思维", color: "#2c3e50", size: 32},
      {text: "理性分析", color: "#3498db", size: 28}
    ],
    analysis: { // A5区数据
      title: "INTJ深度解析",
      content: [
        {type: 'text', text: "INTJ是典型的战略家..."},
        {type: 'image', src: '/images/analysis/intj-1.png'}
      ]
    }
  },
  // 补充其他类型...
  ENFP: {
    image: '/images/types/intj.png',  // A1区图片
    features: [ // A3区数据
      {text: "战略思维", color: "#2c3e50", size: 32},
      {text: "理性分析", color: "#3498db", size: 28}
    ],
    analysis: { // A5区数据
      title: "INTJ深度解析",
      content: [
        {type: 'text', text: "INTJ是典型的战略家..."},
        {type: 'image', src: '/images/analysis/intj-1.png'}
      ]
    }
  },
  // 补充其他类型...
  ISTP: {
    image: '/images/types/intj.png',  // A1区图片
    features: [ // A3区数据
      {text: "战略思维", color: "#2c3e50", size: 32},
      {text: "理性分析", color: "#3498db", size: 28}
    ],
    analysis: { // A5区数据
      title: "INTJ深度解析",
      content: [
        {type: 'text', text: "INTJ是典型的战略家..."},
        {type: 'image', src: '/images/analysis/intj-1.png'}
      ]
    }
  },
  // 补充其他类型...
  ISFP: {
    image: '/images/types/intj.png',  // A1区图片
    features: [ // A3区数据
      {text: "战略思维", color: "#2c3e50", size: 32},
      {text: "理性分析", color: "#3498db", size: 28}
    ],
    analysis: { // A5区数据
      title: "INTJ深度解析",
      content: [
        {type: 'text', text: "INTJ是典型的战略家..."},
        {type: 'image', src: '/images/analysis/intj-1.png'}
      ]
    }
  },
  // 补充其他类型...
  ESTP: {
    image: '/images/types/intj.png',  // A1区图片
    features: [ // A3区数据
      {text: "战略思维", color: "#2c3e50", size: 32},
      {text: "理性分析", color: "#3498db", size: 28}
    ],
    analysis: { // A5区数据
      title: "INTJ深度解析",
      content: [
        {type: 'text', text: "INTJ是典型的战略家..."},
        {type: 'image', src: '/images/analysis/intj-1.png'}
      ]
    }
  },
  // 补充其他类型...
  ESFP: {
    image: '/images/types/intj.png',  // A1区图片
    features: [ // A3区数据
      {text: "战略思维", color: "#2c3e50", size: 32},
      {text: "理性分析", color: "#3498db", size: 28}
    ],
    analysis: { // A5区数据
      title: "INTJ深度解析",
      content: [
        {type: 'text', text: "INTJ是典型的战略家..."},
        {type: 'image', src: '/images/analysis/intj-1.png'}
      ]
    }
  },
  // 补充其他类型...
  ISTJ: {
    image: '/images/types/intj.png',  // A1区图片
    features: [ // A3区数据
      {text: "战略思维", color: "#2c3e50", size: 32},
      {text: "理性分析", color: "#3498db", size: 28}
    ],
    analysis: { // A5区数据
      title: "INTJ深度解析",
      content: [
        {type: 'text', text: "INTJ是典型的战略家..."},
        {type: 'image', src: '/images/analysis/intj-1.png'}
      ]
    }
  },
  // 补充其他类型...
  ISFJ: {
    image: '/images/types/intj.png',  // A1区图片
    features: [ // A3区数据
      {text: "战略思维", color: "#2c3e50", size: 32},
      {text: "理性分析", color: "#3498db", size: 28}
    ],
    analysis: { // A5区数据
      title: "INTJ深度解析",
      content: [
        {type: 'text', text: "INTJ是典型的战略家..."},
        {type: 'image', src: '/images/analysis/intj-1.png'}
      ]
    }
  },
  // 补充其他类型...
  ESTJ: {
    image: '/images/types/intj.png',  // A1区图片
    features: [ // A3区数据
      {text: "战略思维", color: "#2c3e50", size: 32},
      {text: "理性分析", color: "#3498db", size: 28}
    ],
    analysis: { // A5区数据
      title: "INTJ深度解析",
      content: [
        {type: 'text', text: "INTJ是典型的战略家..."},
        {type: 'image', src: '/images/analysis/intj-1.png'}
      ]
    }
  },
  // 补充其他类型...
  ESFJ: {
    image: '/images/types/intj.png',  // A1区图片
    features: [ // A3区数据
      {text: "战略思维", color: "#2c3e50", size: 32},
      {text: "理性分析", color: "#3498db", size: 28}
    ],
    analysis: { // A5区数据
      title: "INTJ深度解析",
      content: [
        {type: 'text', text: "INTJ是典型的战略家..."},
        {type: 'image', src: '/images/analysis/intj-1.png'}
      ]
    }
  },
  // 补充其他类型...

}