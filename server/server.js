require("dotenv").config()
const express = require("express");
const cors = require("cors")
const app = express();
const connectDb = require("./utils/db");


//cors tackle
const corsOptions={
  origin:"http://localhost:5173",
  methods:"GET,POST,PUT,PATCH,DELETE,HEAD",
  credentials:true
}
app.use(cors(corsOptions));
app.use(express.json());

app.use("/api/auth",require("./routers/auth-router"));
app.use("/api/form",require("./routers/contact-router"));


app.use(require("./middlewares/error-middleware")) //isko end me add krte hai..

const PORT = 3000;
connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
  });
});
