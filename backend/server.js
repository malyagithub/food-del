import express from "express";
import cors from "cors";
import { coonectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import "dotenv/config";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";


// app config
const app = express();
const port = process.env.PORT ||4000;




// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());




// Error Handling for Bad JSON
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    console.error("Bad JSON:", err.message);
    return res.status(400).json({ success: false, message: "Invalid JSON" });
  }
  next();
});
// db connection
coonectDB();

// api endpoints
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order",orderRouter);


app.get("/", (req, res) => {
  res.send("API WORkING");
});

app.listen(port, () => {
  console.log(`Server Started on http://localhost:${port}`);
});
