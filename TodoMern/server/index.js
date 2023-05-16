import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import taskRoutes from './routes/task.js';


const app = express();


app.use(bodyParser.json({limit: "20mb", extended:true}));
app.use(bodyParser.urlencoded({limit: "20mb", extended:true}));

app.use(cors());
app.use('/tasks', taskRoutes);


const CONNECTION_URL = 'mongodb+srv://shalmali:shal1234@cluster0.lyoaz7p.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL,{
    useNewUrlParser:true, 
    useUnifiedTopology:true
}).then(() => app.listen(PORT, () =>
console.log(`Connection is established and running on port: ${PORT}`)
)).catch((error) => console.log(error.message));




