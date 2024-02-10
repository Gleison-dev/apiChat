import { Router } from "express";
import { 
    createMessage,
    getAllMessages,
    getMessageById,
    getMessageBySender,
    updateMessage,
    deleteMessage
 } from "../controllers/message.controller.js";

const messageRoute = Router();

messageRoute.post("/new-message", (req, res) => {
    const { message, sender, receiver } = req.body;
    const newMessage = createMessage(message, sender, receiver);
    res.status(201).json({newMessage});
});

messageRoute.get("/messages", (req, res) => {
    const messages = getAllMessages();
    res.json({messages});
});

messageRoute.get("/message-find-id/:id", (req, res) => {
    const id = req.params.id;
    const messageFindId = getMessageById(id);
    res.json({messageFindId});
});

messageRoute.get("/message-find-sender", (req, res) => {
    const { sender } = req.body;
    const messageFindSender = getMessageBySender(sender);
    res.json({messageFindSender});
});

messageRoute.patch("/message-update/:id", (req, res) => {
    const id = req.params.id;
    const { newMessage } = req.body;
    const messageUpdate = updateMessage(id, newMessage);
    res.json({messageUpdate});
});

messageRoute.delete("/delete-message/:id", (req, res) => {
    const id = req.params.id;
    const delMessage = deleteMessage(id);
    res.json({delMessage});
});

export { messageRoute }