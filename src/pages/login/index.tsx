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
const login = require('../static/login.png');
// @connect(({ counter }) => counter)
declare function create(o: object | null): void;
interface tabListItem {
  title: string;
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
  handleClick = (value) => {
    this.setState({
      current: value,
    });
  };
  getPhoneNumber = (data) => {
    console.log(data);
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
