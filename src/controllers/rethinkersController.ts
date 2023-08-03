import rethinkersService from "../services/rethinkersService";
import { Request, Response } from "express";
import path from "path";
import fs from "fs";

const registerRethinker = async (req: Request, res: Response) => {
  try {
    await rethinkersService.registerRethinker(req.body);
    return res
      .status(201)
      .json({ message: "Rethinker cadastrado com sucesso!" });
  } catch (error) {
    return res.status(500).json({ error: "Erro ao cadastrar rethinker." });
  }
};

const getAllRethinkers = async (req: Request, res: Response) => {
  try {
    const rethinkers = await rethinkersService.getAllRethinkers();
    return res.status(200).json(rethinkers);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao obter os rethinkers." });
  }
};
const uploadPhoto = async (req: Request, res: Response) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "Image not provided" });
    }

    const imageName = req.file.filename;

    const tempPath = req.file.path;
    const destinationPath = path.join(
      __dirname,
      "..",
      "assets",
      "profile-images",
      imageName
    );

    fs.renameSync(tempPath, destinationPath);

    return res.json({
      message: "Image uploaded successfully",
      imageName: imageName,
    });
  } catch (error) {
    console.error("Error uploading image:", error);
    return res.status(500).json({ error: "Failed to upload image" });
  }
};
export default {
  registerRethinker,
  getAllRethinkers,
  uploadPhoto,
};
