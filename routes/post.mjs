import  express from 'express';
import * as PostController from '../controllers/post.controller.mjs';

const router = express.Router();

router.get('/', PostController.save);

export default router;
