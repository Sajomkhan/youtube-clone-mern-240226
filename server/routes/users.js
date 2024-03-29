import express from 'express'
import { deleteUser, dislike, getAllUser, getUser, like, subscribe, unsubscribe, update } from '../controllers/user.js';
import { verifyToken } from '../verifyToken.js';

const router = express.Router();

// UPDATE USER
router.put("/:id", verifyToken, update)

// DELETE USER
router.delete("/:id", verifyToken, deleteUser)

// GET USER
router.get("/find", getAllUser)
router.get("/find/:id", getUser)

// SUBSCRIBE A USER
router.put("/sub/:id", verifyToken, subscribe)

// UNSUBSCRIBE A USER
router.put("/unsub/:id", verifyToken, unsubscribe)

// LIKE A VIDEO
router.put("/like/:videoId", verifyToken, like)

// DESLIKE A VIDEO
router.put("/dislike/:videoId", verifyToken, dislike)

export default router;