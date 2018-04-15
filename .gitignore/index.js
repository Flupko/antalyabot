const Discord = require('discord.js')
const bot = new Discord.Client()

bot.on('ready', function () {
  bot.user.setGame("!help");
  console.log("Je suis connecté !")
})

bot.login(process.env.TOKEN);

bot.on('message', message => {
  if (message.content === 'Bonjour') {
    message.reply('Bonjour')
  }
})

bot.on('message', message => {
  if (message.content === 'Salut') {
    message.reply('Salut')
  }
})

bot.on('message', message => {
  if (message.content === 'Super bot') {
    message.reply('Ce bot a été creer par @Jysse')
  }
})
