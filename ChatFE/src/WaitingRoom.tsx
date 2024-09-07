import {useState} from 'react'
import { TextField, Box, Button} from '@mui/material';

const WaitingRoom = ({ joinChatRoom }) => {
    const [userName, setUserName] = useState('');
    const [chatRoom, setChatRoom] = useState('');
  return (
   <>
     <Box
     sx={{
         display:'flex',
         flexDirection:'column',
         gap:2
     }}
     >
     <TextField  label="Username" variant="outlined" value={userName} onChange={(e) => setUserName(e.target.value)}/>
     <TextField  label="Chat Room" variant="outlined" value={chatRoom} onChange={(e) => setChatRoom(e.target.value)}/>

        <Button
        sx={{
            border:'1px solid black',
            borderRadius:'2rem',
        }}
        onClick={() => joinChatRoom(userName, chatRoom)}
        >Join</Button>
     </Box>
   </>
  )
}

export default WaitingRoom;