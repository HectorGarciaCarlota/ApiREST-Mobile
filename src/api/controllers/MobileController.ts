import  { Request, Response } from 'express';
import Mobile from '../models/Mobile';
import { mobiles } from '../models/Mobiles';

const create = (req: Request, res: Response) => {
  const local = res.locals.mobile

  const mobile = new Mobile (local.model, local.price, local.inches, local.ram, local.cpu);

  mobiles.push(mobile)

  return res.status(200).json(mobile);
}

const update = (req: Request, res: Response) => {
  const { mobile , found } = res.locals as { mobile: Mobile, found: Mobile}



}

const remove = (req: Request, res: Response) => {

}

const show = (req: Request, res: Response) => {

}
