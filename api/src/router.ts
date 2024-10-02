import express from "express";
import { Response } from "express";
import repoControllers from "./repos/repo.controllers";

const router = express.Router();

router.get("/", (_, res: Response) => {
  console.log(res)
  res.send("Hello wilders")
});

router.use('/repos', repoControllers);


export default router;