// EXPRESS ---------------------------------------------
import express from 'express';
const app = express();
import './db-connect.js';
import Student from './models/Student.js';

    // MIDDLEWARE --------------------------------------
    app.use( express.json() );


    // ROUTES ------------------------------------------
        // HOME
        app.get("/", (req, res) => {
            res.send(`
            <h1>Welcome to the students API!</h1>
            <a href="/students">/students</a>
            `)
        });

        // GET update all students to have role filled
        app.get("/migration", async (req, res, next) => {
            try {
                const studentsUpdated = await Student.updateMany({
                    role: { $exists: false }}, { $set: { role: "User" }
                });
                res.json( studentsUpdated );
            } catch (error) {
                next( error )
            }
        });

        // GET all students
        app.get("/students", async (req, res, next) => {
            try {
                const students = await Student.find();
                res.json( students );
            } catch (error) {
                next( error );
            };
        });

        // GET single student
        app.get("/students/:id", async (req, res, next) => {
            const { id } = req.params;
            console.log( id );
            try {
                const student = await Student.findById( id );
                res.json( student );
            } catch (error) {
                next( error );
            };
        });

        // POST create a student
        app.post("/students", async (req, res, next) => {
            const body = req.body;
            console.log( body );
            try {
                const studentNew = await Student.create( body );
                res.json( studentNew );
            } catch (error) {
                next( error );
            };
        });

        // PUT update student using id
        app.put("/students/:id", async (req, res, next) => {
            const { id } = req.params;
            const studentData = req.body;
            console.log( id, studentData );
            try {
                const studentUpdated = await Student.findByIdAndUpdate(
                    id,
                    studentData,
                    { new: true }
                );
                res.json( studentUpdated );
            } catch (error) {
                next( error );
            }
        });

        // DELETE student by id
        app.delete("/students/:id", async (req, res, next) => {
            const { id } = req.params;
            console.log( id );
            try {
                const studentDeleted = await Student.findByIdAndDelete( id );
                res.json( studentDeleted );
            } catch (error) {
                next( error );
            }
        });

    
    // ERROR HANDLER -----------------------------------
    app.use((err, req, res, next) => {
        console.log( err );
        res.status(400).json({
            error: err.message
        });
    });

    // ACTIVATE PORT -----------------------------------
    const PORT = 5000;
    app.listen( PORT, () => {
        console.log(`API is up and running on http://localhost:${PORT}`);
    })
// -----------------------------------------------------