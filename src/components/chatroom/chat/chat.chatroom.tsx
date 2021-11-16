import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./chat.chatroom.scss";
import Form from "./form/form.chatroom";
import ChatLog from "./chatlog/chatlog.chatroom";
import Header from "./header/header.chatroom";

type ChatProps = {
  chats: any;
  setChats: Function;
  className?: string;
};

function Chat({ chats, setChats }: ChatProps) {
  let { id }: any = useParams();

  let [userId, setUserId] = useState(0);

  return (
    <div className="Chat">
      <Header
        id={id}
        name={chats[id - 1].name}
        img={chats[id - 1].img}
        userId={userId}
        setUserId={setUserId}
      />
      <ChatLog id={id} chats={chats[id - 1].chats} url={chats[id - 1].img} />
      <Form
        // className="inputForm"
        id={id}
        userId={userId}
        chats={chats}
        setChats={setChats}
      />
    </div>
  );
}

export default Chat;
