// pages/home/home.js
Page({
    data: {
        curDay: 12,
        curWeek: '星期一',
        offset: 0,
        calendars: [],
        weeks: ['日', '一', '二', '三', '四', '五', '六'],
        touchItem: 0,
        curItem: 12
    },
    onLoad: function (options) {
        this.initCalendar();
    },
    initCalendar: function () {
        var self = this;
        wx.request({
            url: 'http://122.114.191.222:7777/calendar/info',
            method: 'POST',
            header: {'content-type': 'application/json'},
            success(res) {
                if (res.data.code === '1') {
                    console.log(res.data);
                    self.setData({
                        // curInfo: res.data.obj.curInfo,
                        offset: res.data.obj.beginWeek % 7,
                        calendars: (res.data.obj.days || [])
                    })
                }
            }
        })
    },
    touchStart: function (event) {
        if (this.data.curItem === event.currentTarget.dataset.key) {
            this.setData({touchItem: 0});
        } else {
            this.setData({touchItem: event.currentTarget.dataset.key});
        }
    },
    touchEnd: function (event) {
        this.setData({curDay: event.currentTarget.dataset.key});
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