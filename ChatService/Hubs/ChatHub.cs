using ChatService.Models;
using Microsoft.AspNetCore.SignalR;
using ChatService.DataService;

namespace ChatService.Hubs;

public class ChatHub : Hub
{   

    private readonly SharedDb _shared;

    public ChatHub(SharedDb shared) => _shared = shared;
    public async Task JoinChat(UserConnection conn)
    {
        await Clients.All.
        SendAsync("JoinSpecificChatRoom", "admin", $"{conn.Username} has joined the chat");
    }

    public async Task JoinSpecificChatRoom(UserConnection conn)
    {
        await Groups.AddToGroupAsync(Context.ConnectionId, conn.ChatRoom);

        _shared.Connections[Context.ConnectionId] = conn;
        await Clients.Group(conn.ChatRoom).SendAsync("JoinSpecificChatRoom", "admin", $"{conn.Username} has joined the chat room {conn.ChatRoom}");
    }

    public async Task SendMessage(string message)
    {
        if(_shared.Connections.TryGetValue(Context.ConnectionId, out UserConnection conn))
        {
            await Clients.Group(conn.ChatRoom).SendAsync("ReceiveSpecificMessage", conn.Username, message);
        }
    }
}