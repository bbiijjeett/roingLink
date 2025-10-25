import { useState } from "react";
import ChatList from "../components/ChatList";

export default function Chat() {
  const [selectedChat, setSelectedChat] = useState(null);

  const chats = [
    { id: 1, name: "Ravi Kumar", lastMsg: "On the way!", time: "2m ago" },
    { id: 2, name: "Sunita Devi", lastMsg: "Task completed!", time: "1h ago" },
  ];

  if (selectedChat) {
    return (
      <div className="flex flex-col h-full pb-16">
        {/* Chat header */}
        <div className="p-3 bg-white flex items-center justify-between border-b">
          <button onClick={() => setSelectedChat(null)}>←</button>
          <h2 className="font-semibold">{selectedChat.name}</h2>
          <span></span>
        </div>

        {/* Chat messages (placeholder) */}
        <div className="flex-1 p-3 overflow-y-auto">
          <div className="text-sm text-gray-500 text-center mt-10">
            Messages with {selectedChat.name} will appear here.
          </div>
        </div>

        {/* Chat input */}
        <div className="p-3 bg-white border-t flex gap-2">
          <input
            className="flex-1 border rounded-full px-3 py-2 text-sm"
            placeholder="Type a message..."
          />
          <button className="bg-blue-600 text-white px-4 rounded-full text-sm">
            Send
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto space-y-8 bg-grey-50 min-h-screen">
      <h2 className="text-lg font-semibold mb-3">Chats</h2>

      {/* Search */}
      <input
        className="w-full border rounded-full px-4 py-2 text-sm mb-4"
        placeholder="Search helper..."
      />

      {/* Chat List */}
      {/* {chats.map((chat) => (
        <div
          key={chat.id}
          className="flex justify-between items-center bg-white p-3 rounded-lg shadow-sm border mb-2 cursor-pointer"
          onClick={() => setSelectedChat(chat)}
        >
          <div>
            <h3 className="font-medium text-gray-800">{chat.name}</h3>
            <p className="text-xs text-gray-500">{chat.lastMsg}</p>
          </div>
          <span className="text-xs text-gray-400">{chat.time}</span>
        </div>
      ))} */}

      <ChatList chats={chats} onSelect={setSelectedChat} />
    </div>
  );
}
