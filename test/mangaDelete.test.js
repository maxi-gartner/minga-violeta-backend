/* import { expect } from "chai";
import request from "supertest";
import app from "../app.js"

describe("Test delete /mangas path", () =>{

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

    describe("delete / mangas", () =>{
        it("Should delete manga", async() =>{
            const id = "6470d4306b77030a71597830"

            const deleteManga = await api
                .delete(`/mangas/${id}`)
                .set('Authorization', `Bearer ${token}`)
                console.log(deleteManga.statusCode);
        })
    })
    after(async() =>{
        server.close()
    });
}) */