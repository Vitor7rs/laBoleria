import repository from "../repositories/repository.js";



// faltou o link retornar o status certo
export async function postCakes(req, res){
    const cake = req.body;
    try{
        const existingCake = await repository.getCakeByName(cake.name);
        if(existingCake.rowCount>0){
            return res.status(409).send("There is already a cake with that name")
        }
        await repository.createCake(cake.name, cake.price, cake.image, cake.description)
        return res.status(201).send("Created");

    }catch(error){
        console.log(error);
        return res.status(500).send("ERRO!")
    }
}   