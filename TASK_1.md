# Mongoose - Exercise 1

## Setup a student schema and model

* Create a file server.js
* Install package "mongoose"

* Connect to your MongoDB students database on ATLAS using mongoose.connect(...)

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

* Create a model "Student" on the students collection
    * Attach the schema to the model
    * The model is our "super array" which provides us with a lot of methods out of the box to manage a resource in the database
    * The model gives us methods to find, update and delete documents

## Outsourcing

Outsource now your Schema & Model to a file "Student.js" in a subfolder "models".

Do not forget to export the model at the end of that file using `module.exports = ...`
