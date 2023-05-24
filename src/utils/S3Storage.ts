import {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
  GetObjectCommandOutput,
} from "@aws-sdk/client-s3";
import { readFile } from "fs/promises";
import fs from "fs";
import path from "path";
import mime from "mime";
import { AppException } from "../shared/exceptions";
import multerConfig from "../config/multerConfig";

class S3Storage {
  private client: S3Client;

  constructor() {
    this.client = new S3Client({ region: process.env.AWS_REGION });
  }

  async saveFile(filename: string): Promise<void> {
    const originalPath = path.resolve(multerConfig.directory, filename);

    const ContentType = mime.getType(originalPath);

    if (!ContentType) {
      throw new AppException("File not found", 404, "FileNotFound");
    }

    const fileContent = await readFile(originalPath);

    await this.client.send(
      new PutObjectCommand({
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: filename,
        ACL: "public-read",
        Body: fileContent,
        ContentType,
      })
    );

    await fs.promises.unlink(originalPath);
  }

  async getFileUrl(filename: string): Promise<string> {
    const command = new GetObjectCommand({
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: filename,
    });

    try {
      const response: GetObjectCommandOutput = await this.client.send(command);

      // Constrir a URL usando o nome do bucket e o nome do arquivo
      const fileUrl = `https://${process.env.AWS_BUCKET_NAME}.s3.amazonaws.com/${filename}`;

      return fileUrl;
    } catch (error) {
      // Lidar com erros ao obter a URL do arquivo
      console.error("Error getting file URL:", error);
      throw error;
    }
  }
}

export default S3Storage;
