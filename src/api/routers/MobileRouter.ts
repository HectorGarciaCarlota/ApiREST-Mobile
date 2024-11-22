import { Router } from 'express';
import {
  MobileMiddlewareCreate,
  MobileMiddlewareDelete,
  MobileMiddlewareUpdate,
} from '../middlewares/MobileMiddleware';

import { create, show, update } from '../controllers/MobileController';


const mobileRouter = Router();

mobileRouter.get("/", show);
mobileRouter.post("/", MobileMiddlewareCreate, create);
mobileRouter.put("/:id", MobileMiddlewareUpdate, update);
mobileRouter.delete("/:id", MobileMiddlewareDelete);


export default mobileRouter;
