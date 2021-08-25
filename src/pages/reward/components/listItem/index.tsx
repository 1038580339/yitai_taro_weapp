import { Component } from "react";
import { View, Text, Input, Image } from "@tarojs/components";
import { AtButton, AtToast } from "taro-ui";
import api from "../../../../interMiddle/index.js";
// const connect: Function = concatRedux;
import "taro-ui/dist/style/components/button.scss"; // 按需引入
import "./index.less";

export default class ListItem extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      isOpened: false
    };
  }

  handle = () => {
    this.setState(
      {
        isOpened: true
      },
      () => {
        setTimeout(() => {
          this.setState({
            isOpened: false
          });
        }, 1000);
      }
    );
  };

  getjf = data => {
    const sendData = {
      id: data.id
    };
    api
      .GETINTER(sendData)
      .then(() => {
        const sendData1 = {
          start: "0",
          length: "10",
          state: "1"
        };
        this.props.getList && this.props.getList(sendData1);
        this.handle();
      })
      .catch(e => {});
  };

  render() {
    const { isReceive = true, data = {}, getList } = this.props;
    const { isOpened } = this.state;
    return (
      <View>
        <View className="list_item">
          <View className="list_item_left">
            <View className="list_item_left_top">
              奖励标题：{`${data.name}`}
            </View>
            <View className="list_item_left_bottom">每日签到奖励</View>
          </View>
          {isReceive && (
            <View className="list_item_right">
              <AtButton
                onClick={() => {
                  this.getjf(data);
                }}
                circle
                type="primary"
                className="lq_btn"
              >
                领取
              </AtButton>
            </View>
          )}
        </View>
        <AtToast isOpened={isOpened} text="领取成功"></AtToast>
      </View>
    );
  }
}
