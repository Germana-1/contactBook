import { Request, Response } from "express";
import loginService from "../services/login/login.service";

const loginCrontroller = async (req: Request, res: Response) => {
  const token = await loginService(req.body);
  return res.json({ token });
};
export { loginCrontroller };
