import { expect } from "chai";
import request from "supertest";
import app from "../app.js"

describe("Test on /author path", () =>{

    let server = null;
    let api = null;

    before(async() =>{
        server = await app.listen(8000) 
        api = request(app)
    });

    describe("get / author", () =>{
        it("on success should return status 200, success ok and array of author", async() =>{
            const {body, statusCode} = await api.get(`/authors`)
            //console.log(body);
            //console.log(statusCode);
            expect(statusCode).to.equal(200)
            expect(body).to.have.property('success')
            expect(body.success).to.equal(true)
            expect(body).to.have.property('authors')
            expect(body.authors.length).to.be.greaterThan(0)//la longitud del array sea mayor a 0
        })
    })
    after(async() =>{
        server.close()
    });
})