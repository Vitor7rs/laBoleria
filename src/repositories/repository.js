import db from "../config/db.js"

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

async function createClient(name, address, phone){
    return db.query(
        `INSERT INTO clients (name, address, phone)
         VALUES($1, $2, $3)`, [name, address, phone]
    );
}

const repository = {
    createCake,
    getCakeByName,
    createClient
}

export default repository;