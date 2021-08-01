import { Component } from 'react'
import { View, Text, Input, Image} from '@tarojs/components'
import {  AtButton} from 'taro-ui'
import { render } from '@tarojs/taro'
import './index.less'

export default class BottomBtn extends Component<any, any> {

    constructor(props) {
        super(props)
    }

    componentWillMount() { }

    componentDidMount() { }

    componentWillUnmount() { }

    componentDidShow() { }

    componentDidHide() { }

    back = () => {
        this.props.onBack && this.props.onBack()
    }

    onHandle = () => {
        this.props.handle && this.props.handle()
    }

    render() {
        const btn2Title: string = this.props.btn2Title || ''
        return <View className="bottom_btn">
                    <View className="back_btn" onTouchStart={this.back}>
                        {/* <View className="back_btn_img"/> */}
                        <Image  className="back_btn_img" src={require('../../assets/images/back.png')}/>
                        <Text className="back_btn_title">返回</Text>
                    </View>
                    <AtButton onClick={this.onHandle} circle type="primary" className="save_btn">{btn2Title}</AtButton>
                </View>
    }
    
}