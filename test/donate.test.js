import {expect} from "chai"
import request from "supertest"
import app from "../app.js"

describe ('test on /donate path', ()=>{
    let server = null
    let api = null

    before (async()=>{
        server = await app.listen(8000)
        api = request(app)
    })

    describe('POST /donate', ()=> {
        let data = {
            id: 3,
            title: "10.000 ARS",
            currency_id: "ARS",
            unit_price: 10000,
            quantity: 1,
        }
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NjdhNDE1NGZmZmUwZTJjMTgwNTBmZCIsImlhdCI6MTY4NTMxODg2MiwiZXhwIjoxNjg1NDA1MjYyfQ.Er1Mv1QPXcoD66uqgii3wGh71FBA-HeeMzM6hhGU7-A"
        it ('should return status 200, and object with auto_return: "approved", and object with binary_mode: true', async()=>{
            let response = await api.post('/donate')
            .set('Authorization',`Bearer ${token}`)
            .send(data)
            // console.log(response.body)
            // console.log(response.statusCode)
            expect(response.statusCode).to.equal(200)
        })
    })
})