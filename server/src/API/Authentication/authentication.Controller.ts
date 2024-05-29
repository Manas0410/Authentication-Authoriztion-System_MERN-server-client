import { Request, Response } from "express";
import encryption from "../../../utils/Hashing/encryption";
import { userDataModel } from "../../../Schema/UserSchema";
import matchDecryptedPwd from "../../../utils/Hashing/decryption";
import { UserDataType } from "../../../types";
import generateToken from "../../../utils/token/generate-token";

export const registerUser = async (req: Request, res: Response) => {
  try {
    const { email, password, name, role }: UserDataType = req.body;

    const encryptedPwd = await encryption(password);

    const user = await new userDataModel({
      email,
      password: encryptedPwd,
      name,
      role,
    });

    await user.save();

    res.status(201).send("account created successfully !!");
  } catch (err: any) {
    console.log(err);
  }
};

export const loginUser = async (req: Request, res: Response) => {
  try {
    const { password, email }: UserDataType = req.body;

    const userDataFromDb = await userDataModel.findOne({ email: email });

    if (!userDataFromDb) {
      res.status(400).send("this email does not exist");
    }

    const hashedPwd: string = userDataFromDb?.password as string;

    const encryptedPwd = await matchDecryptedPwd(password, hashedPwd);

    if (!encryptedPwd) {
      res.status(400).send("You entered wrong password");
    }

    const dataToCreateToken = {
      name: userDataFromDb?.name,
      email: userDataFromDb?.email,
      role: userDataFromDb?.role,
    };

    const accessToken = await generateToken(dataToCreateToken, "30s");
    const refreshToken = await generateToken(dataToCreateToken, "50m");

    res.cookie("refresh", refreshToken, {
      httpOnly: true,
      secure: true,
      maxAge: 3600000,
    });

    res.status(200).json({
      message: "user successfully logged in",
      meta: {
        ...dataToCreateToken,
        accessToken: accessToken,
        refreshToken: refreshToken,
      },
    });
  } catch (err: any) {
    console.log(err);
  }
};
