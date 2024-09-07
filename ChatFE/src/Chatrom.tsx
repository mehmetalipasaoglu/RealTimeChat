import React from "react";
import { TextField, Box, Button } from "@mui/material";
import MessageContainer from "./MessageContainer";
import SentMessagForm from "./SentMessagForm";
const Chatrom = ({ messages, sendmessage }) => {
	return (
		<>
			<SentMessagForm sendmessage={sendmessage} />
			<MessageContainer messages={messages} />
		</>
	)
};

export default Chatrom;
