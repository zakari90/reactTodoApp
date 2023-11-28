// config/db.js
import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const db = process.env.CONNECTION_URL;
const name = ""
const password = ""
const collectionName =""
const dbName = `mongodb+srv://${name}:${password}@memory.qafqmhs.mongodb.net/${collectionName}?retryWrites=true&w=majority`

const connectDB = ()=>{
    mongoose.connect(dbName,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(()=>{
        console.log("al hamdo li lah MongoDB is connected");

    })
    .catch((err)=>{
        console.error(err.message);
        process.exit(1);
    })
}

// const connectDB = async () => {
//     try {
        // await mongoose.connect(db, {
        //     useNewUrlParser: true,
        //     useUnifiedTopology: true,
        // });

//         console.log("al hamdo li lah MongoDB is connected");
//     } catch (err) {
//         console.error(err.message);
//         process.exit(1);
//     }
// };

export default connectDB;
