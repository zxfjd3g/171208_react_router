import React, {Component} from 'react'
import {Link, Route} from 'react-router-dom'

import MessageDetail from './message-detail'

export default class Message extends Component {

  state = {
    messages: [
      /*{id: 1, title: 'message001'},
      {id: 2, title: 'message002'},
      {id: 3, title: 'message003'},
      {id: 5, title: 'message005'},*/
    ]
  }

  componentDidMount () {
    // 模拟异步ajax请求获取数据
    setTimeout(() => {
      const messages = [
        {id: 1, title: 'message001'},
        {id: 2, title: 'message002'},
        {id: 3, title: 'message003'},
        {id: 5, title: 'message005'},
      ]
      // 更新状态
      this.setState({
        messages
      })
    }, 1000)
  }

  showDetail = (id) => {
    this.props.history.push(`/home/message/${id}`)
  }
  showDetail2 = (id) => {
    this.props.history.replace(`/home/message/${id}`)
  }

  render () {
    return (
      <div>
        <ul>
          {/*/home/message/num*/}
          {
            this.state.messages.map((m, index) =>{
              return (
                <li key={index}>
                  <Link to={`/home/message/${m.id}`}>{m.title}</Link>
                  <button onClick={() => {this.showDetail(m.id)}}>查看详情(push)</button>
                  <button onClick={() => {this.showDetail2(m.id)}}>查看详情(replace)</button>
                </li>
              )
            } )
          }
        </ul>

        <button onClick={() => this.props.history.goBack()}>回退</button>
        <button onClick={() => this.props.history.goForward()}>前进</button>
        <button onClick={() => this.props.history.push('/about')}>去about</button>
        <hr/>
        <Route path='/home/message/:id' component={MessageDetail}/>
      </div>
    )
  }
}