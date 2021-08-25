import { Component } from "react";
import { View, Text, Input, Image } from "@tarojs/components";
import { AtList } from "taro-ui";
import ListItem from "../listItem/index";
import api from "../../../../interMiddle/index.js";
// const connect: Function = concatRedux;
import "./index.less";

export default class Unreceived extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }

  componentDidMount() {
    this.getList();
  }

  getList = () => {
    const sendData = {
      start: "0",
      length: "10",
      state: "1"
    };
    api
      .FINDINTEGRATEPAGE(sendData)
      .then(res => {
        const data = res.data.list;
        this.setState({
          list: data
        });
      })
      .catch(e => {
        console.log(e);
      });
  };
  render() {
    return (
      <AtList>
        <View
          style={{
            paddingLeft: "30rpx",
            paddingRight: "30rpx"
          }}
        >
          {this.state.list.map((item, index) => {
            return <ListItem data={item} key={index} getList={this.getList} />;
          })}
          {/* <ListItem />
          <ListItem /> */}
        </View>
      </AtList>
    );
  }
}
