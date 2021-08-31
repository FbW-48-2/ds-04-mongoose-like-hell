import mongoose from 'mongoose';
const { model, Schema } = mongoose;


//* set up a MODEL + SCHEMA

//? Schema: rules for a document
//? Model: mange for each type of document(e.g. users)

const StudentSchema = new Schema({
    //! UNIQUE Constraint is actually the only rule stored in DB-wise!!
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    favQuote: {type: String},
    isTutor: {type: Boolean, default: false},
    role: {
        type: String,
        //  default: "user",
        enum: ["user", "admin"]
    },
}, { versionKey: false, timestamps: true }
)

//* model function gets a schema & now a manager(model)

const Student = model('Student', StudentSchema)



export default Student;