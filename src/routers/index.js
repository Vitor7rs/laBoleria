import { Router } from "express";
import cakesRouter from "./cakesRouter.js";

const router = Router();

//routes

router.use(cakesRouter);

export default router;