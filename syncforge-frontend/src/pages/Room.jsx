import { useParams } from "react-router-dom";

function Room() {
  const { roomId } = useParams();

  return (
    <div className="hero">
      <h1 className="title">
        Room {roomId}
      </h1>

      <p className="subtitle">
        Collaborative coding session
      </p>
    </div>
  );
}

export default Room;