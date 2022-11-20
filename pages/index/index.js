// index.js
// 获取应用实例
const app = getApp()

Page({
    data: {
        showPopup: false,
        statusBarHeight: 0,
        navBarHeight: 0,
        UnreadCount: 11,
        funList1: [{
                id: 1,
                name: "功能1",
                pic: '../../static/img/email.png'
            },
            {
                id: 2,
                name: "功能2",
                pic: '../../static/img/email.png'
            },
            {
                id: 3,
                name: "功能3",
                pic: '../../static/img/email.png'
            },
            {
                id: 4,
                name: "功能4",
                pic: '../../static/img/email.png'
            },
            {
                id: 5,
                name: "功能5",
                pic: '../../static/img/email.png'
            },
        ],
        selected: 0,
        funList2: [{
                id: 1,
                name: "功能A",
                pic: '../../static/img/email.png'
            },
            {
                id: 2,
                name: "功能B",
                pic: '../../static/img/email.png'
            },
            {
                id: 3,
                name: "功能C",
                pic: '../../static/img/email.png'
            },
            {
                id: 4,
                name: "功能D",
                pic: '../../static/img/email.png'
            },
            {
                id: 6,
                name: "功能E",
                pic: '../../static/img/email.png'
            },
            {
                id: 7,
                name: "功能F",
                pic: '../../static/img/email.png'
            },
            {
                id: 8,
                name: "功能G",
                pic: '../../static/img/email.png'
            },
            {
                id: 9,
                name: "功能H",
                pic: '../../static/img/email.png'
            },
            {
                id: 10,
                name: "功能I",
                pic: '../../static/img/email.png'
            },
            {
                id: 11,
                name: "功能J",
                pic: '../../static/img/email.png'
            },
            {
                id: 12,
                name: "",
                pic: ''
            },
            {
                id: 13,
                name: "",
                pic: ''
            },
        ],
    },
    change(event) {
        let id = Number(event.currentTarget.dataset.index)
        if (this.data.selected === id) return
        this.setData({
            selected: id
        })
    },
    handleClosePopup() {
        this.setData({
            showPopup: false
        })
    },
    handleClickFunc(event) {
        let name = event.currentTarget.dataset.name
        console.log('handleClickFunc => ', name)
        if(name === '功能B') {
            this.setData({
                showPopup: true
            })
        }
    },
    onReady() {
        let systemInfo = wx.getSystemInfoSync();
        let rect = wx.getMenuButtonBoundingClientRect ? wx.getMenuButtonBoundingClientRect() : null; //胶囊按钮位置信息
        wx.getMenuButtonBoundingClientRect();
        let navBarHeight = (function () { //导航栏高度
            let gap = rect.top - systemInfo.statusBarHeight; //动态计算每台手机状态栏到胶囊按钮间距
            return 2 * gap + rect.height;
        })();
        this.setData({
            statusBarHeight: systemInfo.statusBarHeight,
            navBarHeight,
        })
    }
})