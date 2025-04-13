const mongoose = require("mongoose");
mongoose.set("debug", true);
const PASSWORD = "bala";
const DATABASE_NAME = "sample_mflix";
const CONNECTION_URI = `mongodb+srv://bala:bala@todo.4wzq3zx.mongodb.net/?retryWrites=true&w=majority&appName=todo`;
async function main() {
  await mongoose.connect(CONNECTION_URI, {
    dbName: DATABASE_NAME,
    user: "bala",
    pass: PASSWORD,
  });
}
main()
  .then(() => {
    console.log(`Connected`);
  })
  .catch(console.log);
