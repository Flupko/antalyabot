const Discord = require('discord.js')
const bot = new Discord.Client()

bot.on('ready', function () {
  bot.user.setGame("AntalyaBot, !help");
  console.log("Je suis connecté !")
})

bot.login('NDM0NDEyOTg5NjE4MDYxMzMy.DbUBzA.olTkbv7cU5UVG72dGUIVRaI-7cA');
