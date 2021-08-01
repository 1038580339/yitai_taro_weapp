import { Component } from 'react'
import { View, Text, Input, Image} from '@tarojs/components'
import { AtAvatar, AtButton} from 'taro-ui'
import { connect } from 'react-redux'
import BottomBtn from '../../components/bottomBtn/index'
// const connect: Function = concatRedux;
import "taro-ui/dist/style/components/button.scss" // 按需引入
import './index.less'

export default class PersonalEdit extends Component<any, any> {

    constructor(props) {
        super(props)
        this.state = {
            data: {
                tx: '',
                name: '12',
                dw: '',
                yyjb: '',
                zw: '',
                sr: '',
                dh: ''
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
        }
    }

    componentWillMount() { }

    componentDidMount() { }

    componentWillUnmount() { }

    componentDidShow() { }

    componentDidHide() { }

    onChange = (params: any, type: string): void => {
        // console.log(23423, params)
        this.setState({
            data: {
                ...this.state.data,
                [type]: params.target.value
            }
        })
    }

    showEdit = (type: string): void => {
        this.setState({
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
        }, () => {
            this.state.ref[type] && this.state.ref[type].focus()
        })
    }

    render() {
        const { data, showEdit } = this.state
        const { name, dw, yyjb, zw, sr, dh } = data
        return (<View className='personal_edit'>
            {/* <AtDivider content='' /> */}
            <View className="line"></View>
            <View className="personal_edit_content">
                <View className="personal_edit_list_content">
                    <Text className="personal_edit_list_content_title">头像</Text>
                    <AtAvatar size="small" image='https://jdc.jd.com/img/200' circle></AtAvatar>
                </View>
                <View className="line2"></View>
                <View className="personal_edit_list_content">
                    <Text className="personal_edit_list_content_title">姓名</Text>
                    {showEdit.name ? <Input 
                        style={{ fontSize: '12px' }}
                        placeholder='姓名'
                        value={name}
                        ref={(input: any) => { this.state.ref.name = input; }}
                        onInput={(e: any): void => {
                            this.onChange(e, 'name')
                        }}
                        onBlur={(e: any): void => {
                            this.showEdit('name')
                        }}
                    /> : 
                    <View onTouchStart={(e: any): void => {
                        this.showEdit('name')
                    }} className="personal_edit_list_content_show">{name}</View>}
                </View>
                <View className="line2"></View>
                <View className="personal_edit_list_content">
                    <Text className="personal_edit_list_content_title">单位</Text>
                    {showEdit.dw ? <Input 
                        style={{ fontSize: '12px' }}
                        placeholder='单位'
                        value={dw}
                        ref={(input: any) => { this.state.ref.dw = input; }}
                        onInput={(e: any): void => {
                            this.onChange(e, 'dw')
                        }}
                        onBlur={(e: any): void => {
                            this.showEdit('dw')
                        }}
                    /> : 
                    <View onTouchStart={(e: any): void => {
                        this.showEdit('dw')
                    }} className="personal_edit_list_content_show">{dw}</View>}
                </View>
                <View className="line2"></View>
                <View className="personal_edit_list_content">
                    <Text className="personal_edit_list_content_title">医院级别</Text>
                    {showEdit.yyjb ? <Input 
                        style={{ fontSize: '12px' }}
                        placeholder='医院级别'
                        value={yyjb}
                        ref={(input: any) => { this.state.ref.yyjb = input; }}
                        onInput={(e: any): void => {
                            this.onChange(e, 'yyjb')
                        }}
                        onBlur={(e: any): void => {
                            this.showEdit('yyjb')
                        }}
                    /> : 
                    <View onTouchStart={(e: any): void => {
                        this.showEdit('yyjb')
                    }} className="personal_edit_list_content_show">{yyjb}</View>}
                </View>
                <View className="line2"></View>
                <View className="personal_edit_list_content">
                    <Text className="personal_edit_list_content_title">职位</Text>
                    {showEdit.zw ? <Input 
                        style={{ fontSize: '12px' }}
                        placeholder='职位'
                        value={zw}
                        ref={(input: any) => { this.state.ref.zw = input; }}
                        onInput={(e: any): void => {
                            this.onChange(e, 'zw')
                        }}
                        onBlur={(e: any): void => {
                            this.showEdit('zw')
                        }}
                    /> : 
                    <View onTouchStart={(e: any): void => {
                        this.showEdit('zw')
                    }} className="personal_edit_list_content_show">{zw}</View>}
                </View>
                <View className="line2"></View>
                <View className="personal_edit_list_content">
                    <Text className="personal_edit_list_content_title">生日</Text>
                    {showEdit.sr ? <Input 
                        style={{ fontSize: '12px' }}
                        placeholder='生日'
                        value={sr}
                        ref={(input: any) => { this.state.ref.sr = input; }}
                        onInput={(e: any): void => {
                            this.onChange(e, 'sr')
                        }}
                        onBlur={(e: any): void => {
                            this.showEdit('sr')
                        }}
                    /> : 
                    <View onTouchStart={(e: any): void => {
                        this.showEdit('sr')
                    }} className="personal_edit_list_content_show">{sr}</View>}
                </View>
                <View className="line2"></View>
                <View className="personal_edit_list_content">
                    <Text className="personal_edit_list_content_title">电话</Text>
                    {showEdit.dh ? <Input 
                        style={{ fontSize: '12px' }}
                        placeholder='电话'
                        value={dh}
                        ref={(input: any) => { this.state.ref.dh = input; }}
                        onInput={(e: any): void => {
                            this.onChange(e, 'dh')
                        }}
                        onBlur={(e: any): void => {
                            this.showEdit('dh')
                        }}
                    /> : 
                    <View onTouchStart={(e: any): void => {
                        this.showEdit('dh')
                    }} className="personal_edit_list_content_show">{dh}</View>}
                </View>
                <View className="line2"></View>
                <View className="personal_edit_list_gz">
                    <Text className="personal_edit_list_content_title">工作证</Text>
                    <View className="gzz">
                        <View className="gzz_content"></View>
                        <View className="gzz_add">
                            <View className='at-icon at-icon-add'></View>
                        </View>
                    </View>
                </View>
                <AtButton circle  type="primary" className="rlyz_btn">人脸验证</AtButton>
                <BottomBtn btn2Title="保存修改"/>
            </View>
        </View>)
    }
}