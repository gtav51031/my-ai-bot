const { OpenClaw } = require('openclaw');

async function start() {
  const bot = new OpenClaw();
  await bot.start();
  console.log("OpenClaw is online on Render!");
}

start().catch(console.error);
