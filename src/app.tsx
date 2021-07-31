import { Component } from 'react'
import { Provider } from '@tarojs/redux'
import configStore from './store'

import './app.less'

const store = configStore()

class App extends Component {

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // this.props.children 是将要会渲染的页面
  render () {
    return <Provider store={store}>
            {this.props.children}
          </Provider>
  }
}

export default App
