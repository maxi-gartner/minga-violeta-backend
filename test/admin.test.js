import { expect } from "chai";
import request from "supertest";
import app from "../app.js";

describe("Rol de administrador", () => {
    let server = null;
    let api = null;
    let role = null;

    before(async () => {
        server = app.listen(8000);
        api = request(app);
        const user = {
            email: "silvina@mh.com.ar",
            password: "hola1234"
        };
        const userLogged = await api.post("/auth/signin").send(user);
        role = userLogged.body.role;
    });

    after(() => {
        server.close();
    });

    it("Debería permitir el acceso a la ruta del administrador", async () => {
        const res = await api
            .get("/admin/:url")
            .set("role", role)
            .expect(200);

        expect(res.body.message).to.equal("Acceso permitido");
    });
});
