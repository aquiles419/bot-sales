import { Telegraf } from "telegraf";

const bot = new Telegraf(process.env.BOT_TOKEN);

// Configura um ouvinte para mensagens que contêm links
bot.hears(/(https?:\/\/[^\s]+)/g, async (ctx) => {
  const url = ctx.message.text; // Extrai a URL da mensagem

  const message = `🔥 Oferta Imperdível!!! 🔥 Confira agora:
  
  // PARTE DA MENSAGEM QUE VAI TRATAR DO PREÇO ENTRE OUTRAS INFS
  // COLOCAR DESCRIÇÀO DINAMICA , ALGO ASSIM ..
  
  
  acesse o link --> ${url}`;

  // Envia a URL para a conversa
  //   await ctx.reply(`PROMOÇÃO: ${url}`);

  await bot.telegram.sendMessage(-4184369287, message);
});

bot.launch();

// Exporta a instância do bot
export default bot;
