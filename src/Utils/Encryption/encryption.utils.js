import crypto from "node:crypto";

const Encreption_Secret_Key = Buffer.from("12345678901234567890123456789012");
const IV_Length = 16; // for AES this always 16

export const encrept = (plaintext) => {
  const iv = crypto.randomBytes(IV_Length);

  const cipher = crypto.createCipheriv(
    "aes-256-cbc",
    Encreption_Secret_Key,
    iv
  );

  let encrepted = cipher.update(plaintext, "utf-8", "hex");

  encrepted += cipher.final("hex");

  return iv.toString("hex") + ":" + encrepted; // final encreption
};

//---------------------------------------

export const decrypt = async (decryptData) => {
  const [ivHex, cipherText] = decryptData.split(":");
  const iv = Buffer.from(ivHex, "hex");

  const decipher = crypto.createCipheriv(
    "aes-256-cbc",
    Encreption_Secret_Key,
    iv
  );

  let decrypted = decipher.update(cipherText, "hex", "utf-8");

  decrypted += decipher.final("hex");

  return decrypted;
};

// Create Encrept
// Update Encrept
// Final Encrept
