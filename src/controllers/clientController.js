import repository from "../repositories/repository.js";

export async function postClient(req, res){
    const client = req.body;
    try{
        await repository.createClient(client.name, client.address, client.phone);
        return res.status(201).send("Created!");
    }catch(error){
        console.log(error);
        return res.status(500).send("INTERNAL SERVER ERROR")
    }
}