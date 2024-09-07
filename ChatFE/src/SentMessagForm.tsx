import React from 'react'
import { TextField, Box, Button} from '@mui/material';

const SentMessagForm = ({sendmessage}) => {
  const [message, setMessage] = React.useState('')
  const onSubmit = () => {
    sendmessage(message);
    setMessage('');  
  };
  return (
    <Box
     sx={{
         display:'flex',
         flexDirection:'column',
         gap:2
     }}
     >
     <TextField  label="Username" variant="outlined" value={message} onChange={(e) => setMessage(e.target.value)}/>

        <Button
        sx={{
            border:'1px solid black',
            borderRadius:'2rem',
        }}
        onClick={(e) => onSubmit(e.target.value)}
        >Join</Button>
     </Box>
  )
}

export default SentMessagForm;