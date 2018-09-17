const {ChatModel} = require('../db/modules')

module.exports =function (server) {
  //绑定服务器
  const io=require('socket.io')(server)
  //监听客户端与服务器的连接
  io.on('connection',function (socket) {
    console.log('有一个客户端连接上了服务器');
    //绑定监听,接收客户端发送的消息
    socket.on('sendMsg',function ({from,to,content}) {
      console.log('服务器接收到客户端发送的消息:',{from,to,content});
      //处理数据(保存消息)
      //准备chatMsg对象的相关数据
      const chat_id =[from,to].sort().join('_')  //from_to或者to_from
      const create_time = Date.now()
      new ChatModel({from,to,content,chat_id,create_time}).save(function (error,chatMsgs) {
        //向连接上的客户端发消息
        io.emit('receiveMsg',chatMsgs)
      })
    })
  })
}