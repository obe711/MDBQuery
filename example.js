/*
 *
 *   MDBQuery Class -
 *
 *    new MDBQuery( MongoDB-Configuration-Obj )
 *
 *
 *    "Example MongoDB-Configuration-Obj"
 *
 *    const mongoObj = {
 *            url: "mongodb://127.0.0.1:27017",
 *            db: "polldata",
 *            collection: "current" }
 *
 *    "Example Use"
 *
 */

const MDBQuery = require("./PollsDbServiceClass");

//Pass url, db, collection to Configuation Object
//
const mongoObj = {
  url: "mongodb://127.0.0.1:27017",
  db: "polldata",
  collection: "current"
};

//Create a query and return a Promise from the database
//
new MDBQuery(mongoObj)
  .choice("$eq", "Buttigieg")
  .grade("$ne", "C-")
  .type("$eq", "president-primary-d")
  .state("$ne", "Kentucky")
  .project({ created_at: 1, id: 1, pollster: 1, answers: 1, grade: 1 })
  .sortBy("created_at", -1)
  .searchDB()
  .then(response => console.log(response));
