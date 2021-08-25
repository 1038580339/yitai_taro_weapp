import { Component } from "react";
import { View, Text, Input, Image, Picker } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { AtAvatar, AtButton, AtToast } from "taro-ui";
import { connect } from "react-redux";
import BottomBtn from "../../components/bottomBtn/index";
import api from "../../interMiddle/index";
// const connect: Function = concatRedux;
import "taro-ui/dist/style/components/button.scss"; // 按需引入
import "taro-ui/dist/style/components/calendar.scss";
import "./index.less";

export default class PersonalEdit extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      isOpened: false,
      showrlsb: true,
      data: {
        tx: "",
        name: "12",
        dw: "",
        yyjb: "",
        zw: "",
        sr: "",
        dh: "",
        employeeCard: ""
      },
      showEdit: {
        name: false,
        dw: false,
        yyjb: false,
        zw: false,
        sr: false,
        dh: false
      },
      ref: {
        name: null,
        dw: null,
        yyjb: null,
        zw: null,
        sr: null,
        dh: null
      }
    };
  }

  componentWillMount() {}

  componentDidMount() {
    this.getPersonInfo();
    this.getFaceRecognitionFunction();
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  getPersonInfo = (params?: any): void => {
    api
      .GETUSERINFO()
      .then(res => {
        console.log(res);
        const data = res.data.data?.userInfo || {};
        this.setState({
          data: {
            ...this.state.data,
            id: data.id || "",
            sysUserId: res.data.data?.userInfo?.sysUser.id || "",
            tx: res.data.data?.userInfo?.sysUser?.photo || "",
            name: res.data.data?.userInfo?.sysUser?.name || "",
            dw: data.company || "",
            yyjb: data.level || "",
            zw: data.position || "",
            sr: data.birthday || "",
            dh: res.data.data?.userInfo?.sysUser?.mobile || "",
            employeeCard: data.employeeCard
          }
        });
      })
      .catch(e => {
        console.log(e);
      });
  };

  saveUserInfo = (params?: any): void => {
    const data = this.state.data;
    const sendData = {
      id: data.id,
      sysUserId: data.sysUserId,
      company: data.dw,
      level: data.yyjb,
      position: data.zw,
      birthday: data.sr,
      city: data.city,
      name: data.name,
      photo: data.tx,
      mobile: data.dh,
      employeeCard: data.employeeCard
    };
    console.log("sendData", sendData);
    api
      .SAVEUSERINFO(sendData)
      .then(res => {
        console.log(res);
        this.setState(
          {
            isOpened: true
          },
          () => {
            setTimeout(() => {
              this.setState({
                isOpened: false
              });
            }, 1000);
          }
        );
      })
      .catch(e => {
        console.log(e);
      });
  };

  onChange = (params: any, type: string): void => {
    // console.log(23423, params)
    this.setState({
      data: {
        ...this.state.data,
        [type]: params.target.value
      }
    });
  };

  showEdit = (type: string): void => {
    this.setState(
      {
        showEdit: {
          // ...this.state.showEdit,
          name: false,
          dw: false,
          yyjb: false,
          zw: false,
          sr: false,
          dh: false,
          [type]: !this.state.showEdit[type]
        }
      },
      () => {
        this.state.ref[type] && this.state.ref[type].focus();
      }
    );
  };

  getFaceRecognitionFunction = (): void => {
    api
      .GETFACERECOGNITIONFUCTION()
      .then(res => {
        console.log(res);
        this.setState({
          showrlsb: res.data.data
        });
      })
      .catch(e => {
        console.log(e);
      });
  };

  uploadImg = (params: {}) => {
    return new Promise((resolve, reject) => {
      api
        .UPLOAD(params)
        .then(res => {
          console.log(res);
          resolve(res);
        })
        .catch(e => {
          console.log(e);
          reject(e);
        });
    });
  };

  render() {
    const { data, showEdit, showrlsb, isOpened } = this.state;
    console.log(2343244, showrlsb);
    const { name, dw, yyjb, zw, sr, dh, tx, employeeCard } = data;
    return (
      <View className="personal_edit">
        {/* <AtDivider content='' /> */}
        <View className="line"></View>
        <View className="personal_edit_content">
          <View className="personal_edit_list_content">
            <Text className="personal_edit_list_content_title">头像</Text>
            <View
              onTouchStart={() => {
                const That = this;
                Taro.chooseImage({
                  count: 1, // 默认9
                  sizeType: ["original", "compressed"], // 可以指定是原图还是压缩图，默认二者都有
                  sourceType: ["album", "camera"], // 可以指定来源是相册还是相机，默认二者都有，在H5浏览器端支持使用 `user` 和 `environment`分别指定为前后摄像头
                  success: function(res) {
                    // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
                    // var tempFilePaths = res.tempFilePaths;
                    let token = Taro.getStorageSync("userInfo");
                    console.log(res);
                    Taro.uploadFile({
                      url: `https://ytdp.ilonaltd.com/ytdp/a/upload/imageRaw?type=1&jeesite.session.id=${token.sessionid}`,
                      filePath: res.tempFilePaths[0],
                      name: "test",
                      success: data => {
                        console.log(
                          "uploadFile",
                          JSON.parse(data.data).data.filePath
                        );

                        That.setState({
                          data: {
                            ...That.state.data,
                            tx: `https://osslx01.oss-cn-beijing.aliyuncs.com/ytdp/upload/${
                              JSON.parse(data.data).data.filePath
                            }`
                          }
                        });
                      }
                    });
                  }
                });
              }}
            >
              <AtAvatar size="small" image={tx} circle></AtAvatar>
            </View>
          </View>
          <View className="line2"></View>
          <View className="personal_edit_list_content">
            <Text className="personal_edit_list_content_title">姓名</Text>
            {showEdit.name ? (
              <Input
                style={{ fontSize: "12px" }}
                placeholder="姓名"
                value={name}
                ref={(input: any) => {
                  this.state.ref.name = input;
                }}
                onInput={(e: any): void => {
                  this.onChange(e, "name");
                }}
                onBlur={(e: any): void => {
                  this.showEdit("name");
                }}
              />
            ) : (
              <View
                onTouchStart={(e: any): void => {
                  this.showEdit("name");
                }}
                className="personal_edit_list_content_show"
              >
                {name}
              </View>
            )}
          </View>
          <View className="line2"></View>
          <View className="personal_edit_list_content">
            <Text className="personal_edit_list_content_title">单位</Text>
            {showEdit.dw ? (
              <Input
                style={{ fontSize: "12px" }}
                placeholder="单位"
                value={dw}
                ref={(input: any) => {
                  this.state.ref.dw = input;
                }}
                onInput={(e: any): void => {
                  this.onChange(e, "dw");
                }}
                onBlur={(e: any): void => {
                  this.showEdit("dw");
                }}
              />
            ) : (
              <View
                onTouchStart={(e: any): void => {
                  this.showEdit("dw");
                }}
                className="personal_edit_list_content_show"
              >
                {dw}
              </View>
            )}
          </View>
          <View className="line2"></View>
          <View className="personal_edit_list_content">
            <Text className="personal_edit_list_content_title">医院级别</Text>
            {showEdit.yyjb ? (
              <Input
                style={{ fontSize: "12px" }}
                placeholder="医院级别"
                value={yyjb}
                ref={(input: any) => {
                  this.state.ref.yyjb = input;
                }}
                onInput={(e: any): void => {
                  this.onChange(e, "yyjb");
                }}
                onBlur={(e: any): void => {
                  this.showEdit("yyjb");
                }}
              />
            ) : (
              <View
                onTouchStart={(e: any): void => {
                  this.showEdit("yyjb");
                }}
                className="personal_edit_list_content_show"
              >
                {yyjb}
              </View>
            )}
          </View>
          <View className="line2"></View>
          <View className="personal_edit_list_content">
            <Text className="personal_edit_list_content_title">职位</Text>
            {showEdit.zw ? (
              <Input
                style={{ fontSize: "12px" }}
                placeholder="职位"
                value={zw}
                ref={(input: any) => {
                  this.state.ref.zw = input;
                }}
                onInput={(e: any): void => {
                  this.onChange(e, "zw");
                }}
                onBlur={(e: any): void => {
                  this.showEdit("zw");
                }}
              />
            ) : (
              <View
                onTouchStart={(e: any): void => {
                  this.showEdit("zw");
                }}
                className="personal_edit_list_content_show"
              >
                {zw}
              </View>
            )}
          </View>
          <View className="line2"></View>
          <View className="personal_edit_list_content">
            <Text className="personal_edit_list_content_title">生日</Text>
            <Picker
              mode="date"
              value={sr}
              onChange={(e: any) => {
                this.onChange(e, "sr");
              }}
            >
              <View className="personal_edit_list_content_show">{sr}</View>
            </Picker>
          </View>
          <View className="line2"></View>
          <View className="personal_edit_list_content">
            <Text className="personal_edit_list_content_title">电话</Text>
            {showEdit.dh ? (
              <Input
                style={{ fontSize: "12px" }}
                placeholder="电话"
                value={dh}
                ref={(input: any) => {
                  this.state.ref.dh = input;
                }}
                onInput={(e: any): void => {
                  this.onChange(e, "dh");
                }}
                onBlur={(e: any): void => {
                  this.showEdit("dh");
                }}
              />
            ) : (
              <View
                onTouchStart={(e: any): void => {
                  this.showEdit("dh");
                }}
                className="personal_edit_list_content_show"
              >
                {dh}
              </View>
            )}
          </View>
          <View className="line2"></View>
          <View className="personal_edit_list_gz">
            <Text className="personal_edit_list_content_title">工作证</Text>
            <View className="gzz">
              {employeeCard ? (
                <Image className="gzz_content" src={employeeCard} />
              ) : (
                <View className="gzz_content1"></View>
              )}

              <View
                className="gzz_add"
                onTouchStart={() => {
                  const That = this;
                  Taro.chooseImage({
                    count: 1, // 默认9
                    sizeType: ["original", "compressed"], // 可以指定是原图还是压缩图，默认二者都有
                    sourceType: ["album", "camera"], // 可以指定来源是相册还是相机，默认二者都有，在H5浏览器端支持使用 `user` 和 `environment`分别指定为前后摄像头
                    success: function(res) {
                      // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
                      // var tempFilePaths = res.tempFilePaths;
                      let token = Taro.getStorageSync("userInfo");
                      console.log(res);
                      Taro.uploadFile({
                        url: `https://ytdp.ilonaltd.com/ytdp/a/upload/imageRaw?type=1&jeesite.session.id=${token.sessionid}`,
                        filePath: res.tempFilePaths[0],
                        name: "test",
                        success: data => {
                          console.log(
                            "uploadFile",
                            JSON.parse(data.data).data.filePath
                          );

                          That.setState({
                            data: {
                              ...That.state.data,
                              employeeCard: `https://osslx01.oss-cn-beijing.aliyuncs.com/ytdp/upload/${
                                JSON.parse(data.data).data.filePath
                              }`
                            }
                          });
                        }
                      });
                    }
                  });
                }}
              >
                <View className="at-icon at-icon-add"></View>
              </View>
            </View>
          </View>
          {showrlsb === "true" ? (
            <AtButton circle type="primary" className="rlyz_btn">
              人脸验证
            </AtButton>
          ) : null}

          <View style={{ marginTop: "38px" }}>
            <BottomBtn
              onBack={() => {
                Taro.switchTab({
                  url: "../../pages/personal/index"
                });
              }}
              handle={this.saveUserInfo}
              btn2Title="保存修改"
            />
          </View>
        </View>
        <AtToast isOpened={isOpened} text="保存成功"></AtToast>
        {/* <AtCalendarEl /> */}
        {/* <Picker /> */}
      </View>
    );
  }
}
