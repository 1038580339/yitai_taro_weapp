import { Component } from 'react'
import { View, Text, Image } from '@tarojs/components'
import { AtButton, AtTabs, AtTabsPane } from 'taro-ui'
import { connect } from 'react-redux'
// const connect: Function = concatRedux;
import "taro-ui/dist/style/components/button.scss" // 按需引入
import './index.less'

declare function create(o: object | null): void;
interface tabListItem {
  title: string;
}
interface State {
  tabList?: Array<tabListItem>;
  current?: number;
  list?: Array<any>;
}
// @connect(({ counter }) => counter)
class Learn extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tabList: [
        { title: '实时项目' }, { title: '已完成项目' }
      ],
      current: 0,
      list: [1, 2, 3, 4, 5, 6, 7, 8, 90, 10]
    }
  }
  state: State
  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  handleClick = (value) => {
    this.setState({
      current: value
    })
  }

  render() {
    return (
      <View className='index'>
        <AtTabs current={this.state.current} tabList={this.state.tabList} onClick={this.handleClick}>
          <AtTabsPane current={this.state.current} index={0} >
          </AtTabsPane>
          {
            this.state.tabList.map((item, index) => {
              return <AtTabsPane current={this.state.current} index={index} >
              </AtTabsPane>
            })
          }
        </AtTabs>
        {
          this.state.list.map((item, index) => {
            return <View className='at-row card'>
              <View className='at-col at-col-4'>
                <Image style={{ width: '100%', height: '100%' }} mode="scaleToFill" src={"../static/bag_hover.png"}></Image>
              </View>
              <View className='at-col at-col-8'>
                <view className='title'>公开课：用企业微信组号服务于增长12e43</view>
                <view className='artContent'>最新最全官方教学与案列</view>
                <view className='artTip'>
                  <Text>地点：北京</Text>
                  <Text style={{ float: 'right' }}>2021-05-23</Text>
                </view>
              </View>
            </View>
          })
        }
      </View>
    )
  }
}

export default Learn;
