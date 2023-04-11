import express from 'express'
import {updateUser} from '../controllers/userController.js'
import {deleteUser} from '../controllers/userController.js'
import {getSingleUser} from '../controllers/userController.js'
import {getAllUsers} from '../controllers/userController.js'
const router = express.Router()

import { verifyAdmin, verifyUser } from '../utils/verifyToken.js'

router.put('/:id',verifyUser,updateUser);
router.delete('/:id',verifyUser,deleteUser);
router.get('/:id',verifyUser, getSingleUser);
router.get('/',verifyAdmin,getAllUsers);


export default router