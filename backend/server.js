const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const mongoose = require("mongoose");
require("dotenv").config();
// import routes
const blogRoutes = require("./routes/blogs.routes");
const userRoutes = require("./routes/user.routes");

/*========Middlewares======== */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/*==========MongoDB database connection======== */
const db = mongoose.connection;
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(port, () => console.log(`server running on port ${port}`));
  });

db.on("error", () => console.log("Error in connecting to database"));
db.once("open", () => console.log("Database connected"));

/*===========Routes========= */
app.use("/api/blogs", blogRoutes);
app.use('/api/auth/',userRoutes)
