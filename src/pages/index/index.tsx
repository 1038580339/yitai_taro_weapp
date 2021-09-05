import { Component } from "react";
import { View, Text, Image, ScrollView } from "@tarojs/components";
import { AtButton, AtList, AtListItem, AtTabs, AtTabsPane } from "taro-ui";
import { connect } from "react-redux";
// import api from "../../interMiddle/index";
// const connect: Function = concatRedux;
import "taro-ui/dist/style/components/list.scss";
import "taro-ui/dist/style/components/icon.scss";
import "taro-ui/dist/style/components/button.scss"; // 按需引入
import "taro-ui/dist/style/components/tabs.scss";
import "taro-ui/dist/style/components/flex.scss";
import "./index.less";
import api from "../../interMiddle";
import Taro from '@tarojs/taro'

// @connect(({ counter }) => counter)
declare function create(o: object | null): void;
interface tabListItem {
  title: string;
}
interface State {
  tabList: Array<tabListItem>;
  current: number;
  list: Array<list>;
}
interface list {
  code: string;
  [propName: string]: any
}
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabList: [],
      current: 0,
      list: [],
    };
  }
  state: State;
  componentWillMount() { }

  componentDidMount() {
    // console.log("api", api.LOGIN);
    // api
    //   .LOGIN()
    //   .then((res) => {
    //     console.log(13424, res);
    //   })
    //   .catch((e) => {
    //     console.log("e", e);
    //   });
  }

  componentWillUnmount() { }

  componentDidShow(options) {
    console.log(options);
    this.getInfo();
  }
  onPullDownRefresh() {
    this.getInfo();
  }

  componentDidHide() { }
  handleClick = (value) => {
    this.setState({
      current: value,
    });
  };
  getInfo = () => {
    api
      .FINDVIDEORESOURCEPAGE()
      .then((res) => {
        let list = res.data.list;
        let code: Array<tabListItem> = [];
        for (let i in list) {
          if (code.indexOf(list[i].type.code) === -1) {
            code.push({ title: list[i].type.code })
          }
        }
        this.setState({
          list: list,
          tabList: code
        })
        Taro.stopPullDownRefresh();
      })
      .catch((e) => {
        Taro.stopPullDownRefresh();
        // console.log("e", e);
      });
  }
  toDetail = url => {
    // Taro.navigateTo({
    //   url: `/pages/webView/index?url=${url}`,
    // })
    Taro.navigateToMiniProgram({
      appId: 'wx92d650b253f8f2e3',
      path: url,
      success: function (res) {
        // 打开成功
      }
    })
    // console.log(url);
  }
  render() {
    const { list, current, tabList } = this.state;
    let nowCode = (tabList[current] || {}).title || '';
    let nowList = list.filter(item => item.type.code === nowCode);
    return (
      <View className="index">
        <AtList>
          <AtListItem title="近期直播预告" />
        </AtList>
        <View className="at-row card">
          <View className="at-col at-col-4">
            <Image
              style={{ width: "100%", height: "100%" }}
              mode="scaleToFill"
              src={"../static/bag_hover.png"}
            ></Image>
          </View>
          <View className="at-col at-col-8">
            <view className="title">公开课：用企业微信组号服务于增长12e43</view>
            <view className="artContent">最新最全官方教学与案列</view>
            <view className="artTip">
              <Text>地点：北京</Text>
              <Text style={{ float: "right" }}>2021-05-23</Text>
            </view>
          </View>
        </View>
        <AtTabs
          current={this.state.current}
          tabList={this.state.tabList}
          onClick={this.handleClick}
        >
          <AtTabsPane current={this.state.current} index={0}></AtTabsPane>
          {this.state.tabList.map((item, index) => {
            return (
              <AtTabsPane
                current={this.state.current}
                index={index}
              ></AtTabsPane>
            );
          })}
        </AtTabs>
        {nowList.map((item, index) => {
          return <View className='at-row card' onClick={e => this.toDetail(item.url)}>
            <View className='at-col at-col-4'>
              <Image style={{ width: '100%', height: '100%' }} mode="scaleToFill" src={'https://osslx01.oss-cn-beijing.aliyuncs.com/ytdp/upload/' + item.logoUrl}></Image>
            </View>
            <View className='at-col at-col-8'>
              <view className='title'>{item.name}</view>
              <view className='artContent'>{item.description}</view>
              <view className='artTip'>
                <Text>地点：{item.address}</Text>
                <Text style={{ float: 'right' }}>{item.updateDate}</Text>
              </view>
            </View>
          </View>
        })}
      </View>
    );
  }
}

export default Index;
