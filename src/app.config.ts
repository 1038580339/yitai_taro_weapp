export default {
  pages: [
    "pages/learn/index",
    "pages/index/index",
    "pages/personalEdit/index",
    "pages/projectDetail/index",
    "pages/personal/index",
    "pages/reward/index"
  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black"
  },
  tabBar: {
    color: "#8a8a8a",
    selectedColor: "#f40", //选中的颜色
    backgroundColor: "#ffffff", //背景色
    borderStyle: "black", //边界线的颜色
    position: "bottom", //位置，是在上边。还是选择在下边，如果选择top，就不会显示图标
    list: [
      {
        pagePath: "pages/learn/index",
        text: "项目",
        iconPath: "pages/static/project.png",
        selectedIconPath: "pages/static/project_hover.png"
      },
      {
        pagePath: "pages/index/index",
        text: "学习",
        iconPath: "pages/static/pen.png",
        selectedIconPath: "pages/static/pen_hover.png"
      },
      {
        pagePath: "pages/personal/index",
        text: "我的",
        iconPath: "pages/static/bag.png",
        selectedIconPath: "pages/static/bag_hover.png"
      }
    ]
  }
};
