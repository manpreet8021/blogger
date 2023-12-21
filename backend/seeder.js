const moongoose = require("mongoose");
const dotenv = require("dotenv");
const user = require("./data/user.js")
const UserModel = require("./model/userModal.js")
const connectDb = require("./config/db.js")

dotenv.config();
connectDb();

const importData = async() => {
    try {
        await UserModel.deleteMany();
        const users = await UserModel.insertMany(user);
        console.log('Data Imported');
        process.exit()
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}

const destroyData = async() => {
    await UserModel.deleteMany();
    process.exit()
}
if(process.argv[2] == '-d') {
    destroyData();
} else {
    importData();
}