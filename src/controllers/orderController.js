import repository from "../repositories/repository.js";

export async function postOrder(req, res){
    const {clientId, cakeId, quantity} = req.body

    try{
        const client = await repository.getClientById(clientId)
        if(client.rowCount <= 0){
            return res.status(404).send("Client id not found")
        }

        const cakePrice = await repository.getCakePriceById(cakeId)
        if(cakePrice.rowCount <= 0){
            return res.status(404).send("Cake id not found")
        }
        
        let totalPrice = (cakePrice.rows[0].price * quantity)
        await repository.createOrder(clientId, cakeId, quantity, totalPrice)
        
        return res.status(201).send('Created');

    }catch(error){
        console.log(error)
        return res.status(500).send("INTERNAL SERVER ERROR")
    }
}