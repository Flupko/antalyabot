const Discord = require('discord.js')
const bot = new Discord.Client()

bot.on('ready', function () {
  bot.user.setGame("!help");
  console.log("Je suis connecté !")
})

bot.login(process.env.TOKEN);

bot.on('message', function(message) {

  if(message.content === 'Bonjour') {
      message.reply('Hey')
  }

  if(message.content === 'Salut') {
    message.reply('Salut')
}};
