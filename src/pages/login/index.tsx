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
const login = require('../static/login.png');
// @connect(({ counter }) => counter)
declare function create(o: object | null): void;
interface tabListItem {
  title: string;
}

interface State {
  [propName: string]: any
}

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {

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

  componentDidShow() { }

  componentDidHide() { }

  getPhoneNumber = (data) => {
    console.log(data);
    Taro.login({
      success: async res => {
        let info = await api.DECRYPT({
          code: res.code,
          encryptedData: data.detail.encryptedData,
          iv: data.detail.iv
        })
        console.log(info);
        if (info.data.data) {
          Taro.login({
            success: async res => {
              let userInfo = await api.LOGIN({
                wechatLogin: true,
                code: res.code,
                username: info.data.data,
                password: info.data.data,
                mobileLogin: true,
                __ajax: true,
              });
              await Taro.setStorageSync('userInfo', userInfo.data);
              Taro.switchTab({
                url: '/pages/learn/index'
              })
            }
          })
        }
      }
    })

  }
  render() {
    return (
      <View className="login">
        <Image
          className={'loginBg'}
          src={login}
        />
        <View className={'loginContent'}>
          <Text className={'title'}>您还没有登录</Text>
          <AtButton type='primary' className={'button'} openType="getPhoneNumber" onGetPhoneNumber={this.getPhoneNumber}>微信登录</AtButton>
        </View>
      </View>
    );
  }
}

export default Index;
