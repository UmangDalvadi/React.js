import React, { ChangeEvent, FormEvent, useEffect, useMemo, useState } from 'react';
import { io, Socket } from 'socket.io-client';
import './App.css';

function App(): JSX.Element {
  const [msg, setMsg] = useState<string>("");
  const [msgs, setMsgs] = useState<string[]>([]);
  const [room, setRoom] = useState<string>("");
  const [joinRoom, setJoinRoom] = useState<string>("");
  const [socketId, setSocketId] = useState<string>("");
  
  const socket: Socket = useMemo(() => io("http://localhost:3000"), []);

  useEffect(() => {
    // Uncomment and modify event listeners as needed
    socket.on("connect", () => {
      setSocketId(socket.id);
      console.log("connected:", socket.id);
    });

    socket.on("recived-msg", (data) => {
      // console.log(`${data}`);
      setMsgs((m) => [...m, data]);
    });

    // socket.on("welcome", (s) => {
    //   console.log(s);
    // });

    return () => {
      socket.disconnect();
    };
  }, [socket]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    socket.emit("message", { msg, room });
    setMsg("");
  };
  const handleSubmitRoom = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    socket.emit("join-room", joinRoom);
    setJoinRoom("");
  };

  const handleChangeMsg = (e: ChangeEvent<HTMLInputElement>): void => {
    setMsg(e.target.value);
  };
  const handleChangeRoom = (e: ChangeEvent<HTMLInputElement>): void => {
    setRoom(e.target.value);
  };

  return (
    <div>
      <b>Socket.io:</b> {socketId}

      <form action="" onSubmit={handleSubmitRoom}>
        <input
          type="text"
          placeholder='join-room'
          value={joinRoom}
          onChange={(e)=> setJoinRoom(e.target.value)}
        />
        <button type="submit">Join Room</button>
      </form>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder='message'
          value={msg}
          onChange={handleChangeMsg}
        />
        <input
          type="text"
          placeholder='room'
          value={room}
          onChange={handleChangeRoom}
        />
        <button type="submit">Send</button>
      </form>

      <div>
        {msgs.map((m, i) => (
          <p key={i}>
            {m}
          </p>
        ))}
      </div>
    </div>
  );
}

export default App;
