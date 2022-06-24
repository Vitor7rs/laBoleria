import db from "../config/db.js"

// =========================================================================

async function getCakeByName(name){
    return db.query(
        `SELECT * FROM cakes WHERE name=$1`, [name]
    )
}

async function createCake(name, price, image, description){
    return db.query(
        `INSERT INTO cakes (name, price, image, description) 
         VALUES ($1, $2, $3, $4)`, [name, price, image, description]
    );
}

// =========================================================================

async function createClient(name, address, phone){
    return db.query(
        `INSERT INTO clients (name, address, phone)
         VALUES($1, $2, $3)`, [name, address, phone]
    );
}

async function getClientById(clientId){
    return db.query(
        `SELECT * FROM clients WHERE clients.id=$1`,[clientId]
    );
}

// =========================================================================

async function getCakePriceById(cakeId){
    return db.query(
        `SELECT cakes.price 
         FROM cakes
         WHERE cakes.id = $1`,[cakeId]
    )
}

async function createOrder(clientId, cakeId, quantity, totalPrice){
    return db.query(
        `INSERT INTO orders ("clientId", "cakeId", quantity, "totalPrice")
         VALUES ($1,$2,$3, $4)`, [clientId, cakeId, quantity, totalPrice]
    );
}

// =========================================================================

const repository = {
    createCake,
    getCakeByName,
    createClient,
    getClientById,
    createOrder,
    getCakePriceById
}

export default repository;