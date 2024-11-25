import  { Request, Response } from 'express';
import Mobile from '../models/Mobile';
import { mobiles } from '../models/Mobiles';
import MobileDTO from '../models/Mobile.dto';

const create = (req: Request, res: Response) => {
  console.log("Creating mobile with data:", res.locals.mobile);

  const local = res.locals.mobile;

  const mobile = new Mobile(
    String(local.model),
    Number(local.price),
    Number(local.inches),
    Number(local.ram),
    Number(local.cpu)
  );

  mobiles.push(mobile);

  console.log("Created mobile:", mobile.getDetails());

  return res.status(200).json(mobile.getDetails());
};


const update = (req: Request, res: Response) => {
  const { mobile , found } = res.locals as { mobile: MobileDTO, found: Mobile};

  if(found.updateAll({ model: mobile.model, price: mobile.price, inches: mobile.inches, ram: mobile.ram, cpu: mobile.cpu })) res.status(200).json(mobile);

  return res.status(400).json({
    "fake": "fake news",
  });
}

const remove = (req: Request, res: Response) => {
  const found  = res.locals.found as Mobile ;

  const index = mobiles.findIndex((mobile) => mobile._id === found._id);

  if (index !== -1) {
    mobiles.splice(index, 1);
  }

  return res.status(200).json({
    message: "Mobile deleted successfully",
    deletedMobile: found,
  });
}

const show = (req: Request, res: Response) => {
  return res.status(200).json({
    mobiles: mobiles.map((mobile) => mobile.getDetails()),
  });
};

export { create, update, remove, show };
