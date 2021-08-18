import { Component } from 'react'
import { Provider } from 'react-redux'
import configStore from './store'
import Taro from '@tarojs/taro'

import './app.less'
import 'taro-ui/dist/style/index.scss' // 全局引入一次即可
import api from "./interMiddle/index";

const store = configStore()

class App extends Component {

  async componentWillMount() {
    // await Taro.login({
    //   success: async res => {
    //     let userInfo = await api.LOGIN({
    //       // wechatLogin: true,
    //       // code: res.code,
    //       username: 'admin',
    //       password: 'admin',
    //       mobileLogin: true,
    //       __ajax: true,
    //     });
    //     console.log(userInfo);
    //     if (userInfo.data.message === '用户不存在。') {
    //       Taro.redirectTo({
    //         url: '/pages/login/index'
    //       })
    //     }
    //   }
    // })
  }

  componentDidMount() { }

  componentDidShow() { }

  componentDidHide() { }

  componentDidCatchError() { }

  // this.props.children 是将要会渲染的页面
  render() {
    return <Provider store={store}>
      {this.props.children}
    </Provider>
  }
}

export default App
