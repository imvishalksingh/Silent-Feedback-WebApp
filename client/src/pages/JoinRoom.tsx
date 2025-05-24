import { useState } from "react";
import socket from "../socket";

function JoinRoom() {
  const [roomId, setRoomId] = useState("");
  const [feedback, setFeedback] = useState("");
  const [joined, setJoined] = useState(false);

  const handleJoin = () => {
    if (roomId) {
      socket.emit("join_room", roomId);
      setJoined(true);
    }
  };

  const sendFeedback = () => {
    if (feedback.trim() && roomId) {
      socket.emit("send_feedback", {
        roomId,
        type: "text",
        content: feedback,
      });
      setFeedback(""); // clear after sending
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>JOIN ROOM</h1>
      {!joined ? (
        <div className="flex-div">
          <input
            id="input-room-id"
            type="text"
            placeholder="Enter Room ID"
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
          />
          <button className="room-btn join-btn" onClick={handleJoin}>Join</button>
    
        </div>
      ) : (
        <>
          <h2>Room: {roomId}</h2>
          <textarea
            id="msg-textarea"
            placeholder="Write your feedback..."
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            rows={3}
            cols={40}
          />
          <br />
          <button onClick={sendFeedback}>Send Feedback</button>
        </>
      )}
    </div>
  );
}

export default JoinRoom;
