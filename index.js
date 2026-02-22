// استدعاء مباشر للملف الرئيسي لتجنب أخطاء المسارات في السحابة
const { OpenClaw } = require('openclaw/dist/index.js');

async function start() {
  try {
    const bot = new OpenClaw();
    await bot.start();
    console.log("OpenClaw is online and ready on Render!");
  } catch (error) {
    console.error("Failed to start bot:", error);
  }
}

start();
