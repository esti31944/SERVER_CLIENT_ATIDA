const mongoose = require('mongoose');
const {config} = require("../config/secret")

main().catch(err => console.log(err));

async function main() {
  // // mongoose.set('strictQuery' , false);
  // await mongoose.connect('mongodb://127.0.0.1:27017/ATIDA2025');
  // console.log("mongo connect started");
  // // use await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test'); if your database has auth enabled

  mongoose.set('strictQuery' , false);
  // await mongoose.connect(`mongodb+srv://e944_db_user:ee944ee@cluster0.enaw64m.mongodb.net/
  await mongoose.connect(`mongodb+srv://${config.userDb}:${config.passDb}@cluster0.enaw64m.mongodb.net/ATIDA2025-ATLAS`);
  console.log("mongo connect started");
}
