import { Component } from "react";
import { View, Text, Input, Image } from "@tarojs/components";
import { AtTabs, AtTabsPane, AtLoadMore } from "taro-ui";
import Received from "./components/received/index";
import Unreceived from "./components/Unreceived/index";
// const connect: Function = concatRedux;
import "taro-ui/dist/style/components/button.scss"; // 按需引入
import "./index.less";

export default class Reward extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      status: "more"
    };
  }

  handleClick(value) {
    console.log(value);
    this.setState({
      current: value
    });
  }

  setStatus(status) {
    this.setState({
      status: status
    });
  }

  render() {
    const tabList = [{ title: "待领取" }, { title: "已领取" }];
    const { status, current } = this.state;
    return (
      <View>
        <AtTabs
          current={this.state.current}
          tabList={tabList}
          onClick={this.handleClick.bind(this)}
        >
          <AtTabsPane current={this.state.current} index={0}>
            <Unreceived
              ref={el => (this.unrRef = el)}
              setStatus={this.setStatus.bind(this)}
            />
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={1}>
            <Received
              ref={el => (this.recRef = el)}
              setStatus={this.setStatus.bind(this)}
            />
          </AtTabsPane>
        </AtTabs>
        <AtLoadMore
          onClick={() => {
            if (current === 0) {
              this.unrRef.getList("get");
            } else {
              this.recRef.getList("get");
            }
          }}
          status={status}
        />
      </View>
    );
  }
}
