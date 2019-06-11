// pages/home/home.js
Page({
    data: {
        calendars: [],
        weeks: ['日', '一', '二', '三', '四', '五', '六'],
    },
    onLoad: function (options) {
        var self = this;
        wx.request({
            url: 'http://127.0.0.1:7777/calendar/info', //仅为示例，并非真实的接口地址,
            method: 'POST',
            header: {
                'content-type': 'application/json' // 默认值
            },
            success(res) {
                if (res.data.code === '1') {
                    self.setData({
                        calendars: (res.data.obj.days || [])
                    })
                }
            }
        })
    },
    onReady: function () {

    },
    onShow: function () {

    },
    onHide: function () {

    },
    onUnload: function () {

    },
    onPullDownRefresh: function () {

    },
    onReachBottom: function () {

    },
    onShareAppMessage: function () {

    }
});