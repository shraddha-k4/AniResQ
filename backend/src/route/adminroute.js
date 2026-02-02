// import express from "express";
// import authMiddleware from "../middleware/authmid.js";
// import adminMiddleware from "../middleware/rolemiddleware.js";
// import User from "../model/user.js";

// const router = express.Router();

// // Only admin can access
// router.get("/users", authMiddleware, adminMiddleware, async (req, res) => {
//   const users = await User.find().select("-password");
//   res.json(users);
// });

// export default router;
import express from "express";
import authMiddleware from "../middleware/authmid.js";
import roleMiddleware from "../middleware/rolemiddleware.js";
import { getAllUsers } from "../controller/admincontroller.js";

const router = express.Router();

router.get(
  "/users",
  authMiddleware,
  roleMiddleware(["admin"]),
  getAllUsers
);

export default router;
