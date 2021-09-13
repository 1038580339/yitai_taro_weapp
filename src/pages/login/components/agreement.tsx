import { Component } from "react";
import { View, Text, Image, ScrollView, Radio } from "@tarojs/components";
import wenben from "../mock";
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
        <View
          style={{
            width: "100vw",
            fontSize: "36px",
            textAlign: "center",
            marginBottom: "10px"
          }}
        >
          <Text
            style={{
              width: "100vw",
              fontSize: "36px",
              textAlign: "center",
              marginBottom: "10px"
            }}
          >
            {this.props.type === "yh" ? "逸态用户注册协议" : "逸态隐私政策"}
          </Text>
        </View>
        {wenben[this.props.type] || ""}
        <AtButton onClick={this.back}>返回</AtButton>
      </View>
    );
  }
}

export default Agreement;
