// AuthService: validates login rules and credentials
const USER = require('../model/user');

function validateLogin(login, password) {
  if (!login || !password) {
    return { success: false, message: 'Login e senha devem ser informados.' };
  }
  if (login.length <= 5) {
    return { success: false, message: 'Login deve ter mais que 5 caracteres.' };
  }
  if (password.length <= 5) {
    return { success: false, message: 'Senha deve ter mais que 5 caracteres.' };
  }
  if (login !== USER.login || password !== USER.password) {
    return { success: false, message: 'Credenciais inválidas.' };
  }
  return { success: true };
}

module.exports = { validateLogin };
