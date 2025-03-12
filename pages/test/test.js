// 重点修改部分
Page({
  data: {
    testId: null, // 接收的参数
    currentQuestion: {},
    questions: []
  },

  onLoad(options) {
    // 确保获取到testId
    console.log('收到的testId:', options.id);
    
    this.setData({ 
      testId: options.id,
      questions: this.getTestData(options.id) // 根据id获取题库
    });
    
    this.loadQuestion(0);
  },

  // 根据testId获取不同题库
  getTestData(id) {
    const allTests = {
      1: require('../../utils/data1.js').questions, // 图1题库
      2: require('../../utils/data2.js').questions, // 图2题库
      3: require('../../utils/data3.js').questions  // 图3题库
    };
    return allTests[id] || [];
  },

  // 加载题目
  loadQuestion(index) {
    if(index < this.data.questions.length) {
      this.setData({
        currentQuestion: this.data.questions[index]
      });
    } else {
      this.calculateResult();
    }
  }
})