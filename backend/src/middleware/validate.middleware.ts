// Validation middleware using Zod
import { Request, Response, NextFunction } from "express";
import { ZodSchema } from "zod";

export const validate = (schema: ZodSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body);
      next();
    } catch (error: any) {
      if (error.errors) {
        const errorMessages = error.errors.map((err: any) => ({
          field: err.path.join('.'),
          message: err.message
        }));
        
        return res.status(400).json({
          success: false,
          message: "Validation failed",
          data: { errors: errorMessages }
        });
      }
      
      return res.status(400).json({
        success: false,
        message: error.message || "Validation failed"
      });
    }
  };
};
