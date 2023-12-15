import mongoose from "mongoose";

const connectdb = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_DB_URI);
        console.log(`Mongodb connected ${connection.connection.host}`);
    } catch (error) {
        console.error(error)
    }
}

export default connectdb;