import express from "express";
import router from "./router"
const app = express();

app.use('/api', router)

app.listen(3000, () => {
  console.log(`Serveur is listenning on http://localhost:3000`);
});