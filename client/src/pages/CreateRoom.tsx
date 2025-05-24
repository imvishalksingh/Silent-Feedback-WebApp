import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import socket from "../socket";

function CreateRoom() {
  const { uuid } = useParams();
  const [roomid, setRoom] = useState('');
  //const [feedbacks, setFeedbacks] = useState([]);
  type Feedback = {
  roomId: string;
  type: string;
  content: string;
};

const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);


  useEffect(() => {
    if (uuid) {
      setRoom(uuid);
    }
  }, [uuid]);

  useEffect(() => {
  if (roomid) {
    socket.emit("join_room", roomid); // ✅ Join room like attendees
    console.log("Host joined room:", roomid);

    socket.on("new_feedback", (data) => {
      console.log("New feedback received:", data);
      setFeedbacks((prev) => [...prev, data]);
    });

    return () => {
      socket.off("new_feedback");
    };
  }
}, [roomid]);


  return (
    <>
      <h1>Room Created</h1>
      <h2>Copy the Room ID</h2>
      <p>Room ID: <code>{roomid}</code></p>

      <h3>Live Feedback</h3>
      <ul>
        {feedbacks.map((fb, i) => (
          <li key={i}>
            <strong>{fb.type}</strong>: {fb.content}
          </li>
        ))}
      </ul>
    </>
  );
}

export default CreateRoom;
