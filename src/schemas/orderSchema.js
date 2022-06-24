import Joi from "joi";

const orderSchema = Joi.object({
    clientId: Joi.number().integer().required(),
    cakeId: Joi.number().integer().required(),
    quantity: Joi.number().integer().less(5).greater(0)
})

export default orderSchema;