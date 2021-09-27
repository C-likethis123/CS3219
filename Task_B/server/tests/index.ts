import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/index';

chai.use(chaiHttp);
chai.should();

const API_PREFIX = `/api/tasks`;

describe("Tasks API", () => {
  describe("GET /", () => {
    // Retrieve all tasks
    it("should retrieve all tasks", (done) => {
      chai.request(app)
        .get(`${API_PREFIX}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          done();
        });
    });
  });

  describe("POST /", () => {
    // Add a single post
    it("should add a task", (done) => {
      chai.request(app)
          .post(`${API_PREFIX}`)
        .send({
          title: "Test add task",
          description: 'Some description',
          date: '02/09/2021',
        })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          this.testId = res.body.id;
          done();
        })
    });
  });

  // Retrieve a single task
  describe("GET /:id", () => {
    it("should retrieve a task", (done) => {
      chai.request(app)
          .get(`${API_PREFIX}/${this.testId}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          done();
        });
    });
  });

  describe("DELETE /:id", () => {
    it("should delete a task", (done) => {
      chai.request(app)
          .delete(`${API_PREFIX}/${this.testId}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('string');
          done();
        });
    });

    it("should return errors when deleting tasks that do not exist in the database", (done) => {
      chai.request(app)
          .delete(`${API_PREFIX}/${this.testId}`)
        .end((err, res) => {
          res.should.have.status(404);
          done();
        })
    })
  })
});
