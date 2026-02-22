const { createOpenClaw } = require('@openclaw/core');

async function start() {
  const bot = await createOpenClaw();
  await bot.start();
  console.log("Bot is online!");
}

start().catch(console.error);
