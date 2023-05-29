import { expect } from "chai";
import request from "supertest";
import app from "../app.js"

describe("Test on /chapter path", () =>{

    let server = null;
    let api = null;
    let token = null;
    let id = null;

    before(async() =>{
        server = await app.listen(8000) 
        api = request(app)
        const user = {
            email: "lucas@mh.com.ar",
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
    describe("post / chapter", () =>{
        it("Should create a new chapter", async() =>{

            const chapter = {
                title: `Prueba ${Math.random()}`,
                manga_id: "6467a41d4fffe0e2c180524c",
                pages: ["http://blog.nicepro.com.br/wp-content/uploads/2017/04/panoramica2.jpg", "http://blog.nicepro.com.br/wp-content/uploads/2017/04/panoramica2.jpg"],
                order: 1,

            }

            const {body, statusCode} = await api.post(`/chapters`)
                            .set('Authorization', `Bearer ${token}`)
                            .send(chapter)
            console.log(body);
            console.log(statusCode);
            expect(statusCode).to.equal(201)
            expect(body).to.have.property("_id")
            expect(body._id.length).to.be.greaterThan(0)
            id = body._id
        })
    })
    describe("delete / chapter", () =>{
        it("Should delete chapters", async() =>{
            const {statusCode} = await api
                .delete(`/chapters/${id}`)
                .set('Authorization', `Bearer ${token}`)
                expect(statusCode).to.equal(200)
        })
    })
    after(async() =>{
        server.close()
    });
})