import { Component } from "react";
import { View, Text, Image, ScrollView, Radio } from "@tarojs/components";
import Agreement from "./components/agreement";
import {
  AtButton,
  AtList,
  AtListItem,
  AtTabs,
  AtTabsPane,
  AtToast
} from "taro-ui";
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
import Taro from "@tarojs/taro";
const login = require("../static/login.png");
// @connect(({ counter }) => counter)
declare function create(o: object | null): void;
interface tabListItem {
  title: string;
}

interface State {
  [propName: string]: any;
}

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: ""
    };
  }
  state: State = {
    radio: false,
    isOpened: false,
    showA: false
  };
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

  componentDidShow() { }

  componentDidHide() { }

  toggle = val => {
    this.setState({
      showA: val
    });
  };

  getPhoneNumber = data => {
    console.log(data);
    if (!this.state.radio) {
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
      return;
    }
    Taro.login({
      success: async res => {
        let info = await api.DECRYPT({
          code: res.code,
          encryptedData: data.detail.encryptedData,
          iv: data.detail.iv
        });
        console.log("login", info);

        if (info.data.data && this.state.radio) {
          Taro.login({
            success: async res => {
              let userInfo = await api.LOGIN({
                wechatLogin: true,
                code: res.code,
                username: info.data.data,
                password: info.data.data,
                mobileLogin: true,
                __ajax: true
              });
              await Taro.setStorageSync("userInfo", userInfo.data);
              Taro.switchTab({
                url: "/pages/learn/index"
              });
            }
          });
        }
      }
    });
  };

  radioChange = e => {
    // console.log(e);
    this.setState({
      radio: !this.state.radio
    })
  }

  render() {
    return (
      <View className="login">
        <Image className={"loginBg"} src={login} />
        <View className={"loginContent"}>
          <Text className={"title"}>您还没有登录</Text>
          <AtButton
            type="primary"
            className={"button"}
            openType="getPhoneNumber"
            onGetPhoneNumber={this.getPhoneNumber}
          >
            微信登录
          </AtButton>
          <View
            style={{
              display: "flex",
              width: "100vw",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "6px"
            }}
          >
            <Radio checked={this.state.radio} onClick={this.radioChange} />
            <View>
              <View className="text_xieyi">
                <Text>登入代表您已同意逸态学习</Text>
                <View
                  onClick={() => {
                    this.setState(
                      {
                        type: "yh"
                      },
                      () => {
                        this.toggle(true);
                      }
                    );
                  }}
                  style={{ color: "#00BBFF" }}
                >
                  <Text>用户服务协议</Text>
                </View>
                ，
                <View
                  onClick={() => {
                    this.setState(
                      {
                        type: "yc"
                      },
                      () => {
                        this.toggle(true);
                      }
                    );
                  }}
                  style={{ color: "#00BBFF" }}
                >
                  <Text>隐私政策</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        {this.state.showA && (
          <Agreement type={this.state.type} toggle={this.toggle} />
        )}
        <AtToast isOpened={this.state.isOpened} text="请先同意协议"></AtToast>
      </View>
    );
  }
}

export default Index;
