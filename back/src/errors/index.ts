import { Response, Request, NextFunction } from "express";

export class AppError extends Error {
  statusCode: number;
  constructor(message: string, status: number = 400) {
    super();
    (this.message = message), (this.statusCode = status);
  }
}

const handleError = async (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({ message: err.message });
  }
  console.log(err);
  return res.status(500).json({ message: "Internal server error" });
};

export default handleError;
