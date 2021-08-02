import { Component } from "react";
import { View, Text, Input, Image } from "@tarojs/components";
import { AtList } from "taro-ui";
import ListItem from "../listItem/index";
// const connect: Function = concatRedux;
import "./index.less";

export default class Unreceived extends Component<any, any> {
  render() {
    return (
      <AtList>
        <View
          style={{
            paddingLeft: "30rpx",
            paddingRight: "30rpx"
          }}
        >
          <ListItem />
          <ListItem />
        </View>
      </AtList>
    );
  }
}
