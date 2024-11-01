const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

//MÉTODO DE CONEXÃO COM O BANCO DE DADOS
async function connect () {
    const mysql = require('mysql2/promise')
    if (global.connection && global.connection.state !== 'disconnected') {
        return global.connection
    }

    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'Le@n223380',
        database: 'lista07Angular',
        port: 3306
    })

    console.log('BANCO CONECTADO!!!')
    global.connection = connection
    return connection
}

//TESTANDO A CONEXÃO
connect();

//RETORNANDO OS CLIENTES
app.get('/clientes', async (req, res) => {
    const conn = await connect()
    const clientes = await conn.query('SELECT * FROM Clientes')
    res.send(clientes[0])
})

app.get('/clientes/:id', async (req, res) => {
    const conn = await connect()
    const id = req.params.id
    const result = await conn.query('SELECT * FROM Clientes WHERE id = ?', id)
    res.send(result[0])
})

app.post('/clientes', async (req, res) => {
    const conn = await connect()
    const { nome } = req.body
    try {
        const [result] = await conn.query(
            'INSERT INTO Clientes (nome) VALUES (?)', 
            [nome]
        );

        res.send({ message: 'Cliente inserido com sucesso', result });
    } 
    
    catch (error) {
        res.status(500).send({ error: error.message });
    }
})

app.put('/clientes/:id', async (req, res) => {
    const conn = await connect()
    const id = req.params.id
    const { nome } = req.body
    try {
        const [result] = await conn.query (
            'UPDATE Clientes SET nome = ? WHERE id = ?',
            [nome, id]
        )
        res.send({ message: 'Cliente atualizado com sucesso', result }) 
    }

    catch (error) {
        res.status(500).send({ error: error.message })
    }
})

app.delete('/clientes/:id', async (req, res) => {
    const conn = await connect()
    const id = req.params.id
    try {
        const result = conn.query(
            'DELETE FROM Clientes WHERE id = ?', 
            [id]
        )

        res.send({ message: 'Cliente excluído com sucesso.' })
    }

    catch (error){
        res.status(500).send({ error: error.message })
    }
})

app.listen(3000, () => {
    console.log('Servidor funcionando na porta 3000.')
})