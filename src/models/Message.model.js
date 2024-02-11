import { v4 as uuidv4 } from 'uuid';

class Message{
    constructor(message, sender, receiver){
        this.id = uuidv4();
        this.message = message;
        this.sender = sender;
        this.receiver = receiver;
        this.favorite = false;
        this.created_at = new Date().toUTCString();
    }
}

export { Message }