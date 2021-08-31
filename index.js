import axios from 'axios'
import faker from 'faker'

const postStudent = async () => {
    try {
        const newStudent = {
            firstname: faker.name.firstName(),
            lastname: faker.name.lastName(),
            favQuote: faker.lorem.sentence()
        }
        const resp = await axios.post('http://localhost:5000/students', newStudent)
        const data = await resp.data
        console.log(data);
    } 
    catch (error) {
        console.log(error);
    }
}

postStudent()
