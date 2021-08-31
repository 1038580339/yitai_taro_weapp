import { Component } from 'react'
import { View, Text, Image } from '@tarojs/components'
import { AtButton, AtTabs, AtTabsPane, AtLoadMore } from 'taro-ui'
import { connect } from 'react-redux'
// const connect: Function = concatRedux;
// import "taro-ui/dist/style/components/button.scss" // 按需引入
import './index.less'
import api from "../../interMiddle";
import Taro from '@tarojs/taro'

declare function create(o: object | null): void;
interface tabListItem {
  title: string;
}
interface State {
  tabList: Array<tabListItem>;
  current: number;
  project: Project;
  myProject: Project;
}

interface Project {
  list: Array<any>;
  status: "more" | "loading" | "noMore" | undefined;
  start: number;
  recordsFiltered: number | null
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
      project: {
        list: [],
        status: 'more',
        start: 0,
        recordsFiltered: null,
      },
      myProject: {
        list: [],
        status: 'more',
        start: 0,
        recordsFiltered: null,
      }

    }
  }
  state: State
  componentWillMount() {

  }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() {
    const { current, project, myProject } = this.state;

    let nowProject = current === 0 ? project : myProject;
    let start = nowProject.start;
    if (start === 0) {
      this.getList();
    }
  }

  componentDidHide() { }

  getList = async () => {
    const { current, project, myProject } = this.state;


    let nowProject = current === 0 ? project : myProject;
    let start = nowProject.start;

    this.setState({
      [current === 0 ? 'project' : 'myProject']: {
        ...nowProject,
        status: "loading"
      }
    })

    if (nowProject.recordsFiltered != null && nowProject['list'].length >= nowProject.recordsFiltered) {
      this.setState({
        [current === 0 ? 'project' : 'myProject']: {
          ...nowProject,
          status: "noMore"
        }
      })
      return;
    }

    let userInfo = await api.PROJECTPAGE({
      start: start,
      length: 10,
      state: current + 1
    });
    console.log('userInfo', userInfo);
    this.setState({
      [current === 0 ? 'project' : 'myProject']: {
        ...nowProject,
        list: [...nowProject['list'],
        ...userInfo.data.list
        ],
        start: start + 1,
        status: 'more',
        recordsFiltered: userInfo.data.recordsFiltered,
      }
    })
  }

  handleClick = (value) => {
    // console.log(value);
    this.setState({
      current: value
    }, () => {
      const { current, project, myProject } = this.state;

      let nowProject = current === 0 ? project : myProject;
      let start = nowProject.start;
      if (start === 0) {
        this.getList();
      }
    })
  }

  toDetail = id => {
    Taro.navigateTo({
      url: `/pages/projectDetail/index?id=${id}`,
    })
  }


  render() {
    const { project, myProject, current } = this.state;
    let list, status;
    if (current === 0) {
      list = project.list;
      status = project.status;
    } else if (current === 1) {
      list = myProject.list;
      status = myProject.status;
    }
    return (
      <View className='index'>
        <AtTabs current={this.state.current} tabList={this.state.tabList} onClick={this.handleClick}>
          {/* <AtTabsPane current={this.state.current} index={0} >
          </AtTabsPane> */}
          {
            this.state.tabList.map((item, index) => {
              return <AtTabsPane current={this.state.current} index={index} >
              </AtTabsPane>
            })
          }
        </AtTabs>
        {
          list.map((item, index) => {
            return <View className='at-row card' onClick={e => this.toDetail(item.id)}>
              <View className='at-col at-col-4'>
                <Image style={{ width: '100%', height: '100%' }} mode="scaleToFill" src={'https://osslx01.oss-cn-beijing.aliyuncs.com/ytdp/upload/' + item.logoUrl}></Image>
              </View>
              <View className='at-col at-col-8'>
                <view className='title'>{item.name}</view>
                <view className='artContent'>{item.description}</view>
                <view className='artTip'>
                  <Text>地点：{item.address}</Text>
                  <Text style={{ float: 'right' }}>{item.updateDate}</Text>
                </view>
              </View>
            </View>
          })
        }
        <AtLoadMore
          onClick={this.getList}
          status={status}
        />
      </View>
    )
  }
}

export default Learn;
