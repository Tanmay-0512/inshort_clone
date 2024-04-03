import mongoose from 'mongoose'


const Connection = async (username,password)=>{
    const URL =`mongodb+srv://${username}:${password}@clone-inshort.wkppxab.mongodb.net/?retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL)
        console.log("Database connected succesfully")
    }catch(error){
        console.log('error while connecting to database',error)
    }
}

export default Connection