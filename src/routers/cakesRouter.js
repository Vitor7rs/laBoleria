import { Router } from "express";
import { postCakes } from "../controllers/cakesController.js";
import schemaValidator from "../middlewares/schemaValidator.js"
import cakeSchema from "../schemas/cakeSchema.js"

const cakesRouter = Router();

cakesRouter.post("/cakes", schemaValidator(cakeSchema),postCakes);

export default cakesRouter;