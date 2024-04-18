import { log } from 'console';
import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';

const port = 3000;
const app = express();
const server = createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
        credentials: true
    }
});

app.get('/', (req, res) => {
    res.send("server is getting");
})

io.on("connection", (socket) => {
    console.log("socket connected: ", socket.id);

    socket.on("message", ({ msg, room }) => {
        console.log(`${socket.id}: ${msg}`);
        socket.to(room).emit("recived-msg", msg);
        // io.emit(`message recived from ${socket.id}: ${data}`);
    });

    socket.on("join-room", (room) => {
        socket.join(room);
    })

    socket.on("disconnect", () => {
        console.log("User Disconnected: ", socket.id);
    })
})


server.listen(port, () => {
    console.log(`server is running on ${port}`)
})