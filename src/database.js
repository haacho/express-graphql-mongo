import mongoose from "mongoose";

export async function connect() {
  try {
    await mongoose.connect("mongodb://localhost/graphql_test", {
      useNewUrlParser: true,
    });
    console.log(">>> DB is connected");
  } catch {
    console.log("Something goes wrong!");
  }
}
