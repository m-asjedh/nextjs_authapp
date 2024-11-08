import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URL!);
    const connection = mongoose.connection;

    connection.once("connected", () => {
      console.log("Database connected");
    });

    connection.on("error", (error) => {
      console.log("Error connecting to database", error);
    });
  } catch (error) {
    console.log("Error connecting to database", error);
  }
}
