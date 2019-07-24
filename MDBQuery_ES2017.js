"use strict";

const MongoClient = require("mongodb").MongoClient;

const assert = require("assert");

class MDBQuery {
  constructor(obj) {
    this._mongo = {
      ...obj
    };
    this.q = [];
  }

  searchDB() {
    let documents = new Promise((resolve, reject) => {
      MongoClient.connect(
        this._mongo.url + "/" + this._mongo.db,
        {
          useNewUrlParser: true
        },
        (err, client) => {
          const db = client.db(this._mongo.db);
          assert.equal(null, err);
          db.collection(this._mongo.collection)
            .find(this.q)
            .project(this.p)
            .sort(this.s)
            .toArray((err, docs) => {
              resolve(docs);
              client.close();
            });
        }
      );
    });
    return documents;
  }

  sortBy(field, direction) {
    this._sortBy = {
      [field]: direction
    };
    this.s = {
      ...this._sortBy,
      ...this.s
    };
    return this;
  }

  project(obj) {
    this.p = obj;
    return this;
  }

  created_at(operator, query) {
    this._created_at = {
      created_at: {
        [operator]: query
      }
    };
    this.q = {
      ...this._created_at,
      ...this.q
    };
    return this;
  }

  startDate(operator, query) {
    this._startDate = {
      startDate: {
        [operator]: query
      }
    };
    this.q = {
      ...this._startDate,
      ...this.q
    };
    return this;
  }

  endDate(operator, query) {
    this._endDate = {
      endDate: {
        [operator]: query
      }
    };
    this.q = {
      ...this._endDate,
      ...this.q
    };
    return this;
  }

  pollster(operator, query) {
    this._pollster = {
      pollster: {
        [operator]: query
      }
    };
    this.q = {
      ...this._pollster,
      ...this.q
    };
    return this;
  }

  type(operator, query) {
    this._type = {
      type: {
        [operator]: query
      }
    };
    this.q = {
      ...this._type,
      ...this.q
    };
    return this;
  }

  id(operator, query) {
    this._id = {
      id: {
        [operator]: query
      }
    };
    this.q = {
      ...this._id,
      ...this.q
    };
    return this;
  }

  seat_name(operator, query) {
    this._seat_name = {
      seat_name: {
        [operator]: query
      }
    };
    this.q = {
      ...this._seat_name,
      ...this.q
    };
    return this;
  }

  state(operator, query) {
    this._state = {
      state: {
        [operator]: query
      }
    };
    this.q = {
      ...this._state,
      ...this.q
    };
    return this;
  }

  grade(operator, query) {
    this._grade = {
      grade: {
        [operator]: query
      }
    };
    this.q = {
      ...this._grade,
      ...this.q
    };
    return this;
  }

  choice(operator, query) {
    this._choice = {
      "answers.choice": {
        [operator]: query
      }
    };
    this.q = {
      ...this._choice,
      ...this.q
    };
    return this;
  }

  pct(operator, query) {
    this._pct = {
      "answers.pct": {
        [operator]: query
      }
    };
    this.q = {
      ...this._pct,
      ...this.q
    };
    return this;
  }
}

module.exports = MDBQuery;