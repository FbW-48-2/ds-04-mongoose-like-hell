import express from 'express';
import cors from "cors"
import morgan from 'morgan'
import routeFlow from './routes/routeFlow.js'


const app = express();
const port = 5000;


app.use( cors() ) 
app.use( morgan("dev") )
app.use(express.json()); 

app.use('/', routeFlow)


app.use( (err, req, res, next) => {
    console.log( err )
    res.status(400).json({
        error: err.message
    })
})


app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
    
  });