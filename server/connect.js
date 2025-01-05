import { MongoClient, ServerApiVersion } from "mongodb";
import mongoose from "mongoose";

const uri =
  process.env.MONGODB_URI ||
  "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false";

const dbName = "blog_posts";

export const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

let database;

export const connectToServer = () => {
  database = client.db(dbName);
  if (!database) {
    return console.log("Error connecting to database");
  }
  console.log("Connected to database");
};

export const connectDbToMongoose = () => {
  mongoose
    .connect(uri, {
      dbName: dbName,
    })
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("Connection error:", err));

  mongoose.connection.on("connected", () => {
    console.log("Mongoose is connected to the database");
    // console.log("Database name:", mongoose.connection.name);
  });

  mongoose.connection.on("error", (err) => {
    console.error("Mongoose connection error:", err);
  });
};

export const getDb = () => {
  return database;
};

// async function run() {
//   try {
//     // Connect the client to the server (optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log(
//       "Pinged your deployment. You successfully connected to MongoDB!"
//     );
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);
