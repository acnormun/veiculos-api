const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:  false}))
app.use(express.json())
app.use(cors())

let veiculos = [
    {
        "id": "AAA-0102",
        "modelo": "Prisma",
        "anoFabricacao": 2007,
        "marca": "Chevrolet",
        "tipo": "carro",
        "qtdPortas": 4
      },
      {
        "id": "BBB-0304",
        "modelo": "Fat Boy",
        "anoFabricacao": 2015,
        "marca": "Harley Davidson",
        "tipo": "moto",
        "rodas": 2,
        "passageiros": 2
      }
]

app.get('/veiculos', (req, res) => {
    return res.json(veiculos)
})

app.post('/veiculos', (req, res) => {
    const body = req.body

    if(!body){
        return res.status(400).end()
    }

    veiculos.push(body)
    return res.json(veiculos)
})

app.listen(3030, () => {
    console.log('Servidor ativo na porta 3030');
})

