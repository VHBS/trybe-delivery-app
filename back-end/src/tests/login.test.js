const { expect } = require('chai');
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../api/app');
const { users } = require('../database/models');

chai.use(chaiHttp);

describe('login route tests', () => {
  it('return the token with user data', async () => {

  })
})
