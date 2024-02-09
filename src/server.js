import express from "express";
import { userRoute } from "./routes/user.route.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use(userRoute);

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}.`)
});