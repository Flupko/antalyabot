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
  
});

client.on("message", (message) => {
    if (message.content.startsWith("/kick")) {
        // Easy way to get member object though mentions.
        var member= message.mentions.members.first();
        // Kick
        member.kick().then((member) => {
            // Successmessage
            message.channel.send(":wave: " + member.displayName + " has been successfully kicked :point_right: ");
        }).catch(() => {
             // Failmessage
            message.channel.send("Access Denied");
        });
    }
});
