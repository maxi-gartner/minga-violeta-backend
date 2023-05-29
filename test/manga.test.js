import { expect } from "chai";
import request from "supertest";
import app from "../app.js"

describe("Test post and delete /mangas path", () =>{

    let server = null;
    let api = null;
    let token = null;
    let id = null;

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
    describe("get / mangas", () =>{
        it("on success should return status 200, success ok and array of mangas", async() =>{
            const {body, statusCode} = await api.get(`/mangas`)
            .set('Authorization', `Bearer ${token}`)
            expect(statusCode).to.equal(200)
            expect(body).to.have.property('success')
            expect(body.success).to.equal(true)
            expect(body).to.have.property('response')
            expect(body.response.length).to.be.greaterThan(0)//la longitud del array sea mayor a 0
        })
    })

    describe("post / mangas", () =>{
        it("Should create a new manga", async() =>{

            const manga = {
                title: `Prueba ${Math.random()}`,
                description: "Prueba test",
                author_id: "6467a4154fffe0e2c1805112",
                category_id: "6467a4144fffe0e2c18050f6"
            }

            const {body, statusCode} = await api.post(`/mangas`)
                            .set('Authorization', `Bearer ${token}`)
                            .send(manga)
            //console.log(body);
            //console.log(statusCode);
            expect(statusCode).to.equal(201)
            expect(body).to.have.property("id")
            expect(body.id.length).to.be.greaterThan(0)
            id = body.id
        })
    })
    describe("delete / mangas", () =>{
        it("Should delete manga", async() =>{

            const {statusCode} = await api
                .delete(`/mangas/${id}`)
                .set('Authorization', `Bearer ${token}`)
                expect(statusCode).to.equal(200)
        })
    })
})