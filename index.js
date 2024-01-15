import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'
import postRoutes from './routes/posts.js'

const app = express();

app.use('/posts', postRoutes);
app.use(bodyParser.json({limit : "30mb" , extended : true}));
app.use(bodyParser.urlencoded({limit : "30mb" , extended : true}));
app.use(cors());

const CONNECTION_URL='mongodb+srv://hanfanaseer5:Hanfa!1234.@cluster0.pdnylu7.mongodb.net/';
const PORT=process.env.PORT  || 5000;

mongoose.connect(CONNECTION_URL,{ useNewUrlParser:true , useUnifiedTopology:true})
.then(() => app.listen(PORT,()=> console.log('server running on 5000')))
.catch((error) => console.log(error.message));

