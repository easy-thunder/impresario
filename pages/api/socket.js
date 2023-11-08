import { Server } from "socket.io";

export default function SocketHandler(req, res) {
  if (res.socket.server.io) {
    console.log("Already set up");
    res.end();
    return;
  }

  const io = new Server(res.socket.server, { path: '/api/socket', addTrailingSlash: false, transports:['polling'] });
  res.socket.server.io = io;

  io.on("connection", (socket) => {
    console.log(`Socket connected: ${socket.id}`);

    // Handle disconnection
    socket.on("disconnect", (reason) => {
      console.log(`Socket disconnected: ${socket.id}, reason: ${reason}`);

      // You can add custom logic here to handle the disconnection, such as cleaning up resources.
    });

    socket.on("send-message", (obj) => {
      io.emit("receive-message", obj);
    });
  });

  console.log("Setting up socket");
  res.end();
}