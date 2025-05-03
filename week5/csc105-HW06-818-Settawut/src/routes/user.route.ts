import { Hono } from "hono";
import * as userController from "../controllers/user.controller.js";

const userRouter = new Hono();

userRouter.post("/", userController.createUser);
userRouter.get("/", userController.getAllUsers);
userRouter.patch("/:id", userController.updateUser);

export { userRouter };
