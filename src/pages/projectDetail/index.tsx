import { Component } from "react";
import { View, Text, Input, Image } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { AtAvatar, AtButton, AtToast } from "taro-ui";
import { connect } from "react-redux";
import BottomBtn from "../../components/bottomBtn/index";
import api from "../../interMiddle/index";
import { timestampToTime } from "../../assets/js/utils";
// const connect: Function = concatRedux;
import "taro-ui/dist/style/components/button.scss"; // 按需引入
import "./index.less";

export default class ProjectDetail extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      isOpened: false,
      name: "",
      joinUsOffline: "",
      joinUsOnline: "",
      introduction: "",
      readingQuantity: 0,
      address: "",
      // eslint-disable-next-line react/no-unused-state
      reviewList: []
    };
  }

  componentWillMount() {}

  componentDidMount() {
    this.getProjectInfo();
    this.getReviewList();
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  getProjectInfo = (params?: any): void => {
    const sendData = {
      id: "f7ac95c247724ad4988381671903293a"
    };
    api
      .GETPROJECTINFO(sendData)
      .then(res => {
        console.log(res);
        const project = res.data.data.project;
        this.setState({
          name: project.name,
          joinUsOffline: project.joinUsOffline,
          joinUsOnline: project.joinUsOnline,
          introduction: project.introduction,
          readingQuantity: project.readingQuantity,
          address: project.address
        });
      })
      .catch(e => {
        console.log(e);
      });
  };

  getReviewList = (params?: any): void => {
    const sendData = {
      id: "f7ac95c247724ad4988381671903293a"
    };
    api
      .REVIEWLIST(sendData)
      .then(res => {
        console.log(res);
        const list = res.data.data.list;
        this.setState({
          reviewList: list
        });
      })
      .catch(e => {
        console.log(e);
      });
  };

  save = (): void => {
    const sendData = {
      id: "f7ac95c247724ad4988381671903293a"
    };
    api
      .APPLYPROJECT(sendData)
      .then(res => {
        console.log(res);
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
      })
      .catch(e => {
        console.log(e);
      });
  };

  renderReviewList = () => {
    return this.state.reviewList.map((item, index) => {
      return (
        <View className="card" key={index}>
          {!item.logoUrl ? (
            <View className="left_card"></View>
          ) : (
            <Image
              src={require(`https://osslx01.oss-cn-beijing.aliyuncs.com/ytdp/upload/${item.logoUrl}`)}
            />
          )}
          <View className="right_card">
            <Text className="project_title3">公开课：{`${item.name}`}</Text>
            <Text className="project_title4">往期回顾：</Text>
            <View className="project_title5_wrap">
              <Text className="project_title5">
                地点： {`${item.address || ""}`}
              </Text>
              <Text className="project_title5">
                {`${timestampToTime(Number(item.startTime)) || "--"}`}
              </Text>
            </View>
          </View>
        </View>
      );
    });
  };

  render() {
    const {
      name,
      joinUsOnline,
      joinUsOffline,
      introduction,
      isOpened,
      readingQuantity,
      address
    } = this.state;
    return (
      <View className="project_Detail_w" style={{ height: "100%" }}>
        <View className="project_Detail">
          <View className="project_content">
            <Text className="project_name">{name}</Text>
            <View className="projrct_heard">
              <Text className="projrct_dd">地点：{`${address || ""}`}</Text>
              <Text className="projrct_yd">{`阅读量：${readingQuantity ||
                ""}`}</Text>
            </View>
            <Text className="project_title">项目介绍：</Text>
            <Text className="project_content_text">
              {introduction}
              {/* 项目介绍：项目介绍：项目介绍：项目介绍：项目介绍：项目介绍：项目介绍：项目介绍：项目介绍：项目介绍：项目介绍：项目介绍：项目介绍：项目介绍：项目介绍：项目介绍：项目介绍：项目介绍：项目介绍：项目介绍：项目介绍：项目介绍：项目介绍：项目介绍：项目介绍：项目介绍：项目介绍：项目介绍：项目介绍：项目介绍：项目介绍：项目介绍：项目介绍：项目介绍：项目介绍：项目介绍：项目介绍：项目介绍：项目介绍：项目介绍：项目介绍：项目介绍：项目介绍：项目介绍：项目介绍：项目介绍：项目介绍：项目介绍：项目介绍：项目介绍：项目介绍：项目介绍：项目介绍：项目介绍：项目介绍：项目介绍：项目介绍：项目介绍： */}
            </Text>
            {/* <Image
            className="project_content_img"
            src="../../assets/images/back.png"
          /> */}
            <Text className="project_title">参与报名：</Text>
            <Text className="project_title" style={{ marginLeft: "30px" }}>
              线上：{joinUsOnline}
            </Text>
            <Text className="project_title" style={{ marginLeft: "30px" }}>
              线下：{joinUsOffline}
            </Text>
          </View>
          <View className="project_content project_content2">
            <Text className="project_title project_title2">往期回顾：</Text>
            {this.renderReviewList()}
            {/* <View className="card">
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
            </View> */}
          </View>
          <AtToast isOpened={isOpened} text="报名成功"></AtToast>
        </View>
        <View className="bottom_btn_wrap">
          <BottomBtn
            onBack={() => {
              Taro.switchTab({
                url: "../../pages/learn/index"
              });
            }}
            handle={this.save}
            btn2Title="报名"
          />
        </View>
      </View>
    );
  }
}
