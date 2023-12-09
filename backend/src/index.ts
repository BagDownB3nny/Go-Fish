import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import router from "./routes";
import allowCrossDomain from "./middleware/allowCrossDomain";

dotenv.config();

// express app
const app = express();

app.use(allowCrossDomain);
app.use(express.json());

//middleware
app.use((req : any, res : any, next : any) => {
  console.log(req.path, req.method);
  next();
});

app.use(router);

mongoose.connect(process.env.MONGO_URI!).then(() => {
  // listen for requests
  app.listen(process.env.PORT, () => {
    console.log("Listening on port " + process.env.PORT);
  });
});
