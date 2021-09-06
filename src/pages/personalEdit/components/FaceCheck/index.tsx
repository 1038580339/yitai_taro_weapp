import { Component } from "react";
import { View, Text, Input, Image, Picker, Camera } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { AtAvatar, AtButton, AtToast } from "taro-ui";
import { connect } from "react-redux";
import api from "../../../../interMiddle/personApi";
import "./index.less";

export default class ProjectDetail extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      isOpened: false
    };
  }

  check = (params: any) => {
    const That = this;
    const CameraContext = Taro.createCameraContext();
    CameraContext.takePhoto({
      success: res => {
        console.log("success", res);
        let token = Taro.getStorageSync("userInfo");
        Taro.uploadFile({
          url: `https://ytdp.ilonaltd.com/ytdp/a/upload/imageRaw?type=3&jeesite.session.id=${token.sessionid}`,
          filePath: res.tempImagePath,
          name: "test",
          success: data => {
            console.log("uploadFile", JSON.parse(data.data).data.filePath);
            api
              .FACECHECK({
                faceUrl: `https://osslx01.oss-cn-beijing.aliyuncs.com/ytdp/upload/${
                  JSON.parse(data.data).data.filePath
                }`
              })
              .then(a => {
                console.log("FACECHECK", a);
                That.setState(
                  {
                    isOpened: true
                  },
                  () => {
                    setTimeout(() => {
                      this.setState({
                        isOpened: false
                      });
                      this.props.toggleCheck(false);
                    }, 1000);
                  }
                );
              })
              .catch(e => {});
          }
        });
      },
      fail: res => {
        console.log("fail", res);
      },
      complete: res => {
        console.log("complete", res);
      }
    });
  };

  render() {
    const { isOpened } = this.state;
    return (
      <View className="face_check_w">
        <Camera
          devicePosition="front"
          style={{ height: "400px", width: "95vw" }}
        />
        <AtButton className="face_check_btn" onClick={this.check}>
          拍照识别
        </AtButton>
        <AtToast isOpened={isOpened} text="识别成功"></AtToast>
      </View>
    );
  }
}
