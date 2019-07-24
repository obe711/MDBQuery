# MDBQuery Service Class

### Service Class for Querying Polling Dataset in MongoDB

# Syntax

    MDBQuery( object );

     ```` javascript

        new MDBQuery( MongoDB-Configuration-Obj )
     ````

# Parameters

    object

An Object with 3 properties, "url", "db", "collection"; This object initalizes the MongoDB Client with it's paramiters.

# Return value

    An array of JSON objects with result from MongoDB Query

# Example Usage

```Javascript

#### Create Configuration Object

const mongoObj = {
    url: "mongodb://127.0.0.1:27017",
    db: "polldata",
    collection: "current" }

#### Construct new MDBQ Object and build query chain

new MDBQuery(mongoObj)
    .choice("$eq", "Buttigieg")
    .grade("$ne", "C-")
    .type("$eq", "president-primary-d")
    .state("$ne", "Kentucky")
    .project({ created_at: 1, id: 1, pollster: 1,answers: 1, grade: 1 })
    .sortBy("created_at", -1)
    .searchDB()
    .then(response => console.log(response));


```
