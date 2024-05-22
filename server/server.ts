import Express from "express";
import cors from "cors";
import { connectToMongoDb } from "./utils/connection/mongoconnection";
import { port } from "./config";
import authRouter from "./src/API/Authentication/authentication.Routes";
import validateToken from "./middleware/ValidateToken";
import adminRouter from "./src/API/Admin/admin.route";

(async (): Promise<void> => {
  try {
    const app = Express();
    await connectToMongoDb();

    // middlewares
    app.use(Express.json());
    app.use(cors());

    app.get("/", (req, res) => {
      res.status(200).send("api is working");
    });

    app.use("/", authRouter);

    app.use("/t", validateToken, adminRouter);

    app.listen(port, () => {
      console.log("app is running on http://localhost:3000");
    });
  } catch (err: any) {
    console.log(err);
  }
})();