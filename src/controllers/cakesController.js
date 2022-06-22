import db from "../config/db.js"

export async function postCakes(req, res){
    try{
        const cakes = await db.query(`
            SELECT * FROM cakes
        `);
        console.log(cakes.rows)
        return res.status(200).send(cakes.rows);
    }catch(error){
        console.log(error);
        return res.status(500).send("ERRO!")
    }
}   