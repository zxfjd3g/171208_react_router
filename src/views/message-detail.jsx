import React, {Component} from 'react'

const allMessageDetails = [
  {id: 1, title: 'message001', content: 'message content 001'},
  {id: 2, title: 'message002', content: 'message content 002'},
  {id: 3, title: 'message003', content: 'message content 003'},
  {id: 5, title: 'message005', content: 'message content 005'},
]

export default class MessageDetail extends Component {
  render () {
    //读取请求路径中的id参数值
    const id = this.props.match.params.id*1

    //根据id得到对应的message详情对象进行显示
    const messageDetail = allMessageDetails.find((detail, index) => id===detail.id)
    // arr.find(): 返回的是第一个满足(返回值为true)条件的detail
    return (
      <ul>
        <li>ID: {id}</li>
        <li>TITLE: {messageDetail.title}</li>
        <li>CONTENT: {messageDetail.content}</li>
      </ul>
    )
  }
}
// 读取请求路径中的id参数值
// 根据id得到对应的message详情对象进行显示

/*
请求参数2种:
1. query参数
  路由的path: /xxx
  请求的路径: /xxx?name=tom&age=18
  ?后面的部分就是query参数: name=tom, age=18
2. param参数
  路由的path: /xxx/:name/:age
  请求的路径: /xxx/jack/18
  param参数: name=jack, age=18
  params.name, params.age
 */

// <a href='/b.html'>B页面</a>
// window.location = '/b.html'    // 编程式导航