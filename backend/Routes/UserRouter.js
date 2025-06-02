import express from 'express';
const router = express.Router();

import {CreateUser} from '../Controller/Users/CreateUsers.js';

router.post('/CreateUser', CreateUser);

import { Login } from '../Controller/Users/Auth.js';

router.post("/Login", Login);

export default router;