using System.Collections.Concurrent;
using ChatService.Models;

namespace ChatService.DataService;

public class SharedDb
{
    private readonly ConcurrentDictionary<string, UserConnection> _connections = new();

    public ConcurrentDictionary<string, UserConnection> Connections => _connections;
}