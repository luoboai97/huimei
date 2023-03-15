// pages/center/center.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        bar_index: 0,
        proList: [{}, {}, {}, {}, {},{}]
    },
    setBatIndex(e) {
        console.log(e)
        this.bar_index = e.currentTarget.dataset.index
        this.setData({
            bar_index: e.currentTarget.dataset.index
        })
        this.getProList(this.bar_index)
    },
    getProList(index){
        var _this = this
        wx.request({
            url: 'http://192.168.1.233:5014/prduct/select', //仅为示例，并非真实的接口地址
            data: {
             type:index
            },
            method:"post",
            header: {
              'content-type': 'application/json' // 默认值
            },
            success (res){
                _this.setData({
                    proList: res.data.data
                })
                _this.proList = res.data.data
              console.log(res.data.data)
            }
          })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {
        this.getProList(0)
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    },
    changeName: function (e) {
        // sent data change to view
        console.log(324)
    }


})