import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import { connect } from 'react-redux'
// const connect: Function = concatRedux;
import "taro-ui/dist/style/components/button.scss" // 按需引入
import './index.less'

// @connect(({ counter }) => counter)
class Personal extends Component {

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className='index'>
        个人信息
      </View>
    )
  }
}

export default Personal;