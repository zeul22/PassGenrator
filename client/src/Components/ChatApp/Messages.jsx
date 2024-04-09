import React from 'react'
import Message from './Message.jsx'

const Messages = () => {
  return (
    <div className='px-4 flex-1 overflow-auto'>
        <Message incoming={true}/>
        <Message />
        <Message incoming={true}/>
        <Message />
        <Message incoming={true}/>
        <Message incoming={true}/>
        <Message />
        <Message incoming={true}/>
        <Message />
        <Message incoming={true}/>
    </div>
  )
}

export default Messages