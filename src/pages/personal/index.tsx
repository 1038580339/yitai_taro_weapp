import { Component } from 'react'
import { View, Text, Image } from '@tarojs/components'
import { AtButton, AtAvatar, AtGrid, AtList, AtListItem, AtCard } from 'taro-ui'
import { connect } from 'react-redux'
// const connect: Function = concatRedux;
import "taro-ui/dist/style/components/button.scss" // 按需引入
import "taro-ui/dist/style/components/avatar.scss";
import "taro-ui/dist/style/components/grid.scss";
import "taro-ui/dist/style/components/list.scss";
import "taro-ui/dist/style/components/icon.scss";
import "taro-ui/dist/style/components/card.scss";
import './index.less'
const message = require('../static/message.png');
const gift = require('../static/gift.png');
const record = require('../static/record.png');
const learn = require('../static/learn.png');
import api from "../../interMiddle/index";
import Taro from '@tarojs/taro'

interface userInfo {
  title: string;
  info: string;
  card?: boolean;
}
interface State {
  list?: Array<userInfo>;
  userInfo: UserInfo;
}
interface UserInfo {
  [propName: string]: any;
}
// @connect(({ counter }) => counter)
class Personal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [{ title: '单位', info: 'company' }, { title: '医院级别', info: 'level' }, { title: '职位', info: 'position' }, { title: '城市', info: 'city' }, { title: '生日', info: 'birthday' }, { title: '工作证', info: '1234', card: true },],
      userInfo: {}
    }
  }
  state: State
  // componentWillMount() {
  //   this.getUserInfo();
  // }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() {
    this.getUserInfo();
  }

  componentDidHide() { }
  onPullDownRefresh() {
    this.getUserInfo();
  }

  openEdit = () => {
    Taro.navigateTo({
      url: '/pages/personalEdit/index',
    })
  }

  getUserInfo = () => {
    api
      .GETUSERINFO()
      .then((res) => {
        this.setState({
          userInfo: res.data.data.userInfo
        })
        Taro.stopPullDownRefresh();
      })
      .catch((e) => {
        Taro.stopPullDownRefresh();
        console.log("e", e);
      });
  }

  render() {
    const { userInfo } = this.state;
    const { sysUser = {} } = userInfo;
    return (
      <View className='index'>
        <view className='top'>
          <View className='at-row'>
            <View style='height:100px' className='at-col at-col-3'>
              <AtAvatar circle image={sysUser.photo || 'https://jdc.jd.com/img/200'} size='large'></AtAvatar>
            </View>
            <View className='at-col at-col-6'>
              <View className='top_name'>{sysUser.name}</View>
              <View className='top_tip'>学习时长：10H</View>
              <View className='top_tip'>积分：211</View>
            </View>
            <View className='at-col at-col-3'>
              <Image className='image_button' mode="scaleToFill" src={message} onClick={this.openEdit}></Image>
            </View>
          </View>
        </view>
        <View className="tab">
          <AtGrid data={
            [
              {
                image: gift,
                value: '换取积分'
              },
              {
                image: record,
                value: '领取记录'
              },
              {
                image: learn,
                value: '继续学习'
              }
            ]
          }
            hasBorder={false} />
        </View>
        <View className="list">
          <AtList>
            {this.state.list.map(item => {
              if (item.card) {
                return <AtCard
                  title={item.title}
                >
                  <Image className='image_card' mode="scaleToFill" src={'https://jdc.jd.com/img/200'}></Image>
                </AtCard>
              }
              return <AtListItem title={item.title} extraText={userInfo[item.info] || ''} />
            })}

          </AtList>
        </View>
      </View>
    )
  }
}

export default Personal;
