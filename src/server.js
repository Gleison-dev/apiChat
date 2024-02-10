import express from "express";
import { userRoute } from "./routes/user.route.js";
import { messageRoute } from "./routes/message.route.js"

const app = express();
const port = 3000;

app.use(express.json());
app.use(userRoute);
app.use(messageRoute);

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}.`)
});