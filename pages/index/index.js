Page({
  data: {
    array: ['China', 'Argentina', 'Colombia'],
    items: [
      {name: 'masculino', value: 'masculino', checked: true},
      {name: 'femenino', value: 'femenino'},
      {name: 'otro', value: 'otro'},
    ],
    country: [
      {name: 'China', value: 'china'},
      {name: 'Argentina', value: 'argentina'},
      {name: 'Colombia', value: 'colombia', checked: true},
    ],
    index: 0,
  },
  onChange(e) {
    my.alert({
      title: `You are selecting the framework ${e.detail.value}`,
    });
  },
  bindPickerChange(e) {
    console.log('picker sends selection change, carried value ', e.detail.value);
    this.setData({
      index: e.detail.value,
    });
  },
  radioChange: function(e) {
    console.log('you are selecting the framework', e.detail.value);
  },
  bindTextAreaBlur: function(e) {
    console.log(e.detail.value)
  },
  formSubmit: function (e) {
    console.log(e.detail.value);
    my.alert({
      title: JSON.stringify(e.detail.value)
    });
  },
  formReset: function (e) {
    console.log(e);
  },
  onLoad(query) {
    // 页面加载
    console.info(`Page onLoad with query: ${JSON.stringify(query)}`);
  },
  onReady() {
    // 页面加载完成
  },
  onShow() {
    // 页面显示
  },
  onHide() {
    // 页面隐藏
  },
  onUnload() {
    // 页面被关闭
  },
  onTitleClick() {
    // 标题被点击
  },
  onPullDownRefresh() {
    // 页面被下拉
  },
  onReachBottom() {
    // 页面被拉到底部
  },
  onShareAppMessage() {
    // 返回自定义分享信息
    return {
      title: 'My App',
      desc: 'My App description',
      path: 'pages/index/index',
    };
  },
});
