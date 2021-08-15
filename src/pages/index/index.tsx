import { Component } from "react";
import { View, Text, Image, ScrollView } from "@tarojs/components";
import { AtButton, AtList, AtListItem, AtTabs, AtTabsPane } from "taro-ui";
import { connect } from "react-redux";
import api from "../../interMiddle/index";
// const connect: Function = concatRedux;
import "taro-ui/dist/style/components/list.scss";
import "taro-ui/dist/style/components/icon.scss";
import "taro-ui/dist/style/components/button.scss"; // 按需引入
import "taro-ui/dist/style/components/tabs.scss";
import "taro-ui/dist/style/components/flex.scss";
import "./index.less";

// @connect(({ counter }) => counter)
declare function create(o: object | null): void;
interface tabListItem {
  title: string;
}
interface State {
  tabList?: Array<tabListItem>;
  current?: number;
  list?: Array<any>;
}
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabList: [{ title: "C2C" }, { title: "DPP4" }, { title: "OACR" }],
      current: 0,
      list: [1, 2, 3, 4, 5, 6, 7, 8, 90, 10],
    };
  }
  state: State;
  componentWillMount() {}

  componentDidMount() {
    console.log("api", api.LOGIN);
    api
      .LOGIN()
      .then((res) => {
        console.log(13424, res);
      })
      .catch((e) => {
        console.log("e", e);
      });
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}
  handleClick = (value) => {
    this.setState({
      current: value,
    });
  };
  render() {
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
        {this.state.list.map((item, index) => {
          return (
            <View className="at-row card">
              <View className="at-col at-col-4">
                <Image
                  style={{ width: "100%", height: "100%" }}
                  mode="scaleToFill"
                  src={"../static/bag_hover.png"}
                ></Image>
              </View>
              <View className="at-col at-col-8">
                <view className="title">
                  公开课：用企业微信组号服务于增长12e43
                </view>
                <view className="artContent">最新最全官方教学与案列</view>
                <view className="artTip">
                  <Text>地点：北京</Text>
                  <Text style={{ float: "right" }}>2021-05-23</Text>
                </view>
              </View>
            </View>
          );
        })}
      </View>
    );
  }
}

export default Index;
