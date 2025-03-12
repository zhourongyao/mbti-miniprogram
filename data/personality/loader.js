// data/personality/loader.js
const loadData = (type) => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: `/data/personality/${type}.json`,
      success: res => resolve(res.data),
      fail: err => reject(err)
    })
  })
}

module.exports = { getData: loadData }