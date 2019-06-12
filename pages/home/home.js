// pages/home/home.js
Page({
    data: {
        offset: 0,
        calendars: [],
        weeks: ['日', '一', '二', '三', '四', '五', '六'],
        touchItem: 'calendar-day-item',
        curItem: 12
    },
    onLoad: function (options) {
        var self = this;
        wx.request({
            url: 'http://122.114.191.222:7777/calendar/info', //仅为示例，并非真实的接口地址,
            method: 'POST',
            header: {
                'content-type': 'application/json' // 默认值
            },
            success(res) {
                if (res.data.code === '1') {
                    console.log(res.data);
                    self.setData({
                        offset: res.data.obj.beginWeek % 7,
                        calendars: (res.data.obj.days || [])
                    })
                }
            }
        })
    },
    touchStart: function (event) {
        this.setData({touchItem: event.currentTarget.dataset.key});
    },
    touchEnd: function () {
        this.setData({touchItem: 0});
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