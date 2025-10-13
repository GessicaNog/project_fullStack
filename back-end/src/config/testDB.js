import db from "./db.js";

async function testConnection() {

    const { data, error } = await db.from('produto').select('*')
    if (error) console.error('Erro:', error)
    else console.log('Dados:', data)

}

testConnection();