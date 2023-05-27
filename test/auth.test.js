import { expect } from "chai";
import request from "supertest";
import app from "../app.js"

describe("Test on /auth", () => {

    let server = null;
    let api = null;

    before(async() =>{
        server = await app.listen(8000) 
        api = request(app)
    });

    describe("get / auth", () =>{
        it("on success should return status 200, success ok and array of users", async() =>{
            const {body, statusCode} = await api.get(`/auth`)
            //console.log(body);
            //console.log(statusCode);
            expect(statusCode).to.equal(200)
            expect(body).to.have.property('success')
            expect(body.success).to.equal(true)
            expect(body).to.have.property('users')
            expect(body.users.length).to.be.greaterThan(0)//la longitud del array sea mayor a 0
        })
    })
    after(async() =>{
        server.close()
    });
})