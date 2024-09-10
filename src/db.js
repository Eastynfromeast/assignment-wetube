import mongoose from "mongoose";

mongoose.connect("mongodb+srv://wetubeadmin:wetube4ever@cluster0.uufes.mongodb.net/wetube?retryWrites=true&w=majority");

const db = mongoose.connection;

const handleOpen = () => console.log("✅  Connected to DB");
const handleError = error => console.log(`❌ Error on DB Connection:${error}`);

db.once("open", handleOpen);
db.on("error", handleError);
