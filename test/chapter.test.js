import { expect } from "chai";
import request from "supertest";
import app from "../app.js"

describe("Test on /chapter path", () =>{

    let server = null;
    let api = null;
    let token = null;

    before(async() =>{
        server = await app.listen(8000) 
        api = request(app)
        const user = {
            email: "igna@mh.com.ar",
            password: "hola1234"
        }
        const userLoged = await api.post(`/auth/signin`)
                            .send(user)
        token = userLoged.body.token
    });

    describe("get / chapter", () =>{
        it("on success should return status 200, success ok and array of chapter", async() =>{
            const {body, statusCode} = await api.get(`/chapters`)
                            .set('Authorization', `Bearer ${token}`)
            //console.log(body);
            //console.log(statusCode);
            expect(statusCode).to.equal(200)
            expect(body).to.have.property('success')
            expect(body.success).to.equal(true)
            expect(body).to.have.property('chapters')
            expect(body.chapters.length).to.be.greaterThan(0)//la longitud del array sea mayor a 0
        })
    })
    after(async() =>{
        server.close()
    });
})