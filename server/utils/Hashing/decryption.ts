import bcrypt from "bcryptjs";

const matchDecryptedPwd = async (password: string, hashedString: string) => {
  const match = await bcrypt.compare(password, hashedString);

  return match;
};

export default matchDecryptedPwd;
