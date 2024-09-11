import express from "express";
import cors from "cors";
import helmet from "helmet";
import routes from "./route/userRoute.js";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import dotenv from "dotenv";

import db from "./config/dbConfig.js";
import insertRoles from "./utils/insertRole.js";
dotenv.config();

const app = express();
const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
  optionSuccessStatus: 200,
  methods: ["GET", "POST", "PUT", "DELETE"],
};
app.use(cors(corsOptions));
app.use(helmet());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: "true" }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
  res.json({ message: "Hello World!" });
});
app.use("/", routes);
db.sync({ force: false })
  .then(() => {
    insertRoles();
    console.log("Database connected successfully.");
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}.`);
    });
  })
  .catch((err) => {
    console.log("Error connecting", err);
    process.exit(1);
    return;
  });
