import '../App.css';
import { useNavigate } from 'react-router-dom' ;
import { v4 as uuidv4 } from 'uuid';

function Home(){
    const navigate=useNavigate()

    function handleCreateRoomId(){
        const roomid=uuidv4();
        navigate(`/createRoom/${roomid}`)
    }

    return(
        <>
        <div className="home">
        <button type="button" className='room-btn' onClick={handleCreateRoomId}>Create Room</button>
        <button type="button" className='room-btn' onClick={() => navigate('/joinroom')}>Join Room</button>
        </div>
        </>
    )
}

export default Home