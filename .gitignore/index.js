const Discord = require('discord.js')
const bot = new Discord.Client()

bot.on('ready', function () {
  bot.user.setGame("!help");
  console.log("Je suis connecté !")
})

bot.login(process.env.TOKEN);

bot.on('message', function(message) {

  if(message.content === 'Salut') {
      message.reply('Bonjour')
  }

  if(message.content === 'Super bot') {
      message.channel.sendMessage("Merci, c'est Jysse , mon créateur qui m'a développé ! ;)")
  }

  if(message.content === 'Qui est la') {
      message.channel.sendMessage("MOIII")
  }
  
})

bot.on('message', message => {

  if (message.content.startsWith('!play')) {
    let voiceChannel = message.guild.channels
      .filter(function (channel) { return channel.type === 'voice' })
      .first()
    let args = message.content.split(' ')
    voiceChannel
      .join()
      .then(function (connection) {
        let stream = YoutubeStream(args[1])
        stream.on('error', function () {
          message.reply("Je n'ai pas réussi à lire cette vidéo :(")
          connection.disconnect()
        })
        connection
          .playStream(stream)
          .on('end', function () {
            connection.disconnect()
          })
      })
  }

});
