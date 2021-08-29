# Mongoose - Exercise 1

## Setup a student schema and model

* Create a file server.js
* Install package mongoose (stable version 5): `npm i mongoose@5`
  
* Create - if you do not have it so far - a database "students_db" in ATLAS (e.g. by using Compass)

* Connect to your MongoDB students database on ATLAS using mongoose.connect(...)
    * Caution: You need to adapt the database name inside the connect string between mongodb.net/ and the question mark (?), so e.g.
    * Example Connect string and the location of the DB Name (marked with ${dbName}): 
        `mongodb+srv://<username>:<password>@robdciclusterr.6y8pq.mongodb.net/${dbName}?retryWrites=true&w=majority`

* On succesful connection: Console log a success message
* On failed connection: Console log an error message

* Create a schema "StudentSchema" for a student document
    * It should contain the following fields: 
        * firstname (String - required)
        * lastname (String - required)
        * favQuote (String - optional)
        * isTutor (Boolean - default value "false")
    * Add the "timestamps" option
        * This way mongoose automatically adds two fields "createdAt" and "updatedAt" to each document. It will maintain these fields for you automatically
    * Keep out the __v keys by the setting option versionKey to false

* Create a model "Student"
    * Attach the schema to the model
    * The model is our "super array" which provides us with a lot of "array" methods to manage a collection in the database
    * The model gives us methods to find, update and delete documents in a collection

## Outsourcing

Outsource now your Schema & Model to a file "Student.js" in a subfolder "models".

Do not forget to export the model at the end of that file using `module.exports = ...`
