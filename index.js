const { OpenClaw } = require('openclaw');

async function start() {
  try {
    const bot = new OpenClaw();
    await bot.start();
    console.log("OpenClaw is online and ready!");
  } catch (error) {
    console.error("Failed to start bot:", error);
  }
}

start();
