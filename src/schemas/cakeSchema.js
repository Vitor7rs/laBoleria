import joi from "joi";

const cakeSchema = joi.object({
    name: joi.string().required(),
    price: joi.number().required(),
    description: joi.string(),
    image: joi.string().uri().required()
});

export default cakeSchema;
//como validar valor minimo numero e definir as casas decimais em price

//como validar tamanho do nome