import notfound from '@/app/notfound'
import ChatBase from '@/components/chat/ChatBase'
import { fetchChats } from '@/fetch/chatsFetch'
import { fetchChatGroup,fetchChatUsers } from '@/fetch/groupFetch'
import React from 'react'

const chat = async({params}: {params:{id:string}}) => {
  if(params.id.length !== 36){
    return notfound();
  }
  
  const group:ChatGroupType | null = await fetchChatGroup(params.id);

  if(group === null){
    return notfound();
  }

  const users:Array<GroupChatUserType> | [] = await fetchChatUsers(params.id)
  const chats:Array<MessageType> | [] = await fetchChats(params.id)
  return (
    <div>
      <h1>Hello chat</h1>
      <ChatBase users={users} group={group} oldMessages={chats}/>
    </div>
  )
}

export default chat
