import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Workspace() {
  const [roomId, setRoomId] = useState("");
  const [joinRoomId, setJoinRoomId] = useState("");

  const navigate = useNavigate();

  const createRoom = () => {
    const randomId =
      "SF-" +
      Math.floor(1000 + Math.random() * 9000);

    setRoomId(randomId);
  };

  const copyRoomId = () => {
    navigator.clipboard.writeText(roomId);
    alert("Room ID copied!");
  };

  const joinRoom = () => {
    if (joinRoomId.trim() === "") {
      alert("Enter a Room ID");
      return;
    }

    navigate(`/room/${joinRoomId}`);
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
      </div>

      {roomId && (
        <div className="room-card">
          <h2>Room Created</h2>

          <p>Room ID: {roomId}</p>

          <button
            className="btn"
            onClick={copyRoomId}
          >
            Copy Room ID
          </button>
        </div>
      )}

      <div
        style={{
          marginTop: "40px",
        }}
      >
        <input
          type="text"
          placeholder="Enter Room ID"
          value={joinRoomId}
          onChange={(e) =>
            setJoinRoomId(e.target.value)
          }
          className="room-input"
        />

        <button
          className="btn"
          onClick={joinRoom}
        >
          Join Room
        </button>
      </div>
    </div>
  );
}

export default Workspace;