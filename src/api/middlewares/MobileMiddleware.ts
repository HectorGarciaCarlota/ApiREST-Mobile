import {Request, Response, NextFunction} from 'express';
import Mobile from '../models/Mobile';
import { mobiles } from '../models/Mobiles';


const MobileMiddlewareCreate = (req: Request, res: Response, next: NextFunction) => {
  const { model, price, inches, ram, cpu } = req.body;

  if (!model || !price || !ram || !cpu || !inches) {
    return res.status(400).send({
      "error": "some parameter is not filled",
    });
  }

  res.locals.mobile = { model, price, inches, ram, cpu };
  next();
}

const MobileMiddlewareUpdate = (req: Request, res: Response, next: NextFunction) => {
  const { model, price, inches, ram, cpu } = req.body;
  const id = Number(req.params.id);

  const found = mobiles.find(mobile => mobile._id === id);

  if (found === undefined) return res.status(404).send({
    "error": "not found",
  })

  res.locals.mobile = { model, price, inches, ram, cpu };
  res.locals.found = found;

  next();
}

const MobileMiddlewareDelete = (req: Request, res: Response, next: NextFunction) => {
  const id = Number(req.params.id);

  console.log(id);

  const found = mobiles.find(mobile => mobile._id === id);

  if (found === undefined) return res.status(404).send({
    "error": "not found",
  });

  res.locals.found = found;

  next();
}

export { MobileMiddlewareCreate, MobileMiddlewareUpdate, MobileMiddlewareDelete };
