const request = require('supertest');
const app = require('../../server'); // Chemin vers votre application Express
const User = require('../../models/user'); // Chemin vers votre modèle User
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

describe('Authentification', () => {
  beforeAll(async () => {
    // Créer un utilisateur pour les tests
    const passwordHash = await bcrypt.hash('password', 10);
    await User.create({ username: 'testuser', password: passwordHash });
  });

  test('Connexion réussie avec des identifiants valides', async () => {
    const response = await request(app)
      .post('/login') // Remplacez par votre route de connexion
      .send({ username: 'testuser', password: 'password' });

    expect(response.statusCode).toBe(200);
    expect(response.body.token).toBeDefined();

    const decodedToken = jwt.verify(response.body.token, 'RANDOM_TOKEN_SECRET');
    expect(decodedToken.userId).toBeDefined();
  });

  test('Gestion des identifiants incorrects', async () => {
    /**
         * @typedef {Object} Response
         * @property {number} status - The HTTP status code of the response.
         * @property {Object} body - The body of the response.
         */

        /**
         * Sends a POST request to the login route with a username and password.
         * @param {string} username - The username to use for authentication.
         * @param {string} password - The password to use for authentication.
         * @returns {Promise<Response>} - The response object containing the HTTP status code and body.
         */
        const response = await request(app)
          .post('/login') // Remplacez par votre route de connexion
          .send({ username: 'testuser', password: 'wrongpassword' });

    expect(response.statusCode).toBe(401);
  });

  // Vous devez d'abord implémenter une fonctionnalité de récupération de mot de passe
  // test('Fonctionnalité de récupération de mot de passe', async () => {
  //   // Implémentez ce test une fois que vous avez une fonctionnalité de récupération de mot de passe
  // });
});