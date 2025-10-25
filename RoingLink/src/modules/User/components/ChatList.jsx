export default function ChatList({ chats, onSelect }) {
  return (
    <div>
      {chats.map((chat) => (
        <div
          key={chat.id}
          onClick={() => onSelect(chat)}
          className="flex justify-between items-center bg-white p-3 rounded-lg bg-white rounded-2xl shadow-sm border border-gray-100 p-5 mb-2 cursor-pointer"
        >
          <div>
            <h3 className="font-medium text-gray-800">{chat.name}</h3>
            <p className="text-xs text-gray-500">{chat.lastMsg}</p>
          </div>
          <span className="text-xs text-gray-400">{chat.time}</span>
        </div>
      ))}
    </div>
  );
}
