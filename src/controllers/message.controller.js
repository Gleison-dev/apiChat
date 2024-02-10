import { Message } from "../models/Message.model.js";

let listMessage = [];

function createMessage(message, sender, receiver){
    const newMessage = new Message(message, sender, receiver);
    listMessage.push(newMessage);
    return newMessage;
}

function getAllMessages(){
    return listMessage;
}

function getMessageById(id){
    let messageId = listMessage.find(data => data.id === id);
    if(messageId){
        return messageId;
    }else{
        return "ID não encontrado!"
    }
}

function getMessageBySender(sender){
    let messageSender = listMessage.find(data => data.sender === sender);
    if(messageSender){
        return messageSender;
    }else{
        return "Sender não encontrado!"
    } 
}

function updateMessage(id, newMessage){
    let messageId = listMessage.find(data => data.id === id);
    if(messageId){
        let messageIndex = listMessage.findIndex(data => data.id === id);
        listMessage[messageIndex].message = newMessage;
        return listMessage[messageIndex];
    }else{
        return "ID não encontrado!"
    }
}

function deleteMessage(id){
    let messageIndex = listMessage.findIndex(data => data.id === id);
    if(messageIndex){
        listMessage.splice(messageIndex, 1);
        return "Mensagem deletada com sucesso!";
    }else{
        return "ID não encontrado!" 
    }
}

export { createMessage, getAllMessages, getMessageById, getMessageBySender, updateMessage, deleteMessage }