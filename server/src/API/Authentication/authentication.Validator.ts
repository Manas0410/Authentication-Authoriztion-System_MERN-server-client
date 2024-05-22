import { Request, Response, NextFunction } from "express";

const validator = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password }: { email: string; password: string } = req.body;

  if (!email || !password) {
    res.status(400).send("please enter mail and password");
  }

  next();
};

export default validator;
