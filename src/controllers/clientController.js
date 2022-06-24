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


export async function clientOrders(req, res){
    const clientId = req.params.id
    try{
        const client = await repository.getClientById(clientId)
        if (client.rowCount <= 0) {
            return res.status(404).send("Client id not found")
        }
        const ordersData = await repository.getOrdersByClientId(clientId)
        
        if (ordersData.rowCount <= 0) {
            return res.status(404).send([])
        }

        const orders = ordersData.rows.map(
            order => (
                {
                    orderId: order.orderId,
                    quantity: order.quantity,
                    createdAt: order.createdAt,
                    totalPrice: order.totalPrice,
                    cakeName: order.cakeName
                }
            )
        )
        return res.status(200).send(orders)

    }catch(error){
        console.log(error);
        return res.status(500).send("INTERNAL SERVER ERROR")
    }
}