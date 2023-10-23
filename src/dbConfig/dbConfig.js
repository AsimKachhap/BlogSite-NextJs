import mongoose from "mongoose";

export async function connect() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("MongoDb Connection Succesfull !");
    });

    connection.on("error", () => {
      console.log(
        "MongoDb Connection error. Please make sure MongoDb is running." + error
      );
      process.exit();
    });
  } catch (error) {
    console.log("Something went wrong");
    console.log(error);
  }
}
