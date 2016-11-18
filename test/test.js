var supertest = require("supertest");
var should = require("should");

// This agent refers to PORT where program is runninng.
var argv = require('minimist')(process.argv.slice(2));
var port = argv.port || 3000;

var server = supertest.agent("http://localhost:"+port);

  // #1 should return home page
  it("should return home page",function(done){
    // calling home page api
    server
    .get("/")
    .expect("Content-type",/json/)
    .expect(200) // THis is HTTP response
    .end(function(err,res){
      // HTTP status should be 200
      res.status.should.equal(200);
      done();
    });
  });

