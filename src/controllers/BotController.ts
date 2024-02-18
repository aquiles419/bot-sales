import { Request, Response } from "express";
import bot from "../services/botService";
export default {
  async index(req: Request, res: Response) {
    // Se a requisição não contiver uma URL, retorna um erro
    const { url } = req.body;
    if (!url) {
      return res.status(400).json({ error: "Link não informado" });
    }

    // Envia a URL para o bot
    await bot.telegram.sendMessage(5778994371, url);

    return res.send("ok");
  },
};
