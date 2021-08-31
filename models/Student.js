import mongoose from 'mongoose'
const {Schema, model} = mongoose

const StudentSchema = new Schema({
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    favQuote: {type: String, required: false},
    role: { type: String,
            enum: 
            {
                values: ['User', 'Admin'],
                message: '{VALUE} is not supported'
            }, 
            default: 'User'
        },
    isTutor: {type: Boolean, default: false}
},{
    versionKey: false,
    timestamps: true 
    })


const Student = model('Student', StudentSchema)

export default Student