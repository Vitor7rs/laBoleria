import { Router } from "express";
import { getOrders, postOrder } from "../controllers/orderController.js";
import schemaValidator from "../middlewares/schemaValidator.js";
import orderSchema from "../schemas/orderSchema.js";

const ordersRouter = Router();

ordersRouter.post("/order", schemaValidator(orderSchema) ,postOrder);
ordersRouter.get("/orders", getOrders);
ordersRouter.get("/orders/:id");

export default ordersRouter;