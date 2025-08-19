const request = require("supertest");
const { expect } = require("chai");
const sinon = require("sinon");
const app = require("../app");
const authService = require("../service/authService");

describe("AuthController - isolado do Service", () => {
  let authServiceMock;

  beforeEach(() => {
    authServiceMock = sinon.stub(authService, "validateLogin");
  });

  afterEach(() => {
    authServiceMock.restore();
  });

  it("deve retornar sucesso para login válido", async () => {
    authServiceMock.returns({ success: true });
    const resposta = await request(app)
      .post("/login")
      .send({ login: "adminuser", password: "adminpass" });
    expect(resposta.status).to.equal(200);
    expect(resposta.body.message).to.equal("Login realizado com sucesso!");
  });

  it("deve falhar se login não for informado", async () => {
    authServiceMock.returns({
      success: false,
      message: "Login e senha devem ser informados.",
    });
    const resposta = await request(app)
      .post("/login")
      .send({ password: "adminpass" });
    expect(resposta.status).to.equal(400);
    expect(resposta.body.message).to.equal(
      "Login e senha devem ser informados."
    );
  });

  it("deve falhar se senha não for informada", async () => {
    authServiceMock.returns({
      success: false,
      message: "Login e senha devem ser informados.",
    });
    const resposta = await request(app)
      .post("/login")
      .send({ login: "adminuser" });
    expect(resposta.status).to.equal(400);
    expect(resposta.body.message).to.equal(
      "Login e senha devem ser informados."
    );
  });

  it("deve falhar se login tiver menos de 6 caracteres", async () => {
    authServiceMock.returns({
      success: false,
      message: "Login deve ter mais que 5 caracteres.",
    });
    const resposta = await request(app)
      .post("/login")
      .send({ login: "admin", password: "adminpass" });
    expect(resposta.status).to.equal(400);
    expect(resposta.body.message).to.equal(
      "Login deve ter mais que 5 caracteres."
    );
  });

  it("deve falhar se senha tiver menos de 6 caracteres", async () => {
    authServiceMock.returns({
      success: false,
      message: "Senha deve ter mais que 5 caracteres.",
    });
    const resposta = await request(app)
      .post("/login")
      .send({ login: "adminuser", password: "admin" });
    expect(resposta.status).to.equal(400);
    expect(resposta.body.message).to.equal(
      "Senha deve ter mais que 5 caracteres."
    );
  });

  it("deve falhar se credenciais estiverem incorretas", async () => {
    authServiceMock.returns({
      success: false,
      message: "Credenciais inválidas.",
    });
    const resposta = await request(app)
      .post("/login")
      .send({ login: "adminuser", password: "wrongpass" });
    expect(resposta.status).to.equal(400);
    expect(resposta.body.message).to.equal("Credenciais inválidas.");
  });
});
