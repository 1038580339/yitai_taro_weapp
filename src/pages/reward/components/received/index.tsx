import { Component } from "react";
import { View, Text, Input, Image } from "@tarojs/components";
import { AtList, AtListItem } from "taro-ui";
import ListItem from "../listItem/index";
import api from "../../../../interMiddle/index.js";
// const connect: Function = concatRedux;
import "./index.less";

export default class Rreceived extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      start: 0
    };
  }

  componentDidMount() {
    this.getList();
  }

  getList = (type = null) => {
    const sendData = {
      start: type === "get" ? this.state.start + 1 : 0,
      length: "10",
      state: "2"
    };
    this.props.setStatus("loading");
    const That = this;
    api
      .FINDINTEGRATEPAGE(sendData)
      .then(res => {
        const data = res.data.list;
        if (!data.length) {
          That.props.setStatus("noMore");
        } else {
          That.props.setStatus("more");
        }
        That.setState({
          list: [...That.state.list, ...data]
        });
        if (type === "get") {
          That.setState({
            start: That.state.start + 1
          });
        }
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
            return <ListItem data={item} isReceive={false} key={index} />;
          })}

          {/* <ListItem isReceive={false} /> */}
        </View>
      </AtList>
    );
  }
}
