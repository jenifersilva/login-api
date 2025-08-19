// AuthController: handles login route
const express = require('express');
const router = express.Router();
const { validateLogin } = require('../service/authService');

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Realiza login
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               login:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login realizado com sucesso
 *       400:
 *         description: Erro de validação ou credenciais inválidas
 */
router.post('/login', (req, res) => {
  const { login, password } = req.body;
  const result = validateLogin(login, password);
  if (!result.success) {
    return res.status(400).json({ message: result.message });
  }
  return res.status(200).json({ message: 'Login realizado com sucesso!' });
});

module.exports = router;
