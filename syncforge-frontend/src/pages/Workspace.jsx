import { useState } from "react";

function Workspace() {
  const [roomId, setRoomId] = useState("");

  const createRoom = () => {
    const randomId =
      "SF-" +
      Math.floor(
        1000 + Math.random() * 9000
      );

    setRoomId(randomId);
  };

  return (
    <div className="hero">
      <h1 className="title">
        Workspace Dashboard
      </h1>

      <p className="subtitle">
        Create or Join a Coding Room
      </p>

      <div className="buttons">
        <button
          className="btn"
          onClick={createRoom}
        >
          Create Room
        </button>

        <button className="btn">
          Join Room
        </button>
      </div>

      {roomId && (
        <div className="room-card">
          <h2>Room Created</h2>

          <p>Room ID: {roomId}</p>
        </div>
      )}
    </div>
  );
}

export default Workspace;