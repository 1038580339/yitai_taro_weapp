import { Component } from "react";
import { View, Text, Input, Image } from "@tarojs/components";
import { AtAvatar, AtButton } from "taro-ui";
import { connect } from "react-redux";
import BottomBtn from "../../components/bottomBtn/index";
import api from "../../interMiddle/index";
// const connect: Function = concatRedux;
import "taro-ui/dist/style/components/button.scss"; // 按需引入
import "./index.less";

export default class ProjectDetail extends Component<any, any> {
  componentWillMount() {}

  componentDidMount() {
    this.getProjectInfo();
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  getProjectInfo = (params?: any): void => {
    const sendData = {
      id: "70503610552e496cbdc3698fe011040e"
    };
    api
      .GETPROJECTINFO(sendData)
      .then(res => {
        console.log(res);
      })
      .catch(e => {
        console.log(e);
      });
  };

  render() {
    return (
      <View className="project_Detail">
        <View className="project_content">
          <Text className="project_name">nanamenamenamenamenameme</Text>
          <View className="projrct_heard">
            <Text className="projrct_dd">地点：北京</Text>
            <Text className="projrct_yd">阅读量：234</Text>
          </View>
          <Text className="project_title">项目介绍：</Text>
          <Text className="project_content_text">
            项目介绍：项目介绍：项目介绍：项目介绍：项目介绍：项目介绍：项目介绍：项目介绍：项目介绍：项目介绍：项目介绍：项目介绍：项目介绍：项目介绍：项目介绍：项目介绍：项目介绍：项目介绍：项目介绍：项目介绍：项目介绍：项目介绍：项目介绍：项目介绍：项目介绍：项目介绍：项目介绍：项目介绍：项目介绍：项目介绍：项目介绍：项目介绍：项目介绍：项目介绍：项目介绍：项目介绍：项目介绍：项目介绍：项目介绍：项目介绍：项目介绍：项目介绍：项目介绍：项目介绍：项目介绍：项目介绍：项目介绍：项目介绍：项目介绍：项目介绍：项目介绍：项目介绍：项目介绍：项目介绍：项目介绍：项目介绍：项目介绍：项目介绍：
          </Text>
          <Image
            className="project_content_img"
            src="../../assets/images/back.png"
          />
          <Text className="project_title">参与报名：</Text>
          <Text className="project_title" style={{ marginLeft: "30px" }}>
            线上：----------------
          </Text>
          <Text className="project_title" style={{ marginLeft: "30px" }}>
            线下：---------------------
          </Text>
        </View>
        <View className="project_content project_content2">
          <Text className="project_title project_title2">往期回顾：</Text>
          <View className="card">
            <View className="left_card"></View>
            <View className="right_card">
              <Text className="project_title3">
                公开课：用微信企业组好服务与增长
              </Text>
              <Text className="project_title4">往期回顾：</Text>
              <View className="project_title5_wrap">
                <Text className="project_title5">地点：北京</Text>
                <Text className="project_title5">2021-05-23</Text>
              </View>
            </View>
          </View>
        </View>
        <View className="bottom_btn_wrap">
          <BottomBtn btn2Title="报名" />
        </View>
      </View>
    );
  }
}
