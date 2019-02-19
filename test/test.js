const sendmail = require('../src/sendmail');
const server = require('../server');
const chaiHttp = require('chai-http');
const chai = require('chai');
const expect = chai.expect;
const should = chai.should;
chai.use(chaiHttp);

const textSample = {empresa: 'Test company', nombre: 'Test name', celular: "555", email: 'email@email.com', comentarios: 'No comments'};

describe('/sendmail', () => {
    it('Should send mail without throwing error', async () => {
      sendmail.receiving(textSample, (err, obj)=> {
          should.not.exist(err);
          should.exist(obj);
      });
    });
});
