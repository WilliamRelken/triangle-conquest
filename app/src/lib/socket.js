import { Server } from "socket.io";

// Not sure how to make build work in .ts
export default function injectSocket(server) {
  const io = new Server(server)

  io.on('connection', (socket) => {
    // Generate a random username and send it to the client to display it
    let username = `User ${Math.round(Math.random() * 999999)}`;
    socket.emit('name', username);

    // Receive incoming messages and broadcast them
    socket.on('message', (message) => {
      io.emit('message', {
        from: username,
        message: message,
        time: new Date().toLocaleString()
      });
    });
  })
}