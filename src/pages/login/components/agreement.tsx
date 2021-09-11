import { Component } from "react";
import { View, Text, Image, ScrollView, Radio } from "@tarojs/components";
import {
  AtButton,
  AtList,
  AtListItem,
  AtTabs,
  AtTabsPane,
  AtToast
} from "taro-ui";
import "../index.less";

class Agreement extends Component<any, any> {
  constructor(props) {
    super(props);
  }

  back = () => {
    this.props.toggle(false);
  };

  render() {
    return (
      <View className="agreement_wrap">
        24234
        <AtButton onClick={this.back}>返回</AtButton>
      </View>
    );
  }
}

export default Agreement;
