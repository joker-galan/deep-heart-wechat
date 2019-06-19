// pages/home/home.js
Page({
    data: {
        dayInfo: '',
        offset: 0,
        calendars: [],
        weeks: ['日', '一', '二', '三', '四', '五', '六'],
        touchItem: 0,
        curDay: ''
    },
    onLoad: function (options) {
        this.initCalendar();
    },
    initCalendar: function () {
        var self = this;
        wx.request({
            url: 'http://192.168.123.68:7777/calendar/info',
            method: 'POST',
            header: {'content-type': 'application/json'},
            success(res) {
                if (res.data.code === '1') {
                    self.setData({
                        dayInfo: res.data.obj.dayInfo,
                        curDay: res.data.obj.dayInfo.gre,
                        offset: res.data.obj.beginWeek % 7,
                        calendars: (res.data.obj.days || [])
                    })
                }
            }
        })
    },
    touchStart: function (event) {
        if (this.data.curDay === event.currentTarget.dataset.key) {
            this.setData({touchItem: 0});
        } else {
            this.setData({touchItem: Number(event.currentTarget.dataset.key.slice(8))});
        }
    },
    touchEnd: function (event) {

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