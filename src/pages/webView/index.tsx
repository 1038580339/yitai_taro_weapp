import { Component } from 'react'
import { View, Text, Image, WebView } from '@tarojs/components'
import { AtButton, AtAvatar, AtGrid, AtList, AtListItem, AtCard } from 'taro-ui'
import { connect } from 'react-redux'
// const connect: Function = concatRedux;
import './index.less'
import Taro from '@tarojs/taro'
interface State {
  url: string;
}

// @connect(({ counter }) => counter)
class Personal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: ''
    }
  }
  // componentWillMount() {
  //   this.getUserInfo();
  // }
  state: State
  onLoad(options) {
    console.log(options);
    this.setState({
      url: options.url
    });
  }
  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() {

  }

  componentDidHide() { }
  onPullDownRefresh() {

  }

  render() {
    const { url } = this.state;
    return (
      < WebView src={`https://ytdp.ilonaltd.com/ytdp/static/html/videoPage.html?url=${url}`} />
    )
  }
}

export default Personal;
