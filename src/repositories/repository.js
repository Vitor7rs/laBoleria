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

const repository = {
    createCake,
    getCakeByName
}

export default repository;