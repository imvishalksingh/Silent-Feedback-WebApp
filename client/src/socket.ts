// socket.js
import { io } from "socket.io-client";

// Replace this with your backend URL/port
const socket = io("http://localhost:3001");

export default socket;
