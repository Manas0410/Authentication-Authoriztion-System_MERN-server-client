import { Request, Response } from "express";
import verifyToken from "../../../utils/token/verify-token";
import { error } from "console";

const getUserInfoByTokenController = async (req: Request, res: Response) => {
  try {
    const { accessToken } = req.params;
    if (!accessToken) return;
    const decoded = await verifyToken(accessToken);

    res.status(200).send({
      decoded: decoded,
      meta: {
        message: "Access token is invalid",
      },
    });
  } catch (err: any) {
    return res.status(401).send({
      data: null,
      meta: {
        message: "Access token is invalid",
        error: err?.message,
      },
    });
  }
};

export default getUserInfoByTokenController;
