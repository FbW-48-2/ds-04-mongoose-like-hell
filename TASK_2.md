# Mongoose - Exercise 2

## Prepare an Express App

* Install express
* Setup an express app in your script

* Implement middleware for parsing incoming JSON data (into req.body):
    * ` app.use(express.json()) `

* Create all following CRUD routes for a student
    * GET /students (=> get all students)
    * GET /students/:id (=> get single student by ID)
    * POST /students (=> create student)
    * PATCH /students/:id (=> update student with given ID)
    * DELETE /students/:id (=> remove student with given ID)
    * For routes GET /students/:id, PATCH /students/:id, DELETE /students/:id
        * console.log the received ID parameter
    * For routes POST & PATCH
        * console.log the received body (req.body)

* Implement Mongoose in these routes
    * For getting all students: Student.find()
    * For getting single student: Student.findById(...)
    * For creating a student: Student.create()
    * For updating a student: Student.findByIdAndUpdate(...)
    * For deleting a student: Student.findByIdAndDelete(...)
    * Return the fetched / created / updated / deleted record as JSON to the browser using res.json()


* Test your routes
    * Start your API with nodemon
    * Open your REST Client (e.g. Insomnia)
        * Make test calls to all your routes
        * On each test: Check in Compass if your was correctly created / updated / deleted in MongoDB
        * If you do not get a response back from the API: Check the backend terminal in VsCode for an error!
        * Check if you receive parameters and body correctly in your routes

WELL DONE! 
Our technology stack is now complete. We can now write modern fullstack applications.


## Bonus Task - Add error handling

* Handle all your API errors in a generic error handler middleware
    * app.use((err, req, res, next) => {...})

* Update your routes and implement error handling
    * Catch errors for your mongoose calls 
    * Forward them to your error handler

* Testing in REST client (e.g. Insomnia)
    * Try to fetch a student with an ID that does not exist
    * Try to update a student with an ID that does not exist
    * Try to delete a student with an ID that does not exit
    * E.g. just use the ID 12345 (that is not a valid MongoDB ID)

