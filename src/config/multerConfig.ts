import multer from "multer";
import path from "path";
import crypto from "crypto";

const tmpFolder = path.resolve(__dirname, "..", "..", "tmp", "uploads");

export default {
  directory: tmpFolder,
  storage: multer.diskStorage({
    destination: tmpFolder,
    filename(resquest, file, callback) {
      const fileHash = crypto.randomBytes(10).toString("hex");
      const fileName = `${fileHash}.png`;

      return callback(null, fileName);
    },
  }),
};
