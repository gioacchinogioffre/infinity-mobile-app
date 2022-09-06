import { Router } from "express";
import { getUser,updateUser, getUserByEmail } from "../controllers/user.controllers";
import {authJWT, verifySignUP} from '../middlewares'
const router = Router()
// router.post('/',[authJWT.verifyToken, authJWT.isAdmin, verifySignUP.checkRolesExisted], createUser)
router.get('/',getUser)
router.get('/:email', getUserByEmail)
router.put('/:userID',updateUser)
export default router