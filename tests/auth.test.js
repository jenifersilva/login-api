const request = require("supertest");
const { expect } = require("chai");
const app = require("../app");

describe("Login API", () => {
  it("deve retornar sucesso para login válido", async () => {
    const resposta = await request(app)
      .post("/login")
      .send({ login: "adminuser", password: "adminpass" });
    expect(resposta.status).to.equal(200);
    expect(resposta.body).to.have.property(
      "message",
      "Login realizado com sucesso!"
    );
  });

  it("deve falhar se login não for informado", async () => {
    const resposta = await request(app)
      .post("/login")
      .send({ password: "adminpass" });
    expect(resposta.status).to.equal(400);
    expect(resposta.body).to.have.property(
      "message",
      "Login e senha devem ser informados."
    );
  });

  it("deve falhar se senha não for informada", async () => {
    const resposta = await request(app)
      .post("/login")
      .send({ login: "adminuser" });
    expect(resposta.status).to.equal(400);
    expect(resposta.body).to.have.property(
      "message",
      "Login e senha devem ser informados."
    );
  });

  it("deve falhar se login tiver menos de 6 caracteres", async () => {
    const resposta = await request(app)
      .post("/login")
      .send({ login: "admin", password: "adminpass" });
    expect(resposta.status).to.equal(400);
    expect(resposta.body).to.have.property(
      "message",
      "Login deve ter mais que 5 caracteres."
    );
  });

  it("deve falhar se senha tiver menos de 6 caracteres", async () => {
    const resposta = await request(app)
      .post("/login")
      .send({ login: "adminuser", password: "admin" });
    expect(resposta.status).to.equal(400);
    expect(resposta.body).to.have.property(
      "message",
      "Senha deve ter mais que 5 caracteres."
    );
  });

  it("deve falhar se credenciais estiverem incorretas", async () => {
    const resposta = await request(app)
      .post("/login")
      .send({ login: "adminuser", password: "wrongpass" });
    expect(resposta.status).to.equal(400);
    expect(resposta.body).to.have.property("message", "Credenciais inválidas.");
  });
});
